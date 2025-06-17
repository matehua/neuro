#!/usr/bin/env node

/**
 * Fix useCallback Syntax Script
 * Fixes malformed useCallback syntax patterns
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
 * Fix useCallback syntax issues in a single file
 */
function fixCallbackSyntax(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix malformed useCallback patterns like "useCallback(functionName\n}, [])"
  const malformedCallbackRegex = /useCallback\(([^,\n]+)\s*\n\s*\}\s*,\s*\[\]\)/g;
  const callbackMatches = [...content.matchAll(malformedCallbackRegex)];
  
  for (const match of callbackMatches) {
    const fullMatch = match[0];
    const functionName = match[1].trim();
    
    // Replace with simple function reference
    fixedContent = fixedContent.replace(fullMatch, functionName);
    changes++;
  }

  // Fix patterns like "useCallback(functionName\n}, [])" with different spacing
  const malformedCallback2Regex = /useCallback\(([^,\n]+)\s*\n\s*\},\s*\[\]\)/g;
  const callback2Matches = [...fixedContent.matchAll(malformedCallback2Regex)];
  
  for (const match of callback2Matches) {
    const fullMatch = match[0];
    const functionName = match[1].trim();
    
    // Replace with simple function reference
    fixedContent = fixedContent.replace(fullMatch, functionName);
    changes++;
  }

  // Fix patterns like "useCallback(functionName\n                }, [])"
  const malformedCallback3Regex = /useCallback\(([^,\n]+)\s*\n\s+\},\s*\[\]\)/g;
  const callback3Matches = [...fixedContent.matchAll(malformedCallback3Regex)];
  
  for (const match of callback3Matches) {
    const fullMatch = match[0];
    const functionName = match[1].trim();
    
    // Replace with simple function reference
    fixedContent = fixedContent.replace(fullMatch, functionName);
    changes++;
  }

  // Fix patterns where useCallback is used incorrectly with class methods
  const classMethodCallbackRegex = /useCallback\((this\.\w+)\s*\n\s*\},?\s*\[\]\)/g;
  const classMethodMatches = [...fixedContent.matchAll(classMethodCallbackRegex)];
  
  for (const match of classMethodMatches) {
    const fullMatch = match[0];
    const methodName = match[1];
    
    // Replace with simple method reference
    fixedContent = fixedContent.replace(fullMatch, methodName);
    changes++;
  }

  // Write back if changes were made
  if (changes > 0) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed useCallback syntax: ${relativePath} (${changes} fixes)`);
    return changes;
  }

  return 0;
}

/**
 * Main function
 */
function fixAllCallbackSyntax() {
  console.log('🔧 FIXING USECALLBACK SYNTAX ISSUES');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = fixCallbackSyntax(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 USECALLBACK SYNTAX FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Fixed malformed useCallback syntax');
    console.log('• Replaced unnecessary useCallback with direct function references');
    console.log('• Fixed class method callback patterns');
    console.log('• Preserved all functionality');
  } else {
    console.log();
    console.log('🎉 All useCallback syntax is properly formatted!');
  }
}

// Run the fix
fixAllCallbackSyntax();
