import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

/**
 * HeroSection component for the homepage with parallax scrolling effect
 * Features a full-width background image with overlay and call-to-action buttons
 */
export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const deviceInfo = useDeviceDetection();

  // Generate unique IDs for accessibility
  const headingId = 'hero-heading';
  const sectionId = 'hero-section';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax effect - reduced on mobile for better performance
  const backgroundY = deviceInfo.isMobile ? scrollY * 0.2 : scrollY * 0.5;
  const contentY = deviceInfo.isMobile ? scrollY * 0.1 : scrollY * 0.2;

  return (
    <section
      className={cn(
        "relative overflow-hidden mobile-safe-area",
        deviceInfo.isMobile ? "h-screen min-h-[600px]" : "h-screen"
      )}
      id={sectionId}
      aria-labelledby={headingId}
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-neurosurgeon-section-weightlifting-body-spine art.jpg')",
            transform: deviceInfo.isMobile ? 'none' : `translateY(${backgroundY}px)`,
            backgroundPosition: deviceInfo.isMobile
              ? 'center center'
              : `center ${50 + scrollY * 0.05}%`
          }}
          role="img"
          aria-label="Dr Ales Aliashkevich - Neurosurgeon specialising in spine health and body strength rehabilitation"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={cn(
          "relative h-full flex flex-col justify-center items-center text-center",
          deviceInfo.isMobile ? "px-mobile-lg" : "px-4"
        )}
        style={{
          transform: deviceInfo.isMobile ? 'none' : `translateY(${contentY}px)`
        }}
      >
        <div className={cn(
          "max-w-3xl",
          deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in"
        )}>
          <span className={cn(
            "inline-block text-foreground/90 tracking-wide border-b border-foreground/30 pb-2 mb-mobile-md",
            deviceInfo.isMobile ? "mobile-text" : "text-lg mb-4"
          )}>
            {t.hero.subtitle}
          </span>
          <h1
            id={headingId}
            className={cn(
              "font-bold text-foreground mb-mobile-lg",
              deviceInfo.isMobile
                ? "mobile-4xl leading-tight"
                : "text-4xl md:text-5xl lg:text-6xl mb-6"
            )}
          >
            Neurosurgical Expertise and Innovative Technology for Superior Brain and Spine Surgery Results
          </h1>
          <p className={cn(
            "text-muted-foreground max-w-2xl mx-auto mb-mobile-xl",
            deviceInfo.isMobile ? "mobile-text" : "text-lg mb-8"
          )}>
            {t.hero.description}
          </p>
          <div className={cn(
            "flex items-center justify-center",
            deviceInfo.isMobile
              ? "flex-col gap-mobile-md"
              : "flex-col sm:flex-row gap-4"
          )}>
            <Button
              asChild
              size={deviceInfo.isMobile ? "default" : "lg"}
              className={cn(
                "rounded-full bg-primary text-white mobile-button touch-feedback",
                deviceInfo.isMobile
                  ? "w-full min-h-[48px]"
                  : "min-w-[200px] transform transition-all duration-300 hover:translate-y-[-2px]"
              )}
            >
              <Link
                to="/appointments"
                aria-label={t.hero.bookConsultation}
              >
                {t.hero.bookConsultation}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size={deviceInfo.isMobile ? "default" : "lg"}
              className={cn(
                "rounded-full bg-transparent border-foreground mobile-button touch-feedback",
                deviceInfo.isMobile
                  ? "w-full min-h-[48px] hover:bg-foreground/10"
                  : "min-w-[200px] transform transition-all duration-300 hover:translate-y-[-2px] hover:bg-foreground/10"
              )}
            >
              <Link
                to="/expertise"
                aria-label={t.hero.exploreTreatments}
              >
                {t.hero.exploreTreatments}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className={cn(
        "absolute left-1/2 transform -translate-x-1/2 text-foreground animate-bounce",
        deviceInfo.isMobile ? "bottom-mobile-lg" : "bottom-10"
      )}>
        <a
          href="#welcome"
          className={cn(
            "flex flex-col items-center opacity-70 transition-opacity touch-feedback",
            deviceInfo.isMobile ? "touch-target" : "hover:opacity-100"
          )}
          aria-label="Scroll down to welcome section"
        >
          <span className={cn(
            "mb-2",
            deviceInfo.isMobile ? "mobile-sm" : "text-sm"
          )}>
            {t.hero.scrollDown}
          </span>
          <ChevronDown className={cn(
            deviceInfo.isMobile ? "h-5 w-5" : "h-6 w-6"
          )} />
        </a>
      </div>

      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-50"
          />
          <path
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-100 [animation-delay:-4s]"
          />
        </svg>
      </div>
    </section>
  );
}
