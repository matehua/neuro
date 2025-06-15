import React from "react";
import StandardPageLayout, { StandardPageLayoutProps } from "@/components/StandardPageLayout";

interface LayoutProps {
  children: React.ReactNode;
  /** Title for the current page, will be announced to screen readers */
  pageTitle?: string;
  /** SEO data for the page */
  seoData?: StandardPageLayoutProps['seoData'];
  /** Page type for default SEO configuration */
  pageType?: StandardPageLayoutProps['pageType'];
}

/**
 * Legacy Layout component - now wraps StandardPageLayout for consistency
 * @deprecated Use StandardPageLayout directly for new components
 */
export default function Layout({ children, pageTitle, seoData, pageType = 'default' }: LayoutProps) {
  return (
    <StandardPageLayout
      title={pageTitle}
      seoData={seoData}
      pageType={pageType}
      showHeader={false} // Legacy Layout didn't show PageHeader
      enableErrorBoundary={true}
    >
      {children}
    </StandardPageLayout>
  );
}
