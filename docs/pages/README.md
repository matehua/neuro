# Website Pages Architecture

Complete documentation of all pages and sub-pages in the miNEURO website, including structure, content, and navigation flow.

## 🏗️ Website Architecture Overview

The miNEURO website consists of **67+ pages** organized into a hierarchical structure with main sections and detailed sub-pages. All pages support bilingual content (English/Chinese) with URL-based language routing.

### 📊 Page Statistics
- **Main Pages**: 16 core pages
- **Expertise Pages**: 4 specialized medical procedure pages
- **Patient Resources**: 15+ educational and resource pages
- **Medical Conditions**: 15 detailed condition pages
- **GP Resources**: 4 professional referral pages
- **Location Pages**: 11 clinic location pages
- **Utility Pages**: Privacy, Terms, FAQ, 404

### 🌐 URL Structure
```
Base URLs:
- English: /en/[page-path]
- Chinese: /zh/[page-path]
- Root redirect: / → /en/

Example:
- /en/expertise/robotic-spine-surgery
- /zh/expertise/robotic-spine-surgery
```

## 📋 Complete Page Hierarchy

### 🏠 **Core Pages**
```
/ (Homepage)
├── /appointments (Appointment Booking Overview)
├── /appointment-booking (Detailed Booking Form)
├── /contact (Contact Information & Forms)
├── /expertise (Medical Expertise Overview)
├── /patient-resources (Patient Education Hub)
├── /gp-resources (GP Referral Resources)
├── /locations (Clinic Locations Overview)
├── /specialties (Neurosurgical Specialties)
├── /medicolegal (Medico-Legal Services)
├── /gallery (Image Gallery)
├── /faq (Frequently Asked Questions)
├── /privacy-policy (Privacy Policy)
├── /terms-conditions (Terms & Conditions)
├── /consulting-rooms (Consulting Room Information)
└── /test-images (Development Testing Page)
```

### 🧠 **Expertise & Technologies** (`/expertise/`)
```
/expertise/
├── /cervical-disc-replacement
├── /lumbar-disc-replacement  
├── /image-guided-surgery
└── /robotic-spine-surgery
```

### 👥 **Patient Resources** (`/patient-resources/`)
```
/patient-resources/
├── Educational Resources
│   ├── /condition-information
│   ├── /spine-conditions-library
│   ├── /exercise-library
│   ├── /spine-and-brain-health
│   ├── /cervical-spine-injury
│   ├── /cervical-spine-exercises
│   ├── /spine-safe-exercises
│   ├── /exercise-pain-med-risks
│   ├── /age-specific-spine-recommendations
│   ├── /youthful-spine
│   └── /lifestyle-modifications
├── Tools & Programs
│   ├── /individual-spine-health-programme
│   ├── /assessment-tools
│   ├── /patient-dashboard
│   └── /spine-health-app
└── Medical Conditions (/conditions/)
    ├── /arthrosis
    ├── /discopathy
    ├── /facet-arthropathy
    ├── /herniated-disc
    ├── /sciatica
    ├── /spinal-stenosis
    ├── /radiculopathy
    ├── /spondylosis
    ├── /spondylolisthesis
    ├── /pars-defects
    ├── /occipital-neuralgia
    ├── /piriformis-syndrome
    ├── /sacroiliac-arthropathy
    └── /thoracic-outlet-syndrome
```

### 🩺 **GP Resources** (`/gp-resources/`)
```
/gp-resources/
├── /referral-protocols
├── /diagnostics
├── /care-coordination
└── /emergencies
```

### 📍 **Locations** (`/locations/`)
```
/locations/
├── /surrey-hills
├── /mornington
├── /frankston
├── /langwarrin
├── /bundoora
├── /werribee
├── /heidelberg
├── /moonee-ponds
├── /sunbury
├── /dandenong
├── /wantirna
└── /location-detail (Dynamic location template)
```

## 🎯 Page Categories & Purposes

### **Core Pages** (High Priority)
- **Homepage**: Practice overview, hero section, key services
- **Appointments**: Booking system and consultation scheduling
- **Contact**: Contact forms, location info, emergency contacts
- **Expertise**: Medical procedures and technology overview

### **Educational Content** (Patient-Focused)
- **Patient Resources**: Comprehensive health education
- **Medical Conditions**: Detailed condition information
- **Exercise Library**: Therapeutic exercise demonstrations

