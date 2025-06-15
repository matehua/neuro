import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BundooraLocation() {

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
                <h1 className="text-3xl font-bold mb-6">Expert Neurosurgical Consultations in Bundoora</h1>
                <h2 className="text-xl text-primary mb-4">Helping You Live Pain-Free</h2>
                <p className="text-muted-foreground mb-4">
                  Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Bundoora and Northern Melbourne suburbs area since 2012. He offers consultations, procedures and operations at major Melbourne Hospitals, with expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions.
                </p>
                <p className="text-muted-foreground">
                  Dr. Aliashkevich specializes in treating radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems. This location provides convenient access to expert neurosurgical care for patients throughout Melbourne's northern region, eliminating the need to travel to central Melbourne for specialized care.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/bundoora-unihill-specialist-consulting-neurosurgery-reception-desk.jpg"
                    alt="Bundoora UniHill Consulting Suites"
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
                    Everything you need to know about our Bundoora consulting location
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Address</h3>
                    <p className="text-muted-foreground">
                      UniHill Specialist Consulting Suites<br />
                      Suite 32, Level 4<br />
                      240 Plenty Road<br />
                      BUNDOORA VIC 3083
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Contact Information</h3>
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
                    <h3 className="text-xl font-semibold mb-3 text-primary">Consulting Hours</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Monday to Friday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Consultations are by appointment only. Please call our office to schedule an appointment.
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Note:</span> Urgent appointments are available on request. Our staff will do their best to accommodate patients with urgent conditions as quickly as possible.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Appointment Process</h3>
                    <p className="text-muted-foreground mb-2">
                      Before your appointment, our office will liaise with your GP to obtain a referral and relevant medical information, including results of previous imaging and other investigations.
                    </p>
                    <p className="text-muted-foreground">
                      All new patients will be asked to fill out a detailed registration form to help us understand the nature and urgency of your problem. This information helps Dr. Aliashkevich prepare for your consultation and provide the most appropriate care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d145.0667!3d-37.7016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64f5c8b5c5c5b%3A0x5045675218ccd90!2s240%20Plenty%20Rd%2C%20Bundoora%20VIC%203083!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bundoora Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Location</h3>
                    <p className="text-muted-foreground mb-4">
                      UniHill Specialist Centre is conveniently situated at 240 Plenty Road in Bundoora. Other locations are available for urgent appointments, including Moonee Ponds, Sunbury and Heidelberg.
                    </p>
                    <p className="text-muted-foreground">
                      The consulting rooms are easily accessible by public transport, with tram (Route 86) that stops directly outside the building on Plenty Road. Several bus routes also service the area, connecting Bundoora to surrounding suburbs.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Diagnostic Facilities</h3>
                    <p className="text-muted-foreground mb-4">
                      The neurosurgical and spinal diagnostic imaging services in Bundoora include <a href="https://i-med.com.au/find-a-radiology-clinic/bundoora-radiology" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">IMED</a>, Capital Radiology and <a href="https://www.lakeimaging.com.au/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lake Imaging</a>. All the required radiological (MRI, SPECT, CT, ultrasound and X-rays) and neurophysiological (EMG and nerve conduction studies) investigations can be arranged for the patient's convenience.
                    </p>
                    <p className="text-muted-foreground">
                      Interventional radiology can also be arranged for image-guided local anaesthetic/steroid injections, medial branch blocks and provocative discography.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Getting Here</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium mb-2">By Public Transport</h4>
                        <p className="text-muted-foreground">
                          UniHill Consulting Suites are accessible via tram (Route 86) that stops directly outside the building on Plenty Road. Several bus routes also service the area, connecting Bundoora to surrounding suburbs.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-2">Parking and Disabled Access</h4>
                        <p className="text-muted-foreground">
                          Bundoora Consulting Rooms at UniHill Specialist Centre have plenty of onsite free parking available for patients. Disabled parking is available close to the main entrance. It features a no-barrier environment to guarantee full mobility for individuals with disabilities.
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
              <h2 className="text-3xl font-bold mb-4">Therapeutic Interventions</h2>
              <p className="text-muted-foreground">
                Tailored treatment plans for your specific needs
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Thorough evaluation and diagnosis, utilising advanced imaging techniques and neurophysiological testing, allows us to pinpoint the underlying cause of your symptoms. Once a diagnosis is established, Dr Aliashkevich collaborates closely with other specialists in Bundoora and Melbourne to develop a tailored therapeutic plan designed to address your specific needs.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Interventional Procedures</h3>
                <p className="text-muted-foreground">
                  In addition to traditional medical therapies, Dr Aliashkevich can offer a variety of minimally invasive interventional procedures to target pain and inflammation directly at the source, providing relief and promoting healing.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Physical Therapy and Hydrotherapy</h3>
                <p className="text-muted-foreground">
                  Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Rehabilitation</h3>
                <p className="text-muted-foreground">
                  Critical component for postoperative recovery to maximise function, independence, and quality of life. Dr. Aliashkevich works with rehabilitation specialists to ensure comprehensive care throughout your recovery journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
              <p className="text-muted-foreground">
                Specialist care in a welcoming and comfortable environment
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Dr Aliashkevich wants his patients to be fully engaged in their treatment process and have a good understanding of their neurosurgical conditions. Hence, the rooms are equipped with large displays to review and discuss the imaging and make important decisions about the treatment options and available alternatives. We believe partnering with patients in their care is a modern gold standard for medical treatment and aim to deliver ethical and professional services to improve the quality of doctor-patient interactions.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Comfortable Consulting Rooms</h3>
                <p className="text-muted-foreground">
                  Our neurosurgical consulting rooms are patient-centric, allowing them to feel comfortable and relaxed when discussing important health issues. Every examination room has an accessible adjustable-height exam table and sufficient clear floor space next to it. There is plenty of space for wheelchair access and capacity for accompanying persons and family members.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Convenient Waiting Space</h3>
                <p className="text-muted-foreground">
                  The waiting areas are designed and fitted out with the patient's experience in mind. They convey neatness and a warm and welcoming feeling to help patients feel comfortable and at ease. Wider seats allow for separation from strangers, room for personal belongings, child prams and adequate support. The seating and spacing elements allow for privacy and safety. Knowing how valuable is our patients' time, we take care to keep the waiting period as short as possible and make the waiting area as convenient as possible.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Welcoming Environment</h3>
                <p className="text-muted-foreground">
                  Bundoora Consulting Rooms at UniHill Specialist Centre provide all services accessible to individuals with disabilities. It features a no-barrier environment to guarantee full mobility. Our friendly staff can assist with all examinations that require special positioning. Hand sanitisers are available in all consulting and waiting spaces.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/bundoora-unihill-specialist-consulting-neurosurgery-reception-staff.jpg"
                  alt="Bundoora UniHill Reception Staff"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/bundoora-unihill-specialist-consulting-neurosurgery-desk.jpg"
                  alt="Bundoora UniHill Consulting Desk"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/bundoora-unihill-specialist-consulting-neurosurgery-room.jpg"
                  alt="Bundoora UniHill Consulting Room"
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
              <h2 className="text-3xl font-bold mb-4">Nearby Amenities</h2>
              <p className="text-muted-foreground">
                Convenient local amenities for patients visiting our Bundoora location
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Our Bundoora consulting location at UniHill Specialist Centre is situated in a convenient area with a variety of amenities nearby. Whether you need to grab a coffee before your appointment, find a place for lunch afterward, or run errands while you're in the area, you'll find everything you need within easy reach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cafes & Restaurants</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Schnitz</span> - A popular restaurant offering quality meals, located within the UniHill Shopping Centre.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Grill'd</span> - A well-known burger restaurant offering healthy options in a relaxed setting.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">UniHill Food Court</span> - A variety of dining options from casual fast food to more upscale restaurants within the shopping centre.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">San Churro</span> - A chocolate café offering sweet treats and beverages, perfect for a post-appointment indulgence.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Shopping</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">UniHill Shopping Centre</span> - A modern shopping center with a wide range of retail stores, supermarkets, and services, located in the same building as our consulting rooms.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Plenty Valley Westfield</span> - A major shopping center with additional retail options, just a short drive away.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Chemist Warehouse</span> - Conveniently located pharmacy for prescription fills and health products.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Woolworths</span> - A full-service supermarket located within UniHill Shopping Centre.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Parks & Recreation</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Bundoora Park</span> - A large park with walking paths, gardens, and open spaces, perfect for a relaxing stroll before or after your appointment.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">La Trobe University Sports Fields</span> - Extensive recreational areas with walking paths, offering a peaceful environment.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Plenty Gorge Park</span> - A scenic nature reserve with walking trails and abundant wildlife, just a short drive away.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">WaterMarc Aquatic Centre</span> - A modern aquatic facility with swimming pools and fitness programs in nearby Greensborough.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Other Amenities</h3>
                <ul className="text-muted-foreground list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">La Trobe University Library</span> - A large academic library offering a quiet space for reading and research.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Banks & ATMs</span> - Several banking options within UniHill Shopping Centre.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Bundoora Post Office</span> - Conveniently located for postal services and bill payments.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Hoyts Cinema</span> - A modern cinema complex within UniHill Shopping Centre, perfect for entertainment after your appointment.
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
              <h2 className="text-3xl font-bold mb-4">Nearby Hospitals</h2>
              <p className="text-muted-foreground">
                Dr. Aliashkevich performs surgery at these hospitals
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Dr. Aliashkevich performs surgery at multiple hospitals across Melbourne, including the following facilities. These hospitals are equipped with state-of-the-art technology for neurosurgical and spine procedures.
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

                <h3 className="text-xl font-semibold mb-3 text-primary">Warringal Private Hospital</h3>
                <p className="text-muted-foreground mb-4">
                  Warringal Private Hospital is a leading private hospital in Melbourne's northern suburbs, offering comprehensive medical and surgical services. Dr. Aliashkevich performs neurosurgical and spine procedures at this facility, which is equipped with advanced technology for complex surgeries.
                </p>
                <p className="text-muted-foreground mb-4">
                  Address: 216 Burgundy Street, Heidelberg VIC 3084<br />
                  Phone: (03) 9274 1300
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.warringalprivatehospital.com.au/" target="_blank" rel="noopener noreferrer">Visit Hospital Website</a>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">Epworth Richmond Hospital</h3>
                <p className="text-muted-foreground mb-4">
                  Epworth Richmond Hospital is one of Melbourne's largest private hospitals, offering comprehensive medical and surgical services. Dr. Aliashkevich performs neurosurgical and spine procedures at this facility, which is equipped with advanced technology for complex surgeries.
                </p>
                <p className="text-muted-foreground mb-4">
                  Address: 89 Bridge Road, Richmond VIC 3121<br />
                  Phone: (03) 9426 6666
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.epworth.org.au/our-locations/epworth-richmond" target="_blank" rel="noopener noreferrer">Visit Hospital Website</a>
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

                <h3 className="text-xl font-semibold mb-3 text-primary">Epworth Eastern Hospital</h3>
                <p className="text-muted-foreground mb-4">
                  Epworth Eastern Hospital is a leading private hospital in Melbourne's eastern suburbs, offering comprehensive medical and surgical services. Dr. Aliashkevich performs neurosurgical and spine procedures at this facility, which is equipped with advanced technology for complex surgeries.
                </p>
                <p className="text-muted-foreground mb-4">
                  Address: 1 Arnold Street, Box Hill VIC 3128<br />
                  Phone: (03) 8807 7100
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.epworth.org.au/our-locations/epworth-eastern" target="_blank" rel="noopener noreferrer">Visit Hospital Website</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Patients' Privacy Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Patients' Privacy</h2>
              <p className="text-muted-foreground">
                Your privacy is our priority
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground mb-4">
                Dr Aliashkevich pays great respect to patient's privacy and provides a safe environment. The goal is to build and maintain trust between the neurosurgeon and the patient. Patients' comfort is as important as their treatment, and we ensure that anything you discuss with Dr Aliashkevich is kept private.
              </p>
              <p className="text-muted-foreground mb-4">
                Any files and all personal information are kept secure. Patients can give consent to share their health information, for example, when attending other medical practitioners. <a href="https://www.peninsulaph.com.au/Specialists/Specialists/peninsula-private-hospital/neurosurgery/105163/dr-ales-aliashkevich" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> will never release any information to insurers or other parties without consent.
              </p>
              <p className="text-muted-foreground">
                At the end of every patient's visit, our office emails a summary of their conditions, including the diagnosis, history, examination findings, radiological results and recommended action plan.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                Don't wait to seek help if you are struggling with pain, a neurosurgical or a spinal condition. Schedule a consultation with Dr Ales Aliashkevich at Bundoora Consulting Rooms at UniHill Specialist Centre and take the first step toward improved health and well-being. We're here to support you every step of the way to recovery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Address</h3>
                  <p className="text-muted-foreground">
                    Level 4 Suite 32<br />
                    240 Plenty Road<br />
                    BUNDOORA 3083
                  </p>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Email</h3>
                  <p className="text-muted-foreground">
                    info@mineuro.com.au
                  </p>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Phone</h3>
                  <p className="text-muted-foreground">
                    03 90084200
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/locations">View All Locations</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
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
