import fs from 'fs';

/**
 * Comprehensive Missing Translations Audit
 * Identifies every missing translation key for 100% coverage
 */

console.log('🔍 COMPREHENSIVE MISSING TRANSLATIONS AUDIT');
console.log('='.repeat(60));

const auditResults = {
  totalEnglishKeys: 0,
  totalChineseKeys: 0,
  missingTranslations: [],
  placeholderTranslations: [],
  emptyTranslations: [],
  typeErrorTranslations: [],
  categoryBreakdown: {},
  priorityLevels: {
    critical: [],
    high: [],
    medium: [],
    low: []
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
 * Extract all keys from nested object
 */
function extractAllKeys(obj, prefix = '') {
  const keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...extractAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

/**
 * Categorize translation key by its path
 */
function categorizeKey(keyPath) {
  const parts = keyPath.split('.');
  const firstPart = parts[0].toLowerCase();
  
  // Core UI categories
  if (['nav', 'navigation', 'menu'].includes(firstPart)) return 'navigation';
  if (['hero', 'banner', 'welcome'].includes(firstPart)) return 'hero';
  if (['footer', 'copyright'].includes(firstPart)) return 'footer';
  if (['common', 'ui', 'button', 'form'].includes(firstPart)) return 'common-ui';
  if (['forms', 'input', 'validation'].includes(firstPart)) return 'forms';
  
  // Content categories
  if (['appointments', 'booking', 'schedule'].includes(firstPart)) return 'appointments';
  if (['contact', 'phone', 'email', 'address'].includes(firstPart)) return 'contact';
  if (['locations', 'clinic', 'office'].includes(firstPart)) return 'locations';
  if (['expertise', 'specialties', 'services'].includes(firstPart)) return 'expertise';
  
  // Medical categories
  if (['conditions', 'diseases', 'symptoms'].includes(firstPart)) return 'medical-conditions';
  if (['procedures', 'treatments', 'surgery'].includes(firstPart)) return 'medical-procedures';
  if (['patientresources', 'patient', 'education'].includes(firstPart)) return 'patient-resources';
  if (['gpresources', 'gp', 'referral'].includes(firstPart)) return 'gp-resources';
  
  // Page-specific categories
  if (['home', 'index'].includes(firstPart)) return 'home-page';
  if (['about', 'team', 'staff'].includes(firstPart)) return 'about-page';
  if (['gallery', 'images', 'photos'].includes(firstPart)) return 'gallery';
  if (['faq', 'questions', 'help'].includes(firstPart)) return 'faq';
  if (['consultingrooms', 'consulting', 'rooms'].includes(firstPart)) return 'consulting-rooms';
  if (['technologies', 'tech', 'equipment'].includes(firstPart)) return 'technologies';
  
  // Fallback
  return 'other';
}

/**
 * Determine priority level for translation key
 */
function determinePriority(keyPath, category) {
  // Critical: Core navigation, forms, and error messages
  if (category === 'navigation' || category === 'common-ui' || category === 'forms') {
    return 'critical';
  }
  
  // Critical: Main page content
  if (category === 'hero' || category === 'home-page' || category === 'appointments') {
    return 'critical';
  }
  
  // High: Medical content and patient-facing information
  if (category === 'medical-conditions' || category === 'medical-procedures' || 
      category === 'patient-resources' || category === 'contact') {
    return 'high';
  }
  
  // High: Location and expertise information
  if (category === 'locations' || category === 'expertise') {
    return 'high';
  }
  
  // Medium: Supporting content
  if (category === 'about-page' || category === 'consulting-rooms' || 
      category === 'technologies' || category === 'gp-resources') {
    return 'medium';
  }
  
  // Low: Secondary content
  if (category === 'gallery' || category === 'faq' || category === 'footer') {
    return 'low';
  }
  
  return 'medium'; // Default
}

/**
 * Comprehensive audit of missing translations
 */
function auditMissingTranslations(enTranslations, zhTranslations) {
  console.log('🔍 Conducting comprehensive missing translations audit...');
  
  // Extract all English keys
  const allEnglishKeys = extractAllKeys(enTranslations);
  auditResults.totalEnglishKeys = allEnglishKeys.length;
  
  // Extract all Chinese keys
  const allChineseKeys = extractAllKeys(zhTranslations);
  auditResults.totalChineseKeys = allChineseKeys.length;
  
  console.log(`📊 Total English keys: ${auditResults.totalEnglishKeys}`);
  console.log(`📊 Total Chinese keys: ${auditResults.totalChineseKeys}`);
  
  // Analyze each English key
  allEnglishKeys.forEach(keyPath => {
    const englishValue = getNestedValue(enTranslations, keyPath);
    const chineseValue = getNestedValue(zhTranslations, keyPath);
    const category = categorizeKey(keyPath);
    const priority = determinePriority(keyPath, category);
    
    // Initialize category if not exists
    if (!auditResults.categoryBreakdown[category]) {
      auditResults.categoryBreakdown[category] = {
        total: 0,
        missing: 0,
        placeholder: 0,
        empty: 0,
        complete: 0
      };
    }
    
    auditResults.categoryBreakdown[category].total++;
    
    const translationInfo = {
      key: keyPath,
      english: englishValue,
      chinese: chineseValue,
      category: category,
      priority: priority
    };
    
    if (!chineseValue) {
      // Completely missing
      auditResults.missingTranslations.push(translationInfo);
      auditResults.categoryBreakdown[category].missing++;
      auditResults.priorityLevels[priority].push({...translationInfo, issue: 'missing'});
    } else if (typeof chineseValue !== 'string') {
      // Type error
      auditResults.typeErrorTranslations.push(translationInfo);
      auditResults.categoryBreakdown[category].missing++;
      auditResults.priorityLevels[priority].push({...translationInfo, issue: 'type-error'});
    } else if (chineseValue.length === 0) {
      // Empty string
      auditResults.emptyTranslations.push(translationInfo);
      auditResults.categoryBreakdown[category].empty++;
      auditResults.priorityLevels[priority].push({...translationInfo, issue: 'empty'});
    } else if (chineseValue.includes('[翻译缺失:') || chineseValue.includes('[需要翻译:') || 
               chineseValue.includes('[翻译错误]') || chineseValue.includes('Translation needed')) {
      // Placeholder
      auditResults.placeholderTranslations.push(translationInfo);
      auditResults.categoryBreakdown[category].placeholder++;
      auditResults.priorityLevels[priority].push({...translationInfo, issue: 'placeholder'});
    } else {
      // Complete
      auditResults.categoryBreakdown[category].complete++;
    }
  });
  
  // Calculate totals
  const totalMissing = auditResults.missingTranslations.length + 
                      auditResults.placeholderTranslations.length + 
                      auditResults.emptyTranslations.length + 
                      auditResults.typeErrorTranslations.length;
  
  const completionRate = ((auditResults.totalEnglishKeys - totalMissing) / auditResults.totalEnglishKeys * 100).toFixed(1);
  
  console.log(`\n📊 AUDIT RESULTS:`);
  console.log(`   ❌ Missing: ${auditResults.missingTranslations.length}`);
  console.log(`   ⚠️  Placeholders: ${auditResults.placeholderTranslations.length}`);
  console.log(`   📝 Empty: ${auditResults.emptyTranslations.length}`);
  console.log(`   🔧 Type Errors: ${auditResults.typeErrorTranslations.length}`);
  console.log(`   📊 Total Incomplete: ${totalMissing}`);
  console.log(`   ✅ Completion Rate: ${completionRate}%`);
  
  return totalMissing;
}

/**
 * Generate detailed audit report
 */
function generateAuditReport() {
  console.log('\n📋 DETAILED AUDIT BREAKDOWN:');
  
  // Category breakdown
  console.log('\n📁 By Category:');
  Object.entries(auditResults.categoryBreakdown).forEach(([category, stats]) => {
    const completionRate = stats.total > 0 ? ((stats.complete / stats.total) * 100).toFixed(1) : '0.0';
    const incomplete = stats.missing + stats.placeholder + stats.empty;
    console.log(`   ${category}: ${completionRate}% complete (${incomplete}/${stats.total} incomplete)`);
  });
  
  // Priority breakdown
  console.log('\n🎯 By Priority:');
  Object.entries(auditResults.priorityLevels).forEach(([priority, items]) => {
    if (items.length > 0) {
      console.log(`   ${priority.toUpperCase()}: ${items.length} items`);
    }
  });
  
  // Show sample missing translations by priority
  console.log('\n🔍 SAMPLE MISSING TRANSLATIONS:');
  
  ['critical', 'high', 'medium', 'low'].forEach(priority => {
    const items = auditResults.priorityLevels[priority];
    if (items.length > 0) {
      console.log(`\n${priority.toUpperCase()} Priority (${items.length} items):`);
      items.slice(0, 5).forEach(item => {
        console.log(`   ${item.key}: "${item.english}" [${item.issue}]`);
      });
      if (items.length > 5) {
        console.log(`   ... and ${items.length - 5} more`);
      }
    }
  });
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalEnglishKeys: auditResults.totalEnglishKeys,
      totalChineseKeys: auditResults.totalChineseKeys,
      missingCount: auditResults.missingTranslations.length,
      placeholderCount: auditResults.placeholderTranslations.length,
      emptyCount: auditResults.emptyTranslations.length,
      typeErrorCount: auditResults.typeErrorTranslations.length,
      completionRate: ((auditResults.totalEnglishKeys - 
        (auditResults.missingTranslations.length + auditResults.placeholderTranslations.length + 
         auditResults.emptyTranslations.length + auditResults.typeErrorTranslations.length)) / 
        auditResults.totalEnglishKeys * 100).toFixed(1)
    },
    categoryBreakdown: auditResults.categoryBreakdown,
    priorityBreakdown: auditResults.priorityLevels,
    missingTranslations: auditResults.missingTranslations,
    placeholderTranslations: auditResults.placeholderTranslations,
    emptyTranslations: auditResults.emptyTranslations,
    typeErrorTranslations: auditResults.typeErrorTranslations
  };
  
  fs.writeFileSync('comprehensive-missing-translations-audit.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Detailed audit report saved to: comprehensive-missing-translations-audit.json');
  
  return report;
}

// Main execution
const translations = loadTranslationFiles();

if (translations) {
  const { enTranslations, zhTranslations } = translations;
  const totalMissing = auditMissingTranslations(enTranslations, zhTranslations);
  const report = generateAuditReport();
  
  console.log('\n🎯 NEXT STEPS:');
  console.log(`1. Complete ${auditResults.missingTranslations.length} missing translations`);
  console.log(`2. Fix ${auditResults.placeholderTranslations.length} placeholder translations`);
  console.log(`3. Fill ${auditResults.emptyTranslations.length} empty translations`);
  console.log(`4. Resolve ${auditResults.typeErrorTranslations.length} type errors`);
  console.log(`5. Prioritize by: Critical → High → Medium → Low`);
  
} else {
  console.error('❌ Failed to load translation files for audit');
}

console.log('\n✅ Comprehensive missing translations audit completed!');
