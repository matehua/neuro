
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Check, FileText, CreditCard, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.contact.title}
              </h1>
              <p className="text-muted-foreground mb-4">
                {t.contact.subtitle}
              </p>
              <p className="text-muted-foreground">
                Our staff will assist to coordinate an appointment at the location most convenient and accessible for you. Urgent appointments are available on request.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <h2 className="text-2xl font-bold mb-6">{t.contact.getInTouch}</h2>

                <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
                  <img
                    src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-reception-desk.jpg"
                    alt="miNEURO Consulting Suites Reception"
                    className="w-full h-auto"
                  />
                </div>

                <div className="glass-card p-6 space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.address}</h3>
                      <p className="text-muted-foreground">
                        miNEURO Consulting Suites<br />
                        Suite 4, Ground Floor, 619 Canterbury Road<br />
                        SURREY HILLS VIC 3127<br />
                        Australia
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Our main office is located in Surrey Hills, within 2 minutes walking distance from the train station.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                      <p className="text-muted-foreground">Ph: 03 9008 4200</p>
                      <p className="text-muted-foreground mt-2">Urgent appointments available on request</p>
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
                      <h3 className="font-semibold mb-1">{t.contact.email}</h3>
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
                      <h3 className="font-semibold mb-1">{t.contact.receptionHours}</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:30 AM - 5:30 PM<br />
                        Saturday - Sunday: Closed
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
                <h2 className="text-2xl font-bold mb-6">{t.contact.sendMessage}</h2>

                <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
                  <img
                    src="/images/medical-consulting-room-lease-Surrey-Hills-miNEURO-waiting-area.jpg"
                    alt="miNEURO Consulting Suites Waiting Area"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground mb-6">
                  Our staff will assist to coordinate an appointment at the location most convenient and accessible for you. If you have any questions about our services, please call our main office on 03 9008 4200 or email us at info@mineuro.com.au.
                </p>

                <div className="glass-card p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.fullName}</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">{t.contact.email}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t.contact.phoneNumber}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="03 1234 5678"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">{t.contact.subject}</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Appointment Inquiry"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t.contact.message}</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={t.contact.howCanWeHelp}
                          className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary">
                        <Send className="mr-2 h-4 w-4" />
                        {t.contact.send}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{t.contact.messageSent}</h3>
                      <p className="text-muted-foreground mb-6">
                        {t.contact.thankYou}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">{t.nav.locations}</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> consults at multiple locations across Melbourne and Victoria for your convenience. Our staff will assist to coordinate an appointment at the location most convenient and accessible for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/locations/surrey-hills">
                  <div className="text-center">
                    <h3 className="font-semibold">Surrey Hills</h3>
                    <p className="text-xs text-muted-foreground">miNEURO Consulting Suites<br />Suite 4, 619 Canterbury Road<br />SURREY HILLS 3127</p>
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
                <img
                  src="/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg"
                  alt="miNEURO Consulting Suites Entrance"
                  className="w-full h-auto"
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
                <Link to="/locations">{t.home.featuredProcedures.viewAll}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
