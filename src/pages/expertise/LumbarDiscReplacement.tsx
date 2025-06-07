import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SafeImage from "@/components/SafeImage";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function LumbarDiscReplacement() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout pageTitle="Lumbar Disc Replacement">
      <main className="flex-1">
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

                <p className="text-muted-foreground mb-6">
                  Dr. Ales Aliashkevich is a strong advocate for motion-preserving spinal surgery. He has been using lumbar disc replacement in patients with chronic back pain, radiculopathy, and degenerative disc disease since 2006, achieving excellent results. Over the years, he has gained extensive experience in single and multi-level arthroplasty and hybrid procedures.
                </p>

                <h2 className="text-2xl font-bold mb-6">History of Lumbar Disc Replacement</h2>
                <p className="text-muted-foreground mb-6">
                  The concept of lumbar disc replacement began in the 1950s, but the first modern artificial disc, the Charité disc, was developed in the 1980s in Germany. The technology has evolved significantly since then, with newer generations of devices offering improved biomechanics and durability.
                </p>

                <p className="text-muted-foreground mb-6">
                  In Australia, lumbar total disc replacement surgery has been performed since the early 2000s. Decades of biomechanical research, engineering, and meticulous clinical studies were required to achieve advances in medical device technology and to produce the current line of artificial intervertebral discs.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/LP-ESP-arthroplasty-disc-replacement-lumbar-kinetics-Aliashkevich-spine-neurosurgery-miNEURO-advanced-technology.jpg"
                    alt="Lumbar Disc Replacement - LP-ESP Artificial Disc"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Understanding Lumbar Disc Disease</h2>
                <p className="text-muted-foreground mb-6">
                  Natural aging of the disc (degeneration) or trauma can affect its mobility and cause a reduction of its cushioning function. Structurally, it may manifest in a disc protrusion, herniation, or formation of bone spurs (osteophytes) causing pressure on the neural structures and resulting in back pain, leg pain, numbness, or weakness.
                </p>

                <p className="text-muted-foreground mb-6">
                  Lumbar arthroplasty is aimed at restoring the shock-absorbing function of the damaged or degenerated intervertebral disc with simultaneous decompression of the spinal cord and nerve roots. Similar to well-established hip and knee joint replacement procedures, the evolution of artificial disc prostheses has resulted in dramatic improvements in patients' quality of life and high levels of patient satisfaction.
                </p>

                <p className="text-muted-foreground mb-6">
                  The initial treatment of lumbar disc disease involves rest, gentle physical therapy, painkillers or anti-inflammatory medications. Sometimes, spinal nerve root injections with local anesthetic or steroids can be applied. Surgical treatment is taken into consideration only as the very last resort to manage intractable pain or neurological deficit.
                </p>

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

                <h2 className="text-2xl font-bold mb-6">Lumbar Disc Implants</h2>
                <p className="text-muted-foreground mb-6">
                  Modern artificial lumbar disc implants are available in various shapes, sizes, heights, and articulation types. Some of the commonly used implants include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">ProDisc-L</h3>
                    <p className="text-muted-foreground">
                      A ball-and-socket design with metal endplates and a polyethylene core. It allows for controlled motion in multiple directions and has been in clinical use for over 15 years.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">activL Artificial Disc</h3>
                    <p className="text-muted-foreground">
                      Features a mobile core that allows for translation as well as rotation, more closely mimicking natural disc movement. It has variable heights to better match patient anatomy.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">LP-ESP Disc</h3>
                    <p className="text-muted-foreground">
                      A newer generation disc with a viscoelastic core that more closely mimics the natural properties of a human disc, allowing for shock absorption and natural movement in all directions.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">M6-L Artificial Disc</h3>
                    <p className="text-muted-foreground">
                      Features an artificial nucleus and annulus design that aims to replicate the natural disc's structure and function, allowing for compression and controlled motion.
                    </p>
                  </div>
                </div>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/lumbar-disc-implants-examples-arthroplasty-replacement-cervical-lumbar-spine-advanced-technology-robotic-spine.jpg"
                    alt="Various lumbar disc implant models used in disc replacement surgery"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
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
                  The procedure typically takes 2-3 hours, and most patients stay in the hospital for 2-4 days after surgery. The surgical approach is usually performed with the assistance of a vascular surgeon to safely navigate around major blood vessels in the abdomen.
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

                <p className="text-muted-foreground mb-6">
                  Most patients can return to light work within 2-4 weeks and more strenuous activities within 8-12 weeks, depending on their specific situation and <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich's</a> recommendations.
                </p>

                <p className="text-muted-foreground mb-6">
                  For the first few weeks at home, patients are recommended to avoid lifting weights over 5 kg and to engage in any strenuous or repetitive activities that may affect the lower back. Walking is encouraged as it promotes healing and helps prevent complications. A structured physical therapy program typically begins 4-6 weeks after surgery.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/recovery-arthroplasty-disc-replacement-cervical-lumbar-advanced-technology-maximum-precision-robotic-spine.jpg"
                    alt="Patient recovery after lumbar disc replacement surgery"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Comparison with Lumbar Fusion</h2>
                <p className="text-muted-foreground mb-6">
                  Both artificial lumbar disc replacement and lumbar fusion offer favorable clinical outcomes for appropriately selected patients. However, there are important differences to consider:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Lumbar Disc Replacement</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Preserves motion at the treated level</li>
                      <li>Reduces stress on adjacent discs</li>
                      <li>May prevent adjacent segment disease</li>
                      <li>Faster recovery in many cases</li>
                      <li>No bone graft needed</li>
                      <li>Maintains more natural spine biomechanics</li>
                    </ul>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Lumbar Fusion</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Eliminates motion at the treated level</li>
                      <li>Well-established procedure with long-term data</li>
                      <li>May be more suitable for certain conditions</li>
                      <li>Ability to address multi-level pathology</li>
                      <li>Wider insurance coverage</li>
                      <li>May be preferred for patients with certain anatomical factors</li>
                    </ul>
                  </div>
                </div>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/ALIF-compare-arthroplasty-disc-replacement-cervical-lumbar-advanced-technology-maximum-precision-robotic-spine.jpg"
                    alt="Comparison between lumbar disc replacement and fusion procedure"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <p className="text-muted-foreground mb-8">
                  As a general rule, Dr. Aliashkevich would recommend considering lumbar disc replacement as the preferred choice over fusion when appropriate. Only if it is not feasible, e.g., in multi-level pathology or severe facet joint disease, consideration may be given to fusion or a hybrid procedure.
                </p>

                <h2 className="text-2xl font-bold mb-6">Long-Term Outcomes and Research</h2>
                <p className="text-muted-foreground mb-6">
                  Long-term studies have shown excellent outcomes for lumbar disc replacement. Research indicates:
                </p>

                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>High patient satisfaction rates (over 85% in many studies)</li>
                  <li>Maintained motion at the operated level for 10+ years</li>
                  <li>Lower rates of adjacent segment disease compared to fusion</li>
                  <li>Reduced need for revision surgery</li>
                  <li>Excellent pain relief and functional improvement</li>
                </ul>

                <p className="text-muted-foreground mb-8">
                  Multiple randomized controlled trials have demonstrated that lumbar disc replacement is at least as effective as fusion for appropriately selected patients, with the added benefit of preserving motion. Studies with 5-10 year follow-up show continued good outcomes with modern disc designs.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/robotic-spine-surgery-radiology-successful-neurosurgery-spine-surgery-advanced-technology-maximum-precision.jpg"
                    alt="Research outcomes for lumbar disc replacement showing long-term benefits"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

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
                  <li>Extensive experience with single and multi-level arthroplasty since 2006</li>
                  <li>Experience with hybrid procedures combining disc replacement and fusion when necessary</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Eligibility Criteria</h3>
                    <p className="text-muted-foreground mb-4">
                      In Australia, lumbar disc replacement is approved for patients who:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Have not had prior spinal surgery at the same lumbar level</li>
                      <li>Are skeletally mature (typically 18-60 years old)</li>
                      <li>Have symptomatic degenerative disc disease with back pain</li>
                      <li>Do not have vertebral osteoporosis</li>
                      <li>Have failed conservative therapy for at least 6 months</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6 text-primary">Contraindications</h3>
                    <p className="text-muted-foreground mb-4">
                      Lumbar disc replacement may not be suitable for patients with:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Severe facet joint arthritis</li>
                      <li>Significant lumbar instability</li>
                      <li>Severe osteoporosis</li>
                      <li>Active infection</li>
                      <li>Certain types of deformity (scoliosis, spondylolisthesis)</li>
                      <li>Obesity (BMI {'>'} 35)</li>
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
                        <Link to="/expertise/lumbar-fusion" className="text-primary hover:underline">
                          Lumbar Fusion
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/minimally-invasive-spine-surgery" className="text-primary hover:underline">
                          Minimally Invasive Spine Surgery
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
                        <Link to="/patient-resources/spine-health-app" className="text-primary hover:underline">
                          Spine Health App
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient-resources/exercise-library" className="text-primary hover:underline">
                          Exercise Library
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient-resources/condition-info" className="text-primary hover:underline">
                          Lumbar Spine Conditions
                        </Link>
                      </li>
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
    </Layout>
  );
}
