import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SunburyLocation() {
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
                <h1 className="text-3xl font-bold mb-6">{t.sunburyLocation?.expertNeurosurgery || 'Expert Neurosurgical Consultations in Sunbury'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.sunburyLocation?.subtitle || 'Helping You Live Pain-Free'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.sunburyLocation?.introduction1 || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Sunbury area since 2012. He offers consultations, procedures and operations at major Melbourne Hospitals, with expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions.'}
                </p>
                <p className="text-muted-foreground">
                  {t.sunburyLocation?.introduction2 || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout Melbourne\'s outer northwestern region, eliminating the need to travel to central Melbourne for specialized care.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/sunbury-lake-imaging-consulting-neurosurgery.jpg"
                    alt="Sunbury Lake Imaging Consulting Neurosurgery"
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
                    {t.locations?.sunburyLocation?.locationDetails || 'Everything you need to know about our Sunbury consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Lake Imaging<br />
                      17-19 Horne Street<br />
                      SUNBURY VIC 3429
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 9744 5566
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Wednesday:</span> {t.locations?.sunburyLocation?.consultingHoursDetails || '9:00 AM - 5:00 PM (fortnightly)'}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.locations?.sunburyLocation?.consultationsByAppointment || 'Consultations are by appointment only. Please call our office to schedule an appointment.'}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Note:</span> {t.locations?.sunburyLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.locations?.sunburyLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.sunburyLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d144.7286!3d-37.5807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6885c5c5c5c5c%3A0x5045675218ccd90!2s17-19%20Horne%20St%2C%20Sunbury%20VIC%203429!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sunbury Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.location || 'Location'}</h3>
                    <p className="text-muted-foreground mb-4">
                      <a href="https://lakeimaging.com.au/clinic-locator/sunbury/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging in Sunbury</a> {t.locations?.sunburyLocation?.locationDetails1 || 'is conveniently situated at 17 Horne Street in walking distance from Sunbury Train Station. Other locations are available for urgent appointments, including Bundoora, Moonee Ponds, Werribee and Heidelberg.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.diagnosticFacilities || 'Diagnostic Facilities'}</h3>
                    <p className="text-muted-foreground mb-4">
                      The neurosurgical and spinal diagnostic imaging services in <a href="https://lakeimaging.com.au/clinic-locator/sunbury/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Sunbury</a> and <a href="https://lakeimaging.com.au/clinic-locator/melton-unitt-st/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Melton</a> include <a href="https://www.lakeimaging.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging</a>. {t.locations?.sunburyLocation?.diagnosticFacilitiesDetails1 || 'All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient\'s convenience.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.sunburyLocation?.diagnosticFacilitiesDetails2 || 'Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.gettingHere || 'Getting Here'}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.locations?.sunburyLocation?.byPublicTransport || 'By Public Transport'}</h4>
                        <p className="text-muted-foreground">
                          {t.locations?.sunburyLocation?.byPublicTransportDetails || 'The consulting suites are accessible via train (Sunbury Station) and bus services. Sunbury train station is on the Sunbury line, with regular services to and from Melbourne.'}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.locations?.sunburyLocation?.parkingAndDisabledAccess || 'Parking and Disabled Access'}</h4>
                        <p className="text-muted-foreground">
                          <a href="https://lakeimaging.com.au/clinic-locator/sunbury/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging in Sunbury</a> {t.locations?.sunburyLocation?.parkingAndDisabledAccessDetails || 'has plenty of onsite free parking available for patients. Disabled parking is available close to the main entrance. It features a no-barrier environment to guarantee full mobility for individuals with disabilities.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.locations?.sunburyLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.sunburyLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.sunburyLocation?.therapeuticInterventions?.description || 'Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, '}<a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> {t.locations?.sunburyLocation?.therapeuticInterventions?.description ? '' : 'collaborates closely with other specialists in Sunbury and Melbourne to develop a tailored therapeutic plan designed to address your specific needs.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.sunburyLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.sunburyLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.sunburyLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.sunburyLocation?.facilities?.title || 'Our Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.sunburyLocation?.facilities?.subtitle || 'Specialist care in a welcoming and comfortable environment'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.sunburyLocation?.facilities?.description || 'Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment and aim to deliver ethical and professional services to improve the quality of doctor-patient interactions.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.facilities?.consultingRooms?.title || 'Comfortable Consulting Rooms'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.sunburyLocation?.facilities?.consultingRooms?.description || 'Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members. Hand sanitisers are available in all consulting and waiting spaces.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.facilities?.waitingSpace?.title || 'Convenient Waiting Space'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.sunburyLocation?.facilities?.waitingSpace?.description || 'The waiting areas are designed and fitted out with the patient\'s experience in mind. They convey neatness and a warm and welcoming feeling to help patients feel comfortable and at ease. Wider seats allow for separation from strangers, room for personal belongings, child prams and adequate support. The seating and spacing elements allow for privacy and safety. Knowing how valuable is our patients\' time, we take care to keep the waiting period as short as possible and make the waiting area as convenient as possible.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.facilities?.accessibleEnvironment?.title || 'Welcoming Environment'}</h3>
                <p className="text-muted-foreground">
                  <a href="https://lakeimaging.com.au/clinic-locator/sunbury/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging in Sunbury</a> {t.locations?.sunburyLocation?.facilities?.accessibleEnvironment?.description || 'provides all services accessible to individuals with disabilities. It features a no-barrier environment to guarantee full mobility. Our friendly staff can assist with all examinations that require special positioning. Hand sanitisers are available in all consulting and waiting spaces.'}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sunbury-lake-imaging-radiology-neurosurgery-consulting-rooms-reception-1.jpg"
                  alt="Sunbury Lake Imaging Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sunbury-lake-imaging-radiology-neurosurgery-consulting-room.jpg"
                  alt="Sunbury Lake Imaging Consulting Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sunbury-lake-imaging-neurosurgery-consulting-parking.jpg"
                  alt="Sunbury Lake Imaging Parking"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Amenities Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.sunburyLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.sunburyLocation?.nearbyAmenities?.subtitle || 'Convenient local amenities for patients visiting our Sunbury location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.sunburyLocation?.nearbyAmenities?.description ||
                  'Our Sunbury consulting location is situated in a convenient area with a variety of amenities nearby. ' +
                  'Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you\'re in the area, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Spotted Owl Cafe</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.cafesRestaurants?.spottedOwlCafe?.split(' - ')[1] ||
                        'A popular cafe offering excellent coffee and a variety of breakfast and lunch options, located just a short walk from our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">The Olive Tree Hotel</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.cafesRestaurants?.oliveTreeHotel?.split(' - ')[1] ||
                        'A local restaurant and pub offering quality meals in a relaxed setting.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">O'Shanassy Street Cafes</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.cafesRestaurants?.oshanassyStreetCafes?.split(' - ')[1] ||
                        'A variety of cafes and restaurants along O\'Shanassy Street offering diverse dining options.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Vic Tavern</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.cafesRestaurants?.vicTavern?.split(' - ')[1] ||
                        'A family-friendly bistro offering a range of meals in a comfortable environment.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Square Shopping Centre</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.shopping?.sunburySquare?.split(' - ')[1] ||
                        'A convenient shopping center with a variety of retail stores, supermarkets, and services.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Pharmacy</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.shopping?.sunburyPharmacy?.split(' - ')[1] ||
                        'Located nearby for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Evans Street Shopping Precinct</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.shopping?.evansStreetShopping?.split(' - ')[1] ||
                        'A variety of specialty shops and services in Sunbury\'s main shopping area.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Woolworths Sunbury</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.shopping?.woolworthsSunbury?.split(' - ')[1] ||
                        'A full-service supermarket for any grocery needs.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Village Green</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.parksRecreation?.sunburyVillageGreen?.split(' - ')[1] ||
                        'A central park with open spaces, perfect for a relaxing stroll before or after your appointment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Emu Bottom Wetlands Reserve</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.parksRecreation?.emuBottomWetlands?.split(' - ')[1] ||
                        'A natural wetland area with walking paths and abundant birdlife.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Jacksons Creek Reserve</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.parksRecreation?.jacksonsCreekReserve?.split(' - ')[1] ||
                        'A scenic reserve with walking trails along Jacksons Creek.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Aquatic Centre</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.parksRecreation?.sunburyAquaticCentre?.split(' - ')[1] ||
                        'A modern aquatic facility with swimming pools and fitness programs.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.sunburyLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Library</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.otherAmenities?.sunburyLibrary?.split(' - ')[1] ||
                        'A community library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Several banking options within walking distance of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Post Office</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.otherAmenities?.sunburyPostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sunbury Community Health Centre</span> - {t.locations?.sunburyLocation?.nearbyAmenities?.otherAmenities?.sunburyCommunityHealth?.split(' - ')[1] ||
                        'A comprehensive health center offering various health services.'}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.sunburyLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.sunburyLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich performs surgery at these hospitals'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.sunburyLocation?.nearbyHospitals?.description || 'Dr. Aliashkevich performs surgery at multiple hospitals across Melbourne, including the following facilities. These hospitals are equipped with state-of-the-art technology for neurosurgical and spine procedures.'}
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
                  <a href="https://www.epworth.org.au/locations/epworth-richmond" target="_blank" rel="noopener noreferrer">{t.hospitals?.epworthRichmond?.visitWebsite || 'Visit Hospital Website'}</a>
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
                  <a href="https://www.epworth.org.au/locations/epworth-eastern" target="_blank" rel="noopener noreferrer">{t.hospitals?.epworthEastern?.visitWebsite || 'Visit Hospital Website'}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Consulting Locations Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.sunburyLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.sunburyLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.sunburyLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Sunbury location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/medical-consulting-room-rent-Surrey-Hills-miNEURO-entrance.jpg"
                    alt="Surrey Hills miNEURO Consulting Suites"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.sunburyLocation?.otherConsultingLocations?.surreyHills?.title || 'Surrey Hills'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.sunburyLocation?.otherConsultingLocations?.surreyHills?.description || 'The miNEURO Consulting Suites in Surrey Hills are Dr. Aliashkevich\'s main practice location. These modern facilities offer comprehensive neurosurgical consultations in a central, easily accessible location.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.sunburyLocation?.otherConsultingLocations?.surreyHills?.address?.split('：')[1] || 'Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127'}<br />
                  <span className="font-medium">Phone:</span> {t.sunburyLocation?.otherConsultingLocations?.surreyHills?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/surrey-hills">{t.sunburyLocation?.otherConsultingLocations?.surreyHills?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.sunburyLocation?.otherConsultingLocations?.heidelberg?.title || 'Heidelberg'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.sunburyLocation?.otherConsultingLocations?.heidelberg?.description || 'Warringal Private Hospital in Heidelberg provides convenient access to neurosurgical care for patients in Melbourne\'s northern suburbs. Dr. Aliashkevich consults here regularly.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.sunburyLocation?.otherConsultingLocations?.heidelberg?.address?.split('：')[1] || '216 Burgundy Street, Heidelberg VIC 3084'}<br />
                  <span className="font-medium">Phone:</span> {t.sunburyLocation?.otherConsultingLocations?.heidelberg?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/heidelberg">{t.sunburyLocation?.otherConsultingLocations?.heidelberg?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/moonee-ponds-specialist-centre-entrance.jpg"
                    alt="Moonee Ponds Specialist Centre"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.sunburyLocation?.otherConsultingLocations?.mooneePonds?.title || 'Moonee Ponds'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.sunburyLocation?.otherConsultingLocations?.mooneePonds?.description || 'Dr. Aliashkevich consults at the Moonee Ponds Specialist Centre, providing specialized neurosurgical care to patients in Melbourne\'s northwestern suburbs.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.sunburyLocation?.otherConsultingLocations?.mooneePonds?.address?.split('：')[1] || '827 Mt Alexander Road, Moonee Ponds VIC 3039'}<br />
                  <span className="font-medium">Phone:</span> {t.sunburyLocation?.otherConsultingLocations?.mooneePonds?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/moonee-ponds">{t.sunburyLocation?.otherConsultingLocations?.mooneePonds?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Patients' Privacy Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.sunburyLocation?.patientsPrivacy?.title || 'Patients\' Privacy'}</h2>
              <p className="text-muted-foreground">
                {t.sunburyLocation?.patientsPrivacy?.subtitle || 'Your privacy is our priority'}
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground mb-4">
                {t.sunburyLocation?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient\'s privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients\' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
              </p>
              <p className="text-muted-foreground mb-4">
                {t.sunburyLocation?.patientsPrivacy?.description2 || 'Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners.'} <a href="https://www.peninsulaph.com.au/Specialists/Specialists/peninsula-private-hospital/neurosurgery/105163/dr-ales-aliashkevich" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> {t.sunburyLocation?.patientsPrivacy?.description2 ? '' : 'will never release any information to insurers or other parties without consent.'}
              </p>
              <p className="text-muted-foreground">
                {t.sunburyLocation?.patientsPrivacy?.description3 || 'At the end of every patient\'s visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.sunburyLocation?.readyToSchedule?.title || 'Contact Us'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.sunburyLocation?.readyToSchedule?.description || 'Don\'t wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with'} <a href="http://www.neurosurgeon.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Ales Aliashkevich</a> {t.sunburyLocation?.readyToSchedule?.description ? '' : 'at Lake Imaging in Sunbury and take the first step toward improved health and well-being. We\'re here to support you every step of the way to recovery.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.sunburyLocation?.address || 'Address'}</h3>
                  <p className="text-muted-foreground">
                    17-19 Horne Street<br />
                    SUNBURY 3429
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
                  <Link to="/appointments">{t.sunburyLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.sunburyLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.sunburyLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
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
