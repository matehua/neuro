import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout pageTitle="Privacy Policy">
      <main className="flex-1">
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
                Dr. Ales Aliashkevich and miNEURO Brain and Spine Surgery ("we", "us", "our") are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>

              <h2>About This Policy</h2>
              <p>
                This Privacy Policy applies to all personal information collected by miNEURO Brain and Spine Surgery, whether through our website, in person at our clinics, or through other means of communication. By providing your personal information to us, you consent to the collection, use, storage, and disclosure of that information as described in this Privacy Policy.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect personal information that is reasonably necessary for our functions and activities as a healthcare provider. This information may be collected directly from you or, in some cases, from third parties such as:
              </p>
              <ul>
                <li>Your general practitioner or other healthcare providers</li>
                <li>Medicare or your private health insurer</li>
                <li>Family members or carers (where authorized)</li>
              </ul>

              <p>
                We collect personal information when you:
              </p>
              <ul>
                <li>Schedule or attend an appointment</li>
                <li>Register on our website or patient portal</li>
                <li>Complete forms (online or in person)</li>
                <li>Contact us via email, phone, or other communication channels</li>
                <li>Provide medical information for treatment purposes</li>
                <li>Participate in surveys or research (with your consent)</li>
              </ul>

              <p>
                The personal information we may collect includes:
              </p>
              <ul>
                <li>Name, address, email address, and phone number</li>
                <li>Date of birth and gender</li>
                <li>Medicare number, private health insurance details, and Department of Veterans' Affairs details</li>
                <li>Medical history, current medications, allergies, and treatment information</li>
                <li>Referral information from other healthcare providers</li>
                <li>Diagnostic imaging and test results</li>
                <li>Payment information</li>
              </ul>

              <h3>Sensitive Information</h3>
              <p>
                As a healthcare provider, we collect sensitive information, including health information, which is a special category of personal information under the Privacy Act. We will only collect sensitive information:
              </p>
              <ul>
                <li>With your consent (which may be express or implied in the healthcare context)</li>
                <li>When it is necessary for our functions and activities</li>
                <li>When required or authorized by law</li>
              </ul>

              <h3>Collection from Third Parties</h3>
              <p>
                Where reasonable and practicable, we will collect personal information directly from you. However, in some circumstances, we may collect information from third parties, such as other healthcare providers. When we do so, we will take reasonable steps to inform you about the collection.
              </p>

              <h2>Purpose of Collection</h2>
              <p>
                We collect, hold, use, and disclose your personal information for the following primary purposes:
              </p>
              <ul>
                <li>Providing medical services and treatment</li>
                <li>Managing your healthcare, including diagnosis, treatment, and ongoing care</li>
                <li>Communicating with you about appointments, follow-ups, and care instructions</li>
                <li>Maintaining accurate and up-to-date medical records</li>
                <li>Processing payments and billing</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Conducting quality assurance and improvement activities</li>
                <li>Training staff and healthcare professionals</li>
                <li>Managing our practice efficiently</li>
              </ul>

              <p>
                We may also use your information for secondary purposes such as:
              </p>
              <ul>
                <li>Research and statistical analysis (in a de-identified form)</li>
                <li>Evaluating and improving our services</li>
                <li>Responding to your feedback or complaints</li>
                <li>Sending you appointment reminders or health information</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>
                We may disclose your personal information to:
              </p>
              <ul>
                <li>Healthcare professionals involved in your care</li>
                <li>Hospitals and other healthcare facilities where you receive treatment</li>
                <li>Medicare, private health insurers, and other payment providers</li>
                <li>Government agencies when required by law (e.g., mandatory reporting obligations)</li>
                <li>Service providers who assist us in operating our practice (e.g., billing services, IT support)</li>
                <li>Your authorized representatives (e.g., family members, carers)</li>
                <li>Our professional advisers (e.g., lawyers, accountants)</li>
                <li>Entities involved in the sale or transfer of our business (if applicable)</li>
              </ul>

              <p>
                We will not disclose your personal information to overseas recipients without your consent, unless required by law.
              </p>

              <p>
                We will not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.
              </p>

              <h2>Security of Your Information</h2>
              <p>
                We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorized access, modification, or disclosure. These measures include:
              </p>
              <ul>
                <li>Secure electronic medical record systems with encryption</li>
                <li>Physical security measures for paper records</li>
                <li>Staff training on privacy and confidentiality obligations</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Secure disposal of records when no longer needed</li>
                <li>Data breach response procedures</li>
              </ul>

              <p>
                While we implement these safeguards, no data transmission over the internet or electronic storage system can be guaranteed to be 100% secure. If a data breach occurs that is likely to result in serious harm, we will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) as required by the Notifiable Data Breaches scheme.
              </p>

              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law. For medical records, we follow the retention periods specified by relevant health records legislation in Victoria and other applicable laws.
              </p>

              <h2>Your Rights and Choices</h2>
              <p>
                Under the Australian Privacy Principles, you have the right to:
              </p>
              <ul>
                <li>Access your personal information held by us</li>
                <li>Request correction of inaccurate, incomplete, or out-of-date information</li>
                <li>Request not to receive marketing communications</li>
                <li>Make a complaint about a breach of privacy</li>
                <li>Request information about our privacy practices</li>
              </ul>

              <h3>Accessing and Correcting Your Information</h3>
              <p>
                You can request access to your personal information by contacting our Privacy Officer. We will respond to your request within a reasonable timeframe (usually within 30 days). We may charge a reasonable fee for providing access to cover our costs.
              </p>

              <p>
                If you believe that any information we hold about you is inaccurate, incomplete, or out-of-date, please contact us, and we will take reasonable steps to correct it.
              </p>

              <p>
                In some circumstances, we may refuse access or correction as permitted by law. If this occurs, we will provide you with reasons for the refusal and information about how you can complain about the refusal.
              </p>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience and collect information about how you use our website. This information may include:
              </p>
              <ul>
                <li>Your IP address and browser type</li>
                <li>Pages you visit and features you use</li>
                <li>Date and time of your visit</li>
                <li>Information about your device</li>
              </ul>

              <p>
                You can control cookies through your browser settings. Disabling cookies may affect your experience on our website.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date. Significant changes will be notified to you through our website or by other means. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2>Making a Complaint</h2>
              <p>
                If you believe that we have breached the Australian Privacy Principles or mishandled your personal information, you can make a complaint to our Privacy Officer. We will:
              </p>
              <ul>
                <li>Acknowledge receipt of your complaint within 7 days</li>
                <li>Investigate the complaint and provide a response within 30 days</li>
                <li>Take appropriate steps to address the complaint</li>
              </ul>

              <p>
                If you are not satisfied with our response, you can complain to the Office of the Australian Information Commissioner (OAIC) at:
              </p>
              <p>
                Office of the Australian Information Commissioner<br />
                GPO Box 5218<br />
                Sydney NSW 2001<br />
                Phone: 1300 363 992<br />
                Email: enquiries@oaic.gov.au<br />
                Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact our Privacy Officer at:
              </p>
              <p>
                Privacy Officer<br />
                miNEURO Brain and Spine Surgery<br />
                Suite 4, 619 Canterbury Road<br />
                Surrey Hills VIC 3127<br />
                Phone: (03) 90084200<br />
                Email: privacy@mineuro.com.au
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                Last updated: June 2023
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
