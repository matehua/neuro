import React, { Suspense, useCallback, useEffect, ComponentType } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

/**
 * Options for creating lazy components
 */
interface LazyComponentOptions {
  fallback?: ComponentType<Record<string, never>>;
  errorFallback?: React.ReactNode;
  retryAttempts?: number;
  retryDelay?: number;
}

/**
 * Creates a lazy-loaded component with error boundary and retry logic
 */
export function createLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunc: () => Promise<{ default: T }>,
  options: LazyComponentOptions = {}
): ComponentType<React.ComponentProps<T>> {
  const {
    fallback = () => React.createElement('div', { className: 'animate-pulse bg-muted h-32 rounded' }),
    errorFallback = React.createElement('div', { className: 'text-center p-4 text-muted-foreground' }, 'Failed to load component'),
    retryAttempts = 3,
    retryDelay = 1000
  } = options;

  const LazyComponent = React.lazy(async () => {
    let attempts = 0;
    
    const loadWithRetry = async (): Promise<{ default: T }> => {
      try {
        return await importFunc();
      } catch (error) {
        attempts++;
        if (attempts < retryAttempts) {
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempts) * retryDelay));
          return loadWithRetry();
        }
        throw error;
      }
    };
    
    return loadWithRetry();
  });

  return (props: React.ComponentProps<T>) => (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={React.createElement(fallback)}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}

/**
 * Preload function for critical routes
 */
export function preloadRoute(importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>) {
  // Only preload in browser environment
  if (typeof window !== 'undefined') {
    if ((window as Window & { requestIdleCallback?: (callback: () => void) => void }).requestIdleCallback) {
      (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(() => {
        importFunc().catch(() => {
          // Silently fail preloading
        });
      });
    } else {
      setTimeout(() => {
        importFunc().catch(() => {
          // Silently fail preloading
        });
      }, 100);
    }
  }
}

/**
 * Route loader registry for organized component loading
 */
export class RouteLoaderRegistry {
  private static instance: RouteLoaderRegistry;
  private loaders = new Map<string, () => Promise<{ default: ComponentType<Record<string, unknown>> }>>();
  private preloadedRoutes = new Set<string>();

  static getInstance(): RouteLoaderRegistry {
    if (!RouteLoaderRegistry.instance) {
      RouteLoaderRegistry.instance = new RouteLoaderRegistry();
    }
    return RouteLoaderRegistry.instance;
  }

  /**
   * Register a route loader
   */
  register(routePath: string, loader: () => Promise<{ default: ComponentType<Record<string, unknown>> }>) {
    this.loaders.set(routePath, loader);
  }

  /**
   * Get a lazy component for a route
   */
  getLazyComponent(routePath: string, options?: Parameters<typeof createLazyComponent>[1]) {
    const loader = this.loaders.get(routePath);
    if (!loader) {
      throw new Error(`No loader registered for route: ${routePath}`);
    }
    return createLazyComponent(loader, options);
  }

  /**
   * Preload a specific route
   */
  preload(routePath: string) {
    if (this.preloadedRoutes.has(routePath)) {
      return; // Already preloaded
    }

    const loader = this.loaders.get(routePath);
    if (loader) {
      preloadRoute(loader);
      this.preloadedRoutes.add(routePath);
    }
  }

  /**
   * Preload multiple routes
   */
  preloadRoutes(routePaths: string[]) {
    routePaths.forEach(path => this.preload(path));
  }

  /**
   * Get all registered routes
   */
  getRegisteredRoutes(): string[] {
    return Array.from(this.loaders.keys());
  }

  /**
   * Check if a route is registered
   */
  hasRoute(routePath: string): boolean {
    return this.loaders.has(routePath);
  }
}

/**
 * Utility for batch registering routes
 */
export function registerRoutes(routes: Record<string, () => Promise<{ default: ComponentType<Record<string, unknown>> }>>) {
  const registry = RouteLoaderRegistry.getInstance();
  Object.entries(routes).forEach(([path, loader]) => {
    registry.register(path, loader);
  });
}

/**
 * Hook for preloading routes on hover/focus
 */
export function useRoutePreloader() {
  const registry = RouteLoaderRegistry.getInstance();

  const preloadOnHover = React.useCallback((routePath: string) => {
    return {
      onMouseEnter: () => registry.preload(routePath),
      onFocus: () => registry.preload(routePath)
    };
  }, [registry]);

  return { preloadOnHover };
}

/**
 * Component for preloading critical routes
 */
export function RoutePreloader({ routes }: { routes: string[] }) {
  React.useEffect(() => {
    const registry = RouteLoaderRegistry.getInstance();
    registry.preloadRoutes(routes);
  }, [routes]);

  return null;
}

/**
 * Performance monitoring for route loading
 */
export class RouteLoadingMonitor {
  private static loadTimes = new Map<string, number>();
  private static loadErrors = new Map<string, number>();

  static recordLoadTime(routePath: string, loadTime: number) {
    this.loadTimes.set(routePath, loadTime);
  }

  static recordLoadError(routePath: string) {
    const currentErrors = this.loadErrors.get(routePath) || 0;
    this.loadErrors.set(routePath, currentErrors + 1);
  }

  static getLoadTime(routePath: string): number | undefined {
    return this.loadTimes.get(routePath);
  }

  static getErrorCount(routePath: string): number {
    return this.loadErrors.get(routePath) || 0;
  }

  static getPerformanceReport() {
    return {
      loadTimes: Object.fromEntries(this.loadTimes),
      errorCounts: Object.fromEntries(this.loadErrors),
      averageLoadTime: Array.from(this.loadTimes.values()).reduce((sum, time) => sum + time, 0) / this.loadTimes.size || 0,
      totalErrors: Array.from(this.loadErrors.values()).reduce((sum, count) => sum + count, 0)
    };
  }
}