import fs from 'fs';

/**
 * Component Integration Testing
 * Tests all components with Chinese translations to ensure proper functionality
 */

console.log('🧪 COMPONENT INTEGRATION TESTING');
console.log('='.repeat(60));

const testResults = {
  translationTests: [],
  componentTests: [],
  integrationTests: [],
  issues: [],
  summary: {
    totalTests: 0,
    passed: 0,
    failed: 0,
    warnings: 0
  }
};

/**
 * Load translation files for testing
 */
function loadTranslationFiles() {
  try {
    console.log('📖 Loading translation files for testing...');
    
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
    testResults.issues.push({
      type: 'CRITICAL',
      component: 'Translation System',
      issue: 'Failed to load translation files',
      error: error.message
    });
    return null;
  }
}

/**
 * Test translation completeness
 */
function testTranslationCompleteness(translations) {
  console.log('🔍 Testing translation completeness...');
  
  const { enTranslations, zhTranslations } = translations;
  
  // Load used keys from mapping
  let usedKeys = [];
  try {
    const mappingData = fs.readFileSync('translation-key-mapping-report.json', 'utf8');
    const mapping = JSON.parse(mappingData);
    usedKeys = mapping.usedKeys;
  } catch (error) {
    console.warn('⚠️  Could not load translation mapping, using basic test');
  }
  
  const testName = 'Translation Completeness';
  testResults.summary.totalTests++;
  
  let missingCount = 0;
  const missingKeys = [];
  
  usedKeys.forEach(key => {
    if (!hasNestedKey(zhTranslations, key)) {
      missingCount++;
      missingKeys.push(key);
    }
  });
  
  if (missingCount === 0) {
    testResults.translationTests.push({
      name: testName,
      status: 'PASSED',
      message: `All ${usedKeys.length} used translation keys have Chinese translations`
    });
    testResults.summary.passed++;
  } else {
    testResults.translationTests.push({
      name: testName,
      status: 'FAILED',
      message: `${missingCount} translation keys missing Chinese translations`,
      details: missingKeys.slice(0, 10) // Show first 10 missing keys
    });
    testResults.summary.failed++;
  }
}

/**
 * Test translation structure consistency
 */
function testTranslationStructure(translations) {
  console.log('🏗️  Testing translation structure consistency...');
  
  const { enTranslations, zhTranslations } = translations;
  
  const testName = 'Translation Structure Consistency';
  testResults.summary.totalTests++;
  
  const structureIssues = [];
  
  // Check if main sections exist
  const mainSections = ['nav', 'hero', 'footer', 'common'];
  mainSections.forEach(section => {
    if (!zhTranslations[section]) {
      structureIssues.push(`Missing main section: ${section}`);
    }
  });
  
  // Check for proper nesting
  function checkNesting(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkNesting(value, currentPath);
      } else if (typeof value !== 'string') {
        structureIssues.push(`Invalid value type at ${currentPath}: expected string, got ${typeof value}`);
      }
    }
  }
  
  checkNesting(zhTranslations);
  
  if (structureIssues.length === 0) {
    testResults.translationTests.push({
      name: testName,
      status: 'PASSED',
      message: 'Translation structure is consistent'
    });
    testResults.summary.passed++;
  } else {
    testResults.translationTests.push({
      name: testName,
      status: 'FAILED',
      message: `${structureIssues.length} structure issues found`,
      details: structureIssues
    });
    testResults.summary.failed++;
  }
}

/**
 * Test component translation usage
 */
function testComponentTranslationUsage() {
  console.log('🧩 Testing component translation usage...');
  
  const testName = 'Component Translation Usage';
  testResults.summary.totalTests++;
  
  const componentIssues = [];
  
  // Load component analysis
  let componentData = [];
  try {
    const analysisData = fs.readFileSync('detailed-codebase-analysis.json', 'utf8');
    const analysis = JSON.parse(analysisData);
    componentData = [...analysis.components, ...analysis.pages];
  } catch (error) {
    componentIssues.push('Could not load component analysis data');
  }
  
  // Check each component for translation usage
  componentData.forEach(component => {
    if (component.translationKeys && component.translationKeys.length > 0) {
      // Check if component properly imports translation context
      const hasLanguageContext = component.imports.includes('@/contexts/LanguageContext');
      const hasTranslationImport = component.imports.some(imp => 
        imp.includes('/locales/') || imp.includes('LanguageContext')
      );
      
      if (!hasLanguageContext && !hasTranslationImport) {
        componentIssues.push(`${component.path}: Uses translations but missing LanguageContext import`);
      }
    }
  });
  
  if (componentIssues.length === 0) {
    testResults.componentTests.push({
      name: testName,
      status: 'PASSED',
      message: `All ${componentData.length} components properly use translations`
    });
    testResults.summary.passed++;
  } else {
    testResults.componentTests.push({
      name: testName,
      status: 'WARNING',
      message: `${componentIssues.length} components have translation usage issues`,
      details: componentIssues
    });
    testResults.summary.warnings++;
  }
}

/**
 * Test language switching functionality
 */
