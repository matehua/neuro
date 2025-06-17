#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Automatically optimizes React components for better performance
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
 * Get all React component files
 */
function getAllComponentFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        getAllComponentFiles(fullPath, files);
      }
    } else if (CONFIG.extensions.includes(path.extname(item))) {
      if (!CONFIG.excludeFiles.includes(item)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Only include React component files
        if (content.includes('React') || content.includes('jsx') || content.includes('tsx')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  return files;
}

/**
 * Add React.memo to components
 */
function addReactMemo(content) {
  let fixed = content;
  let changes = 0;

  // Find components that aren't already memoized
  const componentRegex = /export\s+default\s+function\s+(\w+)/g;
  const matches = [...content.matchAll(componentRegex)];
  
  for (const match of matches) {
    const componentName = match[1];
    
    // Skip if already memoized
    if (content.includes('React.memo(') || content.includes('memo(')) {
      continue;
    }
    
    // Add React.memo wrapper
    const memoImport = "import React from 'react';";
    if (!content.includes(memoImport) && !content.includes("import React,")) {
      fixed = memoImport + '\n' + fixed;
    }
    
    // Wrap component with memo
    const componentDeclaration = match[0];
    const memoDeclaration = `const ${componentName} = React.memo(() => {`;
    
    // Replace function declaration
    fixed = fixed.replace(componentDeclaration, memoDeclaration);
    
    // Add closing memo wrapper and displayName
    const lastBrace = fixed.lastIndexOf('}');
    if (lastBrace > -1) {
      const beforeBrace = fixed.slice(0, lastBrace);
      const afterBrace = fixed.slice(lastBrace + 1);
      fixed = beforeBrace + `});\n\n${componentName}.displayName = '${componentName}';\n\nexport default ${componentName};` + afterBrace.replace(/export\s+default\s+\w+;?/, '');
    }
    
    changes++;
  }

  return { content: fixed, changes };
}

/**
 * Add proper dependency arrays to useEffect
 */
function fixUseEffectDependencies(content) {
  let fixed = content;
  let changes = 0;

  // Find useEffect without dependency arrays
  const useEffectRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*}\s*\)/g;
  const matches = [...content.matchAll(useEffectRegex)];
  
  for (const match of matches) {
    // Add empty dependency array
    const withDeps = match[0] + ', []';
    fixed = fixed.replace(match[0], withDeps);
    changes++;
  }

  // Find useEffect with missing dependencies
  const useEffectWithDepsRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*{([^}]*)}\s*,\s*\[([^\]]*)\]\s*\)/g;
  const depsMatches = [...content.matchAll(useEffectWithDepsRegex)];
  
  for (const match of depsMatches) {
    const effectBody = match[1];
    const currentDeps = match[2].trim();
    
    // Extract variables used in effect
    const variableRegex = /\b(\w+)\./g;
    const usedVars = [...effectBody.matchAll(variableRegex)].map(m => m[1]);
    const uniqueVars = [...new Set(usedVars)].filter(v => 
      !['console', 'window', 'document', 'localStorage', 'sessionStorage'].includes(v)
    );
    
    if (uniqueVars.length > 0 && !currentDeps) {
      const newDeps = uniqueVars.join(', ');
      fixed = fixed.replace(`[${currentDeps}]`, `[${newDeps}]`);
      changes++;
    }
  }

  return { content: fixed, changes };
}

/**
 * Optimize context providers with useMemo
 */
function optimizeContextProviders(content) {
  let fixed = content;
  let changes = 0;

  // Find context providers without memoized values
  const providerRegex = /(\w+)\.Provider[^>]*value=\{([^}]+)\}/g;
  const matches = [...content.matchAll(providerRegex)];
  
  for (const match of matches) {
    const value = match[2].trim();
    
    // Skip if already memoized
    if (value.includes('useMemo') || value.includes('memo')) {
      continue;
    }
    
    // Add useMemo import if needed
    if (!content.includes('useMemo')) {
      const reactImportRegex = /import\s+React(?:,\s*\{([^}]+)\})?\s+from\s+['"]react['"]/;
      const reactMatch = content.match(reactImportRegex);
      
      if (reactMatch) {
        const existingImports = reactMatch[1] || '';
        const newImports = existingImports ? `${existingImports}, useMemo` : 'useMemo';
        fixed = fixed.replace(reactMatch[0], `import React, { ${newImports} } from 'react'`);
      }
    }
    
    // Wrap value with useMemo
    const memoizedValue = `useMemo(() => (${value}), [])`;
    fixed = fixed.replace(`value={${value}}`, `value={${memoizedValue}}`);
    changes++;
  }

  return { content: fixed, changes };
}

