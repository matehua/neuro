import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredTime: "",
    reason: "",
    medicalHistory: "",
    currentMedications: "",
    insuranceProvider: "",
    referringDoctor: "",
    urgency: "routine",
    consultationType: "new-patient"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Appointment request submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredTime: "",
        reason: "",
        medicalHistory: "",
        currentMedications: "",
        insuranceProvider: "",
        referringDoctor: "",
        urgency: "routine",
        consultationType: "new-patient"
      });
      setDate(undefined);
    } catch (error) {
      toast.error("Failed to submit appointment request");
    }
  };

  const { t } = useLanguage();

  return (
    <Layout pageTitle={t.appointments.title} pageType="appointments">
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-semibold mb-4">{t.appointments.title}</h1>
            <p className="text-muted-foreground mb-6">{t.appointments.description1}. {t.appointments.description2}.</p>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>{t.appointments.process.step1}</CardTitle>
                <CardDescription>{t.appointments.appointmentInfo.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t.appointments.appointmentInfo.firstName}</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder={t.appointments.appointmentInfo.firstName}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t.appointments.appointmentInfo.lastName}</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder={t.appointments.appointmentInfo.lastName}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">{t.appointments.appointmentInfo.email}</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.email}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.appointments.appointmentInfo.phone}</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.phone}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>{t.appointments.appointmentInfo.preferredDate}</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarDays className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>{t.appointmentForm.selectDate}</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="center" side="bottom">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">{t.appointments.appointmentInfo.preferredTime}</Label>
                      <Input
                        type="time"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        placeholder={t.appointmentForm.selectTime}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="consultationType">{t.appointments.appointmentInfo.consultationType}</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-patient">New Patient</SelectItem>
                        <SelectItem value="follow-up">Follow-up</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="urgency">{t.appointments.appointmentInfo.urgency}</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine">Routine</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="reason">{t.appointments.appointmentInfo.reason}</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.reason}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicalHistory">{t.appointments.appointmentInfo.medicalHistory}</Label>
                    <Textarea
                      id="medicalHistory"
                      name="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.medicalHistory}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentMedications">{t.appointments.appointmentInfo.currentMedications}</Label>
                    <Textarea
                      id="currentMedications"
                      name="currentMedications"
                      value={formData.currentMedications}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.currentMedications}
                    />
                  </div>
                  <div>
                    <Label htmlFor="insuranceProvider">{t.appointments.appointmentInfo.insuranceProvider}</Label>
                    <Input
                      type="text"
                      id="insuranceProvider"
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.insuranceProvider}
                    />
                  </div>
                  <div>
                    <Label htmlFor="referringDoctor">{t.appointments.appointmentInfo.referringDoctor}</Label>
                    <Input
                      type="text"
                      id="referringDoctor"
                      name="referringDoctor"
                      value={formData.referringDoctor}
                      onChange={handleInputChange}
                      placeholder={t.appointments.appointmentInfo.referringDoctor}
                    />
                  </div>
                  <Button type="submit">{t.appointments.requestForm.submit}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>{t.appointments.requestForm.title}</CardTitle>
                <CardDescription>
                  {t.appointments.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t.appointments.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
