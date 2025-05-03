import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsConditions() {
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
                Terms and Conditions
              </h1>
              <p className="text-muted-foreground">
                Please read these terms carefully before using our services
              </p>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto prose dark:prose-invert">
              <p className="lead">
                Welcome to the website of Dr. Ales Aliashkevich and miNEURO Brain and Spine Surgery. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
              </p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, scheduling appointments, or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
              </p>
              
              <h2>2. Medical Information and Disclaimer</h2>
              <p>
                The information provided on our website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p>
                We do not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on our website. Reliance on any information provided by us, our employees, or others appearing on the website is solely at your own risk.
              </p>
              
              <h2>3. Appointments and Cancellations</h2>
              <p>
                When scheduling an appointment with Dr. Aliashkevich, you agree to:
              </p>
              <ul>
                <li>Provide accurate and complete personal and medical information</li>
                <li>Arrive on time for your scheduled appointment</li>
                <li>Notify us at least 24 hours in advance if you need to cancel or reschedule</li>
                <li>Pay a cancellation fee for appointments cancelled with less than 24 hours' notice</li>
              </ul>
              
              <h2>4. Payment and Billing</h2>
              <p>
                Payment for services is due at the time of consultation unless prior arrangements have been made. We accept various payment methods, including credit cards, EFTPOS, and direct bank transfers.
              </p>
              <p>
                For patients with private health insurance, Medicare, or WorkCover, we will assist with processing your claim, but you remain responsible for any portion of the fees not covered by these entities.
              </p>
              
              <h2>5. Privacy</h2>
              <p>
                We respect your privacy and are committed to protecting your personal information. Our collection, use, and disclosure of your information is governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.
              </p>
              
              <h2>6. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of Dr. Ales Aliashkevich and miNEURO Brain and Spine Surgery and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
              </p>
              
              <h2>7. User Conduct</h2>
              <p>
                When using our website, you agree not to:
              </p>
              <ul>
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Impersonate or attempt to impersonate Dr. Aliashkevich, an employee, or another user</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                <li>Attempt to gain unauthorized access to the website, user accounts, or computer systems</li>
                <li>Use the website to transmit or upload any viruses, malware, or other malicious code</li>
              </ul>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Dr. Ales Aliashkevich and miNEURO Brain and Spine Surgery shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services.
              </p>
              
              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Dr. Ales Aliashkevich, miNEURO Brain and Spine Surgery, and our employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms and Conditions or your use of the website.
              </p>
              
              <h2>10. Changes to Terms and Conditions</h2>
              <p>
                We may revise these Terms and Conditions at any time without notice. By continuing to use our website after any changes, you accept and agree to be bound by the revised terms.
              </p>
              
              <h2>11. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Victoria, Australia, without regard to its conflict of law principles.
              </p>
              
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                miNEURO Brain and Spine Surgery<br />
                Suite 4, 619 Canterbury Road<br />
                Surrey Hills VIC 3127<br />
                Phone: (03) 90084200<br />
                Email: info@mineuro.com.au
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
