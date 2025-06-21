# Codebase Structure Reference

Complete mapping of the miNEURO codebase structure, including all files, directories, components, hooks, services, and their relationships.

## Root Directory Structure

```
miNEURO/
├── src/                    # Application source code
├── public/                 # Static assets
├── docs/                   # Documentation
├── scripts/                # Utility scripts
├── dist/                   # Production build output
├── node_modules/           # Dependencies
├── package.json            # Project configuration
├── vite.config.ts          # Build configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Styling configuration
└── components.json         # shadcn/ui configuration
```

## Source Code Architecture (`src/`)

### Components Layer (`src/components/`)

#### Core Layout Components
```
src/components/
├── Layout.tsx                    # Legacy layout wrapper (deprecated)
├── StandardPageLayout.tsx        # Main layout component
├── Navbar.tsx                    # Navigation header
├── Footer.tsx                    # Site footer
├── PageHeader.tsx               # Page header with hero functionality
└── layout/                      # Layout utilities
    ├── LayoutVariants.tsx       # Pre-configured layout variants
    ├── StandardSection.tsx      # Standardized content sections
    └── types.ts                 # Layout type definitions
```

#### UI Components (`src/components/ui/`)
Based on shadcn/ui with custom enhancements:
```
ui/
├── accordion.tsx               # Collapsible content sections
├── alert-dialog.tsx           # Modal alert dialogs
├── avatar.tsx                 # User avatar display
├── badge.tsx                  # Status and category badges
├── button.tsx                 # Button variants and styles
├── calendar.tsx               # Date picker calendar
├── card.tsx                   # Content container cards
├── checkbox.tsx               # Form checkboxes
├── dialog.tsx                 # Modal dialogs
├── dropdown-menu.tsx          # Dropdown menus
├── form.tsx                   # Form components
├── input.tsx                  # Input fields
├── label.tsx                  # Form labels
├── popover.tsx                # Popover overlays
├── scroll-area.tsx            # Custom scrollbars
├── select.tsx                 # Select dropdowns
├── separator.tsx              # Visual separators
├── sheet.tsx                  # Slide-out panels
├── skeleton.tsx               # Loading skeletons
├── switch.tsx                 # Toggle switches
├── table.tsx                  # Data tables
├── tabs.tsx                   # Tab navigation
├── textarea.tsx               # Multi-line text input
├── toast.tsx                  # Notification toasts
├── toaster.tsx                # Toast container
├── tooltip.tsx                # Hover tooltips
└── use-toast.ts               # Toast hook
```

#### Utility Components
```
src/components/
├── AppointmentForm.tsx         # Appointment booking form
├── CTASection.tsx              # Call-to-action sections
├── EnhancedImage.tsx           # Advanced image component
├── ErrorBoundary.tsx           # Error handling boundary
├── HeroSection.tsx             # Homepage hero section
├── IndependentReviewsSection.tsx # Review display
├── LanguageSelector.tsx        # Language switching
├── LanguageWrapper.tsx         # Language context wrapper
├── Loading.tsx                 # Loading indicators
├── NetworkStatus.tsx           # Network connectivity status
├── OptimizedImage.tsx          # Performance-optimized images
├── ProcedureCard.tsx           # Medical procedure cards
├── SEOHead.tsx                 # SEO meta tags
├── SafeImage.tsx               # Error-safe image component
├── ScreenReaderAnnouncer.tsx   # Accessibility announcements
├── SkipLink.tsx                # Accessibility skip navigation
├── TestimonialsSection.tsx     # Patient testimonials
└── ThemeToggle.tsx             # Dark/light theme toggle
```

#### Medical Condition Components
```
medical-conditions/
├── shared/                     # Reusable condition components
│   ├── ConditionHeroSection.tsx
│   ├── ConditionOverviewSection.tsx
│   ├── ConditionQuickFacts.tsx
│   └── types.ts
├── arthrosis/                  # Arthrosis-specific components
│   └── ArthrosisTypesSection.tsx
└── facet-arthropathy/          # Facet arthropathy components
    └── FacetJointAnatomySection.tsx
```

### Pages Layer (`src/pages/`)

#### Main Pages
```
src/pages/
├── Index.tsx                   # Homepage
├── Appointments.tsx            # Appointment booking
├── AppointmentBooking.tsx      # Booking form page
├── Contact.tsx                 # Contact information
├── Expertise.tsx               # Medical expertise overview
├── Faq.tsx                     # Frequently asked questions
├── Gallery.tsx                 # Image gallery
├── GPResources.tsx             # GP referral resources
├── Locations.tsx               # Clinic locations
├── Medicolegal.tsx             # Medicolegal services
├── NotFound.tsx                # 404 error page
├── PatientResources.tsx        # Patient education
├── PrivacyPolicy.tsx           # Privacy policy
├── Specialties.tsx             # Medical specialties
├── TermsConditions.tsx         # Terms and conditions
├── TestImages.tsx              # Image testing page
└── ConsultingRooms.tsx         # Consulting room information
```

