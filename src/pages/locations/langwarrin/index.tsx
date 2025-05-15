import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LangwarrinLocation() {
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
                <h1 className="text-3xl font-bold mb-6">{t.locations?.langwarrinLocation?.expertNeurosurgery || 'Expert Neurosurgery and Spine Care'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.locations?.langwarrinLocation?.peninsulaConsultingSuites || 'PENINSULA CONSULTING SUITES'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.langwarrinLocation?.subtitle || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, neurosurgeon and spine surgeon, offers consultations at Peninsula Consulting Suites in Langwarrin, providing convenient access to specialized care for patients in the southeastern suburbs of Melbourne.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.langwarrinLocation?.expertise || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout the Langwarrin and surrounding areas, eliminating the need to travel to Melbourne for specialized care.'}
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
                    {t.locations?.langwarrinLocation?.locationDetails || 'Everything you need to know about our Langwarrin consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Peninsula Consulting Suites<br />
                      Suite 3, 35-37 Cranbourne-Frankston Road<br />
                      LANGWARRIN VIC 3910
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.contactInformation || 'Contact Information'}</h3>
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
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Tuesday and Thursday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Consultations are by appointment only. Please call our office to schedule an appointment.
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">{'Note'}:</span> {t.locations?.langwarrinLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.locations?.langwarrinLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.langwarrinLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
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
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.gettingHere || 'Getting Here'}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2">{t.locations?.langwarrinLocation?.byPublicTransport || 'By Public Transport'}</h4>
                      <p className="text-muted-foreground">
                        {t.locations?.langwarrinLocation?.byPublicTransportDetails || 'Peninsula Consulting Suites is accessible via bus services that stop nearby. Several bus routes connect the clinic to Frankston train station and surrounding suburbs.'}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2">{t.locations?.langwarrinLocation?.byCar || 'By Car'}</h4>
                      <p className="text-muted-foreground">
                        {t.locations?.langwarrinLocation?.byCarDetails || 'Free on-site parking is available for patients at Peninsula Consulting Suites. The clinic is easily accessible from Cranbourne-Frankston Road, with convenient access from the Mornington Peninsula Freeway and Peninsula Link.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.locations?.langwarrinLocation?.facilityImages?.title || 'Our Facility'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.langwarrinLocation?.facilityImages?.subtitle || 'Take a look at our modern, comfortable consulting rooms at Peninsula Consulting Suites'}
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
              <h2 className="text-3xl font-bold mb-4">{t.locations?.langwarrinLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.langwarrinLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.langwarrinLocation?.therapeuticInterventions?.description || 'Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, Dr Aliashkevich collaborates closely with other specialists in Langwarrin and surrounding areas to develop a tailored therapeutic plan designed to address your specific needs.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.langwarrinLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.langwarrinLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.langwarrinLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.langwarrinLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Consulting Locations Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.langwarrinLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.langwarrinLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.langwarrinLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Langwarrin location is not suitable for you, appointments can be arranged at these alternative locations.'}
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.langwarrinLocation?.otherConsultingLocations?.frankston?.title || 'Frankston'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.langwarrinLocation?.otherConsultingLocations?.frankston?.description || 'Dr. Aliashkevich consults at Peninsula Private Hospital in Frankston, providing specialized neurosurgical care to patients in the Frankston area.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.langwarrinLocation?.otherConsultingLocations?.frankston?.address?.split('：')[1] || 'Peninsula Private Hospital, Mezzanine Consulting Suites, 525 McClelland Drive, Frankston VIC 3199'}<br />
                  <span className="font-medium">Phone:</span> {t.langwarrinLocation?.otherConsultingLocations?.frankston?.phone?.split('：')[1] || '03 9781 4133'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/frankston">{t.langwarrinLocation?.otherConsultingLocations?.frankston?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.langwarrinLocation?.otherConsultingLocations?.mornington?.title || 'Mornington'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.langwarrinLocation?.otherConsultingLocations?.mornington?.description || 'Dr. Aliashkevich consults at the Nepean Specialist Centre in Mornington, providing specialized neurosurgical care to patients on the Mornington Peninsula.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.langwarrinLocation?.otherConsultingLocations?.mornington?.address?.split('：')[1] || '1050 Nepean Highway, Mornington VIC 3931'}<br />
                  <span className="font-medium">Phone:</span> {t.langwarrinLocation?.otherConsultingLocations?.mornington?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/mornington">{t.langwarrinLocation?.otherConsultingLocations?.mornington?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.langwarrinLocation?.otherConsultingLocations?.surreyHills?.title || 'Surrey Hills'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.langwarrinLocation?.otherConsultingLocations?.surreyHills?.description || 'The miNEURO Consulting Suites in Surrey Hills are Dr. Aliashkevich\'s main practice location. These modern facilities offer comprehensive neurosurgical consultations in a central, easily accessible location.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.langwarrinLocation?.otherConsultingLocations?.surreyHills?.address?.split('：')[1] || 'Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127'}<br />
                  <span className="font-medium">Phone:</span> {t.langwarrinLocation?.otherConsultingLocations?.surreyHills?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/surrey-hills">{t.langwarrinLocation?.otherConsultingLocations?.surreyHills?.viewDetails || 'View Details'}</Link>
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
