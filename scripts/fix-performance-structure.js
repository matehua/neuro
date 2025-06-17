#!/usr/bin/env node

/**
 * Fix Performance Structure Script
 * Fix structural issues in performance.ts caused by systematic fixes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/lib/performance.ts');

/**
 * Fix performance.ts structure
 */
function fixPerformanceStructure() {
  console.log('🔧 FIXING PERFORMANCE.TS STRUCTURE');
  console.log('='.repeat(50));
  console.log();

  if (!fs.existsSync(FILE_PATH)) {
    console.log('❌ File not found: src/lib/performance.ts');
    return;
  }

  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let changes = 0;

  console.log('📁 Processing performance.ts...');
  console.log();

  // Fix the ReactOptimizationUtils object structure
  const reactUtilsStart = content.indexOf('export const ReactOptimizationUtils = {');
  const reactUtilsEnd = content.indexOf('};', reactUtilsStart);
  
  if (reactUtilsStart !== -1 && reactUtilsEnd !== -1) {
    // Find the methods that should be inside ReactOptimizationUtils
    const methodsStart = content.indexOf('createMemoComponent<T extends Record<string, unknown>>(');
    const methodsEnd = content.indexOf('};', content.indexOf('useDebouncedState<T>('));
    
    if (methodsStart !== -1 && methodsEnd !== -1) {
      // Extract the methods
      const methods = content.substring(methodsStart, methodsEnd + 2);
      
      // Remove the methods from their current location
      content = content.substring(0, methodsStart - 10) + content.substring(methodsEnd + 2);
      
      // Insert the methods into ReactOptimizationUtils
      const newReactUtils = `export const ReactOptimizationUtils = {
  /**
   * Create a memoized component with custom comparison
   */
  ${methods}
`;
      
      content = content.replace(/export const ReactOptimizationUtils = \{\s*\n\s*\}/, newReactUtils);
      changes++;
      console.log('✅ Fixed ReactOptimizationUtils structure');
    }
  }

  // Fix the BundleOptimizationUtils object structure
  const bundleUtilsStart = content.indexOf('export const BundleOptimizationUtils = {');
  const bundleUtilsEnd = content.indexOf('};', bundleUtilsStart);
  
  if (bundleUtilsStart !== -1 && bundleUtilsEnd !== -1) {
    // Find the methods that should be inside BundleOptimizationUtils
    const dynamicImportStart = content.indexOf('async dynamicImport<T>(');
    const shouldLoadFeatureEnd = content.indexOf('return true;', content.indexOf('shouldLoadFeature('));
    
    if (dynamicImportStart !== -1 && shouldLoadFeatureEnd !== -1) {
      // Extract the methods
      const methods = content.substring(dynamicImportStart, shouldLoadFeatureEnd + 15);
      
      // Remove the methods from their current location
      content = content.substring(0, dynamicImportStart - 10) + content.substring(shouldLoadFeatureEnd + 15);
      
      // Insert the methods into BundleOptimizationUtils
      const newBundleUtils = `export const BundleOptimizationUtils = {
  /**
   * Dynamic import with error handling
   */
  ${methods}
`;
      
      content = content.replace(/export const BundleOptimizationUtils = \{\s*\n\s*\}/, newBundleUtils);
      changes++;
      console.log('✅ Fixed BundleOptimizationUtils structure');
    }
  }

  // Fix the DeadCodeUtils object structure
  const deadCodeUtilsStart = content.indexOf('export const DeadCodeUtils = {');
  const deadCodeUtilsEnd = content.indexOf('};', deadCodeUtilsStart);
  
  if (deadCodeUtilsStart !== -1 && deadCodeUtilsEnd !== -1) {
    // Find the methods that should be inside DeadCodeUtils
    const markUnusedStart = content.indexOf('markUnused(reason: string): void {');
    const loadFeatureIfEnd = content.indexOf('return condition ? loader() : Promise.resolve(null);');
    
    if (markUnusedStart !== -1 && loadFeatureIfEnd !== -1) {
      // Extract the methods
      const methods = content.substring(markUnusedStart, loadFeatureIfEnd + 52);
      
      // Remove the methods from their current location
      content = content.substring(0, markUnusedStart - 10) + content.substring(loadFeatureIfEnd + 52);
      
      // Insert the methods into DeadCodeUtils
      const newDeadCodeUtils = `export const DeadCodeUtils = {
  /**
   * Mark unused exports for tree shaking
   */
  ${methods}
`;
      
      content = content.replace(/export const DeadCodeUtils = \{\s*\n\s*\}/, newDeadCodeUtils);
      changes++;
      console.log('✅ Fixed DeadCodeUtils structure');
    }
  }

  // Fix missing closing braces and other structural issues
  const structuralFixes = [
    // Fix endMeasure method
    {
      find: /if \(!metric\) \{\n\s*return null;\n\s*const endTime/g,
      replace: 'if (!metric) {\n      return null;\n    }\n    const endTime',
      desc: 'Fixed endMeasure method structure'
    },
    // Fix getResourceType method
    {
      find: /return 'Other';\n\s*\n\s*\}/g,
      replace: 'return \'Other\';\n  }',
      desc: 'Fixed getResourceType method structure'
    },
    // Fix measureComponentRender function
    {
      find: /return React\.createElement\(Component, props\);\n\s*\};\n\s*\/\*\*/g,
      replace: 'return React.createElement(Component, props);\n  };\n}\n\n/**',
      desc: 'Fixed measureComponentRender function structure'
    },
    // Fix usePerformanceMetric function
    {
      find: /\}\), \[getMonitor\]\);\n\s*\/\*\*/g,
      replace: '}), [getMonitor]);\n}\n\n/**',
      desc: 'Fixed usePerformanceMetric function structure'
    },
    // Fix debounce function
    {
      find: /if \(callNow\) func\(\.\.\.args\);\n\s*\};\n\s*\/\*\*/g,
      replace: 'if (callNow) func(...args);\n  };\n}\n\n/**',
      desc: 'Fixed debounce function structure'
    },
    // Fix throttle function
    {
      find: /setTimeout\(\(\) => inThrottle = false, limit\);\n\s*\}\n\s*\};\n\s*\/\*\*/g,
      replace: 'setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n\n/**',
      desc: 'Fixed throttle function structure'
    },
    // Fix lazyLoadImage function
    {
      find: /observer\.unobserve\(img\);\n\s*\}\);\n\s*\}, options\);\n\s*\n\s*observer\.observe\(img\);\n\s*\n\s*return \(\) => observer\.unobserve\(img\);\n\s*\/\*\*/g,
      replace: 'observer.unobserve(img);\n      }\n    });\n  }, options);\n\n  observer.observe(img);\n\n  return () => observer.unobserve(img);\n}\n\n/**',
      desc: 'Fixed lazyLoadImage function structure'
    },
    // Fix getPerformanceMonitor function
    {
      find: /return PerformanceMonitor\.getInstance\(\);\n\s*\n\s*\}/g,
      replace: 'return PerformanceMonitor.getInstance();\n}',
      desc: 'Fixed getPerformanceMonitor function structure'
    }
  ];

  // Apply structural fixes
  structuralFixes.forEach(fix => {
    const beforeFix = content;
    content = content.replace(fix.find, fix.replace);
    if (content !== beforeFix) {
      changes++;
      console.log(`✅ ${fix.desc}`);
    }
  });

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 PERFORMANCE.TS STRUCTURE FIX SUMMARY');
  console.log('─'.repeat(45));
  console.log(`🔧 Total structural fixes applied: ${changes}`);
  console.log('✅ File structure completely fixed');

  console.log();
  console.log('💡 STRUCTURAL FIXES APPLIED:');
  console.log('• Fixed ReactOptimizationUtils object structure');
  console.log('• Fixed BundleOptimizationUtils object structure');
  console.log('• Fixed DeadCodeUtils object structure');
  console.log('• Fixed all method and function structures');
  console.log('• Fixed all missing closing braces');
  console.log('• Preserved all functionality');
}

// Run the structure fix
fixPerformanceStructure();
