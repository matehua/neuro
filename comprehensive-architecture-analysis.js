import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Architecture Analysis
 * Identifies all structural issues, inconsistencies, and missing components
 */

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

let issues = [];
let warnings = [];
let suggestions = [];

/**
 * 1. ROUTE CONSISTENCY ANALYSIS
 */
function analyzeRouteConsistency() {
  console.log('🔍 ANALYZING ROUTE CONSISTENCY...');
  
  // Get all patient resources files
  const patientResourcesDir = path.join(SRC_DIR, 'pages', 'patient-resources');
  const patientResourcesFiles = [];
  
  if (fs.existsSync(patientResourcesDir)) {
    const files = fs.readdirSync(patientResourcesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') && !file.includes('conditions')) {
        patientResourcesFiles.push(file.replace('.tsx', ''));
      }
    });
  }
  
  // Expected routes from route-definitions.ts
  const expectedPatientResourcesRoutes = [
    'ConditionInformation',
    'SpineConditionsLibrary',
    'ExerciseLibrary',
    'IndividualSpineHealthProgramme',
    'SpineAndBrainHealth',
    'CervicalSpineInjury',
    'CervicalSpineExercises',
    'SpineSafeExercises',
    'ExercisePainMedRisks',
    'AgeSpecificSpineRecommendations',
    'YouthfulSpine',
    'LifestyleModifications',
    'AssessmentTools',
    'PatientDashboard',
    'SpineHealthApp'
  ];
  
  // Check for missing route definitions
  patientResourcesFiles.forEach(file => {
    if (!expectedPatientResourcesRoutes.includes(file)) {
      issues.push({
        type: 'MISSING_ROUTE_DEFINITION',
        severity: 'HIGH',
        file: `src/pages/patient-resources/${file}.tsx`,
        message: `File exists but no route definition found in route-definitions.ts`,
        fix: `Add route definition for ${file}`
      });
    }
  });
  
  // Check for missing files
  expectedPatientResourcesRoutes.forEach(route => {
    if (!patientResourcesFiles.includes(route)) {
      issues.push({
        type: 'MISSING_FILE',
        severity: 'HIGH',
        route: route,
        message: `Route defined but file src/pages/patient-resources/${route}.tsx does not exist`,
        fix: `Create missing file or remove route definition`
      });
    }
  });
  
  console.log(`   Found ${patientResourcesFiles.length} patient resources files`);
  console.log(`   Expected ${expectedPatientResourcesRoutes.length} route definitions`);
}

/**
 * 2. COMPONENT IMPORT ANALYSIS
 */
function analyzeComponentImports() {
  console.log('🔍 ANALYZING COMPONENT IMPORTS...');
  
  const componentFiles = [];
  const componentsDir = path.join(SRC_DIR, 'components');
  
  function scanDirectory(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, `${prefix}${item}/`);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        componentFiles.push({
          name: item.replace(/\.(tsx|ts)$/, ''),
          path: `${prefix}${item}`,
          fullPath: fullPath
        });
      }
    });
  }
  
  scanDirectory(componentsDir);
  
  // Check for duplicate component names
  const componentNames = {};
  componentFiles.forEach(comp => {
    if (componentNames[comp.name]) {
      warnings.push({
        type: 'DUPLICATE_COMPONENT_NAME',
        severity: 'MEDIUM',
        name: comp.name,
        paths: [componentNames[comp.name], comp.path],
        message: `Duplicate component name: ${comp.name}`,
        fix: 'Rename one of the components to avoid conflicts'
      });
    } else {
      componentNames[comp.name] = comp.path;
    }
  });
  
  console.log(`   Found ${componentFiles.length} component files`);
  console.log(`   Found ${Object.keys(componentNames).length} unique component names`);
}

/**
 * 3. MISSING DEPENDENCIES ANALYSIS
 */
function analyzeMissingDependencies() {
  console.log('🔍 ANALYZING MISSING DEPENDENCIES...');
  
  // Check for missing patient resources routes
  const missingRoutes = [
    // All routes should now be properly registered
  ];
  
  missingRoutes.forEach(route => {
    const filePath = path.join(SRC_DIR, 'pages', 'patient-resources', `${route}.tsx`);
    if (fs.existsSync(filePath)) {
      issues.push({
        type: 'MISSING_ROUTE_REGISTRATION',
        severity: 'HIGH',
        file: `src/pages/patient-resources/${route}.tsx`,
        message: `File exists but not registered in routeConfig.tsx`,
        fix: `Add route registration in routeConfig.tsx and route definition in route-definitions.ts`
      });
    }
  });
}

/**
 * 4. DUPLICATE FILES ANALYSIS
 */
