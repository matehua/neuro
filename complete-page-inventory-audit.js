import fs from 'fs';
import path from 'path';

/**
 * Complete Page Inventory & Translation Audit
 * Maps every page and identifies all translation keys requiring Chinese translations
 */

console.log('📋 COMPLETE PAGE INVENTORY & TRANSLATION AUDIT');
console.log('='.repeat(60));

const pageInventory = {
  pages: [],
  translationKeys: new Set(),
  pageCategories: {
    main: [],
    locations: [],
    expertise: [],
    patientResources: [],
    gpResources: [],
    conditions: [],
    procedures: [],
    other: []
  },
  translationAudit: {
    totalKeys: 0,
    translatedKeys: 0,
    missingKeys: [],
    placeholderKeys: [],
    byCategory: {}
  }
};

/**
 * Scan all pages in the pages directory
 */
function scanAllPages() {
  console.log('🔍 Scanning all pages...');
  
  function scanDirectory(dirPath, relativePath = '') {
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relPath = path.join(relativePath, entry.name).replace(/\\/g, '/');
        
        if (entry.isDirectory()) {
          scanDirectory(fullPath, relPath);
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
          analyzePage(fullPath, relPath);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error.message);
    }
  }
  
  scanDirectory('./src/pages', 'src/pages');
}

/**
 * Analyze individual page file
 */
function analyzePage(filePath, relativePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    const pageInfo = {
      path: relativePath,
      name: path.basename(relativePath, path.extname(relativePath)),
      fullPath: filePath,
      category: categorizePageByPath(relativePath),
      translationKeys: extractTranslationKeys(content),
      hasTranslations: false,
      imports: extractImports(content),
      exports: extractExports(content),
      linesOfCode: content.split('\n').length,
      isIndexFile: relativePath.endsWith('/index.tsx') || relativePath.endsWith('/index.ts')
    };
    
    pageInfo.hasTranslations = pageInfo.translationKeys.length > 0;
    
    // Add to appropriate category
    pageInventory.pageCategories[pageInfo.category].push(pageInfo);
    pageInventory.pages.push(pageInfo);
    
    // Add translation keys to global set
    pageInfo.translationKeys.forEach(key => pageInventory.translationKeys.add(key));
    
  } catch (error) {
    console.error(`Error analyzing page ${filePath}:`, error.message);
  }
}

/**
 * Categorize page by its path
 */
