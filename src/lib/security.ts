/**
 * Security management and protection utilities
 */

export interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableInputSanitization: boolean;
  enableFormValidation: boolean;
  enableNetworkSecurity: boolean;
  enableStorageSecurity: boolean;
  logSecurityEvents: boolean;
  strictMode: boolean;
}

/**
 * Security manager singleton class
 */
export class SecurityManager {
  private static instance: SecurityManager;
  private config: SecurityConfig;
  private initialized = false;
  private observers: any[] = [];
  private intervals: number[] = [];
  private securityEvents: Array<{ type: string; timestamp: number; details: string }> = [];

  private constructor(config?: Partial<SecurityConfig>) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableInputSanitization: true,
      enableFormValidation: true,
      enableNetworkSecurity: true,
      enableStorageSecurity: true,
      logSecurityEvents: true,
      strictMode: false,
      ...config
    };
  }

  static getInstance(config?: Partial<SecurityConfig>): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager(config);
    }
    return SecurityManager.instance;
  }

  /**
   * Initialize all security measures
   */
  initialize(): void {
    if (this.initialized) {
      return;
    }

    try {
      if (typeof window === 'undefined') {
        return;
      }

      if (this.config.enableCSP) {
        this.setupCSP();
      }

      if (this.config.enableXSSProtection) {
        this.setupXSSProtection();
        this.monitorXSSAttempts();
      }

      if (this.config.enableInputSanitization) {
        this.setupInputSanitization();
      }

      if (this.config.enableFormValidation) {
        this.setupFormValidation();
      }

      if (this.config.enableNetworkSecurity) {
        this.setupNetworkSecurity();
      }

      if (this.config.enableStorageSecurity) {
        this.setupStorageSecurity();
      }

      this.sanitizeExistingContent();
      this.monitorSecurityEvents();

      this.initialized = true;
    } catch (error) {
      // Reset on failure
      this.initialized = false;
      this.cleanup();
    }
  }

  /**
   * Setup Content Security Policy
   */
  private setupCSP(): void {
    // CSP is handled via headers, but we can add reporting
    document.addEventListener('securitypolicyviolation', (e: any) => {
      this.logSecurityEvent('CSP_VIOLATION', `Blocked: ${e.blockedURI} - Directive: ${e.violatedDirective}`);
    });
  }

  /**
   * Setup XSS protection
   */
  private setupXSSProtection(): void {
    // Prevent clickjacking
    if (window.self !== window.top) {
      // Optional: Break out of frame
      try {
        if (window.top && window.top !== window.self) {
          window.top.location.href = window.self.location.href;
        }
      } catch (e) {
        // Frame-busting blocked, log the attempt
        this.logSecurityEvent('FRAME_BUSTING_BLOCKED', 'Unable to break out of frame');
      }
    }
  }

  /**
   * Setup input sanitization
   */
  private setupInputSanitization(): void {
    document.addEventListener('input', (e: any) => {
      const target = e.target as HTMLInputElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        this.sanitizeInput(target);
      }
    });
  }

  /**
   * Sanitize input field
   */
  private sanitizeInput(input: HTMLInputElement): void {
    const value = input.value;
    let hasSuspiciousContent = false;

    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>/gi
    ];

    xssPatterns.forEach(pattern => {
      if (pattern.test(value)) {
        hasSuspiciousContent = true;
        this.logSecurityEvent('XSS_ATTEMPT', `Suspicious input detected in ${input.name || input.id || 'unnamed field'}`);
      }
    });

    if (hasSuspiciousContent) {
      // Sanitize the input
      input.value = this.sanitizeString(value);
      
      // Show warning to user
      this.showSecurityWarning('Potentially harmful content was removed from your input.');
    }
  }

  /**
   * Sanitize string content
   */
  private sanitizeString(str: string): string {
    return str
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
      .replace(/<object[^>]*>.*?<\/object>/gi, '')
      .replace(/<embed[^>]*>/gi, '');
  }

  /**
   * Setup form validation
   */
  private setupFormValidation(): void {
    document.addEventListener('submit', (e: any) => {
      const form = e.target as HTMLFormElement;
      if (!this.validateForm(form)) {
        e.preventDefault();
        this.logSecurityEvent('FORM_VALIDATION_FAILED', `Form submission blocked: ${form.action || 'unknown action'}`);
      }
    });
  }

  /**
   * Validate form data
   */
  private validateForm(form: HTMLFormElement): boolean {
    const elements = Array.from(form.elements) as HTMLInputElement[];
    let isValid = true;

    elements.forEach(element => {
      if (!element.value) return;

      // Check for oversized inputs
      if (element.value?.length > 10000) {
        isValid = false;
        this.logSecurityEvent('OVERSIZED_INPUT', `Input too large: ${element.name || element.id}`);
      }

      // Check for SQL injection patterns
      const sqlPatterns = [
        /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/gi,
        /(--|\/\*|\*\/|;)/g,
        /(\b(OR|AND)\b.*=.*)/gi
      ];

      sqlPatterns.forEach(pattern => {
        if (pattern.test(element.value)) {
          isValid = false;
          this.logSecurityEvent('SQL_INJECTION_ATTEMPT', `Suspicious SQL pattern in ${element.name || element.id}`);
        }
      });
    });

    return isValid;
  }

  /**
   * Setup network security monitoring
   */
  private setupNetworkSecurity(): void {
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = async (...args: any) => {
      const url = args[0] as string;
      
      // Check for suspicious URLs
      if (this.isSuspiciousURL(url)) {
        this.logSecurityEvent('SUSPICIOUS_REQUEST', `Blocked request to: ${url}`);
        throw new Error('Request blocked for security reasons');
      }
      return originalFetch.apply(window, args);
    };
  }

  /**
   * Check if URL is suspicious
   */
  private isSuspiciousURL(url: string): boolean {
    // Allow relative URLs (starting with /) and trusted domains
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
      return false;
    }
    const suspiciousPatterns = [
      /^(?!https?:\/\/(localhost|127\.0\.0\.1|.*\.mineuro\.com\.au))/,
      /[<>'"]/,
      /javascript:/i,
      /data:/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  /**
   * Setup storage security
   */
  private setupStorageSecurity(): void {
    // Monitor localStorage/sessionStorage for sensitive data
    const sensitivePatterns = [
      /password/i,
      /token/i,
      /secret/i,
      /key/i,
      /auth/i
    ];

    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key: string, value: string) {
      sensitivePatterns.forEach(pattern => {
        if (pattern.test(key) || pattern.test(value)) {
          SecurityManager.getInstance().logSecurityEvent('SENSITIVE_STORAGE', `Sensitive data stored: ${key}`);
        }
      });
      
      return originalSetItem.call(this, key, value);
    };
  }

  /**
   * Monitor for XSS attempts
   */
  private monitorXSSAttempts(): void {
    // Monitor DOM mutations for potential XSS
    if ('MutationObserver' in window) {
      const observer = new MutationObserver((mutations: any) => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                this.scanElementForXSS(element);
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      this.observers.push(observer);
    }
  }

  /**
   * Scan element for XSS content
   */
  private scanElementForXSS(element: Element): void {
    const dangerousAttributes = ['onclick', 'onload', 'onerror', 'onmouseover'];
    
    dangerousAttributes.forEach(attr => {
      if (element.hasAttribute(attr)) {
        this.logSecurityEvent('XSS_ATTRIBUTE', `Dangerous attribute found: ${attr} on ${element.tagName}`);
        element.removeAttribute(attr);
      }
    });

    // Check for script tags
    if (element.tagName === 'SCRIPT') {
      this.logSecurityEvent('SCRIPT_INJECTION', 'Script tag dynamically added');
      element.remove();
    }
  }

  /**
   * Sanitize existing content
   */
  private sanitizeExistingContent(): void {
    // Remove any existing dangerous content
    const dangerousElements = document.querySelectorAll('script[src*="javascript:"], iframe[src*="javascript:"]');
    dangerousElements.forEach(element => {
      this.logSecurityEvent('DANGEROUS_ELEMENT', `Removed dangerous element: ${element.tagName}`);
      element.remove();
    });
  }

  /**
   * Monitor security events
   */
  private monitorSecurityEvents(): void {
    // Monitor for console access (potential debugging attempts)
    let devtools = false;
    const devtoolsInterval = setInterval(() => {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        if (!devtools) {
          devtools = true;
          this.logSecurityEvent('DEVTOOLS_OPENED', 'Developer tools detected');
        }
      } else {
        devtools = false;
      }
    }, 1000);

    this.intervals.push(devtoolsInterval);

    // Monitor for right-click attempts (optional)
    document.addEventListener('contextmenu', () => {
      // Allow right-click but log it
      this.logSecurityEvent('CONTEXT_MENU', 'Right-click detected');
    });
  }

  /**
   * Log security event
   */
  private logSecurityEvent(type: string, details: string): void {
    if (!this.config.logSecurityEvents) return;

    const event = {
      type,
      timestamp: Date.now(),
      details
    };

    this.securityEvents.push(event);

    // Keep only last 100 events
    if (this.securityEvents?.length > 100) {
      this.securityEvents.shift();
    }
    // Security events are logged silently in production

    // In production, send to monitoring service
    // this.sendToMonitoringService(event);
  }

  /**
   * Show security warning to user
   */
  private showSecurityWarning(message: string): void {
    // Create a non-intrusive warning
    const warning = document.createElement('div');
    warning.className = 'security-warning';
    warning.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff6b6b;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      z-index: 10000;
      font-size: 14px;
      max-width: 300px;
    `;
    warning.textContent = message;

    document.body.appendChild(warning);

    // Remove after 5 seconds
    setTimeout(() => {
      warning.remove();
    }, 5000);
  }

  /**
   * Get security events
   */
  public getSecurityEvents(): Array<{ type: string; timestamp: number; details: string }> {
    return [...this.securityEvents];
  }

  /**
   * Clear security events
   */
  public clearSecurityEvents(): void {
    this.securityEvents = [];
  }

  /**
   * Cleanup all observers and intervals
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];

    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];

    this.initialized = false;
  }
}

/**
 * Initialize security measures
 */
export function initializeSecurity(config?: Partial<SecurityConfig>): SecurityManager {
  return SecurityManager.getInstance(config);
}

/**
 * Security utility functions
 */
export const SecurityUtils = {
  /**
   * Generate secure random string
   */
  generateSecureRandom(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  /**
   * Hash string using Web Crypto API
   */
  async hashString(str: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('');
  },

  /**
   * Validate email format
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email?.length <= 254;
  },

  /**
   * Validate phone number format
   */
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
  },

  /**
   * Escape HTML entities
   */
  escapeHtml(str: string): string {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

export default SecurityManager;
