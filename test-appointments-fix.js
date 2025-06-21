import fs from 'fs';

/**
 * Test Appointments Page Fix
 * Verifies the address split functionality and other potential issues
 */

console.log('🔍 TESTING APPOINTMENTS PAGE FIX');
console.log('='.repeat(50));

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
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

/**
 * Test the specific address split functionality
 */
function testAddressSplit(translations) {
  console.log('🧪 Testing address split functionality...');
  
  const addressPath = 'appointments.locations.mainOffice.address';
  const address = getNestedValue(translations, addressPath);
  
  console.log(`📍 Address path: ${addressPath}`);
  console.log(`📍 Address value: "${address}"`);
  console.log(`📍 Address type: ${typeof address}`);
  
  if (typeof address !== 'string') {
    console.log('❌ Address is not a string - split() will fail');
    return false;
  }
  
  try {
    const splitResult = address.split('\n');
    console.log(`✅ Split successful - ${splitResult.length} lines:`);
    splitResult.forEach((line, index) => {
      console.log(`   ${index + 1}: "${line}"`);
    });
    return true;
  } catch (error) {
    console.log(`❌ Split failed: ${error.message}`);
    return false;
  }
}

/**
 * Test all appointments page translation paths
 */
function testAppointmentsTranslations(translations) {
  console.log('\n🧪 Testing appointments page translations...');
  
  const appointmentTests = [
    'appointments.locations.mainOffice.title',
    'appointments.locations.mainOffice.address',
    'appointments.locations.mainOffice.phone',
    'appointments.locations.mainOffice.fax',
    'appointments.locations.mainOffice.email',
    'appointments.locations.mainOffice.viewDetails',
    'appointments.locations.allLocations',
    'appointments.locations.viewAllLocations',
    'appointments.phone',
    'appointments.fax',
    'appointments.email'
  ];
  
  let passed = 0;
  let failed = 0;
  
  appointmentTests.forEach((path, index) => {
    const value = getNestedValue(translations, path);
    if (value === undefined || value === null) {
      console.log(`❌ Test ${index + 1}: ${path} - UNDEFINED`);
      failed++;
    } else {
      console.log(`✅ Test ${index + 1}: ${path} - "${value}"`);
      passed++;
    }
  });
  
  return { passed, failed, total: appointmentTests.length };
}

/**
 * Check for other potential split() issues in the codebase
 */
function checkForOtherSplitIssues(translations) {
  console.log('\n🔍 Checking for other potential split() issues...');
  
  // Look for other address-like structures that might be objects instead of strings
  const potentialSplitPaths = [
    'contactInfo.mainOffice.address',
    'appointments.locations.mainOffice.address'
  ];
  
  let issues = 0;
  
  potentialSplitPaths.forEach(path => {
    const value = getNestedValue(translations, path);
    if (value !== undefined) {
      console.log(`📍 Checking ${path}:`);
      console.log(`   Type: ${typeof value}`);
      console.log(`   Value: ${JSON.stringify(value)}`);
      
      if (typeof value === 'object' && value !== null) {
        console.log(`⚠️  ${path} is an object - potential split() issue`);
        issues++;
      } else if (typeof value === 'string') {
        console.log(`✅ ${path} is a string - split() will work`);
      }
    }
  });
  
  return issues;
}

/**
 * Test the exact scenario from Appointments.tsx line 690
 */
function testExactScenario(translations) {
  console.log('\n🎯 Testing exact scenario from Appointments.tsx line 690...');
  
  try {
    const finalT = translations;
    const address = finalT.appointments.locations.mainOffice.address;
    
    console.log(`📍 Address: "${address}"`);
    console.log(`📍 Type: ${typeof address}`);
    
    // This is the exact code from line 690
    const splitLines = address.split('\n').map((line, i) => ({
      key: i,
      content: line
    }));
    
    console.log(`✅ Split successful! Generated ${splitLines.length} lines:`);
    splitLines.forEach(item => {
      console.log(`   Line ${item.key}: "${item.content}"`);
    });
    
    return true;
  } catch (error) {
    console.log(`❌ Exact scenario failed: ${error.message}`);
    return false;
  }
}

// Main execution
console.log('📖 Loading current translations...');
const zhTranslations = loadCurrentTranslations();

if (!zhTranslations) {
  console.error('❌ Failed to load translations');
  process.exit(1);
}

const addressSplitResult = testAddressSplit(zhTranslations);
const appointmentsResult = testAppointmentsTranslations(zhTranslations);
const splitIssues = checkForOtherSplitIssues(zhTranslations);
const exactScenarioResult = testExactScenario(zhTranslations);

console.log('\n📋 TEST RESULTS SUMMARY');
console.log('='.repeat(40));
console.log(`🎯 Address Split Test: ${addressSplitResult ? 'PASS' : 'FAIL'}`);
console.log(`🧪 Appointments Translations: ${appointmentsResult.passed}/${appointmentsResult.total} passed`);
console.log(`🔍 Other Split Issues: ${splitIssues} found`);
console.log(`🎯 Exact Scenario Test: ${exactScenarioResult ? 'PASS' : 'FAIL'}`);

const allTestsPassed = addressSplitResult && 
                      appointmentsResult.failed === 0 && 
                      splitIssues === 0 && 
                      exactScenarioResult;

if (allTestsPassed) {
  console.log('\n🎉 ALL APPOINTMENTS TESTS PASSED!');
  console.log('✅ No more TypeError: split is not a function');
  console.log('✅ Appointments page should work correctly');
  console.log('✅ Address splitting functionality working');
} else {
  console.log('\n⚠️  SOME TESTS FAILED');
  console.log('❌ Appointments page may still have issues');
}

console.log('\n✅ Appointments fix test completed!');
