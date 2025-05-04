import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { announceToScreenReader } from "@/lib/accessibility";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
  /** Title for the current page, will be announced to screen readers */
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  // Announce page title to screen readers when it changes
  useEffect(() => {
    if (pageTitle) {
      // Update document title
      document.title = `${pageTitle} | miNEURO`;

      // Announce page change to screen readers
      announceToScreenReader(`Navigated to ${pageTitle} page`);
    }
  }, [pageTitle]);

  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
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
