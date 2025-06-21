import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'medical.condition' | 'medical.procedure';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  medicalSpecialty?: string;
  condition?: string;
  procedure?: string;
  noIndex?: boolean;
  canonicalUrl?: string;

}

  /**
 * Comprehensive SEO Head component with medical practice structured data
 */
export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Dr. Ales Aliashkevich',
  medicalSpecialty = 'Neurosurgery',
  condition,
  procedure,
  noIndex = false,
  canonicalUrl
}) => {
  const { language } = useLanguage();
  
  // Default values
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://mineuro.com.au';
  const siteName = 'miNEURO Brain and Spine Surgery';
  const defaultDescription = 'Expert neurosurgical care in Melbourne. Dr. Ales Aliashkevich specializes in brain and spine surgery, offering advanced treatments for neurological conditions.';
  const defaultKeywords = [
    'neurosurgery',
    'brain surgery',
    'spine surgery',
    'Melbourne neurosurgeon',
    'Dr Ales Aliashkevich',
    'neurological conditions',
    'spinal disorders',
    'brain tumors',
    'spine specialist'
  ];

  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || defaultDescription;
  const pageKeywords = [...defaultKeywords, ...keywords];
  const pageUrl = url || siteUrl;
  const pageImage = image || `${siteUrl}/images/og-default.jpg`;

  // Generate structured data for medical practice
  const medicalPracticeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: siteName,
    description: pageDescription,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: pageImage,
    telephone: '+61 3 9008 4200',
    email: 'info@mineuro.com.au',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 6, 89 Bridge Road',
      addressLocality: 'Richmond',
      addressRegion: 'VIC',
      postalCode: '3121',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.8136,
      longitude: 144.9631
    },
    openingHours: [
      'Mo-Fr 09:00-17:00'
    ],
    medicalSpecialty: medicalSpecialty,
    founder: {
      '@type': 'Person',
      name: author,
      jobTitle: 'Neurosurgeon',
      medicalSpecialty: 'Neurosurgery'
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Medical Degree',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Royal Australasian College of Surgeons'
      }
    }
  };

  // Generate condition-specific structured data
  const conditionStructuredData = condition ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: condition,
    description: pageDescription,
    associatedAnatomy: {
      '@type': 'AnatomicalStructure',
      name: medicalSpecialty === 'Neurosurgery' ? 'Brain and Spine' : 'Nervous System'
    },
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name: procedure || 'Neurosurgical Treatment'
    }
  } : null;

  // Generate procedure-specific structured data
  const procedureStructuredData = procedure ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: procedure,
    description: pageDescription,
    medicalSpecialty: medicalSpecialty,
    bodyLocation: {
      '@type': 'AnatomicalStructure',
      name: 'Brain and Spine'
    }
  } : null;

  // Generate article structured data
  const articleStructuredData = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: title,
    description: pageDescription,
    image: pageImage,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      jobTitle: 'Neurosurgeon'
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`
      }
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient'
    },
    about: condition ? {
      '@type': 'MedicalCondition',
      name: condition
    } : undefined
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="language" content={language} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:siteName" content={siteName} />
      <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : 'en_AU'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Medical-specific meta tags */}
      <meta name="medical-specialty" content={medicalSpecialty} />
      {condition && <meta name="medical-condition" content={condition} />}
      {procedure && <meta name="medical-procedure" content={procedure} />}

      {/* Article meta tags */}
      {publishedTime && <meta property="article:publishedTime" content={publishedTime} />}
      {modifiedTime && <meta property="article:modifiedTime" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(medicalPracticeStructuredData)}
      </script>
      
      {conditionStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(conditionStructuredData)}
        </script>
      )}
      
      {procedureStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(procedureStructuredData)}
        </script>
      )}
      
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
      
      {/* Additional medical practice structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>
    </Helmet>
  );
};

SEOHead.displayName = 'SEOHead';

export default SEOHead;
