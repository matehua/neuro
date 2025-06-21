# Main Pages Documentation

Comprehensive documentation of all core pages in the miNEURO website, including structure, content, and functionality.

## 🏠 Homepage (`/`)

### **Purpose**
Primary landing page showcasing the neurosurgical practice, key services, and patient/GP resources.

### **Page Structure**
```typescript
// File: src/pages/Index.tsx
interface HomepageProps {
  // No props - standalone page
}
```

### **Content Sections**
1. **Hero Section**
   - Practice introduction
   - Dr. Ales Aliashkevich overview
   - Primary call-to-action (Book Appointment)
   - Background image with parallax effect

2. **Services Overview**
   - Key neurosurgical procedures
   - Technology highlights
   - Expertise areas

3. **Patient Resources Preview**
   - Exercise library teaser
   - Condition information
   - Educational content links

4. **GP Resources Preview**
   - Referral process overview
   - Professional resources
   - Contact information

5. **Testimonials Section**
   - Patient testimonials
   - Success stories
   - Trust indicators

6. **Contact & Location Info**
   - Clinic locations
   - Contact methods
   - Emergency information

### **Key Features**
- Responsive hero section with parallax
- Interactive service cards
- Testimonials carousel
- Multi-language support
- SEO optimized content

### **Navigation**
- Primary entry point for all site sections
- Clear pathways to appointments
- Quick access to patient/GP resources

---

## 📅 Appointments (`/appointments`)

### **Purpose**
Appointment booking overview and scheduling system entry point.

### **Page Structure**
```typescript
// File: src/pages/Appointments.tsx
interface AppointmentsProps {
  // Appointment booking functionality
}
```

### **Content Sections**
1. **Booking Overview**
   - Appointment types available
   - Consultation process
   - What to expect

2. **Booking Form Integration**
   - Online booking system
   - Calendar integration
   - Time slot selection

3. **Preparation Information**
   - What to bring
   - Pre-appointment instructions
   - Insurance information

4. **Contact Alternatives**
   - Phone booking
   - Emergency contacts
   - Clinic locations

### **Key Features**
- Integrated booking system
- Real-time availability
- Form validation
- Confirmation system
- Multi-language support

---

## 📋 Appointment Booking (`/appointment-booking`)

### **Purpose**
Detailed appointment booking form with comprehensive patient information collection.

### **Page Structure**
```typescript
// File: src/pages/AppointmentBooking.tsx
interface AppointmentBookingProps {
  // Detailed booking form
}
```

### **Content Sections**
1. **Patient Information Form**
   - Personal details
   - Contact information
   - Medical history

2. **Appointment Details**
   - Preferred date/time
   - Appointment type
   - Reason for visit

3. **Insurance & Payment**
   - Insurance details
   - Payment preferences
   - Billing information

4. **Confirmation & Next Steps**
   - Booking confirmation
   - Preparation instructions
   - Contact information

### **Key Features**
- Multi-step form wizard
- Form validation with Zod
- Progress indicators
- Auto-save functionality
- Accessibility compliance

---

## 📞 Contact (`/contact`)

### **Purpose**
Comprehensive contact information, forms, and communication channels.

### **Page Structure**
```typescript
// File: src/pages/Contact.tsx
interface ContactProps {
  // Contact information and forms
}
```

### **Content Sections**
1. **Contact Information**
   - Phone numbers
   - Email addresses
   - Physical addresses
   - Business hours

2. **Contact Forms**
   - General inquiry form
   - Appointment request
   - GP referral form

3. **Location Information**
   - Clinic addresses
   - Maps integration
   - Parking information
   - Public transport

4. **Emergency Contacts**
   - After-hours numbers
   - Emergency procedures
   - Hospital affiliations

### **Key Features**
- Multiple contact methods
- Interactive maps
- Form validation
- Auto-response system
- Emergency contact prominence

---

## 🧠 Expertise (`/expertise`)

### **Purpose**
Overview of neurosurgical expertise, procedures, and advanced technologies.

### **Page Structure**
```typescript
// File: src/pages/Expertise.tsx
interface ExpertiseProps {
  // Medical expertise overview
}
```

### **Content Sections**
1. **Expertise Overview**
   - Dr. Aliashkevich's qualifications
   - Areas of specialization
   - Experience highlights

2. **Procedures & Technologies**
   - Advanced surgical techniques
   - Technology integration
   - Innovation in neurosurgery

3. **Specialization Areas**
   - Spine surgery
   - Brain surgery
   - Minimally invasive procedures

4. **Technology Showcase**
   - Robotic surgery
   - Image-guided procedures
   - Advanced diagnostics

### **Key Features**
- Procedure cards with details
- Technology demonstrations
- Qualification highlights
- Links to detailed procedure pages

---

## 👥 Patient Resources (`/patient-resources`)

### **Purpose**
Hub for patient education, resources, and health management tools.

