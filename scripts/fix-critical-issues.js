#!/usr/bin/env node

/**
 * Critical Issues Fix Script
 * Systematically fixes parsing errors, type safety issues, and React hook violations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Critical files with parsing errors that need immediate attention
const CRITICAL_FILES = [
  'src/components/ui/command.tsx',
  'src/components/ui/context-menu.tsx', 
  'src/components/ui/drawer.tsx',
  'src/components/ui/form.tsx',
  'src/components/ui/hover-card.tsx',
  'src/components/ui/input-otp.tsx',
  'src/components/ui/pagination.tsx',
  'src/components/ui/scroll-area.tsx',
  'src/components/ui/separator.tsx',
  'src/components/ui/sheet.tsx',
  'src/components/ui/sidebar.tsx',
  'src/components/ui/skeleton.tsx',
  'src/components/ui/table.tsx',
  'src/components/ui/toggle.tsx',
  'src/lib/sitemap.ts',
  'src/lib/test-utils.tsx',
  'src/lib/type-safety.ts',
  'src/pages/ConsultingRooms.tsx',
  'src/pages/Gallery.tsx',
  'src/pages/TestImages.tsx',
  'src/pages/patient-resources/AssessmentTools.tsx',
  'src/pages/patient-resources/PatientDashboard.tsx',
  'src/pages/patient-resources/SpineHealthApp.tsx',
  'src/types/translations.ts'
];

/**
 * Fix common syntax issues
 */
function fixSyntaxIssues(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix missing closing braces in export statements
  if (fixed.includes('export {') && !fixed.includes('}\n') && !fixed.includes('}')) {
    fixed = fixed.replace(/export\s*\{([^}]+)$/, 'export {\n$1\n}');
    changes++;
  }

  // Fix missing closing braces in function components
  const missingBracePattern = /(\w+\.displayName\s*=\s*[^;]+;?\s*)$/m;
  if (missingBracePattern.test(fixed)) {
    fixed = fixed.replace(missingBracePattern, '$1\n}');
    changes++;
  }

  // Fix incomplete JSX expressions
  fixed = fixed.replace(/return\s*\(\s*$/m, 'return (');
  
  // Fix missing closing parentheses in forwardRef
  fixed = fixed.replace(/React\.forwardRef<[^>]+>\(\(\{[^}]+\}\s*,\s*ref\s*\)\s*=>\s*\([^)]*$/gm, 
    (match) => match + ')');

  // Fix incomplete interface definitions
  fixed = fixed.replace(/interface\s+\w+\s*\{[^}]*$/gm, (match) => {
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });

  return { content: fixed, changes };
}

/**
 * Fix TypeScript any types
 */
function fixAnyTypes(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Replace common any patterns with proper types
  const anyReplacements = [
    // React component props
    { pattern: /\(\{\s*className:\s*any/g, replacement: '({ className' },
    { pattern: /,\s*children:\s*any/g, replacement: ', children' },
    { pattern: /,\s*\.\.\.\s*props\s*\}:\s*any/g, replacement: ', ...props }' },
    { pattern: /,\s*ref:\s*any/g, replacement: ', ref' },
    
    // Function parameters
    { pattern: /\(\s*\w+:\s*any\s*\)/g, replacement: (match) => match.replace(': any', '') },
    
    // Event handlers
    { pattern: /\(\s*event:\s*any\s*\)/g, replacement: '(event: React.MouseEvent)' },
    { pattern: /\(\s*e:\s*any\s*\)/g, replacement: '(e: React.FormEvent)' },
  ];

  anyReplacements.forEach(({ pattern, replacement }) => {
    const before = fixed;
    fixed = fixed.replace(pattern, replacement);
    if (fixed !== before) changes++;
  });

  return { content: fixed, changes };
}

/**
 * Fix React Hook violations
 */
function fixHookViolations(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix hooks called inside callbacks - move to component level
  const hookInCallbackPattern = /(\w+\.map\([^}]+useCallback\([^}]+\}[^}]+\))/g;
  if (hookInCallbackPattern.test(fixed)) {
    console.log(`⚠️  Manual fix needed for hook violations in ${filePath}`);
    // This requires manual intervention as it's complex to automate
  }

  // Fix conditional hook calls
  const conditionalHookPattern = /if\s*\([^)]+\)\s*\{[^}]*use\w+\(/g;
  if (conditionalHookPattern.test(fixed)) {
    console.log(`⚠️  Manual fix needed for conditional hooks in ${filePath}`);
    // This requires manual intervention
  }

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
  
  let processedContent = content;
  let totalChanges = 0;

  // Apply fixes in order
  const fixes = [
    { name: 'Syntax issues', fn: fixSyntaxIssues },
    { name: 'Any types', fn: fixAnyTypes },
    { name: 'Hook violations', fn: fixHookViolations }
  ];

  fixes.forEach(({ name, fn }) => {
    const result = fn(processedContent, filePath);
    processedContent = result.content;
    totalChanges += result.changes;
    
    if (result.changes > 0) {
      console.log(`  ✅ ${name}: ${result.changes} fixes`);
    }
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`🔧 Fixed ${relativePath}: ${totalChanges} total changes`);
  }

  return totalChanges;
}

/**
 * Main function
 */
function fixCriticalIssues() {
  console.log('🚨 FIXING CRITICAL ISSUES');
  console.log('='.repeat(50));
  console.log();

  let totalFiles = 0;
  let totalFixes = 0;

  // Process critical files first
  console.log('📁 Processing critical files with parsing errors...');
  CRITICAL_FILES.forEach(file => {
    const fullPath = path.join(PROJECT_ROOT, file);
    const fixes = processFile(fullPath);
    if (fixes > 0) {
      totalFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 CRITICAL ISSUES FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${CRITICAL_FILES.length}`);
  console.log(`✅ Files fixed: ${totalFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);
  
  if (totalFixes > 0) {
    console.log();
    console.log('🎯 Next steps:');
    console.log('1. Run npm run type-check to verify fixes');
    console.log('2. Run npm run lint to check remaining issues');
    console.log('3. Test the application to ensure functionality');
  }
}

// Run the script
fixCriticalIssues();
