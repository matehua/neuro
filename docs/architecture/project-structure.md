
# Project Architecture & Structure

## Complete Directory Structure

```
miNEURO/
├── src/
│   ├── components/                       # UI Components (25+ files)
│   │   ├── ui/                          # shadcn/ui base components
│   │   │   ├── accordion.tsx            # Collapsible content sections
│   │   │   ├── alert-dialog.tsx         # Modal alert dialogs
│   │   │   ├── avatar.tsx               # User avatar display
│   │   │   ├── badge.tsx                # Status and category badges
│   │   │   ├── button.tsx               # Button variants and styles
│   │   │   ├── calendar.tsx             # Date picker calendar
│   │   │   ├── card.tsx                 # Content container cards
│   │   │   ├── checkbox.tsx             # Form checkboxes
│   │   │   ├── dialog.tsx               # Modal dialogs
│   │   │   ├── dropdown-menu.tsx        # Dropdown menus
│   │   │   ├── form.tsx                 # Form components
│   │   │   ├── input.tsx                # Text input fields
│   │   │   ├── label.tsx                # Form labels
│   │   │   ├── popover.tsx              # Floating content
│   │   │   ├── progress.tsx             # Progress indicators
│   │   │   ├── radio-group.tsx          # Radio button groups
│   │   │   ├── select.tsx               # Select dropdowns
│   │   │   ├── separator.tsx            # Visual separators
│   │   │   ├── sheet.tsx                # Side panels
│   │   │   ├── sonner.tsx               # Toast notifications
│   │   │   ├── switch.tsx               # Toggle switches
│   │   │   ├── table.tsx                # Data tables
│   │   │   ├── tabs.tsx                 # Tabbed navigation
│   │   │   ├── textarea.tsx             # Multi-line text input
│   │   │   └── tooltip.tsx              # Hover tooltips
│   │   ├── Layout.tsx                   # Main layout wrapper
│   │   ├── Navbar.tsx                   # Navigation header
│   │   ├── Footer.tsx                   # Site footer
│   │   ├── PageHeader.tsx               # Page header component
│   │   ├── HeroSection.tsx              # Homepage hero section
│   │   ├── TestimonialsSection.tsx      # Patient testimonials
│   │   ├── ProcedureCard.tsx            # Medical procedure cards
│   │   ├── ContactForm.tsx              # Contact forms
│   │   ├── SafeImage.tsx                # Optimized image component
│   │   ├── ErrorBoundary.tsx            # Error handling
│   │   ├── ScreenReaderAnnouncer.tsx    # Accessibility
│   │   ├── LanguageSelector.tsx         # Language switching
│   │   ├── LanguageWrapper.tsx          # Language route wrapper
│   │   ├── ThemeToggle.tsx              # Dark/light mode toggle
│   │   └── SkipLink.tsx                 # Accessibility skip navigation
│   │
│   ├── contexts/                        # State Management
│   │   └── LanguageContext.tsx          # Multilingual support context
│   │
│   ├── hooks/                           # Custom React Hooks
│   │   ├── use-mobile.ts                # Device detection utilities
│   │   └── useSEO.ts                    # SEO management hook
│   │
│   ├── lib/                             # Utility Libraries & Services
│   │   ├── utils.ts                     # General utility functions
│   │   ├── seo.ts                       # SEO utilities and meta management
│   │   ├── performance.ts               # Performance monitoring (420 lines)
│   │   ├── mobile-optimization.ts       # Mobile optimization (401 lines)
│   │   ├── accessibility.ts             # Accessibility helper functions
│   │   ├── security.ts                  # Security utilities
│   │   └── env-validation.ts            # Environment validation
│   │
│   ├── locales/                         # Internationalization
│   │   ├── en.ts                        # English translations (comprehensive)
│   │   └── zh.ts                        # Chinese translations (comprehensive)
│   │
│   ├── pages/                           # Page Components (50+ pages)
│   │   ├── Index.tsx                    # Homepage
│   │   ├── Appointments.tsx             # Appointment information
│   │   ├── AppointmentBooking.tsx       # Multi-step booking system
│   │   ├── About.tsx                    # Doctor information
│   │   ├── Contact.tsx                  # Contact page
│   │   ├── Expertise.tsx                # Medical expertise
│   │   ├── Locations.tsx                # Consulting locations
│   │   ├── GPResources.tsx              # GP resources
│   │   ├── TestImages.tsx               # Image testing page
│   │   ├── NotFound.tsx                 # 404 error page
│   │   ├── patient-resources/           # Patient education
│   │   │   └── IndividualSpineHealthProgram.tsx
│   │   └── expertise/                   # Detailed expertise pages
│   │       ├── ImageGuidedSurgery.tsx
│   │       └── RoboticSpineSurgery.tsx
│   │
│   ├── routes/                          # Routing Configuration
│   │   └── routeConfig.tsx              # Route definitions with i18n
│   │
│   ├── App.tsx                          # Main application component
│   ├── main.tsx                         # Application entry point
│   └── index.css                        # Global styles
│
├── public/                              # Static Assets
│   ├── images/                          # Image Assets (200+ files)
│   │   ├── conditions/                  # Medical condition images
│   │   ├── exercises/                   # Exercise demonstration images
│   │   ├── gp-resources/                # GP referral images
│   │   ├── locations/                   # Clinic location photos
│   │   ├── patient-resources/           # Patient education images
│   │   ├── expertise/                   # Medical expertise images
│   │   └── testimonials/                # Patient testimonial photos
│   ├── data/                            # JSON Data Files
│   │   ├── exercises.json               # Exercise library data
│   │   └── conditions.json              # Medical conditions data
│   ├── pages/                           # Static Content
│   │   ├── brain-spine-image-guided-surgery/
│   │   ├── robotic-spine-surgery/
│   │   └── [other-content]/
│   ├── logo/                            # Brand assets
│   ├── favicon.ico                      # Site favicon
│   ├── manifest.json                    # PWA manifest
│   ├── robots.txt                       # SEO robots file
│   └── sitemap.xml                      # SEO sitemap
│
├── docs/                                # Documentation
│   ├── README.md                        # Project overview
│   ├── architecture/
│   │   └── project-structure.md         # This file
│   ├── components/
│   │   └── component-documentation.md   # Component usage guide
│   ├── pages/                           # Page specifications
│   │   ├── homepage.md
│   │   ├── appointments.md
│   │   ├── about.md
│   │   ├── contact.md
│   │   └── expertise.md
│   └── setup/
│       └── lovable-clone-script.md      # Complete cloning guide
│
├── scripts/                             # Build Scripts
│   ├── verify-production-env.js         # Environment verification
│   └── verify-no-console.js             # Console detection
│
├── .env                                 # Environment variables
├── .env.example                         # Environment template
├── .env.production                      # Production environment
├── vite.config.ts                       # Vite configuration
├── tsconfig.json                        # TypeScript configuration
├── tailwind.config.ts                   # Tailwind CSS configuration
├── eslint.config.js                     # ESLint configuration
├── package.json                         # Dependencies and scripts
└── README.md                            # Project README
```

