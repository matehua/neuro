import fs from 'fs';
import path from 'path';

let filesFixed = 0;
let issuesFound = 0;

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
  
  return Array.from(keys);
}

/**
 * Check if a page has inadequate fallback logic
 */
function checkFallbackLogic(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check if file uses translation keys
    const usedKeys = extractTranslationKeys(content);
    if (usedKeys.length === 0) {
      return { needsFix: false, reason: 'No translation keys used' };
    }
    
    // Check for problematic fallback patterns
    const hasBadFallback = content.includes('const finalT = safeT ||') && !content.includes('safeT &&');
    
    if (hasBadFallback) {
      return { 
        needsFix: true, 
        reason: 'Uses simple fallback logic that can fail with partial objects',
        usedKeys: usedKeys.slice(0, 5)
      };
    }
    
    // Check if fallback exists at all
    const hasFallback = content.includes('const finalT =');
    if (!hasFallback && usedKeys.length > 0) {
      return {
        needsFix: true,
        reason: 'No fallback logic found but uses translation keys',
        usedKeys: usedKeys.slice(0, 5)
      };
    }
    
    return { needsFix: false, reason: 'Fallback logic appears adequate' };
    
  } catch (error) {
    return { needsFix: false, reason: `Error reading file: ${error.message}` };
  }
}

/**
 * Get all page files that need checking
 */
function getAllPageFiles() {
  const pageFiles = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (['.tsx', '.ts'].includes(path.extname(item)) && !item.includes('.test.') && !item.includes('.spec.')) {
        pageFiles.push(fullPath);
      }
    }
  }
  
  scanDirectory(path.join(process.cwd(), 'src/pages'));
  return pageFiles;
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 COMPREHENSIVE FALLBACK LOGIC AUDIT');
  console.log('='.repeat(50));
  console.log('Checking all pages for inadequate fallback logic...');
  console.log();

  const pageFiles = getAllPageFiles();
  
  console.log(`📁 Found ${pageFiles.length} page files to check...`);
  console.log();

  const problematicFiles = [];

  for (const filePath of pageFiles) {
    const relativePath = path.relative(process.cwd(), filePath);
    const result = checkFallbackLogic(filePath);
    
    if (result.needsFix) {
      console.log(`❌ ${relativePath}: ${result.reason}`);
      if (result.usedKeys) {
        console.log(`   Uses keys: ${result.usedKeys.join(', ')}${result.usedKeys.length === 5 ? '...' : ''}`);
      }
      console.log();
      problematicFiles.push({ filePath, relativePath, ...result });
      issuesFound++;
    } else {
      console.log(`✅ ${relativePath}: ${result.reason}`);
    }
  }

  console.log();
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(30));
  console.log(`📄 Files Checked: ${pageFiles.length}`);
  console.log(`❌ Issues Found: ${issuesFound}`);
  
  if (issuesFound === 0) {
    console.log('🎉 All pages have adequate fallback logic!');
  } else {
    console.log();
    console.log('🚨 CRITICAL FILES THAT NEED IMMEDIATE ATTENTION:');
    console.log('='.repeat(50));
    
    problematicFiles.forEach((file, index) => {
      console.log(`${index + 1}. ${file.relativePath}`);
      console.log(`   Issue: ${file.reason}`);
      if (file.usedKeys) {
        console.log(`   Keys: ${file.usedKeys.join(', ')}`);
      }
      console.log();
    });
    
    console.log('🔧 RECOMMENDED ACTIONS:');
    console.log('1. Fix the fallback logic in each problematic file');
    console.log('2. Use robust checking: (safeT && safeT.key && safeT.key.subkey) ? safeT : fallback');
    console.log('3. Test each page in the browser after fixing');
    console.log('4. Re-run this audit to verify fixes');
  }
}

main();
