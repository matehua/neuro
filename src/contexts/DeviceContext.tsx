import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouchDevice: boolean;
  hasHover: boolean;
  orientation: 'portrait' | 'landscape';
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'unknown';
  width: number;
  height: number;
}

interface DeviceContextType {
  deviceInfo: DeviceInfo;
  isLoaded: boolean;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

interface DeviceProviderProps {
  children: ReactNode;
}

/**
 * Device Detection Context Provider
 * Provides optimized device detection with memoization and reduced re-renders
 */
export function DeviceProvider({ children }: DeviceProviderProps) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    hasHover: false,
    orientation: 'portrait',
    screenSize: 'unknown',
    width: 0,
    height: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Memoized device detection function
  const detectDevice = useMemo(() => {
    let timeoutId: NodeJS.Timeout;
    
    return () => {
      // Debounce rapid resize events
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window === 'undefined') return;

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
        let screenSize: DeviceInfo['screenSize'] = 'unknown';
        if (width < 475) screenSize = 'xs';
        else if (width < 640) screenSize = 'sm';
        else if (width < 768) screenSize = 'md';
        else if (width < 1024) screenSize = 'lg';
        else if (width < 1280) screenSize = 'xl';
        else screenSize = '2xl';

        const newDeviceInfo: DeviceInfo = {
          isMobile,
          isTablet,
          isDesktop,
          isTouchDevice,
          hasHover,
          orientation,
          screenSize,
          width,
          height,
        };

        // Only update if values have actually changed
        setDeviceInfo(prevInfo => {
          const hasChanged = Object.keys(newDeviceInfo).some(
            key => prevInfo[key as keyof DeviceInfo] !== newDeviceInfo[key as keyof DeviceInfo]
          );
          
          return hasChanged ? newDeviceInfo : prevInfo;
        });

        if (!isLoaded) {
          setIsLoaded(true);
        }
      }, 100); // 100ms debounce
    };
  }, [isLoaded]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial detection
    detectDevice();

    // Listen for resize and orientation changes
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, [detectDevice]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    deviceInfo,
    isLoaded,
  }), [deviceInfo, isLoaded]);

  return (
    <DeviceContext.Provider value={contextValue}>
      {children}
    </DeviceContext.Provider>
  );
}

/**
 * Hook to access device information
 * Returns memoized device info to prevent unnecessary re-renders
 */
export function useDeviceDetection(): DeviceInfo {
  const context = useContext(DeviceContext);
  
  if (context === undefined) {
    throw new Error('useDeviceDetection must be used within a DeviceProvider');
  }

  return context.deviceInfo;
}

/**
 * Hook to check if device detection is loaded
 * Useful for preventing hydration mismatches in SSR
 */
export function useDeviceLoaded(): boolean {
  const context = useContext(DeviceContext);
  
  if (context === undefined) {
    throw new Error('useDeviceLoaded must be used within a DeviceProvider');
  }

  return context.isLoaded;
}

/**
 * Higher-order component for device-specific rendering
 */
export function withDeviceDetection<P extends object>(
  Component: React.ComponentType<P & { deviceInfo: DeviceInfo }>
) {
  const WrappedComponent = (props: P) => {
    const deviceInfo = useDeviceDetection();
    
    return <Component {...props} deviceInfo={deviceInfo} />;
  };

  WrappedComponent.displayName = `withDeviceDetection(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}

/**
 * Utility hook for mobile-only detection (optimized for common use case)
 */
export function useIsMobile(): boolean {
  const { isMobile } = useDeviceDetection();
  return isMobile;
}

/**
 * Utility hook for responsive breakpoint detection
 */
export function useBreakpoint(): DeviceInfo['screenSize'] {
  const { screenSize } = useDeviceDetection();
  return screenSize;
}
