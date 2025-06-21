#!/usr/bin/env node

/**
 * Comprehensive Fix Script for All Remaining Issues
 * Fixes parsing errors, React hook violations, TypeScript any types, and fast refresh warnings
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Files with known parsing errors
const PARSING_ERROR_FILES = [
  'src/components/ui/form.tsx',
  'src/components/ui/hover-card.tsx',
  'src/components/ui/input-otp.tsx',
  'src/components/ui/scroll-area.tsx',
  'src/components/ui/separator.tsx',
  'src/components/ui/sheet.tsx',
  'src/components/ui/sidebar.tsx',
  'src/components/ui/skeleton.tsx',
  'src/components/ui/toggle.tsx',
  'src/lib/sitemap.ts',
  'src/lib/test-utils.tsx',
  'src/lib/type-safety.ts',
  'src/pages/ConsultingRooms.tsx',
  'src/pages/Gallery.tsx',
  'src/types/translations.ts'
];

/**
 * Fix parsing errors in UI components
 */
function fixParsingErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix missing closing braces in forwardRef
  fixed = fixed.replace(/React\.forwardRef<[^>]+>\(\(\{[^}]+\}\s*,\s*ref\s*\)\s*=>\s*\([^)]*$/gm, 
    (match) => {
      if (!match.includes('))')) {
        changes++;
        return match + ')';
      }
      return match;
    });

  // Fix missing closing braces in function components
  fixed = fixed.replace(/(\w+\.displayName\s*=\s*[^;]+;?\s*)$/m, '$1');
  
  // Fix incomplete interface definitions
  fixed = fixed.replace(/interface\s+\w+\s*\{[^}]*$/gm, (match) => {
    if (!match.includes('}')) {
      changes++;
      return match + '\n}';
    }
    return match;
  });

  // Fix missing closing braces in export statements
  if (fixed.includes('export {') && !fixed.trim().endsWith('}')) {
    const lines = fixed.split('\n');
    const lastLine = lines[lines.length - 1];
    if (lastLine.trim() === '' || !lastLine.includes('}')) {
      lines[lines.length - 1] = '}';
      fixed = lines.join('\n');
      changes++;
    }
  }

  // Fix JSX expressions that need parent elements
  fixed = fixed.replace(/return\s*\(\s*<>\s*<[^>]+>[^<]*<\/[^>]+>\s*<[^>]+>[^<]*<\/[^>]+>\s*$/gm, 
    (match) => {
      if (!match.includes('</>')) {
        changes++;
        return match + '\n    </>\n  )';
      }
      return match;
    });

  // Fix missing commas in object/interface definitions
  fixed = fixed.replace(/(\w+:\s*[^,\n}]+)\s*\n\s*(\w+:)/g, '$1,\n  $2');

  return { content: fixed, changes };
}

/**
 * Fix TypeScript any types with proper types
 */
function fixAnyTypes(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Common any type replacements
  const typeReplacements = [
    // React component props
    { pattern: /\(\{\s*className:\s*any/g, replacement: '({ className' },
    { pattern: /,\s*children:\s*any/g, replacement: ', children' },
    { pattern: /,\s*\.\.\.\s*props\s*\}:\s*any/g, replacement: ', ...props }' },
    { pattern: /,\s*ref:\s*any/g, replacement: ', ref' },
    { pattern: /,\s*checked:\s*any/g, replacement: ', checked' },
    { pattern: /,\s*inset:\s*any/g, replacement: ', inset' },
    
    // Event handlers
    { pattern: /\(\s*event:\s*any\s*\)/g, replacement: '(event: React.MouseEvent)' },
    { pattern: /\(\s*e:\s*any\s*\)/g, replacement: '(e: React.FormEvent)' },
    { pattern: /\(\s*_:\s*any\s*\)/g, replacement: '(_: unknown)' },
    
    // Function parameters
    { pattern: /\(\s*(\w+):\s*any\s*\)/g, replacement: '($1: unknown)' },
    { pattern: /:\s*any\[\]/g, replacement: ': unknown[]' },
    { pattern: /:\s*any\s*=/g, replacement: ': unknown =' },
    
    // Object types
    { pattern: /Record<string,\s*any>/g, replacement: 'Record<string, unknown>' },
    { pattern: /\{\s*\[key:\s*string\]:\s*any\s*\}/g, replacement: '{ [key: string]: unknown }' },
  ];

  typeReplacements.forEach(({ pattern, replacement }) => {
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

  // Fix hooks called inside map/forEach callbacks
  if (filePath.includes('Navbar.tsx')) {
    // Move useCallback outside of map
    fixed = fixed.replace(
      /(\w+\.map\([^}]+)(useCallback\([^}]+\}[^}]+\))/g,
      (match, mapPart, hookPart) => {
        console.log(`⚠️  Manual fix needed for hook in map callback in ${filePath}`);
        return match; // This needs manual intervention
      }
    );
  }

  if (filePath.includes('Specialties.tsx')) {
    // Fix conditional hook calls
    fixed = fixed.replace(
      /if\s*\([^)]+\)\s*\{[^}]*useCallback\(/g,
      (match) => {
        console.log(`⚠️  Manual fix needed for conditional hook in ${filePath}`);
        return match; // This needs manual intervention
      }
    );
  }

  return { content: fixed, changes };
}

/**
 * Fix fast refresh warnings by separating exports
 */
function fixFastRefreshWarnings(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if file has mixed exports (components + utilities)
  const hasComponentExport = /export\s+(default\s+)?function\s+\w+|export\s+(default\s+)?const\s+\w+\s*=\s*\(/g.test(fixed);
  const hasUtilityExport = /export\s+(const|function)\s+\w+(?!\s*=\s*React\.)/g.test(fixed);

  if (hasComponentExport && hasUtilityExport) {
    console.log(`⚠️  Fast refresh warning in ${filePath} - consider separating component and utility exports`);
    // This is a warning, not an error, so we'll note it but not change the code
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

  // Apply fixes in order of priority
  const fixes = [
    { name: 'Parsing errors', fn: fixParsingErrors },
    { name: 'Any types', fn: fixAnyTypes },
    { name: 'Hook violations', fn: fixHookViolations },
    { name: 'Fast refresh warnings', fn: fixFastRefreshWarnings }
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
function fixAllRemainingIssues() {
  console.log('🚨 FIXING ALL REMAINING ISSUES');
  console.log('='.repeat(60));
  console.log();

  // First, fix critical parsing errors
  console.log('📁 Phase 1: Fixing critical parsing errors...');
  let totalFiles = 0;
  let totalFixes = 0;

  PARSING_ERROR_FILES.forEach(file => {
    const fullPath = path.join(PROJECT_ROOT, file);
    const fixes = processFile(fullPath);
    if (fixes > 0) {
      totalFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📁 Phase 2: Fixing all TypeScript files...');
  
  // Then process all other TypeScript files
  const allFiles = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  allFiles.forEach(file => {
    const fixes = processFile(file);
    if (fixes > 0) {
      totalFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 COMPREHENSIVE FIX SUMMARY');
  console.log('─'.repeat(50));
  console.log(`📁 Files processed: ${allFiles.length + PARSING_ERROR_FILES.length}`);
  console.log(`✅ Files fixed: ${totalFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);
  
  console.log();
  console.log('🎯 Next steps:');
  console.log('1. Run npm run type-check to verify TypeScript compilation');
  console.log('2. Run npm run lint to check remaining issues');
  console.log('3. Test critical application functionality');
  console.log('4. Address any remaining manual fixes needed');
}

// Run the script
fixAllRemainingIssues();
