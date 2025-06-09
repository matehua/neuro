import React, { useEffect, useState } from "react";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  enableParallax?: boolean;
  overlayOpacity?: number;
}

/**
 * PageHeader component for displaying page titles and optional subtitles
 * Features enhanced background images with dark overlay, parallax effects, and mobile optimization
 * Similar styling to HeroSection for consistency
 */
export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  className = "",
  enableParallax = false,
  overlayOpacity = 0.6
}: PageHeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const deviceInfo = useDeviceDetection();

  // Generate a unique ID for the heading
  const headingId = `page-title-${Math.random().toString(36).substring(2, 9)}`;

  // Preload the background image
  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
    } else {
      setImageLoaded(true);
    }
  }, [backgroundImage]);

  // Parallax scroll effect
  useEffect(() => {
    if (enableParallax && !deviceInfo.isMobile) {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [enableParallax, deviceInfo.isMobile]);

  // Calculate parallax effect - reduced on mobile for better performance
  const backgroundY = enableParallax && !deviceInfo.isMobile ? scrollY * 0.3 : 0;

  // Determine styling based on background image presence
  const hasBackground = backgroundImage && imageLoaded;
  const textColorClass = hasBackground ? 'text-white' : 'text-foreground';
  const subtitleColorClass = hasBackground ? 'text-white/90' : 'text-muted-foreground';

  return (
    <section
      className={cn(
        "relative overflow-hidden mobile-safe-area",
        deviceInfo.isMobile ? "py-16" : "py-20",
        !hasBackground && 'bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background',
        backgroundImage && !imageLoaded && 'bg-muted',
        className
      )}
      aria-labelledby={headingId}
    >
      {/* Background image with parallax */}
      {hasBackground && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: enableParallax && !deviceInfo.isMobile ? `translateY(${backgroundY}px)` : 'none',
            backgroundPosition: deviceInfo.isMobile
              ? 'center center'
              : enableParallax ? `center ${50 + scrollY * 0.02}%` : 'center center'
          }}
          role="img"
          aria-label={`Background image for ${title}`}
        />
      )}

      {/* Dark overlay for better text contrast */}
      {hasBackground && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className={cn(
        "relative z-10",
        deviceInfo.isMobile ? "mobile-container" : "container"
      )}>
        <div className="text-center max-w-3xl mx-auto">
          <h1
            id={headingId}
            className={cn(
              "font-bold mt-2 mb-6",
              deviceInfo.isMobile
                ? "mobile-4xl"
                : "text-4xl md:text-5xl",
              textColorClass
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={cn(
              deviceInfo.isMobile ? "mobile-text" : "text-lg",
              subtitleColorClass
            )}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
