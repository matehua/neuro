
import React, { useState, useEffect, useRef } from "react";
import { Check, CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";

export default function AppointmentForm() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data before submission
    if (!startDate || !endDate) {
      // In a real app, you would show an error message to the user
      return;
    }

    // In a real app, this would send the booking data to a server
    // with proper input sanitization and validation
    setSubmitted(true);

    // Reset form after 3 seconds
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a new timer
    timerRef.current = window.setTimeout(() => {
      setSubmitted(false);
      timerRef.current = null;
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "glass-card animate-fade-in [animation-delay:200ms]",
        deviceInfo.isMobile
          ? "p-mobile-lg space-y-mobile-lg"
          : "p-6 space-y-6"
      )}
    >
      <h3 className={cn(
        "font-bold text-center mb-mobile-lg",
        deviceInfo.isMobile
          ? "mobile-2xl"
          : "text-2xl mb-6"
      )}>
        {t.appointmentForm.title}
      </h3>

      <div className={cn(
        deviceInfo.isMobile ? "space-y-mobile-md" : "space-y-4"
      )}>
        <div className={cn(
          deviceInfo.isMobile
            ? "grid grid-cols-1 gap-mobile-md"
            : "grid grid-cols-1 md:grid-cols-2 gap-4"
        )}>
          {/* Appointment Date */}
          <div className={cn(
            deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
          )}>
            <label
              htmlFor="appointment-date"
              className={cn(
                "block font-medium",
                deviceInfo.isMobile ? "mobile-text" : "text-sm"
              )}
            >
              {t.appointmentForm.appointmentDate}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="appointment-date"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal touch-target",
                    !startDate && "text-muted-foreground",
                    deviceInfo.isMobile && "mobile-input"
                  )}
                >
                  <CalendarIcon className={cn(
                    "mr-2",
                    deviceInfo.isMobile ? "h-5 w-5" : "h-4 w-4"
                  )} />
                  {startDate ? format(startDate, "PPP") : <span>{t.appointmentForm.selectDate}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className={cn(
                  "w-auto p-0",
                  deviceInfo.isMobile && "mobile-safe-area"
                )}
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Appointment Time */}
          <div className="space-y-2">
            <label htmlFor="appointment-time" className="block text-sm font-medium">
              {t.appointmentForm.appointmentTime}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="appointment-time"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>{t.appointmentForm.selectTime}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                  disabled={(date) => date < (startDate || new Date())}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Adult Patients */}
          <div className="space-y-2">
            <label htmlFor="adults" className="block text-sm font-medium">
              {t.appointmentForm.adults}
            </label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger id="adults" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? t.appointmentForm.adult : t.appointmentForm.adults}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Child Patients */}
          <div className="space-y-2">
            <label htmlFor="children" className="block text-sm font-medium">
              {t.appointmentForm.children}
            </label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger id="children" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? t.appointmentForm.child : t.appointmentForm.children}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full btn-primary relative">
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            {t.appointmentForm.appointmentConfirmed}
          </>
        ) : (
          <>
            <Users className="mr-2 h-4 w-4" />
            {t.appointmentForm.checkAvailability}
          </>
        )}
      </Button>
    </form>
  );
}
