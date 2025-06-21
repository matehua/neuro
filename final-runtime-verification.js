import fs from 'fs';

/**
 * Final Runtime Verification
 * Verifies that all translation paths are accessible and no runtime errors exist
 */

console.log('🔍 FINAL RUNTIME VERIFICATION');
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
  console.log('🧪 Testing critical translation paths...');
  
  const criticalPaths = [
    'home.welcome.subtitle',
    'home.welcome.title',
    'home.booking.subtitle',
    'home.booking.title',
    'home.featuredProcedures.subtitle',
    'home.featuredProcedures.title',
    'home.advancedTechnologies.subtitle',
    'home.advancedTechnologies.title',
    'home.cta.title',
    'home.cta.description',
    'nav.home',
    'nav.about',
    'nav.expertise',
    'nav.appointments',
    'nav.locations',
    'nav.contact',
    'common.loading',
    'common.error',
    'common.success'
  ];
  
  let passedTests = 0;
  let failedTests = 0;
  const testResults = [];
  
  criticalPaths.forEach(path => {
    const value = getNestedValue(translations, path);
    const testResult = {
      path: path,
      exists: value !== undefined,
      value: value,
      type: typeof value
    };
    
    if (value !== undefined && typeof value === 'string' && value.length > 0) {
      passedTests++;
      testResult.status = 'PASS';
    } else {
      failedTests++;
      testResult.status = 'FAIL';
      testResult.issue = value === undefined ? 'Path not found' : 
                        typeof value !== 'string' ? 'Not a string' : 'Empty string';
    }
    
    testResults.push(testResult);
  });
  
  console.log(`📊 Critical path tests: ${passedTests} passed, ${failedTests} failed`);
  
  // Show failed tests
  const failedPaths = testResults.filter(r => r.status === 'FAIL');
  if (failedPaths.length > 0) {
    console.log('\n❌ Failed paths:');
    failedPaths.forEach(result => {
      console.log(`   ${result.path}: ${result.issue}`);
    });
  }
  
  // Show sample successful paths
  const passedPaths = testResults.filter(r => r.status === 'PASS');
  if (passedPaths.length > 0) {
    console.log('\n✅ Sample successful paths:');
    passedPaths.slice(0, 5).forEach(result => {
      console.log(`   ${result.path}: "${result.value}"`);
    });
  }
  
  return { passedTests, failedTests, testResults };
}

/**
 * Get nested value from object
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
 * Verify translation structure integrity
 */
function verifyStructureIntegrity(translations) {
  console.log('🏗️  Verifying translation structure integrity...');
  
  const issues = [];
  let totalKeys = 0;
  let validKeys = 0;
  
  function checkStructure(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      totalKeys++;
      
      if (typeof value === 'string') {
        if (value.length > 0 && !value.includes('[翻译错误]') && !value.includes('[翻译缺失:')) {
          validKeys++;
        } else {
          issues.push({
            path: currentPath,
            issue: value.length === 0 ? 'Empty string' : 'Contains error marker',
            value: value
          });
        }
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkStructure(value, currentPath);
      } else if (Array.isArray(value)) {
        validKeys++; // Arrays are considered valid
      } else {
        issues.push({
          path: currentPath,
          issue: 'Invalid type',
          value: value,
          type: typeof value
        });
      }
    }
  }
  
  checkStructure(translations);
  
  const integrityScore = totalKeys > 0 ? ((validKeys / totalKeys) * 100).toFixed(1) : '0.0';
  
  console.log(`📊 Structure integrity: ${integrityScore}% (${validKeys}/${totalKeys} valid)`);
  
  if (issues.length > 0) {
    console.log(`⚠️  Found ${issues.length} structure issues`);
    if (issues.length <= 5) {
      issues.forEach(issue => {
        console.log(`   ${issue.path}: ${issue.issue}`);
      });
    } else {
      console.log('   (Too many issues to display - check detailed report)');
    }
  }
  
  return { integrityScore: parseFloat(integrityScore), issues, totalKeys, validKeys };
}

/**
 * Test for duplicate keys or conflicting structures
 */
