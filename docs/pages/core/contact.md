# Contact Page Documentation

**URL**: `/contact`  
**File**: `src/pages/Contact.tsx`  
**Type**: Core Contact Page  
**Priority**: High

## Page Overview

The contact page provides comprehensive contact information, multiple communication channels, and interactive forms for patients and medical professionals to connect with the miNEURO practice.

## Page Structure

### Component Architecture
```typescript
// File: src/pages/Contact.tsx
interface ContactProps {
  // Contact information and forms
}

export default function Contact(): JSX.Element {
  // Contact page implementation
}
```

## Content Sections

### 1. Contact Information Header
**Purpose**: Primary contact details and emergency information

**Content Elements**:
- **Primary Contact Details**
  - Main phone: (03) 9008 4200
  - Email: info@mineuro.com.au
  - Fax: (03) 9008 4201
  - Business hours: Monday-Friday 8:00 AM - 5:00 PM

- **Emergency Contact**
  - After-hours emergency: 000
  - Urgent neurosurgical enquiries: (03) 9008 4200
  - Epworth Richmond Emergency: (03) 9506 3000
  - Emergency procedures and protocols

### 2. Contact Forms Section
**Purpose**: Multiple contact form options for different needs

#### **General Inquiry Form**
- **Form Fields**:
  - Full name (required)
  - Email address (required)
  - Phone number
  - Subject/inquiry type
  - Message (required)
  - Preferred contact method
  - Urgency level

#### **Appointment Request Form**
- **Form Fields**:
  - Patient name (required)
  - Contact information
  - Preferred appointment type
  - Preferred dates/times
  - Reason for visit
  - Insurance information
  - Special requirements

#### **GP Referral Form**
- **Form Fields**:
  - Referring physician name
  - Practice details
  - Patient information
  - Clinical summary
  - Urgency level
  - Preferred consultation type
  - Contact preferences

#### **Professional Inquiry Form**
- **Form Fields**:
  - Professional name and credentials
  - Institution/practice
  - Inquiry type
  - Collaboration interest
  - Contact preferences
  - Message details

### 3. Clinic Locations Section
**Purpose**: Detailed information for all clinic locations

**Location Cards Include**:
- **Address and Contact**
  - Complete street address
  - Phone and fax numbers
  - Email contacts
  - GPS coordinates

- **Operating Hours**
  - Regular consultation hours
  - Holiday schedules
  - Emergency availability
  - Appointment booking hours

- **Accessibility Information**
  - Wheelchair accessibility
  - Disabled parking
  - Public transport access
  - Elevator availability

- **Facility Features**
  - Parking availability
  - Waiting areas
  - Consultation rooms
  - Diagnostic equipment

### 4. Interactive Maps Section
**Purpose**: Visual location guidance and directions

**Map Features**:
- **Interactive Clinic Maps**
  - Google Maps integration
  - Clinic location markers
  - Directions functionality
  - Street view access

- **Transportation Information**
  - Public transport routes
  - Parking locations
  - Walking directions
  - Accessibility routes

### 5. Emergency Contact Section
**Purpose**: Critical emergency information and procedures

**Content Elements**:
- **Emergency Numbers**
  - Immediate emergency: 000
  - After-hours neurosurgical: (03) 9008 4200
  - Hospital emergency departments
  - Poison information: 13 11 26

- **Emergency Procedures**
  - When to call emergency services
  - Urgent neurosurgical symptoms
  - Hospital presentation guidelines
  - Emergency contact protocols

- **Hospital Affiliations**
  - Epworth Richmond Hospital
  - Emergency department details
  - Admission procedures
  - Visiting hours and policies

### 6. Professional Communication Section
**Purpose**: Resources for medical professionals

**Content Elements**:
- **Direct Professional Lines**
  - Physician-to-physician consultation
  - Urgent referral line
  - Case discussion scheduling
  - Professional development inquiries

