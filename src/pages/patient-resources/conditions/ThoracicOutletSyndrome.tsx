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
  Move,
  Navigation
} from "lucide-react";

const ThoracicOutletSyndrome: React.FC = () => {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout title="Thoracic Outlet Syndrome - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/cervical-radiculopathy.jpg"
              alt="Thoracic outlet syndrome anatomy"
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
                Thoracic Outlet Syndrome: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding thoracic outlet syndrome: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced interventional procedures for neurovascular compression in the thoracic outlet.
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
                  <p className="text-sm text-muted-foreground">3-8% of population</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">20-50 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Gender</h3>
                  <p className="text-sm text-muted-foreground">Women 3:1 ratio</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Treatment Success</h3>
                  <p className="text-sm text-muted-foreground">80-95% improvement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Thoracic Outlet Syndrome Section */}
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
                  What is Thoracic Outlet Syndrome?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Thoracic outlet syndrome (TOS) is a group of disorders that occur when blood vessels 
                  or nerves in the space between your collarbone and your first rib (thoracic outlet) 
                  are compressed. This can cause pain in your shoulders and neck and numbness in your fingers.
                </p>
                <p className="text-muted-foreground mb-6">
                  The thoracic outlet is a narrow passageway bounded by the first rib, collarbone (clavicle), 
                  and the muscles of the neck. Through this space pass important neurovascular structures 
                  including the brachial plexus nerves and subclavian blood vessels that supply the arm and hand.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Complex anatomical region with multiple potential compression sites</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Involves compression of nerves, arteries, or veins</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often misdiagnosed due to variable symptom presentation</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/cervical-radiculopathy.jpg"
                  alt="Thoracic outlet syndrome anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing thoracic outlet region and neurovascular structures
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thoracic Outlet Anatomy & Types Section */}
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
              Understanding Thoracic Outlet Anatomy & Types
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
                  Anatomical Structure
                </TabsTrigger>
                <TabsTrigger value="types" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  TOS Types
                </TabsTrigger>
                <TabsTrigger value="pathophysiology" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Compression Mechanisms
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Thoracic Outlet Anatomy</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Anatomical Boundaries</h4>
                        <p className="text-sm text-muted-foreground">
                          The thoracic outlet is bounded by the first rib (below), clavicle (above),
                          and scalene muscles (medially), forming a narrow triangular space.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Neurovascular Structures</h4>
                        <p className="text-sm text-muted-foreground">
                          Contains the brachial plexus (C5-T1 nerve roots), subclavian artery,
                          and subclavian vein that supply the upper extremity.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Scalene Muscles</h4>
                        <p className="text-sm text-muted-foreground">
                          Anterior and middle scalene muscles form the scalene triangle,
                          a critical anatomical space where compression commonly occurs.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Costoclavicular Space</h4>
                        <p className="text-sm text-muted-foreground">
                          The space between the first rib and clavicle where neurovascular
                          structures can be compressed during arm elevation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/thoracic-outlet-anatomy.jpg"
                      alt="Detailed thoracic outlet anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="types" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Types of Thoracic Outlet Syndrome</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Neurogenic TOS (95%)
                      </h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Brachial plexus compression</li>
                        <li>• Most common type</li>
                        <li>• Pain, numbness, weakness</li>
                        <li>• Often involves C8-T1 nerve roots</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        Arterial TOS (1%)
                      </h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Subclavian artery compression</li>
                        <li>• Rare but serious</li>
                        <li>• Arm claudication, coldness</li>
                        <li>• Risk of thrombosis</li>
                      </ul>
                    </Card>

                    <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Venous TOS (4%)
                      </h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Subclavian vein compression</li>
                        <li>• Paget-Schroetter syndrome</li>
                        <li>• Arm swelling, discoloration</li>
                        <li>• Often in athletes</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Compression Sites</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Scalene Triangle</h5>
                        <p className="text-sm text-muted-foreground">Between anterior and middle scalene muscles</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Costoclavicular Space</h5>
                        <p className="text-sm text-muted-foreground">Between first rib and clavicle</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-semibold text-sm">Subcoracoid Space</h5>
                        <p className="text-sm text-muted-foreground">Beneath coracoid process and pectoralis minor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Compression Mechanisms in TOS</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Anatomical Factors</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Cervical Ribs</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Extra ribs arising from C7 vertebra causing space narrowing</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Fibrous Bands</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Congenital fibrous tissue creating compression points</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Muscle Hypertrophy</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Enlarged scalene muscles reducing outlet space</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Postural Changes</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">Forward head posture and shoulder drooping</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Dynamic Compression</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Positional Compression</h5>
                          <p className="text-sm text-muted-foreground">Symptoms worsen with arm elevation or overhead activities</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Activity-Related</h5>
                          <p className="text-sm text-muted-foreground">Repetitive overhead motions causing intermittent compression</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Breathing Pattern</h5>
                          <p className="text-sm text-muted-foreground">Accessory breathing muscle overuse affecting scalene tension</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Vascular Compromise</h5>
                          <p className="text-sm text-muted-foreground">Reduced blood flow causing ischemic symptoms</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/thoracic-outlet-compression.jpg"
                          alt="Thoracic outlet compression mechanisms"
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
                      <Bone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Anatomical Abnormalities</h4>
                        <p className="text-sm text-muted-foreground">
                          Cervical ribs, elongated C7 transverse processes, or fibrous bands
                          that narrow the thoracic outlet space and compress neurovascular structures.
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
                          Motor vehicle accidents, falls, or repetitive stress injuries
                          can cause muscle spasm, scar tissue formation, or structural changes.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Settings className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Postural Dysfunction</h4>
                        <p className="text-sm text-muted-foreground">
                          Forward head posture, rounded shoulders, and poor ergonomics
                          can alter thoracic outlet dimensions and increase compression risk.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Repetitive Overhead Activities</h4>
                        <p className="text-sm text-muted-foreground">
                          Sports, occupational activities, or hobbies involving repetitive
                          overhead arm movements can lead to muscle hypertrophy and compression.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Muscle Imbalances</h4>
                        <p className="text-sm text-muted-foreground">
                          Weakness of deep neck flexors and middle/lower trapezius
                          combined with tight scalene and pectoral muscles.
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
                        Muscle weakness and imbalances
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Repetitive overhead activities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Excessive weight training
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Stress and muscle tension
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Breathing pattern disorders
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Non-Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Female gender (3:1 ratio)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age (peak 20-50 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Cervical ribs (1% population)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Anatomical variations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Family history
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Body habitus (tall, thin)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Occupational Risk Factors
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Athletes (swimmers, baseball players), musicians (violinists, pianists),
                    and workers with repetitive overhead activities (painters, electricians)
                    are at higher risk for developing thoracic outlet syndrome.
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
              {/* Neurogenic TOS Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Neurogenic TOS</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">95% of cases - Nerve compression</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Neck, shoulder, and arm pain</li>
                        <li>• Aching or burning sensation</li>
                        <li>• Pain worse with overhead activities</li>
                        <li>• Nocturnal pain and awakening</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Numbness and tingling in fingers</li>
                        <li>• Hand weakness and clumsiness</li>
                        <li>• Muscle atrophy (advanced cases)</li>
                        <li>• C8-T1 distribution symptoms</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arterial TOS Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Arterial TOS</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">1% of cases - Artery compression</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        Vascular Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Arm claudication with activity</li>
                        <li>• Cold, pale fingers</li>
                        <li>• Weak or absent pulse</li>
                        <li>• Digital ischemia or gangrene</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        Serious Complications
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Arterial thrombosis</li>
                        <li>• Embolism to fingers</li>
                        <li>• Aneurysm formation</li>
                        <li>• Requires urgent treatment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Venous TOS Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Venous TOS</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">4% of cases - Vein compression</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Network className="h-4 w-4 text-purple-500" />
                        Venous Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Arm swelling and heaviness</li>
                        <li>• Blue discoloration (cyanosis)</li>
                        <li>• Prominent superficial veins</li>
                        <li>• Exercise intolerance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-teal-500" />
                        Acute Presentation
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sudden onset after exertion</li>
                        <li>• Paget-Schroetter syndrome</li>
                        <li>• Deep vein thrombosis risk</li>
                        <li>• Common in athletes</li>
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
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Positional Symptoms:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Symptoms worse with arm elevation</li>
                        <li>• Pain with overhead activities</li>
                        <li>• Relief with arm lowering</li>
                        <li>• Symptoms vary with head/neck position</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Functional Impact:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Difficulty with overhead work</li>
                        <li>• Problems with carrying objects</li>
                        <li>• Sleep disturbances</li>
                        <li>• Reduced work capacity</li>
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
                      Detailed assessment of symptom patterns, onset, aggravating factors,
                      and functional limitations specific to thoracic outlet syndrome.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Symptom location and radiation patterns</li>
                      <li>• Relationship to arm positions and activities</li>
                      <li>• History of trauma or repetitive activities</li>
                      <li>• Occupational and recreational factors</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Postural assessment and cervical alignment</li>
                      <li>• Palpation of scalene muscles and trigger points</li>
                      <li>• Neurological examination of upper extremity</li>
                      <li>• Vascular assessment including pulse examination</li>
                      <li>• Range of motion and strength testing</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Provocative Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Adson's test (scalene anticus syndrome)</li>
                      <li>• Wright's test (hyperabduction test)</li>
                      <li>• Roos test (elevated arm stress test)</li>
                      <li>• Costoclavicular maneuver</li>
                      <li>• Upper limb tension tests</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Imaging and Diagnostic Tests</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Microscope className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">X-rays (Radiographs)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Initial imaging to identify cervical ribs, elongated C7
                          transverse processes, or other bony abnormalities.
                        </p>
                        <Badge variant="secondary" className="mt-2">Initial Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI/MRA</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Detailed soft tissue imaging and vascular assessment
                          to evaluate compression and rule out other pathology.
                        </p>
                        <Badge variant="secondary" className="mt-2">Detailed Evaluation</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Nerve Conduction Studies</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Electrophysiological testing to assess nerve function
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
                        <h4 className="font-semibold mb-2">Vascular Studies</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Doppler ultrasound or angiography to assess arterial
                          and venous flow in suspected vascular TOS.
                        </p>
                        <Badge variant="outline">Vascular Assessment</Badge>
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
                    Diagnostic Criteria for Thoracic Outlet Syndrome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Positional symptoms with arm elevation</li>
                        <li>• Neurological or vascular symptoms</li>
                        <li>• Positive provocative tests (≥2 positive)</li>
                        <li>• Symptom reproduction with testing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Confirmatory Tests:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Imaging evidence of compression</li>
                        <li>• Abnormal nerve conduction studies</li>
                        <li>• Vascular flow abnormalities</li>
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
                      <CardTitle className="text-lg">Physical Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Postural correction exercises</li>
                        <li>• Scalene muscle stretching</li>
                        <li>• Strengthening of deep neck flexors</li>
                        <li>• Nerve mobilization techniques</li>
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
                        <li>• Avoid overhead activities</li>
                        <li>• Ergonomic workplace adjustments</li>
                        <li>• Proper sleeping positions</li>
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
                        <li>• Myofascial release techniques</li>
                        <li>• Trigger point therapy</li>
                        <li>• Cervical spine mobilization</li>
                        <li>• Soft tissue massage</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Breathing Retraining</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Diaphragmatic breathing</li>
                        <li>• Reduce accessory muscle use</li>
                        <li>• Relaxation techniques</li>
                        <li>• Stress management</li>
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
                        <li>• Postural strengthening</li>
                        <li>• Scapular stabilization</li>
                        <li>• Cervical strengthening</li>
                        <li>• Progressive loading program</li>
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
                    The primary goals are symptom relief, postural correction, muscle balance restoration,
                    and functional improvement through targeted exercises and lifestyle modifications.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Scalene Muscle Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ultrasound-guided injection of local anesthetic and corticosteroids
                        into the scalene muscles to reduce spasm and inflammation.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Targeted muscle relaxation</li>
                          <li>• Diagnostic confirmation</li>
                          <li>• Temporary symptom relief</li>
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
                      <CardTitle className="text-lg">Botulinum Toxin Injection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of botulinum toxin into the scalene muscles to provide
                        longer-lasting muscle relaxation and symptom relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting effect (3-6 months)</li>
                          <li>• Reduces muscle hyperactivity</li>
                          <li>• Allows for rehabilitation</li>
                          <li>• Minimal systemic effects</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">60-75% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Nerve Blocks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Targeted nerve blocks to interrupt pain signals and provide
                        diagnostic information about nerve involvement.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Brachial plexus blocks</li>
                          <li>• Stellate ganglion blocks</li>
                          <li>• Diagnostic nerve blocks</li>
                          <li>• Pain management</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Diagnostic tool</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Vascular Interventions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Endovascular procedures for arterial or venous TOS including
                        thrombolysis, angioplasty, or stenting.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Procedures:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Catheter-directed thrombolysis</li>
                          <li>• Balloon angioplasty</li>
                          <li>• Vascular stenting</li>
                          <li>• Embolectomy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Vascular TOS</Badge>
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
                        <CardTitle className="text-lg">First Rib Resection</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical removal of the first rib to decompress the thoracic outlet
                          and relieve neurovascular compression.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Approaches:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Transaxillary approach</li>
                              <li>• Supraclavicular approach</li>
                              <li>• Infraclavicular approach</li>
                              <li>• Combined approaches</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Gold standard</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Scalenectomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical division or removal of the scalene muscles to eliminate
                          compression and improve thoracic outlet space.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Techniques:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Anterior scalenectomy</li>
                              <li>• Middle scalenectomy</li>
                              <li>• Complete scalenectomy</li>
                              <li>• Endoscopic approaches</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Muscle-sparing option</Badge>
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
                            <li>• Failed 3-6 months conservative treatment</li>
                            <li>• Confirmed TOS diagnosis</li>
                            <li>• Significant functional impairment</li>
                            <li>• Vascular complications (urgent)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 80-95% good to excellent results</li>
                            <li>• Significant symptom improvement</li>
                            <li>• Improved functional capacity</li>
                            <li>• High patient satisfaction</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Thoracic outlet surgery"
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
                      <li>• 80-90% improvement with comprehensive conservative care</li>
                      <li>• Physical therapy shows excellent results in most patients</li>
                      <li>• Postural correction and strengthening highly effective</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Scalene injections: 70-80% short-term relief</li>
                      <li>• Botulinum toxin: 60-75% long-term improvement</li>
                      <li>• Nerve blocks: Effective diagnostic tool</li>
                      <li>• Combination approaches often most effective</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• First rib resection: 80-95% excellent results</li>
                      <li>• Scalenectomy: 75-90% good outcomes</li>
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
                      <li>• Neurogenic TOS (vs. vascular types)</li>
                      <li>• Good response to initial conservative treatment</li>
                      <li>• Absence of anatomical abnormalities</li>
                      <li>• Strong patient motivation and compliance</li>
                      <li>• Younger age at presentation</li>
                      <li>• Absence of workers' compensation claims</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Chronic symptom duration (&gt;12 months)</li>
                      <li>• Vascular TOS complications</li>
                      <li>• Cervical ribs or anatomical abnormalities</li>
                      <li>• Multiple previous failed treatments</li>
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
                      patient education, and ongoing maintenance of proper posture and muscle
                      balance through targeted exercises and lifestyle modifications.
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
                    Postural Awareness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain proper posture to prevent thoracic outlet compression and muscle imbalances.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Avoid forward head posture</li>
                    <li>• Keep shoulders back and down</li>
                    <li>• Maintain neutral cervical alignment</li>
                    <li>• Regular posture breaks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-green-500" />
                    Ergonomic Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Optimize workplace and daily activity ergonomics to reduce thoracic outlet stress.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Proper computer workstation setup</li>
                    <li>• Adjustable chair and monitor height</li>
                    <li>• Keyboard and mouse positioning</li>
                    <li>• Regular ergonomic assessments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-red-500" />
                    Exercise and Strengthening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop balanced muscle strength and flexibility to support proper thoracic outlet function.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Deep neck flexor strengthening</li>
                    <li>• Scapular stabilization exercises</li>
                    <li>• Scalene muscle stretching</li>
                    <li>• Core strengthening programs</li>
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
                    Recognize and modify activities that may increase thoracic outlet syndrome risk.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Limit overhead activities</li>
                    <li>• Avoid prolonged arm elevation</li>
                    <li>• Proper lifting techniques</li>
                    <li>• Gradual activity progression</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-purple-500" />
                    Breathing Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practice proper breathing patterns to reduce accessory muscle overuse and tension.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Diaphragmatic breathing training</li>
                    <li>• Reduce scalene muscle overuse</li>
                    <li>• Relaxation and stress management</li>
                    <li>• Breathing pattern awareness</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-teal-500" />
                    Sport-Specific Prevention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Special considerations for athletes and active individuals to prevent thoracic outlet syndrome.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Sport-specific conditioning</li>
                    <li>• Proper technique training</li>
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
                Take Our Thoracic Outlet Syndrome Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                thoracic outlet syndrome and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick Thoracic Outlet Syndrome Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Neck, shoulder, or arm pain
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Numbness or tingling in fingers
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain worse with arm elevation
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Hand weakness or clumsiness
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Cold, pale fingers
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Arm swelling or discoloration
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Symptoms with overhead activities
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          History of repetitive overhead work
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for thoracic outlet syndrome.
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
                    Targeted exercises for neck, shoulder, and thoracic outlet health
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

ThoracicOutletSyndrome.displayName = 'ThoracicOutletSyndrome';

export default ThoracicOutletSyndrome;
