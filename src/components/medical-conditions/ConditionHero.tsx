import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Calendar } from 'lucide-react';

import SafeImage from '@/components/SafeImage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ConditionHeroProps } from './types';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

/**
 * Condition Hero Component
 * Reusable hero section for medical condition pages
 */

const ConditionHero: React.FC<ConditionHeroProps> = React.memo(({
  title,
  description,
  backgroundImage,
  quickFacts
}) => {
  const deviceInfo = useDeviceDetection();

  return (
    <>
      {/* Hero Section */}
      <section className={cn(
        "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background",
        deviceInfo.isMobile ? "py-12" : "py-20"
      )}>
        {backgroundImage && (
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <SafeImage
              src={backgroundImage}
              alt={`${title} background`}
              className="w-full h-full object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        )}
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
              {title}
            </h1>
            <p className={cn(
              "text-muted-foreground mb-8",
              deviceInfo.isMobile ? "text-base" : "text-lg"
            )}>
              {description}
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
          <div className={cn(
            "grid gap-6",
            deviceInfo.isMobile ? "grid-cols-1" : "grid-cols-2 md:grid-cols-4"
          )}>
            {quickFacts?.map((fact: { icon: React.ReactNode; title: string; value: string }, index: number) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="h-8 w-8 mx-auto mb-2 text-primary flex items-center justify-center">
                    {fact.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

ConditionHero.displayName = 'ConditionHero';

export default ConditionHero;
