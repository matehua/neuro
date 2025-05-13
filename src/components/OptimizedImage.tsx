import React, { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
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
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setError(true);
  };

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
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
}
