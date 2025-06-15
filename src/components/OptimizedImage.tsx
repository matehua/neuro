import React from 'react';
import EnhancedImage from '@/components/EnhancedImage';
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
 * Optimized Image Component - now wraps EnhancedImage for consistency
 * @deprecated Use EnhancedImage directly for new components
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  quality,
  onLoad,
  onError
}) => {
  return (
    <EnhancedImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      sizes={sizes}
      quality={quality}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

/**
 * Hook for responsive image sizes
 */
export const useResponsiveImageSizes = (breakpoints: Record<string, number>) => {
  const generateSizes = React.useCallback(() => {
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
 * @deprecated Use MedicalImage from EnhancedImage instead
 */
export const MedicalImage: React.FC<OptimizedImageProps & {
  medicalType?: 'xray' | 'mri' | 'ct' | 'diagram' | 'photo';
}> = ({ medicalType = 'photo', ...props }) => {
  return (
    <OptimizedImage
      {...props}
      quality={medicalType === 'diagram' ? 90 : props.quality || 80}
      priority={medicalType === 'diagram' ? true : props.priority}
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
