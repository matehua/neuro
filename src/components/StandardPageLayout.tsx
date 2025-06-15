import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { cn } from '@/lib/utils';
import { generatePageSEO, SEOData } from '@/lib/seo';
import { useSEO } from '@/hooks/useSEO';

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
}

/**
 * Standardized page layout component
 * Provides consistent structure, SEO, error handling, and responsive design
 */
export default function StandardPageLayout({
  children,
  title,
  subtitle,
  backgroundImage,
  enableParallax = false,
  className = '',
  seoData,
  pageType = 'default',
  showHeader = true,
  headerClassName = '',
  contentClassName = '',
  enableErrorBoundary = true,
  customErrorFallback,
}: StandardPageLayoutProps) {
  const deviceInfo = useDeviceDetection();

  // Generate SEO data if not provided
  const finalSeoData = seoData || generatePageSEO(pageType, title ? { title: `${title} | miNEURO` } : {});

  // Apply SEO data
  useSEO(finalSeoData);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Announce page title to screen readers
  useEffect(() => {
    if (title) {
      const announcement = `Navigated to ${title} page`;
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = announcement;
      document.body.appendChild(announcer);
      
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }
  }, [title]);

  const pageContent = (
    <div className={cn(
      'min-h-screen flex flex-col',
      deviceInfo.isMobile && 'mobile-safe-area',
      className
    )}>
      <Navbar />
      
      {showHeader && title && (
        <PageHeader
          title={title}
          subtitle={subtitle}
          backgroundImage={backgroundImage}
          enableParallax={enableParallax}
          className={headerClassName}
        />
      )}

      <main 
        id="main-content" 
        className={cn(
          'flex-1',
          showHeader && title ? 'pt-0' : 'pt-20',
          contentClassName
        )}
        tabIndex={-1}
      >
        {/* Screen reader only heading if no visible header */}
        {(!showHeader || !title) && title && (
          <h1 className="sr-only">{title}</h1>
        )}
        
        {children}
      </main>

      <Footer />
    </div>
  );

  // Wrap with error boundary if enabled
  if (enableErrorBoundary) {
    return (
      <ErrorBoundary fallback={customErrorFallback}>
        {pageContent}
      </ErrorBoundary>
    );
  }

  return pageContent;
}

/**
 * Specialized layout for landing pages
 */
export function LandingPageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>) {
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
export function ServicePageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>) {
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
export function LocationPageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>) {
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
export function ArticlePageLayout(props: Omit<StandardPageLayoutProps, 'pageType'>) {
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
 * Section component with consistent spacing and responsive design
 */
export function StandardSection({
  children,
  className = '',
  background = 'default',
  spacing = 'default',
  maxWidth = 'container',
  id,
}: {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'primary' | 'accent';
  spacing?: 'none' | 'sm' | 'default' | 'lg' | 'xl';
  maxWidth?: 'none' | 'container' | 'prose' | 'narrow';
  id?: string;
}) {
  const deviceInfo = useDeviceDetection();

  const backgroundClasses = {
    default: '',
    muted: 'bg-muted/30',
    primary: 'bg-primary/5',
    accent: 'bg-accent/5',
  };

  const spacingClasses = {
    none: '',
    sm: deviceInfo.isMobile ? 'py-mobile-lg' : 'py-8',
    default: deviceInfo.isMobile ? 'py-mobile-xl' : 'py-16',
    lg: deviceInfo.isMobile ? 'py-mobile-2xl' : 'py-24',
    xl: deviceInfo.isMobile ? 'py-mobile-3xl' : 'py-32',
  };

  const maxWidthClasses = {
    none: '',
    container: 'container',
    prose: 'max-w-prose mx-auto px-4',
    narrow: 'max-w-2xl mx-auto px-4',
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <div className={maxWidthClasses[maxWidth]}>
        {children}
      </div>
    </section>
  );
}
