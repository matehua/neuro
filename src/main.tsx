import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import App from './App.tsx';
import './index.css';

// Error boundary component for catching and displaying runtime errors
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean, error: Error | null, errorInfo: ErrorInfo | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to an error reporting service
    console.error('Application error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full p-6 bg-card rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h1>
            <p className="mb-4 text-muted-foreground">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="bg-muted p-4 rounded-md overflow-auto max-h-[200px] mb-4">
              <p className="font-mono text-sm">{this.state.error?.toString()}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring
const reportWebVitals = () => {
  if ('performance' in window && 'getEntriesByType' in performance) {
    const metrics = performance.getEntriesByType('navigation');
    if (metrics.length > 0) {
      const navigationEntry = metrics[0] as PerformanceNavigationTiming;
      console.log('Page load time:', navigationEntry.loadEventEnd - navigationEntry.startTime);
    }
  }
};

// Initialize the app
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// Report performance metrics
reportWebVitals();
