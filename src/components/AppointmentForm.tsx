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
  const [appointmentDate, setAppointmentDate] = useState<Date>();
  const [appointmentTime, setAppointmentTime] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<number | null>(null);

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
    if (!appointmentDate || !appointmentTime) {
      // Show error message to the user in a real app
      return;
    }
    setSubmitted(true);
    if (timerRef.current) clearTimeout(timerRef.current);
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
                    !appointmentDate && "text-muted-foreground",
                    deviceInfo.isMobile && "mobile-input"
                  )}
                >
                  <CalendarIcon className={cn(
                    "mr-2",
                    deviceInfo.isMobile ? "h-5 w-5" : "h-4 w-4"
                  )} />
                  {appointmentDate ? format(appointmentDate, "PPP") : <span>{t.appointmentForm.selectDate}</span>}
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
                  selected={appointmentDate}
                  onSelect={setAppointmentDate}
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
                    !appointmentTime && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {appointmentTime ? format(appointmentTime, "PPP") : <span>{t.appointmentForm.selectTime}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={appointmentTime}
                  onSelect={setAppointmentTime}
                  initialFocus
                  disabled={(date) => date < (appointmentDate || new Date())}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* Number of Patients */}
        <div className="space-y-2">
          <label htmlFor="patients" className="block text-sm font-medium">
            {t.appointmentForm.numberOfPatients ?? "Number of Patients"}
          </label>
          <Select defaultValue="1">
            <SelectTrigger id="patients" className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Patient" : "Patients"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
