
// Mobile optimization utilities for enhanced user experience
// Includes touch gestures, viewport handling, and performance optimizations

interface TouchGesture {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
}

interface ViewportInfo {
  width: number;
  height: number;
  orientation: string;
  pixelRatio: number;
}

class MobileOptimizer {
  private isInitialized: boolean = false;
  private gesture: TouchGesture | null = null;
  private viewport: ViewportInfo | null = null;

  constructor() {
    this.initializeMobileOptimizations();
  }

  private initializeMobileOptimizations(): void {
    if (this.isInitialized) return;

    this.setupViewportOptimization();
    this.setupTouchOptimization();
    this.setupPerformanceOptimization();
    this.setupOrientationHandling();
    
    this.isInitialized = true;
  }

  private setupViewportOptimization(): void {
    // Set optimal viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    
    viewport.setAttribute('content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
    );

    this.updateViewportInfo();
  }

  private updateViewportInfo(): void {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.screen?.orientation?.type || 'unknown',
      pixelRatio: window.devicePixelRatio || 1
    };
  }

  private setupTouchOptimization(): void {
    // Improve touch responsiveness
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });

    // Prevent zoom on double tap for better UX
    let lastTouchEnd = 0;
    document.addEventListener('touchend', () => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        // Prevent default zoom behavior
      }
      lastTouchEnd = now;
    }, false);
  }

  private handleTouchStart(event: TouchEvent): void {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      this.gesture = {
        startX: touch.clientX,
        startY: touch.clientY,
        currentX: touch.clientX,
        currentY: touch.clientY,
        deltaX: 0,
        deltaY: 0
      };
    }
  }

  private handleTouchMove(event: TouchEvent): void {
    if (this.gesture && event.touches.length === 1) {
      const touch = event.touches[0];
      this.gesture.currentX = touch.clientX;
      this.gesture.currentY = touch.clientY;
      this.gesture.deltaX = this.gesture.currentX - this.gesture.startX;
      this.gesture.deltaY = this.gesture.currentY - this.gesture.startY;
    }
  }

  private handleTouchEnd(): void {
    if (this.gesture) {
      // Process gesture if needed
      this.gesture = null;
    }
  }

  private setupPerformanceOptimization(): void {
    // Optimize animations for mobile
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .animate-optimized {
        will-change: transform;
        transform: translateZ(0);
      }
      
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupOrientationHandling(): void {
    const handleOrientationChange = () => {
      setTimeout(() => {
        this.updateViewportInfo();
        window.dispatchEvent(new CustomEvent('viewportChanged', { 
          detail: this.viewport 
        }));
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
  }

  public getViewportInfo(): ViewportInfo | null {
    return this.viewport;
  }

  public isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  public isTouch(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
}

// PWA Installation utilities
class PWAInstaller {
  private installPrompt: any = null;

  constructor() {
    this.setupInstallPrompt();
  }

  private setupInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installPrompt = e;
      this.showInstallButton();
    });
  }

  private showInstallButton(): void {
    // Create install button if it doesn't exist
    if (!document.querySelector('.pwa-install-button')) {
      const button = document.createElement('button');
      button.className = 'pwa-install-button';
      button.textContent = 'Install App';
      button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        background: #007bff;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        display: none;
      `;
      
      button.addEventListener('click', () => this.promptInstall());
      document.body.appendChild(button);
    }
  }

  public promptInstall(): void {
    if (this.installPrompt) {
      this.installPrompt.prompt();
      this.installPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installation accepted');
        }
        this.installPrompt = null;
      });
    }
  }
}

// Initialize optimizations
const mobileOptimizer = new MobileOptimizer();
const pwaInstaller = new PWAInstaller();

export { MobileOptimizer, PWAInstaller, mobileOptimizer, pwaInstaller };

export const initializeMobileOptimizations = (): void => {
  console.log('Mobile optimizations initialized');
};

export const getViewportInfo = (): ViewportInfo | null => {
  return mobileOptimizer.getViewportInfo();
};

export const isMobileDevice = (): boolean => {
  return mobileOptimizer.isMobile();
};

export const isTouchDevice = (): boolean => {
  return mobileOptimizer.isTouch();
};
