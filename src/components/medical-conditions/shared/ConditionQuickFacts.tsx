import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { LucideIcon } from 'lucide-react';

// Interface for individual quick fact items
interface QuickFact {
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Title/label for the fact */
  title: string;
  /** Main value or statistic */
  value: string;
  /** Optional additional description */
  description?: string;
  /** Optional color theme for the fact card */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

// Props interface for ConditionQuickFacts component
interface ConditionQuickFactsProps {
  /** Array of quick facts to display */
  facts: QuickFact[];
  /** Additional CSS classes for customization */
  className?: string;
  /** Title for the quick facts section */
  sectionTitle?: string;
  /** Whether to show the section title */
  showTitle?: boolean;
}

const ConditionQuickFacts: React.FC<ConditionQuickFactsProps> = ({
  facts,
  className
}) => {
  const deviceInfo = useDeviceDetection();

  return (
    <section className={cn(
      "bg-muted/30",
      deviceInfo.isMobile ? "py-8" : "py-12",
      className
    )}>
      <div className={cn(
        "container",
        deviceInfo.isMobile ? "px-4" : ""
      )}>
        <div className={cn(
          "grid gap-6",
          facts.length <= 2 ? "grid-cols-1 md:grid-cols-2" :
          facts.length === 3 ? "grid-cols-1 md:grid-cols-3" :
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        )}>
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {fact.value}
                  </p>
                  {fact.description && (
                    <p className="text-xs text-muted-foreground">
                      {fact.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ConditionQuickFacts.displayName = 'ConditionQuickFacts';

export default ConditionQuickFacts;
