/**
 * Performance Monitoring and Optimisation Utilities
 * Provides tools for measuring and improving application performance
 */

import React from 'react';

/**
 * Performance metrics interface
 */
export interface PerformanceMetrics {
  name: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  metadata?: Record<string, unknown>;
}

/**
 * Performance Monitor class for tracking application performance
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, PerformanceMetrics> = new Map();
  private observers: PerformanceObserver[] = [];
  private initialized: boolean = false;
  private initializing: boolean = false;

  private constructor() {
    // Don't initialize observers in constructor to prevent double initialization
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize the performance monitoring (should only be called once from main.tsx)
   */
  public initialize(): void {
    this.initializeObservers();
  }

  /**
   * Initialize performance observers with atomic initialization
   */
  private initializeObservers(): void {
    // CRITICAL: Check initialization status FIRST to prevent race conditions
    if (this.initialized || this.initializing) {
      return;
    }

    // Set initializing flag atomically to prevent race conditions
    this.initializing = true;

    // Environment checks after atomic flag set
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      this.initializing = false; // Reset flag on failure
      return;
    }

    // Clean up any existing observers before creating new ones
    this.cleanupObservers();

    try {
      // Observe navigation timing
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.logNavigationMetrics(entry as PerformanceNavigationTiming);
          }
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);

      // Observe resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            this.logResourceMetrics(entry as PerformanceResourceTiming);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);

      // Observe largest contentful paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.logMetric('LCP', lastEntry.startTime, lastEntry.startTime, {
          element: (lastEntry as PerformanceEntry & { element?: { tagName: string } }).element?.tagName,
          url: (lastEntry as PerformanceEntry & { url?: string }).url
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // Observe first input delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.logMetric('FID', entry.startTime, entry.startTime + entry.duration, {
            processingStart: (entry as PerformanceEntry & { processingStart?: number }).processingStart,
            processingEnd: (entry as PerformanceEntry & { processingEnd?: number }).processingEnd
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Mark as initialized only after successful setup
      this.initialized = true;
      this.initializing = false;

    } catch (error) {
      // Reset flags on failure and cleanup any partial observers
      this.initializing = false;
      this.initialized = false;
      this.cleanupObservers();
    }
  }

  /**
   * Start measuring a performance metric
   */
  startMeasure(name: string, metadata?: Record<string, unknown>): void {
    const startTime = performance.now();
    this.metrics.set(name, {
      name,
      startTime,
      metadata
    });
  }

  /**
   * End measuring a performance metric
   */
  endMeasure(name: string): PerformanceMetrics | null {
    const metric = this.metrics.get(name);
    if (!metric) {
      console.warn(`Performance metric "${name}" not found`);
      return null;
    }

    const endTime = performance.now();
    const duration = endTime - metric.startTime;

    const completedMetric: PerformanceMetrics = {
      ...metric,
      endTime,
      duration
    };

    this.metrics.set(name, completedMetric);
    this.logMetric(name, metric.startTime, endTime, metric.metadata);

    return completedMetric;
  }

  /**
   * Log a performance metric
   */
  private logMetric(
    name: string,
    startTime: number,
    endTime: number,
    metadata?: Record<string, unknown>
  ): void {
    const duration = endTime - startTime;

    // In production, send this to an analytics service
    // Example: sendToAnalytics({ name, duration, metadata });
  }

  /**
   * Log navigation metrics
   */
  private logNavigationMetrics(entry: PerformanceNavigationTiming): void {
    const metrics = {
      'DNS Lookup': entry.domainLookupEnd - entry.domainLookupStart,
      'TCP Connection': entry.connectEnd - entry.connectStart,
      'TLS Handshake': entry.secureConnectionStart > 0 ? entry.connectEnd - entry.secureConnectionStart : 0,
      'Request': entry.responseStart - entry.requestStart,
      'Response': entry.responseEnd - entry.responseStart,
      'DOM Processing': entry.domComplete - entry.domLoading,
      'Load Complete': entry.loadEventEnd - entry.loadEventStart,
      'Total Load Time': entry.loadEventEnd - entry.navigationStart
    };

    Object.entries(metrics).forEach(([name, duration]) => {
      if (duration > 0) {
        this.logMetric(`Navigation: ${name}`, 0, duration);
      }
    });
  }

  /**
   * Log resource metrics
   */
  private logResourceMetrics(entry: PerformanceResourceTiming): void {
    const duration = entry.responseEnd - entry.startTime;
    const resourceType = this.getResourceType(entry.name);
    
    this.logMetric(`Resource: ${resourceType}`, entry.startTime, entry.responseEnd, {
      url: entry.name,
      size: entry.transferSize,
      cached: entry.transferSize === 0 && entry.decodedBodySize > 0
    });
  }

  /**
   * Get resource type from URL
   */
  private getResourceType(url: string): string {
    if (url.includes('.css')) return 'CSS';
    if (url.includes('.js')) return 'JavaScript';
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) return 'Image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/i)) return 'Font';
    return 'Other';
  }

  /**
   * Get all metrics
   */
  getMetrics(): PerformanceMetrics[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
  }

  /**
   * Check if performance monitoring is initialized
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Check if performance monitoring is currently initializing
   */
  isInitializing(): boolean {
    return this.initializing;
  }

  /**
   * Get number of active observers
   */
  getObserverCount(): number {
    return this.observers.length;
  }

  /**
   * Internal cleanup method for observers only
   */
  private cleanupObservers(): void {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.disconnect());
      this.observers = [];
    }
  }

  /**
   * Public cleanup method for complete reset
   */
  cleanup(): void {
    this.cleanupObservers();
    this.initialized = false;
    this.initializing = false;
  }
}

