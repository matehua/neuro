import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Codebase Analysis
 * Analyzes the entire codebase structure, identifies issues, conflicts, and inconsistencies
 */

console.log('🔍 COMPREHENSIVE CODEBASE ANALYSIS');
console.log('='.repeat(80));

const analysisResults = {
  structure: {},
  issues: [],
  conflicts: [],
  inconsistencies: [],
  missingFiles: [],
  recommendations: [],
  summary: {}
};

// File system analysis
function analyzeFileStructure() {
  console.log('📁 Analyzing file structure...');
  
  const srcStructure = {
    components: [],
    pages: [],
    contexts: [],
    hooks: [],
    lib: [],
    routes: [],
    types: [],
    locales: []
  };

  // Analyze src directory
  function scanDirectory(dirPath, category) {
    try {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      items.forEach(item => {
        if (item.isFile() && item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
          srcStructure[category].push({
            name: item.name,
            path: path.join(dirPath, item.name),
            size: fs.statSync(path.join(dirPath, item.name)).size
          });
        } else if (item.isDirectory() && !item.name.startsWith('.')) {
          scanDirectory(path.join(dirPath, item.name), category);
        }
      });
    } catch (error) {
      analysisResults.issues.push({
        type: 'file_access',
        message: `Cannot access directory: ${dirPath}`,
        severity: 'warning'
      });
    }
  }

  // Scan each category
  Object.keys(srcStructure).forEach(category => {
    const dirPath = path.join('src', category);
    if (fs.existsSync(dirPath)) {
      scanDirectory(dirPath, category);
    }
  });

  analysisResults.structure = srcStructure;
  return srcStructure;
}

// Import analysis
function analyzeImports() {
  console.log('📦 Analyzing imports and dependencies...');
  
  const importIssues = [];
  const circularDependencies = [];
  const unusedImports = [];

  function analyzeFileImports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
      const imports = [];
      let match;

      while ((match = importRegex.exec(content)) !== null) {
        imports.push(match[1]);
      }

      // Check for potential issues
      imports.forEach(importPath => {
        // Check for relative imports going too deep
        if (importPath.startsWith('../../../')) {
          importIssues.push({
            file: filePath,
            import: importPath,
            issue: 'Deep relative import - consider absolute import',
            severity: 'warning'
          });
        }

        // Check for missing alias usage
        if (importPath.startsWith('../../') && !importPath.startsWith('@/')) {
          importIssues.push({
            file: filePath,
            import: importPath,
            issue: 'Should use @ alias instead of relative import',
            severity: 'info'
          });
        }
      });

      return imports;
    } catch (error) {
      importIssues.push({
        file: filePath,
        issue: `Cannot analyze imports: ${error.message}`,
        severity: 'error'
      });
      return [];
    }
  }

  // Analyze all TypeScript/React files
  function walkDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
        walkDirectory(fullPath);
      } else if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.ts'))) {
        analyzeFileImports(fullPath);
      }
    });
  }

  walkDirectory('src');

  analysisResults.issues.push(...importIssues);
  return { importIssues, circularDependencies, unusedImports };
}

// Component analysis
function analyzeComponents() {
  console.log('🧩 Analyzing components...');
  
  const componentIssues = [];
  const componentMetrics = {
    totalComponents: 0,
    averageSize: 0,
    largeComponents: [],
    missingPropTypes: [],
    inconsistentNaming: []
  };

  function analyzeComponent(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      
      componentMetrics.totalComponents++;
      
      // Check component size
      if (stats.size > 10000) { // 10KB threshold
        componentMetrics.largeComponents.push({
          file: filePath,
          size: stats.size,
          lines: content.split('\n').length
        });
      }

      // Check for naming conventions
      const fileName = path.basename(filePath, path.extname(filePath));
      if (fileName !== fileName.charAt(0).toUpperCase() + fileName.slice(1)) {
        componentMetrics.inconsistentNaming.push({
          file: filePath,
          issue: 'Component file should start with uppercase'
        });
      }

      // Check for TypeScript interfaces
      if (!content.includes('interface ') && !content.includes('type ')) {
        componentMetrics.missingPropTypes.push({
          file: filePath,
          issue: 'No TypeScript interfaces or types found'
        });
      }

      // Check for accessibility issues
      if (content.includes('<div') && !content.includes('role=') && !content.includes('aria-')) {
        componentIssues.push({
          file: filePath,
          issue: 'Potential accessibility issue - div without semantic meaning',
          severity: 'warning'
        });
      }

    } catch (error) {
      componentIssues.push({
        file: filePath,
        issue: `Cannot analyze component: ${error.message}`,
        severity: 'error'
      });
    }
  }

  // Analyze all component files
  function walkComponents(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        walkComponents(fullPath);
      } else if (file.name.endsWith('.tsx')) {
        analyzeComponent(fullPath);
      }
    });
  }

  walkComponents('src/components');
  walkComponents('src/pages');

  analysisResults.issues.push(...componentIssues);
  analysisResults.summary.componentMetrics = componentMetrics;
  
  return componentMetrics;
}

