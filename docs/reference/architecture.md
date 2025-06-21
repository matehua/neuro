# Architecture Reference

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
├── ErrorBoundary (Global error handling)
├── QueryClientProvider (React Query)
├── TooltipProvider (UI tooltips)
├── BrowserRouter (React Router)
├── LanguageProvider (Internationalization)
├── DeviceProvider (Device detection)
├── ScreenReaderAnnouncer (Accessibility)
└── Routes
    └── StandardPageLayout (Main layout)
        ├── SEOHead (Meta tags and SEO)
        ├── Navbar (Navigation header)
        │   ├── LanguageSelector (Language switching)
        │   ├── ThemeToggle (Dark/light mode)
        │   └── Navigation Links
        ├── PageHeader (Optional hero section)
        ├── Main Content (Route-based pages)
        │   ├── Page Components
        │   ├── Medical Condition Components
        │   ├── Form Components
        │   └── Interactive Elements
        ├── Footer (Site footer)
        └── Toaster (Global notifications)
```

### Current Component Statistics
- **Total Components**: 141 files
- **UI Components**: 25+ shadcn/ui components
- **Page Components**: 67+ page files
- **Layout Components**: 4 main layout files
- **Medical Components**: 15+ specialized medical components
- **Utility Components**: 20+ helper components

### Component Design Patterns

1. **Compound Components**: Complex UI elements with multiple parts
2. **Render Props**: Flexible component composition
3. **Custom Hooks**: Reusable stateful logic
4. **Higher-Order Components**: Cross-cutting concerns
5. **Context Providers**: Global state management

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

This architecture provides a solid foundation for a scalable, maintainable, and performant medical website application.
