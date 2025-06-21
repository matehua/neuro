import React from 'react';

import { cn } from '@/lib/utils';
import { generateId } from '@/lib/accessibility';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Error message to display and announce to screen readers */
  error?: string;
  /** Description for the input field */
  description?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, description, id, ...props }, ref) => {
    // Generate unique IDs for accessibility
    const inputId = id || generateId('input');
    const errorId = error ? `${inputId}-error` : undefined;
    const descriptionId = description ? `${inputId}-description` : undefined;

    // Combine description and error IDs for aria-describedby
    const ariaDescribedBy = [
      descriptionId,
      errorId,
      props['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;

    return (
      <div className="w-full">
        <input
          id={inputId}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mobile:min-h-[44px] mobile:text-base touch-manipulation",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={ariaDescribedBy}
          {...props}
        />

        {description && (
          <div
            id={descriptionId}
            className="text-sm text-muted-foreground mt-1"
          >
            {description}
          </div>
        )}

        {error && (
          <div
            id={errorId}
            className="text-sm text-destructive mt-1"
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
