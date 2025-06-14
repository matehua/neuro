
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Track initial page load performance
const perfObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      const navigationEntry = entry as PerformanceNavigationTiming;
      // Use modern performance timing properties
      const loadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
      const domContentLoadedTime = navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart;
      console.log('Page Load Time:', loadTime);
      console.log('DOM Content Loaded:', domContentLoadedTime);
    }
  }
});

perfObserver.observe({ entryTypes: ['navigation'] });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
