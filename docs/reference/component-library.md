# Component Library Reference

Comprehensive reference documentation for all React components in the miNEURO website.

## Component Architecture Overview

The miNEURO website uses a component-based architecture with the following principles:

- **Reusability**: Components are designed to be reused across different pages
- **Accessibility**: All components follow WCAG 2.1 AA standards
- **Type Safety**: Full TypeScript implementation with strict typing
- **Performance**: Optimized for fast rendering and minimal re-renders
- **Consistency**: Unified design system using shadcn/ui and Tailwind CSS

## Component Categories

### 1. Layout Components

#### StandardPageLayout.tsx
**Purpose**: Main layout wrapper providing consistent structure across all pages.

**Props Interface**:
```typescript
interface StandardPageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  enableParallax?: boolean;
  className?: string;
  seoData?: SEOData;
  pageType?: 'default' | 'landing' | 'article' | 'service' | 'location';
  showHeader?: boolean;
  headerClassName?: string;
  contentClassName?: string;
  enableErrorBoundary?: boolean;
  customErrorFallback?: ReactNode;
}
```

**Features**:
- SEO optimization with meta tags
- Error boundary integration
- Responsive design
- Accessibility landmarks
- Language switching support

**Usage**:
```jsx
<StandardPageLayout
  title="Page Title"
  seoData={seoData}
  pageType="article"
  showHeader={true}
>
  <PageContent />
</StandardPageLayout>
```

#### Navbar.tsx
**Purpose**: Primary navigation component with multilingual support.

**Features**:
- Responsive design (mobile hamburger menu)
- Language selector integration
- Active route highlighting
- Keyboard navigation support
- ARIA landmarks and labels

**Dependencies**:
- LanguageSelector component
- ThemeToggle component
- LanguageContext hook

#### Footer.tsx
**Purpose**: Site footer with contact information and links.

**Features**:
- Contact information display
- Social media links
- Copyright information
- Responsive layout
- Accessibility compliance

### 2. UI Components (shadcn/ui based)

#### Core UI Components
All UI components are based on shadcn/ui with custom enhancements:

**Button Component**:
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
  disabled?: boolean;
}
```

**Card Component** (Compound):
```typescript
// Compound component structure
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

**Form Components**:
```typescript
// Form with validation
const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
});

<Form {...form}>
  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### 3. Utility Components

#### SafeImage.tsx
**Purpose**: Enhanced image component with error handling and accessibility.

**Props Interface**:
```typescript
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  isDecorative?: boolean;
  onImageError?: () => void;
}
```

**Features**:
- Automatic fallback on image load errors
- Accessibility attributes (role, aria-hidden)
- Lazy loading support
- Error callback handling
- Decorative image support

**Usage**:
```jsx
<SafeImage
  src="/images/conditions/herniated-disc.jpg"
  alt="MRI scan showing herniated disc"
  fallbackSrc="/images/medical-consulting.jpg"
/>
```

#### ErrorBoundary.tsx
**Purpose**: Error handling component for graceful error recovery.

**Props Interface**:
```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
```

**Features**:
- Catches JavaScript errors in component tree
- Displays fallback UI
- Error logging for debugging
- Graceful degradation

#### LanguageSelector.tsx
**Purpose**: Language switching component for internationalization.

**Features**:
- Dropdown language selection
- Current language indication
- Route preservation during language switch
- Keyboard navigation support
- Flag icons for visual identification

**Dependencies**:
- LanguageContext hook
- Select UI component

### 4. Medical Condition Components

#### Shared Components

**ConditionHeroSection.tsx**:
```typescript
interface ConditionHeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}
```

**ConditionOverviewSection.tsx**:
```typescript
interface ConditionOverviewSectionProps {
  title: string;
  content: string;
  highlights?: string[];
  className?: string;
}
```

**ConditionQuickFacts.tsx**:
```typescript
interface ConditionQuickFactsProps {
  facts: FactItem[];
  title?: string;
  className?: string;
}

interface FactItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}
```

#### Specialized Components

**ArthrosisTypesSection.tsx**:
- Displays different types of arthrosis
- Interactive type selection
- Detailed descriptions

**FacetJointAnatomySection.tsx**:
- Anatomical diagrams
- Interactive anatomy exploration
- Educational content

### 5. Form Components

#### AppointmentForm.tsx
**Purpose**: Comprehensive appointment booking form.

**Features**:
- Multi-step form wizard
- Form validation with Zod
- Date/time selection
- Patient information collection
- Accessibility compliance

**Dependencies**:
- React Hook Form
- Zod validation
- UI form components

### 6. Content Components

#### HeroSection.tsx
**Purpose**: Homepage hero section with parallax effects.

**Features**:
- Parallax scrolling (disabled on mobile)
- Call-to-action buttons
- Responsive design
- Accessibility compliance

#### TestimonialsSection.tsx
**Purpose**: Patient testimonials carousel.

**Features**:
- Auto-rotating testimonials
- Manual navigation controls
- Accessibility-compliant
- Mobile-optimized touch interactions

#### ProcedureCard.tsx
**Purpose**: Medical procedure display cards.

**Features**:
- Procedure information display
- Image integration
- Action buttons
- Responsive layout

## Component Development Standards

### 1. TypeScript Interfaces
All components must have properly defined TypeScript interfaces:

```typescript
interface ComponentProps {
  // Required props
  title: string;
  onAction: () => void;
  
  // Optional props
  className?: string;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}
```

### 2. Component Structure
Standard component structure pattern:

```typescript
export const Component: React.FC<ComponentProps> = ({
  title,
  className,
  variant = 'primary',
  onAction,
  children
}) => {
  // Hooks at the top
  const [state, setState] = useState(false);
  const { t } = useLanguage();
  
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

Component.displayName = 'Component';
```

### 3. Accessibility Standards
All components must include proper accessibility attributes:

```typescript
// Interactive elements
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <X className="h-4 w-4" />
</button>

// Semantic HTML
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
Performance best practices:

```typescript
// React.memo for expensive components
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <ComplexVisualization data={data} />;
});

// useCallback for event handlers
const handleSubmit = useCallback((data: FormData) => {
  onSubmit(data);
}, [onSubmit]);

// useMemo for expensive calculations
const processedData = useMemo(() => {
  return expensiveDataProcessing(rawData);
}, [rawData]);
```

## Component Relationships

### Import/Export Patterns
```typescript
// Named exports for UI components
export { Button } from './ui/button';
export { Card, CardContent, CardHeader } from './ui/card';

// Default exports for main components
export default StandardPageLayout;

// Re-exports from index files
export * from './ui';
export * from './medical-conditions';
```

### Dependency Management
- UI components have minimal dependencies
- Layout components depend on context hooks
- Page components compose multiple smaller components
- Medical components share common interfaces

This component library provides a solid foundation for building consistent, accessible, and maintainable user interfaces throughout the miNEURO application.
