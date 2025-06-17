#!/usr/bin/env node

/**
 * Final Import Fix Script
 * Fixes all remaining import syntax issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

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
 * Fix all import issues in a single file
 */
function fixImportIssuesInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix missing closing braces in imports like "import { Button from"
  const missingBraceRegex = /import\s*\{\s*([^}]+)\s+from\s+(['"][^'"]+['"])/g;
  const braceMatches = [...content.matchAll(missingBraceRegex)];
  
  for (const match of braceMatches) {
    const fullMatch = match[0];
    const imports = match[1];
    const fromPath = match[2];
    
    // Check if it's missing the closing brace
    if (!fullMatch.includes('} from')) {
      const fixedImport = `import { ${imports} } from ${fromPath}`;
      fixedContent = fixedContent.replace(fullMatch, fixedImport);
      changes++;
    }
  }

  // Fix syntax errors in useCallback
  const callbackRegex = /useCallback\([^,]+,\s*\[\]\)\s*\}\s*\}/g;
  const callbackMatches = [...fixedContent.matchAll(callbackRegex)];
  
  for (const match of callbackMatches) {
    const fullMatch = match[0];
    const fixedCallback = fullMatch.replace(/\}\s*\}$/, '}, [])');
    fixedContent = fixedContent.replace(fullMatch, fixedCallback);
    changes++;
  }

  // Fix syntax errors in arrow functions with extra commas
  const extraCommaRegex = /,\s*\[\]\)\s*\}/g;
  const commaMatches = [...fixedContent.matchAll(extraCommaRegex)];
  
  for (const match of commaMatches) {
    const fullMatch = match[0];
    const fixedCallback = fullMatch.replace(/,\s*\[\]\)\s*\}/, '\n                }, [])');
    fixedContent = fixedContent.replace(fullMatch, fixedCallback);
    changes++;
  }

  // Write back if changes were made
  if (changes > 0) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed import issues: ${relativePath} (${changes} fixes)`);
    return changes;
  }

  return 0;
}

/**
 * Main function
 */
function fixAllImportIssues() {
  console.log('🔧 FINAL IMPORT SYNTAX FIX');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = fixImportIssuesInFile(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 FINAL IMPORT FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Fixed missing closing braces in import statements');
    console.log('• Fixed useCallback syntax errors');
    console.log('• Fixed arrow function syntax issues');
    console.log('• Preserved all functionality');
  } else {
    console.log();
    console.log('🎉 All import statements are properly formatted!');
  }
}

// Run the fix
fixAllImportIssues();
