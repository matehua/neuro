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
  Network
} from "lucide-react";

const Radiculopathy: React.FC = () => {
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
    <StandardPageLayout title="Radiculopathy - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/cervical-radiculopathy.jpg"
              alt="Radiculopathy nerve anatomy"
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
                Radiculopathy: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding radiculopathy: nerve root compression, causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced surgical interventions for cervical, thoracic, and lumbar radiculopathy.
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
                  <p className="text-sm text-muted-foreground">3.5 per 1,000 annually</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">50-54 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Most Common</h3>
                  <p className="text-sm text-muted-foreground">Cervical (C6-C7)</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Recovery Rate</h3>
                  <p className="text-sm text-muted-foreground">75-90% with treatment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Radiculopathy Section */}
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
                  What is Radiculopathy?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Radiculopathy is a condition that occurs when a nerve root in the spine becomes compressed, 
                  irritated, or inflamed. This compression can cause pain, numbness, tingling, and weakness 
                  that radiates along the path of the affected nerve.
                </p>
                <p className="text-muted-foreground mb-6">
                  The term "radiculopathy" comes from "radix" (meaning root) and "pathy" (meaning disease). 
                  It can affect any level of the spine - cervical (neck), thoracic (mid-back), or lumbar (lower back) - 
                  with symptoms appearing in the corresponding areas of the body served by those nerve roots.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Affects specific nerve root distributions (dermatomes)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Can cause both sensory and motor symptoms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often follows specific anatomical patterns</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/cervical-radiculopathy.jpg"
                  alt="Radiculopathy nerve root compression illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Nerve root compression showing typical radiculopathy pattern with radiating symptoms
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
              Types of Radiculopathy & Nerve Root Anatomy
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
                  Types by Location
                </TabsTrigger>
                <TabsTrigger value="anatomy" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Nerve Root Anatomy
                </TabsTrigger>
                <TabsTrigger value="dermatomes" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Dermatome Patterns
                </TabsTrigger>
              </TabsList>

              <TabsContent value="types" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cervical Radiculopathy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Compression of nerve roots in the neck region (C1-C8). Most commonly affects
                        C6 and C7 nerve roots, causing arm and hand symptoms.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Common Symptoms:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Neck pain radiating to shoulder/arm</li>
                          <li>• Numbness in fingers</li>
                          <li>• Weakness in specific muscle groups</li>
                          <li>• Reduced reflexes</li>
                        </ul>
                      </div>
                      <Badge variant="secondary" className="mt-3">Most Common</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Thoracic Radiculopathy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Compression of nerve roots in the mid-back region (T1-T12). Less common
                        but can cause chest wall pain and intercostal neuralgia.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Common Symptoms:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Band-like chest pain</li>
                          <li>• Rib pain (intercostal neuralgia)</li>
                          <li>• Abdominal wall pain</li>
                          <li>• Sensory changes in trunk</li>
                        </ul>
                      </div>
                      <Badge variant="outline" className="mt-3">Least Common</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lumbar Radiculopathy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Compression of nerve roots in the lower back (L1-S1). Often causes
                        sciatica when L4, L5, or S1 nerve roots are affected.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Common Symptoms:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Lower back pain to leg</li>
                          <li>• Sciatica (L4-S1 roots)</li>
                          <li>• Foot drop (L5 root)</li>
                          <li>• Weakness in leg muscles</li>
                        </ul>
                      </div>
                      <Badge variant="secondary" className="mt-3">Second Most Common</Badge>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Nerve Root Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Dorsal Root (Sensory)</h4>
                        <p className="text-sm text-muted-foreground">
                          Carries sensory information from the body to the spinal cord. Contains the
                          dorsal root ganglion where sensory nerve cell bodies are located.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Ventral Root (Motor)</h4>
                        <p className="text-sm text-muted-foreground">
                          Carries motor commands from the spinal cord to muscles. Contains axons
                          of motor neurons whose cell bodies are in the spinal cord.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Mixed Spinal Nerve</h4>
                        <p className="text-sm text-muted-foreground">
                          Formed by the joining of dorsal and ventral roots. Contains both sensory
                          and motor fibers that innervate specific body regions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Neural Foramen</h4>
                        <p className="text-sm text-muted-foreground">
                          Opening between vertebrae where nerve roots exit the spinal canal.
                          Common site of compression in radiculopathy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/nerve-root-anatomy.jpg"
                      alt="Nerve root anatomy illustration"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dermatomes" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Dermatome Distribution Patterns</h3>
                  <p className="text-center text-muted-foreground">
                    Each nerve root supplies sensation to specific skin areas (dermatomes) and muscles (myotomes)
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Cervical Dermatomes (C5-C8)</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">C5 (Deltoid)</h5>
                          <p className="text-sm text-muted-foreground">Lateral shoulder, upper arm</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">C6 (Thumb)</h5>
                          <p className="text-sm text-muted-foreground">Lateral forearm, thumb, index finger</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">C7 (Middle Finger)</h5>
                          <p className="text-sm text-muted-foreground">Middle finger, palm center</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">C8 (Little Finger)</h5>
                          <p className="text-sm text-muted-foreground">Medial forearm, little finger</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Lumbar Dermatomes (L1-S1)</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">L4 (Medial Leg)</h5>
                          <p className="text-sm text-muted-foreground">Anterior thigh, medial leg, big toe</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">L5 (Dorsal Foot)</h5>
                          <p className="text-sm text-muted-foreground">Lateral leg, dorsal foot, first 3 toes</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">S1 (Lateral Foot)</h5>
                          <p className="text-sm text-muted-foreground">Posterior leg, lateral foot, little toe</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <SafeImage
                      src="/images/spine-anatomy/dermatome-map.jpg"
                      alt="Complete dermatome distribution map"
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
                      <Activity className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Disc Herniation</h4>
                        <p className="text-sm text-muted-foreground">
                          Most common cause (85-90% of cases). Herniated disc material compresses
                          nerve roots as they exit the spinal canal through neural foramina.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Foraminal Stenosis</h4>
                        <p className="text-sm text-muted-foreground">
                          Narrowing of the neural foramen due to bone spurs, ligament thickening,
                          or facet joint arthritis, reducing space for nerve roots.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Spondylolisthesis</h4>
                        <p className="text-sm text-muted-foreground">
                          Forward slippage of one vertebra over another can compress nerve roots
                          and narrow the neural foramina.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Degenerative Changes</h4>
                        <p className="text-sm text-muted-foreground">
                          Age-related wear and tear including disc degeneration, facet joint
                          arthritis, and ligament hypertrophy.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Trauma or Injury</h4>
                        <p className="text-sm text-muted-foreground">
                          Acute injuries, fractures, or sudden movements can cause immediate
                          nerve root compression and inflammation.
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
                        Repetitive neck/back movements
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Heavy lifting and manual labor
                      </li>
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
                        Sedentary lifestyle
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Non-Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age (peak 50-54 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Male gender (slightly higher risk)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous spine surgery
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Congenital spinal abnormalities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Diabetes (nerve vulnerability)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Prevention Focus
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    While aging and genetics cannot be changed, maintaining good posture, regular exercise,
                    proper ergonomics, and healthy lifestyle choices can significantly reduce radiculopathy risk.
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
                  <CardTitle className="text-center">Cervical Radiculopathy</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Neck region (C5-C8)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sharp, shooting neck pain</li>
                        <li>• Pain radiating to shoulder/arm</li>
                        <li>• Burning sensation in arm</li>
                        <li>• Headaches (occipital region)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Sensory Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Numbness in specific fingers</li>
                        <li>• Tingling in arm/hand</li>
                        <li>• Reduced sensation patterns</li>
                        <li>• Cold sensitivity in affected area</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Motor Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Weakness in specific muscles</li>
                        <li>• Reduced grip strength</li>
                        <li>• Difficulty with fine motor tasks</li>
                        <li>• Muscle atrophy (chronic cases)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thoracic Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Thoracic Radiculopathy</CardTitle>
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
                        <li>• Band-like chest pain</li>
                        <li>• Intercostal neuralgia</li>
                        <li>• Mid-back pain</li>
                        <li>• Pain wrapping around ribs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Sensory Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Numbness in chest wall</li>
                        <li>• Abdominal wall numbness</li>
                        <li>• Altered sensation in trunk</li>
                        <li>• Hypersensitivity to touch</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Motor Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Intercostal muscle weakness</li>
                        <li>• Abdominal muscle weakness</li>
                        <li>• Postural instability</li>
                        <li>• Breathing difficulties (rare)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lumbar Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Lumbar Radiculopathy</CardTitle>
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
                        <li>• Lower back pain</li>
                        <li>• Sciatica (leg pain)</li>
                        <li>• Buttock pain</li>
                        <li>• Foot pain (specific patterns)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Sensory Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Leg numbness (dermatomal)</li>
                        <li>• Foot numbness/tingling</li>
                        <li>• Reduced sensation in toes</li>
                        <li>• Saddle anesthesia (cauda equina)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Motor Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Leg muscle weakness</li>
                        <li>• Foot drop (L5 root)</li>
                        <li>• Difficulty walking on heels/toes</li>
                        <li>• Reduced reflexes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Red Flag Symptoms */}
            <div className="mt-12">
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
                      <li>• Progressive weakness in multiple limbs</li>
                      <li>• Saddle anesthesia (numbness in groin area)</li>
                    </ul>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                      <li>• Signs of spinal cord compression</li>
                      <li>• Severe, rapidly worsening symptoms</li>
                      <li>• Complete loss of function in affected limb</li>
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
                      Detailed assessment of symptom onset, distribution patterns,
                      and functional limitations specific to nerve root involvement.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain distribution and quality</li>
                      <li>• Neurological symptom patterns</li>
                      <li>• Functional limitations and disabilities</li>
                      <li>• Previous treatments and responses</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Neurological Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Motor strength testing (myotomes)</li>
                      <li>• Sensory testing (dermatomes)</li>
                      <li>• Deep tendon reflex assessment</li>
                      <li>• Provocative tests (Spurling's, straight leg raise)</li>
                      <li>• Gait and coordination analysis</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Specialized Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spurling's test (cervical radiculopathy)</li>
                      <li>• Shoulder abduction relief sign</li>
                      <li>• Straight leg raise test (lumbar)</li>
                      <li>• Femoral nerve stretch test</li>
                      <li>• Upper limb tension tests</li>
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
                          Gold standard for diagnosing radiculopathy. Excellent visualization
                          of nerve roots, disc herniation, and soft tissue compression.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Identifies nerve root compression</li>
                          <li>• Shows disc herniation details</li>
                          <li>• Evaluates foraminal stenosis</li>
                          <li>• Rules out other pathology</li>
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
                          Contrast study showing nerve root compression. Useful when
                          MRI is contraindicated or provides unclear results.
                        </p>
                        <Badge variant="outline">Alternative Option</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">X-rays</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Shows bone alignment, disc space narrowing, and
                          degenerative changes. Limited for nerve root evaluation.
                        </p>
                        <Badge variant="outline">Initial Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">EMG/NCS</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Electrophysiological studies to confirm nerve root dysfunction
                          and differentiate from peripheral neuropathy.
                        </p>
                        <Badge variant="outline">Functional Assessment</Badge>
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
                    Diagnostic Criteria for Radiculopathy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Criteria:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Dermatomal pain distribution</li>
                        <li>• Myotomal weakness pattern</li>
                        <li>• Reduced or absent reflexes</li>
                        <li>• Positive provocative tests</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Correlation:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Nerve root compression on MRI</li>
                        <li>• Disc herniation at appropriate level</li>
                        <li>• Foraminal narrowing</li>
                        <li>• Clinical-imaging correlation</li>
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
                        <li>• Avoid aggravating positions and movements</li>
                        <li>• Ergonomic workplace adjustments</li>
                        <li>• Gradual return to activities</li>
                        <li>• Proper sleep positioning</li>
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
                        <li>• Nerve mobilization techniques</li>
                        <li>• Strengthening exercises</li>
                        <li>• Postural correction training</li>
                        <li>• Manual therapy and mobilization</li>
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
                        <li>• Short-term oral corticosteroids</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Symptomatic relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cervical Traction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Mechanical cervical traction</li>
                        <li>• Manual traction techniques</li>
                        <li>• Home traction units</li>
                        <li>• Intermittent traction therapy</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Cervical specific</Badge>
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
                        <li>• Chiropractic care</li>
                        <li>• Massage therapy</li>
                        <li>• TENS unit therapy</li>
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
                        <li>• Stress management</li>
                        <li>• Sleep optimization</li>
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
                    Most radiculopathy cases (75-90%) improve with conservative treatment within 6-12 weeks.
                    Early intervention and patient education are key to successful outcomes.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Selective Nerve Root Blocks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Targeted injection of anesthetic and steroid around the specific
                        affected nerve root for both diagnostic and therapeutic purposes.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Confirms nerve root involvement</li>
                          <li>• Provides targeted pain relief</li>
                          <li>• Reduces inflammation</li>
                          <li>• Guides surgical planning</li>
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
                        Injection of corticosteroids into the epidural space to reduce
                        inflammation around nerve roots and provide pain relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Approaches:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Transforaminal (nerve root specific)</li>
                          <li>• Interlaminar approach</li>
                          <li>• Caudal epidural injection</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Broader coverage</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Radiofrequency Ablation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Heat treatment to interrupt pain signals from specific nerves,
                        providing longer-lasting pain relief for chronic cases.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Facet joint denervation</li>
                          <li>• Dorsal root ganglion ablation</li>
                          <li>• Chronic radicular pain</li>
                          <li>• Failed conservative treatment</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Long-lasting relief</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Percutaneous Disc Decompression</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Minimally invasive procedures to reduce disc pressure and
                        relieve nerve root compression without open surgery.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Techniques:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Nucleoplasty (plasma ablation)</li>
                          <li>• Laser disc decompression</li>
                          <li>• Percutaneous discectomy</li>
                          <li>• Intradiscal electrothermal therapy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Minimally invasive</Badge>
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
                        <CardTitle className="text-lg">Anterior Cervical Discectomy and Fusion (ACDF)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Gold standard for cervical radiculopathy. Removal of herniated disc
                          from the front of the neck with fusion to maintain stability.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Cervical disc herniation</li>
                              <li>• Failed conservative treatment</li>
                              <li>• Progressive neurological deficit</li>
                              <li>• Severe, disabling pain</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Gold Standard</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Posterior Cervical Foraminotomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Motion-preserving procedure that enlarges the neural foramen
                          from the back of the neck without fusion.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Benefits:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Preserves neck motion</li>
                              <li>• No fusion required</li>
                              <li>• Shorter recovery time</li>
                              <li>• Lower complication rate</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Motion-preserving</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lumbar Microdiscectomy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Minimally invasive removal of herniated disc material that is
                            compressing lumbar nerve roots, typically performed through
                            a small incision with microscopic visualization.
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Lumbar disc herniation</li>
                              <li>• Sciatica with nerve root compression</li>
                              <li>• Failed conservative treatment (6-12 weeks)</li>
                              <li>• Progressive neurological deficit</li>
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
                        <Badge variant="secondary">Minimally invasive</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Endoscopic Discectomy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ultra-minimally invasive approach using endoscope for disc removal
                        with even smaller incisions and faster recovery.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Benefits:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Smallest incision (7-8mm)</li>
                            <li>• Fastest recovery time</li>
                            <li>• Minimal tissue damage</li>
                            <li>• Outpatient procedure</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Applications:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Contained disc herniations</li>
                            <li>• Foraminal stenosis</li>
                            <li>• Recurrent disc herniation</li>
                            <li>• Selected cases only</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Ultra-minimally invasive</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Success Rates
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 85-95% improvement in radicular pain</li>
                        <li>• 80-90% improvement in neurological symptoms</li>
                        <li>• 90%+ patient satisfaction rates</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Rapid relief of nerve compression</li>
                        <li>• Return to activities within 6-12 weeks</li>
                        <li>• Low recurrence rates (5-15%)</li>
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
                        <h4 className="font-semibold mb-2">Acute Phase (0-6 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Initial inflammation and pain management. Focus on reducing nerve
                          irritation and preventing further injury.
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
                        <h4 className="font-semibold mb-2">Subacute Phase (6-12 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Gradual improvement in symptoms. Begin structured rehabilitation
                          and progressive strengthening exercises.
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
                        <h4 className="font-semibold mb-2">Recovery Phase (3-6 months)</h4>
                        <p className="text-sm text-muted-foreground">
                          Significant functional improvement. Return to normal activities
                          with continued focus on prevention strategies.
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
                        <h4 className="font-semibold mb-2">Long-term (6-12 months)</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete resolution in most cases. Maintenance of gains through
                          lifestyle modifications and preventive measures.
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
                      Favorable Prognosis
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Acute onset (less than 6 weeks)</li>
                      <li>• Younger age (under 50 years)</li>
                      <li>• Single nerve root involvement</li>
                      <li>• Absence of motor weakness</li>
                      <li>• Good response to conservative treatment</li>
                      <li>• No significant comorbidities</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Challenging Factors
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Chronic symptoms (over 12 weeks)</li>
                      <li>• Multiple nerve root involvement</li>
                      <li>• Significant motor weakness</li>
                      <li>• Large disc herniation</li>
                      <li>• Psychological factors</li>
                      <li>• Work-related compensation issues</li>
                    </ul>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Expected Outcomes
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 75-90% improve with conservative treatment</li>
                      <li>• 85-95% improve with appropriate intervention</li>
                      <li>• Most return to full function</li>
                      <li>• Recurrence rate: 5-15% annually</li>
                      <li>• Surgery needed in 10-20% of cases</li>
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
                    <li>• Neck and back strengthening exercises</li>
                    <li>• Core stabilization programs</li>
                    <li>• Flexibility and mobility routines</li>
                    <li>• Nerve mobilization exercises</li>
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
                  <CardTitle>Ergonomics & Posture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Proper workstation setup</li>
                    <li>• Maintain neutral spine alignment</li>
                    <li>• Regular position changes</li>
                    <li>• Supportive pillows and chairs</li>
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
                    <li>• Manage stress effectively</li>
                    <li>• Get adequate sleep</li>
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
                  <CardTitle>Workplace Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Proper lifting techniques</li>
                    <li>• Use mechanical aids when available</li>
                    <li>• Avoid repetitive strain</li>
                    <li>• Take regular breaks</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/lifestyle-modifications">
                        Safety Guidelines
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
                  <CardTitle>Early Intervention</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Recognize early warning signs</li>
                    <li>• Seek prompt medical attention</li>
                    <li>• Don't ignore persistent symptoms</li>
                    <li>• Follow treatment recommendations</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/individual-spine-health-programme">
                        Prevention Program
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
                    <li>• Regular health check-ups</li>
                    <li>• Monitor symptom progression</li>
                    <li>• Adjust activities as needed</li>
                    <li>• Maintain fitness levels</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/contact">
                        Schedule Check-up
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
                  Take Control of Your Radiculopathy
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let nerve root compression limit your daily activities and quality of life.
                  Our comprehensive assessment tools and expert guidance can help you understand
                  your condition and find the most effective treatment approach.
                </p>
                <div className={cn(
                  "flex justify-center gap-4",
                  deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
                )}>
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">
                      <Target className="mr-2 h-4 w-4" />
                      Take Radiculopathy Assessment
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
                      Detailed evaluation of your neurological symptoms and functional limitations
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Diagnosis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced imaging and clinical expertise for accurate nerve root diagnosis
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Personalized Treatment</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored treatment plans from conservative to surgical interventions
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
                    Learn about herniated discs, the most common cause of radiculopathy,
                    and comprehensive treatment options.
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
                    src="/images/spine-conditions/sciatica.jpg"
                    alt="Sciatica information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Sciatica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand sciatica, a specific type of lumbar radiculopathy
                    affecting the sciatic nerve pathway.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/conditions/sciatica">
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
                    for radiculopathy relief and nerve root health.
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
    </StandardPageLayout>
  );
};

Radiculopathy.displayName = 'Radiculopathy';

export default Radiculopathy;
