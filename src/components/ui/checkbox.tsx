import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { generateId } from '@/lib/accessibility';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /** Label for the checkbox */
  label?: string;
  /** Error message to display and announce to screen readers */
  error?: string;
  /** Description for the checkbox */
  description?: string;
}
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, error, description, id, ...props }, ref) => {
  // Generate unique IDs for accessibility
  const checkboxId = id || generateId('checkbox');
  const errorId = error ? `${checkboxId}-error` : undefined;
  const descriptionId = description ? `${checkboxId}-description` : undefined;

  // Combine description and error IDs for aria-describedby
  const ariaDescribedBy = [
    descriptionId,
    errorId,
    props['aria-describedby']
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={ariaDescribedBy}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            <Check className="h-4 w-4" aria-hidden="true" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>

      {description && (
        <div
          id={descriptionId}
          className="text-sm text-muted-foreground pl-6"
        >
          {description}
        </div>
      )}

      {error && (
        <div
          id={errorId}
          className="text-sm text-destructive pl-6"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
