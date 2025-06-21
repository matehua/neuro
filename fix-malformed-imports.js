#!/usr/bin/env node

/**
 * Fix Malformed Import Statements
 * Finds and fixes malformed import statements throughout the codebase
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = __dirname;

let fixedFiles = 0;

/**
 * Get all TypeScript/JavaScript files
 */
function getAllSourceFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
        getAllSourceFiles(fullPath, files);
      }
    } else if (['.tsx', '.ts', '.jsx', '.js'].includes(path.extname(item))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Fix malformed import statements
 */
function fixMalformedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    let hasChanges = false;

    // Pattern 1: import { import en from '@/locales/en';
    const pattern1 = /import\s*{\s*import\s+en\s+from\s+['"]@\/locales\/en['"];\s*([^}]+)\s*}\s*from\s+['"]([^'"]+)['"];?/g;
    if (pattern1.test(fixed)) {
      fixed = fixed.replace(pattern1, (match, namedImports, fromPath) => {
        return `import en from '@/locales/en';\nimport {\n${namedImports.trim()}\n} from "${fromPath}";`;
      });
      hasChanges = true;
    }

    // Pattern 2: import { \n import en from '@/locales/en';
    const pattern2 = /import\s*{\s*\n\s*import\s+en\s+from\s+['"]@\/locales\/en['"];\s*([^}]+)\s*}\s*from\s+['"]([^'"]+)['"];?/g;
    if (pattern2.test(fixed)) {
      fixed = fixed.replace(pattern2, (match, namedImports, fromPath) => {
        return `import en from '@/locales/en';\nimport {\n${namedImports.trim()}\n} from "${fromPath}";`;
      });
      hasChanges = true;
    }

    // Pattern 3: Broken multi-line imports with en import in the middle
    const lines = fixed.split('\n');
    const fixedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Check for broken import pattern
      if (line.includes('import {') && !line.includes('}')) {
        // Look for the en import in the next few lines
        let j = i + 1;
        let foundEnImport = false;
        let enImportLine = '';
        let restOfImport = [];
        
        while (j < lines.length && !lines[j].includes('}')) {
          if (lines[j].includes("import en from '@/locales/en'")) {
            foundEnImport = true;
            enImportLine = lines[j].trim();
          } else {
            restOfImport.push(lines[j]);
          }
          j++;
        }
        
        if (foundEnImport && j < lines.length) {
          // Found the pattern, fix it
          const closingLine = lines[j]; // Line with }
          
          // Add the en import first
          fixedLines.push(enImportLine);
          
          // Reconstruct the original import
          fixedLines.push(line);
          restOfImport.forEach(importLine => fixedLines.push(importLine));
          fixedLines.push(closingLine);
          
          hasChanges = true;
          i = j + 1;
        } else {
          fixedLines.push(line);
          i++;
        }
      } else {
        fixedLines.push(line);
        i++;
      }
    }
    
    if (hasChanges) {
      fixed = fixedLines.join('\n');
    }

    // Additional cleanup: Remove any remaining malformed patterns
    fixed = fixed.replace(/import\s*{\s*import\s+en[^}]*}/g, '');
    fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines

    if (hasChanges || fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      fixedFiles++;
      const relativePath = path.relative(PROJECT_ROOT, filePath);
      console.log(`✅ Fixed: ${relativePath}`);
    }

  } catch (error) {
    const relativePath = path.relative(PROJECT_ROOT, filePath);
    console.log(`❌ Error in ${relativePath}: ${error.message}`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 FIXING MALFORMED IMPORTS');
  console.log('='.repeat(40));
  console.log();

  const sourceFiles = getAllSourceFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Checking ${sourceFiles.length} files...`);
  console.log();

  sourceFiles.forEach(fixMalformedImports);

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(20));
  console.log(`✅ Files Fixed: ${fixedFiles}`);
  
  if (fixedFiles > 0) {
    console.log('🎉 Malformed imports fixed!');
  } else {
    console.log('ℹ️  No malformed imports found.');
  }
}

main();
