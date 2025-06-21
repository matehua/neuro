import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Conflict Detection and Issue Analysis
 * Identifies conflicts, errors, missing links, and inconsistencies in code organization
 */

console.log('🔍 COMPREHENSIVE CONFLICT DETECTION ANALYSIS');
console.log('='.repeat(60));

const conflicts = {
  duplicateExports: [],
  missingImports: [],
  circularDependencies: [],
  inconsistentNaming: [],
  missingTranslations: [],
  unusedFiles: [],
  typeConflicts: [],
  pathInconsistencies: [],
  componentStructureIssues: [],
  organizationIssues: []
};

/**
 * Load the detailed codebase analysis
 */
function loadCodebaseAnalysis() {
  try {
    const analysisData = fs.readFileSync('detailed-codebase-analysis.json', 'utf8');
    return JSON.parse(analysisData);
  } catch (error) {
    console.error('❌ Failed to load codebase analysis:', error.message);
    process.exit(1);
  }
}

/**
 * Check for duplicate exports across files
 */
function checkDuplicateExports(analysis) {
  const exportMap = new Map();
  
  const allFiles = [
    ...analysis.components,
    ...analysis.pages,
    ...analysis.hooks,
    ...analysis.contexts,
    ...analysis.services,
    ...analysis.utils,
    ...analysis.types
  ];
  
  allFiles.forEach(file => {
    if (file.exports) {
      file.exports.forEach(exp => {
        if (exp.name !== 'anonymous') {
          const key = `${exp.type}:${exp.name}`;
          if (!exportMap.has(key)) {
            exportMap.set(key, []);
          }
          exportMap.get(key).push(file.path);
        }
      });
    }
  });
  
  // Find duplicates
  exportMap.forEach((files, exportName) => {
    if (files.length > 1) {
      conflicts.duplicateExports.push({
        export: exportName,
        files: files,
        severity: 'HIGH'
      });
    }
  });
}

/**
 * Check for missing imports
 */
function checkMissingImports(analysis) {
  const allFiles = [
    ...analysis.components,
    ...analysis.pages,
    ...analysis.hooks,
    ...analysis.contexts,
    ...analysis.services,
    ...analysis.utils,
    ...analysis.types
  ];
  
  allFiles.forEach(file => {
    if (file.imports) {
      file.imports.forEach(importPath => {
        // Check for relative imports that might not exist
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          const resolvedPath = path.resolve(path.dirname(file.path), importPath);
          const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx'];
          
          let found = false;
          for (const ext of possibleExtensions) {
            const fullPath = resolvedPath + ext;
            if (fs.existsSync(fullPath)) {
              found = true;
              break;
            }
          }
          
          if (!found) {
            conflicts.missingImports.push({
              file: file.path,
              import: importPath,
              severity: 'HIGH'
            });
          }
        }
        
        // Check for @/ imports
        if (importPath.startsWith('@/')) {
          const srcPath = importPath.replace('@/', 'src/');
          const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx'];
          
          let found = false;
          for (const ext of possibleExtensions) {
            const fullPath = srcPath + ext;
            if (fs.existsSync(fullPath)) {
              found = true;
              break;
            }
          }
          
          if (!found) {
            conflicts.missingImports.push({
              file: file.path,
              import: importPath,
              severity: 'HIGH'
            });
          }
        }
      });
    }
  });
}

/**
 * Check for inconsistent naming conventions
 */
function checkNamingConsistency(analysis) {
  const allFiles = [
    ...analysis.components,
    ...analysis.pages,
    ...analysis.hooks,
    ...analysis.contexts,
    ...analysis.services,
    ...analysis.utils,
    ...analysis.types
  ];
  
  allFiles.forEach(file => {
    const fileName = path.basename(file.name, path.extname(file.name));
    
    // Check component naming
    if (file.category === 'component') {
      // Components should be PascalCase
      if (!/^[A-Z][a-zA-Z0-9]*$/.test(fileName)) {
        conflicts.inconsistentNaming.push({
          file: file.path,
          issue: 'Component file should be PascalCase',
          current: fileName,
          severity: 'MEDIUM'
        });
      }
      
      // Check if default export matches filename
      const defaultExport = file.exports?.find(exp => exp.type === 'default');
      if (defaultExport && defaultExport.name !== 'anonymous' && defaultExport.name !== fileName) {
        conflicts.inconsistentNaming.push({
          file: file.path,
          issue: 'Default export name should match filename',
          current: defaultExport.name,
          expected: fileName,
          severity: 'MEDIUM'
        });
      }
    }
    
    // Check hook naming
    if (file.category === 'hook') {
      if (!fileName.startsWith('use')) {
        conflicts.inconsistentNaming.push({
          file: file.path,
          issue: 'Hook file should start with "use"',
          current: fileName,
          severity: 'HIGH'
        });
      }
    }
  });
}

