import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generatePageSEO, generateLanguageAlternates, normalizeCanonicalUrl, validateStructuredData, SupportedLanguageCode, MetaTagManager } from '@/lib/seo';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: Record<string, unknown>;
  languageAlternates?: Array<{ hreflang: string; href: string }>;
  currentLanguage?: SupportedLanguageCode;
}

/**
 * Custom hook for managing SEO metadata
 * Updates document head with SEO tags, language alternates, and structured data
 */
export const useSEO = (seoData: SEOData) => {
  const location = useLocation();

  useEffect(() => {
    const metaManager = MetaTagManager.getInstance();

    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update basic meta tags
    if (seoData.description) {
      metaManager.updateMetaTag('description', seoData.description);
    }

    if (seoData.keywords) {
      metaManager.updateMetaTag('keywords', seoData.keywords);
    }

    // Update Open Graph tags
    if (seoData.ogTitle) {
      metaManager.updateMetaTag('og:title', seoData.ogTitle, true);
    }

    if (seoData.ogDescription) {
      metaManager.updateMetaTag('og:description', seoData.ogDescription, true);
    }

    if (seoData.ogImage) {
      metaManager.updateMetaTag('og:image', seoData.ogImage, true);
    }

    if (seoData.ogType) {
      metaManager.updateMetaTag('og:type', seoData.ogType, true);
    }

    // Update Twitter Card tags
    if (seoData.twitterTitle) {
      metaManager.updateMetaTag('twitter:title', seoData.twitterTitle);
    }

    if (seoData.twitterDescription) {
      metaManager.updateMetaTag('twitter:description', seoData.twitterDescription);
    }

    if (seoData.twitterImage) {
      metaManager.updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Update canonical URL with validation
    if (seoData.canonical) {
      const normalizedCanonical = normalizeCanonicalUrl(seoData.canonical, seoData.currentLanguage);
      metaManager.updateLinkTag('canonical', normalizedCanonical);
    }

    // Update language alternates
    const languageAlternates = seoData.languageAlternates || generateLanguageAlternates(location.pathname, seoData.currentLanguage);

    // Remove existing hreflang links
    document.querySelectorAll('link[hreflang]').forEach(link => link.remove());

    // Add new hreflang links
    languageAlternates.forEach(alternate => {
      const linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'alternate');
      linkElement.setAttribute('hreflang', alternate.hreflang);
      linkElement.setAttribute('href', alternate.href);
      document.head.appendChild(linkElement);
    });

    // Add structured data with validation
    if (seoData.structuredData) {
      const validation = validateStructuredData(seoData.structuredData);

      if (process.env.NODE_ENV === 'development') {
        if (!validation.isValid) {
          console.warn('Structured data validation errors:', validation.errors);
        }
        if (validation.warnings.length > 0) {
          console.warn('Structured data validation warnings:', validation.warnings);
        }
      }

      const structuredDataId = 'structured-data-script';
      const existingScript = document.getElementById(structuredDataId);

      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = structuredDataId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function to remove added elements when component unmounts
    return () => {
      // Note: We don't remove meta tags on cleanup as they should persist
      // until the next page navigation in a SPA
    };
  }, [seoData, location.pathname]);
};

/**
 * Hook for setting page-specific SEO data.
 * It takes page-specific overrides and merges them with global defaults
 * by calling generatePageSEO.
 */
export const usePageSEO = (pageData: Partial<SEOData>) => {
  // `pageData` contains the specific overrides for the current page.
  // These overrides (including a potential `canonical` path like '/about')
  // are passed to `generatePageSEO` as `customData`.
  // `generatePageSEO` (with an undefined `pageType`) will use global defaults
  // from `SEO_CONFIG` and then layer `pageData` on top, correctly
  // calculating the final `canonical` URL.
  const seoDataToSet = generatePageSEO(undefined, pageData);
  
  useSEO(seoDataToSet);
};

export default useSEO;
