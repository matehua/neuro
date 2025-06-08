import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { initializePerformanceMonitoring } from './lib/performance';
import { initializeAccessibility } from './lib/accessibility';

// Initialize performance and accessibility monitoring
function initializeApp() {
  // Initialize performance monitoring
  initializePerformanceMonitoring();

  // Initialize accessibility features
  initializeAccessibility();

  // Report web vitals
  reportWebVitals();
}

// Enhanced performance monitoring
const reportWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Core Web Vitals monitoring
  if ('performance' in window) {
    // Navigation timing
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0] as PerformanceNavigationTiming;
      const metrics = {
        'DNS Lookup': nav.domainLookupEnd - nav.domainLookupStart,
        'TCP Connection': nav.connectEnd - nav.connectStart,
        'Request': nav.responseStart - nav.requestStart,
        'Response': nav.responseEnd - nav.responseStart,
        'DOM Processing': nav.domComplete - nav.domLoading,
        'Total Load Time': nav.loadEventEnd - nav.navigationStart
      };

      if (process.env.NODE_ENV === 'development') {
        console.table(metrics);
      }
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('FID:', entry.duration);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }
  }
};

// Initialize the app
const root = createRoot(document.getElementById("root")!);

// Initialize monitoring before rendering
initializeApp();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
