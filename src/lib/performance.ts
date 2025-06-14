
// Performance monitoring utilities for miNEURO website
// Tracks page load times, user interactions, and optimization metrics

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoadedTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    pageLoadTime: 0,
    domContentLoadedTime: 0
  };

  constructor() {
    this.initializePerformanceObserver();
    this.trackNavigationTiming();
  }

  private initializePerformanceObserver(): void {
    if ('PerformanceObserver' in window) {
      // Track paint metrics
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        }
      });

      try {
        paintObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('Paint observer not supported');
      }

      // Track layout shift
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            this.metrics.cumulativeLayoutShift = (this.metrics.cumulativeLayoutShift || 0) + (entry as any).value;
          }
        }
      });

      try {
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('Layout shift observer not supported');
      }

      // Track largest contentful paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          this.metrics.largestContentfulPaint = lastEntry.startTime;
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // Track first input delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
        }
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }
    }
  }

  private trackNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation) {
            this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
            this.metrics.domContentLoadedTime = navigation.domContentLoadedEventEnd - navigation.fetchStart;
            
            this.reportMetrics();
          }
        }, 100);
      });
    }
  }

  private reportMetrics(): void {
    console.log('Performance Metrics:', this.metrics);
    
    // Send to analytics if configured
    if (window.gtag) {
      window.gtag('event', 'page_load_time', {
        value: Math.round(this.metrics.pageLoadTime),
        custom_parameter: 'performance_monitoring'
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

// Initialize performance monitoring
let performanceMonitor: PerformanceMonitor | null = null;

export const initializePerformanceMonitoring = (): void => {
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
};

export const getPerformanceMetrics = (): PerformanceMetrics | null => {
  return performanceMonitor ? performanceMonitor.getMetrics() : null;
};

// Resource loading optimization
export const preloadCriticalResources = (): void => {
  const criticalImages = [
    '/images/hero-bg.jpg',
    '/images/doctor-profile.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Memory usage monitoring
export const monitorMemoryUsage = (): void => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('Memory Usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576),
      total: Math.round(memory.totalJSHeapSize / 1048576),
      limit: Math.round(memory.jsHeapSizeLimit / 1048576)
    });
  }
};

// Export for global use
export { PerformanceMonitor };
