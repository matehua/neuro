import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";
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
  Eye
} from "lucide-react";

export default function SpinalStenosis() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout pageTitle="Spinal Stenosis - Comprehensive Guide">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/spinal-stenosis.jpg"
              alt="Spinal stenosis anatomy"
              className="w-full h-full object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
                Spinal Stenosis: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding spinal stenosis: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced surgical interventions for spinal canal narrowing.
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
                  <p className="text-sm text-muted-foreground">8-11% of adults over 50</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">60-70 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Most Common</h3>
                  <p className="text-sm text-muted-foreground">Lumbar spine (L3-L5)</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Success Rate</h3>
                  <p className="text-sm text-muted-foreground">85-95% with treatment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Spinal Stenosis Section */}
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
                  What is Spinal Stenosis?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Spinal stenosis is a narrowing of the spinal canal, the space that contains the spinal cord 
                  and nerve roots. This narrowing can put pressure on the spinal cord and nerves, causing pain, 
                  numbness, tingling, and weakness.
                </p>
                <p className="text-muted-foreground mb-6">
                  The condition most commonly affects the lumbar (lower back) and cervical (neck) regions of 
                  the spine. It typically develops gradually over time as part of the natural aging process, 
                  but can also result from injury or other spinal conditions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Progressive condition that worsens with age</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Can affect central canal, lateral recesses, or foramina</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Symptoms often improve with forward flexion (shopping cart sign)</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/spinal-stenosis.jpg"
                  alt="Spinal stenosis anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Cross-section showing normal spinal canal vs. stenotic canal with nerve compression
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types and Anatomy Section */}
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
              Types of Spinal Stenosis & Anatomy
            </h2>
            
            <Tabs defaultValue="types" className="w-full max-w-4xl mx-auto">
              <TabsList className={cn(
                "grid mb-8",
                deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-3"
              )}>
                <TabsTrigger value="types" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Types of Stenosis
                </TabsTrigger>
                <TabsTrigger value="anatomy" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Spinal Anatomy
                </TabsTrigger>
                <TabsTrigger value="locations" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Common Locations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="types" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Central Canal Stenosis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Narrowing of the central spinal canal where the spinal cord and cauda equina 
                        are located. Most common type affecting the entire neural bundle.
                      </p>
                      <Badge variant="destructive">Most Severe</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lateral Recess Stenosis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Narrowing of the lateral recesses where nerve roots exit the central canal. 
                        Often caused by hypertrophied ligamentum flavum or facet joint arthritis.
                      </p>
                      <Badge variant="outline">Moderate</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Foraminal Stenosis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Narrowing of the neural foramina where individual nerve roots exit the spine. 
                        Can cause specific dermatomal symptoms.
                      </p>
                      <Badge variant="secondary">Localized</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Extraforaminal Stenosis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Narrowing outside the neural foramen, often caused by disc herniation 
                        or osteophyte formation. Less common but can be challenging to treat.
                      </p>
                      <Badge variant="outline">Rare</Badge>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Spinal Canal Components</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Central Canal</h4>
                        <p className="text-sm text-muted-foreground">
                          Houses the spinal cord (cervical/thoracic) or cauda equina (lumbar). 
                          Normal diameter: 15-25mm in lumbar spine, 14-23mm in cervical spine.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Lateral Recesses</h4>
                        <p className="text-sm text-muted-foreground">
                          Triangular spaces where nerve roots travel before entering foramina. 
                          Bounded by disc, pedicle, and ligamentum flavum.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Neural Foramina</h4>
                        <p className="text-sm text-muted-foreground">
                          Openings between vertebrae where nerve roots exit. Bounded by 
                          pedicles, facet joints, and intervertebral discs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/spinal-canal.jpg"
                      alt="Spinal canal anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="locations" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Cervical Stenosis</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          C3-C7 most commonly affected
                        </p>
                        <p className="text-xs">
                          Symptoms: Myelopathy, neck pain, arm symptoms, balance issues
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Thoracic Stenosis</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Least common location
                        </p>
                        <p className="text-xs">
                          Symptoms: Myelopathy, gait disturbance, bowel/bladder dysfunction
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Lumbar Stenosis</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          L3-L5 most commonly affected
                        </p>
                        <p className="text-xs">
                          Symptoms: Neurogenic claudication, back pain, leg symptoms
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center">
                    <SafeImage
                      src="/images/spine-anatomy/vertebrae.jpg"
                      alt="Spine anatomy showing common stenosis locations"
                      className="w-full max-w-md mx-auto h-auto rounded-lg"
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
                        <h4 className="font-semibold mb-2">Age-Related Degeneration</h4>
                        <p className="text-sm text-muted-foreground">
                          Natural aging causes thickening of ligaments, bone spurs (osteophytes),
                          and disc degeneration, all contributing to canal narrowing.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Ligamentum Flavum Hypertrophy</h4>
                        <p className="text-sm text-muted-foreground">
                          Thickening of the ligamentum flavum (yellow ligament) that lines the
                          back of the spinal canal, reducing available space for nerves.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Facet Joint Arthritis</h4>
                        <p className="text-sm text-muted-foreground">
                          Degenerative changes in facet joints lead to bone spur formation
                          and joint enlargement, encroaching on the spinal canal.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Disc Degeneration</h4>
                        <p className="text-sm text-muted-foreground">
                          Loss of disc height and bulging discs can contribute to canal
                          narrowing, especially when combined with other degenerative changes.
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
                        Sedentary lifestyle
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Poor posture
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Smoking
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
                        Age (over 50 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Congenital narrow canal
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous spine surgery
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Achondroplasia (dwarfism)
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
                    healthy weight, and avoiding smoking can slow degenerative changes.
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
              Signs and Symptoms
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cervical Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Cervical Stenosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Neck region (C3-C7)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Myelopathy Signs</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Hand clumsiness and fine motor loss</li>
                        <li>• Gait instability and balance problems</li>
                        <li>• Hyperreflexia and pathological reflexes</li>
                        <li>• Lhermitte's sign (electric shock sensation)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Radicular Symptoms</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Neck pain and stiffness</li>
                        <li>• Arm pain and numbness</li>
                        <li>• Weakness in specific muscle groups</li>
                        <li>• Headaches and shoulder pain</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thoracic Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Thoracic Stenosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Mid-back region (T1-T12)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Myelopathy Signs</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Progressive gait deterioration</li>
                        <li>• Spasticity in lower extremities</li>
                        <li>• Bowel and bladder dysfunction</li>
                        <li>• Sensory level abnormalities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Radicular Symptoms</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Band-like chest pain</li>
                        <li>• Intercostal neuralgia</li>
                        <li>• Truncal numbness</li>
                        <li>• Mid-back pain and stiffness</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lumbar Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Lumbar Stenosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Lower back region (L1-L5)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Neurogenic Claudication</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Leg pain with walking/standing</li>
                        <li>• Relief with sitting or forward flexion</li>
                        <li>• Bilateral leg symptoms common</li>
                        <li>• "Shopping cart sign" (leaning forward helps)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Other Symptoms</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Lower back pain and stiffness</li>
                        <li>• Leg numbness and tingling</li>
                        <li>• Weakness in legs and feet</li>
                        <li>• Cauda equina syndrome (rare)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Neurogenic Claudication Explanation */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Understanding Neurogenic Claudication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 dark:text-blue-300 mb-4">
                    The hallmark symptom of lumbar spinal stenosis:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Typical Pattern:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Pain/numbness starts after walking a certain distance</li>
                        <li>• Symptoms worsen with continued walking</li>
                        <li>• Relief occurs with sitting or leaning forward</li>
                        <li>• Can walk further when leaning on shopping cart</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Distinguishing Features:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Different from vascular claudication</li>
                        <li>• Position-dependent (flexion helps)</li>
                        <li>• May affect both legs simultaneously</li>
                        <li>• Walking uphill often easier than downhill</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Red Flag Symptoms */}
            <div className="mt-8">
              <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Emergency Warning Signs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 dark:text-red-300 mb-4">
                    Seek immediate medical attention if you experience any of these symptoms:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                      <li>• Sudden loss of bowel or bladder control</li>
                      <li>• Severe weakness in both legs</li>
                      <li>• Numbness in the saddle area (groin/buttocks)</li>
                    </ul>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                      <li>• Progressive myelopathy symptoms</li>
                      <li>• Rapid deterioration of walking ability</li>
                      <li>• Signs of spinal cord compression</li>
                    </ul>
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
                <h3 className="text-xl font-bold mb-6">Clinical Examination</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Medical History</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Detailed assessment of walking tolerance, positional symptoms,
                      and functional limitations.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Walking distance before symptoms</li>
                      <li>• Relief patterns (sitting, leaning forward)</li>
                      <li>• Progression of symptoms over time</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Neurological testing (strength, reflexes, sensation)</li>
                      <li>• Gait analysis and walking tolerance test</li>
                      <li>• Provocative tests (extension vs. flexion)</li>
                      <li>• Assessment for myelopathy signs</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Specialized Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Treadmill test with incline/decline</li>
                      <li>• Bicycle test (often normal in stenosis)</li>
                      <li>• Hoffmann's sign (cervical myelopathy)</li>
                      <li>• Babinski reflex testing</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Imaging Studies</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI (Magnetic Resonance Imaging)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Gold standard for diagnosing spinal stenosis. Shows soft tissue
                          detail and neural compression.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cross-sectional area measurements</li>
                          <li>• Ligamentum flavum thickness</li>
                          <li>• Disc and facet joint changes</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Most Accurate</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Myelography</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Contrast study showing neural compression. Useful when
                          MRI is contraindicated or inconclusive.
                        </p>
                        <Badge variant="outline">Alternative Option</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Dynamic X-rays</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Flexion/extension views to assess spinal instability
                          and dynamic stenosis.
                        </p>
                        <Badge variant="outline">Functional Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">EMG/NCS</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Electrophysiological studies to assess nerve function
                          and differentiate from peripheral neuropathy.
                        </p>
                        <Badge variant="outline">Differential Diagnosis</Badge>
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
                    Diagnostic Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Criteria:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Neurogenic claudication symptoms</li>
                        <li>• Positional relief with flexion</li>
                        <li>• Age typically over 50 years</li>
                        <li>• Bilateral leg symptoms common</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Criteria:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Central canal area &lt;100mm² (severe)</li>
                        <li>• Ligamentum flavum &gt;4mm thick</li>
                        <li>• Facet joint hypertrophy</li>
                        <li>• Disc bulging or herniation</li>
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
                <h3 className="text-xl font-bold mb-6 text-center">Non-Surgical Treatment Approaches</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Activity Modification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Use shopping cart or walker for support</li>
                        <li>• Avoid prolonged standing/walking</li>
                        <li>• Maintain forward-flexed posture when walking</li>
                        <li>• Stationary bike exercise (well-tolerated)</li>
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
                        <li>• Flexion-based exercises</li>
                        <li>• Core strengthening</li>
                        <li>• Postural training</li>
                        <li>• Aquatic therapy</li>
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
                        <li>• Neuropathic pain medications</li>
                        <li>• Muscle relaxants</li>
                        <li>• Topical analgesics</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Symptomatic relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Assistive Devices</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Walking aids (walker, cane)</li>
                        <li>• Lumbar support braces</li>
                        <li>• Ergonomic modifications</li>
                        <li>• Mobility scooters for long distances</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Functional support</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Alternative Therapies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Acupuncture</li>
                        <li>• Chiropractic care (gentle techniques)</li>
                        <li>• Massage therapy</li>
                        <li>• TENS units</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lifestyle Modifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Weight management</li>
                        <li>• Smoking cessation</li>
                        <li>• Sleep optimization</li>
                        <li>• Stress management</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Long-term health</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Success
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Many patients with mild to moderate stenosis can manage symptoms effectively
                    with conservative treatment, avoiding the need for surgery.
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
                        Corticosteroid injection into the epidural space to reduce inflammation
                        and provide temporary symptom relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Approaches:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Interlaminar approach</li>
                          <li>• Transforaminal approach</li>
                          <li>• Caudal approach</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">50-70% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Interspinous Process Devices</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Minimally invasive devices placed between spinous processes
                        to maintain flexion and reduce extension-related symptoms.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Preserves spinal motion</li>
                          <li>• Outpatient procedure</li>
                          <li>• Reversible treatment</li>
                          <li>• Minimal tissue disruption</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Motion-preserving</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Percutaneous Image-Guided Lumbar Decompression</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Minimally invasive procedure using specialized tools to remove
                        small amounts of ligamentum flavum and bone.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Local anesthesia</li>
                          <li>• Same-day discharge</li>
                          <li>• Minimal recovery time</li>
                          <li>• Low complication rate</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Emerging technique</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Facet Joint Procedures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Targeted treatments for facet joint-related stenosis and pain,
                        including injections and radiofrequency ablation.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Options:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Facet joint injections</li>
                          <li>• Medial branch blocks</li>
                          <li>• Radiofrequency ablation</li>
                          <li>• Facet joint denervation</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Targeted approach</Badge>
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
                        <CardTitle className="text-lg">Laminectomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Removal of the lamina (back part of vertebra) to create more
                          space for the spinal cord and nerves.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Central canal stenosis</li>
                              <li>• Multilevel involvement</li>
                              <li>• Ligamentum flavum hypertrophy</li>
                              <li>• Failed conservative treatment</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Gold Standard</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Laminotomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Partial removal of lamina, preserving more bone and
                          maintaining spinal stability.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Benefits:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Preserves spinal stability</li>
                              <li>• Less tissue disruption</li>
                              <li>• Faster recovery</li>
                              <li>• Lower infection risk</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Tissue-sparing</Badge>
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
                            Advanced techniques using smaller incisions, endoscopes,
                            and specialized instruments for targeted decompression.
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Techniques:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Endoscopic decompression</li>
                              <li>• Microscopic decompression</li>
                              <li>• Tubular retractor systems</li>
                              <li>• Unilateral approach for bilateral decompression</li>
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

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Fusion Surgery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        When decompression alone is insufficient or spinal instability
                        is present, fusion may be necessary to maintain spinal alignment.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Indications:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Spinal instability</li>
                            <li>• Spondylolisthesis</li>
                            <li>• Extensive decompression required</li>
                            <li>• Recurrent stenosis</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Techniques:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Posterolateral fusion</li>
                            <li>• Interbody fusion (PLIF, TLIF)</li>
                            <li>• Minimally invasive fusion</li>
                            <li>• Instrumented fusion</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">When stability needed</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Success Rates
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 85-95% improvement in leg symptoms</li>
                        <li>• 70-80% improvement in back pain</li>
                        <li>• 90%+ patient satisfaction rates</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Significant improvement in walking distance</li>
                        <li>• Enhanced quality of life</li>
                        <li>• Long-term durability of results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Recovery and Prognosis Section */}
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
              Recovery and Prognosis
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Recovery Timeline</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Immediate Post-Surgery (0-2 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Initial healing phase with gradual mobilization. Most patients
                          experience immediate relief of leg symptoms.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Early Recovery (2-6 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Progressive increase in walking distance and activity.
                          Physical therapy begins to improve strength and endurance.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Functional Recovery (6-12 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Return to most normal activities. Continued improvement
                          in walking tolerance and overall function.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Long-term Recovery (3-12 months)</h4>
                        <p className="text-sm text-muted-foreground">
                          Maximum improvement achieved. Focus on maintaining
                          gains and preventing future problems.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Factors Affecting Outcome</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Positive Prognostic Factors
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Predominant leg symptoms vs. back pain</li>
                      <li>• Shorter duration of symptoms</li>
                      <li>• Good pre-operative walking ability</li>
                      <li>• Absence of significant comorbidities</li>
                      <li>• Younger age (though surgery successful at any age)</li>
                      <li>• Single or few-level stenosis</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Challenging Factors
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Predominant back pain</li>
                      <li>• Long-standing symptoms (&gt;2 years)</li>
                      <li>• Multilevel stenosis</li>
                      <li>• Significant spinal deformity</li>
                      <li>• Diabetes or peripheral vascular disease</li>
                      <li>• Previous spine surgery</li>
                    </ul>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Expected Outcomes
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 85-95% improvement in neurogenic claudication</li>
                      <li>• Significant increase in walking distance</li>
                      <li>• 90%+ patient satisfaction rates</li>
                      <li>• Durable long-term results (10+ years)</li>
                      <li>• Low reoperation rates (5-10%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
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
              Prevention and Management Strategies
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
                    <li>• Flexion-based exercises (cycling, swimming)</li>
                    <li>• Core strengthening programs</li>
                    <li>• Walking with forward lean (shopping cart)</li>
                    <li>• Avoid extension-based activities</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/exercise-library">
                        View Exercise Library
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
                  <CardTitle>Posture and Body Mechanics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain slight forward flexion when walking</li>
                    <li>• Use assistive devices when needed</li>
                    <li>• Avoid prolonged standing in extension</li>
                    <li>• Proper lifting techniques</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-safe-exercises">
                        Learn Safe Techniques
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
                    <li>• Maintain healthy weight</li>
                    <li>• Quit smoking (improves healing)</li>
                    <li>• Manage diabetes and other conditions</li>
                    <li>• Stay hydrated and eat well</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-and-brain-health">
                        Health Guidelines
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Activity Modifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Use shopping cart or walker for support</li>
                    <li>• Take frequent rest breaks</li>
                    <li>• Choose activities that allow forward flexion</li>
                    <li>• Avoid high-impact activities</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/lifestyle-modifications">
                        Activity Guidelines
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
                    <li>• Use heat/cold therapy appropriately</li>
                    <li>• Practice relaxation techniques</li>
                    <li>• Consider mindfulness and meditation</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/individual-spine-health-programme">
                        Holistic Approach
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
                    <li>• Regular follow-up appointments</li>
                    <li>• Monitor symptom progression</li>
                    <li>• Adjust treatment as needed</li>
                    <li>• Early intervention for worsening symptoms</li>
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
                  Take Control of Your Spinal Stenosis
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let spinal stenosis limit your mobility and quality of life.
                  Our comprehensive assessment tools and expert guidance can help you
                  understand your condition and explore the best treatment options.
                </p>
                <div className={cn(
                  "flex justify-center gap-4",
                  deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
                )}>
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">
                      <Target className="mr-2 h-4 w-4" />
                      Take Spine Assessment
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
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Comprehensive Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed evaluation of your walking tolerance and symptoms
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Diagnosis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced imaging and clinical expertise for accurate diagnosis
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Personalized Treatment</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored treatment plans from conservative to surgical options
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
                    Learn about herniated discs, which can contribute to spinal stenosis
                    and cause similar symptoms.
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
                    src="/images/spine-conditions/spondylolisthesis.jpg"
                    alt="Spondylolisthesis information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Spondylolisthesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand spondylolisthesis, a condition that often occurs
                    alongside spinal stenosis.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/conditions/spondylolisthesis">
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
                    for spinal stenosis management and prevention.
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
