import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeidelbergLocation() {
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
                <h1 className="text-3xl font-bold mb-6">{t.heidelbergLocation?.expertNeurosurgery || 'Expert Neurosurgical Consultations in Heidelberg'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.heidelbergLocation?.subtitle || 'Helping You Live Pain-Free'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.heidelbergLocation?.introduction1 || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Heidelberg and Northern Melbourne suburbs area since 2012. He offers consultations, procedures and operations at major Melbourne Hospitals, with expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions.'}
                </p>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.introduction2 || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout Melbourne\'s northeastern region, eliminating the need to travel to central Melbourne for specialized care.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/heidelberg-consulting-rooms-neurosurgeon-spine-surgeon.jpg"
                    alt="Heidelberg Consulting Rooms"
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
                  <h2 className="text-2xl font-bold mb-4">{t.locationDetails || 'Location Details'}</h2>
                  <p className="text-muted-foreground">
                    {t.heidelbergLocation?.locationDetails || 'Everything you need to know about our Heidelberg consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Warringal Private Hospital Consulting Rooms<br />
                      Level 5<br />
                      10 Martin Street<br />
                      HEIDELBERG VIC 3084
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 9457 5566
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Friday:</span> {t.heidelbergLocation?.consultingHoursDetails || '9:00 AM - 5:00 PM (fortnightly)'}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.heidelbergLocation?.consultationsByAppointment || 'Consultations are by appointment only. Please call our office to schedule an appointment.'}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Note:</span> {t.heidelbergLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.heidelbergLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.heidelbergLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d145.0707!3d-37.7561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba85ed%3A0x4045675218ccd90!2s10%20Martin%20St%2C%20Heidelberg%20VIC%203084!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Heidelberg Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.location || 'Location'}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.heidelbergLocation?.locationDetails1 || 'The Heidelberg Consulting Rooms are conveniently situated at Level 5, 10 Martin Street in walking distance from Heidelberg Train Station, Warringal Private and Austin Hospitals. Other locations are available for urgent appointments, including Bundoora, Moonee Ponds, Sunbury and Surrey Hills.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.diagnosticFacilities || 'Diagnostic Facilities'}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.heidelbergLocation?.diagnosticFacilitiesDetails1 ? t.heidelbergLocation.diagnosticFacilitiesDetails1 : <>The neurosurgical and spinal diagnostic imaging services in Heidelberg include <a href="https://i-med.com.au/find-a-radiology-clinic/heidelberg-radiology" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">IMED</a>, Capital Radiology and <a href="https://www.lakeimaging.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging</a>. All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient's convenience.</>}
                    </p>
                    <p className="text-muted-foreground">
                      {t.heidelbergLocation?.diagnosticFacilitiesDetails2 || 'Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.gettingHere || 'Getting Here'}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.heidelbergLocation?.byPublicTransport || 'By Public Transport'}</h4>
                        <p className="text-muted-foreground">
                          {t.heidelbergLocation?.byPublicTransportDetails || 'Warringal Private Hospital is accessible via train (Heidelberg Station) and bus services. The hospital is a short walk from Heidelberg train station, which is on the Hurstbridge line.'}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.heidelbergLocation?.parkingAndDisabledAccess || 'Parking and Disabled Access'}</h4>
                        <p className="text-muted-foreground">
                          {t.heidelbergLocation?.parkingAndDisabledAccessDetails || 'Heidelberg Consulting Rooms have plenty of onsite free parking available for patients. Disabled parking is available close to the main entrance. It features a no-barrier environment to guarantee full mobility for individuals with disabilities.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.heidelbergLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.heidelbergLocation?.therapeuticInterventions?.description ? t.heidelbergLocation.therapeuticInterventions.description : <>Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> collaborates closely with other specialists in Heidelberg and Melbourne to develop a tailored therapeutic plan designed to address your specific needs.</>}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.heidelbergLocation?.facilities?.title || 'Hospital Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.facilities?.subtitle || 'Specialist care in a welcoming and comfortable environment'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.heidelbergLocation?.facilities?.description || 'Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment and aim to deliver ethical and professional services to improve the quality of doctor-patient interactions.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.facilities?.consultingRooms?.title || 'Comfortable Consulting Rooms'}</h3>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.facilities?.consultingRooms?.description || 'Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members. Hand sanitisers are available in all consulting and waiting spaces.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.facilities?.waitingSpace?.title || 'Convenient Waiting Space'}</h3>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.facilities?.waitingSpace?.description || 'The waiting areas are designed and fitted out with the patient\'s experience in mind. They convey neatness and a warm and welcoming feeling to help patients feel comfortable and at ease. Wider seats allow for separation from strangers, room for personal belongings, child prams and adequate support. The seating and spacing elements allow for privacy and safety. Knowing how valuable is our patients\' time, we take care to keep the waiting period as short as possible and make the waiting area as convenient as possible.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.facilities?.accessibleEnvironment?.title || 'Welcoming Environment'}</h3>
                <p className="text-muted-foreground">
                  {t.heidelbergLocation?.facilities?.accessibleEnvironment?.description || 'Heidelberg Consulting Rooms next to Warringal Private Hospital provide all services accessible to individuals with disabilities. It features a no-barrier environment to guarantee full mobility. Our friendly staff can assist with all examinations that require special positioning. Hand sanitisers are available in all consulting and waiting spaces.'}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/heidelberg-consulting-room-neurosurgeon-spine-surgeon.jpg"
                  alt="Heidelberg Consulting Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/heidelberg-consulting-room-waiting-area-neurosurgeon-spine-surgeon.jpg"
                  alt="Heidelberg Consulting Room Waiting Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/heidelberg-consulting-rooms-neurosurgeon-spine-surgeon-10-martin-medical.jpg"
                  alt="Heidelberg Consulting Rooms at 10 Martin Medical"
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
              <h2 className="text-3xl font-bold mb-4">{t.heidelbergLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.nearbyAmenities?.subtitle || 'Convenient local amenities for patients visiting our Heidelberg location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.heidelbergLocation?.nearbyAmenities?.description ||
                  'Our Heidelberg consulting location is situated in a convenient area with a variety of amenities nearby. ' +
                  'Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you\'re in the area, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Cafe Matto</span> - {t.heidelbergLocation?.nearbyAmenities?.cafesRestaurants?.cafeMatto?.split(' - ')[1] ||
                        'A popular cafe offering excellent coffee and a variety of breakfast and lunch options, located just a short walk from our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">The Burger Lounge</span> - {t.heidelbergLocation?.nearbyAmenities?.cafesRestaurants?.burgerLounge?.split(' - ')[1] ||
                        'A casual dining spot known for its gourmet burgers and relaxed atmosphere.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Burgundy Street Cafes</span> - {t.heidelbergLocation?.nearbyAmenities?.cafesRestaurants?.burgundyStreetCafes?.split(' - ')[1] ||
                        'A variety of cafes and restaurants along Burgundy Street offering diverse dining options.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Old England Hotel</span> - {t.heidelbergLocation?.nearbyAmenities?.cafesRestaurants?.oldEnglandHotel?.split(' - ')[1] ||
                        'A historic pub offering quality meals in a traditional setting.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Warringal Shopping Centre</span> - {t.heidelbergLocation?.nearbyAmenities?.shopping?.warringalShopping?.split(' - ')[1] ||
                        'A convenient shopping center with a variety of retail stores, supermarkets, and services.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Heidelberg Pharmacy</span> - {t.heidelbergLocation?.nearbyAmenities?.shopping?.heidelbergPharmacy?.split(' - ')[1] ||
                        'Located nearby for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Burgundy Street Shopping Precinct</span> - {t.heidelbergLocation?.nearbyAmenities?.shopping?.burgundyStreetShopping?.split(' - ')[1] ||
                        'A variety of specialty shops and services along Heidelberg\'s main shopping street.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Northland Shopping Centre</span> - {t.heidelbergLocation?.nearbyAmenities?.shopping?.northlandShopping?.split(' - ')[1] ||
                        'A major shopping center just a short drive away with department stores and specialty shops.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Heidelberg Park</span> - {t.heidelbergLocation?.nearbyAmenities?.parksRecreation?.heidelbergPark?.split(' - ')[1] ||
                        'A beautiful park with walking paths, gardens, and open spaces, perfect for a relaxing stroll.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Yarra River Parklands</span> - {t.heidelbergLocation?.nearbyAmenities?.parksRecreation?.yarraRiverParklands?.split(' - ')[1] ||
                        'Scenic walking and cycling paths along the Yarra River, offering a peaceful natural environment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Warringal Parklands</span> - {t.heidelbergLocation?.nearbyAmenities?.parksRecreation?.warringalParklands?.split(' - ')[1] ||
                        'A large recreational area with sports facilities and walking tracks.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banyule Flats Reserve</span> - {t.heidelbergLocation?.nearbyAmenities?.parksRecreation?.banyuleFlatsReserve?.split(' - ')[1] ||
                        'A nature reserve with wetlands, walking trails, and abundant wildlife.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Heidelberg Library</span> - {t.heidelbergLocation?.nearbyAmenities?.otherAmenities?.heidelbergLibrary?.split(' - ')[1] ||
                        'A community library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.heidelbergLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Several banking options within walking distance of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Heidelberg Post Office</span> - {t.heidelbergLocation?.nearbyAmenities?.otherAmenities?.heidelbergPostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Heide Museum of Modern Art</span> - {t.heidelbergLocation?.nearbyAmenities?.otherAmenities?.heideMuseum?.split(' - ')[1] ||
                        'A cultural attraction nearby featuring Australian art in a beautiful garden setting.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.heidelbergLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich performs surgery at these hospitals'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.heidelbergLocation?.nearbyHospitals?.description || 'Dr. Aliashkevich performs surgery at multiple hospitals across Melbourne, including the following facilities. These hospitals are equipped with state-of-the-art technology for neurosurgical and spine procedures.'}
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
                    src="/images/neurosurgery-spine-surgery-operating-theatre-microscope-image-guided-surgery.jpg"
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
              <h2 className="text-3xl font-bold mb-4">{t.heidelbergLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.heidelbergLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Heidelberg location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/bundoora-unihill-specialist-consulting-building-240-plenty-road.jpg"
                    alt="Bundoora UniHill Specialist Consulting Building"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.otherConsultingLocations?.bundoora?.title || 'Bundoora'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.heidelbergLocation?.otherConsultingLocations?.bundoora?.description || 'The UniHill Specialist Centre in Bundoora provides convenient access to neurosurgical care for patients in Melbourne\'s northern suburbs. Dr. Aliashkevich consults here regularly.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.heidelbergLocation?.otherConsultingLocations?.bundoora?.address?.split('：')[1] || 'Suite 32, Level 4, 240 Plenty Road, Bundoora VIC 3083'}<br />
                  <span className="font-medium">Phone:</span> {t.heidelbergLocation?.otherConsultingLocations?.bundoora?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/bundoora">{t.heidelbergLocation?.otherConsultingLocations?.bundoora?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.otherConsultingLocations?.mooneePonds?.title || 'Moonee Ponds'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.heidelbergLocation?.otherConsultingLocations?.mooneePonds?.description || 'Dr. Aliashkevich consults at the Moonee Ponds Specialist Centre, providing specialized neurosurgical care to patients in Melbourne\'s northwestern suburbs.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.heidelbergLocation?.otherConsultingLocations?.mooneePonds?.address?.split('：')[1] || '827 Mt Alexander Road, Moonee Ponds VIC 3039'}<br />
                  <span className="font-medium">Phone:</span> {t.heidelbergLocation?.otherConsultingLocations?.mooneePonds?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/moonee-ponds">{t.heidelbergLocation?.otherConsultingLocations?.mooneePonds?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.otherConsultingLocations?.sunbury?.title || 'Sunbury'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.heidelbergLocation?.otherConsultingLocations?.sunbury?.description || 'Dr. Aliashkevich consults at Lake Imaging in Sunbury, providing specialized neurosurgical care to patients in Melbourne\'s outer northwestern region.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.heidelbergLocation?.otherConsultingLocations?.sunbury?.address?.split('：')[1] || '17 Horne Street, Sunbury VIC 3429'}<br />
                  <span className="font-medium">Phone:</span> {t.heidelbergLocation?.otherConsultingLocations?.sunbury?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/sunbury">{t.heidelbergLocation?.otherConsultingLocations?.sunbury?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Patients' Privacy Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.heidelbergLocation?.patientsPrivacy?.title || 'Patients\' Privacy'}</h2>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.patientsPrivacy?.subtitle || 'Your privacy is our priority'}
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground mb-4">
                {t.heidelbergLocation?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient\'s privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients\' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
              </p>
              <p className="text-muted-foreground mb-4">
                {t.heidelbergLocation?.patientsPrivacy?.description2 || 'Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners.'} <a href="https://www.peninsulaph.com.au/Specialists/Specialists/peninsula-private-hospital/neurosurgery/105163/dr-ales-aliashkevich" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> {t.heidelbergLocation?.patientsPrivacy?.description2 ? '' : 'will never release any information to insurers or other parties without consent.'}
              </p>
              <p className="text-muted-foreground">
                {t.heidelbergLocation?.patientsPrivacy?.description3 || 'At the end of every patient\'s visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.heidelbergLocation?.readyToSchedule?.title || 'Contact Us'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.heidelbergLocation?.readyToSchedule?.description || 'Don\'t wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with Dr Ales Aliashkevich at Heidelberg Consulting Rooms and take the first step toward improved health and well-being. We\'re here to support you every step of the way to recovery.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.heidelbergLocation?.address || 'Address'}</h3>
                  <p className="text-muted-foreground">
                    Level 5<br />
                    10 Martin Street<br />
                    HEIDELBERG VIC 3084
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
                    03 9457 5566
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.heidelbergLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.heidelbergLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.heidelbergLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
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
