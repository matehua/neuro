import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = "/images/medical-consulting.jpg",
  className = ""
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Add cache-busting parameter
  const cacheBustedSrc = `${imgSrc}${imgSrc.includes('?') ? '&' : '?'}v=${Date.now()}`;

  const handleError = () => {
    if (!hasError) {
      // Silently handle the error without console logging
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={hasError ? imgSrc : cacheBustedSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default SafeImage;
