// SEO configuration and utilities
interface SEOPageData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

// Base SEO configuration
const BASE_SEO = {
  siteName: 'miNEURO - Dr Ales Aliashkevich',
  defaultTitle: 'miNEURO - Advanced Neurosurgery & Spine Care Melbourne',
  defaultDescription: 'Leading neurosurgeon Dr Ales Aliashkevich provides advanced brain and spine surgery in Melbourne. Specializing in minimally invasive procedures, disc replacement, and robotic surgery.',
  defaultKeywords: 'neurosurgeon melbourne, spine surgeon, brain surgery, disc replacement, minimally invasive surgery, robotic spine surgery',
  baseUrl: 'https://mineuro.com.au',
  ogImage: '/og-image.png',
  twitterHandle: '@mineuro'
};

// Export as SEO_CONFIG for backward compatibility
export const SEO_CONFIG = {
  siteUrl: BASE_SEO.baseUrl,
  siteName: BASE_SEO.siteName,
  defaultTitle: BASE_SEO.defaultTitle,
  defaultDescription: BASE_SEO.defaultDescription
};

// Page-specific SEO data
const PAGE_SEO_DATA: Record<string, Partial<SEOPageData>> = {
  home: {
    title: 'miNEURO - Advanced Neurosurgery & Spine Care Melbourne',
    description: 'Leading neurosurgeon Dr Ales Aliashkevich provides advanced brain and spine surgery in Melbourne. Specializing in minimally invasive procedures, disc replacement, and robotic surgery.',
    keywords: 'neurosurgeon melbourne, spine surgeon, brain surgery, disc replacement'
  },
  about: {
    title: 'About Dr Ales Aliashkevich - Neurosurgeon Melbourne',
    description: 'Meet Dr Ales Aliashkevich, leading neurosurgeon in Melbourne specializing in advanced brain and spine surgery with years of experience.',
    keywords: 'dr ales aliashkevich, neurosurgeon melbourne, spine surgeon melbourne'
  },
  expertise: {
    title: 'Neurosurgical Expertise - Advanced Brain & Spine Surgery',
    description: 'Comprehensive neurosurgical services including disc replacement, image-guided surgery, and robotic spine procedures.',
    keywords: 'neurosurgical expertise, brain surgery, spine surgery, disc replacement, robotic surgery'
  },
  appointments: {
    title: 'Book Appointment - Neurosurgeon Melbourne',
    description: 'Schedule your consultation with Dr Ales Aliashkevich for expert neurosurgical care in Melbourne.',
    keywords: 'book appointment neurosurgeon, consultation melbourne, spine surgeon appointment'
  },
  contact: {
    title: 'Contact Us - miNEURO Melbourne',
    description: 'Contact Dr Ales Aliashkevich and the miNEURO team for expert neurosurgical care in Melbourne.',
    keywords: 'contact neurosurgeon melbourne, mineuro contact, spine surgeon melbourne'
  },
  locations: {
    title: 'Locations - Neurosurgeon Consulting Rooms Melbourne',
    description: 'Find our neurosurgical consulting locations across Melbourne including Bundoora, Dandenong, and Mornington.',
    keywords: 'neurosurgeon locations melbourne, consulting rooms, spine surgeon melbourne locations'
  },
  patientResources: {
    title: 'Patient Resources - Neurosurgery Information & Exercises',
    description: 'Comprehensive patient resources including pre and post-operative care, exercises, and educational materials.',
    keywords: 'patient resources neurosurgery, spine exercises, post operative care'
  },
  medicolegal: {
    title: 'Medico-Legal Assessments - Neurosurgeon Melbourne',
    description: 'Professional medico-legal assessments and expert witness services for neurosurgical cases.',
    keywords: 'medico legal assessment, expert witness neurosurgeon, medical legal melbourne'
  },
  faq: {
    title: 'FAQ - Neurosurgery Questions Answered',
    description: 'Frequently asked questions about neurosurgery, spine surgery, and treatment options.',
    keywords: 'neurosurgery faq, spine surgery questions, neurosurgeon melbourne faq'
  },
  notFound: {
    title: 'Page Not Found - miNEURO',
    description: 'The page you are looking for could not be found. Return to miNEURO homepage.',
    keywords: 'page not found, mineuro, neurosurgeon melbourne'
  }
};

// Generate complete SEO data for a page
export const generatePageSEO = (
  pageKey: string, 
  overrides: Partial<SEOPageData> = {}
): SEOPageData => {
  const pageData = PAGE_SEO_DATA[pageKey] || {};
  
  return {
    title: overrides.title || pageData.title || BASE_SEO.defaultTitle,
    description: overrides.description || pageData.description || BASE_SEO.defaultDescription,
    keywords: overrides.keywords || pageData.keywords || BASE_SEO.defaultKeywords,
    ogImage: overrides.ogImage || pageData.ogImage || BASE_SEO.ogImage,
    canonicalUrl: overrides.canonicalUrl || pageData.canonicalUrl,
    jsonLd: overrides.jsonLd || pageData.jsonLd || generateDefaultJsonLd()
  };
};

// Generate default JSON-LD structured data
const generateDefaultJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": BASE_SEO.siteName,
  "description": BASE_SEO.defaultDescription,
  "url": BASE_SEO.baseUrl,
  "image": BASE_SEO.baseUrl + BASE_SEO.ogImage,
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "Victoria",
    "addressCountry": "Australia"
  },
  "medicalSpecialty": "Neurosurgery"
});

// Generate location-specific SEO
export const generateLocationSEO = (locationName: string, suburb: string) => {
  return generatePageSEO('locations', {
    title: `${locationName} - Neurosurgeon ${suburb} Melbourne`,
    description: `Visit Dr Ales Aliashkevich at ${locationName} in ${suburb} for expert neurosurgical care and spine surgery.`,
    keywords: `neurosurgeon ${suburb.toLowerCase()}, spine surgeon ${suburb.toLowerCase()}, ${locationName.toLowerCase()}`
  });
};

// Generate procedure-specific SEO
export const generateProcedureSEO = (procedureName: string, procedureSlug: string) => {
  return generatePageSEO('expertise', {
    title: `${procedureName} - Advanced Neurosurgery Melbourne`,
    description: `Expert ${procedureName.toLowerCase()} procedures by Dr Ales Aliashkevich in Melbourne using advanced minimally invasive techniques.`,
    keywords: `${procedureName.toLowerCase()}, ${procedureSlug}, neurosurgeon melbourne, spine surgery`
  });
};

// Export base configuration
export { BASE_SEO };
