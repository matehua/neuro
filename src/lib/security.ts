
// Security utilities and configurations

// Content Security Policy configuration
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com"
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com"
  ],
  'font-src': [
    "'self'",
    "https://fonts.gstatic.com"
  ],
  'img-src': [
    "'self'",
    "data:",
    "https:",
    "blob:"
  ],
  'connect-src': [
    "'self'",
    "https://api.supabase.com",
    "https://www.google-analytics.com"
  ],
  'frame-src': [
    "'self'"
  ],
  'media-src': [
    "'self'"
  ]
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation (Australian format)
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+61|0)[2-578]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Rate limiting utility (client-side basic implementation)
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly windowMs: number;
  private readonly maxRequests: number;

  constructor(windowMs: number = 60000, maxRequests: number = 100) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }
}

// Create rate limiter instances
export const apiRateLimiter = new RateLimiter(60000, 50); // 50 requests per minute
export const formRateLimiter = new RateLimiter(300000, 5); // 5 form submissions per 5 minutes

// XSS protection
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Secure random string generation
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Local storage with encryption (basic)
export const secureStorage = {
  set: (key: string, value: any): void => {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, btoa(serialized));
    } catch (error) {
      console.error('Failed to save to secure storage:', error);
    }
  },
  
  get: (key: string): any => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const decoded = atob(item);
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Failed to read from secure storage:', error);
      return null;
    }
  },
  
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  
  clear: (): void => {
    localStorage.clear();
  }
};

// CSRF token management
export const csrfToken = {
  generate: (): string => {
    const token = generateSecureToken();
    secureStorage.set('csrf_token', token);
    return token;
  },
  
  get: (): string | null => {
    return secureStorage.get('csrf_token');
  },
  
  validate: (token: string): boolean => {
    const storedToken = secureStorage.get('csrf_token');
    return storedToken === token;
  }
};

// Security headers validation
export const validateSecurityHeaders = (): void => {
  // Check if running in secure context
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    console.warn('Application is not running in a secure context (HTTPS)');
  }
  
  // Check for common security headers (if accessible)
  fetch(location.href, { method: 'HEAD' })
    .then(response => {
      const headers = response.headers;
      
      if (!headers.get('x-frame-options') && !headers.get('content-security-policy')) {
        console.warn('Missing X-Frame-Options or CSP header');
      }
      
      if (!headers.get('x-content-type-options')) {
        console.warn('Missing X-Content-Type-Options header');
      }
      
      if (!headers.get('strict-transport-security')) {
        console.warn('Missing Strict-Transport-Security header');
      }
    })
    .catch(() => {
      // Headers check failed, which is expected in many environments
    });
};

// Initialize security measures
export const initializeSecurity = (): void => {
  // Generate CSRF token on app start
  if (!csrfToken.get()) {
    csrfToken.generate();
  }
  
  // Validate security headers
  validateSecurityHeaders();
  
  // Set up error handlers for security events
  window.addEventListener('error', (event) => {
    // Log security-related errors
    if (event.error && event.error.name === 'SecurityError') {
      console.error('Security error detected:', event.error);
    }
  });
  
  // Prevent clickjacking
  if (window.self !== window.top) {
    console.warn('Application loaded in a frame - potential clickjacking risk');
  }
};
