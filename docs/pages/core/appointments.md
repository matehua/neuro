# Appointments Page Documentation

**URL**: `/appointments`  
**File**: `src/pages/Appointments.tsx`  
**Type**: Core Booking Page  
**Priority**: Critical

## Page Overview

The appointments page serves as the primary booking interface for patients to schedule neurosurgical consultations and follow-up appointments with Dr. Ales Aliashkevich.

## Page Structure

### Component Architecture
```typescript
// File: src/pages/Appointments.tsx
interface AppointmentsProps {
  // Appointment booking functionality
}

export default function Appointments(): JSX.Element {
  // Appointments page implementation
}
```

### Layout Integration
- Uses `StandardPageLayout` component
- Integrated booking system
- Form validation and processing
- Real-time availability checking

## Content Sections

### 1. Page Header
**Purpose**: Clear page identification and navigation

**Content Elements**:
- **Page Title**: "Book Your Appointment"
- **Breadcrumb Navigation**: Home > Appointments
- **Quick Contact**: Emergency contact information
- **Language Selector**: English/Chinese switching

### 2. Appointment Types Section
**Purpose**: Explain different consultation options

**Content Elements**:
- **Initial Consultation**
  - New patient appointments
  - Comprehensive assessment
  - Duration: 45-60 minutes
  - What to expect overview

- **Follow-up Consultation**
  - Existing patient appointments
  - Progress review
  - Duration: 30 minutes
  - Treatment plan updates

- **Second Opinion**
  - Independent assessment
  - Treatment option review
  - Medical record analysis
  - Expert recommendations

- **Medico-Legal Assessment**
  - Independent medical examination
  - Legal report preparation
  - Court testimony availability
  - Professional documentation

### 3. Booking Process Overview
**Purpose**: Guide users through appointment scheduling

**Content Elements**:
- **Step-by-Step Process**
  1. Select appointment type
  2. Choose preferred date/time
  3. Provide patient information
  4. Confirm booking details
  5. Receive confirmation

- **Booking Options**
  - Online booking system
  - Phone booking alternative
  - Email appointment requests
  - Emergency booking procedures

- **Availability Information**
  - Real-time calendar integration
  - Location-specific availability
  - Waiting list options
  - Cancellation policies

### 4. Online Booking System
**Component**: `AppointmentForm`
**Purpose**: Interactive appointment scheduling

**Form Sections**:

#### **Appointment Details**
- **Appointment Type Selection**
  - Radio button options
  - Type descriptions
  - Duration indicators
  - Cost information

- **Date and Time Selection**
  - Calendar widget
  - Available time slots
  - Timezone handling
  - Preferred location selection

#### **Patient Information**
- **Personal Details**
  - Full name (required)
  - Date of birth (required)
  - Gender selection
  - Contact phone number

- **Contact Information**
  - Email address (required)
  - Preferred contact method
  - Emergency contact details
  - Address information

#### **Medical Information**
- **Reason for Visit**
  - Primary concern description
  - Symptom duration
  - Previous treatments
  - Urgency level

- **Medical History**
  - Current medications
  - Previous surgeries
  - Allergies and reactions
  - Relevant medical conditions

#### **Insurance and Payment**
- **Insurance Details**
  - Insurance provider
  - Policy number
  - Coverage verification
  - Pre-authorization requirements

- **Payment Preferences**
  - Payment method selection
  - Billing address
  - Special payment arrangements
  - Financial assistance options

### 5. Preparation Information
**Purpose**: Help patients prepare for their appointment

**Content Elements**:
- **What to Bring**
  - Government-issued ID
  - Insurance cards
  - Referral letters
  - Medical records and imaging

- **Pre-Appointment Instructions**
  - Medication guidelines
  - Dietary restrictions
  - Arrival time recommendations
  - Parking information

- **Forms and Documentation**
  - Downloadable intake forms
  - Medical history questionnaires
  - Insurance verification forms
  - Consent form previews

### 6. Location and Contact Information
**Purpose**: Provide clinic details and alternatives

**Content Elements**:
- **Clinic Locations**
  - Available appointment locations
  - Address and contact details
  - Accessibility information
  - Public transport options

- **Contact Alternatives**
  - Phone booking: (03) 9008 4200
  - Email: appointments@mineuro.com.au
  - Emergency contact: 000
  - After-hours procedures

- **Office Hours**
  - Regular consultation hours
  - Holiday schedules
  - Emergency availability
  - Response time expectations

## Technical Implementation

### Form Validation
```typescript
const appointmentSchema = z.object({
  appointmentType: z.enum(['initial', 'followup', 'second-opinion', 'medico-legal']),
  preferredDate: z.date(),
  preferredTime: z.string(),
  patientName: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  reasonForVisit: z.string().min(10, "Please describe your concern"),
  // Additional validation rules
});
```

### Booking System Integration
- **Real-time Availability**
  - Calendar API integration
  - Slot availability checking
  - Conflict prevention
  - Automatic confirmation

- **Notification System**
  - Email confirmations
  - SMS reminders
  - Calendar invitations
  - Cancellation notifications

### Accessibility Features
- **Form Accessibility**
  - Proper label associations
  - Error message announcements
  - Keyboard navigation support
  - Screen reader compatibility

- **WCAG 2.1 AA Compliance**
  - Color contrast requirements
  - Focus management
  - Alternative text for images
  - Semantic form structure

## User Experience Features

### Progressive Enhancement
- **Multi-Step Form**
  - Progress indicators
  - Save and continue functionality
  - Form validation feedback
  - Error prevention

- **Mobile Optimization**
  - Touch-friendly interfaces
  - Simplified input methods
  - Optimized keyboard layouts
  - Gesture support

### Error Handling
- **Validation Messages**
  - Real-time field validation
  - Clear error descriptions
  - Helpful correction suggestions
  - Success confirmations

- **System Error Recovery**
  - Graceful failure handling
  - Alternative booking methods
  - Contact information prominence
  - Support channel access

## Integration Points

### External Systems
- **Calendar Integration**
  - Provider calendar sync
  - Appointment scheduling
  - Availability management
  - Conflict resolution

- **Patient Management**
  - Electronic health records
  - Patient database integration
  - Medical history access
  - Insurance verification

### Internal Navigation
- **Related Pages**
  - Appointment booking (detailed form)
  - Contact information
  - Location details
  - Patient resources

- **User Journey Flow**
  - Homepage → Appointments → Booking
  - Services → Appointments → Confirmation
  - Contact → Appointments → Scheduling

## Conversion Optimization

### Primary Goals
- **Appointment Completion Rate**
  - Form completion tracking
  - Abandonment point analysis
  - Conversion funnel optimization
  - User experience improvements

- **User Satisfaction**
  - Booking process feedback
  - Appointment confirmation rates
  - Cancellation rate monitoring
  - Patient experience surveys

### Performance Metrics
- **Technical Metrics**
  - Page load speed
  - Form submission success rate
  - Error rate monitoring
  - Mobile performance

- **Business Metrics**
  - Booking conversion rate
  - Average time to complete
  - Preferred appointment types
  - Location preferences

## Maintenance Requirements

### Regular Updates
- **Content Accuracy**
  - Contact information verification
  - Appointment type descriptions
  - Pricing information updates
  - Policy change notifications

- **System Maintenance**
  - Form functionality testing
  - Integration system checks
  - Security updates
  - Performance optimization

### Quality Assurance
- **Testing Protocols**
  - Form submission testing
  - Cross-browser compatibility
  - Mobile device testing
  - Accessibility validation

This comprehensive appointments page ensures a smooth, accessible, and efficient booking experience for all patients seeking neurosurgical care.
