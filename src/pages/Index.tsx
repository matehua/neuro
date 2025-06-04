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
              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 21L9.5 16.5L14 18L9.5 19.5L8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3L17 6L20 7L17 8L16 11L15 8L12 7L15 6L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12v7a2 2 0 002 2h4a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 12h2a2 2 0 012 2v3a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12H6a2 2 0 00-2 2v3a2 2 0 002 2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

              <div className="card p-6 rounded-lg shadow-md bg-background animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '400ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M18.364 18.364c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414-.024-.39-1.414 0-.39 1.024 0 1.414z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4.222 4.222c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414-1.024-.39-1.414 0-.39 1.024 0 1.414z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M18.364 5.636c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0-.39 1.024 0 1.414 1.024.39 1.414 0z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4.222 19.778c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0-.39 1.024 0 1.414 1.024.39 1.414 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
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
