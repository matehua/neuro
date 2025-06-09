import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SurreyHillsLocation() {
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
                <h1 className="text-3xl font-bold mb-6">{t.surreyHillsLocation?.expertNeurosurgery || 'Expand Your Medical Practice in Surrey Hills'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.surreyHillsLocation?.subtitle || 'Professional Environment'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.surreyHillsLocation?.introduction1 || 'Rent a fully-equipped neurosurgical consultation suite in Surrey Hills at miNEURO Medical Consulting Suites. Perfect for healthcare professionals, our state-of-the-art space is located near major medical facilities and transport links.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.surreyHillsLocation?.introduction2 || 'Whether you need a sessional or permanent setup, our prime location in a vibrant shopping district offers a modern and accessible workspace to deliver top-notch patient care. It creates an ideal choice for consultants seeking a modern and accessible workspace to deliver quality patient services.'}
                </p>
                <p className="text-muted-foreground">
                  {t.surreyHillsLocation?.introduction2 ? '' : 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Melbourne since 2012. He offers consultations at his main office in Surrey Hills and operates at major Melbourne Hospitals.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-entrance.jpg"
                    alt="Surrey Hills Consulting Location Entrance"
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
                  <h2 className="text-2xl font-bold mb-4">{t.surreyHillsLocation?.locationDetails || 'Location Details'}</h2>
                  <p className="text-muted-foreground">
                    {t.surreyHillsLocation?.locationDetails || 'Everything you need to know about our Surrey Hills consultation suites'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      miNEURO Consulting Suites<br />
                      Suite 4, Ground Floor<br />
                      619-625 Canterbury Road<br />
                      SURREY HILLS VIC 3127
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 90084200 (clinical office)
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Medicolegal Office:</span> 03 99997433
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">{t.surreyHillsLocation?.consultingHoursDetails ? '' : 'Monday to Friday:'}</span> {t.surreyHillsLocation?.consultingHoursDetails || '8:30 AM - 5:30 PM'}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.surreyHillsLocation?.consultationsByAppointment || 'Consultations are by appointment only. Please call our office to schedule an appointment.'}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">{t.surreyHillsLocation?.urgentAppointments ? '' : 'Note:'}</span> {t.surreyHillsLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.surreyHillsLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.surreyHillsLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288553624!2d145.09308731531866!3d-37.82118397975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4273%3A0x4045675218ccd90!2s619-625%20Canterbury%20Rd%2C%20Surrey%20Hills%20VIC%203127%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Surrey Hills Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.gettingHere || 'Getting Here'}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2">{t.surreyHillsLocation?.byPublicTransport || 'By Public Transport'}</h4>
                      <p className="text-muted-foreground">
                        {t.surreyHillsLocation?.byPublicTransportDetails || 'Our Surrey Hills location is a short walk from Surrey Hills train station on the Lilydale/Belgrave line. Several bus routes also service Canterbury Road, making it easily accessible from various parts of Melbourne.'}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2">{t.surreyHillsLocation?.byCar || 'By Car'}</h4>
                      <p className="text-muted-foreground">
                        {t.surreyHillsLocation?.byCarDetails || 'Ample on-street parking is available on Canterbury Road and surrounding streets. The building is easily accessible from the Eastern Freeway and Burwood Highway, with convenient access from most parts of Melbourne.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.surreyHillsLocation?.facilities?.title || 'Our Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.surreyHillsLocation?.facilities?.subtitle || 'Modern, comfortable facilities designed for healthcare professionals and patient care'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.surreyHillsLocation?.facilities?.description || 'At miNEURO Medical Consulting Suites, we are committed to providing healthcare professionals with the resources and support tailored to meet diverse needs. Our facility offers for rent sessional or permanent fully-equipped state-of-the-art medical consulting suites in Surrey Hills at a prime location near key medical institutions, a bustling shopping district, and a convenient transportation hub.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.facilities?.consultingRooms?.title || 'Modern Consultation Suites'}</h3>
                <p className="text-muted-foreground">
                  {t.surreyHillsLocation?.facilities?.consultingRooms?.description || 'Our consultation suites are meticulously designed and equipped to support various medical specialties. Each suite has modern medical equipment, including examination tables, sinks, ergonomic seating, and ample storage space. The suites feature large displays to review and discuss imaging, helping patients understand their conditions and treatment options.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.facilities?.waitingSpace?.title || 'Comfortable Waiting Area'}</h3>
                <p className="text-muted-foreground">
                  {t.surreyHillsLocation?.facilities?.waitingSpace?.description || 'Our welcoming waiting area is designed to provide comfort and convenience for patients and their companions. Furnished with comfortable seating, reading materials, a fridge with refreshing drinks, a TV, a HiFi audio system and ambient lighting, our waiting area creates a calming atmosphere for patients awaiting their appointments.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.facilities?.accessibleEnvironment?.title || 'Receptionist Support'}</h3>
                <p className="text-muted-foreground">
                  {t.surreyHillsLocation?.facilities?.accessibleEnvironment?.description || 'From greeting patients to managing appointments and inquiries, our experienced receptionists are here to assist you in providing exceptional patient care. Our dedicated team of administrative and clinical staff are committed to providing a welcoming and efficient experience for all patients.'}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Technology Infrastructure</h3>
                <p className="text-muted-foreground mb-4">
                  High-speed internet access is available in every consultation suite, allowing healthcare professionals to seamlessly access electronic medical records and research resources and communicate with colleagues. Surrey Hills Medical Consulting Suites has advanced technology infrastructure to support modern healthcare practices.
                </p>
                <p className="text-muted-foreground">
                  It includes secure high-speed NBN network connectivity, telecommunication systems, CCTV, alarm and video conferencing capabilities to facilitate communication and collaboration among healthcare professionals.
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Accessibility Features</h3>
                <p className="text-muted-foreground mb-4">
                  We are committed to providing an inclusive environment for all individuals. Our facility is designed to be accessible to patients with mobility impairments, with wide doors, wheelchair ramps, handrails, and accessible restroom facilities.
                </p>
                <p className="text-muted-foreground">
                  Our ground floor location offers wheelchair accessibility and facilities designed to accommodate patients with mobility challenges. We strive to ensure every patient can access our services comfortably and with dignity.
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.facilities?.kitchenette?.title || 'Kitchenette'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.surreyHillsLocation?.facilities?.kitchenette?.description || 'Our kitchenette allows us to prepare and enjoy refreshments throughout the day. Whether you need a quick coffee break between appointments or a snack to recharge, our kitchenette offers the perfect space to unwind and refuel. It features essential appliances, including a refrigerator, microwave, toaster, sandwich press and boiling/chilled water taps.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Flexible Lease Terms</h3>
                <p className="text-muted-foreground mb-4">
                  We offer flexible lease terms, including sessional, short-term and long-term rental options, to accommodate your needs. Our flexible rental options are designed to provide affordability and convenience, allowing you to focus on delivering exceptional patient care.
                </p>
                <p className="text-muted-foreground">
                  Whether you require additional medical equipment or specific suite configurations, we offer customisation options to suit your requirements.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Facility Gallery</h3>
              <p className="text-muted-foreground text-center mb-8">
                Our Surrey Hills medical consulting facility features modern, fully-equipped consultation suites designed to provide a professional and comfortable environment for healthcare practitioners and their patients. Browse through our gallery to see our entrance, reception area, waiting areas, consultation suites, and amenities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-entrance.jpg"
                    alt="Surrey Hills miNEURO Entrance"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-entry.jpg"
                    alt="Surrey Hills Office Entry"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-entry-view.jpg"
                    alt="Surrey Hills Office Entry View"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-reception.jpg"
                    alt="Surrey Hills Reception Area"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-reception-view.jpg"
                    alt="Surrey Hills Reception"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-reception-desk.jpg"
                    alt="Surrey Hills Reception Desk"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-waiting-area.jpg"
                    alt="Surrey Hills Waiting Area"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-waiting-area-view.jpg"
                    alt="Surrey Hills Waiting Area View"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk.jpg"
                    alt="Surrey Hills Doctor's Desk"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk-view.jpg"
                    alt="Surrey Hills Consultation Suite Desk"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk-mirror.jpg"
                    alt="Surrey Hills Consultation Suite with Mirror"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk-sink.jpg"
                    alt="Surrey Hills Consultation Suite with Sink"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-kitchenette.jpg"
                    alt="Surrey Hills Office Kitchenette"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-suite.jpg"
                    alt="Surrey Hills Office Suite"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg"
                    alt="Surrey Hills Office Entrance"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location and Amenities Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.surreyHillsLocation?.location || 'Location and Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.surreyHillsLocation?.locationDetails1 ? '' : 'Prime location with convenient services and facilities in the surrounding area'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.surreyHillsLocation?.locationDetails1 || 'Our consultation suites are strategically located at 619 Canterbury Road, Surrey Hills, offering a prime location for healthcare professionals seeking a convenient and accessible workspace. Situated within a few minutes drive from the bustling Box Hill Medical Hub, our facility provides easy access to essential medical services and collaborative opportunities with fellow healthcare professionals.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Medical Facilities Nearby</h3>
                <p className="text-muted-foreground mb-4">
                  Located nearby, Epworth Eastern Hospital is a leading private hospital renowned for its comprehensive range of medical services and exceptional diagnostic and treatment facilities. Our consultation suites offer all healthcare professionals convenient access to hospital resources, specialist consultations, and diagnostic services.
                </p>
                <p className="text-muted-foreground">
                  Several GP clinics are also located nearby, offering comprehensive healthcare solutions and patient referrals.
                </p>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/union-station-surrey-hills-cafe-near-miNEURO-consulting-suites.jpg"
                  alt="Union Station Cafe"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-entry-view.jpg"
                  alt="Surrey Hills Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Surrounded by Amenities</h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy a variety of dining options with a selection of local eateries and cafes, recreational areas, playgrounds, post office and a new Coles supermarket within a 100-meter radius of our facility. Whether you need a quick coffee break between appointments, meet colleagues for lunch, or buy ingredients for a meal, amenities are readily available nearby.
                </p>
                <p className="text-muted-foreground">
                  Explore a range of nearby retail shops, offering convenience for tenants and patients running errands before or after appointments. From pharmacies to convenience stores, essential amenities are easily accessible from our location.
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Convenient Transportation Options</h3>
                <ul className="text-muted-foreground list-none space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>With the new Union train station within walking distance, accessing our facility is convenient for healthcare providers and patients.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>The newly built Union Station connects you to major train lines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Multiple local bus routes provide additional transportation options.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Situated on Canterbury Road, our facility enjoys excellent connectivity to major roadways, including the Eastern Freeway, Warrigal Road, Union Road and Whitehorse Road.</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Parking and Neighborhood</h3>
                <p className="text-muted-foreground mb-4">
                  Secure gated background parking is available on-site for consultants during their sessional time, offering convenient access to our premises. Ample free parking space is available along the surrounding streets or at the Union train station.
                </p>
                <p className="text-muted-foreground">
                  Surrey Hills is renowned for its safe and welcoming community atmosphere, providing a conducive environment for healthcare professionals to practice and patients to seek medical care. Our location offers peace of mind for tenants and patients, ensuring a positive experience during their visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Amenities Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.surreyHillsLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.surreyHillsLocation?.nearbyAmenities?.subtitle || 'Discover the convenience of Surrey Hills\' local amenities for patients and visitors'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.surreyHillsLocation?.nearbyAmenities?.description ||
                  'Our Surrey Hills location is surrounded by a variety of amenities to make your visit more convenient and comfortable. ' +
                  'Whether you\'re looking for a place to grab a coffee before your appointment, need to pick up a prescription, or want to enjoy a meal afterward, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Union Station Cafe</span> - {t.surreyHillsLocation?.nearbyAmenities?.cafesRestaurants?.unionStationCafe?.split(' - ')[1] ||
                        'A popular local cafe just a short walk away, offering excellent coffee, breakfast, and lunch options.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Our Little Secret</span> - {t.surreyHillsLocation?.nearbyAmenities?.cafesRestaurants?.ourLittleSecret?.split(' - ')[1] ||
                        'A charming cafe known for its friendly service and delicious brunch menu.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Maling Road Cafes</span> - {t.surreyHillsLocation?.nearbyAmenities?.cafesRestaurants?.malingRoadCafes?.split(' - ')[1] ||
                        'A short drive away, this historic shopping strip offers multiple cafes and restaurants with outdoor seating.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Hills Grocer</span> - {t.surreyHillsLocation?.nearbyAmenities?.cafesRestaurants?.surreyHillsGrocer?.split(' - ')[1] ||
                        'A specialty food store and cafe offering quality Australian produce and prepared foods.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Coles Supermarket</span> - {t.surreyHillsLocation?.nearbyAmenities?.shopping?.colesSupermarket?.split(' - ')[1] ||
                        'A full-service supermarket within 100 meters of our facility for any grocery needs.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Hills Pharmacy</span> - {t.surreyHillsLocation?.nearbyAmenities?.shopping?.surreyHillsPharmacy?.split(' - ')[1] ||
                        'Conveniently located nearby for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Canterbury Shopping Precinct</span> - {t.surreyHillsLocation?.nearbyAmenities?.shopping?.canterburyShopping?.split(' - ')[1] ||
                        'A variety of specialty shops and services along Canterbury Road.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Box Hill Central</span> - {t.surreyHillsLocation?.nearbyAmenities?.shopping?.boxHillCentral?.split(' - ')[1] ||
                        'A major shopping center just a short drive away with department stores, specialty shops, and a diverse food court.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Gardens</span> - {t.surreyHillsLocation?.nearbyAmenities?.parksRecreation?.surreyGardens?.split(' - ')[1] ||
                        'A peaceful park with walking paths, mature trees, and open green spaces, perfect for a relaxing stroll.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Park</span> - {t.surreyHillsLocation?.nearbyAmenities?.parksRecreation?.surreyPark?.split(' - ')[1] ||
                        'Features sports facilities, walking tracks, and playgrounds for families.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Anniversary Trail</span> - {t.surreyHillsLocation?.nearbyAmenities?.parksRecreation?.anniversaryTrail?.split(' - ')[1] ||
                        'A popular walking and cycling path that runs through Surrey Hills, perfect for exercise or leisure.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Canterbury Sports Ground</span> - {t.surreyHillsLocation?.nearbyAmenities?.parksRecreation?.canterburySportsGround?.split(' - ')[1] ||
                        'Nearby sporting facilities including tennis courts and ovals.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Hills Post Office</span> - {t.surreyHillsLocation?.nearbyAmenities?.otherAmenities?.surreyHillsPostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.surreyHillsLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Several banking options within walking distance.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Hills Library</span> - {t.surreyHillsLocation?.nearbyAmenities?.otherAmenities?.surreyHillsLibrary?.split(' - ')[1] ||
                        'A community library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Surrey Hills Neighborhood Centre</span> - {t.surreyHillsLocation?.nearbyAmenities?.otherAmenities?.surreyHillsNeighborhoodCentre?.split(' - ')[1] ||
                        'Offers community programs and services for local residents.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.surreyHillsLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.surreyHillsLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich performs surgery at these hospitals'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.surreyHillsLocation?.nearbyHospitals?.description || 'Dr. Aliashkevich performs surgery at multiple hospitals across Melbourne, including the following facilities. These hospitals are equipped with state-of-the-art technology for neurosurgical and spine procedures.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.surreyHillsLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.surreyHillsLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.surreyHillsLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Surrey Hills location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/wantirna-consulting-rooms-knox-audiology-neurosurgeon-spine-surgeon.jpg"
                    alt="Wantirna Knox Audiology Consulting Rooms"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.otherConsultingLocations?.wantirna?.title || 'Wantirna'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.surreyHillsLocation?.otherConsultingLocations?.wantirna?.description || 'The Wantirna consulting rooms at Knox Audiology provide convenient access to neurosurgical care for patients in Melbourne\'s eastern suburbs.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.surreyHillsLocation?.otherConsultingLocations?.wantirna?.address?.split('：')[1] || '230 Mountain Highway, Wantirna VIC 3152'}<br />
                  <span className="font-medium">Phone:</span> {t.surreyHillsLocation?.otherConsultingLocations?.wantirna?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/wantirna">{t.surreyHillsLocation?.otherConsultingLocations?.wantirna?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/dandenong-neurology-specialist-consulting-entrance-neurosurgeon-spine-surgeon.jpg"
                    alt="Dandenong Neurology Specialist Consulting"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.otherConsultingLocations?.dandenong?.title || 'Dandenong'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.surreyHillsLocation?.otherConsultingLocations?.dandenong?.description || 'The Dandenong Neurology and Specialist Group provides convenient access to neurosurgical care for patients in Melbourne\'s southeastern suburbs. Dr. Aliashkevich consults here regularly.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.surreyHillsLocation?.otherConsultingLocations?.dandenong?.address?.split('：')[1] || '136 David Street, Dandenong VIC 3175'}<br />
                  <span className="font-medium">Phone:</span> {t.surreyHillsLocation?.otherConsultingLocations?.dandenong?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/dandenong">{t.surreyHillsLocation?.otherConsultingLocations?.dandenong?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/peninsula-private-hospital-consulting-suites-ales-aliashkevich-neurosurgeon-spine-surgeon.jpg"
                    alt="Peninsula Private Hospital Consulting Suites"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.surreyHillsLocation?.otherConsultingLocations?.frankston?.title || 'Frankston'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.surreyHillsLocation?.otherConsultingLocations?.frankston?.description || 'Dr. Aliashkevich consults at Peninsula Private Hospital in Frankston, providing specialized neurosurgical care to patients on the Mornington Peninsula and surrounding areas.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.surreyHillsLocation?.otherConsultingLocations?.frankston?.address?.split('：')[1] || '525 McClelland Drive, Frankston VIC 3199'}<br />
                  <span className="font-medium">Phone:</span> {t.surreyHillsLocation?.otherConsultingLocations?.frankston?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/frankston">{t.surreyHillsLocation?.otherConsultingLocations?.frankston?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Contact Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Pricing and Contact</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our flexible rental options are designed to provide affordability and convenience, allowing you to focus on delivering exceptional patient care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Contact Us</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to learn more about our facilities, schedule a viewing or inquire about our rental options. Join us and elevate your practice to new heights in Surrey Hills. Our facility fosters collaboration and networking opportunities, providing a supportive professional growth and development environment.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Suite 4, 619 Canterbury Road<br />
                        Surrey Hills VIC 3127
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        info@mineuro.com.au
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        03 90084200
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Schedule a Viewing</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in renting our medical consulting rooms? Fill out the form below to schedule a viewing or request more information.
                </p>

                <div className="mt-4">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">Contact Us for Viewing</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.surreyHillsLocation?.readyToSchedule?.title || 'Ready to Schedule an Appointment?'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.surreyHillsLocation?.readyToSchedule?.description || 'Contact us today to schedule a consultation with Dr. Ales Aliashkevich at our Surrey Hills location. Our staff will help coordinate your appointment and ensure you have all the information you need for your visit. Urgent appointments are available on request.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.surreyHillsLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.surreyHillsLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.surreyHillsLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
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
