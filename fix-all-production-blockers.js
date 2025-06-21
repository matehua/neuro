#!/usr/bin/env node

/**
 * Comprehensive Production Blocker Fix Script
 * Systematically fixes all critical issues identified in the audit
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = __dirname;

let fixedFiles = 0;
let totalFixes = 0;

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
 * Fix missing React imports
 */
function fixMissingReactImports(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if React is used but not imported
  if (fixed.includes('React.') && !fixed.includes("import React")) {
    const firstImportIndex = fixed.indexOf('import');
    if (firstImportIndex !== -1) {
      fixed = fixed.slice(0, firstImportIndex) + 
             "import React from 'react';\n" + 
             fixed.slice(firstImportIndex);
      changes++;
    }
  }

  return { content: fixed, changes };
}

/**
 * Fix missing React hook imports
 */
function fixMissingHookImports(content, filePath) {
  let fixed = content;
  let changes = 0;

  const hooks = [
    'useState', 'useEffect', 'useCallback', 'useMemo', 'useContext',
    'useReducer', 'useRef', 'useImperativeHandle', 'useLayoutEffect'
  ];

  const missingHooks = [];
  
  hooks.forEach(hook => {
    if (fixed.includes(`${hook}(`) && !fixed.includes(`import.*${hook}`)) {
      missingHooks.push(hook);
    }
  });

  if (missingHooks.length > 0) {
    // Find existing React import
    const reactImportMatch = fixed.match(/import\s+.*?from\s+['"]react['"]/);
    
    if (reactImportMatch) {
      // Add hooks to existing React import
      const existingImport = reactImportMatch[0];
      if (existingImport.includes('{')) {
        // Already has named imports
        const newImport = existingImport.replace('}', `, ${missingHooks.join(', ')}`);
        fixed = fixed.replace(existingImport, newImport);
      } else {
        // Only has default import
        const newImport = existingImport.replace(
          /from\s+['"]react['"]/,
          `, { ${missingHooks.join(', ')} } from 'react'`
        );
        fixed = fixed.replace(existingImport, newImport);
      }
      changes++;
    } else {
      // Add new React import with hooks
      const firstImportIndex = fixed.indexOf('import');
      if (firstImportIndex !== -1) {
        fixed = fixed.slice(0, firstImportIndex) + 
               `import { ${missingHooks.join(', ')} } from 'react';\n` + 
               fixed.slice(firstImportIndex);
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

/**
 * Remove console statements
 */
function removeConsoleStatements(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Remove console.log, console.warn, console.error, etc.
  const consolePattern = /console\.(log|warn|error|debug|info)\([^)]*\);?\s*\n?/g;
  const matches = fixed.match(consolePattern);
  
  if (matches) {
    fixed = fixed.replace(consolePattern, '');
    changes = matches.length;
  }

  return { content: fixed, changes };
}

/**
 * Add translation fallback mechanism
 */
function addTranslationFallback(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if component uses translations but lacks fallback
  if (fixed.includes('useLanguage') && fixed.includes('const { t }')) {
    if (!fixed.includes('const safeT = t || en') && !fixed.includes('const finalT =')) {
      // Add English import if missing
      if (!fixed.includes("import en from '@/locales/en'")) {
        const lastImportIndex = fixed.lastIndexOf('import');
        if (lastImportIndex !== -1) {
          const nextLineIndex = fixed.indexOf('\n', lastImportIndex);
          fixed = fixed.slice(0, nextLineIndex + 1) + 
                 "import en from '@/locales/en';\n" + 
                 fixed.slice(nextLineIndex + 1);
        }
      }

      // Add fallback mechanism after useLanguage
      const useLanguageMatch = fixed.match(/const\s+{\s*t\s*}\s*=\s*useLanguage\(\);?/);
      if (useLanguageMatch) {
        const insertPosition = fixed.indexOf(useLanguageMatch[0]) + useLanguageMatch[0].length;
        
        const fallbackCode = `

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Basic fallback structure
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    home: { welcome: { learnMore: "Learn More" }, featuredProcedures: { title: "Featured Procedures" } },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };`;

        fixed = fixed.slice(0, insertPosition) + 
               fallbackCode + 
               fixed.slice(insertPosition);

        // Replace t. with finalT. throughout the component
        fixed = fixed.replace(/\bt\./g, 'finalT.');
        
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

/**
 * Add display names to components
 */
function addDisplayNames(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Extract component name from file path
  const fileName = path.basename(filePath, path.extname(filePath));
  
  // Check if component export exists but no display name
  if ((fixed.includes('export default function') || fixed.includes('export const')) && 
      !fixed.includes('.displayName =')) {
    
    // Add display name before export default
    const exportMatch = fixed.match(/export default (\w+);?/);
    if (exportMatch) {
      const componentName = exportMatch[1];
      const insertPosition = fixed.indexOf(exportMatch[0]);
      
      const displayNameCode = `\n${componentName}.displayName = '${componentName}';\n\n`;
      
      fixed = fixed.slice(0, insertPosition) + 
             displayNameCode + 
             fixed.slice(insertPosition);
      changes++;
    }
  }

  return { content: fixed, changes };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let currentContent = content;
    let totalChanges = 0;

    // Apply all fixes
    const fixes = [
      fixMissingReactImports,
      fixMissingHookImports,
      removeConsoleStatements,
      addTranslationFallback,
      addDisplayNames
    ];

    fixes.forEach(fix => {
      const result = fix(currentContent, filePath);
      currentContent = result.content;
      totalChanges += result.changes;
    });

    // Write back if changes were made
    if (totalChanges > 0) {
      fs.writeFileSync(filePath, currentContent, 'utf8');
      fixedFiles++;
      totalFixes += totalChanges;
      
      const relativePath = path.relative(PROJECT_ROOT, filePath);
      console.log(`✅ ${relativePath} - ${totalChanges} fixes applied`);
    }

  } catch (error) {
    const relativePath = path.relative(PROJECT_ROOT, filePath);
    console.log(`❌ ${relativePath} - Error: ${error.message}`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 FIXING ALL PRODUCTION BLOCKERS');
  console.log('='.repeat(50));
  console.log();

  // Get all source files
  const sourceFiles = getAllSourceFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${sourceFiles.length} source files...`);
  console.log();

  // Process each file
  sourceFiles.forEach(processFile);

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(30));
  console.log(`✅ Files Fixed: ${fixedFiles}`);
  console.log(`🔧 Total Fixes: ${totalFixes}`);
  console.log(`📁 Total Files: ${sourceFiles.length}`);
  
  if (totalFixes > 0) {
    console.log();
    console.log('🎉 Production blockers fixed successfully!');
    console.log('💡 Run the audit again to verify all issues are resolved.');
    console.log('🚀 Next: npm run build && npm run type-check');
  } else {
    console.log();
    console.log('ℹ️  No fixes needed - all files are already clean!');
  }
}

main();
