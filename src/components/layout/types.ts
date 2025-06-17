import { ReactNode } from 'react';

import { SEOData } from '@/lib/seo';

/**
 * Layout Component Types
 * Shared type definitions for layout components
 */


export interface StandardPageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  enableParallax?: boolean;
  className?: string;
  seoData?: SEOData;
  pageType?: 'default' | 'landing' | 'article' | 'service' | 'location';
  showHeader?: boolean;
  headerClassName?: string;
  contentClassName?: string;
  enableErrorBoundary?: boolean;
  customErrorFallback?: ReactNode;

export interface StandardSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'primary' | 'accent';
  spacing?: 'none' | 'sm' | 'default' | 'lg' | 'xl';
  maxWidth?: 'none' | 'container' | 'prose' | 'narrow';
  id?: string;

export type LayoutVariant = 'standard' | 'landing' | 'service' | 'location' | 'article';

export interface LayoutConfig {
  pageType: StandardPageLayoutProps['pageType'];
  enableParallax?: boolean;
  showHeader?: boolean;
  className?: string;
  contentClassName?: string;
