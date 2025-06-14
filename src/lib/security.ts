/**
 * Security Utilities for Production-Ready Application
 * Comprehensive security measures and attack prevention
 */

/**
 * Security configuration interface
 */
interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableClickjacking: boolean;
  enableMIMESniffing: boolean;
  enableReferrerPolicy: boolean;
  enableHSTS: boolean;
  logSecurityEvents: boolean;
}

/**
 * Security Manager class
 */
export class SecurityManager {
  private static instance: SecurityManager;
  private config: SecurityConfig;
  private securityEvents: Array<{ type: string; timestamp: number; details: string }> = [];

  private constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableClickjacking: true,
      enableMIMESniffing: true,
      enableReferrerPolicy: true,
      enableHSTS: true,
      logSecurityEvents: true,
      ...config
    };
    this.initialize();
  }

  static getInstance(config?: Partial<SecurityConfig>): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager(config);
    }
    return SecurityManager.instance;
  }

  /**
   * Initialize security measures
   */
  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupCSP();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupInputSanitization();
    this.setupFormValidation();
    this.setupNetworkSecurity();
    this.setupStorageSecurity();
    this.monitorSecurityEvents();
  }

  /**
   * Setup Content Security Policy
   */
  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    // CSP is handled via headers, but we can add reporting
    document.addEventListener('securitypolicyviolation', (e) => {
      this.logSecurityEvent('CSP_VIOLATION', `Blocked: ${e.blockedURI} - Directive: ${e.violatedDirective}`);
    });
  }

  /**
   * Setup XSS Protection
   */
  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Sanitize dynamic content
    this.sanitizeExistingContent();
    
    // Monitor for potential XSS attempts
    this.monitorXSSAttempts();
  }

  /**
   * Setup Clickjacking Protection
   */
  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjacking) return;

    // Verify we're not in a frame (additional client-side protection)
    if (window.top !== window.self) {
      this.logSecurityEvent('CLICKJACKING_ATTEMPT', 'Page loaded in frame');
      
      // Optional: Break out of frame
      try {
        window.top!.location = window.self.location;
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
    // Monitor all form inputs
    document.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        this.sanitizeInput(target);
      }
    });
  }

  /**
   * Sanitize input value
   */
  private sanitizeInput(input: HTMLInputElement | HTMLTextAreaElement): void {
    const value = input.value;
    
    // Check for potential XSS patterns
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi
    ];

    let hasSuspiciousContent = false;
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
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  /**
   * Setup form validation security
   */
  private setupFormValidation(): void {
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      if (!this.validateForm(form)) {
        e.preventDefault();
        this.logSecurityEvent('FORM_VALIDATION_FAILED', `Form submission blocked: ${form.action || 'unknown action'}`);
      }
    });
  }

  /**
   * Validate form for security issues
   */
  private validateForm(form: HTMLFormElement): boolean {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      
      // Check for oversized inputs (potential DoS)
      if (element.value.length > 10000) {
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
    window.fetch = async (...args) => {
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
      const observer = new MutationObserver((mutations) => {
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
    setInterval(() => {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        if (!devtools) {
          devtools = true;
          this.logSecurityEvent('DEVTOOLS_OPENED', 'Developer tools detected');
        }
      } else {
        devtools = false;
      }
    }, 1000);

    // Monitor for right-click attempts (optional)
    document.addEventListener('contextmenu', (e) => {
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
    if (this.securityEvents.length > 100) {
      this.securityEvents.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Security Event [${type}]: ${details}`);
    }

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
    return emailRegex.test(email) && email.length <= 254;
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
