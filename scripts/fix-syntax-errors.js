#!/usr/bin/env node

/**
 * Syntax Errors Fix Script
 * Fixes the syntax errors introduced by the previous automatic fix script
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * Fix syntax errors introduced by previous script
 */
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix extra commas at start of lines in interfaces
  fixed = fixed.replace(/^,(\s*\w+:)/gm, '$1');
  if (fixed !== content) changes++;

  // Fix orphaned commas on their own lines
  fixed = fixed.replace(/^\s*,\s*$/gm, '');
  if (fixed !== content) changes++;

  // Fix extra closing braces after interfaces
  fixed = fixed.replace(/(\}\s*)\}\s*\}/g, '$1');
  if (fixed !== content) changes++;

  // Fix double closing braces
  fixed = fixed.replace(/\}\s*\}\s*$/gm, '}');
  if (fixed !== content) changes++;

  // Fix malformed function signatures
  fixed = fixed.replace(/(\w+\??: string)\s*= \(\) => \{\};/g, '$1');
  if (fixed !== content) changes++;

  // Fix interface definitions with trailing commas before closing brace
  fixed = fixed.replace(/,(\s*\})/g, '$1');
  if (fixed !== content) changes++;

  // Fix object definitions with leading commas
  fixed = fixed.replace(/\{\s*,/g, '{');
  if (fixed !== content) changes++;

  // Fix multiple consecutive closing braces
  fixed = fixed.replace(/\}\s*\}\s*\}/g, '}');
  if (fixed !== content) changes++;

  return { content: fixed, changes };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return 0;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  // Check if file has syntax errors we can fix
  const hasSyntaxErrors = content.includes(',\n') || content.includes('}\n}') || content.includes('= () => {};');
  if (!hasSyntaxErrors) {
    return 0;
  }
  
  let processedContent = content;
  let totalChanges = 0;

  console.log(`🔧 Processing ${relativePath}...`);

  const result = fixSyntaxErrors(processedContent, filePath);
  processedContent = result.content;
  totalChanges += result.changes;

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`  ✅ Fixed ${totalChanges} syntax errors`);
  }

  return totalChanges;
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
function fixSyntaxErrorsMain() {
  console.log('🚨 FIXING SYNTAX ERRORS');
  console.log('='.repeat(40));
  console.log();

  const allFiles = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  
  let totalFiles = 0;
  let totalFixes = 0;

  allFiles.forEach(file => {
    const fixes = processFile(file);
    if (fixes > 0) {
      totalFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 SYNTAX ERRORS FIX SUMMARY');
  console.log('─'.repeat(30));
  console.log(`📁 Files processed: ${allFiles.length}`);
  console.log(`✅ Files fixed: ${totalFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);
  
  if (totalFixes > 0) {
    console.log();
    console.log('🎯 Next steps:');
    console.log('1. Run npm run type-check to verify compilation');
    console.log('2. Run npm run dev to test the development server');
    console.log('3. Check for any remaining syntax errors');
  }
}

// Run the script
fixSyntaxErrorsMain();
