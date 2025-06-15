import { useEffect } from 'react';
import { generatePageSEO } from '@/lib/seo';

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
}

/**
 * Custom hook for managing SEO metadata
 * Updates document head with SEO tags
 */
export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    if (seoData.description) {
      updateMetaTag('description', seoData.description);
    }

    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Update Open Graph tags
    if (seoData.ogTitle) {
      updateMetaTag('og:title', seoData.ogTitle, true);
    }

    if (seoData.ogDescription) {
      updateMetaTag('og:description', seoData.ogDescription, true);
    }

    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
    }

    if (seoData.ogType) {
      updateMetaTag('og:type', seoData.ogType, true);
    }

    // Update Twitter Card tags
    if (seoData.twitterTitle) {
      updateMetaTag('twitter:title', seoData.twitterTitle);
    }

    if (seoData.twitterDescription) {
      updateMetaTag('twitter:description', seoData.twitterDescription);
    }

    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Update canonical URL
    if (seoData.canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      
      canonicalElement.setAttribute('href', seoData.canonical);
    }

    // Add structured data
    if (seoData.structuredData) {
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
  }, [seoData]);
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
