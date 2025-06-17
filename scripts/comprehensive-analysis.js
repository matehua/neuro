#!/usr/bin/env node

/**
 * Comprehensive Codebase Analysis
 * Analyzes file sizes, type safety, performance, and code quality issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Analysis configuration
const CONFIG = {
  maxFileSize: 150,
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  excludeDirs: ['node_modules', '.git', 'dist', 'build', 'coverage'],
  excludeFiles: ['vite-env.d.ts', 'tailwind.config.ts', 'postcss.config.js']
};

/**
 * Get all files to analyze
 */
function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        getAllFiles(fullPath, files);
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
 * Analyze file size issues
 */
function analyzeFileSizes(files) {
  const oversizedFiles = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n').length;
    const relativePath = path.relative(PROJECT_ROOT, file);
    
    if (lines > CONFIG.maxFileSize) {
      oversizedFiles.push({
        path: relativePath,
        lines,
        excess: lines - CONFIG.maxFileSize,
        content
      });
    }
  });
  
  return oversizedFiles.sort((a, b) => b.lines - a.lines);
}

/**
 * Analyze type safety issues
 */
function analyzeTypeSafety(files) {
  const typeSafetyIssues = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(PROJECT_ROOT, file);
    const issues = [];
    
    // Check for 'any' types
    const anyMatches = content.match(/:\s*any\b/g);
    if (anyMatches) {
      issues.push(`${anyMatches.length} explicit 'any' types found`);
    }
    
    // Check for implicit any (function parameters without types)
    const implicitAnyMatches = content.match(/\([^)]*\w+(?!\s*:)[^)]*\)\s*=>/g);
    if (implicitAnyMatches) {
      issues.push(`${implicitAnyMatches.length} potential implicit 'any' parameters`);
    }
    
    // Check for missing interface definitions
    const propsWithoutInterface = content.match(/props:\s*\{[^}]+\}/g);
    if (propsWithoutInterface) {
      issues.push(`${propsWithoutInterface.length} inline prop types (should use interfaces)`);
    }
    
    // Check for non-null assertions
    const nonNullAssertions = content.match(/!\s*[.;]/g);
    if (nonNullAssertions) {
      issues.push(`${nonNullAssertions.length} non-null assertions (potentially unsafe)`);
    }
    
    if (issues.length > 0) {
      typeSafetyIssues.push({
        path: relativePath,
        issues
      });
    }
  });
  
  return typeSafetyIssues;
}

/**
 * Analyze performance issues
 */
function analyzePerformance(files) {
  const performanceIssues = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(PROJECT_ROOT, file);
    const issues = [];
    
    // Check for missing React.memo
    if (content.includes('export default function') || content.includes('export function')) {
      if (!content.includes('React.memo') && !content.includes('memo(')) {
        issues.push('Component not memoized (consider React.memo)');
      }
    }
    
    // Check for useEffect without dependency array
    const useEffectMatches = content.match(/useEffect\s*\([^,]+\)/g);
    if (useEffectMatches) {
      issues.push(`${useEffectMatches.length} useEffect hooks without dependency arrays`);
    }
    
    // Check for inline object/array creation in JSX
    const inlineObjectMatches = content.match(/\{\s*\{[^}]+\}\s*\}/g);
    if (inlineObjectMatches && inlineObjectMatches.length > 3) {
      issues.push(`${inlineObjectMatches.length} inline objects in JSX (consider memoization)`);
    }
    
    // Check for context providers without memoization
    if (content.includes('Provider') && !content.includes('useMemo')) {
      issues.push('Context provider without value memoization');
    }
    
    if (issues.length > 0) {
      performanceIssues.push({
        path: relativePath,
        issues
      });
    }
  });
  
  return performanceIssues;
}

/**
 * Analyze code quality issues
 */
function analyzeCodeQuality(files) {
  const codeQualityIssues = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(PROJECT_ROOT, file);
    const issues = [];
    
    // Check for duplicate code patterns
    const lines = content.split('\n');
    const duplicateLines = [];
    for (let i = 0; i < lines.length - 1; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[i].trim() === lines[j].trim() && lines[i].trim().length > 20) {
          duplicateLines.push(lines[i].trim());
        }
      }
    }
    if (duplicateLines.length > 0) {
      issues.push(`${duplicateLines.length} duplicate code lines found`);
    }
    
    // Check for inconsistent naming
    const camelCaseVars = content.match(/\b[a-z][a-zA-Z0-9]*\b/g) || [];
    const snake_caseVars = content.match(/\b[a-z][a-z0-9_]*_[a-z0-9_]*\b/g) || [];
    if (snake_caseVars.length > 0 && camelCaseVars.length > 0) {
      issues.push('Mixed naming conventions (camelCase vs snake_case)');
    }
    
    // Check for missing error boundaries
    if (content.includes('throw new Error') && !content.includes('ErrorBoundary')) {
      issues.push('Error throwing without error boundary');
    }
    
    // Check for console statements
    const consoleMatches = content.match(/console\.(log|warn|error)/g);
    if (consoleMatches) {
      issues.push(`${consoleMatches.length} console statements (should be conditional)`);
    }
    
    if (issues.length > 0) {
      codeQualityIssues.push({
        path: relativePath,
        issues
      });
    }
  });
  
  return codeQualityIssues;
}

/**
 * Generate refactoring suggestions
 */
