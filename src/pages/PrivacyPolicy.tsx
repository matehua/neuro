import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
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
        <section className="relative py-12 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                How we collect, use, and protect your personal information
              </p>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto prose dark:prose-invert">
              <p className="lead">
                Dr. Ales Aliashkevich and miNEURO Brain and Spine Surgery are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Schedule an appointment</li>
                <li>Register on our website</li>
                <li>Fill out a form</li>
                <li>Contact us via email, phone, or other communication channels</li>
                <li>Provide medical information for treatment purposes</li>
              </ul>
              
              <p>
                The personal information we may collect includes:
              </p>
              <ul>
                <li>Name, address, email address, and phone number</li>
                <li>Date of birth and Medicare/private health insurance details</li>
                <li>Medical history, current medications, and treatment information</li>
                <li>Referral information from other healthcare providers</li>
                <li>Payment information</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing medical services and treatment</li>
                <li>Communicating with you about appointments, follow-ups, and care instructions</li>
                <li>Processing payments and billing</li>
                <li>Improving our services and patient experience</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Conducting quality assurance and improvement activities</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul>
                <li>Healthcare professionals involved in your care</li>
                <li>Hospitals and other healthcare facilities where you receive treatment</li>
                <li>Medicare, private health insurers, and other payment providers</li>
                <li>Government agencies when required by law</li>
                <li>Service providers who assist us in operating our practice (e.g., billing services, IT support)</li>
              </ul>
              
              <p>
                We will not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes.
              </p>
              
              <h2>Security of Your Information</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Secure electronic medical record systems</li>
                <li>Physical security measures for paper records</li>
                <li>Staff training on privacy and confidentiality</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
              </ul>
              
              <h2>Your Rights</h2>
              <p>
                Under Australian privacy law, you have the right to:
              </p>
              <ul>
                <li>Access your personal information held by us</li>
                <li>Request correction of inaccurate, incomplete, or out-of-date information</li>
                <li>Complain about a breach of privacy</li>
                <li>Opt out of receiving marketing communications</li>
              </ul>
              
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience and collect information about how you use our website. You can control cookies through your browser settings.
              </p>
              
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:
              </p>
              <p>
                miNEURO Brain and Spine Surgery<br />
                Suite 4, 619 Canterbury Road<br />
                Surrey Hills VIC 3127<br />
                Phone: (03) 90084200<br />
                Email: privacy@mineuro.com.au
              </p>
              
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: April 2023
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
