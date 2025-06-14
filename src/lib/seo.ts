import { SEOData } from '@/hooks/useSEO';

// Base SEO configuration
export const SEO_CONFIG = {
  siteName: 'miNEURO',
  siteUrl: 'https://mineuro.com.au',
  defaultTitle: 'Dr Ales Aliashkevich | Neurosurgeon & Spine Surgeon Melbourne Victoria',
  defaultDescription: 'Dr Ales Aliashkevich is a minimally invasive neurosurgeon and spine surgeon in Melbourne, Victoria, specializing in advanced brain and spine surgery techniques.',
  defaultKeywords: 'neurosurgeon, spine surgeon, brain surgery, spine surgery, Melbourne, Victoria, minimally invasive, Dr Ales Aliashkevich, miNEURO',
  defaultImage: '/og-image.png',
  twitterHandle: '@mineuro',
  author: 'miNEURO Brain and Spine Surgery',
  language: 'en',
  locale: 'en_AU',
  type: 'website'
};

// Doctor and practice information for structured data
export const PRACTICE_INFO = {
  name: 'miNEURO Brain and Spine Surgery',
  description: 'Advanced neurosurgical and spine surgery practice specializing in minimally invasive procedures',
  url: SEO_CONFIG.siteUrl,
  telephone: '+61 3 9008 4200',
  address: {
    streetAddress: '1 Surrey Hills',
    addressLocality: 'Surrey Hills',
    addressRegion: 'Victoria',
    postalCode: '3127',
    addressCountry: 'Australia'
  },
  doctor: {
    name: 'Dr Ales Aliashkevich',
    specialty: [
      'Neurosurgery',
      'Spine Surgery',
      'Minimally Invasive Surgery',
      'Brain Surgery',
      'Robotic Surgery'
    ]
  }
};

/**
 * Generate SEO data for different page types
 */
export const generatePageSEO = (
  pageType?: string, // Made pageType optional
  customData?: Partial<SEOData>
): SEOData => {
  // Define base SEO from SEO_CONFIG
  const baseSeoData: SEOData = {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    keywords: SEO_CONFIG.defaultKeywords,
    ogTitle: SEO_CONFIG.defaultTitle,
    ogDescription: SEO_CONFIG.defaultDescription,
    ogImage: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    ogType: 'website',
    twitterTitle: SEO_CONFIG.defaultTitle,
    twitterDescription: SEO_CONFIG.defaultDescription,
    twitterImage: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    // Base canonical is site URL. Specific paths/overrides will adjust this.
    canonical: SEO_CONFIG.siteUrl 
  };

  // Page-specific SEO configurations (remains unchanged)
  const pageConfigs: Record<string, Partial<SEOData>> = {
    home: {
      title: 'Dr Ales Aliashkevich | Leading Neurosurgeon & Spine Surgeon Melbourne',
      description: 'Expert neurosurgeon Dr Ales Aliashkevich offers advanced brain and spine surgery in Melbourne. Specializing in minimally invasive procedures with cutting-edge technology.',
      keywords: 'neurosurgeon Melbourne, spine surgeon Victoria, brain surgery, minimally invasive spine surgery, Dr Ales Aliashkevich, miNEURO',
      canonical: '/', // Example: path for homepage
    },
    appointments: {
      title: 'Book Appointment | Dr Ales Aliashkevich Neurosurgeon Melbourne',
      description: 'Schedule your consultation with Dr Ales Aliashkevich, leading neurosurgeon in Melbourne. Expert brain and spine surgery consultations available.',
      keywords: 'book neurosurgeon appointment Melbourne, spine surgeon consultation, brain surgery appointment',
      canonical: '/appointments',
    },
    expertise: {
      title: 'Neurosurgery Expertise | Advanced Brain & Spine Surgery Melbourne',
      description: 'Discover Dr Aliashkevich\'s expertise in neurosurgery, spine surgery, and minimally invasive procedures. Advanced surgical techniques for optimal patient outcomes.',
      keywords: 'neurosurgery expertise, spine surgery techniques, minimally invasive neurosurgery, robotic spine surgery',
      canonical: '/expertise',
    },
    locations: {
      title: 'Clinic Locations | Neurosurgeon Melbourne Victoria',
      description: 'Find Dr. Aliashkevich\'s neurosurgery clinic locations across Melbourne and Victoria. Convenient locations for brain and spine surgery consultations.',
      keywords: 'neurosurgeon clinic Melbourne, spine surgeon locations Victoria, brain surgery clinic',
      canonical: '/locations',
    },
    'patient-resources': {
      title: 'Patient Resources | Spine Health & Recovery Information',
      description: 'Comprehensive patient resources for spine health, recovery guides, and educational materials from Dr. Aliashkevich\'s neurosurgery practice.',
      keywords: 'spine health resources, neurosurgery recovery, patient education, spine exercises',
      canonical: '/patient-resources',
    },
    medicolegal: {
      title: 'Medico-Legal Reports | Expert Neurosurgical Assessments',
      description: 'Professional medico-legal reports and expert assessments from Dr Ales Aliashkevich. Comprehensive neurological and spinal injury evaluations.',
      keywords: 'medico-legal reports, neurosurgical assessment, spinal injury evaluation, expert medical opinion',
      canonical: '/medicolegal',
    },
    'gp-resources': {
      title: 'GP Resources | Referral Guidelines for Neurosurgery',
      description: 'Resources for general practitioners including referral protocols, diagnostic guidelines, and care coordination for neurosurgical patients.',
      keywords: 'GP neurosurgery referrals, medical professional resources, neurosurgical guidelines',
      canonical: '/gp-resources',
    },
    contact: {
      title: 'Contact Dr Ales Aliashkevich | Neurosurgeon Melbourne',
      description: 'Contact Dr Ales Aliashkevich\'s neurosurgery practice in Melbourne. Get in touch for consultations, appointments, and inquiries.',
      keywords: 'contact neurosurgeon Melbourne, spine surgeon contact, neurosurgery clinic contact',
      canonical: '/contact',
    },
    faq: {
      title: 'Frequently Asked Questions | Neurosurgery & Spine Surgery',
      description: 'Common questions about neurosurgery, spine surgery, and treatments answered by Dr Ales Aliashkevich\'s practice.',
      keywords: 'neurosurgery FAQ, spine surgery questions, brain surgery information',
      canonical: '/faq',
    }
  };

  const pageConfig = pageType ? (pageConfigs[pageType] || {}) : {};

  // Determine the path segment for canonical URL.
  // Priority: customData.canonical (if path) > pageConfig.canonical (if path) > root "/"
  let pathSegment = "/"; 
  if (customData?.canonical && customData.canonical.startsWith('/')) {
    pathSegment = customData.canonical;
  } else if (pageConfig.canonical && pageConfig.canonical.startsWith('/')) {
    pathSegment = pageConfig.canonical;
  }
  
  // Construct final canonical URL.
  // Priority for full URL: customData.canonical (if full URL) > pageConfig.canonical (if full URL) > constructed from pathSegment
  let finalCanonicalUrl: string;
  if (customData?.canonical && customData.canonical.startsWith('http')) {
    finalCanonicalUrl = customData.canonical;
  } else if (pageConfig.canonical && pageConfig.canonical.startsWith('http')) {
    finalCanonicalUrl = pageConfig.canonical;
  } else {
    // Ensure no double slashes except for the root path itself.
    let fullPath = `${SEO_CONFIG.siteUrl}${pathSegment}`;
    fullPath = fullPath.replace(/([^:]\/)\/+/g, "$1"); // Replace multiple slashes (not after scheme like http://) with a single slash
    if (fullPath !== `${SEO_CONFIG.siteUrl}/` && fullPath.endsWith('/')) {
      finalCanonicalUrl = fullPath.slice(0, -1); // Remove trailing slash unless it's the root
    } else {
      finalCanonicalUrl = fullPath;
    }
  }
  
  // Merge SEO data: baseSeoData <- pageConfig <- customData
  const mergedSeo = {
    ...baseSeoData,
    ...pageConfig,
    ...customData,
    canonical: finalCanonicalUrl // Always set the calculated final canonical URL
  };

  return mergedSeo;
};

