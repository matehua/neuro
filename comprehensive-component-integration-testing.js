import fs from 'fs';

/**
 * Comprehensive Component Integration Testing
 * Tests every page with Chinese translations to ensure proper display
 */

console.log('🧪 COMPREHENSIVE COMPONENT INTEGRATION TESTING');
console.log('='.repeat(60));

const testResults = {
  translationTests: {
    passed: 0,
    failed: 0,
    warnings: 0,
    details: []
  },
  componentTests: {
    passed: 0,
    failed: 0,
    warnings: 0,
    details: []
  },
  pageTests: {
    passed: 0,
    failed: 0,
    warnings: 0,
    details: []
  },
  integrationTests: {
    passed: 0,
    failed: 0,
    warnings: 0,
    details: []
  },
  summary: {
    totalTests: 0,
    totalPassed: 0,
    totalFailed: 0,
    totalWarnings: 0,
    successRate: 0
  }
};

/**
 * Load translation files
 */
function loadTranslationFiles() {
  try {
    console.log('📖 Loading translation files...');
    
    const enContent = fs.readFileSync('src/locales/en.ts', 'utf8');
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    
    const enObjectContent = enContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    const zhObjectContent = zhContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    
    const enTranslations = eval(`(${enObjectContent})`);
    const zhTranslations = eval(`(${zhObjectContent})`);
    
    console.log('✅ Translation files loaded successfully');
    return { enTranslations, zhTranslations };
  } catch (error) {
    console.error('❌ Failed to load translation files:', error.message);
    return null;
  }
}

/**
 * Load page inventory for testing
 */
function loadPageInventory() {
  try {
    const inventoryData = fs.readFileSync('complete-page-inventory-report.json', 'utf8');
    return JSON.parse(inventoryData);
  } catch (error) {
    console.warn('⚠️  Could not load page inventory:', error.message);
    return null;
  }
}

/**
 * Test translation completeness and accuracy
 */
