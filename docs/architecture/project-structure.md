
# Project Architecture & Structure

## Directory Structure

```
miNEURO/
├── src/
│   ├── components/
│   │   ├── Layout.tsx                    # Main layout wrapper
│   │   ├── Navbar.tsx                    # Navigation header
│   │   ├── Footer.tsx                    # Site footer
│   │   ├── PageHeader.tsx                # Page header component
│   │   ├── HeroSection.tsx               # Homepage hero section
│   │   ├── TestimonialsSection.tsx       # Patient testimonials
│   │   ├── ProcedureCard.tsx             # Medical procedure cards
│   │   ├── ContactForm.tsx               # Contact forms
│   │   ├── SafeImage.tsx                 # Optimized image component
│   │   ├── ErrorBoundary.tsx             # Error handling
│   │   ├── ScreenReaderAnnouncer.tsx     # Accessibility
│   │   └── ui/                           # shadcn/ui components
│   │
│   ├── contexts/
│   │   └── LanguageContext.tsx           # Multilingual support
│   │
│   ├── hooks/
│   │   ├── use-mobile.ts                 # Device detection
│   │   └── useSEO.ts                     # SEO management
│   │
│   ├── lib/
│   │   ├── seo.ts                        # SEO utilities
│   │   ├── performance.ts                # Performance monitoring (420 lines)
│   │   ├── mobile-optimization.ts        # Mobile optimization (401 lines)
│   │   ├── accessibility.ts              # Accessibility helpers
│   │   └── utils.ts                      # General utilities
│   │
│   ├── locales/
│   │   ├── en.ts                         # English translations
│   │   └── zh.ts                         # Chinese translations
│   │
│   ├── pages/
│   │   ├── Index.tsx                     # Homepage
│   │   ├── Appointments.tsx              # Appointment booking
│   │   ├── AppointmentBooking.tsx        # Booking system
│   │   ├── About.tsx                     # Doctor information
│   │   ├── Contact.tsx                   # Contact page
│   │   ├── Expertise.tsx                 # Medical expertise
│   │   ├── Locations.tsx                 # Consulting locations
│   │   ├── GPResources.tsx               # GP resources
│   │   ├── NotFound.tsx                  # 404 page
│   │   ├── TestImages.tsx                # Test page
│   │   └── patient-resources/            # Patient resources
│   │       └── IndividualSpineHealthProgram.tsx
│   │
│   ├── routes/
│   │   └── routeConfig.tsx               # Route configuration
│   │
│   ├── App.tsx                           # Main app component
│   └── main.tsx                          # Application entry point
│
├── public/
│   ├── images/                           # Static images
│   └── pages/                            # Static markdown content
│       ├── contact-neurosurgeon-spine-surgeon-near-me-melbourne/
│       ├── neurosurgeon-and-spine-surgeon-consulting-locations-in-melbourne-and-victoria/
│       ├── bundoora-specialist-neurosurgeon-spine-surgeon/
│       ├── werribee-specialist-neurosurgeon-spine-surgeon/
│       └── sunbury-specialist-neurosurgeon-spine-surgeon/
│
├── scripts/
│   ├── verify-production-env.js          # Environment verification (215 lines)
│   └── verify-no-console.js              # Console detection (235 lines)
│
├── docs/                                 # Documentation (this folder)
├── .env.production                       # Production environment
├── vite.config.ts                        # Vite configuration
├── CONSOLE-REMOVAL-COMPLETE.md           # Production readiness (229 lines)
└── package.json                          # Dependencies
```

## Component Hierarchy

### Layout Components
```
App
├── ErrorBoundary
├── QueryClientProvider
├── TooltipProvider
├── BrowserRouter
└── AppContent
    ├── LanguageProvider
    ├── ScreenReaderAnnouncer
    └── Routes
        └── Layout (for most pages)
            ├── Navbar
            ├── main content
            └── Footer
```

### Page Components
- **Index.tsx**: Homepage with hero, services, testimonials
- **Appointments.tsx**: Appointment information and booking
- **AppointmentBooking.tsx**: Multi-step booking system
- **About.tsx**: Doctor credentials and experience
- **Contact.tsx**: Contact information and forms
- **Expertise.tsx**: Medical procedures and expertise
- **Locations.tsx**: Consulting room locations
- **GPResources.tsx**: Resources for general practitioners

## Service Architecture

### Performance Monitoring
- Singleton pattern performance monitor
- Navigation timing metrics
- Resource loading metrics
- Component render performance
- Memory and battery monitoring

### Mobile Optimization
- Touch event optimization
- Viewport configuration
- Image lazy loading
- PWA features
- Network-aware loading

### SEO Management
- Dynamic meta tag generation
- Structured data
- Open Graph tags
- Twitter cards
- Canonical URLs

### Accessibility
- Screen reader announcements
- ARIA label management
- Keyboard navigation
- Focus management
- High contrast support

## State Management

### Global State
- Language context for multilingual support
- Device detection state
- Performance metrics
- SEO metadata

### Local State
- Form data in components
- UI state (modals, dropdowns)
- Loading states
- Error states

## Routing Strategy

- React Router DOM with nested routes
- Route-based code splitting
- SEO-friendly URLs
- Multilingual route support
- 404 error handling

## Build Strategy

### Development
- Hot module replacement
- Source maps enabled
- Console logging allowed
- Performance monitoring active

### Production
- Aggressive minification
- Console statement removal
- Code splitting optimization
- Asset optimization
- Bundle analysis
