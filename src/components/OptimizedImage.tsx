import React, { useState, useCallback, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized Image Component with WebP/AVIF support and progressive loading
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate optimized image sources
  const generateSources = useCallback((originalSrc: string) => {
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    
    // Generate different formats and sizes
    const sources = {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      original: originalSrc
    };

    return sources;
  }, []);

  // Handle image load
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [src, priority]);

  // Generate blur placeholder
  const generateBlurPlaceholder = useCallback(() => {
    if (blurDataURL) return blurDataURL;
    
    // Generate a simple blur placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 10, 10);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 10, 10);
    }
    
    return canvas.toDataURL();
  }, [blurDataURL]);

  const sources = generateSources(src);
  const placeholderSrc = placeholder === 'blur' ? generateBlurPlaceholder() : undefined;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Main image with progressive enhancement */}
      <picture>
        {/* AVIF format for modern browsers */}
        <source
          srcSet={currentSrc ? sources.avif : undefined}
          type="image/avif"
          sizes={sizes}
        />
        
        {/* WebP format for broader support */}
        <source
          srcSet={currentSrc ? sources.webp : undefined}
          type="image/webp"
          sizes={sizes}
        />
        
        {/* Fallback to original format */}
        <img
          ref={imgRef}
          src={currentSrc || (placeholder === 'empty' ? undefined : placeholderSrc)}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            hasError && 'opacity-50'
          )}
          sizes={sizes}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && !hasError && currentSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Hook for responsive image sizes
 */
export const useResponsiveImageSizes = (breakpoints: Record<string, number>) => {
  const generateSizes = useCallback(() => {
    const sizeEntries = Object.entries(breakpoints)
      .sort(([, a], [, b]) => b - a) // Sort by width descending
      .map(([size, width]) => `(max-width: ${width}px) ${size}`)
      .join(', ');
    
    return sizeEntries;
  }, [breakpoints]);

  return generateSizes();
};

/**
 * Medical image component with specific optimizations
 */
export const MedicalImage: React.FC<OptimizedImageProps & { 
  medicalType?: 'xray' | 'mri' | 'ct' | 'diagram' | 'photo';
}> = ({ medicalType = 'photo', ...props }) => {
  // Medical images often need higher quality
  const quality = medicalType === 'diagram' ? 90 : props.quality || 80;
  
  // Medical images should be prioritized for accessibility
  const priority = medicalType === 'diagram' ? true : props.priority;

  return (
    <OptimizedImage
      {...props}
      quality={quality}
      priority={priority}
      className={cn(
        'medical-image',
        medicalType === 'xray' && 'filter contrast-125 brightness-110',
        medicalType === 'diagram' && 'filter contrast-110',
        props.className
      )}
    />
  );
};

export default OptimizedImage;