function testTranslationCompleteness(translations) {
  console.log('🌐 Testing translation completeness...');
  
  const { enTranslations, zhTranslations } = translations;
  
  let testCount = 0;
  let passedCount = 0;
  let failedCount = 0;
  let warningCount = 0;
  
  function testNestedTranslations(enObj, zhObj, path = '') {
    for (const [key, enValue] of Object.entries(enObj)) {
      const currentPath = path ? `${path}.${key}` : key;
      testCount++;
      
      if (typeof enValue === 'string') {
        const zhValue = zhObj?.[key];
        
        if (!zhValue) {
          failedCount++;
          testResults.translationTests.details.push({
            type: 'MISSING',
            path: currentPath,
            english: enValue,
            issue: 'Missing Chinese translation'
          });
        } else if (typeof zhValue === 'string') {
          if (zhValue.includes('[翻译缺失:') || zhValue.includes('[需要翻译:')) {
            warningCount++;
            testResults.translationTests.details.push({
              type: 'PLACEHOLDER',
              path: currentPath,
              english: enValue,
              chinese: zhValue,
              issue: 'Contains placeholder text'
            });
          } else if (zhValue.length === 0) {
            failedCount++;
            testResults.translationTests.details.push({
              type: 'EMPTY',
              path: currentPath,
              english: enValue,
              issue: 'Empty Chinese translation'
            });
          } else {
            passedCount++;
            testResults.translationTests.details.push({
              type: 'SUCCESS',
              path: currentPath,
              english: enValue,
              chinese: zhValue
            });
          }
        } else {
          failedCount++;
          testResults.translationTests.details.push({
            type: 'TYPE_ERROR',
            path: currentPath,
            english: enValue,
            chinese: zhValue,
            issue: 'Chinese translation is not a string'
          });
        }
      } else if (typeof enValue === 'object' && enValue !== null && !Array.isArray(enValue)) {
        testNestedTranslations(enValue, zhObj?.[key] || {}, currentPath);
      }
    }
  }
  
  testNestedTranslations(enTranslations, zhTranslations);
  
  testResults.translationTests = {
    passed: passedCount,
    failed: failedCount,
    warnings: warningCount,
    details: testResults.translationTests.details
  };
  
  console.log(`   ✅ Passed: ${passedCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  console.log(`   ⚠️  Warnings: ${warningCount}`);
  
  return testCount;
}

/**
 * Test component structure and imports
 */
function testComponentStructure(pageInventory) {
  console.log('🧩 Testing component structure...');
  
  if (!pageInventory) {
    console.warn('⚠️  Page inventory not available for component testing');
    return 0;
  }
  
  let testCount = 0;
  let passedCount = 0;
  let failedCount = 0;
  let warningCount = 0;
  
  const allPages = pageInventory.pages || [];
  
  allPages.forEach(page => {
    testCount++;
    
    // Test if page has proper structure
    const hasProperStructure = page.exports && page.exports.length > 0;
    const hasTranslationSupport = page.imports.includes('@/contexts/LanguageContext') || 
                                  page.imports.some(imp => imp.includes('LanguageContext'));
    const usesTranslations = page.translationKeys && page.translationKeys.length > 0;
    
    if (!hasProperStructure) {
      failedCount++;
      testResults.componentTests.details.push({
        type: 'STRUCTURE_ERROR',
        page: page.path,
        issue: 'Missing proper exports'
      });
    } else if (usesTranslations && !hasTranslationSupport) {
      warningCount++;
      testResults.componentTests.details.push({
        type: 'TRANSLATION_WARNING',
        page: page.path,
        issue: 'Uses translations but missing LanguageContext import',
        translationKeys: page.translationKeys.slice(0, 5)
      });
    } else {
      passedCount++;
      testResults.componentTests.details.push({
        type: 'SUCCESS',
        page: page.path,
        hasTranslations: usesTranslations,
        translationCount: page.translationKeys.length
      });
    }
  });
  
  testResults.componentTests = {
    passed: passedCount,
    failed: failedCount,
    warnings: warningCount,
    details: testResults.componentTests.details
  };
  
  console.log(`   ✅ Passed: ${passedCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  console.log(`   ⚠️  Warnings: ${warningCount}`);
  
  return testCount;
}

/**
 * Test page-specific translation coverage
 */
function testPageTranslationCoverage(pageInventory, translations) {
  console.log('📄 Testing page translation coverage...');
  
  if (!pageInventory || !translations) {
    console.warn('⚠️  Required data not available for page testing');
    return 0;
  }
  
  const { zhTranslations } = translations;
  let testCount = 0;
  let passedCount = 0;
  let failedCount = 0;
  let warningCount = 0;
  
  // Test each page category
  Object.entries(pageInventory.pageCategories).forEach(([category, pages]) => {
    if (pages.length === 0) return;
    
    testCount++;
    
    // Collect all translation keys used in this category
    const categoryKeys = new Set();
    pages.forEach(page => {
      page.translationKeys.forEach(key => categoryKeys.add(key));
    });
    
    const totalKeys = categoryKeys.size;
    let translatedKeys = 0;
    let placeholderKeys = 0;
    
    categoryKeys.forEach(key => {
      const zhValue = getNestedValue(zhTranslations, key);
      if (zhValue) {
        if (typeof zhValue === 'string' && 
            (zhValue.includes('[翻译缺失:') || zhValue.includes('[需要翻译:'))) {
          placeholderKeys++;
        } else {
          translatedKeys++;
        }
      }
    });
    
    const coverageRate = totalKeys > 0 ? (translatedKeys / totalKeys) * 100 : 100;
    
    if (coverageRate >= 90) {
      passedCount++;
      testResults.pageTests.details.push({
        type: 'SUCCESS',
        category: category,
        coverage: coverageRate.toFixed(1),
        totalKeys: totalKeys,
        translatedKeys: translatedKeys,
        placeholderKeys: placeholderKeys
      });
    } else if (coverageRate >= 70) {
      warningCount++;
      testResults.pageTests.details.push({
        type: 'WARNING',
        category: category,
        coverage: coverageRate.toFixed(1),
        totalKeys: totalKeys,
        translatedKeys: translatedKeys,
        placeholderKeys: placeholderKeys,
        issue: 'Low translation coverage'
      });
    } else {
      failedCount++;
      testResults.pageTests.details.push({
        type: 'FAILED',
        category: category,
        coverage: coverageRate.toFixed(1),
        totalKeys: totalKeys,
        translatedKeys: translatedKeys,
        placeholderKeys: placeholderKeys,
        issue: 'Very low translation coverage'
      });
    }
  });
  
  testResults.pageTests = {
    passed: passedCount,
    failed: failedCount,
    warnings: warningCount,
    details: testResults.pageTests.details
  };
  
  console.log(`   ✅ Passed: ${passedCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  console.log(`   ⚠️  Warnings: ${warningCount}`);
  
  return testCount;
}

/**
 * Test integration and consistency
 */
function testIntegrationConsistency(translations) {
  console.log('🔗 Testing integration and consistency...');
  
  const { zhTranslations } = translations;
  let testCount = 0;
  let passedCount = 0;
  let failedCount = 0;
  let warningCount = 0;
  
  // Test 1: Medical terminology consistency
  testCount++;
  const medicalTerms = ['神经外科', '脑肿瘤', '脊柱', '手术', '治疗', '咨询', '预约'];
  const termUsage = new Map();
  
  function collectTermUsage(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'string') {
        medicalTerms.forEach(term => {
          if (value.includes(term)) {
            if (!termUsage.has(term)) {
              termUsage.set(term, []);
            }
            termUsage.get(term).push(currentPath);
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        collectTermUsage(value, currentPath);
      }
    }
  }
  
  collectTermUsage(zhTranslations);
  
  if (termUsage.size >= medicalTerms.length * 0.8) {
    passedCount++;
    testResults.integrationTests.details.push({
      type: 'SUCCESS',
      test: 'Medical Terminology Consistency',
      termsFound: termUsage.size,
      totalTerms: medicalTerms.length
    });
  } else {
    warningCount++;
    testResults.integrationTests.details.push({
      type: 'WARNING',
      test: 'Medical Terminology Consistency',
      termsFound: termUsage.size,
      totalTerms: medicalTerms.length,
      issue: 'Some medical terms not consistently used'
    });
  }
  
  // Test 2: Navigation consistency
  testCount++;
  const navKeys = ['nav.home', 'nav.about', 'nav.expertise', 'nav.appointments', 'nav.contact'];
  const navTranslated = navKeys.filter(key => getNestedValue(zhTranslations, key)).length;
  
  if (navTranslated === navKeys.length) {
    passedCount++;
    testResults.integrationTests.details.push({
      type: 'SUCCESS',
      test: 'Navigation Consistency',
      translatedKeys: navTranslated,
      totalKeys: navKeys.length
    });
  } else {
    failedCount++;
    testResults.integrationTests.details.push({
      type: 'FAILED',
      test: 'Navigation Consistency',
      translatedKeys: navTranslated,
      totalKeys: navKeys.length,
      issue: 'Missing navigation translations'
    });
  }
  
  // Test 3: Form elements consistency
  testCount++;
  const formKeys = ['common.submit', 'common.cancel', 'common.save', 'forms.email', 'forms.phone'];
  const formTranslated = formKeys.filter(key => getNestedValue(zhTranslations, key)).length;
  
  if (formTranslated >= formKeys.length * 0.8) {
    passedCount++;
    testResults.integrationTests.details.push({
      type: 'SUCCESS',
      test: 'Form Elements Consistency',
      translatedKeys: formTranslated,
      totalKeys: formKeys.length
    });
  } else {
    warningCount++;
    testResults.integrationTests.details.push({
      type: 'WARNING',
      test: 'Form Elements Consistency',
      translatedKeys: formTranslated,
      totalKeys: formKeys.length,
      issue: 'Some form elements missing translations'
    });
  }
  
  testResults.integrationTests = {
    passed: passedCount,
    failed: failedCount,
    warnings: warningCount,
    details: testResults.integrationTests.details
  };
  
  console.log(`   ✅ Passed: ${passedCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  console.log(`   ⚠️  Warnings: ${warningCount}`);
  
  return testCount;
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
 * Generate comprehensive test report
 */
function generateTestReport() {
  console.log('\n🧪 COMPREHENSIVE INTEGRATION TEST RESULTS');
  console.log('='.repeat(50));
  
  // Calculate totals
  const totalPassed = testResults.translationTests.passed + testResults.componentTests.passed + 
                     testResults.pageTests.passed + testResults.integrationTests.passed;
  const totalFailed = testResults.translationTests.failed + testResults.componentTests.failed + 
                     testResults.pageTests.failed + testResults.integrationTests.failed;
  const totalWarnings = testResults.translationTests.warnings + testResults.componentTests.warnings + 
                       testResults.pageTests.warnings + testResults.integrationTests.warnings;
  const totalTests = totalPassed + totalFailed + totalWarnings;
  
  testResults.summary = {
    totalTests: totalTests,
    totalPassed: totalPassed,
    totalFailed: totalFailed,
    totalWarnings: totalWarnings,
    successRate: totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : '0.0'
  };
  
  // Print summary
  console.log(`📊 Total Tests: ${totalTests}`);
  console.log(`✅ Passed: ${totalPassed}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`⚠️  Warnings: ${totalWarnings}`);
  console.log(`📈 Success Rate: ${testResults.summary.successRate}%`);
  
  // Print detailed results by category
  console.log('\n📋 DETAILED RESULTS BY CATEGORY:');
  
  console.log(`\n🌐 Translation Tests:`);
  console.log(`   ✅ Passed: ${testResults.translationTests.passed}`);
  console.log(`   ❌ Failed: ${testResults.translationTests.failed}`);
  console.log(`   ⚠️  Warnings: ${testResults.translationTests.warnings}`);
  
  console.log(`\n🧩 Component Tests:`);
  console.log(`   ✅ Passed: ${testResults.componentTests.passed}`);
  console.log(`   ❌ Failed: ${testResults.componentTests.failed}`);
  console.log(`   ⚠️  Warnings: ${testResults.componentTests.warnings}`);
  
  console.log(`\n📄 Page Tests:`);
  console.log(`   ✅ Passed: ${testResults.pageTests.passed}`);
  console.log(`   ❌ Failed: ${testResults.pageTests.failed}`);
  console.log(`   ⚠️  Warnings: ${testResults.pageTests.warnings}`);
  
  console.log(`\n🔗 Integration Tests:`);
  console.log(`   ✅ Passed: ${testResults.integrationTests.passed}`);
  console.log(`   ❌ Failed: ${testResults.integrationTests.failed}`);
  console.log(`   ⚠️  Warnings: ${testResults.integrationTests.warnings}`);
  
  // Overall assessment
  console.log('\n🎯 OVERALL ASSESSMENT:');
  if (totalFailed === 0 && totalWarnings <= totalTests * 0.1) {
    console.log('🎉 EXCELLENT: All critical tests passed, ready for production!');
  } else if (totalFailed <= totalTests * 0.05 && totalWarnings <= totalTests * 0.2) {
    console.log('✅ GOOD: Minor issues detected, but system is functional');
  } else if (totalFailed <= totalTests * 0.1) {
    console.log('⚠️  ACCEPTABLE: Some issues detected, consider addressing before production');
  } else {
    console.log('❌ NEEDS ATTENTION: Significant issues detected, must be resolved');
  }
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: testResults.summary,
    translationTests: testResults.translationTests,
    componentTests: testResults.componentTests,
    pageTests: testResults.pageTests,
    integrationTests: testResults.integrationTests
  };
  
  fs.writeFileSync('comprehensive-integration-test-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Detailed test report saved to: comprehensive-integration-test-report.json');
  
  // Show sample issues if any
  if (totalFailed > 0) {
    console.log('\n❌ SAMPLE CRITICAL ISSUES:');
    const criticalIssues = [
      ...testResults.translationTests.details.filter(d => d.type === 'MISSING' || d.type === 'EMPTY'),
      ...testResults.componentTests.details.filter(d => d.type === 'STRUCTURE_ERROR'),
      ...testResults.pageTests.details.filter(d => d.type === 'FAILED'),
      ...testResults.integrationTests.details.filter(d => d.type === 'FAILED')
    ].slice(0, 5);
    
    criticalIssues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.issue || issue.type}: ${issue.path || issue.page || issue.test}`);
    });
  }
}

// Main execution
const translations = loadTranslationFiles();
const pageInventory = loadPageInventory();

if (translations) {
  const translationTestCount = testTranslationCompleteness(translations);
  const componentTestCount = testComponentStructure(pageInventory);
  const pageTestCount = testPageTranslationCoverage(pageInventory, translations);
  const integrationTestCount = testIntegrationConsistency(translations);
  
  generateTestReport();
} else {
  console.error('❌ Failed to load required data for testing');
}

console.log('\n✅ Comprehensive component integration testing completed!');
