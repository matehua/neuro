import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/contexts/DeviceContext";
import { cn } from "@/lib/utils";
import SafeImage from "@/components/SafeImage";
import { 
  AlertTriangle, 
  Activity, 
  Brain, 
  Heart, 
  Shield, 
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  Eye,
  MapPin,
  Gauge,
  Network,
  Disc,
  Stethoscope,
  Microscope,
  Layers
} from "lucide-react";

export default function Discopathy() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout pageTitle="Discopathy (Degenerative Disc Disease) - Comprehensive Guide">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/degenerative-disc-disease.jpg"
              alt="Discopathy spine anatomy"
              className="w-full h-full object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
          </div>
          <div className={cn(
            "container relative z-10",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Spine Conditions Library
              </Badge>
              <h1 className={cn(
                "font-bold mb-6",
                deviceInfo.isMobile ? "text-3xl" : "text-4xl md:text-5xl"
              )}>
                Discopathy: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding discopathy and degenerative disc disease: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced surgical interventions for cervical, thoracic, and lumbar spine.
              </p>
              <div className={cn(
                "flex justify-center gap-4",
                deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
              )}>
                <Button asChild size={deviceInfo.isMobile ? "default" : "lg"}>
                  <Link to="#assessment">
                    <Target className="mr-2 h-4 w-4" />
                    Take Assessment
                  </Link>
                </Button>
                <Button asChild variant="outline" size={deviceInfo.isMobile ? "default" : "lg"}>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-12"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Prevalence</h3>
                  <p className="text-sm text-muted-foreground">40% over age 40</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Onset Age</h3>
                  <p className="text-sm text-muted-foreground">30+ years typically</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Most Common</h3>
                  <p className="text-sm text-muted-foreground">Lumbar & Cervical</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Management</h3>
                  <p className="text-sm text-muted-foreground">Highly manageable</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Discopathy Section */}
        <section className={cn(
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={cn(
                  "font-bold mb-6",
                  deviceInfo.isMobile ? "text-2xl" : "text-3xl"
                )}>
                  What is Discopathy?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Discopathy, also known as degenerative disc disease (DDD), is a condition where the 
                  intervertebral discs in the spine gradually deteriorate over time. Despite its name, 
                  it's not actually a disease but rather a natural aging process that affects the spine.
                </p>
                <p className="text-muted-foreground mb-6">
                  The intervertebral discs act as shock absorbers between the vertebrae. As we age, 
                  these discs lose water content, become less flexible, and may develop tears or cracks. 
                  This can lead to pain, stiffness, and reduced mobility in the affected spinal region.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Progressive condition affecting disc structure and function</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Can affect any level of the spine but most common in lumbar and cervical regions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often asymptomatic but may cause significant pain and disability</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/degenerative-disc-disease.jpg"
                  alt="Discopathy anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Comparison showing healthy disc vs. degenerative disc changes with height loss and dehydration
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disc Degeneration Process Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Understanding Disc Degeneration Process
            </h2>

            <Tabs defaultValue="stages" className="w-full max-w-4xl mx-auto">
              <TabsList className={cn(
                "grid mb-8",
                deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-3"
              )}>
                <TabsTrigger value="stages" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Degeneration Stages
                </TabsTrigger>
                <TabsTrigger value="anatomy" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Disc Anatomy
                </TabsTrigger>
                <TabsTrigger value="changes" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Structural Changes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="stages" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Five Stages of Disc Degeneration</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Normal Disc</h4>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                              <li>• High water content (80-85%)</li>
                              <li>• Intact annulus fibrosus</li>
                              <li>• Normal disc height</li>
                              <li>• Optimal shock absorption</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Early Degeneration</h4>
                            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                              <li>• Slight water content loss</li>
                              <li>• Minor annular tears</li>
                              <li>• Minimal height loss</li>
                              <li>• Usually asymptomatic</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Moderate Degeneration</h4>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                              <li>• Significant dehydration</li>
                              <li>• Multiple annular tears</li>
                              <li>• Noticeable height loss</li>
                              <li>• Intermittent symptoms</li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Advanced Degeneration</h4>
                            <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                              <li>• Severe dehydration</li>
                              <li>• Extensive annular damage</li>
                              <li>• Significant height loss</li>
                              <li>• Persistent symptoms</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            5
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Severe Degeneration</h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                              <li>• Complete dehydration</li>
                              <li>• Disc collapse</li>
                              <li>• Bone-on-bone contact</li>
                              <li>• Chronic pain and disability</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                          Important Note
                        </h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Disc degeneration is not always painful. Many people have degenerative changes
                          visible on imaging but experience no symptoms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Intervertebral Disc Components</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Nucleus Pulposus</h4>
                        <p className="text-sm text-muted-foreground">
                          Gel-like center composed of water (80-85%), proteoglycans, and collagen.
                          Acts as the primary shock absorber and loses water content with age.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Annulus Fibrosus</h4>
                        <p className="text-sm text-muted-foreground">
                          Tough outer ring made of 15-25 concentric layers of collagen fibers.
                          Contains the nucleus and provides structural integrity.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Cartilaginous Endplates</h4>
                        <p className="text-sm text-muted-foreground">
                          Thin layers of hyaline cartilage that separate the disc from vertebral bodies
                          and facilitate nutrient exchange.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Blood Supply</h4>
                        <p className="text-sm text-muted-foreground">
                          Discs are avascular structures that receive nutrients through diffusion
                          from surrounding tissues, making healing difficult.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/disc-anatomy.jpg"
                      alt="Detailed disc anatomy illustration"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="changes" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Structural Changes in Discopathy</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Biochemical Changes</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Water Content Loss</h5>
                          <p className="text-sm text-muted-foreground">Decreases from 85% to 65% or less</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Proteoglycan Reduction</h5>
                          <p className="text-sm text-muted-foreground">Loss of molecules that retain water</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Collagen Changes</h5>
                          <p className="text-sm text-muted-foreground">Type I collagen increases, reducing flexibility</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">pH Alterations</h5>
                          <p className="text-sm text-muted-foreground">Acidic environment affects cell function</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Structural Changes</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Disc Height Loss</h5>
                          <p className="text-sm text-muted-foreground">Progressive collapse and narrowing</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Annular Tears</h5>
                          <p className="text-sm text-muted-foreground">Radial and circumferential fissures</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Endplate Changes</h5>
                          <p className="text-sm text-muted-foreground">Sclerosis and Modic changes</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Osteophyte Formation</h5>
                          <p className="text-sm text-muted-foreground">Bone spurs develop around disc margins</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <SafeImage
                      src="/images/spine-anatomy/disc-degeneration-stages.jpg"
                      alt="Disc degeneration progression stages"
                      className="w-full max-w-lg mx-auto h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Causes and Risk Factors Section */}
        <section className={cn(
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Causes and Risk Factors
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Primary Causes</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Natural Aging Process</h4>
                        <p className="text-sm text-muted-foreground">
                          The primary cause of discopathy is the natural aging process. Over time,
                          discs lose water content, become less elastic, and develop structural changes.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Mechanical Stress</h4>
                        <p className="text-sm text-muted-foreground">
                          Repetitive loading, poor posture, and biomechanical stress accelerate
                          disc degeneration through increased wear and tear.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Disc className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Genetic Factors</h4>
                        <p className="text-sm text-muted-foreground">
                          Family history and genetic predisposition play a significant role in
                          the rate and severity of disc degeneration.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Injury and Trauma</h4>
                        <p className="text-sm text-muted-foreground">
                          Previous spinal injuries, fractures, or trauma can accelerate degenerative
                          changes and lead to premature disc deterioration.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Network className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Nutritional Factors</h4>
                        <p className="text-sm text-muted-foreground">
                          Poor nutrition to the disc due to reduced blood supply or smoking
                          can impair disc health and accelerate degeneration.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Risk Factors</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Obesity and excess weight
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Smoking (reduces disc nutrition)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Poor posture and ergonomics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Sedentary lifestyle
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Heavy manual labor
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Repetitive spinal stress
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Non-Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age (increases with time)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Gender (males slightly higher)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous spinal injuries
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Congenital spinal abnormalities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Metabolic disorders
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Prevention Focus
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    While aging cannot be prevented, maintaining good posture, regular exercise,
                    healthy weight, and avoiding smoking can slow the progression of disc degeneration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Signs and Symptoms by Location
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cervical Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Cervical Discopathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Neck region (C3-C7)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Chronic neck pain and stiffness</li>
                        <li>• Occipital headaches</li>
                        <li>• Shoulder and arm pain</li>
                        <li>• Pain worse with movement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Arm numbness/tingling</li>
                        <li>• Hand weakness and clumsiness</li>
                        <li>• Reduced fine motor control</li>
                        <li>• Muscle atrophy (advanced cases)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced neck mobility</li>
                        <li>• Difficulty with overhead activities</li>
                        <li>• Sleep disturbances</li>
                        <li>• Work-related limitations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thoracic Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Thoracic Discopathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Mid-back region (T1-T12)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Mid-back stiffness and aching</li>
                        <li>• Rib pain and chest discomfort</li>
                        <li>• Pain with deep breathing</li>
                        <li>• Muscle spasms in mid-back</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Often minimal symptoms</li>
                        <li>• Rare radicular symptoms</li>
                        <li>• Intercostal neuralgia</li>
                        <li>• Trunk sensory changes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced trunk rotation</li>
                        <li>• Postural changes</li>
                        <li>• Breathing limitations</li>
                        <li>• Activity restrictions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lumbar Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Lumbar Discopathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Lower back region (L1-S1)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Chronic lower back pain</li>
                        <li>• Morning stiffness</li>
                        <li>• Buttock and hip pain</li>
                        <li>• Leg pain (if nerve involved)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sciatica (if nerve compressed)</li>
                        <li>• Leg numbness/weakness</li>
                        <li>• Foot drop (severe cases)</li>
                        <li>• Bladder issues (rare)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Walking limitations</li>
                        <li>• Bending and lifting difficulties</li>
                        <li>• Prolonged sitting intolerance</li>
                        <li>• Sleep disruption</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Symptom Patterns */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Important Symptom Characteristics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Typical Patterns:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Gradual onset over months to years</li>
                        <li>• Morning stiffness that improves with movement</li>
                        <li>• Pain worse with prolonged sitting or standing</li>
                        <li>• Symptoms may fluctuate with activity levels</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Progressive Nature:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Symptoms may worsen during flare-ups</li>
                        <li>• Periods of relative stability common</li>
                        <li>• Weather changes may affect symptoms</li>
                        <li>• Stress and fatigue can worsen pain</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className={cn(
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Diagnosis and Assessment
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Clinical Evaluation</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Medical History</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Comprehensive assessment of symptom onset, progression patterns,
                      and functional limitations related to disc degeneration.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Symptom timeline and progression</li>
                      <li>• Pain patterns and triggers</li>
                      <li>• Functional limitations assessment</li>
                      <li>• Previous treatments and responses</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Range of motion assessment</li>
                      <li>• Postural evaluation and alignment</li>
                      <li>• Neurological examination</li>
                      <li>• Palpation for tenderness and muscle spasm</li>
                      <li>• Functional movement testing</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Specialized Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Discogenic pain provocation tests</li>
                      <li>• Neurodynamic testing</li>
                      <li>• Functional capacity evaluation</li>
                      <li>• Pain assessment scales</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Imaging Studies</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Microscope className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">X-rays (Radiographs)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          First-line imaging showing disc space narrowing, vertebral alignment,
                          and degenerative changes characteristic of discopathy.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Disc space narrowing</li>
                          <li>• Vertebral endplate changes</li>
                          <li>• Osteophyte formation</li>
                          <li>• Spinal alignment assessment</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Primary Screening</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI (Magnetic Resonance Imaging)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Gold standard for evaluating disc degeneration, showing detailed
                          soft tissue changes and disc morphology.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Disc hydration status (T2 signal)</li>
                          <li>• Annular tears and fissures</li>
                          <li>• Modic endplate changes</li>
                          <li>• Nerve root compression</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Gold Standard</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Scan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Excellent bone detail for assessing vertebral changes
                          and surgical planning when needed.
                        </p>
                        <Badge variant="outline">Bone Detail</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Discography</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Invasive test to identify painful discs by injecting
                          contrast and reproducing symptoms.
                        </p>
                        <Badge variant="outline">Specialized</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200">
                    Diagnostic Criteria for Discopathy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Disc space narrowing (&gt;25% height loss)</li>
                        <li>• Decreased T2 signal on MRI</li>
                        <li>• Annular tears or fissures</li>
                        <li>• Modic endplate changes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Correlation:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Chronic axial pain pattern</li>
                        <li>• Symptom-imaging correlation</li>
                        <li>• Functional impact assessment</li>
                        <li>• Response to conservative treatment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Treatment Options
            </h2>

            <Tabs defaultValue="conservative" className="w-full max-w-6xl mx-auto">
              <TabsList className={cn(
                "grid mb-8",
                deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-3"
              )}>
                <TabsTrigger value="conservative" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Conservative Treatment
                </TabsTrigger>
                <TabsTrigger value="interventional" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Interventional Procedures
                </TabsTrigger>
                <TabsTrigger value="surgical" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Surgical Options
                </TabsTrigger>
              </TabsList>

              <TabsContent value="conservative" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Non-Surgical Management Approaches</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Activity Modification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Avoid aggravating activities</li>
                        <li>• Ergonomic workplace adjustments</li>
                        <li>• Gradual activity progression</li>
                        <li>• Proper body mechanics training</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Foundation of care</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Physical Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Core strengthening exercises</li>
                        <li>• Flexibility and mobility training</li>
                        <li>• Postural correction</li>
                        <li>• Manual therapy techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Evidence-based</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Medications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• NSAIDs for inflammation</li>
                        <li>• Acetaminophen for pain</li>
                        <li>• Muscle relaxants (short-term)</li>
                        <li>• Neuropathic pain medications</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Symptomatic relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Heat and Cold Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Heat for muscle relaxation</li>
                        <li>• Cold for acute inflammation</li>
                        <li>• Contrast therapy</li>
                        <li>• Therapeutic modalities</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Adjunctive therapy</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Alternative Therapies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Acupuncture for pain relief</li>
                        <li>• Massage therapy</li>
                        <li>• Chiropractic care</li>
                        <li>• Mind-body techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Exercise Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Low-impact aerobic exercise</li>
                        <li>• Swimming and water therapy</li>
                        <li>• Yoga and Pilates</li>
                        <li>• Home exercise programs</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Long-term benefit</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain management, maintaining function, preventing progression,
                    and improving quality of life through non-invasive approaches.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Epidural Steroid Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Anti-inflammatory medication delivered to the epidural space
                        to reduce inflammation around degenerated discs and nerve roots.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Reduces inflammation</li>
                          <li>• Provides pain relief</li>
                          <li>• Improves function</li>
                          <li>• Minimal downtime</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">60-80% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Facet Joint Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Targeted injection into facet joints that may be affected
                        by disc degeneration and secondary arthritis.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Indications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Secondary facet arthritis</li>
                          <li>• Axial back pain</li>
                          <li>• Diagnostic and therapeutic</li>
                          <li>• Can be repeated</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">For facet involvement</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Intradiscal Procedures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Minimally invasive treatments targeting the disc itself
                        to reduce pain and improve function.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Techniques:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Intradiscal steroid injection</li>
                          <li>• Platelet-rich plasma (PRP)</li>
                          <li>• Stem cell therapy</li>
                          <li>• Intradiscal electrothermal therapy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Emerging therapies</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Radiofrequency Ablation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Heat treatment to interrupt pain signals from affected
                        structures, providing longer-lasting relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Facet joint denervation</li>
                          <li>• Basivertebral nerve ablation</li>
                          <li>• Chronic discogenic pain</li>
                          <li>• Long-lasting relief</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">6-24 months relief</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="surgical" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Surgical Treatment Options</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Spinal Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical joining of vertebrae to eliminate motion at degenerated
                          disc levels and provide stability for severe cases.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Severe discogenic pain</li>
                              <li>• Failed conservative treatment</li>
                              <li>• Spinal instability</li>
                              <li>• Neurological compromise</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Definitive treatment</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Artificial Disc Replacement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Motion-preserving surgery that replaces the degenerated disc
                          with an artificial disc to maintain spinal mobility.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Benefits:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Preserves spinal motion</li>
                              <li>• Prevents adjacent level disease</li>
                              <li>• Faster recovery than fusion</li>
                              <li>• Better long-term outcomes</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Motion-preserving</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Minimally Invasive Spine Surgery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Advanced surgical techniques using smaller incisions, specialized
                            instruments, and endoscopic visualization to treat disc degeneration
                            with reduced tissue damage and faster recovery.
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Advantages:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Smaller incisions</li>
                              <li>• Reduced blood loss</li>
                              <li>• Faster recovery</li>
                              <li>• Less postoperative pain</li>
                              <li>• Shorter hospital stay</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <SafeImage
                            src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                            alt="Minimally invasive spine surgery"
                            className="w-full h-auto rounded-lg"
                            fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Advanced technique</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Considerations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Surgery reserved for severe, refractory cases</li>
                        <li>• Careful patient selection crucial</li>
                        <li>• Realistic expectations important</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 70-85% good to excellent outcomes</li>
                        <li>• Significant pain relief achievable</li>
                        <li>• Functional improvement expected</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Prognosis and Management Section */}
        <section className={cn(
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Prognosis and Long-term Management
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Disease Progression</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Generally Stable Condition</h4>
                        <p className="text-sm text-muted-foreground">
                          Most people with discopathy can maintain good quality of life
                          with appropriate management and lifestyle modifications.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Variable Progression</h4>
                        <p className="text-sm text-muted-foreground">
                          Disc degeneration progresses at different rates in different people
                          and can be influenced by lifestyle factors and treatment.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Symptom Fluctuation</h4>
                        <p className="text-sm text-muted-foreground">
                          Symptoms often fluctuate with periods of exacerbation and improvement.
                          Many people learn to manage symptoms effectively over time.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Adaptation and Compensation</h4>
                        <p className="text-sm text-muted-foreground">
                          The body often adapts to degenerative changes, and people develop
                          effective coping strategies and lifestyle modifications.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Prognostic Factors</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Favorable Factors
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Younger age at symptom onset</li>
                      <li>• Active lifestyle maintenance</li>
                      <li>• Healthy body weight</li>
                      <li>• Good core muscle strength</li>
                      <li>• Positive attitude and coping skills</li>
                      <li>• Early intervention and treatment</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Challenging Factors
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Advanced age and multiple level involvement</li>
                      <li>• Obesity and poor physical fitness</li>
                      <li>• Smoking and poor nutrition</li>
                      <li>• Psychological factors and depression</li>
                      <li>• High physical job demands</li>
                      <li>• Poor social support</li>
                    </ul>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Long-term Outcomes
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 60-80% maintain good function with treatment</li>
                      <li>• Most people avoid need for surgery</li>
                      <li>• Quality of life can be preserved</li>
                      <li>• Symptoms often stabilize over time</li>
                      <li>• Effective self-management strategies develop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention and Lifestyle Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Prevention and Lifestyle Management
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Regular Exercise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Core strengthening exercises</li>
                    <li>• Low-impact aerobic activities</li>
                    <li>• Flexibility and mobility training</li>
                    <li>• Balance and coordination exercises</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/exercise-library">
                        View Exercise Programs
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Posture & Ergonomics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain neutral spine alignment</li>
                    <li>• Optimize workstation setup</li>
                    <li>• Use supportive furniture and pillows</li>
                    <li>• Take frequent movement breaks</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-safe-exercises">
                        Learn Proper Techniques
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Healthy Lifestyle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain healthy body weight</li>
                    <li>• Quit smoking for better disc nutrition</li>
                    <li>• Eat anti-inflammatory diet</li>
                    <li>• Get adequate sleep and rest</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/lifestyle-modifications">
                        Lifestyle Guidelines
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Disc className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Disc Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Stay hydrated for disc nutrition</li>
                    <li>• Avoid prolonged static positions</li>
                    <li>• Use proper lifting techniques</li>
                    <li>• Manage stress effectively</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-and-brain-health">
                        Disc Health Guide
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Pain Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Learn pain coping strategies</li>
                    <li>• Practice relaxation techniques</li>
                    <li>• Use heat and cold therapy</li>
                    <li>• Consider mindfulness meditation</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/individual-spine-health-programme">
                        Pain Management Program
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Regular Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Regular medical check-ups</li>
                    <li>• Monitor symptom progression</li>
                    <li>• Adjust treatment as needed</li>
                    <li>• Track functional improvements</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/contact">
                        Schedule Follow-up
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Assessment and CTA Section */}
        <section id="assessment" className={cn(
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <div className="bg-primary/5 rounded-lg p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className={cn(
                  "font-bold mb-6",
                  deviceInfo.isMobile ? "text-2xl" : "text-3xl"
                )}>
                  Take Control of Your Disc Health
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let disc degeneration limit your daily activities and quality of life.
                  Our comprehensive assessment tools and expert guidance can help you understand
                  your condition and develop an effective management strategy.
                </p>
                <div className={cn(
                  "flex justify-center gap-4",
                  deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
                )}>
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">
                      <Target className="mr-2 h-4 w-4" />
                      Take Disc Health Assessment
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Comprehensive Evaluation</h3>
                    <p className="text-sm text-muted-foreground">
                      Thorough assessment of your disc degeneration and functional impact
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Diagnosis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced imaging and clinical expertise for accurate disc assessment
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Personalized Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored treatment plans from conservative to advanced interventions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-12",
              deviceInfo.isMobile ? "text-2xl mb-8" : "text-3xl"
            )}>
              Related Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="/images/spine-conditions/herniated-disc.jpg"
                    alt="Herniated disc information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Herniated Disc</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about herniated discs, a common complication of disc
                    degeneration that can cause nerve compression and radicular symptoms.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/conditions/herniated-disc">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>

              <Card className="h-full">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="/images/spine-conditions/cervical-spondylosis.jpg"
                    alt="Arthrosis information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Arthrosis (Spondylosis)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand spinal arthrosis, the broader degenerative process
                    that often accompanies disc degeneration.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/conditions/arthrosis">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>

              <Card className="h-full">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="/images/patient-resources/spine-health-hero.jpg"
                    alt="Exercise library"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Exercise Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access our comprehensive library of exercises specifically designed
                    for managing discopathy and maintaining disc health.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/exercise-library">
                      View Exercises
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/patient-resources/spine-conditions-library">
                  <Download className="mr-2 h-4 w-4" />
                  View All Spine Conditions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
