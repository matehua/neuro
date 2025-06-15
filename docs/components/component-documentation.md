
# Component Documentation

## Core Layout Components

### Layout.tsx
- **Purpose**: Main layout wrapper for all pages with SEO integration
- **Features**: 
  - Dynamic SEO meta tag management
  - Accessibility announcements for route changes
  - Consistent page structure
  - Error boundary integration
- **Props**: 
  - `children`: Page content (React.ReactNode)
  - `pageTitle`: Optional page title for SEO and accessibility
  - `seoData`: Custom SEO configuration object
  - `pageType`: Page type for default SEO generation
- **Usage**: Wraps all page components to provide consistent layout and SEO

### Navbar.tsx
- **Purpose**: Site navigation header with responsive design
- **Features**: 
  - Mobile hamburger menu with smooth animations
  - Language selector integration
  - Theme toggle integration
  - Active navigation state management
  - Call-to-action button
  - Accessibility-compliant navigation
- **State Management**: Mobile menu toggle, active route tracking
- **Integration**: LanguageSelector, ThemeToggle, routing

### Footer.tsx
- **Purpose**: Site footer with contact information and navigation
- **Features**: 
  - Multi-column responsive layout
  - Contact information display
  - Location links and navigation
  - Social media integration
  - Copyright and legal information
- **Layout**: Responsive grid with mobile stacking

### PageHeader.tsx
- **Purpose**: Reusable page header component with background support
- **Features**: 
  - Background image with parallax effects
  - Title and subtitle display
  - Mobile-optimized performance
  - Accessibility-compliant headings
  - Responsive typography scaling
- **Props**:
  - `title`: Main page title (string)
  - `subtitle`: Optional subtitle (string)
  - `backgroundImage`: Optional background image URL
  - `className`: Additional CSS classes
  - `enableParallax`: Enable parallax scrolling (boolean)

## Content Display Components

### HeroSection.tsx
- **Purpose**: Homepage hero section with parallax effects
- **Features**: 
  - Parallax scrolling background (disabled on mobile)
  - Professional medical imagery
  - Call-to-action buttons with routing
  - Mobile-optimized animations
  - Accessibility support with proper ARIA labels
  - Performance optimizations for reduced motion
- **Performance**: Automatically reduces motion on mobile devices

### TestimonialsSection.tsx
- **Purpose**: Patient testimonials carousel with auto-rotation
- **Features**: 
  - Auto-rotating testimonials (8-second intervals)
  - Manual navigation controls
  - Star rating display
  - Patient photos and information
  - Mobile-optimized touch interactions
  - Accessibility features with ARIA labels
- **Current Testimonials**:
  1. Sarah Thompson - Spine surgery success
  2. Michael Chen - Cervical disc replacement
  3. Emily Wilson - Complex spinal condition
- **State**: Active testimonial index, animation state

### ProcedureCard.tsx
- **Purpose**: Medical procedure information display cards
- **Features**:
  - Consistent card layout with image and content
  - Optional pricing information display
  - Navigation integration to detailed pages
  - Mobile-responsive design
  - Image optimization with SafeImage integration
- **Props**:
  - `title`: Procedure name (string)
  - `description`: Procedure description (string)
  - `image`: Procedure image URL (string)
  - `link`: Link to detailed information (string)
  - `price`: Optional pricing information (string, optional)

## Form Components

### ContactForm.tsx
- **Purpose**: Contact and inquiry forms with validation
- **Features**:
  - React Hook Form integration with Zod validation
  - EmailJS integration for form submissions
  - Real-time form validation
  - Error handling with user-friendly messages
  - Success notifications with toast system
  - Accessibility-compliant form fields
  - Mobile-optimized form layout
- **Fields**: Name, email, phone, subject, message
- **Validation**: Email format, required fields, character limits

## Utility Components

### SafeImage.tsx
- **Purpose**: Optimized image component with comprehensive error handling
- **Features**:
  - Lazy loading support with Intersection Observer
  - Fallback image handling for broken images
  - Loading state management with skeleton display
  - Error state handling with retry functionality
  - Performance optimization for different screen sizes
- **Props**:
  - `src`: Image source URL (string)
  - `alt`: Alternative text for accessibility (string)
  - `fallback`: Fallback image URL (string, optional)
  - `className`: Additional CSS classes (string, optional)
  - `lazy`: Enable lazy loading (boolean, default: true)

### ErrorBoundary.tsx
- **Purpose**: Global error handling with graceful recovery
- **Features**: 
  - Catches JavaScript errors in component tree
  - Displays user-friendly error messages
  - Error reporting integration (production)
  - Graceful fallback UI
  - Development vs production error displays
