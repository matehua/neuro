import fs from 'fs';
import path from 'path';

let issuesFound = 0;
let pagesChecked = 0;

/**
 * Get all page files
 */
function getAllPageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllPageFiles(fullPath, files);
    } else if (['.tsx', '.ts'].includes(path.extname(item)) && !item.includes('.test.') && !item.includes('.spec.')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Extract translation keys used in a file
 */
function extractTranslationKeys(content) {
  const keys = new Set();
  
  // Pattern for finalT.key.subkey.etc
  const finalTPattern = /finalT\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g;
  let match;
  while ((match = finalTPattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Pattern for safeT.key.subkey.etc
  const safeTPattern = /safeT\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g;
  while ((match = safeTPattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Pattern for t.key.subkey.etc
  const tPattern = /\bt\.([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)*)/g;
  while ((match = tPattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  return Array.from(keys);
}

/**
 * Check if fallback object covers all used keys
 */
function checkFallbackCoverage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    console.log(`🔍 Checking: ${relativePath}`);
    pagesChecked++;
    
    // Extract all translation keys used
    const usedKeys = extractTranslationKeys(content);
    
    if (usedKeys.length === 0) {
      console.log(`✅ ${relativePath}: No translation keys used`);
      return;
    }
    
    // Find fallback definition
    const fallbackMatch = content.match(/const\s+finalT\s*=\s*safeT\s*\|\|\s*\{([\s\S]*?)\};/);
    
    if (!fallbackMatch) {
      console.log(`❌ ${relativePath}: No fallback object found, but uses keys: ${usedKeys.slice(0, 5).join(', ')}${usedKeys.length > 5 ? '...' : ''}`);
      issuesFound++;
      return;
    }
    
    const fallbackContent = fallbackMatch[1];
    
    // Check if each used key has coverage in fallback
    const missingKeys = [];
    
    for (const key of usedKeys) {
      // Simple check - see if the key path exists in fallback
      const keyParts = key.split('.');
      let hasPath = true;
      
      // Check if the root key exists in fallback
      if (!fallbackContent.includes(keyParts[0] + ':')) {
        hasPath = false;
      }
      
      if (!hasPath) {
        missingKeys.push(key);
      }
    }
    
    if (missingKeys.length > 0) {
      console.log(`❌ ${relativePath}: Missing fallback coverage for:`);
      missingKeys.slice(0, 10).forEach(key => {
        console.log(`   - ${key}`);
      });
      if (missingKeys.length > 10) {
        console.log(`   ... and ${missingKeys.length - 10} more`);
      }
      console.log();
      issuesFound++;
    } else {
      console.log(`✅ ${relativePath}: All ${usedKeys.length} translation keys have fallback coverage`);
    }

  } catch (error) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`❌ Error checking ${relativePath}: ${error.message}`);
    issuesFound++;
  }
}

/**
 * Generate fallback template for a file
 */
function generateFallbackTemplate(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const usedKeys = extractTranslationKeys(content);
    
    if (usedKeys.length === 0) return null;
    
    // Group keys by root
    const keyGroups = {};
    
    for (const key of usedKeys) {
      const parts = key.split('.');
      const root = parts[0];
      
      if (!keyGroups[root]) {
        keyGroups[root] = new Set();
      }
      
      keyGroups[root].add(key);
    }
    
    // Generate fallback structure
    let fallback = '{\n';
    
    for (const [root, keys] of Object.entries(keyGroups)) {
      fallback += `  ${root}: {\n`;
      
      const sortedKeys = Array.from(keys).sort();
      for (const key of sortedKeys) {
        const parts = key.split('.');
        const leafKey = parts[parts.length - 1];
        const fallbackValue = leafKey.charAt(0).toUpperCase() + leafKey.slice(1).replace(/([A-Z])/g, ' $1');
        fallback += `    ${parts.slice(1).join('.')}: "${fallbackValue}",\n`;
      }
      
      fallback += '  },\n';
    }
    
    fallback += '}';
    
    return fallback;
    
  } catch (error) {
    return null;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 COMPREHENSIVE FALLBACK COVERAGE AUDIT');
  console.log('='.repeat(50));
  console.log('Checking every page for translation fallback coverage...');
  console.log();

  const pageFiles = getAllPageFiles(path.join(process.cwd(), 'src/pages'));
  
  console.log(`📁 Found ${pageFiles.length} page files to check...`);
  console.log();

  pageFiles.forEach(checkFallbackCoverage);

  console.log();
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(30));
  console.log(`📄 Pages Checked: ${pagesChecked}`);
  console.log(`❌ Issues Found: ${issuesFound}`);
  
  if (issuesFound === 0) {
    console.log('🎉 All pages have proper fallback coverage!');
  } else {
    console.log('⚠️  Some pages have missing or incomplete fallback coverage.');
    console.log();
    console.log('🔧 NEXT STEPS:');
    console.log('1. Review the missing keys listed above');
    console.log('2. Add comprehensive fallback objects to each page');
    console.log('3. Test each page in the browser to verify fixes');
  }
}

main();
