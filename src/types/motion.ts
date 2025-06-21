// Motion and animation types for Framer Motion components

export interface MotionVariants {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  hover?: Record<string, unknown>;
  tap?: Record<string, unknown>;
  focus?: Record<string, unknown>;
  [key: string]: Record<string, unknown> | undefined;
}

export interface MotionTransition {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  type?: 'spring' | 'tween' | 'keyframes' | 'inertia';
  stiffness?: number;
  damping?: number;
  mass?: number;
  velocity?: number;
  restSpeed?: number;
  restDelta?: number;
  [key: string]: unknown;
}

export interface MotionValue {
  get(): unknown;
  set(value: unknown): void;
  onChange(callback: (value: unknown) => void): () => void;
  destroy(): void;
}

export interface MotionControls {
  start(definition?: string | MotionVariants): Promise<unknown>;
  stop(): void;
  set(definition: MotionVariants): void;
  mount(): void;
  unmount(): void;
}

export interface AnimationScope {
  current: HTMLElement | null;
}

export interface UseAnimationReturn {
  scope: AnimationScope;
  animate: (
    selector?: string,
    keyframes?: Record<string, unknown> | Record<string, unknown>[],
    options?: MotionTransition
  ) => Promise<unknown>;
}

export interface MotionProps {
  initial?: boolean | string | MotionVariants;
  animate?: string | MotionVariants | MotionControls;
  exit?: string | MotionVariants;
  transition?: MotionTransition;
  variants?: MotionVariants;
  whileHover?: string | MotionVariants;
  whileTap?: string | MotionVariants;
  whileFocus?: string | MotionVariants;
  whileInView?: string | MotionVariants;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | 'some' | 'all';
  };
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
  onUpdate?: (latest: Record<string, unknown>) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

// Intersection Observer types
export interface IntersectionObserverEntry {
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  intersectionRect: DOMRectReadOnly;
  isIntersecting: boolean;
  rootBounds: DOMRectReadOnly | null;
  target: Element;
  time: number;
}

export interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// Animation hook return types
export interface UseInViewReturn {
  ref: React.RefObject<HTMLElement>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export interface UseScrollReturn {
  scrollX: MotionValue;
  scrollY: MotionValue;
  scrollXProgress: MotionValue;
  scrollYProgress: MotionValue;
}

// Common animation configurations
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

export const ANIMATION_TRANSITIONS = {
  smooth: { duration: 0.3, ease: 'easeInOut' },
  fast: { duration: 0.15, ease: 'easeOut' },
  slow: { duration: 0.6, ease: 'easeInOut' },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  bouncy: { type: 'spring', stiffness: 400, damping: 10 }
} as const;
