import { useEffect } from "react";
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
  Layers,
  Settings,
  Bone
} from "lucide-react";

export default function FacetArthropathy() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout pageTitle="Facet Arthropathy (Facet Joint Syndrome) - Comprehensive Guide">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/facet-joint-syndrome.jpg"
              alt="Facet arthropathy spine anatomy"
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
                Facet Arthropathy: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding facet arthropathy and facet joint syndrome: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced interventional procedures for cervical, thoracic, and lumbar spine.
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
                  <p className="text-sm text-muted-foreground">15-45% of back pain</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">40-70 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Most Common</h3>
                  <p className="text-sm text-muted-foreground">Lumbar spine</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Treatment Success</h3>
                  <p className="text-sm text-muted-foreground">70-90% improvement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Facet Arthropathy Section */}
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
                  What is Facet Arthropathy?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Facet arthropathy, also known as facet joint syndrome or facet joint arthritis, 
                  is a degenerative condition affecting the small joints (facet joints) that connect 
                  the vertebrae in the spine. These joints provide stability and guide spinal movement.
                </p>
                <p className="text-muted-foreground mb-6">
                  When facet joints become inflamed, degenerated, or arthritic, they can cause 
                  significant pain and stiffness. This condition is a common source of axial 
                  (localized) back and neck pain, particularly in older adults.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Progressive degenerative condition affecting spinal stability joints</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Can affect any spinal level but most common in lumbar and cervical regions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often occurs alongside disc degeneration and spinal stenosis</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/facet-joints.jpg"
                  alt="Facet arthropathy anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing normal facet joints vs. arthritic facet joints with inflammation and degeneration
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facet Joint Anatomy & Pathophysiology Section */}
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
              Understanding Facet Joint Anatomy & Degeneration
            </h2>

            <Tabs defaultValue="anatomy" className="w-full max-w-4xl mx-auto">
              <TabsList className={cn(
                "grid mb-8",
                deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-3"
              )}>
                <TabsTrigger value="anatomy" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Joint Anatomy
                </TabsTrigger>
                <TabsTrigger value="pathophysiology" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Degeneration Process
                </TabsTrigger>
                <TabsTrigger value="classification" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Classification System
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Facet Joint Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Articular Surfaces</h4>
                        <p className="text-sm text-muted-foreground">
                          Smooth cartilage-covered surfaces of superior and inferior articular processes
                          that form the synovial joint between adjacent vertebrae.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Joint Capsule</h4>
                        <p className="text-sm text-muted-foreground">
                          Fibrous capsule surrounding the joint, lined with synovial membrane
                          that produces lubricating synovial fluid.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Cartilage</h4>
                        <p className="text-sm text-muted-foreground">
                          Hyaline cartilage covering the articular surfaces, providing smooth
                          movement and shock absorption during spinal motion.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Innervation</h4>
                        <p className="text-sm text-muted-foreground">
                          Rich nerve supply from medial branches of dorsal rami, making
                          these joints significant pain generators when degenerated.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/facet-joint-anatomy.jpg"
                      alt="Detailed facet joint anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Degenerative Process in Facet Arthropathy</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Initial Cartilage Damage</h4>
                            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                              <li>• Surface fibrillation and roughening</li>
                              <li>• Loss of cartilage elasticity</li>
                              <li>• Decreased proteoglycan content</li>
                              <li>• Increased water content initially</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Progressive Degeneration</h4>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                              <li>• Cartilage thinning and erosion</li>
                              <li>• Subchondral bone sclerosis</li>
                              <li>• Joint space narrowing</li>
                              <li>• Synovial inflammation</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Advanced Changes</h4>
                            <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                              <li>• Osteophyte formation</li>
                              <li>• Joint capsule thickening</li>
                              <li>• Ligamentum flavum hypertrophy</li>
                              <li>• Potential spinal stenosis</li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">End-Stage Disease</h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                              <li>• Complete cartilage loss</li>
                              <li>• Bone-on-bone contact</li>
                              <li>• Severe joint deformity</li>
                              <li>• Chronic pain and stiffness</li>
                            </ul>
                          </div>
                        </div>
                      </Card>

                      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                          Contributing Factors
                        </h4>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                          <li>• Age-related wear and tear</li>
                          <li>• Biomechanical stress</li>
                          <li>• Genetic predisposition</li>
                          <li>• Previous spinal injuries</li>
                          <li>• Disc degeneration (secondary changes)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          Pain Mechanisms
                        </h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Nociceptor activation in joint capsule</li>
                          <li>• Inflammatory mediator release</li>
                          <li>• Mechanical compression of nerve endings</li>
                          <li>• Referred pain patterns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="classification" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Facet Arthropathy Classification</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Radiographic Grading (Weishaupt Classification)</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Grade 0 - Normal</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">No degenerative changes visible</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Grade 1 - Mild</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Narrowing of joint space or small osteophytes</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Grade 2 - Moderate</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Narrowing and osteophytes, sclerosis</p>
                        </div>
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Grade 3 - Severe</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Severe narrowing, large osteophytes, subchondral cysts</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Clinical Classification</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Primary Facet Arthropathy</h5>
                          <p className="text-sm text-muted-foreground">Age-related degeneration without underlying pathology</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Secondary Facet Arthropathy</h5>
                          <p className="text-sm text-muted-foreground">Following disc degeneration, trauma, or instability</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Post-surgical Changes</h5>
                          <p className="text-sm text-muted-foreground">Accelerated degeneration after spinal surgery</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Inflammatory Arthropathy</h5>
                          <p className="text-sm text-muted-foreground">Associated with systemic inflammatory conditions</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/facet-joint-grading.jpg"
                          alt="Facet joint degeneration grading system"
                          className="w-full max-w-sm mx-auto h-auto rounded-lg"
                          fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        />
                      </div>
                    </div>
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
                        <h4 className="font-semibold mb-2">Age-Related Degeneration</h4>
                        <p className="text-sm text-muted-foreground">
                          Natural aging process leads to cartilage wear, joint space narrowing,
                          and osteophyte formation in facet joints over time.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Biomechanical Stress</h4>
                        <p className="text-sm text-muted-foreground">
                          Repetitive loading, poor posture, and abnormal spinal mechanics
                          accelerate facet joint degeneration and arthritis.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Disc className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Secondary to Disc Disease</h4>
                        <p className="text-sm text-muted-foreground">
                          Disc degeneration alters spinal mechanics, increasing load
                          on facet joints and accelerating their degeneration.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Trauma and Injury</h4>
                        <p className="text-sm text-muted-foreground">
                          Previous spinal injuries, fractures, or surgical procedures
                          can lead to accelerated facet joint degeneration.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Settings className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Spinal Instability</h4>
                        <p className="text-sm text-muted-foreground">
                          Conditions causing spinal instability increase abnormal motion
                          and stress on facet joints, promoting arthritis.
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
                        Repetitive spinal extension
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Smoking (affects healing)
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
                        Gender (slightly higher in women)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Spinal anatomy variations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous spinal surgeries
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Congenital abnormalities
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
                    healthy weight, and proper body mechanics can slow facet joint degeneration.
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
                  <CardTitle className="text-center">Cervical Facet Arthropathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Neck region (C2-C7)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Axial neck pain and stiffness</li>
                        <li>• Occipital and suboccipital headaches</li>
                        <li>• Pain worse with neck extension</li>
                        <li>• Morning stiffness lasting &gt;30 minutes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Referred Pain Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Shoulder and upper back pain</li>
                        <li>• Trapezius muscle tension</li>
                        <li>• Rarely radiates to arms</li>
                        <li>• Temporal headaches</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced neck rotation and extension</li>
                        <li>• Difficulty with overhead activities</li>
                        <li>• Sleep disturbances</li>
                        <li>• Driving limitations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thoracic Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Thoracic Facet Arthropathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Mid-back region (T1-T12)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Deep, aching mid-back pain</li>
                        <li>• Paravertebral muscle spasms</li>
                        <li>• Pain with trunk rotation</li>
                        <li>• Stiffness after prolonged sitting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Referred Pain Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Rib pain and chest wall discomfort</li>
                        <li>• Intercostal neuralgia-like symptoms</li>
                        <li>• Scapular region pain</li>
                        <li>• Rarely causes radicular symptoms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced trunk rotation</li>
                        <li>• Difficulty with twisting motions</li>
                        <li>• Postural changes</li>
                        <li>• Activity-related limitations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lumbar Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Lumbar Facet Arthropathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Lower back region (L1-S1)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Axial lower back pain</li>
                        <li>• Pain worse with extension and rotation</li>
                        <li>• Relief with forward flexion</li>
                        <li>• Morning stiffness prominent</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Referred Pain Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Buttock and hip pain</li>
                        <li>• Groin pain (upper lumbar levels)</li>
                        <li>• Posterior thigh pain (rarely below knee)</li>
                        <li>• Sacroiliac joint region</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Difficulty with prolonged standing</li>
                        <li>• Pain with walking downhill</li>
                        <li>• Trouble with extension activities</li>
                        <li>• Sleep position limitations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Diagnostic Features */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Key Diagnostic Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Classic Presentation:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Axial (localized) pain pattern</li>
                        <li>• Pain worse with spinal extension</li>
                        <li>• Relief with forward flexion</li>
                        <li>• No neurological deficits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Distinguishing Features:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Pain rarely radiates below knee</li>
                        <li>• No dermatomal distribution</li>
                        <li>• Normal neurological examination</li>
                        <li>• Positive facet loading tests</li>
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
                      Detailed assessment of pain characteristics, aggravating factors,
                      and functional limitations specific to facet joint pathology.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain pattern and distribution</li>
                      <li>• Relationship to spinal movements</li>
                      <li>• Morning stiffness duration</li>
                      <li>• Response to previous treatments</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spinal range of motion assessment</li>
                      <li>• Facet loading tests (extension with rotation)</li>
                      <li>• Palpation for paravertebral tenderness</li>
                      <li>• Neurological examination (typically normal)</li>
                      <li>• Postural assessment and gait analysis</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Provocative Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Kemp's test (extension with lateral flexion)</li>
                      <li>• Facet loading test</li>
                      <li>• Single leg hyperextension test</li>
                      <li>• Quadrant test</li>
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
                          First-line imaging showing facet joint space narrowing,
                          osteophytes, and subchondral sclerosis.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Joint space narrowing</li>
                          <li>• Osteophyte formation</li>
                          <li>• Subchondral sclerosis</li>
                          <li>• Joint subluxation (advanced cases)</li>
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
                          Detailed assessment of facet joint degeneration, synovitis,
                          and associated soft tissue changes.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cartilage loss and joint effusion</li>
                          <li>• Synovial hypertrophy</li>
                          <li>• Ligamentum flavum thickening</li>
                          <li>• Associated spinal stenosis</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Detailed Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Scan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Excellent bone detail for assessing facet joint arthritis
                          and planning interventional procedures.
                        </p>
                        <Badge variant="outline">Bone Detail</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Diagnostic Facet Blocks</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Gold standard for confirming facet joint as pain source
                          through controlled local anesthetic blocks.
                        </p>
                        <Badge variant="outline">Diagnostic Gold Standard</Badge>
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
                    Diagnostic Criteria for Facet Arthropathy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Axial pain pattern (non-radicular)</li>
                        <li>• Pain worse with extension/rotation</li>
                        <li>• Relief with forward flexion</li>
                        <li>• Normal neurological examination</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Confirmatory Tests:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• &gt;50% pain relief with diagnostic blocks</li>
                        <li>• Imaging evidence of facet arthritis</li>
                        <li>• Positive facet loading tests</li>
                        <li>• Exclusion of other pain sources</li>
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
                        <li>• Avoid prolonged extension activities</li>
                        <li>• Limit overhead work and arching</li>
                        <li>• Use proper body mechanics</li>
                        <li>• Ergonomic workplace adjustments</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">First-line approach</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Physical Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Flexion-based exercise program</li>
                        <li>• Core strengthening and stabilization</li>
                        <li>• Manual therapy techniques</li>
                        <li>• Postural training and education</li>
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
                        <li>• Topical analgesics</li>
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
                        <li>• Therapeutic ultrasound</li>
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
                        <li>• Chiropractic manipulation</li>
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
                        <li>• Aquatic therapy programs</li>
                        <li>• Yoga and tai chi</li>
                        <li>• Pilates-based exercises</li>
                        <li>• Walking and cycling</li>
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
                    The primary goals are pain reduction, improved function, and prevention of progression
                    through non-invasive approaches that address biomechanical factors.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Facet Joint Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Direct injection of corticosteroids into the facet joint
                        to reduce inflammation and provide pain relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Targeted anti-inflammatory effect</li>
                          <li>• Diagnostic and therapeutic value</li>
                          <li>• Minimal downtime required</li>
                          <li>• Can be repeated if effective</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">60-80% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Medial Branch Blocks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of local anesthetic around the medial branch nerves
                        that supply the facet joints for diagnosis and treatment.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Diagnostic confirmation</li>
                          <li>• Prognostic testing for RFA</li>
                          <li>• Temporary pain relief</li>
                          <li>• Treatment selection guide</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Diagnostic gold standard</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Radiofrequency Ablation (RFA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Heat treatment to interrupt pain signals from the medial branch
                        nerves, providing longer-lasting relief for facet pain.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting pain relief (6-24 months)</li>
                          <li>• Minimally invasive procedure</li>
                          <li>• Can be repeated when effective</li>
                          <li>• Excellent safety profile</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">70-90% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Platelet-Rich Plasma (PRP)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of concentrated platelets to promote healing
                        and reduce inflammation in degenerative facet joints.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Potential Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Natural healing promotion</li>
                          <li>• Anti-inflammatory effects</li>
                          <li>• Tissue regeneration potential</li>
                          <li>• Minimal side effects</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Emerging therapy</Badge>
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
                        <CardTitle className="text-lg">Facet Joint Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical fusion of severely degenerated facet joints to eliminate
                          motion and provide stability in end-stage arthritis.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Severe facet arthritis with instability</li>
                              <li>• Failed conservative and interventional treatment</li>
                              <li>• Significant functional impairment</li>
                              <li>• Absence of multilevel disease</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Last resort option</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Facet Joint Replacement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Experimental procedure replacing degenerated facet joints
                          with artificial implants to preserve motion.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Potential Benefits:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Motion preservation</li>
                              <li>• Reduced adjacent level degeneration</li>
                              <li>• Improved biomechanics</li>
                              <li>• Faster recovery than fusion</li>
                            </ul>
                          </div>
                          <Badge variant="outline">Investigational</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Minimally Invasive Decompression</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            When facet arthropathy contributes to spinal stenosis, minimally
                            invasive techniques can decompress neural structures while
                            preserving as much joint structure as possible.
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Techniques:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Endoscopic facetectomy</li>
                              <li>• Microscopic decompression</li>
                              <li>• Laminotomy with facet preservation</li>
                              <li>• Ligamentum flavum removal</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <SafeImage
                            src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                            alt="Minimally invasive facet surgery"
                            className="w-full h-auto rounded-lg"
                            fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Motion-preserving</Badge>
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
                        <li>• Careful patient selection essential</li>
                        <li>• Consider adjacent level effects</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 70-85% good outcomes when appropriate</li>
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
                <h3 className="text-xl font-bold mb-6">Treatment Outcomes</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Excellent Response to Treatment</h4>
                        <p className="text-sm text-muted-foreground">
                          Facet arthropathy typically responds well to appropriate treatment,
                          with 70-90% of patients experiencing significant improvement.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Progressive but Manageable</h4>
                        <p className="text-sm text-muted-foreground">
                          While facet arthropathy is progressive, proper management can
                          significantly slow progression and maintain quality of life.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Functional Improvement</h4>
                        <p className="text-sm text-muted-foreground">
                          Most patients can return to normal activities with appropriate
                          treatment and lifestyle modifications.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Long-term Success</h4>
                        <p className="text-sm text-muted-foreground">
                          Interventional procedures like radiofrequency ablation can
                          provide lasting relief for 6-24 months or longer.
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
                      <li>• Early diagnosis and treatment</li>
                      <li>• Single or few level involvement</li>
                      <li>• Good response to diagnostic blocks</li>
                      <li>• Active lifestyle maintenance</li>
                      <li>• Healthy body weight</li>
                      <li>• Absence of psychological factors</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Challenging Factors
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Multilevel involvement</li>
                      <li>• Advanced degenerative changes</li>
                      <li>• Associated spinal stenosis</li>
                      <li>• Chronic pain syndrome</li>
                      <li>• Poor response to conservative care</li>
                      <li>• Significant psychological comorbidities</li>
                    </ul>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Treatment Success Rates
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Conservative treatment: 60-70% improvement</li>
                      <li>• Facet joint injections: 60-80% success</li>
                      <li>• Radiofrequency ablation: 70-90% success</li>
                      <li>• Combined approach: &gt;85% satisfaction</li>
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
                  <CardTitle>Exercise & Movement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Flexion-based exercises</li>
                    <li>• Core strengthening programs</li>
                    <li>• Low-impact aerobic activities</li>
                    <li>• Avoid excessive extension activities</li>
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
                    <li>• Avoid prolonged extension postures</li>
                    <li>• Use supportive seating</li>
                    <li>• Optimize workstation setup</li>
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
                    <li>• Anti-inflammatory diet</li>
                    <li>• Adequate sleep and rest</li>
                    <li>• Stress management techniques</li>
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
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Joint Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Regular gentle movement</li>
                    <li>• Avoid prolonged static positions</li>
                    <li>• Heat therapy for stiffness</li>
                    <li>• Joint-friendly activities</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-and-brain-health">
                        Joint Health Guide
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
                    <li>• Use heat therapy appropriately</li>
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
                  Take Control of Your Facet Joint Health
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let facet arthropathy limit your daily activities and quality of life.
                  Our comprehensive assessment tools and expert guidance can help you understand
                  your condition and develop an effective treatment strategy.
                </p>
                <div className={cn(
                  "flex justify-center gap-4",
                  deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
                )}>
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">
                      <Target className="mr-2 h-4 w-4" />
                      Take Facet Joint Assessment
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
                      Thorough assessment of your facet joint condition and functional impact
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Diagnosis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced imaging and diagnostic blocks for accurate facet joint assessment
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Personalized Treatment</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored treatment plans from conservative care to advanced interventions
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
                    src="/images/spine-conditions/spinal-stenosis.jpg"
                    alt="Spinal stenosis information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Spinal Stenosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about spinal stenosis, a condition that often occurs
                    alongside facet arthropathy and can cause similar symptoms.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/conditions/spinal-stenosis">
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
                    that often includes facet joint degeneration.
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
                    for managing facet arthropathy and maintaining joint health.
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