/**
 * Optimize inline objects and arrays
 */
function optimizeInlineObjects(content) {
  let fixed = content;
  let changes = 0;

  // Find inline objects in JSX props
  const inlineObjectRegex = /(\w+)=\{\{([^}]+)\}\}/g;
  const matches = [...content.matchAll(inlineObjectRegex)];
  
  for (const match of matches) {
    const propName = match[1];
    const objectContent = match[2];
    
    // Skip simple objects
    if (objectContent.split(',').length <= 2) {
      continue;
    }
    
    // Add useMemo import if needed
    if (!content.includes('useMemo')) {
      const reactImportRegex = /import\s+React(?:,\s*\{([^}]+)\})?\s+from\s+['"]react['"]/;
      const reactMatch = content.match(reactImportRegex);
      
      if (reactMatch) {
        const existingImports = reactMatch[1] || '';
        const newImports = existingImports ? `${existingImports}, useMemo` : 'useMemo';
        fixed = fixed.replace(reactMatch[0], `import React, { ${newImports} } from 'react'`);
      }
    }
    
    // Replace with memoized object
    const memoizedObject = `useMemo(() => ({ ${objectContent} }), [])`;
    fixed = fixed.replace(match[0], `${propName}={${memoizedObject}}`);
    changes++;
  }

  return { content: fixed, changes };
}

/**
 * Add useCallback to event handlers
 */
function addUseCallback(content) {
  let fixed = content;
  let changes = 0;

  // Find arrow function event handlers
  const handlerRegex = /(on\w+)=\{([^}]+)\}/g;
  const matches = [...content.matchAll(handlerRegex)];
  
  for (const match of matches) {
    const eventName = match[1];
    const handler = match[2].trim();
    
    // Skip if already using useCallback
    if (handler.includes('useCallback')) {
      continue;
    }
    
    // Add useCallback import if needed
    if (!content.includes('useCallback')) {
      const reactImportRegex = /import\s+React(?:,\s*\{([^}]+)\})?\s+from\s+['"]react['"]/;
      const reactMatch = content.match(reactImportRegex);
      
      if (reactMatch) {
        const existingImports = reactMatch[1] || '';
        const newImports = existingImports ? `${existingImports}, useCallback` : 'useCallback';
        fixed = fixed.replace(reactMatch[0], `import React, { ${newImports} } from 'react'`);
      }
    }
    
    // Wrap with useCallback
    const callbackHandler = `useCallback(${handler}, [])`;
    fixed = fixed.replace(match[0], `${eventName}={${callbackHandler}}`);
    changes++;
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

  // Apply performance optimizations
  const optimizations = [
    { name: 'React.memo', fn: addReactMemo },
    { name: 'useEffect dependencies', fn: fixUseEffectDependencies },
    { name: 'Context providers', fn: optimizeContextProviders },
    { name: 'Inline objects', fn: optimizeInlineObjects },
    { name: 'useCallback', fn: addUseCallback }
  ];

  for (const optimization of optimizations) {
    const result = optimization.fn(processedContent);
    processedContent = result.content;
    if (result.changes > 0) {
      totalChanges += result.changes;
      changeLog.push(`${optimization.name}: ${result.changes} optimizations`);
    }
  }

  // Write back if changes were made
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`⚡ ${relativePath}: ${totalChanges} optimizations`);
    changeLog.forEach(log => console.log(`   • ${log}`));
  }

  return totalChanges;
}

/**
 * Main function
 */
function optimizePerformance() {
  console.log('⚡ OPTIMIZING PERFORMANCE');
  console.log('='.repeat(50));
  console.log();

  const files = getAllComponentFiles(path.join(PROJECT_ROOT, 'src'));
  console.log(`📁 Processing ${files.length} component files...`);
  console.log();

  let totalFiles = 0;
  let totalOptimizations = 0;

  files.forEach(file => {
    const optimizations = processFile(file);
    if (optimizations > 0) {
      totalFiles++;
      totalOptimizations += optimizations;
    }
  });

  console.log();
  console.log('📊 PERFORMANCE OPTIMIZATION SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`⚡ Files optimized: ${totalFiles}`);
  console.log(`🚀 Total optimizations: ${totalOptimizations}`);

  if (totalOptimizations > 0) {
    console.log();
    console.log('💡 PERFORMANCE BENEFITS:');
    console.log('• Reduced unnecessary re-renders with React.memo');
    console.log('• Optimized useEffect dependency arrays');
    console.log('• Memoized context provider values');
    console.log('• Prevented inline object recreation');
    console.log('• Stabilized event handlers with useCallback');
  } else {
    console.log();
    console.log('🎉 All components already optimized!');
  }
}

// Run optimization
optimizePerformance();
