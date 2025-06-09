import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SafeImage from "@/components/SafeImage";
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

export default function IndividualSpineHealthProgramme() {
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
                {t.patientResources.individualSpineHealthProgramme.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {t.patientResources.individualSpineHealthProgramme.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="#assessment">{t.patientResources.individualSpineHealthProgramme.startAssessment}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#features">{t.patientResources.individualSpineHealthProgramme.exploreFeatures}</Link>
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
                <h2 className="text-3xl font-bold mb-6">{t.patientResources.individualSpineHealthProgramme.journey.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.patientResources.individualSpineHealthProgramme.journey.description}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.patientResources.individualSpineHealthProgramme.journey.approach}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li>{t.patientResources.individualSpineHealthProgramme.journey.assess}</li>
                  <li>{t.patientResources.individualSpineHealthProgramme.journey.educate}</li>
                  <li>{t.patientResources.individualSpineHealthProgramme.journey.recommend}</li>
                  <li>{t.patientResources.individualSpineHealthProgramme.journey.track}</li>
                  <li>{t.patientResources.individualSpineHealthProgramme.journey.support}</li>
                </ul>
                <Button asChild>
                  <Link to="#how-it-works">{t.patientResources.individualSpineHealthProgramme.journey.howItWorks}</Link>
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
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgramme.keyFeatures.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#assessment">{t.patientResources.individualSpineHealthProgramme.keyFeatures.assessment.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgramme.keyFeatures.education.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.education.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.education.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/condition-information">{t.patientResources.individualSpineHealthProgramme.keyFeatures.education.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/exercise-library">{t.patientResources.individualSpineHealthProgramme.keyFeatures.exercisePlans.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#dashboard">{t.patientResources.individualSpineHealthProgramme.keyFeatures.progressTracking.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#goals">{t.patientResources.individualSpineHealthProgramme.keyFeatures.goalSetting.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#share">{t.patientResources.individualSpineHealthProgramme.keyFeatures.healthcareIntegration.button}</Link>
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
                <h2 className="text-3xl font-bold mb-6">{t.patientResources.individualSpineHealthProgramme.readyToTakeControl.title}</h2>
                <p className="text-muted-foreground mb-8">
                  {t.patientResources.individualSpineHealthProgramme.readyToTakeControl.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="#assessment">{t.patientResources.individualSpineHealthProgramme.readyToTakeControl.startAssessment}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/appointments">{t.patientResources.individualSpineHealthProgramme.readyToTakeControl.scheduleConsultation}</Link>
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
}
