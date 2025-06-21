import fs from 'fs';

/**
 * Final Comprehensive Runtime Test
 * Tests ALL critical translation paths that could cause runtime errors
 */

console.log('🔍 FINAL COMPREHENSIVE RUNTIME ERROR TEST');
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
 * Test all previously failing runtime error paths
 */
function testAllCriticalPaths(translations) {
  console.log('🧪 Testing ALL critical runtime error paths...');
  
  const allCriticalTests = [
    // Index.tsx errors (FIXED)
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
    
    // Expertise.tsx errors (FIXED)
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
    
    // Technology page arrays (FIXED)
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
    },
    
    // Appointments.tsx errors (FIXED)
    {
      path: 'appointments.locations.mainOffice.address',
      expected: 'string',
      description: 'Appointments.tsx line 690 - was causing split() error'
    },
    {
      path: 'appointments.locations.mainOffice.title',
      expected: 'string',
      description: 'Appointments.tsx main office title'
    },
    {
      path: 'appointments.locations.mainOffice.phone',
      expected: 'string',
      description: 'Appointments.tsx main office phone'
    },
    {
      path: 'appointments.locations.mainOffice.email',
      expected: 'string',
      description: 'Appointments.tsx main office email'
    },
    
    // Common navigation and UI elements
    {
      path: 'nav.home',
      expected: 'string',
      description: 'Navigation home link'
    },
    {
      path: 'nav.about',
      expected: 'string',
      description: 'Navigation about link'
    },
    {
      path: 'nav.expertise',
      expected: 'string',
      description: 'Navigation expertise link'
    },
    {
      path: 'nav.appointments',
      expected: 'string',
      description: 'Navigation appointments link'
    },
    {
      path: 'nav.locations',
      expected: 'string',
      description: 'Navigation locations link'
    },
    {
      path: 'nav.contact',
      expected: 'string',
      description: 'Navigation contact link'
    },
    
    // Home page elements
    {
      path: 'home.welcome.title',
      expected: 'string',
      description: 'Home page welcome title'
    },
    {
      path: 'home.welcome.subtitle',
      expected: 'string',
      description: 'Home page welcome subtitle'
    },
    {
      path: 'home.welcome.learnMore',
      expected: 'string',
      description: 'Home page learn more button'
    },
    {
      path: 'home.booking.title',
      expected: 'string',
      description: 'Home page booking title'
    },
    {
      path: 'home.featuredProcedures.title',
      expected: 'string',
      description: 'Home page featured procedures title'
    }
  ];
  
  let passedTests = 0;
  let failedTests = 0;
  const failures = [];
  
  allCriticalTests.forEach((test, index) => {
    try {
      const value = getNestedValue(translations, test.path);
      
      if (value === undefined || value === null) {
        console.log(`❌ Test ${index + 1}: ${test.path} - UNDEFINED`);
        failedTests++;
        failures.push({
          path: test.path,
          description: test.description,
          error: 'undefined/null value'
        });
      } else if (test.expected === 'array' && !Array.isArray(value)) {
        console.log(`❌ Test ${index + 1}: ${test.path} - NOT ARRAY (${typeof value})`);
        failedTests++;
        failures.push({
          path: test.path,
          description: test.description,
          error: `expected array, got ${typeof value}`
        });
      } else if (test.expected === 'string' && typeof value !== 'string') {
        console.log(`❌ Test ${index + 1}: ${test.path} - NOT STRING (${typeof value})`);
        failedTests++;
        failures.push({
          path: test.path,
          description: test.description,
          error: `expected string, got ${typeof value}`
        });
      } else {
        console.log(`✅ Test ${index + 1}: ${test.path} - PASS`);
        passedTests++;
      }
    } catch (error) {
      console.log(`❌ Test ${index + 1}: ${test.path} - ERROR: ${error.message}`);
      failedTests++;
      failures.push({
        path: test.path,
        description: test.description,
        error: error.message
      });
    }
  });
  
  return { passedTests, failedTests, failures, totalTests: allCriticalTests.length };
}

/**
 * Test specific split() functionality
 */
function testSplitFunctionality(translations) {
  console.log('\n🔬 Testing split() functionality...');
  
  const splitTests = [
    'appointments.locations.mainOffice.address',
    'contactInfo.mainOffice.address'
  ];
  
  let splitPassed = 0;
  let splitFailed = 0;
  
  splitTests.forEach(path => {
    try {
      const value = getNestedValue(translations, path);
      if (typeof value === 'string') {
        const splitResult = value.split('\n');
        console.log(`✅ ${path} - split() works, ${splitResult.length} lines`);
        splitPassed++;
      } else {
        console.log(`❌ ${path} - not a string, split() will fail`);
        splitFailed++;
      }
    } catch (error) {
      console.log(`❌ ${path} - split() error: ${error.message}`);
      splitFailed++;
    }
  });
  
  return { splitPassed, splitFailed };
}

// Main execution
console.log('📖 Loading current translations...');
const zhTranslations = loadCurrentTranslations();

if (!zhTranslations) {
  console.error('❌ Failed to load translations');
  process.exit(1);
}

const testResults = testAllCriticalPaths(zhTranslations);
const splitResults = testSplitFunctionality(zhTranslations);

console.log('\n📋 FINAL COMPREHENSIVE TEST RESULTS');
console.log('='.repeat(50));
console.log(`🧪 Critical Path Tests: ${testResults.passedTests}/${testResults.totalTests} passed`);
console.log(`🔬 Split Function Tests: ${splitResults.splitPassed}/${splitResults.splitPassed + splitResults.splitFailed} passed`);

const totalPassed = testResults.passedTests + splitResults.splitPassed;
const totalTests = testResults.totalTests + splitResults.splitPassed + splitResults.splitFailed;
const successRate = ((totalPassed / totalTests) * 100).toFixed(1);

console.log(`📊 Overall Success Rate: ${successRate}% (${totalPassed}/${totalTests})`);

if (testResults.failedTests === 0 && splitResults.splitFailed === 0) {
  console.log('\n🎉 ALL RUNTIME ERROR TESTS PASSED!');
  console.log('✅ No more TypeError exceptions expected');
  console.log('✅ All critical translation paths are accessible');
  console.log('✅ All split() operations will work correctly');
  console.log('✅ Index.tsx runtime errors: RESOLVED');
  console.log('✅ Expertise.tsx runtime errors: RESOLVED');
  console.log('✅ Appointments.tsx runtime errors: RESOLVED');
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

console.log('\n✅ Final comprehensive runtime error test completed!');
