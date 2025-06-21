import React from 'react';
import SafeImage from '@/components/SafeImage';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

interface FacetJointAnatomySectionProps {
  className?: string;
}

const FacetJointAnatomySection: React.FC<FacetJointAnatomySectionProps> = ({
  className
}) => {
  const deviceInfo = useDeviceDetection();

  return (
    <section className={cn(
      "bg-muted/30",
      deviceInfo.isMobile ? "py-8" : "py-16",
      className
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
            <TabsTrigger value="anatomy" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Joint Anatomy
            </TabsTrigger>
            <TabsTrigger value="pathophysiology" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Degeneration Process
            </TabsTrigger>
            <TabsTrigger value="classification" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Classification System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Facet Joint Structure</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Articular Surfaces</h4>
                    <p className="text-sm text-muted-foreground">
                      Smooth cartilage-covered surfaces of superior and inferior articular processes
                      that form the synovial joint between adjacent vertebrae.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Joint Capsule</h4>
                    <p className="text-sm text-muted-foreground">
                      Fibrous capsule surrounding the joint, lined with synovial membrane
                      that produces lubricating synovial fluid.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cartilage</h4>
                    <p className="text-sm text-muted-foreground">
                      Hyaline cartilage covering the articular surfaces, providing smooth
                      movement and shock absorption during spinal motion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Innervation</h4>
                    <p className="text-sm text-muted-foreground">
                      Rich nerve supply from medial branches of dorsal rami, making
                      these joints significant pain generators when degenerated.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-anatomy/facet-joint-anatomy.jpg"
                  alt="Detailed facet joint anatomy"
                  className="w-full h-auto rounded-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pathophysiology" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center">Degenerative Process in Facet Arthropathy</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Card className="p-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Initial Cartilage Damage</h4>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Surface fibrillation and roughening</li>
                          <li>• Loss of cartilage elasticity</li>
                          <li>• Decreased proteoglycan content</li>
                          <li>• Increased water content initially</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Progressive Degeneration</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                          <li>• Cartilage thinning and erosion</li>
                          <li>• Subchondral bone sclerosis</li>
                          <li>• Joint space narrowing</li>
                          <li>• Synovial inflammation</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Advanced Changes</h4>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Osteophyte formation</li>
                          <li>• Joint capsule thickening</li>
                          <li>• Ligamentum flavum hypertrophy</li>
                          <li>• Potential spinal stenosis</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">End-Stage Disease</h4>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Complete cartilage loss</li>
                          <li>• Bone-on-bone contact</li>
                          <li>• Severe joint deformity</li>
                          <li>• Chronic pain and stiffness</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Contributing Factors
                    </h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Age-related wear and tear</li>
                      <li>• Biomechanical stress</li>
                      <li>• Genetic predisposition</li>
                      <li>• Previous spinal injuries</li>
                      <li>• Disc degeneration (secondary changes)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Pain Mechanisms
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Nociceptor activation in joint capsule</li>
                      <li>• Inflammatory mediator release</li>
                      <li>• Mechanical compression of nerve endings</li>
                      <li>• Referred pain patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

                  <div className="mt-6 text-center">
                    <SafeImage
                      src="/images/spine-anatomy/facet-joint-grading.jpg"
                      alt="Facet joint degeneration grading system"
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
  );
};

FacetJointAnatomySection.displayName = 'FacetJointAnatomySection';

export default FacetJointAnatomySection;
