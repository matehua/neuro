import fs from 'fs';
import path from 'path';

let issuesFound = 0;

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
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Check for missing React hook imports
 */
function checkMissingReactImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find React import line
    let reactImportLine = null;
    let reactImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.match(/^import\s+.*from\s+['"]react['"];?\s*$/)) {
        reactImportLine = line;
        reactImportIndex = i;
        break;
      }
    }
    
    if (!reactImportLine) {
      // No React import found, check if React hooks are used
      const reactHooksUsed = [];
      const hookPattern = /\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer|useLayoutEffect|useImperativeHandle|useDebugValue)\b/g;
      
      let match;
      while ((match = hookPattern.exec(content)) !== null) {
        if (!reactHooksUsed.includes(match[1])) {
          reactHooksUsed.push(match[1]);
        }
      }
      
      if (reactHooksUsed.length > 0) {
        const relativePath = path.relative(process.cwd(), filePath);
        console.log(`❌ ${relativePath}: Missing React import, but uses hooks: ${reactHooksUsed.join(', ')}`);
        issuesFound++;
      }
      return;
    }
    
    // Parse existing React imports
    const importMatch = reactImportLine.match(/^import\s+(.+?)\s+from\s+['"]react['"];?\s*$/);
    if (!importMatch) return;
    
    const importPart = importMatch[1];
    const existingImports = parseReactImports(importPart);
    
    // Find all React hooks used in the file
    const hooksUsed = [];
    const hookPattern = /\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer|useLayoutEffect|useImperativeHandle|useDebugValue)\b/g;
    
    let match;
    while ((match = hookPattern.exec(content)) !== null) {
      if (!hooksUsed.includes(match[1])) {
        hooksUsed.push(match[1]);
      }
    }
    
    // Check for missing imports
    const missingHooks = hooksUsed.filter(hook => !existingImports.includes(hook));
    
    if (missingHooks.length > 0) {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(`❌ ${relativePath}: Missing React hooks: ${missingHooks.join(', ')}`);
      console.log(`   Current import: ${reactImportLine}`);
      console.log(`   Should include: ${[...existingImports, ...missingHooks].join(', ')}`);
      console.log();
      issuesFound++;
      
      // Auto-fix the import
      const allImports = [...new Set([...existingImports, ...missingHooks])];
      const newImportLine = `import React, { ${allImports.join(', ')} } from 'react';`;
      
      const newLines = [...lines];
      newLines[reactImportIndex] = newImportLine;
      
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
      console.log(`✅ Fixed: ${relativePath}`);
      console.log(`   New import: ${newImportLine}`);
      console.log();
    }

  } catch (error) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`❌ Error in ${relativePath}: ${error.message}`);
  }
}

/**
 * Parse React imports from import statement
 */
function parseReactImports(importPart) {
  const imports = [];
  
  // Handle different import patterns
  if (importPart.includes('{')) {
    const namedMatch = importPart.match(/\{\s*([^}]+)\s*\}/);
    if (namedMatch) {
      const namedImports = namedMatch[1].split(',').map(imp => imp.trim()).filter(imp => imp);
      imports.push(...namedImports);
    }
  }
  
  return imports;
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 CHECKING FOR MISSING REACT HOOK IMPORTS');
  console.log('='.repeat(50));
  console.log();

  const sourceFiles = getAllSourceFiles(path.join(process.cwd(), 'src'));
  console.log(`📁 Checking ${sourceFiles.length} files...`);
  console.log();

  sourceFiles.forEach(checkMissingReactImports);

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(20));
  console.log(`❌ Issues Found: ${issuesFound}`);
  
  if (issuesFound === 0) {
    console.log('🎉 All React hook imports are correct!');
  } else {
    console.log('⚠️  Some files have missing React hook imports.');
  }
}

main();
