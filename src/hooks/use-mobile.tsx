import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

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

/**
 * Enhanced mobile detection hook with device type and capabilities
 * @returns object with device information and capabilities
 */
export function useDeviceDetection() {
  const [deviceInfo, setDeviceInfo] = React.useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    hasHover: false,
    orientation: 'portrait' as 'portrait' | 'landscape',
    screenSize: 'unknown' as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'unknown'
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determine device type
      const isMobile = width < MOBILE_BREAKPOINT;
      const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
      const isDesktop = width >= TABLET_BREAKPOINT;

      // Detect touch capability
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Detect hover capability
      const hasHover = window.matchMedia('(hover: hover)').matches;

      // Determine orientation
      const orientation = height > width ? 'portrait' : 'landscape';

      // Determine screen size category
      let screenSize: typeof deviceInfo.screenSize = 'unknown';
      if (width < 475) screenSize = 'xs';
      else if (width < 640) screenSize = 'sm';
      else if (width < 768) screenSize = 'md';
      else if (width < 1024) screenSize = 'lg';
      else if (width < 1280) screenSize = 'xl';
      else screenSize = '2xl';

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouchDevice,
        hasHover,
        orientation,
        screenSize
      });
    };

    // Initial detection
    updateDeviceInfo();

    // Listen for resize and orientation changes
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

/**
 * Hook for detecting swipe gestures on mobile devices
 * @param onSwipeLeft - Callback for left swipe
 * @param onSwipeRight - Callback for right swipe
 * @param onSwipeUp - Callback for up swipe
 * @param onSwipeDown - Callback for down swipe
 * @param threshold - Minimum distance for swipe detection (default: 50px)
 */
export function useSwipeGesture(
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  onSwipeUp?: () => void,
  onSwipeDown?: () => void,
  threshold: number = 50
) {
  const touchStart = React.useRef<{ x: number; y: number } | null>(null);
  const touchEnd = React.useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = React.useCallback((e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  }, []);

  const handleTouchMove = React.useCallback((e: TouchEvent) => {
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  }, []);

  const handleTouchEnd = React.useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return;

    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const isLeftSwipe = distanceX > threshold;
    const isRightSwipe = distanceX < -threshold;
    const isUpSwipe = distanceY > threshold;
    const isDownSwipe = distanceY < -threshold;

    // Determine if horizontal or vertical swipe is more prominent
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      // Horizontal swipe
      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft();
      } else if (isRightSwipe && onSwipeRight) {
        onSwipeRight();
      }
    } else {
      // Vertical swipe
      if (isUpSwipe && onSwipeUp) {
        onSwipeUp();
      } else if (isDownSwipe && onSwipeDown) {
        onSwipeDown();
      }
    }
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold]);

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };
}