- **Communication Preferences**
  - Secure email protocols
  - Fax transmission guidelines
  - Electronic referral systems
  - Telehealth consultation options

## Technical Implementation

### Form Validation
```typescript
const contactFormSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject required"),
  message: z.string().min(10, "Please provide more details"),
  contactMethod: z.enum(['email', 'phone', 'either']),
  urgency: z.enum(['low', 'medium', 'high', 'urgent'])
});
```

### Map Integration
- **Google Maps API**
  - Interactive map display
  - Location markers
  - Directions integration
  - Street view functionality

- **Accessibility Features**
  - Keyboard navigation
  - Screen reader compatibility
  - Alternative text descriptions
  - High contrast mode

### Form Processing
- **Submission Handling**
  - Secure form transmission
  - Spam protection (reCAPTCHA)
  - Email notifications
  - Database logging

- **Response Management**
  - Automated acknowledgments
  - Response time commitments
  - Escalation procedures
  - Follow-up protocols

## User Experience Features

### Responsive Design
- **Mobile Optimization**
  - Touch-friendly forms
  - Optimized map interactions
  - Click-to-call functionality
  - Simplified navigation

- **Desktop Enhancement**
  - Multi-column layouts
  - Advanced map features
  - Hover interactions
  - Enhanced form validation

### Accessibility Compliance
- **WCAG 2.1 AA Standards**
  - Semantic HTML structure
  - Proper heading hierarchy
  - Form label associations
  - Color contrast compliance

- **Assistive Technology Support**
  - Screen reader compatibility
  - Keyboard navigation
  - Focus management
  - Alternative content formats

## Integration Points

### External Services
- **Email System**
  - SMTP server integration
  - Email template management
  - Delivery confirmation
  - Bounce handling

- **CRM Integration**
  - Contact database updates
  - Lead tracking
  - Communication history
  - Follow-up scheduling

### Internal Systems
- **Appointment System**
  - Direct booking links
  - Availability checking
  - Calendar integration
  - Confirmation processing

- **Patient Management**
  - Contact information updates
  - Communication preferences
  - History tracking
  - Privacy compliance

## Performance Optimization

### Loading Speed
- **Critical Path Optimization**
  - Above-fold content priority
  - Lazy loading for maps
  - Optimized form rendering
  - Efficient asset loading

- **Caching Strategy**
  - Static content caching
  - Form state preservation
  - Map tile caching
  - API response caching

### Security Measures
- **Data Protection**
  - HTTPS encryption
  - Form data sanitization
  - XSS prevention
  - CSRF protection

- **Privacy Compliance**
  - GDPR compliance
  - Data minimization
  - Consent management
  - Audit trail logging

## Conversion Optimization

### Contact Goals
- **Primary Objectives**
  - Appointment booking conversion
  - Professional referral facilitation
  - Emergency contact accessibility
  - Information request handling

- **Success Metrics**
  - Form completion rates
  - Response time tracking
  - Contact method preferences
  - User satisfaction scores

### User Journey Analysis
- **Entry Points**
  - Homepage navigation
  - Service page referrals
  - Emergency situations
  - Professional referrals

- **Conversion Paths**
  - Contact → Appointment booking
  - Inquiry → Information provision
  - Emergency → Immediate response
  - Professional → Collaboration

## Maintenance Requirements

### Content Updates
- **Regular Verification**
  - Contact information accuracy
  - Operating hours updates
  - Emergency procedure reviews
  - Location detail verification

- **System Maintenance**
  - Form functionality testing
  - Map integration updates
  - Email system monitoring
  - Security patch applications

### Quality Assurance
- **Testing Protocols**
  - Form submission testing
  - Map functionality verification
  - Cross-browser compatibility
  - Mobile device testing
  - Accessibility validation

This comprehensive contact page ensures multiple accessible communication channels while maintaining professional standards and emergency accessibility for all users.
