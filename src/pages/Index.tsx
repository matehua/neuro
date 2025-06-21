import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/CTASection';
import HeroSection from '@/components/HeroSection';
import IndependentReviewsSection from '@/components/IndependentReviewsSection';
import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { generatePageSEO, generateMedicalPracticeStructuredData, PRACTICE_INFO } from '@/lib/seo';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

const Index: React.FC = () => {
  const { t, isLanguageLoaded } = useLanguage();
  const deviceInfo = useDeviceDetection();

  // Fallback to English translations if context fails
  const safeT = t || en;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Create a completely safe fallback with hardcoded values to prevent any runtime errors
  const safeFallback = {
    home: {
      welcome: {
        subtitle: "COMPREHENSIVE NEUROSURGICAL SERVICES",
        title: "Specialised Care for Brain, Spine and Peripheral Nerve Conditions",
        description1: "Dr Aliashkevich provides expert diagnosis and treatment for a wide range of neurological conditions.",
        description2: "Services include minimally invasive spine surgery, artificial disc replacement, and robotic-assisted procedures.",
        learnMore: "View Our Neurosurgical Services"
      },
      advancedTechnologies: {
        subtitle: "Advanced Technology",
        title: "Minimally-Invasive Approach",
        description: "Advances in medical technology have facilitated minimally-invasive surgery.",
        features: {
          minimallyInvasive: {
            title: "Minimally-Invasive Techniques",
            description: "Advanced medical technology for safer procedures."
          },
          advancedImaging: {
            title: "Advanced Imaging Navigation",
            description: "MRI imaging for precise surgical navigation."
          },
          roboticSurgery: {
            title: "Advantages Over Traditional Surgery",
            description: "Improved accuracy and complete lesion removal."
          },
          patientRecovery: {
            title: "Image-Guided Applications",
            description: "Maximum removal with minimal impact on healthy tissues."
          }
        }
      },
      featuredProcedures: {
        subtitle: "Our Expertise",
        title: "Specialised Treatment Areas",
        description: "We use the latest minimally-invasive techniques."
      }
    },
    expertiseCards: {
      brainConditions: {
        title: "Brain Conditions",
        description: "Brain tumours, hydrocephalus, cerebral aneurysms, and more."
      },
      spinalProblems: {
        title: "Spinal Problems",
        description: "Neck and back pain, sciatica, disc prolapse, and more."
      },
      nerveProblems: {
        title: "Nerve Problems",
        description: "Nerve tumours, nerve pain, nerve injuries, and more."
      },
      medicolegalReports: {
        title: "Medico-Legal Reports",
        description: "Assessment of impairment and liability enquiries."
      }
    },
    minimallyInvasive: {
      subtitle: "NEUROSURGEON WHO BELIEVES THAT LESS IS MORE",
      title: "Why Minimally-Invasive Surgery?",
      description1: "The ultimate goal of any neurosurgeon and spine surgeon is to improve the patient's quality and even length of life.",
      description2: "The evolution of surgery and anaesthesiology allowed for achieving this goal and successfully managing previously untreatable conditions.",
      description3: "Minimally invasive procedures represent a logical evolution of surgical philosophy focussing on patient safety and satisfaction.",
      principle1: "accurate identification of the problem",
      principle2: "safe access to the pathological area with minimal injury to the surrounding tissues",
      principle3: "effective but delicate repair of complex structures even if they are located deeply in the body",
      buttonText: "MINIMALLY-INVASIVE PROCEDURES"
    },
    discReplacement: {
      subtitle: "CHRONIC NECK AND BACK PAIN",
      title: "Cervical and Lumbar Arthroplasty (Artificial Disc Replacement)",
      description1: "Natural ageing of the disc (degeneration) or trauma can affect its mobility and cause a reduction of its cushioning function.",
      description2: "Disc replacement (arthroplasty) is aimed at restoring the shock-absorbing function of the affected segment.",
      description3: "Arthroplasty preserves motion and reduces the load on the discs above and below protecting them against accelerated degeneration.",
      buttonText: "DISC REPLACEMENT"
    }
  };

  // Use the most reliable translation source available
  const finalT = (safeT && safeT.home && safeT.home.welcome) ? safeT :
                 (en && en.home && en.home.welcome) ? en :
                 safeFallback;

  // Generate comprehensive SEO data for homepage
  const homeSeoData = generatePageSEO('home', {
    structuredData: generateMedicalPracticeStructuredData(PRACTICE_INFO)
  });

  return (
    <StandardPageLayout pageType="home" seoData={homeSeoData} showHeader={false}>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Section */}
        <section id="welcome" className={deviceInfo.isMobile ? "mobile-section" : "section"}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className={cn(
              "items-center",
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-lg"
                : "grid grid-cols-1 lg:grid-cols-2 gap-12"
            )}>
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className={cn(
                  "text-primary font-medium uppercase tracking-wider",
                  deviceInfo.isMobile ? "mobile-text" : "text-sm"
                )}>
                  {finalT?.home.welcome.subtitle}
                </span>
                <h2 className={cn(
                  "font-bold mt-2 mb-mobile-lg",
                  deviceInfo.isMobile
                    ? "mobile-3xl"
                    : "text-3xl md:text-4xl mb-6"
                )}>
                  {finalT?.home.welcome.title}
                </h2>
                <p className={cn(
                  "text-muted-foreground mb-mobile-lg",
                  deviceInfo.isMobile ? "mobile-text" : "mb-6"
                )}>
                  {finalT?.home.welcome.description1}
                </p>
                <p className={cn(
                  "text-muted-foreground mb-mobile-lg",
                  deviceInfo.isMobile ? "mobile-text" : "mb-8"
                )}>
                  <a
                    href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/"
                    className={cn(
                      "text-primary touch-feedback",
                      deviceInfo.isMobile ? "" : "hover:underline"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr Ales Aliashkevich
                  </a> {finalT?.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/expertise">
                    {finalT?.home.welcome.learnMore} <ArrowRight className={cn(
                      "ml-2",
                      deviceInfo.isMobile ? "h-5 w-5" : "h-4 w-4"
                    )} />
                  </Link>
                </Button>
              </div>

              <div className={cn(
                "relative rounded-lg overflow-hidden shadow-xl",
                deviceInfo.isMobile && "order-first"
              )}>
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
        <section className={cn(
          "bg-card",
          deviceInfo.isMobile ? "mobile-section" : "section"
        )}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className={cn(
              "text-center mx-auto animate-fade-in mb-mobile-xl",
              deviceInfo.isMobile ? "max-w-full" : "max-w-3xl mb-12"
            )}>
              <span className={cn(
                "text-primary font-medium uppercase tracking-wider",
                deviceInfo.isMobile ? "mobile-text" : "text-sm"
              )}>
                {finalT?.home.advancedTechnologies.subtitle}
              </span>
              <h2 className={cn(
                "font-bold mt-2 mb-mobile-md",
                deviceInfo.isMobile
                  ? "mobile-3xl"
                  : "text-3xl md:text-4xl mb-4"
              )}>
                {finalT?.home.advancedTechnologies.title}
              </h2>
              <p className={cn(
                "text-muted-foreground",
                deviceInfo.isMobile ? "mobile-text" : ""
              )}>
                {finalT?.home.advancedTechnologies.description}
              </p>
            </div>

            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-lg"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            )}>
              <div className={cn(
                "card rounded-lg shadow-md bg-background animate-fade-in transition-all duration-300",
                deviceInfo.isMobile
                  ? "p-mobile-lg touch-feedback"
                  : "p-6 hover:shadow-xl hover:scale-105"
              )} style={{ animationDelay: '100ms' }}>
                <div className={cn(
                  "flex justify-center",
                  deviceInfo.isMobile ? "mb-mobile-md" : "mb-4"
                )}>
                  <div className={cn(
                    "rounded-2xl bg-gradient-to-br from-blue-500/20 via-primary/15 to-purple-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10",
                    deviceInfo.isMobile ? "w-16 h-16" : "w-20 h-20"
                  )}>
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
                <h3 className={cn(
                  "font-semibold text-center mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>
                  {finalT?.home.advancedTechnologies.features.minimallyInvasive.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground text-center",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {finalT?.home.advancedTechnologies.features.minimallyInvasive.description}
                </p>
                <div className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "mt-mobile-md" : "mt-4"
                )}>
                  <Link
                    to="/expertise"
                    className={cn(
                      "text-primary touch-feedback",
                      deviceInfo.isMobile ? "" : "hover:underline"
                    )}
                  >
                    {finalT?.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className={cn(
                "card rounded-lg shadow-md bg-background animate-fade-in transition-all duration-300",
                deviceInfo.isMobile
                  ? "p-mobile-lg touch-feedback"
                  : "p-6 hover:shadow-xl hover:scale-105"
              )} style={{ animationDelay: '200ms' }}>
                <div className={cn(
                  "flex justify-center",
                  deviceInfo.isMobile ? "mb-mobile-md" : "mb-4"
                )}>
                  <div className={cn(
                    "rounded-2xl bg-gradient-to-br from-emerald-500/20 via-primary/15 to-cyan-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10",
                    deviceInfo.isMobile ? "w-16 h-16" : "w-20 h-20"
                  )}>
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
                <h3 className={cn(
                  "font-semibold text-center mb-mobile-sm",
                  deviceInfo.isMobile
                    ? "mobile-subheading"
                    : "text-xl mb-3"
                )}>{finalT?.home.advancedTechnologies.features.advancedImaging.title}</h3>
                <p className={cn(
                  "text-muted-foreground text-center",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  {finalT?.home.advancedTechnologies.features.advancedImaging.description}
                </p>
                <div className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "mt-mobile-md" : "mt-4"
                )}>
                  <Link
                    to="/expertise"
                    className={cn(
                      "text-primary touch-feedback",
                      deviceInfo.isMobile ? "" : "hover:underline"
                    )}
                  >
                    {finalT?.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className={cn(
                "card rounded-lg shadow-md bg-background animate-fade-in transition-all duration-300",
                deviceInfo.isMobile
                  ? "p-mobile-lg touch-feedback"
                  : "p-6 hover:shadow-xl hover:scale-105"
              )} style={{ animationDelay: '300ms' }}>
                <div className={cn(
                  "flex justify-center",
                  deviceInfo.isMobile ? "mb-mobile-md" : "mb-4"
                )}>
                  <div className={cn(
                    "rounded-2xl bg-gradient-to-br from-amber-500/20 via-primary/15 to-orange-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10",
                    deviceInfo.isMobile ? "w-16 h-16" : "w-20 h-20"
                  )}>
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
                <h3 className="text-xl font-semibold mb-3 text-center">{finalT?.home.advancedTechnologies.features.roboticSurgery.title}</h3>
                <p className="text-muted-foreground text-center">
                  {finalT?.home.advancedTechnologies.features.roboticSurgery.description}
                </p>
                <div className="mt-4 text-center">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {finalT?.home.welcome.learnMore}
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
                <h3 className="text-xl font-semibold mb-3 text-center">{finalT?.home.advancedTechnologies.features.patientRecovery.title}</h3>
                <p className="text-muted-foreground text-center">
                  {finalT?.home.advancedTechnologies.features.patientRecovery.description}
                </p>
                <div className="mt-4 text-center">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {finalT?.home.welcome.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={deviceInfo.isMobile ? "mobile-section" : "section"}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className={cn(
              "text-center mx-auto mb-mobile-xl",
              deviceInfo.isMobile ? "max-w-full" : "max-w-3xl mb-12"
            )}>
              <span className={cn(
                "text-primary font-medium uppercase tracking-wider",
                deviceInfo.isMobile ? "mobile-text" : "text-sm"
              )}>
                {finalT?.home.featuredProcedures.subtitle}
              </span>
              <h2 className={cn(
                "font-bold mt-2 mb-mobile-md",
                deviceInfo.isMobile
                  ? "mobile-3xl"
                  : "text-3xl md:text-4xl mb-4"
              )}>
                {finalT?.home.featuredProcedures.title}
              </h2>
              <p className={cn(
                "text-muted-foreground",
                deviceInfo.isMobile ? "mobile-text" : ""
              )}>
                {finalT?.home.featuredProcedures.description}
              </p>
            </div>

            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-lg mt-mobile-xl"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            )}>
              <div className="card text-center p-6 rounded-lg shadow-md bg-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500/20 via-primary/15 to-pink-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4"/>
                        </linearGradient>
                        <radialGradient id="brainPulse" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      {/* Brain outline with anatomical accuracy */}
                      <path d="M12 3C8.5 3 6 5.5 6 8.5c0 1.5.5 2.8 1.3 3.8-.3.7-.3 1.4-.3 2.2 0 2.5 2 4.5 4.5 4.5h1c2.5 0 4.5-2 4.5-4.5 0-.8 0-1.5-.3-2.2.8-1 1.3-2.3 1.3-3.8 0-3-2.5-5.5-6-5.5z" stroke="currentColor" strokeWidth="1.5" fill="url(#brainPulse)"/>
                      {/* Brain hemispheres division */}
                      <path d="M12 4v15" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                      {/* Neural pathways */}
                      <path d="M8 7c1 0 2 1 3 1s2-1 3-1M8 10c1 0 2 1 3 1s2-1 3-1M8 13c1 0 2 1 3 1s2-1 3-1" stroke="url(#brainGrad)" strokeWidth="1" opacity="0.7"/>
                      {/* Tumor/lesion indicators */}
                      <circle cx="9" cy="8" r="1.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3"/>
                      <circle cx="15" cy="11" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3"/>
                      {/* Vascular system */}
                      <path d="M7 6c2 1 4 2 6 1M7 15c2-1 4-2 6-1" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
                      {/* Brain stem */}
                      <rect x="11" y="18" width="2" height="3" rx="1" fill="currentColor" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT?.expertiseCards.brainConditions.title}</h3>
                <p className="text-muted-foreground">
                  {finalT?.expertiseCards.brainConditions.description}
                </p>
                <div className="mt-4">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {finalT?.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card text-center p-6 rounded-lg shadow-md bg-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 via-primary/15 to-green-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4"/>
                        </linearGradient>
                      </defs>
                      {/* Spine vertebrae column */}
                      <rect x="11" y="2" width="2" height="20" rx="1" fill="url(#spineGrad)"/>
                      {/* Individual vertebrae */}
                      <ellipse cx="12" cy="4" rx="2.5" ry="1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <ellipse cx="12" cy="7" rx="2.5" ry="1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <ellipse cx="12" cy="10" rx="3" ry="1.2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <ellipse cx="12" cy="13" rx="3" ry="1.2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <ellipse cx="12" cy="16" rx="2.5" ry="1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <ellipse cx="12" cy="19" rx="2" ry="0.8" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      {/* Intervertebral discs */}
                      <ellipse cx="12" cy="5.5" rx="2" ry="0.5" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="12" cy="8.5" rx="2.2" ry="0.5" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="12" cy="11.5" rx="2.5" ry="0.6" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="12" cy="14.5" rx="2.5" ry="0.6" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="12" cy="17.5" rx="2" ry="0.5" fill="currentColor" opacity="0.6"/>
                      {/* Nerve roots */}
                      <path d="M9 7l-2 1M15 7l2 1M9 10l-2 1M15 10l2 1M9 13l-2 1M15 13l2 1" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                      {/* Problem indicators */}
                      <circle cx="8" cy="11" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.4"/>
                      <path d="M14 14c1 0 2 1 2 2" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT?.expertiseCards.spinalProblems.title}</h3>
                <p className="text-muted-foreground">
                  {finalT?.expertiseCards.spinalProblems.description}
                </p>
                <div className="mt-4">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {finalT?.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card text-center p-6 rounded-lg shadow-md bg-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-primary/15 to-amber-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="nerveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                      {/* Main nerve trunk */}
                      <path d="M3 12c3 0 6-2 9-2s6 2 9 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                      {/* Nerve branches */}
                      <path d="M6 12c0-2 1-4 2-6M6 12c0 2 1 4 2 6" stroke="url(#nerveGrad)" strokeWidth="1.5" fill="none"/>
                      <path d="M12 10c-1-2 0-4 1-6M12 14c-1 2 0 4 1 6" stroke="url(#nerveGrad)" strokeWidth="1.5" fill="none"/>
                      <path d="M18 12c0-2-1-4-2-6M18 12c0 2-1 4-2 6" stroke="url(#nerveGrad)" strokeWidth="1.5" fill="none"/>
                      {/* Nerve cell bodies */}
                      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
                      {/* Myelin sheaths */}
                      <ellipse cx="4.5" cy="12" rx="0.8" ry="0.4" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="9" cy="12" rx="0.8" ry="0.4" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="15" cy="12" rx="0.8" ry="0.4" fill="currentColor" opacity="0.6"/>
                      <ellipse cx="20.5" cy="12" rx="0.8" ry="0.4" fill="currentColor" opacity="0.6"/>
                      {/* Nerve compression/damage indicators */}
                      <path d="M10 10l4 4M14 10l-4 4" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                      {/* Electrical impulses */}
                      <path d="M2 11l2 1-2 1M22 11l-2 1 2 1" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
                      {/* Peripheral connections */}
                      <circle cx="8" cy="6" r="0.8" fill="currentColor" opacity="0.5"/>
                      <circle cx="8" cy="18" r="0.8" fill="currentColor" opacity="0.5"/>
                      <circle cx="16" cy="6" r="0.8" fill="currentColor" opacity="0.5"/>
                      <circle cx="16" cy="18" r="0.8" fill="currentColor" opacity="0.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT?.expertiseCards.nerveProblems.title}</h3>
                <p className="text-muted-foreground">
                  {finalT?.expertiseCards.nerveProblems.description}
                </p>
                <div className="mt-4">
                  <Link to="/expertise" className="text-primary hover:underline">
                    {finalT?.home.welcome.learnMore}
                  </Link>
                </div>
              </div>

              <div className="card text-center p-6 rounded-lg shadow-md bg-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-500/20 via-primary/15 to-gray-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/10">
                    <svg className="w-10 h-10 text-primary drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="legalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4"/>
                        </linearGradient>
                      </defs>
                      {/* Legal document */}
                      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="url(#legalGrad)" fillOpacity="0.1"/>
                      {/* Document header */}
                      <rect x="6" y="4" width="12" height="2" rx="0.5" fill="currentColor" opacity="0.3"/>
                      {/* Medical assessment sections */}
                      <path d="M6 8h8M6 10h10M6 12h7" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                      <path d="M6 15h9M6 17h8M6 19h6" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                      {/* Medical symbols */}
                      <circle cx="16" cy="9" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M16 8v2M15 9h2" stroke="currentColor" strokeWidth="1"/>
                      {/* Assessment scale */}
                      <rect x="15" y="14" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M16 15h2M16 16h2M16 17h2M16 18h2M16 19h2" stroke="currentColor" strokeWidth="0.5" opacity="0.7"/>
                      {/* Legal seal/stamp */}
                      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M17 18l1 1 2-2" stroke="currentColor" strokeWidth="1"/>
                      {/* Signature line */}
                      <path d="M6 21h12" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                      {/* AMA Guidelines reference */}
                      <rect x="2" y="6" width="2" height="8" rx="0.3" fill="currentColor" opacity="0.5"/>
                      <path d="M2.5 7v6" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{finalT?.expertiseCards.medicolegalReports.title}</h3>
                <p className="text-muted-foreground">
                  {finalT?.expertiseCards.medicolegalReports.description}
                </p>
                <div className="mt-4">
                  <Link to="/medicolegal" className="text-primary hover:underline">
                    {finalT?.home.welcome.learnMore}
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
                <span className="text-primary font-medium uppercase mb-2 block">{finalT?.minimallyInvasive?.subtitle}</span>
                <h2 className="text-2xl font-bold mb-4">{finalT?.minimallyInvasive?.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {finalT?.minimallyInvasive?.description1}
                </p>
                <p className="text-muted-foreground mb-4">
                  {finalT?.minimallyInvasive?.description2}
                </p>
                <p className="text-muted-foreground mb-4">
                  {finalT?.minimallyInvasive?.description3} <a href="https://mpscentre.com.au/dtTeam/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr. Aliashkevich</a>
                </p>
                <ul className="text-muted-foreground mb-6 list-none space-y-1">
                  <li>– {finalT?.minimallyInvasive?.principle1}</li>
                  <li>– {finalT?.minimallyInvasive?.principle2}</li>
                  <li>– {finalT?.minimallyInvasive?.principle3}</li>
                </ul>
                <Button asChild>
                  <Link to="/expertise">
                    {finalT?.minimallyInvasive?.buttonText}
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
                <span className="text-primary font-medium uppercase mb-2 block">{finalT?.discReplacement?.subtitle}</span>
                <h2 className="text-2xl font-bold mb-4">{finalT?.discReplacement?.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {finalT?.discReplacement?.description1}
                </p>
                <p className="text-muted-foreground mb-4">
                  {finalT?.discReplacement?.description2}
                </p>
                <p className="text-muted-foreground mb-4">
                  {finalT?.discReplacement?.description3}
                </p>
                <Button asChild>
                  <Link to="/expertise/cervical-disc-replacement">
                    {finalT?.discReplacement?.buttonText}
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
    </StandardPageLayout>
  );
};

Index.displayName = 'Index';

export default Index;
