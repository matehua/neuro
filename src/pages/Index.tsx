import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import IndependentReviewsSection from "@/components/IndependentReviewsSection";
import SafeImage from "@/components/SafeImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CTASection from "@/components/CTASection";

export default function Index() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Ales Aliashkevich</a> {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/expertise">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <SafeImage
                  src="/images/Ales-Aliashkevich-operating-theatre-spine-brain-image-guided-neurosurgery.jpg"
                  alt="Dr Ales Aliashkevich - Neurosurgeon and Spine Surgeon"
                  className="w-full h-auto object-cover"
                  fallbackSrc="/images/medical-consulting.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.advancedTechnologies.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.advancedTechnologies.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.advancedTechnologies.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <SafeImage
                    src="/images/brain-abstract-icon.png"
                    alt="Icon representing minimally invasive neurosurgical procedures"
                    className="h-16 w-16 object-contain"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t.home.advancedTechnologies.features.minimallyInvasive.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.home.advancedTechnologies.features.minimallyInvasive.description}
                </p>
                <div className="mt-4 text-center">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <SafeImage
                    src="/images/brain-png-18-transparent-1024x820.png"
                    alt="Icon representing advanced radiological imaging for neurosurgical navigation"
                    className="h-16 w-16 object-contain"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t.home.advancedTechnologies.features.advancedImaging.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.home.advancedTechnologies.features.advancedImaging.description}
                </p>
                <div className="mt-4 text-center">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <SafeImage
                    src="/images/brain-artificial-intelligence-neurosurgeon-spine-surgeon-neurosurgery-advanced-technology-maximum-precision-robotic.png"
                    alt="Advantages over Traditional Open Surgery"
                    className="h-16 w-16 object-contain"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t.home.advancedTechnologies.features.roboticSurgery.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.home.advancedTechnologies.features.roboticSurgery.description}
                </p>
                <div className="mt-4 text-center">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="flex justify-center mb-4">
                  <SafeImage
                    src="/images/brain-tumour-image-guided-surgery-minimally-invasive-advanced-neurosurgery-aliashkevich-mineuro.jpg"
                    alt="Image showing image-guided technology applications in neurosurgery"
                    className="h-16 w-16 object-contain"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t.home.advancedTechnologies.features.patientRecovery.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.home.advancedTechnologies.features.patientRecovery.description}
                </p>
                <div className="mt-4 text-center">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredProcedures.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.featuredProcedures.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.featuredProcedures.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="card text-center p-6 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/brain-abstract-icon.png"
                    alt="Icon representing various brain conditions treated by Dr. Aliashkevich"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.expertiseCards.brainConditions.title}</h3>
                <p className="text-muted-foreground">
                  {t.expertiseCards.brainConditions.description}
                </p>
                <div className="mt-4">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card text-center p-6 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/vertebra-icon.png"
                    alt="Spinal Problems"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.expertiseCards.spinalProblems.title}</h3>
                <p className="text-muted-foreground">
                  {t.expertiseCards.spinalProblems.description}
                </p>
                <div className="mt-4">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card text-center p-6 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/neuron.png"
                    alt="Nerve Problems"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.expertiseCards.nerveProblems.title}</h3>
                <p className="text-muted-foreground">
                  {t.expertiseCards.nerveProblems.description}
                </p>
                <div className="mt-4">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card text-center p-6 rounded-lg shadow-md bg-card">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/libra-icon.png"
                    alt="Medico-Legal Reports"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{t.expertiseCards.medicolegalReports.title}</h3>
                <p className="text-muted-foreground">
                  {t.expertiseCards.medicolegalReports.description}
                </p>
                <div className="mt-4">
                  <Link to="/medicolegal" className="text-primary hover:underline">
                    {t.home.welcome.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Minimally-Invasive Surgery Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <span className="text-primary font-medium uppercase mb-2 block">{t.minimallyInvasive.subtitle}</span>
                <h2 className="text-2xl font-bold mb-4">{t.minimallyInvasive.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.minimallyInvasive.description1}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.minimallyInvasive.description2}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.minimallyInvasive.description3} <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a>
                </p>
                <ul className="text-muted-foreground mb-6 list-none space-y-1">
                  <li>– {t.minimallyInvasive.principle1}</li>
                  <li>– {t.minimallyInvasive.principle2}</li>
                  <li>– {t.minimallyInvasive.principle3}</li>
                </ul>
                <Button asChild>
                  <Link to="/expertise">
                    {t.minimallyInvasive.buttonText}
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/brain-tumour-image-guided-surgery-minimally-invasive-advanced-neurosurgery-aliashkevich-mineuro.jpg"
                    alt="Dr. Aliashkevich performing minimally-invasive neurosurgery with advanced image-guided technology"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disc Replacement Section */}
        <section className="section">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/CP-ESP-arthroplasty-disc-replacement-cervical-lumbar.jpg"
                    alt="Cervical and Lumbar Arthroplasty"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-medium uppercase mb-2 block">{t.discReplacement.subtitle}</span>
                <h2 className="text-2xl font-bold mb-4">{t.discReplacement.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.discReplacement.description1}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.discReplacement.description2}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.discReplacement.description3}
                </p>
                <Button asChild>
                  <Link to="/expertise/cervical-disc-replacement">
                    {t.discReplacement.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Independent Reviews Section */}
        <IndependentReviewsSection />


        {/* CTA Section */}
        <CTASection className="py-24" />
      </main>
    </Layout>
  );
}
