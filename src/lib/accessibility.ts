/**
 * Accessibility utilities for improving the user experience
 */

/**
 * Creates a unique ID with an optional prefix
 * @param prefix Optional prefix for the ID
 * @returns A unique ID string
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Checks if a color contrast ratio meets WCAG AA standards
 * @param foreground Foreground color in hex format (e.g., "#ffffff")
 * @param background Background color in hex format (e.g., "#000000")
 * @returns Boolean indicating if the contrast ratio meets WCAG AA standards
 */
export function meetsContrastStandards(foreground: string, background: string): boolean {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= 4.5; // WCAG AA standard for normal text
}

/**
 * Calculates the contrast ratio between two colors
 * @param foreground Foreground color in hex format (e.g., "#ffffff")
 * @param background Background color in hex format (e.g., "#000000")
 * @returns The contrast ratio as a number
 */
export function getContrastRatio(foreground: string, background: string): number {
  const fgLuminance = getLuminance(foreground);
  const bgLuminance = getLuminance(background);
  
  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Calculates the relative luminance of a color
 * @param color Color in hex format (e.g., "#ffffff")
 * @returns The relative luminance as a number
 */
function getLuminance(color: string): number {
  // Remove # if present
  color = color.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(color.substring(0, 2), 16) / 255;
  const g = parseInt(color.substring(2, 4), 16) / 255;
  const b = parseInt(color.substring(4, 6), 16) / 255;
  
  // Calculate luminance
  const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

/**
 * Creates props for a skip link that allows keyboard users to skip to main content
 * @returns Props object for a skip link
 */
export function getSkipLinkProps() {
  return {
    href: '#main-content',
    className: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring',
    children: 'Skip to main content',
  };
}

/**
 * Announces a message to screen readers using an aria-live region
 * @param message The message to announce
 * @param priority The priority of the announcement ('polite' or 'assertive')
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  // Find or create the announcement element
  let announcer = document.getElementById('screen-reader-announcer');
  
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'screen-reader-announcer';
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.classList.add('sr-only');
    document.body.appendChild(announcer);
  }
  
  // Set the priority
  announcer.setAttribute('aria-live', priority);
  
  // Clear the announcer and then set the new message
  announcer.textContent = '';
  
  // Use setTimeout to ensure the DOM update happens
  setTimeout(() => {
    announcer.textContent = message;
  }, 50);
}

/**
 * Keyboard event handler for interactive elements that should respond to Enter and Space
 * @param callback The function to call when the key is pressed
 * @returns A keyboard event handler function
 */
export function handleKeyboardActivation(callback: () => void) {
  return (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };
}
