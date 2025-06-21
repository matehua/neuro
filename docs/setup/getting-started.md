# Getting Started Guide

Complete setup and development guide for the miNEURO neurosurgery website.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** (v9 or later) - Included with Node.js
- **Git** - [Download](https://git-scm.com/)

## Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/r70pro/neuro.git
cd neuro

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at [http://localhost:8081](http://localhost:8081) (Vite automatically selects available port).

### 2. Project Overview

**miNEURO Website** is a modern neurosurgery practice website built with:

- **React 18** + **TypeScript** for type-safe development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** + **shadcn/ui** for modern UI components
- **React Router** for client-side routing with i18n support
- **React Query** for efficient data fetching and caching

### 3. Key Features

- ✅ **Multilingual Support** (English/Chinese)
- ✅ **Responsive Design** (Mobile-first approach)
- ✅ **Accessibility Compliant** (WCAG 2.1 AA)
- ✅ **SEO Optimized** with meta tags and sitemap
- ✅ **Performance Optimized** (90+ Lighthouse scores)
- ✅ **Medical Content Management** (Exercise library, conditions)

## Development Workflow

### Branch Strategy

```bash
# Feature development
git checkout -b feature/your-feature-name

# Bug fixes
git checkout -b bugfix/issue-description

# Documentation updates
git checkout -b docs/update-description
```

### Development Commands

```bash
# Development
npm run dev              # Start dev server (auto-selects port)
npm run build           # Production build
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking

# Testing and Validation
npm run test            # Run tests (if configured)
npm audit               # Security audit
npm audit fix           # Fix security vulnerabilities

# Utilities
node scripts/verify-exercise-images.js  # Verify exercise images
node scripts/generate-sitemap.js        # Generate sitemap
```

### Code Quality Standards

- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Configured for React + TypeScript
- **Prettier**: Automatic code formatting
- **Component Structure**: Functional components with hooks
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## Project Architecture

### Directory Structure

```
miNEURO/
├── public/                 # Static assets
│   ├── images/            # Organized image assets (200+ files)
│   │   ├── conditions/    # Medical condition images
│   │   ├── exercises/     # Exercise demonstration images (97 files)
│   │   ├── gp-resources/  # GP resource images
│   │   └── locations/     # Clinic location images
│   ├── data/              # JSON data files
│   │   └── exercises.json # Exercise library data (75 exercises)
│   └── pages/             # Markdown content files
├── src/
│   ├── components/        # Reusable UI components (50+ components)
│   │   ├── ui/           # shadcn/ui base components (25+ components)
│   │   ├── layout/       # Layout-specific components
│   │   ├── medical-conditions/ # Medical condition components
│   │   ├── Layout.tsx    # Legacy layout wrapper (deprecated)
│   │   ├── StandardPageLayout.tsx # Main layout component
│   │   ├── SafeImage.tsx # Enhanced image component
│   │   ├── ErrorBoundary.tsx # Error handling
│   │   ├── LanguageSelector.tsx # Language switching
│   │   └── ...           # Other utility components
│   ├── pages/            # Page components (67+ pages)
│   │   ├── expertise/    # Medical expertise pages (15+ pages)
│   │   ├── patient-resources/ # Patient education (20+ pages)
│   │   │   ├── conditions/ # Medical condition pages
│   │   │   └── ...       # Other patient resources
│   │   ├── gp-resources/ # GP referral resources (5+ pages)
│   │   └── locations/    # Clinic locations (3+ pages)
│   ├── contexts/         # React contexts for global state
│   │   ├── LanguageContext.tsx # Internationalization
│   │   └── DeviceContext.tsx # Device detection
│   ├── hooks/            # Custom React hooks
│   │   ├── useSEO.ts     # SEO metadata management
│   │   └── use-mobile.ts # Mobile device detection
│   ├── lib/              # Utility functions and helpers
│   │   ├── utils.ts      # General utilities
│   │   ├── accessibility.ts # Accessibility helpers
│   │   ├── seo.ts        # SEO functionality
│   │   └── ...           # Other utilities
│   ├── data/             # Static data management
│   │   └── conditions/   # Medical condition data
│   ├── locales/          # Translation files (1700+ keys each)
│   │   ├── en.ts         # English translations
│   │   └── zh.ts         # Chinese translations
│   ├── routes/           # Routing configuration
│   │   ├── routeConfig.tsx # Main route definitions
│   │   └── ...           # Route utilities
│   └── types/            # TypeScript type definitions
└── docs/                 # Project documentation
```

### Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 + TypeScript | Type-safe UI development |
| **Build Tool** | Vite | Fast development and optimized builds |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Components** | shadcn/ui + Radix UI | Accessible component library |
| **Routing** | React Router v6 | Client-side routing with i18n |
| **State Management** | React Query + Context | Data fetching and global state |
| **Forms** | React Hook Form + Zod | Form handling with validation |
| **Internationalization** | Custom i18n system | English/Chinese support |

## Development Best Practices

### Component Development

```typescript
// Example component structure
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({
  className,
  children
}) => {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
};
```

### Image Handling

```typescript
// Use SafeImage for all images
import SafeImage from '@/components/SafeImage';

<SafeImage
  src="/images/conditions/example.jpg"
  alt="Descriptive alt text"
  fallbackSrc="/images/medical-consulting.jpg"
  className="w-full h-auto"
/>
```

### Internationalization

```typescript
// Use translation hooks
import { useTranslation } from '@/contexts/LanguageContext';

const { t } = useTranslation();
return <h1>{t('page.title')}</h1>;
```

## Troubleshooting

### Common Issues

1. **Port 3000 in use**: Vite will automatically use port 3001
2. **Build errors**: Run `npm run lint` to check for issues
3. **Image loading**: Verify paths in `public/images/` directory
4. **Translation missing**: Check `src/locales/` files

### Performance Optimization

- Images are optimized and properly sized
- Code splitting implemented for better loading
- Bundle analysis available via build output
- Lazy loading for non-critical components

## Next Steps

1. **Read Architecture Guide**: [../reference/architecture.md](../reference/architecture.md)
2. **Review Components**: [../reference/component-library.md](../reference/component-library.md)
3. **Understand Deployment**: [./deployment.md](./deployment.md)
4. **Check Development Guidelines**: [../guides/development-guidelines.md](../guides/development-guidelines.md)

- Learn about the [Codebase Structure](../reference/codebase-structure.md)
- Explore the [Component System](../reference/component-system.md)
- Understand the [Internationalization System](../guides/internationalization.md)
- Review the [Service Layer](../reference/service-layer.md)

If you encounter any issues or have questions, please refer to the documentation or reach out to the project maintainers.
