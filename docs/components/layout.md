# Layout Component

The `Layout` component is a core structural component that provides a consistent layout wrapper for all pages in the miNEURO website.

## Overview

The Layout component handles:

- Consistent page structure with navigation and footer
- Accessibility features including skip links
- Page title management
- Screen reader announcements for page changes

## File Location

`src/components/Layout.tsx`

## Props Interface

```tsx
interface LayoutProps {
  children: React.ReactNode;
  /** Title for the current page, will be announced to screen readers */
  pageTitle?: string;
}
```

## Usage

```tsx
import Layout from "@/components/Layout";

export default function MyPage() {
  return (
    <Layout pageTitle="My Page Title">
      {/* Page content goes here */}
    </Layout>
  );
}
```

## Component Structure

The Layout component wraps the page content with:

1. A skip link for keyboard users to bypass navigation
2. The navigation bar (Navbar component)
3. The main content area with appropriate ARIA attributes
4. The footer (Footer component)

## Implementation Details

```tsx
export default function Layout({ children, pageTitle }: LayoutProps) {
  // Announce page title to screen readers when it changes
  useEffect(() => {
    if (pageTitle) {
      // Update document title
      document.title = `${pageTitle} | miNEURO`;

      // Announce page change to screen readers
      announceToScreenReader(`Navigated to ${pageTitle} page`);
    }
  }, [pageTitle]);

  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
        {pageTitle && (
          <h1 className="sr-only">{pageTitle}</h1>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

## Accessibility Features

The Layout component includes several accessibility enhancements:

1. **Skip Link**: Allows keyboard users to skip the navigation and go directly to the main content.

2. **Page Title Announcement**: Announces page changes to screen readers using the `announceToScreenReader` utility.

3. **Document Title**: Updates the document title to include the page title, which is important for screen readers and browser history.

4. **Invisible H1**: Adds an invisible (screen-reader-only) H1 element with the page title for proper document structure.

5. **Main Content Focus**: The main content area has a `tabIndex={-1}` attribute to allow it to receive focus when the skip link is used.

## Best Practices

When using the Layout component:

1. **Always provide a pageTitle**: This ensures proper document titles and screen reader announcements.

2. **Don't nest Layout components**: The Layout component should only be used once per page.

3. **Don't modify the page structure**: If you need a different layout, consider creating a new layout component that extends the base Layout.

## Related Components

- [Navbar](./navbar.md): The navigation bar component used within Layout
- [Footer](./footer.md): The footer component used within Layout
- [SkipLink](./skiplink.md): The skip navigation link component used within Layout
