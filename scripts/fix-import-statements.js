#!/usr/bin/env node

/**
 * Fix Import Statements Script
 * Fixes malformed import declarations (missing semicolons, etc.)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Configuration
const CONFIG = {
  extensions: ['.tsx', '.ts'],
  excludeDirs: ['node_modules', '.git', 'dist', 'build', 'coverage'],
  excludeFiles: ['vite-env.d.ts', 'tailwind.config.ts']
};

/**
 * Get all TypeScript files
 */
function getAllTSFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        getAllTSFiles(fullPath, files);
      }
    } else if (CONFIG.extensions.includes(path.extname(item))) {
      if (!CONFIG.excludeFiles.includes(item)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Fix import statements in a single file
 */
function fixImportStatements(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix missing semicolons in import statements
  const importRegex = /^(import\s+(?:\*\s+as\s+\w+|\{[^}]*\}|\w+)\s+from\s+['"][^'"]*['"])(?!;)$/gm;
  const matches = [...content.matchAll(importRegex)];
  
  for (const match of matches) {
    const importStatement = match[1];
    const fixedStatement = importStatement + ';';
    fixedContent = fixedContent.replace(importStatement, fixedStatement);
    changes++;
  }

  // Fix import statements with extra spaces
  fixedContent = fixedContent.replace(/import\s+\{\s+([^}]+)\s+\}\s+from/g, 'import { $1 } from');

  // Fix import statements with inconsistent quotes
  fixedContent = fixedContent.replace(/import\s+([^'"]*)\s+from\s+"([^"]+)"/g, "import $1 from '$2'");

  // Fix default import syntax issues
  fixedContent = fixedContent.replace(/import\s+\*\s+as\s+(\w+)\s+from\s+'react'/g, "import React from 'react'");

  // Write back if changes were made
  if (fixedContent !== content) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed import statements: ${relativePath} (${changes} fixes)`);
    return changes;
  }

  return 0;
}

/**
 * Main function
 */
function fixAllImportStatements() {
  console.log('📦 FIXING IMPORT STATEMENTS');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = fixImportStatements(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 IMPORT STATEMENT FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Added missing semicolons to import statements');
    console.log('• Normalized spacing in import declarations');
    console.log('• Standardized quote usage in imports');
    console.log('• Fixed React import syntax');
  } else {
    console.log();
    console.log('🎉 All import statements are properly formatted!');
  }
}

// Run the fix
fixAllImportStatements();
