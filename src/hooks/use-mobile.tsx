import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Hook to detect if the current viewport is mobile-sized
 * Uses matchMedia for better performance and handles SSR gracefully
 * @returns boolean indicating if the viewport is mobile-sized
 */
export function useIsMobile() {
  // Default to undefined for SSR compatibility
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window === 'undefined') return;

    // Use matchMedia for better performance and accuracy
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Handler function for media query changes
    const onChange = () => {
      setIsMobile(mql.matches);
    };

    // Set initial value based on media query match
    setIsMobile(mql.matches);

    // Add event listener with browser compatibility handling
    try {
      // Modern browsers
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } catch (e) {
      // Fallback for older browsers
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []);

  // Return false during SSR, true/false based on viewport size in browser
  return typeof isMobile === 'undefined' ? false : isMobile;
}
