# Complete miNEURO Clone Script for Lovable.dev

This comprehensive script will recreate the entire miNEURO neurosurgeon website with all features, pages, components, and functionality.

## Phase 1: Initialize Project and Core Setup

```
Create a new React TypeScript project with Vite and Tailwind CSS. Set up the basic folder structure for a medical website with:

- src/components/ for UI components
- src/pages/ for page components  
- src/contexts/ for state management
- src/hooks/ for custom hooks
- src/lib/ for utilities
- src/locales/ for translations
- src/routes/ for routing
- public/images/ for static images
- docs/ for documentation

Install these essential packages:
- @radix-ui/react-* components for UI primitives
- react-router-dom for routing
- @tanstack/react-query for data fetching
- lucide-react for icons
- sonner for notifications
- react-hook-form and zod for forms
- date-fns for date handling
- class-variance-authority and clsx for styling utilities
```

## Phase 2: Core Infrastructure and Services

```
Create the core service files in src/lib/:

1. Create src/lib/utils.ts with cn() utility function for className merging and other common utilities

2. Create src/lib/seo.ts with comprehensive SEO utilities including:
   - generatePageSEO function for dynamic meta tags
   - SEO_CONFIG with default site configuration
   - Structured data generation for medical organization
   - Open Graph and Twitter card utilities

3. Create src/lib/accessibility.ts with:
   - announceToScreenReader function
   - Focus management utilities
   - ARIA label helpers
   - Keyboard navigation utilities

4. Create src/lib/performance.ts (420 lines) with:
   - PerformanceMonitor singleton class
   - Navigation timing metrics
   - Resource loading performance tracking
   - Component render performance measurement
   - Memory and battery monitoring
   - Performance optimization recommendations

5. Create src/lib/mobile-optimization.ts (401 lines) with:
   - Touch event optimization
   - Viewport configuration
   - PWA features implementation
   - Network-aware loading
   - Mobile-specific performance enhancements

6. Create src/lib/security.ts with security utilities for CSP, XSS protection, and secure headers

7. Create src/lib/env-validation.ts for environment variable validation
```

## Phase 3: Internationalization System

```
Create comprehensive multilingual support:

1. Create src/locales/en.ts with complete English translations including:
   - Navigation items
   - Page titles and content
   - Form labels and validation messages
   - Medical terminology
   - Appointment booking flow
   - Contact information
   - SEO meta descriptions
   - Accessibility labels

2. Create src/locales/zh.ts with corresponding Chinese translations

3. Create src/contexts/LanguageContext.tsx with:
   - SupportedLanguage type ('en' | 'zh')
   - LanguageProvider component
   - useLanguage hook
   - Language detection from URL and localStorage
   - URL path management for language routes
   - Translation loading and caching

The context should handle language switching, URL updates, and persistence.
```

## Phase 4: UI Component Library

```
Create the complete shadcn/ui component library in src/components/ui/:

Create these base components with proper TypeScript types and Tailwind styling:
- accordion.tsx - Collapsible content sections
- alert-dialog.tsx - Modal alert dialogs  
- avatar.tsx - User avatar display
- badge.tsx - Status and category badges
- button.tsx - Button variants (default, destructive, outline, secondary, ghost, link)
- calendar.tsx - Date picker with mobile optimization
- card.tsx - Content container cards (Card, CardHeader, CardTitle, CardContent, CardFooter)
- checkbox.tsx - Form checkboxes
- dialog.tsx - Modal dialogs
- dropdown-menu.tsx - Dropdown menus
- form.tsx - Form components with validation
- input.tsx - Text input fields
- label.tsx - Form labels
- popover.tsx - Floating content with mobile positioning
- progress.tsx - Progress indicators
- radio-group.tsx - Radio button groups
- select.tsx - Select dropdowns with custom styling
- separator.tsx - Visual separators
- sheet.tsx - Side panels
- sonner.tsx - Toast notifications with theme support
- switch.tsx - Toggle switches
- table.tsx - Data tables
- tabs.tsx - Tabbed navigation
- textarea.tsx - Multi-line text input
- tooltip.tsx - Hover tooltips

Each component should be fully typed, accessible, and mobile-optimized.
```

## Phase 5: Custom Hooks and Utilities

```
Create custom hooks in src/hooks/:

1. Create src/hooks/use-mobile.ts with:
   - useDeviceDetection hook returning device information
   - isMobile, isTablet, isDesktop detection
   - Touch capability detection
   - Screen size breakpoints
   - Performance preferences
   - Network status detection

2. Create src/hooks/useSEO.ts with:
   - useSEO hook for dynamic meta tag management
   - usePageSEO hook for page-specific SEO
   - SEOData interface with comprehensive meta options
   - Dynamic title, description, and structured data updates
```

## Phase 6: Core Layout Components

