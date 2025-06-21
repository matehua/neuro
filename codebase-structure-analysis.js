import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Codebase Structure Analysis
 * Analyzes the entire codebase to understand architecture, components, and relationships
 */

console.log('🔍 COMPREHENSIVE CODEBASE STRUCTURE ANALYSIS');
console.log('='.repeat(60));

const analysis = {
  summary: {
    totalFiles: 0,
    totalDirectories: 0,
    components: 0,
    pages: 0,
    hooks: 0,
    contexts: 0,
    services: 0,
    utils: 0,
    types: 0
  },
  structure: {},
  components: [],
  pages: [],
  hooks: [],
  contexts: [],
  services: [],
  utils: [],
  types: [],
  translationUsage: new Set(),
  issues: [],
  relationships: {}
};

/**
 * Recursively analyze directory structure
 */
function analyzeDirectory(dirPath, relativePath = '') {
  const items = [];
  
  try {
    if (!fs.existsSync(dirPath)) {
      console.log(`Directory does not exist: ${dirPath}`);
      return items;
    }
    
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relPath = path.join(relativePath, entry.name).replace(/\\/g, '/');
      
      if (entry.isDirectory()) {
        // Skip certain directories
        if (['node_modules', 'dist', 'build', '.git', '.vscode', '.next'].includes(entry.name)) {
          continue;
        }
        
        analysis.summary.totalDirectories++;
        const subItems = analyzeDirectory(fullPath, relPath);
        items.push({
          type: 'directory',
          name: entry.name,
          path: relPath,
          children: subItems
        });
      } else if (entry.isFile()) {
        analysis.summary.totalFiles++;
        const ext = path.extname(entry.name);
        const fileInfo = {
          type: 'file',
          name: entry.name,
          path: relPath,
          extension: ext,
          size: fs.statSync(fullPath).size
        };
        
        // Analyze TypeScript/JavaScript files
        if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
          analyzeCodeFile(fullPath, fileInfo);
        }
        
        items.push(fileInfo);
      }
    }
  } catch (error) {
    console.error(`Error analyzing directory ${dirPath}:`, error.message);
    analysis.issues.push({
      type: 'DIRECTORY_ERROR',
      path: dirPath,
      message: error.message
    });
  }
  
  return items;
}

/**
 * Analyze individual code files
 */
function analyzeCodeFile(filePath, fileInfo) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Basic file analysis
    fileInfo.linesOfCode = content.split('\n').length;
    fileInfo.hasDefaultExport = content.includes('export default');
    fileInfo.hasNamedExports = /export\s+(const|function|class|interface|type)/.test(content);
    fileInfo.usesReact = content.includes('import React') || content.includes('from \'react\'');
    fileInfo.usesTypeScript = fileInfo.extension === '.ts' || fileInfo.extension === '.tsx';
    
    // Extract imports
    fileInfo.imports = extractImports(content);
    
    // Extract exports
    fileInfo.exports = extractExports(content);
    
    // Extract translation usage
    const translationKeys = extractTranslationUsage(content);
    translationKeys.forEach(key => analysis.translationUsage.add(key));
    fileInfo.translationKeys = translationKeys;
    
    // Categorize file type
    const fileType = categorizeFile(content, fileInfo.path);
    fileInfo.category = fileType;
    
    // Add to appropriate category
    switch (fileType) {
      case 'component':
        analysis.components.push(fileInfo);
        analysis.summary.components++;
        break;
      case 'page':
        analysis.pages.push(fileInfo);
        analysis.summary.pages++;
        break;
      case 'hook':
        analysis.hooks.push(fileInfo);
        analysis.summary.hooks++;
        break;
      case 'context':
        analysis.contexts.push(fileInfo);
        analysis.summary.contexts++;
        break;
      case 'service':
        analysis.services.push(fileInfo);
        analysis.summary.services++;
        break;
      case 'util':
        analysis.utils.push(fileInfo);
        analysis.summary.utils++;
        break;
      case 'type':
        analysis.types.push(fileInfo);
        analysis.summary.types++;
        break;
    }
    
  } catch (error) {
    console.error(`Error analyzing file ${filePath}:`, error.message);
    analysis.issues.push({
      type: 'FILE_ERROR',
      path: fileInfo.path,
      message: error.message
    });
  }
}

