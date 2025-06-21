import fs from 'fs';
import path from 'path';

let issuesFound = 0;
let filesChecked = 0;

/**
 * Get all React component files
 */
function getAllReactFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
        getAllReactFiles(fullPath, files);
      }
    } else if (['.tsx', '.ts', '.jsx', '.js'].includes(path.extname(item)) && !item.includes('.test.') && !item.includes('.spec.')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Check for React Fragment issues and other React warnings
 */
function checkReactWarnings(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    const lines = content.split('\n');
    
    console.log(`🔍 Checking: ${relativePath}`);
    filesChecked++;
    
    const issues = [];
    
    // Check for React.Fragment with invalid props
    const fragmentPattern = /<React\.Fragment\s+([^>]+)>/g;
    let match;
    while ((match = fragmentPattern.exec(content)) !== null) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      const props = match[1];
      
      // Check if props contain anything other than 'key' and 'children'
      if (props && !props.match(/^\s*key\s*=/) && props.trim() !== '') {
        issues.push({
          type: 'INVALID_FRAGMENT_PROPS',
          line: lineNumber,
          code: match[0],
          message: 'React.Fragment can only have key and children props'
        });
      }
    }
    
    // Check for Fragment shorthand with invalid props
    const shortFragmentPattern = /<>\s*([^<>]*)\s*</g;
    while ((match = shortFragmentPattern.exec(content)) !== null) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      if (match[1].trim() && match[1].includes('=')) {
        issues.push({
          type: 'INVALID_SHORT_FRAGMENT_PROPS',
          line: lineNumber,
          code: match[0],
          message: 'Fragment shorthand <> cannot have props'
        });
      }
    }
    
    // Check for missing keys in map functions
    const mapPattern = /\.map\s*\(\s*\([^)]*\)\s*=>\s*\(/g;
    while ((match = mapPattern.exec(content)) !== null) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      const nextLines = lines.slice(lineNumber - 1, lineNumber + 5).join('\n');
      
      if (!nextLines.includes('key=')) {
        issues.push({
          type: 'MISSING_KEY_IN_MAP',
          line: lineNumber,
          code: match[0],
          message: 'Missing key prop in map function'
        });
      }
    }
    
    // Check for invalid HTML attributes on React components
    const invalidHtmlAttrs = ['data-lov-id', 'data-testid'];
    invalidHtmlAttrs.forEach(attr => {
      const attrPattern = new RegExp(`${attr}\\s*=`, 'g');
      while ((match = attrPattern.exec(content)) !== null) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        const lineContent = lines[lineNumber - 1];
        
        // Check if it's on a React component (starts with capital letter)
        if (lineContent.includes('<React.Fragment') || lineContent.includes('<>')) {
          issues.push({
            type: 'INVALID_FRAGMENT_ATTRIBUTE',
            line: lineNumber,
            code: lineContent.trim(),
            message: `Invalid attribute ${attr} on React Fragment`
          });
        }
      }
    });
    
    // Check for console.log statements (should be removed in production)
    const consolePattern = /console\.(log|warn|error|debug|info)\s*\(/g;
    while ((match = consolePattern.exec(content)) !== null) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.push({
        type: 'CONSOLE_STATEMENT',
        line: lineNumber,
        code: match[0],
        message: 'Console statement should be removed in production'
      });
    }
    
    // Check for unused imports
    const importPattern = /import\s+.*from\s+['"][^'"]+['"];?/g;
    const imports = [];
    while ((match = importPattern.exec(content)) !== null) {
      const importMatch = match[0].match(/import\s+\{([^}]+)\}/);
      if (importMatch) {
        const namedImports = importMatch[1].split(',').map(imp => imp.trim());
        namedImports.forEach(imp => {
          if (!content.includes(imp.replace(/\s+as\s+\w+/, ''))) {
            const lineNumber = content.substring(0, match.index).split('\n').length;
            issues.push({
              type: 'UNUSED_IMPORT',
              line: lineNumber,
              code: imp,
              message: 'Unused import'
            });
          }
        });
      }
    }
    
    // Report issues
    if (issues.length > 0) {
      console.log(`❌ ${relativePath}: ${issues.length} issues found`);
      issues.forEach(issue => {
        console.log(`   Line ${issue.line}: ${issue.type} - ${issue.message}`);
        console.log(`   Code: ${issue.code}`);
      });
      console.log();
      issuesFound += issues.length;
    } else {
      console.log(`✅ ${relativePath}: No React warnings found`);
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
  console.log('🔍 COMPREHENSIVE REACT WARNINGS CHECK');
  console.log('='.repeat(50));
  console.log('Checking every React component for warnings and issues...');
  console.log();

  const reactFiles = getAllReactFiles(path.join(process.cwd(), 'src'));
  console.log(`📁 Found ${reactFiles.length} React files to check...`);
  console.log();

  reactFiles.forEach(checkReactWarnings);

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(20));
  console.log(`📄 Files Checked: ${filesChecked}`);
  console.log(`❌ Issues Found: ${issuesFound}`);
  
  if (issuesFound === 0) {
    console.log('🎉 All React components are clean!');
  } else {
    console.log('⚠️  Some React components have warnings or issues.');
    console.log();
    console.log('🔧 RECOMMENDED ACTIONS:');
    console.log('1. Fix React.Fragment prop issues');
    console.log('2. Add missing keys to map functions');
    console.log('3. Remove console statements');
    console.log('4. Remove unused imports');
    console.log('5. Test each component after fixes');
  }
}

main();
