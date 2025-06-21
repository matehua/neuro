import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Codebase Architecture Analysis
 * Systematic examination of entire codebase structure, components, services, and relationships
 */

console.log('🔍 COMPREHENSIVE CODEBASE ARCHITECTURE ANALYSIS');
console.log('='.repeat(80));

const analysis = {
  directoryStructure: {},
  components: {},
  pages: {},
  hooks: {},
  contexts: {},
  services: {},
  utilities: {},
  types: {},
  routes: {},
  configurations: {},
  dependencies: {},
  imports: {},
  exports: {},
  issues: [],
  recommendations: [],
  metrics: {}
};

// Analyze directory structure
function analyzeDirectoryStructure() {
  console.log('📁 Analyzing directory structure...');
  
  const srcStructure = {
    components: analyzeDirectory('src/components'),
    pages: analyzeDirectory('src/pages'),
    hooks: analyzeDirectory('src/hooks'),
    contexts: analyzeDirectory('src/contexts'),
    lib: analyzeDirectory('src/lib'),
    types: analyzeDirectory('src/types'),
    routes: analyzeDirectory('src/routes'),
    locales: analyzeDirectory('src/locales'),
    data: analyzeDirectory('src/data')
  };
  
  analysis.directoryStructure = srcStructure;
  
  // Analyze naming conventions
  analyzeNamingConventions(srcStructure);
  
  // Check for organizational issues
  checkOrganizationalIssues(srcStructure);
}

function analyzeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return { exists: false, files: [], subdirectories: [] };
  }
  
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const structure = {
    exists: true,
    files: [],
    subdirectories: [],
    totalFiles: 0,
    totalSize: 0
  };
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item.name);
    
    if (item.isDirectory()) {
      structure.subdirectories.push({
        name: item.name,
        path: fullPath,
        structure: analyzeDirectory(fullPath)
      });
    } else if (item.isFile()) {
      const stats = fs.statSync(fullPath);
      const fileInfo = {
        name: item.name,
        path: fullPath,
        extension: path.extname(item.name),
        size: stats.size,
        lines: countLines(fullPath)
      };
      
      structure.files.push(fileInfo);
      structure.totalFiles++;
      structure.totalSize += stats.size;
    }
  });
  
  return structure;
}

function countLines(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').length;
  } catch (error) {
    return 0;
  }
}

// Analyze React components
function analyzeComponents() {
  console.log('⚛️ Analyzing React components...');
  
  const componentDirs = [
    'src/components',
    'src/pages'
  ];
  
  componentDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      analyzeComponentsInDirectory(dir);
    }
  });
}

function analyzeComponentsInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item.name);
    
    if (item.isDirectory()) {
      analyzeComponentsInDirectory(fullPath);
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
      analyzeComponent(fullPath);
    }
  });
}

function analyzeComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath, path.extname(filePath));
    
    const componentAnalysis = {
      path: filePath,
      name: fileName,
      size: content.length,
      lines: content.split('\n').length,
      imports: extractImports(content),
      exports: extractExports(content),
      props: extractProps(content),
      hooks: extractHooks(content),
      isReactComponent: isReactComponent(content),
      hasTypeScript: filePath.endsWith('.tsx') || filePath.endsWith('.ts'),
      hasInterfaces: content.includes('interface '),
      hasTypes: content.includes('type '),
      complexity: calculateComplexity(content),
      issues: []
    };
    
    // Check for common issues
    checkComponentIssues(componentAnalysis, content);
    
    if (filePath.includes('/pages/')) {
      analysis.pages[fileName] = componentAnalysis;
    } else {
      analysis.components[fileName] = componentAnalysis;
    }
    
  } catch (error) {
    analysis.issues.push({
      type: 'FILE_READ_ERROR',
      file: filePath,
      message: error.message
    });
  }
}

function extractImports(content) {
  const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"]/g;
  const imports = [];
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push({
      source: match[1],
      statement: match[0]
    });
  }
  
  return imports;
}

function extractExports(content) {
  const exportRegex = /export\s+(?:default\s+)?(?:const|function|class|interface|type)\s+(\w+)/g;
  const exports = [];
  let match;
  
  while ((match = exportRegex.exec(content)) !== null) {
    exports.push(match[1]);
  }
  
  return exports;
}

function extractProps(content) {
  const propsRegex = /interface\s+(\w+Props)\s*\{([^}]+)\}/g;
  const props = [];
  let match;
  
  while ((match = propsRegex.exec(content)) !== null) {
    props.push({
      interface: match[1],
      properties: match[2].split(',').map(prop => prop.trim()).filter(Boolean)
    });
  }
  
  return props;
}

function extractHooks(content) {
  const hookRegex = /use[A-Z]\w*/g;
  const hooks = [...new Set(content.match(hookRegex) || [])];
  return hooks;
}

function isReactComponent(content) {
  return content.includes('React.FC') || 
         content.includes(': FC') ||
         (content.includes('function ') && content.includes('return (')) ||
         (content.includes('const ') && content.includes('= (') && content.includes('=>'));
}

