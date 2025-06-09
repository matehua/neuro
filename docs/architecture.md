# Architecture Guide

Comprehensive technical architecture documentation for the miNEURO neurosurgery website.

## System Overview

The miNEURO website is a modern, production-ready React application built with TypeScript, featuring a neurosurgery practice website with patient resources, GP referral tools, and multilingual support.

### Core Architecture Principles

- **Component-Based Architecture**: Modular, reusable React components
- **Type Safety**: Full TypeScript implementation with strict mode
- **Performance First**: Optimized builds, lazy loading, and efficient bundling
- **Accessibility**: WCAG 2.1 AA compliance throughout
- **Internationalization**: Built-in English/Chinese language support
- **Mobile-First**: Responsive design optimized for all devices

## Project Structure

### Root Directory

```
miNEURO/
├── public/                 # Static assets (served directly)
├── src/                   # Application source code
├── docs/                  # Project documentation (5 files max)
├── scripts/               # Utility scripts
├── dist/                  # Production build output
├── node_modules/          # Dependencies
├── package.json           # Project configuration
├── vite.config.ts         # Build tool configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Styling configuration
└── README.md              # Project overview
```

### Public Assets Structure

```
public/
├── images/                # Organized image assets (200+ files)
│   ├── conditions/        # Medical condition images (30+ files)
│   ├── exercises/         # Exercise demonstrations (97 files)
│   ├── gp-resources/      # GP referral images (20+ files)
│   ├── locations/         # Clinic location photos (30+ files)
│   ├── patient-resources/ # Patient education images
│   └── expertise/         # Medical expertise images
├── data/                  # JSON data files
│   ├── exercises.json     # Exercise library (75 exercises, 8 categories)
│   └── conditions.json    # Medical conditions data
├── pages/                 # Markdown content files
│   ├── brain-spine-image-guided-surgery/
│   ├── robotic-spine-surgery/
│   └── [other-content]/   # Organized by page/feature
├── logo/                  # Brand assets (multiple formats)
├── favicon.ico            # Site favicon
├── manifest.json          # PWA manifest
├── robots.txt             # SEO robots file
└── sitemap.xml            # SEO sitemap
```

### Source Code Architecture

```
src/
├── components/            # Reusable UI components (25+ components)
│   ├── ui/               # Base shadcn/ui components
│   │   ├── button.tsx    # Button variants
│   │   ├── card.tsx      # Card layouts
│   │   ├── dialog.tsx    # Modal dialogs
│   │   ├── form.tsx      # Form components
│   │   └── ...           # Other base components
│   ├── Layout.tsx        # Main layout wrapper
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── SafeImage.tsx     # Enhanced image component
│   ├── LanguageSelector.tsx # Language switching
│   ├── ErrorBoundary.tsx # Error handling
│   └── ...               # Feature-specific components
├── pages/                # Page components (50+ pages)
│   ├── Index.tsx         # Homepage
│   ├── expertise/        # Medical expertise pages
│   │   ├── ImageGuidedSurgery.tsx
│   │   ├── RoboticSpineSurgery.tsx
│   │   └── ...           # Other expertise pages
│   ├── patient-resources/ # Patient education
│   │   ├── ExerciseLibrary.tsx
│   │   ├── ConditionInformation.tsx
│   │   └── ...           # Other patient resources
│   ├── gp-resources/     # GP referral tools
│   ├── locations/        # Clinic locations
│   └── ...               # Other page categories
├── contexts/             # React contexts for global state
│   └── LanguageContext.tsx # Internationalization context
├── hooks/                # Custom React hooks
│   └── ...               # Reusable logic hooks
├── lib/                  # Utility functions and helpers
│   ├── utils.ts          # General utilities
│   ├── accessibility.ts # Accessibility helpers
│   ├── performance.ts    # Performance monitoring
│   ├── security.ts       # Security utilities
│   └── mobile-optimization.ts # Mobile enhancements
├── locales/              # Internationalization files
│   ├── en.ts             # English translations
│   └── zh.ts             # Chinese translations
├── routes/               # Routing configuration
│   └── routeConfig.tsx   # Route definitions with i18n
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
├── index.css             # Global styles
└── vite-env.d.ts         # Vite type definitions
```

## Technology Stack

### Core Technologies

| Technology | Version | Purpose | Configuration |
|------------|---------|---------|---------------|
| **React** | 18.x | UI Library | Functional components, hooks |
| **TypeScript** | 5.x | Type Safety | Strict mode, no implicit any |
| **Vite** | 5.x | Build Tool | Fast dev server, optimized builds |
| **React Router** | 6.x | Routing | Client-side routing with i18n |
| **Tailwind CSS** | 3.x | Styling | Utility-first CSS framework |

### UI and Component Libraries

