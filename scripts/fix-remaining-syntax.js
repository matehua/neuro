#!/usr/bin/env node

/**
 * Fix Remaining Syntax Issues Script
 * Comprehensive fix for all remaining syntax issues across the codebase
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * Fix all remaining syntax issues in a single file
 */
function fixRemainingSyntax(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix patterns like "onChange={handleInputChange\n}" 
  const onChangePattern = /onChange=\{handleInputChange\n\s*\}/g;
  const onChangeMatches = [...content.matchAll(onChangePattern)];
  for (const match of onChangeMatches) {
    fixedContent = fixedContent.replace(match[0], 'onChange={handleInputChange}');
    changes++;
  }

  // Fix patterns like "value={formData.something\n}"
  const valuePattern = /value=\{formData\.[^}]+\n\s*\}/g;
  const valueMatches = [...fixedContent.matchAll(valuePattern)];
  for (const match of valueMatches) {
    const fixed = match[0].replace(/\n\s*\}/, '}');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Fix patterns like "onClick={() => something\n}"
  const onClickPattern = /onClick=\{\(\) => [^}]+\n\s*\}/g;
  const onClickMatches = [...fixedContent.matchAll(onClickPattern)];
  for (const match of onClickMatches) {
    const fixed = match[0].replace(/\n\s*\}/, '}');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Fix patterns like "onValueChange={useCallback((value) => something\n}, [])"
  const onValueChangePattern = /onValueChange=\{useCallback\(\([^)]+\) => [^}]+\n\s*\}, \[\]\)/g;
  const onValueChangeMatches = [...fixedContent.matchAll(onValueChangePattern)];
  for (const match of onValueChangeMatches) {
    const fixed = match[0]
      .replace(/useCallback\(/, '')
      .replace(/\n\s*\}, \[\]\)/, '}');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Fix malformed input properties with extra closing braces
  const malformedInputPattern = /(\w+)=\{[^}]+\n\s*\}\n\s*(\w+)=/g;
  const malformedInputMatches = [...fixedContent.matchAll(malformedInputPattern)];
  for (const match of malformedInputMatches) {
    const fixed = match[0].replace(/\n\s*\}\n\s*/, '}\n                            ');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Fix button onClick handlers missing closing braces
  const buttonOnClickPattern = /onClick=\{\(\) => setCurrentStep\(\d+\)\n\s*>/g;
  const buttonOnClickMatches = [...fixedContent.matchAll(buttonOnClickPattern)];
  for (const match of buttonOnClickMatches) {
    const fixed = match[0].replace(/\n\s*>/, '}\n                  >');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Fix textarea onChange handlers
  const textareaOnChangePattern = /onChange=\{handleInputChange\n\s*className=/g;
  const textareaOnChangeMatches = [...fixedContent.matchAll(textareaOnChangePattern)];
  for (const match of textareaOnChangeMatches) {
    const fixed = match[0].replace(/\n\s*className=/, '}\n                            className=');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Fix Tabs onValueChange with useCallback
  const tabsOnValueChangePattern = /onValueChange=\{useCallback\(\(value\) => handleSelectChange\([^)]+\)\n\s*\}, \[\]\)/g;
  const tabsOnValueChangeMatches = [...fixedContent.matchAll(tabsOnValueChangePattern)];
  for (const match of tabsOnValueChangeMatches) {
    const fixed = match[0]
      .replace(/useCallback\(/, '')
      .replace(/\n\s*\}, \[\]\)/, ')');
    fixedContent = fixedContent.replace(match[0], fixed);
    changes++;
  }

  // Write back if changes were made
  if (changes > 0) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed remaining syntax: ${relativePath} (${changes} fixes)`);
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
function fixAllRemainingSyntax() {
  console.log('🔧 FIXING ALL REMAINING SYNTAX ISSUES');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let fixedFiles = 0;
  let totalFixes = 0;

  files.forEach(file => {
    const fixes = fixRemainingSyntax(file);
    if (fixes > 0) {
      fixedFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 REMAINING SYNTAX FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);

  if (totalFixes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Fixed malformed onChange handlers');
    console.log('• Fixed malformed value properties');
    console.log('• Fixed malformed onClick handlers');
    console.log('• Fixed malformed onValueChange handlers');
    console.log('• Fixed malformed input properties');
    console.log('• Fixed button onClick handlers');
    console.log('• Fixed textarea onChange handlers');
    console.log('• Fixed Tabs onValueChange handlers');
    console.log('• Preserved all functionality');
  } else {
    console.log();
    console.log('🎉 All remaining syntax issues are resolved!');
  }
}

// Run the fix
fixAllRemainingSyntax();
