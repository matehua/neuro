import React, {  Component, ErrorInfo, ReactNode , useCallback } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

  /**
 * Error Boundary Component for handling React errors gracefully
 * Provides user-friendly error messages and recovery options
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Update state with error details
    this.setState({
      error,
      errorInfo
    });

    // Production error logging
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Create error report
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: 'anonymous', // Could be replaced with actual user ID
    };

    // Send to error reporting service (implement based on your service)
    try {
      // Example: Sentry, LogRocket, or custom endpoint
      if (import.meta.env.VITE_SENTRY_DSN) {
        // Sentry integration would go here
        // Sentry.captureException(error, { contexts: { react: errorInfo } });
      }
      // Custom error endpoint
      if (import.meta.env.VITE_ERROR_REPORTING_ENDPOINT) {
        fetch(import.meta.env.VITE_ERROR_REPORTING_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(errorReport)
        }).catch(() => {
          // Silently fail if error reporting fails
        });
      }
    } catch (reportingError) {
      // Silently fail if error reporting fails
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleRetry = () => {
    // Clear error state and attempt recovery
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });

    // Clear any cached data that might be causing issues
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          if (name.includes('runtime') || name.includes('precache')) {
            caches.delete(name);
          }
        });
      });
    }
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="text-xl">Something went wrong</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 p-3 bg-muted rounded-md">
                  <summary className="cursor-pointer font-medium text-sm">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 text-xs font-mono">
                    <p className="text-destructive font-semibold">
                      {this.state.error.name}: {this.state.error.message}
                    </p>
                    <pre className="mt-2 whitespace-pre-wrap text-muted-foreground">
                      {this.state.error.stack}
                    </pre>
                    {this.state.errorInfo && (
                      <pre className="mt-2 whitespace-pre-wrap text-muted-foreground">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              <div className="flex flex-col gap-2">
                <Button onClick={this.handleRetry} className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button onClick={this.handleReload} variant="outline" className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reload Page
                </Button>
                <Button onClick={this.handleGoHome} variant="ghost" className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  If this problem persists, please{' '}
                  <a 
                    href="/contact" 
                    className="text-primary hover:underline"
                    onClick={(e: React.FormEvent) => {
                      e.preventDefault();
                      window.location.href = '/contact';
                    }}
                  >
                    contact our support team
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Higher-order component for wrapping components with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}

/**
 * Hook for error boundary functionality in functional components
 */
export function useErrorHandler() {
  return (_error: Error, _errorInfo?: ErrorInfo) => {
    // In a real application, you might want to log this to an error service
    // Example: logErrorToService(error, errorInfo);

    // You could also trigger a state update to show an error UI
    // This is a simplified version - in practice you might want to use
    // a more sophisticated error handling strategy
  };
}

export default ErrorBoundary;
