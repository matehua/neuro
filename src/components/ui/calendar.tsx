import React, { useMemo, ComponentProps } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';


export type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps): React.ReactElement {
  const deviceInfo = useDeviceDetection();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        deviceInfo.isMobile ? "p-mobile-md" : "p-3",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        captionLabel: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        navButton: cn(
          buttonVariants({ variant: "outline" }),
          deviceInfo.isMobile
            ? "h-9 w-9 bg-transparent p-0 opacity-50 touch-target"
            : "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        headRow: "flex",
        headCell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          deviceInfo.isMobile
            ? "h-10 w-10 p-0 font-normal aria-selected:opacity-100 touch-target"
            : "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        daySelected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        dayToday: "bg-accent text-accent-foreground",
        dayOutside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        dayDisabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        dayHidden: "invisible",
        ...classNames,
      }}
      components={useMemo(() => ({
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }), [])}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };