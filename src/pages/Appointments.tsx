import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { generatePageSEO } from "@/lib/seo";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Appointments() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Generate SEO data for appointments page
  const appointmentsSeoData = generatePageSEO('appointments');

  return (
    <Layout pageType="appointments" seoData={appointmentsSeoData}>
      <PageHeader
        title={t.appointments.title}
        subtitle={`${t.appointments.subtitle} ${t.appointments.description1} Dr Ales Aliashkevich ${t.appointments.description2}`}
        backgroundImage="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk.jpg"
        enableParallax={true}
        overlayOpacity={0.5}
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
              {t.appointments.process.title}
            </h2>
            <p className={cn(
              "text-center text-muted-foreground mx-auto mb-mobile-xl",
              deviceInfo.isMobile
                ? "mobile-text max-w-full"
                : "mb-12 max-w-3xl"
            )}>
              {t.appointments.process.subtitle}
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
                  {t.appointments.process.steps.initialConsultation.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {t.appointments.process.steps.initialConsultation.description}
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
                  {t.appointments.process.steps.investigations.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {t.appointments.process.steps.investigations.description}
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
                  {t.appointments.process.steps.discussionOptions.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {t.appointments.process.steps.discussionOptions.description}
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
                  {t.appointments.process.steps.treatmentDecisions.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {t.appointments.process.steps.treatmentDecisions.description}
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
                <h2 className="text-2xl font-bold mb-6">{t.appointments.appointmentInfo.title}</h2>
                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.appointments.appointmentInfo.referralRequirements.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.referralRequirements.description1}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.referralRequirements.description2}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.appointments.appointmentInfo.whatToBring.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      {t.appointments.appointmentInfo.whatToBring.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.whatToBring.description}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.appointments.appointmentInfo.consultationProcess.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.consultationProcess.description1}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.consultationProcess.description2}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.consultationProcess.description3}
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t.appointments.appointmentInfo.telehealth.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.telehealth.description1}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t.appointments.appointmentInfo.telehealth.description2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Appointment Request Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.appointments.requestForm.title}</h2>
                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t.appointments.requestForm.firstName}</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t.appointments.requestForm.lastName}</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t.appointments.requestForm.email}</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.appointments.requestForm.phone}</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">{t.appointments.requestForm.preferredLocation}</Label>
                      <Select>
                        <SelectTrigger id="location">
                          <SelectValue placeholder={t.appointments.requestForm.selectLocation} />
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
                      <Label htmlFor="reason">{t.appointments.requestForm.reason}</Label>
                      <Textarea id="reason" placeholder={t.appointments.requestForm.reasonPlaceholder} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral">{t.appointments.requestForm.referral}</Label>
                      <Select>
                        <SelectTrigger id="referral">
                          <SelectValue placeholder={t.appointments.requestForm.selectOption} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">{t.appointments.requestForm.haveReferral}</SelectItem>
                          <SelectItem value="no">{t.appointments.requestForm.needReferralInfo}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full">{t.appointments.requestForm.submit}</Button>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      {t.appointments.requestForm.confirmation}
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
                <h2 className="text-3xl font-bold mb-6">{t.appointments.investigations.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.investigations.description1}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.investigations.description2}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  {t.appointments.investigations.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  {t.appointments.investigations.description3}
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
                <h2 className="text-3xl font-bold mb-6">{t.appointments.treatmentOptions.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.treatmentOptions.description1}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.treatmentOptions.description2}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.treatmentOptions.description3}
                </p>
                <p className="text-muted-foreground">
                  {t.appointments.treatmentOptions.description4}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fees and Insurance Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.appointments.fees.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.appointments.fees.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Initial Consultation */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.appointments.fees.initialConsultation.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.appointments.fees.initialConsultation.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t.appointments.fee}</span>
                    <span className="font-semibold">{t.appointments.fees.initialConsultation.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.appointments.medicareRebate}</span>
                    <span className="font-semibold">{t.appointments.fees.initialConsultation.rebate}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>{t.appointments.outOfPocketCost}</span>
                    <span className="font-semibold">{t.appointments.fees.initialConsultation.outOfPocket}</span>
                  </div>
                </div>
              </div>

              {/* Review Consultation */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.appointments.fees.reviewConsultation.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.appointments.fees.reviewConsultation.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t.appointments.fee}</span>
                    <span className="font-semibold">{t.appointments.fees.reviewConsultation.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.appointments.medicareRebate}</span>
                    <span className="font-semibold">{t.appointments.fees.reviewConsultation.rebate}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>{t.appointments.outOfPocketCost}</span>
                    <span className="font-semibold">{t.appointments.fees.reviewConsultation.outOfPocket}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">{t.appointments.fees.insuranceOptions.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Private */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{t.appointments.fees.insuranceOptions.privateHealth.title}</h4>
                <p className="text-muted-foreground">
                  {t.appointments.fees.insuranceOptions.privateHealth.description}
                </p>
              </div>

              {/* TAC */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{t.appointments.fees.insuranceOptions.tac.title}</h4>
                <p className="text-muted-foreground">
                  {t.appointments.fees.insuranceOptions.tac.description}
                </p>
              </div>

              {/* Veteran Affairs */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{t.appointments.fees.insuranceOptions.veteranAffairs.title}</h4>
                <p className="text-muted-foreground">
                  {t.appointments.fees.insuranceOptions.veteranAffairs.description}
                </p>
              </div>

              {/* WorkCover */}
              <div className="card p-6 rounded-lg shadow-md bg-card">
                <h4 className="text-lg font-semibold mb-3 text-primary">{t.appointments.fees.insuranceOptions.workCover.title}</h4>
                <p className="text-muted-foreground">
                  {t.appointments.fees.insuranceOptions.workCover.description}
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
                <h2 className="text-3xl font-bold mb-6">{t.appointments.privacy.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.privacy.description1}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t.appointments.privacy.description2}
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
            <h2 className="text-3xl font-bold mb-8 text-center">{t.appointments.locations.title}</h2>
            <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
              {t.appointments.locations.subtitle1}
            </p>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.appointments.locations.subtitle2}
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
                <h3 className="text-2xl font-bold mb-4">{t.appointments.locations.mainOffice.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.appointments.locations.mainOffice.address.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.appointments.phone}</h4>
                    <p className="text-muted-foreground">{t.appointments.locations.mainOffice.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.appointments.fax}</h4>
                    <p className="text-muted-foreground">{t.appointments.locations.mainOffice.fax}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.appointments.email}</h4>
                    <p className="text-muted-foreground">{t.appointments.locations.mainOffice.email}</p>
                  </div>
                </div>
                <Button asChild className="self-start">
                  <Link to="/locations/surrey-hills">{t.appointments.locations.mainOffice.viewDetails}</Link>
                </Button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">{t.appointments.locations.allLocations}</h3>
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
                <Link to="/locations">{t.appointments.locations.viewAllLocations}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
