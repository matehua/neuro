#!/usr/bin/env node

/**
 * Comprehensive Production Readiness Audit
 * Systematically analyzes the entire codebase for production issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = __dirname;

// Comprehensive audit results
const auditResults = {
  criticalIssues: [],
  warnings: [],
  suggestions: [],
  summary: {
    totalFiles: 0,
    filesWithIssues: 0,
    criticalCount: 0,
    warningCount: 0,
    suggestionCount: 0
  }
};

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
      if (!['vite-env.d.ts'].includes(item)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Analyze file for critical issues
 */
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  const issues = [];

  // Critical Issues
  
  // 1. Missing imports
  const importMatches = content.match(/import\s+.*?from\s+['"]([^'"]+)['"]/g);
  const usagePatterns = [
    { pattern: /\buseMemo\b/, import: 'useMemo' },
    { pattern: /\buseCallback\b/, import: 'useCallback' },
    { pattern: /\buseEffect\b/, import: 'useEffect' },
    { pattern: /\buseState\b/, import: 'useState' },
    { pattern: /\bReact\./, import: 'React' }
  ];

  usagePatterns.forEach(({ pattern, import: importName }) => {
    if (pattern.test(content) && !content.includes(`import.*${importName}`)) {
      issues.push({
        type: 'critical',
        message: `Missing import: ${importName}`,
        line: content.split('\n').findIndex(line => pattern.test(line)) + 1
      });
    }
  });

  // 2. Translation fallback issues
  if (content.includes('useLanguage') && content.includes('const { t }')) {
    if (!content.includes('const safeT = t || en') && !content.includes('const finalT =')) {
      issues.push({
        type: 'critical',
        message: 'Missing translation fallback mechanism',
        line: content.split('\n').findIndex(line => line.includes('const { t }')) + 1
      });
    }
  }

  // 3. Unsafe property access
  const unsafeAccessPatterns = [
    /\bt\.[a-zA-Z_$][a-zA-Z0-9_$]*\.[a-zA-Z_$]/g,
    /\bfinalT\.[a-zA-Z_$][a-zA-Z0-9_$]*\.[a-zA-Z_$]/g
  ];

  unsafeAccessPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach(match => {
        const lineNumber = content.substring(0, content.indexOf(match)).split('\n').length;
        issues.push({
          type: 'warning',
          message: `Potentially unsafe property access: ${match}`,
          line: lineNumber
        });
      });
    }
  });

  // 4. Console statements (production blocker)
  const consolePattern = /console\.(log|warn|error|debug|info)/g;
  const consoleMatches = content.match(consolePattern);
  if (consoleMatches) {
    consoleMatches.forEach(match => {
      const lineNumber = content.substring(0, content.indexOf(match)).split('\n').length;
      issues.push({
        type: 'critical',
        message: `Console statement found: ${match} (production blocker)`,
        line: lineNumber
      });
    });
  }

  // 5. Missing error boundaries
  if (content.includes('export default function') && !content.includes('ErrorBoundary')) {
    if (relativePath.includes('pages/')) {
      issues.push({
        type: 'warning',
        message: 'Page component should be wrapped in ErrorBoundary',
        line: 1
      });
    }
  }

  // 6. Missing display names
  if (content.includes('export default function') || content.includes('export const')) {
    if (!content.includes('.displayName =')) {
      issues.push({
        type: 'suggestion',
        message: 'Component missing displayName for debugging',
        line: 1
      });
    }
  }

  // 7. Hardcoded strings (i18n issues)
  const hardcodedStringPattern = /["']([A-Z][a-zA-Z\s]{10,})["']/g;
  const hardcodedMatches = content.match(hardcodedStringPattern);
  if (hardcodedMatches && !relativePath.includes('locales/')) {
    hardcodedMatches.slice(0, 3).forEach(match => { // Limit to first 3
      const lineNumber = content.substring(0, content.indexOf(match)).split('\n').length;
      issues.push({
        type: 'suggestion',
        message: `Potential hardcoded string: ${match.substring(0, 30)}...`,
        line: lineNumber
      });
    });
  }

  return issues;
}

/**
 * Check for missing files and broken links
 */
