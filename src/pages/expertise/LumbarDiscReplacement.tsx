import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LumbarDiscReplacement() {
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
                Lumbar Disc Replacement
              </h1>
              <p className="text-muted-foreground">
                Advanced motion-preserving treatment for lumbar disc disease
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">What is Lumbar Disc Replacement?</h2>
                <p className="text-muted-foreground mb-6">
                  Lumbar disc replacement (also known as lumbar arthroplasty) is an advanced surgical procedure that involves removing a damaged disc in the lower back and replacing it with an artificial disc device. Unlike traditional fusion surgery, which eliminates motion at the treated level, disc replacement aims to preserve normal spine movement while relieving pain and neurological symptoms.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <img
                    src="/images/CP-ESP-arthroplasty-disc-replacement-cervical-lumbar.jpg"
                    alt="Lumbar Disc Replacement"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">When is Lumbar Disc Replacement Recommended?</h2>
                <p className="text-muted-foreground mb-6">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> may recommend lumbar disc replacement for patients with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Lumbar degenerative disc disease causing chronic low back pain</li>
                  <li>Disc herniation with persistent symptoms despite conservative treatment</li>
                  <li>Recurrent disc herniation</li>
                  <li>Failed conservative treatments such as physical therapy, medications, or injections</li>
                  <li>Relatively young and active patients who want to maintain mobility</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Benefits of Lumbar Disc Replacement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Preserved Motion</h3>
                    <p className="text-muted-foreground">
                      Maintains natural spine movement, allowing you to bend and twist more naturally than with fusion.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Reduced Adjacent Segment Disease</h3>
                    <p className="text-muted-foreground">
                      By preserving motion, disc replacement reduces stress on adjacent discs, potentially preventing future problems at those levels.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Faster Recovery</h3>
                    <p className="text-muted-foreground">
                      Many patients experience quicker recovery compared to fusion surgery, with less postoperative pain and earlier return to activities.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">No Bone Graft Needed</h3>
                    <p className="text-muted-foreground">
                      Unlike fusion, disc replacement doesn't require bone grafting, eliminating potential graft site pain and complications.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">The Procedure</h2>
                <p className="text-muted-foreground mb-4">
                  Lumbar disc replacement is typically performed under general anaesthesia and involves:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground mb-8 space-y-2">
                  <li>An incision in the abdomen (anterior approach)</li>
                  <li>Careful retraction of abdominal contents to access the spine</li>
                  <li>Removal of the damaged disc and any bone spurs</li>
                  <li>Decompression of the spinal cord and nerve roots</li>
                  <li>Precise placement of the artificial disc device</li>
                  <li>Closure of the incision</li>
                </ol>

                <p className="text-muted-foreground mb-8">
                  The procedure typically takes 2-3 hours, and most patients stay in the hospital for 2-4 days after surgery.
                </p>

                <h2 className="text-2xl font-bold mb-6">Recovery and Rehabilitation</h2>
                <p className="text-muted-foreground mb-4">
                  Recovery after lumbar disc replacement varies from patient to patient, but generally includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Hospital stay of 2-4 days</li>
                  <li>Gradual return to normal activities over 4-6 weeks</li>
                  <li>Physical therapy to strengthen core and back muscles</li>
                  <li>Restrictions on heavy lifting and certain movements initially</li>
                  <li>Follow-up appointments to monitor healing and progress</li>
                </ul>

                <p className="text-muted-foreground mb-8">
                  Most patients can return to light work within 2-4 weeks and more strenuous activities within 8-12 weeks, depending on their specific situation and <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich's</a> recommendations.
                </p>

                <h2 className="text-2xl font-bold mb-6">Why Choose Dr. Aliashkevich for Lumbar Disc Replacement?</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> is highly experienced in lumbar disc replacement surgery and offers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Expertise in the latest artificial disc technologies</li>
                  <li>Minimally invasive surgical techniques</li>
                  <li>Personalized treatment plans tailored to each patient's needs</li>
                  <li>Comprehensive pre-operative assessment and planning</li>
                  <li>Dedicated post-operative care and rehabilitation support</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Is Lumbar Disc Replacement Right for You?</h3>
                    <p className="text-muted-foreground mb-4">
                      While lumbar disc replacement offers many benefits, it's not appropriate for everyone. Factors that may influence suitability include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Age and overall health</li>
                      <li>Extent and location of disc damage</li>
                      <li>Presence of spinal instability or deformity</li>
                      <li>Bone quality</li>
                      <li>Previous back surgeries</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> will conduct a thorough evaluation to determine if you're a good candidate for this procedure.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/appointments">Schedule a Consultation</Link>
                    </Button>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Related Procedures</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/expertise/cervical-disc-replacement" className="text-primary hover:underline">
                          Cervical Disc Replacement
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/image-guided-surgery" className="text-primary hover:underline">
                          Image-Guided Surgery
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/robotic-spine-surgery" className="text-primary hover:underline">
                          Robotic Spine Surgery
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Patient Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/faq" className="text-primary hover:underline">
                          Frequently Asked Questions
                        </Link>
                      </li>
                      <li>
                        <Link to="/appointments" className="text-primary hover:underline">
                          Preparing for Your Appointment
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="text-primary hover:underline">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Treatment Options?</h2>
              <p className="text-muted-foreground mb-8">
                Contact us today to schedule a consultation with <a href="http://www.neurosurgeon.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Ales Aliashkevich</a> to learn more about lumbar disc replacement and whether it might be right for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">Book an Appointment</Link>
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