### **Page Structure**
```typescript
// File: src/pages/PatientResources.tsx
interface PatientResourcesProps {
  // Patient education hub
}
```

### **Content Sections**
1. **Resource Categories**
   - Condition information
   - Exercise library
   - Educational materials
   - Health tools

2. **Featured Content**
   - Popular exercises
   - Common conditions
   - Health tips
   - Recovery guides

3. **Interactive Tools**
   - Assessment tools
   - Exercise planner
   - Progress tracking
   - Health calculator

4. **Educational Materials**
   - Downloadable guides
   - Video content
   - Infographics
   - Research articles

### **Key Features**
- Categorized resource navigation
- Search functionality
- Interactive tools
- Progress tracking
- Multi-media content

---

## 🩺 GP Resources (`/gp-resources`)

### **Purpose**
Professional resources for general practitioners and referring physicians.

### **Page Structure**
```typescript
// File: src/pages/GPResources.tsx
interface GPResourcesProps {
  // Professional resources
}
```

### **Content Sections**
1. **Referral Information**
   - Referral process
   - Required documentation
   - Referral forms

2. **Clinical Guidelines**
   - Treatment protocols
   - Diagnostic criteria
   - Best practices

3. **Professional Tools**
   - Assessment forms
   - Clinical calculators
   - Reference materials

4. **Communication Channels**
   - Direct contact methods
   - Consultation requests
   - Case discussions

### **Key Features**
- Professional-focused content
- Downloadable forms
- Clinical tools
- Direct communication channels

---

## 📍 Locations (`/locations`)

### **Purpose**
Overview of all clinic locations with detailed facility information.

### **Page Structure**
```typescript
// File: src/pages/Locations.tsx
interface LocationsProps {
  // Clinic locations overview
}
```

### **Content Sections**
1. **Location Overview**
   - All clinic locations
   - Service availability
   - Contact information

2. **Facility Details**
   - Clinic features
   - Accessibility information
   - Parking details

3. **Interactive Maps**
   - Location mapping
   - Directions
   - Public transport

4. **Booking Integration**
   - Location-specific booking
   - Availability by location
   - Contact preferences

### **Key Features**
- Interactive location cards
- Integrated mapping
- Accessibility information
- Location-specific booking

---

## 🏥 Specialties (`/specialties`)

### **Purpose**
Detailed overview of neurosurgical specialties and treatment areas.

### **Page Structure**
```typescript
// File: src/pages/Specialties.tsx
interface SpecialtiesProps {
  // Neurosurgical specialties
}
```

### **Content Sections**
1. **Specialty Areas**
   - Spine surgery
   - Brain surgery
   - Peripheral nerve surgery
   - Pain management

2. **Treatment Approaches**
   - Conservative treatment
   - Minimally invasive surgery
   - Complex procedures
   - Rehabilitation

3. **Conditions Treated**
   - Common conditions
   - Complex cases
   - Emergency procedures
   - Chronic conditions

4. **Technology Integration**
   - Advanced imaging
   - Surgical robotics
   - Navigation systems
   - Monitoring technology

### **Key Features**
- Specialty categorization
- Treatment approach explanations
- Technology integration
- Condition cross-references

---

## ⚖️ Medicolegal (`/medicolegal`)

### **Purpose**
Medico-legal services for expert assessments and reports.

### **Page Structure**
```typescript
// File: src/pages/Medicolegal.tsx
interface MedicolegalProps {
  // Medico-legal services
}
```

### **Content Sections**
1. **Service Overview**
   - Expert assessments
   - Medical reports
   - Court testimony
   - Case reviews

2. **Assessment Types**
   - Independent medical examinations
   - Disability assessments
   - Treatment reviews
   - Prognosis evaluations

3. **Process Information**
   - Assessment procedures
   - Report timelines
   - Documentation requirements
   - Fee structure

4. **Professional Credentials**
   - Qualifications
   - Experience
   - Court appearances
   - Professional memberships

### **Key Features**
- Professional service focus
- Detailed process information
- Credential highlights
- Contact for legal professionals

---

## 🖼️ Gallery (`/gallery`)

### **Purpose**
Visual showcase of facilities, procedures, and practice highlights.

### **Page Structure**
```typescript
// File: src/pages/Gallery.tsx
interface GalleryProps {
  // Image gallery
}
```

### **Content Sections**
1. **Facility Images**
   - Clinic interiors
   - Equipment showcase
   - Consultation rooms
   - Waiting areas

2. **Procedure Documentation**
   - Surgical procedures
   - Technology in use
   - Before/after cases
   - Educational images

3. **Team & Practice**
   - Staff photos
   - Practice events
   - Community involvement
   - Awards & recognition

4. **Patient Education**
   - Anatomical diagrams
   - Procedure explanations
   - Exercise demonstrations
   - Health infographics

### **Key Features**
- Responsive image gallery
- Category filtering
- Lightbox viewing
- Accessibility descriptions

This comprehensive documentation covers all main pages with their complete structure, content organization, and key functionality.
