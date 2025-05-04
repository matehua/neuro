# SafeImage Component

The `SafeImage` component is an enhanced image component that provides fallback handling, loading states, and accessibility improvements.

## Overview

The SafeImage component addresses common issues with images in web applications:

- Handling broken or missing images
- Managing loading states
- Ensuring proper accessibility attributes
- Providing consistent styling

## File Location

`src/components/SafeImage.tsx`

## Props Interface

```tsx
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The source URL of the image */
  src: string;
  /** Alternative text for the image (required for accessibility) */
  alt: string;
  /** Fallback image to display if the primary image fails to load */
  fallbackSrc?: string;
  /** Additional CSS classes */
  className?: string;
  /** Width of the image */
  width?: number | string;
  /** Height of the image */
  height?: number | string;
  /** Whether to show a loading indicator */
  showLoading?: boolean;
  /** Function called when the image successfully loads */
  onLoad?: () => void;
  /** Function called when the image fails to load */
  onError?: () => void;
}
```

## Usage

### Basic Usage

```tsx
import SafeImage from "@/components/SafeImage";

<SafeImage
  src="/path/to/image.jpg"
  alt="Description of the image"
  className="rounded-lg"
/>
```

### With Fallback Image

```tsx
<SafeImage
  src="/path/to/image.jpg"
  alt="Description of the image"
  fallbackSrc="/path/to/fallback.jpg"
  className="w-full h-64 object-cover"
/>
```

### With Loading State

```tsx
<SafeImage
  src="/path/to/image.jpg"
  alt="Description of the image"
  showLoading={true}
  className="w-full h-64 object-cover"
/>
```

### With Event Handlers

```tsx
<SafeImage
  src="/path/to/image.jpg"
  alt="Description of the image"
  onLoad={() => console.log("Image loaded")}
  onError={() => console.log("Image failed to load")}
/>
```

## Implementation Details

The SafeImage component uses React's `useState` and `useEffect` hooks to manage the image loading state and handle errors:

```tsx
export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  className = "",
  width,
  height,
  showLoading = false,
  onLoad,
  onError,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    if (onError) onError();
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && showLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...props}
      />
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 text-muted-foreground text-sm">
          Image not available
        </div>
      )}
    </div>
  );
}
```

## Accessibility Considerations

The SafeImage component enhances accessibility by:

1. **Requiring alt text**: The `alt` prop is required, ensuring that all images have alternative text for screen readers.

2. **Indicating loading state**: When `showLoading` is true, a loading indicator is displayed, providing visual feedback to users.

3. **Handling errors gracefully**: If an image fails to load and no fallback is provided, a message is displayed to inform users.

4. **Smooth transitions**: The component uses CSS transitions to smoothly fade in images when they load.

## Best Practices

When using the SafeImage component:

1. **Always provide meaningful alt text**: Describe the content and function of the image. If the image is decorative, use an empty string (`alt=""`).

2. **Use appropriate fallback images**: Fallback images should be similar in content or purpose to the primary image.

3. **Specify dimensions**: When possible, specify the `width` and `height` to prevent layout shifts during loading.

4. **Consider loading indicators**: Use `showLoading={true}` for large images or in situations where loading might take time.

5. **Handle errors appropriately**: Implement `onError` handlers for critical images to log errors or take alternative actions.

## Examples

### Profile Image with Fallback

```tsx
<SafeImage
  src={user.profileImage}
  alt={`Profile picture of ${user.name}`}
  fallbackSrc="/images/default-avatar.jpg"
  className="w-12 h-12 rounded-full object-cover"
/>
```

### Hero Image with Loading State

```tsx
<SafeImage
  src="/images/hero-banner.jpg"
  alt="Doctor consulting with a patient"
  fallbackSrc="/images/default-hero.jpg"
  showLoading={true}
  className="w-full h-96 object-cover"
/>
```

### Decorative Image

```tsx
<SafeImage
  src="/images/decorative-pattern.jpg"
  alt=""
  className="absolute -z-10 opacity-10"
  aria-hidden="true"
/>
```

## Related Components

- [Image Gallery](./image-gallery.md): A component for displaying multiple images in a gallery format
- [Avatar](./avatar.md): A component for displaying user avatars