function generateRefactoringSuggestions(oversizedFiles) {
  const suggestions = [];
  
  oversizedFiles.forEach(file => {
    const content = file.content;
    const fileSuggestions = [];
    
    // Suggest splitting by components
    const componentMatches = content.match(/export\s+(default\s+)?function\s+\w+/g);
    if (componentMatches && componentMatches.length > 1) {
      fileSuggestions.push(`Split into ${componentMatches.length} separate component files`);
    }
    
    // Suggest extracting interfaces
    const interfaceMatches = content.match(/interface\s+\w+/g);
    if (interfaceMatches && interfaceMatches.length > 3) {
      fileSuggestions.push('Extract interfaces to separate types file');
    }
    
    // Suggest extracting utilities
    const utilityMatches = content.match(/export\s+(const|function)\s+\w+/g);
    if (utilityMatches && utilityMatches.length > 5) {
      fileSuggestions.push('Extract utility functions to separate utils file');
    }
    
    // Suggest extracting constants
    const constantMatches = content.match(/const\s+[A-Z_]+\s*=/g);
    if (constantMatches && constantMatches.length > 3) {
      fileSuggestions.push('Extract constants to separate constants file');
    }
    
    suggestions.push({
      path: file.path,
      lines: file.lines,
      suggestions: fileSuggestions
    });
  });
  
  return suggestions;
}

/**
 * Main analysis function
 */
function runComprehensiveAnalysis() {
  console.log('🔍 COMPREHENSIVE CODEBASE ANALYSIS');
  console.log('='.repeat(60));
  console.log();
  
  const files = getAllFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Analyzing ${files.length} files...`);
  console.log();
  
  // File Size Analysis
  console.log('📏 FILE SIZE ANALYSIS');
  console.log('─'.repeat(40));
  const oversizedFiles = analyzeFileSizes(files);
  if (oversizedFiles.length === 0) {
    console.log('✅ All files are within acceptable size limits');
  } else {
    console.log(`⚠️  ${oversizedFiles.length} files exceed ${CONFIG.maxFileSize} lines:`);
    oversizedFiles.slice(0, 10).forEach(file => {
      console.log(`   • ${file.path}: ${file.lines} lines (+${file.excess})`);
    });
  }
  console.log();
  
  // Type Safety Analysis
  console.log('🔒 TYPE SAFETY ANALYSIS');
  console.log('─'.repeat(40));
  const typeSafetyIssues = analyzeTypeSafety(files);
  if (typeSafetyIssues.length === 0) {
    console.log('✅ No type safety issues found');
  } else {
    console.log(`⚠️  ${typeSafetyIssues.length} files with type safety issues:`);
    typeSafetyIssues.slice(0, 5).forEach(file => {
      console.log(`   • ${file.path}:`);
      file.issues.forEach(issue => {
        console.log(`     - ${issue}`);
      });
    });
  }
  console.log();
  
  // Performance Analysis
  console.log('⚡ PERFORMANCE ANALYSIS');
  console.log('─'.repeat(40));
  const performanceIssues = analyzePerformance(files);
  if (performanceIssues.length === 0) {
    console.log('✅ No performance issues found');
  } else {
    console.log(`⚠️  ${performanceIssues.length} files with performance issues:`);
    performanceIssues.slice(0, 5).forEach(file => {
      console.log(`   • ${file.path}:`);
      file.issues.forEach(issue => {
        console.log(`     - ${issue}`);
      });
    });
  }
  console.log();
  
  // Code Quality Analysis
  console.log('🎯 CODE QUALITY ANALYSIS');
  console.log('─'.repeat(40));
  const codeQualityIssues = analyzeCodeQuality(files);
  if (codeQualityIssues.length === 0) {
    console.log('✅ No code quality issues found');
  } else {
    console.log(`⚠️  ${codeQualityIssues.length} files with code quality issues:`);
    codeQualityIssues.slice(0, 5).forEach(file => {
      console.log(`   • ${file.path}:`);
      file.issues.forEach(issue => {
        console.log(`     - ${issue}`);
      });
    });
  }
  console.log();
  
  // Refactoring Suggestions
  if (oversizedFiles.length > 0) {
    console.log('💡 REFACTORING SUGGESTIONS');
    console.log('─'.repeat(40));
    const suggestions = generateRefactoringSuggestions(oversizedFiles);
    suggestions.slice(0, 5).forEach(suggestion => {
      console.log(`📄 ${suggestion.path} (${suggestion.lines} lines):`);
      suggestion.suggestions.forEach(s => {
        console.log(`   • ${s}`);
      });
    });
    console.log();
  }
  
  // Summary
  console.log('📊 ANALYSIS SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files analyzed: ${files.length}`);
  console.log(`📏 Oversized files: ${oversizedFiles.length}`);
  console.log(`🔒 Type safety issues: ${typeSafetyIssues.length}`);
  console.log(`⚡ Performance issues: ${performanceIssues.length}`);
  console.log(`🎯 Code quality issues: ${codeQualityIssues.length}`);
  
  // Save detailed report
  const report = {
    summary: {
      totalFiles: files.length,
      oversizedFiles: oversizedFiles.length,
      typeSafetyIssues: typeSafetyIssues.length,
      performanceIssues: performanceIssues.length,
      codeQualityIssues: codeQualityIssues.length
    },
    oversizedFiles,
    typeSafetyIssues,
    performanceIssues,
    codeQualityIssues,
    refactoringSuggestions: oversizedFiles.length > 0 ? generateRefactoringSuggestions(oversizedFiles) : []
  };
  
  const reportPath = path.join(PROJECT_ROOT, 'comprehensive-analysis-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n💾 Detailed report saved to: comprehensive-analysis-report.json`);
}

// Run analysis
runComprehensiveAnalysis();
