import fs from 'fs';

/**
 * Test Location Pages Fix
 * Verifies the array map functionality for all location pages
 */

console.log('🔍 TESTING LOCATION PAGES FIX');
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
 * Test the specific array map functionality for Frankston location
 */
function testFrankstonLocationArrays(translations) {
  console.log('🧪 Testing Frankston location array functionality...');
  
  const arrayPaths = [
    'frankstonLocation.conditionsTreated.spinalConditions.conditions',
    'frankstonLocation.conditionsTreated.brainConditions.conditions',
    'frankstonLocation.conditionsTreated.nerveConditions.conditions'
  ];
  
  let passed = 0;
  let failed = 0;
  
  arrayPaths.forEach((path, index) => {
    const value = getNestedValue(translations, path);
    
    console.log(`📍 Testing ${path}:`);
    console.log(`   Type: ${typeof value}`);
    console.log(`   Is Array: ${Array.isArray(value)}`);
    
    if (Array.isArray(value)) {
      console.log(`   Array length: ${value.length}`);
      console.log(`   Sample items: ${value.slice(0, 2).join(', ')}`);
      
      // Test the actual map functionality
      try {
        const mapResult = value.map((condition, index) => ({
          key: index,
          content: condition
        }));
        console.log(`✅ Test ${index + 1}: ${path} - MAP SUCCESSFUL`);
        console.log(`   Mapped ${mapResult.length} items`);
        passed++;
      } catch (error) {
        console.log(`❌ Test ${index + 1}: ${path} - MAP FAILED: ${error.message}`);
        failed++;
      }
    } else {
      console.log(`❌ Test ${index + 1}: ${path} - NOT ARRAY`);
      console.log(`   Value: ${JSON.stringify(value)}`);
      failed++;
    }
    console.log('');
  });
  
  return { passed, failed, total: arrayPaths.length };
}

/**
 * Test the exact scenario from FrankstonLocation line 573
 */
function testExactFrankstonScenario(translations) {
  console.log('🎯 Testing exact scenario from FrankstonLocation line 573...');
  
  try {
    const finalT = translations;
    
    // This is the exact code from line 573
    const spinalConditions = finalT.frankstonLocation?.conditionsTreated?.spinalConditions?.conditions;
    
    console.log(`📍 Spinal conditions: ${JSON.stringify(spinalConditions)}`);
    console.log(`📍 Type: ${typeof spinalConditions}`);
    console.log(`📍 Is Array: ${Array.isArray(spinalConditions)}`);
    
    if (spinalConditions) {
      const mapResult = spinalConditions.map((condition, index) => ({
        key: index,
        content: condition
      }));
      
      console.log(`✅ Map successful! Generated ${mapResult.length} items:`);
      mapResult.forEach(item => {
        console.log(`   Item ${item.key}: "${item.content}"`);
      });
      
      return true;
    } else {
      console.log(`❌ Spinal conditions is undefined or null`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Exact scenario failed: ${error.message}`);
    return false;
  }
}

/**
 * Check for other location pages that might have similar issues
 */
function checkOtherLocationPages(translations) {
  console.log('\n🔍 Checking other location pages for similar issues...');
  
  const locationPaths = [
    'heidelbergLocation',
    'langwarrinLocation',
    'surryHillsLocation'
  ];
  
  let issues = 0;
  
  locationPaths.forEach(locationPath => {
    const location = getNestedValue(translations, locationPath);
    if (location) {
      console.log(`📍 Checking ${locationPath}:`);
      
      // Check for conditionsTreated structure
      if (location.conditionsTreated) {
        const conditionTypes = ['spinalConditions', 'brainConditions', 'nerveConditions'];
        conditionTypes.forEach(conditionType => {
          const conditions = location.conditionsTreated[conditionType]?.conditions;
          if (conditions !== undefined) {
            console.log(`   ${conditionType}.conditions: ${Array.isArray(conditions) ? 'ARRAY' : typeof conditions}`);
            if (!Array.isArray(conditions)) {
              console.log(`   ⚠️  ${locationPath}.conditionsTreated.${conditionType}.conditions is not an array`);
              issues++;
            }
          }
        });
      } else {
        console.log(`   No conditionsTreated structure found`);
      }
    } else {
      console.log(`📍 ${locationPath}: Not found`);
    }
  });
  
  return issues;
}

/**
 * Test all Frankston location translations
 */
function testFrankstonTranslations(translations) {
  console.log('\n🧪 Testing Frankston location translations...');
  
  const frankstonTests = [
    'frankstonLocation.conditionsTreated.spinalConditions.title',
    'frankstonLocation.conditionsTreated.brainConditions.title',
    'frankstonLocation.conditionsTreated.nerveConditions.title',
    'frankstonLocation.nearbyHospitals.title',
    'frankstonLocation.nearbyHospitals.subtitle',
    'frankstonLocation.nearbyHospitals.description',
    'frankstonLocation.insuranceAndFunding.title',
    'frankstonLocation.readyToSchedule.title'
  ];
  
  let passed = 0;
  let failed = 0;
  
  frankstonTests.forEach((path, index) => {
    const value = getNestedValue(translations, path);
    if (value === undefined || value === null) {
      console.log(`❌ Test ${index + 1}: ${path} - UNDEFINED`);
      failed++;
    } else {
      console.log(`✅ Test ${index + 1}: ${path} - "${value}"`);
      passed++;
    }
  });
  
  return { passed, failed, total: frankstonTests.length };
}

// Main execution
console.log('📖 Loading current translations...');
const zhTranslations = loadCurrentTranslations();

if (!zhTranslations) {
  console.error('❌ Failed to load translations');
  process.exit(1);
}

const arrayResult = testFrankstonLocationArrays(zhTranslations);
const exactScenarioResult = testExactFrankstonScenario(zhTranslations);
const otherLocationIssues = checkOtherLocationPages(zhTranslations);
const translationResult = testFrankstonTranslations(zhTranslations);

console.log('\n📋 TEST RESULTS SUMMARY');
console.log('='.repeat(40));
console.log(`🧪 Array Map Tests: ${arrayResult.passed}/${arrayResult.total} passed`);
console.log(`🎯 Exact Scenario Test: ${exactScenarioResult ? 'PASS' : 'FAIL'}`);
console.log(`🔍 Other Location Issues: ${otherLocationIssues} found`);
console.log(`🌐 Translation Tests: ${translationResult.passed}/${translationResult.total} passed`);

const allTestsPassed = arrayResult.failed === 0 && 
                      exactScenarioResult && 
                      otherLocationIssues === 0 && 
                      translationResult.failed === 0;

if (allTestsPassed) {
  console.log('\n🎉 ALL FRANKSTON LOCATION TESTS PASSED!');
  console.log('✅ No more TypeError: map is not a function');
  console.log('✅ Frankston location page should work correctly');
  console.log('✅ Array mapping functionality working');
  console.log('✅ All translations accessible');
} else {
  console.log('\n⚠️  SOME TESTS FAILED');
  console.log('❌ Frankston location page may still have issues');
}

console.log('\n✅ Frankston location fix test completed!');
