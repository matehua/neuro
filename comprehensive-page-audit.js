import fs from 'fs';
import path from 'path';

let issuesFound = 0;
let pagesChecked = 0;

/**
 * Get all page files
 */
function getAllPageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllPageFiles(fullPath, files);
    } else if (['.tsx', '.ts'].includes(path.extname(item)) && !item.includes('.test.') && !item.includes('.spec.')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Check for potential runtime errors in a page
 */
function checkPageForErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    console.log(`🔍 Checking: ${relativePath}`);
    pagesChecked++;
    
    const issues = [];
    
    // Check for undefined property access patterns
    const undefinedAccessPatterns = [
      /\w+\.\w+\.\w+\.\w+(?:\.\w+)*(?!\s*\?)/g, // Deep property access without optional chaining
      /finalT\.\w+\.\w+\.\w+(?:\.\w+)*(?!\s*\?)/g, // finalT deep access
      /safeT\.\w+\.\w+\.\w+(?:\.\w+)*(?!\s*\?)/g, // safeT deep access
      /t\.\w+\.\w+\.\w+(?:\.\w+)*(?!\s*\?)/g, // t deep access
    ];
    
    undefinedAccessPatterns.forEach((pattern, index) => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        issues.push({
          type: 'POTENTIAL_UNDEFINED_ACCESS',
          line: lineNumber,
          code: match[0],
          message: 'Potential undefined property access without optional chaining'
        });
      }
    });
    
    // Check for missing React imports
    const reactHooksUsed = [];
    const hookPattern = /\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer|useLayoutEffect|useImperativeHandle|useDebugValue)\b/g;
    
    let match;
    while ((match = hookPattern.exec(content)) !== null) {
      if (!reactHooksUsed.includes(match[1])) {
        reactHooksUsed.push(match[1]);
      }
    }
    
    if (reactHooksUsed.length > 0) {
      const reactImportLine = content.match(/^import\s+.*from\s+['"]react['"];?\s*$/m);
      if (!reactImportLine) {
        issues.push({
          type: 'MISSING_REACT_IMPORT',
          line: 1,
          code: 'Missing React import',
          message: `Uses React hooks but missing React import: ${reactHooksUsed.join(', ')}`
        });
      } else {
        const importPart = reactImportLine[0];
        const missingHooks = reactHooksUsed.filter(hook => !importPart.includes(hook));
        if (missingHooks.length > 0) {
          issues.push({
            type: 'MISSING_HOOK_IMPORTS',
            line: 1,
            code: importPart,
            message: `Missing React hook imports: ${missingHooks.join(', ')}`
          });
        }
      }
    }
    
    // Check for potential translation issues
    const translationPatterns = [
      /finalT\.\w+(?:\.\w+)*(?!\s*\?|\s*&&)/g, // finalT access without safety checks
      /safeT\.\w+(?:\.\w+)*(?!\s*\?|\s*&&)/g, // safeT access without safety checks
      /t\.\w+(?:\.\w+)*(?!\s*\?|\s*&&)/g, // t access without safety checks
    ];
    
    translationPatterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        // Skip if it's in a fallback definition
        const lineContent = content.split('\n')[lineNumber - 1];
        if (!lineContent.includes('const finalT') && !lineContent.includes('const safeT')) {
          issues.push({
            type: 'UNSAFE_TRANSLATION_ACCESS',
            line: lineNumber,
            code: match[0],
            message: 'Translation access without safety check'
          });
        }
      }
    });
    
    // Check for array access without safety checks
    const arrayAccessPattern = /\w+\.\w+\?\.\w+\[/g;
    while ((match = arrayAccessPattern.exec(content)) !== null) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.push({
        type: 'POTENTIAL_ARRAY_ACCESS_ERROR',
        line: lineNumber,
        code: match[0],
        message: 'Array access that might fail if array is undefined'
      });
    }
    
    // Report issues
    if (issues.length > 0) {
      console.log(`❌ ${relativePath}: ${issues.length} potential issues found`);
      issues.forEach(issue => {
        console.log(`   Line ${issue.line}: ${issue.type} - ${issue.message}`);
        console.log(`   Code: ${issue.code}`);
      });
      console.log();
      issuesFound += issues.length;
    } else {
      console.log(`✅ ${relativePath}: No issues found`);
    }

  } catch (error) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`❌ Error checking ${relativePath}: ${error.message}`);
    issuesFound++;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 COMPREHENSIVE PAGE AUDIT');
  console.log('='.repeat(50));
  console.log('Checking every single page for potential runtime errors...');
  console.log();

  const pageFiles = getAllPageFiles(path.join(process.cwd(), 'src/pages'));
  const componentFiles = getAllPageFiles(path.join(process.cwd(), 'src/components'));
  
  const allFiles = [...pageFiles, ...componentFiles];
  
  console.log(`📁 Found ${allFiles.length} files to check...`);
  console.log();

  allFiles.forEach(checkPageForErrors);

  console.log();
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(30));
  console.log(`📄 Pages Checked: ${pagesChecked}`);
  console.log(`❌ Issues Found: ${issuesFound}`);
  
  if (issuesFound === 0) {
    console.log('🎉 All pages are clean!');
  } else {
    console.log('⚠️  Some pages have potential runtime issues that need attention.');
  }
}

main();
