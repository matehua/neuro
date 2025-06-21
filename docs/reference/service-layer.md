# Service Layer & Utilities Documentation

## Overview

The miNEURO service layer provides a comprehensive set of utilities, hooks, contexts, and helper functions that support the application's functionality. This layer handles cross-cutting concerns like internationalization, device detection, SEO, accessibility, and performance optimization.

## Context Layer (`src/contexts/`)

### LanguageContext.tsx
**Purpose**: Manages internationalization and language switching throughout the application.

**Interface**:
```typescript
interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
  isLanguageLoaded: boolean;
}

export type SupportedLanguage = 'en' | 'zh';
```

**Features**:
- Automatic language detection from URL, localStorage, and browser settings
- Safe translation access with fallback mechanisms
- URL-based language routing
- Translation loading state management
- Error boundary integration

**Usage**:
```typescript
import { useLanguage } from '@/contexts/LanguageContext';

const Component = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t.page.title}</h1>
      <button onClick={() => setLanguage('zh')}>
        Switch to Chinese
      </button>
    </div>
  );
};
```

**Key Methods**:
- `detectLanguage()`: Automatic language detection
- `changeLanguage()`: Language switching with URL updates
- `safeT`: Triple-layer fallback system for translations

### DeviceContext.tsx
**Purpose**: Provides device detection and responsive behavior management.

**Interface**:
```typescript
interface DeviceContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenSize: ScreenSize;
  orientation: 'portrait' | 'landscape';
  touchCapable: boolean;
}
```

**Features**:
- Real-time device detection
- Screen size monitoring
- Orientation change detection
- Touch capability detection
- Performance-optimized updates

**Usage**:
```typescript
import { useDevice } from '@/contexts/DeviceContext';

const ResponsiveComponent = () => {
  const { isMobile, isTablet } = useDevice();
  
  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};
```

## Custom Hooks (`src/hooks/`)

### useSEO.ts
**Purpose**: Manages SEO metadata, structured data, and language alternates.

**Interface**:
```typescript
interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  languageAlternates?: LanguageAlternate[];
}
```

**Features**:
- Dynamic meta tag updates
- Structured data injection
- Language alternate links
- Canonical URL management
- Open Graph optimization

**Usage**:
```typescript
import { useSEO } from '@/hooks/useSEO';

const PageComponent = () => {
  useSEO({
    title: 'Page Title - miNEURO',
    description: 'Page description for SEO',
    keywords: ['neurosurgery', 'spine surgery'],
    structuredData: {
      '@type': 'MedicalOrganization',
      name: 'miNEURO'
    }
  });
  
  return <PageContent />;
};
```

### use-mobile.ts
**Purpose**: Provides mobile device detection with breakpoint monitoring.

**Interface**:
```typescript
export function useIsMobile(): boolean
```

**Features**:
- Responsive breakpoint detection (768px)
- Window resize monitoring
- Performance-optimized updates
- SSR-safe implementation

**Usage**:
```typescript
import { useIsMobile } from '@/hooks/use-mobile';

const Component = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
};
```

## Utility Library (`src/lib/`)

### utils.ts
**Purpose**: General utility functions and helpers.

**Key Functions**:
```typescript
// Class name utility
export function cn(...inputs: ClassValue[]): string

// Type guards
export function isString(value: unknown): value is string
export function isNumber(value: unknown): value is number

// Array utilities
export function unique<T>(array: T[]): T[]
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>

// Object utilities
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
```

### accessibility.ts
**Purpose**: Accessibility helpers and utilities.

**Key Functions**:
```typescript
// Screen reader announcements
export function announceToScreenReader(message: string, priority?: 'polite' | 'assertive'): void

// Focus management
export function trapFocus(element: HTMLElement): () => void
export function restoreFocus(previousElement: HTMLElement): void

// ARIA utilities
export function generateAriaId(prefix: string): string
export function setAriaExpanded(element: HTMLElement, expanded: boolean): void

// Keyboard navigation
export function handleArrowNavigation(
  event: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number
): number
```

**Usage**:
```typescript
import { announceToScreenReader, trapFocus } from '@/lib/accessibility';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      announceToScreenReader('Modal opened');
      const releaseFocus = trapFocus(modalRef.current);
      return releaseFocus;
    }
  }, [isOpen]);
};
```

### seo.ts
**Purpose**: SEO functionality and metadata management.

**Key Functions**:
```typescript
// Meta tag management
export function updateMetaTags(seoData: SEOData): void
export function generateLanguageAlternates(currentPath: string): LanguageAlternate[]

// Structured data
export function generateStructuredData(type: string, data: object): object
export function injectStructuredData(data: object): void

// URL utilities
export function normalizeCanonicalUrl(url: string): string
export function generateSitemap(): SitemapEntry[]
```

