
// Performance monitoring utilities for web vitals and user experience metrics

interface PerformanceEntryWithLayoutShift extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

interface FirstInputPerformanceEntry extends PerformanceEntry {
  processingStart: number;
}

interface WindowWithGtag extends Window {
  gtag?: (...args: any[]) => void;
}

// Core Web Vitals thresholds
const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
};

// Cumulative Layout Shift tracking
let clsValue = 0;
let clsEntries: PerformanceEntryWithLayoutShift[] = [];

// Track CLS
const trackCLS = () => {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntryWithLayoutShift[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0;
          clsEntries.push(entry);
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.warn('CLS tracking not supported');
  }
};

// Track Largest Contentful Paint
const trackLCP = () => {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if available
      if ((window as WindowWithGtag).gtag) {
        (window as WindowWithGtag).gtag!('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Web Vitals'
        });
      }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.warn('LCP tracking not supported');
  }
};

// Track First Input Delay
const trackFID = () => {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as FirstInputPerformanceEntry;
        const fid = fidEntry.processingStart - fidEntry.startTime;
        console.log('FID:', fid);
        
        // Send to analytics if available
        if ((window as WindowWithGtag).gtag) {
          (window as WindowWithGtag).gtag!('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(fid),
            event_category: 'Web Vitals'
          });
        }
      }
    });

    observer.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.warn('FID tracking not supported');
  }
};

// Resource loading performance
const trackResourcePerformance = () => {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Track slow resources
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration);
          }
        }
      }
    });

    observer.observe({ type: 'resource', buffered: true });
  } catch (e) {
    console.warn('Resource performance tracking not supported');
  }
};

// Memory usage tracking
const trackMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('Memory usage:', {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    });
  }
};

// Page load timing
const trackPageLoad = () => {
  window.addEventListener('load', () => {
    // Wait for all resources to load
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics = {
        ttfb: perfData.responseStart - perfData.fetchStart,
        domLoad: perfData.domContentLoadedEventEnd - perfData.fetchStart,
        windowLoad: perfData.loadEventEnd - perfData.fetchStart,
        cls: clsValue
      };
      
      console.log('Page Performance Metrics:', metrics);
      
      // Send to analytics if available
      if ((window as WindowWithGtag).gtag) {
        (window as WindowWithGtag).gtag!('event', 'page_performance', {
          ttfb: metrics.ttfb,
          dom_load: metrics.domLoad,
          window_load: metrics.windowLoad,
          cls: metrics.cls
        });
      }
    }, 0);
  });
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  console.log('Initializing performance monitoring...');
  
  trackCLS();
  trackLCP();
  trackFID();
  trackResourcePerformance();
  trackPageLoad();
  
  // Track memory usage periodically in development
  if (import.meta.env.DEV) {
    setInterval(trackMemoryUsage, 30000);
  }
};

// Export Web Vitals thresholds for use in other components
export { WEB_VITALS_THRESHOLDS };
