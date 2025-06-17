import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  enableParallax?: boolean;

}

  /**
 * PageHeader component for displaying page titles and optional subtitles
 * Features enhanced background images with dark blue overlay, parallax effects, and mobile optimization
 * Uniform styling across all pages for consistency
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = "",
  enableParallax = false
}) => {
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
  const textColorClass = 'text-foreground';
  const subtitleColorClass = 'text-muted-foreground';

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        deviceInfo.isMobile ? "py-12" : "py-20",
        !hasBackground && 'bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background',
        backgroundImage && !imageLoaded && 'bg-muted',
        className
      )}
      aria-labelledby={headingId}
    >
      {/* Background image with parallax */}
      {hasBackground && (
        <div className="absolute inset-0 overflow-hidden opacity-10">
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
        </div>
      )}

      {/* Gradient overlay for better text contrast */}
      {hasBackground && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className={cn(
        "container relative z-10",
        deviceInfo.isMobile ? "px-4" : ""
      )}>
        <div className="text-center max-w-4xl mx-auto">
          <h1
            id={headingId}
            className={cn(
              "font-bold mb-6",
              deviceInfo.isMobile ? "text-3xl" : "text-4xl md:text-5xl",
              textColorClass
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={cn(
              "mb-8",
              deviceInfo.isMobile ? "text-base" : "text-lg",
              subtitleColorClass
            )}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

PageHeader.displayName = 'PageHeader';

export default PageHeader;
