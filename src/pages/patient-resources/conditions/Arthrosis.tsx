import React, { useEffect } from 'react';
import StandardPageLayout from '@/components/StandardPageLayout';
import ConditionHeroSection from '@/components/medical-conditions/shared/ConditionHeroSection';
import ConditionQuickFacts from '@/components/medical-conditions/shared/ConditionQuickFacts';
import ConditionOverviewSection from '@/components/medical-conditions/shared/ConditionOverviewSection';
import ArthrosisTypesSection from '@/components/medical-conditions/arthrosis/ArthrosisTypesSection';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

import {
  Users,
  TrendingUp,
  MapPin,
  CheckCircle
} from "lucide-react";

const Arthrosis: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Basic fallback structure
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    home: { welcome: { learnMore: "Learn More" }, featuredProcedures: { title: "Featured Procedures" } },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Quick facts data
  const quickFacts = [
    {
      icon: Users,
      title: "Prevalence",
      value: "85% over age 60"
    },
    {
      icon: TrendingUp,
      title: "Onset Age",
      value: "40+ years typically"
    },
    {
      icon: MapPin,
      title: "Most Common",
      value: "Cervical & Lumbar"
    },
    {
      icon: CheckCircle,
      title: "Management",
      value: "Highly treatable"
    }
  ];

  // Overview content
  const overviewDescription = [
    "Spinal arthrosis, also known as spondylosis, is a degenerative condition affecting the joints, discs, and bones of the spine. It represents the natural wear-and-tear process that occurs with aging, leading to structural changes in the vertebrae, facet joints, and intervertebral discs.",
    "This condition involves the formation of bone spurs (osteophytes), disc degeneration, ligament thickening, and facet joint arthritis. While often asymptomatic, it can cause pain, stiffness, and neurological symptoms when nerve structures become compressed."
  ];

  const overviewKeyPoints = [
    { text: "Progressive degenerative process affecting all spinal structures" },
    { text: "Can affect cervical, thoracic, or lumbar spine regions" },
    { text: "Often asymptomatic but may cause significant symptoms" }
  ];

  return (
    <StandardPageLayout title="Arthrosis (Spondylosis) - Comprehensive Guide" showHeader={false}>
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <ConditionHeroSection
          title="Arthrosis (Spondylosis): Complete Guide"
          subtitle=""
          description="Understanding spinal arthrosis and spondylosis: degenerative joint changes, causes, symptoms, diagnosis, and comprehensive treatment options from conservative management to advanced surgical interventions for cervical, thoracic, and lumbar spine."
          heroImageSrc="/images/spine-conditions/cervical-spondylosis.jpg"
          heroImageAlt="Arthrosis spine anatomy"
        />

        {/* Quick Facts Section */}
        <ConditionQuickFacts facts={quickFacts} />

        {/* What is Arthrosis Section */}
        <ConditionOverviewSection
          title="What is Spinal Arthrosis?"
          description={overviewDescription}
          keyPoints={overviewKeyPoints}
          imageSrc="/images/spine-conditions/cervical-spondylosis.jpg"
          imageAlt="Spinal arthrosis anatomy illustration"
          imageCaption="Comparison showing normal spine vs. arthrotic changes with bone spurs and disc degeneration"
        />

        {/* Types and Pathophysiology Section */}
        <ArthrosisTypesSection />

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
                        <h4 className="font-semibold mb-2">Natural Aging Process</h4>
                        <p className="text-sm text-muted-foreground">
                          The primary cause of spinal arthrosis is the natural aging process.
                          Over time, spinal structures undergo wear and tear, leading to degenerative changes.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Mechanical Stress</h4>
                        <p className="text-sm text-muted-foreground">
                          Repetitive loading, poor posture, and biomechanical stress accelerate
                          degenerative changes in spinal joints and discs.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Bone className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Genetic Predisposition</h4>
                        <p className="text-sm text-muted-foreground">
                          Family history and genetic factors influence the rate and severity
                          of degenerative changes in spinal structures.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Previous Injuries</h4>
                        <p className="text-sm text-muted-foreground">
                          Past spinal injuries, fractures, or trauma can accelerate degenerative
                          changes and lead to premature arthrosis.
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
                        Poor posture and ergonomics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Sedentary lifestyle
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Smoking (reduces disc nutrition)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Heavy manual labor
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
                        Gender (males slightly higher)
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
                        Metabolic disorders
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
                    healthy weight, and avoiding smoking can slow the progression of arthrotic changes.
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
                  <CardTitle className="text-center">Cervical Arthrosis</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Neck region (C1-C7)</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Pain Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Neck pain and stiffness</li>
                        <li>• Occipital headaches</li>
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
                        <li>• Arm numbness/tingling</li>
                        <li>• Hand weakness</li>
                        <li>• Reduced dexterity</li>
                        <li>• Myelopathy (severe cases)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced neck mobility</li>
                        <li>• Difficulty driving</li>
                        <li>• Sleep disturbances</li>
                        <li>• Work limitations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thoracic Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Thoracic Arthrosis</CardTitle>
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
                        <li>• Mid-back stiffness</li>
                        <li>• Rib pain</li>
                        <li>• Chest wall discomfort</li>
                        <li>• Pain with deep breathing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Often asymptomatic</li>
                        <li>• Rare myelopathy</li>
                        <li>• Intercostal neuralgia</li>
                        <li>• Trunk sensory changes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced trunk rotation</li>
                        <li>• Postural changes</li>
                        <li>• Breathing limitations</li>
                        <li>• Activity restrictions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lumbar Symptoms */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Lumbar Arthrosis</CardTitle>
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
                        <li>• Morning stiffness</li>
                        <li>• Buttock pain</li>
                        <li>• Leg pain (if stenotic)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Neurological Symptoms
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Neurogenic claudication</li>
                        <li>• Leg numbness/weakness</li>
                        <li>• Foot drop (severe cases)</li>
                        <li>• Bladder issues (rare)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-orange-500" />
                        Functional Impact
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Walking limitations</li>
                        <li>• Bending difficulties</li>
                        <li>• Standing intolerance</li>
                        <li>• Sleep disruption</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Symptom Patterns */}
            <div className="mt-12">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Important Symptom Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Typical Characteristics:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Gradual onset over months to years</li>
                        <li>• Morning stiffness that improves with movement</li>
                        <li>• Pain worse with prolonged activity</li>
                        <li>• Weather-related symptom changes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Progressive Nature:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Symptoms may fluctuate over time</li>
                        <li>• Periods of exacerbation and remission</li>
                        <li>• Functional decline with advanced disease</li>
                        <li>• Compensation patterns develop</li>
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
                      Comprehensive assessment of symptom onset, progression patterns,
                      and functional limitations related to degenerative changes.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Symptom timeline and progression</li>
                      <li>• Pain patterns and triggers</li>
                      <li>• Functional limitations assessment</li>
                      <li>• Previous treatments and responses</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Physical Examination</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Range of motion assessment</li>
                      <li>• Postural evaluation</li>
                      <li>• Neurological examination</li>
                      <li>• Palpation for tenderness and deformity</li>
                      <li>• Functional movement testing</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Specialized Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spurling's test (cervical)</li>
                      <li>• Extension test (lumbar)</li>
                      <li>• Neurodynamic testing</li>
                      <li>• Functional capacity evaluation</li>
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
                          First-line imaging showing bone changes, disc space narrowing,
                          and osteophyte formation characteristic of arthrosis.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Disc space narrowing</li>
                          <li>• Osteophyte formation</li>
                          <li>• Facet joint changes</li>
                          <li>• Spinal alignment assessment</li>
                        </ul>
                        <Badge variant="secondary" className="mt-2">Primary Diagnostic Tool</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">MRI (Magnetic Resonance Imaging)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Detailed soft tissue evaluation when neurological symptoms
                          are present or surgical intervention is considered.
                        </p>
                        <Badge variant="outline">For Neurological Symptoms</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">CT Scan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Excellent bone detail for surgical planning and assessment
                          of complex bony changes.
                        </p>
                        <Badge variant="outline">Surgical Planning</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Functional Imaging</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Flexion-extension X-rays to assess spinal stability
                          and dynamic changes.
                        </p>
                        <Badge variant="outline">Dynamic Assessment</Badge>
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
                    Diagnostic Criteria for Spinal Arthrosis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Radiographic Features:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Disc space narrowing</li>
                        <li>• Osteophyte formation</li>
                        <li>• Subchondral sclerosis</li>
                        <li>• Facet joint arthritis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Clinical Correlation:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Age-appropriate changes</li>
                        <li>• Symptom-imaging correlation</li>
                        <li>• Functional impact assessment</li>
                        <li>• Differential diagnosis exclusion</li>
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
                      <CardTitle className="text-lg">Lifestyle Modifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Weight management and nutrition</li>
                        <li>• Activity modification and pacing</li>
                        <li>• Ergonomic improvements</li>
                        <li>• Sleep optimization</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="secondary">Foundation of care</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Physical Therapy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Strengthening exercises</li>
                        <li>• Flexibility and mobility training</li>
                        <li>• Postural correction</li>
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
                        <li>• NSAIDs for inflammation</li>
                        <li>• Acetaminophen for pain</li>
                        <li>• Topical analgesics</li>
                        <li>• Muscle relaxants (short-term)</li>
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
                        <li>• Heat for muscle relaxation</li>
                        <li>• Cold for acute inflammation</li>
                        <li>• Contrast therapy</li>
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
                        <li>• Acupuncture for pain relief</li>
                        <li>• Massage therapy</li>
                        <li>• Chiropractic care</li>
                        <li>• Mind-body techniques</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Complementary</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Exercise Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Low-impact aerobic exercise</li>
                        <li>• Swimming and water therapy</li>
                        <li>• Yoga and tai chi</li>
                        <li>• Home exercise programs</li>
                      </ul>
                      <div className="mt-4">
                        <Badge variant="outline">Long-term benefit</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Conservative Treatment Goals
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    The primary goals are pain management, maintaining function, preventing progression,
                    and improving quality of life through non-invasive approaches.
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
                        Targeted injection of anesthetic and steroid into arthritic facet joints
                        to reduce inflammation and provide pain relief.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Benefits:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Diagnostic and therapeutic</li>
                          <li>• Targeted pain relief</li>
                          <li>• Minimal downtime</li>
                          <li>• Can be repeated</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">70-80% success rate</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Radiofrequency Ablation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Heat treatment to interrupt pain signals from arthritic facet joints,
                        providing longer-lasting relief than injections.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Advantages:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Long-lasting relief (6-24 months)</li>
                          <li>• Minimally invasive</li>
                          <li>• Outpatient procedure</li>
                          <li>• Repeatable if needed</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Long-term solution</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Epidural Steroid Injections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Anti-inflammatory medication delivered to the epidural space
                        to reduce nerve root inflammation and pain.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Indications:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Radicular pain symptoms</li>
                          <li>• Spinal stenosis</li>
                          <li>• Nerve root compression</li>
                          <li>• Failed conservative treatment</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">For nerve symptoms</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Regenerative Medicine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Emerging treatments using platelet-rich plasma (PRP) or stem cells
                        to promote healing and reduce inflammation.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Approaches:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• PRP injections</li>
                          <li>• Stem cell therapy</li>
                          <li>• Growth factor treatments</li>
                          <li>• Prolotherapy</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">Investigational</Badge>
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
                        <CardTitle className="text-lg">Spinal Fusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Surgical joining of vertebrae to eliminate motion at arthritic segments
                          and provide stability for severe degenerative changes.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Indications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Severe arthritic pain</li>
                              <li>• Spinal instability</li>
                              <li>• Failed conservative treatment</li>
                              <li>• Neurological compromise</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Definitive treatment</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Decompression Surgery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Removal of bone spurs, thickened ligaments, and other structures
                          compressing neural elements without fusion.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm">Procedures:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Laminectomy</li>
                              <li>• Foraminotomy</li>
                              <li>• Facetectomy</li>
                              <li>• Ligamentum flavum removal</li>
                            </ul>
                          </div>
                          <Badge variant="secondary">Motion-preserving</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Minimally Invasive Spine Surgery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Advanced surgical techniques using smaller incisions, specialized
                            instruments, and endoscopic or microscopic visualization to treat
                            arthrotic changes with reduced tissue damage.
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Advantages:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Smaller incisions</li>
                              <li>• Reduced blood loss</li>
                              <li>• Faster recovery</li>
                              <li>• Less postoperative pain</li>
                              <li>• Shorter hospital stay</li>
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

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Surgical Considerations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Surgery reserved for severe cases</li>
                        <li>• Careful patient selection important</li>
                        <li>• Realistic expectations essential</li>
                      </ul>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 80-90% good to excellent outcomes</li>
                        <li>• Significant pain relief achievable</li>
                        <li>• Functional improvement expected</li>
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
                <h3 className="text-xl font-bold mb-6">Disease Progression</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Generally Favorable Prognosis</h4>
                        <p className="text-sm text-muted-foreground">
                          Most people with spinal arthrosis can maintain good quality of life
                          with appropriate management and lifestyle modifications.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Progressive Nature</h4>
                        <p className="text-sm text-muted-foreground">
                          Arthrosis is a progressive condition, but the rate of progression
                          varies greatly between individuals and can be influenced by treatment.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Symptom Variability</h4>
                        <p className="text-sm text-muted-foreground">
                          Symptoms often fluctuate with periods of exacerbation and remission.
                          Many people experience stable or improving symptoms with treatment.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Functional Adaptation</h4>
                        <p className="text-sm text-muted-foreground">
                          The body often adapts to degenerative changes, and many people
                          develop effective coping strategies and compensation patterns.
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
                      Favorable Factors
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Younger age at onset</li>
                      <li>• Active lifestyle maintenance</li>
                      <li>• Healthy body weight</li>
                      <li>• Good muscle strength</li>
                      <li>• Positive attitude and coping skills</li>
                      <li>• Early intervention and treatment</li>
                    </ul>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Challenging Factors
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Advanced age</li>
                      <li>• Multiple level involvement</li>
                      <li>• Obesity and poor fitness</li>
                      <li>• Smoking and poor nutrition</li>
                      <li>• Psychological factors</li>
                      <li>• Occupational demands</li>
                    </ul>
                  </Card>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Long-term Outcomes
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 70-80% maintain good function with treatment</li>
                      <li>• Most people avoid need for surgery</li>
                      <li>• Quality of life can be preserved</li>
                      <li>• Symptoms often stabilize over time</li>
                      <li>• Effective management strategies develop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention and Lifestyle Section */}
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
              Prevention and Lifestyle Management
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
                    <li>• Low-impact aerobic activities</li>
                    <li>• Strength training for core and spine</li>
                    <li>• Flexibility and mobility exercises</li>
                    <li>• Balance and coordination training</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/exercise-library">
                        View Exercise Programs
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
                  <CardTitle>Posture & Ergonomics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Maintain neutral spine alignment</li>
                    <li>• Optimize workstation setup</li>
                    <li>• Use supportive furniture</li>
                    <li>• Take frequent movement breaks</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-safe-exercises">
                        Learn Proper Techniques
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
                    <li>• Maintain healthy body weight</li>
                    <li>• Quit smoking for better healing</li>
                    <li>• Eat anti-inflammatory diet</li>
                    <li>• Get adequate sleep and rest</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/lifestyle-modifications">
                        Lifestyle Guidelines
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Bone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Bone Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Adequate calcium and vitamin D</li>
                    <li>• Weight-bearing exercises</li>
                    <li>• Bone density monitoring</li>
                    <li>• Fall prevention strategies</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/spine-and-brain-health">
                        Bone Health Guide
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
                  <CardTitle>Stress Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Relaxation techniques</li>
                    <li>• Mindfulness and meditation</li>
                    <li>• Cognitive behavioral strategies</li>
                    <li>• Social support networks</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/patient-resources/individual-spine-health-programme">
                        Wellness Program
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
                    <li>• Regular medical check-ups</li>
                    <li>• Symptom tracking and monitoring</li>
                    <li>• Functional assessment</li>
                    <li>• Treatment plan adjustments</li>
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
                  Take Control of Your Spinal Health
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let spinal arthrosis limit your daily activities and quality of life.
                  Our comprehensive assessment tools and expert guidance can help you understand
                  your condition and develop an effective management strategy.
                </p>
                <div className={cn(
                  "flex justify-center gap-4",
                  deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
                )}>
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">
                      <Target className="mr-2 h-4 w-4" />
                      Take Spine Health Assessment
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
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Comprehensive Evaluation</h3>
                    <p className="text-sm text-muted-foreground">
                      Thorough assessment of your degenerative changes and functional impact
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Diagnosis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced imaging and clinical expertise for accurate arthrosis assessment
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Personalized Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored treatment plans from conservative to advanced interventions
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
                    src="/images/spine-conditions/spinal-stenosis.jpg"
                    alt="Spinal stenosis information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Spinal Stenosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about spinal stenosis, a common complication of advanced
                    arthrosis that can cause neurological symptoms.
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
                    src="/images/spine-conditions/facet-joints.jpg"
                    alt="Facet joint syndrome information"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Facet Joint Syndrome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand facet joint arthritis, a key component of spinal
                    arthrosis and common source of back pain.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/conditions/facet-joint-syndrome">
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
                    for managing arthrosis and maintaining spinal health.
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

Arthrosis.displayName = 'Arthrosis';

export default Arthrosis;
