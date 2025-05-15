import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface CTASectionProps {
  className?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgClass?: string;
  id?: string;
}

export default function CTASection({
  className = "",
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/appointments",
  secondaryButtonText,
  secondaryButtonLink = "/contact",
  bgClass = "bg-primary/5",
  id,
}: CTASectionProps) {
  const { t } = useLanguage();

  // Use provided text or default to translations
  const ctaTitle = title || t.home.cta.title;
  const ctaDescription = description || t.home.cta.description;
  const primaryBtnText = primaryButtonText || t.home.cta.bookNow;
  const secondaryBtnText = secondaryButtonText || t.nav.contact;

  // Generate unique IDs for accessibility
  const sectionId = id || `cta-section-${Math.random().toString(36).substring(2, 9)}`;
  const headingId = `cta-heading-${sectionId}`;
  const descriptionId = `cta-description-${sectionId}`;

  return (
    <section
      className={`py-16 ${bgClass} ${className}`}
      id={sectionId}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id={headingId} className="text-3xl font-bold mb-6">{ctaTitle}</h2>
          <p id={descriptionId} className="text-muted-foreground mb-8">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to={primaryButtonLink} aria-describedby={descriptionId}>{primaryBtnText}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={secondaryButtonLink} aria-describedby={descriptionId}>{secondaryBtnText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
