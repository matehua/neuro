import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SafeImage from '@/components/SafeImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

import {
Brain,
  Activity,
  Stethoscope,
  ClipboardList,
  Target,
  Calendar,
  Share2,
  FileUp,
  ClipboardCheck,
  History,
  LineChart,
  BarChart
} from "lucide-react";

const IndividualSpineHealthProgramme: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.patientResources && safeT.patientResources.individualSpineHealthProgramme) ? safeT : {
    patientResources: {
      individualSpineHealthProgramme: {
        title: "Individual Spine Health Programme",
        subtitle: "Personalized spine health management tailored to your unique needs and goals",
        startAssessment: "Start Assessment",
        exploreFeatures: "Explore Features",
        journey: {
          title: "Your Personalized Spine Health Journey",
          description: "Our Individual Spine Health Programme is designed to provide you with a comprehensive, personalized approach to managing your spine health.",
          approach: "Through evidence-based assessment tools, educational resources, and tailored exercise programs, we help you take control of your spine health journey.",
          assess: "Comprehensive spine health assessment",
          educate: "Personalized educational content",
          recommend: "Tailored exercise and lifestyle recommendations",
          track: "Progress monitoring and goal tracking",
          support: "Ongoing support and guidance",
          howItWorks: "How It Works"
        },
        keyFeatures: {
          title: "Key Features",
          assessment: {
            title: "Comprehensive Assessment",
            description: "Evidence-based evaluation tools",
            content: "Complete a detailed assessment to understand your current spine health status and identify areas for improvement.",
            button: "Start Assessment"
          },
          education: {
            title: "Personalized Education",
            description: "Tailored learning resources",
            content: "Access educational content specifically curated based on your assessment results and spine health needs.",
            button: "Learn More"
          },
          exercisePlans: {
            title: "Custom Exercise Plans",
            description: "Targeted exercise programs",
            content: "Receive personalized exercise recommendations designed to address your specific spine health goals and limitations.",
            button: "View Exercises"
          },
          progressTracking: {
            title: "Progress Tracking",
            description: "Monitor your improvement",
            content: "Track your progress over time with regular assessments and visual progress indicators.",
            button: "View Dashboard"
          },
          goalSetting: {
            title: "Goal Setting",
            description: "Set and achieve targets",
            content: "Establish realistic, achievable goals for your spine health journey and track your progress towards them.",
            button: "Set Goals"
          },
          healthcareIntegration: {
            title: "Healthcare Integration",
            description: "Connect with your care team",
            content: "Share your progress and insights with your healthcare providers for integrated care management.",
            button: "Share Progress"
          }
        },
        readyToTakeControl: {
          title: "Ready to Take Control of Your Spine Health?",
          description: "Start your personalized spine health journey today with our comprehensive assessment and tailored recommendations.",
          startAssessment: "Start Assessment",
          scheduleConsultation: "Schedule Consultation"
        }
      }
    },
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    hero: { title: "Welcome", subtitle: "Professional Care", description: "Expert medical services" },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };

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
                {finalT.patientResources.individualSpineHealthProgramme.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {finalT.patientResources.individualSpineHealthProgramme.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="#assessment">{finalT.patientResources.individualSpineHealthProgramme.startAssessment}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#features">{finalT.patientResources.individualSpineHealthProgramme.exploreFeatures}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="features" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{finalT.patientResources.individualSpineHealthProgramme.journey.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {finalT.patientResources.individualSpineHealthProgramme.journey.description}
                </p>
                <p className="text-muted-foreground mb-4">
                  {finalT.patientResources.individualSpineHealthProgramme.journey.approach}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li>{finalT.patientResources.individualSpineHealthProgramme.journey.assess}</li>
                  <li>{finalT.patientResources.individualSpineHealthProgramme.journey.educate}</li>
                  <li>{finalT.patientResources.individualSpineHealthProgramme.journey.recommend}</li>
                  <li>{finalT.patientResources.individualSpineHealthProgramme.journey.track}</li>
                  <li>{finalT.patientResources.individualSpineHealthProgramme.journey.support}</li>
                </ul>
                <Button asChild>
                  <Link to="#how-it-works">{finalT.patientResources.individualSpineHealthProgramme.journey.howItWorks}</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/individual-spine-health-1.jpg"
                  alt="Individual spine health programme"
                  className="w-full h-auto"
                  fallbackSrc="/images/patient-resources/spine-health-hero.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.title}</CardTitle>
                  <CardDescription>
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#assessment">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.education.title}</CardTitle>
                  <CardDescription>
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.education.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.education.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/condition-information">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.education.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.title}</CardTitle>
                  <CardDescription>
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/exercise-library">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.title}</CardTitle>
                  <CardDescription>
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#dashboard">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.title}</CardTitle>
                  <CardDescription>
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#goals">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.title}</CardTitle>
                  <CardDescription>
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {finalT.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#share">{finalT.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.button}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="share" className="py-16">
          <div className="container">
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">{finalT.patientResources.individualSpineHealthProgramme.readyToTakeControl.title}</h2>
                <p className="text-muted-foreground mb-8">
                  {finalT.patientResources.individualSpineHealthProgramme.readyToTakeControl.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="#assessment">{finalT.patientResources.individualSpineHealthProgramme.readyToTakeControl.startAssessment}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/appointments">{finalT.patientResources.individualSpineHealthProgramme.readyToTakeControl.scheduleConsultation}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

IndividualSpineHealthProgramme.displayName = 'IndividualSpineHealthProgramme';

export default IndividualSpineHealthProgramme;
