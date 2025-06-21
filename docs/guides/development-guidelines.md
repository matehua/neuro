# Development Guidelines

## Overview

This document outlines the coding standards, patterns, and best practices used throughout the miNEURO codebase. Following these guidelines ensures consistency, maintainability, and quality across the entire application.

## Code Style and Standards

### TypeScript Standards

#### Interface Definitions
All components must have properly defined TypeScript interfaces:

```typescript
// Component Props Interface
interface ComponentNameProps {
  // Required props (no default values)
  title: string;
  onAction: () => void;
  
  // Optional props (with ? or default values)
  className?: string;
  variant?: 'primary' | 'secondary' | 'destructive';
  children?: React.ReactNode;
  
  // Complex types
  data?: {
    id: string;
    name: string;
    metadata?: Record<string, unknown>;
  };
}
```

#### Type Safety Rules
- **No `any` types**: Use proper TypeScript interfaces
- **Strict mode enabled**: All TypeScript strict checks must pass
- **Explicit return types**: For complex functions and hooks
- **Generic constraints**: Use proper generic constraints where applicable

```typescript
// Good: Explicit typing
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Good: Generic constraints
function processData<T extends { id: string }>(items: T[]): T[] {
  return items.filter(item => item.id);
}

// Avoid: any types
// const data: any = response; // ❌

// Good: Proper typing
const data: ApiResponse<UserData> = response; // ✅
```

### Component Structure Standards

#### Standard Component Pattern
```typescript
import React, { useState, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  title: string;
  className?: string;
  variant?: 'default' | 'secondary';
  onAction?: () => void;
  children?: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  className,
  variant = 'default',
  onAction,
  children
}) => {
  // 1. Hooks at the top (in order: state, context, custom hooks)
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  // 2. Computed values and memoized calculations
  const computedValue = useMemo(() => {
    return expensiveCalculation(title);
  }, [title]);
  
  // 3. Event handlers (use useCallback for performance)
  const handleClick = useCallback(() => {
    setIsLoading(true);
    onAction?.();
    setIsLoading(false);
  }, [onAction]);
  
  // 4. Effects (if needed)
  useEffect(() => {
    // Side effects
  }, []);
  
  // 5. Early returns (loading states, error states)
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  // 6. Main render
  return (
    <div className={cn('base-component-styles', className)}>
      <h2 className="component-title">{title}</h2>
      {children}
      <button onClick={handleClick} disabled={isLoading}>
        {t.common.action}
      </button>
    </div>
  );
};

// 7. Display name for debugging
Component.displayName = 'Component';

// 8. Default export
export default Component;
```

#### Component File Organization
```typescript
// 1. Imports (grouped and ordered)
import React from 'react'; // React imports first
import { useState, useCallback } from 'react'; // React hooks
import { useRouter } from 'react-router-dom'; // Third-party hooks

import { Button } from '@/components/ui/button'; // UI components
import { useLanguage } from '@/contexts/LanguageContext'; // Custom hooks/contexts
import { cn } from '@/lib/utils'; // Utilities

// 2. Types and interfaces
interface ComponentProps {
  // Interface definition
}

// 3. Constants (if any)
const DEFAULT_CONFIG = {
  timeout: 5000,
  retries: 3
};

// 4. Component implementation
export const Component: React.FC<ComponentProps> = (props) => {
  // Component logic
};

// 5. Display name
Component.displayName = 'Component';

// 6. Default export
export default Component;
```

### Naming Conventions

#### File Naming
- **Components**: PascalCase (e.g., `StandardPageLayout.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useSEO.ts`)
- **Utilities**: camelCase (e.g., `accessibility.ts`)
- **Types**: camelCase (e.g., `seo.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

#### Variable Naming
```typescript
// Components: PascalCase
const UserProfile = () => {};

// Variables and functions: camelCase
const userName = 'john';
const getUserData = () => {};

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;

// Boolean variables: descriptive with auxiliary verbs
const isLoading = false;
const hasError = false;
const canSubmit = true;
const shouldRender = true;

// Event handlers: handle + Action
const handleClick = () => {};
const handleSubmit = () => {};
const handleInputChange = () => {};
```

### Accessibility Standards

#### ARIA Labels and Roles
```typescript
// Interactive elements must have proper ARIA labels
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
  onClick={handleClose}
>
  <X className="h-4 w-4" />
</button>

// Use semantic HTML with proper roles
<nav aria-label="Main navigation" role="navigation">
  <ul role="list">
    <li role="listitem">
      <a 
        href="/expertise" 
        aria-current={isActive ? "page" : undefined}
        className="nav-link"
      >
        Expertise
      </a>
    </li>
  </ul>
</nav>

// Form elements with proper labeling
<div className="form-field">
  <label htmlFor="email-input" className="form-label">
    Email Address
  </label>
  <input
    id="email-input"
    type="email"
    aria-describedby="email-help"
    aria-required="true"
    className="form-input"
  />
  <div id="email-help" className="form-help">
    We'll never share your email address
  </div>
</div>
```

#### Keyboard Navigation
```typescript
// Handle keyboard navigation
const handleKeyDown = useCallback((event: KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
    case ' ': // Space
      event.preventDefault();
      handleAction();
      break;
    case 'Escape':
      handleClose();
      break;
    case 'ArrowDown':
      focusNextItem();
      break;
    case 'ArrowUp':
      focusPreviousItem();
      break;
  }
}, [handleAction, handleClose]);
```

### Performance Standards

#### Component Optimization
```typescript
// Use React.memo for components that re-render frequently
export const ExpensiveComponent = React.memo<Props>(({ data, onAction }) => {
  return <ComplexVisualization data={data} onAction={onAction} />;
});

