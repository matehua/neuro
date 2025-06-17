import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className: any, ...props }: any, ref: any) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const deviceInfo = useDeviceDetection();

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180",
          deviceInfo.isMobile
            ? "py-mobile-md touch-target"
            : "py-4 hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className={cn(
          "shrink-0 transition-transform duration-200",
          deviceInfo.isMobile ? "h-5 w-5" : "h-4 w-4"
        )} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const deviceInfo = useDeviceDetection();

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        deviceInfo.isMobile ? "text-mobile-sm" : "text-sm"
      )}
      {...props}
    >
      <div className={cn(
        "pt-0",
        deviceInfo.isMobile ? "pb-mobile-md" : "pb-4",
        className
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
})

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
