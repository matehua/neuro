import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '@/components/PageHeader';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { generatePageSEO } from '@/lib/seo';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Appointments: React.FC = () => {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.appointments) ? safeT : {
    appointments: {
      title: "Book an Appointment",
      subtitle: "Schedule your consultation with Dr. Ales Aliashkevich.",
      description1: "Professional neurosurgical consultation with",
      description2: "for comprehensive assessment and treatment planning.",
      process: {
        title: "Appointment Process",
        subtitle: "Our comprehensive approach ensures the best possible outcomes for every patient.",
        steps: {
          initialConsultation: {
            title: "Initial Consultation",
            description: "Comprehensive assessment of your condition and medical history."
          },
          investigations: {
            title: "Investigations",
            description: "Advanced imaging and diagnostic tests as required."
          },
          discussionOptions: {
            title: "Discussion of Options",
            description: "Detailed explanation of treatment options and recommendations."
          },
          treatmentDecisions: {
            title: "Treatment Decisions",
            description: "Collaborative decision-making for your optimal care plan."
          }
        }
      },
      appointmentInfo: {
        title: "Appointment Information",
        referralRequirements: {
          title: "Referral Requirements",
          description1: "A referral from your GP or specialist is required for all consultations.",
          description2: "Please ensure your referral is current and includes relevant medical history."
        },
        whatToBring: {
          title: "What to Bring",
          items: [
            "Current referral letter",
            "Medicare card and private health insurance details",
            "List of current medications",
            "Previous imaging studies (MRI, CT scans, X-rays)",
            "Previous medical reports"
          ],
          description: "Having these items ready will help ensure an efficient consultation."
        },
        consultationProcess: {
          title: "Consultation Process",
          description1: "Your initial consultation will typically take 45-60 minutes.",
          description2: "Dr. Aliashkevich will review your medical history, examine you, and discuss your symptoms.",
          description3: "Treatment options and next steps will be explained in detail."
        },
        telehealth: {
          title: "Telehealth Consultations",
          description1: "Telehealth consultations are available for follow-up appointments and some initial consultations.",
          description2: "Please discuss telehealth options when booking your appointment."
        }
      },
      requestForm: {
        title: "Request an Appointment",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        preferredLocation: "Preferred Location",
        selectLocation: "Select a location",
        reason: "Reason for Consultation",
        reasonPlaceholder: "Please describe your symptoms or condition",
        referral: "Do you have a referral?",
        selectOption: "Select an option",
        haveReferral: "Yes, I have a referral",
        needReferralInfo: "No, I need referral information",
        submit: "Submit Request",
        confirmation: "We will contact you within 24 hours to confirm your appointment."
      },
      investigations: {
        title: "Diagnostic Investigations",
        description1: "Accurate diagnosis is essential for effective treatment planning.",
        description2: "Dr. Aliashkevich may recommend various investigations based on your condition:",
        items: [
          "MRI scans for detailed soft tissue imaging",
          "CT scans for bone and structural assessment",
          "X-rays for initial evaluation",
          "Specialized tests as clinically indicated"
        ],
        description3: "All investigations are carefully selected to provide the most relevant information for your care."
      },
      treatmentOptions: {
        title: "Treatment Options",
        description1: "Treatment recommendations are tailored to each individual patient.",
        description2: "Options may include conservative management, minimally invasive procedures, or surgical intervention.",
        description3: "Dr. Aliashkevich will explain all available options, including risks and benefits.",
        description4: "The final treatment decision is always made collaboratively with the patient."
      },
      fees: {
        title: "Fees and Insurance",
        subtitle: "Transparent pricing for all consultations and procedures.",
        initialConsultation: {
          title: "Initial Consultation",
          description: "Comprehensive assessment and treatment planning.",
          fee: "$450",
          rebate: "$150",
          outOfPocket: "$300"
        },
        reviewConsultation: {
          title: "Review Consultation",
          description: "Follow-up consultation for ongoing care.",
          fee: "$250",
          rebate: "$75",
          outOfPocket: "$175"
        },
        insuranceOptions: {
          title: "Insurance Options",
          privateHealth: {
            title: "Private Health Insurance",
            description: "Most private health insurers provide coverage for neurosurgical consultations."
          },
          tac: {
            title: "TAC",
            description: "Transport Accident Commission claims are accepted."
          },
          veteranAffairs: {
            title: "Veteran Affairs",
            description: "DVA gold and white card holders welcome."
          },
          workCover: {
            title: "WorkCover",
            description: "WorkCover claims are processed efficiently."
          }
        }
      },
      privacy: {
        title: "Patient Privacy",
        description1: "Your privacy and confidentiality are of utmost importance to us.",
        description2: "All patient information is handled in accordance with Australian Privacy Principles."
      },
      locations: {
        title: "Our Locations",
        subtitle1: "Dr. Ales Aliashkevich consults at multiple locations across Melbourne for your convenience.",
        subtitle2: "Choose the location that is most convenient for you.",
        mainOffice: {
          title: "Surrey Hills miNEURO Consulting Suites",
          address: "Suite 4, 619 Canterbury Road\nSurrey Hills VIC 3127",
          phone: "(03) 9830 0344",
          fax: "(03) 9830 0355",
          email: "info@mineuro.com.au",
          viewDetails: "View Details"
        },
        allLocations: "All Consultation Locations",
        viewAllLocations: "View All Locations"
      },
      phone: "Phone:",
      fax: "Fax:",
      email: "Email:",
      fee: "Fee:",
      medicareRebate: "Medicare Rebate:",
      outOfPocketCost: "Out of Pocket Cost:"
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Generate SEO data for appointments page
  const appointmentsSeoData = generatePageSEO('appointments');

  return (
    <StandardPageLayout pageType="appointments" seoData={appointmentsSeoData} showHeader={false}>
      <PageHeader
        title={finalT.appointments.title}
        subtitle={`${finalT.appointments.subtitle} ${finalT.appointments.description1} Dr Ales Aliashkevich ${finalT.appointments.description2}`}
        backgroundImage="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk.jpg"
        enableParallax={true}
      />

      <main className="flex-1">

        {/* Appointment Process */}
        <section className={cn(
          "bg-primary/5",
          deviceInfo.isMobile ? "mobile-section" : "py-16"
        )}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <h2 className={cn(
              "font-bold text-center mb-mobile-lg",
              deviceInfo.isMobile
                ? "mobile-3xl"
                : "text-3xl mb-8"
            )}>
              {finalT.appointments.process.title}
            </h2>
            <p className={cn(
              "text-center text-muted-foreground mx-auto mb-mobile-xl",
              deviceInfo.isMobile
                ? "mobile-text max-w-full"
                : "mb-12 max-w-3xl"
            )}>
              {finalT.appointments.process.subtitle}
            </p>

            <div className={cn(
              "grid gap-mobile-lg",
              deviceInfo.isMobile
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            )}>
              {/* Initial Consultation */}
              <div className={cn(
                "card rounded-lg shadow-md bg-card flex flex-col items-center text-center",
                deviceInfo.isMobile ? "p-mobile-lg" : "p-6"
              )}>
                <div className={cn(
                  "rounded-full bg-primary/10 flex items-center justify-center mb-mobile-md",
                  deviceInfo.isMobile ? "w-12 h-12" : "w-16 h-16 mb-4"
                )}>
                  <span className={cn(
                    "font-bold text-primary",
                    deviceInfo.isMobile ? "text-lg" : "text-2xl"
                  )}>1</span>
                </div>
                <h3 className={cn(
                  "font-semibold text-primary mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>
                  {finalT.appointments.process.steps.initialConsultation.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {finalT.appointments.process.steps.initialConsultation.description}
                </p>
              </div>

              {/* Investigations */}
              <div className={cn(
                "card rounded-lg shadow-md bg-card flex flex-col items-center text-center",
                deviceInfo.isMobile ? "p-mobile-lg" : "p-6"
              )}>
                <div className={cn(
                  "rounded-full bg-primary/10 flex items-center justify-center mb-mobile-md",
                  deviceInfo.isMobile ? "w-12 h-12" : "w-16 h-16 mb-4"
                )}>
                  <span className={cn(
                    "font-bold text-primary",
                    deviceInfo.isMobile ? "text-lg" : "text-2xl"
                  )}>2</span>
                </div>
                <h3 className={cn(
                  "font-semibold text-primary mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>
                  {finalT.appointments.process.steps.investigations.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {finalT.appointments.process.steps.investigations.description}
                </p>
              </div>

              {/* Discussion of Options */}
              <div className={cn(
                "card rounded-lg shadow-md bg-card flex flex-col items-center text-center",
                deviceInfo.isMobile ? "p-mobile-lg" : "p-6"
              )}>
                <div className={cn(
                  "rounded-full bg-primary/10 flex items-center justify-center mb-mobile-md",
                  deviceInfo.isMobile ? "w-12 h-12" : "w-16 h-16 mb-4"
                )}>
                  <span className={cn(
                    "font-bold text-primary",
                    deviceInfo.isMobile ? "text-lg" : "text-2xl"
                  )}>3</span>
                </div>
                <h3 className={cn(
                  "font-semibold text-primary mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>
                  {finalT.appointments.process.steps.discussionOptions.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {finalT.appointments.process.steps.discussionOptions.description}
                </p>
              </div>

              {/* Treatment Decisions */}
              <div className={cn(
                "card rounded-lg shadow-md bg-card flex flex-col items-center text-center",
                deviceInfo.isMobile ? "p-mobile-lg" : "p-6"
              )}>
                <div className={cn(
                  "rounded-full bg-primary/10 flex items-center justify-center mb-mobile-md",
                  deviceInfo.isMobile ? "w-12 h-12" : "w-16 h-16 mb-4"
                )}>
                  <span className={cn(
                    "font-bold text-primary",
                    deviceInfo.isMobile ? "text-lg" : "text-2xl"
                  )}>4</span>
                </div>
                <h3 className={cn(
                  "font-semibold text-primary mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>
                  {finalT.appointments.process.steps.treatmentDecisions.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {finalT.appointments.process.steps.treatmentDecisions.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">{finalT.appointments.appointmentInfo.title}</h2>
                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.appointments.appointmentInfo.referralRequirements.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.referralRequirements.description1}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.referralRequirements.description2}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.appointments.appointmentInfo.whatToBring.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      {finalT.appointments.appointmentInfo.whatToBring.items?.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.whatToBring.description}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.appointments.appointmentInfo.consultationProcess.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.consultationProcess.description1}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.consultationProcess.description2}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.consultationProcess.description3}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.appointments.appointmentInfo.telehealth.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.telehealth.description1}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {finalT.appointments.appointmentInfo.telehealth.description2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Appointment Request Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{finalT.appointments.requestForm.title}</h2>
                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{finalT.appointments.requestForm.firstName}</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{finalT.appointments.requestForm.lastName}</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{finalT.appointments.requestForm.email}</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{finalT.appointments.requestForm.phone}</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">{finalT.appointments.requestForm.preferredLocation}</Label>
                      <Select>
                        <SelectTrigger id="location">
                          <SelectValue placeholder={finalT.appointments.requestForm.selectLocation} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="surrey-hills">Surrey Hills</SelectItem>
                          <SelectItem value="mornington">Mornington</SelectItem>
                          <SelectItem value="frankston">Frankston</SelectItem>
                          <SelectItem value="moonee-ponds">Moonee Ponds</SelectItem>
                          <SelectItem value="sunbury">Sunbury</SelectItem>
                          <SelectItem value="werribee">Werribee</SelectItem>
                          <SelectItem value="bundoora">Bundoora</SelectItem>
                          <SelectItem value="dandenong">Dandenong</SelectItem>
                          <SelectItem value="heidelberg">Heidelberg</SelectItem>
                          <SelectItem value="wantirna">Wantirna</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">{finalT.appointments.requestForm.reason}</Label>
                      <Textarea id="reason" placeholder={finalT.appointments.requestForm.reasonPlaceholder} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral">{finalT.appointments.requestForm.referral}</Label>
                      <Select>
                        <SelectTrigger id="referral">
                          <SelectValue placeholder={finalT.appointments.requestForm.selectOption} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">{finalT.appointments.requestForm.haveReferral}</SelectItem>
                          <SelectItem value="no">{finalT.appointments.requestForm.needReferralInfo}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full">{finalT.appointments.requestForm.submit}</Button>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      {finalT.appointments.requestForm.confirmation}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investigations Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{finalT.appointments.investigations.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.investigations.description1}
                </p>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.investigations.description2}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  {finalT.appointments.investigations.items?.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  {finalT.appointments.investigations.description3}
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/mri-ct-precise-advanced-mineuro-guiding-lights-neurosurgery-spine-surgery.jpg"
                  alt="MRI and CT imaging for neurosurgical diagnosis"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/treatment-discussion-neurosurgery-report-spine-brain-insurance-claim-medicolegal.jpg"
                  alt="Treatment discussion with neurosurgeon"
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">{finalT.appointments.treatmentOptions.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.treatmentOptions.description1}
                </p>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.treatmentOptions.description2}
                </p>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.treatmentOptions.description3}
                </p>
                <p className="text-muted-foreground">
                  {finalT.appointments.treatmentOptions.description4}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fees and Insurance Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{finalT.appointments.fees.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {finalT.appointments.fees.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Initial Consultation */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.appointments.fees.initialConsultation.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.appointments.fees.initialConsultation.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{finalT.appointments.fee}</span>
                    <span className="font-semibold">{finalT.appointments.fees.initialConsultation.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{finalT.appointments.medicareRebate}</span>
                    <span className="font-semibold">{finalT.appointments.fees.initialConsultation.rebate}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>{finalT.appointments.outOfPocketCost}</span>
                    <span className="font-semibold">{finalT.appointments.fees.initialConsultation.outOfPocket}</span>
                  </div>
                </div>
              </div>

              {/* Review Consultation */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.appointments.fees.reviewConsultation.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.appointments.fees.reviewConsultation.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{finalT.appointments.fee}</span>
                    <span className="font-semibold">{finalT.appointments.fees.reviewConsultation.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{finalT.appointments.medicareRebate}</span>
                    <span className="font-semibold">{finalT.appointments.fees.reviewConsultation.rebate}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>{finalT.appointments.outOfPocketCost}</span>
                    <span className="font-semibold">{finalT.appointments.fees.reviewConsultation.outOfPocket}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">{finalT.appointments.fees.insuranceOptions.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Private */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{finalT.appointments.fees.insuranceOptions.privateHealth.title}</h4>
                <p className="text-muted-foreground">
                  {finalT.appointments.fees.insuranceOptions.privateHealth.description}
                </p>
              </div>

              {/* TAC */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{finalT.appointments.fees.insuranceOptions.tac.title}</h4>
                <p className="text-muted-foreground">
                  {finalT.appointments.fees.insuranceOptions.tac.description}
                </p>
              </div>

              {/* Veteran Affairs */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{finalT.appointments.fees.insuranceOptions.veteranAffairs.title}</h4>
                <p className="text-muted-foreground">
                  {finalT.appointments.fees.insuranceOptions.veteranAffairs.description}
                </p>
              </div>

              {/* WorkCover */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{finalT.appointments.fees.insuranceOptions.workCover.title}</h4>
                <p className="text-muted-foreground">
                  {finalT.appointments.fees.insuranceOptions.workCover.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Privacy Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{finalT.appointments.privacy.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.privacy.description1}
                </p>
                <p className="text-muted-foreground mb-6">
                  {finalT.appointments.privacy.description2}
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/Patient-privacy-brain-spine-neurosurgery-AI.jpg"
                  alt="Patient privacy in neurosurgical care"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{finalT.appointments.locations.title}</h2>
            <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
              {finalT.appointments.locations.subtitle1}
            </p>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {finalT.appointments.locations.subtitle2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-waiting-area.jpg"
                  alt="Surrey Hills miNEURO Consulting Suites"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{finalT.appointments.locations.mainOffice.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {finalT.appointments.locations.mainOffice.address.split('\n').map((line: string, i: number) => (
                    <span key={i}>
                      {line}<br />
                    </span>
                  ))}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">{finalT.appointments.phone}</h4>
                    <p className="text-muted-foreground">{finalT.appointments.locations.mainOffice.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{finalT.appointments.fax}</h4>
                    <p className="text-muted-foreground">{finalT.appointments.locations.mainOffice.fax}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{finalT.appointments.email}</h4>
                    <p className="text-muted-foreground">{finalT.appointments.locations.mainOffice.email}</p>
                  </div>
                </div>
                <Button asChild className="self-start">
                  <Link to="/locations/surrey-hills">{finalT.appointments.locations.mainOffice.viewDetails}</Link>
                </Button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">{finalT.appointments.locations.allLocations}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/surrey-hills">
                  <div className="text-center">
                    <h3 className="font-semibold">Surrey Hills</h3>
                    <p className="text-xs text-muted-foreground">Suite 4, 619 Canterbury Road</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/mornington">
                  <div className="text-center">
                    <h3 className="font-semibold">Mornington</h3>
                    <p className="text-xs text-muted-foreground">Nepean Specialist Centre, 1050 Nepean Highway</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/frankston">
                  <div className="text-center">
                    <h3 className="font-semibold">Frankston</h3>
                    <p className="text-xs text-muted-foreground">Frankston Private Hospital, 525 McClelland Drive</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/moonee-ponds">
                  <div className="text-center">
                    <h3 className="font-semibold">Moonee Ponds</h3>
                    <p className="text-xs text-muted-foreground">827 Mt Alexander Road</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/sunbury">
                  <div className="text-center">
                    <h3 className="font-semibold">Sunbury</h3>
                    <p className="text-xs text-muted-foreground">Lake Imaging, 17-19 Horne Street</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/werribee">
                  <div className="text-center">
                    <h3 className="font-semibold">Werribee</h3>
                    <p className="text-xs text-muted-foreground">297 Princes Highway</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/bundoora">
                  <div className="text-center">
                    <h3 className="font-semibold">Bundoora</h3>
                    <p className="text-xs text-muted-foreground">UniHill Consulting Suites, 240 Plenty Road</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/dandenong">
                  <div className="text-center">
                    <h3 className="font-semibold">Dandenong</h3>
                    <p className="text-xs text-muted-foreground">136 David Street</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/heidelberg">
                  <div className="text-center">
                    <h3 className="font-semibold">Heidelberg</h3>
                    <p className="text-xs text-muted-foreground">Warringal Private Hospital, 10 Martin Street</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/wantirna">
                  <div className="text-center">
                    <h3 className="font-semibold">Wantirna</h3>
                    <p className="text-xs text-muted-foreground">Knox Audiology, 230 Mountain Highway</p>
                  </div>
                </Link>
              </Button>
            </div>

            <div className="text-center mt-8">
              <Button asChild>
                <Link to="/locations">{finalT.appointments.locations.viewAllLocations}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </StandardPageLayout>
  );
};

Appointments.displayName = 'Appointments';

export default Appointments;
