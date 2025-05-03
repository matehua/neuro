import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, ClipboardCheck, History, Share2 } from "lucide-react";

export default function AssessmentTools() {
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
                {t.patientResources.assessmentTools.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {t.patientResources.assessmentTools.subtitle}
              </p>
              <Button asChild size="lg">
                <Link to="#assessment-form">{t.patientResources.assessmentTools.startAssessment}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Assessment Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive Spine Assessment</h2>
                <p className="text-muted-foreground mb-4">
                  Our comprehensive assessment tools help identify the specific nature of your spine condition through detailed questionnaires, pain mapping, and functional tests. This information is used to create a personalized care plan tailored to your unique needs.
                </p>
                <p className="text-muted-foreground mb-4">
                  The assessment process includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Pain Assessment:</strong> Detailed evaluation of your pain patterns, intensity, and triggers</li>
                  <li><strong>Functional Assessment:</strong> Analysis of how your condition affects daily activities and movement</li>
                  <li><strong>Medical History Review:</strong> Comprehensive review of your medical background and previous treatments</li>
                  <li><strong>Imaging Results:</strong> Option to upload and integrate your existing imaging studies</li>
                  <li><strong>Personalized Recommendations:</strong> Evidence-based suggestions tailored to your specific condition</li>
                </ul>
                <Button asChild>
                  <Link to="#assessment-form">Begin Your Assessment</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/spine-assessment-comprehensive.jpg" 
                  alt="Comprehensive spine assessment" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Types */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Assessment Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Pain Assessment</CardTitle>
                  <CardDescription>
                    Detailed evaluation of your pain patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our pain assessment tools help identify the location, intensity, quality, and triggers of your pain. This information is crucial for accurate diagnosis and treatment planning.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Visual pain mapping</li>
                      <li>Pain intensity scales</li>
                      <li>Pain quality descriptors</li>
                      <li>Trigger identification</li>
                      <li>Pain pattern analysis</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#pain-assessment">Start Pain Assessment</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Functional Assessment</CardTitle>
                  <CardDescription>
                    Analysis of how your condition affects daily activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our functional assessment evaluates how your spine condition impacts your ability to perform daily activities, work tasks, and recreational activities.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Activity limitation analysis</li>
                      <li>Range of motion assessment</li>
                      <li>Functional capacity evaluation</li>
                      <li>Work impact assessment</li>
                      <li>Quality of life measures</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#functional-assessment">Start Functional Assessment</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                  <CardDescription>
                    Comprehensive review of your medical background
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our medical history assessment collects important information about your past and current health conditions, treatments, and medications that may be relevant to your spine condition.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Previous spine conditions</li>
                      <li>Treatment history</li>
                      <li>Medication review</li>
                      <li>Relevant medical conditions</li>
                      <li>Family history</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#medical-history">Complete Medical History</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Assessment Form */}
        <section id="assessment-form" className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Start Your Assessment</h2>
              
              <Tabs defaultValue="pain" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="pain">Pain</TabsTrigger>
                  <TabsTrigger value="functional">Functional</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="imaging">Imaging</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pain" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pain Assessment</CardTitle>
                      <CardDescription>
                        Help us understand your pain patterns and symptoms
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        This section is currently under development. In the future, you'll be able to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                        <li>Use interactive body maps to indicate pain locations</li>
                        <li>Rate pain intensity on standardized scales</li>
                        <li>Describe pain qualities and patterns</li>
                        <li>Identify activities that worsen or improve symptoms</li>
                        <li>Track changes in pain over time</li>
                      </ul>
                      <p className="text-muted-foreground">
                        For now, please consult with Dr. Aliashkevich directly for a comprehensive pain assessment.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link to="/appointments">Schedule Consultation</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="functional" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Functional Assessment</CardTitle>
                      <CardDescription>
                        Evaluate how your condition affects your daily activities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        This section is currently under development. In the future, you'll be able to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                        <li>Complete standardized functional assessment questionnaires</li>
                        <li>Record video of movement tests (with privacy controls)</li>
                        <li>Evaluate impact on work, home, and recreational activities</li>
                        <li>Assess range of motion limitations</li>
                        <li>Track functional improvements over time</li>
                      </ul>
                      <p className="text-muted-foreground">
                        For now, please consult with Dr. Aliashkevich directly for a comprehensive functional assessment.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link to="/appointments">Schedule Consultation</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medical History</CardTitle>
                      <CardDescription>
                        Share relevant medical background information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        This section is currently under development. In the future, you'll be able to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                        <li>Create a secure medical profile</li>
                        <li>Document previous spine conditions and treatments</li>
                        <li>List current medications and supplements</li>
                        <li>Record relevant medical conditions</li>
                        <li>Share family history of spine conditions</li>
                      </ul>
                      <p className="text-muted-foreground">
                        For now, please bring your medical history information to your consultation with Dr. Aliashkevich.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link to="/appointments">Schedule Consultation</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="imaging" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Imaging Upload</CardTitle>
                      <CardDescription>
                        Share your existing imaging studies
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        This section is currently under development. In the future, you'll be able to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                        <li>Securely upload imaging studies (MRI, CT, X-ray)</li>
                        <li>Provide radiologist reports</li>
                        <li>Track changes in imaging findings over time</li>
                        <li>Receive expert interpretation of your imaging</li>
                        <li>Share imaging with your healthcare team</li>
                      </ul>
                      <p className="text-muted-foreground">
                        For now, please bring your imaging studies on CD or provide access information during your consultation.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link to="/appointments">Schedule Consultation</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Assessment Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                <p className="text-muted-foreground">
                  Receive recommendations tailored specifically to your condition, symptoms, and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrated Approach</h3>
                <p className="text-muted-foreground">
                  Combine subjective reports with objective measures for a comprehensive understanding of your condition.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <History className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor changes in your condition over time to evaluate treatment effectiveness and guide adjustments.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shared Decision Making</h3>
                <p className="text-muted-foreground">
                  Participate actively in your care by sharing assessment results with your healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Ready to Take the First Step?</h2>
                <p className="text-muted-foreground mb-8">
                  While our comprehensive online assessment tools are being developed, you can schedule a consultation with Dr. Aliashkevich for a thorough evaluation of your spine condition.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/appointments">Schedule Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/patient-resources/condition-information">Learn About Conditions</Link>
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
