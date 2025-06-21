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

const PiriformisSyndrome: React.FC = () => {
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
    <StandardPageLayout title="Piriformis Syndrome - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/sciatica.jpg"
              alt="Piriformis syndrome anatomy"
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
                Piriformis Syndrome: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding piriformis syndrome: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced interventional procedures for piriformis muscle dysfunction and sciatic nerve compression.
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
                  <p className="text-sm text-muted-foreground">6-8% of sciatica cases</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">30-50 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Gender</h3>
                  <p className="text-sm text-muted-foreground">Women 6:1 ratio</p>
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

        {/* What is Piriformis Syndrome Section */}
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
                  What is Piriformis Syndrome?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Piriformis syndrome is a neuromuscular condition where the piriformis muscle, 
                  located deep in the buttock region, spasms or becomes tight and irritates 
                  the nearby sciatic nerve. This can cause pain, numbness, and tingling 
                  that radiates from the buttock down the leg, mimicking sciatica.
                </p>
                <p className="text-muted-foreground mb-6">
                  The piriformis muscle is a small, flat muscle that helps stabilize the hip 
                  joint and assists in rotating the thigh away from the body. When this muscle 
                  becomes inflamed, tight, or spasms, it can compress the sciatic nerve, 
                  leading to the characteristic symptoms of piriformis syndrome.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Deep hip muscle that stabilizes the pelvis during movement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Anatomical relationship with sciatic nerve creates compression risk</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often misdiagnosed as lumbar radiculopathy or sciatica</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/sciatica.jpg"
                  alt="Piriformis syndrome anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing piriformis muscle location and relationship to sciatic nerve
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Piriformis Muscle Anatomy & Pathophysiology Section */}
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
              Understanding Piriformis Muscle Anatomy & Dysfunction
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
                  Muscle Anatomy
                </TabsTrigger>
                <TabsTrigger value="biomechanics" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Function & Biomechanics
                </TabsTrigger>
                <TabsTrigger value="pathophysiology" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Dysfunction Process
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Piriformis Muscle Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Origin and Insertion</h4>
                        <p className="text-sm text-muted-foreground">
                          Originates from the anterior surface of the sacrum and inserts
                          on the greater trochanter of the femur, forming a key stabilizer
                          of the hip joint.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Anatomical Location</h4>
                        <p className="text-sm text-muted-foreground">
                          Located deep within the buttock, beneath the gluteus maximus,
                          running diagonally from the sacrum to the hip joint.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Sciatic Nerve Relationship</h4>
                        <p className="text-sm text-muted-foreground">
                          The sciatic nerve typically passes beneath the piriformis muscle,
                          though anatomical variations exist where the nerve may pass through
                          or above the muscle.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Innervation</h4>
                        <p className="text-sm text-muted-foreground">
                          Supplied by the nerve to piriformis (S1-S2) and sometimes
                          branches from the superior gluteal nerve, providing motor control.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/piriformis-muscle-anatomy.jpg"
                      alt="Detailed piriformis muscle anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="biomechanics" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Piriformis Muscle Function & Biomechanics</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Primary Functions
                        </h4>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• External rotation of the hip joint</li>
                          <li>• Hip abduction when hip is flexed</li>
                          <li>• Pelvic stabilization during walking</li>
                          <li>• Assists in maintaining upright posture</li>
                        </ul>
                      </Card>

                      <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          Movement Patterns
                        </h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Active during walking and running</li>
                          <li>• Stabilizes pelvis during single-leg stance</li>
                          <li>• Coordinates with other deep hip muscles</li>
                          <li>• Essential for rotational movements</li>
                        </ul>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                          Anatomical Variations
                        </h4>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                          <li>• Type A: Nerve passes below muscle (85%)</li>
                          <li>• Type B: Nerve passes through muscle (15%)</li>
                          <li>• Type C: Nerve passes above muscle (rare)</li>
                          <li>• Variations affect compression risk</li>
                        </ul>
                      </Card>

                      <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                          Muscle Fiber Types
                        </h4>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Mixed fiber composition for endurance</li>
                          <li>• Postural stabilization requirements</li>
                          <li>• Susceptible to overuse and fatigue</li>
                          <li>• Responds well to targeted strengthening</li>
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Dysfunction Mechanisms in Piriformis Syndrome</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Primary Dysfunction Types</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Muscle Spasm</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Involuntary muscle contraction causing nerve compression and pain</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Muscle Tightness</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Chronic shortening and tension reducing flexibility and function</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Inflammation</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Muscle inflammation causing swelling and nerve irritation</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Trigger Points</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">Hyperirritable spots causing referred pain and dysfunction</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Pain Generation Mechanisms</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Direct Nerve Compression</h5>
                          <p className="text-sm text-muted-foreground">Mechanical pressure on sciatic nerve causing neurological symptoms</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Referred Pain</h5>
                          <p className="text-sm text-muted-foreground">Pain patterns radiating to buttock, hip, and posterior thigh</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Muscle Dysfunction</h5>
                          <p className="text-sm text-muted-foreground">Altered movement patterns and compensatory mechanisms</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Neurogenic Inflammation</h5>
                          <p className="text-sm text-muted-foreground">Nerve irritation leading to inflammatory cascade</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/piriformis-syndrome.jpg"
                          alt="Piriformis syndrome mechanisms"
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
                        <h4 className="font-semibold mb-2">Overuse and Repetitive Stress</h4>
                        <p className="text-sm text-muted-foreground">
                          Excessive running, cycling, or activities involving repetitive hip rotation
                          can lead to piriformis muscle fatigue, spasm, and inflammation.
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
                          Direct trauma to the buttock region, falls, or sudden movements
                          can cause piriformis muscle injury and subsequent nerve compression.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Settings className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Biomechanical Dysfunction</h4>
                        <p className="text-sm text-muted-foreground">
                          Hip muscle imbalances, poor posture, or altered movement patterns
                          can place excessive stress on the piriformis muscle.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Anatomical Variations</h4>
                        <p className="text-sm text-muted-foreground">
                          Congenital variations in sciatic nerve pathway through or around
                          the piriformis muscle increase compression risk.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Prolonged Sitting</h4>
                        <p className="text-sm text-muted-foreground">
                          Extended periods of sitting, especially on hard surfaces,
                          can cause piriformis muscle tightness and irritation.
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
                        Poor hip flexibility and strength
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Inadequate warm-up before exercise
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Prolonged sitting posture
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Sudden increase in activity level
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Poor running or exercise technique
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Muscle imbalances around hip
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Non-Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Female gender (6:1 ratio)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age (peak 30-50 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Anatomical nerve variations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Hip joint anatomy
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous hip or back injury
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Activity-Specific Risk Factors
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Runners, cyclists, dancers, and athletes involved in sports requiring
                    frequent direction changes or hip rotation are at higher risk for
                    developing piriformis syndrome.
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
                  <p className="text-center text-sm text-muted-foreground">Core manifestations of piriformis syndrome</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Deep, aching pain in the buttock region</li>
                        <li>• Pain radiating down the posterior thigh</li>
                        <li>• Sharp, shooting pain with certain movements</li>
                        <li>• Pain worse with sitting, especially on hard surfaces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Numbness and tingling in buttock and leg</li>
                        <li>• Weakness in hip external rotation</li>
                        <li>• Burning sensation along sciatic nerve path</li>
                        <li>• Pins and needles in foot (occasionally)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Move className="h-4 w-4 text-green-500" />
                        Movement-Related Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pain with hip internal rotation</li>
                        <li>• Difficulty climbing stairs or hills</li>
                        <li>• Pain with prolonged walking or running</li>
                        <li>• Stiffness after periods of inactivity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Secondary Symptoms</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Associated manifestations and complications</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-purple-500" />
                        Functional Limitations
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Difficulty sitting for extended periods</li>
                        <li>• Problems with driving long distances</li>
                        <li>• Sleep disturbances due to pain</li>
                        <li>• Reduced exercise tolerance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Network className="h-4 w-4 text-orange-500" />
                        Compensatory Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Altered gait patterns and limping</li>
                        <li>• Hip muscle weakness and imbalance</li>
                        <li>• Secondary lower back pain</li>
                        <li>• Knee and ankle compensation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-teal-500" />
                        Aggravating Factors
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Prolonged sitting or driving</li>
                        <li>• Running or walking on uneven surfaces</li>
                        <li>• Hip internal rotation movements</li>
                        <li>• Climbing stairs or inclines</li>
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
                        <li>• Deep buttock pain with radiation</li>
                        <li>• Pain worse with sitting and hip internal rotation</li>
                        <li>• Positive FAIR test (Flexion, Adduction, Internal Rotation)</li>
                        <li>• Tenderness over piriformis muscle</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Distinguishing Features:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Pain typically doesn't extend below knee</li>
                        <li>• No back pain or spinal tenderness</li>
                        <li>• Normal straight leg raise test</li>
                        <li>• Relief with piriformis stretching</li>
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
                      Detailed assessment of pain characteristics, onset, aggravating factors,
                      and functional limitations specific to piriformis syndrome.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain location and radiation patterns</li>
                      <li>• Relationship to activities and positions</li>
                      <li>• History of trauma or overuse</li>
                      <li>• Previous treatments and responses</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Palpation of piriformis muscle and trigger points</li>
                      <li>• Assessment of hip range of motion</li>
                      <li>• Evaluation of muscle strength and flexibility</li>
                      <li>• Neurological examination of lower extremity</li>
                      <li>• Gait analysis and functional movement assessment</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Provocative Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• FAIR test (Flexion, Adduction, Internal Rotation)</li>
                      <li>• Freiberg's test (passive internal rotation)</li>
                      <li>• Pace test (resisted abduction and external rotation)</li>
                      <li>• Beatty test (side-lying hip flexion)</li>
                      <li>• Straight leg raise test (typically negative)</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Imaging and Diagnostic Tests</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI (Magnetic Resonance Imaging)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          High-resolution imaging to assess piriformis muscle and
                          rule out other causes of sciatic pain.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Muscle inflammation and edema detection</li>
                          <li>• Anatomical variations assessment</li>
                          <li>• Exclusion of lumbar pathology</li>
                          <li>• Sciatic nerve pathway evaluation</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Gold Standard Imaging</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Microscope className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Ultrasound</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Dynamic imaging to assess muscle function and
                          guide therapeutic interventions.
                        </p>
                        <Badge variant="outline">Real-time Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Electromyography (EMG)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Nerve conduction studies to assess sciatic nerve function
                          and rule out other neurological conditions.
                        </p>
                        <Badge variant="outline">Neurological Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Diagnostic Injection</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Ultrasound or fluoroscopy-guided injection of local anesthetic
                          into the piriformis muscle for diagnostic confirmation.
                        </p>
                        <Badge variant="outline">Diagnostic Confirmation</Badge>
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
                    Diagnostic Criteria for Piriformis Syndrome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Deep buttock pain with radiation</li>
                        <li>• Pain worse with sitting and hip internal rotation</li>
                        <li>• Positive provocative tests (≥2 positive)</li>
                        <li>• Tenderness over piriformis muscle</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Exclusion Criteria:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Normal lumbar spine imaging</li>
                        <li>• Negative straight leg raise test</li>
                        <li>• No neurological deficits</li>
                        <li>• Response to piriformis-specific treatment</li>
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
                        <li>• Piriformis stretching exercises</li>
                        <li>• Hip strengthening programs</li>
                        <li>• Manual therapy and trigger point release</li>
                        <li>• Movement pattern retraining</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">First-line treatment</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Activity Modification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Avoid prolonged sitting</li>
                        <li>• Modify aggravating activities</li>
                        <li>• Use of cushions and supports</li>
                        <li>• Gradual return to activities</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Immediate relief</Badge>
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
                        <li>• Neuropathic pain medications</li>
                        <li>• Topical analgesics</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Symptomatic relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Manual Therapies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Deep tissue massage</li>
                        <li>• Myofascial release techniques</li>
                        <li>• Trigger point therapy</li>
                        <li>• Osteopathic manipulation</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Heat and Cold Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Ice for acute inflammation</li>
                        <li>• Heat for muscle relaxation</li>
                        <li>• Contrast therapy protocols</li>
                        <li>• Therapeutic ultrasound</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Adjunctive therapy</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Exercise Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Specific piriformis stretches</li>
                        <li>• Hip flexor stretching</li>
                        <li>• Core stabilization exercises</li>
                        <li>• Gradual strengthening program</li>
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
                    The primary goals are pain reduction, muscle relaxation, improved flexibility,
                    and restoration of normal movement patterns through targeted exercises and lifestyle modifications.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Piriformis Muscle Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ultrasound or fluoroscopy-guided injection of corticosteroids and local anesthetic
                        directly into the piriformis muscle for both diagnosis and treatment.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Targeted anti-inflammatory effect</li>
                          <li>• Diagnostic confirmation</li>
                          <li>• Immediate pain relief potential</li>
                          <li>• Can be repeated if effective</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">85-90% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Botulinum Toxin Injection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of botulinum toxin into the piriformis muscle to reduce
                        muscle spasm and tension, providing longer-lasting relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting muscle relaxation (3-6 months)</li>
                          <li>• Reduces muscle spasm and tension</li>
                          <li>• Allows for effective physical therapy</li>
                          <li>• Minimal systemic side effects</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">75-85% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Dry Needling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Insertion of thin needles into trigger points within the piriformis muscle
                        to release tension and improve muscle function.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Trigger point deactivation</li>
                          <li>• Improved muscle flexibility</li>
                          <li>• Enhanced blood flow</li>
                          <li>• Minimal side effects</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Adjunctive therapy</Badge>
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
                        and reduce inflammation in the piriformis muscle.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Potential Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Natural healing promotion</li>
                          <li>• Anti-inflammatory effects</li>
                          <li>• Tissue regeneration potential</li>
                          <li>• Minimal adverse reactions</li>
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
                        <CardTitle className="text-lg">Piriformis Muscle Release</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical division or lengthening of the piriformis muscle to relieve
                          compression on the sciatic nerve in severe, refractory cases.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Severe, persistent symptoms</li>
                              <li>• Failed conservative and interventional treatment</li>
                              <li>• Significant functional impairment</li>
                              <li>• Confirmed piriformis syndrome diagnosis</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Last resort treatment</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Endoscopic Piriformis Release</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Minimally invasive endoscopic technique to release the piriformis muscle
                          with smaller incisions and reduced recovery time.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Advantages:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Smaller incisions</li>
                              <li>• Reduced tissue trauma</li>
                              <li>• Faster recovery</li>
                              <li>• Lower complication rates</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Modern approach</Badge>
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
                            <li>• Confirmed piriformis syndrome diagnosis</li>
                            <li>• Failed 6+ months conservative treatment</li>
                            <li>• Positive response to diagnostic injections</li>
                            <li>• Absence of psychological contraindications</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 70-90% good to excellent results</li>
                            <li>• Significant pain reduction</li>
                            <li>• Improved functional capacity</li>
                            <li>• High patient satisfaction rates</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Minimally invasive piriformis surgery"
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
                        <li>• Surgery reserved for severe, refractory cases</li>
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
                      <li>• 85-95% improvement with comprehensive conservative care</li>
                      <li>• Physical therapy shows excellent results in most patients</li>
                      <li>• Stretching and strengthening programs highly effective</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Piriformis injections: 85-90% short-term relief</li>
                      <li>• Botulinum toxin: 75-85% long-term improvement</li>
                      <li>• Dry needling: Effective adjunctive therapy</li>
                      <li>• Combination approaches often most effective</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Piriformis release: 70-90% excellent results</li>
                      <li>• Endoscopic techniques show superior outcomes</li>
                      <li>• High patient satisfaction in appropriate candidates</li>
                      <li>• Durable long-term pain relief</li>
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
                      <li>• Acute onset (vs. chronic dysfunction)</li>
                      <li>• Good response to initial conservative treatment</li>
                      <li>• Absence of anatomical nerve variations</li>
                      <li>• Strong patient motivation and compliance</li>
                      <li>• Younger age at presentation</li>
                      <li>• Single-sided involvement</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Chronic pain duration (&gt;6 months)</li>
                      <li>• Multiple previous failed treatments</li>
                      <li>• Concurrent hip or back pathology</li>
                      <li>• Anatomical nerve variations</li>
                      <li>• Significant psychological distress</li>
                      <li>• Poor compliance with exercise programs</li>
                      <li>• Work-related or compensation claims</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Long-term Management Keys
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Success depends on accurate diagnosis, appropriate treatment selection,
                      patient education, and ongoing maintenance of hip flexibility and strength
                      through targeted exercises and lifestyle modifications.
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
                    Hip Flexibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain optimal hip flexibility to prevent piriformis muscle tightness and dysfunction.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Regular piriformis stretching</li>
                    <li>• Hip flexor stretching</li>
                    <li>• IT band flexibility exercises</li>
                    <li>• Dynamic warm-up routines</li>
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
                    Learn and practice correct movement patterns to protect the piriformis muscle during activities.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Proper sitting posture</li>
                    <li>• Ergonomic workplace setup</li>
                    <li>• Safe lifting techniques</li>
                    <li>• Correct running form</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Lifestyle Modifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Adopt healthy lifestyle habits that support overall hip and pelvic health.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Avoid prolonged sitting</li>
                    <li>• Regular movement breaks</li>
                    <li>• Maintain healthy body weight</li>
                    <li>• Stress management techniques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Move className="h-5 w-5 text-purple-500" />
                    Strengthening Exercises
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop balanced hip muscle strength to prevent piriformis overuse and dysfunction.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Hip abductor strengthening</li>
                    <li>• Core stabilization exercises</li>
                    <li>• Glute strengthening programs</li>
                    <li>• Progressive resistance training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Activity Modification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recognize and modify activities that may increase piriformis syndrome risk.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Gradual activity progression</li>
                    <li>• Proper warm-up and cool-down</li>
                    <li>• Cross-training to avoid overuse</li>
                    <li>• Listen to body warning signs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-teal-500" />
                    Exercise-Specific Prevention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Special considerations for athletes and active individuals to prevent piriformis syndrome.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Sport-specific conditioning</li>
                    <li>• Proper equipment and footwear</li>
                    <li>• Regular biomechanical assessment</li>
                    <li>• Professional coaching guidance</li>
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
                Take Our Piriformis Syndrome Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                piriformis syndrome and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick Piriformis Syndrome Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Deep buttock pain
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain radiating down the back of thigh
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain worse with sitting
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain with hip internal rotation
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Numbness or tingling in leg
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Difficulty climbing stairs
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain relief with stretching
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          History of running or cycling
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for piriformis syndrome.
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
                  <h3 className="font-semibold text-center mb-2">Sciatica</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Comprehensive guide to sciatica causes and treatments
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/sciatica">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Activity className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Exercise Library</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Targeted exercises for hip and piriformis muscle health
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
                    Advanced pain management techniques and strategies
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

PiriformisSyndrome.displayName = 'PiriformisSyndrome';

export default PiriformisSyndrome;