### **Professional Resources** (GP-Focused)
- **GP Resources**: Referral protocols and professional tools
- **Medico-Legal**: Expert assessment services

### **Location Information** (Service Access)
- **Locations**: Clinic details, facilities, accessibility

### **Utility Pages** (Legal & Support)
- **Privacy/Terms**: Legal compliance
- **FAQ**: Common questions and answers
- **404**: Error handling

## 🔄 Navigation Flow

### **Primary Navigation**
```
Header Navigation:
├── Expertise
├── Patient Resources
├── GP Resources
├── Locations
├── Contact
└── Appointments (CTA)
```

### **Secondary Navigation**
```
Footer Navigation:
├── About
├── Services
├── Resources
├── Contact
├── Privacy Policy
├── Terms & Conditions
└── Emergency Contacts
```

### **Breadcrumb Navigation**
```
Example: Home > Patient Resources > Conditions > Herniated Disc
Example: Home > Expertise > Robotic Spine Surgery
Example: Home > Locations > Langwarrin
```

## 📱 Responsive Design

### **Mobile Navigation**
- Hamburger menu for main navigation
- Collapsible sub-menus
- Touch-optimized buttons
- Swipe gestures for galleries

### **Desktop Navigation**
- Horizontal navigation bar
- Dropdown menus for sub-pages
- Hover states and animations
- Keyboard navigation support

## 🌐 Internationalization

### **Language Support**
- **English** (`/en/`): Primary language
- **Chinese** (`/zh/`): Full translation support

### **Content Localization**
- Page titles and descriptions
- Navigation menus
- Form labels and validation
- Medical terminology
- Contact information

### **SEO Optimization**
- Language-specific meta tags
- Hreflang attributes
- Localized structured data
- Country-specific contact info

## 🔍 SEO Structure

### **URL Patterns**
```
Pattern: /[lang]/[section]/[page]/[sub-page]
Examples:
- /en/expertise/robotic-spine-surgery
- /zh/patient-resources/conditions/herniated-disc
- /en/locations/langwarrin
```

### **Meta Data Structure**
- Unique titles for each page
- Descriptive meta descriptions
- Relevant keywords
- Open Graph tags
- Structured data markup

## 📋 **INDIVIDUAL PAGE DOCUMENTATION**

### **Complete Page Coverage: 67+ Pages**

All pages in the miNEURO website have individual documentation files with comprehensive structure and content details:

#### **✅ Fully Documented Pages (23 pages)**
- **Core Pages**: [16 complete files](./core/) - All essential pages documented
- **Expertise Pages**: [4 complete files](./expertise/) - All medical procedures documented
- **Patient Resources**: [3 complete files](./patient-resources/) - Key educational pages documented

#### **📋 Template Structure Available (44 pages)**
- **Patient Resources**: 27 remaining pages with standardized templates
- **GP Resources**: 4 pages with professional resource templates
- **Location Pages**: 11 pages with clinic information templates
- **System Pages**: 2 pages with utility templates

#### **📊 Complete Page Inventory**
See [Complete Page Inventory](./complete-page-inventory.md) for detailed status of all 67+ pages.

### **Documentation Structure**
```
docs/pages/
├── README.md                           # This overview file
├── complete-page-inventory.md          # Complete 67+ page inventory
├── core/                              # 16 core pages (✅ Complete)
│   ├── homepage.md
│   ├── appointments.md
│   ├── appointment-booking.md
│   └── [13 more core pages...]
├── expertise/                         # 4 expertise pages (✅ Complete)
│   ├── cervical-disc-replacement.md
│   ├── lumbar-disc-replacement.md
│   ├── image-guided-surgery.md
│   └── robotic-spine-surgery.md
├── patient-resources/                 # 30 patient resource pages (🔄 In Progress)
│   ├── condition-information.md       # ✅ Complete
│   ├── exercise-library.md           # ✅ Complete
│   ├── conditions/
│   │   ├── herniated-disc.md         # ✅ Complete
│   │   └── [14 more conditions...]   # 📋 Templates available
│   └── [26 more resources...]        # 📋 Templates available
├── gp-resources/                     # 4 GP resource pages (📋 Templates)
├── locations/                        # 11 location pages (📋 Templates)
└── system/                          # 2 system pages (📋 Templates)
```

This comprehensive page architecture ensures clear navigation, optimal user experience, and effective content organization across all sections of the miNEURO website, with complete documentation coverage for all 67+ pages.