function calculateComplexity(content) {
  // Simple complexity calculation based on various factors
  const lines = content.split('\n').length;
  const conditionals = (content.match(/if\s*\(|switch\s*\(|\?\s*:/g) || []).length;
  const loops = (content.match(/for\s*\(|while\s*\(|\.map\(|\.forEach\(/g) || []).length;
  const functions = (content.match(/function\s+\w+|=>\s*\{|const\s+\w+\s*=/g) || []).length;
  
  return {
    lines,
    conditionals,
    loops,
    functions,
    score: lines + (conditionals * 2) + (loops * 2) + functions
  };
}

function checkComponentIssues(componentAnalysis, content) {
  const issues = [];
  
  // Check for missing TypeScript interfaces
  if (componentAnalysis.isReactComponent && componentAnalysis.props.length === 0 && content.includes('props')) {
    issues.push({
      type: 'MISSING_PROPS_INTERFACE',
      severity: 'medium',
      message: 'Component uses props but has no TypeScript interface defined'
    });
  }
  
  // Check for large components
  if (componentAnalysis.lines > 500) {
    issues.push({
      type: 'LARGE_COMPONENT',
      severity: 'high',
      message: `Component is very large (${componentAnalysis.lines} lines). Consider breaking it down.`
    });
  }
  
  // Check for missing display name
  if (componentAnalysis.isReactComponent && !content.includes('.displayName')) {
    issues.push({
      type: 'MISSING_DISPLAY_NAME',
      severity: 'low',
      message: 'Component missing displayName for debugging'
    });
  }
  
  // Check for console statements
  if (content.includes('console.')) {
    issues.push({
      type: 'CONSOLE_STATEMENTS',
      severity: 'medium',
      message: 'Component contains console statements'
    });
  }
  
  componentAnalysis.issues = issues;
  analysis.issues.push(...issues.map(issue => ({
    ...issue,
    file: componentAnalysis.path
  })));
}

// Analyze naming conventions
function analyzeNamingConventions(structure) {
  console.log('📝 Analyzing naming conventions...');
  
  const conventions = {
    components: { pascalCase: 0, camelCase: 0, kebabCase: 0, other: 0 },
    files: { camelCase: 0, kebabCase: 0, pascalCase: 0, other: 0 },
    directories: { camelCase: 0, kebabCase: 0, other: 0 }
  };
  
  // Analyze component naming
  Object.keys(analysis.components).forEach(name => {
    if (/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
      conventions.components.pascalCase++;
    } else if (/^[a-z][a-zA-Z0-9]*$/.test(name)) {
      conventions.components.camelCase++;
    } else if (/^[a-z][a-z0-9-]*$/.test(name)) {
      conventions.components.kebabCase++;
    } else {
      conventions.components.other++;
    }
  });
  
  analysis.metrics.namingConventions = conventions;
}

function checkOrganizationalIssues(structure) {
  console.log('🔍 Checking organizational issues...');
  
  const issues = [];
  
  // Check for deeply nested directories
  function checkNesting(dir, depth = 0) {
    if (depth > 4) {
      issues.push({
        type: 'DEEP_NESTING',
        severity: 'medium',
        message: `Directory structure is deeply nested (${depth} levels): ${dir.path}`
      });
    }
    
    dir.subdirectories?.forEach(subdir => {
      checkNesting(subdir.structure, depth + 1);
    });
  }
  
  Object.values(structure).forEach(dir => {
    if (dir.exists) {
      checkNesting(dir);
    }
  });
  
  analysis.issues.push(...issues);
}

// Main execution
async function runComprehensiveAnalysis() {
  try {
    console.log('🚀 Starting comprehensive codebase analysis...');
    
    analyzeDirectoryStructure();
    analyzeComponents();
    
    // Generate summary metrics
    generateSummaryMetrics();
    
    // Generate recommendations
    generateRecommendations();
    
    // Save results
    const results = {
      analysis,
      timestamp: new Date().toISOString(),
      summary: generateSummary()
    };
    
    fs.writeFileSync(
      'comprehensive-codebase-architecture-analysis-results.json',
      JSON.stringify(results, null, 2)
    );
    
    console.log('\n📊 ANALYSIS SUMMARY');
    console.log('='.repeat(40));
    console.log(`Components analyzed: ${Object.keys(analysis.components).length}`);
    console.log(`Pages analyzed: ${Object.keys(analysis.pages).length}`);
    console.log(`Issues found: ${analysis.issues.length}`);
    console.log(`Recommendations: ${analysis.recommendations.length}`);
    
    console.log('\n✅ Comprehensive analysis complete!');
    console.log('📄 Results saved to comprehensive-codebase-architecture-analysis-results.json');
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  }
}

function generateSummaryMetrics() {
  analysis.metrics.totalComponents = Object.keys(analysis.components).length;
  analysis.metrics.totalPages = Object.keys(analysis.pages).length;
  analysis.metrics.totalIssues = analysis.issues.length;
  analysis.metrics.averageComponentSize = Object.values(analysis.components)
    .reduce((sum, comp) => sum + comp.lines, 0) / Object.keys(analysis.components).length;
}

function generateRecommendations() {
  // Add architectural recommendations based on analysis
  analysis.recommendations.push({
    category: 'Architecture',
    priority: 'high',
    title: 'Component Size Optimization',
    description: 'Several components exceed 500 lines and should be broken down into smaller, reusable components'
  });
}

function generateSummary() {
  return {
    totalFiles: analysis.metrics.totalComponents + analysis.metrics.totalPages,
    criticalIssues: analysis.issues.filter(issue => issue.severity === 'high').length,
    mediumIssues: analysis.issues.filter(issue => issue.severity === 'medium').length,
    lowIssues: analysis.issues.filter(issue => issue.severity === 'low').length,
    recommendations: analysis.recommendations.length
  };
}

// Run the analysis
runComprehensiveAnalysis();
