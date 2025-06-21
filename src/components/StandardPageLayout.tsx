import React, { useEffect } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { StandardPageLayoutProps } from './layout/types';
import { cn } from '@/lib/utils';
import { generatePageSEO } from '@/lib/seo';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useSEO } from '@/hooks/useSEO';

/**
 * Standard Page Layout Component
 * Refactored for better maintainability and modularity
 */

// Re-export types for backward compatibility
export type { StandardPageLayoutProps } from './layout/types';

/**
 * Standardized page layout component
 * Provides consistent structure, SEO, error handling, and responsive design
 */
const StandardPageLayout: React.FC<StandardPageLayoutProps> = ({
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
}) => {
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
};

StandardPageLayout.displayName = 'StandardPageLayout';

export default StandardPageLayout;