- **Integration**: Wraps entire application in App.tsx

### ScreenReaderAnnouncer.tsx
- **Purpose**: Accessibility announcements for screen readers
- **Features**: 
  - Live region for dynamic content updates
  - Route change announcements
  - Form submission feedback
  - Error message announcements
- **Usage**: Used by Layout component for route changes

## Navigation and Interaction Components

### LanguageSelector.tsx
- **Purpose**: Language switching interface
- **Features**:
  - Dropdown selection with flag icons
  - Smooth language transitions
  - URL path updates for SEO
  - Accessibility labels and descriptions
  - Support for English and Chinese
- **Integration**: LanguageContext for state management

### LanguageWrapper.tsx
- **Purpose**: Language route parameter wrapper
- **Features**:
  - URL parameter-based language detection
  - Automatic language context updates
  - Route-based language switching
- **Usage**: Wraps components that need language URL handling

### ThemeToggle.tsx
- **Purpose**: Dark/light mode toggle functionality
- **Features**:
  - System preference detection
  - Smooth theme transitions
  - Icon animations (Sun/Moon)
  - Local storage persistence
  - Accessibility-compliant button
- **State**: Theme preference tracking

### SkipLink.tsx
- **Purpose**: Accessibility skip navigation for keyboard users
- **Features**:
  - Keyboard navigation enhancement
  - Screen reader compatibility
  - Customizable target and text
  - Visually hidden until focused
- **Props**:
  - `targetId`: Target element ID (string, default: "main-content")
  - `text`: Link text (string, default: "Skip to main content")
  - `className`: Additional CSS classes (string, optional)

## shadcn/ui Base Components

### Button Component
- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: default, sm, lg, icon
- **Features**: Accessibility, focus management, loading states

### Card Components
- **Components**: Card, CardHeader, CardTitle, CardContent, CardFooter
- **Usage**: Content containers throughout the application
- **Styling**: Consistent spacing and borders

### Form Components
- **Components**: Form, FormItem, FormLabel, FormControl, FormMessage
- **Integration**: React Hook Form and Zod validation
- **Accessibility**: ARIA labels and error associations

### Dialog Components
- **Components**: Dialog, DialogContent, DialogHeader, DialogTitle
- **Features**: Modal dialogs with proper focus management
- **Mobile**: Responsive design with mobile optimizations

### Select Components
- **Components**: Select, SelectContent, SelectItem, SelectTrigger
- **Features**: Custom styling with accessibility
- **Integration**: Form validation and language switching

## Component Integration Patterns

### Context Integration
- **LanguageContext**: All components support internationalization
- **Theme Context**: Dark/light mode support throughout
- **Device Context**: Mobile/desktop responsive behavior

### Hook Integration
- **useSEO**: Dynamic meta tag management in Layout
- **useDeviceDetection**: Mobile-specific optimizations
- **useLanguage**: Translation and language switching

### Service Integration
- **Performance Monitoring**: Component render tracking
- **Error Reporting**: Integration with ErrorBoundary
- **Accessibility**: Screen reader announcements

## Performance Optimization Patterns

### Lazy Loading
```typescript
const LazyComponent = React.lazy(() => import('./Component'));
```

### Memoization
```typescript
const MemoizedComponent = React.memo(Component);
```

### Device-Specific Rendering
```typescript
const { isMobile } = useDeviceDetection();
return isMobile ? <MobileComponent /> : <DesktopComponent />;
```

## Accessibility Patterns

### ARIA Labels
```typescript
<button aria-label="Close dialog" aria-describedby="dialog-description">
```

### Screen Reader Support
```typescript
<div role="region" aria-labelledby="section-title">
```

### Focus Management
```typescript
const focusRef = useRef<HTMLElement>(null);
useEffect(() => focusRef.current?.focus(), []);
```

## Mobile Optimization Patterns

### Touch Targets
```typescript
className={cn("touch-target min-h-[44px] min-w-[44px]", className)}
```

### Reduced Motion
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

### Device-Specific Styling
```typescript
className={cn(
  "base-styles",
  deviceInfo.isMobile ? "mobile-styles" : "desktop-styles"
)}
```

## Testing Considerations

### Unit Testing
- Component rendering with various props
- State management and user interactions
- Accessibility features and ARIA attributes
- Form validation and submission

### Integration Testing
- Context provider functionality
- Route navigation and language switching
- Form submission and API integration
- Error boundary error catching

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation flows
- Color contrast ratios
- Focus management

This documentation provides comprehensive guidance for all components in the miNEURO application, their purposes, features, and integration patterns.
