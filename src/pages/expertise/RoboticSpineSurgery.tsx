import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SafeImage from "@/components/SafeImage";

export default function RoboticSpineSurgery() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout pageTitle="Robotic Spine Surgery">
      <PageHeader
        title="Robotic Spine Surgery"
        subtitle="State-of-the-art robotic technology for enhanced precision in spine procedures"
        backgroundImage="/images/robotic-spine-surgery-lumbar-fusion-minimally-invasive-Mazor-Stryker-NuVasive-Renaissance-navigation-neurosurgery.jpg"
        enableParallax={true}
      />

      <main className="flex-1">

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">What is Robotic Spine Surgery?</h2>
                <p className="text-muted-foreground mb-6">
                  Robotic spine surgery represents the cutting edge of neurosurgical technology, combining advanced robotics, computer navigation, and surgeon expertise to perform spine procedures with unprecedented precision and control. This technology enhances the surgeon's capabilities by providing real-time, three-dimensional visualization and guidance during complex spine operations.
                </p>
                <p className="text-muted-foreground mb-6">
                  Robotic technology is the logical step in the evolution of the image-guided surgical systems, which contributes to the surgical toolset of minimally invasive approaches. Advanced imaging technologies with real-time three-dimensional views allow computer workstation to manipulate mechanical robotic system along the pre-planned trajectory.
                </p>
                <p className="text-muted-foreground mb-6">
                  It does not eliminate the role of the surgeon in the operating theatre but minimises human errors and improves the accuracy of the procedure. Robotic systems utilise state-of-the-art technology to model surgical implants, to calculate the precise position of the vertebral screws and to make sure that procedure goes according to the predefined plan.
                </p>

                <h3 className="text-xl font-semibold mb-3">History of Robotic Spine Surgery</h3>
                <p className="text-muted-foreground mb-4">
                  The concept of remotely controlled robotic surgery was probably developed in the 1970s by the U.S. National Aeronautics and Space Administration (NASA) to allow manipulations of surgical instruments in space. The same idea was explored by the army doctors to deal with wounded soldiers in remote locations.
                </p>
                <p className="text-muted-foreground mb-4">
                  The initial applications of surgical robotics go back towards 1984-1985 when the PUMA mechanical arm was used to for a navigated brain biopsy in Pittsburgh, the United States and the Arthrobot system assisted in arthroscopic surgery in Vancouver, Canada. Robotic cholecystectomy was performed in 1987, and the same PUMA system assisted with the urologic transurethral procedure.
                </p>
                <p className="text-muted-foreground mb-4">
                  The United States Food and Drug Administration (FDA) approved the AESOP system for endoscopic procedures in 1990 and the da Vinci Surgery System general laparoscopic surgery in 2000. In 2004, the FDA cleared a SpineAssist robotic system (Mazor Robotics, Caesarea, Israel) for spinal surgery and in 2008, the ROBODOC for the hip replacement surgeries.
                </p>
                <p className="text-muted-foreground mb-4">
                  Spinal robotic systems are currently represented in Victoria mainly by Mazor Renaissance (Medtronic) and ExcelsiusGPS (Globus). Mazor-X (Medtronic) should be available for a wider use over the next years.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/robotic-spine-surgery-lumbar-fusion-minimally-invasive-Mazor-Stryker-NuVasive-Renaissance-navigation-neurosurgery.jpg"
                    alt="Robotic Spine Surgery System with Navigation Technology"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">How Robotic Spine Surgery Works</h2>
                <p className="text-muted-foreground mb-4">
                  The robotic spine surgery process typically involves:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Pre-operative planning using high-resolution CT scans to create a detailed surgical blueprint</li>
                  <li>Intraoperative registration to match the patient's actual anatomy to the pre-operative plan</li>
                  <li>Robotic arm positioning to guide surgical instruments with sub-millimeter accuracy</li>
                  <li>Real-time feedback and adjustment capabilities during the procedure</li>
                  <li>Surgeon control throughout the entire process, with the robot serving as a precision guidance system</li>
                </ol>

                <h3 className="text-xl font-semibold mb-3">Pre-surgery Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Robotic surgery is extremely valuable in dealing with complex spinal conditions which require stabilisation, decompression and instrumented fixation, for example, advanced degenerative spinal disease, tumours, deformities and previously failed surgeries.
                </p>
                <p className="text-muted-foreground mb-4">
                  It follows the same principles of virtual reality using high-resolution preoperative images to create a computer-based 3D spine model for each patient. The actual surgery begins before the patient enters the operating room when a CT scan is taken and uploaded to create a detailed virtual model of the spine.
                </p>
                <p className="text-muted-foreground mb-4">
                  The surgeon analyses the model and creates a treatment plan based on his preferences and specific requirements even before scrubbing and entering the operating theatre. Position and length of the skin incision and the optimal implant sizes can be planned. It saves time during surgery and makes the operation more efficient and predictable.
                </p>

                <h3 className="text-xl font-semibold mb-3">Robot Attachment</h3>
                <p className="text-muted-foreground mb-4">
                  The operating robot is usually rigidly attached or registered to the patient's spine with clamps or pins. The Mazor Renaissance System allows for four different mounting platforms to allow precision even if patient movement occurs. An intraoperative synchronization using fluoroscopic x-rays matches the anatomy with the preoperative model created based on a preoperative CT scan. The system registers each vertebra individually, and the surgeon double-checks the accurate level location.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/robotic-spinal-surgery-lumbar-fusion-minimally-invasive-Mazor-Robotics-Renaissance-Guidance-NuVasive-neurosurgery.jpg"
                    alt="Mazor Renaissance Robotic System for spine surgery"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">Procedure</h3>
                <p className="text-muted-foreground mb-4">
                  The robotic unit goes to the predetermined position, and its arm can bend in all directions to follow the required trajectory. The surgeon can use drill, wires and other tubular instruments to insert screws and other implants even through very small skin incisions with minimal retraction of the muscles and other surrounding tissues.
                </p>
                <p className="text-muted-foreground mb-4">
                  The instruments and implants can be displayed live on the monitor. The process continues step-by-step until all implants are safely placed in the planned location. Despite the involvement of automated technology, all parts of the entire procedure are controlled by a human, and even the most advanced robot cannot work without the expertise of a skilled surgeon.
                </p>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/Aliashkevich-operating-spine-brain-image-guided-neurosurgeon-robotic-spine-Mazor-surgery.jpg"
                    alt="Dr. Aliashkevich performing robotic spine surgery with the Mazor system"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Applications in Spine Surgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Spinal Fusion</h3>
                    <p className="text-muted-foreground">
                      Enables precise placement of pedicle screws and other instrumentation, particularly beneficial in complex deformity cases or revision surgeries.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Minimally Invasive Procedures</h3>
                    <p className="text-muted-foreground">
                      Facilitates smaller incisions and less tissue disruption while maintaining or improving surgical accuracy.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Decompression Surgery</h3>
                    <p className="text-muted-foreground">
                      Allows for precise removal of bone and soft tissue to relieve pressure on nerves while preserving spinal stability.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Complex Spinal Reconstruction</h3>
                    <p className="text-muted-foreground">
                      Provides enhanced accuracy for multi-level procedures and cases involving abnormal anatomy or previous surgeries.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Neuromonitoring in Robotic Spine Surgery</h2>
                <p className="text-muted-foreground mb-4">
                  Intraoperative multimodality monitoring is an essential part of robotic and minimally invasive spine surgery. Electromyography (EMG) and somatosensory (SSEP) and motor evoked potentials (MEP) allow to record the electrical activity of muscles and to assess the health and function of the spinal cord, nerves and muscles.
                </p>
                <p className="text-muted-foreground mb-4">
                  EMG is regularly used in robotic procedures to confirm good placement of pedicle screws and to avoid nerve impingement. Recording of the electrical muscle activity assesses the nerve proximity and location. <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> uses both stimulated and free-run EMG to ensure safe surgery and to reduce the risk of postoperative complications.
                </p>
                <p className="text-muted-foreground mb-4">
                  SSEP and MEP monitor the function of the spinal cord and to recognise early possible changes caused by reduced blood flow (ischemia), compression, manipulations, or body positioning during surgery.
                </p>

                <p className="text-muted-foreground mb-4">
                  EMG, MEP and/or SSEP monitoring can be safely used during minimally invasive and robotic surgery on the cervical, thoracic, or lumbar spine for procedures including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Lumbar and thoracic microdiscectomy</li>
                    <li>Cervical, thoracic and lumbar laminectomy</li>
                    <li>Foraminotomy</li>
                    <li>Spinal decompression</li>
                    <li>Cervical and lumbar disc replacement</li>
                    <li>Anterior cervical discectomy and fusion (ACDF)</li>
                    <li>Occipito-cervical fusion</li>
                    <li>Cervical, thoracic and lumbar corpectomy</li>
                  </ul>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Lumbar fusions (ALIF, PLIF, TLIF, XLIF, OLIF)</li>
                    <li>Pedicle screw instrumentation</li>
                    <li>Cervical, thoracic and lumbar laminoplasty</li>
                    <li>Posterior cervical thoracic and lumbar fusion</li>
                    <li>Removal of AVM, cavernomas and tumours</li>
                    <li>Minimally invasive surgery</li>
                    <li>Scoliosis surgery</li>
                    <li>Vertebroplasty and kyphoplasty</li>
                  </ul>
                </div>
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/neuromonitoring-EMG-MEP-SSEP-spinal-nerve-root-stimulation.jpg"
                    alt="Neuromonitoring in Spine Surgery - EMG, MEP, and SSEP monitoring"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Benefits of Robotic Spine Surgery</h2>
                <p className="text-muted-foreground mb-4">
                  Robotic spine surgery can often be performed in difficult clinical scenarios when open surgery is deemed too risky, e.g. in elderly, obese or medically unfit patients. It causes less operative trauma and blood loss, resulting in reduced postoperative pain and scarring.
                </p>
                <p className="text-muted-foreground mb-4">
                  Please note, however, that not every patient can be considered as a candidate for image-guided or robotic surgery. Some simpler procedures such as microdiscectomy, laminectomy, artificial disc replacement, anterior cervical discectomy and fusion are still the domain of traditional microsurgery.
                </p>
                <p className="text-muted-foreground mb-4">
                  The advantages of robotic surgery are the same as for any other navigated spinal surgery:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Better quality of treatment, including improved precision of screw placement (98% accuracy compared to 92% using fluoroscopy based methods)</li>
                  <li>Improved outcomes</li>
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

                <h2 className="text-2xl font-bold mb-6">Conditions Treated with Robotic Spine Surgery</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> utilizes robotic spine surgery to treat a variety of conditions, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Degenerative Disc Disease</h3>
                    <p className="text-muted-foreground">
                      Precise treatment of worn spinal discs causing pain and limited mobility.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Spinal Stenosis</h3>
                    <p className="text-muted-foreground">
                      Accurate decompression of narrowed spinal canals that compress nerves.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Spondylolisthesis</h3>
                    <p className="text-muted-foreground">
                      Precise correction of vertebral slippage to restore spinal alignment and stability.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Spinal Deformities</h3>
                    <p className="text-muted-foreground">
                      Enhanced accuracy for complex curvature corrections in conditions like scoliosis.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Spinal Fractures</h3>
                    <p className="text-muted-foreground">
                      Precise stabilization of broken vertebrae with minimal disruption to surrounding tissues.
                    </p>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Failed Back Surgery</h3>
                    <p className="text-muted-foreground">
                      Accurate revision procedures for patients who have had unsuccessful previous spine surgeries.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Why Choose Dr. Aliashkevich for Robotic Spine Surgery?</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> is at the forefront of robotic spine surgery and offers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
                  <li>Specialised training and expertise in robotic spine surgery systems</li>
                  <li>Experience with the latest robotic technologies and techniques</li>
                  <li>Commitment to minimally invasive approaches whenever possible</li>
                  <li>Personalized treatment plans tailored to each patient's unique anatomy and condition</li>
                  <li>Comprehensive pre-operative planning using advanced imaging</li>
                  <li>Dedication to achieving optimal surgical outcomes with reduced recovery times</li>
                  <li>Experience with the Mazor Renaissance robotic system</li>
                  <li>Expertise in complex spinal conditions requiring precise instrumentation</li>
                  <li>Integration of neuromonitoring for enhanced safety during procedures</li>
                  <li>Ongoing education in the latest advances in robotic spine surgery</li>
                </ul>

                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src="/images/robotic-spine-surgery-radiology-successful-neurosurgery-spine-surgery-advanced-technology-maximum-precision.jpg"
                    alt="Successful robotic spine surgery with precise screw placement"
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Is Robotic Spine Surgery Right for You?</h3>
                    <p className="text-muted-foreground mb-4">
                      Robotic spine surgery may be particularly beneficial for patients with:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Complex spine conditions requiring precise instrumentation</li>
                      <li>Previous failed spine surgeries</li>
                      <li>Abnormal spinal anatomy</li>
                      <li>Multiple level involvement</li>
                      <li>Need for minimally invasive approaches</li>
                      <li>Concerns about radiation exposure from traditional fluoroscopy</li>
                      <li>Degenerative disc disease requiring fusion</li>
                      <li>Spinal instability or spondylolisthesis</li>
                      <li>Spinal stenosis requiring decompression and fusion</li>
                      <li>Vertebral compression fractures</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a> will evaluate your specific condition to determine if robotic spine surgery is appropriate for your case.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/appointments">Schedule a Consultation</Link>
                    </Button>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Related Procedures</h3>
                    <ul className="space-y-2">
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
                      <li>
                        <Link to="/expertise/spinal-fusion" className="text-primary hover:underline">
                          Spinal Fusion
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
                        <Link to="/patient-resources/spine-conditions" className="text-primary hover:underline">
                          Spine Conditions
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient-resources/surgical-technologies" className="text-primary hover:underline">
                          Surgical Technologies
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient-resources/recovery-rehabilitation" className="text-primary hover:underline">
                          Recovery & Rehabilitation
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

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Robotic Systems</h3>
                    <p className="text-muted-foreground mb-4">
                      Dr. Aliashkevich has experience with the following robotic spine surgery systems:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Mazor Renaissance (Medtronic)</li>
                      <li>ExcelsiusGPS (Globus)</li>
                      <li>Mazor-X (Medtronic)</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Each system offers unique advantages for specific spine conditions and surgical approaches.
                    </p>
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
                Contact us today to schedule a consultation with <a href="http://www.neurosurgeon.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Ales Aliashkevich</a> to learn more about how robotic spine surgery might benefit your specific condition.
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
