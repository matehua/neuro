
import React, { useEffect, useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, Users, CreditCard, Check, ChevronRight } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProcedureProps } from "@/components/ProcedureCard";

// Sample clinic data
interface ClinicData {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  recoveryTime: number;
  complexity: number;
  image: string;
  location: string;
  features: string[];
}

const proceduresData: ClinicData[] = [
  {
    id: "1",
    name: "Surrey Hills Clinic",
    description: "Our main clinic with comprehensive neurosurgical facilities and advanced diagnostic equipment.",
    price: 180,
    capacity: 2,
    size: 45,
    recoveryTime: 14,
    complexity: 7,
    image: "/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg",
    location: "Surrey Hills",
    features: ["Advanced Imaging", "Consultation Rooms", "Disabled Access", "Free Parking", "Reception", "Waiting Area"]
  },
  {
    id: "2",
    name: "Mornington Clinic",
    description: "Specialist neurosurgical clinic serving the Mornington Peninsula area with state-of-the-art facilities.",
    price: 250,
    capacity: 4,
    size: 75,
    recoveryTime: 14,
    complexity: 7,
    image: "/images/neurosurgery-mornington-specialist-centre-reception-consulting.jpg",
    location: "Mornington",
    features: ["Advanced Imaging", "Consultation Rooms", "Disabled Access", "Free Parking", "Reception", "Waiting Area"]
  },
  {
    id: "3",
    name: "Moonee Ponds Clinic",
    description: "Modern neurosurgical clinic in Melbourne's northern suburbs with comprehensive facilities.",
    price: 150,
    capacity: 2,
    size: 35,
    recoveryTime: 14,
    complexity: 7,
    image: "/images/moonee-ponds-specialist-centre-waiting-area.jpg",
    location: "Moonee Ponds",
    features: ["Advanced Imaging", "Consultation Rooms", "Disabled Access", "Free Parking", "Reception"]
  },
];

