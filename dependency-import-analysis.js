import fs from 'fs';
import { dirname, join, relative, resolve, extname } from 'path';

/**
 * Comprehensive Dependency and Import Analysis
 * Analyzes import/export relationships, circular dependencies, and unused imports
 */

console.log('🔍 DEPENDENCY & IMPORT ANALYSIS');
console.log('='.repeat(60));

const analysis = {
  files: new Map(),
  imports: new Map(),
  exports: new Map(),
  circularDependencies: [],
  unusedImports: [],
  missingDependencies: [],
  duplicateImports: [],
  issues: []
};

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = relative(process.cwd(), filePath);
    
    const fileInfo = {
      path: relativePath,
      imports: extractImports(content),
      exports: extractExports(content),
      size: content.length,
      lines: content.split('\n').length
    };
    
    analysis.files.set(relativePath, fileInfo);
    
    // Track imports and exports
    fileInfo.imports.forEach(imp => {
      if (!analysis.imports.has(imp.source)) {
        analysis.imports.set(imp.source, []);
      }
      analysis.imports.get(imp.source).push({
        file: relativePath,
        statement: imp.statement,
        line: imp.line
      });
    });
    
    fileInfo.exports.forEach(exp => {
      if (!analysis.exports.has(exp)) {
        analysis.exports.set(exp, []);
      }
      analysis.exports.get(exp).push(relativePath);
    });
    
  } catch (error) {
    analysis.issues.push({
      type: 'FILE_READ_ERROR',
      file: filePath,
      message: error.message
    });
  }
}

function extractImports(content) {
  const imports = [];
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Match various import patterns
    const patterns = [
      /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"]/g,
      /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g, // Dynamic imports
      /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g  // CommonJS requires
    ];
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        imports.push({
          source: match[1],
          statement: line.trim(),
          line: index + 1,
          type: line.includes('import(') ? 'dynamic' : 
                line.includes('require') ? 'require' : 'static'
        });
      }
    });
  });
  
  return imports;
}

function extractExports(content) {
  const exports = [];
  const lines = content.split('\n');
  
  lines.forEach(line => {
    // Match export patterns
    const patterns = [
      /export\s+(?:default\s+)?(?:const|let|var|function|class|interface|type)\s+(\w+)/g,
      /export\s+\{\s*([^}]+)\s*\}/g,
      /export\s+default\s+(\w+)/g
    ];
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        if (match[1].includes(',')) {
          // Handle multiple exports in braces
          match[1].split(',').forEach(exp => {
            const cleanExp = exp.trim().split(' as ')[0];
            if (cleanExp) exports.push(cleanExp);
          });
        } else {
          exports.push(match[1]);
        }
      }
    });
  });
  
  return exports;
}

function analyzeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  items.forEach(item => {
    const fullPath = join(dirPath, item.name);
    
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      analyzeDirectory(fullPath);
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
      analyzeFile(fullPath);
    }
  });
}

function detectCircularDependencies() {
  console.log('🔄 Detecting circular dependencies...');
  
  const visited = new Set();
  const recursionStack = new Set();
  const cycles = [];
  
  function dfs(file, path = []) {
    if (recursionStack.has(file)) {
      const cycleStart = path.indexOf(file);
      if (cycleStart !== -1) {
        cycles.push([...path.slice(cycleStart), file]);
      }
      return;
    }
    
    if (visited.has(file)) return;
    
    visited.add(file);
    recursionStack.add(file);
    path.push(file);
    
    const fileInfo = analysis.files.get(file);
    if (fileInfo) {
      fileInfo.imports.forEach(imp => {
        if (imp.source.startsWith('.') || imp.source.startsWith('@/')) {
          // Resolve relative imports
          let resolvedPath = imp.source;
          if (imp.source.startsWith('@/')) {
            resolvedPath = imp.source.replace('@/', 'src/');
          } else {
            resolvedPath = resolve(dirname(file), imp.source);
          }

          // Add common extensions if missing
          if (!resolvedPath.endsWith('.ts') && !resolvedPath.endsWith('.tsx')) {
            if (fs.existsSync(resolvedPath + '.tsx')) {
              resolvedPath += '.tsx';
            } else if (fs.existsSync(resolvedPath + '.ts')) {
              resolvedPath += '.ts';
            }
          }

          const relativePath = relative(process.cwd(), resolvedPath);
          if (analysis.files.has(relativePath)) {
            dfs(relativePath, [...path]);
          }
        }
      });
    }
    
    recursionStack.delete(file);
    path.pop();
  }
  
  analysis.files.forEach((_, file) => {
    if (!visited.has(file)) {
      dfs(file);
    }
  });
  
  analysis.circularDependencies = cycles;
}

