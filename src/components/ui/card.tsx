import * as React from "react"

import { cn } from "@/lib/utils"
import { useDeviceDetection } from "@/hooks/use-mobile"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const deviceInfo = useDeviceDetection();

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        deviceInfo.isMobile
          ? "space-y-mobile-sm p-mobile-lg"
          : "space-y-1.5 p-6",
        className
      )}
      {...props}
    />
  );
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const deviceInfo = useDeviceDetection();

  return (
    <div
      ref={ref}
      className={cn(
        "pt-0",
        deviceInfo.isMobile ? "p-mobile-lg" : "p-6",
        className
      )}
      {...props}
    />
  );
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const deviceInfo = useDeviceDetection();

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center pt-0",
        deviceInfo.isMobile ? "p-mobile-lg" : "p-6",
        className
      )}
      {...props}
    />
  );
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