/**
 * Categorize file based on content and path
 */
function categorizeFile(content, filePath) {
  // Check path-based categorization first
  if (filePath.includes('/components/')) {
    if (filePath.includes('/ui/')) return 'ui-component';
    return 'component';
  }
  if (filePath.includes('/pages/')) return 'page';
  if (filePath.includes('/hooks/')) return 'hook';
  if (filePath.includes('/contexts/')) return 'context';
  if (filePath.includes('/services/')) return 'service';
  if (filePath.includes('/utils/') || filePath.includes('/lib/')) return 'util';
  if (filePath.includes('/types/') || filePath.endsWith('.d.ts')) return 'type';
  
  // Content-based categorization
  if (/export\s+(default\s+)?(?:function|const)\s+use[A-Z]/.test(content)) return 'hook';
  if (/createContext|useContext|Provider/.test(content)) return 'context';
  if (/<[A-Z]/.test(content) && /export\s+(default\s+)?(?:function|const)/.test(content)) return 'component';
  if (/export\s+(interface|type)\s+/.test(content)) return 'type';
  if (/fetch\(|axios\.|api\./i.test(content)) return 'service';
  
  return 'util';
}

/**
 * Extract import statements
 */
function extractImports(content) {
  const imports = [];
  const importRegex = /import\s+(?:(?:\{[^}]*\}|\w+|\*\s+as\s+\w+)(?:\s*,\s*(?:\{[^}]*\}|\w+))*\s+from\s+)?['"`]([^'"`]+)['"`]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  
  return imports;
}

/**
 * Extract export statements
 */
function extractExports(content) {
  const exports = [];
  
  // Named exports
  const namedExportRegex = /export\s+(?:const|function|class|interface|type)\s+(\w+)/g;
  let match;
  while ((match = namedExportRegex.exec(content)) !== null) {
    exports.push({ type: 'named', name: match[1] });
  }
  
  // Default export
  if (content.includes('export default')) {
    const defaultExportMatch = content.match(/export\s+default\s+(?:function\s+)?(\w+)/);
    if (defaultExportMatch) {
      exports.push({ type: 'default', name: defaultExportMatch[1] });
    } else {
      exports.push({ type: 'default', name: 'anonymous' });
    }
  }
  
  return exports;
}

/**
 * Extract translation key usage
 */
function extractTranslationUsage(content) {
  const keys = new Set();
  
  // Pattern for t.key.subkey usage
  const patterns = [
    /\bt\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g,
    /finalT\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g,
    /translations\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      keys.add(match[1]);
    }
  });
  
  return Array.from(keys);
}

// Start analysis
console.log('📁 Starting codebase analysis...');

// Analyze src directory
if (fs.existsSync('./src')) {
  analysis.structure = analyzeDirectory('./src', 'src');
} else {
  console.error('❌ src directory not found');
  process.exit(1);
}

// Print summary
console.log('\n📊 ANALYSIS SUMMARY:');
console.log('='.repeat(40));
console.log(`📁 Total Directories: ${analysis.summary.totalDirectories}`);
console.log(`📄 Total Files: ${analysis.summary.totalFiles}`);
console.log(`📦 Components: ${analysis.summary.components}`);
console.log(`📄 Pages: ${analysis.summary.pages}`);
console.log(`🪝 Hooks: ${analysis.summary.hooks}`);
console.log(`🔗 Contexts: ${analysis.summary.contexts}`);
console.log(`🔧 Services: ${analysis.summary.services}`);
console.log(`🛠️  Utils: ${analysis.summary.utils}`);
console.log(`📝 Types: ${analysis.summary.types}`);
console.log(`🌐 Translation Keys Used: ${analysis.translationUsage.size}`);
console.log(`⚠️  Issues Found: ${analysis.issues.length}`);

// Save detailed analysis
fs.writeFileSync('detailed-codebase-analysis.json', JSON.stringify(analysis, null, 2));
console.log('\n📄 Detailed analysis saved to: detailed-codebase-analysis.json');

// Print issues if any
if (analysis.issues.length > 0) {
  console.log('\n⚠️  ISSUES FOUND:');
  analysis.issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.type}: ${issue.path} - ${issue.message}`);
  });
}

console.log('\n✅ Codebase analysis complete!');