// Use useCallback for event handlers passed to child components
const handleItemClick = useCallback((id: string) => {
  onItemSelect(id);
}, [onItemSelect]);

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return data
    .filter(item => item.isActive)
    .sort((a, b) => a.priority - b.priority)
    .map(item => ({
      ...item,
      displayName: formatDisplayName(item.name)
    }));
}, [data]);

// Avoid inline object/function creation in render
// ❌ Bad
<Component style={{ marginTop: 10 }} onClick={() => handleClick(id)} />

// ✅ Good
const componentStyle = { marginTop: 10 };
const handleComponentClick = useCallback(() => handleClick(id), [id]);
<Component style={componentStyle} onClick={handleComponentClick} />
```

#### Image Optimization
```typescript
// Always use SafeImage component for images
<SafeImage
  src="/images/conditions/herniated-disc.jpg"
  alt="MRI scan showing herniated disc"
  fallbackSrc="/images/medical-consulting.jpg"
  loading="lazy"
  className="condition-image"
/>

// Preload critical images
useEffect(() => {
  const criticalImages = [
    '/images/hero-background.jpg',
    '/images/logo.png'
  ];
  preloadCriticalImages(criticalImages);
}, []);
```

### Error Handling Standards

#### Error Boundaries
```typescript
// Wrap components in error boundaries
<ErrorBoundary
  fallback={({ error }) => (
    <div className="error-fallback">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  )}
  onError={(error, errorInfo) => {
    logError(error, { component: 'UserProfile', ...errorInfo });
  }}
>
  <UserProfile />
</ErrorBoundary>
```

#### Safe Data Access
```typescript
// Use optional chaining and nullish coalescing
const userName = user?.profile?.name ?? 'Unknown User';
const userAge = user?.profile?.age ?? 0;

// Safe array access
const firstItem = items?.[0];
const itemCount = items?.length ?? 0;

// Safe function calls
onAction?.();
callback?.(data);
```

### Translation Standards

#### Translation Usage
```typescript
// Always use translation context
const { t } = useLanguage();

// Use translation keys consistently
<h1>{t.page.title}</h1>
<p>{t.page.description}</p>
<button>{t.common.actions.submit}</button>

// Provide fallbacks for translations
const safeT = t || en;
const finalT = safeT || {
  page: { title: "Default Title" },
  common: { actions: { submit: "Submit" } }
};
```

#### Translation Key Structure
```typescript
// Hierarchical key structure
const translations = {
  common: {
    actions: {
      submit: "Submit",
      cancel: "Cancel",
      save: "Save"
    },
    labels: {
      name: "Name",
      email: "Email"
    }
  },
  pages: {
    home: {
      title: "Welcome to miNEURO",
      subtitle: "Expert Neurosurgical Care"
    },
    expertise: {
      title: "Our Expertise",
      description: "Advanced surgical techniques"
    }
  }
};
```

### Testing Standards

#### Component Testing
```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TestWrapper } from '@/lib/test-utils';
import { Component } from './Component';

describe('Component', () => {
  const defaultProps = {
    title: 'Test Title',
    onAction: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct title', () => {
    render(
      <TestWrapper>
        <Component {...defaultProps} />
      </TestWrapper>
    );
    
    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
  });

  it('calls onAction when button is clicked', async () => {
    render(
      <TestWrapper>
        <Component {...defaultProps} />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: /action/i });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(defaultProps.onAction).toHaveBeenCalledTimes(1);
    });
  });

  it('handles loading state correctly', () => {
    render(
      <TestWrapper>
        <Component {...defaultProps} isLoading={true} />
      </TestWrapper>
    );
    
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
```

### Documentation Standards

#### JSDoc Comments
```typescript
/**
 * SafeImage component with enhanced error handling and accessibility features
 * 
 * @param props - Component props
 * @param props.src - Image source URL
 * @param props.alt - Alternative text for accessibility
 * @param props.fallbackSrc - Fallback image URL if main image fails to load
 * @param props.isDecorative - Whether the image is decorative (sets aria-hidden)
 * @param props.onImageError - Callback function called when image fails to load
 * 
 * @example
 * // Basic usage
 * <SafeImage src="/path/to/image.jpg" alt="Description" />
 * 
 * @example
 * // With fallback
 * <SafeImage
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   fallbackSrc="/path/to/fallback.jpg"
 *   onImageError={() => console.log('Image failed to load')}
 * />
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = '/images/medical-consulting.jpg',
  isDecorative = false,
  onImageError,
  ...props
}) => {
  // Component implementation
};
```

## Best Practices Summary

### Do's ✅
- Use TypeScript interfaces for all component props
- Follow the standard component structure pattern
- Use semantic HTML elements
- Implement proper ARIA labels and roles
- Use React.memo, useCallback, and useMemo for performance
- Wrap components in error boundaries
- Use translation context for all text
- Write comprehensive tests
- Document complex functions with JSDoc

### Don'ts ❌
- Don't use `any` types
- Don't create inline objects/functions in render
- Don't skip accessibility attributes
- Don't hardcode text strings
- Don't ignore error handling
- Don't skip component display names
- Don't use class components (use functional components)
- Don't mutate props or state directly

Following these guidelines ensures that the miNEURO codebase remains consistent, maintainable, and of high quality.
