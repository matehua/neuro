import React from 'react';
import { Link } from 'react-router-dom';
import SafeImage from '@/components/SafeImage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { Target, Calendar } from "lucide-react";

// Props interface for ConditionHeroSection component
interface ConditionHeroSectionProps {
  /** Main title for the condition */
  title: string;
  /** Optional subtitle for additional context */
  subtitle?: string;
  /** Detailed description of the condition */
  description: string;
  /** Badge text to display above the title */
  badgeText?: string;
  /** Source URL for the hero background image */
  heroImageSrc?: string;
  /** Alt text for the hero image for accessibility */
  heroImageAlt?: string;
  /** Fallback image URL if main image fails to load */
  fallbackImageSrc?: string;
  /** Whether to show the assessment button */
  showAssessmentButton?: boolean;
  /** Whether to show the booking consultation button */
  showBookingButton?: boolean;
  /** Link destination for the assessment button */
  assessmentLink?: string;
  /** Link destination for the booking button */
  bookingLink?: string;
  /** Additional CSS classes for customization */
  className?: string;
}

const ConditionHeroSection: React.FC<ConditionHeroSectionProps> = ({
  title,
  subtitle,
  description,
  badgeText = "Spine Conditions Library",
  heroImageSrc,
  heroImageAlt = "Medical condition illustration",
  fallbackImageSrc = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  showAssessmentButton = true,
  showBookingButton = true,
  assessmentLink = "#assessment",
  bookingLink = "/contact",
  className
}) => {
  const deviceInfo = useDeviceDetection();

  return (
    <section className={cn(
      "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
      deviceInfo.isMobile ? "py-12" : "py-20",
      className
    )}>
      {heroImageSrc && (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <SafeImage
            src={heroImageSrc}
            alt={heroImageAlt}
            className="w-full h-full object-cover"
            fallbackSrc={fallbackImageSrc}
          />
        </div>
      )}
      <div className={cn(
        "container relative z-10",
        deviceInfo.isMobile ? "px-4" : ""
      )}>
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            {badgeText}
          </Badge>
          <h1 className={cn(
            "font-bold mb-6",
            deviceInfo.isMobile ? "text-3xl" : "text-4xl md:text-5xl"
          )}>
            {title}
          </h1>
          {subtitle && (
            <h2 className={cn(
              "text-muted-foreground mb-4",
              deviceInfo.isMobile ? "text-lg" : "text-xl"
            )}>
              {subtitle}
            </h2>
          )}
          <p className={cn(
            "text-muted-foreground mb-8",
            deviceInfo.isMobile ? "text-base" : "text-lg"
          )}>
            {description}
          </p>
          {(showAssessmentButton || showBookingButton) && (
            <div className={cn(
              "flex justify-center gap-4",
              deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
            )}>
              {showAssessmentButton && (
                <Button asChild size={deviceInfo.isMobile ? "default" : "lg"}>
                  <Link to={assessmentLink}>
                    <Target className="mr-2 h-4 w-4" />
                    Take Assessment
                  </Link>
                </Button>
              )}
              {showBookingButton && (
                <Button asChild variant="outline" size={deviceInfo.isMobile ? "default" : "lg"}>
                  <Link to={bookingLink}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ConditionHeroSection.displayName = 'ConditionHeroSection';

export default ConditionHeroSection;
