import React from 'react';
import SafeImage from '@/components/SafeImage';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { CheckCircle } from "lucide-react";

interface OverviewPoint {
  text: string;
  icon?: React.ReactNode;
}

interface ConditionOverviewSectionProps {
  title: string;
  description: string[];
  keyPoints?: OverviewPoint[];
  imageSrc?: string;
  imageAlt?: string;
  fallbackImageSrc?: string;
  imageCaption?: string;
  className?: string;
  reverseLayout?: boolean;
}

const ConditionOverviewSection: React.FC<ConditionOverviewSectionProps> = ({
  title,
  description,
  keyPoints = [],
  imageSrc,
  imageAlt = "Medical condition illustration",
  fallbackImageSrc = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  imageCaption,
  className,
  reverseLayout = false
}) => {
  const deviceInfo = useDeviceDetection();

  const contentSection = (
    <div>
      <h2 className={cn(
        "font-bold mb-6",
        deviceInfo.isMobile ? "text-2xl" : "text-3xl"
      )}>
        {title}
      </h2>
      {description.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground mb-4">
          {paragraph}
        </p>
      ))}
      {keyPoints.length > 0 && (
        <div className="space-y-3 mt-6">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              {point.icon || <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />}
              <p className="text-sm">{point.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const imageSection = imageSrc ? (
    <div className="relative">
      <SafeImage
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto rounded-lg shadow-lg"
        fallbackSrc={fallbackImageSrc}
      />
      {imageCaption && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded text-sm">
          {imageCaption}
        </div>
      )}
    </div>
  ) : null;

  return (
    <section className={cn(
      deviceInfo.isMobile ? "py-8" : "py-16",
      className
    )}>
      <div className={cn(
        "container",
        deviceInfo.isMobile ? "px-4" : ""
      )}>
        <div className={cn(
          "grid grid-cols-1 gap-12 items-center",
          imageSrc ? "lg:grid-cols-2" : "max-w-4xl mx-auto"
        )}>
          {reverseLayout ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

ConditionOverviewSection.displayName = 'ConditionOverviewSection';

export default ConditionOverviewSection;
