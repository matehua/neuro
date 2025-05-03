import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Expertise() {
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
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Neurosurgical Expertise</h1>
                <h2 className="text-xl text-foreground mb-4">Explore our neurosurgical specialties, from spine surgery to brain tumour removal.</h2>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Ales Aliashkevich</a> specialises in minimally invasive neurosurgery and spine surgery, utilising the latest technologies and techniques to provide the best possible outcomes for his patients. He is a strong advocate for motion-preserving spinal surgery and has been using cervical and lumbar disc replacement as an alternative to spinal fusion since 2012.
                </p>
                <p className="text-muted-foreground mb-4">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a> is skilled in using a range of advanced neurosurgical tools and will be able to select the most appropriate techniques for each patient's specific needs. He adapts to new technologies as they become available, continuously improving his ability to achieve the best treatment outcomes for all patients.
                </p>
                <p className="text-muted-foreground">
                  He applies keyhole, image-guided, robotic and motion-preserving technology in all aspects of operative approaches. The validity of his approach has been confirmed by excellent surgery results with very low complication rates. Over the years, he has gained extensive experience in single and multilevel arthroplasty and hybrid procedures.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/Ales-Aliashkevich-spine-brain-image-guided-neurosurgery-microsurgery-advanced-maximum-precision-robotic-spine-Melbourne.jpg"
                    alt="Dr. Ales Aliashkevich performing advanced neurosurgery with image-guided technology for maximum precision"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Brain Conditions */}
              <div className="card p-8 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/brain-abstract-icon.png"
                    alt="Brain Conditions"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{t.procedureDescriptions["brain-tumour-removal"].name}</h3>
                <p className="text-muted-foreground mb-6">
                  Brain tumours (glioma, meningioma, vestibular schwannoma, pituitary adenoma etc), hydrocephalus, cerebral aneurysms, arterio-venous malformations, cavernomas, epilepsy, trigeminal neuralgia, Chiari malformations.
                </p>
              </div>

              {/* Spinal Problems */}
              <div className="card p-8 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/vertebra-icon.png"
                    alt="Spinal Problems"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{t.procedureDescriptions["lumbar-disc-replacement"].name}</h3>
                <p className="text-muted-foreground mb-6">
                  Neck and back pain, sciatica, brachialgia, spinal stenosis, disc prolapse, spondylolisthesis, spondylitis, epidural abscess, instability, myelopathy, spinal cord compression, spinal tumours, spinal vascular malformations.
                </p>
              </div>

              {/* Nerve Problems */}
              <div className="card p-8 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/neuron.png"
                    alt="Nerve Problems"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{t.procedureDescriptions["peripheral-nerve-surgery"].name}</h3>
                <p className="text-muted-foreground mb-6">
                  Nerve tumours (schwannoma, neurofibroma, neuroma), nerve pain, nerve injuries, nerve compression (carpal tunnel syndrome, cubital tunnel syndrome), nerve and muscle biopsies.
                </p>
              </div>

              {/* Medico-Legal Reports */}
              <div className="card p-8 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/libra-icon.png"
                    alt="Medico-Legal Reports"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">Medico-Legal Reports</h3>
                <p className="text-muted-foreground mb-6">
                  Assessment of impairment according to AMA Guides to Permanent impairment, incapacity, work cover, transport accident injuries, liability enquiries.
                </p>
                <div className="text-center">
                  <Button asChild variant="outline">
                    <Link to="/medicolegal">{t.home.welcome.learnMore}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Specialised Procedures */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{t.home.featuredProcedures.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.nav.expertiseSubmenu.cervicalDisc}</h3>
                  <p className="text-muted-foreground mb-4">
                    Artificial disc replacement is a procedure that can relieve pain while maintaining neck motion and reducing the risk of adjacent segment degeneration.
                  </p>
                  <Button asChild>
                    <Link to="/expertise/cervical-disc-replacement">{t.home.welcome.learnMore}</Link>
                  </Button>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.nav.expertiseSubmenu.lumbarDisc}</h3>
                  <p className="text-muted-foreground mb-4">
                    Lumbar disc replacement is designed to relieve back pain while preserving motion and function in the lumbar spine.
                  </p>
                  <Button asChild>
                    <Link to="/expertise/lumbar-disc-replacement">{t.home.welcome.learnMore}</Link>
                  </Button>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.nav.expertiseSubmenu.imageGuided}</h3>
                  <p className="text-muted-foreground mb-4">
                    Image-guided surgery allows for precise navigation during complex procedures, improving accuracy and safety.
                  </p>
                  <Button asChild>
                    <Link to="/expertise/image-guided-surgery">{t.home.welcome.learnMore}</Link>
                  </Button>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.nav.expertiseSubmenu.roboticSpine}</h3>
                  <p className="text-muted-foreground mb-4">
                    Robotic-assisted spine surgery offers enhanced precision and control during complex spinal procedures.
                  </p>
                  <Button asChild>
                    <Link to="/expertise/robotic-spine-surgery">{t.home.welcome.learnMore}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surgical Approach Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Surgical Approach</h2>
              <p className="text-muted-foreground">
                <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich's</a> surgical philosophy is based on three main principles that guide all procedures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-background">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">1</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Accurate Identification</h3>
                <p className="text-muted-foreground text-center">
                  Precise identification of the problem using advanced diagnostic imaging and clinical assessment to ensure targeted treatment
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">2</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Minimally Invasive Access</h3>
                <p className="text-muted-foreground text-center">
                  Safe access to the pathological area with minimal injury to the surrounding tissues, preserving normal function
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">3</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Effective Repair</h3>
                <p className="text-muted-foreground text-center">
                  Delicate and effective repair of complex structures even when they are located deeply in the body, using advanced surgical techniques
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/appointments">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Advanced Technologies Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">{t.technologiesPage.title}</h2>
              <p className="text-muted-foreground">
                {t.technologiesPage.description}
              </p>
            </div>
          </div>
        </section>

        {/* Minimally-Invasive Techniques */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.technologiesPage.categories.wellness.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.technologiesPage.categories.wellness.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/brain-tumour-image-guided-surgery-minimally-invasive-advanced-neurosurgery-aliashkevich-mineuro.jpg"
                  alt="Minimally-invasive neurosurgery techniques"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.wellness.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.wellness.items.slice(2, 4).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/lumbar-fusion-minimally-invasive-Mazor-Robotics-Renaissance-screw-planning-3D-neurosurgery.jpg"
                  alt="Minimally-invasive spine surgery planning"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image-Guided Technologies */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.technologiesPage.categories.imagingTech.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.technologiesPage.categories.imagingTech.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/robotic-operating-theatre-spine-brain-navigation-microsurgery.jpg"
                  alt="Image-guided navigation system for neurosurgery"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.imagingTech.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.imagingTech.items.slice(2, 4).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/neuromonitoring-EMG-MEP-SSEP-spinal-nerve-root-stimulation.jpg"
                  alt="Neuromonitoring during spine surgery"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Spine Surgery Techniques */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.technologiesPage.categories.services.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.technologiesPage.categories.services.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/CP-ESP-arthroplasty-disc-replacement-cervical-lumbar.jpg"
                  alt="Artificial disc replacement for spine surgery"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.services.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.services.items.slice(2, 4).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/scoliosis-stenosis-lumbar-spine-CT-fusion-minimally-invasive-XLIF-Medtronic-Aliashkevich-neurosurgery.jpg"
                  alt="Spinal deformity correction surgery"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brain Surgery Techniques */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.technologiesPage.categories.brainSurgery.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.technologiesPage.categories.brainSurgery.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/brain-tumour-navigated-image-guided-surgery-miNEURO-Aliashekvich-robotic.jpg"
                  alt="Brain tumor removal surgery"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.brainSurgery.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                  {t.technologiesPage.categories.brainSurgery.items.slice(2, 4).map((item, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/MCA-aneurysm-cerebral-microsurgery-clipping-subarachnoid.jpg"
                  alt="Cerebrovascular surgery for brain aneurysm"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t.home.cta.title}</h2>
              <p className="text-muted-foreground mb-8">
                {t.home.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.home.cta.bookNow}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.nav.contact}</Link>
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
