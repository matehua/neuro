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
              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 via-primary/15 to-purple-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="minimalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6"/>
                        </linearGradient>
                      </defs>
                      {/* Surgical instrument with precision elements */}
                      <path d="M3 12h18M12 3v18" stroke="url(#minimalGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
                      {/* Precision points */}
                      <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
                      <circle cx="18" cy="12" r="1.5" fill="currentColor"/>
                      <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
                      <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
                      {/* Minimally invasive entry points */}
                      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                      {/* Central precision dot */}
                      <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    </svg>
                  </div>
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

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-primary/15 to-cyan-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="imagingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4"/>
                        </linearGradient>
                        <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
                          <stop offset="70%" stopColor="currentColor" stopOpacity="0.1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      {/* Brain outline */}
                      <path d="M12 3C8.5 3 6 5.5 6 8.5c0 1.5.5 2.8 1.3 3.8-.3.7-.3 1.4-.3 2.2 0 2.5 2 4.5 4.5 4.5h1c2.5 0 4.5-2 4.5-4.5 0-.8 0-1.5-.3-2.2.8-1 1.3-2.3 1.3-3.8 0-3-2.5-5.5-6-5.5z" stroke="currentColor" strokeWidth="1.5" fill="url(#radarGrad)"/>
                      {/* MRI scanning lines */}
                      <path d="M4 8h16M4 12h16M4 16h16" stroke="url(#imagingGrad)" strokeWidth="1" opacity="0.6"/>
                      {/* Navigation crosshairs */}
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                      {/* Precision targeting */}
                      <path d="M12 4v2M12 18v2M20 12h-2M6 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      {/* Advanced imaging sensors */}
                      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.7"/>
                      <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.7"/>
                      <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.7"/>
                      <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.7"/>
                    </svg>
                  </div>
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

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 via-primary/15 to-orange-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="advantageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
                        </linearGradient>
                      </defs>
                      {/* Comparison arrows showing improvement */}
                      <path d="M4 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M16 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      {/* Traditional surgery (larger, more invasive) */}
                      <rect x="2" y="14" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="url(#advantageGrad)" opacity="0.3"/>
                      <path d="M3 17h6M3 19h6" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                      {/* Modern minimally invasive (smaller, precise) */}
                      <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
                      <circle cx="18" cy="6" r="1" fill="currentColor"/>
                      {/* Benefits indicators */}
                      <path d="M14 2l1 2 2-1-1 2 2 1-2 1 1 2-2-1-1 2-1-2-2 1 1-2-2-1 2-1-1-2 2 1z" fill="currentColor" opacity="0.7"/>
                      {/* Recovery time comparison */}
                      <path d="M2 22h20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                      <circle cx="6" cy="22" r="1" fill="currentColor" opacity="0.6"/>
                      <circle cx="18" cy="22" r="1" fill="currentColor"/>
                      {/* Success rate indicator */}
                      <path d="M20 18l-2 2-1-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
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

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ animationDelay: '400ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 via-primary/15 to-indigo-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="guidedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3"/>
                        </linearGradient>
                        <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      {/* Image guidance display screen */}
                      <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="url(#pulseGrad)"/>
                      <rect x="4" y="6" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
                      {/* Real-time imaging grid */}
                      <path d="M8 6v8M12 6v8M16 6v8" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                      <path d="M4 8h16M4 10h16M4 12h16" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                      {/* Target area with precision guidance */}
                      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
                      {/* Surgical instrument guidance path */}
                      <path d="M18 2l2 2-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="20" cy="4" r="1" fill="currentColor"/>
                      {/* Navigation coordinates */}
                      <path d="M6 18l2-2M10 18l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M14 18l2-2M18 18l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      {/* Success indicators */}
                      <circle cx="6" cy="20" r="1" fill="currentColor" opacity="0.8"/>
                      <circle cx="12" cy="20" r="1" fill="currentColor" opacity="0.8"/>
                      <circle cx="18" cy="20" r="1" fill="currentColor" opacity="0.8"/>
                      {/* Real-time feedback */}
                      <path d="M2 22h4M8 22h4M16 22h4" stroke="url(#guidedGrad)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
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
