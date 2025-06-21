import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '@/components/PageHeader';
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
  Gauge
} from "lucide-react";

const Sciatica: React.FC = () => {
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
    <StandardPageLayout title="Sciatica - Comprehensive Guide" showHeader={false}>
      <PageHeader
        title="Sciatica: Complete Guide"
        subtitle="Understanding sciatica: causes, symptoms, diagnosis, and comprehensive treatment options for sciatic nerve pain from conservative management to advanced interventional procedures."
        backgroundImage="/images/spine-conditions/sciatica.jpg"
        enableParallax={true}
      />

      <main className="flex-1">

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
                  <p className="text-sm text-muted-foreground">10-40% lifetime incidence</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Peak Age</h3>
                  <p className="text-sm text-muted-foreground">40-50 years old</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Most Common</h3>
                  <p className="text-sm text-muted-foreground">L5-S1 nerve root</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Recovery Rate</h3>
                  <p className="text-sm text-muted-foreground">80-90% within 6 weeks</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Sciatica Section */}
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
                  What is Sciatica?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Sciatica is a symptom characterized by pain that radiates along the path of the sciatic nerve, 
                  which branches from your lower back through your hips and buttocks and down each leg. 
                  It typically affects only one side of your body.
                </p>
                <p className="text-muted-foreground mb-6">
                  The sciatic nerve is the longest and widest nerve in the human body, running from the lower back 
                  to the foot. When this nerve becomes compressed, irritated, or inflamed, it can cause the 
                  characteristic shooting pain, numbness, tingling, and weakness associated with sciatica.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Usually affects one leg, though bilateral sciatica can occur</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Pain can range from mild ache to sharp, burning sensation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Often worsens with sitting, coughing, or sneezing</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-conditions/sciatica.jpg"
                  alt="Sciatica nerve anatomy illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                  Sciatic nerve pathway from lower back through leg showing areas of pain radiation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anatomy and Nerve Pathway Section */}
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
              Sciatic Nerve Anatomy & Pathway
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
                <TabsTrigger value="pathway" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Nerve Pathway
                </TabsTrigger>
                <TabsTrigger value="dermatomes" className={cn(
                  "text-center",
                  deviceInfo.isMobile ? "py-3" : "py-3"
                )}>
                  Pain Patterns
                </TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Sciatic Nerve Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Nerve Roots (L4-S3)</h4>
                        <p className="text-sm text-muted-foreground">
                          The sciatic nerve is formed by nerve roots from L4, L5, S1, S2, and S3 vertebrae. 
                          These roots combine to form the largest nerve in the body.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Nerve Divisions</h4>
                        <p className="text-sm text-muted-foreground">
                          The sciatic nerve divides into two main branches: the tibial nerve (medial) 
                          and the common fibular nerve (lateral), usually at the knee level.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Nerve Function</h4>
                        <p className="text-sm text-muted-foreground">
                          Provides motor control to hamstring muscles, lower leg muscles, and foot muscles. 
                          Also provides sensation to the posterior thigh, lower leg, and foot.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <SafeImage
                      src="/images/spine-anatomy/sciatic-nerve-anatomy.jpg"
                      alt="Sciatic nerve anatomy"
                      className="w-full h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pathway" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Sciatic Nerve Pathway</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Lower Back</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Nerve roots L4-S3 exit spinal canal
                        </p>
                        <p className="text-xs">
                          Origin: Lumbosacral plexus formation
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Pelvis & Hip</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Passes through greater sciatic foramen
                        </p>
                        <p className="text-xs">
                          Below piriformis muscle (usually)
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Thigh</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Runs down posterior thigh
                        </p>
                        <p className="text-xs">
                          Innervates hamstring muscles
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-center">Lower Leg</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Divides into tibial and fibular nerves
                        </p>
                        <p className="text-xs">
                          Controls calf and foot muscles
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center">
                    <SafeImage
                      src="/images/spine-anatomy/sciatic-nerve-pathway.jpg"
                      alt="Complete sciatic nerve pathway illustration"
                      className="w-full max-w-md mx-auto h-auto rounded-lg"
                      fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dermatomes" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Sciatica Pain Patterns by Nerve Root</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">L4 Nerve Root</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Pain Distribution:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Lower back to anterior thigh</li>
                            <li>• Medial leg to medial foot</li>
                            <li>• Big toe area</li>
                          </ul>
                          <p className="text-sm font-semibold mt-3">Weakness:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Knee extension (quadriceps)</li>
                            <li>• Ankle dorsiflexion</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">L5 Nerve Root</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Pain Distribution:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Lower back to lateral thigh</li>
                            <li>• Lateral leg to dorsal foot</li>
                            <li>• First three toes</li>
                          </ul>
                          <p className="text-sm font-semibold mt-3">Weakness:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Ankle dorsiflexion</li>
                            <li>• Big toe extension</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">S1 Nerve Root</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Pain Distribution:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Lower back to posterior thigh</li>
                            <li>• Posterior/lateral leg</li>
                            <li>• Lateral foot and little toe</li>
                          </ul>
                          <p className="text-sm font-semibold mt-3">Weakness:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Ankle plantarflexion</li>
                            <li>• Toe flexion</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">S2-S3 Nerve Roots</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Pain Distribution:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Buttock and posterior thigh</li>
                            <li>• Posterior leg (less common)</li>
                            <li>• Saddle area (S2-S4)</li>
                          </ul>
                          <p className="text-sm font-semibold mt-3">Function:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Bowel and bladder control</li>
                            <li>• Sexual function</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
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
                        <h4 className="font-semibold mb-2">Herniated Disc</h4>
                        <p className="text-sm text-muted-foreground">
                          Most common cause (90% of cases). When disc material presses on nerve roots,
                          it can cause inflammation and compression leading to sciatica.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Spinal Stenosis</h4>
                        <p className="text-sm text-muted-foreground">
                          Narrowing of the spinal canal can compress nerve roots, particularly
                          common in older adults with degenerative changes.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Piriformis Syndrome</h4>
                        <p className="text-sm text-muted-foreground">
                          Tightness or spasm of the piriformis muscle can compress the sciatic nerve
                          as it passes through or near the muscle.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Spondylolisthesis</h4>
                        <p className="text-sm text-muted-foreground">
                          Forward slippage of one vertebra over another can narrow the space
                          where nerves exit, causing compression.
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
                          Direct trauma, fractures, or muscle injuries can cause inflammation
                          and compression of the sciatic nerve.
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
                        Poor posture and body mechanics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Smoking (reduces blood flow)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Heavy lifting or twisting
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Prolonged sitting
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Non-Modifiable Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Age (peak 40-50 years)
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
                        Previous back injuries
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Diabetes (nerve damage risk)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Pregnancy (pressure changes)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Prevention Focus
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    While some risk factors cannot be changed, maintaining good posture, regular exercise,
                    healthy weight, and proper lifting techniques can significantly reduce sciatica risk.
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Primary Symptoms */}
              <div>
                <h3 className="text-xl font-bold mb-6">Primary Symptoms</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Radiating Pain</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Sharp, shooting, or burning pain that travels from the lower back
                          through the buttock and down the leg.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Usually affects one leg</li>
                          <li>• Can be constant or intermittent</li>
                          <li>• Often described as electric shock-like</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Numbness and Tingling</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Loss of sensation or pins-and-needles feeling along the nerve pathway.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• May affect specific areas of leg or foot</li>
                          <li>• Can be partial or complete numbness</li>
                          <li>• Often follows dermatomal patterns</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Gauge className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Muscle Weakness</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Weakness in specific muscle groups depending on which nerve root is affected.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Difficulty lifting foot (foot drop)</li>
                          <li>• Weakness in calf muscles</li>
                          <li>• Trouble standing on toes or heels</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Symptom Characteristics */}
              <div>
                <h3 className="text-xl font-bold mb-6">Symptom Characteristics</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Pain Triggers (Worsening Factors)
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Sitting for prolonged periods</li>
                      <li>• Coughing, sneezing, or straining</li>
                      <li>• Forward bending or flexion</li>
                      <li>• Sudden movements or jarring</li>
                      <li>• Walking or standing (sometimes)</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Pain Relief Factors
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Lying down (especially on unaffected side)</li>
                      <li>• Walking or gentle movement</li>
                      <li>• Applying heat or cold</li>
                      <li>• Changing positions frequently</li>
                      <li>• Gentle stretching</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Pain Quality Descriptions
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Sharp, shooting, or stabbing</li>
                      <li>• Burning or searing sensation</li>
                      <li>• Electric shock-like jolts</li>
                      <li>• Deep aching or throbbing</li>
                      <li>• Cramping or muscle spasms</li>
                    </ul>
                  </Card>
                </div>
              </div>
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
                      <li>• Progressive weakness in both legs</li>
                      <li>• Numbness in the saddle area (groin/buttocks)</li>
                    </ul>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                      <li>• Severe, sudden onset of symptoms</li>
                      <li>• Complete foot drop or inability to walk</li>
                      <li>• Signs of cauda equina syndrome</li>
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
                      Detailed assessment of pain characteristics, onset, triggers,
                      and functional limitations.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pain location and radiation pattern</li>
                      <li>• Onset and duration of symptoms</li>
                      <li>• Aggravating and relieving factors</li>
                      <li>• Previous treatments and responses</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Neurological testing (strength, reflexes, sensation)</li>
                      <li>• Straight leg raise test (Lasègue's sign)</li>
                      <li>• Crossed straight leg raise test</li>
                      <li>• Slump test for neural tension</li>
                      <li>• Gait analysis and posture assessment</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Specialized Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Piriformis test (FAIR test)</li>
                      <li>• Bowstring test</li>
                      <li>• Femoral nerve stretch test</li>
                      <li>• Deep tendon reflex testing</li>
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
                          Gold standard for diagnosing disc herniation and nerve compression.
                          Shows soft tissue detail and neural structures.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Identifies disc herniation location and size</li>
                          <li>• Shows nerve root compression</li>
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
                        <h4 className="font-semibold mb-2">CT Scan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Good for visualizing bone structures and calcified disc material.
                          Useful when MRI is contraindicated.
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
                          Shows bone alignment and rules out fractures or
                          spondylolisthesis. Limited for soft tissue evaluation.
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
                          Electrophysiological studies to assess nerve function
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
                    Diagnostic Criteria for Sciatica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Criteria:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Unilateral leg pain greater than back pain</li>
                        <li>• Pain radiates below the knee</li>
                        <li>• Positive straight leg raise test</li>
                        <li>• Neurological deficits in specific distribution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Imaging Correlation:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Disc herniation at appropriate level</li>
                        <li>• Nerve root compression or displacement</li>
                        <li>• Clinical symptoms match imaging findings</li>
                        <li>• Exclusion of other pathology</li>
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
                        <li>• Avoid prolonged sitting or bed rest</li>
                        <li>• Gentle movement and walking as tolerated</li>
                        <li>• Proper posture and body mechanics</li>
                        <li>• Gradual return to normal activities</li>
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
                        <li>• Nerve mobilization exercises</li>
                        <li>• Core strengthening programs</li>
                        <li>• Flexibility and stretching routines</li>
                        <li>• Manual therapy techniques</li>
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
                        <li>• NSAIDs for inflammation and pain</li>
                        <li>• Neuropathic pain medications</li>
                        <li>• Muscle relaxants for spasms</li>
                        <li>• Short-term oral corticosteroids</li>
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
                        <li>• Ice packs for acute inflammation</li>
                        <li>• Heat therapy for muscle relaxation</li>
                        <li>• Alternating hot/cold treatments</li>
                        <li>• Professional modalities (ultrasound)</li>
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
                        <li>• Chiropractic manipulation</li>
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
                        <li>• Ergonomic improvements</li>
                        <li>• Stress management techniques</li>
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
                    Most sciatica cases (80-90%) resolve with conservative treatment within 6-12 weeks.
                    Early mobilization and staying active are key to recovery.
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
                        Corticosteroid injection directly around the affected nerve root
                        to reduce inflammation and provide pain relief.
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
                        <Badge variant="secondary">60-80% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Selective Nerve Root Blocks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Targeted injection around specific nerve root for both
                        diagnostic and therapeutic purposes.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Confirms pain source</li>
                          <li>• Provides targeted relief</li>
                          <li>• Guides surgical planning</li>
                          <li>• Minimally invasive procedure</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Diagnostic & therapeutic</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Piriformis Muscle Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Injection of anesthetic and steroid into the piriformis muscle
                        for piriformis syndrome-related sciatica.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Indications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Piriformis syndrome diagnosis</li>
                          <li>• Muscle spasm and tightness</li>
                          <li>• Failed conservative treatment</li>
                          <li>• Positive piriformis tests</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Specific indication</Badge>
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
                        providing longer-lasting pain relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Applications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Facet joint denervation</li>
                          <li>• Sacroiliac joint treatment</li>
                          <li>• Chronic pain management</li>
                          <li>• Failed injection therapy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Long-lasting relief</Badge>
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
                        <CardTitle className="text-lg">Microdiscectomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Minimally invasive removal of herniated disc material
                          that is compressing the nerve root.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Large disc herniation</li>
                              <li>• Progressive neurological deficit</li>
                              <li>• Failed conservative treatment (6-12 weeks)</li>
                              <li>• Severe, disabling pain</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Gold Standard</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Endoscopic Discectomy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Ultra-minimally invasive approach using endoscope
                          for disc removal with smaller incision.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Benefits:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Smaller incision (7-8mm)</li>
                              <li>• Faster recovery time</li>
                              <li>• Less tissue damage</li>
                              <li>• Outpatient procedure</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Minimally invasive</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Laminectomy/Laminotomy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Removal of part or all of the lamina (back part of vertebra)
                            to decompress the spinal canal and nerve roots.
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Spinal stenosis with sciatica</li>
                              <li>• Multiple level involvement</li>
                              <li>• Central canal narrowing</li>
                              <li>• Failed discectomy</li>
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
                        <Badge variant="outline">Decompression surgery</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Success Rates
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 85-95% improvement in leg pain</li>
                        <li>• 70-85% improvement in back pain</li>
                        <li>• 90%+ patient satisfaction rates</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Rapid relief of nerve compression symptoms</li>
                        <li>• Return to normal activities within 6-12 weeks</li>
                        <li>• Low recurrence rates (5-10%)</li>
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
                <h3 className="text-xl font-bold mb-6">Natural Recovery Timeline</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Acute Phase (0-2 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Most severe pain and inflammation. Focus on pain management,
                          gentle movement, and avoiding bed rest.
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
                        <h4 className="font-semibold mb-2">Subacute Phase (2-6 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Gradual improvement in pain and function. Begin structured
                          physical therapy and progressive activity increase.
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
                        <h4 className="font-semibold mb-2">Recovery Phase (6-12 weeks)</h4>
                        <p className="text-sm text-muted-foreground">
                          Significant improvement in most patients. Return to normal
                          activities with continued strengthening and prevention focus.
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
                        <h4 className="font-semibold mb-2">Long-term (3-12 months)</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete resolution in most cases. Focus on maintaining
                          gains and preventing recurrence through lifestyle modifications.
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
                      <li>• Younger age (under 40 years)</li>
                      <li>• Good general health</li>
                      <li>• No previous episodes</li>
                      <li>• Absence of psychological factors</li>
                      <li>• Early mobilization and activity</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Challenging Factors
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Chronic symptoms (over 12 weeks)</li>
                      <li>• Large disc herniation</li>
                      <li>• Significant neurological deficits</li>
                      <li>• Multiple comorbidities</li>
                      <li>• Psychological distress</li>
                      <li>• Work-related factors</li>
                    </ul>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Expected Outcomes
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 80-90% improve within 6 weeks</li>
                      <li>• 95% improve within 12 weeks</li>
                      <li>• Recurrence rate: 5-15% annually</li>
                      <li>• Most return to full activity</li>
                      <li>• Surgery needed in 5-10% of cases</li>
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
                    <li>• Core strengthening exercises</li>
                    <li>• Flexibility and stretching routines</li>
                    <li>• Low-impact aerobic activities</li>
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
                  <CardTitle>Proper Body Mechanics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Correct lifting techniques</li>
                    <li>• Maintain neutral spine posture</li>
                    <li>• Avoid prolonged sitting</li>
                    <li>• Use ergonomic workstation setup</li>
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
                  <CardTitle>Workplace Ergonomics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Adjustable chair with lumbar support</li>
                    <li>• Monitor at eye level</li>
                    <li>• Take regular movement breaks</li>
                    <li>• Use proper lifting equipment</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/lifestyle-modifications">
                        Ergonomic Guidelines
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
                    <li>• Early intervention strategies</li>
                    <li>• Stress reduction techniques</li>
                    <li>• Sleep hygiene practices</li>
                    <li>• Mindfulness and relaxation</li>
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
                  <CardTitle>Early Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Know warning signs</li>
                    <li>• Seek early treatment</li>
                    <li>• Monitor symptom progression</li>
                    <li>• Regular health check-ups</li>
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
                  Take Control of Your Sciatica
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let sciatica limit your daily activities and quality of life.
                  Our comprehensive assessment tools and expert guidance can help you
                  understand your condition and find the most effective treatment approach.
                </p>
                <div className={cn(
                  "flex justify-center gap-4",
                  deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
                )}>
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">
                      <Target className="mr-2 h-4 w-4" />
                      Take Sciatica Assessment
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
                      Detailed evaluation of your pain patterns and functional limitations
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
                      Tailored treatment plans from conservative to interventional options
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
                    src="/images/spine-conditions/lumbar-disc-herniation.jpg"
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
                    Learn about herniated discs, the most common cause of sciatica,
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
                    src="/images/spine-conditions/spinal-stenosis.jpg"
                    alt="Spinal stenosis information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Spinal Stenosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand spinal stenosis, another common cause of sciatica,
                    especially in older adults.
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
                    for sciatica relief and prevention.
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

Sciatica.displayName = 'Sciatica';

export default Sciatica;
