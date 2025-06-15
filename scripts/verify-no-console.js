#!/usr/bin/env node

/**
 * Console Statement Detection Script
 * Verifies that no console statements remain in production code
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to scan
const SOURCE_DIRS = [
  path.join(__dirname, '../src'),
  path.join(__dirname, '../dist') // Check built files too
];

// Console methods to detect
const CONSOLE_METHODS = [
  'console.log',
  'console.info',
  'console.debug',
  'console.trace',
  'console.warn',
  'console.error',
  'console.assert',
  'console.clear',
  'console.count',
  'console.countReset',
  'console.dir',
  'console.dirxml',
  'console.group',
  'console.groupCollapsed',
  'console.groupEnd',
  'console.table',
  'console.time',
  'console.timeEnd',
  'console.timeLog',
  'console.profile',
  'console.profileEnd'
];

// File extensions to scan
const SCAN_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];

// Files to exclude from scanning
const EXCLUDE_PATTERNS = [
  'node_modules',
  '.git',
  'scripts/verify-no-console.js', // Exclude this script itself
  'test',
  'spec',
  '__tests__'
];

function shouldExcludeFile(filePath) {
  return EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function scanFileForConsole(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const violations = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Skip comments
    if (trimmedLine.startsWith('//') || trimmedLine.startsWith('*') || trimmedLine.startsWith('/*')) {
      return;
    }

    CONSOLE_METHODS.forEach(method => {
      if (line.includes(method)) {
        // Check if it's in a comment
        const commentIndex = line.indexOf('//');
        const methodIndex = line.indexOf(method);
        
        // If method appears before comment or no comment, it's a violation
        if (commentIndex === -1 || methodIndex < commentIndex) {
          violations.push({
            file: filePath,
            line: index + 1,
            content: line.trim(),
            method: method
          });
        }
      }
    });
  });

  return violations;
}

function scanDirectory(dirPath) {
  const violations = [];

  if (!fs.existsSync(dirPath)) {
    return violations;
  }

  function scanRecursive(currentPath) {
    const items = fs.readdirSync(currentPath);

    items.forEach(item => {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);

      if (shouldExcludeFile(itemPath)) {
        return;
      }

      if (stat.isDirectory()) {
        scanRecursive(itemPath);
      } else if (stat.isFile()) {
        const ext = path.extname(itemPath);
        if (SCAN_EXTENSIONS.includes(ext)) {
          const fileViolations = scanFileForConsole(itemPath);
          violations.push(...fileViolations);
        }
      }
    });
  }

  scanRecursive(dirPath);
  return violations;
}

function generateReport() {
  console.log('\n🔍 CONSOLE STATEMENT DETECTION REPORT');
  console.log('='.repeat(50));

  let totalViolations = 0;
  const violationsByFile = new Map();

  SOURCE_DIRS.forEach(dir => {
    const dirName = path.basename(dir);
    console.log(`\n📁 Scanning ${dirName}...`);
    
    const violations = scanDirectory(dir);
    totalViolations += violations.length;

    if (violations.length === 0) {
      console.log(`   ✅ No console statements found in ${dirName}`);
    } else {
      console.log(`   ❌ Found ${violations.length} console statement(s) in ${dirName}`);
      
      violations.forEach(violation => {
        const relativePath = path.relative(path.join(__dirname, '..'), violation.file);
        if (!violationsByFile.has(relativePath)) {
          violationsByFile.set(relativePath, []);
        }
        violationsByFile.get(relativePath).push(violation);
      });
    }
  });

  // Detailed violation report
  if (totalViolations > 0) {
    console.log('\n❌ CONSOLE STATEMENT VIOLATIONS FOUND:');
    console.log('='.repeat(50));

    violationsByFile.forEach((violations, file) => {
      console.log(`\n📄 ${file}:`);
      violations.forEach(violation => {
        console.log(`   Line ${violation.line}: ${violation.method}`);
        console.log(`   Code: ${violation.content}`);
      });
    });

    console.log('\n🔧 REMEDIATION REQUIRED:');
    console.log('1. Remove all console statements from production code');
    console.log('2. Use conditional logging only in development');
    console.log('3. Replace with proper error reporting services');
    console.log('4. Verify Vite terser configuration strips console statements');
  }

  // Summary
  console.log('\n📊 SUMMARY:');
  console.log(`   Total files scanned: ${getFileCount()}`);
  console.log(`   Console violations found: ${totalViolations}`);
  console.log(`   Files with violations: ${violationsByFile.size}`);

  if (totalViolations === 0) {
    console.log('\n✅ CONSOLE STATEMENT CHECK PASSED');
    console.log('🚀 Production code is clean of console statements');
  } else {
    console.log('\n❌ CONSOLE STATEMENT CHECK FAILED');
    console.log('🚨 Console statements must be removed before production deployment');
  }

  console.log('\n' + '='.repeat(50));

  // Exit with appropriate code
  process.exit(totalViolations > 0 ? 1 : 0);
}

function getFileCount() {
  let count = 0;
  
  SOURCE_DIRS.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    function countRecursive(currentPath) {
      const items = fs.readdirSync(currentPath);
      
      items.forEach(item => {
        const itemPath = path.join(currentPath, item);
        const stat = fs.statSync(itemPath);
        
        if (shouldExcludeFile(itemPath)) return;
        
        if (stat.isDirectory()) {
          countRecursive(itemPath);
        } else if (stat.isFile()) {
          const ext = path.extname(itemPath);
          if (SCAN_EXTENSIONS.includes(ext)) {
            count++;
          }
        }
      });
    }
    
    countRecursive(dir);
  });
  
  return count;
}

// Run the detection
generateReport();
