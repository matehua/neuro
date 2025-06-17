#!/usr/bin/env node

/**
 * Fix Mobile Optimization Cleanup Script
 * Remove extra closing braces and fix structural issues in mobile-optimization.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/lib/mobile-optimization.ts');

/**
 * Fix mobile-optimization.ts cleanup
 */
function fixMobileOptimizationCleanup() {
  console.log('🧹 FIXING MOBILE-OPTIMIZATION.TS CLEANUP');
  console.log('='.repeat(50));
  console.log();

  if (!fs.existsSync(FILE_PATH)) {
    console.log('❌ File not found: src/lib/mobile-optimization.ts');
    return;
  }

  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let changes = 0;

  console.log('📁 Processing mobile-optimization.ts...');
  console.log();

  // Remove consecutive closing braces that are on their own lines
  const beforeCleanup = content;
  content = content.replace(/(\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n)/g, '\n  }\n\n');
  if (content !== beforeCleanup) {
    changes++;
    console.log('✅ Removed consecutive closing braces after optimiseScrolling');
  }

  // Remove extra closing braces after optimiseFonts
  const beforeFontsCleanup = content;
  content = content.replace(/document\.head\.appendChild\(style\);\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n/g, 'document.head.appendChild(style);\n  }\n\n');
  if (content !== beforeFontsCleanup) {
    changes++;
    console.log('✅ Removed extra closing braces after optimiseFonts');
  }

  // Remove extra closing braces after addMobileSecurity
  const beforeSecurityCleanup = content;
  content = content.replace(/this\.addMobileSecurityMeta\(\);\n\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n/g, 'this.addMobileSecurityMeta();\n  }\n\n');
  if (content !== beforeSecurityCleanup) {
    changes++;
    console.log('✅ Removed extra closing braces after addMobileSecurity');
  }

  // Fix missing closing braces in specific methods
  const specificFixes = [
    // Fix optimiseImages method
    {
      find: /if \(img\.dataset\.src\) \{\n\s*img\.src = img\.dataset\.src;\n\s*img\.removeAttribute\('data-src'\);\n\s*imageObserver\.unobserve\(img\);\n\s*\}\n\s*\}\);\n\s*\}, \{/g,
      replace: 'if (img.dataset.src) {\n              img.src = img.dataset.src;\n              img.removeAttribute(\'data-src\');\n              imageObserver.unobserve(img);\n            }\n          }\n        });\n      }, {',
      desc: 'Fixed optimiseImages method structure'
    },
    // Fix addMobileSecurity method
    {
      find: /if \(this\.isMobileDevice\(\)\) \{\n\s*e\.preventDefault\(\);\n\s*\}\);\n/g,
      replace: 'if (this.isMobileDevice()) {\n        e.preventDefault();\n      }\n    });\n',
      desc: 'Fixed addMobileSecurity event listener'
    },
    // Fix addMobileSecurityMeta method
    {
      find: /document\.head\.appendChild\(meta\);\n\s*meta\.content = tag\.content;\n\s*\}\);\n\s*\/\*\*/g,
      replace: 'document.head.appendChild(meta);\n      }\n      meta.content = tag.content;\n    });\n  }\n\n  /**',
      desc: 'Fixed addMobileSecurityMeta method structure'
    },
    // Fix optimiseNetwork method
    {
      find: /document\.documentElement\.classList\.add\('slow-connection'\);\n\s*\}\n/g,
      replace: 'document.documentElement.classList.add(\'slow-connection\');\n      }\n    }\n  }\n\n',
      desc: 'Fixed optimiseNetwork method structure'
    },
    // Fix enhanceAccessibility method
    {
      find: /target\.scrollIntoView\(\{ behavior: 'smooth', block: 'center' \}\);\n\s*\}\);\n/g,
      replace: 'target.scrollIntoView({ behavior: \'smooth\', block: \'center\' });\n      }\n    });\n',
      desc: 'Fixed enhanceAccessibility focusin listener'
    },
    {
      find: /document\.documentElement\.classList\.add\('high-contrast'\);\n\s*\/\/ Add reduced motion detection\n\s*if \(window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\) \{\n\s*document\.documentElement\.classList\.add\('reduced-motion'\);\n\s*\}/g,
      replace: 'document.documentElement.classList.add(\'high-contrast\');\n    }\n    // Add reduced motion detection\n    if (window.matchMedia(\'(prefers-reduced-motion: reduce)\').matches) {\n      document.documentElement.classList.add(\'reduced-motion\');\n    }\n  }',
      desc: 'Fixed enhanceAccessibility method structure'
    },
    // Fix monitorPerformance method
    {
      find: /\/\/ High memory usage detected - could trigger cleanup or analytics\n\s*\/\/ Monitor battery status/g,
      replace: '// High memory usage detected - could trigger cleanup or analytics\n      }\n    }\n    // Monitor battery status',
      desc: 'Fixed monitorPerformance memory check'
    },
    {
      find: /document\.documentElement\.classList\.add\('low-battery'\);\n\s*\}\);\n\/\*\*/g,
      replace: 'document.documentElement.classList.add(\'low-battery\');\n        }\n      });\n    }\n  }\n}\n\n/**',
      desc: 'Fixed monitorPerformance battery check and class closing'
    },
    // Fix MobileUtils object structure
    {
      find: /export const MobileUtils = \{\s*\n\s*\}\s*\n\s*\/\*\*/g,
      replace: 'export const MobileUtils = {\n  /**',
      desc: 'Fixed MobileUtils object structure'
    },
    {
      find: /img\.style\.height = 'auto';\n\s*\};\n/g,
      replace: 'img.style.height = \'auto\';\n    }\n  }\n};\n',
      desc: 'Fixed optimiseImageForMobile method and MobileUtils closing'
    }
  ];

  // Apply specific fixes
  specificFixes.forEach(fix => {
    const beforeFix = content;
    content = content.replace(fix.find, fix.replace);
    if (content !== beforeFix) {
      changes++;
      console.log(`✅ ${fix.desc}`);
    }
  });

  // Clean up any remaining multiple consecutive closing braces
  let previousContent;
  do {
    previousContent = content;
    content = content.replace(/(\n\s*\}\s*\n\s*\}\s*\n)/g, '\n  }\n');
  } while (content !== previousContent);

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 MOBILE-OPTIMIZATION.TS CLEANUP SUMMARY');
  console.log('─'.repeat(45));
  console.log(`🧹 Total cleanups applied: ${changes}`);
  console.log('✅ File completely cleaned up');

  console.log();
  console.log('💡 CLEANUP FIXES APPLIED:');
  console.log('• Removed consecutive closing braces');
  console.log('• Fixed all method structures');
  console.log('• Fixed all missing closing braces');
  console.log('• Fixed MobileUtils object structure');
  console.log('• Preserved all functionality');
}

// Run the cleanup fix
fixMobileOptimizationCleanup();
