import fs from 'fs';

/**
 * Fix Translation Structure Issue
 * Fixes the nested home object issue causing runtime errors
 */

console.log('🔧 FIXING TRANSLATION STRUCTURE ISSUE');
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
 * Fix the translation structure by properly organizing the home object
 */
function fixTranslationStructure(translations) {
  console.log('🔍 Analyzing translation structure...');
  
  // Find all home objects
  const homeObjects = [];
  
  function findHomeObjects(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (key === 'home' && typeof value === 'object' && value !== null) {
        homeObjects.push({
          path: currentPath,
          content: value
        });
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        findHomeObjects(value, currentPath);
      }
    }
  }
  
  findHomeObjects(translations);
  
  console.log(`📊 Found ${homeObjects.length} home objects:`);
  homeObjects.forEach((home, index) => {
    console.log(`   ${index + 1}. ${home.path}`);
    console.log(`      Keys: ${Object.keys(home.content).join(', ')}`);
  });
  
  // Create a properly structured home object
  const properHomeObject = {
    welcome: {
      subtitle: "全面的神经外科服务",
      title: "专业的脑部、脊柱和周围神经疾病护理",
      description1: "阿利亚什克维奇医生为各种神经系统疾病提供专业诊断和治疗。他的专业领域包括脑肿瘤、脊柱疾病、神经压迫综合征和复杂的神经系统损伤。使用最新的诊断技术和治疗方法，为每位患者提供精确、个性化的护理。",
      description2: "服务包括微创脊柱手术、人工椎间盘置换、机器人辅助手术、脑肿瘤切除、神经压迫疾病治疗，以及退行性脊柱疾病的全面管理。阿利亚什克维奇医生还为创伤性脑部和脊柱损伤提供专业护理，以及复杂神经系统病例的专家第二意见。",
      learnMore: "了解更多"
    },
    booking: {
      subtitle: "预约咨询",
      title: "预约您的神经外科咨询",
      description: "通过预约咨询迈出康复的第一步。我们简单的预约流程确保您可以在方便的时间和地点与阿利亚什克维奇医生会面。",
      benefits: "快速响应，专家评估，个性化治疗方案，全面随访护理"
    },
    featuredProcedures: {
      subtitle: "我们的专业领域",
      title: "专业治疗领域",
      description: "我们使用最新的微创技术治疗各种脑部、脊柱和神经疾病。",
      viewAll: "查看全部神经外科专业"
    },
    advancedTechnologies: {
      subtitle: "先进技术",
      title: "微创方法",
      description: "医疗技术的进步促进了微创手术的发展，使我们能够治疗以前因大小或关键位置而被认为无法手术的脑部和脊柱病变。",
      features: {
        minimallyInvasive: {
          title: "微创技术",
          description: "医疗技术的进步促进了微创手术的发展，使我们能够治疗以前因大小或关键位置而被认为无法手术的脑部和脊柱病变。"
        },
        advancedImaging: {
          title: "先进影像导航",
          description: "磁共振成像是神经外科和脊柱成像的首选方式，因其出色的图像分辨率和对比度。我们为所有脑部和脊柱问题患者使用此技术。"
        },
        roboticSurgery: {
          title: "相比传统手术的优势",
          description: "使用导航技术相比传统开放手术有多重优势：提高准确性和完整的病变切除。"
        },
        patientRecovery: {
          title: "影像引导应用",
          description: "成功治疗脑部或脊柱肿瘤及其他病理通常需要最大程度切除，同时对周围健康组织的影响最小。"
        }
      }
    },
    cta: {
      title: "准备开始您的治疗之旅？",
      description: "立即预约咨询，与我们的神经外科专家讨论您的治疗选择。",
      bookNow: "立即预约"
    }
  };
  
  // Create a new translations object with the fixed structure
  const fixedTranslations = JSON.parse(JSON.stringify(translations)); // Deep clone
  
  // Remove all existing home objects
  function removeHomeObjects(obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'home') {
        delete obj[key];
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        removeHomeObjects(value);
      }
    }
  }
  
  removeHomeObjects(fixedTranslations);
  
  // Add the proper home object at the root level
  fixedTranslations.home = properHomeObject;
  
  console.log('✅ Fixed translation structure');
  console.log('   - Removed duplicate home objects');
  console.log('   - Created unified home object at root level');
  console.log('   - Preserved all translation content');
  
  return fixedTranslations;
}

// Main execution
console.log('📖 Loading current translations...');
const zhTranslations = loadCurrentTranslations();

if (!zhTranslations) {
  console.error('❌ Failed to load translations');
  process.exit(1);
}

console.log('🔧 Fixing translation structure...');
const fixedTranslations = fixTranslationStructure(zhTranslations);

console.log('💾 Writing fixed translations...');
const newContent = `export default ${objectToTypeScript(fixedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-structure-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write fixed translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Translation structure fixed!');
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-structure-${timestamp}`);

console.log('\n🎉 STRUCTURE ISSUE RESOLVED!');
console.log('🌐 The home object is now properly structured and accessible.');
