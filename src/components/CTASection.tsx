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
}: CTASectionProps) {
  const { t } = useLanguage();

  // Use provided text or default to translations
  const ctaTitle = title || t.home.cta.title;
  const ctaDescription = description || t.home.cta.description;
  const primaryBtnText = primaryButtonText || t.home.cta.bookNow;
  const secondaryBtnText = secondaryButtonText || t.nav.contact;

  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to={primaryButtonLink}>{primaryBtnText}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={secondaryButtonLink}>{secondaryBtnText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
