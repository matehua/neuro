# Accessibility Guidelines

This document outlines the accessibility standards and practices implemented in the miNEURO website to ensure it's usable by people with various disabilities.

## Accessibility Standards

The miNEURO website aims to conform to the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) at the AA level. This includes:

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
- **Operable**: User interface components and navigation must be operable.
- **Understandable**: Information and the operation of the user interface must be understandable.
- **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.

## Key Accessibility Features

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Skip links allow users to bypass navigation
- Logical tab order follows the visual layout

### Screen Reader Support

- Semantic HTML is used for proper structure
- ARIA attributes are used where appropriate
- Dynamic content changes are announced to screen readers
- Images have appropriate alt text

### Color and Contrast

- Text has sufficient contrast against its background (WCAG AA standard)
- Information is not conveyed by color alone
- Focus indicators are visible in both light and dark modes

### Responsive Design

- Content is accessible at various screen sizes and zoom levels
- Text can be resized up to 200% without loss of content or functionality

## Implementation Details

### Skip Link

A skip link is provided at the beginning of each page to allow keyboard users to bypass navigation:

```tsx
// src/components/SkipLink.tsx
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Skip to main content
    </a>
  );
}
```

### Screen Reader Announcements

The `announceToScreenReader` utility function creates an ARIA live region to announce content changes:

```tsx
// src/lib/accessibility.ts
export function announceToScreenReader(
  message: string, 
  priority: 'polite' | 'assertive' = 'polite'
): void {
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
```

### Contrast Checking

The `meetsContrastStandards` utility function checks if color combinations meet WCAG AA standards:

```tsx
// src/lib/accessibility.ts
export function meetsContrastStandards(
  foreground: string, 
  background: string
): boolean {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= 4.5; // WCAG AA standard for normal text
}
```

## Component-Specific Guidelines

### Images

Use the `SafeImage` component which includes proper alt text handling:

```tsx
<SafeImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  fallbackSrc="/path/to/fallback.jpg"
/>
```

### Forms

Form elements should include:

- Proper labels associated with inputs
- Error messages linked to inputs
- Required field indicators
- Clear instructions

Example:

```tsx
<div>
  <label htmlFor="name" className="block text-sm font-medium">
    Name <span aria-hidden="true" className="text-destructive">*</span>
    <span className="sr-only">(required)</span>
  </label>
  <Input
    id="name"
    name="name"
    required
    aria-required="true"
    aria-invalid={errors.name ? "true" : "false"}
    aria-describedby={errors.name ? "name-error" : undefined}
  />
  {errors.name && (
    <p id="name-error" className="text-sm text-destructive mt-1">
      {errors.name.message}
    </p>
  )}
</div>
```

### Interactive Elements

Interactive elements should:

- Have visible focus states
- Include appropriate ARIA roles and states
- Support keyboard activation
- Have sufficient touch target size (at least 44x44 pixels)

## Testing Accessibility

### Automated Testing

Use automated tools to catch basic accessibility issues:

- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)

### Manual Testing

Perform manual testing to catch issues that automated tools might miss:

1. **Keyboard Navigation**: Test the site using only a keyboard
2. **Screen Reader Testing**: Test with screen readers like NVDA, JAWS, or VoiceOver
3. **Zoom Testing**: Test at different zoom levels (up to 200%)
4. **Reduced Motion**: Test with reduced motion preferences enabled
5. **High Contrast**: Test with high contrast mode enabled

## Resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)

## Reporting Accessibility Issues

If you encounter accessibility issues on the miNEURO website, please report them by:

1. Opening an issue in the GitHub repository
2. Including specific details about the issue (page URL, steps to reproduce, etc.)
3. Noting any assistive technology you were using
