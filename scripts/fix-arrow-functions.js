#!/usr/bin/env node

/**
 * Fix Arrow Function Syntax Script
 * Fixes missing arrow (=>) in React.FC function declarations
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
 * Fix arrow function syntax in a single file
 */
function fixArrowFunctions(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix missing arrow in React.FC declarations
  const reactFCRegex = /const\s+(\w+):\s*React\.FC(?:<[^>]*>)?\s*=\s*\(\s*\)\s*\{/g;
  const matches = [...content.matchAll(reactFCRegex)];
  
  for (const match of matches) {
    const fullMatch = match[0];
    const componentName = match[1];
    const fixedDeclaration = fullMatch.replace(/=\s*\(\s*\)\s*\{/, '= () => {');
    fixedContent = fixedContent.replace(fullMatch, fixedDeclaration);
    changes++;
  }

  // Fix missing arrow in React.FC with props
  const reactFCWithPropsRegex = /const\s+(\w+):\s*React\.FC(?:<[^>]*>)?\s*=\s*\(\s*\{[^}]*\}\s*\)\s*\{/g;
  const propsMatches = [...content.matchAll(reactFCWithPropsRegex)];
  
  for (const match of propsMatches) {
    const fullMatch = match[0];
    const fixedDeclaration = fullMatch.replace(/=\s*\(\s*(\{[^}]*\})\s*\)\s*\{/, '= ($1) => {');
    fixedContent = fixedContent.replace(fullMatch, fixedDeclaration);
    changes++;
  }

  // Fix missing arrow in regular function declarations
  const functionRegex = /const\s+(\w+):\s*[^=]*=\s*\(\s*[^)]*\)\s*\{/g;
  const functionMatches = [...content.matchAll(functionRegex)];
  
  for (const match of functionMatches) {
    const fullMatch = match[0];
    if (!fullMatch.includes('=>') && !fullMatch.includes('React.FC')) {
      const fixedDeclaration = fullMatch.replace(/=\s*\(([^)]*)\)\s*\{/, '= ($1) => {');
      fixedContent = fixedContent.replace(fullMatch, fixedDeclaration);
      changes++;
    }
  }

  // Write back if changes were made
  if (fixedContent !== content) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed arrow functions: ${relativePath} (${changes} fixes)`);
    return changes;
  }

  return 0;
}

/**
 * Main function
 */
function fixAllArrowFunctions() {
  console.log('🏹 FIXING ARROW FUNCTION SYNTAX');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = fixArrowFunctions(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 ARROW FUNCTION FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Added missing arrow (=>) in React.FC declarations');
    console.log('• Fixed function syntax for proper arrow function format');
    console.log('• Maintained component functionality and props');
  } else {
    console.log();
    console.log('🎉 All arrow functions are properly formatted!');
  }
}

// Run the fix
fixAllArrowFunctions();