function categorizePageByPath(pagePath) {
  if (pagePath.includes('/locations/')) return 'locations';
  if (pagePath.includes('/expertise/')) return 'expertise';
  if (pagePath.includes('/patient-resources/')) return 'patientResources';
  if (pagePath.includes('/gp-resources/')) return 'gpResources';
  if (pagePath.includes('/conditions/')) return 'conditions';
  if (pagePath.includes('/procedures/')) return 'procedures';
  
  // Main pages
  const mainPages = ['Home', 'About', 'Contact', 'Appointments', 'Index', 'NotFound', 'PrivacyPolicy', 'TermsOfService'];
  const pageName = path.basename(pagePath, path.extname(pagePath));
  if (mainPages.includes(pageName)) return 'main';
  
  return 'other';
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
 * Extract imports from content
 */
function extractImports(content) {
  const imports = [];
  const importRegex = /import\s+(?:(?:\{[^}]*\}|\w+|\*\s+as\s+\w+)(?:\s*,\s*(?:\{[^}]*\}|\w+))*\s+from\s+)?['"`]([^'"`]+)['"`]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  
  return imports;
}

/**
 * Extract exports from content
 */
function extractExports(content) {
  const exports = [];
  
  // Named exports
  const namedExportRegex = /export\s+(?:const|function|class|interface|type)\s+(\w+)/g;
  let match;
  while ((match = namedExportRegex.exec(content)) !== null) {
    exports.push({ type: 'named', name: match[1] });
  }
  
  // Default export
  if (content.includes('export default')) {
    const defaultExportMatch = content.match(/export\s+default\s+(?:function\s+)?(\w+)/);
    if (defaultExportMatch) {
      exports.push({ type: 'default', name: defaultExportMatch[1] });
    } else {
      exports.push({ type: 'default', name: 'anonymous' });
    }
  }
  
  return exports;
}

/**
 * Audit current translation status
 */
function auditTranslationStatus() {
  console.log('🔍 Auditing current translation status...');
  
  try {
    // Load current translations
    const enContent = fs.readFileSync('src/locales/en.ts', 'utf8');
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    
    const enObjectContent = enContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    const zhObjectContent = zhContent.replace(/export default\s*/, '').replace(/;\s*$/, '');
    
    const enTranslations = eval(`(${enObjectContent})`);
    const zhTranslations = eval(`(${zhObjectContent})`);
    
    const allKeys = Array.from(pageInventory.translationKeys);
    
    // Audit each key
    allKeys.forEach(key => {
      const hasEnglish = hasNestedKey(enTranslations, key);
      const hasChinese = hasNestedKey(zhTranslations, key);
      const chineseValue = getNestedValue(zhTranslations, key);
      
      if (!hasChinese) {
        pageInventory.translationAudit.missingKeys.push(key);
      } else if (typeof chineseValue === 'string' && 
                 (chineseValue.includes('[翻译缺失:') || chineseValue.includes('[需要翻译:'))) {
        pageInventory.translationAudit.placeholderKeys.push(key);
      } else {
        pageInventory.translationAudit.translatedKeys++;
      }
    });
    
    pageInventory.translationAudit.totalKeys = allKeys.length;
    
    // Audit by category
    Object.entries(pageInventory.pageCategories).forEach(([category, pages]) => {
      const categoryKeys = new Set();
      pages.forEach(page => {
        page.translationKeys.forEach(key => categoryKeys.add(key));
      });
      
      const categoryKeysArray = Array.from(categoryKeys);
      const translatedInCategory = categoryKeysArray.filter(key => 
        hasNestedKey(zhTranslations, key) && 
        !getNestedValue(zhTranslations, key)?.includes?.('[翻译缺失:') &&
        !getNestedValue(zhTranslations, key)?.includes?.('[需要翻译:')
      ).length;
      
      pageInventory.translationAudit.byCategory[category] = {
        totalKeys: categoryKeysArray.length,
        translatedKeys: translatedInCategory,
        completionRate: categoryKeysArray.length > 0 ? 
          ((translatedInCategory / categoryKeysArray.length) * 100).toFixed(1) : '0.0'
      };
    });
    
  } catch (error) {
    console.error('❌ Failed to audit translations:', error.message);
  }
}

/**
 * Helper functions
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
 * Generate comprehensive report
 */
function generateInventoryReport() {
  console.log('\n📋 PAGE INVENTORY & TRANSLATION AUDIT RESULTS:');
  console.log('='.repeat(50));
  
  // Page statistics
  console.log(`📄 Total Pages: ${pageInventory.pages.length}`);
  console.log(`🌐 Pages with Translations: ${pageInventory.pages.filter(p => p.hasTranslations).length}`);
  
  // Category breakdown
  console.log('\n📁 Pages by Category:');
  Object.entries(pageInventory.pageCategories).forEach(([category, pages]) => {
    if (pages.length > 0) {
      console.log(`   ${category}: ${pages.length} pages`);
    }
  });
  
  // Translation audit
  const { translationAudit } = pageInventory;
  console.log('\n🌐 Translation Status:');
  console.log(`   Total Keys: ${translationAudit.totalKeys}`);
  console.log(`   Translated: ${translationAudit.translatedKeys}`);
  console.log(`   Missing: ${translationAudit.missingKeys.length}`);
  console.log(`   Placeholders: ${translationAudit.placeholderKeys.length}`);
  
  const completionRate = translationAudit.totalKeys > 0 ? 
    ((translationAudit.translatedKeys / translationAudit.totalKeys) * 100).toFixed(1) : '0.0';
  console.log(`   Completion Rate: ${completionRate}%`);
  
  // Category completion rates
  console.log('\n📊 Completion by Category:');
  Object.entries(translationAudit.byCategory).forEach(([category, stats]) => {
    if (stats.totalKeys > 0) {
      console.log(`   ${category}: ${stats.completionRate}% (${stats.translatedKeys}/${stats.totalKeys})`);
    }
  });
  
  // Save detailed report
  const reportData = {
    ...pageInventory,
    translationKeys: Array.from(pageInventory.translationKeys),
    generatedAt: new Date().toISOString()
  };
  
  fs.writeFileSync('complete-page-inventory-report.json', JSON.stringify(reportData, null, 2));
  console.log('\n📄 Detailed inventory report saved to: complete-page-inventory-report.json');
  
  // Show sample missing keys
  if (translationAudit.missingKeys.length > 0) {
    console.log('\n❌ Sample Missing Keys:');
    translationAudit.missingKeys.slice(0, 10).forEach(key => {
      console.log(`   ${key}`);
    });
  }
  
  // Show sample placeholder keys
  if (translationAudit.placeholderKeys.length > 0) {
    console.log('\n⚠️  Sample Placeholder Keys:');
    translationAudit.placeholderKeys.slice(0, 10).forEach(key => {
      console.log(`   ${key}`);
    });
  }
}

// Main execution
scanAllPages();
auditTranslationStatus();
generateInventoryReport();

console.log('\n✅ Complete page inventory and translation audit finished!');
