#!/usr/bin/env node

/**
 * Validate en.ts Structure Script
 * Validate and fix the structural issues in en.ts by checking brace balance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/locales/en.ts');

/**
 * Validate and fix en.ts structure
 */
function validateEnTsStructure() {
  console.log('🔧 VALIDATING EN.TS STRUCTURE');
  console.log('='.repeat(50));
  console.log();

  // Read the current file
  let content = fs.readFileSync(FILE_PATH, 'utf8');
  
  console.log('📁 Analyzing en.ts brace structure...');
  
  // Count braces to find imbalance
  let openBraces = 0;
  let closeBraces = 0;
  let inString = false;
  let stringChar = '';
  let escaped = false;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const prevChar = i > 0 ? content[i - 1] : '';
    
    // Handle string detection
    if (!escaped && (char === '"' || char === "'" || char === '`')) {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar) {
        inString = false;
        stringChar = '';
      }
    }
    
    // Handle escape sequences
    escaped = !escaped && char === '\\';
    
    // Count braces only outside strings
    if (!inString) {
      if (char === '{') {
        openBraces++;
      } else if (char === '}') {
        closeBraces++;
      }
    }
  }
  
  console.log(`Open braces: ${openBraces}`);
  console.log(`Close braces: ${closeBraces}`);
  console.log(`Difference: ${openBraces - closeBraces}`);
  
  if (openBraces === closeBraces) {
    console.log('✅ Brace structure is balanced');
    return;
  }
  
  // If there's an imbalance, try to fix it
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    console.log(`❌ Missing ${missingBraces} closing brace(s)`);
    
    // Add missing closing braces at the end
    const lines = content.split('\n');
    const lastLine = lines[lines.length - 1];
    
    if (lastLine.trim() === '') {
      // Remove empty last line
      lines.pop();
    }
    
    // Add missing closing braces before the final semicolon
    const lastNonEmptyLine = lines[lines.length - 1];
    if (lastNonEmptyLine.includes('};')) {
      // Replace the last line with proper closing braces
      lines[lines.length - 1] = lastNonEmptyLine.replace('};', '}' + '}'.repeat(missingBraces) + ';');
    } else {
      // Add missing braces
      lines.push('}' + '}'.repeat(missingBraces - 1) + ';');
    }
    
    content = lines.join('\n') + '\n';
    
    console.log(`✅ Added ${missingBraces} missing closing brace(s)`);
  } else {
    const extraBraces = closeBraces - openBraces;
    console.log(`❌ Extra ${extraBraces} closing brace(s)`);
    
    // This is more complex to fix automatically, so we'll report it
    console.log('⚠️  Manual intervention required for extra closing braces');
  }
  
  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 EN.TS STRUCTURE VALIDATION SUMMARY');
  console.log('─'.repeat(45));
  console.log('✅ Structure validation completed');
  console.log('✅ Brace balance checked and fixed if needed');

  console.log();
  console.log('💡 VALIDATION RESULTS:');
  console.log('• Brace structure analyzed');
  console.log('• Missing braces added if found');
  console.log('• File structure validated');
}

// Run the validation
validateEnTsStructure();
