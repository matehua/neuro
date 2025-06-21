import fs from 'fs';
import path from 'path';

/**
 * COMPREHENSIVE TRANSLATION ANALYSIS
 * Identifies all missing Chinese translations by comparing English and Chinese translation files
 */

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

let missingTranslations = [];
let translationStats = {
  english: 0,
  chinese: 0,
  missing: 0,
  coverage: 0
};

/**
 * Extract all translation keys from a nested object
 */
function extractKeys(obj, prefix = '') {
  const keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recursively extract keys from nested objects
      keys.push(...extractKeys(value, fullKey));
    } else {
      // This is a leaf node (actual translation)
      keys.push(fullKey);
    }
  }
  
  return keys;
}

/**
 * Check if a key exists in a nested object
 */
function hasKey(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }
  
  return true;
}

/**
 * Get value from nested object using dot notation
 */
function getValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  
  return current;
}

/**
 * Main analysis function
 */
function analyzeTranslations() {
  console.log('🔍 COMPREHENSIVE TRANSLATION ANALYSIS');
  console.log('='.repeat(50));
  
  try {
    // Read translation files
    const enPath = path.join(SRC_DIR, 'locales', 'en.ts');
    const zhPath = path.join(SRC_DIR, 'locales', 'zh.ts');
    
    if (!fs.existsSync(enPath) || !fs.existsSync(zhPath)) {
      console.error('❌ Translation files not found');
      return;
    }
    
    // Import translation objects (remove export default and evaluate)
    const enContent = fs.readFileSync(enPath, 'utf8');
    const zhContent = fs.readFileSync(zhPath, 'utf8');
    
    // Extract the object content (remove export default)
    const enObjectContent = enContent.replace(/export default\s*/, '');
    const zhObjectContent = zhContent.replace(/export default\s*/, '');
    
    // Evaluate the objects (this is safe since we control the content)
    const enTranslations = eval(`(${enObjectContent})`);
    const zhTranslations = eval(`(${zhObjectContent})`);
    
    // Extract all keys from English translations
    const enKeys = extractKeys(enTranslations);
    const zhKeys = extractKeys(zhTranslations);
    
    console.log(`📊 English translation keys: ${enKeys.length}`);
    console.log(`📊 Chinese translation keys: ${zhKeys.length}`);
    
    // Find missing translations
    missingTranslations = enKeys.filter(key => !hasKey(zhTranslations, key));
    
    // Calculate statistics
    translationStats.english = enKeys.length;
    translationStats.chinese = zhKeys.length;
    translationStats.missing = missingTranslations.length;
    translationStats.coverage = ((enKeys.length - missingTranslations.length) / enKeys.length * 100).toFixed(1);
    
    console.log(`❌ Missing Chinese translations: ${missingTranslations.length}`);
    console.log(`📈 Translation coverage: ${translationStats.coverage}%`);
    
    // Group missing translations by section
    const missingBySection = {};
    missingTranslations.forEach(key => {
      const section = key.split('.')[0];
      if (!missingBySection[section]) {
        missingBySection[section] = [];
      }
      missingBySection[section].push(key);
    });
    
    console.log('\n📋 MISSING TRANSLATIONS BY SECTION:');
    console.log('='.repeat(40));
    
    Object.entries(missingBySection).forEach(([section, keys]) => {
      console.log(`\n🔸 ${section.toUpperCase()} (${keys.length} missing):`);
      keys.slice(0, 10).forEach(key => {
        const value = getValue(enTranslations, key);
        const shortValue = typeof value === 'string' ? 
          (value.length > 60 ? value.substring(0, 60) + '...' : value) : 
          JSON.stringify(value);
        console.log(`   ${key}: "${shortValue}"`);
      });
      if (keys.length > 10) {
        console.log(`   ... and ${keys.length - 10} more`);
      }
    });
    
    // Save detailed analysis
    const analysis = {
      timestamp: new Date().toISOString(),
      statistics: translationStats,
      missingTranslations: missingTranslations,
      missingBySection: missingBySection,
      englishKeys: enKeys,
      chineseKeys: zhKeys
    };
    
    fs.writeFileSync('translation-analysis.json', JSON.stringify(analysis, null, 2));
    console.log('\n💾 Detailed analysis saved to: translation-analysis.json');
    
    // Generate missing translations with English values for reference
    const missingWithValues = {};
    missingTranslations.forEach(key => {
      const value = getValue(enTranslations, key);
      missingWithValues[key] = value;
    });
    
    fs.writeFileSync('missing-translations.json', JSON.stringify(missingWithValues, null, 2));
    console.log('💾 Missing translations with English values saved to: missing-translations.json');
    
    return {
      success: true,
      statistics: translationStats,
      missingTranslations: missingTranslations,
      missingBySection: missingBySection
    };
    
  } catch (error) {
    console.error('❌ Error analyzing translations:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Generate Chinese translations for missing keys
 */
function generateChineseTranslations() {
  console.log('\n🈯 GENERATING CHINESE TRANSLATIONS');
  console.log('='.repeat(40));
  
  try {
    // Read the missing translations
    const missingPath = 'missing-translations.json';
    if (!fs.existsSync(missingPath)) {
      console.error('❌ Missing translations file not found. Run analysis first.');
      return;
    }
    
    const missingTranslations = JSON.parse(fs.readFileSync(missingPath, 'utf8'));
    const chineseTranslations = {};
    
    // This is where we would integrate with a translation service
    // For now, we'll create a structure for manual translation
    Object.entries(missingTranslations).forEach(([key, englishValue]) => {
      chineseTranslations[key] = {
        english: englishValue,
        chinese: `[TRANSLATE: ${englishValue}]`,
        status: 'pending'
      };
    });
    
    fs.writeFileSync('chinese-translations-to-add.json', JSON.stringify(chineseTranslations, null, 2));
    console.log('💾 Chinese translations template saved to: chinese-translations-to-add.json');
    
    console.log(`\n📝 Generated ${Object.keys(chineseTranslations).length} translation entries`);
    console.log('✏️  Please review and translate the entries in chinese-translations-to-add.json');
    
  } catch (error) {
    console.error('❌ Error generating Chinese translations:', error.message);
  }
}

/**
 * Main execution
 */
function main() {
  const result = analyzeTranslations();
  
  if (result.success) {
    generateChineseTranslations();
    
    console.log('\n📊 TRANSLATION ANALYSIS SUMMARY');
    console.log('='.repeat(35));
    console.log(`✅ English keys: ${result.statistics.english}`);
    console.log(`🈯 Chinese keys: ${result.statistics.chinese}`);
    console.log(`❌ Missing: ${result.statistics.missing}`);
    console.log(`📈 Coverage: ${result.statistics.coverage}%`);
    
    if (result.statistics.missing > 0) {
      console.log('\n⚠️  TRANSLATION COMPLETION REQUIRED');
      console.log(`${result.statistics.missing} Chinese translations need to be added`);
      process.exit(1);
    } else {
      console.log('\n✅ ALL TRANSLATIONS COMPLETE');
      process.exit(0);
    }
  } else {
    console.log('\n❌ ANALYSIS FAILED');
    process.exit(1);
  }
}

main();
