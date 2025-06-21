import fs from 'fs';
import path from 'path';

let filesFixed = 0;

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
 * Generate fallback object for keys
 */
function generateFallbackObject(keys) {
  if (keys.length === 0) return null;
  
  // Group keys by root
  const keyGroups = {};
  
  for (const key of keys) {
    const parts = key.split('.');
    const root = parts[0];
    
    if (!keyGroups[root]) {
      keyGroups[root] = {};
    }
    
    // Build nested structure
    let current = keyGroups[root];
    for (let i = 1; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }
    
    // Set the final value
    if (parts.length > 1) {
      const finalKey = parts[parts.length - 1];
      const fallbackValue = finalKey.charAt(0).toUpperCase() + finalKey.slice(1).replace(/([A-Z])/g, ' $1');
      current[finalKey] = fallbackValue;
    }
  }
  
  return keyGroups;
}

/**
 * Convert object to string representation
 */
function objectToString(obj, indent = 2) {
  const spaces = ' '.repeat(indent);
  let result = '{\n';
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      result += `${spaces}${key}: ${objectToString(value, indent + 2)},\n`;
    } else {
      result += `${spaces}${key}: "${value}",\n`;
    }
  }
  
  result += ' '.repeat(indent - 2) + '}';
  return result;
}

/**
 * Fix a single file
 */
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check if file uses translation keys
    const usedKeys = extractTranslationKeys(content);
    if (usedKeys.length === 0) {
      return false; // No keys used, no fix needed
    }
    
    // Check if fallback already exists
    const hasFallback = content.includes('const finalT = safeT ||') || content.includes('const finalT = (safeT');
    
    if (hasFallback) {
      console.log(`⚠️  ${relativePath}: Already has fallback (may need manual review)`);
      return false;
    }
    
    // Generate fallback object
    const fallbackObj = generateFallbackObject(usedKeys);
    if (!fallbackObj) return false;
    
    const fallbackString = objectToString(fallbackObj);
    
    // Find where to insert the fallback
    const safeTMatch = content.match(/const\s+safeT\s*=\s*t\s*\|\|\s*en;/);
    if (!safeTMatch) {
      console.log(`❌ ${relativePath}: Could not find safeT declaration`);
      return false;
    }
    
    // Insert fallback after safeT declaration
    const insertPoint = safeTMatch.index + safeTMatch[0].length;
    const beforeInsert = content.substring(0, insertPoint);
    const afterInsert = content.substring(insertPoint);
    
    const fallbackCode = `\n  const finalT = safeT || ${fallbackString};`;
    
    const newContent = beforeInsert + fallbackCode + afterInsert;
    
    // Write the fixed file
    fs.writeFileSync(filePath, newContent, 'utf8');
    
    console.log(`✅ Fixed: ${relativePath} (${usedKeys.length} keys)`);
    filesFixed++;
    return true;
    
  } catch (error) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`❌ Error fixing ${relativePath}: ${error.message}`);
    return false;
  }
}

/**
 * Get files that need fixing
 */
function getFilesToFix() {
  return [
    'src/pages/Contact.tsx',
    'src/pages/Expertise.tsx',
    'src/pages/Gallery.tsx',
    'src/pages/GPResources.tsx',
    'src/pages/Index.tsx',
    'src/pages/Medicolegal.tsx',
    'src/pages/Specialties.tsx',
    'src/pages/gp-resources/Diagnostics.tsx',
    'src/pages/gp-resources/ReferralProtocols.tsx',
    'src/pages/patient-resources/ConditionInformation.tsx',
    'src/pages/patient-resources/IndividualSpineHealthProgramme.tsx',
    'src/pages/patient-resources/PatientDashboard.tsx'
  ];
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 FIXING MISSING FALLBACKS');
  console.log('='.repeat(40));
  console.log('Automatically adding fallback objects to pages...');
  console.log();

  const filesToFix = getFilesToFix();
  
  console.log(`📁 Fixing ${filesToFix.length} critical files...`);
  console.log();

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      fixFile(filePath);
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  }

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(20));
  console.log(`✅ Files Fixed: ${filesFixed}`);
  console.log(`📄 Files Processed: ${filesToFix.length}`);
  
  if (filesFixed > 0) {
    console.log();
    console.log('🎉 Fallbacks added successfully!');
    console.log('🧪 Please test each page in the browser to verify fixes.');
  }
}

main();