function analyzeDuplicateFiles() {
  console.log('🔍 ANALYZING DUPLICATE FILES...');
  
  // Check for duplicate patient resources files
  const duplicates = [
    // Duplicate file has been removed
  ];
  
  duplicates.forEach(dup => {
    const file1Exists = fs.existsSync(path.join(PROJECT_ROOT, dup.file1));
    const file2Exists = fs.existsSync(path.join(PROJECT_ROOT, dup.file2));
    
    if (file1Exists && file2Exists) {
      issues.push({
        type: 'DUPLICATE_FILES',
        severity: 'HIGH',
        files: [dup.file1, dup.file2],
        message: dup.issue,
        fix: 'Consolidate into single file and update all references'
      });
    }
  });
}

/**
 * 5. TRANSLATION CONSISTENCY ANALYSIS
 */
function analyzeTranslationConsistency() {
  console.log('🔍 ANALYZING TRANSLATION CONSISTENCY...');
  
  // Check if translation files exist
  const enPath = path.join(SRC_DIR, 'locales', 'en.ts');
  const zhPath = path.join(SRC_DIR, 'locales', 'zh.ts');
  
  if (!fs.existsSync(enPath)) {
    issues.push({
      type: 'MISSING_TRANSLATION_FILE',
      severity: 'CRITICAL',
      file: 'src/locales/en.ts',
      message: 'English translation file missing',
      fix: 'Create English translation file'
    });
  }
  
  if (!fs.existsSync(zhPath)) {
    issues.push({
      type: 'MISSING_TRANSLATION_FILE', 
      severity: 'CRITICAL',
      file: 'src/locales/zh.ts',
      message: 'Chinese translation file missing',
      fix: 'Create Chinese translation file'
    });
  }
}

/**
 * 6. GENERATE COMPREHENSIVE REPORT
 */
function generateReport() {
  console.log('\n📊 COMPREHENSIVE ARCHITECTURE ANALYSIS REPORT');
  console.log('='.repeat(60));
  
  console.log(`\n🚨 CRITICAL ISSUES (${issues.filter(i => i.severity === 'CRITICAL').length}):`);
  issues.filter(i => i.severity === 'CRITICAL').forEach(issue => {
    console.log(`   ❌ ${issue.type}: ${issue.message}`);
    console.log(`      Fix: ${issue.fix}`);
  });
  
  console.log(`\n⚠️  HIGH PRIORITY ISSUES (${issues.filter(i => i.severity === 'HIGH').length}):`);
  issues.filter(i => i.severity === 'HIGH').forEach(issue => {
    console.log(`   🔴 ${issue.type}: ${issue.message}`);
    console.log(`      Fix: ${issue.fix}`);
  });
  
  console.log(`\n⚡ MEDIUM PRIORITY ISSUES (${issues.filter(i => i.severity === 'MEDIUM').length}):`);
  issues.filter(i => i.severity === 'MEDIUM').forEach(issue => {
    console.log(`   🟡 ${issue.type}: ${issue.message}`);
    console.log(`      Fix: ${issue.fix}`);
  });
  
  console.log(`\n📋 SUMMARY:`);
  console.log(`   Total Issues: ${issues.length}`);
  console.log(`   Critical: ${issues.filter(i => i.severity === 'CRITICAL').length}`);
  console.log(`   High: ${issues.filter(i => i.severity === 'HIGH').length}`);
  console.log(`   Medium: ${issues.filter(i => i.severity === 'MEDIUM').length}`);
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalIssues: issues.length,
      critical: issues.filter(i => i.severity === 'CRITICAL').length,
      high: issues.filter(i => i.severity === 'HIGH').length,
      medium: issues.filter(i => i.severity === 'MEDIUM').length
    },
    issues: issues,
    warnings: warnings,
    suggestions: suggestions
  };
  
  fs.writeFileSync('architecture-analysis-report.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Detailed report saved to: architecture-analysis-report.json');
}

/**
 * MAIN EXECUTION
 */
function main() {
  console.log('🏗️  COMPREHENSIVE ARCHITECTURE ANALYSIS');
  console.log('='.repeat(50));
  
  analyzeRouteConsistency();
  analyzeComponentImports();
  analyzeMissingDependencies();
  analyzeDuplicateFiles();
  analyzeTranslationConsistency();
  
  generateReport();
  
  if (issues.filter(i => i.severity === 'CRITICAL').length > 0) {
    console.log('\n🚨 CRITICAL ISSUES FOUND - IMMEDIATE ACTION REQUIRED');
    process.exit(1);
  } else if (issues.filter(i => i.severity === 'HIGH').length > 0) {
    console.log('\n⚠️  HIGH PRIORITY ISSUES FOUND - ACTION RECOMMENDED');
    process.exit(1);
  } else {
    console.log('\n✅ ARCHITECTURE ANALYSIS COMPLETE - NO CRITICAL ISSUES');
    process.exit(0);
  }
}

main();
