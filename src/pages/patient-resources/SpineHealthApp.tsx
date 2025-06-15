import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Activity, Stethoscope, ClipboardList, Target } from "lucide-react";

export default function SpineHealthApp() {
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
                Spine Health App
              </h1>
              <p className="text-muted-foreground mb-8">
                Your personalized guide to understanding and managing chronic neck and back problems based on evidence-based medicine.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/patient-resources/assessment-tools">Start Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/patient-resources/condition-information">Learn About Conditions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Spine Health App Helps You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Evidence-Based Education</CardTitle>
                  <CardDescription>
                    Learn about your condition through scientifically validated information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our educational content is developed by neurosurgical experts and based on the latest research in biomechanics and neurophysiology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/condition-information">Explore Conditions</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Personalized Exercise Plans</CardTitle>
                  <CardDescription>
                    Get customized exercise recommendations based on your specific condition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our algorithm creates tailored exercise programs designed to strengthen your spine, improve mobility, and reduce pain based on your assessment results.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/exercise-library">View Exercise Library</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Comprehensive Assessment</CardTitle>
                  <CardDescription>
                    Detailed evaluation of your symptoms and condition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our assessment tools help identify the specific nature of your condition through detailed questionnaires, pain mapping, and functional tests.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/assessment-tools">Take Assessment</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>
                    Monitor your improvement over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track your pain levels, mobility improvements, exercise completion, and neurological symptoms to see your progress and adjust your plan accordingly.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/patient-dashboard">View Dashboard</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Goal Setting</CardTitle>
                  <CardDescription>
                    Set and achieve meaningful health objectives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Define personalized goals for pain reduction, increased mobility, or activity resumption, and track your progress toward achieving them.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/patient-dashboard">Set Goals</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="assess" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="assess">Assess</TabsTrigger>
                  <TabsTrigger value="learn">Learn</TabsTrigger>
                  <TabsTrigger value="exercise">Exercise</TabsTrigger>
                  <TabsTrigger value="track">Track</TabsTrigger>
                </TabsList>
                <TabsContent value="assess" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Comprehensive Assessment</h3>
                      <p className="text-muted-foreground mb-4">
                        Start with our detailed assessment that evaluates your symptoms, medical history, and functional capacity. You can even upload imaging results for a more precise analysis.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Our assessment includes:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Detailed symptom questionnaires</li>
                        <li>Pain mapping tools</li>
                        <li>Functional movement tests</li>
                        <li>Medical history analysis</li>
                        <li>Imaging results integration</li>
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="/patient-resources/assessment-tools">Start Assessment</Link>
                      </Button>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/images/spine-assessment-tool.jpg" 
                        alt="Spine assessment process" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="learn" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/images/spine-education-interactive.jpg" 
                        alt="Interactive spine education" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Evidence-Based Education</h3>
                      <p className="text-muted-foreground mb-4">
                        Access comprehensive information about your specific condition, including causes, symptoms, and treatment options. Our educational content includes interactive diagrams, videos, and detailed explanations.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Educational resources include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Interactive anatomical models</li>
                        <li>Condition-specific information</li>
                        <li>Treatment option explanations</li>
                        <li>Pain science education</li>
                        <li>Biomechanics fundamentals</li>
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="/patient-resources/condition-information">Explore Conditions</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="exercise" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Personalized Exercise Program</h3>
                      <p className="text-muted-foreground mb-4">
                        Receive a customized exercise program based on your assessment results. Each exercise includes video demonstrations, step-by-step instructions, and modification options.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Exercise features include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Video demonstrations</li>
                        <li>Detailed instructions</li>
                        <li>Progression tracking</li>
                        <li>Difficulty adjustments</li>
                        <li>Feedback-based modifications</li>
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="/patient-resources/exercise-library">View Exercises</Link>
                      </Button>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/images/spine-exercise-demonstration.jpg" 
                        alt="Spine exercise demonstration" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="track" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/images/spine-progress-tracking.jpg" 
                        alt="Spine health progress tracking" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Progress Tracking & Goal Setting</h3>
                      <p className="text-muted-foreground mb-4">
                        Monitor your improvement over time with our comprehensive tracking tools. Set personalized goals and track your progress toward achieving them.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Tracking features include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Pain level monitoring</li>
                        <li>Mobility improvement tracking</li>
                        <li>Exercise completion logging</li>
                        <li>Symptom change documentation</li>
                        <li>Goal achievement visualization</li>
                      </ul>
                      <Button asChild className="mt-4">
                        <Link to="/patient-resources/patient-dashboard">View Dashboard</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Sarah, 42</CardTitle>
                  <CardDescription>Herniated Disc</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "After struggling with a herniated disc for years, this app helped me understand my condition and provided exercises that actually made a difference. My pain has decreased significantly, and I'm back to enjoying activities I thought I'd never do again."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Michael, 56</CardTitle>
                  <CardDescription>Spinal Stenosis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The personalized exercise program was a game-changer for my spinal stenosis. The app adjusted my exercises based on my feedback, and the educational content helped me understand why certain movements were beneficial while others weren't."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Emma, 35</CardTitle>
                  <CardDescription>Chronic Neck Pain</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Being able to track my progress over time has been incredibly motivating. I can see how my pain levels have decreased and my range of motion has improved. The goal-setting feature helped me stay committed to my recovery journey."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Spine Health?</h2>
              <p className="text-muted-foreground mb-8">
                Start your personalized journey to better spine health today. Our evidence-based approach will help you understand your condition and provide the tools you need to improve.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/patient-resources/assessment-tools">Start Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/patient-resources/condition-information">Learn More</Link>
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
