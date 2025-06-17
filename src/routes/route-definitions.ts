/**
 * Route definitions and metadata for the application
 */

// Supported languages
export type SupportedLanguage = 'en' | 'zh';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'zh'];

// Route paths
export const ROUTE_PATHS = {
  HOME: '/',
  APPOINTMENTS: '/appointments',
  APPOINTMENT_BOOKING: '/appointment-booking',
  EXPERTISE: '/expertise',
  PATIENT_RESOURCES: '/patient-resources',
  CONTACT: '/contact',
  FAQ: '/faq',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_CONDITIONS: '/terms-conditions',
  SPECIALTIES: '/specialties',
  MEDICOLEGAL: '/medicolegal',
  LOCATIONS: '/locations',
  GP_RESOURCES: '/gp-resources',
  NOT_FOUND: '*',

  // Patient Resources Routes
  PATIENT_RESOURCES_ROUTES: {
    CONDITION_INFORMATION: '/patient-resources/condition-information',
    SPINE_CONDITIONS_LIBRARY: '/patient-resources/spine-conditions-library',
    EXERCISE_LIBRARY: '/patient-resources/exercise-library',
    INDIVIDUAL_SPINE_HEALTH_PROGRAMME: '/patient-resources/individual-spine-health-programme',
    SPINE_AND_BRAIN_HEALTH: '/patient-resources/spine-and-brain-health',
    CERVICAL_SPINE_INJURY: '/patient-resources/cervical-spine-injury',
    CERVICAL_SPINE_EXERCISES: '/patient-resources/cervical-spine-exercises',
    SPINE_SAFE_EXERCISES: '/patient-resources/spine-safe-exercises',
    EXERCISE_PAIN_MED_RISKS: '/patient-resources/exercise-pain-med-risks',
    AGE_SPECIFIC_SPINE_RECOMMENDATIONS: '/patient-resources/age-specific-spine-recommendations',
    YOUTHFUL_SPINE: '/patient-resources/youthful-spine',
    LIFESTYLE_MODIFICATIONS: '/patient-resources/lifestyle-modifications',
  },

  // Medical Conditions Routes
  CONDITIONS: {
    HERNIATED_DISC: '/patient-resources/conditions/herniated-disc',
    SPINAL_STENOSIS: '/patient-resources/conditions/spinal-stenosis',
    SCIATICA: '/patient-resources/conditions/sciatica',
    RADICULOPATHY: '/patient-resources/conditions/radiculopathy',
    ARTHROSIS: '/patient-resources/conditions/arthrosis',
    DISCOPATHY: '/patient-resources/conditions/discopathy',
    FACET_ARTHROPATHY: '/patient-resources/conditions/facet-arthropathy',
    SACROILIAC_ARTHROPATHY: '/patient-resources/conditions/sacroiliac-arthropathy',
    PIRIFORMIS_SYNDROME: '/patient-resources/conditions/piriformis-syndrome',
    THORACIC_OUTLET_SYNDROME: '/patient-resources/conditions/thoracic-outlet-syndrome',
    OCCIPITAL_NEURALGIA: '/patient-resources/conditions/occipital-neuralgia',
    SPONDYLOSIS: '/patient-resources/conditions/spondylosis',
    PARS_DEFECTS: '/patient-resources/conditions/pars-defects',
    SPONDYLOLISTHESIS: '/patient-resources/conditions/spondylolisthesis',
  },

  // Expertise/Technologies Routes
  EXPERTISE_ROUTES: {
    CERVICAL_DISC_REPLACEMENT: '/expertise/cervical-disc-replacement',
    LUMBAR_DISC_REPLACEMENT: '/expertise/lumbar-disc-replacement',
    IMAGE_GUIDED_SURGERY: '/expertise/image-guided-surgery',
    ROBOTIC_SPINE_SURGERY: '/expertise/robotic-spine-surgery',
  },

  // Location Routes
  LOCATION_ROUTES: {
    SURREY_HILLS: '/locations/surrey-hills',
    MORNINGTON: '/locations/mornington',
    FRANKSTON: '/locations/frankston',
    LANGWARRIN: '/locations/langwarrin',
    BUNDOORA: '/locations/bundoora',
    WERRIBEE: '/locations/werribee',
    HEIDELBERG: '/locations/heidelberg',
    MOONEE_PONDS: '/locations/moonee-ponds',
    SUNBURY: '/locations/sunbury',
    DANDENONG: '/locations/dandenong',
    WANTIRNA: '/locations/wantirna',
    LOCATION_DETAIL: '/locations/location-detail',
  },

  // GP Resources Routes
  GP_RESOURCES_ROUTES: {
    REFERRAL_PROTOCOLS: '/gp-resources/referral-protocols',
    DIAGNOSTICS: '/gp-resources/diagnostics',
    CARE_COORDINATION: '/gp-resources/care-coordination',
    EMERGENCIES: '/gp-resources/emergencies',
  },
} as const;

// Route redirects
export const ROUTE_REDIRECTS: Record<string, string> = {
  '/home': ROUTE_PATHS.HOME,
  '/about': ROUTE_PATHS.EXPERTISE,
  '/services': ROUTE_PATHS.EXPERTISE,
  '/resources': ROUTE_PATHS.PATIENT_RESOURCES,
  '/contact-us': ROUTE_PATHS.CONTACT,
  '/find-us': ROUTE_PATHS.LOCATIONS,
  '/privacy': ROUTE_PATHS.PRIVACY_POLICY,
  '/terms': ROUTE_PATHS.TERMS_CONDITIONS,
  '/book': ROUTE_PATHS.APPOINTMENTS,
  '/booking': ROUTE_PATHS.APPOINTMENT_BOOKING,
};