/**
 * Check for missing translations
 */
function checkMissingTranslations(analysis) {
  // Load translation files
  let enTranslations, zhTranslations;
  
  try {
    const enContent = fs.readFileSync('src/locales/en.ts', 'utf8');
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    
    // Parse translation objects
    const enObjectContent = enContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    const zhObjectContent = zhContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    
    enTranslations = eval(`(${enObjectContent})`);
    zhTranslations = eval(`(${zhObjectContent})`);
  } catch (error) {
    console.error('❌ Failed to load translation files:', error.message);
    return;
  }
  
  // Check for missing Chinese translations
  const usedKeys = Array.from(analysis.translationUsage);
  
  usedKeys.forEach(key => {
    if (!hasNestedKey(zhTranslations, key)) {
      conflicts.missingTranslations.push({
        key: key,
        language: 'zh',
        severity: 'MEDIUM'
      });
    }
  });
}

/**
 * Check if nested key exists in object
 */
function hasNestedKey(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return false;
    }
    if (!(key in current)) {
      return false;
    }
    current = current[key];
  }
  
  return true;
}

/**
 * Check for component structure issues
 */
function checkComponentStructure(analysis) {
  analysis.components.forEach(component => {
    // Check if component has proper React import
    if (!component.imports.includes('react')) {
      conflicts.componentStructureIssues.push({
        file: component.path,
        issue: 'Missing React import',
        severity: 'HIGH'
      });
    }
    
    // Check if component has default export
    if (!component.hasDefaultExport) {
      conflicts.componentStructureIssues.push({
        file: component.path,
        issue: 'Component should have default export',
        severity: 'HIGH'
      });
    }
    
    // Check for large components (over 300 lines)
    if (component.linesOfCode > 300) {
      conflicts.componentStructureIssues.push({
        file: component.path,
        issue: 'Component is too large (over 300 lines)',
        linesOfCode: component.linesOfCode,
        severity: 'MEDIUM'
      });
    }
  });
}

/**
 * Check for organization issues
 */
function checkOrganization(analysis) {
  // Check for files in wrong directories
  analysis.components.forEach(component => {
    if (!component.path.includes('/components/') && !component.path.includes('/pages/')) {
      conflicts.organizationIssues.push({
        file: component.path,
        issue: 'Component not in components or pages directory',
        severity: 'MEDIUM'
      });
    }
  });
  
  analysis.hooks.forEach(hook => {
    if (!hook.path.includes('/hooks/') && !hook.path.includes('/components/')) {
      conflicts.organizationIssues.push({
        file: hook.path,
        issue: 'Hook not in hooks directory',
        severity: 'MEDIUM'
      });
    }
  });
}

// Main analysis
console.log('📊 Loading codebase analysis...');
const analysis = loadCodebaseAnalysis();

console.log('🔍 Checking for conflicts and issues...');

checkDuplicateExports(analysis);
checkMissingImports(analysis);
checkNamingConsistency(analysis);
checkMissingTranslations(analysis);
checkComponentStructure(analysis);
checkOrganization(analysis);

// Print results
console.log('\n📊 CONFLICT ANALYSIS RESULTS:');
console.log('='.repeat(40));

console.log(`🔄 Duplicate Exports: ${conflicts.duplicateExports.length}`);
console.log(`❌ Missing Imports: ${conflicts.missingImports.length}`);
console.log(`📝 Naming Issues: ${conflicts.inconsistentNaming.length}`);
console.log(`🌐 Missing Translations: ${conflicts.missingTranslations.length}`);
console.log(`🏗️  Component Issues: ${conflicts.componentStructureIssues.length}`);
console.log(`📁 Organization Issues: ${conflicts.organizationIssues.length}`);

// Save detailed conflicts
fs.writeFileSync('conflict-analysis-report.json', JSON.stringify(conflicts, null, 2));
console.log('\n📄 Detailed conflict report saved to: conflict-analysis-report.json');

// Print high-severity issues
const highSeverityIssues = [
  ...conflicts.duplicateExports.filter(c => c.severity === 'HIGH'),
  ...conflicts.missingImports.filter(c => c.severity === 'HIGH'),
  ...conflicts.inconsistentNaming.filter(c => c.severity === 'HIGH'),
  ...conflicts.componentStructureIssues.filter(c => c.severity === 'HIGH')
];

if (highSeverityIssues.length > 0) {
  console.log('\n⚠️  HIGH SEVERITY ISSUES:');
  highSeverityIssues.forEach((issue, index) => {
    console.log(`${index + 1}. ${JSON.stringify(issue, null, 2)}`);
  });
}

console.log('\n✅ Conflict detection analysis complete!');
