import { Loader2, Brain, Heart } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'pulse' | 'medical' | 'skeleton';
  text?: string;
  className?: string;
  fullScreen?: boolean;

}

  /**
 * Loading Component with multiple variants and accessibility features
 */
const Loading: React.FC = ({ 
  size = 'md', 
  variant = 'spinner', 
  text = 'Loading...', 
  className,
  fullScreen = false 
}: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2 
        className={cn(
          'animate-spin text-primary',
          sizeClasses[size]
        )}
        aria-hidden="true"
      />
      {text && (
        <p className={cn(
          'text-muted-foreground font-medium',
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );

  const renderPulse = () => (
    <div className="flex flex-col items-center justify-center gap-3">
      <div 
        className={cn(
          'bg-primary rounded-full animate-pulse',
          sizeClasses[size]
        )}
        aria-hidden="true"
      />
      {text && (
        <p className={cn(
          'text-muted-foreground font-medium animate-pulse',
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );

  const renderMedical = () => (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <Brain 
          className={cn(
            'text-primary animate-pulse',
            sizeClasses[size]
          )}
          aria-hidden="true"
        />
        <Heart 
          className={cn(
            'absolute -top-1 -right-1 text-red-500 animate-bounce',
            size === 'sm' ? 'h-2 w-2' :
            size === 'md' ? 'h-3 w-3' :
            size === 'lg' ? 'h-4 w-4' : 'h-6 w-6'
          )}
          aria-hidden="true"
        />
      </div>
      {text && (
        <p className={cn(
          'text-muted-foreground font-medium',
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );

  const renderSkeleton = () => (
    <div className="space-y-3 w-full max-w-sm">
      <div className="h-4 bg-muted rounded animate-pulse" />
      <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
      <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'pulse':
        return renderPulse();
      case 'medical':
        return renderMedical();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
  };

  const content = (
    <div 
      className={cn(
        'flex items-center justify-center',
        fullScreen ? 'min-h-screen' : 'p-8',
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      {renderContent()}
      <span className="sr-only">{text}</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {content}
      </div>
    );
  return content;
/**
 * Inline Loading Spinner for buttons and small spaces
 */
export function InlineLoading({ 
  size = 'sm', 
  className 
}: { 
  size?: 'sm' | 'md'; 
  className?: string; 
}): React.ReactElement { {
  return (
    <Loader2 
      className={cn(
        'animate-spin',
        size === 'sm' ? 'h-4 w-4' : 'h-5 w-5',
        className
      )}
      aria-hidden="true"
    />
  );
/**
 * Page Loading Component with medical theme
 */
export function PageLoading({ text = 'Loading page...' }: { text?: string }): React.ReactElement { {
  return (
    <Loading 
      variant="medical" 
      size="lg" 
      text={text} 
      fullScreen 
    />
  );
/**
 * Content Loading Skeleton
 */
export function ContentSkeleton({ 
  lines = 3, 
  className 
}: { 
  lines?: number; 
  className?: string; 
}): React.ReactElement { {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_: any, index: any) => (
        <div 
          key={index}
          className={cn(
            'h-4 bg-muted rounded animate-pulse',
            index === lines - 1 && 'w-3/4',
            index === lines - 2 && lines > 2 && 'w-5/6'
          )}
        />
      ))}
    </div>
  );
/**
 * Card Loading Skeleton
 */
export function CardSkeleton({ className }: { className?: string }): React.ReactElement { {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      <div className="h-6 bg-muted rounded animate-pulse w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
        <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
      </div>
      <div className="h-10 bg-muted rounded animate-pulse w-1/3" />
    </div>
  );
/**
 * Image Loading Skeleton
 */
export function ImageSkeleton({ 
  aspectRatio = 'aspect-video',
  className 
}: { 
  aspectRatio?: string;
  className?: string; 
}): React.ReactElement { {
  return (
    <div 
      className={cn(
        'bg-muted rounded animate-pulse',
        aspectRatio,
        className
      )}
      aria-hidden="true"
    />
  );
Loading.displayName = 'Loading';

export default Loading;

Loading.displayName = 'Loading';
