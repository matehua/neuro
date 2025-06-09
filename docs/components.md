# Components Guide

Comprehensive documentation for all React components in the miNEURO website.

## Component Architecture Overview

The miNEURO website uses a component-based architecture with the following principles:

- **Reusability**: Components are designed to be reused across different pages
- **Accessibility**: All components follow WCAG 2.1 AA standards
- **Type Safety**: Full TypeScript implementation with strict typing
- **Performance**: Optimized for fast rendering and minimal re-renders
- **Consistency**: Unified design system using shadcn/ui and Tailwind CSS

## Component Categories

### 1. Layout Components

#### Layout.tsx
Main layout wrapper that provides consistent structure across all pages.

```typescript
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Features:
// - Responsive navigation
// - Footer integration
// - Accessibility landmarks
// - SEO meta tags
// - Language switching support
```

**Usage:**
```jsx
<Layout>
  <PageContent />
</Layout>
```

#### Navbar.tsx
Primary navigation component with multilingual support.

```typescript
// Features:
// - Responsive design (mobile hamburger menu)
// - Language selector integration
// - Active route highlighting
// - Keyboard navigation support
// - ARIA landmarks and labels
```

#### Footer.tsx
Site footer with contact information and links.

```typescript
// Features:
// - Contact information display
// - Social media links
// - Copyright information
// - Responsive layout
// - Accessibility compliance
```

### 2. UI Components (shadcn/ui based)

#### Button Component
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

// Usage examples:
<Button variant="default">Primary Action</Button>
<Button variant="outline" size="sm">Secondary</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

#### Card Component
```typescript
// Compound component structure:
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer actions
  </CardFooter>
</Card>
```

#### Dialog Component
```typescript
// Modal dialog implementation:
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 3. Custom Components

#### SafeImage.tsx
Enhanced image component with error handling and accessibility features.

```typescript
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  isDecorative?: boolean;
  onImageError?: () => void;
}

// Features:
// - Automatic fallback on image load errors
// - Accessibility attributes (role, aria-hidden)
// - Lazy loading support
// - Error callback handling
// - Decorative image support
```

**Usage:**
```jsx
// Standard image
<SafeImage
  src="/images/conditions/herniated-disc.jpg"
  alt="MRI scan showing herniated disc"
  fallbackSrc="/images/medical-consulting.jpg"
/>

// Decorative image
<SafeImage
  src="/images/hero-background.jpg"
  alt=""
  isDecorative={true}
/>
```

#### LanguageSelector.tsx
Language switching component for internationalization.

```typescript
// Features:
// - Dropdown language selection
// - Current language indication
// - Route preservation during language switch
// - Keyboard navigation support
// - Flag icons for visual identification
```

#### ErrorBoundary.tsx
Error handling component for graceful error recovery.

```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error }>;
}

// Features:
// - Catches JavaScript errors in component tree
// - Displays fallback UI
// - Error logging for debugging
// - Graceful degradation
```

### 4. Form Components

#### Form Components (React Hook Form + Zod)
```typescript
// Form structure with validation:
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="Your name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

### 5. Page-Specific Components

#### ExerciseLibrary Components
```typescript
// Exercise card component
interface ExerciseCardProps {
  exercise: Exercise;
  onSelect: (exercise: Exercise) => void;
}

// Exercise filter component
interface ExerciseFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Exercise detail modal
interface ExerciseDetailProps {
  exercise: Exercise;
  isOpen: boolean;
  onClose: () => void;
}
```

#### Condition Information Components
```typescript
// Condition card for displaying medical conditions
interface ConditionCardProps {
  condition: MedicalCondition;
  imageUrl: string;
  onLearnMore: () => void;
}

// Symptom list component
interface SymptomListProps {
  symptoms: string[];
  className?: string;
}
```

## Component Development Standards

### 1. TypeScript Interfaces
```typescript
// Always define props interfaces
interface ComponentProps {
  // Required props (no default values)
  title: string;
  onAction: () => void;
  
  // Optional props (with ? or default values)
  className?: string;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}
```

### 2. Component Structure
```typescript
// Standard component structure
export const Component: React.FC<ComponentProps> = ({
  title,
  className,
  variant = 'primary',
  onAction,
  children
}) => {
  // Hooks at the top
  const [state, setState] = useState(false);
  const { t } = useTranslation();
  
  // Event handlers
  const handleClick = useCallback(() => {
    onAction();
  }, [onAction]);
  
  // Render
  return (
    <div className={cn("base-styles", className)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

### 3. Accessibility Standards
```typescript
// Always include accessibility attributes
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <X className="h-4 w-4" />
</button>

// Use semantic HTML
<nav aria-label="Main navigation">
  <ul role="list">
    <li role="listitem">
      <a href="/expertise" aria-current={isActive ? "page" : undefined}>
        Expertise
      </a>
    </li>
  </ul>
</nav>
```

### 4. Performance Optimization
```typescript
// Use React.memo for expensive components
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <ComplexVisualization data={data} />;
});

// Use useCallback for event handlers
const handleSubmit = useCallback((data: FormData) => {
  onSubmit(data);
}, [onSubmit]);

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return expensiveDataProcessing(rawData);
}, [rawData]);
```

## Component Testing

### Testing Standards
```typescript
// Component test example
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Component Documentation

### JSDoc Comments
```typescript
/**
 * SafeImage component with enhanced error handling and accessibility features
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
 * />
 */
export const SafeImage: React.FC<SafeImageProps> = ({ ... }) => {
  // Component implementation
};
```

## Component Library Organization

### File Structure
```
src/components/
├── ui/                    # Base shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
├── Layout.tsx             # Layout components
├── Navbar.tsx
├── Footer.tsx
├── SafeImage.tsx          # Custom utility components
├── LanguageSelector.tsx
├── ErrorBoundary.tsx
└── [feature]/             # Feature-specific components
    ├── ExerciseCard.tsx
    ├── ConditionCard.tsx
    └── ...
```

### Import/Export Patterns
```typescript
// Named exports for components
export { Button } from './ui/button';
export { Card, CardContent, CardHeader } from './ui/card';

// Default exports for main components
export default Layout;

// Re-exports from index files
export * from './ui';
export * from './forms';
```

## Best Practices

### 1. Component Composition
- Prefer composition over inheritance
- Use compound components for complex UI elements
- Implement render props for flexible component behavior

### 2. State Management
- Use local state for component-specific data
- Use Context for global state (language, theme)
- Use React Query for server state

### 3. Error Handling
- Implement error boundaries for graceful error recovery
- Provide meaningful error messages
- Log errors for debugging purposes

### 4. Performance
- Use React.memo for components that re-render frequently
- Implement proper key props for list items
- Avoid inline object/function creation in render

### 5. Accessibility
- Always provide meaningful alt text for images
- Use semantic HTML elements
- Implement proper keyboard navigation
- Test with screen readers
