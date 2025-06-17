import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
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
  Move
} from "lucide-react";

const ParsDefects: React.FC = () => {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout title="Pars Defects (Spondylolysis) - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/spondylolisthesis.jpg"
              alt="Pars defects anatomy"
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
                Pars Defects: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding pars defects (spondylolysis): causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced surgical interventions for pars interarticularis fractures and spinal instability.
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
                  <p className="text-sm text-muted-foreground">5-7% general population</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">10-18 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Gender</h3>
                  <p className="text-sm text-muted-foreground">Males 2:1 ratio</p>
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

        {/* What are Pars Defects Section */}
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
                  What are Pars Defects?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Pars defects, also known as spondylolysis, are stress fractures or defects in the pars interarticularis, 
                  a thin bridge of bone that connects the upper and lower facet joints of each vertebra. These defects 
                  most commonly occur in the lumbar spine, particularly at the L5 level.
                </p>
                <p className="text-muted-foreground mb-6">
                  The pars interarticularis is a critical structural component that helps maintain spinal stability. 
                  When this area develops a fracture or defect, it can lead to pain, instability, and in some cases, 
                  progression to spondylolisthesis (forward slippage of one vertebra over another).
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Stress fractures in the pars interarticularis bone bridge</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Most common in young athletes and active individuals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Can be unilateral or bilateral affecting spinal stability</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/spondylolisthesis.jpg"
                  alt="Pars defects anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing pars interarticularis defects and potential spondylolisthesis
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pars Interarticularis Anatomy & Classification Section */}
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
              Understanding Pars Interarticularis Anatomy & Classification
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
                  Pars Anatomy
                </TabsTrigger>
                <TabsTrigger value="classification" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Classification
                </TabsTrigger>
                <TabsTrigger value="biomechanics" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Biomechanics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Pars Interarticularis Anatomy</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Location and Structure</h4>
                        <p className="text-sm text-muted-foreground">
                          The pars interarticularis is a narrow bridge of bone located between the superior
                          and inferior articular processes of each vertebra, forming part of the neural arch.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Anatomical Significance</h4>
                        <p className="text-sm text-muted-foreground">
                          This structure is critical for maintaining spinal stability and transferring
                          loads between adjacent vertebrae during movement and weight-bearing activities.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Vulnerable Area</h4>
                        <p className="text-sm text-muted-foreground">
                          The pars is the thinnest and most vulnerable part of the vertebral arch,
                          making it susceptible to stress fractures, especially in young athletes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Common Locations</h4>
                        <p className="text-sm text-muted-foreground">
                          While pars defects can occur at any level, they are most common at L5 (85-95%),
                          followed by L4, and rarely in the upper lumbar or cervical spine.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/lumbar-vertebra.jpg"
                      alt="Detailed pars interarticularis anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="classification" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Classification of Pars Defects</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        By Etiology
                      </h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• <strong>Dysplastic:</strong> Congenital abnormality</li>
                        <li>• <strong>Isthmic:</strong> Stress fracture (most common)</li>
                        <li>• <strong>Degenerative:</strong> Age-related changes</li>
                        <li>• <strong>Traumatic:</strong> Acute injury</li>
                        <li>• <strong>Pathologic:</strong> Disease-related</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        By Severity (Meyerding Classification)
                      </h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• <strong>Grade I:</strong> 0-25% slip</li>
                        <li>• <strong>Grade II:</strong> 25-50% slip</li>
                        <li>• <strong>Grade III:</strong> 50-75% slip</li>
                        <li>• <strong>Grade IV:</strong> 75-100% slip</li>
                        <li>• <strong>Grade V:</strong> Complete dislocation</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        By Laterality
                      </h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• <strong>Unilateral:</strong> One-sided defect</li>
                        <li>• <strong>Bilateral:</strong> Both sides affected</li>
                        <li>• <strong>Progressive:</strong> Developing over time</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                        By Healing Potential
                      </h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• <strong>Acute:</strong> Recent, potentially healable</li>
                        <li>• <strong>Chronic:</strong> Established, fibrous union</li>
                        <li>• <strong>Progressive:</strong> Ongoing stress reaction</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Clinical Significance
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Classification helps determine treatment approach, prognosis, and risk of progression
                      to spondylolisthesis. Early-stage defects have better healing potential with conservative treatment.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="biomechanics" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Biomechanics of Pars Defects</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Stress Distribution</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Extension Loading</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Maximum stress occurs during spinal extension and hyperextension</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Rotational Forces</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Combined extension and rotation create highest stress concentrations</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Repetitive Loading</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Cumulative microtrauma from repetitive activities leads to stress fractures</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Mechanical Consequences</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Loss of Stability</h5>
                          <p className="text-sm text-muted-foreground">Bilateral defects compromise spinal stability</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Altered Load Transfer</h5>
                          <p className="text-sm text-muted-foreground">Changed force distribution through adjacent structures</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Progressive Slippage</h5>
                          <p className="text-sm text-muted-foreground">Risk of spondylolisthesis development</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Compensatory Changes</h5>
                          <p className="text-sm text-muted-foreground">Adjacent level stress and degeneration</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/biomechanics-illustration.jpg"
                          alt="Pars defect biomechanics"
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
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Repetitive Stress</h4>
                        <p className="text-sm text-muted-foreground">
                          The most common cause is repetitive hyperextension and rotation activities
                          that place excessive stress on the pars interarticularis over time.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Athletic Activities</h4>
                        <p className="text-sm text-muted-foreground">
                          Sports involving repetitive spinal extension (gymnastics, diving, football,
                          cricket bowling) significantly increase the risk of pars defects.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Genetic Predisposition</h4>
                        <p className="text-sm text-muted-foreground">
                          Family history and genetic factors influence bone quality, healing capacity,
                          and susceptibility to stress fractures in the pars interarticularis.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Acute Trauma</h4>
                        <p className="text-sm text-muted-foreground">
                          Less commonly, acute traumatic events with forceful hyperextension
                          can cause immediate fracture of the pars interarticularis.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Developmental Factors</h4>
                        <p className="text-sm text-muted-foreground">
                          Congenital abnormalities, spina bifida occulta, and developmental
                          variations can predispose to pars defect formation.
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
                    <h4 className="font-semibold text-primary">High-Risk Sports</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Gymnastics and diving
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Football (linemen)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Cricket (fast bowlers)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Wrestling and martial arts
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Tennis and racquet sports
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Weight lifting
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Patient Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age 10-18 years (peak risk)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Male gender (2:1 ratio)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Family history of spondylolysis
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Spina bifida occulta
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Increased lumbar lordosis
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Poor training techniques
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Athletic Risk Factors
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Young athletes participating in sports requiring repetitive spinal extension
                    have up to 15-20% prevalence of pars defects, significantly higher than
                    the general population rate of 5-7%.
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
                  <p className="text-center text-sm text-muted-foreground">Core manifestations of pars defects</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Lower Back Pain
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Localized lumbar pain, often unilateral</li>
                        <li>• Aching or sharp pain quality</li>
                        <li>• Pain worse with extension activities</li>
                        <li>• Relief with rest and flexion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        Activity-Related Pain
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pain during sports participation</li>
                        <li>• Discomfort with prolonged standing</li>
                        <li>• Pain with walking or running</li>
                        <li>• Symptoms worsen with training</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Move className="h-4 w-4 text-green-500" />
                        Movement Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pain with spinal extension</li>
                        <li>• Discomfort during rotation</li>
                        <li>• Relief with forward bending</li>
                        <li>• Stiffness in the morning</li>
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
                        <li>• Leg pain (if spondylolisthesis develops)</li>
                        <li>• Numbness or tingling in legs</li>
                        <li>• Muscle weakness (rare)</li>
                        <li>• Neurogenic claudication (severe cases)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-purple-500" />
                        Functional Limitations
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced athletic performance</li>
                        <li>• Difficulty with daily activities</li>
                        <li>• Sleep disturbances from pain</li>
                        <li>• Avoidance of certain movements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-teal-500" />
                        Physical Signs
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Localized tenderness over affected level</li>
                        <li>• Positive single-leg hyperextension test</li>
                        <li>• Muscle spasm in lumbar region</li>
                        <li>• Possible step-off deformity (if slippage)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Symptom Progression */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Symptom Progression and Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Early Stage:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Mild, intermittent back pain</li>
                        <li>• Pain only during specific activities</li>
                        <li>• Quick recovery with rest</li>
                        <li>• No neurological symptoms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Progressive Stage:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• More frequent and persistent pain</li>
                        <li>• Pain with daily activities</li>
                        <li>• Longer recovery periods needed</li>
                        <li>• Possible muscle spasm</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Advanced Stage:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Constant or severe pain</li>
                        <li>• Significant functional limitation</li>
                        <li>• Possible spondylolisthesis</li>
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
                      Detailed assessment of symptom onset, activity patterns,
                      sports participation, and family history of spinal conditions.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain characteristics and timing</li>
                      <li>• Athletic activities and training intensity</li>
                      <li>• Previous injuries or treatments</li>
                      <li>• Family history of spondylolysis</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Single-leg hyperextension test (Stork test)</li>
                      <li>• Lumbar spine range of motion assessment</li>
                      <li>• Neurological examination of lower extremities</li>
                      <li>• Palpation for tenderness and muscle spasm</li>
                      <li>• Assessment for spondylolisthesis signs</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Functional Assessment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sport-specific movement patterns</li>
                      <li>• Pain provocation tests</li>
                      <li>• Activity tolerance evaluation</li>
                      <li>• Quality of life impact assessment</li>
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
                          Initial imaging including oblique views to visualize
                          the pars interarticularis and assess for defects.
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
                          Excellent for detecting early stress reactions, bone marrow
                          edema, and assessing healing potential of pars defects.
                        </p>
                        <Badge variant="secondary" className="mt-2">Detailed soft tissue</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Layers className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Scanning</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Superior bone detail for assessing fracture characteristics,
                          healing status, and surgical planning.
                        </p>
                        <Badge variant="outline">Bone detail</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">SPECT Scan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Nuclear medicine study to detect active bone stress
                          reactions and early pars defects not visible on X-rays.
                        </p>
                        <Badge variant="outline">Early detection</Badge>
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
                    Diagnostic Criteria for Pars Defects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Young athlete with extension-related back pain</li>
                        <li>• Positive single-leg hyperextension test</li>
                        <li>• Localized lumbar tenderness</li>
                        <li>• Pain relief with activity modification</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Findings:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Visible pars defect on oblique X-rays</li>
                        <li>• Bone marrow edema on MRI (acute)</li>
                        <li>• Increased uptake on SPECT scan</li>
                        <li>• CT confirmation of fracture details</li>
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
                        <li>• Complete rest from aggravating activities</li>
                        <li>• Gradual return to sport protocol</li>
                        <li>• Avoidance of hyperextension movements</li>
                        <li>• Modified training techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">First-line treatment</Badge>
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
                        <li>• Postural correction techniques</li>
                        <li>• Sport-specific rehabilitation</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Essential component</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Bracing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Rigid lumbar orthosis (Boston brace)</li>
                        <li>• Limits spinal extension</li>
                        <li>• Promotes healing in acute defects</li>
                        <li>• Worn 23 hours daily for 3-6 months</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Acute defects</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Pain Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• NSAIDs for inflammation control</li>
                        <li>• Ice therapy for acute pain</li>
                        <li>• Heat therapy for muscle relaxation</li>
                        <li>• Activity-specific pain relief</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Symptomatic relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Bone Stimulation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Electrical bone stimulation</li>
                        <li>• Ultrasound bone healing</li>
                        <li>• Promotes fracture healing</li>
                        <li>• Non-invasive treatment option</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Healing enhancement</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Nutritional Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Adequate calcium and vitamin D</li>
                        <li>• Protein for bone healing</li>
                        <li>• Anti-inflammatory diet</li>
                        <li>• Hydration maintenance</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Supportive care</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain relief, fracture healing (in acute cases), prevention of progression
                    to spondylolisthesis, and safe return to athletic activities with proper biomechanics.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Pars Injection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Direct injection of corticosteroids and local anesthetic
                        into the pars defect for diagnostic and therapeutic purposes.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Confirms pars defect as pain source</li>
                          <li>• Provides temporary pain relief</li>
                          <li>• Reduces local inflammation</li>
                          <li>• Facilitates physical therapy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Diagnostic and therapeutic</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Bone Marrow Concentrate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of concentrated bone marrow cells to promote
                        healing in acute pars defects with good healing potential.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Acute pars stress reactions</li>
                          <li>• Recent fractures with bone marrow edema</li>
                          <li>• Young patients with good healing potential</li>
                          <li>• Failed conservative treatment</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Regenerative therapy</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Platelet-Rich Plasma (PRP)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of concentrated platelets and growth factors
                        to enhance healing in pars defects and surrounding tissues.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Potential Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Enhanced bone healing</li>
                          <li>• Reduced inflammation</li>
                          <li>• Improved tissue regeneration</li>
                          <li>• Minimal side effects</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Emerging therapy</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Percutaneous Screw Fixation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Minimally invasive placement of screws across the pars
                        defect to provide stability and promote healing.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Indications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Failed conservative treatment</li>
                          <li>• Acute defects in young athletes</li>
                          <li>• Unilateral defects with good bone quality</li>
                          <li>• Desire for faster return to sport</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Minimally invasive surgery</Badge>
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
                        <CardTitle className="text-lg">Pars Repair</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Direct repair of the pars defect using various techniques
                          to restore anatomical continuity and preserve motion.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Techniques:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Buck's technique (wire and bone graft)</li>
                              <li>• Scott's technique (screw fixation)</li>
                              <li>• Morscher technique (hook and screw)</li>
                              <li>• Kakiuchi technique (pedicle screw)</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Motion preservation</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Spinal Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Fusion of affected vertebrae when pars repair is not
                          feasible or when spondylolisthesis is present.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Approaches:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Posterolateral fusion</li>
                              <li>• Posterior lumbar interbody fusion (PLIF)</li>
                              <li>• Transforaminal lumbar interbody fusion (TLIF)</li>
                              <li>• Anterior lumbar interbody fusion (ALIF)</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Definitive stabilization</Badge>
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
                            <li>• Persistent pain affecting quality of life</li>
                            <li>• Progressive spondylolisthesis</li>
                            <li>• Neurological symptoms</li>
                            <li>• Young athlete with acute defect</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 85-95% good to excellent results</li>
                            <li>• High fusion rates with modern techniques</li>
                            <li>• Return to sports in most cases</li>
                            <li>• Long-term pain relief</li>
                            <li>• Prevention of progression</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Pars defect surgical repair"
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
                        <li>• Age and activity level of patient</li>
                        <li>• Defect characteristics and healing potential</li>
                        <li>• Presence of spondylolisthesis</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Neurological involvement</li>
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
                      <li>• 85-90% improvement with comprehensive conservative care</li>
                      <li>• Activity modification highly effective for symptom relief</li>
                      <li>• Bracing shows 60-80% healing rates in acute defects</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Pars injections: 70-85% short-term relief</li>
                      <li>• Bone marrow concentrate: 75-90% healing rates</li>
                      <li>• Percutaneous screw fixation: 85-95% fusion rates</li>
                      <li>• Regenerative therapies show promising results</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Pars repair: 85-95% excellent results</li>
                      <li>• Spinal fusion: 90-95% good outcomes</li>
                      <li>• High return-to-sport rates in young athletes</li>
                      <li>• Durable long-term pain relief and function</li>
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
                      <li>• Young age at presentation (&lt;18 years)</li>
                      <li>• Acute onset with bone marrow edema on MRI</li>
                      <li>• Unilateral defects</li>
                      <li>• Early diagnosis and treatment initiation</li>
                      <li>• Good compliance with activity restrictions</li>
                      <li>• Absence of spondylolisthesis</li>
                      <li>• Strong family and social support</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Chronic defects with established fibrous union</li>
                      <li>• Bilateral pars defects</li>
                      <li>• Associated spondylolisthesis</li>
                      <li>• Delayed diagnosis and treatment</li>
                      <li>• Poor compliance with treatment recommendations</li>
                      <li>• Multiple previous failed treatments</li>
                      <li>• Psychological factors and depression</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Long-term Management Keys
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Success depends on early recognition, appropriate activity modification,
                      comprehensive rehabilitation, and gradual return to activities with
                      proper biomechanics and injury prevention strategies.
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
                    Proper Training Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implement proper training methods to reduce stress on the pars interarticularis.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Gradual progression of training intensity</li>
                    <li>• Proper technique instruction</li>
                    <li>• Adequate rest and recovery periods</li>
                    <li>• Cross-training to reduce repetitive stress</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Core Strengthening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop strong core muscles to support the spine and reduce stress on the pars.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Abdominal strengthening exercises</li>
                    <li>• Back extensor muscle training</li>
                    <li>• Hip flexor and hamstring flexibility</li>
                    <li>• Pelvic stabilization exercises</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Biomechanical Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Regular assessment of movement patterns and biomechanics in young athletes.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Sport-specific movement analysis</li>
                    <li>• Correction of faulty movement patterns</li>
                    <li>• Equipment and technique modifications</li>
                    <li>• Regular biomechanical screening</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-500" />
                    Load Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Careful management of training loads and activity levels in young athletes.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Monitoring training volume and intensity</li>
                    <li>• Planned rest and recovery periods</li>
                    <li>• Seasonal periodization of training</li>
                    <li>• Early recognition of overuse symptoms</li>
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
                    Educate athletes, coaches, and parents about early warning signs.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Recognition of back pain patterns</li>
                    <li>• Understanding of risk factors</li>
                    <li>• Prompt medical evaluation</li>
                    <li>• Importance of early intervention</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-teal-500" />
                    Nutritional Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ensure adequate nutrition for bone health and healing in young athletes.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Adequate calcium and vitamin D intake</li>
                    <li>• Sufficient protein for bone formation</li>
                    <li>• Balanced nutrition for growth</li>
                    <li>• Hydration maintenance</li>
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
                Take Our Pars Defects Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                pars defects (spondylolysis) and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick Pars Defects Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Lower back pain in young athlete
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain worse with back extension
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain during sports activities
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Relief with forward bending
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Participation in extension sports
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Positive single-leg extension test
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Age 10-18 years
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Family history of spondylolysis
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for pars defects.
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
                  <Disc className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Spondylolisthesis</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Comprehensive guide to spondylolisthesis and vertebral slippage
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/spondylolisthesis">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Activity className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Sports Medicine</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Specialized care for athletic spine injuries and performance
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/expertise">Sports Spine Care</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Brain className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Minimally Invasive Surgery</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Advanced surgical techniques for pars defect repair
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/expertise">Surgical Options</Link>
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

ParsDefects.displayName = 'ParsDefects';

export default ParsDefects;
