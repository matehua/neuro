import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/PageHeader';
import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { generatePageSEO, generateMedicalProcedureStructuredData } from '@/lib/seo';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

interface TechnologyItem {
  title: string;
  description: string;
}

const Expertise: React.FC = () => {
  const { t } = useLanguage();

  // Use translations with safe fallback
  const finalT = t || en;
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Generate SEO data for expertise page with structured data
  const expertiseSeoData = useMemo(() => {
    return generatePageSEO('expertise', {
      title: "Neurosurgery Expertise - Dr Ales Aliashkevich",
      description: "Comprehensive neurosurgical expertise including brain surgery, spine surgery, minimally invasive procedures, and advanced surgical techniques."
    });
  }, []);

  // Ensure we have the required translation structure with fallbacks
  const safeExpertisePage = finalT?.expertisePage || en.expertisePage;
  const safeProcedureDescriptions = finalT?.procedureDescriptions || en.procedureDescriptions;
  const safeTechnologiesPage = finalT?.technologiesPage || en.technologiesPage;
  const safeExpertiseCards = finalT?.expertiseCards || en.expertiseCards;
  const safeNav = finalT?.nav || en.nav;
  const safeHome = finalT?.home || en.home;

  return (
    <StandardPageLayout pageType="expertise" seoData={expertiseSeoData} showHeader={false}>
      <PageHeader
        title={safeExpertisePage.hero.title}
        subtitle={safeExpertisePage.hero.subtitle}
        backgroundImage="/images/Ales-Aliashkevich-spine-brain-image-guided-neurosurgery-microsurgery-advanced-maximum-precision-robotic-spine-Melbourne.jpg"
        enableParallax={true}
      />

      <main className="flex-1">
        {/* Introduction Section */}
        <section className={cn(
          "mobile-safe-area",
          deviceInfo.isMobile ? "py-mobile-xl" : "py-20"
        )}>
          <div className={cn(
            deviceInfo.isMobile ? "mobile-container" : "container"
          )}>
            <div className="max-w-4xl mx-auto text-center">
              <div className={cn(
                "text-muted-foreground mb-mobile-md",
                deviceInfo.isMobile ? "mobile-text" : "text-lg mb-8"
              )}>
                <p className="mb-4">
                  <a
                    href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/"
                    className={cn(
                      "text-primary transition-colors touch-feedback",
                      deviceInfo.isMobile ? "" : "hover:underline"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr Ales Aliashkevich
                  </a> {safeExpertisePage.introduction.paragraph1}
                </p>
                <p className={cn(
                  "text-muted-foreground mb-mobile-md",
                  deviceInfo.isMobile ? "mobile-text" : "mb-4"
                )}>
                  <a
                    href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/"
                    className={cn(
                      "text-primary transition-colors touch-feedback",
                      deviceInfo.isMobile ? "" : "hover:underline"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr Aliashkevich
                  </a> {safeExpertisePage.introduction.paragraph2}
                </p>
                <p>
                  {safeExpertisePage.introduction.paragraph3}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={deviceInfo.isMobile ? "mobile-section" : "py-16"}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-lg"
                : "grid grid-cols-1 md:grid-cols-2 gap-12"
            )}>
              {/* Brain Conditions */}
              <div className={cn(
                "card rounded-lg shadow-md bg-card",
                deviceInfo.isMobile ? "p-mobile-lg" : "p-8"
              )}>
                <div className={cn(
                  "flex justify-center",
                  deviceInfo.isMobile ? "mb-mobile-md" : "mb-4"
                )}>
                  <img
                    src="/images/brain-abstract-icon.png"
                    alt="Brain Conditions"
                    className={cn(
                      "object-contain",
                      deviceInfo.isMobile ? "h-16 w-16" : "h-20 w-20"
                    )}
                  />
                </div>
                <h3 className={cn(
                  "font-semibold text-primary text-center mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>
                  {safeProcedureDescriptions["brain-tumour-removal"].name}
                </h3>
                <p className={cn(
                  "text-muted-foreground mb-mobile-lg",
                  deviceInfo.isMobile ? "mobile-text" : "mb-6"
                )}>
                  {safeExpertiseCards.brainConditions.description}
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
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{safeProcedureDescriptions["lumbar-disc-replacement"].name}</h3>
                <p className="text-muted-foreground mb-6">
                  {safeExpertiseCards.spinalProblems.description}
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
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{safeProcedureDescriptions["peripheral-nerve-surgery"].name}</h3>
                <p className="text-muted-foreground mb-6">
                  {safeExpertiseCards.nerveProblems.description}
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
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{safeExpertiseCards.medicolegalReports.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {safeExpertiseCards.medicolegalReports.description}
                </p>
                <div className="text-center">
                  <Button asChild variant="outline">
                    <Link to="/medicolegal">{safeHome.welcome.learnMore}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Specialised Procedures */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{safeHome.featuredProcedures.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{safeNav.expertiseSubmenu.cervicalDisc}</h3>
                  <p className="text-muted-foreground mb-4">
                    {safeExpertisePage.specializedProcedures.cervicalDisc.description}
                  </p>
                  <Button asChild>
                    <Link to="/expertise/cervical-disc-replacement">{safeHome.welcome.learnMore}</Link>
                  </Button>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.nav.expertiseSubmenu.lumbarDisc}</h3>
                  <p className="text-muted-foreground mb-4">
                    {finalT.expertisePage.specializedProcedures.lumbarDisc.description}
                  </p>
                  <Button asChild>
                    <Link to="/expertise/lumbar-disc-replacement">{finalT.home.welcome.learnMore}</Link>
                  </Button>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.nav.expertiseSubmenu.imageGuided}</h3>
                  <p className="text-muted-foreground mb-4">
                    {finalT.expertisePage.specializedProcedures.imageGuided.description}
                  </p>
                  <Button asChild>
                    <Link to="/expertise/image-guided-surgery">{finalT.home.welcome.learnMore}</Link>
                  </Button>
                </div>

                <div className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{finalT.nav.expertiseSubmenu.roboticSpine}</h3>
                  <p className="text-muted-foreground mb-4">
                    {finalT.expertisePage.specializedProcedures.roboticSpine.description}
                  </p>
                  <Button asChild>
                    <Link to="/expertise/robotic-spine-surgery">{finalT.home.welcome.learnMore}</Link>
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
              <h2 className="text-3xl font-bold mb-6">{finalT.expertisePage.surgicalApproach.title}</h2>
              <p className="text-muted-foreground">
                <a href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Aliashkevich</a>{finalT.expertisePage.surgicalApproach.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-background">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">1</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{finalT.expertisePage.surgicalApproach.principles.identification.title}</h3>
                <p className="text-muted-foreground text-center">
                  {finalT.expertisePage.surgicalApproach.principles.identification.description}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">2</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{finalT.expertisePage.surgicalApproach.principles.access.title}</h3>
                <p className="text-muted-foreground text-center">
                  {finalT.expertisePage.surgicalApproach.principles.access.description}
                </p>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">3</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{finalT.expertisePage.surgicalApproach.principles.repair.title}</h3>
                <p className="text-muted-foreground text-center">
                  {finalT.expertisePage.surgicalApproach.principles.repair.description}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/appointments">{finalT.expertisePage.surgicalApproach.cta}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Advanced Technologies Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">{finalT.technologiesPage.title}</h2>
              <p className="text-muted-foreground">
                {finalT.technologiesPage.description}
              </p>
            </div>
          </div>
        </section>

        {/* Minimally-Invasive Techniques */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{finalT.technologiesPage.categories.wellness.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {finalT.technologiesPage.categories.wellness.description}
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
                  {finalT.technologiesPage.categories.wellness.items.slice(0, 2).map((item: TechnologyItem, index: number) => (
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
                  {finalT.technologiesPage.categories.wellness.items.slice(2, 4).map((item: TechnologyItem, index: number) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center">{finalT.technologiesPage.categories.imagingTech.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {finalT.technologiesPage.categories.imagingTech.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/robotic-operating-theatre-spine-brain-navigation-microsurgery.jpg"
                  alt="Image-guided navigation system for neurosurgery"
                  className="w-full h-auto"
                  fallbackSrc="/images/medical-consulting.jpg"
                />
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  {finalT.technologiesPage.categories.imagingTech.items.slice(0, 2).map((item: TechnologyItem, index: number) => (
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
                  {finalT.technologiesPage.categories.imagingTech.items.slice(2, 4).map((item: TechnologyItem, index: number) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center">{finalT.technologiesPage.categories.services.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {finalT.technologiesPage.categories.services.description}
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
                  {finalT.technologiesPage.categories.services.items.slice(0, 2).map((item: TechnologyItem, index: number) => (
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
                  {finalT.technologiesPage.categories.services.items.slice(2, 4).map((item: TechnologyItem, index: number) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center">{finalT.technologiesPage.categories.brainSurgery.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {finalT.technologiesPage.categories.brainSurgery.description}
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
                  {finalT.technologiesPage.categories.brainSurgery.items.slice(0, 2).map((item: TechnologyItem, index: number) => (
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
                  {finalT.technologiesPage.categories.brainSurgery.items.slice(2, 4).map((item: TechnologyItem, index: number) => (
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
        <CTASection />
      </main>
    </StandardPageLayout>
  );
};

Expertise.displayName = 'Expertise';

export default Expertise;
