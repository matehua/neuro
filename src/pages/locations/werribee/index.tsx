import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WerribeeLocation() {
  const { t } = useLanguage();

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
                <h1 className="text-3xl font-bold mb-6">{t.locations?.werribeeLocation?.expertNeurosurgery || 'Expert Neurosurgical Consultations in Werribee'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.locations?.werribeeLocation?.subtitle || 'Helping You Live Pain-Free'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.werribeeLocation?.introduction1 || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Werribee and Western Melbourne suburbs area since 2012. He offers consultations, procedures and operations at major Melbourne Hospitals, with expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.introduction2 || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout Melbourne\'s western region, eliminating the need to travel to central Melbourne for specialized care.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/werribee-consulting-rooms-neurosurgery-entrance.jpg"
                    alt="Werribee Consulting Rooms Entrance"
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
                  <h2 className="text-2xl font-bold mb-4">Location Details</h2>
                  <p className="text-muted-foreground">
                    {t.locations?.werribeeLocation?.locationDetails || 'Everything you need to know about our Werribee consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Consulting Rooms<br />
                      297 Princes Highway<br />
                      WERRIBEE VIC 3030
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 90084200
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Tuesday:</span> {t.locations?.werribeeLocation?.consultingHoursDetails || '9:00 AM - 5:00 PM (fortnightly)'}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.locations?.werribeeLocation?.consultationsByAppointment || 'Consultations are by appointment only. Please call our office to schedule an appointment.'}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Note:</span> {t.locations?.werribeeLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.locations?.werribeeLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.werribeeLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.7!2d144.6613!3d-37.8991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68953e7a7a4a9%3A0x4b8d5f5d5a1c5c5c!2s297%20Princes%20Hwy%2C%20Werribee%20VIC%203030!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Werribee Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.location || 'Location'}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.locations?.werribeeLocation?.locationDetails1 || 'The consulting rooms are conveniently situated at 297 Princes Hwy Werribee in walking distance from Hoppers Crossing Train Station. Other locations are available for urgent appointments, including Moonee Ponds, Sunbury and Heidelberg.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.diagnosticFacilities || 'Diagnostic Facilities'}</h3>
                    <p className="text-muted-foreground mb-4">
                      The neurosurgical and spinal diagnostic imaging services in Werribee include <a href="https://i-med.com.au/find-a-radiology-clinic/werribee-private-radiology" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">IMED</a>, Capital Radiology and <a href="https://www.lakeimaging.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging</a>. {t.locations?.werribeeLocation?.diagnosticFacilitiesDetails1 || 'All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient\'s convenience.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.werribeeLocation?.diagnosticFacilitiesDetails2 || 'Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.gettingHere || 'Getting Here'}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.locations?.werribeeLocation?.byPublicTransport || 'By Public Transport'}</h4>
                        <p className="text-muted-foreground">
                          {t.locations?.werribeeLocation?.byPublicTransportDetails || 'The consulting rooms are accessible via bus services that stop on Princes Highway. Several bus routes connect the location to Werribee train station and surrounding suburbs.'}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.locations?.werribeeLocation?.parkingAndDisabledAccess || 'Parking and Disabled Access'}</h4>
                        <p className="text-muted-foreground">
                          {t.locations?.werribeeLocation?.parkingAndDisabledAccessDetails || 'Werribee Consulting Rooms have plenty of onsite free parking available for patients. Disabled parking is available close to the main entrance. It features a no-barrier environment to guarantee full mobility for individuals with disabilities.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Interventions Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.werribeeLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.werribeeLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.werribeeLocation?.therapeuticInterventions?.description || 'Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established,'} <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> {t.locations?.werribeeLocation?.therapeuticInterventions?.description ? '' : 'collaborates closely with other specialists in Werribee and Melbourne to develop a tailored therapeutic plan designed to address your specific needs.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.werribeeLocation?.facilities?.title || 'Our Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.werribeeLocation?.facilities?.subtitle || 'Specialist care in a welcoming and comfortable environment'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.werribeeLocation?.facilities?.description || 'Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment and aim to deliver ethical and professional services to improve the quality of doctor-patient interactions.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.facilities?.consultingRooms?.title || 'Comfortable Consulting Rooms'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.facilities?.consultingRooms?.description || 'Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members. Hand sanitisers are available in all consulting and waiting spaces.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.facilities?.waitingSpace?.title || 'Convenient Waiting Space'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.facilities?.waitingSpace?.description || 'The waiting areas are designed and fitted out with the patient\'s experience in mind. They convey neatness and a warm and welcoming feeling to help patients feel comfortable and at ease. Wider seats allow for separation from strangers, room for personal belongings, child prams and adequate support. The seating and spacing elements allow for privacy and safety. Knowing how valuable is our patients\' time, we take care to keep the waiting period as short as possible and make the waiting area as convenient as possible.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.werribeeLocation?.facilities?.accessibleEnvironment?.title || 'Welcoming Environment'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.werribeeLocation?.facilities?.accessibleEnvironment?.description || 'Werribee Consulting Rooms provide all services accessible to individuals with disabilities. It features a no-barrier environment to guarantee full mobility. Our friendly staff can assist with all examinations that require special positioning. Hand sanitisers are available in all consulting and waiting spaces.'}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/werribee-consulting-rooms-neurosurgery-reception.jpg"
                  alt="Werribee Consulting Rooms Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/werribee-consulting-rooms-neurosurgery-waiting-area.jpg"
                  alt="Werribee Consulting Rooms Waiting Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/werribee-consulting-rooms-neurosurgery-entrance.jpg"
                  alt="Werribee Consulting Rooms Entrance"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Amenities Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.werribeeLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.werribeeLocation?.nearbyAmenities?.subtitle || 'Convenient local amenities for patients visiting our Werribee location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.werribeeLocation?.nearbyAmenities?.description ||
                  'Our Werribee consulting location is situated in a convenient area with a variety of amenities nearby. ' +
                  'Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you\'re in the area, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">The Corner Cafe</span> - {t.werribeeLocation?.nearbyAmenities?.cafesRestaurants?.cornerCafe?.split(' - ')[1] ||
                        'A popular cafe offering excellent coffee and a variety of breakfast and lunch options, located just a short walk from our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Cafe Derailleur</span> - {t.werribeeLocation?.nearbyAmenities?.cafesRestaurants?.cafeDerailleur?.split(' - ')[1] ||
                        'A charming cafe known for its quality coffee and fresh food options.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee CBD Restaurants</span> - {t.werribeeLocation?.nearbyAmenities?.cafesRestaurants?.werribeeCBDRestaurants?.split(' - ')[1] ||
                        'A variety of dining options in the Werribee central business district, from casual cafes to more upscale restaurants.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Park Hotel</span> - {t.werribeeLocation?.nearbyAmenities?.cafesRestaurants?.parkHotel?.split(' - ')[1] ||
                        'A local pub offering quality meals in a relaxed setting.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Pacific Werribee Shopping Centre</span> - {t.werribeeLocation?.nearbyAmenities?.shopping?.pacificWerribeeShoppingCentre?.split(' - ')[1] ||
                        'A major shopping center with a wide range of retail stores, supermarkets, and services, located within easy reach of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee Plaza</span> - {t.werribeeLocation?.nearbyAmenities?.shopping?.werribeePlaza?.split(' - ')[1] ||
                        'A shopping center offering various retail options and services.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee Pharmacy</span> - {t.werribeeLocation?.nearbyAmenities?.shopping?.werribeePharmacy?.split(' - ')[1] ||
                        'Conveniently located pharmacy for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Watton Street Shopping Precinct</span> - {t.werribeeLocation?.nearbyAmenities?.shopping?.wattonStreetShoppingPrecinct?.split(' - ')[1] ||
                        'A variety of specialty shops and services along Werribee\'s main shopping street.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee Park</span> - {t.werribeeLocation?.nearbyAmenities?.parksRecreation?.werribeePark?.split(' - ')[1] ||
                        'A beautiful park with walking paths, gardens, and open spaces, perfect for a relaxing stroll before or after your appointment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee River Trail</span> - {t.werribeeLocation?.nearbyAmenities?.parksRecreation?.werribeeRiverTrail?.split(' - ')[1] ||
                        'A scenic walking and cycling path along the Werribee River, offering a peaceful natural environment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Chirnside Park</span> - {t.werribeeLocation?.nearbyAmenities?.parksRecreation?.chirnsidePark?.split(' - ')[1] ||
                        'A recreational area with sports facilities and walking tracks.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee Open Range Zoo</span> - {t.werribeeLocation?.nearbyAmenities?.parksRecreation?.werribeeOpenRangeZoo?.split(' - ')[1] ||
                        'A unique zoo experience just a short drive away, perfect for a family outing.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee Library</span> - {t.werribeeLocation?.nearbyAmenities?.otherAmenities?.werribeeLibrary?.split(' - ')[1] ||
                        'A community library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.werribeeLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Several banking options within walking distance of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Werribee Post Office</span> - {t.werribeeLocation?.nearbyAmenities?.otherAmenities?.werribeePostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Wyndham Cultural Centre</span> - {t.werribeeLocation?.nearbyAmenities?.otherAmenities?.wyndhamCulturalCentre?.split(' - ')[1] ||
                        'A performing arts venue hosting various cultural events and performances.'}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Consulting Locations Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.werribeeLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.werribeeLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.werribeeLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Werribee location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/moonee-ponds-specialist-centre-entrance.jpg"
                    alt="Moonee Ponds Specialist Centre"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.otherConsultingLocations?.mooneePonds?.title || 'Moonee Ponds'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.werribeeLocation?.otherConsultingLocations?.mooneePonds?.description || 'Dr. Aliashkevich consults at the Moonee Ponds Specialist Centre, providing specialized neurosurgical care to patients in Melbourne\'s northwestern suburbs.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.werribeeLocation?.otherConsultingLocations?.mooneePonds?.address?.split('：')[1] || '827 Mt Alexander Road, Moonee Ponds VIC 3039'}<br />
                  <span className="font-medium">Phone:</span> {t.werribeeLocation?.otherConsultingLocations?.mooneePonds?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/moonee-ponds">{t.werribeeLocation?.otherConsultingLocations?.mooneePonds?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/heidelberg-consulting-rooms-neurosurgeon-spine-surgeon.jpg"
                    alt="Heidelberg Consulting Rooms"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.otherConsultingLocations?.heidelberg?.title || 'Heidelberg'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.werribeeLocation?.otherConsultingLocations?.heidelberg?.description || 'Warringal Private Hospital in Heidelberg provides convenient access to neurosurgical care for patients in Melbourne\'s northern suburbs. Dr. Aliashkevich consults here regularly.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.werribeeLocation?.otherConsultingLocations?.heidelberg?.address?.split('：')[1] || '216 Burgundy Street, Heidelberg VIC 3084'}<br />
                  <span className="font-medium">Phone:</span> {t.werribeeLocation?.otherConsultingLocations?.heidelberg?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/heidelberg">{t.werribeeLocation?.otherConsultingLocations?.heidelberg?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/sunbury-lake-imaging-consulting-neurosurgery.jpg"
                    alt="Sunbury Lake Imaging Consulting"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.otherConsultingLocations?.sunbury?.title || 'Sunbury'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.werribeeLocation?.otherConsultingLocations?.sunbury?.description || 'Dr. Aliashkevich consults at Lake Imaging in Sunbury, providing specialized neurosurgical care to patients in Melbourne\'s outer northwestern region.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.werribeeLocation?.otherConsultingLocations?.sunbury?.address?.split('：')[1] || '17 Horne Street, Sunbury VIC 3429'}<br />
                  <span className="font-medium">Phone:</span> {t.werribeeLocation?.otherConsultingLocations?.sunbury?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/sunbury">{t.werribeeLocation?.otherConsultingLocations?.sunbury?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.werribeeLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.werribeeLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich performs surgery at these hospitals'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.werribeeLocation?.nearbyHospitals?.description || 'Dr. Aliashkevich performs surgery at multiple hospitals across Melbourne, including the following facilities. These hospitals are equipped with state-of-the-art technology for neurosurgical and spine procedures.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/heidelberg-consulting-rooms-neurosurgeon-spine-surgeon.jpg"
                    alt="Warringal Private Hospital"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.hospitals?.warringalPrivate?.title || 'Warringal Private Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.hospitals?.warringalPrivate?.description || 'Warringal Private Hospital is a leading private hospital in Melbourne\'s northern suburbs, offering comprehensive medical and surgical services. Dr. Aliashkevich performs neurosurgical and spine procedures at this facility, which is equipped with advanced technology for complex surgeries.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.hospitals?.warringalPrivate?.address || 'Address: 216 Burgundy Street, Heidelberg VIC 3084'}<br />
                  {t.hospitals?.warringalPrivate?.phone || 'Phone: (03) 9274 1300'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.warringalprivatehospital.com.au/" target="_blank" rel="noopener noreferrer">{t.hospitals?.warringalPrivate?.visitWebsite || 'Visit Hospital Website'}</a>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/operating-theatre-spine-brain-image-guided-neurosurgeon-microsurgery-maximum-precision-robotic-spine-Epworth-Richmond.jpg"
                    alt="Epworth Richmond Hospital"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.hospitals?.epworthRichmond?.title || 'Epworth Richmond Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.hospitals?.epworthRichmond?.description || 'Epworth Richmond Hospital is one of Melbourne\'s largest private hospitals, offering comprehensive medical and surgical services. Dr. Aliashkevich performs neurosurgical and spine procedures at this facility, which is equipped with advanced technology for complex surgeries.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.hospitals?.epworthRichmond?.address || 'Address: 89 Bridge Road, Richmond VIC 3121'}<br />
                  {t.hospitals?.epworthRichmond?.phone || 'Phone: (03) 9426 6666'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.epworth.org.au/our-locations/epworth-richmond" target="_blank" rel="noopener noreferrer">{t.hospitals?.epworthRichmond?.visitWebsite || 'Visit Hospital Website'}</a>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/Epworth-Eastern-Hospital-Building.jpg"
                    alt="Epworth Eastern Hospital"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.hospitals?.epworthEastern?.title || 'Epworth Eastern Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.hospitals?.epworthEastern?.description || 'Epworth Eastern Hospital is a leading private hospital in Melbourne\'s eastern suburbs, offering comprehensive medical and surgical services. Dr. Aliashkevich performs neurosurgical and spine procedures at this facility, which is equipped with advanced technology for complex surgeries.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.hospitals?.epworthEastern?.address || 'Address: 1 Arnold Street, Box Hill VIC 3128'}<br />
                  {t.hospitals?.epworthEastern?.phone || 'Phone: (03) 8807 7100'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.epworth.org.au/our-locations/epworth-eastern" target="_blank" rel="noopener noreferrer">{t.hospitals?.epworthEastern?.visitWebsite || 'Visit Hospital Website'}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Patients' Privacy Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.werribeeLocation?.patientsPrivacy?.title || 'Patients\' Privacy'}</h2>
              <p className="text-muted-foreground">
                {t.werribeeLocation?.patientsPrivacy?.subtitle || 'Your privacy is our priority'}
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground mb-4">
                {t.werribeeLocation?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient\'s privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients\' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
              </p>
              <p className="text-muted-foreground mb-4">
                {t.werribeeLocation?.patientsPrivacy?.description2 || 'Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners.'} <a href="https://www.peninsulaph.com.au/Specialists/Specialists/peninsula-private-hospital/neurosurgery/105163/dr-ales-aliashkevich" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> {t.werribeeLocation?.patientsPrivacy?.description2 ? '' : 'will never release any information to insurers or other parties without consent.'}
              </p>
              <p className="text-muted-foreground">
                {t.werribeeLocation?.patientsPrivacy?.description3 || 'At the end of every patient\'s visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.werribeeLocation?.readyToSchedule?.title || 'Contact Us'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.werribeeLocation?.readyToSchedule?.description || 'Don\'t wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with Dr Ales Aliashkevich in Werribee and take the first step toward improved health and well-being. We\'re here to support you every step of the way to recovery.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.werribeeLocation?.address || 'Address'}</h3>
                  <p className="text-muted-foreground">
                    297 Princes Hwy<br />
                    Werribee VIC 3030
                  </p>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.email || 'Email'}</h3>
                  <p className="text-muted-foreground">
                    info@mineuro.com.au
                  </p>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.phone || 'Phone'}</h3>
                  <p className="text-muted-foreground">
                    03 90084200
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.werribeeLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.werribeeLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.werribeeLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