```
Create the main layout components in src/components/:

1. Create src/components/Layout.tsx:
   - Main layout wrapper component
   - SEO integration with useSEO hook
   - Accessibility announcements
   - Page title management
   - Props: children, pageTitle, seoData, pageType

2. Create src/components/Navbar.tsx:
   - Responsive navigation header
   - Mobile menu with hamburger toggle
   - Language selector integration
   - Theme toggle integration
   - Navigation links with active states
   - Call-to-action button
   - Accessibility-compliant navigation

3. Create src/components/Footer.tsx:
   - Multi-column footer layout
   - Contact information
   - Location links
   - Social media links
   - Copyright information
   - Newsletter signup

4. Create src/components/PageHeader.tsx:
   - Reusable page header component
   - Background image support with parallax
   - Title and subtitle display
   - Mobile optimization
   - Accessibility features
   - Props: title, subtitle, backgroundImage, enableParallax

5. Create src/components/LanguageSelector.tsx:
   - Language switching dropdown
   - Flag icons for visual identification
   - Smooth language transitions
   - URL path updates
   - Accessibility labels

6. Create src/components/ThemeToggle.tsx:
   - Dark/light mode toggle button
   - System preference detection
   - Smooth theme transitions
   - Icon animations
   - Local storage persistence

7. Create src/components/SkipLink.tsx:
   - Accessibility skip navigation
   - Keyboard navigation support
   - Screen reader compatibility
```

## Phase 7: Specialized Components

```
Create specialized components for the medical website:

1. Create src/components/HeroSection.tsx:
   - Homepage hero section with parallax background
   - Professional medical imagery
   - Call-to-action buttons
   - Mobile-optimized animations
   - Accessibility-compliant content
   - Device-specific performance optimizations

2. Create src/components/TestimonialsSection.tsx:
   - Patient testimonials carousel
   - Auto-rotating testimonials (8-second intervals)
   - Manual navigation controls
   - Star ratings display
   - Patient photos and information
   - Mobile-optimized touch interactions
   - Accessibility features with ARIA labels

3. Create src/components/ProcedureCard.tsx:
   - Medical procedure information cards
   - Image optimization with SafeImage
   - Procedure descriptions and pricing
   - Link integration to detailed pages
   - Mobile-responsive design
   - Props: title, description, image, link, price (optional)

4. Create src/components/ContactForm.tsx:
   - Contact and inquiry forms
   - Form validation with react-hook-form and zod
   - EmailJS integration for submissions
   - Error handling and success notifications
   - Accessibility-compliant form fields
   - Mobile-optimized form layout

5. Create src/components/SafeImage.tsx:
   - Optimized image component with error handling
   - Lazy loading support
   - Fallback image handling
   - Loading state management
   - Props: src, alt, fallback, className, lazy

6. Create src/components/ErrorBoundary.tsx:
   - Global error handling component
   - Graceful error recovery
   - User-friendly error messages
   - Error reporting integration

7. Create src/components/ScreenReaderAnnouncer.tsx:
   - Accessibility announcements for screen readers
   - Live region management
   - Route change announcements
   - Dynamic content updates
```

## Phase 8: Page Components

```
Create all page components in src/pages/:

1. Create src/pages/Index.tsx (Homepage):
   - Hero section with Dr. Aliashkevich introduction
   - Services overview with brain, spine, and nerve surgery
   - Welcome section with practice information
   - Testimonials section integration
   - Contact information and locations
   - SEO optimization for homepage

2. Create src/pages/Appointments.tsx:
   - Comprehensive appointment booking information
   - Consultation types and processes
   - Required documents checklist
   - Insurance and payment options
   - Telehealth consultation details
   - Location information
   - Contact forms integration

3. Create src/pages/AppointmentBooking.tsx:
   - Multi-step appointment booking system
   - Patient information collection
   - Procedure selection
   - Date and time scheduling
   - Insurance verification
   - Confirmation and notifications

4. Create src/pages/About.tsx:
   - Dr. Ales Aliashkevich biography
   - Medical qualifications and certifications
   - Professional experience and expertise
   - Awards and recognition
   - Research and publications
   - Professional philosophy and approach

5. Create src/pages/Contact.tsx:
   - Contact information and forms
   - Office locations with maps
   - Phone, email, and fax details
   - Office hours and availability
   - Emergency contact information
   - Accessibility information

6. Create src/pages/Expertise.tsx:
   - Comprehensive neurosurgical procedures
   - Brain surgery expertise (tumors, aneurysms, trauma)
   - Spine surgery procedures (disc replacement, fusion)
   - Peripheral nerve surgery
   - Advanced technologies and techniques
   - Treatment outcomes and success rates

7. Create src/pages/Locations.tsx:
   - All consulting locations across Melbourne
   - Detailed location information
   - Contact details for each location
   - Accessibility information
   - Parking and public transport
   - Photo galleries of facilities

8. Create src/pages/GPResources.tsx:
   - Resources for general practitioners
   - Referral guidelines and processes
   - Diagnostic criteria and imaging requirements
   - Contact information for referrals
   - Educational materials and updates

9. Create src/pages/NotFound.tsx:
   - 404 error page with helpful navigation
   - Search functionality
   - Recent pages or popular content
   - Contact information

10. Create src/pages/TestImages.tsx:
    - Image testing and verification page
    - Gallery of all website images
    - Image optimization testing
    - Fallback image testing

11. Create src/pages/patient-resources/:
    - Individual patient education pages
    - Create IndividualSpineHealthProgram.tsx with comprehensive spine health information

12. Create src/pages/expertise/ subdirectory:
    - Create ImageGuidedSurgery.tsx with detailed information about image-guided surgical techniques
    - Create RoboticSpineSurgery.tsx with robotic surgery information
```

