import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Translation Analysis and Completion Script
 * This script analyzes the English and Chinese translation files to identify
 * missing translations and provides a complete mapping.
 */

console.log('🔍 COMPREHENSIVE TRANSLATION ANALYSIS');
console.log('='.repeat(60));

const enPath = 'src/locales/en.ts';
const zhPath = 'src/locales/zh.ts';

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
 * Check if a nested key exists in an object
 */
function hasKey(obj, keyPath) {
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
 * Get value from nested key path
 */
function getValue(obj, keyPath) {
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
 * Set value at nested key path
 */
function setValue(obj, keyPath, value) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
}

/**
 * Main analysis function
 */
function analyzeTranslations() {
  try {
    console.log('📖 Reading translation files...');
    
    if (!fs.existsSync(enPath)) {
      console.error(`❌ English translation file not found: ${enPath}`);
      return;
    }
    
    if (!fs.existsSync(zhPath)) {
      console.error(`❌ Chinese translation file not found: ${zhPath}`);
      return;
    }
    
    // Read and parse translation files
    const enContent = fs.readFileSync(enPath, 'utf8');
    const zhContent = fs.readFileSync(zhPath, 'utf8');
    
    // Parse TypeScript files more carefully
    const enObjectContent = enContent
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')  // Remove trailing semicolon
      .replace(/\/\*[\s\S]*?\*\//g, '')  // Remove block comments
      .replace(/\/\/.*$/gm, '');  // Remove line comments

    const zhObjectContent = zhContent
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')  // Remove trailing semicolon
      .replace(/\/\*[\s\S]*?\*\//g, '')  // Remove block comments
      .replace(/\/\/.*$/gm, '');  // Remove line comments

    // Evaluate the objects (this is safe since we control the content)
    let enTranslations, zhTranslations;
    try {
      enTranslations = eval(`(${enObjectContent})`);
    } catch (error) {
      console.error('❌ Error parsing English translations:', error.message);
      console.log('EN Content preview:', enObjectContent.substring(0, 200));
      return;
    }

    try {
      zhTranslations = eval(`(${zhObjectContent})`);
    } catch (error) {
      console.error('❌ Error parsing Chinese translations:', error.message);
      console.log('ZH Content preview:', zhObjectContent.substring(0, 200));
      return;
    }
    
    console.log('🔍 Analyzing translation structure...');
    
    // Extract all keys from English translations
    const enKeys = extractKeys(enTranslations);
    const zhKeys = extractKeys(zhTranslations);
    
    console.log(`📊 English translation keys: ${enKeys.length}`);
    console.log(`📊 Chinese translation keys: ${zhKeys.length}`);
    
    // Find missing translations
    const missingInZh = enKeys.filter(key => !hasKey(zhTranslations, key));
    const extraInZh = zhKeys.filter(key => !hasKey(enTranslations, key));
    
    console.log(`❌ Missing in Chinese: ${missingInZh.length}`);
    console.log(`➕ Extra in Chinese: ${extraInZh.length}`);
    
    // Calculate coverage
    const coverage = ((enKeys.length - missingInZh.length) / enKeys.length * 100).toFixed(1);
    console.log(`📈 Translation coverage: ${coverage}%`);
    
    console.log('\n🔍 DETAILED ANALYSIS:');
    console.log('='.repeat(40));
    
    if (missingInZh.length > 0) {
      console.log('\n❌ MISSING CHINESE TRANSLATIONS:');
      missingInZh.forEach((key, index) => {
        const enValue = getValue(enTranslations, key);
        console.log(`${index + 1}. ${key}`);
        console.log(`   EN: "${enValue}"`);
        console.log(`   ZH: [MISSING]`);
        console.log('');
      });
    }
    
    if (extraInZh.length > 0) {
      console.log('\n➕ EXTRA CHINESE TRANSLATIONS:');
      extraInZh.forEach((key, index) => {
        const zhValue = getValue(zhTranslations, key);
        console.log(`${index + 1}. ${key}`);
        console.log(`   ZH: "${zhValue}"`);
        console.log(`   EN: [NOT FOUND]`);
        console.log('');
      });
    }
    
    // Generate missing translations report
    const report = {
      timestamp: new Date().toISOString(),
      statistics: {
        englishKeys: enKeys.length,
        chineseKeys: zhKeys.length,
        missingInChinese: missingInZh.length,
        extraInChinese: extraInZh.length,
        coverage: parseFloat(coverage)
      },
      missingTranslations: missingInZh.map(key => ({
        key,
        englishValue: getValue(enTranslations, key)
      })),
      extraTranslations: extraInZh.map(key => ({
        key,
        chineseValue: getValue(zhTranslations, key)
      }))
    };
    
    // Save report
    fs.writeFileSync('translation-analysis-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Report saved to: translation-analysis-report.json');
    
    return { enTranslations, zhTranslations, missingInZh, report };
    
  } catch (error) {
    console.error('❌ Error analyzing translations:', error.message);
    console.error(error.stack);
  }
}

// Run the analysis
const result = analyzeTranslations();

if (result && result.missingInZh.length > 0) {
  console.log('\n🚀 Ready to generate missing translations!');
  console.log('Next step: Run the translation completion script.');
} else if (result && result.missingInZh.length === 0) {
  console.log('\n✅ All translations are complete!');
} else {
  console.log('\n❌ Analysis failed. Please check the error messages above.');
}
