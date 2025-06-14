
import { useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: object;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta tags
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
      
      meta.content = content;
    };

    // Update meta tags based on SEO data
    if (seoData.description) {
      updateMetaTag('description', seoData.description);
      updateMetaTag('og:description', seoData.description, true);
      updateMetaTag('twitter:description', seoData.description);
    }

    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
      updateMetaTag('twitter:image', seoData.ogImage);
    }

    if (seoData.ogType) {
      updateMetaTag('og:type', seoData.ogType, true);
    }

    if (seoData.twitterCard) {
      updateMetaTag('twitter:card', seoData.twitterCard);
    }

    // Update canonical URL
    if (seoData.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = seoData.canonicalUrl;
    }

    // Update JSON-LD structured data
    if (seoData.jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(seoData.jsonLd);
    }
  }, [seoData]);
};
