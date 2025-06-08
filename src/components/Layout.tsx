import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { announceToScreenReader } from "@/lib/accessibility";
import { useSEO, SEOData } from "@/hooks/useSEO";
import { generatePageSEO } from "@/lib/seo";

interface LayoutProps {
  children: React.ReactNode;
  /** Title for the current page, will be announced to screen readers */
  pageTitle?: string;
  /** SEO data for the page */
  seoData?: SEOData;
  /** Page type for default SEO configuration */
  pageType?: string;
}

export default function Layout({ children, pageTitle, seoData, pageType = 'default' }: LayoutProps) {
  // Generate SEO data if not provided
  const finalSeoData = seoData || generatePageSEO(pageType, pageTitle ? { title: `${pageTitle} | miNEURO` } : {});

  // Apply SEO data
  useSEO(finalSeoData);

  // Announce page title to screen readers when it changes
  useEffect(() => {
    if (pageTitle) {
      // Announce page change to screen readers
      announceToScreenReader(`Navigated to ${pageTitle} page`);
    }
  }, [pageTitle]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
        {pageTitle && (
          <h1 className="sr-only">{pageTitle}</h1>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
