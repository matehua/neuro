import fs from 'fs';
import path from 'path';

/**
 * Comprehensive Translation Key Mapping
 * Creates complete mapping of all translation keys used across components
 */

console.log('🔍 COMPREHENSIVE TRANSLATION KEY MAPPING');
console.log('='.repeat(60));

const translationMapping = {
  usedKeys: new Set(),
  keysByComponent: {},
  keysByCategory: {},
  englishKeys: {},
  chineseKeys: {},
  missingInChinese: [],
  unusedKeys: [],
  statistics: {}
};

/**
 * Load translation files
 */
function loadTranslationFiles() {
  try {
    console.log('📖 Loading translation files...');
    
    // Load English translations
    const enContent = fs.readFileSync('src/locales/en.ts', 'utf8');
    const enObjectContent = enContent
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    translationMapping.englishKeys = eval(`(${enObjectContent})`);
    
    // Load Chinese translations
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    const zhObjectContent = zhContent
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    translationMapping.chineseKeys = eval(`(${zhObjectContent})`);
    
    console.log('✅ Translation files loaded successfully');
  } catch (error) {
    console.error('❌ Failed to load translation files:', error.message);
    process.exit(1);
  }
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
 * Check if nested key exists in object
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
 * Scan all code files for translation usage
 */
function scanCodeFiles() {
  console.log('🔍 Scanning code files for translation usage...');
  
  function scanDirectory(dirPath) {
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        
        if (entry.isDirectory()) {
          if (!['node_modules', 'dist', 'build', '.git'].includes(entry.name)) {
            scanDirectory(fullPath);
          }
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name);
          if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
            scanCodeFile(fullPath);
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error.message);
    }
  }
  
  function scanCodeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
      
      // Extract translation keys
      const keys = extractTranslationKeys(content);
      
      if (keys.length > 0) {
        translationMapping.keysByComponent[relativePath] = keys;
        keys.forEach(key => translationMapping.usedKeys.add(key));
        
        // Categorize by component type
        const category = categorizeFile(relativePath);
        if (!translationMapping.keysByCategory[category]) {
          translationMapping.keysByCategory[category] = new Set();
        }
        keys.forEach(key => translationMapping.keysByCategory[category].add(key));
      }
    } catch (error) {
      console.error(`Error scanning file ${filePath}:`, error.message);
    }
  }
  
  scanDirectory('./src');
}

/**
 * Extract translation keys from content
 */
function extractTranslationKeys(content) {
  const keys = new Set();
  
  // Patterns for different translation usage
  const patterns = [
    /\bt\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g,
    /finalT\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g,
    /translations\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g,
    /t\['([^']+)'\]/g,
    /t\["([^"]+)"\]/g
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      keys.add(match[1]);
    }
  });
  
  return Array.from(keys);
}

/**
 * Categorize file by path
 */
function categorizeFile(filePath) {
  if (filePath.includes('/components/')) return 'components';
  if (filePath.includes('/pages/')) return 'pages';
  if (filePath.includes('/hooks/')) return 'hooks';
  if (filePath.includes('/contexts/')) return 'contexts';
  if (filePath.includes('/services/')) return 'services';
  if (filePath.includes('/utils/') || filePath.includes('/lib/')) return 'utils';
  return 'other';
}

/**
 * Analyze missing translations
 */
function analyzeMissingTranslations() {
  console.log('🔍 Analyzing missing translations...');
  
  const allEnglishKeys = extractAllKeys(translationMapping.englishKeys);
  const allChineseKeys = extractAllKeys(translationMapping.chineseKeys);
  const usedKeysArray = Array.from(translationMapping.usedKeys);
  
  // Find missing Chinese translations for used keys
  usedKeysArray.forEach(key => {
    if (!hasNestedKey(translationMapping.chineseKeys, key)) {
      translationMapping.missingInChinese.push(key);
    }
  });
  
  // Find unused English keys
  allEnglishKeys.forEach(key => {
    if (!translationMapping.usedKeys.has(key)) {
      translationMapping.unusedKeys.push(key);
    }
  });
  
  // Calculate statistics
  translationMapping.statistics = {
    totalEnglishKeys: allEnglishKeys.length,
    totalChineseKeys: allChineseKeys.length,
    totalUsedKeys: usedKeysArray.length,
    missingInChinese: translationMapping.missingInChinese.length,
    unusedKeys: translationMapping.unusedKeys.length,
    chineseCoverage: ((usedKeysArray.length - translationMapping.missingInChinese.length) / usedKeysArray.length * 100).toFixed(1),
    overallCoverage: ((allChineseKeys.length / allEnglishKeys.length) * 100).toFixed(1)
  };
}

/**
 * Generate detailed report
 */
function generateReport() {
  console.log('\n📊 TRANSLATION KEY MAPPING RESULTS:');
  console.log('='.repeat(50));
  
  console.log(`📊 Total English Keys: ${translationMapping.statistics.totalEnglishKeys}`);
  console.log(`📊 Total Chinese Keys: ${translationMapping.statistics.totalChineseKeys}`);
  console.log(`📊 Total Used Keys: ${translationMapping.statistics.totalUsedKeys}`);
  console.log(`❌ Missing in Chinese: ${translationMapping.statistics.missingInChinese}`);
  console.log(`🗑️  Unused Keys: ${translationMapping.statistics.unusedKeys}`);
  console.log(`📈 Chinese Coverage (Used): ${translationMapping.statistics.chineseCoverage}%`);
  console.log(`📈 Overall Coverage: ${translationMapping.statistics.overallCoverage}%`);
  
  console.log('\n📁 Keys by Category:');
  Object.entries(translationMapping.keysByCategory).forEach(([category, keys]) => {
    console.log(`   ${category}: ${keys.size} keys`);
  });
  
  // Convert Sets to Arrays for JSON serialization
  const reportData = {
    ...translationMapping,
    usedKeys: Array.from(translationMapping.usedKeys),
    keysByCategory: Object.fromEntries(
      Object.entries(translationMapping.keysByCategory).map(([k, v]) => [k, Array.from(v)])
    )
  };
  
  fs.writeFileSync('translation-key-mapping-report.json', JSON.stringify(reportData, null, 2));
  console.log('\n📄 Detailed mapping report saved to: translation-key-mapping-report.json');
}

// Main execution
loadTranslationFiles();
scanCodeFiles();
analyzeMissingTranslations();
generateReport();

console.log('\n✅ Translation key mapping complete!');
