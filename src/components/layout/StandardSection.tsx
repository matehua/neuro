import React from 'react';

import { StandardSectionProps } from './types';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

/**
 * Standard Section Component
 * Provides consistent spacing and responsive design for page sections
 */


/**
 * Section component with consistent spacing and responsive design
 */
const StandardSection: React.FC = ({
  children,
  className = '',
  background = 'default',
  spacing = 'default',
  maxWidth = 'container',
  id,
}: StandardSectionProps) {
  const deviceInfo = useDeviceDetection();

  const backgroundClasses = {
    default: '',
    muted: 'bg-muted/30',
    primary: 'bg-primary/5',
    accent: 'bg-accent/5',
  };
  const spacingClasses = {
    none: '',
    sm: deviceInfo.isMobile ? 'py-mobile-lg' : 'py-8',
    default: deviceInfo.isMobile ? 'py-mobile-xl' : 'py-16',
    lg: deviceInfo.isMobile ? 'py-mobile-2xl' : 'py-24',
    xl: deviceInfo.isMobile ? 'py-mobile-3xl' : 'py-32',
  };
  const maxWidthClasses = {
    none: '',
    container: 'container',
    prose: 'max-w-prose mx-auto px-4',
    narrow: 'max-w-2xl mx-auto px-4',
  };
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <div className={maxWidthClasses[maxWidth]}>
        {children}
      </div>
    </section>
  );
  }

  /**
 * Specialized section variants
 */
export function HeroSection(props: Omit<StandardSectionProps, 'background' | 'spacing'>): React.ReactElement {
  return (
    <StandardSection
      {...props}
      background="primary"
      spacing="xl"
      className={cn('hero-section', props.className)}
    />
  );
}

export function ContentSection(props: StandardSectionProps): React.ReactElement {
  return (
    <StandardSection
      {...props}
      spacing={props.spacing || 'lg'}
      className={cn('content-section', props.className)}
    />
  );
}

export function FeatureSection(props: Omit<StandardSectionProps, 'background'>): React.ReactElement {
  return (
    <StandardSection
      {...props}
      background="muted"
      className={cn('feature-section', props.className)}
    />
  );
}

export function CTASection(props: Omit<StandardSectionProps, 'background' | 'spacing'>): React.ReactElement {
  return (
    <StandardSection
      {...props}
      background="accent"
      spacing="lg"
      className={cn('cta-section', props.className)}
    />
  );
}

StandardSection.displayName = 'StandardSection';

export default StandardSection;
