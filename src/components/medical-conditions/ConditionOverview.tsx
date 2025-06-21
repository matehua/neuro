import React from 'react';
import { CheckCircle } from 'lucide-react';

import SafeImage from '@/components/SafeImage';
import { ConditionOverviewProps } from './types';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

/**
 * Condition Overview Component
 * Reusable overview section for medical condition pages
 */

const ConditionOverview: React.FC<ConditionOverviewProps> = React.memo(({
  title,
  description,
  keyPoints,
  image
}) => {
  const deviceInfo = useDeviceDetection();

  return (
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
              {title}
            </h2>
            {description?.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
            <div className="space-y-3">
              {keyPoints?.map((point: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
          {image && (
            <div className="relative">
              <SafeImage
                src={image}
                alt={`${title} illustration`}
                className="w-full h-auto rounded-lg shadow-lg"
                fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
                Medical illustration showing key anatomical features and pathological changes
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

ConditionOverview.displayName = 'ConditionOverview';

export default ConditionOverview;
