import fs from 'fs';
import path from 'path';

let fixedFiles = 0;

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
 * Fix duplicate imports in a file
 */
function fixDuplicateImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find all import lines and group by source
    const imports = new Map();
    const nonImportLines = [];
    let hasChanges = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Match import statements
      const importMatch = line.match(/^import\s+(.+?)\s+from\s+['"](.+?)['"];?\s*$/);
      
      if (importMatch) {
        const [, importPart, source] = importMatch;
        
        if (imports.has(source)) {
          // Merge with existing import
          const existing = imports.get(source);
          const merged = mergeImportParts(existing, importPart);
          imports.set(source, merged);
          hasChanges = true;
        } else {
          imports.set(source, importPart);
        }
      } else {
        nonImportLines.push(line);
      }
    }
    
    if (hasChanges) {
      // Reconstruct file
      const newLines = [];
      
      // Add merged imports
      for (const [source, importPart] of imports) {
        newLines.push(`import ${importPart} from '${source}';`);
      }
      
      // Add empty line after imports
      if (imports.size > 0 && nonImportLines.length > 0 && nonImportLines[0].trim() !== '') {
        newLines.push('');
      }
      
      // Add non-import lines
      newLines.push(...nonImportLines);
      
      const newContent = newLines.join('\n');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        fixedFiles++;
        const relativePath = path.relative(process.cwd(), filePath);
        console.log(`✅ Fixed: ${relativePath}`);
      }
    }

  } catch (error) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`❌ Error in ${relativePath}: ${error.message}`);
  }
}

/**
 * Merge import parts
 */
function mergeImportParts(existing, newPart) {
  const existingParts = parseImportPart(existing);
  const newParts = parseImportPart(newPart);
  
  // Merge default imports (prefer first one)
  const defaultImport = existingParts.default || newParts.default;
  
  // Merge named imports (remove duplicates)
  const allNamed = [...existingParts.named, ...newParts.named];
  const uniqueNamed = [...new Set(allNamed)];
  
  // Reconstruct
  const parts = [];
  
  if (defaultImport) {
    parts.push(defaultImport);
  }
  
  if (uniqueNamed.length > 0) {
    parts.push(`{ ${uniqueNamed.join(', ')} }`);
  }
  
  return parts.join(', ');
}

/**
 * Parse import part
 */
function parseImportPart(importPart) {
  const result = {
    default: null,
    named: []
  };
  
  importPart = importPart.trim();
  
  if (importPart.includes('{')) {
    // Has named imports
    const parts = importPart.split('{');
    
    // Default import before {
    if (parts[0].trim()) {
      result.default = parts[0].trim().replace(',', '').trim();
    }
    
    // Named imports inside {}
    const namedPart = parts[1].split('}')[0];
    const namedImports = namedPart.split(',').map(n => n.trim()).filter(n => n);
    result.named = namedImports;
  } else {
    // Only default import
    result.default = importPart;
  }
  
  return result;
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 FIXING ALL DUPLICATE IMPORTS');
  console.log('='.repeat(40));
  console.log();

  const sourceFiles = getAllSourceFiles(path.join(process.cwd(), 'src'));
  console.log(`📁 Checking ${sourceFiles.length} files...`);
  console.log();

  sourceFiles.forEach(fixDuplicateImports);

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(20));
  console.log(`✅ Files Fixed: ${fixedFiles}`);
  
  if (fixedFiles > 0) {
    console.log('🎉 All duplicate imports fixed!');
  } else {
    console.log('ℹ️  No duplicate imports found.');
  }
}

main();
