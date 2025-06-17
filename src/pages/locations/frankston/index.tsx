import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from 'lucide-react';
import { useEffect } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FrankstonLocation: React.FC = () => {
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
                <h1 className="text-3xl font-bold mb-6">{t.locations?.frankstonLocation?.expertNeurosurgery || 'Expert Neurosurgery and Spine Care'}</h1>
                <h2 className="text-xl text-primary mb-4">{t.locations?.frankstonLocation?.peninsulaPrivateHospital || 'PENINSULA PRIVATE HOSPITAL'}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.locations?.frankstonLocation?.subtitle || 'Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, neurosurgeon and spine surgeon, has been providing care to patients in Frankston and on Mornington Peninsula since 2012. He offers consultations, procedures and operations at Peninsula Private Hospital, with expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions.'}
                </p>
                <p className="text-muted-foreground">
                  {t.locations?.frankstonLocation?.expertise || 'Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout the Frankston and Mornington Peninsula region, eliminating the need to travel to Melbourne for specialized care.'}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/peninsula-private-hospital-entrance-consulting-ales-aliashkevich-neurosurgeon-spine.jpg"
                    alt="Peninsula Private Hospital Entrance"
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
                    {t.locations?.frankstonLocation?.locationDetails || 'Everything you need to know about our Frankston consulting location'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.address || 'Address'}</h3>
                    <p className="text-muted-foreground">
                      Peninsula Private Hospital<br />
                      Mezzanine Consulting Suites<br />
                      525 McClelland Drive<br />
                      FRANKSTON VIC 3199
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.contactInformation || 'Contact Information'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Phone:</span> 03 9781 4133
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Fax:</span> 03 99236688
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> info@mineuro.com.au
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.consultingHours || 'Consulting Hours'}</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Monday and Wednesday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Consultations are by appointment only. Please call our office to schedule an appointment.
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">{'Note'}:</span> {t.locations?.frankstonLocation?.urgentAppointments || 'Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.'}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.appointmentProcess || 'Appointment Process'}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.locations?.frankstonLocation?.appointmentProcessDetails1 || 'Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.'}
                    </p>
                    <p className="text-muted-foreground">
                      {t.locations?.frankstonLocation?.appointmentProcessDetails2 || 'All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9!2d145.1823!3d-38.1452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d7e8935c0f%3A0x5045675218ccd90!2s525%20McClelland%20Dr%2C%20Frankston%20VIC%203199!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Frankston Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.gettingHere || 'Getting Here'}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2">{t.locations?.frankstonLocation?.byPublicTransport || 'By Public Transport'}</h4>
                      <p className="text-muted-foreground">
                        <a href="https://www.peninsulaph.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{t.locations?.frankstonLocation?.peninsulaPrivateHospital || 'Peninsula Private Hospital'}</a> {t.locations?.frankstonLocation?.byPublicTransportDetails || 'is accessible via bus services that stop nearby. Several bus routes connect the hospital to Frankston train station and surrounding suburbs.'}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2">{t.locations?.frankstonLocation?.byCar || 'By Car'}</h4>
                      <p className="text-muted-foreground">
                        Free on-site parking is available for patients at <a href="https://www.peninsulaph.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Peninsula Private Hospital</a>. McClelland Drive serves as the main entrance to the parking area, and disabled parking is available close to the main entrance. The hospital is easily accessible from Cranbourne Road and McClelland Drive, with convenient access from the Mornington Peninsula Freeway.
                      </p>
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
              <h2 className="text-3xl font-bold mb-4">{t.locations?.frankstonLocation?.therapeuticInterventions?.title || 'Therapeutic Interventions'}</h2>
              <p className="text-muted-foreground">
                {t.locations?.frankstonLocation?.therapeuticInterventions?.subtitle || 'Tailored treatment plans for your specific needs'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.locations?.frankstonLocation?.therapeuticInterventions?.description || 'Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, Dr Aliashkevich collaborates closely with other specialists in Frankston and Mornington Peninsula to develop a tailored therapeutic plan designed to address your specific needs.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.therapeuticInterventions?.interventionalProcedures?.title || 'Interventional Procedures'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.frankstonLocation?.therapeuticInterventions?.interventionalProcedures?.description || 'In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.therapeuticInterventions?.physicalTherapy?.title || 'Physical Therapy and Hydrotherapy'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.frankstonLocation?.therapeuticInterventions?.physicalTherapy?.description || 'Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.locations?.frankstonLocation?.therapeuticInterventions?.rehabilitation?.title || 'Rehabilitation'}</h3>
                <p className="text-muted-foreground">
                  {t.locations?.frankstonLocation?.therapeuticInterventions?.rehabilitation?.description || 'Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Amenities Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.frankstonLocation?.nearbyAmenities?.title || 'Nearby Amenities'}</h2>
              <p className="text-muted-foreground">
                {t.frankstonLocation?.nearbyAmenities?.subtitle || 'Convenient local amenities for patients visiting our Frankston location'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.frankstonLocation?.nearbyAmenities?.description ||
                  'Our Frankston consulting location at Peninsula Private Hospital is situated in a convenient area with a variety of amenities nearby. ' +
                  'Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you\'re in the area, ' +
                  'you\'ll find everything you need within easy reach.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.nearbyAmenities?.cafesRestaurants?.title || 'Cafes & Restaurants'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Peninsula Private Hospital Cafe</span> - {t.frankstonLocation?.nearbyAmenities?.cafesRestaurants?.peninsulaPrivateHospitalCafe?.split(' - ')[1] ||
                        'Located within the hospital, offering a range of fresh food, snacks, and beverages for patients and visitors.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Waves on the Beach</span> - {t.frankstonLocation?.nearbyAmenities?.cafesRestaurants?.wavesOnTheBeach?.split(' - ')[1] ||
                        'A beachfront restaurant offering quality meals with stunning views, just a short drive from the hospital.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Waterfront Cafes</span> - {t.frankstonLocation?.nearbyAmenities?.cafesRestaurants?.frankstonWaterfrontCafes?.split(' - ')[1] ||
                        'A variety of cafes along the Frankston waterfront offering diverse dining options with beautiful bay views.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sofia's Restaurant</span> - {t.frankstonLocation?.nearbyAmenities?.cafesRestaurants?.sofiasRestaurant?.split(' - ')[1] ||
                        'A popular local restaurant known for its quality meals and welcoming atmosphere.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.nearbyAmenities?.shopping?.title || 'Shopping'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Bayside Shopping Centre</span> - {t.frankstonLocation?.nearbyAmenities?.shopping?.baysideShoppingCentre?.split(' - ')[1] ||
                        'A major shopping center with a wide range of retail stores, supermarkets, and services, located in central Frankston.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Karingal Hub Shopping Centre</span> - {t.frankstonLocation?.nearbyAmenities?.shopping?.karingalHubShoppingCentre?.split(' - ')[1] ||
                        'A shopping center offering various retail options and services, just a short drive from the hospital.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Pharmacy</span> - {t.frankstonLocation?.nearbyAmenities?.shopping?.frankstonPharmacy?.split(' - ')[1] ||
                        'Conveniently located pharmacy for prescription fills and health products.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Wells Street Shopping Precinct</span> - {t.frankstonLocation?.nearbyAmenities?.shopping?.wellsStreetShoppingPrecinct?.split(' - ')[1] ||
                        'A variety of specialty shops and services in Frankston\'s main shopping area.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.nearbyAmenities?.parksRecreation?.title || 'Parks & Recreation'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Foreshore</span> - {t.frankstonLocation?.nearbyAmenities?.parksRecreation?.frankstonForeshore?.split(' - ')[1] ||
                        'A beautiful coastal area with walking paths, gardens, and open spaces, perfect for a relaxing stroll before or after your appointment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Beauty Park</span> - {t.frankstonLocation?.nearbyAmenities?.parksRecreation?.beautyPark?.split(' - ')[1] ||
                        'A scenic park with walking paths and gardens, offering a peaceful natural environment.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Beach</span> - {t.frankstonLocation?.nearbyAmenities?.parksRecreation?.frankstonBeach?.split(' - ')[1] ||
                        'A popular beach with walking paths and recreational areas, perfect for relaxation.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Peninsula Aquatic Recreation Centre</span> - {t.frankstonLocation?.nearbyAmenities?.parksRecreation?.peninsulaAquaticRecreationCentre?.split(' - ')[1] ||
                        'A modern aquatic facility with swimming pools and fitness programs.'}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.nearbyAmenities?.otherAmenities?.title || 'Other Amenities'}</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Library</span> - {t.frankstonLocation?.nearbyAmenities?.otherAmenities?.frankstonLibrary?.split(' - ')[1] ||
                        'A community library offering a quiet space for reading and research.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - {t.frankstonLocation?.nearbyAmenities?.otherAmenities?.banksATMs?.split(' - ')[1] ||
                        'Several banking options within central Frankston, a short drive from the hospital.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Post Office</span> - {t.frankstonLocation?.nearbyAmenities?.otherAmenities?.frankstonPostOffice?.split(' - ')[1] ||
                        'Conveniently located for postal services and bill payments.'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Frankston Arts Centre</span> - {t.frankstonLocation?.nearbyAmenities?.otherAmenities?.frankstonArtsCentre?.split(' - ')[1] ||
                        'A performing arts venue hosting various cultural events and performances.'}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.frankstonLocation?.hospitalFacilities?.title || 'Hospital Facilities'}</h2>
              <p className="text-muted-foreground">
                {t.frankstonLocation?.hospitalFacilities?.subtitle || 'Specialist care in a welcoming and comfortable environment'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.frankstonLocation?.hospitalFacilities?.description || 'Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.hospitalFacilities?.consultingRooms?.title || 'Comfortable Consulting Rooms'}</h3>
                <p className="text-muted-foreground">
                  {t.frankstonLocation?.hospitalFacilities?.consultingRooms?.description || 'Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members. Hand sanitisers are available in all consulting and waiting spaces.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.hospitalFacilities?.operatingTheaters?.title || 'Advanced Operating Theaters'}</h3>
                <p className="text-muted-foreground">
                  {t.frankstonLocation?.hospitalFacilities?.operatingTheaters?.description || 'Peninsula Private Hospital features state-of-the-art operating theaters equipped with the latest surgical technology. These facilities enable Dr. Aliashkevich to perform complex neurosurgical and spinal procedures with precision and safety, including minimally invasive techniques that promote faster recovery.'}
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
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.hospitalFacilities?.diagnosticFacilities?.title || 'Diagnostic Facilities'}</h3>
                <p className="text-muted-foreground">
                  The neurosurgical and spinal diagnostic imaging services in Frankston include <a href="https://i-med.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">I-MED Radiology</a>. All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient's convenience. Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/peninsula-private-hospital-reception-area-consulting-ales-aliashkevich-neurosurgeon-spine-surgeon.jpg"
                  alt="Peninsula Private Hospital Reception"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/peninsula-private-hospital-consulting-suites-ales-aliashkevich-neurosurgeon-spine-surgeon.jpg"
                  alt="Peninsula Private Hospital Consulting Suites"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/peninsula-private-hospital-consulting-ales-aliashkevich-neurosurgeon-spine-surgeon.jpg"
                  alt="Peninsula Private Hospital Consulting Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other Consulting Locations Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.frankstonLocation?.otherConsultingLocations?.title || 'Other Consulting Locations'}</h2>
              <p className="text-muted-foreground">
                {t.frankstonLocation?.otherConsultingLocations?.subtitle || 'Dr. Aliashkevich also consults at these nearby locations'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.frankstonLocation?.otherConsultingLocations?.description || 'For your convenience, Dr. Aliashkevich consults at multiple locations across Melbourne. If the Frankston location is not suitable for you, appointments can be arranged at these alternative locations.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                  <img
                    src="/images/neurosurgery-mornington-specialist-centre-entrance-consulting.jpg"
                    alt="Mornington Specialist Centre"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.otherConsultingLocations?.mornington?.title || 'Mornington'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.frankstonLocation?.otherConsultingLocations?.mornington?.description || 'Dr. Aliashkevich consults at the Nepean Specialist Centre in Mornington, providing specialized neurosurgical care to patients on the Mornington Peninsula.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.frankstonLocation?.otherConsultingLocations?.mornington?.address?.split('：')[1] || '1050 Nepean Highway, Mornington VIC 3931'}<br />
                  <span className="font-medium">Phone:</span> {t.frankstonLocation?.otherConsultingLocations?.mornington?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/mornington">{t.frankstonLocation?.otherConsultingLocations?.mornington?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.otherConsultingLocations?.dandenong?.title || 'Dandenong'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.frankstonLocation?.otherConsultingLocations?.dandenong?.description || 'The Dandenong Neurology and Specialist Group provides convenient access to neurosurgical care for patients in Melbourne\'s southeastern suburbs. Dr. Aliashkevich consults here regularly.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.frankstonLocation?.otherConsultingLocations?.dandenong?.address?.split('：')[1] || '136 David Street, Dandenong VIC 3175'}<br />
                  <span className="font-medium">Phone:</span> {t.frankstonLocation?.otherConsultingLocations?.dandenong?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/dandenong">{t.frankstonLocation?.otherConsultingLocations?.dandenong?.viewDetails || 'View Details'}</Link>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.otherConsultingLocations?.surreyHills?.title || 'Surrey Hills'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.frankstonLocation?.otherConsultingLocations?.surreyHills?.description || 'The miNEURO Consulting Suites in Surrey Hills are Dr. Aliashkevich\'s main practice location. These modern facilities offer comprehensive neurosurgical consultations in a central, easily accessible location.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Address:</span> {t.frankstonLocation?.otherConsultingLocations?.surreyHills?.address?.split('：')[1] || 'Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127'}<br />
                  <span className="font-medium">Phone:</span> {t.frankstonLocation?.otherConsultingLocations?.surreyHills?.phone?.split('：')[1] || '03 9008 4200'}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations/surrey-hills">{t.frankstonLocation?.otherConsultingLocations?.surreyHills?.viewDetails || 'View Details'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.frankstonLocation?.conditionsTreated?.title || 'Conditions Treated'}</h2>
              <p className="text-muted-foreground">
                {t.frankstonLocation?.conditionsTreated?.subtitle || 'Dr. Aliashkevich treats a wide range of neurosurgical and spinal conditions at Peninsula Private Hospital'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.frankstonLocation?.conditionsTreated?.description || 'At his Frankston consulting location, Dr. Aliashkevich provides expert assessment and treatment for various neurosurgical and spinal conditions. He specializes in minimally invasive approaches that promote faster recovery and better outcomes.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.conditionsTreated?.spinalConditions?.title || 'Spinal Conditions'}</h3>
                <ul className="text-muted-foreground list-none space-y-2">
                  {t.frankstonLocation?.conditionsTreated?.spinalConditions?.conditions ?
                    t.frankstonLocation.conditionsTreated.spinalConditions.conditions?.map((condition: any, index: any) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{condition}</span>
                      </li>
                    )) :
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Disc herniations and bulges</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Spinal stenosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Degenerative disc disease</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Spondylolisthesis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Spinal fractures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Spinal tumours</span>
                      </li>
                    </>
                  }
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.conditionsTreated?.brainConditions?.title || 'Brain Conditions'}</h3>
                <ul className="text-muted-foreground list-none space-y-2">
                  {t.frankstonLocation?.conditionsTreated?.brainConditions?.conditions ?
                    t.frankstonLocation.conditionsTreated.brainConditions.conditions?.map((condition: any, index: any) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{condition}</span>
                      </li>
                    )) :
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Brain tumours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Hydrocephalus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Trigeminal neuralgia</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Cerebral aneurysms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Arteriovenous malformations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Traumatic brain injuries</span>
                      </li>
                    </>
                  }
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.conditionsTreated?.nerveConditions?.title || 'Nerve Conditions'}</h3>
                <ul className="text-muted-foreground list-none space-y-2">
                  {t.frankstonLocation?.conditionsTreated?.nerveConditions?.conditions ?
                    t.frankstonLocation.conditionsTreated.nerveConditions.conditions?.map((condition: any, index: any) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{condition}</span>
                      </li>
                    )) :
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Carpal tunnel syndrome</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Ulnar nerve entrapment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Peripheral nerve tumours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Nerve injuries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Brachial plexus injuries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Nerve compression syndromes</span>
                      </li>
                    </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.frankstonLocation?.nearbyHospitals?.title || 'Nearby Hospitals'}</h2>
              <p className="text-muted-foreground">
                {t.frankstonLocation?.nearbyHospitals?.subtitle || 'Dr. Aliashkevich performs surgery at these hospitals'}
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t.frankstonLocation?.nearbyHospitals?.description || 'Dr. Aliashkevich performs surgery at multiple hospitals across Melbourne, including the following facilities. These hospitals are equipped with state-of-the-art technology for neurosurgical and spine procedures.'}
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

        {/* Insurance and Surgery Funding Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.frankstonLocation?.insuranceAndFunding?.title || 'Insurances and Surgery Funding'}</h2>
              <p className="text-muted-foreground">
                {t.frankstonLocation?.insuranceAndFunding?.subtitle || 'TAC and WorkCover Welcome'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.insuranceAndFunding?.privateHealthInsurance?.title || 'Private Health Insurance'}</h3>
                <p className="text-muted-foreground mb-4">
                  Patients must have valid private health/hospital insurance with no waiting periods. Extras are not applicable for inpatient hospital treatment. The health funds don&apos;t contribute to consultation and outpatient treatment fees.
                </p>
                <p className="text-muted-foreground">
                  {t.frankstonLocation?.insuranceAndFunding?.privateHealthInsurance?.description2 || 'Please note that so-called basic and bronze covers may not cover spinal surgery or neurosurgery in private hospitals. Cervical and lumbar artificial disc replacement (arthroplasty) falls into the Joint Replacement Category, which is usually included in Silver and Gold policies. Patients need to check their policy for coverage levels, exclusions, and inclusions.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.insuranceAndFunding?.tacAndWorkCover?.title || 'TAC and WorkCover'}</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>TAC:</strong> {t.frankstonLocation?.insuranceAndFunding?.tacAndWorkCover?.tac || 'Claim details and consultation approval from TAC. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>WorkCover:</strong> {t.frankstonLocation?.insuranceAndFunding?.tacAndWorkCover?.workCover || 'Claim details and consultation approval from the WorkSafe insurer. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.'}
                </p>
                <p className="text-muted-foreground">
                  <strong>Veteran Affairs/Military:</strong> {t.frankstonLocation?.insuranceAndFunding?.tacAndWorkCover?.veteranAffairs || 'Both "Gold Card" and "White Card" patients are eligible. For "White Card" holders, a condition must be covered by DVA.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.insuranceAndFunding?.uninsuredPatients?.title || 'Uninsured Patients'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.frankstonLocation?.insuranceAndFunding?.uninsuredPatients?.description1 || 'Self-funded patients can be provided with a quote for all surgical, anaesthetic and hospital costs. For example, the minimum amount required for a single-segment spinal surgery not requiring any implants in a private hospital in Victoria can be around $15,000 to $20,000.'}
                </p>
                <p className="text-muted-foreground">
                  {t.frankstonLocation?.insuranceAndFunding?.uninsuredPatients?.description2 || 'This amount may include hospital and operating theatre fees, surgeon, assistant, anaesthetist, specialised care from a perioperative physician, and HDU or ICU care. Dr Aliashkevich has no affiliation with a public hospital, so unless a patient is willing to pay for surgery in a private hospital, he cannot undertake surgery on someone without appropriate insurance. For all other uninsured referrals, please get in touch with the closest public hospital directly.'}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.frankstonLocation?.insuranceAndFunding?.patientsPrivacy?.title || 'Patients Privacy'}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.frankstonLocation?.insuranceAndFunding?.patientsPrivacy?.description1 || 'Dr Aliashkevich pays great respect to patient privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners. <a href="https://www.peninsulaph.com.au/Specialists/Specialists/peninsula-private-hospital/neurosurgery/105163/dr-ales-aliashkevich" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> will never release any information to insurers or other parties without consent.
                </p>
                <p className="text-muted-foreground">
                  {t.frankstonLocation?.insuranceAndFunding?.patientsPrivacy?.description3 || 'At the end of every patient visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.'}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">{t.frankstonLocation?.readyToSchedule?.title || 'Ready to Schedule an Appointment?'}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t.frankstonLocation?.readyToSchedule?.description || 'Do not wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with Dr Ales Aliashkevich at Peninsula Private Hospital and take the first step toward improved health and well-being. We are here to support you every step of the way to recovery.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.frankstonLocation?.readyToSchedule?.bookAppointment || 'Book an Appointment'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">{t.frankstonLocation?.readyToSchedule?.viewAllLocations || 'View All Locations'}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.frankstonLocation?.readyToSchedule?.contactUs || 'Contact Us'}</Link>
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

FrankstonLocation.displayName = 'FrankstonLocation';

export default FrankstonLocation;
