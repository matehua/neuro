import fs from 'fs';
import path from 'path';

/**
 * ACCURATE ARCHITECTURAL ANALYSIS
 * Focused analysis of real architectural issues without false positives
 */

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

let issues = [];
let warnings = [];
let suggestions = [];

/**
 * 1. COMPONENT STRUCTURE ANALYSIS
 */
function analyzeComponentStructure() {
  console.log('🧩 ANALYZING COMPONENT STRUCTURE...');
  
  const componentDirs = [
    path.join(SRC_DIR, 'components'),
    path.join(SRC_DIR, 'pages')
  ];
  
  let totalComponents = 0;
  let componentsWithIssues = 0;
  
  componentDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    function scanDir(currentDir, prefix = '') {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath, `${prefix}${item}/`);
        } else if (item.endsWith('.tsx')) {
          totalComponents++;
          
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const relativePath = `${prefix}${item}`;
            
            // Check for critical issues
            if (!content.includes('export default') && 
                !content.includes('export const') && 
                !content.includes('export function') &&
                !content.includes('export {')) {
              
              componentsWithIssues++;
              issues.push({
                type: 'NO_EXPORT',
                severity: 'HIGH',
                file: relativePath,
                message: 'Component has no export statement',
                fix: 'Add proper export statement'
              });
            }
            
            // Check for React import (if using JSX)
            if (content.includes('<') && content.includes('>') && !content.includes('import React')) {
              warnings.push({
                type: 'MISSING_REACT_IMPORT',
                severity: 'MEDIUM',
                file: relativePath,
                message: 'Component uses JSX but may be missing React import',
                fix: 'Add React import if needed for older React versions'
              });
            }
            
            // Check for large components
            const lines = content.split('\n').length;
            if (lines > 400) {
              suggestions.push({
                type: 'LARGE_COMPONENT',
                severity: 'LOW',
                file: relativePath,
                message: `Component has ${lines} lines - consider splitting`,
                fix: 'Break down into smaller components'
              });
            }
            
          } catch (error) {
            issues.push({
              type: 'FILE_READ_ERROR',
              severity: 'HIGH',
              file: relativePath,
              message: `Cannot read file: ${error.message}`,
              fix: 'Check file permissions and syntax'
            });
          }
        }
      });
    }
    
    scanDir(dir);
  });
  
  console.log(`   📊 Total components analyzed: ${totalComponents}`);
  console.log(`   ❌ Components with issues: ${componentsWithIssues}`);
}

/**
 * 2. ROUTE ARCHITECTURE ANALYSIS
 */
