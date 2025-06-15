import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { initializePerformanceMonitoring } from './lib/performance';
import { initializeAccessibility } from './lib/accessibility';
import { initialiseMobileOptimisations } from './lib/mobile-optimization';
import { initializeSecurity } from './lib/security';
import { initializeEnvironment } from './lib/env-validation';

// Initialize all app features for production readiness
function initializeApp() {
  // Initialize environment validation first
  initializeEnvironment();

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
}

// Initialize the app
const root = createRoot(document.getElementById("root")!);

// Initialize monitoring before rendering
initializeApp();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
