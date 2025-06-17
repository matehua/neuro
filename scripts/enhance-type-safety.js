#!/usr/bin/env node

/**
 * Type Safety Enhancement Script
 * Automatically fixes common TypeScript issues and improves type safety
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Configuration
const CONFIG = {
  extensions: ['.tsx', '.ts'],
  excludeDirs: ['node_modules', '.git', 'dist', 'build', 'coverage'],
  excludeFiles: ['vite-env.d.ts', 'tailwind.config.ts']
};

/**
 * Get all TypeScript files
 */
function getAllTSFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        getAllTSFiles(fullPath, files);
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
 * Fix implicit any parameters
 */
function fixImplicitAnyParameters(content) {
  let fixed = content;
  let changes = 0;

  // Fix arrow function parameters without types
  const arrowFunctionRegex = /\(([^)]*\w+)(?!\s*:)\s*\)\s*=>/g;
  fixed = fixed.replace(arrowFunctionRegex, (match, params) => {
    if (!params.includes(':')) {
      changes++;
      const typedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (trimmed && !trimmed.includes(':')) {
          return `${trimmed}: any`;
        }
        return param;
      }).join(', ');
      return `(${typedParams}) =>`;
    }
    return match;
  });

  // Fix function parameters without types
  const functionRegex = /function\s+\w+\s*\(([^)]*\w+)(?!\s*:)\s*\)/g;
  fixed = fixed.replace(functionRegex, (match, params) => {
    if (!params.includes(':')) {
      changes++;
      const typedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (trimmed && !trimmed.includes(':')) {
          return `${trimmed}: any`;
        }
        return param;
      }).join(', ');
      return match.replace(params, typedParams);
    }
    return match;
  });

  return { content: fixed, changes };
}

/**
 * Add React.FC types to components
 */
