import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ImageGuidedSurgery() {
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
                Image-Guided Surgery
              </h1>
              <p className="text-muted-foreground">
                Advanced navigation technology for precise and minimally invasive neurosurgical procedures
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">What is Image-Guided Surgery?</h2>
                <p className="text-muted-foreground mb-6">
                  Image-guided or stereotactic surgery describes a procedure where image-based navigation is used to achieve the safest and most efficient access to the point of interest. Its principle is very similar to a car or mobile Global Positioning System (GPS) navigation. This technology acts like a GPS system for the surgeon, allowing for more accurate targeting of pathology while minimizing damage to surrounding healthy tissue.
                </p>
                <p className="text-muted-foreground mb-6">
                  Advances in medical technology have allowed performing less invasive procedures and treating brain and spine lesions that were previously considered inoperable due to their size or critical location.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <img
                    src="/images/brain-tumour-image-guided-surgery-minimally-invasive-advanced-neurosurgery-aliashkevich-mineuro.jpg"
                    alt="Advanced image-guided neurosurgery technology used by Dr. Aliashkevich for precise brain tumour removal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">How Image-Guided Surgery Works</h2>
                <p className="text-muted-foreground mb-4">
                  The image-guided surgery process typically involves:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Pre-operative imaging (MRI, CT scans) to create detailed 3D models of the patient's anatomy</li>
                  <li>Registration of the patient's actual anatomy to the 3D models in the operating room</li>
                  <li>Real-time tracking of surgical instruments in relation to the patient's anatomy</li>
                  <li>Continuous visualization of the surgical field on high-definition monitors</li>
                  <li>Precise navigation to the target area with minimal disruption to surrounding structures</li>
                </ol>
                <p className="text-muted-foreground mb-4">
                  A set of specifically designed tracked surgical instruments is used together with cameras or electromagnetic fields and computer software to capture and relay the patient's precise 3D anatomy in real-time. Spacious visualization and image manipulation in the operating theatre are based on the same principles as in virtual or augmented reality.
                </p>
                <p className="text-muted-foreground mb-4">
                  Usually, high-resolution patient images are obtained before surgery with fiducials placed on the skin and uploaded into the workstation for trajectory planning. This plan creates a virtual patient-specific 3D model of the brain or spine outlining the area of interest and critical surrounding structures.
                </p>
                <p className="text-muted-foreground mb-4">
                  This individual model has to be registered to the actual patient position on the operating table using infrared cameras or electromagnetic fields. Special optical reflective markers on the surgical instruments can be tracked by the computer and position of the tool can be displayed on the screen or in the operating microscope.
                </p>

                <h2 className="text-2xl font-bold mb-6">Applications in Neurosurgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Biopsies</h3>
                    <p className="text-muted-foreground">
                      Despite advances in modern imaging technology, the only way to establish the histopathological diagnosis is by removing a specimen and investigating it under the microscope. The image-guided or stereotactic technique allows reaching even deep-seated lesions with minimal risk and obtaining samples for histopathological, microbiological and molecular biological investigations. With accurate tissue diagnosis, appropriate treatment of the pathological condition can be provided.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Removal of Tumours and Other Pathological Lesions</h3>
                    <p className="text-muted-foreground">
                      Successful treatment of brain or spine tumours and other pathological conditions often requires the maximum extent of resection with minimal impact on healthy surrounding tissue. Sometimes, tumours don't have a well-defined border and application of the image-guided technology allows real-time assessment of the surgical cavity and removal of even deep-seated and difficult to access lesions.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Cerebrovascular Pathology</h3>
                    <p className="text-muted-foreground">
                      Vascular lesions such as cavernomas, arteriovenous malformations, and aneurysms can often be very small, positioned deeply in the brain. Accurate preoperative trajectory planning and utilisation of the neuronavigation allows a safe approach to the lesion without disrupting important surrounding neural pathways.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Epilepsy Surgery</h3>
                    <p className="text-muted-foreground">
                      Surgery of seizure disorders involves the removal of the epileptogenic focus or disruption of the epileptogenic activity in the proximity of the critical functional areas. It is often impossible to distinguish epileptogenic cortex from the normal brain tissue even under the surgical microscope. Thorough preoperative assessment is required for accurate localisation of the focus, and the image-guided technology allows positioning electrodes for monitoring of the brain activity precisely.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Benefits of Image-Guided Surgery</h2>
                <p className="text-muted-foreground mb-4">
                  The use of navigated technology has multiple benefits for patients when compared to traditional open surgery:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Better quality of treatment, including improved accuracy and complete removal of lesions</li>
                  <li>Improved outcomes</li>
                  <li>Smaller craniotomy size for removal of brain tumours and other pathologies</li>
                  <li>Decreased incision size with better cosmetic results</li>
                  <li>Reduced risk of infection and wound healing problems</li>
                  <li>Reduced risk of medical complications, e.g. chest infections and deep venous thrombosis</li>
                  <li>Reduced radiation exposure to the patient and operating theatre staff</li>
                  <li>Increased safety and avoidance of critical structures during the approach</li>
                  <li>Shorter operation time</li>
                  <li>Diminished reliance on pain medications after surgery</li>
                  <li>Faster postoperative recovery</li>
                  <li>Earlier and more efficient physiotherapy and rehabilitation</li>
                  <li>Faster return to normal activities and work</li>
                  <li>Shorter hospital stay</li>
                  <li>Reduced overall cost of treatment</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Advanced Imaging Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> utilizes several cutting-edge imaging technologies in his practice:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Magnetic Resonance Imaging (MRI)</h3>
                    <p className="text-muted-foreground">
                      Nowadays, MRI is the number one modality in neurosurgical and spinal imaging due to its superb image resolution and contrast. We use it in all patients with brain and spine problems with only rare exceptions when it is not possible due to old cardiac pacemakers, cochlear implants, stimulators or other medical conditions. High-quality MRI is available not only at a preoperative planning stage but can also be used intraoperatively, e.g. to estimate the extent of tumour resection.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Computed Tomography (CT)</h3>
                    <p className="text-muted-foreground">
                      CT is the preferred modality for visualisation of bone and is much more compact than MRI. It is also significantly faster and cheaper, which makes it ideally suited for spine image-guided surgery when accurate placement of vertebral screws is required. It can also be used for intracranial surgery, including lesion removal, biopsy and other stereotactic procedures. It can also be used in conjunction with other imaging modalities, e.g. SPECT or PET for better representation of metabolic changes and chronic inflammatory conditions.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Neuronavigation Systems</h3>
                    <p className="text-muted-foreground">
                      Advanced computer systems that integrate pre-operative imaging with real-time surgical navigation, providing continuous guidance throughout the procedure. These systems allow for precise tracking of surgical instruments in relation to the patient's anatomy.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Fluoroscopy and X-ray C-arms</h3>
                    <p className="text-muted-foreground">
                      Although standard x-rays in fluoroscopy provide only two-dimensional images, the technological evolution allowed implementation of rotational C-arms which provide high image quality, compatible with CT scanner. The images obtained before or during surgery are uploaded into the computer workstation and processed to plan the approach trajectory, position of the lesion, predict placement of the implants, and manipulate 3D views during surgery.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Why Choose Dr. Aliashkevich for Image-Guided Surgery?</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> is highly experienced in image-guided neurosurgical procedures and offers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Expertise in the latest navigation technologies and techniques</li>
                  <li>Specialised training in minimally invasive approaches</li>
                  <li>Personalized treatment plans tailored to each patient's unique anatomy and condition</li>
                  <li>Comprehensive pre-operative planning using advanced imaging</li>
                  <li>Commitment to achieving optimal surgical outcomes with minimal invasiveness</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Is Image-Guided Surgery Right for You?</h3>
                    <p className="text-muted-foreground mb-4">
                      Image-guided surgery may be particularly beneficial for patients with:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Deep-seated or complex brain tumours</li>
                      <li>Tumours near critical brain structures</li>
                      <li>Complex spinal conditions requiring instrumentation</li>
                      <li>Vascular abnormalities</li>
                      <li>Need for minimally invasive approaches</li>
                      <li>Previous failed surgeries requiring precise revision</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> will evaluate your specific condition to determine if image-guided surgery is appropriate for your case.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/appointments">Schedule a Consultation</Link>
                    </Button>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Related Procedures</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/expertise/robotic-spine-surgery" className="text-primary hover:underline">
                          Robotic Spine Surgery
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/cervical-disc-replacement" className="text-primary hover:underline">
                          Cervical Disc Replacement
                        </Link>
                      </li>
                      <li>
                        <Link to="/expertise/lumbar-disc-replacement" className="text-primary hover:underline">
                          Lumbar Disc Replacement
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
                Contact us today to schedule a consultation with <a href="http://www.neurosurgeon.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Ales Aliashkevich</a> to learn more about how image-guided surgery might benefit your specific condition.
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
