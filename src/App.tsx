import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { getAllRoutes } from "@/routes/routeConfig";
import ScreenReaderAnnouncer from "@/components/ScreenReaderAnnouncer";

// Create a react-query client
const queryClient = new QueryClient();

// Component to handle route changes for accessibility
const RouteChangeAnnouncer = () => {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // When the route changes, announce it to screen readers
    const path = location.pathname;
    const routeName = path === '/' ? 'Home' : path.split('/').filter(Boolean).join(' ');
    setMessage(`Navigated to ${routeName} page`);
  }, [location]);

  return <ScreenReaderAnnouncer message={message} />;
};

// Wrapper for components that need to access the router context
const AppContent = () => {
  const routes = getAllRoutes();

  return (
    <LanguageProvider>
      {/* Accessibility enhancements */}
      <div id="skip-link-target" tabIndex={-1} />
      <RouteChangeAnnouncer />

      <Toaster />
      <Sonner />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={`${route.path}-${index}`}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </LanguageProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