function checkMissingFiles() {
  const issues = [];
  
  // Check critical files exist
  const criticalFiles = [
    'src/App.tsx',
    'src/main.tsx',
    'src/contexts/LanguageContext.tsx',
    'src/contexts/DeviceContext.tsx',
    'src/locales/en.ts',
    'src/locales/zh.ts',
    'src/routes/routeConfig.tsx',
    'package.json',
    'vite.config.ts',
    'tsconfig.json'
  ];

  criticalFiles.forEach(file => {
    if (!fs.existsSync(path.join(PROJECT_ROOT, file))) {
      issues.push({
        type: 'critical',
        message: `Missing critical file: ${file}`,
        file: file
      });
    }
  });

  return issues;
}

/**
 * Main audit function
 */
function runComprehensiveAudit() {
  console.log('🔍 COMPREHENSIVE PRODUCTION READINESS AUDIT');
  console.log('='.repeat(50));
  console.log();

  // Get all source files
  const sourceFiles = getAllSourceFiles(path.join(PROJECT_ROOT, 'src'));
  auditResults.summary.totalFiles = sourceFiles.length;

  console.log(`📁 Analyzing ${sourceFiles.length} source files...`);
  console.log();

  // Analyze each file
  sourceFiles.forEach(filePath => {
    const issues = analyzeFile(filePath);
    if (issues.length > 0) {
      auditResults.summary.filesWithIssues++;
      
      issues.forEach(issue => {
        const issueData = {
          ...issue,
          file: path.relative(PROJECT_ROOT, filePath)
        };

        if (issue.type === 'critical') {
          auditResults.criticalIssues.push(issueData);
          auditResults.summary.criticalCount++;
        } else if (issue.type === 'warning') {
          auditResults.warnings.push(issueData);
          auditResults.summary.warningCount++;
        } else {
          auditResults.suggestions.push(issueData);
          auditResults.summary.suggestionCount++;
        }
      });
    }
  });

  // Check for missing files
  const missingFileIssues = checkMissingFiles();
  missingFileIssues.forEach(issue => {
    auditResults.criticalIssues.push(issue);
    auditResults.summary.criticalCount++;
  });

  // Display results
  displayAuditResults();
}

/**
 * Display audit results
 */
function displayAuditResults() {
  console.log('📊 AUDIT RESULTS');
  console.log('='.repeat(30));
  console.log(`📁 Total Files: ${auditResults.summary.totalFiles}`);
  console.log(`⚠️  Files with Issues: ${auditResults.summary.filesWithIssues}`);
  console.log(`🚨 Critical Issues: ${auditResults.summary.criticalCount}`);
  console.log(`⚠️  Warnings: ${auditResults.summary.warningCount}`);
  console.log(`💡 Suggestions: ${auditResults.summary.suggestionCount}`);
  console.log();

  // Critical Issues
  if (auditResults.criticalIssues.length > 0) {
    console.log('🚨 CRITICAL ISSUES (Must Fix for Production)');
    console.log('-'.repeat(45));
    auditResults.criticalIssues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.file}:${issue.line || 'N/A'}`);
      console.log(`   ${issue.message}`);
      console.log();
    });
  }

  // Warnings
  if (auditResults.warnings.length > 0) {
    console.log('⚠️  WARNINGS (Should Fix)');
    console.log('-'.repeat(25));
    auditResults.warnings.slice(0, 10).forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.file}:${issue.line || 'N/A'}`);
      console.log(`   ${issue.message}`);
      console.log();
    });
    if (auditResults.warnings.length > 10) {
      console.log(`   ... and ${auditResults.warnings.length - 10} more warnings`);
      console.log();
    }
  }

  // Production Readiness Assessment
  console.log('🎯 PRODUCTION READINESS ASSESSMENT');
  console.log('-'.repeat(35));
  
  if (auditResults.summary.criticalCount === 0) {
    console.log('✅ READY FOR PRODUCTION');
    console.log('   No critical issues found. Application is production-ready.');
  } else {
    console.log('❌ NOT READY FOR PRODUCTION');
    console.log(`   ${auditResults.summary.criticalCount} critical issues must be resolved.`);
  }
  
  console.log();
  console.log('📝 Next Steps:');
  console.log('1. Fix all critical issues');
  console.log('2. Address warnings for better code quality');
  console.log('3. Run build test: npm run build');
  console.log('4. Run type check: npm run type-check');
  console.log('5. Test in production environment');
}

// Run the audit
runComprehensiveAudit();
