
# Component Documentation

## Core Components

### Layout Components

#### Layout.tsx
- **Purpose**: Main layout wrapper for all pages
- **Features**: SEO integration, accessibility announcements, consistent structure
- **Props**: 
  - `children`: Page content
  - `pageTitle`: Optional page title for SEO
  - `seoData`: Custom SEO configuration
  - `pageType`: Page type for default SEO

#### Navbar.tsx
- **Purpose**: Site navigation header
- **Features**: Responsive design, mobile menu, language switching, call-to-action
- **State**: Mobile menu toggle, language selection

#### Footer.tsx
- **Purpose**: Site footer with links and contact info
- **Features**: Multi-column layout, location links, copyright information

#### PageHeader.tsx
- **Purpose**: Reusable page header component
- **Features**: Background image support, title/subtitle display, responsive design

### Content Components

#### HeroSection.tsx
- **Purpose**: Homepage hero with parallax effects
- **Features**: 
  - Parallax scrolling background
  - Mobile-optimized animations
  - Call-to-action buttons
  - Accessibility support
- **Performance**: Reduced motion on mobile devices

#### TestimonialsSection.tsx
- **Purpose**: Patient testimonials display
- **Features**: Responsive grid layout, testimonial cards
- **Integration**: Translation system support

#### ProcedureCard.tsx
- **Purpose**: Medical procedure information cards
- **Props**:
  - `title`: Procedure name
  - `description`: Procedure description
  - `image`: Procedure image
  - `link`: Link to detailed information
  - `price`: Optional pricing information

### Utility Components

#### SafeImage.tsx
- **Purpose**: Optimized image component with error handling
- **Features**:
  - Lazy loading support
  - Fallback image handling
  - Loading state management
  - Error state handling
- **Performance**: Reduces failed image requests

#### ErrorBoundary.tsx
- **Purpose**: Global error handling
- **Features**: 
  - Graceful error recovery
  - Error reporting integration
  - User-friendly error messages

#### ScreenReaderAnnouncer.tsx
- **Purpose**: Accessibility announcements
- **Features**: Live region for screen readers
- **Usage**: Route change announcements, form submissions

### Form Components

#### ContactForm.tsx
- **Purpose**: Contact and inquiry forms
- **Features**:
  - Form validation
  - EmailJS integration
  - Error handling
  - Success notifications
- **Fields**: Name, email, phone, subject, message

## UI Components (shadcn/ui)

### Core UI Components
- **Button**: Various styles and sizes
- **Card**: Content containers
- **Dialog**: Modal dialogs
- **Accordion**: Expandable content
- **Tabs**: Tabbed navigation
- **Form**: Form controls and validation

### Component Styling
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Theme customization
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Theme switching support

## Component Patterns

### Performance Patterns
```typescript
// Lazy loading
const LazyComponent = React.lazy(() => import('./Component'));

// Memoization
const MemoizedComponent = React.memo(Component);

// Performance measurement
const MeasuredComponent = measureComponentRender(Component);
```

### Accessibility Patterns
```typescript
// ARIA labels
<button aria-label="Close dialog" />

// Screen reader support
<div role="region" aria-labelledby="section-title" />

// Focus management
const focusRef = useRef<HTMLElement>(null);
```

### Mobile Optimization Patterns
```typescript
// Device detection
const { isMobile } = useDeviceDetection();

// Touch-friendly interactions
className={cn("touch-target", { "mobile-optimized": isMobile })}

// Reduced motion
const { prefersReducedMotion } = useAccessibility();
```

## Component Integration

### Context Integration
- **LanguageContext**: Multilingual support
- **ThemeContext**: Dark mode support
- **DeviceContext**: Mobile/desktop detection

### Hook Integration
- **useSEO**: SEO management
- **useDeviceDetection**: Device-specific behavior
- **usePerformanceMetric**: Performance tracking

### Service Integration
- **Performance Monitoring**: Component render tracking
- **Error Reporting**: Error boundary integration
- **Analytics**: User interaction tracking

## Testing Considerations

### Unit Testing
- Component rendering
- Props validation
- State management
- Event handling

### Integration Testing
- Context provider integration
- Route navigation
- Form submission
- API integration

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast
- Focus management

## Performance Considerations

### Bundle Optimization
- Code splitting by route
- Component lazy loading
- Tree shaking unused code
- Image optimization

### Runtime Performance
- Memoization of expensive calculations
- Virtual scrolling for large lists
- Debounced input handling
- Optimized re-renders

### Mobile Performance
- Touch event optimization
- Reduced animations
- Smaller bundle sizes
- Network-aware loading

This documentation provides a comprehensive guide to all components in the miNEURO application, their purposes, features, and integration patterns.
