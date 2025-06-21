import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';


const LangwarrinLocation: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Basic fallback structure
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    home: { welcome: { learnMore: "Learn More" }, featuredProcedures: { title: "Featured Procedures" } },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-6">{finalT.locations?.langwarrinLocation?.expertNeurosurgery || 'Expert Neurosurgery and Spine Care'}</h1>
                <h2 className="text-xl text-primary mb-4">{finalT.locations?.langwarrinLocation?.peninsulaConsultingSuites || 'PENINSULA CONSULTING SUITES'}</h2>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.subtitle || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, neurosurgeon and spine surgeon, offers consultations at Peninsula Consulting Suites in Langwarrin, providing convenient access to specialized care for patients in the southeastern suburbs of Melbourne.'}
                </p>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.expertise || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout the Langwarrin and surrounding areas, eliminating the need to travel to Melbourne for specialized care.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/langwarrin-consulting-peninsula-rheumatology-entrance-neurosurgery.jpg"
                    alt="Peninsula Consulting Suites Entrance"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">{'Location Details'}</h2>
                  <p className="text-muted-foreground">
                    {finalT.locations?.langwarrinLocation?.locationDetails || 'Everything you need to know about our Langwarrin consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Peninsula Consulting Suites<br />
                      Suite 3, 35-37 Cranbourne-Frankston Road<br />
                      LANGWARRIN VIC 3910
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 9008 4200
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 9923 6688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Tuesday and Thursday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Consultations are by appointment only. Please call our office to schedule an appointment.
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">{'Note'}:</span> {finalT.locations?.langwarrinLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {finalT.locations?.langwarrinLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {finalT.locations?.langwarrinLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.5!2d145.1823!3d-38.1562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d7e8935c0f%3A0x5045675218ccd90!2s35-37%20Cranbourne-Frankston%20Rd%2C%20Langwarrin%20VIC%203910!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Langwarrin Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.gettingHere || 'Getting Here'}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2">{finalT.locations?.langwarrinLocation?.byPublicTransport || 'By Public Transport'}</h4>
                      <p className="text-muted-foreground">
                        {finalT.locations?.langwarrinLocation?.byPublicTransportDetails || 'Peninsula Consulting Suites is accessible via bus services that stop nearby. Several bus routes connect the clinic to Frankston train station and surrounding suburbs.'}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2">{finalT.locations?.langwarrinLocation?.byCar || 'By Car'}</h4>
                      <p className="text-muted-foreground">
                        {finalT.locations?.langwarrinLocation?.byCarDetails || 'Free on-site parking is available for patients at Peninsula Consulting Suites. The clinic is easily accessible from Cranbourne-Frankston Road, with convenient access from the Mornington Peninsula Freeway and Peninsula Link.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Facility Images Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{finalT.locations?.langwarrinLocation?.facilityImages?.title || 'Our Facility'}</h2>
              <p className="text-muted-foreground">
                {finalT.locations?.langwarrinLocation?.facilityImages?.subtitle || 'Take a look at our modern, comfortable consulting rooms at Peninsula Consulting Suites'}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/langwarrin-consulting-peninsula-rheumatology-reception-neurosurgery.jpg"
                  alt="Peninsula Consulting Suites Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/langwarrin-consulting-peninsula-rheumatology-waiting-area-neurosurgery.jpg"
                  alt="Peninsula Consulting Suites Waiting Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/langwarrin-consulting-peninsula-rheumatology-room-neurosurgery.jpg"
                  alt="Peninsula Consulting Suites Consulting Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Interventions Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{finalT.locations?.langwarrinLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {finalT.locations?.langwarrinLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {finalT.locations?.langwarrinLocation?.therapeuticInterventions?.description || 'Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, Dr Aliashkevich collaborates closely with other specialists in Langwarrin and surrounding areas to develop a tailored therapeutic plan designed to address your specific needs.'}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Amenities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{finalT.locations?.langwarrinLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {finalT.locations?.langwarrinLocation?.nearbyAmenities?.subtitle || 'Convenient local facilities for patients visiting our Langwarrin location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {finalT.locations?.langwarrinLocation?.nearbyAmenities?.description || 'Our Langwarrin consulting location at Peninsula Consulting Suites is surrounded by a variety of convenient amenities. Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while in the area, you\'ll find everything you need nearby.'}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {finalT.locations?.langwarrinLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Langwarrin Shopping Centre</span> - Located just 500m away, offering a variety of shops, supermarkets, and services.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Karingal Hub Shopping Centre</span> - A major shopping center approximately 5 minutes drive away with over 120 specialty stores.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Langwarrin Plaza</span> - A convenient shopping plaza with essential services and retail outlets.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {finalT.locations?.langwarrinLocation?.nearbyAmenities?.diningOptions?.title || 'Dining Options'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Café Langwarrin</span> - A popular local café offering great coffee and light meals, perfect for before or after your appointment.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Langwarrin Hotel</span> - A family-friendly pub with a bistro serving lunch and dinner.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Various Takeaway Options</span> - Several takeaway restaurants are located nearby, offering a range of cuisines.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  {finalT.locations?.langwarrinLocation?.nearbyAmenities?.pharmacies?.title || 'Pharmacies & Healthcare'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Langwarrin Pharmacy</span> - Located within walking distance, offering prescription services and healthcare products.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Langwarrin Medical Centre</span> - A comprehensive medical center with general practitioners and allied health services.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Pathology Services</span> - Several pathology collection centers are available nearby for any required tests.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {finalT.locations?.langwarrinLocation?.nearbyAmenities?.parks?.title || 'Parks & Recreation'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Lloyd Park</span> - A peaceful park with walking paths, perfect for a relaxing stroll before or after your appointment.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Langwarrin Flora and Fauna Reserve</span> - A beautiful nature reserve with walking trails and native wildlife.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Cruden Farm</span> - Historic gardens open to the public on select days, located nearby.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Consulting Locations Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{finalT.langwarrinLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {finalT.langwarrinLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {finalT.langwarrinLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Langwarrin location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/peninsula-private-hospital-entrance-consulting-ales-aliashkevich-neurosurgeon-spine.jpg"
                    alt="Peninsula Private Hospital"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.langwarrinLocation?.otherConsultingLocations?.frankston?.title || 'Frankston'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.langwarrinLocation?.otherConsultingLocations?.frankston?.description || 'Dr. Aliashkevich consults at Peninsula Private Hospital in Frankston, providing specialized neurosurgical care to patients in the Frankston area.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {finalT.langwarrinLocation?.otherConsultingLocations?.frankston?.address?.split('：')[1] || 'Peninsula Private Hospital, Mezzanine Consulting Suites, 525 McClelland Drive, Frankston VIC 3199'}<br />
                  <span className="font-medium">Phone:</span> {finalT.langwarrinLocation?.otherConsultingLocations?.frankston?.phone?.split('：')[1] || '03 9781 4133'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/frankston">{finalT.langwarrinLocation?.otherConsultingLocations?.frankston?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/neurosurgery-mornington-specialist-centre-entrance-consulting.jpg"
                    alt="Mornington Specialist Centre"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.langwarrinLocation?.otherConsultingLocations?.mornington?.title || 'Mornington'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.langwarrinLocation?.otherConsultingLocations?.mornington?.description || 'Dr. Aliashkevich consults at the Nepean Specialist Centre in Mornington, providing specialized neurosurgical care to patients on the Mornington Peninsula.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {finalT.langwarrinLocation?.otherConsultingLocations?.mornington?.address?.split('：')[1] || '1050 Nepean Highway, Mornington VIC 3931'}<br />
                  <span className="font-medium">Phone:</span> {finalT.langwarrinLocation?.otherConsultingLocations?.mornington?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/mornington">{finalT.langwarrinLocation?.otherConsultingLocations?.mornington?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/medical-consulting-room-rent-Surrey-Hills-miNEURO-entrance.jpg"
                    alt="Surrey Hills miNEURO Consulting Suites"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.langwarrinLocation?.otherConsultingLocations?.surreyHills?.title || 'Surrey Hills'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.langwarrinLocation?.otherConsultingLocations?.surreyHills?.description || 'The miNEURO Consulting Suites in Surrey Hills are Dr. Aliashkevich\'s main practice location. These modern facilities offer comprehensive neurosurgical consultations in a central, easily accessible location.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {finalT.langwarrinLocation?.otherConsultingLocations?.surreyHills?.address?.split('：')[1] || 'Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127'}<br />
                  <span className="font-medium">Phone:</span> {finalT.langwarrinLocation?.otherConsultingLocations?.surreyHills?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/surrey-hills">{finalT.langwarrinLocation?.otherConsultingLocations?.surreyHills?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{finalT.locations?.langwarrinLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {finalT.locations?.langwarrinLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich operates at these hospitals near Langwarrin'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {finalT.locations?.langwarrinLocation?.nearbyHospitals?.description || 'In addition to consultations at Peninsula Consulting Suites, Dr. Aliashkevich performs surgeries at several hospitals in the region. These facilities are equipped with state-of-the-art technology for neurosurgical and spinal procedures.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/peninsula-private-hospital-entrance-consulting-ales-aliashkevich-neurosurgeon-spine.jpg"
                    alt="Peninsula Private Hospital"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.nearbyHospitals?.peninsulaPrivateHospital?.title || 'Peninsula Private Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.nearbyHospitals?.peninsulaPrivateHospital?.description || 'Peninsula Private Hospital is a leading private healthcare facility on the Mornington Peninsula, offering a comprehensive range of surgical and medical services. Dr. Aliashkevich performs neurosurgical and spinal procedures at this hospital, which is equipped with advanced technology for complex surgeries.'}
                </p>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.nearbyHospitals?.peninsulaPrivateHospital?.address || '<span className="font-medium">Address:</span> 525 McClelland Drive, Frankston VIC 3199'}<br />
                  {finalT.locations?.langwarrinLocation?.nearbyHospitals?.peninsulaPrivateHospital?.phone || '<span className="font-medium">Phone:</span> (03) 9788 3333'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/mornington-yacht-club-peninsula-the-bays-cloudy-sky.jpg"
                    alt="The Bays Hospital"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.nearbyHospitals?.baysHospital?.title || 'The Bays Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.nearbyHospitals?.baysHospital?.description || 'The Bays Hospital in Mornington is a not-for-profit community hospital providing a wide range of medical and surgical services. Dr. Aliashkevich performs selected neurosurgical procedures at this facility, which offers personalized care in a community-focused environment.'}
                </p>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.nearbyHospitals?.baysHospital?.address || '<span className="font-medium">Address:</span> Vale Street, Mornington VIC 3931'}<br />
                  {finalT.locations?.langwarrinLocation?.nearbyHospitals?.baysHospital?.phone || '<span className="font-medium">Phone:</span> (03) 5975 2009'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance and Surgery Funding Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{finalT.locations?.langwarrinLocation?.insuranceAndFunding?.title || 'Insurances and Surgery Funding'}</h2>
              <p className="text-muted-foreground">
                {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.subtitle || 'TAC and WorkCover Welcome'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.insuranceAndFunding?.privateHealthInsurance?.title || 'Private Health Insurance'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.privateHealthInsurance?.description1 || 'Patients must have valid private health/hospital insurance with no waiting periods. Extras are not applicable for inpatient hospital treatment. The health funds don\'t contribute to consultation and outpatient treatment fees.'}
                </p>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.privateHealthInsurance?.description2 || 'Please note that so-called basic and bronze covers may not cover spinal surgery or neurosurgery in private hospitals. Cervical and lumbar artificial disc replacement (arthroplasty) falls into the Joint Replacement Category, which is usually included in Silver and Gold policies. Patients need to check their policy for coverage levels, exclusions, and inclusions.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.insuranceAndFunding?.tacAndWorkCover?.title || 'TAC and WorkCover'}</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>TAC:</strong> {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.tacAndWorkCover?.tac || 'Claim details and consultation approval from TAC. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>WorkCover:</strong> {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.tacAndWorkCover?.workCover || 'Claim details and consultation approval from the WorkSafe insurer. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.'}
                </p>
                <p className="text-muted-foreground">
                  <strong>Veteran Affairs/Military:</strong> {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.tacAndWorkCover?.veteranAffairs || 'Both "Gold Card" and "White Card" patients are eligible. For "White Card" holders, a condition must be covered by DVA.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.insuranceAndFunding?.uninsuredPatients?.title || 'Uninsured Patients'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.uninsuredPatients?.description1 || 'Self-funded patients can be provided with a quote for all surgical, anaesthetic and hospital costs. For example, the minimum amount required for a single-segment spinal surgery not requiring any implants in a private hospital in Victoria can be around $15,000 – $20,000.'}
                </p>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.uninsuredPatients?.description2 || 'This amount may include hospital and operating theatre fees, surgeon, assistant, anaesthetist, specialised care from a perioperative physician, and HDU or ICU care. Dr Aliashkevich has no affiliation with a public hospital, so unless a patient is willing to pay for surgery in a private hospital, he cannot undertake surgery on someone without appropriate insurance. For all other uninsured referrals, please get in touch with the closest public hospital directly.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.locations?.langwarrinLocation?.insuranceAndFunding?.patientsPrivacy?.title || 'Patients\' Privacy'}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient\'s privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients\' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.patientsPrivacy?.description2 || 'Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners. Dr Aliashkevich will never release any information to insurers or other parties without consent.'}
                </p>
                <p className="text-muted-foreground">
                  {finalT.locations?.langwarrinLocation?.insuranceAndFunding?.patientsPrivacy?.description3 || 'At the end of every patient\'s visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{finalT.locations?.langwarrinLocation?.readyToSchedule?.title || 'Ready to Schedule an Appointment?'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {finalT.locations?.langwarrinLocation?.readyToSchedule?.description || 'Don\'t wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with Dr Ales Aliashkevich at Peninsula Consulting Suites in Langwarrin and take the first step toward improved health and well-being. We\'re here to support you every step of the way to recovery.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{finalT.locations?.langwarrinLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{finalT.locations?.langwarrinLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{finalT.locations?.langwarrinLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

LangwarrinLocation.displayName = 'LangwarrinLocation';

export default LangwarrinLocation;
