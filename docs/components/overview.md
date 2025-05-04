# Components Overview

This document provides an overview of the component system used in the miNEURO website project. The components are designed to be reusable, accessible, and consistent with the design system.

## Component Organization

Components are organized into several categories:

1. **UI Components**: Basic UI elements like buttons, inputs, and cards
2. **Layout Components**: Components that handle page structure
3. **Feature Components**: Components specific to certain features or sections
4. **Utility Components**: Components that provide utility functions

## UI Components

UI components are located in `src/components/ui/` and are based on the [shadcn/ui](https://ui.shadcn.com/) library, which is built on top of [Radix UI](https://www.radix-ui.com/). These components provide accessible, unstyled building blocks that are customized with Tailwind CSS.

Key UI components include:

- `Button`: Various button styles and variants
- `Input`: Text input fields
- `Select`: Dropdown selection components
- `Checkbox`: Checkbox components
- `Dialog`: Modal dialog components
- `Textarea`: Multiline text input

For detailed documentation on each UI component, see their respective files in the `src/components/ui/` directory.

## Layout Components

Layout components handle the overall structure of pages:

- `Layout`: Main layout wrapper that includes the Navbar, Footer, and main content area
- `Navbar`: Navigation bar with links and language selector
- `Footer`: Page footer with links and contact information
- `PageHeader`: Consistent header for pages
- `CTASection`: Call-to-action section used across multiple pages

### Layout Component

The `Layout` component (`src/components/Layout.tsx`) is the main wrapper for all pages. It provides:

- Consistent page structure
- Skip link for accessibility
- Screen reader announcements for page changes
- Document title management

```tsx
interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

<Layout pageTitle="Page Title">
  {/* Page content */}
</Layout>
```

## Feature Components

Feature components are specific to certain features or sections of the website:

- `SafeImage`: Enhanced image component with fallback handling
- `LanguageSelector`: Component for switching between languages
- `ThemeToggle`: Component for toggling between light and dark themes

### SafeImage Component

The `SafeImage` component (`src/components/SafeImage.tsx`) extends the standard `img` element with:

- Fallback image handling
- Loading state management
- Accessibility enhancements

```tsx
<SafeImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  fallbackSrc="/path/to/fallback.jpg"
  className="custom-class"
/>
```

## Utility Components

Utility components provide functionality rather than UI:

- `ScreenReaderAnnouncer`: Announces content to screen readers
- `SkipLink`: Provides a skip navigation link for keyboard users

### ScreenReaderAnnouncer Component

The `ScreenReaderAnnouncer` component (`src/components/ScreenReaderAnnouncer.tsx`) creates an ARIA live region to announce content to screen readers:

```tsx
<ScreenReaderAnnouncer message="Page has changed" />
```

## Component Best Practices

When creating or modifying components, follow these best practices:

1. **Accessibility**: Ensure components are accessible by using appropriate ARIA attributes, keyboard navigation, and color contrast.

2. **Reusability**: Design components to be reusable across multiple contexts.

3. **Props Interface**: Define a clear props interface for each component.

4. **Default Props**: Provide sensible default props where appropriate.

5. **Internationalization**: Ensure text content is wrapped in the translation function.

6. **Responsive Design**: Design components to work across different screen sizes.

7. **Performance**: Optimize components for performance, using memoization where appropriate.

## Adding New Components

To add a new component:

1. Create a new file in the appropriate directory (e.g., `src/components/` or `src/components/ui/`).

2. Define the component with a clear props interface:

```tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export default function MyComponent({ title, description, onClick }: MyComponentProps) {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {onClick && (
        <button onClick={onClick}>Click me</button>
      )}
    </div>
  );
}
```

3. Add JSDoc comments to document the component and its props.

4. Create a documentation file in `docs/components/` for the component.

5. Import and use the component in your pages or other components.

## Component Documentation

Each significant component should have its own documentation file in the `docs/components/` directory. The documentation should include:

- Component purpose and usage
- Props interface
- Examples
- Accessibility considerations
- Related components

For more detailed documentation on specific components, see the individual component documentation files in the `docs/components/` directory.
