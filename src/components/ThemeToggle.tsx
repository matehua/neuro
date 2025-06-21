import React, { useState, useEffect, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Button } from '@/components/ui/button';


const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isDark]);

  return (
    <ErrorBoundary>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full w-10 h-10 transition-all duration-300 hover:bg-muted"
        aria-pressed={isDark}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        onKeyDown={useCallback((e) => {
          // Ensure Space and Enter keys trigger the toggle
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggleTheme();
          }
        }, [toggleTheme])}
      >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-500 rotate-0" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-500 rotate-0" aria-hidden="true" />
      )}
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
    </Button>
    </ErrorBoundary>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
