
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { getAllRoutes } from "./routes/routeConfig";

// Create a react-query client
const queryClient = new QueryClient();

const App = () => {
  // Get all routes from the configuration
  const routes = getAllRoutes();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <LanguageProvider>
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
