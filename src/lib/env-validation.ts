/**
 * Environment variable validation and configuration
 */

export interface EnvironmentConfig {
  // App configuration
  APP_ENV: string;
  APP_NAME: string;
  APP_VERSION: string;
  
  // URLs
  SITE_URL: string;
  API_BASE_URL?: string;
  CDN_URL?: string;
  
  // Contact information
  PRACTICE_PHONE: string;
  PRACTICE_FAX?: string;
  PRACTICE_EMAIL: string;
  ARGUS_EMAIL?: string;
  HEALTHLINK_ID?: string;
  
  // Social Media
  FACEBOOK_URL?: string;
  LINKEDIN_URL?: string;
  TWITTER_HANDLE?: string;
  
  // Analytics
  GOOGLE_ANALYTICS_ID?: string;
  GOOGLE_TAG_MANAGER_ID?: string;
  HOTJAR_ID?: string;
  FACEBOOK_PIXEL_ID?: string;
  
  // Maps
  GOOGLE_MAPS_API_KEY?: string;
  MAPBOX_ACCESS_TOKEN?: string;
  
  // Email
  EMAILJS_SERVICE_ID?: string;
  EMAILJS_TEMPLATE_ID?: string;
  EMAILJS_PUBLIC_KEY?: string;
  
  // Error Reporting
  SENTRY_DSN?: string;
  SENTRY_ENVIRONMENT?: string;
  ERROR_REPORTING_ENDPOINT?: string;
  ERROR_REPORTING_API_KEY?: string;
  
  // Feature flags
  ENABLE_PERFORMANCE_MONITORING: boolean;
  ENABLE_ERROR_BOUNDARY: boolean;
  ENABLE_DARK_MODE: boolean;
  ENABLE_LANGUAGE_SWITCHING: boolean;
  ENABLE_APPOINTMENT_BOOKING: boolean;
  ENABLE_LIVE_CHAT: boolean;
  ENABLE_CSP: boolean;
  ENABLE_HSTS: boolean;
  DEBUG_MODE: boolean;
  SHOW_PERFORMANCE_METRICS: boolean;
}

/**
 * Required environment variables for production
 */
const REQUIRED_PRODUCTION_VARS = [
  'VITE_APP_ENV',
  'VITE_SITE_URL',
  'VITE_PRACTICE_PHONE',
  'VITE_PRACTICE_EMAIL'
];

/**
 * Recommended environment variables (warnings if missing)
 */
const RECOMMENDED_VARS = [
  'VITE_GOOGLE_ANALYTICS_ID',
  'VITE_SENTRY_DSN',
  'VITE_GOOGLE_MAPS_API_KEY',
  'VITE_APP_NAME',
  'VITE_APP_VERSION'
];

/**
 * Validate environment variables
 */
