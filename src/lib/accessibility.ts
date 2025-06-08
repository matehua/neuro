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
 * Announces a message to screen readers using an aria-live region
 * @param message The message to announce
 * @param priority The priority of the announcement ('polite' or 'assertive')
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  // Only proceed if we're in a browser environment and message is not empty
  if (typeof document === 'undefined' || !message) return;

  // Find or create the announcement element
  let announcer = document.getElementById('screen-reader-announcer');

  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'screen-reader-announcer';
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.setAttribute('role', 'status');
    announcer.classList.add('sr-only');
    announcer.style.position = 'absolute';
    announcer.style.width = '1px';
    announcer.style.height = '1px';
    announcer.style.padding = '0';
    announcer.style.margin = '-1px';
    announcer.style.overflow = 'hidden';
    announcer.style.clip = 'rect(0, 0, 0, 0)';
    announcer.style.whiteSpace = 'nowrap';
    announcer.style.border = '0';
    document.body.appendChild(announcer);
  }

  // Set the priority
  announcer.setAttribute('aria-live', priority);

  // Clear the announcer and then set the new message
  announcer.textContent = '';

  // Use setTimeout to ensure the DOM update happens
  setTimeout(() => {
    if (announcer && message) {
      announcer.textContent = message;
    }
  }, 50);
}

/**
 * Keyboard event handler for interactive elements that should respond to Enter and Space
 * @param callback The function to call when the key is pressed
 * @returns A keyboard event handler function
 */
export function handleKeyboardActivation(callback: () => void) {
  return (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      callback();
    }
  };
}

/**
 * Focus trap for modal dialogs and other components that need to trap focus
 * @param containerRef Reference to the container element
 * @param isActive Whether the focus trap is active
 * @returns A keyboard event handler function for the container
 */
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>, isActive: boolean) {
  return (event: React.KeyboardEvent) => {
    if (!isActive || !containerRef.current) return;

    if (event.key === 'Tab') {
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      // If shift+tab on first element, move to last element
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
      // If tab on last element, move to first element
      else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(): void {
  // Add skip link if not present
  if (typeof document !== 'undefined' && !document.querySelector('.skip-link')) {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Add focus-visible polyfill behavior
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }
}
