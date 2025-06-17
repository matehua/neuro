#!/usr/bin/env node

/**
 * Fix Performance.ts Syntax Issues Script
 * Comprehensive fix for all syntax issues in performance.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/lib/performance.ts');

/**
 * Fix all syntax issues in performance.ts
 */
function fixPerformanceSyntax() {
  console.log('🔧 FIXING PERFORMANCE.TS SYNTAX ISSUES');
  console.log('='.repeat(60));
  console.log();

  if (!fs.existsSync(FILE_PATH)) {
    console.log('❌ File not found: src/lib/performance.ts');
    return;
  }

  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let changes = 0;

  console.log('📁 Processing performance.ts...');
  console.log();

  // Fix all missing closing braces systematically
  const fixes = [
    // Fix constructor missing closing brace
    {
      pattern: /private constructor\(\) \{\n\s*\/\/ Don't initialize observers in constructor to prevent double initialization\n\s*static getInstance\(\): PerformanceMonitor \{/g,
      replacement: 'private constructor() {\n    // Don\'t initialize observers in constructor to prevent double initialization\n  }\n\n  static getInstance(): PerformanceMonitor {',
      description: 'Fixed constructor closing brace'
    },
    // Fix getInstance missing closing brace
    {
      pattern: /if \(!PerformanceMonitor\.instance\) \{\n\s*PerformanceMonitor\.instance = new PerformanceMonitor\(\);\n\s*return PerformanceMonitor\.instance;\n\s*\/\*\*/g,
      replacement: 'if (!PerformanceMonitor.instance) {\n      PerformanceMonitor.instance = new PerformanceMonitor();\n    }\n    return PerformanceMonitor.instance;\n  }\n\n  /**',
      description: 'Fixed getInstance closing braces'
    },
    // Fix initialize missing closing brace
    {
      pattern: /public initialize\(\): void \{\n\s*this\.initializeObservers\(\);\n\s*\/\*\*/g,
      replacement: 'public initialize(): void {\n    this.initializeObservers();\n  }\n\n  /**',
      description: 'Fixed initialize closing brace'
    },
    // Fix initializeObservers missing closing braces
    {
      pattern: /if \(this\.initialized \|\| this\.initializing\) \{\n\s*return;\n\s*\/\/ Set initializing flag atomically to prevent race conditions/g,
      replacement: 'if (this.initialized || this.initializing) {\n      return;\n    }\n    // Set initializing flag atomically to prevent race conditions',
      description: 'Fixed initializeObservers if statement'
    },
    {
      pattern: /if \(typeof window === 'undefined' \|\| !\('PerformanceObserver' in window\)\) \{\n\s*this\.initializing = false; \/\/ Reset flag on failure\n\s*return;\n\s*\/\/ Clean up any existing observers before creating new ones/g,
      replacement: 'if (typeof window === \'undefined\' || !(\'PerformanceObserver\' in window)) {\n      this.initializing = false; // Reset flag on failure\n      return;\n    }\n    // Clean up any existing observers before creating new ones',
      description: 'Fixed environment check if statement'
    },
    // Fix observer forEach missing closing braces
    {
      pattern: /if \(entry\.entryType === 'navigation'\) \{\n\s*this\.logNavigationMetrics\(entry as PerformanceNavigationTiming\);\n\s*\}\);\n\s*\}\);/g,
      replacement: 'if (entry.entryType === \'navigation\') {\n            this.logNavigationMetrics(entry as PerformanceNavigationTiming);\n          }\n        });\n      });',
      description: 'Fixed navigation observer forEach'
    },
    {
      pattern: /if \(entry\.entryType === 'resource'\) \{\n\s*this\.logResourceMetrics\(entry as PerformanceResourceTiming\);\n\s*\}\);\n\s*\}\);/g,
      replacement: 'if (entry.entryType === \'resource\') {\n            this.logResourceMetrics(entry as PerformanceResourceTiming);\n          }\n        });\n      });',
      description: 'Fixed resource observer forEach'
    },
    // Fix catch block missing closing brace
    {
      pattern: /\} catch \(error\) \{\n\s*\/\/ Reset flags on failure and cleanup any partial observers\n\s*this\.initializing = false;\n\s*this\.initialized = false;\n\s*this\.cleanupObservers\(\);\n\s*\/\*\*/g,
      replacement: '} catch (error) {\n      // Reset flags on failure and cleanup any partial observers\n      this.initializing = false;\n      this.initialized = false;\n      this.cleanupObservers();\n    }\n  }\n\n  /**',
      description: 'Fixed catch block and initializeObservers closing braces'
    },
    // Fix startMeasure missing closing brace
    {
      pattern: /this\.metrics\.set\(name, \{\n\s*name,\n\s*startTime,\n\s*metadata\n\s*\}\);\n\s*\/\*\*/g,
      replacement: 'this.metrics.set(name, {\n      name,\n      startTime,\n      metadata\n    });\n  }\n\n  /**',
      description: 'Fixed startMeasure closing brace'
    },
    // Fix endMeasure missing closing brace
    {
      pattern: /if \(!metric\) \{\n\s*return null;\n\s*const endTime = performance\.now\(\);/g,
      replacement: 'if (!metric) {\n      return null;\n    }\n    const endTime = performance.now();',
      description: 'Fixed endMeasure if statement'
    },
    {
      pattern: /this\.logMetric\(name, metric\.startTime, endTime, metric\.metadata\);\n\s*return completedMetric;\n\s*\/\*\*/g,
      replacement: 'this.logMetric(name, metric.startTime, endTime, metric.metadata);\n\n    return completedMetric;\n  }\n\n  /**',
      description: 'Fixed endMeasure closing brace'
    },
    // Fix logMetric missing closing brace
    {
      pattern: /\/\/ In production, send this to an analytics service\n\s*\/\/ Example: sendToAnalytics\(\{ name, duration, metadata \}\);\n\s*\/\*\*/g,
      replacement: '// In production, send this to an analytics service\n    // Example: sendToAnalytics({ name, duration, metadata });\n  }\n\n  /**',
      description: 'Fixed logMetric closing brace'
    },
    // Fix logNavigationMetrics missing closing braces
    {
      pattern: /if \(duration > 0\) \{\n\s*this\.logMetric\(`Navigation: \$\{name\}`, 0, duration\);\n\s*\}\);\n\s*\/\*\*/g,
      replacement: 'if (duration > 0) {\n        this.logMetric(`Navigation: ${name}`, 0, duration);\n      }\n    });\n  }\n\n  /**',
      description: 'Fixed logNavigationMetrics closing braces'
    },
    // Fix logResourceMetrics missing closing brace
    {
      pattern: /this\.logMetric\(`Resource: \$\{resourceType\}`, entry\.startTime, entry\.responseEnd, \{\n\s*url: entry\.name,\n\s*size: entry\.transferSize,\n\s*cached: entry\.transferSize === 0 && entry\.decodedBodySize > 0\n\s*\}\);\n\s*\/\*\*/g,
      replacement: 'this.logMetric(`Resource: ${resourceType}`, entry.startTime, entry.responseEnd, {\n      url: entry.name,\n      size: entry.transferSize,\n      cached: entry.transferSize === 0 && entry.decodedBodySize > 0\n    });\n  }\n\n  /**',
      description: 'Fixed logResourceMetrics closing brace'
    },
    // Fix getResourceType missing closing brace
    {
      pattern: /return 'Other';\n\s*\/\*\*/g,
      replacement: 'return \'Other\';\n  }\n\n  /**',
      description: 'Fixed getResourceType closing brace'
    },
    // Fix getMetrics missing closing brace
    {
      pattern: /return Array\.from\(this\.metrics\.values\(\)\);\n\s*\/\*\*/g,
      replacement: 'return Array.from(this.metrics.values());\n  }\n\n  /**',
      description: 'Fixed getMetrics closing brace'
    },
    // Fix clearMetrics missing closing brace
    {
      pattern: /this\.metrics\.clear\(\);\n\s*\/\*\*/g,
      replacement: 'this.metrics.clear();\n  }\n\n  /**',
      description: 'Fixed clearMetrics closing brace'
    },
    // Fix isInitialized missing closing brace
    {
      pattern: /return this\.initialized;\n\s*\/\*\*/g,
      replacement: 'return this.initialized;\n  }\n\n  /**',
      description: 'Fixed isInitialized closing brace'
    },
    // Fix isInitializing missing closing brace
    {
      pattern: /return this\.initializing;\n\s*\/\*\*/g,
      replacement: 'return this.initializing;\n  }\n\n  /**',
      description: 'Fixed isInitializing closing brace'
    },
    // Fix getObserverCount missing closing brace
    {
      pattern: /return this\.observers\?\.length;\n\s*\/\*\*/g,
      replacement: 'return this.observers?.length;\n  }\n\n  /**',
      description: 'Fixed getObserverCount closing brace'
    },
    // Fix cleanupObservers missing closing braces
    {
      pattern: /if \(this\.observers\?\.length > 0\) \{\n\s*this\.observers\.forEach\(observer => observer\.disconnect\(\)\);\n\s*this\.observers = \[\];\n\s*\/\*\*/g,
      replacement: 'if (this.observers?.length > 0) {\n      this.observers.forEach(observer => observer.disconnect());\n      this.observers = [];\n    }\n  }\n\n  /**',
      description: 'Fixed cleanupObservers closing braces'
    },
    // Fix cleanup missing closing brace
    {
      pattern: /this\.cleanupObservers\(\);\n\s*this\.initialized = false;\n\s*this\.initializing = false;\n\s*\/\*\*/g,
      replacement: 'this.cleanupObservers();\n    this.initialized = false;\n    this.initializing = false;\n  }\n}\n\n/**',
      description: 'Fixed cleanup and class closing braces'
    }
  ];

  // Apply all fixes
  fixes.forEach(fix => {
    const beforeContent = content;
    content = content.replace(fix.pattern, fix.replacement);
    if (content !== beforeContent) {
      changes++;
      console.log(`✅ ${fix.description}`);
    }
  });

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 PERFORMANCE.TS FIX SUMMARY');
  console.log('─'.repeat(50));
  console.log(`🔧 Total syntax fixes applied: ${changes}`);
  console.log('✅ File successfully fixed');

  console.log();
  console.log('💡 FIXES APPLIED:');
  console.log('• Fixed all method closing braces');
  console.log('• Fixed all class closing braces');
  console.log('• Fixed all if statement closing braces');
  console.log('• Fixed all forEach closing braces');
  console.log('• Fixed all catch block closing braces');
  console.log('• Preserved all functionality');
}

// Run the fix
fixPerformanceSyntax();
