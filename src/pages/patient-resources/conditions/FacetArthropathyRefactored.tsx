import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import StandardPageLayout from '@/components/StandardPageLayout';
import { ConditionHero, ConditionOverview, DegenerationProcess } from '@/components/medical-conditions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { facetArthropathyData } from '@/data/conditions/facet-arthropathy';
import {
  Calendar,
  Download,
  Phone,
  ArrowRight,
  Target,
  Activity,
  Shield,
  Heart,
  Brain,
  Stethoscope,
  Eye,
  Layers,
  Microscope,
  Zap
} from "lucide-react";

const FacetArthropathyRefactored: React.FC = () => {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: "Facet Arthropathy (Facet Joint Syndrome) - Comprehensive Guide",
    description: facetArthropathyData.info.description,
    keywords: ["facet arthropathy", "facet joint syndrome", "back pain", "spine conditions", "joint degeneration"],
    canonical: "/patient-resources/conditions/facet-arthropathy"
  };

  return (
    <StandardPageLayout 
      title={seoData.title}
      seoData={seoData}
      showHeader={false}
    >
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <ConditionHero
          title="Facet Arthropathy: Complete Guide"
          description={facetArthropathyData.info.description}
          backgroundImage="/images/spine-conditions/facet-joint-syndrome.jpg"
          quickFacts={facetArthropathyData.quickFacts}
        />

        {/* Overview Section */}
        <ConditionOverview
          title="What is Facet Arthropathy?"
          description={[
            "Facet arthropathy, also known as facet joint syndrome or facet joint arthritis, is a degenerative condition affecting the small joints (facet joints) that connect the vertebrae in the spine. These joints provide stability and guide spinal movement.",
            "When facet joints become inflamed, degenerated, or arthritic, they can cause significant pain and stiffness. This condition is a common source of axial (localized) back and neck pain, particularly in older adults."
          ]}
          keyPoints={[
            "Progressive degenerative condition affecting spinal stability joints",
            "Can affect any spinal level but most common in lumbar and cervical regions",
            "Often occurs alongside disc degeneration and spinal stenosis"
          ]}
          image="/images/spine-conditions/facet-joints.jpg"
        />

        {/* Anatomy & Degeneration Process */}
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
              Understanding Facet Joint Anatomy & Degeneration
            </h2>

            <Tabs defaultValue="anatomy" className="w-full max-w-4xl mx-auto">
              <TabsList className={cn(
                "grid mb-8",
                deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-3"
              )}>
                <TabsTrigger value="anatomy">Joint Anatomy</TabsTrigger>
                <TabsTrigger value="degeneration">Degeneration Process</TabsTrigger>
                <TabsTrigger value="classification">Classification</TabsTrigger>
              </TabsList>

              <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Facet Joint Structure</h3>
                    {facetArthropathyData.anatomicalComponents?.map((component, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-primary mb-2">{component.name}</h4>
                        <p className="text-sm text-muted-foreground">{component.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/spine-anatomy/facet-joint-anatomy.jpg"
                      alt="Detailed facet joint anatomy"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="degeneration">
                <DegenerationProcess
                  title="Degenerative Process in Facet Arthropathy"
                  stages={facetArthropathyData.degenerationStages || []}
                  structuralChanges={facetArthropathyData.structuralChanges}
                />
              </TabsContent>

              <TabsContent value="classification" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Facet Arthropathy Classification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Radiographic Grading (Weishaupt Classification)</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Grade 0 - Normal</h5>
                          <p className="text-sm text-green-700 dark:text-green-300">No degenerative changes visible</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Grade 1 - Mild</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Narrowing of joint space or small osteophytes</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Grade 2 - Moderate</h5>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Narrowing and osteophytes, sclerosis</p>
                        </div>
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Grade 3 - Severe</h5>
                          <p className="text-sm text-red-700 dark:text-red-300">Severe narrowing, large osteophytes, subchondral cysts</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Clinical Classification</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Primary Facet Arthropathy</h5>
                          <p className="text-sm text-muted-foreground">Age-related degeneration without underlying pathology</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Secondary Facet Arthropathy</h5>
                          <p className="text-sm text-muted-foreground">Following disc degeneration, trauma, or instability</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Post-surgical Changes</h5>
                          <p className="text-sm text-muted-foreground">Accelerated degeneration after spinal surgery</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h5 className="font-semibold text-sm">Inflammatory Arthropathy</h5>
                          <p className="text-sm text-muted-foreground">Associated with systemic inflammatory conditions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Causes and Risk Factors */}
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
                  {facetArthropathyData.causes.map((cause, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start gap-3">
                        {cause.icon}
                        <div>
                          <h4 className="font-semibold mb-2">{cause.title}</h4>
                          <p className="text-sm text-muted-foreground">{cause.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Symptoms</h3>
                <div className="space-y-4">
                  {facetArthropathyData.symptoms.map((symptom, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start gap-3">
                        {symptom.icon}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{symptom.title}</h4>
                            <Badge variant={symptom.severity === 'severe' ? 'destructive' : 'secondary'}>
                              {symptom.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{symptom.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis and Treatment */}
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
              Diagnosis & Treatment Options
            </h2>

            <Tabs defaultValue="diagnosis" className="w-full max-w-4xl mx-auto">
              <TabsList className={cn(
                "grid mb-8",
                deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-2"
              )}>
                <TabsTrigger value="diagnosis">Diagnostic Methods</TabsTrigger>
                <TabsTrigger value="treatment">Treatment Options</TabsTrigger>
              </TabsList>

              <TabsContent value="diagnosis" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {facetArthropathyData.diagnostics.map((diagnostic, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start gap-3">
                        {diagnostic.icon}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{diagnostic.name}</h4>
                            <Badge variant="outline">{diagnostic.accuracy}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{diagnostic.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="treatment" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  {['conservative', 'minimally-invasive'].map((category) => (
                    <div key={category}>
                      <h3 className="text-lg font-bold mb-4 capitalize">
                        {category.replace('-', ' ')} Treatments
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {facetArthropathyData.treatments
                          .filter(treatment => treatment.category === category)
                          .map((treatment, index) => (
                            <Card key={index} className="p-4">
                              <div className="flex items-start gap-3">
                                {treatment.icon}
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold">{treatment.name}</h4>
                                    <Badge variant="secondary">{treatment.effectiveness}</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{treatment.description}</p>
                                  <p className="text-xs text-muted-foreground">Duration: {treatment.duration}</p>
                                </div>
                              </div>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className={cn(
          "bg-primary/5",
          deviceInfo.isMobile ? "py-8" : "py-16"
        )}>
          <div className={cn(
            "container text-center",
            deviceInfo.isMobile ? "px-4" : ""
          )}>
            <h2 className={cn(
              "font-bold mb-6",
              deviceInfo.isMobile ? "text-2xl" : "text-3xl"
            )}>
              Get Expert Care for Facet Arthropathy
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let facet joint pain limit your daily activities. Our comprehensive approach 
              combines advanced diagnostics with proven treatment options.
            </p>
            <div className={cn(
              "flex justify-center gap-4",
              deviceInfo.isMobile ? "flex-col items-center" : "flex-row"
            )}>
              <Button asChild size={deviceInfo.isMobile ? "default" : "lg"}>
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size={deviceInfo.isMobile ? "default" : "lg"}>
                <Link to="/patient-resources">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  More Resources
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </StandardPageLayout>
  );
};

FacetArthropathyRefactored.displayName = 'FacetArthropathyRefactored';

export default FacetArthropathyRefactored;
