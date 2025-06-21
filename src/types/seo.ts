/**
 * SEO Type Definitions
 * Shared types for SEO functionality to avoid circular dependencies
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  languageAlternates?: Record<string, string>;
  currentLanguage?: string;
}

export type SupportedLanguageCode = 'en' | 'zh';

// Re-export from SUPPORTED_LANGUAGES constant for consistency
// This will be properly typed when imported from seo.ts

export interface SEOValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

export interface LanguageAlternate {
  hreflang: string;
  href: string;
}

export interface MetaTagConfig {
  name?: string;
  property?: string;
  content: string;
}

export interface LinkTagConfig {
  rel: string;
  href: string;
  hreflang?: string;
}
