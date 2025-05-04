import React from 'react';
import { getSkipLinkProps } from '@/lib/accessibility';

/**
 * SkipLink component allows keyboard users to skip to the main content
 * This is especially helpful for screen reader users and keyboard-only users
 */
const SkipLink: React.FC = () => {
  const skipLinkProps = getSkipLinkProps();
  
  return (
    <a {...skipLinkProps} />
  );
};

export default SkipLink;
