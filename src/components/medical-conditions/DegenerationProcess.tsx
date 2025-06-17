import React from 'react';

import SafeImage from '@/components/SafeImage';
import { Card } from '@/components/ui/card';
import { DegenerationProcessProps } from './types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

/**
 * Degeneration Process Component
 * Reusable component for showing degeneration stages and anatomical information
 */


const DegenerationProcess: React.FC<DegenerationProcessProps> = React.memo(({
  stages,
  anatomicalComponents,
  structuralChanges
}) => {
  const deviceInfo = useDeviceDetection();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'normal': return 'green';
      case 'mild': return 'blue';
      case 'moderate': return 'yellow';
      case 'severe': return 'orange';
      case 'critical': return 'red';
      default: return 'gray';
    }
  };
  const getSeverityClasses = (severity: string) => {
    const color = getSeverityColor(severity);
    return {
      card: `border-${color}-200 bg-${color}-50 dark:bg-${color}-950/20`,
      text: `text-${color}-800 dark:text-${color}-200`,
      list: `text-${color}-700 dark:text-${color}-300`,
      number: `bg-${color}-600 text-white`
    };
  };

  return (
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
          Understanding Degeneration Process
        </h2>

        <Tabs defaultValue="stages" className="w-full max-w-4xl mx-auto">
          <TabsList className={cn(
            "grid mb-8",
            deviceInfo.isMobile ? "grid-cols-1 h-auto" : "grid-cols-3"
          )}>
            <TabsTrigger value="stages" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Degeneration Stages
            </TabsTrigger>
            <TabsTrigger value="anatomy" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Anatomy
            </TabsTrigger>
            <TabsTrigger value="changes" className={cn(
              "text-center",
              deviceInfo.isMobile ? "py-3" : "py-3"
            )}>
              Structural Changes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stages" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center">Stages of Degeneration</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {stages?.map((stage: any, index: any) => {
                  const classes = getSeverityClasses(stage.severity);
                  return (
                    <Card key={index} className={cn("p-4", classes.card)}>
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                          classes.number
                        )}>
                          {stage.stage}
                        </div>
                        <div>
                          <h4 className={cn("font-semibold mb-2", classes.text)}>
                            {stage.title}
                          </h4>
                          <ul className={cn("text-sm space-y-1", classes.list)}>
                            {stage.characteristics?.map((char: any, charIndex: any) => (
                              <li key={charIndex}>• {char}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Important Note
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Degeneration is not always painful. Many people have degenerative changes
                  visible on imaging but experience no symptoms.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="anatomy" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Anatomical Components</h3>
                <div className="space-y-4">
                  {anatomicalComponents?.map((component: any, index: any) => (
                    <div key={index}>
                      <h4 className="font-semibold text-primary mb-2">{component.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {component.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <SafeImage
                  src="/images/spine-anatomy/disc-anatomy.jpg"
                  alt="Detailed anatomical illustration"
                  className="w-full h-auto rounded-lg"
                  fallbackSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="changes" className="bg-card p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center">Structural Changes</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['biochemical', 'structural'].map((type: any) => (
                  <div key={type}>
                    <h4 className="font-semibold mb-4 capitalize">{type} Changes</h4>
                    <div className="space-y-3">
                      {structuralChanges
                        .filter(change => change.type === type)
                        .map((change: any, index: any) => (
                          <div key={index} className="p-3 bg-muted rounded-lg">
                            <h5 className="font-semibold text-sm">{change.title}</h5>
                            <p className="text-sm text-muted-foreground">{change.description}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <SafeImage
                  src="/images/spine-anatomy/degeneration-stages.jpg"
                  alt="Degeneration progression stages"
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
});

DegenerationProcess.displayName = 'DegenerationProcess';

export default DegenerationProcess;
