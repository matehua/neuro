
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
├── components/           # Reusable UI components (25+ components)
│   ├── ui/              # shadcn/ui base components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── PageHeader.tsx   # Page header component
│   ├── HeroSection.tsx  # Homepage hero with parallax
│   ├── TestimonialsSection.tsx # Patient testimonials
│   ├── ProcedureCard.tsx # Medical procedure cards
│   ├── ContactForm.tsx  # Contact and appointment forms
│   ├── SafeImage.tsx    # Optimized image component
│   ├── ErrorBoundary.tsx # Error handling
│   ├── ScreenReaderAnnouncer.tsx # Accessibility
│   ├── LanguageSelector.tsx # Language switching
│   ├── LanguageWrapper.tsx # Language route wrapper
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   └── SkipLink.tsx     # Accessibility skip navigation
├── contexts/            # React Context providers
│   └── LanguageContext.tsx # Multilingual support (English/Chinese)
├── hooks/               # Custom React hooks
│   ├── use-mobile.ts    # Device detection and mobile utilities
│   └── useSEO.ts        # SEO management hook
├── lib/                 # Utility libraries and services
│   ├── utils.ts         # General utilities
│   ├── seo.ts           # SEO utilities and meta management
│   ├── performance.ts   # Performance monitoring system (420 lines)
│   ├── mobile-optimization.ts # Mobile optimization utilities (401 lines)
│   ├── accessibility.ts # Accessibility helpers
│   ├── security.ts      # Security utilities
│   └── env-validation.ts # Environment validation
├── locales/             # Translation files
│   ├── en.ts            # English translations (comprehensive)
│   └── zh.ts            # Chinese translations (comprehensive)
├── pages/               # Page components (50+ pages)
│   ├── Index.tsx        # Homepage with hero, services, testimonials
│   ├── Appointments.tsx # Appointment information
│   ├── AppointmentBooking.tsx # Multi-step booking system
│   ├── About.tsx        # Doctor information and credentials
│   ├── Contact.tsx      # Contact information and forms
│   ├── Expertise.tsx    # Medical expertise and procedures
│   ├── Locations.tsx    # Consulting locations
│   ├── GPResources.tsx  # Resources for general practitioners
│   ├── TestImages.tsx   # Test page for image verification
│   ├── NotFound.tsx     # 404 error page
│   ├── patient-resources/ # Patient education pages
│   │   └── IndividualSpineHealthProgram.tsx
│   └── expertise/       # Detailed expertise pages
│       ├── ImageGuidedSurgery.tsx
│       └── RoboticSpineSurgery.tsx
├── routes/              # Route configuration
│   └── routeConfig.tsx  # Route definitions with i18n
├── App.tsx              # Main application component
├── main.tsx             # Application entry point with initialization
└── index.css            # Global styles

public/
├── images/              # Static images (200+ organized files)
│   ├── conditions/      # Medical condition images (30+ files)
│   ├── exercises/       # Exercise demonstrations (97 files)
│   ├── gp-resources/    # GP referral images (20+ files)
│   ├── locations/       # Clinic location photos (30+ files)
│   ├── patient-resources/ # Patient education images
│   ├── expertise/       # Medical expertise images
│   └── testimonials/    # Patient testimonial photos
├── data/                # JSON data files
│   ├── exercises.json   # Exercise library (75 exercises, 8 categories)
│   └── conditions.json  # Medical conditions data
├── pages/               # Static markdown content files
│   ├── brain-spine-image-guided-surgery/
│   ├── robotic-spine-surgery/
│   └── [other-content]/ # Organized by page/feature
├── logo/                # Brand assets (multiple formats)
├── favicon.ico          # Site favicon
├── manifest.json        # PWA manifest
├── robots.txt           # SEO robots file
└── sitemap.xml          # SEO sitemap

docs/                    # Project documentation (this folder)
├── README.md            # This file - project overview
├── architecture/        # Architecture documentation
│   └── project-structure.md # Detailed project structure
├── components/          # Component documentation
│   └── component-documentation.md # Component usage guide
├── pages/               # Page content documentation
│   ├── homepage.md      # Homepage content specification
│   ├── appointments.md  # Appointments page specification
│   ├── about.md         # About page specification
│   ├── contact.md       # Contact page specification
│   └── expertise.md     # Expertise page specification
└── setup/               # Setup and deployment guides
    └── lovable-clone-script.md # Complete cloning instructions

scripts/                 # Utility scripts
├── verify-production-env.js # Environment verification (215 lines)
└── verify-no-console.js # Console detection (235 lines)
```

## Key Features

1. **Multilingual Support**: Complete English and Chinese translations
2. **Responsive Design**: Mobile-first approach with device detection
3. **Performance Monitoring**: Custom performance tracking system
4. **SEO Optimization**: Comprehensive SEO utilities and meta management
5. **Accessibility**: Screen reader support and ARIA compliance
6. **Mobile Optimization**: Dedicated mobile performance enhancements
7. **Error Handling**: Global error boundary and error reporting
8. **Appointment Booking**: Multi-step appointment booking system
9. **Location-based Pages**: Multiple consulting location pages
10. **Professional Services**: Comprehensive medical service information

## Core Architecture Components

### Layout System
- `Layout.tsx` - Main layout wrapper with SEO integration
- `Navbar.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Site footer with contact information
- `PageHeader.tsx` - Reusable page header with background support

### Content Components
- `HeroSection.tsx` - Homepage hero with parallax effects
- `TestimonialsSection.tsx` - Patient testimonials carousel
- `ProcedureCard.tsx` - Medical procedure information displays
- `ContactForm.tsx` - Contact and appointment forms
- `SafeImage.tsx` - Optimized image loading with error handling

### Service Layer
- `lib/performance.ts` - Performance monitoring (420 lines)
- `lib/mobile-optimization.ts` - Mobile optimization (401 lines)
- `lib/seo.ts` - SEO management utilities
- `lib/accessibility.ts` - Accessibility helper functions
- `lib/security.ts` - Security utilities

### Context & State Management
- `LanguageContext.tsx` - Multilingual support context
- Custom hooks for device detection and SEO management
- Local state management for UI components

## Production Readiness

The application is production-ready with:
- Zero console statements in production builds
- Comprehensive error handling and reporting
- Performance monitoring and optimization
- Security compliance measures
- Mobile optimization features
- Complete SEO implementation
- Accessibility compliance (WCAG 2.1 AA)

## Development Guidelines

1. **Component Structure**: Small, focused components (aim for <50 lines)
2. **Performance**: Lazy loading and code splitting implemented
3. **Accessibility**: ARIA labels and screen reader support throughout
4. **Mobile-First**: Responsive design with device-specific optimizations
5. **TypeScript**: Strict type checking enabled across the codebase
6. **Error Handling**: Proper error boundaries and user feedback
7. **SEO**: Meta tags and structured data on all pages

## Build Configuration

- **Vite**: Optimized build with code splitting
- **TypeScript**: Strict mode with comprehensive type checking
- **Tailwind CSS**: Utility-first styling with custom components
- **Environment**: Production-ready configuration with validation

## Getting Started

See the setup documentation in `docs/setup/` for detailed instructions on cloning and deploying this application.
