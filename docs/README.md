
# miNEURO - Neurosurgeon Website Documentation

## Project Overview

miNEURO is a comprehensive neurosurgeon website built with React, TypeScript, and Tailwind CSS. It serves as a professional medical practice website for Dr. Ales Aliashkevich, featuring appointment booking, multilingual support, and comprehensive information about neurosurgical services.

## Architecture Overview

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Internationalization**: Custom multilingual system (English/Chinese)
- **Performance**: Custom performance monitoring system
- **Mobile Optimization**: Dedicated mobile optimization utilities

### Project Structure
```
src/
├── components/           # Reusable UI components
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries and services
├── locales/             # Translation files
├── pages/               # Page components
├── routes/              # Route configuration
└── main.tsx            # Application entry point

public/
├── images/             # Static images
└── pages/              # Static markdown content

docs/
├── architecture/       # Architecture documentation
├── components/         # Component documentation
├── pages/              # Page content documentation
└── setup/              # Setup and deployment guides
```

## Key Features

1. **Multilingual Support**: English and Chinese translations
2. **Responsive Design**: Mobile-first approach with device detection
3. **Performance Monitoring**: Custom performance tracking system
4. **SEO Optimization**: Comprehensive SEO utilities and meta management
5. **Accessibility**: Screen reader support and ARIA compliance
6. **Mobile Optimization**: Dedicated mobile performance enhancements
7. **Error Handling**: Global error boundary and error reporting
8. **Appointment Booking**: Multi-step appointment booking system
9. **Location-based Pages**: Multiple consulting location pages
10. **Professional Services**: Comprehensive medical service information

## Core Components

### Layout Components
- `Layout.tsx` - Main layout wrapper with SEO
- `Navbar.tsx` - Navigation header
- `Footer.tsx` - Site footer
- `PageHeader.tsx` - Page header component

### Feature Components
- `HeroSection.tsx` - Homepage hero with parallax
- `TestimonialsSection.tsx` - Patient testimonials
- `ProcedureCard.tsx` - Medical procedure information cards
- `ContactForm.tsx` - Contact and appointment forms
- `SafeImage.tsx` - Optimized image component

### Utility Components
- `ErrorBoundary.tsx` - Error handling
- `ScreenReaderAnnouncer.tsx` - Accessibility announcements

## Services & Libraries

### Core Libraries
- `lib/seo.ts` - SEO utilities and meta management
- `lib/performance.ts` - Performance monitoring system (420 lines)
- `lib/mobile-optimization.ts` - Mobile optimization utilities (401 lines)
- `lib/accessibility.ts` - Accessibility helpers

### Context Providers
- `LanguageContext.tsx` - Multilingual support
- Custom hook: `useLanguage()` - Language switching

### Custom Hooks
- `use-mobile.ts` - Device detection and mobile utilities
- `useSEO.ts` - SEO management hook

## Pages Structure

### Main Pages
1. **Homepage** (`/`) - Hero, services overview, testimonials
2. **Appointments** (`/appointments`) - Appointment booking system
3. **About** (`/about`) - Doctor information and credentials
4. **Contact** (`/contact`) - Contact information and forms
5. **Expertise** (`/expertise`) - Medical expertise and procedures
6. **Locations** (`/locations`) - Consulting locations
7. **GP Resources** (`/gp-resources`) - Resources for general practitioners
8. **Patient Resources** (`/patient-resources`) - Patient information

### Location-Specific Pages
- Multiple location pages for different consulting rooms across Melbourne
- Each location has English and Chinese versions

### Specialized Pages
- Appointment booking system with multi-step flow
- Individual spine health program
- Emergency contact information
- Referral protocols for GPs

## Environment Configuration

### Production Environment Variables
- Site configuration (URL, contact details)
- Analytics integration (Google Analytics, Tag Manager)
- Email services (EmailJS)
- Error reporting (Sentry)
- Feature flags
- Security configurations

## Build Configuration

### Vite Configuration
- Optimized build with terser
- Comprehensive console statement removal for production
- Code splitting and chunk optimization
- Performance optimizations

### Scripts
- Production environment verification
- Console statement detection
- Pre-deployment checks

## Deployment Notes

The application is production-ready with:
- Zero console statements in production
- Comprehensive error handling
- Performance monitoring
- Security compliance
- Mobile optimization
- SEO optimization

## Development Guidelines

1. **Component Structure**: Small, focused components (aim for <50 lines)
2. **Performance**: Use lazy loading and code splitting
3. **Accessibility**: Include ARIA labels and screen reader support
4. **Mobile-First**: Always consider mobile experience
5. **TypeScript**: Strict type checking enabled
6. **Error Handling**: Proper error boundaries and reporting
7. **SEO**: Include proper meta tags and structured data

## Getting Started

See `docs/setup/` for detailed setup instructions and deployment guides.