export function validateEnvironmentVariables(): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  config: Partial<EnvironmentConfig>;
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  const config: Partial<EnvironmentConfig> = {};

  // Check required variables only in production
  const isProduction = import.meta.env.VITE_APP_ENV === 'production' || import.meta.env.PROD;

  if (isProduction) {
    REQUIRED_PRODUCTION_VARS.forEach(varName => {
      const value = import.meta.env[varName];
      if (!value) {
        errors.push(`Missing required environment variable: ${varName}`);
      }
    });
  }
  // Check recommended variables (warnings only)
  RECOMMENDED_VARS.forEach(varName => {
    const value = import.meta.env[varName];
    if (!value) {
      warnings.push(`Recommended environment variable not set: ${varName}`);
    }
  });

  // Parse and validate configuration
  try {
    config.APP_ENV = import.meta.env.VITE_APP_ENV || 'development';
    config.APP_NAME = import.meta.env.VITE_APP_NAME || 'miNEURO Brain and Spine Surgery';
    config.APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';
    
    config.SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mineuro.com.au';
    config.API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    config.CDN_URL = import.meta.env.VITE_CDN_URL;
    
    config.PRACTICE_PHONE = import.meta.env.VITE_PRACTICE_PHONE || '+61 3 9008 4200';
    config.PRACTICE_FAX = import.meta.env.VITE_PRACTICE_FAX;
    config.PRACTICE_EMAIL = import.meta.env.VITE_PRACTICE_EMAIL || 'info@mineuro.com.au';
    config.ARGUS_EMAIL = import.meta.env.VITE_ARGUS_EMAIL;
    config.HEALTHLINK_ID = import.meta.env.VITE_HEALTHLINK_ID;
    
    // Social Media
    config.FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL;
    config.LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
    config.TWITTER_HANDLE = import.meta.env.VITE_TWITTER_HANDLE;
    
    // Analytics
    config.GOOGLE_ANALYTICS_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    config.GOOGLE_TAG_MANAGER_ID = import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID;
    config.HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID;
    config.FACEBOOK_PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
    
    // Maps
    config.GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    config.MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    
    // Email
    config.EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    config.EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    config.EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Error Reporting
    config.SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
    config.SENTRY_ENVIRONMENT = import.meta.env.VITE_SENTRY_ENVIRONMENT || config.APP_ENV;
    config.ERROR_REPORTING_ENDPOINT = import.meta.env.VITE_ERROR_REPORTING_ENDPOINT;
    config.ERROR_REPORTING_API_KEY = import.meta.env.VITE_ERROR_REPORTING_API_KEY;
    
    // Boolean configurations
    config.ENABLE_PERFORMANCE_MONITORING = import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING !== 'false';
    config.ENABLE_ERROR_BOUNDARY = import.meta.env.VITE_ENABLE_ERROR_BOUNDARY !== 'false';
    config.ENABLE_DARK_MODE = import.meta.env.VITE_ENABLE_DARK_MODE === 'true';
    config.ENABLE_LANGUAGE_SWITCHING = import.meta.env.VITE_ENABLE_LANGUAGE_SWITCHING === 'true';
    config.ENABLE_APPOINTMENT_BOOKING = import.meta.env.VITE_ENABLE_APPOINTMENT_BOOKING !== 'false';
    config.ENABLE_LIVE_CHAT = import.meta.env.VITE_ENABLE_LIVE_CHAT === 'true';
    config.ENABLE_CSP = import.meta.env.VITE_ENABLE_CSP !== 'false';
    config.ENABLE_HSTS = import.meta.env.VITE_ENABLE_HSTS !== 'false';
    config.DEBUG_MODE = import.meta.env.VITE_DEBUG_MODE === 'true';
    config.SHOW_PERFORMANCE_METRICS = import.meta.env.VITE_SHOW_PERFORMANCE_METRICS === 'true';

    // Production-specific validations
    if (isProduction) {
      // Ensure debug flags are disabled in production
      if (config.DEBUG_MODE) {
        errors.push('DEBUG_MODE must be false in production');
      }
      if (config.SHOW_PERFORMANCE_METRICS) {
        errors.push('SHOW_PERFORMANCE_METRICS must be false in production');
      }
      // Validate production-specific settings
      if (config.APP_ENV !== 'production') {
        warnings.push('APP_ENV should be set to "production" in production builds');
      }
    }
    // Production-specific validations
    try {
      if (isProduction) {
        // Warn about missing optional but recommended variables
        if (!config.GOOGLE_ANALYTICS_ID) {
          warnings.push('Google Analytics ID not configured - analytics tracking disabled');
        }
        if (!config.SENTRY_DSN && !config.ERROR_REPORTING_ENDPOINT) {
          warnings.push('No error reporting service configured - errors will not be tracked');
        }
        if (!config.GOOGLE_MAPS_API_KEY) {
          warnings.push('Google Maps API key not configured - location features may not work');
        }
        // Validate URLs
        if (config.SITE_URL && !isValidUrl(config.SITE_URL)) {
          errors.push('Invalid SITE_URL format');
        }
        if (config.API_BASE_URL && !isValidUrl(config.API_BASE_URL)) {
          errors.push('Invalid API_BASE_URL format');
        }
        // Validate email addresses
        if (config.PRACTICE_EMAIL && !isValidEmail(config.PRACTICE_EMAIL)) {
          errors.push('Invalid PRACTICE_EMAIL format');
        }
        if (config.ARGUS_EMAIL && !isValidEmail(config.ARGUS_EMAIL)) {
          errors.push('Invalid ARGUS_EMAIL format');
        }
      }
    } catch (error) {
      errors.push(`Environment validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  } catch (error) {
    errors.push(`Environment validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  return {
    isValid: errors?.length === 0,
    errors,
    warnings,
    config
  };
}

/**
 * Get validated environment configuration
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  const validation = validateEnvironmentVariables();
  
  if (!validation.isValid) {
    throw new Error(`Environment validation failed: ${validation.errors.join(', ')}`);
  }
  return validation.config as EnvironmentConfig;
}

/**
 * Validate URL format
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Initialize environment validation on app startup
 */
export function initializeEnvironment(): void {
  const validation = validateEnvironmentVariables();

  if (!validation.isValid) {
    throw new Error(`Critical environment configuration errors: ${validation.errors.join(', ')}`);
  }
  // Only show warnings in development (silently handle in production)
  if (import.meta.env.DEV && validation.warnings?.length > 0) {
    // Development warnings are handled silently to avoid console output
    // In a real application, you might want to use a proper logging service
  }
}
