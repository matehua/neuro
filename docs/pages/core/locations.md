# Locations Page Documentation

**URL**: `/locations`  
**File**: `src/pages/Locations.tsx`  
**Type**: Core Location Hub  
**Priority**: High

## Page Overview

The locations page provides comprehensive information about all clinic locations where Dr. Ales Aliashkevich provides neurosurgical services across Melbourne.

## Content Sections

### 1. Locations Overview
**Purpose**: Present all clinic locations with key information

**Location Summary**:
- **Total Locations**: 11 clinics across Melbourne
- **Geographic Coverage**: Metropolitan Melbourne
- **Service Availability**: Full neurosurgical consultations
- **Accessibility**: All locations wheelchair accessible

### 2. Location Cards Grid
**Purpose**: Display each location with essential details

**Card Information**:
- **Location Name and Address**
- **Contact Phone Numbers**
- **Operating Hours**
- **Accessibility Features**
- **Parking Information**
- **Public Transport Access**

### 3. Interactive Map
**Purpose**: Visual representation of all clinic locations

**Map Features**:
- **Location Markers**: All 11 clinic locations
- **Directions Integration**: Google Maps directions
- **Distance Calculation**: From user location
- **Public Transport Routes**: Transit information

### 4. Location-Specific Services
**Purpose**: Detail services available at each location

**Service Information**:
- **Consultation Types Available**
- **Diagnostic Equipment**
- **Accessibility Features**
- **Specialized Services**

## Individual Location Links

### All Clinic Locations
- [Surrey Hills](/locations/surrey-hills)
- [Mornington](/locations/mornington)
- [Frankston](/locations/frankston)
- [Langwarrin](/locations/langwarrin)
- [Bundoora](/locations/bundoora)
- [Werribee](/locations/werribee)
- [Heidelberg](/locations/heidelberg)
- [Moonee Ponds](/locations/moonee-ponds)
- [Sunbury](/locations/sunbury)
- [Dandenong](/locations/dandenong)
- [Wantirna](/locations/wantirna)

## Technical Implementation

### Map Integration
```typescript
interface LocationData {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  phone: string;
  hours: OperatingHours;
  accessibility: AccessibilityFeatures;
  services: ServiceOffering[];
}
```

### Location Services
- **Real-time Availability**
- **Appointment Booking Integration**
- **Accessibility Information**
- **Transportation Guidance**

## User Experience Features

### Location Selection
- **Distance-Based Sorting**
- **Service-Based Filtering**
- **Accessibility Filtering**
- **Availability Checking**

### Mobile Optimization
- **Touch-Friendly Maps**
- **Click-to-Call Functionality**
- **GPS Navigation Integration**
- **Location-Based Services**

This locations hub provides comprehensive access to all clinic information and facilitates easy location selection and navigation for patients across Melbourne.
