import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { initializePerformanceMonitoring } from './lib/performance';
import { initializeAccessibility } from './lib/accessibility';
import { initialiseMobileOptimisations } from './lib/mobile-optimization';
import { initializeSecurity } from './lib/security';

// Initialize all app features for production readiness
function initializeApp() {
  // Initialize performance monitoring
  initializePerformanceMonitoring();

  // Initialize accessibility features
  initializeAccessibility();

  // Initialise mobile optimisations
  initialiseMobileOptimisations();

  // Initialize security measures
  initializeSecurity({
    enableCSP: true,
    enableXSSProtection: true,
    enableClickjacking: true,
    logSecurityEvents: process.env.NODE_ENV === 'development'
  });

  // Report web vitals
  reportWebVitals();
}

// Enhanced performance monitoring - simplified to avoid conflicts with PerformanceMonitor
const reportWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Basic navigation timing only (PerformanceMonitor handles the rest)
  if ('performance' in window) {
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && process.env.NODE_ENV === 'development') {
      const nav = navigationEntries[0] as PerformanceNavigationTiming;
      const metrics = {
        'DNS Lookup': nav.domainLookupEnd - nav.domainLookupStart,
        'TCP Connection': nav.connectEnd - nav.connectStart,
        'Request': nav.responseStart - nav.requestStart,
        'Response': nav.responseEnd - nav.responseStart,
        'DOM Processing': nav.domComplete - nav.domLoading,
        'Total Load Time': nav.loadEventEnd - nav.navigationStart
      };
      console.table(metrics);
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