export default function AppointmentBooking() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 7));
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureProps | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "credit-card",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    specialRequests: ""
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Calculate sessions and total price
  const sessionsCount = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const totalPrice = selectedProcedure ? selectedProcedure.price * sessionsCount : 0;

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit booking
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would send the booking data to a server

    // Show confirmation
    setIsBookingConfirmed(true);

    // Reset form after booking is confirmed
    setTimeout(() => {
      setCurrentStep(1);
      setSelectedProcedure(null);
      setStartDate(new Date());
      setEndDate(addDays(new Date(), 7));
      setAdults("2");
      setChildren("0");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        country: "",
        paymentMethod: "credit-card",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        specialRequests: ""
      });
      setIsBookingConfirmed(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Book Your Consultation
              </h1>
              <p className="text-muted-foreground text-lg">
                Complete your appointment booking in a few simple steps.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>

        {/* Booking Steps */}
        <section className="container py-8">
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center relative z-10">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors",
                      currentStep >= step
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {currentStep > step ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{step}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      currentStep >= step
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {step === 1 ? "Choose Clinic" : step === 2 ? "Patient Details" : "Confirmation"}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted z-0">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Choose Room */}
          {currentStep === 1 && (
            <div className="animate-fade-in [animation-delay:300ms]">
              <div className="max-w-4xl mx-auto">
                {/* Date and Guests Selection */}
                <div className="glass-card p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Select Appointment Date and Time</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Check-in Date */}
                    <div className="space-y-2">
                      <label htmlFor="check-in" className="block text-sm font-medium">
                        Appointment Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-in"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !startDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? format(startDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
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

                    {/* Check-out Date */}
                    <div className="space-y-2">
                      <label htmlFor="check-out" className="block text-sm font-medium">
                        Appointment Time
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-out"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !endDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? format(endDate, "PPP") : <span>Select date</span>}
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

                    {/* Adults */}
                    <div className="space-y-2">
                      <label htmlFor="adults" className="block text-sm font-medium">
                        Adults
                      </label>
                      <Select value={adults} onValueChange={setAdults}>
                        <SelectTrigger id="adults" className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Children */}
                    <div className="space-y-2">
                      <label htmlFor="children" className="block text-sm font-medium">
                        Children
                      </label>
                      <Select value={children} onValueChange={setChildren}>
                        <SelectTrigger id="children" className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Child" : "Children"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Procedures Selection */}
                <h2 className="text-xl font-semibold mb-4">Select Your Clinic Location</h2>
                <div className="space-y-6">
                  {proceduresData.map((procedure) => (
                    <div
                      key={procedure.id}
                      className={cn(
                        "border rounded-xl overflow-hidden transition-all flex flex-col md:flex-row",
                        selectedProcedure?.id === procedure.id
                          ? "border-primary shadow-md"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img
                          src={procedure.image}
                          alt={procedure.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{procedure.name}</h3>
                          <p className="text-muted-foreground mb-4">{procedure.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="text-sm bg-muted px-3 py-1 rounded-full">
                              {procedure.capacity} Patients
                            </div>
                            <div className="text-sm bg-muted px-3 py-1 rounded-full">
                              {procedure.location}
                            </div>
                            <div className="text-sm bg-muted px-3 py-1 rounded-full">
                              Advanced Facilities
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <span className="text-xl font-bold">${procedure.price}</span>
                            <span className="text-muted-foreground text-sm"> / consultation</span>
                          </div>
                          <Button
                            variant={selectedProcedure?.id === procedure.id ? "default" : "outline"}
                            className={selectedProcedure?.id === procedure.id ? "btn-primary" : ""}
                            onClick={() => setSelectedProcedure(procedure)}
                          >
                            {selectedProcedure?.id === procedure.id ? (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Selected
                              </>
                            ) : (
                              "Select"
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    className="btn-primary"
                    disabled={!selectedProcedure}
                    onClick={() => setCurrentStep(2)}
                  >
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Guest Details */}
          {currentStep === 2 && (
            <div className="animate-fade-in [animation-delay:300ms]">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Guest Information Form */}
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
                    <form className="space-y-6">
                      <div className="glass-card p-6 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zipCode">Zip Code</Label>
                            <Input
                              id="zipCode"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialRequests">Special Requests</Label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            className="w-full h-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                            placeholder="Any special medical needs or notes for your appointment"
                          />
                        </div>
                      </div>

                      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                      <div className="glass-card p-6 space-y-6">
                        <Tabs defaultValue="credit-card" onValueChange={(value) => handleSelectChange("paymentMethod", value)}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                            <TabsTrigger value="pay-at-clinic">Pay at Clinic</TabsTrigger>
                          </TabsList>
                          <TabsContent value="credit-card" className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardName">Name on Card</Label>
                              <Input
                                id="cardName"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="0000 0000 0000 0000"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="cardExpiry">Expiry Date</Label>
                                <Input
                                  id="cardExpiry"
                                  name="cardExpiry"
                                  value={formData.cardExpiry}
                                  onChange={handleInputChange}
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cardCvc">CVC</Label>
                                <Input
                                  id="cardCvc"
                                  name="cardCvc"
                                  value={formData.cardCvc}
                                  onChange={handleInputChange}
                                  placeholder="123"
                                />
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="pay-at-clinic" className="mt-4">
                            <p className="text-muted-foreground">
                              You will be required to provide a valid credit card upon arrival for security purposes,
                              but payment will be collected during your visit to the clinic.
                            </p>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </form>
                  </div>

                  {/* Booking Summary */}
                  <div className="md:col-span-1">
                    <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                    <div className="glass-card p-6 sticky top-24">
                      {selectedProcedure && (
                        <>
                          <div className="pb-4 border-b">
                            <h3 className="font-medium mb-1">{selectedProcedure.name}</h3>
                            <p className="text-sm text-muted-foreground">{selectedProcedure.location}</p>
                          </div>

                          <div className="py-4 border-b space-y-2">
                            <div className="flex justify-between items-center">
                              <span>Appointment Date</span>
                              <span className="font-medium">
                                {startDate ? format(startDate, "EEE, MMM d, yyyy") : "Not selected"}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Appointment Time</span>
                              <span className="font-medium">
                                {endDate ? format(endDate, "EEE, MMM d, yyyy") : "Not selected"}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Patients</span>
                              <span className="font-medium">
                                {adults} {parseInt(adults) === 1 ? "Adult" : "Adults"}
                                {parseInt(children) > 0 && `, ${children} ${parseInt(children) === 1 ? "Child" : "Children"}`}
                              </span>
                            </div>
                          </div>

                          <div className="py-4 border-b space-y-2">
                            <div className="flex justify-between items-center">
                              <span>
                                ${selectedProcedure.price} x {sessionsCount} {sessionsCount === 1 ? "session" : "sessions"}
                              </span>
                              <span className="font-medium">${selectedProcedure.price * sessionsCount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Registration fee</span>
                              <span className="font-medium">$50</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Consultation fee</span>
                              <span className="font-medium">$30</span>
                            </div>
                          </div>

                          <div className="pt-4">
                            <div className="flex justify-between items-center font-bold">
                              <span>Total</span>
                              <span>${totalPrice + 50 + 30}</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="btn-primary"
                    onClick={() => setCurrentStep(3)}
                  >
                    Review & Confirm <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="animate-fade-in [animation-delay:300ms]">
              <div className="max-w-4xl mx-auto">
                {!isBookingConfirmed ? (
                  <>
                    <h2 className="text-xl font-semibold mb-6">Review Booking Details</h2>

                    <div className="glass-card p-6 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Procedure Details */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Clinic Details</h3>
                          {selectedProcedure && (
                            <div className="space-y-4">
                              <div className="rounded-lg overflow-hidden">
                                <img
                                  src={selectedProcedure.image}
                                  alt={selectedProcedure.name}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{selectedProcedure.name}</h4>
                                <p className="text-sm text-muted-foreground">{selectedProcedure.location}</p>
                              </div>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>Appointment Date:</span>
                                  <span className="font-medium">
                                    {startDate ? format(startDate, "EEE, MMM d, yyyy") : "Not selected"}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Appointment Time:</span>
                                  <span className="font-medium">
                                    {endDate ? format(endDate, "EEE, MMM d, yyyy") : "Not selected"}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Patients:</span>
                                  <span className="font-medium">
                                    {adults} {parseInt(adults) === 1 ? "Adult" : "Adults"}
                                    {parseInt(children) > 0 && `, ${children} ${parseInt(children) === 1 ? "Child" : "Children"}`}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Guest Details */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Patient Details</h3>
                          <div className="space-y-4">
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Name:</span>
                                <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Email:</span>
                                <span className="font-medium">{formData.email}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Phone:</span>
                                <span className="font-medium">{formData.phone}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Address:</span>
                                <span className="font-medium">{formData.address}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>City:</span>
                                <span className="font-medium">{formData.city}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Country:</span>
                                <span className="font-medium">{formData.country}</span>
                              </div>
                            </div>

                            {formData.specialRequests && (
                              <div>
                                <h4 className="font-medium mb-1">Medical Needs:</h4>
                                <p className="text-sm text-muted-foreground">{formData.specialRequests}</p>
                              </div>
                            )}

                            <div>
                              <h4 className="font-medium mb-1">Payment Method:</h4>
                              <p className="text-sm">
                                {formData.paymentMethod === "credit-card" ? (
                                  <span className="flex items-center">
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    Credit Card (ending in {formData.cardNumber.slice(-4) || "****"})
                                  </span>
                                ) : formData.paymentMethod === "pay-at-clinic" ? (
                                  "Pay at Clinic"
                                ) : (
                                  "Unknown payment method"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price Summary */}
                    <div className="glass-card p-6 mb-8">
                      <h3 className="text-lg font-medium mb-4">Price Summary</h3>
                      <div className="space-y-2">
                        {selectedProcedure && (
                          <>
                            <div className="flex justify-between items-center">
                              <span>
                                ${selectedProcedure.price} x {sessionsCount} {sessionsCount === 1 ? "session" : "sessions"}
                              </span>
                              <span className="font-medium">${selectedProcedure.price * sessionsCount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Registration fee</span>
                              <span className="font-medium">$50</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Consultation fee</span>
                              <span className="font-medium">$30</span>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t mt-4">
                              <span className="font-semibold">Total</span>
                              <span className="font-bold text-xl">${totalPrice + 50 + 30}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-8">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1 mr-3"
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the <a href="#" className="text-primary underline">Terms and Conditions</a> and <a href="#" className="text-primary underline">Privacy Policy</a>. I understand that my appointment is subject to the clinic's cancellation policy.
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                      >
                        Back
                      </Button>
                      <Button
                        className="btn-primary"
                        onClick={handleSubmitBooking}
                      >
                        Confirm Appointment <Check className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="glass-card p-8 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Appointment Confirmed!</h2>
                    <p className="text-muted-foreground mb-6">
                      Your appointment has been successfully confirmed. A confirmation email has been sent to {formData.email}.
                    </p>
                    <p className="font-medium mb-8">
                      Appointment Reference: <span className="text-primary">MRS-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
                    </p>
                    <Button asChild className="btn-primary">
                      <Link to="/">Return to Homepage</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