/**
 * Measure component render time
 */
export function measureComponentRender<T extends Record<string, unknown>>(
  Component: React.ComponentType<T>,
  componentName?: string
): React.ComponentType<T> {
  const name = componentName || Component.displayName || Component.name || 'Component';

  return function MeasuredComponent(props: T) {
    React.useEffect(() => {
      // Lazy access to monitor to avoid race condition
      const monitor = PerformanceMonitor.getInstance();
      monitor.startMeasure(`${name} Mount`);
      return () => {
        monitor.endMeasure(`${name} Mount`);
      };
    }, []);

    React.useEffect(() => {
      // Lazy access to monitor to avoid race condition
      const monitor = PerformanceMonitor.getInstance();
      monitor.startMeasure(`${name} Render`);
      monitor.endMeasure(`${name} Render`);
    });

    return React.createElement(Component, props);
  };
}

/**
 * Hook for measuring custom performance metrics
 */
export function usePerformanceMetric(name: string, dependencies: React.DependencyList = []) {
  // Use lazy initialization to avoid race condition
  const getMonitor = React.useCallback(() => PerformanceMonitor.getInstance(), []);

  React.useEffect(() => {
    const monitor = getMonitor();
    monitor.startMeasure(name);
    return () => {
      monitor.endMeasure(name);
    };
  }, [getMonitor, name, dependencies]);

  return React.useMemo(() => ({
    startMeasure: (metricName: string) => getMonitor().startMeasure(metricName),
    endMeasure: (metricName: string) => getMonitor().endMeasure(metricName)
  }), [getMonitor]);
}

/**
 * Debounce function for performance optimisation
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

/**
 * Throttle function for performance optimisation
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImage(
  img: HTMLImageElement,
  src: string,
  options?: IntersectionObserverInit
): () => void {
  if (!('IntersectionObserver' in window)) {
    img.src = src;
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  }, options);

  observer.observe(img);

  return () => observer.unobserve(img);
}

/**
 * Initialize performance monitoring (should only be called once from main.tsx)
 */
export function initializePerformanceMonitoring(): PerformanceMonitor {
  const monitor = PerformanceMonitor.getInstance();
  monitor.initialize();
  return monitor;
}

/**
 * Get the performance monitor instance (only after initialization)
 */
export function getPerformanceMonitor(): PerformanceMonitor {
  return PerformanceMonitor.getInstance();
}
