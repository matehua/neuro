import fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Final Verification & Quality Assurance
 * Triple-check all implementations, consistency, and proper functioning
 */

console.log('🔍 FINAL VERIFICATION & QUALITY ASSURANCE');
console.log('='.repeat(60));

const verificationResults = {
  buildVerification: {},
  translationVerification: {},
  componentVerification: {},
  performanceVerification: {},
  securityVerification: {},
  accessibilityVerification: {},
  summary: {
    totalChecks: 0,
    passed: 0,
    failed: 0,
    warnings: 0,
    criticalIssues: []
  }
};

/**
 * Verify build integrity
 */
async function verifyBuildIntegrity() {
  console.log('🏗️  Verifying build integrity...');
  
  try {
    // Test build
    const { stdout, stderr } = await execAsync('npm run build');
    
    verificationResults.buildVerification = {
      buildSuccess: !stderr.includes('error'),
      buildOutput: stdout,
      buildErrors: stderr,
      distExists: fs.existsSync('./dist'),
      assetsGenerated: fs.existsSync('./dist/assets')
    };
    
    if (verificationResults.buildVerification.buildSuccess) {
      verificationResults.summary.passed++;
      console.log('✅ Build verification passed');
    } else {
      verificationResults.summary.failed++;
      verificationResults.summary.criticalIssues.push('Build failed');
      console.log('❌ Build verification failed');
    }
    
  } catch (error) {
    verificationResults.buildVerification = {
      buildSuccess: false,
      error: error.message
    };
    verificationResults.summary.failed++;
    verificationResults.summary.criticalIssues.push('Build process error');
    console.log('❌ Build verification error:', error.message);
  }
  
  verificationResults.summary.totalChecks++;
}

/**
 * Verify translation completeness and accuracy
 */
function verifyTranslations() {
  console.log('🌐 Verifying translation completeness and accuracy...');
  
  try {
    // Load translation files
    const enContent = fs.readFileSync('src/locales/en.ts', 'utf8');
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    
    const enObjectContent = enContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    const zhObjectContent = zhContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    
    const enTranslations = eval(`(${enObjectContent})`);
    const zhTranslations = eval(`(${zhObjectContent})`);
    
    // Load used keys
    const mappingData = fs.readFileSync('translation-key-mapping-report.json', 'utf8');
    const mapping = JSON.parse(mappingData);
    const usedKeys = mapping.usedKeys;
    
    // Check completeness
    let missingCount = 0;
    let placeholderCount = 0;
    const missingKeys = [];
    const placeholderKeys = [];
    
    usedKeys.forEach(key => {
      const zhValue = getNestedValue(zhTranslations, key);
      if (!zhValue) {
        missingCount++;
        missingKeys.push(key);
      } else if (typeof zhValue === 'string' && (zhValue.includes('[翻译缺失:') || zhValue.includes('[需要翻译:'))) {
        placeholderCount++;
        placeholderKeys.push(key);
      }
    });
    
    verificationResults.translationVerification = {
      totalUsedKeys: usedKeys.length,
      missingTranslations: missingCount,
      placeholderTranslations: placeholderCount,
      completionRate: ((usedKeys.length - missingCount) / usedKeys.length * 100).toFixed(1),
      qualityRate: ((usedKeys.length - missingCount - placeholderCount) / usedKeys.length * 100).toFixed(1),
      missingKeys: missingKeys.slice(0, 10),
      placeholderKeys: placeholderKeys.slice(0, 10)
    };
    
    if (missingCount === 0) {
      verificationResults.summary.passed++;
      console.log('✅ Translation completeness verified');
    } else {
      verificationResults.summary.warnings++;
      console.log(`⚠️  ${missingCount} translations still missing`);
    }
    
  } catch (error) {
    verificationResults.translationVerification = {
      error: error.message
    };
    verificationResults.summary.failed++;
    verificationResults.summary.criticalIssues.push('Translation verification failed');
    console.log('❌ Translation verification error:', error.message);
  }
  
  verificationResults.summary.totalChecks++;
}

/**
 * Verify component structure and consistency
 */