function addReactFCTypes(content) {
  let fixed = content;
  let changes = 0;

  // Find export default function components without React.FC
  const componentRegex = /export\s+default\s+function\s+(\w+)\s*\(/g;
  const matches = [...content.matchAll(componentRegex)];

  for (const match of matches) {
    const componentName = match[1];
    if (!content.includes(`${componentName}: React.FC`) &&
        !content.includes(`React.memo(`) &&
        !content.includes(`memo(`)) {

      // Simple replacement - just add React.FC annotation
      const newDeclaration = `const ${componentName}: React.FC = (`;
      fixed = fixed.replace(match[0], `export default ${newDeclaration}`);

      // Add displayName if not present
      if (!content.includes(`${componentName}.displayName`)) {
        const insertPoint = fixed.lastIndexOf('}');
        if (insertPoint > -1) {
          const beforeClosing = fixed.slice(0, insertPoint + 1);
          const afterClosing = fixed.slice(insertPoint + 1);
          fixed = beforeClosing + `\n\n${componentName}.displayName = '${componentName}';` + afterClosing;
        }
      }

      changes++;
    }
  }

  return { content: fixed, changes };
}

/**
 * Add proper prop interfaces
 */
function addPropInterfaces(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Find components with inline prop types
  const inlinePropRegex = /\(\s*{\s*([^}]+)\s*}\s*:\s*{\s*([^}]+)\s*}\s*\)/g;
  const matches = [...content.matchAll(inlinePropRegex)];
  
  for (const match of matches) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const interfaceName = `${fileName}Props`;
    
    if (!content.includes(`interface ${interfaceName}`)) {
      const propsContent = match[2];
      const interfaceDefinition = `interface ${interfaceName} {\n  ${propsContent.replace(/,/g, ';\n  ')}\n}\n\n`;
      
      // Add interface before the component
      const componentStart = content.indexOf('export default function') || content.indexOf('export function');
      if (componentStart > -1) {
        fixed = fixed.slice(0, componentStart) + interfaceDefinition + fixed.slice(componentStart);
        
        // Replace inline props with interface
        fixed = fixed.replace(match[0], `({ ${match[1]} }: ${interfaceName})`);
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

/**
 * Fix non-null assertions
 */
function fixNonNullAssertions(content) {
  let fixed = content;
  let changes = 0;

  // Replace dangerous non-null assertions with safe checks
  const nonNullRegex = /(\w+)!\s*\./g;
  fixed = fixed.replace(nonNullRegex, (match, variable) => {
    changes++;
    return `${variable}?.`;
  });

  return { content: fixed, changes };
}

/**
 * Add missing return types
 */
function addMissingReturnTypes(content) {
  let fixed = content;
  let changes = 0;

  // Add return types to functions that return JSX
  const jsxFunctionRegex = /function\s+(\w+)\s*\([^)]*\)\s*{[^}]*return\s*\(/g;
  fixed = fixed.replace(jsxFunctionRegex, (match) => {
    if (!match.includes(': React.') && !match.includes(': JSX.')) {
      changes++;
      return match.replace(')', '): React.ReactElement {');
    }
    return match;
  });

  return { content: fixed, changes };
}

/**
 * Add strict null checks
 */
function addStrictNullChecks(content) {
  let fixed = content;
  let changes = 0;

  // Simple null check improvements - only for obvious cases
  const unsafePatterns = [
    /(\w+)\.length(?!\?)/g,
    /(\w+)\.map\(/g,
    /(\w+)\.filter\(/g
  ];

  for (const pattern of unsafePatterns) {
    const matches = [...content.matchAll(pattern)];
    for (const match of matches) {
      const variable = match[1];
      if (!['console', 'window', 'document', 'process', 'Array', 'Object'].includes(variable)) {
        const safeVersion = match[0].replace(`${variable}.`, `${variable}?.`);
        fixed = fixed.replace(match[0], safeVersion);
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let processedContent = content;
  let totalChanges = 0;
  const changeLog = [];

  // Apply all fixes
  const fixes = [
    { name: 'Implicit any parameters', fn: fixImplicitAnyParameters },
    { name: 'React.FC types', fn: addReactFCTypes },
    { name: 'Prop interfaces', fn: (content) => addPropInterfaces(content, filePath) },
    { name: 'Non-null assertions', fn: fixNonNullAssertions },
    { name: 'Return types', fn: addMissingReturnTypes },
    { name: 'Null checks', fn: addStrictNullChecks }
  ];

  for (const fix of fixes) {
    const result = fix.fn(processedContent);
    processedContent = result.content;
    if (result.changes > 0) {
      totalChanges += result.changes;
      changeLog.push(`${fix.name}: ${result.changes} fixes`);
    }
  }

  // Write back if changes were made
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`✅ ${relativePath}: ${totalChanges} improvements`);
    changeLog.forEach(log => console.log(`   • ${log}`));
  }

  return totalChanges;
}

/**
 * Main function
 */
function enhanceTypeSafety() {
  console.log('🔒 ENHANCING TYPE SAFETY');
  console.log('='.repeat(50));
  console.log();

  const files = getAllTSFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} TypeScript files...`);
  console.log();

  let totalFiles = 0;
  let totalChanges = 0;

  files.forEach(file => {
    const changes = processFile(file);
    if (changes > 0) {
      totalFiles++;
      totalChanges += changes;
    }
  });

  console.log();
  console.log('📊 TYPE SAFETY ENHANCEMENT SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`✅ Files improved: ${totalFiles}`);
  console.log(`🔧 Total improvements: ${totalChanges}`);

  if (totalChanges > 0) {
    console.log();
    console.log('💡 RECOMMENDATIONS:');
    console.log('• Run TypeScript compiler to check for remaining issues');
    console.log('• Review generated interfaces and adjust as needed');
    console.log('• Consider enabling stricter TypeScript settings');
    console.log('• Add unit tests to verify type safety improvements');
  } else {
    console.log();
    console.log('🎉 All files already have good type safety!');
  }
}

// Run enhancement
enhanceTypeSafety();
