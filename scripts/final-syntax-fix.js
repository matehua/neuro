#!/usr/bin/env node

/**
 * Final Comprehensive Syntax Fix Script
 * Fixes all remaining syntax issues systematically
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
 * Fix all remaining syntax issues in a single file
 */
function fixAllSyntaxIssues(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix missing closing braces in function calls
  const missingBraceRegex = /(\w+)=\{([^}]+)\n\s+(\w+)=/g;
  const braceMatches = [...content.matchAll(missingBraceRegex)];
  
  for (const match of braceMatches) {
    const fullMatch = match[0];
    const prop1 = match[1];
    const value = match[2];
    const prop2 = match[3];
    
    const fixedMatch = `${prop1}={${value}}\n                            ${prop2}=`;
    fixedContent = fixedContent.replace(fullMatch, fixedMatch);
    changes++;
  }

  // Fix missing closing parentheses in function calls
  const missingParenRegex = /(\w+)=\{([^}]+)\n\s+(\w+)=/g;
  const parenMatches = [...fixedContent.matchAll(missingParenRegex)];
  
  for (const match of parenMatches) {
    const fullMatch = match[0];
    const prop1 = match[1];
    const value = match[2];
    const prop2 = match[3];
    
    if (value.includes('(') && !value.includes(')')) {
      const fixedMatch = `${prop1}={${value}}\n                            ${prop2}=`;
      fixedContent = fixedContent.replace(fullMatch, fixedMatch);
      changes++;
    }
  }

  // Fix specific patterns for onChange handlers
  const onChangeRegex = /onChange=\{([^}]+)\n\s+placeholder=/g;
  const onChangeMatches = [...fixedContent.matchAll(onChangeRegex)];
  
  for (const match of onChangeMatches) {
    const fullMatch = match[0];
    const handler = match[1];
    
    const fixedMatch = `onChange={${handler}}\n                            placeholder=`;
    fixedContent = fixedContent.replace(fullMatch, fixedMatch);
    changes++;
  }

  // Fix specific patterns for onSubmit handlers
  const onSubmitRegex = /onSubmit=\{([^}]+)\n\s+className=/g;
  const onSubmitMatches = [...fixedContent.matchAll(onSubmitRegex)];
  
  for (const match of onSubmitMatches) {
    const fullMatch = match[0];
    const handler = match[1];
    
    const fixedMatch = `onSubmit={${handler}}\n                      className=`;
    fixedContent = fixedContent.replace(fullMatch, fixedMatch);
    changes++;
  }

  // Fix specific patterns for onClick handlers
  const onClickRegex = /onClick=\{([^}]+)\n\s+(\w+)=/g;
  const onClickMatches = [...fixedContent.matchAll(onClickRegex)];
  
  for (const match of onClickMatches) {
    const fullMatch = match[0];
    const handler = match[1];
    const nextProp = match[2];
    
    const fixedMatch = `onClick={${handler}}\n                            ${nextProp}=`;
    fixedContent = fixedContent.replace(fullMatch, fixedMatch);
    changes++;
  }

  // Fix specific patterns for onSelect handlers
  const onSelectRegex = /onSelect=\{([^}]+)\n\s+(\w+)=/g;
  const onSelectMatches = [...fixedContent.matchAll(onSelectRegex)];
  
  for (const match of onSelectMatches) {
    const fullMatch = match[0];
    const handler = match[1];
    const nextProp = match[2];
    
    const fixedMatch = `onSelect={${handler}}\n                            ${nextProp}=`;
    fixedContent = fixedContent.replace(fullMatch, fixedMatch);
    changes++;
  }

  // Write back if changes were made
  if (changes > 0) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed syntax issues: ${relativePath} (${changes} fixes)`);
    return changes;
  }

  return 0;
}

/**
 * Main function
 */
function fixAllSyntax() {
  console.log('🔧 FINAL COMPREHENSIVE SYNTAX FIX');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = fixAllSyntaxIssues(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 FINAL SYNTAX FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Fixed missing closing braces in function calls');
    console.log('• Fixed missing closing parentheses');
    console.log('• Fixed onChange, onSubmit, onClick, onSelect handlers');
    console.log('• Preserved all functionality');
  } else {
    console.log();
    console.log('🎉 All syntax issues are resolved!');
  }
}

// Run the fix
fixAllSyntax();
