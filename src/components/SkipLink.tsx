import React from 'react';

interface SkipLinkProps {
  /** The target ID to skip to (without the #) */
  targetId?: string;
  /** The text to display in the skip link */
  text?: string;
  /** Additional CSS classes to apply to the skip link */
  className?: string;
}

/**
 * SkipLink component allows keyboard users to skip to the main content
 * This is especially helpful for screen reader users and keyboard-only users
 *
 * The link is visually hidden by default but becomes visible when focused,
 * allowing keyboard users to skip navigation and go directly to main content.
 *
 * @example
 * // Basic usage with default values
 * <SkipLink />
 *
 * @example
 * // Custom target and text
 * <SkipLink targetId="content" text="Skip to content" />
 */
const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = "main-content",
  text = "Skip to main content",
  className = ""
}) => {
  return (
    <a
      href={`#${targetId}`}
      className={`skip-link ${className}`}
      data-testid="skip-link"
    >
      {text}
    </a>
  );
};

SkipLink.displayName = 'SkipLink';

export default SkipLink;