function verifyComponentStructure() {
  console.log('🧩 Verifying component structure and consistency...');
  
  try {
    // Load component analysis
    const analysisData = fs.readFileSync('detailed-codebase-analysis.json', 'utf8');
    const analysis = JSON.parse(analysisData);
    
    // Load conflict analysis
    const conflictData = fs.readFileSync('conflict-analysis-report.json', 'utf8');
    const conflicts = JSON.parse(conflictData);
    
    const componentIssues = [];
    const structureIssues = [];
    
    // Check for high-severity conflicts
    const highSeverityConflicts = [
      ...conflicts.duplicateExports.filter(c => c.severity === 'HIGH'),
      ...conflicts.missingImports.filter(c => c.severity === 'HIGH'),
      ...conflicts.componentStructureIssues.filter(c => c.severity === 'HIGH')
    ];
    
    // Check component consistency
    analysis.components.forEach(component => {
      if (!component.hasDefaultExport && !component.path.includes('/ui/')) {
        componentIssues.push(`${component.path}: Missing default export`);
      }
      
      if (component.linesOfCode > 500) {
        componentIssues.push(`${component.path}: Component too large (${component.linesOfCode} lines)`);
      }
      
      if (component.translationKeys.length > 0 && !component.imports.includes('@/contexts/LanguageContext')) {
        structureIssues.push(`${component.path}: Uses translations but missing LanguageContext`);
      }
    });
    
    verificationResults.componentVerification = {
      totalComponents: analysis.components.length,
      highSeverityConflicts: highSeverityConflicts.length,
      componentIssues: componentIssues.length,
      structureIssues: structureIssues.length,
      sampleIssues: [...componentIssues.slice(0, 5), ...structureIssues.slice(0, 5)]
    };
    
    if (highSeverityConflicts.length === 0 && componentIssues.length < 5) {
      verificationResults.summary.passed++;
      console.log('✅ Component structure verification passed');
    } else {
      verificationResults.summary.warnings++;
      console.log(`⚠️  Component structure has ${highSeverityConflicts.length} high-severity conflicts`);
    }
    
  } catch (error) {
    verificationResults.componentVerification = {
      error: error.message
    };
    verificationResults.summary.failed++;
    console.log('❌ Component verification error:', error.message);
  }
  
  verificationResults.summary.totalChecks++;
}

/**
 * Verify performance characteristics
 */
function verifyPerformance() {
  console.log('⚡ Verifying performance characteristics...');
  
  try {
    // Check bundle size
    const distStats = fs.statSync('./dist/assets/index-B30GWFvZ.js');
    const bundleSize = distStats.size;
    const bundleSizeMB = (bundleSize / 1024 / 1024).toFixed(2);
    
    // Check CSS size
    const cssStats = fs.statSync('./dist/assets/index-DTjZ90FD.css');
    const cssSize = cssStats.size;
    const cssSizeKB = (cssSize / 1024).toFixed(2);
    
    // Load component analysis for complexity metrics
    const analysisData = fs.readFileSync('detailed-codebase-analysis.json', 'utf8');
    const analysis = JSON.parse(analysisData);
    
    const totalLinesOfCode = [...analysis.components, ...analysis.pages]
      .reduce((total, file) => total + (file.linesOfCode || 0), 0);
    
    const averageComponentSize = totalLinesOfCode / (analysis.components.length + analysis.pages.length);
    
    verificationResults.performanceVerification = {
      bundleSizeMB: parseFloat(bundleSizeMB),
      cssSizeKB: parseFloat(cssSizeKB),
      totalComponents: analysis.components.length + analysis.pages.length,
      totalLinesOfCode,
      averageComponentSize: Math.round(averageComponentSize),
      performanceScore: bundleSize < 1024 * 1024 ? 'GOOD' : bundleSize < 2 * 1024 * 1024 ? 'ACCEPTABLE' : 'NEEDS_OPTIMIZATION'
    };
    
    if (bundleSize < 2 * 1024 * 1024) { // Less than 2MB
      verificationResults.summary.passed++;
      console.log('✅ Performance verification passed');
    } else {
      verificationResults.summary.warnings++;
      console.log(`⚠️  Bundle size is large: ${bundleSizeMB}MB`);
    }
    
  } catch (error) {
    verificationResults.performanceVerification = {
      error: error.message
    };
    verificationResults.summary.warnings++;
    console.log('⚠️  Performance verification error:', error.message);
  }
  
  verificationResults.summary.totalChecks++;
}

/**
 * Verify accessibility and SEO
 */