## Component Hierarchy & Relationships

### Application Root
```
App (ErrorBoundary → QueryClient → Tooltip → Router)
├── LanguageProvider (Global state)
├── ScreenReaderAnnouncer (Accessibility)
└── Routes
    └── Individual Pages wrapped in Layout
        ├── Navbar
        │   ├── LanguageSelector
        │   ├── ThemeToggle
        │   └── Navigation Links
        ├── Main Content (Page-specific)
        │   ├── PageHeader (optional)
        │   ├── Page Components
        │   └── Interactive Elements
        └── Footer
            ├── Contact Information
            ├── Location Links
            └── Social Links
```

### Key Component Dependencies

#### Layout Components
- **Layout.tsx** ← Uses: SEO hooks, accessibility, routing
- **Navbar.tsx** ← Uses: LanguageSelector, ThemeToggle, routing
- **PageHeader.tsx** ← Uses: Device detection, image optimization

#### Content Components
- **HeroSection.tsx** ← Uses: Device detection, parallax effects
- **TestimonialsSection.tsx** ← Uses: Language context, animations
- **ProcedureCard.tsx** ← Uses: SafeImage, routing
- **ContactForm.tsx** ← Uses: Form validation, email service

#### Utility Components
- **SafeImage.tsx** ← Standalone with error handling
- **ErrorBoundary.tsx** ← Standalone error catching
- **ScreenReaderAnnouncer.tsx** ← Accessibility service

## Service Layer Architecture

### Performance Services
- **performance.ts** (420 lines)
  - Singleton performance monitor
  - Navigation timing metrics
  - Resource loading tracking
  - Memory and battery monitoring
  - Component render performance

### Mobile Optimization Services
- **mobile-optimization.ts** (401 lines)
  - Touch event optimization
  - Viewport configuration
  - Image lazy loading
  - PWA features
  - Network-aware loading

### SEO Services
- **seo.ts**
  - Dynamic meta tag generation
  - Structured data management
  - Open Graph integration
  - Twitter cards
  - Canonical URL handling

### Accessibility Services
- **accessibility.ts**
  - Screen reader announcements
  - ARIA label management
  - Keyboard navigation
  - Focus management
  - High contrast support

## Data Flow Architecture

### State Management Flow
```
LanguageContext (Global)
├── Language Selection
├── Translation Loading
├── URL Path Management
└── Persistence (localStorage)

Local Component State
├── Form Data
├── UI State (modals, dropdowns)
├── Loading States
└── Error States

Device Detection
├── Screen Size Detection
├── Touch Capability
├── Performance Preferences
└── Network Status
```

### Route-based Architecture
```
Route Configuration (routeConfig.tsx)
├── Base Routes (/)
├── Language Routes (/en/, /zh/)
├── Nested Routes (expertise/, locations/)
└── Dynamic Routes ([slug])

Route Protection
├── Language Validation
├── 404 Handling
├── SEO Meta Generation
└── Accessibility Announcements
```

## Build & Deployment Architecture

### Development Build
- Hot module replacement enabled
- Source maps for debugging
- Console logging allowed
- Performance monitoring active
- Type checking in real-time

### Production Build
- Aggressive code minification
- Console statement removal
- Code splitting optimization
- Asset optimization and compression
- Bundle size analysis

### Performance Optimizations
- Route-based code splitting
- Component lazy loading
- Image optimization pipeline
- Service worker caching
- CDN asset delivery

## Integration Points

### External Services
- **EmailJS**: Contact form submissions
- **Google Analytics**: Usage tracking
- **Performance APIs**: Browser performance monitoring
- **Accessibility APIs**: Screen reader integration

### Browser APIs
- **Intersection Observer**: Lazy loading
- **Performance Observer**: Metrics collection
- **Media Queries**: Responsive design
- **Local Storage**: User preferences
- **Service Worker**: PWA features

This architecture ensures scalability, maintainability, and optimal performance across all devices and use cases.
