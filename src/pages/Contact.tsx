import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Check, FileText, CreditCard, Building, Users } from 'lucide-react';

import PageHeader from '@/components/PageHeader';
import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.contact && safeT.nav && safeT.home) ? safeT : {
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our team to schedule your consultation.",
      getInTouch: "Get in Touch",
      address: "Address",
      phone: "Phone",
      email: "Email",
      receptionHours: "Reception Hours",
      sendMessage: "Send a Message",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      subject: "Subject",
      message: "Message",
      howCanWeHelp: "How can we help you?",
      send: "Send Message"
    },
    nav: {
      locations: "Locations"
    },
    home: {
      featuredProcedures: {
        viewAll: "View All Locations"
      }
    }
  };
  const deviceInfo = useDeviceDetection();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would send the form data to a server

    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title={finalT.contact.title}
        subtitle={`${finalT.contact.subtitle} Our staff will assist to coordinate an appointment at the location most convenient and accessible for you. Urgent appointments are available on request.`}
        backgroundImage="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-reception.jpg"
        enableParallax={true}
      />

      <main className="flex-1">

        {/* Contact Information & Form */}
        <section className={deviceInfo.isMobile ? "mobile-section" : "section"}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-xl"
                : "grid grid-cols-1 lg:grid-cols-2 gap-12"
            )}>
              {/* Contact Information */}
              <div className={cn(
                deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:100ms]"
              )}>
                <h2 className={cn(
                  "font-bold mb-mobile-lg",
                  deviceInfo.isMobile ? "mobile-heading" : "text-2xl mb-6"
                )}>
                  {finalT.contact.getInTouch}
                </h2>

                <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
                  <SafeImage
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-reception-desk.jpg"
                    alt="miNEURO Consulting Suites Reception"
                    className="w-full h-auto"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <div className={cn(
                  "glass-card space-y-mobile-lg mb-mobile-xl",
                  deviceInfo.isMobile ? "p-mobile-lg" : "p-6 space-y-6 mb-8"
                )}>
                  <div className="flex items-start">
                    <div className={cn(
                      "flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center",
                      deviceInfo.isMobile
                        ? "h-12 w-12 mr-mobile-md"
                        : "h-10 w-10 mr-4"
                    )}>
                      <MapPin className={cn(
                        "text-primary",
                        deviceInfo.isMobile ? "h-6 w-6" : "h-5 w-5"
                      )} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-semibold mb-1",
                        deviceInfo.isMobile ? "mobile-subheading" : ""
                      )}>
                        {finalT.contact.address}
                      </h3>
                      <p className={cn(
                        "text-muted-foreground",
                        deviceInfo.isMobile ? "mobile-text" : ""
                      )}>
                        miNEURO Consulting Suites<br />
                        Suite 4, Ground Floor, 619 Canterbury Road<br />
                        SURREY HILLS VIC 3127<br />
                        Australia
                      </p>
                      <p className={cn(
                        "text-muted-foreground mt-2",
                        deviceInfo.isMobile ? "mobile-text" : ""
                      )}>
                        Our main office is located in Surrey Hills, within 2 minutes walking distance from the train station.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className={cn(
                      "flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center",
                      deviceInfo.isMobile
                        ? "h-12 w-12 mr-mobile-md"
                        : "h-10 w-10 mr-4"
                    )}>
                      <Phone className={cn(
                        "text-primary",
                        deviceInfo.isMobile ? "h-6 w-6" : "h-5 w-5"
                      )} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-semibold mb-1",
                        deviceInfo.isMobile ? "mobile-subheading" : ""
                      )}>
                        {finalT.contact.phone}
                      </h3>
                      <a
                        href="tel:+61390084200"
                        className={cn(
                          "text-muted-foreground transition-colors touch-feedback",
                          deviceInfo.isMobile
                            ? "mobile-text block"
                            : "hover:text-primary"
                        )}
                      >
                        Ph: 03 9008 4200
                      </a>
                      <p className={cn(
                        "text-muted-foreground mt-2",
                        deviceInfo.isMobile ? "mobile-text" : ""
                      )}>
                        Urgent appointments available on request
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fax</h3>
                      <p className="text-muted-foreground">Fax: 03 9923 6688</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{finalT.contact.email}</h3>
                      <p className="text-muted-foreground">Email: info@mineuro.com.au</p>
                      <p className="text-muted-foreground">Argus: argus@mineuro.com.au</p>
                      <p className="text-muted-foreground">HealthLink: mineuros</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{finalT.contact.receptionHours}</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:30 AM - 5:30 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Emergency Contact Information</h3>
                <div className="glass-card p-6 mb-8">
                  <div className="space-y-4">
                    <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-md">
                      <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">Emergency Contact Numbers</h4>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-bold">Neurosurgical Urgent Enquiries (Business Hours):</span>
                          <span className="text-red-700 dark:text-red-400 font-bold ml-2">(03) 9008 4200</span>
                        </p>
                        <p className="text-sm">
                          <span className="font-bold">After Hours Emergency:</span>
                          <span className="text-red-700 dark:text-red-400 font-bold ml-2">000</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border border-blue-300 bg-blue-50 dark:bg-blue-950/20 rounded-md">
                      <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3">Epworth Richmond Hospital Emergency Department (24 hours)</h4>
                      <div className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                        <p><span className="font-medium">Address:</span> 62 Erin Street, Richmond Victoria 3121</p>
                        <p><span className="font-medium">Phone:</span> (03) 9506 3000</p>
                        <p>
                          <span className="font-medium">Website:</span>
                          <a href="https://www.epworth.org.au/Our-Services/Emergency" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 ml-1">
                            https://www.epworth.org.au/Our-Services/Emergency
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-md border border-yellow-200">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                        <strong>Important:</strong> For immediate life-threatening emergencies, always call 000 first. For neurosurgical consultation during business hours, call (03) 9008 4200.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">GP and Specialist Referrals</h3>
                <div className="glass-card p-6 mb-8">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        A current referral from a general practitioner (GP) or specialist is required for all new patients to claim Medicare rebate. GP referrals are usually valid for 12 months and specialist's referrals for 3 months. Ideally, results of current radiological imaging (&lt;12 months old) should be attached to a referral.
                      </p>
                      <p className="text-muted-foreground mt-4">
                        After receiving a referral, the patient will be contacted by our staff to arrange an appointment.
                      </p>
                      <div className="mt-4">
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <Link to="/appointments">Online Referral</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Insurance Information</h3>
                <div className="glass-card p-6 mb-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Private Health Insurance</h4>
                      <p className="text-muted-foreground">
                        Patients must have valid private health/hospital insurance with no waiting periods. Extras are not valid. The health funds don't contribute to consultation fees.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">TAC</h4>
                      <p className="text-muted-foreground">
                        Claim details and consultation approval from TAC are required.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Veteran Affairs/Military</h4>
                      <p className="text-muted-foreground">
                        Both "Gold Card" and "White Card" patients are eligible. For "White Card" holders, a condition must be covered by DVA.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WorkCover</h4>
                      <p className="text-muted-foreground">
                        Claim details and consultation approval from the insurer. Patients must pay the consultation fee upfront and claim reimbursement from their insurer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Uninsured</h4>
                      <p className="text-muted-foreground">
                        Self-funded patients can be provided with a quote for all surgical, anaesthetic and hospital costs. As an example, the minimum amount required for a single-segment spinal surgery not requiring any implants in a private hospital in Victoria can be around $15,000 – $20,000. For all other uninsured referrals, please contact the closest public hospital directly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288576424!2d145.1015663!3d-37.8204709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2s619%20Canterbury%20Rd%2C%20Surrey%20Hills%20VIC%203127!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in [animation-delay:300ms]">
                <h2 className="text-2xl font-bold mb-6">{finalT.contact.sendMessage}</h2>

                <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
                  <SafeImage
                    src="/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-waiting-area.jpg"
                    alt="miNEURO Consulting Suites Waiting Area"
                    className="w-full h-auto"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <p className="text-muted-foreground mb-6">
                  Our staff will assist to coordinate an appointment at the location most convenient and accessible for you. If you have any questions about our services, please call our main office on 03 9008 4200 or email us at info@mineuro.com.au.
                </p>

                <div className={cn(
                  "glass-card",
                  deviceInfo.isMobile ? "p-mobile-lg" : "p-6"
                )}>
                  {!isSubmitted ? (
                    <form
                      onSubmit={handleSubmit}
                      className={cn(
                        deviceInfo.isMobile ? "space-y-mobile-lg" : "space-y-6"
                      )}
                    >
                      <div className={cn(
                        deviceInfo.isMobile
                          ? "grid grid-cols-1 gap-mobile-md"
                          : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                      )}>
                        <div className={cn(
                          deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
                        )}>
                          <Label
                            htmlFor="name"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-text font-medium" : ""
                            )}
                          >
                            {finalT.contact.fullName}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-input" : ""
                            )}
                            required
                          />
                        </div>

                        <div className={cn(
                          deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
                        )}>
                          <Label
                            htmlFor="email"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-text font-medium" : ""
                            )}
                          >
                            {finalT.contact.email}
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-input" : ""
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className={cn(
                        deviceInfo.isMobile
                          ? "grid grid-cols-1 gap-mobile-md"
                          : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                      )}>
                        <div className={cn(
                          deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
                        )}>
                          <Label
                            htmlFor="phone"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-text font-medium" : ""
                            )}
                          >
                            {finalT.contact.phoneNumber}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="03 1234 5678"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-input" : ""
                            )}
                          />
                        </div>

                        <div className={cn(
                          deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
                        )}>
                          <Label
                            htmlFor="subject"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-text font-medium" : ""
                            )}
                          >
                            {finalT.contact.subject}
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Appointment Inquiry"
                            className={cn(
                              deviceInfo.isMobile ? "mobile-input" : ""
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className={cn(
                        deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
                      )}>
                        <Label
                          htmlFor="message"
                          className={cn(
                            deviceInfo.isMobile ? "mobile-text font-medium" : ""
                          )}
                        >
                          {finalT.contact.message}
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                            placeholder={finalT.contact.howCanWeHelp}
                          className={cn(
                            "w-full p-3 rounded-md border border-input bg-background touch-manipulation",
                            deviceInfo.isMobile
                              ? "min-h-[120px] mobile-input text-base"
                              : "min-h-[150px]"
                          )}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className={cn(
                          "w-full btn-primary touch-feedback",
                          deviceInfo.isMobile ? "mobile-button" : ""
                        )}
                      >
                        <Send className={cn(
                          "mr-2",
                          deviceInfo.isMobile ? "h-5 w-5" : "h-4 w-4"
                        )} />
                        {finalT.contact.send}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{finalT.contact.messageSent}</h3>
                      <p className="text-muted-foreground mb-6">
                        {finalT.contact.thankYou}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className={cn(
          "bg-primary/5 mobile-safe-area",
          deviceInfo.isMobile ? "py-mobile-xl" : "py-16"
        )}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <h2 className={cn(
              "font-bold text-center mb-mobile-lg",
              deviceInfo.isMobile ? "mobile-heading" : "text-2xl mb-8"
            )}>
              {finalT.nav.locations}
            </h2>
            <p className={cn(
              "text-center text-muted-foreground max-w-3xl mx-auto mb-mobile-lg",
              deviceInfo.isMobile
                ? "mobile-text px-mobile-md"
                : "mb-8"
            )}>
              <a
                href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/"
                className={cn(
                  "text-primary transition-colors touch-feedback",
                  deviceInfo.isMobile ? "" : "hover:underline"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Aliashkevich
              </a> consults at multiple locations across Melbourne and Victoria for your convenience. Our staff will assist to coordinate an appointment at the location most convenient and accessible for you.
            </p>

            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-md mb-mobile-xl"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
            )}>
              <Button
                asChild
                variant="outline"
                className={cn(
                  "h-auto touch-feedback",
                  deviceInfo.isMobile ? "py-mobile-md mobile-button" : "py-4"
                )}
              >
                <Link to="/locations/surrey-hills">
                  <div className="text-center">
                    <h3 className={cn(
                      "font-semibold",
                      deviceInfo.isMobile ? "mobile-subheading" : ""
                    )}>
                      Surrey Hills
                    </h3>
                    <p className={cn(
                      "text-muted-foreground",
                      deviceInfo.isMobile ? "mobile-sm" : "text-xs"
                    )}>
                      miNEURO Consulting Suites<br />Suite 4, 619 Canterbury Road<br />SURREY HILLS 3127
                    </p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/mornington">
                  <div className="text-center">
                    <h3 className="font-semibold">Mornington</h3>
                    <p className="text-xs text-muted-foreground">Nepean Specialist Centre<br />1050 Nepean Highway<br />MORNINGTON 3931</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/frankston">
                  <div className="text-center">
                    <h3 className="font-semibold">Frankston</h3>
                    <p className="text-xs text-muted-foreground">Frankston Private Hospital<br />525 McClelland Drive<br />FRANKSTON 3199</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/moonee-ponds">
                  <div className="text-center">
                    <h3 className="font-semibold">Moonee Ponds</h3>
                    <p className="text-xs text-muted-foreground">Moonee Ponds Specialist Centre<br />827 Mt Alexander Road<br />MOONEE PONDS 3039</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/sunbury">
                  <div className="text-center">
                    <h3 className="font-semibold">Sunbury</h3>
                    <p className="text-xs text-muted-foreground">Lake Imaging<br />17-19 Horne Street<br />SUNBURY 3429</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/bundoora">
                  <div className="text-center">
                    <h3 className="font-semibold">Bundoora</h3>
                    <p className="text-xs text-muted-foreground">UniHill Consulting Suites<br />Level 4 Suite 32, 240 Plenty Road<br />BUNDOORA 3083</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/werribee">
                  <div className="text-center">
                    <h3 className="font-semibold">Werribee</h3>
                    <p className="text-xs text-muted-foreground">Consulting Rooms<br />297 Princes Highway<br />WERRIBEE 3030</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/heidelberg">
                  <div className="text-center">
                    <h3 className="font-semibold">Heidelberg</h3>
                    <p className="text-xs text-muted-foreground">Warringal Private Hospital<br />216 Burgundy St<br />HEIDELBERG 3084</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/dandenong">
                  <div className="text-center">
                    <h3 className="font-semibold">Dandenong</h3>
                    <p className="text-xs text-muted-foreground">Dandenong Neurology & Specialists<br />136 David Street<br />DANDENONG 3175</p>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/wantirna">
                  <div className="text-center">
                    <h3 className="font-semibold">Wantirna</h3>
                    <p className="text-xs text-muted-foreground">Knox Audiology Specialist Medical<br />230 Mountain Highway<br />WANTIRNA 3152</p>
                  </div>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg"
                  alt="miNEURO Consulting Suites Entrance"
                  className="w-full h-auto"
                  fallbackSrc="/images/medical-consulting.jpg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Main Office - Surrey Hills</h3>
                <p className="text-muted-foreground mb-4">
                  Our main office is located in Surrey Hills, within 2 minutes walking distance from the train station. This is our primary consulting location with full administrative support.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Address:</strong> Suite 4, Ground Floor, 619 Canterbury Road, SURREY HILLS VIC 3127<br />
                  <strong>Ph:</strong> 03 9008 4200<br />
                  <strong>Fax:</strong> 03 9923 6688<br />
                  <strong>Email:</strong> info@mineuro.com.au<br />
                  <strong>Argus:</strong> argus@mineuro.com.au<br />
                  <strong>HealthLink:</strong> mineuros
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/locations">{finalT.home.featuredProcedures.viewAll}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </StandardPageLayout>
  );
};

Contact.displayName = 'Contact';

export default Contact;