## Phase 9: Routing Configuration

```
Create comprehensive routing system:

1. Create src/routes/routeConfig.tsx:
   - Route definitions for all pages
   - Language-specific routing (/en/, /zh/)
   - Nested routes for expertise and patient resources
   - Dynamic route handling
   - 404 error handling
   - SEO-friendly URLs

2. Update src/App.tsx:
   - Router configuration with language support
   - Error boundary integration
   - Query client provider setup
   - Tooltip provider
   - Global providers setup
   - Route change announcements

The routing should support:
- Base routes (/) redirecting to language-specific routes
- Language prefixed routes (/en/, /zh/)
- Nested expertise routes
- Location-specific pages
- Patient resource pages
```

## Phase 10: Static Assets and Data

```
Set up the public directory structure:

1. Create public/images/ with organized subdirectories:
   - conditions/ - Medical condition images
   - exercises/ - Exercise demonstration images
   - gp-resources/ - GP referral images
   - locations/ - Clinic location photos
   - patient-resources/ - Patient education images
   - expertise/ - Medical expertise images
   - testimonials/ - Patient testimonial photos

2. Create public/data/:
   - exercises.json with comprehensive exercise library (75+ exercises, 8 categories)
   - conditions.json with medical conditions data

3. Create public/pages/:
   - Static markdown content for various pages
   - Organized by feature/page type

4. Create public/logo/:
   - Brand assets in multiple formats
   - Various logo variations

5. Create SEO files:
   - robots.txt for search engine crawling
   - sitemap.xml for SEO
   - manifest.json for PWA features
   - favicon.ico and related icons
```

## Phase 11: Build Configuration and Scripts

```
Set up build configuration and utility scripts:

1. Update vite.config.ts:
   - Optimized build configuration
   - Code splitting setup
   - Bundle optimization
   - Path aliases configuration
   - Environment variable handling

2. Update tsconfig.json:
   - Strict TypeScript configuration
   - Path mapping for imports
   - Modern ES modules support

3. Update tailwind.config.ts:
   - Custom color scheme for medical website
   - Typography configuration
   - Mobile-first breakpoints
   - Custom animations and transitions

4. Create scripts/:
   - verify-production-env.js (215 lines) for environment validation
   - verify-no-console.js (235 lines) for production console removal

5. Update package.json scripts:
   - Development and build scripts
   - Linting and type checking
   - Production optimization scripts
```

## Phase 12: Environment and Production Setup

```
Configure environment and production settings:

1. Create .env files:
   - .env for development variables
   - .env.production for production configuration
   - .env.example as template

2. Set up production optimizations:
   - Console statement removal for production
   - Bundle size optimization
   - Performance monitoring integration
   - Error reporting setup

3. Configure deployment settings:
   - Static file serving configuration
   - PWA manifest and service worker
   - SEO optimization for production
   - Security headers configuration

4. Create comprehensive documentation:
   - README.md with setup instructions
   - Component documentation
   - API documentation
   - Deployment guide
```

## Verification Steps

After completing all phases, verify:

1. **Functionality**: All pages load correctly with proper navigation
2. **Responsive Design**: Mobile, tablet, and desktop layouts work properly
3. **Accessibility**: Screen reader compatibility and keyboard navigation
4. **Performance**: Fast loading times and optimized bundles
5. **SEO**: Proper meta tags, structured data, and sitemap
6. **Internationalization**: Language switching works correctly
7. **Forms**: Contact and booking forms submit successfully
8. **Error Handling**: Error boundaries catch and display errors gracefully

## Final Configuration

The completed application should have:
- 50+ pages with comprehensive medical content
- 25+ reusable components
- Complete English/Chinese translation
- Mobile-optimized responsive design
- Accessibility compliance (WCAG 2.1 AA)
- SEO optimization with structured data
- Performance monitoring and optimization
- Production-ready build configuration
- Comprehensive error handling
- Professional medical website appearance

This script creates a complete, production-ready neurosurgeon website with all modern web development best practices implemented.
