#!/usr/bin/env node

/**
 * TypeScript Any Types Fix Script
 * Systematically replaces explicit any types with proper TypeScript interfaces
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * Fix TypeScript any types with proper types
 */
function fixAnyTypes(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Common any type replacements with proper React/TypeScript types
  const typeReplacements = [
    // React component props - most common patterns
    { 
      pattern: /\(\{\s*className:\s*any/g, 
      replacement: '({ className',
      description: 'className prop'
    },
    { 
      pattern: /,\s*children:\s*any/g, 
      replacement: ', children',
      description: 'children prop'
    },
    { 
      pattern: /,\s*\.\.\.\s*props\s*\}:\s*any/g, 
      replacement: ', ...props }',
      description: 'spread props'
    },
    { 
      pattern: /,\s*ref:\s*any/g, 
      replacement: ', ref',
      description: 'ref prop'
    },
    { 
      pattern: /,\s*checked:\s*any/g, 
      replacement: ', checked',
      description: 'checked prop'
    },
    { 
      pattern: /,\s*inset:\s*any/g, 
      replacement: ', inset',
      description: 'inset prop'
    },
    
    // Event handlers - specific React event types
    { 
      pattern: /\(\s*event:\s*any\s*\)/g, 
      replacement: '(event: React.MouseEvent)',
      description: 'mouse event handler'
    },
    { 
      pattern: /\(\s*e:\s*any\s*\)/g, 
      replacement: '(e: React.FormEvent)',
      description: 'form event handler'
    },
    { 
      pattern: /\(\s*_:\s*any\s*\)/g, 
      replacement: '(_: unknown)',
      description: 'unused parameter'
    },
    
    // Function parameters - generic unknown for safety
    { 
      pattern: /\(\s*(\w+):\s*any\s*\)/g, 
      replacement: '($1: unknown)',
      description: 'function parameter'
    },
    { 
      pattern: /:\s*any\[\]/g, 
      replacement: ': unknown[]',
      description: 'array type'
    },
    { 
      pattern: /:\s*any\s*=/g, 
      replacement: ': unknown =',
      description: 'variable assignment'
    },
    
    // Object types - safer generic types
    { 
      pattern: /Record<string,\s*any>/g, 
      replacement: 'Record<string, unknown>',
      description: 'Record type'
    },
    { 
      pattern: /\{\s*\[key:\s*string\]:\s*any\s*\}/g, 
      replacement: '{ [key: string]: unknown }',
      description: 'index signature'
    },
    
    // Map/forEach callback parameters
    { 
      pattern: /\.map\(\(\s*(\w+):\s*any\s*\)/g, 
      replacement: '.map(($1: unknown)',
      description: 'map callback parameter'
    },
    { 
      pattern: /\.forEach\(\(\s*(\w+):\s*any\s*\)/g, 
      replacement: '.forEach(($1: unknown)',
      description: 'forEach callback parameter'
    },
    { 
      pattern: /\.filter\(\(\s*(\w+):\s*any\s*\)/g, 
      replacement: '.filter(($1: unknown)',
      description: 'filter callback parameter'
    },
    
    // Component-specific patterns
    { 
      pattern: /subItem:\s*any/g, 
      replacement: 'subItem: { name: string; path: string }',
      description: 'navigation subItem'
    },
    { 
      pattern: /link:\s*any/g, 
      replacement: 'link: { name: string; path: string; submenu?: { name: string; path: string }[] }',
      description: 'navigation link'
    },
    
    // Generic component props
    { 
      pattern: /React\.ComponentPropsWithoutRef<[^>]+>\s*&\s*\{[^}]*\}\s*>\(\(\{[^}]*\}:\s*any/g, 
      replacement: (match) => match.replace(': any', ''),
      description: 'forwardRef component props'
    }
  ];

  typeReplacements.forEach(({ pattern, replacement, description }) => {
    const before = fixed;
    if (typeof replacement === 'function') {
      fixed = fixed.replace(pattern, replacement);
    } else {
      fixed = fixed.replace(pattern, replacement);
    }
    if (fixed !== before) {
      changes++;
      console.log(`    ✅ Fixed ${description}`);
    }
  });

  return { content: fixed, changes };
}

/**
 * Add proper type imports if needed
 */
function addTypeImports(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if React types are used but not imported
  const hasReactEvents = /React\.(MouseEvent|FormEvent|KeyboardEvent|ChangeEvent)/g.test(fixed);
  const hasReactImport = /import.*React.*from ['"]react['"]/.test(fixed);
  const hasReactTypeImport = /import.*\{.*React.*\}.*from ['"]react['"]/.test(fixed);

  if (hasReactEvents && hasReactImport && !hasReactTypeImport) {
    // Add React to existing import
    fixed = fixed.replace(
      /import React(.*) from ['"]react['"];/,
      'import React$1 from \'react\';'
    );
    changes++;
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
  
  // Skip files that don't have any explicit any types
  if (!content.includes(': any')) {
    return 0;
  }
  
  let processedContent = content;
  let totalChanges = 0;

  console.log(`🔧 Processing ${relativePath}...`);

  // Apply fixes in order
  const fixes = [
    { name: 'TypeScript any types', fn: fixAnyTypes },
    { name: 'Type imports', fn: addTypeImports }
  ];

  fixes.forEach(({ name, fn }) => {
    const result = fn(processedContent, filePath);
    processedContent = result.content;
    totalChanges += result.changes;
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`  ✅ Total fixes: ${totalChanges}`);
  }

  return totalChanges;
}

/**
 * Get all TypeScript files with any types
 */
function getAllTSFilesWithAny(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
        getAllTSFilesWithAny(fullPath, files);
      }
    } else if (['.tsx', '.ts'].includes(path.extname(item))) {
      if (!['vite-env.d.ts', 'tailwind.config.ts'].includes(item)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(': any')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  return files;
}

/**
 * Main function
 */
function fixTypeScriptAnyTypes() {
  console.log('🔧 FIXING TYPESCRIPT ANY TYPES');
  console.log('='.repeat(50));
  console.log();

  const filesWithAny = getAllTSFilesWithAny(path.join(PROJECT_ROOT, 'src'));
  
  console.log(`📁 Found ${filesWithAny.length} files with explicit any types`);
  console.log();

  let totalFiles = 0;
  let totalFixes = 0;

  filesWithAny.forEach(file => {
    const fixes = processFile(file);
    if (fixes > 0) {
      totalFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 TYPESCRIPT ANY TYPES FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files with any types: ${filesWithAny.length}`);
  console.log(`✅ Files fixed: ${totalFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);
  
  if (totalFixes > 0) {
    console.log();
    console.log('🎯 Next steps:');
    console.log('1. Run npm run type-check to verify TypeScript compilation');
    console.log('2. Run npm run lint to check remaining any types');
    console.log('3. Test components to ensure functionality is maintained');
  }
}

// Run the script
fixTypeScriptAnyTypes();
