import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Medicolegal() {
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
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.medicolegal?.title || 'Medicolegal Services'}
              </h1>
              <p className="text-muted-foreground mb-8">
                {t.medicolegal?.subtitle || 'Expert medicolegal assessments and reports for legal and insurance purposes.'}
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/contact">{t.medicolegal?.contactUs || 'Contact Us'}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Assessments Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.assessmentsReports?.title || 'Assessments and Reports'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.medicolegal?.assessmentsReports?.description || 'Expert medicolegal assessments for brain, spine, and nerve injuries.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Independent Medical Examinations */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.independentExaminations?.title || 'Independent and Joint Medical Examinations'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.independentExaminations?.description || 'Independent Medical Examinations and reports may be provided to TAC, Worksafe, insurers, employers, lawyers and solicitors.'}
                </p>
                <img
                  src="/images/law-neurosurgery-report-spine-brain-insurance-claim-medicolegal-miNEURO-work-injury-accident.jpg"
                  alt="Independent Medical Examination"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>

              {/* Whole Person Impairment Assessment */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.impairmentAssessment?.title || 'Whole Person Impairment Assessment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.impairmentAssessment?.amaCertified?.description || 'Dr. Aliashkevich is certified to conduct Whole Person Impairment (WPI) assessments based on the AMA or Comcare guidelines.'}
                </p>
                <img
                  src="/images/law-AMA-4th-edition-medicolegal-miNEURO-work-injury-accident-traffic-TAC-WorkCover-impairment-assessment.jpg"
                  alt="Whole Person Impairment Assessment"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>

              {/* Work Capacity Assessments */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.impairmentAssessment?.workCapacity?.title || 'Work Capacity and Disability Assessments'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.impairmentAssessment?.workCapacity?.description || 'We can help determine the injury impact on worker\'s ability to perform pre-injury employment or suitability for alternate work duties.'}
                </p>
                <img
                  src="/images/employment-worker-safety-construction-medicolegal-miNEURO-work-injury.jpg"
                  alt="Work Capacity Assessment"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Independent Examinations */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.independentReports?.title || 'Independent Examinations and Reports'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.medicolegal?.independentReports?.description1 || 'Dr. Ales Aliashkevich specialises in brain, spine and nerve injuries and has more than 17 years of experience in the provision of medicolegal services.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/examination-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                  alt="Medical examination for medicolegal assessment"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <p className="text-muted-foreground mb-6">
                  {t.medicolegal?.independentReports?.description2 || 'His assessments are always in line with the current evidence-based treatment recommendations, considering the values of multidisciplinary approaches and availability of minimally-invasive and motion-preserving surgical techniques.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.medicolegal?.services?.items?.slice(0, 4).map((item, index) => (
                    <div key={index} className="bg-card p-3 rounded-md shadow-sm">
                      <p className="font-medium">{item}</p>
                    </div>
                  )) || [
                    'Standard Medical Reports',
                    'Independent Medical Examinations (IME)',
                    'Joint Medical Examinations (JME)',
                    'Whole Person Impairment Assessments (WPI)'
                  ].map((item, index) => (
                    <div key={index} className="bg-card p-3 rounded-md shadow-sm">
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.impairmentAssessmentDetails?.title || 'Medicolegal Impairment Assessment'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.medicolegal?.impairmentAssessmentDetails?.description1 || 'Dr. Aliashkevich is certified by the Australian Medical Association (AMA) Victoria and the Personal Injury Education Foundation (PIEF) in Impairment Assessment.'}
              </p>
            </div>

            <div className="card p-6 rounded-lg shadow-md bg-card mb-12">
              <p className="text-muted-foreground mb-6">
                {t.medicolegal?.impairmentAssessmentDetails?.description2 || 'He is accredited for assessing the spine using both the methodology from Chapter 3 of the Guides and modification to those criteria by the Spinal Impairment Guides Modification Document (SIGMD).'}
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                <img src="/images/ama-victoria-logo.jpg" alt="AMA Victoria Logo" className="h-16 object-contain" />
                <img src="/images/PIEF-logo.jpg" alt="Personal Injury Education Foundation Logo" className="h-16 object-contain" />
                <img src="/images/iatvic-logo.jpg" alt="Impairment Assessment Training Victoria Logo" className="h-16 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.services?.title || 'Our Range of Services'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.medicolegal?.helpRecover?.description || 'Our reports are prepared in accordance with the Expert Witness Code of Conduct and the guidelines specified by AMA, TAC, and Worksafe.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {t.medicolegal?.services?.items?.slice(4, 10).map((item, index) => (
                <div key={index} className="card p-4 rounded-lg shadow-md bg-background">
                  <p className="font-medium">{item}</p>
                </div>
              )) || [
                'Wrongs Act 1958 – Sect 28LN Certificate of Assessment',
                'Total & Permanent Disability Assessments (TPD)',
                'Work Capacity Assessments',
                'Conciliation Reports',
                'Medical Questionnaires',
                'Expert Witness Opinions'
              ].map((item, index) => (
                <div key={index} className="card p-4 rounded-lg shadow-md bg-background">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t.medicolegal?.flexibleArrangements?.title || 'Flexible Arrangements'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.flexibleArrangements?.description1 || 'Dr. Ales Aliashkevich can assist in meeting your requirements timely and in a cost-effective manner. Our fees are based on the volume of the provided materials, the complexity of the injuries and urgency of the request.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.flexibleArrangements?.description2 || 'Our network of locations and flexible timetabling allow us to arrange even weekend appointments for the most urgent cases and to respond to short-notice deadlines.'}
                </p>
              </div>
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/motor-vehicle-traffic-road-accident-injury-medicolegal-miNEURO-Ales-Aliashkevich.jpg"
                  alt="Motor vehicle accident injury assessment"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Process Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.assessmentProcess?.title || 'Medicolegal Assessment Process'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.medicolegal?.assessmentProcess?.description || 'Medical examinations form a crucial part of the personal injury and compensation claim assessment.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Before Appointment */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.assessmentProcess?.beforeAppointment?.title || 'Before the Appointment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.beforeAppointment?.description1 || 'To reduce the discomfort of the examination and collect information about the injury, our medicolegal assistant will provide forms in advance.'}
                </p>
                <img
                  src="/images/medical-consulting-doctor-room-lease-Surrey-Hills-miNEURO.jpg"
                  alt="Consultation Room"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>

              {/* During Appointment */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.assessmentProcess?.duringAppointment?.title || 'During the Appointment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.duringAppointment?.description1 || 'The appointment consists of explanation of the purpose, interview, examination, and time for comments and conclusion.'}
                </p>
                <img
                  src="/images/neurological-examination-reflex-knee-jerk-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                  alt="Neurological Examination"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>

              {/* After Appointment */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.assessmentProcess?.afterAppointment?.title || 'After the Appointment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.afterAppointment?.description1 || 'Medicolegal reports provide significantly more detail than usual specialist letters. They are legal documents that can be used as evidence in courts.'}
                </p>
                <img
                  src="/images/treatment-discussion-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                  alt="Medical Report Discussion"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>
            </div>

            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl mb-8">
              <img
                src="/images/law-neurosurgery-JME-IME-assessment-report-spine-brain-insurance-claim-medicolegal.png"
                alt="Comprehensive medicolegal assessment and reporting process"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.locations?.title || 'Our Locations'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.medicolegal?.locations?.description1 || 'All medicolegal appointments are booked by our main office in Surrey Hills. It is located within 2 minutes walking distance from the train station and has plenty of on-street parking available.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="card p-6 rounded-lg shadow-md bg-card mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {t.medicolegal?.locations?.mainOffice?.title || 'Main Office'}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line mb-4">
                    {t.medicolegal?.locations?.mainOffice?.address || 'miNEURO Consulting Suites\nSuite 4, Ground Floor, 619 Canterbury Road\nSURREY HILLS VIC 3127'}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t.medicolegal?.locations?.mainOffice?.contactInfo || 'Please call us on 03 9008 4200 and we will coordinate an appointment most convenient and accessible for your clients.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.medicolegal?.locations?.additionalLocations?.locations?.slice(0, 4).map((location, index) => (
                    <div key={index} className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">{location.name}</h4>
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                    </div>
                  )) || [
                    { name: 'Mornington', address: 'Nepean Specialist Centre\n1050 Nepean Highway' },
                    { name: 'Bundoora', address: 'UniHill Consulting Suites\nLevel 4 Suite 32, 240 Plenty Road' },
                    { name: 'Frankston', address: 'Frankston Private Hospital\n525 McClelland Drive' },
                    { name: 'Werribee', address: 'Consulting Rooms\n297 Princes Highway' }
                  ].map((location, index) => (
                    <div key={index} className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">{location.name}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg"
                  alt="miNEURO Consulting Suites entrance in Surrey Hills"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{t.medicolegal?.contactInfo?.title || 'Contact Information'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                {t.medicolegal?.contactInfo?.description || 'If you have any questions about our medicolegal services, please contact us.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/contact">{t.medicolegal?.contactUs || 'Contact Us'}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/appointments">{t.home?.cta?.bookNow || 'Book an Appointment'}</Link>
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

