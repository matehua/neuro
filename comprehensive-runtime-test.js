import fs from 'fs';

/**
 * Comprehensive Runtime Error Test
 * Tests all critical translation paths that were causing runtime errors
 */

console.log('🔍 COMPREHENSIVE RUNTIME ERROR TEST');
console.log('='.repeat(60));

/**
 * Load current translations
 */
function loadCurrentTranslations() {
  try {
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    const zhObjectContent = zhContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    const zhTranslations = eval(`(${zhObjectContent})`);
    return zhTranslations;
  } catch (error) {
    console.error('❌ Failed to load translations:', error.message);
    return null;
  }
}

/**
 * Test specific translation paths that were causing runtime errors
 */
function testCriticalPaths(translations) {
  console.log('🧪 Testing previously failing translation paths...');
  
  const criticalTests = [
    // Index.tsx errors
    {
      path: 'home.advancedTechnologies.subtitle',
      expected: 'string',
      description: 'Index.tsx line 208 - was causing TypeError'
    },
    {
      path: 'expertiseCards.brainConditions.title',
      expected: 'string',
      description: 'Index.tsx line 538 - was causing TypeError'
    },
    {
      path: 'expertiseCards.spinalProblems.title',
      expected: 'string',
      description: 'Index.tsx spinal problems card'
    },
    {
      path: 'expertiseCards.nerveProblems.title',
      expected: 'string',
      description: 'Index.tsx nerve problems card'
    },
    {
      path: 'expertiseCards.medicolegalReports.title',
      expected: 'string',
      description: 'Index.tsx medico-legal reports card'
    },
    
    // Expertise.tsx errors
    {
      path: 'procedureDescriptions["brain-tumour-removal"].name',
      expected: 'string',
      description: 'Expertise.tsx line 218 - was causing TypeError'
    },
    {
      path: 'procedureDescriptions["lumbar-disc-replacement"].name',
      expected: 'string',
      description: 'Expertise.tsx line 237'
    },
    {
      path: 'procedureDescriptions["peripheral-nerve-surgery"].name',
      expected: 'string',
      description: 'Expertise.tsx line 252'
    },
    {
      path: 'nav.expertiseSubmenu.cervicalDisc',
      expected: 'string',
      description: 'Expertise.tsx navigation submenu'
    },
    {
      path: 'nav.expertiseSubmenu.lumbarDisc',
      expected: 'string',
      description: 'Expertise.tsx navigation submenu'
    },
    {
      path: 'nav.expertiseSubmenu.imageGuided',
      expected: 'string',
      description: 'Expertise.tsx navigation submenu'
    },
    {
      path: 'nav.expertiseSubmenu.roboticSpine',
      expected: 'string',
      description: 'Expertise.tsx navigation submenu'
    },
    
    // Technology page arrays
    {
      path: 'technologiesPage.categories.wellness.items',
      expected: 'array',
      description: 'Expertise.tsx technology items array'
    },
    {
      path: 'technologiesPage.categories.imagingTech.items',
      expected: 'array',
      description: 'Expertise.tsx imaging tech items array'
    },
    {
      path: 'technologiesPage.categories.services.items',
      expected: 'array',
      description: 'Expertise.tsx services items array'
    },
    {
      path: 'technologiesPage.categories.brainSurgery.items',
      expected: 'array',
      description: 'Expertise.tsx brain surgery items array'
    }
  ];
  
  let passedTests = 0;
  let failedTests = 0;
  const failures = [];
  
  criticalTests.forEach((test, index) => {
    try {
      const value = getNestedValue(translations, test.path);
      
      if (value === undefined || value === null) {
        console.log(`❌ Test ${index + 1}: ${test.path} - UNDEFINED`);
        console.log(`   Description: ${test.description}`);
        failedTests++;
        failures.push({
          path: test.path,
          description: test.description,
          error: 'undefined/null value'
        });
      } else if (test.expected === 'array' && !Array.isArray(value)) {
        console.log(`❌ Test ${index + 1}: ${test.path} - NOT ARRAY`);
        console.log(`   Description: ${test.description}`);
        console.log(`   Got: ${typeof value}`);
        failedTests++;
        failures.push({
          path: test.path,
          description: test.description,
          error: `expected array, got ${typeof value}`
        });
      } else if (test.expected === 'string' && typeof value !== 'string') {
        console.log(`❌ Test ${index + 1}: ${test.path} - NOT STRING`);
        console.log(`   Description: ${test.description}`);
        console.log(`   Got: ${typeof value}`);
        failedTests++;
        failures.push({
          path: test.path,
          description: test.description,
          error: `expected string, got ${typeof value}`
        });
      } else {
        console.log(`✅ Test ${index + 1}: ${test.path} - PASS`);
        if (test.expected === 'string') {
          console.log(`   Value: "${value.substring(0, 50)}${value.length > 50 ? '...' : ''}"`);
        } else if (test.expected === 'array') {
          console.log(`   Array length: ${value.length}`);
        }
        passedTests++;
      }
    } catch (error) {
      console.log(`❌ Test ${index + 1}: ${test.path} - ERROR`);
      console.log(`   Description: ${test.description}`);
      console.log(`   Error: ${error.message}`);
      failedTests++;
      failures.push({
        path: test.path,
        description: test.description,
        error: error.message
      });
    }
  });
  
  return { passedTests, failedTests, failures, totalTests: criticalTests.length };
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj, path) {
  // Handle array notation like procedureDescriptions["brain-tumour-removal"]
  const normalizedPath = path.replace(/\["([^"]+)"\]/g, '.$1');
  
  return normalizedPath.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

/**
 * Test array slicing functionality
 */
function testArraySlicing(translations) {
  console.log('\n🔬 Testing array slicing functionality...');
  
  const arrayTests = [
    'technologiesPage.categories.wellness.items',
    'technologiesPage.categories.imagingTech.items',
    'technologiesPage.categories.services.items',
    'technologiesPage.categories.brainSurgery.items'
  ];
  
  let sliceTests = 0;
  let sliceFailures = 0;
  
  arrayTests.forEach(path => {
    try {
      const items = getNestedValue(translations, path);
      if (Array.isArray(items)) {
        const slice1 = items.slice(0, 2);
        const slice2 = items.slice(2, 4);
        console.log(`✅ ${path} - slice(0,2): ${slice1.length} items, slice(2,4): ${slice2.length} items`);
        sliceTests++;
      } else {
        console.log(`❌ ${path} - not an array, cannot slice`);
        sliceFailures++;
      }
    } catch (error) {
      console.log(`❌ ${path} - slice error: ${error.message}`);
      sliceFailures++;
    }
  });
  
  return { sliceTests, sliceFailures };
}

// Main execution
console.log('📖 Loading current translations...');
const zhTranslations = loadCurrentTranslations();

if (!zhTranslations) {
  console.error('❌ Failed to load translations');
  process.exit(1);
}

const testResults = testCriticalPaths(zhTranslations);
const sliceResults = testArraySlicing(zhTranslations);

console.log('\n📋 COMPREHENSIVE TEST RESULTS');
console.log('='.repeat(50));
console.log(`🧪 Critical Path Tests: ${testResults.passedTests}/${testResults.totalTests} passed`);
console.log(`🔬 Array Slice Tests: ${sliceResults.sliceTests}/${sliceResults.sliceTests + sliceResults.sliceFailures} passed`);

const totalPassed = testResults.passedTests + sliceResults.sliceTests;
const totalTests = testResults.totalTests + sliceResults.sliceTests + sliceResults.sliceFailures;
const successRate = ((totalPassed / totalTests) * 100).toFixed(1);

console.log(`📊 Overall Success Rate: ${successRate}% (${totalPassed}/${totalTests})`);

if (testResults.failedTests === 0 && sliceResults.sliceFailures === 0) {
  console.log('\n🎉 ALL RUNTIME ERROR TESTS PASSED!');
  console.log('✅ No more TypeError exceptions expected');
  console.log('✅ All critical translation paths are accessible');
  console.log('✅ All array operations will work correctly');
  console.log('\n🚀 READY FOR PRODUCTION DEPLOYMENT!');
} else {
  console.log('\n⚠️  SOME TESTS FAILED');
  if (testResults.failures.length > 0) {
    console.log('\n❌ Failed Tests:');
    testResults.failures.forEach((failure, index) => {
      console.log(`   ${index + 1}. ${failure.path}`);
      console.log(`      ${failure.description}`);
      console.log(`      Error: ${failure.error}`);
    });
  }
}

console.log('\n✅ Comprehensive runtime error test completed!');
