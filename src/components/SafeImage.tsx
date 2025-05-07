import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
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
  isDecorative = false,
  className = "",
  loading = 'lazy',
  decoding = 'async',
  role,
  ...props
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
      aria-hidden={isDecorative}
      {...props}
    />
  );
};

export default SafeImage;
