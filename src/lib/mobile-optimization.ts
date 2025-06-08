/**
 * Mobile Optimization Utilities
 * Comprehensive mobile performance and security enhancements
 */

/**
 * Mobile performance optimization class
 */
export class MobileOptimizer {
  private static instance: MobileOptimizer;
  private touchStartTime: number = 0;
  private isInitialized: boolean = false;

  private constructor() {
    this.initialize();
  }

  static getInstance(): MobileOptimizer {
    if (!MobileOptimizer.instance) {
      MobileOptimizer.instance = new MobileOptimizer();
    }
    return MobileOptimizer.instance;
  }

  /**
   * Initialize mobile optimizations
   */
  private initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    // Optimize touch events
    this.optimizeTouchEvents();
    
    // Optimize viewport
    this.optimizeViewport();
    
    // Optimize scrolling
    this.optimizeScrolling();
    
    // Optimize images for mobile
    this.optimizeImages();
    
    // Add mobile-specific security measures
    this.addMobileSecurity();
    
    this.isInitialized = true;
  }

  /**
   * Optimize touch events for better performance
   */
  private optimizeTouchEvents(): void {
    // Add passive event listeners for better scroll performance
    const passiveEvents = ['touchstart', 'touchmove', 'wheel'];
    
    passiveEvents.forEach(event => {
      document.addEventListener(event, () => {}, { passive: true });
    });

    // Optimize touch delay
    document.addEventListener('touchstart', (e) => {
      this.touchStartTime = Date.now();
    }, { passive: true });

    // Prevent zoom on double tap for better UX
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  }

  /**
   * Optimize viewport settings
   */
  private optimizeViewport(): void {
    // Ensure proper viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    
    // Set optimal viewport settings for mobile
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover';
  }

  /**
   * Optimize scrolling performance
   */
  private optimizeScrolling(): void {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize scroll performance with CSS
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
      }
      
      body {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
      }
      
      /* Optimize touch targets */
      button, a, input, select, textarea {
        min-height: 44px;
        min-width: 44px;
      }
      
      /* Optimize animations for mobile */
      @media (prefers-reduced-motion: no-preference) {
        * {
          animation-duration: 0.3s;
          transition-duration: 0.3s;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Optimize images for mobile devices
   */
  private optimizeImages(): void {
    // Add intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observe all images with data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Add mobile-specific security measures
   */
  private addMobileSecurity(): void {
    // Prevent context menu on long press (optional)
    document.addEventListener('contextmenu', (e) => {
      if (this.isMobileDevice()) {
        e.preventDefault();
      }
    });

    // Prevent text selection on UI elements
    const style = document.createElement('style');
    style.textContent = `
      .no-select {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }
    `;
    document.head.appendChild(style);

    // Add security meta tags for mobile
    this.addMobileSecurityMeta();
  }

  /**
   * Add mobile-specific security meta tags
   */
  private addMobileSecurityMeta(): void {
    const metaTags = [
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' }
    ];

    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = tag.name;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });
  }

  /**
   * Check if device is mobile
   */
  private isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * Optimize font loading for mobile
   */
  public optimizeFonts(): void {
    // Add font-display: swap for better performance
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Add PWA-specific optimizations
   */
  public optimizePWA(): void {
    // Add service worker registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Add app install prompt handling
    let deferredPrompt: Event | null = null;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
  }

  /**
   * Optimize network requests for mobile
   */
  public optimizeNetwork(): void {
    // Add connection-aware loading
    if ('connection' in navigator) {
      const connection = (navigator as Navigator & { connection: { effectiveType: string } }).connection;
      
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // Reduce image quality for slow connections
        document.documentElement.classList.add('slow-connection');
      }
    }
  }

  /**
   * Add mobile accessibility enhancements
   */
  public enhanceAccessibility(): void {
    // Ensure proper focus management on mobile
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (target && this.isMobileDevice()) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Add high contrast mode detection
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Add reduced motion detection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  }

  /**
   * Monitor mobile performance
   */
  public monitorPerformance(): void {
    // Monitor memory usage on mobile
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
      
      if (memory.usedJSHeapSize / memory.totalJSHeapSize > 0.8) {
        console.warn('High memory usage detected on mobile device');
      }
    }

    // Monitor battery status
    if ('getBattery' in navigator) {
      (navigator as Navigator & { getBattery: () => Promise<{ level: number; charging: boolean }> }).getBattery().then(battery => {
        if (battery.level < 0.2 && !battery.charging) {
          // Reduce animations and background processes for low battery
          document.documentElement.classList.add('low-battery');
        }
      });
    }
  }
}

/**
 * Initialize mobile optimizations
 */
export function initializeMobileOptimizations(): void {
  const optimizer = MobileOptimizer.getInstance();
  optimizer.optimizeFonts();
  optimizer.optimizePWA();
  optimizer.optimizeNetwork();
  optimizer.enhanceAccessibility();
  optimizer.monitorPerformance();
}

/**
 * Mobile-specific utility functions
 */
export const MobileUtils = {
  /**
   * Check if device supports touch
   */
  isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },

  /**
   * Get device pixel ratio
   */
  getDevicePixelRatio(): number {
    return window.devicePixelRatio || 1;
  },

  /**
   * Check if device is in landscape mode
   */
  isLandscape(): boolean {
    return window.innerWidth > window.innerHeight;
  },

  /**
   * Get safe area insets for devices with notches
   */
  getSafeAreaInsets(): { top: number; right: number; bottom: number; left: number } {
    const style = getComputedStyle(document.documentElement);
    return {
      top: parseInt(style.getPropertyValue('env(safe-area-inset-top)') || '0'),
      right: parseInt(style.getPropertyValue('env(safe-area-inset-right)') || '0'),
      bottom: parseInt(style.getPropertyValue('env(safe-area-inset-bottom)') || '0'),
      left: parseInt(style.getPropertyValue('env(safe-area-inset-left)') || '0')
    };
  },

  /**
   * Optimize images for mobile screens
   */
  optimizeImageForMobile(img: HTMLImageElement): void {
    const pixelRatio = this.getDevicePixelRatio();
    const width = img.clientWidth * pixelRatio;
    const height = img.clientHeight * pixelRatio;
    
    // Add responsive image attributes
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    
    // Set optimal sizes
    if (width && height) {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    }
  }
};

export default MobileOptimizer;
