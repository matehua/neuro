#!/usr/bin/env node

/**
 * Code Quality Improvement Script
 * Removes duplicate code, standardizes naming, and adds error boundaries
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Configuration
const CONFIG = {
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  excludeDirs: ['node_modules', '.git', 'dist', 'build', 'coverage'],
  excludeFiles: ['vite-env.d.ts', 'tailwind.config.ts']
};

/**
 * Get all source files
 */
function getAllSourceFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        getAllSourceFiles(fullPath, files);
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
 * Remove duplicate imports
 */
function removeDuplicateImports(content) {
  let fixed = content;
  let changes = 0;

  const lines = content.split('\n');
  const imports = new Map();
  const newLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!imports.has(importKey)) {
        imports.set(importKey, true);
        newLines.push(line);
      } else {
        changes++;
      }
    } else {
      newLines.push(line);
    }
  }
  
  fixed = newLines.join('\n');
  return { content: fixed, changes };
}

/**
 * Standardize naming conventions
 */
function standardizeNaming(content) {
  let fixed = content;
  let changes = 0;

  // Convert snake_case to camelCase for variables
  const snakeCaseRegex = /\b([a-z]+)_([a-z]+)\b/g;
  const matches = [...content.matchAll(snakeCaseRegex)];
  
  for (const match of matches) {
    const snakeCase = match[0];
    const camelCase = match[1] + match[2].charAt(0).toUpperCase() + match[2].slice(1);
    
    // Only replace if it's a variable name, not a CSS class or property
    if (!content.includes(`"${snakeCase}"`) && !content.includes(`'${snakeCase}'`)) {
      fixed = fixed.replace(new RegExp(`\\b${snakeCase}\\b`, 'g'), camelCase);
      changes++;
    }
  }

  return { content: fixed, changes };
}

/**
 * Remove console statements in production
 */
function removeConsoleStatements(content) {
  let fixed = content;
  let changes = 0;

  // Wrap console statements with development check
  const consoleRegex = /console\.(log|warn|error|info|debug)\([^)]*\);?/g;
  const matches = [...content.matchAll(consoleRegex)];
  
  for (const match of matches) {
    const statement = match[0];
    
    // Skip if already wrapped
    if (content.includes(`if (process.env.NODE_ENV === 'development') {`)) {
      continue;
    }
    
    const wrappedStatement = `if (process.env.NODE_ENV === 'development') {\n    ${statement}\n  }`;
    fixed = fixed.replace(statement, wrappedStatement);
    changes++;
  }

  return { content: fixed, changes };
}

/**
 * Add error boundaries to components
 */
function addErrorBoundaries(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if component throws errors or has risky operations
  const riskyPatterns = [
    /throw new Error/,
    /JSON\.parse/,
    /localStorage\./,
    /sessionStorage\./,
    /fetch\(/,
    /axios\./
  ];

  const hasRiskyOperations = riskyPatterns.some(pattern => pattern.test(content));
  
  if (hasRiskyOperations && !content.includes('ErrorBoundary')) {
    // Add ErrorBoundary import
    const importSection = content.split('\n').slice(0, 10).join('\n');
    if (!importSection.includes('ErrorBoundary')) {
      const lastImport = content.lastIndexOf('import ');
      const nextLine = content.indexOf('\n', lastImport);
      
      if (nextLine > -1) {
        const errorBoundaryImport = "import ErrorBoundary from '@/components/ErrorBoundary';\n";
        fixed = content.slice(0, nextLine + 1) + errorBoundaryImport + content.slice(nextLine + 1);
        changes++;
      }
    }
    
    // Wrap component return with ErrorBoundary
    const returnRegex = /return\s*\(\s*(<[^>]+>[\s\S]*<\/[^>]+>)\s*\)/;
    const returnMatch = content.match(returnRegex);
    
    if (returnMatch) {
      const jsxContent = returnMatch[1];
      const wrappedJSX = `<ErrorBoundary>\n      ${jsxContent}\n    </ErrorBoundary>`;
      fixed = fixed.replace(returnMatch[0], `return (\n    ${wrappedJSX}\n  )`);
      changes++;
    }
  }

  return { content: fixed, changes };
}

/**
 * Optimize imports
 */
function optimizeImports(content) {
  let fixed = content;
  let changes = 0;

  // Group imports by type
  const lines = content.split('\n');
  const reactImports = [];
  const libraryImports = [];
  const localImports = [];
  const otherLines = [];
  
  let inImportSection = true;
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      if (line.includes('react')) {
        reactImports.push(line);
      } else if (line.includes('@/') || line.includes('./') || line.includes('../')) {
        localImports.push(line);
      } else {
        libraryImports.push(line);
      }
    } else if (line.trim() === '' && inImportSection) {
      // Skip empty lines in import section
      continue;
    } else {
      inImportSection = false;
      otherLines.push(line);
    }
  }

  // Reorganize imports
  const organizedImports = [
    ...reactImports.sort(),
    ...(reactImports.length > 0 ? [''] : []),
    ...libraryImports.sort(),
    ...(libraryImports.length > 0 ? [''] : []),
    ...localImports.sort(),
    ...(localImports.length > 0 ? [''] : [])
  ];

  const newContent = [...organizedImports, ...otherLines].join('\n');
  
  if (newContent !== content) {
    fixed = newContent;
    changes = 1;
  }

  return { content: fixed, changes };
}

