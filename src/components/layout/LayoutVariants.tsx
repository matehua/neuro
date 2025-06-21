import React from 'react';

import StandardPageLayout from '../StandardPageLayout';
import { StandardPageLayoutProps } from './types';
import { cn } from '@/lib/utils';

/**
 * Layout Variants
 * Specialized layout components for different page types
 */

/**
 * Specialized layout for landing pages
 */
export function LandingPageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>): React.ReactElement {
  return (
    <StandardPageLayout
      {...props}
      pageType="landing"
      enableParallax={true}
      className={cn('landing-page', props.className)}
    />
  );
}

/**
 * Specialized layout for service pages
 */
export function ServicePageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>): React.ReactElement {
  return (
    <StandardPageLayout
      {...props}
      pageType="service"
      className={cn('service-page', props.className)}
    />
  );
}

/**
 * Specialized layout for location pages
 */
export function LocationPageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>): React.ReactElement {
  return (
    <StandardPageLayout
      {...props}
      pageType="location"
      className={cn('location-page', props.className)}
    />
  );
}

/**
 * Specialized layout for article/content pages
 */
export function ArticlePageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>): React.ReactElement {
  return (
    <StandardPageLayout
      {...props}
      pageType="article"
      showHeader={props.showHeader ?? true}
      className={cn('article-page', props.className)}
      contentClassName={cn('prose-container', props.contentClassName)}
    />
  );
}

/**
 * Higher-order component for wrapping pages with standard layout
 */
export function withStandardLayout<P extends object>(
  Component: React.ComponentType<P>,
  layoutProps?: Partial<StandardPageLayoutProps>
) {
  const WrappedComponent = (props: P) => (
    <StandardPageLayout {...layoutProps}>
      <Component {...props} />
    </StandardPageLayout>
  );

  WrappedComponent.displayName = `withStandardLayout(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

/**
 * Layout factory function for creating custom layouts
 */
export function createLayoutVariant(
  name: string,
  defaultProps: Partial<StandardPageLayoutProps>
) {
  const LayoutVariant = (props: Omit<StandardPageLayoutProps, keyof typeof defaultProps>) => (
    <StandardPageLayout
      {...defaultProps}
      {...props}
      className={cn(defaultProps.className, props.className)}
    />
  );

  LayoutVariant.displayName = `${name}Layout`;

  return LayoutVariant;
}

// Pre-configured layout variants
export const MinimalLayout = createLayoutVariant('Minimal', {
  showHeader: false,
  enableErrorBoundary: false,
  className: 'minimal-layout'
});

export const FullWidthLayout = createLayoutVariant('FullWidth', {
  className: 'full-width-layout',
  contentClassName: 'px-0'
});

export const CenteredLayout = createLayoutVariant('Centered', {
  className: 'centered-layout',
  contentClassName: 'max-w-4xl mx-auto px-4'
});
