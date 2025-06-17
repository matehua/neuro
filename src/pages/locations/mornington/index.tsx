import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from 'lucide-react';

import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const MorningtonLocation: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout showHeader={false}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-6">{t.locations?.morningtonLocation?.expertNeurosurgery || 'Expert Neurosurgery and Spine Care'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.locations?.morningtonLocation?.specialistConsultingRooms || 'MORNINGTON SPECIALIST CONSULTING ROOMS'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.subtitle || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, neurosurgeon and spine surgeon, has been providing care to patients on Mornington Peninsula since 2012. He offers consultations at Mornington Specialist Centre and operates at Peninsula Private and The Bays Hospitals.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.expertise || 'With expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions, radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems, Dr. Aliashkevich brings specialized care closer to residents of Mornington and surrounding areas. This location provides convenient access to expert neurosurgical care for patients throughout the Mornington Peninsula region.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/neurosurgery-mornington-specialist-centre-entrance-consulting.jpg"
                    alt="Mornington Specialist Centre Entrance"
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
                  <h2 className="text-2xl font-bold mb-4">{t.appointments?.locations?.title || 'Location Details'}</h2>
                  <p className="text-muted-foreground">
                    {t.locations?.morningtonLocation?.locationDetails || 'Everything you need to know about our Mornington consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Nepean Specialist Centre<br />
                      1050 Nepean Highway<br />
                      MORNINGTON VIC 3931
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 5975 4583
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">{t.locations?.morningtonLocation?.consultingHoursDetails || 'Tuesday & Thursday: 9:00 AM - 5:00 PM'}</span>
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.locations?.morningtonLocation?.consultationsByAppointment || 'Consultations are by appointment only. Please call our office to schedule an appointment.'}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Note:</span> {t.locations?.morningtonLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.locations?.morningtonLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.morningtonLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9!2d145.0358!3d-38.2298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d7e8935c0f%3A0x5045675218ccd90!2s1050%20Nepean%20Hwy%2C%20Mornington%20VIC%203931!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mornington Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.location || 'Location'}</h3>
                    <p className="text-muted-foreground mb-4">
                      <a href="https://nepeanspecialistgroup.com.au/locations/mornington-specialist-centre" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mornington Specialist Centre</a> {t.locations?.morningtonLocation?.locationDetails1 || 'is conveniently situated at 1050 Nepean Highway in the heart of Victoria\'s Mornington Peninsula, 60 minutes by car south-east of Melbourne. Other locations are available for urgent appointments, including Frankston and Dandenong.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.diagnosticFacilities || 'Diagnostic Facilities'}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.locations?.morningtonLocation?.diagnosticFacilitiesDetails1 || 'The neurosurgical and spinal diagnostic imaging services in Mornington include'} <a href="https://i-med.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">I-MED Radiology</a> {t.locations?.morningtonLocation?.diagnosticFacilitiesDetails1 ? '' : 'and'} <a href="https://visionradiology.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Vision Radiology</a>. {t.locations?.morningtonLocation?.diagnosticFacilitiesDetails1 ? '' : 'All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient\'s convenience.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.morningtonLocation?.diagnosticFacilitiesDetails2 || 'Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.gettingHere || 'Getting Here'}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.locations?.morningtonLocation?.byPublicTransport || 'By Public Transport'}</h4>
                        <p className="text-muted-foreground">
                          {t.locations?.morningtonLocation?.byPublicTransportDetails || 'The Nepean Specialist Centre is accessible via bus services that stop on Nepean Highway. Several bus routes service the area, connecting Mornington to surrounding suburbs and Frankston train station.'}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-2">{t.locations?.morningtonLocation?.parkingAndDisabledAccess || 'Parking and Disabled Access'}</h4>
                        <p className="text-muted-foreground">
                          <a href="https://www.nepeancardiology.com.au/locations/mornington" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mornington Specialist Centre</a> {t.locations?.morningtonLocation?.parkingAndDisabledAccessDetails || 'has plenty of onsite free parking available for patients. Nepean Highway Service Road serves as the main entrance to the parking area, and disabled parking is available close to the main entrance.'}
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
              <h2 className="text-3xl font-bold mb-4">{t.locations?.morningtonLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.morningtonLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.morningtonLocation?.therapeuticInterventions?.description || 'Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, Dr Aliashkevich collaborates closely with other specialists in Frankston and Mornington Peninsula to develop a tailored therapeutic plan designed to address your specific needs.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.morningtonLocation?.facilities?.title || 'Our Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.morningtonLocation?.facilities?.subtitle || 'Specialist care in a welcoming and comfortable environment'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.morningtonLocation?.facilities?.description || 'Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment and aim to deliver ethical and professional services to improve the quality of doctor-patient interactions.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.facilities?.consultingRooms?.title || 'Comfortable Consulting Rooms'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.facilities?.consultingRooms?.description || 'Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members. Hand sanitisers are available in all consulting and waiting spaces.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.facilities?.waitingSpace?.title || 'Convenient Waiting Space'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.facilities?.waitingSpace?.description || 'The waiting areas are designed and fitted out with the patient\'s experience in mind. They convey neatness and a warm and welcoming feeling to help patients feel comfortable and at ease. Wider seats allow for separation from strangers, room for personal belongings, child prams and adequate support. The seating and spacing elements allow for privacy and safety. Knowing how valuable is our patients\' time, we take care to keep the waiting period as short as possible and make the waiting area as convenient as possible.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.facilities?.accessibleEnvironment?.title || 'Accessible Environment'}</h3>
                <p className="text-muted-foreground">
                  <a href="https://nepeanspecialistgroup.com.au/locations/mornington-specialist-centre" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mornington Specialist Centre</a> {t.locations?.morningtonLocation?.facilities?.accessibleEnvironment?.description || 'provides all services accessible to individuals with disabilities. It features a no-barrier environment to guarantee full mobility. Our friendly staff can assist with all examinations that require special positioning. Hand sanitisers are available in all consulting and waiting spaces.'}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/neurosurgery-mornington-specialist-centre-reception-consulting.jpg"
                  alt="Mornington Specialist Centre Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/neurosurgery-mornington-specialist-centre-waiting-area-consulting.jpg"
                  alt="Mornington Specialist Centre Waiting Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/neurosurgery-mornington-specialist-centre-entrance-consulting.jpg"
                  alt="Mornington Specialist Centre Entrance"
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
              <h2 className="text-3xl font-bold mb-4">{t.morningtonLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.morningtonLocation?.nearbyAmenities?.subtitle || 'Convenient local amenities for patients visiting our Mornington location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.morningtonLocation?.nearbyAmenities?.description ||
                  'Our Mornington consulting location is situated in a convenient area with a variety of amenities nearby. ' +
                  'Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you\'re in the area, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.morningtonLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Winey Cow</span> - {t.morningtonLocation?.nearbyAmenities?.cafesRestaurants?.wineyCow?.split(' - ')[1] ||
                        'A popular cafe offering excellent coffee and a variety of breakfast and lunch options, located just a short drive from our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">DOC Mornington</span> - {t.morningtonLocation?.nearbyAmenities?.cafesRestaurants?.docMornington?.split(' - ')[1] ||
                        'A well-known Italian restaurant offering quality meals in a relaxed setting.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Main Street Cafes</span> - {t.morningtonLocation?.nearbyAmenities?.cafesRestaurants?.mainStreetCafes?.split(' - ')[1] ||
                        'A variety of dining options along Mornington\'s Main Street, from casual cafes to more upscale restaurants.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">The Rocks Mornington</span> - {t.morningtonLocation?.nearbyAmenities?.cafesRestaurants?.theRocksMornington?.split(' - ')[1] ||
                        'A beachfront restaurant offering quality meals with stunning views of Port Phillip Bay.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.morningtonLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Central Shopping Centre</span> - {t.morningtonLocation?.nearbyAmenities?.shopping?.morningtonCentralShoppingCentre?.split(' - ')[1] ||
                        'A shopping center with a variety of retail stores, supermarkets, and services, located within easy reach of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Main Street Shopping Precinct</span> - {t.morningtonLocation?.nearbyAmenities?.shopping?.mainStreetShoppingPrecinct?.split(' - ')[1] ||
                        'A vibrant shopping strip with boutique stores, cafes, and services.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Pharmacy</span> - {t.morningtonLocation?.nearbyAmenities?.shopping?.morningtonPharmacy?.split(' - ')[1] ||
                        'Conveniently located pharmacy for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Bentons Square Shopping Centre</span> - {t.morningtonLocation?.nearbyAmenities?.shopping?.bentonsSquareShoppingCentre?.split(' - ')[1] ||
                        'A shopping center just a short drive away with additional retail options.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.morningtonLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Park</span> - {t.morningtonLocation?.nearbyAmenities?.parksRecreation?.morningtonPark?.split(' - ')[1] ||
                        'A beautiful park with walking paths, gardens, and open spaces, perfect for a relaxing stroll before or after your appointment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Beach</span> - {t.morningtonLocation?.nearbyAmenities?.parksRecreation?.morningtonBeach?.split(' - ')[1] ||
                        'A scenic beach with walking paths and recreational areas, offering a peaceful natural environment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mills Beach</span> - {t.morningtonLocation?.nearbyAmenities?.parksRecreation?.millsBeach?.split(' - ')[1] ||
                        'A popular beach with walking paths and recreational areas, perfect for relaxation.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Peninsula Regional Gallery</span> - {t.morningtonLocation?.nearbyAmenities?.parksRecreation?.morningtonPeninsulaRegionalGallery?.split(' - ')[1] ||
                        'A cultural venue showcasing art exhibitions and events.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.morningtonLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Library</span> - {t.morningtonLocation?.nearbyAmenities?.otherAmenities?.morningtonLibrary?.split(' - ')[1] ||
                        'A community library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.morningtonLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Several banking options within walking distance of our consulting rooms.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Mornington Post Office</span> - {t.morningtonLocation?.nearbyAmenities?.otherAmenities?.morningtonPostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Peninsula Community Theatre</span> - {t.morningtonLocation?.nearbyAmenities?.otherAmenities?.peninsulaCommunityTheatre?.split(' - ')[1] ||
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
              <h2 className="text-3xl font-bold mb-4">{t.locations?.morningtonLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.morningtonLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.morningtonLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Mornington location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/peninsula-private-hospital-consulting-suites-ales-aliashkevich-neurosurgeon-spine-surgeon.jpg"
                    alt="Peninsula Private Hospital Consulting Suites"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.otherConsultingLocations?.frankston?.title || 'Frankston'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.otherConsultingLocations?.frankston?.description || 'Dr. Aliashkevich consults at Peninsula Private Hospital in Frankston, providing specialized neurosurgical care to patients on the Mornington Peninsula and surrounding areas.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.locations?.morningtonLocation?.otherConsultingLocations?.frankston?.address?.split('：')[1] || '525 McClelland Drive, Frankston VIC 3199'}<br />
                  <span className="font-medium">Phone:</span> {t.locations?.morningtonLocation?.otherConsultingLocations?.frankston?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/frankston">{t.locations?.morningtonLocation?.otherConsultingLocations?.frankston?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.otherConsultingLocations?.dandenong?.title || 'Dandenong'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.otherConsultingLocations?.dandenong?.description || 'The Dandenong Neurology and Specialist Group provides convenient access to neurosurgical care for patients in Melbourne\'s southeastern suburbs. Dr. Aliashkevich consults here regularly.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.locations?.morningtonLocation?.otherConsultingLocations?.dandenong?.address?.split('：')[1] || '136 David Street, Dandenong VIC 3175'}<br />
                  <span className="font-medium">Phone:</span> {t.locations?.morningtonLocation?.otherConsultingLocations?.dandenong?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/dandenong">{t.locations?.morningtonLocation?.otherConsultingLocations?.dandenong?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.otherConsultingLocations?.surreyHills?.title || 'Surrey Hills'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.otherConsultingLocations?.surreyHills?.description || 'The miNEURO Consulting Suites in Surrey Hills are Dr. Aliashkevich\'s main practice location. These modern facilities offer comprehensive neurosurgical consultations in a central, easily accessible location.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.locations?.morningtonLocation?.otherConsultingLocations?.surreyHills?.address?.split('：')[1] || 'Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127'}<br />
                  <span className="font-medium">Phone:</span> {t.locations?.morningtonLocation?.otherConsultingLocations?.surreyHills?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/surrey-hills">{t.locations?.morningtonLocation?.otherConsultingLocations?.surreyHills?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.morningtonLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.morningtonLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich operates at these hospitals near Mornington'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.morningtonLocation?.nearbyHospitals?.description || 'In addition to consultations at the Nepean Specialist Centre, Dr. Aliashkevich performs surgeries at several hospitals in the region. These facilities are equipped with state-of-the-art technology for neurosurgical and spinal procedures.'}
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.nearbyHospitals?.peninsulaPrivateHospital?.title || 'Peninsula Private Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.nearbyHospitals?.peninsulaPrivateHospital?.description || 'Peninsula Private Hospital is a leading private healthcare facility on the Mornington Peninsula, offering a comprehensive range of surgical and medical services. Dr. Aliashkevich performs neurosurgical and spinal procedures at this hospital, which is equipped with advanced technology for complex surgeries.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.nearbyHospitals?.peninsulaPrivateHospital?.address || '<span className="font-medium">Address:</span> 525 McClelland Drive, Frankston VIC 3199'}<br />
                  {t.locations?.morningtonLocation?.nearbyHospitals?.peninsulaPrivateHospital?.phone || '<span className="font-medium">Phone:</span> (03) 9788 3333'}
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.nearbyHospitals?.baysHospital?.title || 'The Bays Hospital'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.nearbyHospitals?.baysHospital?.description || 'The Bays Hospital in Mornington is a not-for-profit community hospital providing a wide range of medical and surgical services. Dr. Aliashkevich performs selected neurosurgical procedures at this facility, which offers personalized care in a community-focused environment.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.nearbyHospitals?.baysHospital?.address || '<span className="font-medium">Address:</span> Vale Street, Mornington VIC 3931'}<br />
                  {t.locations?.morningtonLocation?.nearbyHospitals?.baysHospital?.phone || '<span className="font-medium">Phone:</span> (03) 5975 2009'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance and Surgery Funding Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.locations?.morningtonLocation?.insuranceAndFunding?.title || 'Insurances and Surgery Funding'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.morningtonLocation?.insuranceAndFunding?.subtitle || 'TAC and WorkCover Welcome'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.insuranceAndFunding?.privateHealthInsurance?.title || 'Private Health Insurance'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.privateHealthInsurance?.description1 || 'Patients must have valid private health/hospital insurance with no waiting periods. Extras are not applicable for inpatient hospital treatment. The health funds don\'t contribute to consultation and outpatient treatment fees.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.privateHealthInsurance?.description2 || 'Please note that so-called basic and bronze covers may not cover spinal surgery or neurosurgery in private hospitals. Cervical and lumbar artificial disc replacement (arthroplasty) falls into the Joint Replacement Category, which is usually included in Silver and Gold policies. Patients need to check their policy for coverage levels, exclusions, and inclusions.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.insuranceAndFunding?.tacAndWorkCover?.title || 'TAC and WorkCover'}</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>TAC:</strong> {t.locations?.morningtonLocation?.insuranceAndFunding?.tacAndWorkCover?.tac || 'Claim details and consultation approval from TAC. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>WorkCover:</strong> {t.locations?.morningtonLocation?.insuranceAndFunding?.tacAndWorkCover?.workCover || 'Claim details and consultation approval from the WorkSafe insurer. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.'}
                </p>
                <p className="text-muted-foreground">
                  <strong>Veteran Affairs/Military:</strong> {t.locations?.morningtonLocation?.insuranceAndFunding?.tacAndWorkCover?.veteranAffairs || 'Both "Gold Card" and "White Card" patients are eligible. For "White Card" holders, a condition must be covered by DVA.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.insuranceAndFunding?.uninsuredPatients?.title || 'Uninsured Patients'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.uninsuredPatients?.description1 || 'Self-funded patients can be provided with a quote for all surgical, anaesthetic and hospital costs. For example, the minimum amount required for a single-segment spinal surgery not requiring any implants in a private hospital in Victoria can be around $15,000 – $20,000.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.uninsuredPatients?.description2 || 'This amount may include hospital and operating theatre fees, surgeon, assistant, anaesthetist, specialised care from a perioperative physician, and HDU or ICU care. Dr Aliashkevich has no affiliation with a public hospital, so unless a patient is willing to pay for surgery in a private hospital, he cannot undertake surgery on someone without appropriate insurance. For all other uninsured referrals, please get in touch with the closest public hospital directly.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.morningtonLocation?.insuranceAndFunding?.patientsPrivacy?.title || 'Patients\' Privacy'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient\'s privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients\' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.patientsPrivacy?.description2 || 'Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners. Dr Aliashkevich will never release any information to insurers or other parties without consent.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.morningtonLocation?.insuranceAndFunding?.patientsPrivacy?.description3 || 'At the end of every patient\'s visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.locations?.morningtonLocation?.readyToSchedule?.title || 'Ready to Schedule an Appointment?'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.locations?.morningtonLocation?.readyToSchedule?.description || 'Don\'t wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with Dr Ales Aliashkevich at Mornington Specialist Centre and take the first step toward improved health and well-being. We\'re here to support you every step of the way to recovery.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.locations?.morningtonLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.locations?.morningtonLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.locations?.morningtonLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StandardPageLayout>
  );
};

MorningtonLocation.displayName = 'MorningtonLocation';

export default MorningtonLocation;
