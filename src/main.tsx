import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import { initialiseMobileOptimisations } from './lib/mobile-optimization';
import { initializeAccessibility } from './lib/accessibility';
import { initializeEnvironment } from './lib/env-validation';
import { initializePerformanceMonitoring } from './lib/performance';
import { initializeSecurity } from './lib/security';

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