function analyzeRouteArchitecture() {
  console.log('🛣️  ANALYZING ROUTE ARCHITECTURE...');
  
  try {
    const routeConfigPath = path.join(SRC_DIR, 'routes', 'routeConfig.tsx');
    const routeDefsPath = path.join(SRC_DIR, 'routes', 'route-definitions.ts');
    
    if (!fs.existsSync(routeConfigPath)) {
      issues.push({
        type: 'MISSING_ROUTE_CONFIG',
        severity: 'CRITICAL',
        message: 'routeConfig.tsx file missing',
        fix: 'Create route configuration file'
      });
      return;
    }
    
    if (!fs.existsSync(routeDefsPath)) {
      issues.push({
        type: 'MISSING_ROUTE_DEFINITIONS',
        severity: 'CRITICAL',
        message: 'route-definitions.ts file missing',
        fix: 'Create route definitions file'
      });
      return;
    }
    
    const routeConfigContent = fs.readFileSync(routeConfigPath, 'utf8');
    const routeDefsContent = fs.readFileSync(routeDefsPath, 'utf8');
    
    // Count actual route registrations
    const registrationMatches = routeConfigContent.match(/\[ROUTE_PATHS\.[^\]]+\]:\s*\(\)\s*=>\s*import/g) || [];
    const registeredRoutes = registrationMatches.length;
    
    // Count route definitions
    const pathMatches = routeDefsContent.match(/\w+:\s*['"`]\/[^'"`]*['"`]/g) || [];
    const definedRoutes = pathMatches.length;
    
    console.log(`   📍 Registered routes: ${registeredRoutes}`);
    console.log(`   📍 Defined routes: ${definedRoutes}`);
    
    if (registeredRoutes < definedRoutes) {
      const difference = definedRoutes - registeredRoutes;
      warnings.push({
        type: 'ROUTE_REGISTRATION_MISMATCH',
        severity: 'MEDIUM',
        message: `${difference} routes may not be properly registered`,
        fix: 'Verify all route definitions have corresponding registrations'
      });
    }
    
  } catch (error) {
    issues.push({
      type: 'ROUTE_ANALYSIS_ERROR',
      severity: 'HIGH',
      message: `Error analyzing routes: ${error.message}`,
      fix: 'Check route configuration files syntax'
    });
  }
}

/**
 * 3. TRANSLATION CONSISTENCY
 */
function analyzeTranslationConsistency() {
  console.log('🌐 ANALYZING TRANSLATION CONSISTENCY...');
  
  try {
    const enPath = path.join(SRC_DIR, 'locales', 'en.ts');
    const zhPath = path.join(SRC_DIR, 'locales', 'zh.ts');
    
    if (!fs.existsSync(enPath) || !fs.existsSync(zhPath)) {
      issues.push({
        type: 'MISSING_TRANSLATION_FILES',
        severity: 'HIGH',
        message: 'Translation files missing',
        fix: 'Ensure both en.ts and zh.ts exist'
      });
      return;
    }
    
    const enContent = fs.readFileSync(enPath, 'utf8');
    const zhContent = fs.readFileSync(zhPath, 'utf8');
    
    // Basic structure validation
    const enValid = enContent.includes('export default') && enContent.includes('{');
    const zhValid = zhContent.includes('export default') && zhContent.includes('{');
    
    if (!enValid || !zhValid) {
      issues.push({
        type: 'TRANSLATION_STRUCTURE_ERROR',
        severity: 'HIGH',
        message: 'Translation files have structural issues',
        fix: 'Ensure translation files export default objects'
      });
    }
    
    // Count approximate translation keys
    const enKeys = (enContent.match(/\w+:/g) || []).length;
    const zhKeys = (zhContent.match(/\w+:/g) || []).length;
    
    console.log(`   🔤 English keys (approx): ${enKeys}`);
    console.log(`   🔤 Chinese keys (approx): ${zhKeys}`);
    
    if (Math.abs(enKeys - zhKeys) > 50) {
      warnings.push({
        type: 'TRANSLATION_KEY_MISMATCH',
        severity: 'MEDIUM',
        message: `Significant difference in translation keys: EN(${enKeys}) vs ZH(${zhKeys})`,
        fix: 'Review and synchronize translation keys'
      });
    }
    
  } catch (error) {
    issues.push({
      type: 'TRANSLATION_ANALYSIS_ERROR',
      severity: 'HIGH',
      message: `Error analyzing translations: ${error.message}`,
      fix: 'Check translation files syntax'
    });
  }
}

/**
 * 4. DEPENDENCY CONSISTENCY
 */
function analyzeDependencyConsistency() {
  console.log('📦 ANALYZING DEPENDENCY CONSISTENCY...');
  
  try {
    const packageJsonPath = path.join(PROJECT_ROOT, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      issues.push({
        type: 'MISSING_PACKAGE_JSON',
        severity: 'CRITICAL',
        message: 'package.json missing',
        fix: 'Create package.json file'
      });
      return;
    }
    
    const packageContent = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageContent);
    
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`   📦 Dependencies: ${dependencies.length}`);
    console.log(`   🔧 Dev Dependencies: ${devDependencies.length}`);
    
    // Check for critical dependencies
    const criticalDeps = ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'];
    const missingCritical = criticalDeps.filter(dep => !dependencies.includes(dep));
    
    if (missingCritical.length > 0) {
      issues.push({
        type: 'MISSING_CRITICAL_DEPENDENCIES',
        severity: 'HIGH',
        message: `Missing critical dependencies: ${missingCritical.join(', ')}`,
        fix: 'Install missing dependencies'
      });
    }
    
  } catch (error) {
    issues.push({
      type: 'DEPENDENCY_ANALYSIS_ERROR',
      severity: 'HIGH',
      message: `Error analyzing dependencies: ${error.message}`,
      fix: 'Check package.json syntax'
    });
  }
}

/**
 * MAIN EXECUTION
 */
function main() {
  console.log('🔬 ACCURATE ARCHITECTURAL ANALYSIS');
  console.log('='.repeat(50));
  
  analyzeComponentStructure();
  analyzeRouteArchitecture();
  analyzeTranslationConsistency();
  analyzeDependencyConsistency();
  
  // Generate summary report
  console.log('\n📊 ARCHITECTURAL ANALYSIS REPORT');
  console.log('='.repeat(40));
  
  const criticalIssues = issues.filter(i => i.severity === 'CRITICAL');
  const highIssues = issues.filter(i => i.severity === 'HIGH');
  const mediumIssues = [...issues.filter(i => i.severity === 'MEDIUM'), ...warnings];
  const lowIssues = suggestions;
  
  console.log(`\n🚨 CRITICAL ISSUES (${criticalIssues.length}):`);
  criticalIssues.forEach(issue => {
    console.log(`   ❌ ${issue.type}: ${issue.message}`);
    console.log(`      Fix: ${issue.fix}`);
  });
  
  console.log(`\n⚠️  HIGH PRIORITY ISSUES (${highIssues.length}):`);
  highIssues.forEach(issue => {
    console.log(`   🔴 ${issue.type}: ${issue.message}`);
    console.log(`      Fix: ${issue.fix}`);
  });
  
  console.log(`\n⚡ MEDIUM PRIORITY ISSUES (${mediumIssues.length}):`);
  mediumIssues.forEach(issue => {
    console.log(`   🟡 ${issue.type}: ${issue.message}`);
    console.log(`      Fix: ${issue.fix}`);
  });
  
  console.log(`\n💡 SUGGESTIONS (${lowIssues.length}):`);
  lowIssues.slice(0, 5).forEach(issue => { // Show only first 5 suggestions
    console.log(`   💡 ${issue.type}: ${issue.message}`);
  });
  
  // Save detailed analysis
  const analysis = {
    timestamp: new Date().toISOString(),
    summary: {
      criticalIssues: criticalIssues.length,
      highIssues: highIssues.length,
      mediumIssues: mediumIssues.length,
      suggestions: lowIssues.length,
      totalIssues: criticalIssues.length + highIssues.length + mediumIssues.length
    },
    issues: {
      critical: criticalIssues,
      high: highIssues,
      medium: mediumIssues,
      suggestions: lowIssues
    }
  };
  
  fs.writeFileSync('accurate-architecture-analysis.json', JSON.stringify(analysis, null, 2));
  console.log('\n💾 Detailed analysis saved to: accurate-architecture-analysis.json');
  
  if (criticalIssues.length > 0) {
    console.log('\n🚨 CRITICAL ISSUES FOUND - IMMEDIATE ACTION REQUIRED');
    process.exit(1);
  } else if (highIssues.length > 0) {
    console.log('\n⚠️  HIGH PRIORITY ISSUES FOUND - ACTION RECOMMENDED');
    process.exit(1);
  } else {
    console.log('\n✅ ARCHITECTURE ANALYSIS COMPLETE - NO CRITICAL ISSUES');
    process.exit(0);
  }
}

main();