#### Expertise Pages
```
expertise/
├── BrainSpineImageGuidedSurgery.tsx
├── RoboticSpineSurgery.tsx
├── SpinalCordStimulation.tsx
├── SpinalFusion.tsx
├── SpinalTumors.tsx
└── [other expertise pages]
```

#### Patient Resources
```
patient-resources/
├── conditions/                 # Medical condition pages
│   ├── Arthrosis.tsx
│   ├── Discopathy.tsx
│   ├── FacetArthropathy.tsx
│   ├── FacetArthropathyRefactored.tsx
│   ├── HerniatedDisc.tsx
│   ├── Sciatica.tsx
│   ├── SpinalStenosis.tsx
│   └── [other conditions]
├── ExerciseLibrary.tsx         # Exercise database
├── ConditionInformation.tsx    # Condition overview
├── PrePostOpInstructions.tsx   # Surgery instructions
├── PainManagement.tsx          # Pain management guide
└── RecoveryTimelines.tsx       # Recovery information
```

#### GP Resources
```
gp-resources/
├── ReferralProcess.tsx         # How to refer patients
├── ClinicalGuidelines.tsx      # Medical guidelines
├── ContactInformation.tsx      # GP contact details
└── EducationalMaterials.tsx    # Educational content
```

#### Location Pages
```
locations/
├── EpworthRichmond.tsx         # Richmond clinic
├── Langwarrin.tsx              # Langwarrin clinic
└── [other locations]
```

### Context Layer (`src/contexts/`)

#### Global State Management
```
src/contexts/
├── LanguageContext.tsx         # Internationalization context
│   ├── Language detection and switching
│   ├── Translation loading and fallbacks
│   ├── URL-based language routing
│   └── Safe translation access
└── DeviceContext.tsx           # Device detection context
    ├── Mobile/desktop detection
    ├── Screen size monitoring
    └── Touch capability detection
```

### Hooks Layer (`src/hooks/`)

#### Custom Hooks
```
src/hooks/
├── use-mobile.ts               # Mobile device detection
│   ├── Breakpoint monitoring
│   ├── Responsive behavior
│   └── Window size tracking
└── useSEO.ts                   # SEO metadata management
    ├── Meta tag updates
    ├── Structured data
    ├── Language alternates
    └── Canonical URLs
```

### Service Layer (`src/lib/`)

#### Utility Libraries
```
src/lib/
├── utils.ts                    # General utilities
├── accessibility.ts           # Accessibility helpers
├── env-validation.ts           # Environment validation
├── error-handling.ts           # Error management
├── mobile-optimization.ts      # Mobile enhancements
├── performance.ts              # Performance monitoring
├── security.ts                 # Security utilities
├── seo.ts                      # SEO functionality
├── sitemap.ts                  # Sitemap generation
├── test-utils.tsx              # Testing utilities
└── type-safety.ts              # Type safety helpers
```

### Data Layer (`src/data/`)

#### Static Data Management
```
src/data/
└── conditions/                 # Medical condition data
    ├── discopathy.ts           # Discopathy condition data
    └── [other condition data files]
```

### Routing Layer (`src/routes/`)

#### Route Configuration
```
src/routes/
├── routeConfig.tsx             # Main route definitions
├── route-definitions.ts        # Route type definitions
└── route-loader.tsx            # Route loading utilities
```

### Internationalization (`src/locales/`)

#### Translation Files
```
src/locales/
├── en.ts                       # English translations (1700+ keys)
├── zh.ts                       # Chinese translations (1700+ keys)
└── [backup files]              # Translation backups
```

### Type Definitions (`src/types/`)

#### TypeScript Types
```
src/types/
├── motion.ts                   # Animation types
├── procedures.ts               # Medical procedure types
├── seo.ts                      # SEO-related types
└── translations.ts             # Translation types
```

## Public Assets Structure (`public/`)

### Static Assets Organization
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

## Component Relationships

### Dependency Graph

#### Core Dependencies
```
App.tsx
├── ErrorBoundary
├── LanguageProvider (LanguageContext)
├── DeviceProvider (DeviceContext)
└── Router
    └── StandardPageLayout
        ├── SEOHead (useSEO hook)
        ├── Navbar
        │   ├── LanguageSelector
        │   └── ThemeToggle
        ├── PageHeader (optional)
        ├── Main Content (route-based)
        └── Footer
```

#### Component Import Patterns
```typescript
// Layout components
Layout.tsx → StandardPageLayout.tsx
StandardPageLayout.tsx → SEOHead, PageHeader, Navbar, Footer
Navbar.tsx → LanguageSelector, ThemeToggle

// Page components
[Page].tsx → Layout/StandardPageLayout
[Page].tsx → UI components (Button, Card, etc.)
[Page].tsx → Custom components (SafeImage, etc.)

// Medical condition pages
[Condition].tsx → ConditionHeroSection, ConditionOverviewSection
[Condition].tsx → ConditionQuickFacts, condition-specific components

// Utility components
SafeImage.tsx → No dependencies (standalone)
ErrorBoundary.tsx → No dependencies (standalone)
LanguageSelector.tsx → LanguageContext
```

This structure provides a complete overview of the codebase organization and relationships between all components, services, and utilities.