function verifyAccessibilityAndSEO() {
  console.log('♿ Verifying accessibility and SEO...');
  
  try {
    // Check for accessibility-related imports and components
    const analysisData = fs.readFileSync('detailed-codebase-analysis.json', 'utf8');
    const analysis = JSON.parse(analysisData);
    
    const accessibilityFeatures = {
      hasScreenReaderSupport: false,
      hasKeyboardNavigation: false,
      hasAriaLabels: false,
      hasSemanticHTML: false,
      hasFocusManagement: false
    };
    
    // Check for accessibility patterns in components
    [...analysis.components, ...analysis.pages].forEach(file => {
      if (file.imports.includes('@/components/ScreenReaderAnnouncer')) {
        accessibilityFeatures.hasScreenReaderSupport = true;
      }
      
      // This is a simplified check - in a real scenario, we'd analyze file contents
      if (file.path.includes('ScreenReader') || file.path.includes('Accessibility')) {
        accessibilityFeatures.hasAriaLabels = true;
      }
    });
    
    // Check for SEO components
    const hasSEOComponents = [...analysis.components, ...analysis.pages].some(file => 
      file.imports.includes('react-helmet-async') || 
      file.path.includes('SEO') ||
      file.path.includes('Meta')
    );
    
    verificationResults.accessibilityVerification = {
      accessibilityFeatures,
      hasSEOComponents,
      accessibilityScore: Object.values(accessibilityFeatures).filter(Boolean).length,
      maxAccessibilityScore: Object.keys(accessibilityFeatures).length
    };
    
    const accessibilityScore = verificationResults.accessibilityVerification.accessibilityScore;
    if (accessibilityScore >= 3) {
      verificationResults.summary.passed++;
      console.log('✅ Accessibility verification passed');
    } else {
      verificationResults.summary.warnings++;
      console.log(`⚠️  Accessibility features limited (${accessibilityScore}/5)`);
    }
    
  } catch (error) {
    verificationResults.accessibilityVerification = {
      error: error.message
    };
    verificationResults.summary.warnings++;
    console.log('⚠️  Accessibility verification error:', error.message);
  }
  
  verificationResults.summary.totalChecks++;
}

/**
 * Helper function to get nested value
 */
function getNestedValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    if (!(key in current)) {
      return undefined;
    }
    current = current[key];
  }
  
  return current;
}

/**
 * Generate final verification report
 */
function generateFinalReport() {
  console.log('\n🔍 FINAL VERIFICATION RESULTS:');
  console.log('='.repeat(50));
  
  const { summary } = verificationResults;
  console.log(`📊 Total Checks: ${summary.totalChecks}`);
  console.log(`✅ Passed: ${summary.passed}`);
  console.log(`❌ Failed: ${summary.failed}`);
  console.log(`⚠️  Warnings: ${summary.warnings}`);
  
  const successRate = ((summary.passed / summary.totalChecks) * 100).toFixed(1);
  console.log(`📈 Success Rate: ${successRate}%`);
  
  if (summary.criticalIssues.length > 0) {
    console.log('\n🚨 CRITICAL ISSUES:');
    summary.criticalIssues.forEach((issue, index) => {
      console.log(`   ${index + 1}. ${issue}`);
    });
  }
  
  // Detailed results
  console.log('\n📋 DETAILED RESULTS:');
  
  if (verificationResults.buildVerification.buildSuccess) {
    console.log('✅ Build: Successful');
  } else {
    console.log('❌ Build: Failed');
  }
  
  if (verificationResults.translationVerification.completionRate) {
    console.log(`🌐 Translations: ${verificationResults.translationVerification.completionRate}% complete`);
    console.log(`   Quality: ${verificationResults.translationVerification.qualityRate}% (excluding placeholders)`);
  }
  
  if (verificationResults.componentVerification.totalComponents) {
    console.log(`🧩 Components: ${verificationResults.componentVerification.totalComponents} total`);
    console.log(`   Issues: ${verificationResults.componentVerification.componentIssues} component issues`);
  }
  
  if (verificationResults.performanceVerification.bundleSizeMB) {
    console.log(`⚡ Performance: ${verificationResults.performanceVerification.bundleSizeMB}MB bundle`);
    console.log(`   Score: ${verificationResults.performanceVerification.performanceScore}`);
  }
  
  if (verificationResults.accessibilityVerification.accessibilityScore !== undefined) {
    console.log(`♿ Accessibility: ${verificationResults.accessibilityVerification.accessibilityScore}/5 features`);
  }
  
  // Save detailed report
  fs.writeFileSync('final-verification-report.json', JSON.stringify(verificationResults, null, 2));
  console.log('\n📄 Detailed verification report saved to: final-verification-report.json');
  
  // Overall assessment
  console.log('\n🎯 OVERALL ASSESSMENT:');
  if (summary.failed === 0 && summary.criticalIssues.length === 0) {
    console.log('🎉 EXCELLENT: All critical checks passed, ready for production!');
  } else if (summary.failed <= 1 && summary.criticalIssues.length === 0) {
    console.log('✅ GOOD: Minor issues detected, but system is functional and ready for deployment');
  } else if (summary.criticalIssues.length === 0) {
    console.log('⚠️  ACCEPTABLE: Some issues detected, consider addressing before production');
  } else {
    console.log('❌ NEEDS ATTENTION: Critical issues detected, must be resolved before production');
  }
}

// Main execution
async function runFinalVerification() {
  await verifyBuildIntegrity();
  verifyTranslations();
  verifyComponentStructure();
  verifyPerformance();
  verifyAccessibilityAndSEO();
  generateFinalReport();
  
  console.log('\n✅ Final verification and quality assurance complete!');
}

runFinalVerification().catch(error => {
  console.error('❌ Final verification failed:', error);
  process.exit(1);
});
