import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  role?: string;
  longDesc?: string;
  isDecorative?: boolean;
}

/**
 * SafeImage component with enhanced accessibility features
 * Handles image loading errors gracefully by displaying a fallback image
 */
const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = "/images/medical-consulting.jpg",
  className = "",
  loading = 'lazy',
  decoding = 'async',
  role,
  longDesc,
  isDecorative = false
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Silently handle the error without console logging
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

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
      longDesc={longDesc}
      aria-hidden={isDecorative}
    />
  );
};

export default SafeImage;
