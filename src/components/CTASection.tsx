import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

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

const CTASection: React.FC<CTASectionProps> = ({
  className = "",
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/appointments",
  secondaryButtonText,
  secondaryButtonLink = "/contact",
  bgClass = "bg-primary/5",
  id,
}: CTASectionProps) => {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  // Fallback to English translations if context fails
  const safeT = t || en;

  // Use provided text or default to translations with safety checks
  const ctaTitle = title || safeT?.home?.cta?.title || 'Book Your Consultation';
  const ctaDescription = description || safeT?.home?.cta?.description || 'Schedule your appointment today';
  const primaryBtnText = primaryButtonText || safeT?.home?.cta?.bookNow || 'Book Now';
  const secondaryBtnText = secondaryButtonText || safeT?.nav?.contact || 'Contact';

  // Generate unique IDs for accessibility
  const sectionId = id || `cta-section-${Math.random().toString(36).substring(2, 9)}`;
  const headingId = `cta-heading-${sectionId}`;
  const descriptionId = `cta-description-${sectionId}`;

  return (
    <section
      className={cn(
        bgClass,
        deviceInfo.isMobile ? "mobile-section mobile-safe-area" : "py-16",
        className
      )}
      id={sectionId}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
    >
      <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
        <div className={cn(
          "text-center mx-auto",
          deviceInfo.isMobile ? "max-w-full" : "max-w-3xl"
        )}>
          <h2
            id={headingId}
            className={cn(
              "font-bold mb-mobile-lg",
              deviceInfo.isMobile ? "mobile-3xl" : "text-3xl mb-6"
            )}
          >
            {ctaTitle}
          </h2>
          <p
            id={descriptionId}
            className={cn(
              "text-muted-foreground mb-mobile-lg",
              deviceInfo.isMobile ? "mobile-text" : "mb-8"
            )}
          >
            {ctaDescription}
          </p>
          <div className={cn(
            "justify-center",
            deviceInfo.isMobile
              ? "flex flex-col gap-mobile-md"
              : "flex flex-col sm:flex-row gap-4"
          )}>
            <Button
              asChild
              size={deviceInfo.isMobile ? "default" : "lg"}
            >
              <Link
                to={primaryButtonLink}
                aria-describedby={descriptionId}
                className="touch-feedback"
              >
                {primaryBtnText}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size={deviceInfo.isMobile ? "default" : "lg"}
            >
              <Link
                to={secondaryButtonLink}
                aria-describedby={descriptionId}
                className="touch-feedback"
              >
                {secondaryBtnText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

CTASection.displayName = 'CTASection';

export default CTASection;