// Route metadata interface
export interface RouteMetadata {
  title: string;
  description: string;
  keywords?: string[];
  category: 'core' | 'patient-resources' | 'expertise' | 'locations' | 'gp-resources';
  priority: 'high' | 'medium' | 'low';
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// Route metadata definitions
export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  [ROUTE_PATHS.HOME]: {
    title: 'miNEURO - Expert Neurosurgical Care',
    description: 'Leading neurosurgical practice providing expert spine and brain care across Melbourne',
    keywords: ['neurosurgery', 'spine surgery', 'brain surgery', 'Melbourne'],
    category: 'core',
    priority: 'high',
    changeFreq: 'weekly',
  },
  [ROUTE_PATHS.APPOINTMENTS]: {
    title: 'Book Appointment',
    description: 'Schedule your neurosurgical consultation with Dr. Ales Aliashkevich',
    keywords: ['appointments', 'booking', 'consultation', 'neurosurgery'],
    category: 'core',
    priority: 'high',
    changeFreq: 'daily',
  },
  [ROUTE_PATHS.APPOINTMENT_BOOKING]: {
    title: 'Appointment Booking',
    description: 'Complete your appointment booking process',
    keywords: ['booking', 'appointment', 'schedule'],
    category: 'core',
    priority: 'high',
    changeFreq: 'daily',
  },
  [ROUTE_PATHS.EXPERTISE]: {
    title: 'Expertise & Technologies',
    description: 'Advanced neurosurgical procedures and cutting-edge medical technologies',
    keywords: ['neurosurgical procedures', 'medical technology', 'spine surgery'],
    category: 'expertise',
    priority: 'high',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.PATIENT_RESOURCES]: {
    title: 'Patient Resources',
    description: 'Comprehensive resources for spine health, exercises, and condition information',
    keywords: ['patient resources', 'spine health', 'exercises', 'conditions'],
    category: 'patient-resources',
    priority: 'high',
    changeFreq: 'weekly',
  },
  [ROUTE_PATHS.CONTACT]: {
    title: 'Contact Us',
    description: 'Get in touch with our neurosurgical team for appointments and consultations',
    keywords: ['contact', 'appointments', 'consultation'],
    category: 'core',
    priority: 'high',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.FAQ]: {
    title: 'Frequently Asked Questions',
    description: 'Common questions about neurosurgery, spine surgery, and treatments',
    keywords: ['FAQ', 'questions', 'neurosurgery', 'spine surgery'],
    category: 'core',
    priority: 'medium',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.LOCATIONS]: {
    title: 'Our Locations',
    description: 'Find our neurosurgical clinics across Melbourne and surrounding areas',
    keywords: ['locations', 'clinics', 'Melbourne', 'neurosurgery'],
    category: 'locations',
    priority: 'high',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.SPECIALTIES]: {
    title: 'Neurosurgical Specialties',
    description: 'Specialized neurosurgical procedures and treatments',
    keywords: ['specialties', 'procedures', 'neurosurgery', 'treatments'],
    category: 'expertise',
    priority: 'high',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.MEDICOLEGAL]: {
    title: 'Medico-Legal Services',
    description: 'Expert medico-legal assessments and reports',
    keywords: ['medico-legal', 'assessments', 'reports', 'expert'],
    category: 'core',
    priority: 'medium',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.GP_RESOURCES]: {
    title: 'GP Resources',
    description: 'Resources and protocols for general practitioners',
    keywords: ['GP resources', 'referrals', 'protocols', 'healthcare'],
    category: 'gp-resources',
    priority: 'medium',
    changeFreq: 'monthly',
  },
  [ROUTE_PATHS.PRIVACY_POLICY]: {
    title: 'Privacy Policy',
    description: 'Privacy policy and data protection information',
    keywords: ['privacy', 'data protection', 'policy'],
    category: 'core',
    priority: 'low',
    changeFreq: 'yearly',
  },
  [ROUTE_PATHS.TERMS_CONDITIONS]: {
    title: 'Terms & Conditions',
    description: 'Terms of service and usage conditions',
    keywords: ['terms', 'conditions', 'service'],
    category: 'core',
    priority: 'low',
    changeFreq: 'yearly',
  },
};

// Utility functions
export function getRouteWithLanguage(path: string, language: SupportedLanguage): string {
  if (path === ROUTE_PATHS.HOME) {
    return `/${language}`;
  }
  return `/${language}${path}`;
}

export function getRouteMetadata(path: string): RouteMetadata | undefined {
  return ROUTE_METADATA[path];
}

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

export function getAllRoutePaths(): string[] {
  const paths: string[] = [];
  
  function extractPaths(obj: Record<string, unknown>): void {
    Object.values(obj).forEach(value => {
      if (typeof value === 'string') {
        paths.push(value);
      } else if (typeof value === 'object' && value !== null) {
        extractPaths(value as Record<string, unknown>);
      }
    });
  }

  extractPaths(ROUTE_PATHS);
  return [...new Set(paths)]; // Remove duplicates
}

export function getRoutesByCategory(category: RouteMetadata['category']): string[] {
  return Object.entries(ROUTE_METADATA)
    .filter(([, metadata]) => metadata.category === category)
    .map(([path]) => path);
}

// Route validation
export function validateRoutePath(path: string): boolean {
  const allPaths = getAllRoutePaths();
  return allPaths.includes(path) || path === ROUTE_PATHS.NOT_FOUND;
}

// Generate sitemap data
export function generateSitemapData() {
  return Object.entries(ROUTE_METADATA).map(([path, metadata]) => ({
    path,
    ...metadata,
    languages: SUPPORTED_LANGUAGES,
  }));
}
