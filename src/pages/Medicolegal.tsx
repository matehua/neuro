import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SafeImage from "@/components/SafeImage";

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
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Medicolegal Assessments</h2>
                <p className="text-muted-foreground mb-4">
                  Dr. Ales Aliashkevich provides comprehensive medicolegal assessments for brain, spine, and nerve injuries. With extensive experience in neurosurgery and specialized training in impairment assessment, he delivers accurate and detailed reports for legal and insurance purposes.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our medicolegal services are designed to provide objective, evidence-based assessments that help resolve complex cases involving neurological and spinal injuries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary/5 p-3 rounded-md">
                    <p className="font-medium">AMA Certified Assessor</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-md">
                    <p className="font-medium">WorkCover Approved</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-md">
                    <p className="font-medium">TAC Approved</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/law-neurosurgery-spine-brain-insurance-claim-medicolegal-miNEURO-work-injury-accident-traffic-TAC.jpg"
                  alt="Dr. Aliashkevich conducting a medicolegal assessment"
                  className="w-full h-auto"
                  fallbackSrc="/images/examination-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                />
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
                <SafeImage
                  src="/images/examination-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                  alt="Medical examination for medicolegal assessment"
                  className="w-full h-auto"
                  fallbackSrc="/images/medical-consulting-doctor-room-lease-Surrey-Hills-miNEURO.jpg"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.independentExaminations?.types?.workCover?.title || 'WorkCover Claims'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.independentExaminations?.types?.workCover?.description || 'Comprehensive assessments for work-related injuries affecting the brain, spine, or nervous system. Dr. Aliashkevich is an accredited WorkCover impairment assessor for the spine and nervous system.'}
                </p>
                <SafeImage
                  src="/images/employment-worker-medicolegal-miNEURO-work-injury-accident-motor-vehicle-traffic-TAC-WorkCover.jpg"
                  alt="Work-related injury assessment"
                  className="w-full h-48 object-cover rounded-md"
                  fallbackSrc="/images/employment-worker-safety-construction-medicolegal-miNEURO-work-injury.jpg"
                />
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.independentExaminations?.types?.transportAccident?.title || 'Transport Accident Claims'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.independentExaminations?.types?.transportAccident?.description || 'Expert evaluation of neurological and spinal injuries resulting from motor vehicle accidents. Dr. Aliashkevich is an accredited TAC impairment assessor for the spine and nervous system.'}
                </p>
                <SafeImage
                  src="/images/motor-vehicle-traffic-road-accident-injury-medicolegal-miNEURO-Ales-Aliashkevich.jpg"
                  alt="Transport accident injury assessment"
                  className="w-full h-48 object-cover rounded-md"
                  fallbackSrc="/images/law-neurosurgery-spine-brain-insurance-claim-medicolegal-miNEURO-work-injury-accident-traffic-TAC.jpg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.independentExaminations?.types?.publicLiability?.title || 'Public Liability Claims'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.independentExaminations?.types?.publicLiability?.description || 'Assessment of injuries sustained in public places or due to third-party negligence. These reports can be used for insurance claims and legal proceedings.'}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.independentExaminations?.types?.medicalNegligence?.title || 'Medical Negligence Cases'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.independentExaminations?.types?.medicalNegligence?.description || 'Expert opinion on standards of care and causation in neurosurgical and spinal cases. Dr. Aliashkevich can provide objective assessments of treatment standards and outcomes.'}
                </p>
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
                {t.medicolegal?.impairmentAssessmentDetails?.description1 || 'Dr. Aliashkevich is certified by the Australian Medical Association (AMA) Victoria and the Personal Injury Education Foundation (PIEF) in Impairment Assessment using the American Medical Association Guides to the Evaluation of Permanent Impairment 4th Edition and other prescribed methods, as applied to relevant Victorian legislation.'}
              </p>
            </div>

            <div className="card p-6 rounded-lg shadow-md bg-card mb-12">
              <p className="text-muted-foreground mb-6">
                {t.medicolegal?.impairmentAssessmentDetails?.description2 || 'He is accredited for assessing the spine using both the methodology from Chapter 3 of the Guides and modification to those criteria by the Spinal Impairment Guides Modification Document (SIGMD). He can perform an expert apportionment to disentangle what impairment may or may not be related to a compensable event.'}
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                <SafeImage
                  src="/images/ama-victoria-logo.jpg"
                  alt="AMA Victoria Logo"
                  className="h-16 object-contain"
                />
                <SafeImage
                  src="/images/PIEF-logo.jpg"
                  alt="Personal Injury Education Foundation Logo"
                  className="h-16 object-contain"
                />
                <SafeImage
                  src="/images/iatvic-logo.jpg"
                  alt="Impairment Assessment Training Victoria Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t.medicolegal?.impairmentAssessment?.amaCertified?.title || 'AMA Certified Assessments'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.impairmentAssessment?.amaCertified?.description || 'Dr. Aliashkevich is certified to conduct Whole Person Impairment (WPI) assessments based on the AMA or Comcare guidelines in matters where compensation is sought for the permanent impairment of part(s) of an individual\'s body. The impairment is calculated in terms of the extent to which an injury impacts your whole person.'}
                </p>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-primary">
                  {t.medicolegal?.impairmentAssessment?.expertWitness?.title || 'Expert Witness Opinions'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.impairmentAssessment?.expertWitness?.description || 'If required, Dr. Aliashkevich can appear in court to provide an expert neurosurgical opinion. He can provide an expert opinion based on available medical records, imaging, neurophysiological testing results and other documentation.'}
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/law-AMA-4th-edition-medicolegal-miNEURO-work-injury-accident-traffic-TAC-WorkCover-impairment-assessment.jpg"
                  alt="AMA Guides to the Evaluation of Permanent Impairment"
                  className="w-full h-auto"
                />
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
                {t.medicolegal?.helpRecover?.description || 'Our reports are prepared in accordance with the Expert Witness Code of Conduct and the guidelines specified by AMA (American Medical Association), TAC (Transport Accident Commission) and Worksafe.'}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-primary text-center">
                {t.medicolegal?.helpRecover?.title || 'Help to Recover from Injury'}
              </h3>
              <p className="text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
                Our reports can be used for a variety of legal purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
                {t.medicolegal?.helpRecover?.purposes?.map((purpose, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg shadow-sm flex items-center">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium">{purpose}</p>
                  </div>
                )) || [
                  'Assessment of injuries (work, transport accidents, public liability or medical negligence)',
                  'Assisting with insurance and compensation claims',
                  'Impairment assessments',
                  'Estimation of work capacity'
                ].map((purpose, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg shadow-sm flex items-center">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium">{purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {t.medicolegal?.services?.items?.map((item, index) => (
                <div key={index} className="card p-4 rounded-lg shadow-md bg-background">
                  <p className="font-medium">{item}</p>
                </div>
              )) || [
                'Standard Medical Reports',
                'Independent Medical Examinations (IME)',
                'Joint Medical Examinations (JME)',
                'Whole Person Impairment Assessments (WPI)',
                'Wrongs Act 1958 – Sect 28LN Certificate of Assessment',
                'Total & Permanent Disability Assessments (TPD)',
                'Work Capacity Assessments',
                'Conciliation Reports',
                'Medical Questionnaires',
                'Expert Witness Opinions',
                'File/Imaging Reviews',
                'Teleconferences'
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
                <div className="mt-6">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link to="/contact">{t.medicolegal?.contactUs || 'Contact Us for Medicolegal Services'}</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/law-insurance-claim-medicolegal-miNEURO-work-injury-accident-traffic-TAC-WorkCover-impairment-assessment.jpg"
                  alt="Insurance claim assessment"
                  className="w-full h-auto"
                  fallbackSrc="/images/motor-vehicle-traffic-road-accident-injury-medicolegal-miNEURO-Ales-Aliashkevich.jpg"
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
                {t.medicolegal?.assessmentProcess?.description || 'Medical examinations form a crucial part of the personal injury and compensation claim assessment. Dr. Aliashkevich provides unbiased independent expert reviews with appropriate qualifications, deep knowledge of the problem, and specific training to provide impairment ratings.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Before Appointment */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t.medicolegal?.assessmentProcess?.beforeAppointment?.title || 'Before the Appointment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.beforeAppointment?.description1 || 'To reduce the discomfort of the examination and collect as much information about the injury and its consequences, our medicolegal assistant will provide a registration form, health questionnaire, and consent form well in advance before the appointment.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.beforeAppointment?.description2 || 'Claimants are welcome to have a support person, carer, or legal guardian. A professional interpreter can be arranged if required. We can also arrange for a chaperone to be present during the examination.'}
                </p>
                <SafeImage
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
                  {t.medicolegal?.assessmentProcess?.duringAppointment?.description1 || 'The appointment consists of 4 parts: explanation of the purpose of the assessment, interview, examination, and time for any comments and conclusion.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.duringAppointment?.description2 || 'The interview covers topics such as medical history, educational background, work history, accident circumstances, treatments received, current complaints, work capacity, medications, and the injury\'s impact on daily life. The neurological examination is not expected to cause any additional pain and focuses on the injured body part.'}
                </p>
                <SafeImage
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
                  {t.medicolegal?.assessmentProcess?.afterAppointment?.description1 || 'Medicolegal reports provide significantly more detail than usual specialist letters. They are legal documents that can be used as evidence in courts. In complex cases, reports can be 30-50 pages long.'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.medicolegal?.assessmentProcess?.afterAppointment?.description2 || 'After the report is finalized, it will be sent directly to the requesting party. As a general rule, Dr. Aliashkevich doesn\'t mind for his reports to be forwarded to the claimants or their general practitioners if they help with future treatment planning.'}
                </p>
                <SafeImage
                  src="/images/treatment-discussion-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                  alt="Medical Report Discussion"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </div>
            </div>

            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl mb-8">
              <SafeImage
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
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div>
                      <p className="font-medium text-primary">{t.medicolegal?.contactInfo?.phone || 'Phone'}</p>
                      <p className="text-muted-foreground">{t.medicolegal?.contactInfo?.phoneNumber || '03 9008 4200'}</p>
                    </div>
                    <div>
                      <p className="font-medium text-primary">{t.medicolegal?.contactInfo?.email || 'Email'}</p>
                      <p className="text-muted-foreground">{t.medicolegal?.contactInfo?.emailAddress || 'info@mineuro.com.au'}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {t.medicolegal?.locations?.mainOffice?.contactInfo || 'Please call us on 03 9008 4200 and we will coordinate an appointment most convenient and accessible for your clients.'}
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t.medicolegal?.locations?.additionalLocations?.title || 'Additional Locations'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.medicolegal?.locations?.additionalLocations?.locations?.map((location, index) => (
                    <div key={index} className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">{location.name}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{location.address}</p>
                    </div>
                  )) || [
                    { name: 'Mornington', address: 'Nepean Specialist Centre\n1050 Nepean Highway' },
                    { name: 'Bundoora', address: 'UniHill Consulting Suites\nLevel 4 Suite 32, 240 Plenty Road' },
                    { name: 'Frankston', address: 'Frankston Private Hospital\n525 McClelland Drive' },
                    { name: 'Werribee', address: 'Consulting Rooms\n297 Princes Highway' },
                    { name: 'Heidelberg', address: 'Consulting Suites, Level 7\n10 Martin Street' },
                    { name: 'Moonee Ponds', address: 'Moonee Ponds Specialist Centre\n827 Mt Alexander Road' },
                    { name: 'Dandenong', address: 'Dandenong Neurology & Specialists Group\n136 David Street' },
                    { name: 'Sunbury', address: 'Lake Imaging\n17-19 Horne Street' }
                  ].map((location, index) => (
                    <div key={index} className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">{location.name}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg"
                  alt="miNEURO Consulting Suites entrance in Surrey Hills"
                  className="w-full h-auto"
                />
                <div className="mt-6">
                  <div className="bg-card p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-primary mb-2">Convenient Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Our Surrey Hills location is easily accessible by public transport, with the train station just a 2-minute walk away. There is also ample on-street parking available for those traveling by car.
                    </p>
                  </div>
                </div>
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
                {t.medicolegal?.contactInfo?.description || 'If you have any questions about our medicolegal services, please call our main office or email us.'}
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {t.medicolegal?.contactInfo?.phone || 'Phone'}
                  </h3>
                  <p className="text-lg font-medium">{t.medicolegal?.contactInfo?.phoneNumber || '03 9008 4200'}</p>
                  <p className="text-muted-foreground mt-2">Available Monday to Friday, 9am to 5pm</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {t.medicolegal?.contactInfo?.email || 'Email'}
                  </h3>
                  <p className="text-lg font-medium">{t.medicolegal?.contactInfo?.emailAddress || 'info@mineuro.com.au'}</p>
                  <p className="text-muted-foreground mt-2">We aim to respond within 24 business hours</p>
                </div>
              </div>

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

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.faq?.title || 'Frequently Asked Questions'}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t.faq?.subtitle || 'Common questions about our medicolegal services and assessment process'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.faq?.medicolegal?.assessment?.question || 'What is a medicolegal assessment?'}</h3>
                <p className="text-muted-foreground">
                  {t.faq?.medicolegal?.assessment?.answer || 'A medicolegal assessment is an independent medical examination conducted for legal purposes, such as insurance claims, workers\' compensation, or legal proceedings. It provides an objective evaluation of a person\'s medical condition and its impact on their life and work capacity.'}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.faq?.medicolegal?.duration?.question || 'How long does a medicolegal assessment take?'}</h3>
                <p className="text-muted-foreground">
                  {t.faq?.medicolegal?.duration?.answer || 'A typical medicolegal assessment with Dr. Aliashkevich takes approximately 60-90 minutes, depending on the complexity of the case and the number of injuries being assessed. This includes time for the interview, examination, and discussion.'}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.faq?.medicolegal?.bring?.question || 'What should I bring to my assessment?'}</h3>
                <p className="text-muted-foreground">
                  {t.faq?.medicolegal?.bring?.answer || 'Please bring any relevant medical records, imaging results (or details of where these were performed), a list of current medications, and any documentation related to your claim or case. If you have a support person, they are welcome to attend with you.'}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.faq?.medicolegal?.report?.question || 'How soon will the report be available?'}</h3>
                <p className="text-muted-foreground">
                  {t.faq?.medicolegal?.report?.answer || 'Standard reports are typically completed within 10-14 business days after the assessment. For urgent cases, expedited reporting can be arranged. The report will be sent directly to the requesting party (insurer, lawyer, or employer).'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

