/**
 * Comprehensive testing utilities
 * Provides consistent testing setup and utilities for components, hooks, and integration tests
 */

import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DeviceProvider } from '@/contexts/DeviceContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import ErrorBoundary from '@/components/ErrorBoundary';

// Mock implementations for testing
export const mockDeviceInfo = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouchDevice: false,
  hasHover: true,
  orientation: 'landscape' as const,
  screenSize: 'lg' as const,
  width: 1024,
  height: 768,
};

export const mockLanguageContext = {
  language: 'en' as const,
  setLanguage: jest.fn(),
  t: {
    navigation: {
      home: 'Home',
      about: 'About',
      expertise: 'Expertise',
      locations: 'Locations',
      patientResources: 'Patient Resources',
      contact: 'Contact',
      bookAppointment: 'Book Appointment',
      language: 'Language',
      menu: 'Menu',
      close: 'Close',
      skipToContent: 'Skip to Content'
    },
    hero: {
      title: 'Test Hero Title',
      subtitle: 'Test Hero Subtitle',
      primaryCTA: 'Primary CTA',
      secondaryCTA: 'Secondary CTA',
      scrollDown: 'Scroll Down'
    },
    // Add other translation sections as needed for tests
  },
  isLanguageLoaded: true,
};

// Custom render function with all providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[];
  queryClient?: QueryClient;
  deviceInfo?: typeof mockDeviceInfo;
  languageContext?: typeof mockLanguageContext;
  withErrorBoundary?: boolean;
}

export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
): RenderResult {
  const {
    initialEntries = ['/'],
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          gcTime: 0,
        },
        mutations: {
          retry: false,
        },
      },
    }),
    deviceInfo = mockDeviceInfo,
    languageContext = mockLanguageContext,
    withErrorBoundary = true,
    ...renderOptions
  } = options;

  // Mock device detection hook
  jest.mock('@/contexts/DeviceContext', () => ({
    useDeviceDetection: () => deviceInfo,
    DeviceProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
  }));

  // Mock language context hook
  jest.mock('@/contexts/LanguageContext', () => ({
    useLanguage: () => languageContext,
    LanguageProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
  }));

  function Wrapper({ children }: { children: ReactNode }) {
    const content = (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <DeviceProvider>
            <LanguageProvider>
              <TooltipProvider>
                {children}
              </TooltipProvider>
            </LanguageProvider>
          </DeviceProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    return withErrorBoundary ? (
      <ErrorBoundary>{content}</ErrorBoundary>
    ) : content;
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Utility functions for common testing scenarios

/**
 * Create a mock intersection observer for testing lazy loading
 */
export function createMockIntersectionObserver() {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
  window.IntersectionObserver = mockIntersectionObserver;
  return mockIntersectionObserver;
}

/**
 * Create a mock resize observer for testing responsive components
 */
export function createMockResizeObserver() {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
  window.ResizeObserver = mockResizeObserver;
  return mockResizeObserver;
}

/**
 * Mock window.matchMedia for testing responsive behavior
 */
export function mockMatchMedia(matches: boolean = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

/**
 * Mock performance API for testing performance monitoring
 */
export function mockPerformanceAPI() {
  const mockPerformance = {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
  };

  Object.defineProperty(window, 'performance', {
    writable: true,
    value: mockPerformance,
  });

  return mockPerformance;
}

/**
 * Mock fetch API for testing network requests
 */
export function mockFetch(response: Record<string, unknown> = {}, ok: boolean = true) {
  const mockFetch = jest.fn(() =>
    Promise.resolve({
      ok,
      status: ok ? 200 : 500,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
    })
  );

  global.fetch = mockFetch;
  return mockFetch;
}

/**
 * Mock localStorage for testing storage functionality
 */
export function mockLocalStorage() {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  return localStorageMock;
}

/**
 * Mock sessionStorage for testing session functionality
 */
export function mockSessionStorage() {
  const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
  });

  return sessionStorageMock;
}

/**
 * Wait for async operations to complete
 */
export function waitForAsync(ms: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Create a mock procedure for testing
 */
export function createMockProcedure(overrides: Record<string, unknown> = {}) {
  return {
    id: 'test-procedure-1',
    name: 'Test Procedure',
    description: 'A test medical procedure',
    consultationFee: 200,
    patientType: 'All Patients',
    recoveryTime: '14 days',
    image: '/images/test-procedure.jpg',
    location: 'Brain',
    benefits: ['Minimally Invasive', 'Quick Recovery'],
    complexity: 7,
    ...overrides,
  };
}

/**
 * Create mock translation data
 */
export function createMockTranslations(overrides: Record<string, unknown> = {}) {
  return {
    navigation: mockLanguageContext.t.navigation,
    hero: mockLanguageContext.t.hero,
    ...overrides,
  };
}

/**
 * Test helper for error boundary testing
 */
export function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
}

/**
 * Custom matchers for testing
 */
export const customMatchers = {
  toBeAccessible: (received: HTMLElement) => {
    // Basic accessibility checks
    const hasAriaLabel = received.getAttribute('aria-label');
    const hasRole = received.getAttribute('role');
    const hasTabIndex = received.getAttribute('tabindex');
    
    const pass = !!(hasAriaLabel || hasRole || hasTabIndex);
    
    return {
      message: () =>
        pass
          ? `Expected element not to be accessible`
          : `Expected element to be accessible (have aria-label, role, or tabindex)`,
      pass,
    };
  },
  
  toHaveValidSEO: (received: Document) => {
    const title = received.querySelector('title');
    const description = received.querySelector('meta[name="description"]');
    const canonical = received.querySelector('link[rel="canonical"]');
    
    const pass = !!(title && description && canonical);
    
    return {
      message: () =>
        pass
          ? `Expected document not to have valid SEO`
          : `Expected document to have title, description, and canonical link`,
      pass,
    };
  },
};

// Setup function to be called in test setup files
export function setupTestEnvironment() {
  // Mock all the browser APIs
  createMockIntersectionObserver();
  createMockResizeObserver();
  mockMatchMedia();
  mockPerformanceAPI();
  mockLocalStorage();
  mockSessionStorage();
  
  // Extend Jest matchers
  expect.extend(customMatchers);
  
  // Suppress console errors in tests unless explicitly testing them
  const originalError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });
  
  afterEach(() => {
    console.error = originalError;
  });
}

// Export everything for easy importing
export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
export { renderWithProviders as render };
