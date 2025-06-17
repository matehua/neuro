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

const OccipitalNeuralgia: React.FC = () => {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout title="Occipital Neuralgia - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/cervical-radiculopathy.jpg"
              alt="Occipital neuralgia anatomy"
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
                Occipital Neuralgia: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding occipital neuralgia: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced interventional procedures for occipital nerve dysfunction and head pain.
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
                  <p className="text-sm text-muted-foreground">3.2 per 100,000</p>
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
                  <p className="text-sm text-muted-foreground">Women 4:1 ratio</p>
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

        {/* What is Occipital Neuralgia Section */}
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
                  What is Occipital Neuralgia?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Occipital neuralgia is a distinct type of headache characterized by shooting or stabbing pain 
                  in the upper neck, back of the head, and behind the ears. This condition involves irritation 
                  or injury to the occipital nerves, which run from the top of the spinal cord up through the scalp.
                </p>
                <p className="text-muted-foreground mb-6">
                  The greater, lesser, and third occipital nerves provide sensation to the back and top of the head. 
                  When these nerves become inflamed, compressed, or irritated, they can cause severe, electric 
                  shock-like pain that follows the path of the nerve from the suboccipital region to the vertex of the skull.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Distinct neuralgic pain pattern affecting occipital nerve distribution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Sharp, shooting pain from neck to scalp</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often misdiagnosed as migraine or tension headache</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/cervical-radiculopathy.jpg"
                  alt="Occipital neuralgia anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing occipital nerve pathways and distribution
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Occipital Nerve Anatomy & Pathophysiology Section */}
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
              Understanding Occipital Nerve Anatomy & Function
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
                  Nerve Anatomy
                </TabsTrigger>
                <TabsTrigger value="pathophysiology" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Pain Mechanisms
                </TabsTrigger>
                <TabsTrigger value="classification" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Classification
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Occipital Nerve Anatomy</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Greater Occipital Nerve</h4>
                        <p className="text-sm text-muted-foreground">
                          Arises from the medial branch of the dorsal ramus of C2, pierces the
                          semispinalis capitis and trapezius muscles, and innervates the posterior scalp.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Lesser Occipital Nerve</h4>
                        <p className="text-sm text-muted-foreground">
                          Originates from the ventral rami of C2 and C3, curves around the posterior
                          border of the sternocleidomastoid muscle, and supplies the lateral scalp.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Third Occipital Nerve</h4>
                        <p className="text-sm text-muted-foreground">
                          Arises from the medial branch of the dorsal ramus of C3, provides
                          innervation to the suboccipital region and upper cervical facet joints.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Anatomical Course</h4>
                        <p className="text-sm text-muted-foreground">
                          Nerves travel through multiple muscle layers and fascial planes,
                          making them susceptible to compression and irritation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/occipital-nerve-anatomy.jpg"
                      alt="Detailed occipital nerve anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Pain Generation Mechanisms</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        Nerve Irritation
                      </h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Mechanical compression by tight muscles</li>
                        <li>• Inflammation from trauma or infection</li>
                        <li>• Entrapment in fascial planes</li>
                        <li>• Vascular compromise affecting nerve function</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Sensitization Process
                      </h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Peripheral sensitization of nerve endings</li>
                        <li>• Central sensitization in spinal cord</li>
                        <li>• Altered pain processing pathways</li>
                        <li>• Hyperalgesia and allodynia development</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Compression Points</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Suboccipital Triangle</h5>
                        <p className="text-sm text-muted-foreground">Between rectus capitis and oblique muscles</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Trapezius Insertion</h5>
                        <p className="text-sm text-muted-foreground">At superior nuchal line attachment</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Tendinous Intersections</h5>
                        <p className="text-sm text-muted-foreground">Through semispinalis capitis muscle</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="classification" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Classification of Occipital Neuralgia</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Primary vs Secondary</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Primary Occipital Neuralgia</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">Idiopathic nerve dysfunction without identifiable cause</p>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200">
                          <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200">Secondary Occipital Neuralgia</h5>
                          <p className="text-sm text-orange-700 dark:text-orange-300">Nerve dysfunction due to underlying pathology or trauma</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Nerve Distribution</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Greater Occipital</h5>
                          <p className="text-sm text-muted-foreground">Most common, affects posterior scalp</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Lesser Occipital</h5>
                          <p className="text-sm text-muted-foreground">Lateral scalp and behind ear</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Third Occipital</h5>
                          <p className="text-sm text-muted-foreground">Suboccipital region involvement</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Combined</h5>
                          <p className="text-sm text-muted-foreground">Multiple nerve involvement</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      International Headache Society Criteria
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Distinct pain characteristics, anatomical distribution, and response to
                      diagnostic nerve blocks define occipital neuralgia according to established criteria.
                    </p>
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
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Trauma and Injury</h4>
                        <p className="text-sm text-muted-foreground">
                          Whiplash injuries, direct head trauma, or neck injuries can damage
                          or irritate the occipital nerves, leading to chronic pain.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Cervical Spine Disorders</h4>
                        <p className="text-sm text-muted-foreground">
                          Upper cervical arthritis, atlantooccipital joint dysfunction,
                          or C1-C2 instability can affect occipital nerve function.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Settings className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Muscle Tension and Spasm</h4>
                        <p className="text-sm text-muted-foreground">
                          Chronic tension in suboccipital muscles, trapezius, or
                          semispinalis capitis can compress and irritate occipital nerves.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Inflammatory Conditions</h4>
                        <p className="text-sm text-muted-foreground">
                          Infections, autoimmune disorders, or inflammatory conditions
                          affecting the upper cervical region and occipital nerves.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Vascular Causes</h4>
                        <p className="text-sm text-muted-foreground">
                          Arterial compression, vascular malformations, or
                          compromised blood supply to the occipital nerve region.
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
                        Poor posture and neck position
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Chronic stress and muscle tension
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Repetitive neck movements
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Sleep position and pillow support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Workplace ergonomics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Physical inactivity
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Non-Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Female gender (4:1 ratio)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age (peak 40-60 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Anatomical variations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous head/neck trauma
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Underlying medical conditions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Associated Conditions
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Occipital neuralgia often coexists with migraine, tension headaches,
                    cervicogenic headaches, and temporomandibular joint disorders,
                    requiring comprehensive evaluation and treatment.
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
                  <p className="text-center text-sm text-muted-foreground">Characteristic neuralgic pain patterns</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sharp, shooting, electric shock-like pain</li>
                        <li>• Stabbing or piercing sensation</li>
                        <li>• Pain follows occipital nerve distribution</li>
                        <li>• Unilateral or bilateral involvement</li>
                        <li>• Sudden onset and brief duration (seconds to minutes)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        Pain Location
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Suboccipital region (base of skull)</li>
                        <li>• Posterior and lateral scalp</li>
                        <li>• Behind the ears</li>
                        <li>• Upper neck and shoulder region</li>
                        <li>• May radiate to forehead or temple</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Associated Symptoms</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Additional neurological manifestations</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-purple-500" />
                        Sensory Changes
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Scalp tenderness and hypersensitivity</li>
                        <li>• Allodynia (pain from light touch)</li>
                        <li>• Hyperalgesia (increased pain sensitivity)</li>
                        <li>• Numbness or tingling in affected areas</li>
                        <li>• Burning or aching between episodes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-green-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Difficulty with hair brushing or washing</li>
                        <li>• Sleep disturbances and positioning issues</li>
                        <li>• Neck movement limitations</li>
                        <li>• Sensitivity to light touch or pressure</li>
                        <li>• Impact on daily activities and work</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Symptom Triggers and Patterns */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <CardTitle className="text-orange-800 dark:text-orange-200 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Common Triggers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Physical Triggers:</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Light touch to scalp or neck</li>
                        <li>• Hair brushing or combing</li>
                        <li>• Neck movements or positioning</li>
                        <li>• Pressure from pillows or headwear</li>
                        <li>• Cold weather or wind exposure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Other Triggers:</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Stress and emotional tension</li>
                        <li>• Bright lights or visual stimuli</li>
                        <li>• Loud noises or sound sensitivity</li>
                        <li>• Changes in weather or barometric pressure</li>
                        <li>• Fatigue and sleep deprivation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Pain Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Temporal Characteristics:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Paroxysmal episodes lasting seconds to minutes</li>
                        <li>• Intermittent pattern with pain-free intervals</li>
                        <li>• May progress to constant aching pain</li>
                        <li>• Often worse in morning or evening</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Severity Patterns:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Intensity ranges from moderate to severe</li>
                        <li>• May fluctuate throughout the day</li>
                        <li>• Can be debilitating during acute episodes</li>
                        <li>• Background aching between sharp episodes</li>
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
                      Detailed assessment of pain characteristics, onset, triggers,
                      and associated symptoms specific to occipital neuralgia.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain quality, location, and radiation patterns</li>
                      <li>• Trigger factors and temporal characteristics</li>
                      <li>• History of trauma, infection, or underlying conditions</li>
                      <li>• Previous treatments and response patterns</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Palpation of occipital nerve emergence points</li>
                      <li>• Assessment of scalp sensitivity and allodynia</li>
                      <li>• Cervical spine range of motion testing</li>
                      <li>• Neurological examination of cranial nerves</li>
                      <li>• Evaluation of neck muscle tension and trigger points</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Diagnostic Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pressure point tenderness over nerve emergence</li>
                      <li>• Tinel's sign at occipital nerve locations</li>
                      <li>• Response to gentle nerve palpation</li>
                      <li>• Assessment of referred pain patterns</li>
                      <li>• Evaluation of associated muscle spasm</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Diagnostic Procedures</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Stethoscope className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Diagnostic Nerve Blocks</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Local anesthetic injection at occipital nerve emergence points
                          to confirm diagnosis and provide temporary relief.
                        </p>
                        <Badge variant="secondary" className="mt-2">Gold Standard Diagnosis</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI Imaging</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          High-resolution MRI to rule out structural abnormalities,
                          tumors, or other pathology affecting the occipital region.
                        </p>
                        <Badge variant="outline">Rule Out Secondary Causes</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Microscope className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Imaging</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Computed tomography to evaluate bony structures,
                          cervical spine abnormalities, or calcifications.
                        </p>
                        <Badge variant="outline">Structural Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Electrophysiology</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Nerve conduction studies or electromyography when
                          other neurological conditions need to be excluded.
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
                    Diagnostic Criteria for Occipital Neuralgia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Sharp, shooting pain in occipital nerve distribution</li>
                        <li>• Pain triggered by light touch or movement</li>
                        <li>• Tenderness over occipital nerve emergence points</li>
                        <li>• Absence of neurological deficits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Confirmatory Tests:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Positive response to diagnostic nerve block</li>
                        <li>• Temporary pain relief with local anesthetic</li>
                        <li>• Reproduction of pain with nerve palpation</li>
                        <li>• Exclusion of other headache disorders</li>
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
                      <CardTitle className="text-lg">Medications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Anticonvulsants (gabapentin, pregabalin)</li>
                        <li>• Tricyclic antidepressants</li>
                        <li>• Topical anesthetics and analgesics</li>
                        <li>• Anti-inflammatory medications</li>
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
                        <li>• Neck and shoulder stretching exercises</li>
                        <li>• Postural correction techniques</li>
                        <li>• Manual therapy and mobilization</li>
                        <li>• Heat and cold therapy applications</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Supportive care</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lifestyle Modifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Stress management and relaxation</li>
                        <li>• Sleep hygiene and positioning</li>
                        <li>• Trigger avoidance strategies</li>
                        <li>• Ergonomic workplace adjustments</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Preventive measures</Badge>
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
                        <li>• Massage therapy techniques</li>
                        <li>• Chiropractic manipulation</li>
                        <li>• Transcutaneous electrical stimulation</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Psychological Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Cognitive behavioral therapy</li>
                        <li>• Pain management counseling</li>
                        <li>• Biofeedback training</li>
                        <li>• Mindfulness and meditation</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Holistic approach</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Home Care Strategies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Gentle scalp massage techniques</li>
                        <li>• Proper pillow support and positioning</li>
                        <li>• Regular exercise and movement</li>
                        <li>• Hydration and nutrition optimization</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Self-management</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain reduction, trigger avoidance, nerve desensitization,
                    and functional improvement through targeted medications and lifestyle modifications.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Occipital Nerve Blocks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of local anesthetic and corticosteroids at occipital nerve
                        emergence points to provide both diagnostic confirmation and therapeutic relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Immediate pain relief potential</li>
                          <li>• Diagnostic confirmation of nerve involvement</li>
                          <li>• Anti-inflammatory effects</li>
                          <li>• Can be repeated safely</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">85-95% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Botulinum Toxin Injection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of botulinum toxin into affected muscles and around
                        occipital nerves to provide longer-lasting pain relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting effect (3-6 months)</li>
                          <li>• Reduces muscle tension and spasm</li>
                          <li>• Decreases nerve hypersensitivity</li>
                          <li>• Minimal systemic side effects</li>
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
                        Thermal or pulsed radiofrequency treatment of occipital nerves
                        to provide longer-term pain relief for refractory cases.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Pulsed radiofrequency (preferred)</li>
                          <li>• Thermal radiofrequency ablation</li>
                          <li>• Third occipital nerve treatment</li>
                          <li>• Duration: 6-12 months relief</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Advanced intervention</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Neuromodulation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Peripheral nerve stimulation or occipital nerve stimulation
                        for chronic, refractory occipital neuralgia.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Options:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Peripheral nerve stimulation</li>
                          <li>• Occipital nerve stimulation</li>
                          <li>• Trial stimulation period</li>
                          <li>• Permanent implantation option</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Refractory cases</Badge>
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
                        <CardTitle className="text-lg">Occipital Nerve Decompression</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical release of occipital nerves from compressing structures
                          such as tight muscles, fascial bands, or scar tissue.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Techniques:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Suboccipital muscle release</li>
                              <li>• Fascial band division</li>
                              <li>• Scar tissue removal</li>
                              <li>• Nerve mobilization</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Targeted approach</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Neurectomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical division or removal of affected occipital nerve segments
                          for severe, refractory cases unresponsive to other treatments.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Considerations:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Permanent sensory loss</li>
                              <li>• Reserved for severe cases</li>
                              <li>• Careful patient selection</li>
                              <li>• Risk of neuroma formation</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Last resort option</Badge>
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
                            <li>• Confirmed occipital neuralgia diagnosis</li>
                            <li>• Positive response to nerve blocks</li>
                            <li>• Significant functional impairment</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 70-90% good to excellent results</li>
                            <li>• Significant pain reduction</li>
                            <li>• Improved quality of life</li>
                            <li>• High patient satisfaction rates</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Occipital nerve surgery"
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
                        <li>• Surgery reserved for refractory cases</li>
                        <li>• Comprehensive evaluation essential</li>
                        <li>• Multidisciplinary team approach</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• High success rates when appropriately selected</li>
                        <li>• Significant improvement in pain and function</li>
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
                      <li>• 60-80% improvement with comprehensive conservative care</li>
                      <li>• Medications show good response in most patients</li>
                      <li>• Lifestyle modifications highly effective for prevention</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Occipital nerve blocks: 85-95% short-term relief</li>
                      <li>• Botulinum toxin: 70-85% long-term improvement</li>
                      <li>• Radiofrequency ablation: 60-80% sustained relief</li>
                      <li>• Combination approaches often most effective</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Nerve decompression: 70-90% excellent results</li>
                      <li>• Neurectomy: 60-80% good outcomes</li>
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
                      <li>• Acute onset (vs. chronic progression)</li>
                      <li>• Good response to initial nerve blocks</li>
                      <li>• Absence of underlying structural abnormalities</li>
                      <li>• Strong patient motivation and compliance</li>
                      <li>• Younger age at presentation</li>
                      <li>• Unilateral involvement</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Chronic pain duration (&gt;12 months)</li>
                      <li>• Multiple previous failed treatments</li>
                      <li>• Bilateral nerve involvement</li>
                      <li>• Associated psychological comorbidities</li>
                      <li>• Significant allodynia and hyperalgesia</li>
                      <li>• Poor response to nerve blocks</li>
                      <li>• Underlying inflammatory conditions</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Long-term Management Keys
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Success depends on accurate diagnosis, appropriate treatment selection,
                      patient education, and ongoing trigger avoidance through lifestyle
                      modifications and stress management techniques.
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
                    <Shield className="h-5 w-5 text-blue-500" />
                    Posture and Ergonomics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain proper neck and head positioning to prevent occipital nerve irritation.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Proper computer workstation setup</li>
                    <li>• Avoid prolonged forward head posture</li>
                    <li>• Regular posture breaks and stretching</li>
                    <li>• Ergonomic pillow and sleep positioning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-500" />
                    Stress Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reduce stress and muscle tension that can trigger occipital neuralgia episodes.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Regular relaxation techniques</li>
                    <li>• Mindfulness and meditation practices</li>
                    <li>• Adequate sleep and rest</li>
                    <li>• Stress reduction strategies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-red-500" />
                    Exercise and Movement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain neck flexibility and strength to support proper nerve function.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Gentle neck stretching exercises</li>
                    <li>• Strengthening of neck and shoulder muscles</li>
                    <li>• Regular cardiovascular exercise</li>
                    <li>• Yoga and flexibility training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Trigger Avoidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Identify and avoid specific triggers that can precipitate occipital neuralgia.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Gentle hair care and brushing</li>
                    <li>• Avoid tight headwear or accessories</li>
                    <li>• Protect from cold weather exposure</li>
                    <li>• Minimize bright light exposure</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-500" />
                    Lifestyle Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Adopt healthy lifestyle habits that support overall neurological health.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain regular sleep schedule</li>
                    <li>• Stay adequately hydrated</li>
                    <li>• Balanced nutrition and supplements</li>
                    <li>• Limit alcohol and caffeine intake</li>
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
                    Recognize early warning signs and seek prompt treatment to prevent progression.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Monitor for symptom changes</li>
                    <li>• Seek early medical evaluation</li>
                    <li>• Follow treatment recommendations</li>
                    <li>• Regular follow-up appointments</li>
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
                Take Our Occipital Neuralgia Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                occipital neuralgia and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick Occipital Neuralgia Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Sharp, shooting pain in back of head
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Electric shock-like sensations
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain triggered by light touch
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Scalp tenderness and sensitivity
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain behind ears or at skull base
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Difficulty with hair brushing
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain with neck movements
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          History of head or neck trauma
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for occipital neuralgia.
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
                  <Brain className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Cervical Radiculopathy</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Comprehensive guide to cervical nerve root compression and treatment
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/radiculopathy">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Activity className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Exercise Library</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Targeted exercises for neck health and occipital neuralgia management
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/exercise-library">View Exercises</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Pain Management</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Advanced pain management techniques and nerve block procedures
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

OccipitalNeuralgia.displayName = 'OccipitalNeuralgia';

export default OccipitalNeuralgia;
