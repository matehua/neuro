import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

import SafeImage from '@/components/SafeImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

const IndependentReviewsSection: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Add minimal fallback structure based on component needs
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    hero: { title: "Welcome", subtitle: "Professional Care", description: "Expert medical services" },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };
  const deviceInfo = useDeviceDetection();

  const reviewPlatforms = [
    {
      name: "Google",
      logo: "/images/review-platforms/google-logo.png",
      rating: 4.8,
      count: 107,
      url: "https://www.google.com/search?q=Dr+Ales+Aliashkevich+Reviews"
    },
    {
      name: "BirdEye",
      logo: "/images/review-platforms/birdeye-logo.png",
      rating: 4.8,
      count: 107,
      url: "https://reviews.birdeye.com/ales-aliashkevich-170853294132129"
    },
    {
      name: "RateMDs",
      logo: "/images/review-platforms/ratemds-logo.png",
      rating: 5.0,
      count: 40,
      url: "https://www.ratemds.com/doctor-ratings/3604748/Dr-Ales-Aliashkevich-Melbourne-VIC.html/"
    },
    {
      name: "TrustIndex",
      logo: "/images/review-platforms/trustindex-logo.png",
      rating: 4.9,
      count: 96,
      url: "https://www.trustindex.io/reviews/mineuro.com.au"
    },
    {
      name: "ThreeBestRated",
      logo: "/images/review-platforms/threebestrated-logo.png",
      rating: 5.0,
      count: 107,
      url: "https://threebestrated.com.au/neurosurgeons-in-melbourne-vic",
      subtitle: "The Best Neurosurgeon in Melbourne"
    }
  ];

  // Generate unique IDs for accessibility
  const sectionId = 'independent-reviews-section';
  const headingId = 'reviews-heading';
  const descriptionId = 'reviews-description';

  return (
    <section
      className={cn(
        "bg-white dark:bg-background mobile-safe-area",
        deviceInfo.isMobile ? "mobile-section" : "section py-20"
      )}
      id={sectionId}
      aria-labelledby={headingId}
    >
      <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
        <div className={cn(
          "text-center mx-auto animate-fade-in mb-mobile-xl",
          deviceInfo.isMobile ? "max-w-full" : "max-w-3xl mb-12"
        )}>
          <h2
            id={headingId}
            className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile
                ? "mobile-3xl"
                : "text-3xl md:text-4xl mb-4"
            )}
          >
            {finalT.testimonials?.title || "Independent Patient Reviews"}
          </h2>
          <p
            id={descriptionId}
            className={cn(
              "text-muted-foreground",
              deviceInfo.isMobile ? "mobile-text" : ""
            )}
          >
            {finalT.testimonials?.description || "Dr. Aliashkevich has received excellent feedback across multiple independent review platforms. See what patients are saying about their experiences."}
          </p>
        </div>

        <div className={cn(
          "mb-mobile-lg",
          deviceInfo.isMobile
            ? "grid grid-cols-1 gap-mobile-md"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10"
        )}>
          {reviewPlatforms?.map((platform: unknown) => (
            <div
              key={platform.name}
              className={cn(
                "card rounded-lg shadow-md bg-card text-center transition-shadow",
                deviceInfo.isMobile
                  ? "p-mobile-md touch-feedback"
                  : "p-6 hover:shadow-lg"
              )}
              aria-labelledby={`${platform.name.toLowerCase()}-rating`}
            >
              <div className={cn(
                "flex justify-center",
                deviceInfo.isMobile ? "mb-mobile-sm h-10" : "mb-4 h-12"
              )}>
                <SafeImage
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-full object-contain"
                  fallbackSrc="/images/placeholder-logo.png"
                />
              </div>
              <div className={cn(
                "flex items-center justify-center",
                deviceInfo.isMobile ? "mb-mobile-xs" : "mb-2"
              )}>
                <div
                  id={`${platform.name.toLowerCase()}-rating`}
                  className={cn(
                    "font-bold text-primary",
                    deviceInfo.isMobile ? "mobile-xl" : "text-2xl"
                  )}
                >
                  {platform.rating}
                </div>
                <div className={cn(
                  "text-muted-foreground ml-2",
                  deviceInfo.isMobile ? "mobile-text" : "text-sm"
                )}>
                  / 5.0
                </div>
              </div>
              <div
                className="flex justify-center mb-2"
                aria-label={`${platform.rating} out of 5 stars`}
                role="img"
              >
                {[...Array(5)].map((_, i: number) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 fill-primary text-primary`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">Based on {platform.count} reviews</p>
              {platform.subtitle && (
                <p className="text-xs font-medium text-primary mb-4 italic">"{platform.subtitle}"</p>
              )}
              <Button asChild variant="outline" size="sm" className="w-full">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label={`View reviews on ${platform.name} (opens in a new tab)`}
                >
                  View on {platform.name}
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            {"These reviews reflect the experiences of real patients who have received treatment from Dr. Aliashkevich. We're proud of our reputation for excellence in neurosurgical care."}
          </p>
          <Button asChild>
            <a
              href="https://www.google.com/search?q=dr+ales+aliashkevich+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              aria-label="Read more patient reviews on Google (opens in a new tab)"
            >
              {"Read More Patient Reviews"}
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

IndependentReviewsSection.displayName = 'IndependentReviewsSection';

export default IndependentReviewsSection;