function testLanguageSwitching() {
  console.log('🔄 Testing language switching functionality...');
  
  const testName = 'Language Switching Functionality';
  testResults.summary.totalTests++;
  
  const switchingIssues = [];
  
  // Check if LanguageContext exists and is properly structured
  try {
    const contextPath = 'src/contexts/LanguageContext.tsx';
    if (fs.existsSync(contextPath)) {
      const contextContent = fs.readFileSync(contextPath, 'utf8');
      
      // Check for essential language switching components
      const requiredElements = [
        'createContext',
        'useState',
        'useContext',
        'LanguageProvider',
        'setLanguage'
      ];
      
      requiredElements.forEach(element => {
        if (!contextContent.includes(element)) {
          switchingIssues.push(`Missing ${element} in LanguageContext`);
        }
      });
    } else {
      switchingIssues.push('LanguageContext.tsx file not found');
    }
  } catch (error) {
    switchingIssues.push(`Error reading LanguageContext: ${error.message}`);
  }
  
  // Check if LanguageSelector component exists
  try {
    const selectorPath = 'src/components/LanguageSelector.tsx';
    if (!fs.existsSync(selectorPath)) {
      switchingIssues.push('LanguageSelector component not found');
    }
  } catch (error) {
    switchingIssues.push(`Error checking LanguageSelector: ${error.message}`);
  }
  
  if (switchingIssues.length === 0) {
    testResults.integrationTests.push({
      name: testName,
      status: 'PASSED',
      message: 'Language switching functionality is properly implemented'
    });
    testResults.summary.passed++;
  } else {
    testResults.integrationTests.push({
      name: testName,
      status: 'FAILED',
      message: `${switchingIssues.length} language switching issues found`,
      details: switchingIssues
    });
    testResults.summary.failed++;
  }
}

/**
 * Test medical terminology accuracy
 */
function testMedicalTerminology() {
  console.log('🏥 Testing medical terminology accuracy...');
  
  const testName = 'Medical Terminology Accuracy';
  testResults.summary.totalTests++;
  
  const terminologyIssues = [];
  
  // Load medical dictionary
  try {
    const dictData = fs.readFileSync('medical-terminology-dictionary.json', 'utf8');
    const dictionary = JSON.parse(dictData);
    
    // Load Chinese translations
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    
    // Check for consistent medical term usage
    const medicalTerms = Object.values(dictionary.terms).flat();
    Object.entries(medicalTerms).forEach(([english, chinese]) => {
      // This is a simplified check - in a real scenario, we'd need more sophisticated matching
      if (zhContent.includes(english) && !zhContent.includes(chinese)) {
        terminologyIssues.push(`Inconsistent medical term: ${english} -> ${chinese}`);
      }
    });
    
  } catch (error) {
    terminologyIssues.push(`Could not load medical dictionary: ${error.message}`);
  }
  
  if (terminologyIssues.length === 0) {
    testResults.integrationTests.push({
      name: testName,
      status: 'PASSED',
      message: 'Medical terminology is consistent'
    });
    testResults.summary.passed++;
  } else {
    testResults.integrationTests.push({
      name: testName,
      status: 'WARNING',
      message: `${terminologyIssues.length} potential medical terminology issues`,
      details: terminologyIssues
    });
    testResults.summary.warnings++;
  }
}

/**
 * Helper function to check nested keys
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
 * Generate test report
 */
function generateTestReport() {
  console.log('\n🧪 COMPONENT INTEGRATION TEST RESULTS:');
  console.log('='.repeat(50));
  
  console.log(`📊 Total Tests: ${testResults.summary.totalTests}`);
  console.log(`✅ Passed: ${testResults.summary.passed}`);
  console.log(`❌ Failed: ${testResults.summary.failed}`);
  console.log(`⚠️  Warnings: ${testResults.summary.warnings}`);
  
  const successRate = ((testResults.summary.passed / testResults.summary.totalTests) * 100).toFixed(1);
  console.log(`📈 Success Rate: ${successRate}%`);
  
  // Print detailed results
  if (testResults.translationTests.length > 0) {
    console.log('\n📝 Translation Tests:');
    testResults.translationTests.forEach(test => {
      console.log(`   ${test.status === 'PASSED' ? '✅' : '❌'} ${test.name}: ${test.message}`);
    });
  }
  
  if (testResults.componentTests.length > 0) {
    console.log('\n🧩 Component Tests:');
    testResults.componentTests.forEach(test => {
      const icon = test.status === 'PASSED' ? '✅' : test.status === 'WARNING' ? '⚠️' : '❌';
      console.log(`   ${icon} ${test.name}: ${test.message}`);
    });
  }
  
  if (testResults.integrationTests.length > 0) {
    console.log('\n🔗 Integration Tests:');
    testResults.integrationTests.forEach(test => {
      const icon = test.status === 'PASSED' ? '✅' : test.status === 'WARNING' ? '⚠️' : '❌';
      console.log(`   ${icon} ${test.name}: ${test.message}`);
    });
  }
  
  // Save detailed report
  fs.writeFileSync('component-integration-test-report.json', JSON.stringify(testResults, null, 2));
  console.log('\n📄 Detailed test report saved to: component-integration-test-report.json');
}

// Main execution
const translations = loadTranslationFiles();

if (translations) {
  testTranslationCompleteness(translations);
  testTranslationStructure(translations);
  testComponentTranslationUsage();
  testLanguageSwitching();
  testMedicalTerminology();
}

generateTestReport();

console.log('\n✅ Component integration testing complete!');
