import React, { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

/**
 * OptimizedImage component for optimized image loading
 * Supports lazy loading, placeholder, and error handling
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  objectFit = "cover"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);

    // Check if image is already cached
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setError(true);
  };

  // Generate a smaller image URL for thumbnails if possible
  const optimizedSrc = src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png')
    ? src
    : src;

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && !error && (
        <div
          className="absolute inset-0 bg-muted animate-pulse rounded"
          aria-hidden="true"
        />
      )}

      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded">
          <span className="text-muted-foreground text-sm">Image not available</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          style={{ objectFit }}
        />
      )}
    </div>
  );
}
