import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';
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
  Bone,
  Move,
  Ruler
} from "lucide-react";

const Spondylolisthesis: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Basic fallback structure
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    home: { welcome: { learnMore: "Learn More" }, featuredProcedures: { title: "Featured Procedures" } },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout title="Spondylolisthesis - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/spondylolisthesis.jpg"
              alt="Spondylolisthesis anatomy"
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
                Spondylolisthesis: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding spondylolisthesis: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced surgical interventions for vertebral slippage and spinal instability.
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
                  <p className="text-sm text-muted-foreground">3-7% general population</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">40-60 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Gender</h3>
                  <p className="text-sm text-muted-foreground">Females 4:1 ratio</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Treatment Success</h3>
                  <p className="text-sm text-muted-foreground">85-95% improvement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Spondylolisthesis Section */}
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
                  What is Spondylolisthesis?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Spondylolisthesis is a condition where one vertebra slips forward over the vertebra below it. 
                  This forward displacement can occur at any level of the spine but is most common in the lumbar 
                  (lower back) region, particularly at the L4-L5 and L5-S1 levels.
                </p>
                <p className="text-muted-foreground mb-6">
                  The condition can range from mild slippage that causes no symptoms to severe displacement 
                  that results in significant pain, nerve compression, and functional limitations. The degree 
                  of slippage is classified using the Meyerding grading system, which helps guide treatment decisions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Forward displacement of one vertebra over another</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Most common in lumbar spine, especially L4-L5 and L5-S1</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Can cause nerve compression and spinal instability</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/spondylolisthesis.jpg"
                  alt="Spondylolisthesis anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing vertebral slippage and potential nerve compression
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classification & Grading Section */}
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
              Classification & Grading Systems
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
                  Types by Etiology
                </TabsTrigger>
                <TabsTrigger value="grading" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Meyerding Grading
                </TabsTrigger>
                <TabsTrigger value="stability" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Stability Assessment
                </TabsTrigger>
              </TabsList>

              <TabsContent value="types" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Types of Spondylolisthesis by Etiology</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Type I: Dysplastic (Congenital)
                      </h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Congenital defect in neural arch</li>
                        <li>• Present from birth</li>
                        <li>• Often progressive during growth</li>
                        <li>• May require early intervention</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Type II: Isthmic (Spondylolytic)
                      </h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Due to pars interarticularis defect</li>
                        <li>• Most common type in young athletes</li>
                        <li>• Often related to stress fractures</li>
                        <li>• May progress with activity</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Type III: Degenerative
                      </h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Age-related joint degeneration</li>
                        <li>• Most common in adults over 50</li>
                        <li>• Female predominance (4:1 ratio)</li>
                        <li>• Usually L4-L5 level</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                        Type IV: Traumatic
                      </h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Acute fracture of neural arch</li>
                        <li>• Result of high-energy trauma</li>
                        <li>• May involve multiple levels</li>
                        <li>• Often requires surgical stabilization</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        Type V: Pathologic
                      </h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Due to bone disease or tumor</li>
                        <li>• Weakened bone structure</li>
                        <li>• May progress rapidly</li>
                        <li>• Requires treatment of underlying condition</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-teal-200 bg-teal-50 dark:bg-teal-950/20">
                      <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">
                        Type VI: Iatrogenic
                      </h4>
                      <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1">
                        <li>• Post-surgical complication</li>
                        <li>• Excessive bone removal</li>
                        <li>• Loss of posterior support</li>
                        <li>• May require revision surgery</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="grading" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Meyerding Grading System</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Grading Scale</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Grade I (0-25% slip)</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">Mild slippage, often asymptomatic</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Grade II (25-50% slip)</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Moderate slippage, may cause symptoms</p>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200">
                          <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200">Grade III (50-75% slip)</h5>
                          <p className="text-sm text-orange-700 dark:text-orange-300">Severe slippage, usually symptomatic</p>
                        </div>
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Grade IV (75-100% slip)</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Very severe, significant symptoms</p>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200">
                          <h5 className="font-semibold text-sm text-purple-800 dark:text-purple-200">Grade V (&gt;100% slip)</h5>
                          <p className="text-sm text-purple-700 dark:text-purple-300">Complete dislocation (spondyloptosis)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Clinical Significance</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Treatment Planning</h5>
                          <p className="text-sm text-muted-foreground">Grade determines treatment approach</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Surgical Indications</h5>
                          <p className="text-sm text-muted-foreground">Higher grades more likely to need surgery</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Prognosis</h5>
                          <p className="text-sm text-muted-foreground">Lower grades have better outcomes</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Progression Risk</h5>
                          <p className="text-sm text-muted-foreground">Higher grades more likely to progress</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/meyerding-grading.jpg"
                          alt="Meyerding grading system"
                          className="w-full max-w-sm mx-auto h-auto rounded-lg"
                          fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="stability" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Stability Assessment</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Stable Spondylolisthesis</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Characteristics</h5>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• No progression over time</li>
                            <li>• Minimal symptoms</li>
                            <li>• Good functional capacity</li>
                            <li>• No neurological deficits</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Management</h5>
                          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Conservative treatment</li>
                            <li>• Activity modification</li>
                            <li>• Regular monitoring</li>
                            <li>• Physical therapy</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Unstable Spondylolisthesis</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Characteristics</h5>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• Progressive slippage</li>
                            <li>• Worsening symptoms</li>
                            <li>• Neurological compromise</li>
                            <li>• Functional limitations</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200">Management</h5>
                          <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                            <li>• Surgical stabilization</li>
                            <li>• Decompression if needed</li>
                            <li>• Fusion procedures</li>
                            <li>• Close monitoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Assessment Factors
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• Degree of slippage progression</li>
                        <li>• Presence of neurological symptoms</li>
                        <li>• Functional impact on daily activities</li>
                      </ul>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• Response to conservative treatment</li>
                        <li>• Age and activity level of patient</li>
                        <li>• Associated spinal stenosis</li>
                      </ul>
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
                      <Clock className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Degenerative Changes</h4>
                        <p className="text-sm text-muted-foreground">
                          Age-related wear and tear of facet joints and ligaments leads to spinal
                          instability and gradual forward slippage of vertebrae.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Pars Interarticularis Defects</h4>
                        <p className="text-sm text-muted-foreground">
                          Stress fractures or defects in the pars interarticularis can lead to
                          isthmic spondylolisthesis, especially in young athletes.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Congenital Abnormalities</h4>
                        <p className="text-sm text-muted-foreground">
                          Developmental defects in the neural arch or facet joints can predispose
                          to vertebral slippage from birth or early childhood.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Traumatic Injury</h4>
                        <p className="text-sm text-muted-foreground">
                          High-energy trauma can cause acute fractures of the neural arch,
                          leading to sudden vertebral displacement and instability.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Settings className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Iatrogenic Causes</h4>
                        <p className="text-sm text-muted-foreground">
                          Surgical complications, excessive bone removal, or inadequate
                          stabilization can result in post-operative spondylolisthesis.
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
                    <h4 className="font-semibold text-primary">Demographic Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Age (degenerative type: 40-60 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Female gender (4:1 ratio for degenerative)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Family history of spinal conditions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Certain ethnic backgrounds
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Activity-Related Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Repetitive hyperextension activities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        High-impact sports participation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Heavy manual labor
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Poor posture and body mechanics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous spinal surgery
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-primary">Medical Conditions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Spina bifida occulta
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Osteoporosis and bone weakness
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Connective tissue disorders
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Metabolic bone disease
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Type-Specific Risk Factors
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Degenerative spondylolisthesis predominantly affects middle-aged women,
                    while isthmic type is more common in young male athletes participating
                    in extension-based sports like gymnastics, football, and wrestling.
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Primary Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Primary Symptoms</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Core manifestations of spondylolisthesis</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Lower Back Pain
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Chronic, aching lower back pain</li>
                        <li>• Pain worse with standing and walking</li>
                        <li>• Relief with sitting or forward bending</li>
                        <li>• May radiate to buttocks and thighs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        Neurogenic Claudication
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Leg pain and weakness with walking</li>
                        <li>• Symptoms improve with rest</li>
                        <li>• Can walk further when leaning forward</li>
                        <li>• Progressive limitation of walking distance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Move className="h-4 w-4 text-green-500" />
                        Spinal Stiffness
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced lumbar spine flexibility</li>
                        <li>• Difficulty with extension movements</li>
                        <li>• Morning stiffness and pain</li>
                        <li>• Compensatory posture changes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Secondary Symptoms</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Associated manifestations</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Numbness and tingling in legs</li>
                        <li>• Muscle weakness in lower extremities</li>
                        <li>• Altered reflexes and sensation</li>
                        <li>• Bowel/bladder dysfunction (severe cases)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-purple-500" />
                        Functional Limitations
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Difficulty with prolonged standing</li>
                        <li>• Reduced walking tolerance</li>
                        <li>• Problems with stairs and inclines</li>
                        <li>• Sleep disturbances from pain</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-teal-500" />
                        Physical Signs
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Visible step-off deformity (severe cases)</li>
                        <li>• Increased lumbar lordosis</li>
                        <li>• Tight hamstring muscles</li>
                        <li>• Altered gait pattern</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Symptom Patterns by Type */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Symptom Patterns by Spondylolisthesis Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Degenerative Type:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Gradual onset of symptoms</li>
                        <li>• Neurogenic claudication prominent</li>
                        <li>• Spinal stenosis symptoms</li>
                        <li>• Middle-aged to elderly patients</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Isthmic Type:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Often asymptomatic in youth</li>
                        <li>• Activity-related back pain</li>
                        <li>• May develop symptoms in adulthood</li>
                        <li>• Less neurological involvement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">High-Grade Slips:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Severe back and leg pain</li>
                        <li>• Significant functional disability</li>
                        <li>• Visible deformity</li>
                        <li>• Neurological complications</li>
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
                      Comprehensive assessment of symptom onset, progression,
                      functional limitations, and impact on quality of life.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain characteristics and distribution</li>
                      <li>• Walking tolerance and claudication symptoms</li>
                      <li>• Previous treatments and responses</li>
                      <li>• Family history and risk factors</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spinal alignment and posture assessment</li>
                      <li>• Range of motion testing</li>
                      <li>• Neurological examination of lower extremities</li>
                      <li>• Palpation for step-off deformity</li>
                      <li>• Hamstring tightness evaluation</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Functional Assessment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Walking tolerance testing</li>
                      <li>• Activities of daily living evaluation</li>
                      <li>• Pain and disability questionnaires</li>
                      <li>• Quality of life measures</li>
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
                          Standing lateral and flexion-extension views to assess
                          degree of slippage and spinal stability.
                        </p>
                        <Badge variant="secondary" className="mt-2">First-line imaging</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI Imaging</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Detailed assessment of neural compression, disc degeneration,
                          and soft tissue changes associated with spondylolisthesis.
                        </p>
                        <Badge variant="secondary" className="mt-2">Detailed evaluation</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Layers className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Scanning</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Excellent bone detail for assessing pars defects,
                          facet joint arthritis, and surgical planning.
                        </p>
                        <Badge variant="outline">Bone assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Specialized Studies</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Myelography, EMG/NCS for nerve function, and dynamic
                          imaging for instability assessment when indicated.
                        </p>
                        <Badge variant="outline">Advanced testing</Badge>
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
                    Diagnostic Criteria for Spondylolisthesis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Chronic lower back pain</li>
                        <li>• Neurogenic claudication symptoms</li>
                        <li>• Functional limitations with walking</li>
                        <li>• Possible neurological deficits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Findings:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Visible vertebral slippage on X-rays</li>
                        <li>• Meyerding grade classification</li>
                        <li>• Neural compression on MRI</li>
                        <li>• Associated degenerative changes</li>
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
                      <CardTitle className="text-lg">Physical Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Core strengthening exercises</li>
                        <li>• Flexion-based exercise program</li>
                        <li>• Postural training and education</li>
                        <li>• Manual therapy techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">First-line treatment</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Medications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• NSAIDs for inflammation and pain</li>
                        <li>• Muscle relaxants for spasm</li>
                        <li>• Neuropathic pain medications</li>
                        <li>• Topical analgesics</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Symptomatic relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Activity Modification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Avoid extension-based activities</li>
                        <li>• Use of assistive devices</li>
                        <li>• Ergonomic workplace modifications</li>
                        <li>• Weight management support</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Lifestyle changes</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Bracing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Lumbar support braces</li>
                        <li>• Activity-specific bracing</li>
                        <li>• Temporary use for symptom relief</li>
                        <li>• Combined with exercise therapy</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Supportive care</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Alternative Therapies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Acupuncture and dry needling</li>
                        <li>• Massage therapy</li>
                        <li>• Chiropractic care</li>
                        <li>• Mind-body techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary care</Badge>
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
                        <li>• Low-impact cardiovascular exercise</li>
                        <li>• Flexibility and stretching routines</li>
                        <li>• Functional movement training</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Long-term management</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain reduction, improved functional capacity, prevention of progression,
                    and enhancement of quality of life through targeted exercises and lifestyle modifications.
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
                        Injection of corticosteroids into the epidural space to reduce
                        inflammation and pain associated with nerve compression.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Reduces nerve root inflammation</li>
                          <li>• Provides temporary pain relief</li>
                          <li>• Facilitates physical therapy</li>
                          <li>• Diagnostic information</li>
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
                        Targeted injection into arthritic facet joints to address
                        pain from degenerative changes and instability.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Facet joint arthropathy</li>
                          <li>• Mechanical back pain</li>
                          <li>• Diagnostic confirmation</li>
                          <li>• Pre-surgical evaluation</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">70-85% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Radiofrequency Ablation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Thermal treatment of facet joint nerves to provide
                        longer-lasting pain relief for chronic symptoms.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting relief (6-12 months)</li>
                          <li>• Minimally invasive procedure</li>
                          <li>• Repeatable treatment</li>
                          <li>• Outpatient procedure</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Advanced intervention</Badge>
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
                        to limit extension and provide dynamic stabilization.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Indications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Mild to moderate spondylolisthesis</li>
                          <li>• Neurogenic claudication</li>
                          <li>• Poor surgical candidates</li>
                          <li>• Desire to avoid fusion</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Motion preservation</Badge>
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
                        <CardTitle className="text-lg">Decompression Surgery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Removal of bone and soft tissue to relieve pressure
                          on compressed nerves and spinal cord.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Procedures:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Laminectomy</li>
                              <li>• Laminotomy</li>
                              <li>• Foraminotomy</li>
                              <li>• Facetectomy (partial)</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Nerve decompression</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Spinal Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Permanent joining of vertebrae to eliminate motion
                          and provide stability in unstable spondylolisthesis.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Approaches:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Posterior lumbar interbody fusion (PLIF)</li>
                              <li>• Transforaminal lumbar interbody fusion (TLIF)</li>
                              <li>• Anterior lumbar interbody fusion (ALIF)</li>
                              <li>• Posterolateral fusion</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Stabilization procedure</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Surgical Decision Making</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Indications for Surgery:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Failed conservative treatment (6+ months)</li>
                            <li>• Progressive neurological deficits</li>
                            <li>• Severe functional impairment</li>
                            <li>• High-grade spondylolisthesis</li>
                            <li>• Progressive slippage</li>
                            <li>• Cauda equina syndrome</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 80-95% good to excellent results</li>
                            <li>• Significant pain reduction</li>
                            <li>• Improved walking tolerance</li>
                            <li>• High patient satisfaction</li>
                            <li>• Durable long-term outcomes</li>
                            <li>• Prevention of progression</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Spondylolisthesis surgical treatment"
                          className="w-full h-auto rounded-lg"
                          fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Considerations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Grade of spondylolisthesis</li>
                        <li>• Presence of instability</li>
                        <li>• Degree of neural compression</li>
                        <li>• Patient age and activity level</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Bone quality and fusion potential</li>
                        <li>• Previous surgical history</li>
                        <li>• Patient expectations and goals</li>
                        <li>• Risk-benefit analysis</li>
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
                  <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Conservative Treatment Success
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• 60-80% improvement with comprehensive conservative care</li>
                      <li>• Physical therapy shows excellent results in mild cases</li>
                      <li>• Activity modification highly effective for symptom control</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Epidural injections: 60-80% short-term relief</li>
                      <li>• Facet joint injections: 70-85% improvement</li>
                      <li>• Radiofrequency ablation: 60-80% long-term relief</li>
                      <li>• Interspinous devices: 70-85% success in selected cases</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Decompression alone: 70-85% good results</li>
                      <li>• Decompression with fusion: 80-95% excellent outcomes</li>
                      <li>• High patient satisfaction rates</li>
                      <li>• Durable long-term symptom relief</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Prognostic Factors</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Favorable Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Low-grade spondylolisthesis (Grade I-II)</li>
                      <li>• Stable slippage without progression</li>
                      <li>• Absence of significant neurological deficits</li>
                      <li>• Good response to initial conservative treatment</li>
                      <li>• Younger age and good overall health</li>
                      <li>• Strong motivation for rehabilitation</li>
                      <li>• Adequate bone quality for fusion</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• High-grade spondylolisthesis (Grade III-V)</li>
                      <li>• Progressive slippage over time</li>
                      <li>• Significant neurological compromise</li>
                      <li>• Multiple level involvement</li>
                      <li>• Poor bone quality or osteoporosis</li>
                      <li>• Smoking and poor healing factors</li>
                      <li>• Psychological factors and depression</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Long-term Management Keys
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Success depends on accurate diagnosis, appropriate treatment selection,
                      patient education, and ongoing monitoring for progression. Regular
                      follow-up and adherence to treatment recommendations are essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Strategies Section */}
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
              Prevention Strategies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    Core Strengthening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop strong core muscles to support the spine and reduce stress on vertebrae.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Abdominal strengthening exercises</li>
                    <li>• Back extensor muscle training</li>
                    <li>• Pelvic floor strengthening</li>
                    <li>• Functional core stability training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Proper Body Mechanics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn and practice correct movement patterns to protect the spine.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Proper lifting techniques</li>
                    <li>• Good posture maintenance</li>
                    <li>• Avoid excessive spinal extension</li>
                    <li>• Safe movement patterns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Healthy Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Adopt healthy lifestyle habits that support spinal health and bone strength.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain healthy body weight</li>
                    <li>• Avoid smoking and tobacco use</li>
                    <li>• Balanced nutrition with calcium and vitamin D</li>
                    <li>• Regular low-impact exercise</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-500" />
                    Activity Modification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Modify activities to reduce stress on the spine and prevent progression.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Limit high-impact activities</li>
                    <li>• Avoid repetitive hyperextension</li>
                    <li>• Use proper equipment and techniques</li>
                    <li>• Gradual activity progression</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Early Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recognize early warning signs and seek prompt medical evaluation.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Monitor for symptom changes</li>
                    <li>• Regular health screenings</li>
                    <li>• Prompt medical evaluation</li>
                    <li>• Follow treatment recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-teal-500" />
                    Risk Factor Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Address modifiable risk factors to prevent progression and complications.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Osteoporosis prevention and treatment</li>
                    <li>• Weight management programs</li>
                    <li>• Smoking cessation support</li>
                    <li>• Management of underlying conditions</li>
                  </ul>
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={cn(
                "font-bold mb-6",
                deviceInfo.isMobile ? "text-2xl" : "text-3xl"
              )}>
                Take Our Spondylolisthesis Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                spondylolisthesis and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick Spondylolisthesis Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Chronic lower back pain
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Leg pain when walking
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Relief when sitting or bending forward
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Difficulty walking long distances
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Numbness or tingling in legs
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Muscle weakness in legs
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Age over 40 years
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Female gender
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for spondylolisthesis.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className={cn(
                "flex justify-center gap-4",
                deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
              )}>
                <Button asChild size={deviceInfo.isMobile ? "default" : "lg"}>
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size={deviceInfo.isMobile ? "default" : "lg"}>
                  <Link to="/patient-resources/spine-conditions-library">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Explore More Conditions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className={cn(
          "bg-muted/30",
          deviceInfo.isMobile ? "py-8" : "py-12"
        )}>
          <div className={cn(
            "container",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold text-center mb-8",
              deviceInfo.isMobile ? "text-xl" : "text-2xl"
            )}>
              Related Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <Bone className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Pars Defects</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Comprehensive guide to pars defects and their relationship to spondylolisthesis
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/pars-defects">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Disc className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Spinal Stenosis</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Understanding spinal stenosis often associated with spondylolisthesis
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/spinal-stenosis">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Brain className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Surgical Options</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Advanced surgical techniques for spondylolisthesis treatment
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/expertise">Explore Treatments</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </StandardPageLayout>
  );
};

Spondylolisthesis.displayName = 'Spondylolisthesis';

export default Spondylolisthesis;
