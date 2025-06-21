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
  Move
} from "lucide-react";

const Spondylosis: React.FC = () => {
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
    <StandardPageLayout title="Spondylosis - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/cervical-spondylosis.jpg"
              alt="Spondylosis anatomy"
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
                Spondylosis: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding spondylosis: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced interventional procedures for spinal degeneration and arthritis.
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
                  <p className="text-sm text-muted-foreground">85% over age 60</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">40+ years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Gender</h3>
                  <p className="text-sm text-muted-foreground">Equal distribution</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Treatment Success</h3>
                  <p className="text-sm text-muted-foreground">80-90% improvement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Spondylosis Section */}
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
                  What is Spondylosis?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Spondylosis is a general term for age-related wear and tear affecting the spinal discs, 
                  joints, and bones. It's a form of arthritis that specifically affects the spine, 
                  causing the gradual breakdown of cartilage in the joints and discs between vertebrae.
                </p>
                <p className="text-muted-foreground mb-6">
                  This degenerative condition can occur in any part of the spine but is most common 
                  in the cervical (neck) and lumbar (lower back) regions. As we age, the spinal discs 
                  lose water content and elasticity, while bone spurs may develop as the body attempts 
                  to stabilize the degenerating spine.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Progressive degenerative condition affecting spinal structures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Natural aging process that can be accelerated by various factors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often asymptomatic but can cause significant pain and disability</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/cervical-spondylosis.jpg"
                  alt="Spondylosis anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing spinal degeneration and spondylotic changes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spine Anatomy & Spondylosis Types Section */}
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
              Understanding Spine Anatomy & Spondylosis Types
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
                  Spinal Anatomy
                </TabsTrigger>
                <TabsTrigger value="types" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Spondylosis Types
                </TabsTrigger>
                <TabsTrigger value="pathophysiology" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Degenerative Process
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Spinal Anatomy Basics</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Vertebrae</h4>
                        <p className="text-sm text-muted-foreground">
                          The spine consists of 33 vertebrae divided into cervical (7), thoracic (12),
                          lumbar (5), sacral (5 fused), and coccygeal (4 fused) regions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Intervertebral Discs</h4>
                        <p className="text-sm text-muted-foreground">
                          Fibrocartilaginous structures between vertebrae that act as shock absorbers
                          and allow spinal movement while maintaining stability.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Facet Joints</h4>
                        <p className="text-sm text-muted-foreground">
                          Synovial joints between adjacent vertebrae that guide spinal motion
                          and provide stability during movement.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Ligaments and Muscles</h4>
                        <p className="text-sm text-muted-foreground">
                          Supporting structures that provide stability, limit excessive motion,
                          and maintain proper spinal alignment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/spinal-anatomy.jpg"
                      alt="Detailed spinal anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="types" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Types of Spondylosis</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Cervical Spondylosis
                      </h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Affects neck vertebrae (C1-C7)</li>
                        <li>• Most common type</li>
                        <li>• Neck pain and stiffness</li>
                        <li>• May cause arm symptoms</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Thoracic Spondylosis
                      </h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Affects mid-back (T1-T12)</li>
                        <li>• Less common due to rib support</li>
                        <li>• Upper back pain and stiffness</li>
                        <li>• May affect breathing</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Lumbar Spondylosis
                      </h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Affects lower back (L1-L5)</li>
                        <li>• Second most common</li>
                        <li>• Lower back pain and stiffness</li>
                        <li>• May cause leg symptoms</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Degenerative Changes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Disc Degeneration</h5>
                        <p className="text-sm text-muted-foreground">Loss of disc height and water content</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Osteophyte Formation</h5>
                        <p className="text-sm text-muted-foreground">Bone spurs develop around joints</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Facet Joint Arthritis</h5>
                        <p className="text-sm text-muted-foreground">Cartilage breakdown in spinal joints</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Degenerative Process in Spondylosis</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Primary Changes</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Disc Dehydration</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Loss of proteoglycans and water content</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Cartilage Breakdown</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Facet joint cartilage deterioration</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Ligament Changes</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Thickening and calcification of ligaments</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Secondary Adaptations</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Osteophyte Formation</h5>
                          <p className="text-sm text-muted-foreground">Body's attempt to stabilize degenerated segments</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Spinal Stenosis</h5>
                          <p className="text-sm text-muted-foreground">Narrowing of spinal canal and nerve passages</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Instability</h5>
                          <p className="text-sm text-muted-foreground">Abnormal movement between vertebrae</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Inflammation</h5>
                          <p className="text-sm text-muted-foreground">Chronic inflammatory response to degeneration</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/spondylosis-progression.jpg"
                          alt="Spondylosis degenerative progression"
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
                      <Clock className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Natural Aging Process</h4>
                        <p className="text-sm text-muted-foreground">
                          The primary cause of spondylosis is the natural aging process,
                          which leads to gradual wear and tear of spinal structures over time.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Disc className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Disc Degeneration</h4>
                        <p className="text-sm text-muted-foreground">
                          Loss of water content and elasticity in intervertebral discs
                          leads to decreased disc height and altered spinal mechanics.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Mechanical Stress</h4>
                        <p className="text-sm text-muted-foreground">
                          Repetitive loading, poor posture, and biomechanical stress
                          accelerate the degenerative process in spinal structures.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Trauma and Injury</h4>
                        <p className="text-sm text-muted-foreground">
                          Previous spinal injuries, fractures, or trauma can accelerate
                          degenerative changes and lead to premature spondylosis.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Genetic Factors</h4>
                        <p className="text-sm text-muted-foreground">
                          Hereditary factors influence the rate and pattern of spinal
                          degeneration, with some individuals more predisposed to spondylosis.
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
                        Poor posture and ergonomics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Sedentary lifestyle
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Obesity and excess weight
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Smoking and tobacco use
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Heavy lifting and manual labor
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
                        Gender (slightly more common in men)
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
                        Certain medical conditions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Occupational Risk Factors
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Jobs involving heavy lifting, prolonged sitting, vibration exposure,
                    or repetitive bending and twisting motions significantly increase
                    the risk of developing spondylosis at an earlier age.
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
              {/* Cervical Spondylosis Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Cervical Spondylosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Neck region symptoms</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Neck pain and stiffness</li>
                        <li>• Headaches (especially occipital)</li>
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
                        <li>• Arm numbness and tingling</li>
                        <li>• Hand weakness and clumsiness</li>
                        <li>• Muscle atrophy (advanced cases)</li>
                        <li>• Balance problems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thoracic Spondylosis Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Thoracic Spondylosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Mid-back symptoms</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        Primary Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Upper and mid-back pain</li>
                        <li>• Chest wall pain</li>
                        <li>• Rib pain and tenderness</li>
                        <li>• Breathing difficulties</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-purple-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced spinal flexibility</li>
                        <li>• Difficulty with rotation</li>
                        <li>• Postural changes</li>
                        <li>• Activity limitations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lumbar Spondylosis Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Lumbar Spondylosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Lower back symptoms</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        Pain Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Lower back pain and stiffness</li>
                        <li>• Hip and buttock pain</li>
                        <li>• Leg pain (sciatica)</li>
                        <li>• Morning stiffness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Move className="h-4 w-4 text-green-500" />
                        Mobility Issues
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced range of motion</li>
                        <li>• Difficulty bending forward</li>
                        <li>• Walking limitations</li>
                        <li>• Claudication symptoms</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Common Symptoms Across All Types */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Common Symptoms Across All Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">General Symptoms:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Progressive pain and stiffness</li>
                        <li>• Reduced spinal flexibility</li>
                        <li>• Muscle spasm and tension</li>
                        <li>• Fatigue and weakness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Advanced Symptoms:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Nerve compression symptoms</li>
                        <li>• Spinal stenosis manifestations</li>
                        <li>• Postural deformities</li>
                        <li>• Functional disability</li>
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
                      aggravating factors, and functional limitations.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain characteristics and distribution</li>
                      <li>• Functional limitations and disability</li>
                      <li>• Previous treatments and responses</li>
                      <li>• Occupational and lifestyle factors</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spinal alignment and posture assessment</li>
                      <li>• Range of motion testing</li>
                      <li>• Neurological examination</li>
                      <li>• Muscle strength and reflexes</li>
                      <li>• Palpation for tenderness and spasm</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Functional Assessment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Activities of daily living evaluation</li>
                      <li>• Work capacity assessment</li>
                      <li>• Quality of life measures</li>
                      <li>• Pain and disability questionnaires</li>
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
                          Initial imaging to assess bone structure, alignment,
                          and degenerative changes in the spine.
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
                          Detailed soft tissue imaging to evaluate disc degeneration,
                          nerve compression, and spinal stenosis.
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
                          Excellent bone detail for assessing osteophytes,
                          facet joint arthritis, and spinal stenosis.
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
                          EMG/NCS for nerve function, bone scans for inflammation,
                          and dynamic imaging for instability assessment.
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
                    Diagnostic Criteria for Spondylosis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Age-related onset (typically 40+ years)</li>
                        <li>• Progressive pain and stiffness</li>
                        <li>• Reduced spinal mobility</li>
                        <li>• Functional limitations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Findings:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Disc space narrowing</li>
                        <li>• Osteophyte formation</li>
                        <li>• Facet joint arthritis</li>
                        <li>• Ligamentum flavum thickening</li>
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
                        <li>• Strengthening exercises</li>
                        <li>• Flexibility and mobility training</li>
                        <li>• Postural correction techniques</li>
                        <li>• Manual therapy and mobilization</li>
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
                        <li>• NSAIDs for inflammation</li>
                        <li>• Muscle relaxants for spasm</li>
                        <li>• Analgesics for pain relief</li>
                        <li>• Topical pain medications</li>
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
                        <li>• Ergonomic workplace adjustments</li>
                        <li>• Proper lifting techniques</li>
                        <li>• Activity pacing and breaks</li>
                        <li>• Weight management support</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Lifestyle changes</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Exercise Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Low-impact cardiovascular exercise</li>
                        <li>• Core strengthening programs</li>
                        <li>• Flexibility and stretching routines</li>
                        <li>• Aquatic therapy programs</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Long-term management</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Heat and Cold Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Heat therapy for muscle relaxation</li>
                        <li>• Cold therapy for inflammation</li>
                        <li>• Contrast therapy protocols</li>
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
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain reduction, improved function, prevention of progression,
                    and enhancement of quality of life through targeted exercises and lifestyle modifications.
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
                        Injection of corticosteroids and local anesthetic into
                        arthritic facet joints to reduce inflammation and pain.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Targeted pain relief</li>
                          <li>• Diagnostic confirmation</li>
                          <li>• Improved mobility</li>
                          <li>• Facilitates physical therapy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">70-80% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Epidural Steroid Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of anti-inflammatory medication into the epidural
                        space to reduce nerve root inflammation and pain.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Nerve root compression</li>
                          <li>• Spinal stenosis symptoms</li>
                          <li>• Radicular pain relief</li>
                          <li>• Pre-surgical trial</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">60-75% success rate</Badge>
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
                        longer-lasting pain relief for facet arthropathy.
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
                      <CardTitle className="text-lg">Regenerative Medicine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Platelet-rich plasma (PRP) or stem cell therapy to promote
                        healing and reduce inflammation in degenerative tissues.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Potential Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Natural healing promotion</li>
                          <li>• Tissue regeneration</li>
                          <li>• Anti-inflammatory effects</li>
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
                        <CardTitle className="text-lg">Decompression Surgery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Removal of bone spurs, thickened ligaments, or disc material
                          to relieve pressure on nerves and spinal cord.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Procedures:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Laminectomy</li>
                              <li>• Laminotomy</li>
                              <li>• Foraminotomy</li>
                              <li>• Discectomy</li>
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
                          and provide stability in severely degenerated segments.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Approaches:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Anterior cervical discectomy and fusion</li>
                              <li>• Posterior lumbar interbody fusion</li>
                              <li>• Transforaminal lumbar interbody fusion</li>
                              <li>• Lateral lumbar interbody fusion</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Stabilization procedure</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Surgical Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Patient Selection Criteria:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Failed conservative treatment (6+ months)</li>
                            <li>• Significant functional impairment</li>
                            <li>• Progressive neurological deficits</li>
                            <li>• Severe spinal stenosis</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 70-90% good to excellent results</li>
                            <li>• Significant pain reduction</li>
                            <li>• Improved functional capacity</li>
                            <li>• High patient satisfaction</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Minimally invasive spine surgery"
                          className="w-full h-auto rounded-lg"
                          fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Decision Making
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Surgery reserved for severe cases</li>
                        <li>• Careful patient selection essential</li>
                        <li>• Multidisciplinary evaluation recommended</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• High success rates when appropriately selected</li>
                        <li>• Significant improvement in quality of life</li>
                        <li>• Durable long-term outcomes</li>
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
                      <li>• 70-85% improvement with comprehensive conservative care</li>
                      <li>• Physical therapy shows excellent results in most patients</li>
                      <li>• Exercise programs highly effective for long-term management</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Facet joint injections: 70-80% short-term relief</li>
                      <li>• Epidural injections: 60-75% improvement</li>
                      <li>• Radiofrequency ablation: 60-80% long-term relief</li>
                      <li>• Combination approaches often most effective</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Decompression surgery: 70-90% excellent results</li>
                      <li>• Spinal fusion: 75-85% good outcomes</li>
                      <li>• High patient satisfaction in appropriate candidates</li>
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
                      <li>• Early diagnosis and treatment initiation</li>
                      <li>• Mild to moderate degenerative changes</li>
                      <li>• Good response to initial conservative treatment</li>
                      <li>• Absence of significant neurological deficits</li>
                      <li>• Strong patient motivation and compliance</li>
                      <li>• Younger age at presentation</li>
                      <li>• Healthy lifestyle and activity level</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Advanced degenerative changes</li>
                      <li>• Multiple level involvement</li>
                      <li>• Significant spinal stenosis</li>
                      <li>• Progressive neurological deficits</li>
                      <li>• Poor compliance with treatment</li>
                      <li>• Comorbid medical conditions</li>
                      <li>• Psychological factors and depression</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Long-term Management Keys
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Success depends on early intervention, comprehensive treatment approach,
                      patient education, and ongoing maintenance of spinal health through
                      targeted exercises and lifestyle modifications.
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
                    Regular Exercise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain spinal health through regular exercise and physical activity.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Low-impact cardiovascular exercise</li>
                    <li>• Core strengthening programs</li>
                    <li>• Flexibility and stretching routines</li>
                    <li>• Weight-bearing activities</li>
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
                    <li>• Ergonomic workplace setup</li>
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
                    Adopt healthy lifestyle habits that support spinal health.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain healthy body weight</li>
                    <li>• Avoid smoking and tobacco use</li>
                    <li>• Balanced nutrition and hydration</li>
                    <li>• Adequate sleep and rest</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-500" />
                    Workplace Ergonomics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Optimize work environment to reduce spinal stress and strain.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Adjustable desk and chair setup</li>
                    <li>• Monitor positioning and height</li>
                    <li>• Regular movement breaks</li>
                    <li>• Supportive seating options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Risk Factor Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Address modifiable risk factors to slow degenerative progression.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Weight management programs</li>
                    <li>• Smoking cessation support</li>
                    <li>• Stress reduction techniques</li>
                    <li>• Medical condition management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-teal-500" />
                    Early Intervention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recognize early warning signs and seek prompt treatment.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Regular health screenings</li>
                    <li>• Early symptom recognition</li>
                    <li>• Prompt medical evaluation</li>
                    <li>• Preventive care programs</li>
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
                Take Our Spondylosis Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                spondylosis and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick Spondylosis Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Chronic neck or back pain
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Morning stiffness lasting &gt;30 minutes
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Reduced spinal flexibility
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain worse with activity
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Arm or leg numbness/tingling
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Muscle weakness or fatigue
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Age over 40 years
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          History of spinal injury
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for spondylosis.
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
                  <h3 className="font-semibold text-center mb-2">Spinal Stenosis</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Comprehensive guide to spinal stenosis and nerve compression
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/spinal-stenosis">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Activity className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Exercise Library</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Targeted exercises for spinal health and spondylosis management
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/exercise-library">View Exercises</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Brain className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Pain Management</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Advanced pain management techniques and interventional procedures
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

Spondylosis.displayName = 'Spondylosis';

export default Spondylosis;
