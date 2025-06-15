import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

interface EnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty' | 'skeleton';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

/**
 * Enhanced Image Component with advanced optimization features
 * - WebP/AVIF format support with fallbacks
 * - Intersection Observer lazy loading
 * - Progressive loading with blur placeholder
 * - Responsive image sizing
 * - Error handling with fallback images
 * - Performance monitoring
 */
export default function EnhancedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  quality = 80,
  onLoad,
  onError,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  crossOrigin,
}: EnhancedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const deviceInfo = useDeviceDetection();

  // Generate responsive image sources
  const generateImageSources = useCallback((baseSrc: string) => {
    const baseUrl = baseSrc.split('.').slice(0, -1).join('.');
    const extension = baseSrc.split('.').pop();
    
    // Generate different formats and sizes
    const formats = ['avif', 'webp', extension];
    const densities = deviceInfo.isMobile ? [1, 2] : [1, 2, 3];
    
    return formats.map(format => ({
      format,
      srcSet: densities.map(density => {
        const suffix = density > 1 ? `@${density}x` : '';
        return `${baseUrl}${suffix}.${format} ${density}x`;
      }).join(', ')
    }));
  }, [deviceInfo.isMobile]);

  // Generate blur placeholder
  const generateBlurPlaceholder = useCallback(() => {
    if (blurDataURL) return blurDataURL;
    
    // Generate a simple blur placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, 10, 10);
    }
    return canvas.toDataURL();
  }, [blurDataURL]);

  // Handle image load
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    
    // Performance monitoring
    if (loadStartTime > 0) {
      const loadTime = performance.now() - loadStartTime;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Image loaded in ${loadTime.toFixed(2)}ms:`, src);
      }
      
      // Report to performance monitoring if available
      if (window.performance && window.performance.mark) {
        window.performance.mark(`image-load-${src}`);
        window.performance.measure(
          `image-load-duration-${src}`,
          `image-load-start-${src}`,
          `image-load-${src}`
        );
      }
    }
    
    onLoad?.();
  }, [loadStartTime, src, onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true); // Consider it "loaded" to stop loading state
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Failed to load image: ${src}`);
    }
    
    onError?.();
  }, [src, onError]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setCurrentSrc(src);
      setLoadStartTime(performance.now());
      if (window.performance && window.performance.mark) {
        window.performance.mark(`image-load-start-${src}`);
      }
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            setLoadStartTime(performance.now());
            if (window.performance && window.performance.mark) {
              window.performance.mark(`image-load-start-${src}`);
            }
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: deviceInfo.isMobile ? '50px' : '100px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [src, priority, loading, deviceInfo.isMobile]);

  // Preload critical images
  useEffect(() => {
    if (priority && currentSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = currentSrc;
      if (fetchPriority) {
        link.setAttribute('fetchpriority', fetchPriority);
      }
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, currentSrc, fetchPriority]);

  const imageSources = generateImageSources(currentSrc || src);
  const placeholderSrc = generateBlurPlaceholder();

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Loading skeleton */}
      {!isLoaded && placeholder === 'skeleton' && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Blur placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          aria-hidden="true"
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Main image with progressive enhancement */}
      <picture>
        {/* AVIF format for modern browsers */}
        {imageSources[0] && (
          <source
            srcSet={currentSrc ? imageSources[0].srcSet : undefined}
            type="image/avif"
            sizes={sizes}
          />
        )}
        
        {/* WebP format for broader support */}
        {imageSources[1] && (
          <source
            srcSet={currentSrc ? imageSources[1].srcSet : undefined}
            type="image/webp"
            sizes={sizes}
          />
        )}
        
        {/* Fallback to original format */}
        <img
          ref={imgRef}
          src={currentSrc || (placeholder === 'empty' ? undefined : placeholderSrc)}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          crossOrigin={crossOrigin}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            hasError && 'opacity-0'
          )}
          sizes={sizes}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

/**
 * Medical image component with specific optimizations
 */
export function MedicalImage({ 
  medicalType = 'photo',
  ...props 
}: EnhancedImageProps & { 
  medicalType?: 'xray' | 'mri' | 'ct' | 'diagram' | 'photo';
}) {
  // Medical images often need higher quality
  const quality = medicalType === 'diagram' ? 90 : props.quality || 85;
  
  // Medical images should be prioritized for accessibility
  const priority = medicalType === 'diagram' ? true : props.priority;
  
  // Medical images should load eagerly for accessibility
  const loading = medicalType === 'diagram' ? 'eager' : props.loading;

  return (
    <EnhancedImage
      {...props}
      quality={quality}
      priority={priority}
      loading={loading}
      className={cn(
        'medical-image',
        medicalType === 'xray' && 'filter contrast-125 brightness-110',
        medicalType === 'diagram' && 'filter contrast-110',
        props.className
      )}
    />
  );
}

/**
 * Hero image component with specific optimizations
 */
export function HeroImage(props: EnhancedImageProps) {
  return (
    <EnhancedImage
      {...props}
      priority={true}
      loading="eager"
      fetchPriority="high"
      placeholder="blur"
      className={cn('hero-image', props.className)}
    />
  );
}