function detectUnusedImports() {
  console.log('🗑️ Detecting unused imports...');
  
  analysis.files.forEach((fileInfo, filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    
    fileInfo.imports.forEach(imp => {
      // Skip certain imports that are commonly used without direct reference
      if (imp.source.includes('react') || 
          imp.source.includes('css') || 
          imp.source.includes('.css') ||
          imp.statement.includes('import \'') ||
          imp.statement.includes('import "')) {
        return;
      }
      
      // Extract imported names
      const importMatch = imp.statement.match(/import\s+(?:\{([^}]+)\}|(\w+))/);
      if (importMatch) {
        const importedNames = importMatch[1] ? 
          importMatch[1].split(',').map(name => name.trim().split(' as ')[0]) :
          [importMatch[2]];
        
        importedNames.forEach(name => {
          if (name && !content.includes(name.trim())) {
            analysis.unusedImports.push({
              file: filePath,
              import: name.trim(),
              statement: imp.statement,
              line: imp.line
            });
          }
        });
      }
    });
  });
}

function detectDuplicateImports() {
  console.log('🔄 Detecting duplicate imports...');
  
  analysis.files.forEach((fileInfo, filePath) => {
    const importSources = new Map();
    
    fileInfo.imports.forEach(imp => {
      if (!importSources.has(imp.source)) {
        importSources.set(imp.source, []);
      }
      importSources.get(imp.source).push(imp);
    });
    
    importSources.forEach((imports, source) => {
      if (imports.length > 1) {
        analysis.duplicateImports.push({
          file: filePath,
          source,
          imports: imports.map(imp => ({
            statement: imp.statement,
            line: imp.line
          }))
        });
      }
    });
  });
}

function generateReport() {
  console.log('\n📊 DEPENDENCY ANALYSIS REPORT');
  console.log('='.repeat(40));
  
  console.log(`\nFiles analyzed: ${analysis.files.size}`);
  console.log(`Total imports: ${Array.from(analysis.imports.values()).flat().length}`);
  console.log(`Unique import sources: ${analysis.imports.size}`);
  console.log(`Total exports: ${Array.from(analysis.exports.values()).flat().length}`);
  
  console.log(`\n🔴 Issues Found:`);
  console.log(`Circular dependencies: ${analysis.circularDependencies.length}`);
  console.log(`Unused imports: ${analysis.unusedImports.length}`);
  console.log(`Duplicate imports: ${analysis.duplicateImports.length}`);
  console.log(`File read errors: ${analysis.issues.length}`);
  
  if (analysis.circularDependencies.length > 0) {
    console.log('\n🔄 Circular Dependencies:');
    analysis.circularDependencies.slice(0, 5).forEach((cycle, index) => {
      console.log(`${index + 1}. ${cycle.join(' → ')}`);
    });
  }
  
  if (analysis.duplicateImports.length > 0) {
    console.log('\n🔄 Duplicate Imports (First 5):');
    analysis.duplicateImports.slice(0, 5).forEach((dup, index) => {
      console.log(`${index + 1}. ${dup.file}: ${dup.source} (${dup.imports.length} times)`);
    });
  }
  
  // Save detailed results
  const results = {
    summary: {
      filesAnalyzed: analysis.files.size,
      totalImports: Array.from(analysis.imports.values()).flat().length,
      uniqueImportSources: analysis.imports.size,
      circularDependencies: analysis.circularDependencies.length,
      unusedImports: analysis.unusedImports.length,
      duplicateImports: analysis.duplicateImports.length,
      issues: analysis.issues.length
    },
    details: {
      circularDependencies: analysis.circularDependencies,
      unusedImports: analysis.unusedImports.slice(0, 50), // Limit to first 50
      duplicateImports: analysis.duplicateImports,
      issues: analysis.issues
    },
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    'dependency-import-analysis-results.json',
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n✅ Dependency analysis complete!');
  console.log('📄 Results saved to dependency-import-analysis-results.json');
}

// Run the analysis
console.log('🚀 Starting dependency analysis...');

analyzeDirectory('src');
detectCircularDependencies();
detectUnusedImports();
detectDuplicateImports();
generateReport();
