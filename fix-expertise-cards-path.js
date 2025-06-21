import fs from 'fs';

/**
 * Fix Expertise Cards Path
 * Moves expertiseCards from nested path to root level for proper access
 */

console.log('🔧 FIXING EXPERTISE CARDS PATH');
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
 * Convert object to formatted TypeScript string
 */
function objectToTypeScript(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let result = '{\n';
  
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    const isLast = i === entries.length - 1;
    
    const needsQuotes = /[^a-zA-Z0-9_$]/.test(key);
    const formattedKey = needsQuotes ? `"${key}"` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result += `${spaces}  ${formattedKey}: ${objectToTypeScript(value, indent + 1)}${isLast ? '' : ','}\n`;
    } else if (Array.isArray(value)) {
      result += `${spaces}  ${formattedKey}: ${JSON.stringify(value)}${isLast ? '' : ','}\n`;
    } else {
      const escapedValue = typeof value === 'string' ? value.replace(/"/g, '\\"').replace(/\n/g, '\\n') : value;
      result += `${spaces}  ${formattedKey}: "${escapedValue}"${isLast ? '' : ','}\n`;
    }
  }
  
  result += `${spaces}}`;
  return result;
}

/**
 * Fix the expertise cards path issue
 */
function fixExpertiseCardsPath(translations) {
  console.log('🔍 Analyzing expertise cards location...');
  
  // Extract expertiseCards from nested location
  const expertiseCards = translations?.consultingRooms?.features?.facilities?.expertiseCards;
  
  if (!expertiseCards) {
    console.error('❌ Could not find expertiseCards in expected location');
    return translations;
  }
  
  console.log('✅ Found expertiseCards in nested location');
  console.log(`   Keys: ${Object.keys(expertiseCards).join(', ')}`);
  
  // Create updated translations with expertiseCards at root level
  const updatedTranslations = JSON.parse(JSON.stringify(translations)); // Deep clone
  
  // Add expertiseCards to root level
  updatedTranslations.expertiseCards = expertiseCards;
  
  // Remove from nested location to avoid duplication
  if (updatedTranslations.consultingRooms?.features?.facilities?.expertiseCards) {
    delete updatedTranslations.consultingRooms.features.facilities.expertiseCards;
  }
  
  console.log('✅ Moved expertiseCards to root level');
  console.log('✅ Removed from nested location');
  
  return updatedTranslations;
}

/**
 * Also need to add missing translation keys that Index.tsx expects
 */
function addMissingTranslationKeys(translations) {
  console.log('🔍 Adding missing translation keys...');
  
  // Add minimallyInvasive and discReplacement at root level if they don't exist
  if (!translations.minimallyInvasive && translations.consultingRooms?.features?.facilities?.expertiseCards?.minimallyInvasive) {
    translations.minimallyInvasive = translations.consultingRooms.features.facilities.expertiseCards.minimallyInvasive;
    console.log('✅ Added minimallyInvasive to root level');
  }
  
  if (!translations.discReplacement && translations.consultingRooms?.features?.facilities?.expertiseCards?.discReplacement) {
    translations.discReplacement = translations.consultingRooms.features.facilities.expertiseCards.discReplacement;
    console.log('✅ Added discReplacement to root level');
  }
  
  // Ensure expertiseCards has proper Chinese translations
  if (translations.expertiseCards) {
    // Update with better Chinese translations
    const improvedTranslations = {
      brainConditions: {
        title: "脑部疾病",
        description: "脑肿瘤（胶质瘤、脑膜瘤、听神经瘤、垂体腺瘤等）、脑积水、脑动脉瘤、动静脉畸形、海绵状血管瘤、癫痫、三叉神经痛、Chiari畸形。"
      },
      spinalProblems: {
        title: "脊柱问题",
        description: "颈部和背部疼痛、坐骨神经痛、臂丛神经痛、脊柱狭窄、椎间盘突出、脊椎滑脱、脊柱炎、硬膜外脓肿、脊柱不稳、脊髓病、脊髓压迫、脊柱肿瘤、脊柱血管畸形。"
      },
      nerveProblems: {
        title: "神经问题",
        description: "神经肿瘤（神经鞘瘤、神经纤维瘤、神经瘤）、神经疼痛、神经损伤、神经压迫（腕管综合征、肘管综合征）、神经和肌肉活检。"
      },
      medicolegalReports: {
        title: "医疗法律报告",
        description: "根据AMA永久性损伤指南进行损伤评估、工作能力评估、工伤赔偿、交通事故伤害、责任调查。"
      }
    };
    
    // Merge improved translations
    Object.keys(improvedTranslations).forEach(key => {
      if (translations.expertiseCards[key]) {
        translations.expertiseCards[key] = {
          ...translations.expertiseCards[key],
          ...improvedTranslations[key]
        };
      }
    });
    
    console.log('✅ Updated expertiseCards with improved Chinese translations');
  }
  
  return translations;
}

// Main execution
console.log('📖 Loading current translations...');
const zhTranslations = loadCurrentTranslations();

if (!zhTranslations) {
  console.error('❌ Failed to load translations');
  process.exit(1);
}

console.log('🔧 Fixing expertise cards path...');
let fixedTranslations = fixExpertiseCardsPath(zhTranslations);
fixedTranslations = addMissingTranslationKeys(fixedTranslations);

console.log('💾 Writing fixed translations...');
const newContent = `export default ${objectToTypeScript(fixedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-expertise-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write fixed translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Expertise cards path fixed!');
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-expertise-${timestamp}`);

console.log('\n🎉 PATH ISSUE RESOLVED!');
console.log('🌐 expertiseCards is now accessible at root level.');
console.log('📋 Index.tsx should now be able to access:');
console.log('   - finalT?.expertiseCards.brainConditions.title');
console.log('   - finalT?.expertiseCards.spinalProblems.title');
console.log('   - finalT?.expertiseCards.nerveProblems.title');
console.log('   - finalT?.expertiseCards.medicolegalReports.title');
