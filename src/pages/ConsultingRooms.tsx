import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConsultingRooms() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    // For now, we'll just show an alert
    alert(t.consultingRooms?.form?.thankYou || "Thank you for your inquiry. We will contact you shortly.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
                {t.consultingRooms?.hero?.subtitle || "Professional Environment"}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.consultingRooms?.hero?.title || "Expand Your Medical Practice in Surrey Hills"}
              </h1>
              <p className="text-muted-foreground">
                {t.consultingRooms?.hero?.description || "Rent a fully-equipped medical consulting room in Surrey Hills at miNEURO Medical Consulting Suites. Perfect for healthcare professionals, our state-of-the-art space is located near major medical facilities and transport links."}
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="#inquiry-form">{t.consultingRooms?.hero?.scheduleViewing || "Schedule Viewing"}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.consultingRooms?.whyChoose?.title || "Why You Should Choose Our Suites"}</h2>
              <p className="text-muted-foreground">
                {t.consultingRooms?.whyChoose?.description || "At miNEURO Medical Consulting Rooms, we are committed to providing healthcare professionals with the resources and support tailored to meet the diverse needs of healthcare professionals."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.features?.convenientLocation?.title || "Convenient Location"}</h3>
                <p className="text-muted-foreground">
                  {t.consultingRooms?.features?.convenientLocation?.description || "Our facility is within a few minutes drive from the bustling Box Hill Medical Hub, Epworth Eastern Hospital, several GP clinics and busy shopping/business/transportation areas."}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.features?.fullyEquipped?.title || "Fully-Equipped Rooms"}</h3>
                <p className="text-muted-foreground">
                  {t.consultingRooms?.features?.fullyEquipped?.description || "Our consulting rooms are equipped with modern medical equipment, experienced reception staff, examination tables, ergonomic seating, computers, sinks, and high-speed internet access."}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.features?.flexibleTerms?.title || "Flexible Lease Terms"}</h3>
                <p className="text-muted-foreground">
                  {t.consultingRooms?.features?.flexibleTerms?.description || "We offer flexible lease terms, including sessional, short-term and long-term rental options, to accommodate your needs."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.consultingRooms?.facilities?.title || "Facilities"}</h2>

                <div className="space-y-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.facilities?.consultingRooms?.title || "Consulting Rooms"}</h3>
                    <p className="text-muted-foreground">
                      {t.consultingRooms?.facilities?.consultingRooms?.description || "Our consulting rooms are meticulously designed and equipped to support various medical specialties. Each room has modern medical equipment, including examination tables, sinks, ergonomic seating, and ample storage space."}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.facilities?.waitingArea?.title || "Comfortable Waiting Area"}</h3>
                    <p className="text-muted-foreground">
                      {t.consultingRooms?.facilities?.waitingArea?.description || "Our welcoming waiting area is designed to provide comfort and convenience for patients and their companions. Furnished with comfortable seating, reading materials, a fridge with refreshing drinks, a TV, a HiFi audio system and ambient lighting."}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.facilities?.technology?.title || "Technology Infrastructure"}</h3>
                    <p className="text-muted-foreground">
                      {t.consultingRooms?.facilities?.technology?.description || "High-speed internet access is available in every consulting room, allowing healthcare professionals to seamlessly access electronic medical records and research resources and communicate with colleagues."}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.consultingRooms?.location?.title || "Location"}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.consultingRooms?.location?.description || "Our consulting suites are strategically located at 619 Canterbury Road, Surrey Hills, offering a prime location for healthcare professionals seeking a convenient and accessible workspace."}
                    </p>
                    <p className="text-muted-foreground">
                      <strong>{t.consultingRooms?.contact?.address || "Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127"}</strong>
                    </p>
                  </div>
                </div>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-doctor-desk.jpg"
                    alt="Medical Consulting Room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Inquiry Form */}
              <div id="inquiry-form">
                <h2 className="text-2xl font-bold mb-6">{t.consultingRooms?.form?.title || "Consulting Room Inquiry"}</h2>
                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t.consultingRooms?.form?.firstName || "First Name"}</Label>
                        <Input id="firstName" placeholder={t.consultingRooms?.form?.firstName || "First Name"} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t.consultingRooms?.form?.lastName || "Last Name"}</Label>
                        <Input id="lastName" placeholder={t.consultingRooms?.form?.lastName || "Last Name"} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialty">{t.consultingRooms?.form?.specialty || "Medical Specialty"}</Label>
                      <Input id="specialty" placeholder={t.consultingRooms?.form?.specialty || "Medical Specialty"} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t.consultingRooms?.form?.email || "Email"}</Label>
                      <Input id="email" type="email" placeholder={t.consultingRooms?.form?.email || "Email"} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.consultingRooms?.form?.phone || "Phone"}</Label>
                      <Input id="phone" placeholder={t.consultingRooms?.form?.phone || "Phone"} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredLocation">{t.consultingRooms?.form?.preferredLocation || "Preferred Location"}</Label>
                      <select id="preferredLocation" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">{t.consultingRooms?.form?.selectLocation || "Select a location"}</option>
                        <option value="surrey-hills">{t.consultingRooms?.form?.locations?.surreyHills || "Surrey Hills"}</option>
                        <option value="mornington">{t.consultingRooms?.form?.locations?.mornington || "Mornington"}</option>
                        <option value="frankston">{t.consultingRooms?.form?.locations?.frankston || "Frankston"}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rentalFrequency">{t.consultingRooms?.form?.rentalFrequency || "Session Frequency"}</Label>
                      <select id="rentalFrequency" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">{t.consultingRooms?.form?.selectFrequency || "Select frequency"}</option>
                        <option value="weekly">{t.consultingRooms?.form?.frequencies?.weekly || "Weekly"}</option>
                        <option value="fortnightly">{t.consultingRooms?.form?.frequencies?.fortnightly || "Fortnightly"}</option>
                        <option value="monthly">{t.consultingRooms?.form?.frequencies?.monthly || "Monthly"}</option>
                        <option value="casual">{t.consultingRooms?.form?.frequencies?.casual || "Casual"}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDays">{t.consultingRooms?.form?.preferredDays || "Preferred Days"}</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                          <span>{t.consultingRooms?.form?.days?.monday || "Monday"}</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                          <span>{t.consultingRooms?.form?.days?.tuesday || "Tuesday"}</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                          <span>{t.consultingRooms?.form?.days?.wednesday || "Wednesday"}</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                          <span>{t.consultingRooms?.form?.days?.thursday || "Thursday"}</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                          <span>{t.consultingRooms?.form?.days?.friday || "Friday"}</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalRequirements">{t.consultingRooms?.form?.additionalRequirements || "Additional Requirements"}</Label>
                      <Textarea
                        id="additionalRequirements"
                        placeholder={t.consultingRooms?.form?.additionalRequirementsPlaceholder || "Please specify any additional requirements or questions you may have"}
                      />
                    </div>

                    <Button type="submit" className="w-full">{t.consultingRooms?.form?.submit || "Submit Inquiry"}</Button>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      {t.consultingRooms?.form?.confirmation || "We will contact you within 1-2 business days to discuss your requirements and availability."}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.consultingRooms?.gallery?.title || "Facility Gallery"}</h2>
              <p className="text-muted-foreground">
                {t.consultingRooms?.gallery?.description || "Our Surrey Hills medical consulting facility features modern, fully-equipped consulting rooms designed to provide a professional and comfortable environment for healthcare practitioners and their patients."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/medical-consulting-room-rent-Surrey-Hills-miNEURO-entrance.jpg"
                  alt="miNEURO Medical Consulting Entrance"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-reception.jpg"
                  alt="miNEURO Medical Consulting Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-waiting-area.jpg"
                  alt="miNEURO Medical Consulting Waiting Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-doctor-desk.jpg"
                  alt="miNEURO Medical Consulting Doctor's Desk"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-doctor-desk-sink.jpg"
                  alt="miNEURO Medical Consulting Examination Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/medical-consulting-room-rent-Surrey-Hills-miNEURO-kitchenette.jpg"
                  alt="miNEURO Medical Consulting Kitchenette"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t.consultingRooms?.cta?.title || "Have Questions?"}</h2>
              <p className="text-muted-foreground mb-8">
                {t.consultingRooms?.cta?.description || "If you have any questions about our consulting room options or would like to arrange a viewing, please don't hesitate to contact us."}
              </p>
              <Button asChild size="lg">
                <Link to="/contact">{t.consultingRooms?.cta?.contactUs || "Contact Us"}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