/**
 * Generate location-specific SEO data
 */
export const generateLocationSEO = (
  locationName: string,
  customData?: Partial<SEOData>
): SEOData => {
  const baseLocationData = generatePageSEO('locations'); // This will now use the updated generatePageSEO
  
  // Ensure customData's canonical (if relative path) is specific to this location
  let locationSpecificCanonicalPath = `/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`;
  if (customData?.canonical && customData.canonical.startsWith('/')) {
    locationSpecificCanonicalPath = customData.canonical;
  }

  return generatePageSEO('locations', { // Pass 'locations' as pageType
    title: `${locationName} Clinic | Dr Ales Aliashkevich Neurosurgeon`,
    description: `Visit Dr Ales Aliashkevich's neurosurgery clinic in ${locationName}. Expert brain and spine surgery services with advanced facilities.`,
    keywords: `neurosurgeon ${locationName}, spine surgeon ${locationName}, brain surgery clinic ${locationName}`,
    canonical: locationSpecificCanonicalPath, // Provide a location-specific path
    ...customData, // Spread other custom data last to allow overrides
  });
};

/**
 * Generate procedure-specific SEO data
 */
export const generateProcedureSEO = (
  procedureName: string,
  customData?: Partial<SEOData>
): SEOData => {
  const baseProcedureData = generatePageSEO('expertise'); // Uses updated generatePageSEO

  let procedureSpecificCanonicalPath = `/expertise/${procedureName.toLowerCase().replace(/\s+/g, '-')}`;
   if (customData?.canonical && customData.canonical.startsWith('/')) {
    procedureSpecificCanonicalPath = customData.canonical;
  }

  return generatePageSEO('expertise', { // Pass 'expertise' as pageType
    title: `${procedureName} | Dr Ales Aliashkevich Melbourne`,
    description: `Expert ${procedureName} performed by Dr Ales Aliashkevich in Melbourne. Advanced surgical techniques for optimal patient outcomes.`,
    keywords: `${procedureName} Melbourne, ${procedureName} surgeon, minimally invasive ${procedureName}`,
    canonical: procedureSpecificCanonicalPath,
    ...customData,
  });
};

/**
 * Generate structured data for medical practice
 */
export const generateMedicalPracticeStructuredData = (
  practiceData: {
    name: string;
    description: string;
    url: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    doctor: {
      name: string;
      specialty: string[];
    };
  }
) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": practiceData.name,
    "description": practiceData.description,
    "url": practiceData.url,
    "telephone": practiceData.telephone,
    "address": {
      "@type": "PostalAddress",
      ...practiceData.address
    },
    "medicalSpecialty": practiceData.doctor.specialty,
    "physician": {
      "@type": "Physician",
      "name": practiceData.doctor.name,
      "medicalSpecialty": practiceData.doctor.specialty
    }
  };
};

/**
 * Generate structured data for medical procedures
 */
export const generateMedicalProcedureStructuredData = (
  procedureData: {
    name: string;
    description: string;
    bodyLocation: string;
    preparation?: string;
    followup?: string;
  }
) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": procedureData.name,
    "description": procedureData.description,
    "bodyLocation": procedureData.bodyLocation,
    "preparation": procedureData.preparation,
    "followup": procedureData.followup
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${SEO_CONFIG.siteUrl}${crumb.url}`
    }))
  };
};