function testForConflicts(translations) {
  console.log('🔍 Testing for structural conflicts...');
  
  const allPaths = [];
  const conflicts = [];
  
  function collectPaths(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      allPaths.push(currentPath);
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        collectPaths(value, currentPath);
      }
    }
  }
  
  collectPaths(translations);
  
  // Check for duplicate paths (shouldn't happen but let's verify)
  const pathCounts = {};
  allPaths.forEach(path => {
    pathCounts[path] = (pathCounts[path] || 0) + 1;
  });
  
  Object.entries(pathCounts).forEach(([path, count]) => {
    if (count > 1) {
      conflicts.push({
        type: 'duplicate_path',
        path: path,
        count: count
      });
    }
  });
  
  // Check for nested home objects (the original issue)
  const homeObjects = allPaths.filter(path => path.includes('.home.') || path === 'home');
  
  console.log(`📊 Found ${homeObjects.length} home-related paths`);
  console.log(`📊 Found ${conflicts.length} structural conflicts`);
  
  if (conflicts.length > 0) {
    console.log('⚠️  Structural conflicts:');
    conflicts.forEach(conflict => {
      console.log(`   ${conflict.type}: ${conflict.path} (${conflict.count} occurrences)`);
    });
  }
  
  return { conflicts, homeObjects };
}

/**
 * Generate final verification report
 */
function generateFinalReport(criticalTests, structureCheck, conflictCheck) {
  console.log('\n📋 FINAL VERIFICATION REPORT');
  console.log('='.repeat(50));
  
  const overallScore = (
    (criticalTests.passedTests / (criticalTests.passedTests + criticalTests.failedTests)) * 40 +
    (structureCheck.integrityScore / 100) * 40 +
    (conflictCheck.conflicts.length === 0 ? 20 : 10)
  );
  
  console.log(`🎯 Overall Score: ${overallScore.toFixed(1)}/100`);
  console.log(`🧪 Critical Path Tests: ${criticalTests.passedTests}/${criticalTests.passedTests + criticalTests.failedTests} passed`);
  console.log(`🏗️  Structure Integrity: ${structureCheck.integrityScore}%`);
  console.log(`🔍 Structural Conflicts: ${conflictCheck.conflicts.length}`);
  
  let status = 'UNKNOWN';
  if (overallScore >= 95 && criticalTests.failedTests === 0) {
    status = 'EXCELLENT';
  } else if (overallScore >= 90 && criticalTests.failedTests <= 1) {
    status = 'GOOD';
  } else if (overallScore >= 80) {
    status = 'ACCEPTABLE';
  } else {
    status = 'NEEDS_ATTENTION';
  }
  
  console.log(`📊 Status: ${status}`);
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS:');
  if (criticalTests.failedTests === 0) {
    console.log('✅ All critical translation paths are working correctly');
  } else {
    console.log(`❌ Fix ${criticalTests.failedTests} critical path issues`);
  }
  
  if (structureCheck.integrityScore >= 99) {
    console.log('✅ Translation structure is excellent');
  } else {
    console.log(`⚠️  Improve structure integrity (currently ${structureCheck.integrityScore}%)`);
  }
  
  if (conflictCheck.conflicts.length === 0) {
    console.log('✅ No structural conflicts detected');
  } else {
    console.log(`❌ Resolve ${conflictCheck.conflicts.length} structural conflicts`);
  }
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    overallScore: overallScore,
    status: status,
    criticalTests: criticalTests,
    structureCheck: structureCheck,
    conflictCheck: conflictCheck
  };
  
  fs.writeFileSync('final-runtime-verification-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Detailed report saved to: final-runtime-verification-report.json');
  
  return report;
}

// Main execution
const translations = loadCurrentTranslations();

if (translations) {
  const criticalTests = testCriticalPaths(translations);
  const structureCheck = verifyStructureIntegrity(translations);
  const conflictCheck = testForConflicts(translations);
  const report = generateFinalReport(criticalTests, structureCheck, conflictCheck);
  
  console.log('\n🎉 FINAL VERIFICATION COMPLETE!');
  if (report.status === 'EXCELLENT') {
    console.log('🌟 All systems are working perfectly!');
  } else if (report.status === 'GOOD') {
    console.log('✅ System is working well with minor issues');
  } else {
    console.log('⚠️  Some issues detected - see report for details');
  }
  
} else {
  console.error('❌ Failed to load translations for verification');
}

console.log('\n✅ Final runtime verification completed!');