// Route analysis
function analyzeRoutes() {
  console.log('🛣️ Analyzing routes...');
  
  const routeIssues = [];
  
  try {
    // Check route definitions
    const routeDefsPath = 'src/routes/route-definitions.ts';
    const routeConfigPath = 'src/routes/routeConfig.tsx';
    
    if (!fs.existsSync(routeDefsPath)) {
      routeIssues.push({
        issue: 'Missing route definitions file',
        severity: 'error'
      });
    }
    
    if (!fs.existsSync(routeConfigPath)) {
      routeIssues.push({
        issue: 'Missing route config file',
        severity: 'error'
      });
    }

    // Analyze route consistency
    if (fs.existsSync(routeDefsPath) && fs.existsSync(routeConfigPath)) {
      const routeDefs = fs.readFileSync(routeDefsPath, 'utf8');
      const routeConfig = fs.readFileSync(routeConfigPath, 'utf8');
      
      // Extract route paths from definitions
      const pathMatches = routeDefs.match(/['"]\/[^'"]*['"]/g) || [];
      const definedPaths = pathMatches.map(p => p.slice(1, -1));
      
      // Check if all defined paths are used in config
      definedPaths.forEach(path => {
        if (!routeConfig.includes(path)) {
          routeIssues.push({
            issue: `Route path "${path}" defined but not used in config`,
            severity: 'warning'
          });
        }
      });
    }

  } catch (error) {
    routeIssues.push({
      issue: `Route analysis error: ${error.message}`,
      severity: 'error'
    });
  }

  analysisResults.issues.push(...routeIssues);
  return routeIssues;
}

// Translation analysis
function analyzeTranslations() {
  console.log('🌐 Analyzing translations...');
  
  const translationIssues = [];
  
  try {
    const enPath = 'src/locales/en.ts';
    const zhPath = 'src/locales/zh.ts';
    
    if (!fs.existsSync(enPath)) {
      translationIssues.push({
        issue: 'Missing English translations file',
        severity: 'error'
      });
      return translationIssues;
    }
    
    if (!fs.existsSync(zhPath)) {
      translationIssues.push({
        issue: 'Missing Chinese translations file',
        severity: 'error'
      });
      return translationIssues;
    }

    // Check for translation consistency
    const enContent = fs.readFileSync(enPath, 'utf8');
    const zhContent = fs.readFileSync(zhPath, 'utf8');
    
    // Check for missing translation markers
    if (zhContent.includes('[翻译缺失:')) {
      const missingCount = (zhContent.match(/\[翻译缺失:/g) || []).length;
      translationIssues.push({
        issue: `${missingCount} missing Chinese translations found`,
        severity: 'warning'
      });
    }

    // Check file sizes for major discrepancies
    const enSize = fs.statSync(enPath).size;
    const zhSize = fs.statSync(zhPath).size;
    const sizeDiff = Math.abs(enSize - zhSize) / enSize;
    
    if (sizeDiff > 0.3) { // 30% difference threshold
      translationIssues.push({
        issue: `Large size difference between translation files (${Math.round(sizeDiff * 100)}%)`,
        severity: 'warning'
      });
    }

  } catch (error) {
    translationIssues.push({
      issue: `Translation analysis error: ${error.message}`,
      severity: 'error'
    });
  }

  analysisResults.issues.push(...translationIssues);
  return translationIssues;
}

// Main analysis function
async function runAnalysis() {
  try {
    console.log('Starting comprehensive codebase analysis...\n');
    
    // Run all analyses
    const structure = analyzeFileStructure();
    const imports = analyzeImports();
    const components = analyzeComponents();
    const routes = analyzeRoutes();
    const translations = analyzeTranslations();
    
    // Generate summary
    analysisResults.summary = {
      totalFiles: Object.values(structure).flat().length,
      totalIssues: analysisResults.issues.length,
      criticalIssues: analysisResults.issues.filter(i => i.severity === 'error').length,
      warnings: analysisResults.issues.filter(i => i.severity === 'warning').length,
      componentMetrics: analysisResults.summary.componentMetrics || {},
      timestamp: new Date().toISOString()
    };

    // Generate recommendations
    generateRecommendations();
    
    // Save results
    fs.writeFileSync(
      'comprehensive-codebase-analysis.json',
      JSON.stringify(analysisResults, null, 2)
    );
    
    // Print summary
    printSummary();
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  }
}

function generateRecommendations() {
  const recommendations = [];
  
  // Based on issues found
  const criticalIssues = analysisResults.issues.filter(i => i.severity === 'error');
  const warnings = analysisResults.issues.filter(i => i.severity === 'warning');
  
  if (criticalIssues.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'Critical Issues',
      action: `Fix ${criticalIssues.length} critical issues immediately`,
      details: criticalIssues.slice(0, 5).map(i => i.issue || i.message)
    });
  }
  
  if (warnings.length > 5) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'Code Quality',
      action: `Address ${warnings.length} warnings to improve code quality`,
      details: ['Review import patterns', 'Improve component structure', 'Enhance accessibility']
    });
  }
  
  // Component-specific recommendations
  const largeComponents = analysisResults.summary.componentMetrics?.largeComponents || [];
  if (largeComponents.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'Component Optimization',
      action: `Refactor ${largeComponents.length} large components`,
      details: largeComponents.map(c => `${c.file} (${c.lines} lines)`)
    });
  }
  
  analysisResults.recommendations = recommendations;
}

function printSummary() {
  console.log('\n📊 ANALYSIS SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total Files Analyzed: ${analysisResults.summary.totalFiles}`);
  console.log(`Critical Issues: ${analysisResults.summary.criticalIssues}`);
  console.log(`Warnings: ${analysisResults.summary.warnings}`);
  console.log(`Total Components: ${analysisResults.summary.componentMetrics?.totalComponents || 0}`);
  
  if (analysisResults.recommendations.length > 0) {
    console.log('\n🎯 TOP RECOMMENDATIONS:');
    analysisResults.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. [${rec.priority}] ${rec.action}`);
    });
  }
  
  console.log('\n✅ Analysis complete! Check comprehensive-codebase-analysis.json for details.');
}

// Run the analysis
runAnalysis();
