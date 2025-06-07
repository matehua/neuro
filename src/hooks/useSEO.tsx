import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Custom hook for managing SEO meta tags dynamically
 * Updates document head with SEO-optimized meta tags
 */
export const useSEO = (seoData: SEOData) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Get or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', seoData.description);
    
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Update robots meta tag
    const robotsContent = [
      seoData.noindex ? 'noindex' : 'index',
      seoData.nofollow ? 'nofollow' : 'follow'
    ].join(', ');
    updateMetaTag('robots', robotsContent);

    // Update Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', seoData.ogType || 'website', true);
    
    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    
    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Update canonical URL
    const canonical = seoData.canonical || `${window.location.origin}${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.setAttribute('href', canonical);

    // Update Open Graph URL
    updateMetaTag('og:url', canonical, true);

    // Add structured data if provided
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      
      structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    }

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // Note: We don't remove meta tags on cleanup as they should persist
      // until the next page updates them
    };
  }, [seoData, location.pathname]);
};


