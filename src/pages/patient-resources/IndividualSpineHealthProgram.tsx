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

export default function IndividualSpineHealthProgram() {
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
                {t.patientResources.individualSpineHealthProgram.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {t.patientResources.individualSpineHealthProgram.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="#assessment">{t.patientResources.individualSpineHealthProgram.startAssessment}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#features">{t.patientResources.individualSpineHealthProgram.exploreFeatures}</Link>
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
                <h2 className="text-3xl font-bold mb-6">{t.patientResources.individualSpineHealthProgram.journey.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {t.patientResources.individualSpineHealthProgram.journey.description}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.patientResources.individualSpineHealthProgram.journey.approach}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li>{t.patientResources.individualSpineHealthProgram.journey.assess}</li>
                  <li>{t.patientResources.individualSpineHealthProgram.journey.educate}</li>
                  <li>{t.patientResources.individualSpineHealthProgram.journey.recommend}</li>
                  <li>{t.patientResources.individualSpineHealthProgram.journey.track}</li>
                  <li>{t.patientResources.individualSpineHealthProgram.journey.support}</li>
                </ul>
                <Button asChild>
                  <Link to="#how-it-works">{t.patientResources.individualSpineHealthProgram.journey.howItWorks}</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/individual-spine-health-1.jpg"
                  alt="Individual spine health program"
                  className="w-full h-auto"
                  fallbackSrc="https://via.placeholder.com/800x600?text=Spine+Health+Program"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgram.keyFeatures.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.keyFeatures.assessment.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.assessment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.assessment.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#assessment">{t.patientResources.individualSpineHealthProgram.keyFeatures.assessment.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.keyFeatures.education.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.education.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.education.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/condition-information">{t.patientResources.individualSpineHealthProgram.keyFeatures.education.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.keyFeatures.exercisePlans.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.exercisePlans.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.exercisePlans.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/exercise-library">{t.patientResources.individualSpineHealthProgram.keyFeatures.exercisePlans.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.keyFeatures.progressTracking.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.progressTracking.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.progressTracking.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#dashboard">{t.patientResources.individualSpineHealthProgram.keyFeatures.progressTracking.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.keyFeatures.goalSetting.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.goalSetting.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.goalSetting.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#goals">{t.patientResources.individualSpineHealthProgram.keyFeatures.goalSetting.button}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.keyFeatures.healthcareIntegration.title}</CardTitle>
                  <CardDescription>
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.healthcareIntegration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.keyFeatures.healthcareIntegration.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#share">{t.patientResources.individualSpineHealthProgram.keyFeatures.healthcareIntegration.button}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgram.howItWorks.title}</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="assess" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="assess">{t.patientResources.individualSpineHealthProgram.howItWorks.tabs.assess}</TabsTrigger>
                  <TabsTrigger value="learn">{t.patientResources.individualSpineHealthProgram.howItWorks.tabs.learn}</TabsTrigger>
                  <TabsTrigger value="exercise">{t.patientResources.individualSpineHealthProgram.howItWorks.tabs.exercise}</TabsTrigger>
                  <TabsTrigger value="track">{t.patientResources.individualSpineHealthProgram.howItWorks.tabs.track}</TabsTrigger>
                </TabsList>
                <TabsContent value="assess" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.howItWorks.assess.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.assess.description1}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.assess.description2}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.assess.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="#assessment">{t.patientResources.individualSpineHealthProgram.howItWorks.assess.button}</Link>
                      </Button>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <SafeImage
                        src="/images/individual-spine-health-2.jpg"
                        alt="Spine assessment process"
                        className="w-full h-auto"
                        fallbackSrc="https://via.placeholder.com/800x600?text=Spine+Assessment+Process"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="learn" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <SafeImage
                        src="/images/individual-spine-health-3.jpg"
                        alt="Interactive spine education"
                        className="w-full h-auto"
                        fallbackSrc="https://via.placeholder.com/800x600?text=Interactive+Spine+Education"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.howItWorks.learn.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.learn.description1}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.learn.description2}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.learn.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="/patient-resources/spine-conditions-library">{t.patientResources.individualSpineHealthProgram.howItWorks.learn.button}</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="exercise" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.howItWorks.exercise.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.exercise.description1}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.exercise.description2}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.exercise.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="/patient-resources/exercise-library">{t.patientResources.individualSpineHealthProgram.howItWorks.exercise.button}</Link>
                      </Button>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <SafeImage
                        src="/images/individual-spine-health-4.jpg"
                        alt="Spine exercise demonstration"
                        className="w-full h-auto"
                        fallbackSrc="https://via.placeholder.com/800x600?text=Spine+Exercise+Demonstration"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="track" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <SafeImage
                        src="/images/individual-spine-health-5.jpg"
                        alt="Spine health progress tracking"
                        className="w-full h-auto"
                        fallbackSrc="https://via.placeholder.com/800x600?text=Spine+Health+Progress+Tracking"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.howItWorks.track.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.track.description1}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.track.description2}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.howItWorks.track.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="#dashboard">{t.patientResources.individualSpineHealthProgram.howItWorks.track.button}</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Assessment Tools */}
        <section id="assessment" className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgram.assessmentTools.title}</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="pain" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="pain">{t.patientResources.individualSpineHealthProgram.assessmentTools.tabs.pain}</TabsTrigger>
                  <TabsTrigger value="functional">{t.patientResources.individualSpineHealthProgram.assessmentTools.tabs.functional}</TabsTrigger>
                  <TabsTrigger value="history">{t.patientResources.individualSpineHealthProgram.assessmentTools.tabs.history}</TabsTrigger>
                  <TabsTrigger value="imaging">{t.patientResources.individualSpineHealthProgram.assessmentTools.tabs.imaging}</TabsTrigger>
                </TabsList>

                <TabsContent value="pain" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.assessmentTools.pain.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.pain.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-muted-foreground mb-4">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.pain.content}
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.pain.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <SafeImage
                            src="/images/individual-spine-health-6.jpg"
                            alt="Pain assessment"
                            className="w-full h-auto"
                            fallbackSrc="https://via.placeholder.com/800x600?text=Pain+Assessment"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.pain.timeToComplete}
                      </p>
                      <Button>{t.patientResources.individualSpineHealthProgram.assessmentTools.pain.button}</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="functional" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.assessmentTools.functional.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.functional.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <SafeImage
                            src="/images/individual-spine-health-7.jpg"
                            alt="Functional assessment"
                            className="w-full h-auto"
                            fallbackSrc="https://via.placeholder.com/800x600?text=Functional+Assessment"
                          />
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-4">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.functional.content}
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.functional.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.functional.timeToComplete}
                      </p>
                      <Button>{t.patientResources.individualSpineHealthProgram.assessmentTools.functional.button}</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.assessmentTools.history.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.history.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-muted-foreground mb-4">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.history.content}
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.history.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <SafeImage
                            src="/images/individual-spine-health-medical-history.jpg"
                            alt="Medical history assessment"
                            className="w-full h-auto"
                            fallbackSrc="https://via.placeholder.com/800x600?text=Medical+History+Assessment"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.history.timeToComplete}
                      </p>
                      <Button>{t.patientResources.individualSpineHealthProgram.assessmentTools.history.button}</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="imaging" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.assessmentTools.imaging.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.imaging.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <SafeImage
                            src="/images/individual-spine-health-9.jpg"
                            alt="Imaging upload"
                            className="w-full h-auto"
                            fallbackSrc="https://via.placeholder.com/800x600?text=Imaging+Upload"
                          />
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-4">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.imaging.content}
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                            {t.patientResources.individualSpineHealthProgram.assessmentTools.imaging.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.assessmentTools.imaging.timeToComplete}
                      </p>
                      <Button>{t.patientResources.individualSpineHealthProgram.assessmentTools.imaging.button}</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Benefits of Assessment Tools */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgram.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{t.patientResources.individualSpineHealthProgram.benefits.evidenceBased.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.patientResources.individualSpineHealthProgram.benefits.evidenceBased.description}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{t.patientResources.individualSpineHealthProgram.benefits.personalizedInsights.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.patientResources.individualSpineHealthProgram.benefits.personalizedInsights.description}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <ClipboardList className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{t.patientResources.individualSpineHealthProgram.benefits.comprehensiveEvaluation.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.patientResources.individualSpineHealthProgram.benefits.comprehensiveEvaluation.description}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{t.patientResources.individualSpineHealthProgram.benefits.treatmentIntegration.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.patientResources.individualSpineHealthProgram.benefits.treatmentIntegration.description}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{t.patientResources.individualSpineHealthProgram.benefits.progressMonitoring.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.patientResources.individualSpineHealthProgram.benefits.progressMonitoring.description}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Share2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{t.patientResources.individualSpineHealthProgram.benefits.healthcareCollaboration.title}</h3>
                <p className="text-muted-foreground text-center">
                  {t.patientResources.individualSpineHealthProgram.benefits.healthcareCollaboration.description}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                {t.patientResources.individualSpineHealthProgram.benefits.foundation}
              </p>
              <Button asChild size="lg">
                <Link to="#assessment">{t.patientResources.individualSpineHealthProgram.benefits.startAssessment}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section id="dashboard" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgram.dashboard.title}</h2>
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="progress" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="progress">{t.patientResources.individualSpineHealthProgram.dashboard.tabs.progress}</TabsTrigger>
                  <TabsTrigger value="exercises">{t.patientResources.individualSpineHealthProgram.dashboard.tabs.exercises}</TabsTrigger>
                  <TabsTrigger value="goals" id="goals">{t.patientResources.individualSpineHealthProgram.dashboard.tabs.goals}</TabsTrigger>
                </TabsList>
                <TabsContent value="progress" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.dashboard.progress.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.dashboard.progress.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.dashboard.progress.painTracking}</h3>
                          <div className="bg-card border rounded-lg p-4 h-64 flex items-center justify-center">
                            <div className="text-center">
                              <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-muted-foreground">
                                {t.patientResources.individualSpineHealthProgram.dashboard.progress.painVisualization}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.dashboard.progress.mobilityImprovement}</h3>
                          <div className="bg-card border rounded-lg p-4 h-64 flex items-center justify-center">
                            <div className="text-center">
                              <BarChart className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-muted-foreground">
                                {t.patientResources.individualSpineHealthProgram.dashboard.progress.mobilityVisualization}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.dashboard.progress.symptomJournal}</h3>
                        <div className="bg-card border rounded-lg p-4">
                          <p className="text-muted-foreground mb-4">
                            {t.patientResources.individualSpineHealthProgram.dashboard.progress.recordChanges}
                          </p>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="symptom-date">{t.patientResources.individualSpineHealthProgram.dashboard.progress.date}</Label>
                              <Input id="symptom-date" type="date" disabled />
                            </div>
                            <div>
                              <Label htmlFor="symptom-notes">{t.patientResources.individualSpineHealthProgram.dashboard.progress.notes}</Label>
                              <textarea
                                id="symptom-notes"
                                className="w-full h-24 p-2 border rounded-md bg-background"
                                placeholder={t.patientResources.individualSpineHealthProgram.dashboard.progress.notesPlaceholder}
                                disabled
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.dashboard.progress.preview}
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="exercises" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.dashboard.exercises.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.dashboard.exercises.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-card border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">{t.patientResources.individualSpineHealthProgram.dashboard.exercises.todaysExercises}</h3>
                            <span className="text-sm text-muted-foreground">{t.patientResources.individualSpineHealthProgram.dashboard.exercises.completed}</span>
                          </div>
                          <div className="space-y-4">
                            {t.patientResources.individualSpineHealthProgram.dashboard.exercises.exercises.map((exercise, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                                <div>
                                  <p className="font-medium">{exercise.name}</p>
                                  <p className="text-sm text-muted-foreground">{exercise.sets}</p>
                                </div>
                                <Button variant="outline" size="sm" disabled>{t.patientResources.individualSpineHealthProgram.dashboard.exercises.markComplete}</Button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-card border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.dashboard.exercises.feedback}</h3>
                          <p className="text-muted-foreground mb-4">
                            {t.patientResources.individualSpineHealthProgram.dashboard.exercises.provideFeedback}
                          </p>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="exercise-difficulty">{t.patientResources.individualSpineHealthProgram.dashboard.exercises.difficultyLevel}</Label>
                              <select
                                id="exercise-difficulty"
                                className="w-full p-2 border rounded-md bg-background"
                                disabled
                              >
                                <option>{t.patientResources.individualSpineHealthProgram.dashboard.exercises.selectDifficulty}</option>
                                {t.patientResources.individualSpineHealthProgram.dashboard.exercises.difficulties.map((difficulty, index) => (
                                  <option key={index}>{difficulty}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="exercise-pain">{t.patientResources.individualSpineHealthProgram.dashboard.exercises.painDuring}</Label>
                              <select
                                id="exercise-pain"
                                className="w-full p-2 border rounded-md bg-background"
                                disabled
                              >
                                <option>{t.patientResources.individualSpineHealthProgram.dashboard.exercises.selectPain}</option>
                                {t.patientResources.individualSpineHealthProgram.dashboard.exercises.painLevels.map((level, index) => (
                                  <option key={index}>{level}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.dashboard.exercises.preview}
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="goals" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.patientResources.individualSpineHealthProgram.dashboard.goals.title}</CardTitle>
                      <CardDescription>
                        {t.patientResources.individualSpineHealthProgram.dashboard.goals.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-card border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.dashboard.goals.currentGoals}</h3>
                          <div className="space-y-4">
                            <div className="p-3 bg-muted/50 rounded-md">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goal1.title}</p>
                                <span className="text-sm text-muted-foreground">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goal1.complete}</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goal1.date}</p>
                            </div>
                            <div className="p-3 bg-muted/50 rounded-md">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goal2.title}</p>
                                <span className="text-sm text-muted-foreground">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goal2.complete}</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '30%' }}></div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goal2.date}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-card border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4">{t.patientResources.individualSpineHealthProgram.dashboard.goals.setNewGoal}</h3>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="goal-description">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goalDescription}</Label>
                              <Input
                                id="goal-description"
                                placeholder={t.patientResources.individualSpineHealthProgram.dashboard.goals.goalPlaceholder}
                                disabled
                              />
                            </div>
                            <div>
                              <Label htmlFor="goal-target-date">{t.patientResources.individualSpineHealthProgram.dashboard.goals.targetDate}</Label>
                              <Input id="goal-target-date" type="date" disabled />
                            </div>
                            <div>
                              <Label htmlFor="goal-type">{t.patientResources.individualSpineHealthProgram.dashboard.goals.goalType}</Label>
                              <select
                                id="goal-type"
                                className="w-full p-2 border rounded-md bg-background"
                                disabled
                              >
                                <option>{t.patientResources.individualSpineHealthProgram.dashboard.goals.selectGoalType}</option>
                                {t.patientResources.individualSpineHealthProgram.dashboard.goals.goalTypes.map((type, index) => (
                                  <option key={index}>{type}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        {t.patientResources.individualSpineHealthProgram.dashboard.goals.preview}
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.individualSpineHealthProgram.successStories.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.successStories.sarah.name}</CardTitle>
                  <CardDescription>{t.patientResources.individualSpineHealthProgram.successStories.sarah.condition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.successStories.sarah.testimonial}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.successStories.michael.name}</CardTitle>
                  <CardDescription>{t.patientResources.individualSpineHealthProgram.successStories.michael.condition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.successStories.michael.testimonial}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>{t.patientResources.individualSpineHealthProgram.successStories.emma.name}</CardTitle>
                  <CardDescription>{t.patientResources.individualSpineHealthProgram.successStories.emma.condition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.patientResources.individualSpineHealthProgram.successStories.emma.testimonial}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Access Your Dashboard */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#1a222e]/95 dark:bg-[#1a222e]/95 rounded-lg p-8 shadow-lg">
                <h2 className="text-4xl font-bold mb-2 text-center text-white">{t.patientResources.individualSpineHealthProgram.accessDashboard.title}</h2>
                <p className="text-gray-400 mb-8 text-center">
                  {t.patientResources.individualSpineHealthProgram.accessDashboard.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Button variant="default" className="w-full py-6 text-lg font-medium">
                    {t.patientResources.individualSpineHealthProgram.accessDashboard.login}
                  </Button>
                  <Button variant="outline" className="w-full py-6 text-lg font-medium">
                    {t.patientResources.individualSpineHealthProgram.accessDashboard.register}
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-lg mb-2 block text-white">{t.patientResources.individualSpineHealthProgram.accessDashboard.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.patientResources.individualSpineHealthProgram.accessDashboard.emailPlaceholder}
                      className="w-full py-6 text-lg bg-background/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-lg mb-2 block text-white">{t.patientResources.individualSpineHealthProgram.accessDashboard.password}</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={t.patientResources.individualSpineHealthProgram.accessDashboard.passwordPlaceholder}
                      className="w-full py-6 text-lg bg-background/50"
                    />
                  </div>

                  <Button className="w-full py-6 text-lg font-medium bg-blue-500 hover:bg-blue-600">
                    {t.patientResources.individualSpineHealthProgram.accessDashboard.login}
                  </Button>

                  <div className="text-center">
                    <Link to="/patient-resources/forgot-password" className="text-blue-500 hover:underline">
                      {t.patientResources.individualSpineHealthProgram.accessDashboard.forgotPassword}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="share" className="py-16">
          <div className="container">
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">{t.patientResources.individualSpineHealthProgram.readyToTakeControl.title}</h2>
                <p className="text-muted-foreground mb-8">
                  {t.patientResources.individualSpineHealthProgram.readyToTakeControl.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="#assessment">{t.patientResources.individualSpineHealthProgram.readyToTakeControl.startAssessment}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/appointments">{t.patientResources.individualSpineHealthProgram.readyToTakeControl.scheduleConsultation}</Link>
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
