
# Homepage (Index.tsx)

## Current Implementation

The homepage serves as the main entry point for the miNEURO website, showcasing Dr. Ales Aliashkevich's neurosurgical services.

## Page Structure

### 1. Layout Integration
- Uses `Layout` component with SEO optimization
- Page title: "miNEURO - Brain and Spine Surgery Melbourne"
- SEO description and meta tags configured
- Responsive design with mobile optimization

### 2. Hero Section (`HeroSection` component)
- **Background**: Professional medical imagery with parallax effects
- **Headline**: "Advanced Neurosurgical Care with Precision and Compassion"
- **Subtitle**: Professional introduction to Dr. Ales Aliashkevich
- **Call-to-Action Buttons**:
  - Primary: "Book Consultation" → `/appointments`
  - Secondary: "Learn More" → `/about`
- **Features**: 
  - Parallax scrolling effect (disabled on mobile for performance)
  - Mobile-optimized touch targets
  - Accessibility-compliant with ARIA labels

### 3. Services Overview Section
- **Title**: "Our Expertise" (from language context)
- **Layout**: Grid of service cards
- **Services Featured**:
  1. **Brain Surgery**
     - Advanced neurosurgical procedures
     - Image-guided surgery techniques
     - Minimally invasive approaches
  2. **Spine Surgery**
     - Disc replacement procedures
     - Spinal fusion techniques
     - Robotic-assisted surgery
  3. **Peripheral Nerve Surgery**
     - Nerve repair and reconstruction
     - Compression syndrome treatment
     - Microsurgical techniques

### 4. Welcome Section
- **Title**: "Welcome to miNEURO"
- **Content**: Introduction to Dr. Aliashkevich's practice
- **Key Points**:
  - Comprehensive neurosurgical evaluation
  - State-of-the-art surgical techniques
  - Personalized treatment plans
  - Multiple locations across Melbourne

### 5. Testimonials Section (`TestimonialsSection` component)
- **Patient Reviews**: Carousel of patient experiences
- **Features**:
  - Auto-rotating testimonials (8-second intervals)
  - Manual navigation controls
  - Accessibility-compliant with proper ARIA labels
  - Mobile-optimized touch interactions
- **Current Testimonials**:
  1. Sarah Thompson - Spine surgery success story
  2. Michael Chen - Cervical disc replacement
  3. Emily Wilson - Complex spinal condition treatment

### 6. Contact Information Section
- **Phone**: 03 9008 4200
- **Email**: info@mineuro.com.au
- **Locations**: Links to consulting locations
- **Emergency**: Urgent appointment availability

## Technical Implementation

### Components Used
- `Layout` - Main layout wrapper with SEO
- `HeroSection` - Hero section with parallax
- `TestimonialsSection` - Patient testimonials carousel
- `PageHeader` - Optional page header (not used on homepage)
- `SafeImage` - Optimized image loading throughout

### SEO Configuration
- **Title**: "miNEURO - Brain and Spine Surgery Melbourne"
- **Description**: "Expert neurosurgeon Dr. Ales Aliashkevich providing advanced brain and spine surgery in Melbourne with minimally invasive techniques"
- **Keywords**: neurosurgeon, spine surgeon, brain surgery, Melbourne
- **Structured Data**: Medical organization schema

### Accessibility Features
- ARIA labels for all interactive elements
- Screen reader announcements for navigation
- Keyboard navigation support
- High contrast mode compatibility
- Mobile-friendly touch targets (minimum 44px)

### Performance Optimizations
- Lazy loading for non-critical images
- Code splitting for components
- Optimized bundle size with tree shaking
- Mobile-specific performance optimizations
- Reduced motion for users with vestibular disorders

## Multilingual Support

### English Version (Default)
- Professional medical terminology
- Clear patient communication
- Australian English conventions
- Cultural considerations for Australian healthcare

### Chinese Version (Traditional)
- Medical term translations
- Cultural adaptations for Chinese-speaking patients
- Simplified navigation structure
- Professional credential explanations

## Mobile Experience

### Responsive Design Features
- Mobile-first CSS approach
- Touch-optimized button sizes
- Simplified navigation for mobile
- Fast loading times on mobile networks
- Optimized images for different screen densities

### Mobile-Specific Optimizations
- Click-to-call phone numbers
- Reduced parallax effects for better performance
- Touch-friendly testimonial navigation
- Mobile-optimized form layouts

## Current Content Structure

```tsx
// Simplified component structure
export default function Index() {
  return (
    <Layout pageTitle="miNEURO - Brain and Spine Surgery Melbourne">
      <HeroSection />
      <ServicesOverviewSection />
      <WelcomeSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
```

## Integration Points

- **Routing**: Main route ("/") with language variants
- **SEO**: Integrated with SEO utilities
- **Analytics**: Performance monitoring active
- **Accessibility**: Screen reader announcements
- **Language**: Full translation support
- **Mobile**: Device detection and optimization

This homepage implementation follows modern web standards with accessibility, performance, and SEO best practices.
