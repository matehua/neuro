
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/contexts/DeviceContext";
import { cn } from "@/lib/utils";

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
  const deviceInfo = useDeviceDetection();

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
}