/**
 * Remove unused variables
 */
function removeUnusedVariables(content) {
  let fixed = content;
  let changes = 0;

  // Find variable declarations
  const variableRegex = /const\s+(\w+)\s*=/g;
  const matches = [...content.matchAll(variableRegex)];
  
  for (const match of matches) {
    const variableName = match[1];
    
    // Count occurrences (should be more than 1 if used)
    const occurrences = (content.match(new RegExp(`\\b${variableName}\\b`, 'g')) || []).length;
    
    if (occurrences === 1) {
      // Variable is declared but never used
      const declarationLine = content.split('\n').find(line => 
        line.includes(`const ${variableName} =`)
      );
      
      if (declarationLine) {
        fixed = fixed.replace(declarationLine + '\n', '');
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

  // Apply code quality improvements
  const improvements = [
    { name: 'Duplicate imports', fn: removeDuplicateImports },
    { name: 'Naming conventions', fn: standardizeNaming },
    { name: 'Console statements', fn: removeConsoleStatements },
    { name: 'Error boundaries', fn: (content) => addErrorBoundaries(content, filePath) },
    { name: 'Import organization', fn: optimizeImports },
    { name: 'Unused variables', fn: removeUnusedVariables }
  ];

  for (const improvement of improvements) {
    const result = improvement.fn(processedContent);
    processedContent = result.content;
    if (result.changes > 0) {
      totalChanges += result.changes;
      changeLog.push(`${improvement.name}: ${result.changes} fixes`);
    }
  }

  // Write back if changes were made
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`🎯 ${relativePath}: ${totalChanges} improvements`);
    changeLog.forEach(log => console.log(`   • ${log}`));
  }

  return totalChanges;
}

/**
 * Main function
 */
function improveCodeQuality() {
  console.log('🎯 IMPROVING CODE QUALITY');
  console.log('='.repeat(50));
  console.log();

  const files = getAllSourceFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} source files...`);
  console.log();

  let totalFiles = 0;
  let totalImprovements = 0;

  files.forEach(file => {
    const improvements = processFile(file);
    if (improvements > 0) {
      totalFiles++;
      totalImprovements += improvements;
    }
  });

  console.log();
  console.log('📊 CODE QUALITY IMPROVEMENT SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`🎯 Files improved: ${totalFiles}`);
  console.log(`✨ Total improvements: ${totalImprovements}`);

  if (totalImprovements > 0) {
    console.log();
    console.log('💡 QUALITY BENEFITS:');
    console.log('• Removed duplicate code patterns');
    console.log('• Standardized naming conventions');
    console.log('• Added production-safe console logging');
    console.log('• Enhanced error handling with boundaries');
    console.log('• Organized imports for better readability');
    console.log('• Cleaned up unused variables');
  } else {
    console.log();
    console.log('🎉 All code already meets quality standards!');
  }
}

// Run improvement
improveCodeQuality();
