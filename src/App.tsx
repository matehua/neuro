import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ErrorBoundary from '@/components/ErrorBoundary';
import ScreenReaderAnnouncer from '@/components/ScreenReaderAnnouncer';
import { DeviceProvider } from '@/contexts/DeviceContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getAllRoutes } from '@/routes/routeConfig';

// Define route type
interface RouteConfig {
  path: string;
  element: React.ReactElement;
}

// Create a react-query client
const queryClient = new QueryClient();

// Component to handle route changes for accessibility
const RouteChangeAnnouncer = () => {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // When the route changes, announce it to screen readers
    const path = location?.pathname;
    const routeName = path === '/' ? 'Home' : path?.split('/').filter(Boolean).join(' ');
    setMessage(`Navigated to ${routeName} page`);
  }, [location]);

  return <ScreenReaderAnnouncer message={message} />;
};

// Wrapper for components that need to access the router context
const AppContent = () => {
  const routes = getAllRoutes();

  return (<DeviceProvider>
      <LanguageProvider>
        {/* Accessibility enhancements */}
        <div id="skip-link-target" tabIndex={-1} />
        <RouteChangeAnnouncer />

        <Toaster />
        <Routes>
          {routes?.map((route: RouteConfig, index: number) => (
            <Route
              key={`${route?.path}-${index}`}
              path={route?.path}
              element={route?.element}
            />
          ))}
        </Routes>
      </LanguageProvider>
    </DeviceProvider>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
