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

const SacroiliacArthropathy: React.FC = () => {
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
    <StandardPageLayout title="Sacroiliac Arthropathy (SI Joint Dysfunction) - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
          deviceInfo.isMobile ? "py-12" : "py-20"
        )}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src="/images/spine-conditions/sacroiliac-joint-pain.jpg"
              alt="Sacroiliac arthropathy anatomy"
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
                Sacroiliac Arthropathy: Complete Guide
              </h1>
              <p className={cn(
                "text-muted-foreground mb-8",
                deviceInfo.isMobile ? "text-base" : "text-lg"
              )}>
                Understanding sacroiliac arthropathy and SI joint dysfunction: causes, symptoms, diagnosis, and comprehensive treatment options 
                from conservative management to advanced interventional procedures for sacroiliac joint pain and dysfunction.
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
                  <p className="text-sm text-muted-foreground">15-30% of back pain</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">20-40 years old</p>
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

        {/* What is Sacroiliac Arthropathy Section */}
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
                  What is Sacroiliac Arthropathy?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Sacroiliac arthropathy, also known as SI joint dysfunction or sacroiliitis, 
                  is a condition affecting the sacroiliac joints that connect the sacrum 
                  (base of the spine) to the iliac bones of the pelvis. These joints are 
                  crucial for transferring weight and forces between the spine and legs.
                </p>
                <p className="text-muted-foreground mb-6">
                  When the sacroiliac joints become inflamed, degenerated, or dysfunctional, 
                  they can cause significant lower back and pelvic pain. This condition can 
                  result from various causes including trauma, pregnancy, arthritis, or 
                  biomechanical dysfunction.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Complex joint with both synovial and fibrous components</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Critical for load transfer between spine and lower extremities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often underdiagnosed cause of lower back and pelvic pain</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/sacroiliac-joint-pain.jpg"
                  alt="Sacroiliac arthropathy anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Anatomical view showing sacroiliac joint location and relationship to spine and pelvis
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SI Joint Anatomy & Pathophysiology Section */}
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
              Understanding Sacroiliac Joint Anatomy & Dysfunction
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
                <TabsTrigger value="biomechanics" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Biomechanics
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
                    <h3 className="text-xl font-bold mb-4">Sacroiliac Joint Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Joint Surfaces</h4>
                        <p className="text-sm text-muted-foreground">
                          Auricular surfaces of the sacrum and ilium form an L-shaped joint
                          with both synovial (anterior) and fibrous (posterior) components.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Ligamentous Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Strong ligamentous complex including anterior and posterior SI ligaments,
                          interosseous ligaments, and accessory ligaments providing stability.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Cartilage</h4>
                        <p className="text-sm text-muted-foreground">
                          Hyaline cartilage on sacral surface and fibrocartilage on iliac surface,
                          with different thickness and composition affecting joint mechanics.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Innervation</h4>
                        <p className="text-sm text-muted-foreground">
                          Complex nerve supply from L4-S3 nerve roots, making diagnosis
                          challenging due to overlapping pain referral patterns.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/sacroiliac-joint-anatomy.jpg"
                      alt="Detailed sacroiliac joint anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="biomechanics" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Sacroiliac Joint Biomechanics</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Load Transfer Function
                        </h4>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Transfers weight from spine to pelvis and legs</li>
                          <li>• Absorbs and distributes ground reaction forces</li>
                          <li>• Provides stability during weight-bearing activities</li>
                          <li>• Accommodates rotational and translational movements</li>
                        </ul>
                      </Card>

                      <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          Movement Patterns
                        </h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Nutation: sacral flexion with walking</li>
                          <li>• Counternutation: sacral extension</li>
                          <li>• Minimal motion (2-4mm translation, 1-3° rotation)</li>
                          <li>• Coupled movements with lumbar spine</li>
                        </ul>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                          Stability Mechanisms
                        </h4>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                          <li>• Form closure: joint surface congruity</li>
                          <li>• Force closure: muscle and ligament tension</li>
                          <li>• Motor control: coordinated muscle activation</li>
                          <li>• Hormonal influences on ligament laxity</li>
                        </ul>
                      </Card>

                      <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                          Age-Related Changes
                        </h4>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Progressive joint surface irregularity</li>
                          <li>• Increased fibrous ankylosis with age</li>
                          <li>• Reduced motion in elderly populations</li>
                          <li>• Gender differences in degeneration patterns</li>
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Dysfunction Mechanisms in SI Arthropathy</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Primary Dysfunction Types</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Hypomobility</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Restricted joint motion due to muscle guarding, adhesions, or structural changes</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Hypermobility</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Excessive motion due to ligament laxity, trauma, or hormonal changes</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Inflammatory</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Sacroiliitis from autoimmune conditions, infection, or mechanical irritation</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Degenerative</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">Age-related cartilage loss, osteophyte formation, and joint space narrowing</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Pain Generation Mechanisms</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Nociceptive Pain</h5>
                          <p className="text-sm text-muted-foreground">Joint capsule, ligament, and bone irritation</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Referred Pain</h5>
                          <p className="text-sm text-muted-foreground">Complex referral patterns to buttock, groin, and thigh</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Muscle Dysfunction</h5>
                          <p className="text-sm text-muted-foreground">Secondary muscle guarding and trigger points</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Central Sensitization</h5>
                          <p className="text-sm text-muted-foreground">Chronic pain leading to altered pain processing</p>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <SafeImage
                          src="/images/spine-anatomy/si-joint-dysfunction.jpg"
                          alt="SI joint dysfunction mechanisms"
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
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Trauma and Injury</h4>
                        <p className="text-sm text-muted-foreground">
                          Falls, motor vehicle accidents, or direct trauma to the pelvis
                          can damage SI joint ligaments and cause acute dysfunction.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Pregnancy and Childbirth</h4>
                        <p className="text-sm text-muted-foreground">
                          Hormonal changes (relaxin) and mechanical stress during pregnancy
                          can cause SI joint laxity and dysfunction.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Biomechanical Dysfunction</h4>
                        <p className="text-sm text-muted-foreground">
                          Leg length discrepancy, muscle imbalances, or altered movement
                          patterns can create abnormal stress on SI joints.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Inflammatory Arthritis</h4>
                        <p className="text-sm text-muted-foreground">
                          Ankylosing spondylitis, psoriatic arthritis, and other inflammatory
                          conditions commonly affect the sacroiliac joints.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Degenerative Changes</h4>
                        <p className="text-sm text-muted-foreground">
                          Age-related wear and tear, osteoarthritis, and joint degeneration
                          can lead to SI joint arthropathy.
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
                        Muscle imbalances and weakness
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Repetitive stress activities
                      </li>
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
                        High-impact sports participation
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
                        Age (peak 20-40 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Genetic predisposition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Previous pregnancies
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Anatomical variations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        History of spinal surgery
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Special Considerations
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Pregnancy-related SI joint dysfunction often resolves postpartum but may
                    require specific management during pregnancy and breastfeeding periods.
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
                  <p className="text-center text-sm text-muted-foreground">Core manifestations of SI joint dysfunction</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Characteristics
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Unilateral lower back pain (usually one-sided)</li>
                        <li>• Pain over posterior superior iliac spine (PSIS)</li>
                        <li>• Deep, aching pain in buttock region</li>
                        <li>• Pain worse with prolonged sitting or standing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Referred Pain Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Groin pain and anterior thigh discomfort</li>
                        <li>• Posterior thigh pain (rarely below knee)</li>
                        <li>• Lateral hip and trochanteric region</li>
                        <li>• Lower abdominal pain (occasionally)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Move className="h-4 w-4 text-green-500" />
                        Movement-Related Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pain with transitional movements</li>
                        <li>• Difficulty rising from sitting</li>
                        <li>• Pain with single-leg stance</li>
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
                        <li>• Difficulty with stairs (especially going up)</li>
                        <li>• Problems with getting in/out of car</li>
                        <li>• Sleep disturbances due to pain</li>
                        <li>• Reduced walking tolerance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Network className="h-4 w-4 text-orange-500" />
                        Compensatory Patterns
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Altered gait patterns and limping</li>
                        <li>• Muscle guarding and tension</li>
                        <li>• Secondary lumbar spine dysfunction</li>
                        <li>• Hip and knee compensation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-teal-500" />
                        Pregnancy-Specific Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pelvic girdle pain during pregnancy</li>
                        <li>• Pain with weight-bearing activities</li>
                        <li>• Difficulty with bed mobility</li>
                        <li>• Symphysis pubis dysfunction</li>
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
                        <li>• Unilateral lower back/buttock pain</li>
                        <li>• Pain below L5 level</li>
                        <li>• Positive provocative tests</li>
                        <li>• No neurological deficits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Distinguishing Features:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Pain rarely radiates below knee</li>
                        <li>• No dermatomal distribution</li>
                        <li>• Mechanical pain pattern</li>
                        <li>• Response to SI joint interventions</li>
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
                      and functional limitations specific to SI joint dysfunction.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain location and radiation patterns</li>
                      <li>• Relationship to activities and positions</li>
                      <li>• History of trauma or pregnancy</li>
                      <li>• Previous treatments and responses</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Palpation of SI joint and surrounding structures</li>
                      <li>• Assessment of pelvic alignment and symmetry</li>
                      <li>• Evaluation of hip and lumbar spine mobility</li>
                      <li>• Neurological examination (typically normal)</li>
                      <li>• Gait analysis and functional movement assessment</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Provocative Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• FABER test (Patrick's test)</li>
                      <li>• Gaenslen's test</li>
                      <li>• Compression and distraction tests</li>
                      <li>• Thigh thrust test</li>
                      <li>• Sacral thrust test</li>
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
                          Initial imaging to assess joint structure, alignment,
                          and rule out other pathology.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Joint space assessment</li>
                          <li>• Sclerosis and erosions</li>
                          <li>• Pelvic alignment evaluation</li>
                          <li>• Exclusion of fractures</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Initial Assessment</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI (Magnetic Resonance Imaging)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Detailed assessment of soft tissues, inflammation,
                          and bone marrow changes in SI joints.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Bone marrow edema detection</li>
                          <li>• Cartilage and ligament evaluation</li>
                          <li>• Inflammatory changes assessment</li>
                          <li>• Exclusion of other pathology</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Detailed Evaluation</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Scan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Excellent bone detail for assessing structural changes
                          and guiding interventional procedures.
                        </p>
                        <Badge variant="outline">Structural Detail</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Diagnostic SI Joint Injection</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Gold standard for confirming SI joint as pain source
                          through fluoroscopy-guided local anesthetic injection.
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
                    Diagnostic Criteria for SI Joint Dysfunction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Pain below L5 level</li>
                        <li>• Unilateral buttock/lower back pain</li>
                        <li>• Positive provocative tests (≥3 positive)</li>
                        <li>• Absence of neurological signs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Confirmatory Tests:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• &gt;75% pain relief with diagnostic injection</li>
                        <li>• Imaging evidence of SI joint pathology</li>
                        <li>• Exclusion of other pain sources</li>
                        <li>• Response to SI joint-specific treatments</li>
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
                        <li>• Pelvic stabilization exercises</li>
                        <li>• Core strengthening programs</li>
                        <li>• Manual therapy and mobilization</li>
                        <li>• Postural training and education</li>
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
                        <li>• Avoid aggravating positions</li>
                        <li>• Use of SI joint belts/supports</li>
                        <li>• Proper body mechanics training</li>
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
                      <CardTitle className="text-lg">Manual Therapies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Osteopathic manipulation</li>
                        <li>• Chiropractic adjustments</li>
                        <li>• Massage therapy</li>
                        <li>• Myofascial release</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Pregnancy-Specific Care</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Prenatal support belts</li>
                        <li>• Modified exercise programs</li>
                        <li>• Safe positioning techniques</li>
                        <li>• Postpartum rehabilitation</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Specialized care</Badge>
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
                        <li>• Yoga and Pilates</li>
                        <li>• Heat and cold therapy</li>
                        <li>• Mind-body techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Adjunctive therapy</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain reduction, improved function, pelvic stability,
                    and prevention of recurrence through targeted exercises and lifestyle modifications.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Minimally Invasive Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">SI Joint Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Fluoroscopy-guided injection of corticosteroids and local anesthetic
                        directly into the SI joint for both diagnosis and treatment.
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
                        <Badge variant="secondary">80-90% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Radiofrequency Ablation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Heat treatment to interrupt pain signals from the lateral branch nerves
                        that supply the SI joint, providing longer-lasting relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting pain relief (6-24 months)</li>
                          <li>• Minimally invasive procedure</li>
                          <li>• Can be repeated when effective</li>
                          <li>• Good safety profile</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">70-85% success rate</Badge>
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
                        and reduce inflammation in the SI joint.
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

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Prolotherapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of proliferative agents to strengthen ligaments
                        and improve SI joint stability.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Ligament laxity treatment</li>
                          <li>• Joint stabilization</li>
                          <li>• Chronic pain management</li>
                          <li>• Alternative to surgery</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Regenerative medicine</Badge>
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
                        <CardTitle className="text-lg">SI Joint Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical fusion of the sacroiliac joint to eliminate motion
                          and provide stability in severe, refractory cases.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Severe SI joint dysfunction</li>
                              <li>• Failed conservative and interventional treatment</li>
                              <li>• Significant functional impairment</li>
                              <li>• Confirmed SI joint pain source</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Definitive treatment</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Minimally Invasive SI Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Advanced techniques using smaller incisions and specialized
                          implants to achieve SI joint fusion with reduced morbidity.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Advantages:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Smaller incisions</li>
                              <li>• Reduced blood loss</li>
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
                            <li>• Confirmed SI joint pain source</li>
                            <li>• Failed 6+ months conservative treatment</li>
                            <li>• Positive response to diagnostic injections</li>
                            <li>• Absence of psychological contraindications</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Expected Outcomes:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 70-85% good to excellent results</li>
                            <li>• Significant pain reduction</li>
                            <li>• Improved functional capacity</li>
                            <li>• High patient satisfaction rates</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <SafeImage
                          src="/images/expertise/minimally-invasive-spine-surgery.jpg"
                          alt="Minimally invasive SI joint surgery"
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
                      <li>• 60-80% improvement with comprehensive conservative care</li>
                      <li>• Physical therapy shows excellent results in motivated patients</li>
                      <li>• Pregnancy-related dysfunction often resolves postpartum</li>
                      <li>• Early intervention leads to better outcomes</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Interventional Procedure Success
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• SI joint injections: 80-90% short-term relief</li>
                      <li>• Radiofrequency ablation: 70-85% long-term improvement</li>
                      <li>• PRP therapy: Emerging evidence shows promise</li>
                      <li>• Combination approaches often most effective</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Surgical Outcomes
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• SI joint fusion: 70-85% excellent results</li>
                      <li>• Minimally invasive techniques show superior outcomes</li>
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
                      <li>• Absence of psychological comorbidities</li>
                      <li>• Strong patient motivation and compliance</li>
                      <li>• Pregnancy-related dysfunction</li>
                      <li>• Younger age at presentation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenging Prognostic Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Chronic pain duration (&gt;6 months)</li>
                      <li>• Multiple previous failed treatments</li>
                      <li>• Concurrent lumbar spine pathology</li>
                      <li>• Inflammatory arthritis involvement</li>
                      <li>• Significant psychological distress</li>
                      <li>• Poor social support systems</li>
                      <li>• Work-related injury claims</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Long-term Management Keys
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Success depends on accurate diagnosis, appropriate treatment selection,
                      patient education, and ongoing maintenance of pelvic stability through
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
                    Core Strengthening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop strong core muscles to support pelvic stability and reduce SI joint stress.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Deep abdominal muscle training</li>
                    <li>• Pelvic floor strengthening</li>
                    <li>• Multifidus muscle activation</li>
                    <li>• Progressive resistance training</li>
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
                    Learn and practice correct movement patterns to protect SI joints during daily activities.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Safe lifting techniques</li>
                    <li>• Proper sitting and standing posture</li>
                    <li>• Ergonomic workplace setup</li>
                    <li>• Sleep position optimization</li>
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
                    Adopt healthy lifestyle habits that support overall spinal and pelvic health.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain healthy body weight</li>
                    <li>• Regular low-impact exercise</li>
                    <li>• Stress management techniques</li>
                    <li>• Adequate sleep and recovery</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Move className="h-5 w-5 text-purple-500" />
                    Movement and Flexibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain optimal flexibility and mobility to prevent SI joint stiffness and dysfunction.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Hip flexor stretching</li>
                    <li>• Piriformis muscle flexibility</li>
                    <li>• Hamstring lengthening</li>
                    <li>• Regular movement breaks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Risk Awareness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recognize and modify activities that may increase SI joint dysfunction risk.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Avoid prolonged sitting</li>
                    <li>• Modify high-impact activities</li>
                    <li>• Use supportive devices when needed</li>
                    <li>• Seek early treatment for pain</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    Pregnancy-Specific Prevention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Special considerations for preventing SI joint dysfunction during and after pregnancy.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Prenatal exercise programs</li>
                    <li>• Proper support belt usage</li>
                    <li>• Safe movement during pregnancy</li>
                    <li>• Postpartum rehabilitation</li>
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
                Take Our SI Joint Assessment
              </h2>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to help determine if your symptoms might be related to
                sacroiliac joint dysfunction and learn about appropriate next steps.
              </p>

              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle>Quick SI Joint Dysfunction Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">Do you experience any of the following?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Lower back pain below the belt line
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          One-sided buttock pain
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain with getting up from sitting
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Difficulty with stairs
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain with single-leg standing
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Groin or anterior thigh pain
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Pain worse with prolonged sitting
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          History of pregnancy or trauma
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you checked 3 or more items, you may benefit from evaluation for SI joint dysfunction.
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
                  <h3 className="font-semibold text-center mb-2">Lower Back Pain</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Comprehensive guide to lower back pain causes and treatments
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/patient-resources/conditions/herniated-disc">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Activity className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-center mb-2">Exercise Library</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Targeted exercises for spine and pelvic health
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

SacroiliacArthropathy.displayName = 'SacroiliacArthropathy';

export default SacroiliacArthropathy;
