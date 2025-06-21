import React from 'react';
import SafeImage from '@/components/SafeImage';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

interface ArthrosisTypesSectionProps {
  className?: string;
}

const ArthrosisTypesSection: React.FC<ArthrosisTypesSectionProps> = ({
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
          Types of Spinal Arthrosis & Degenerative Changes
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
            <TabsTrigger value="pathology" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Degenerative Changes
            </TabsTrigger>
            <TabsTrigger value="stages" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Progression Stages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cervical Spondylosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Degenerative changes in the neck region (C1-C7). Most commonly affects
                    C5-C6 and C6-C7 levels, causing neck pain and potential arm symptoms.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Common Features:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Disc space narrowing</li>
                      <li>• Uncovertebral joint arthritis</li>
                      <li>• Facet joint degeneration</li>
                      <li>• Ligamentum flavum thickening</li>
                    </ul>
                  </div>
                  <Badge variant="secondary" className="mt-3">Most Symptomatic</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thoracic Spondylosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Degenerative changes in the mid-back region (T1-T12). Less common
                    to cause symptoms due to rib cage stability and reduced mobility.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Characteristics:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Often asymptomatic</li>
                      <li>• May cause mid-back stiffness</li>
                      <li>• Rib articulation changes</li>
                      <li>• Potential myelopathy risk</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="mt-3">Least Symptomatic</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lumbar Spondylosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Degenerative changes in the lower back (L1-S1). Commonly affects
                    L4-L5 and L5-S1 levels, often causing back pain and leg symptoms.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Key Features:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Facet joint hypertrophy</li>
                      <li>• Disc degeneration</li>
                      <li>• Ligamentum flavum buckling</li>
                      <li>• Potential spinal stenosis</li>
                    </ul>
                  </div>
                  <Badge variant="secondary" className="mt-3">High Impact</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pathology" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Degenerative Process</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Disc Degeneration</h4>
                    <p className="text-sm text-muted-foreground">
                      Loss of disc height, water content, and elasticity. Leads to
                      increased stress on facet joints and ligaments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Osteophyte Formation</h4>
                    <p className="text-sm text-muted-foreground">
                      Bone spurs develop as the body attempts to stabilize degenerative
                      segments. Can compress neural structures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Facet Joint Arthritis</h4>
                    <p className="text-sm text-muted-foreground">
                      Cartilage wear in facet joints leads to bone-on-bone contact,
                      inflammation, and joint enlargement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ligament Changes</h4>
                    <p className="text-sm text-muted-foreground">
                      Ligamentum flavum thickening and buckling can contribute to
                      spinal canal narrowing and nerve compression.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-anatomy/degenerative-changes.jpg"
                  alt="Degenerative spine changes illustration"
                  className="w-full h-auto rounded-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stages" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center">Progression of Arthrotic Changes</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Card className="p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Early Stage</h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Mild disc space narrowing</li>
                          <li>• Early osteophyte formation</li>
                          <li>• Minimal symptoms</li>
                          <li>• Normal function maintained</li>
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
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Moderate Stage</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                          <li>• Significant disc degeneration</li>
                          <li>• Prominent bone spurs</li>
                          <li>• Facet joint arthritis</li>
                          <li>• Intermittent symptoms</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Advanced Stage</h4>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Severe disc collapse</li>
                          <li>• Large osteophytes</li>
                          <li>• Ligament thickening</li>
                          <li>• Persistent symptoms</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Severe Stage</h4>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Complete disc collapse</li>
                          <li>• Spinal canal stenosis</li>
                          <li>• Neurological symptoms</li>
                          <li>• Functional impairment</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <SafeImage
                  src="/images/spine-anatomy/spondylosis-progression.jpg"
                  alt="Spondylosis progression stages"
                  className="w-full max-w-lg mx-auto h-auto rounded-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

ArthrosisTypesSection.displayName = 'ArthrosisTypesSection';

export default ArthrosisTypesSection;
