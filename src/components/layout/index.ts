/**
 * Layout Components Barrel Export
 * Provides clean imports for all layout-related components
 */

// Main layout component
export { default as StandardPageLayout } from '../StandardPageLayout';
export type { StandardPageLayoutProps } from './types';

// Layout variants
export {
  LandingPageLayout,
  ServicePageLayout,
  LocationPageLayout,
  ArticlePageLayout,
  withStandardLayout,
  MinimalLayout,
  FullWidthLayout,
  CenteredLayout,
  createLayoutVariant,
} from './LayoutVariants';

// Section components
export { default as StandardSection } from './StandardSection';
export {
  HeroSection,
  ContentSection,
  FeatureSection,
  CTASection,
} from './StandardSection';

// Types
export type {
  StandardSectionProps,
  LayoutVariant,
  LayoutConfig,
} from './types';