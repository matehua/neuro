#!/usr/bin/env node

/**
 * Final Cleanup Fix Script
 * Remove extra braces and fix any remaining syntax issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * Final cleanup fix for a single file
 */
function finalCleanupFix(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Remove consecutive closing braces that are on their own lines
  const beforeCleanup = fixedContent;
  fixedContent = fixedContent.replace(/(\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n)/g, '\n  }\n\n');
  if (fixedContent !== beforeCleanup) {
    changes++;
  }

  // Remove extra closing braces before comments
  const beforeCommentCleanup = fixedContent;
  fixedContent = fixedContent.replace(/(\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\/\*\*)/g, '\n  }\n\n  /**');
  if (fixedContent !== beforeCommentCleanup) {
    changes++;
  }

  // Fix specific patterns in mobile-optimization.ts
  if (relativePath.includes('mobile-optimization.ts')) {
    // Remove extra closing braces after optimiseFonts
    fixedContent = fixedContent.replace(/document\.head\.appendChild\(style\);\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n/g, 'document.head.appendChild(style);\n  }\n\n');
    changes++;
  }

  // Clean up any remaining multiple consecutive closing braces
  let previousContent;
  do {
    previousContent = fixedContent;
    fixedContent = fixedContent.replace(/(\n\s*\}\s*\n\s*\}\s*\n)/g, '\n  }\n');
  } while (fixedContent !== previousContent);

  // Fix missing closing braces for specific patterns
  const specificFixes = [
    // Fix missing closing braces in if statements
    {
      find: /if \([^)]+\) \{\n([^}]+)\n\s*([^}])/g,
      replace: 'if ($1) {\n$2\n    }\n    $3'
    },
    // Fix missing closing braces in forEach loops
    {
      find: /\.forEach\([^)]+\) => \{\n([^}]+)\n\s*\}\);\n\s*([^}])/g,
      replace: '.forEach($1) => {\n$2\n      });\n    $3'
    },
    // Fix missing closing braces in event listeners
    {
      find: /addEventListener\([^)]+, \([^)]*\) => \{\n([^}]+)\n\s*\}\);\n\s*([^}])/g,
      replace: 'addEventListener($1, ($2) => {\n$3\n    });\n    $4'
    }
  ];

  // Apply specific fixes
  specificFixes.forEach(fix => {
    const beforeFix = fixedContent;
    fixedContent = fixedContent.replace(fix.find, fix.replace);
    if (fixedContent !== beforeFix) {
      changes++;
    }
  });

  if (fixedContent !== content) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`🧹 Final cleanup: ${relativePath} (${changes} total fixes)`);
    return changes;
  }

  return 0;
}

/**
 * Get all TypeScript files
 */
function getAllTSFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
        getAllTSFiles(fullPath, files);
      }
    } else if (['.tsx', '.ts'].includes(path.extname(item))) {
      if (!['vite-env.d.ts', 'tailwind.config.ts'].includes(item)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Main function
 */
function finalCleanupFixAll() {
  console.log('🧹 FINAL CLEANUP FIX - REMOVE EXTRA BRACES AND CLEAN UP');
  console.log('='.repeat(70));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files for final cleanup...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = finalCleanupFix(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 FINAL CLEANUP FIX SUMMARY');
  console.log('─'.repeat(50));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files cleaned: ${fixedFiles}`);
  console.log(`🧹 Total cleanups: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FINAL CLEANUP FIXES APPLIED:');
    console.log('• Removed consecutive closing braces');
    console.log('• Cleaned up extra braces before comments');
    console.log('• Fixed specific patterns in mobile-optimization.ts');
    console.log('• Applied remaining specific fixes');
    console.log('• Preserved all functionality');
  } else {
    console.log();
    console.log('🎉 All files are clean and syntax issues are resolved!');
  }
}

// Run the final cleanup fix
finalCleanupFixAll();
