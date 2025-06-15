/**
 * Strict type definitions for translation objects
 * Ensures type safety and consistency across all translations
 */

// Navigation translations
export interface NavigationTranslations {
  home: string;
  about: string;
  expertise: string;
  locations: string;
  patientResources: string;
  contact: string;
  bookAppointment: string;
  language: string;
  menu: string;
  close: string;
  skipToContent: string;
}

// Hero section translations
export interface HeroTranslations {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  scrollDown: string;
}

// About section translations
export interface AboutTranslations {
  title: string;
  subtitle: string;
  description: string;
  experience: string;
  patients: string;
  procedures: string;
  awards: string;
  learnMore: string;
}

// Expertise translations
export interface ExpertiseTranslations {
  title: string;
  subtitle: string;
  brainSurgery: {
    title: string;
    description: string;
  };
  spineSurgery: {
    title: string;
    description: string;
  };
  peripheralNerve: {
    title: string;
    description: string;
  };
  viewAll: string;
  learnMore: string;
}

// Testimonials translations
export interface TestimonialsTranslations {
  title: string;
  description: string;
  readMore: string;
  previous: string;
  next: string;
}

// CTA section translations
export interface CTATranslations {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  phone: string;
  email: string;
}

// Footer translations
export interface FooterTranslations {
  quickLinks: string;
  contactInfo: string;
  followUs: string;
  copyright: string;
  privacyPolicy: string;
  termsOfService: string;
  accessibility: string;
  sitemap: string;
}

// Specialties page translations
export interface SpecialtiesTranslations {
  title: string;
  description: string;
  filters: {
    location: string;
    allLocations: string;
    complexity: string;
    anyComplexity: string;
    moderate: string;
    advanced: string;
    complex: string;
    highlyComplex: string;
    recoveryTime: string;
    days: string;
    resetFilters: string;
    showing: string;
    of: string;
    procedures: string;
    noMatch: string;
    adjustFilters: string;
  };
}

// Patient resources translations
export interface PatientResourcesTranslations {
  title: string;
  description: string;
  filters: {
    category: string;
    allCategories: string;
    difficulty: string;
    allDifficulties: string;
    duration: string;
    allDurations: string;
    equipment: string;
    allEquipment: string;
    showing: string;
    of: string;
    exercises: string;
    resources: string;
    noMatch: string;
    adjustFilters: string;
    viewDetails: string;
    more: string;
  };
  categories: {
    preOperative: string;
    postOperative: string;
    rehabilitation: string;
    education: string;
    lifestyle: string;
  };
}

// Contact page translations
export interface ContactTranslations {
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
    invalidPhone: string;
  };
  info: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    emergency: string;
  };
  map: {
    title: string;
    directions: string;
    parking: string;
  };
}

// Location page translations
export interface LocationTranslations {
  title: string;
  description: string;
  address: string;
  phone: string;
  directions: string;
  parking: string;
  publicTransport: string;
  facilities: string;
  services: string;
  hours: string;
  bookAppointment: string;
  virtualTour: string;
}

// Appointment booking translations
export interface AppointmentTranslations {
  title: string;
  subtitle: string;
  steps: {
    selectService: string;
    chooseDateTime: string;
    personalInfo: string;
    confirmation: string;
  };
  form: {
    service: string;
    date: string;
    time: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    emergencyContact: string;
    medicalHistory: string;
    currentMedications: string;
    allergies: string;
    insuranceProvider: string;
    policyNumber: string;
    referringPhysician: string;
    reasonForVisit: string;
    preferredLanguage: string;
    specialRequests: string;
    submit: string;
    back: string;
    next: string;
    booking: string;
    success: string;
    error: string;
  };
  validation: {
    required: string;
    invalidEmail: string;
    invalidPhone: string;
    invalidDate: string;
    pastDate: string;
    weekendNotAvailable: string;
    timeSlotUnavailable: string;
  };
}

// Common UI translations
export interface CommonTranslations {
  loading: string;
  error: string;
  retry: string;
  cancel: string;
  save: string;
  edit: string;
  delete: string;
  confirm: string;
  yes: string;
  no: string;
  ok: string;
  close: string;
  back: string;
  next: string;
  previous: string;
  submit: string;
  search: string;
  filter: string;
  sort: string;
  clear: string;
  reset: string;
  apply: string;
  viewMore: string;
  viewLess: string;
  showAll: string;
  hideAll: string;
  expand: string;
  collapse: string;
  required: string;
  optional: string;
  select: string;
  upload: string;
  download: string;
  print: string;
  share: string;
  copy: string;
  copied: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  socialMedia: string;
}

// Main translation interface
export interface Translations {
  navigation: NavigationTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  expertise: ExpertiseTranslations;
  testimonials: TestimonialsTranslations;
  cta: CTATranslations;
  footer: FooterTranslations;
  specialties: SpecialtiesTranslations;
  patientResources: PatientResourcesTranslations;
  contact: ContactTranslations;
  location: LocationTranslations;
  appointment: AppointmentTranslations;
  common: CommonTranslations;
}

// Language codes
export type LanguageCode = 'en' | 'zh';

// Language information
export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}

// Translation validation utilities
export function isValidLanguageCode(code: string): code is LanguageCode {
  return ['en', 'zh'].includes(code);
}

// Type guard for translation object validation
export function isValidTranslations(obj: unknown): obj is Translations {
  if (typeof obj !== 'object' || obj === null) return false;
  
  const translations = obj as Record<string, unknown>;
  
  // Check for required top-level sections
  const requiredSections = [
    'navigation',
    'hero',
    'about',
    'expertise',
    'testimonials',
    'cta',
    'footer',
    'specialties',
    'patientResources',
    'contact',
    'location',
    'appointment',
    'common'
  ];
  
  return requiredSections.every(section => 
    typeof translations[section] === 'object' && translations[section] !== null
  );
}

// Utility function to get nested translation value safely
export function getTranslation(
  translations: Translations,
  path: string,
  fallback?: string
): string {
  const keys = path.split('.');
  let current: unknown = translations;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return fallback || path;
    }
  }
  
  return typeof current === 'string' ? current : fallback || path;
}

// Utility function to validate translation completeness
export function validateTranslationCompleteness(
  translations: Translations,
  referenceTranslations: Translations
): { missing: string[]; extra: string[] } {
  const missing: string[] = [];
  const extra: string[] = [];
  
  function checkObject(
    obj: Record<string, unknown>,
    ref: Record<string, unknown>,
    path: string = ''
  ): void {
    // Check for missing keys
    for (const key in ref) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (!(key in obj)) {
        missing.push(currentPath);
      } else if (typeof ref[key] === 'object' && ref[key] !== null) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          checkObject(obj[key], ref[key], currentPath);
        } else {
          missing.push(currentPath);
        }
      }
    }
    
    // Check for extra keys
    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (!(key in ref)) {
        extra.push(currentPath);
      }
    }
  }
  
  checkObject(translations, referenceTranslations);
  
  return { missing, extra };
}
