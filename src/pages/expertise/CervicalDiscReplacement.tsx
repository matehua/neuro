import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import PageHeader from '@/components/PageHeader';
import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';

const CervicalDiscReplacement: React.FC = () => {

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout title="Cervical Disc Replacement" showHeader={false}>
      <PageHeader
        title="Cervical Disc Replacement"
        subtitle="Advanced motion-preserving treatment for cervical disc disease"
        backgroundImage="/images/CP-ESP-arthroplasty-disc-replacement-cervical-lumbar.jpg"
        enableParallax={true}
      />

      <main className="flex-1">

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">What is Cervical Disc Replacement?</h2>
                <p className="text-muted-foreground mb-6">
                  Cervical disc replacement (also known as cervical arthroplasty) is an advanced surgical procedure that involves removing a damaged disc in the neck and replacing it with an artificial disc device. Unlike traditional fusion surgery, which eliminates motion at the treated level, disc replacement aims to preserve normal neck movement while relieving pain and neurological symptoms.
                </p>

                <p className="text-muted-foreground mb-6">
                  Dr Ales Aliashkevich is a strong advocate for motion-preserving spinal surgery. He has been using cervical disc replacement in hundreds of patients with chronic neck pain, radiculopathy and myelopathy since 2006, achieving excellent results. Over the years, he has gained extensive experience in single and multilevel arthroplasty and hybrid procedures.
                </p>

                <h2 className="text-2xl font-bold mb-6">History of Cervical Disc Replacement</h2>
                <p className="text-muted-foreground mb-6">
                  Surgery of the cervical discs began evolving in the 1950s. Dr. Robert Robinson, an orthopedic surgeon, and Dr. George Smith, a neurosurgeon, from John Hopkins Hospital in Baltimore, United States published an article "Anterolateral cervical disc removal and interbody fusion for cervical disc syndrome" in 1955.
                </p>

                <p className="text-muted-foreground mb-6">
                  Cervical total disc replacement surgery began in Australia in the 1990s, but Medicare stopped funding it mainly because of poor results with the first-generation prostheses. Decades of biomechanical research, engineering, and meticulous clinical studies were required to achieve advances in medical device technology and to produce the current line of artificial intervertebral discs.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/CP-ESP-arthroplasty-disc-replacement-cervical-lumbar.jpg"
                    alt="Cervical Disc Replacement - CP-ESP Artificial Disc"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Understanding Cervical Disc Disease</h2>
                <p className="text-muted-foreground mb-6">
                  Natural aging of the disc (degeneration) or trauma can affect its mobility and cause a reduction of its cushioning function. Structurally, it may manifest in a disc protrusion or formation of bone spurs (osteophytes) causing pressure on the neural structures and resulting in neck and arm/shoulder pain, numbness, or weakness.
                </p>

                <p className="text-muted-foreground mb-6">
                  Cervical arthroplasty is aimed at restoring the shock-absorbing function of the damaged or degenerated intervertebral disc with simultaneous decompression of the spinal cord and nerve roots. Similar to well-established hip and knee joint replacement procedures, the evolution of artificial disc prostheses has resulted in dramatic improvements in patients' quality of life and high levels of patient satisfaction.
                </p>

                <p className="text-muted-foreground mb-6">
                  The initial treatment of cervical disc disease involves rest, gentle physical therapy, painkillers or anti-inflammatory medications. Sometimes, spinal nerve root injections with local anesthetic or steroids can be applied. Surgical treatment is taken into consideration only as the very last resort to manage intractable pain or neurological deficit.
                </p>

                <h2 className="text-2xl font-bold mb-6">When is Cervical Disc Replacement Recommended?</h2>
                <p className="text-muted-foreground mb-6">
                  <a href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> may recommend cervical disc replacement for patients with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Cervical disc herniation causing arm pain, numbness, or weakness</li>
                  <li>Cervical degenerative disc disease</li>
                  <li>Cervical radiculopathy (pinched nerve)</li>
                  <li>Cervical myelopathy (spinal cord compression)</li>
                  <li>Failed conservative treatments such as physical therapy, medications, or injections</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Benefits of Cervical Disc Replacement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Preserved Motion</h3>
                    <p className="text-muted-foreground">
                      Maintains natural neck movement, allowing you to look up, down, and side to side more naturally than with fusion.
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

                <h2 className="text-2xl font-bold mb-6">Cervical Disc Implants</h2>
                <p className="text-muted-foreground mb-6">
                  Modern artificial cervical disc implants are available in variable shapes, sizes, heights and articulation types. Some of the commonly used implants include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Bryan Disc (Medtronic)</h3>
                    <p className="text-muted-foreground">
                      A semi-constrained device made of titanium alloy plates and a polyurethane center surrounded by a saline-filled sheath. The plate surfaces are porous with an anterior stop to prevent posterior dislocation.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Discover Prosthesis (DePuy Synthes)</h3>
                    <p className="text-muted-foreground">
                      An unconstrained ball-and-socket device made up of two titanium plates with a stiff polyethylene center. The plates are coated with porous titanium and hydroxyapatite and have small teeth.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Mobi-C Disc (Zimmer Biomet)</h3>
                    <p className="text-muted-foreground">
                      Made from cobalt-chromium-molybdenum alloy coated with a titanium and hydroxyapatite spray. It has a polyethylene center which is supposed to move between two stops providing translational freedom.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">CP-ESP Disc</h3>
                    <p className="text-muted-foreground">
                      A newer generation disc with a viscoelastic core that more closely mimics the natural properties of a human disc, allowing for shock absorption and natural movement.
                    </p>
                  </div>
                </div>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/cervical-disc-implants-examples-arthroplasty-disc-replacement-cervical-lumbar-spine-neurosurgery.jpg"
                    alt="Various cervical disc implant models used in disc replacement surgery"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">The Procedure</h2>
                <p className="text-muted-foreground mb-4">
                  Cervical disc replacement is typically performed under general anaesthesia and involves:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground mb-8 space-y-2">
                  <li>A small incision in the front of the neck (anterior approach)</li>
                  <li>Careful retraction of soft tissues to access the spine</li>
                  <li>Removal of the damaged disc and any bone spurs</li>
                  <li>Decompression of the spinal cord and nerve roots</li>
                  <li>Precise placement of the artificial disc device</li>
                  <li>Closure of the incision, often with dissolvable sutures</li>
                </ol>

                <p className="text-muted-foreground mb-8">
                  The procedure typically takes 1-2 hours, and most patients stay in the hospital for 1-2 days after surgery. The surgical approach can be performed from the left or right side, depending on the dominant symptoms. The incision is usually made slightly off midline after injection of local anesthetic.
                </p>

                <h2 className="text-2xl font-bold mb-6">Recovery and Rehabilitation</h2>
                <p className="text-muted-foreground mb-4">
                  Recovery after cervical disc replacement varies from patient to patient, but generally includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Hospital stay of 1-2 days</li>
                  <li>Wearing a soft collar for comfort (if needed) for a short period</li>
                  <li>Gradual return to normal activities over 2-6 weeks</li>
                  <li>Physical therapy to strengthen neck muscles and improve range of motion</li>
                  <li>Follow-up appointments to monitor healing and progress</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Most patients can return to light work within 1-2 weeks and more strenuous activities within 6-12 weeks, depending on their specific situation and <a href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich's</a> recommendations.
                </p>

                <p className="text-muted-foreground mb-6">
                  For the first days at home, patients are recommended to avoid lifting weights over 2-3 kg and to engage in any strenuous or repetitive activities that may affect the neck. Most patients are capable of returning to their normal activities and light work within a few weeks of surgery.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/recovery-arthroplasty-disc-replacement-cervical-lumbar-advanced-technology-maximum-precision-robotic-spine.jpg"
                    alt="Patient recovery after cervical disc replacement surgery"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Comparison with ACDF (Anterior Cervical Discectomy and Fusion)</h2>
                <p className="text-muted-foreground mb-6">
                  Both artificial cervical disc replacement and anterior cervical discectomy and fusion (ACDF) offer very favorable clinical outcomes, reaching satisfaction rates higher than 80-90% in appropriately selected patients. However, there are important differences to consider:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Cervical Disc Replacement</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Preserves motion at the treated level</li>
                      <li>Reduces stress on adjacent discs</li>
                      <li>May prevent adjacent segment disease</li>
                      <li>Faster recovery in many cases</li>
                      <li>No bone graft needed</li>
                      <li>Maintains more natural neck biomechanics</li>
                    </ul>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">ACDF</h3>
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
                    src="/images/ACDF-compare-arthroplasty-disc-replacement-cervical-lumbar-advanced-technology-maximum-precision-robotic-spine.jpg"
                    alt="Comparison between cervical disc replacement and ACDF procedure"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <p className="text-muted-foreground mb-8">
                  As a general rule, Dr Aliashkevich would recommend considering cervical disc replacement as the preferred choice over fusion. Only if it is not feasible, e.g., in multi-level pathology, consideration may be given to a hybrid procedure where disc replacement in one level is combined with fusion in another.
                </p>

                <h2 className="text-2xl font-bold mb-6">Long-Term Outcomes and Research</h2>
                <p className="text-muted-foreground mb-6">
                  Long-term studies have shown excellent outcomes for cervical disc replacement. Research indicates:
                </p>

                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>High patient satisfaction rates (over 90% in many studies)</li>
                  <li>Maintained motion at the operated level for 10+ years</li>
                  <li>Lower rates of adjacent segment disease compared to fusion</li>
                  <li>Reduced need for revision surgery</li>
                  <li>Excellent pain relief and functional improvement</li>
                </ul>

                <p className="text-muted-foreground mb-8">
                  A landmark study published in the Journal of Neurosurgery: Spine showed that at 7 years post-surgery, patients who received cervical disc replacement had significantly better outcomes than those who underwent fusion, with lower rates of secondary surgeries and better overall function.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/cervical-disc-replacement-research-outcomes-spine-surgery-neurosurgery.jpg"
                    alt="Research outcomes for cervical disc replacement showing long-term benefits"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Why Choose Dr Aliashkevich for Cervical Disc Replacement?</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> is highly experienced in cervical disc replacement surgery and offers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Expertise in the latest artificial disc technologies</li>
                  <li>Minimally invasive surgical techniques</li>
                  <li>Personalized treatment plans tailored to each patient's needs</li>
                  <li>Comprehensive pre-operative assessment and planning</li>
                  <li>Dedicated post-operative care and rehabilitation support</li>
                  <li>Extensive experience with single and multi-level arthroplasty since 2006</li>
                  <li>Experience with hybrid procedures combining disc replacement and fusion when necessary</li>
                  <li>Commitment to staying current with the latest research and techniques</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Eligibility Criteria</h3>
                    <p className="text-muted-foreground mb-4">
                      In Australia, cervical disc replacement is approved for patients who:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Have not had prior spinal surgery at the same cervical level</li>
                      <li>Are skeletally mature</li>
                      <li>Have symptomatic degenerative disc disease with radiculopathy</li>
                      <li>Do not have vertebral osteoporosis</li>
                      <li>Have failed conservative therapy</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6 text-primary">Contraindications</h3>
                    <p className="text-muted-foreground mb-4">
                      Cervical disc replacement may not be suitable for patients with:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Severe facet joint arthritis</li>
                      <li>Significant cervical instability</li>
                      <li>Severe osteoporosis</li>
                      <li>Active infection</li>
                      <li>Certain types of deformity</li>
                      <li>Rheumatoid arthritis</li>
                    </ul>

                    <p className="text-muted-foreground mb-4">
                      <a href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> will conduct a thorough evaluation to determine if you're a good candidate for this procedure.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/appointments">Schedule a Consultation</Link>
                    </Button>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Related Procedures</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/expertise/anterior-cervical-discectomy-fusion" className="text-primary hover:underline">
                          Anterior Cervical Discectomy and Fusion (ACDF)
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/posterior-cervical-foraminotomy" className="text-primary hover:underline">
                          Posterior Cervical Foraminotomy
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/lumbar-disc-replacement" className="text-primary hover:underline">
                          Lumbar Disc Replacement
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/image-guided-surgery" className="text-primary hover:underline">
                          Image-Guided Surgery
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/minimally-invasive-spine-surgery" className="text-primary hover:underline">
                          Minimally Invasive Spine Surgery
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
                          Cervical Spine Conditions
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
                Contact us today to schedule a consultation with <a href="http://www.neurosurgeon.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Ales Aliashkevich</a> to learn more about cervical disc replacement and whether it might be right for you.
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
    </StandardPageLayout>
  );
};

CervicalDiscReplacement.displayName = 'CervicalDiscReplacement';

export default CervicalDiscReplacement;
