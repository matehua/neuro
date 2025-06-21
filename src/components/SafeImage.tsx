import React, { useState, useEffect, useCallback } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The primary image source URL */
  src: string;
  /** Alt text for the image (required for accessibility) */
  alt: string;
  /** Fallback image source to use if the primary source fails to load */
  fallbackSrc?: string;
  /** Whether the image is purely decorative (affects accessibility attributes) */
  isDecorative?: boolean;

  /** Optional callback function that runs when the image fails to load */
  onImageError?: () => void;
}

  /**
 * SafeImage component with enhanced accessibility features and error handling
 *
 * This component gracefully handles image loading errors by displaying a fallback image
 * and provides proper accessibility attributes based on the image's purpose.
 *
 * @example
 * // Basic usage
 * <SafeImage src="/path/to/image.jpg" alt="Description of image" />
 *
 * @example
 * // With fallback and decorative flag
 * <SafeImage
 *   src="/path/to/image.jpg"
 *   fallbackSrc="/path/to/fallback.jpg"
 *   isDecorative={true}
 *   className="rounded-full h-10 w-10"
 * />
 */
const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = "/images/medical-consulting.jpg",
  isDecorative = false,
  className = "",
  loading = 'lazy',
  decoding = 'async',
  role,
  onImageError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  // Update image source if the src prop changes and no error has occurred
  useEffect(() => {
    if (src !== imgSrc && !hasError) {
      setImgSrc(src);
      setHasError(false); // Reset error state when src changes
    }
  }, [src, imgSrc, hasError]);

  // Handle image loading errors
  const handleError = useCallback(() => {
    if (!hasError) {
      // Set fallback image and error state
      setImgSrc(fallbackSrc);
      setHasError(true);

      // Call optional error callback if provided
      if (onImageError) {
        onImageError();
      }
    }
  }, [fallbackSrc, hasError, onImageError]);

  // Determine appropriate role and alt text based on whether the image is decorative
  const imgRole = isDecorative ? 'presentation' : (role || undefined);
  const imgAlt = isDecorative ? '' : alt;

  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className={className}
      onError={handleError}
      loading={loading}
      decoding={decoding}
      role={imgRole}
      aria-hidden={isDecorative}
      {...props}
    />
  );
};

SafeImage.displayName = 'SafeImage';

export default SafeImage;