| Library | Purpose | Implementation |
|---------|---------|----------------|
| **shadcn/ui** | Component Library | Radix UI + Tailwind CSS |
| **Radix UI** | Accessible Primitives | Headless UI components |
| **Lucide React** | Icons | Consistent icon system |
| **React Hook Form** | Form Handling | Performance-optimized forms |
| **Zod** | Schema Validation | Type-safe form validation |

### State Management and Data

| Tool | Purpose | Usage |
|------|---------|-------|
| **React Query** | Data Fetching | Server state management |
| **React Context** | Global State | Language, theme management |
| **Local Storage** | Persistence | User preferences |

### Development and Build Tools

| Tool | Purpose | Configuration |
|------|---------|---------------|
| **ESLint** | Code Linting | React + TypeScript rules |
| **TypeScript** | Type Checking | Strict mode enabled |
| **PostCSS** | CSS Processing | Tailwind CSS integration |
| **Vite** | Build Optimization | Code splitting, tree shaking |

## Component Architecture

### Component Hierarchy

```
App
├── ErrorBoundary
├── QueryClientProvider
├── TooltipProvider
├── BrowserRouter
└── LanguageProvider
    ├── Layout
    │   ├── Navbar
    │   │   ├── LanguageSelector
    │   │   └── Navigation
    │   ├── Main Content (Route-based)
    │   └── Footer
    └── Toaster (Global notifications)
```

### Component Design Patterns

1. **Compound Components**: Complex UI elements with multiple parts
2. **Render Props**: Flexible component composition
3. **Custom Hooks**: Reusable stateful logic
4. **Higher-Order Components**: Cross-cutting concerns
5. **Context Providers**: Global state management

### Component Standards

```typescript
// Component interface pattern
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

// Component implementation pattern
export const Component = React.forwardRef<
  HTMLDivElement,
  ComponentProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(componentVariants({ variant }), className)}
      {...props}
    />
  );
});
```

## Routing Architecture

### Route Structure

```typescript
// Base routes (language-agnostic)
const baseRoutes = [
  { path: "/", element: <Index /> },
  { path: "/expertise", element: <Expertise /> },
  { path: "/patient-resources", element: <PatientResources /> },
  // ... other routes
];

// Language-specific routes
// /en/expertise, /zh/expertise, etc.
const languageRoutes = generateLanguageRoutes(['en', 'zh']);
```

### Internationalization Routing

- **Base Routes**: `/` (redirects to `/en/`)
- **English Routes**: `/en/*`
- **Chinese Routes**: `/zh/*`
- **Fallback**: 404 page for invalid routes

## Data Architecture

### Static Data Management

```
public/data/
├── exercises.json      # Exercise library data
│   ├── 8 categories    # Organized by body region
│   ├── 75 exercises    # Complete exercise database
│   └── Metadata        # Difficulty, target areas, instructions
└── conditions.json     # Medical conditions data
```

### Image Asset Management

```
public/images/
├── Organized by feature/category
├── Optimized file sizes (< 500KB each)
├── Consistent naming conventions
├── WebP format where supported
└── Fallback images for error handling
```

### Content Management

```
public/pages/
├── Markdown files for long-form content
├── Bilingual support (index.md, index.zh.md)
├── Structured metadata
└── SEO-optimized content
```

## Performance Architecture

### Build Optimization

```typescript
// Vite configuration highlights
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/*'],
          'utility-vendor': ['date-fns', 'clsx']
        }
      }
    }
  }
});
```

### Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Non-critical components loaded on demand
- **Image Optimization**: Proper sizing and compression
- **Bundle Analysis**: Optimized chunk sizes
- **Caching Strategy**: Efficient browser caching

## Security Architecture

### Security Measures

1. **Content Security Policy**: Configured headers
2. **XSS Protection**: Input sanitization
3. **HTTPS Enforcement**: Secure connections only
4. **Dependency Security**: Regular security audits
5. **Error Handling**: Secure error boundaries

### Data Protection

- No sensitive data in client-side code
- Secure image handling with fallbacks
- Input validation on all forms
- Safe external link handling

## Deployment Architecture

### Build Process

```bash
npm run build
# ↓
# TypeScript compilation
# ↓
# Vite optimization
# ↓
# Asset optimization
# ↓
# Production bundle (dist/)
```

### Deployment Targets

1. **Lovable Platform**: Development and staging
2. **Netlify**: Production with custom domain
3. **Static Hosting**: Any static file server

### Environment Configuration

- **Development**: Hot reload, source maps, debug tools
- **Production**: Minified, optimized, performance monitoring
- **Staging**: Production-like with additional logging

When the project is built, the output is generated in the `dist/` directory, which mirrors the structure of the `public/` directory with the addition of processed assets from the `src/` directory.
