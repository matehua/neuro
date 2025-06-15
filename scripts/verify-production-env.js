#!/usr/bin/env node

/**
 * Production Environment Verification Script
 * Validates that all production environment variables are correctly configured
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Production environment file path
const prodEnvPath = path.join(__dirname, '../.env.production');

// Required production variables
const REQUIRED_PRODUCTION_VARS = [
  'VITE_APP_ENV',
  'VITE_SITE_URL',
  'VITE_PRACTICE_PHONE',
  'VITE_PRACTICE_EMAIL'
];

// Variables that must be false in production
const MUST_BE_FALSE = [
  'VITE_DEBUG_MODE',
  'VITE_SHOW_PERFORMANCE_METRICS'
];

// Variables that must be true in production
const MUST_BE_TRUE = [
  'VITE_ENABLE_PERFORMANCE_MONITORING',
  'VITE_ENABLE_ERROR_BOUNDARY',
  'VITE_ENABLE_CSP',
  'VITE_ENABLE_HSTS'
];

// Recommended production variables
const RECOMMENDED_VARS = [
  'VITE_GOOGLE_ANALYTICS_ID',
  'VITE_GOOGLE_MAPS_API_KEY',
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_SENTRY_DSN'
];

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Environment file not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};

  content.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        let value = valueParts.join('=').trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        env[key] = value;
      }
    }
  });

  return env;
}

function validateProductionEnvironment() {
  const errors = [];
  const warnings = [];
  const recommendations = [];

  try {
    const env = parseEnvFile(prodEnvPath);

    // Check required variables
    REQUIRED_PRODUCTION_VARS.forEach(varName => {
      if (!env[varName] || env[varName].trim() === '') {
        errors.push(`Missing required variable: ${varName}`);
      }
    });

    // Check variables that must be false
    MUST_BE_FALSE.forEach(varName => {
      if (env[varName] === 'true') {
        errors.push(`${varName} must be false in production (currently: ${env[varName]})`);
      }
    });

    // Check variables that must be true
    MUST_BE_TRUE.forEach(varName => {
      if (env[varName] !== 'true') {
        warnings.push(`${varName} should be true in production (currently: ${env[varName] || 'undefined'})`);
      }
    });

    // Check recommended variables
    RECOMMENDED_VARS.forEach(varName => {
      if (!env[varName] || env[varName].includes('XXXX') || env[varName].includes('xxxxxxx')) {
        recommendations.push(`Consider configuring ${varName} for optimal production experience`);
      }
    });

    // Specific validations
    if (env.VITE_APP_ENV !== 'production') {
      errors.push(`VITE_APP_ENV must be 'production' (currently: ${env.VITE_APP_ENV})`);
    }

    if (env.VITE_SITE_URL && !env.VITE_SITE_URL.startsWith('https://')) {
      warnings.push('VITE_SITE_URL should use HTTPS in production');
    }

    if (env.VITE_DEBUG_MODE === 'true') {
      errors.push('Debug mode must be disabled in production');
    }

    if (env.VITE_SHOW_PERFORMANCE_METRICS === 'true') {
      errors.push('Performance metrics display must be disabled in production');
    }

    // Check for placeholder values
    Object.entries(env).forEach(([key, value]) => {
      if (value.includes('XXXX') || value.includes('xxxxxxx') || value.includes('placeholder')) {
        if (RECOMMENDED_VARS.includes(key)) {
          recommendations.push(`Replace placeholder value for ${key}`);
        } else if (REQUIRED_PRODUCTION_VARS.includes(key)) {
          errors.push(`Replace placeholder value for required variable ${key}`);
        }
      }
    });

    return { errors, warnings, recommendations, env };

  } catch (error) {
    return { 
      errors: [`Failed to parse environment file: ${error.message}`], 
      warnings: [], 
      recommendations: [],
      env: {} 
    };
  }
}

function generateReport() {
  const { errors, warnings, recommendations, env } = validateProductionEnvironment();

  // Report header
  console.log('\n🔍 PRODUCTION ENVIRONMENT VERIFICATION REPORT');
  console.log('='.repeat(50));

  // Critical errors
  if (errors.length > 0) {
    console.log('\n❌ CRITICAL ERRORS (Must fix before deployment):');
    errors.forEach(error => console.log(`   • ${error}`));
  }

  // Warnings
  if (warnings.length > 0) {
    console.log('\n⚠️  WARNINGS (Should fix for optimal production):');
    warnings.forEach(warning => console.log(`   • ${warning}`));
  }

  // Recommendations
  if (recommendations.length > 0) {
    console.log('\n💡 RECOMMENDATIONS (Consider for enhanced functionality):');
    recommendations.forEach(rec => console.log(`   • ${rec}`));
  }

  // Success message
  if (errors.length === 0) {
    console.log('\n✅ PRODUCTION ENVIRONMENT VALIDATION PASSED');
    console.log('\n📊 Configuration Summary:');
    console.log(`   • Environment: ${env.VITE_APP_ENV || 'Not set'}`);
    console.log(`   • Site URL: ${env.VITE_SITE_URL || 'Not set'}`);
    console.log(`   • Debug Mode: ${env.VITE_DEBUG_MODE || 'false'}`);
    console.log(`   • Performance Metrics: ${env.VITE_SHOW_PERFORMANCE_METRICS || 'false'}`);
    console.log(`   • Error Boundary: ${env.VITE_ENABLE_ERROR_BOUNDARY || 'Not set'}`);
    console.log(`   • CSP Enabled: ${env.VITE_ENABLE_CSP || 'Not set'}`);
    console.log(`   • HSTS Enabled: ${env.VITE_ENABLE_HSTS || 'Not set'}`);
  } else {
    console.log('\n❌ PRODUCTION ENVIRONMENT VALIDATION FAILED');
    console.log(`\n${errors.length} critical error(s) must be resolved before deployment.`);
  }

  // Security check summary
  console.log('\n🔒 Security Configuration:');
  const securityChecks = [
    { name: 'Debug Mode Disabled', status: env.VITE_DEBUG_MODE !== 'true' },
    { name: 'Performance Metrics Disabled', status: env.VITE_SHOW_PERFORMANCE_METRICS !== 'true' },
    { name: 'CSP Enabled', status: env.VITE_ENABLE_CSP === 'true' },
    { name: 'HSTS Enabled', status: env.VITE_ENABLE_HSTS === 'true' },
    { name: 'Error Boundary Enabled', status: env.VITE_ENABLE_ERROR_BOUNDARY === 'true' }
  ];

  securityChecks.forEach(check => {
    const icon = check.status ? '✅' : '❌';
    console.log(`   ${icon} ${check.name}`);
  });

  console.log('\n' + '='.repeat(50));
  
  // Exit with appropriate code
  process.exit(errors.length > 0 ? 1 : 0);
}

// Run the verification
generateReport();
