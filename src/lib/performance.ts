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
 * Performance monitoring configuration
 */
interface PerformanceConfig {
  enableResourceTiming: boolean;
  enableNavigationTiming: boolean;
  enableUserTiming: boolean;
  enableLongTaskTiming: boolean;
  enableLayoutShiftTiming: boolean;
  enableLargestContentfulPaint: boolean;
  enableFirstInputDelay: boolean;
  maxMetrics: number;
}

/**
 * Performance monitoring singleton class
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, PerformanceMetrics> = new Map();
  private observers: PerformanceObserver[] = [];
  private config: PerformanceConfig;
  private initialized = false;
  private initializing = false;

  private constructor() {
    this.config = {
      enableResourceTiming: true,
      enableNavigationTiming: true,
      enableUserTiming: true,
      enableLongTaskTiming: true,
      enableLayoutShiftTiming: true,
      enableLargestContentfulPaint: true,
      enableFirstInputDelay: true,
      maxMetrics: 1000
    };
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize performance monitoring
   */
  initialize(): void {
    if (this.initialized || this.initializing) {
      return;
    }

    this.initializing = true;

    try {
      if (typeof window === 'undefined' || !('performance' in window)) {
        this.initializing = false;
        return;
      }

      // Initialize observers
      this.initializeObservers();
      
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
   * Initialize performance observers
   */
  private initializeObservers(): void {
    if (!('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Navigation timing observer
      if (this.config.enableNavigationTiming) {
        const navObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'navigation') {
              this.logNavigationMetrics(entry as PerformanceNavigationTiming);
            }
          });
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      }

      // Resource timing observer
      if (this.config.enableResourceTiming) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              this.logResourceMetrics(entry as PerformanceResourceTiming);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      }
    } catch (error) {
      // Silently handle observer initialization errors
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
    _name: string,
    _startTime: number,
    _endTime: number,
    _metadata?: Record<string, unknown>
  ): void {
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
      'DOM Processing': entry.domComplete - entry.domContentLoadedEventStart,
      'Load Complete': entry.loadEventEnd - entry.loadEventStart,
      'Total Load Time': entry.loadEventEnd - entry.fetchStart
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
    return this.observers?.length || 0;
  }

  /**
   * Internal cleanup method for observers only
   */
  private cleanupObservers(): void {
    if (this.observers?.length > 0) {
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
  }, [getMonitor, name, ...dependencies]);

  return React.useMemo(() => ({
    startMeasure: (metricName: string) => getMonitor().startMeasure(metricName),
    endMeasure: (metricName: string) => getMonitor().endMeasure(metricName)
  }), [getMonitor]);
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