### performance.ts
**Purpose**: Performance monitoring and optimization utilities.

**Key Functions**:
```typescript
// Performance monitoring
export function measurePerformance(name: string, fn: () => void): void
export function trackWebVitals(): void

// Image optimization
export function optimizeImageLoading(img: HTMLImageElement): void
export function preloadCriticalImages(urls: string[]): void

// Bundle optimization
export function lazyLoadComponent<T>(importFn: () => Promise<T>): React.LazyExoticComponent<T>
```

### security.ts
**Purpose**: Security utilities and validation.

**Key Functions**:
```typescript
// Input sanitization
export function sanitizeHtml(html: string): string
export function validateEmail(email: string): boolean

// XSS protection
export function escapeHtml(text: string): string
export function sanitizeUrl(url: string): string

// Content Security Policy
export function generateCSPHeader(): string
```

### error-handling.ts
**Purpose**: Error management and logging utilities.

**Key Functions**:
```typescript
// Error logging
export function logError(error: Error, context?: object): void
export function reportError(error: Error, userAgent?: string): void

// Error boundaries
export function createErrorBoundary(fallback: React.ComponentType): React.ComponentType

// Error recovery
export function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries: number
): Promise<T>
```

### mobile-optimization.ts
**Purpose**: Mobile-specific optimizations and utilities.

**Key Functions**:
```typescript
// Touch handling
export function optimizeTouchEvents(element: HTMLElement): void
export function preventScrollBounce(): void

// Performance optimizations
export function reducedMotionPreference(): boolean
export function optimizeForMobile(): void

// Viewport utilities
export function setViewportMeta(): void
export function handleOrientationChange(): void
```

### env-validation.ts
**Purpose**: Environment variable validation and configuration.

**Key Functions**:
```typescript
// Environment validation
export function validateEnvironment(): void
export function getRequiredEnvVar(name: string): string

// Configuration
export function getConfig(): AppConfig
export function isDevelopment(): boolean
export function isProduction(): boolean
```

## Data Layer (`src/data/`)

### conditions/discopathy.ts
**Purpose**: Medical condition data management.

**Structure**:
```typescript
export interface ConditionData {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: Treatment[];
  images: ImageData[];
  relatedConditions: string[];
}

export const discopathyData: ConditionData = {
  id: 'discopathy',
  name: 'Discopathy',
  description: 'Detailed medical description...',
  symptoms: ['Back pain', 'Nerve compression'],
  treatments: [
    {
      name: 'Conservative Treatment',
      description: 'Non-surgical approaches...'
    }
  ]
};
```

## Type Definitions (`src/types/`)

### seo.ts
**Purpose**: SEO-related type definitions.

```typescript
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export interface LanguageAlternate {
  hreflang: string;
  href: string;
}

export type SupportedLanguageCode = 'en' | 'zh';
```

### translations.ts
**Purpose**: Translation system type definitions.

```typescript
export type TranslationKey = keyof typeof import('@/locales/en').default;

export interface TranslationFunction {
  (key: TranslationKey): string;
}
```

## Service Interconnections

### Dependency Graph
```
LanguageContext
├── Uses: en.ts, zh.ts (translation files)
├── Provides: useLanguage hook
└── Used by: All components needing translations

DeviceContext
├── Uses: use-mobile.ts hook
├── Provides: useDevice hook
└── Used by: Responsive components

useSEO
├── Uses: seo.ts utilities
├── Uses: LanguageContext for language alternates
└── Used by: Page components for SEO

Utility Libraries
├── utils.ts → Used by all components
├── accessibility.ts → Used by interactive components
├── performance.ts → Used by image and lazy-loaded components
└── security.ts → Used by form components
```

### Integration Patterns

**Context + Hook Pattern**:
```typescript
// Context provides global state
const LanguageContext = createContext<LanguageContextType>();

// Hook provides easy access
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
```

**Utility + Component Pattern**:
```typescript
// Utility function
export function announceToScreenReader(message: string) {
  // Implementation
}

// Component usage
const Component = () => {
  const handleAction = () => {
    announceToScreenReader('Action completed');
  };
};
```

**Hook + Service Pattern**:
```typescript
// Custom hook
export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    updateMetaTags(seoData); // Utility function
  }, [seoData]);
};

// Component usage
const Page = () => {
  useSEO({ title: 'Page Title', description: 'Description' });
};
```

This service layer provides a robust foundation for the application's functionality, ensuring consistent behavior, performance optimization, and maintainability across all components.
