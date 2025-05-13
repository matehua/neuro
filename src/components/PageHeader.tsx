import React, { useEffect, useState } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

/**
 * PageHeader component for displaying page titles and optional subtitles
 * Supports background images with appropriate text color contrast
 */
export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  className = ""
}: PageHeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Determine text color based on whether there's a background image
  const textColorClass = backgroundImage ? 'text-white' : 'text-foreground';
  const subtitleColorClass = backgroundImage ? 'text-white/90' : 'text-muted-foreground';

  // Generate a unique ID for the heading
  const headingId = `page-title-${Math.random().toString(36).substring(2, 9)}`;

  // Preload the background image
  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setImageLoaded(true);
    } else {
      setImageLoaded(true);
    }
  }, [backgroundImage]);

  return (
    <section
      className={`relative py-20 ${!backgroundImage ? 'bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background' : ''} ${className} ${backgroundImage && !imageLoaded ? 'bg-muted' : ''}`}
      style={backgroundImage && imageLoaded ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
      aria-labelledby={headingId}
    >
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            id={headingId}
            className={`text-4xl md:text-5xl font-bold mt-2 mb-6 ${textColorClass}`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`${subtitleColorClass}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
