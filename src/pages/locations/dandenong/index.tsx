import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DandenongLocation() {
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
                <h1 className="text-3xl font-bold mb-6">{t.dandenongLocation?.expertNeurosurgery || 'Expert Neurosurgical Consultations in Dandenong'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.dandenongLocation?.subtitle || 'Helping You Live Pain-Free'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.dandenongLocation?.introduction1 || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Dandenong, Eastern Melbourne suburbs and Mornington Peninsula area since 2012. He offers consultations, procedures and operations at major Melbourne Hospitals, with expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions.'}
                </p>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.introduction2 || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout Melbourne\'s southeastern region, eliminating the need to travel to central Melbourne for specialized care.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/dandenong-neurology-specialist-consulting-building-neurosurgeon-spine-surgeon.jpg"
                    alt="Dandenong Neurology Specialist Consulting Building"
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
                    {t.dandenongLocation?.locationDetails || 'Everything you need to know about our Dandenong consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Dandenong Neurology & Specialists Group<br />
                      136 David Street<br />
                      DANDENONG VIC 3175
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 9792 4321
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Monday:</span> {t.dandenongLocation?.consultingHoursDetails || '9:00 AM - 5:00 PM (fortnightly)'}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.dandenongLocation?.consultationsByAppointment || 'Consultations are by appointment only. Please call our office to schedule an appointment.'}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Note:</span> {t.dandenongLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.dandenongLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.dandenongLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.0724789036584!2d145.21300491532043!3d-38.1748899796869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b2f7c1e8c9f%3A0x5045675218ccd90!2s136%20David%20St%2C%20Dandenong%20VIC%203175!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dandenong Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.location || 'Location'}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.dandenongLocation?.locationDetails1 ? t.dandenongLocation.locationDetails1 : <>The <a href="https://dandenongneurology.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dandenong Neurology Consulting Rooms</a> are conveniently situated at 136 David Street. Other locations are available for urgent appointments, including Frankston, Mornington, Wantrirna and Surrey Hills.</>}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.diagnosticFacilities || 'Diagnostic Facilities'}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.dandenongLocation?.diagnosticFacilitiesDetails1 ? t.dandenongLocation.diagnosticFacilitiesDetails1 : <>The neurosurgical and spinal diagnostic imaging services in Dandenong include <a href="https://i-med.com.au/find-a-radiology-clinic/werribee-private-radiology" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">IMED</a>, Capital Radiology and Lumus Imaging. All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient's convenience.</>}
                    </p>
                    <p className="text-muted-foreground">
                      {t.dandenongLocation?.diagnosticFacilitiesDetails2 || 'Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.gettingHere || 'Getting Here'}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.dandenongLocation?.byPublicTransport || 'By Public Transport'}</h4>
                        <p className="text-muted-foreground">
                          {t.dandenongLocation?.byPublicTransportDetails || 'The consulting suites are accessible via train (Dandenong Station) and bus services. Dandenong train station is on the Pakenham and Cranbourne lines, with regular services to and from Melbourne.'}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.dandenongLocation?.parkingAndDisabledAccess || 'Parking and Disabled Access'}</h4>
                        <p className="text-muted-foreground">
                          {t.dandenongLocation?.parkingAndDisabledAccessDetails || 'Dandenong Neurology Consulting Rooms have plenty of onsite free parking available for patients. Disabled parking is available close to the main entrance. It features a no-barrier environment to guarantee full mobility for individuals with disabilities.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.dandenongLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.dandenongLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.dandenongLocation?.therapeuticInterventions?.description ? t.dandenongLocation.therapeuticInterventions.description : <>Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> collaborates closely with other specialists in Dandenong and Melbourne to develop a tailored therapeutic plan designed to address your specific needs.</>}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.dandenongLocation?.facilities?.title || 'Our Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.dandenongLocation?.facilities?.subtitle || 'Specialist care in a welcoming and comfortable environment'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.dandenongLocation?.facilities?.description || 'Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment and aim to deliver ethical and professional services to improve the quality of doctor-patient interactions.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.facilities?.consultingRooms?.title || 'Comfortable Consulting Rooms'}</h3>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.facilities?.consultingRooms?.description || 'Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members. Hand sanitisers are available in all consulting and waiting spaces.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.facilities?.waitingSpace?.title || 'Convenient Waiting Space'}</h3>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.facilities?.waitingSpace?.description || 'The waiting areas are designed and fitted out with the patient\'s experience in mind. They convey neatness and a warm and welcoming feeling to help patients feel comfortable and at ease. Wider seats allow for separation from strangers, room for personal belongings, child prams and adequate support. The seating and spacing elements allow for privacy and safety. Knowing how valuable is our patients\' time, we take care to keep the waiting period as short as possible and make the waiting area as convenient as possible.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.facilities?.accessibleEnvironment?.title || 'Welcoming Environment'}</h3>
                <p className="text-muted-foreground">
                  {t.dandenongLocation?.facilities?.accessibleEnvironment?.description ? t.dandenongLocation.facilities.accessibleEnvironment.description : <><a href="https://dandenongneurology.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dandenong Neurology</a> Consulting Rooms provide all neurosurgical specialist services accessible to individuals with disabilities. It features a no-barrier environment to guarantee full mobility. Our friendly staff can assist with all examinations that require special positioning. Hand sanitisers are available in all consulting and waiting spaces.</>}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/dandenong-neurology-specialist-consulting-reception-neurosurgeon-spine-surgeon.jpg"
                  alt="Dandenong Neurology Specialist Consulting Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/dandenong-neurology-specialist-consulting-room-neurosurgeon-spine-surgeon.jpg"
                  alt="Dandenong Neurology Specialist Consulting Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/dandenong-neurology-specialist-consulting-entrance-neurosurgeon-spine-surgeon.jpg"
                  alt="Dandenong Neurology Specialist Consulting Entrance"
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
              <h2 className="text-3xl font-bold mb-4">{t.dandenongLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.dandenongLocation?.nearbyAmenities?.subtitle || 'Convenient local amenities for patients visiting our Dandenong location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.dandenongLocation?.nearbyAmenities?.description ||
                  'Our Dandenong consulting location is situated in a convenient area with a variety of amenities nearby. ' +
                  'Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you\'re in the area, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Pavilion</span> - {t.dandenongLocation?.nearbyAmenities?.cafesRestaurants?.dandenongPavilion?.split(' - ')[1] ||
                        'A popular restaurant offering a diverse menu of quality meals, located just a short drive from our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Market Food Hall</span> - {t.dandenongLocation?.nearbyAmenities?.cafesRestaurants?.dandenongMarketFoodHall?.split(' - ')[1] ||
                        'A vibrant food destination with multiple food stalls offering diverse cuisines, perfect for a quick meal.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Round About Cafe</span> - {t.dandenongLocation?.nearbyAmenities?.cafesRestaurants?.roundAboutCafe?.split(' - ')[1] ||
                        'A cozy cafe known for excellent coffee and fresh food options, ideal for a pre-appointment breakfast or light lunch.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Little India</span> - {t.dandenongLocation?.nearbyAmenities?.cafesRestaurants?.littleIndia?.split(' - ')[1] ||
                        'Authentic Indian cuisine in the heart of Dandenong\'s multicultural dining precinct.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Plaza</span> - {t.dandenongLocation?.nearbyAmenities?.shopping?.dandenongPlaza?.split(' - ')[1] ||
                        'A major shopping center with a wide range of retail stores, supermarkets, and services, located within easy reach of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Market</span> - {t.dandenongLocation?.nearbyAmenities?.shopping?.dandenongMarket?.split(' - ')[1] ||
                        'A vibrant market offering fresh produce, specialty foods, clothing, and household goods.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Chemist Warehouse</span> - {t.dandenongLocation?.nearbyAmenities?.shopping?.chemistWarehouse?.split(' - ')[1] ||
                        'Conveniently located pharmacy for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Retail Precinct</span> - {t.dandenongLocation?.nearbyAmenities?.shopping?.dandenongRetailPrecinct?.split(' - ')[1] ||
                        'The main shopping street with various specialty shops and services.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Park</span> - {t.dandenongLocation?.nearbyAmenities?.parksRecreation?.dandenongPark?.split(' - ')[1] ||
                        'A beautiful park with walking paths, gardens, and open spaces, perfect for a relaxing stroll before or after your appointment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Greaves Reserve</span> - {t.dandenongLocation?.nearbyAmenities?.parksRecreation?.greavesReserve?.split(' - ')[1] ||
                        'A recreational area with sports facilities and walking tracks.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Creek Trail</span> - {t.dandenongLocation?.nearbyAmenities?.parksRecreation?.dandenongCreekTrail?.split(' - ')[1] ||
                        'A scenic walking and cycling path that follows Dandenong Creek.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Harmony Square</span> - {t.dandenongLocation?.nearbyAmenities?.parksRecreation?.harmonySquare?.split(' - ')[1] ||
                        'A central public space in Dandenong with seating areas and occasional community events.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Library</span> - {t.dandenongLocation?.nearbyAmenities?.otherAmenities?.dandenongLibrary?.split(' - ')[1] ||
                        'A modern public library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.dandenongLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Multiple banking options available in the Dandenong central business district.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Dandenong Post Office</span> - {t.dandenongLocation?.nearbyAmenities?.otherAmenities?.dandenongPostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Drum Theatre</span> - {t.dandenongLocation?.nearbyAmenities?.otherAmenities?.drumTheatre?.split(' - ')[1] ||
                        'A performing arts venue hosting various cultural events and performances.'}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.dandenongLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.dandenongLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich operates at these hospitals near Dandenong'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.dandenongLocation?.nearbyHospitals?.description || 'In addition to consultations at his Dandenong location, Dr. Aliashkevich performs surgeries at several hospitals in the region. These facilities are equipped with state-of-the-art technology for neurosurgical and spinal procedures.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/dandenong-neurology-specialist-consulting-services-neurosurgeon-spine-surgeon.jpg"
                    alt="Dandenong Neurology Specialist Consulting Services"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.nearbyHospitals?.dandenongHospital?.title || 'Dandenong Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.dandenongLocation?.nearbyHospitals?.dandenongHospital?.description || 'Dandenong Hospital is a major public hospital serving Melbourne\'s southeastern suburbs. Dr. Aliashkevich performs neurosurgical procedures at this hospital, which offers comprehensive care for patients with various neurological and spinal conditions.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.dandenongLocation?.nearbyHospitals?.dandenongHospital?.address?.split('：')[1] || '135 David Street, Dandenong VIC 3175'}<br />
                  <span className="font-medium">Phone:</span> {t.dandenongLocation?.nearbyHospitals?.dandenongHospital?.phone?.split('：')[1] || '(03) 9554 1000'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://monashhealth.org/locations/dandenong-hospital/" target="_blank" rel="noopener noreferrer">{t.hospitals?.dandenongHospital?.visitWebsite || 'Visit Hospital Website'}</a>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/dandenong-neurology-consulting-rooms-ales-aliashkevich-neurosurgeon-spine-surgeon.jpg"
                    alt="Dandenong Neurology Consulting Rooms"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.nearbyHospitals?.jessieMcphersonPrivateHospital?.title || 'Jessie McPherson Private Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.dandenongLocation?.nearbyHospitals?.jessieMcphersonPrivateHospital?.description || 'Jessie McPherson Private Hospital is a private healthcare facility located within Monash Medical Centre in Clayton. Dr. Aliashkevich performs selected neurosurgical procedures at this hospital, which offers personalized care in a comfortable environment.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.dandenongLocation?.nearbyHospitals?.jessieMcphersonPrivateHospital?.address?.split('：')[1] || '246 Clayton Road, Clayton VIC 3168'}<br />
                  <span className="font-medium">Phone:</span> {t.dandenongLocation?.nearbyHospitals?.jessieMcphersonPrivateHospital?.phone?.split('：')[1] || '(03) 9594 2011'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://monashhealth.org/locations/jessie-mcpherson-private-hospital/" target="_blank" rel="noopener noreferrer">{t.hospitals?.jessieMcphersonPrivate?.visitWebsite || 'Visit Hospital Website'}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Patients' Privacy Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.dandenongLocation?.patientsPrivacy?.title || 'Patients\' Privacy'}</h2>
              <p className="text-muted-foreground">
                {t.dandenongLocation?.patientsPrivacy?.subtitle || 'Your privacy is our priority'}
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground mb-4">
                {t.dandenongLocation?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient\'s privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients\' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
              </p>
              <p className="text-muted-foreground mb-4">
                {t.dandenongLocation?.patientsPrivacy?.description2 || 'Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners.'} <a href="https://www.peninsulaph.com.au/Specialists/Specialists/peninsula-private-hospital/neurosurgery/105163/dr-ales-aliashkevich" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> {t.dandenongLocation?.patientsPrivacy?.description2 ? '' : 'will never release any information to insurers or other parties without consent.'}
              </p>
              <p className="text-muted-foreground">
                {t.dandenongLocation?.patientsPrivacy?.description3 || 'At the end of every patient\'s visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.dandenongLocation?.readyToSchedule?.title || 'Contact Us'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.dandenongLocation?.readyToSchedule?.description ? t.dandenongLocation.readyToSchedule.description : <>Don't wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with <a href="http://www.neurosurgeon.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Ales Aliashkevich</a> at <a href="https://dandenongneurology.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dandenong Neurology</a> Consulting Rooms and take the first step toward improved health and well-being. We're here to support you every step of the way to recovery.</>}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.dandenongLocation?.address || 'Address'}</h3>
                  <p className="text-muted-foreground">
                    136 David Street<br />
                    DANDENONG 3175
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
                  <Link to="/appointments">{t.dandenongLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.dandenongLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.dandenongLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
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
