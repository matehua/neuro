import fs from 'fs';

/**
 * Location-Specific Content Translation
 * Translates all location descriptions, addresses, and facility information
 */

console.log('📍 LOCATION-SPECIFIC CONTENT TRANSLATION');
console.log('='.repeat(60));

const locationTranslations = {
  // Main locations navigation
  locations: {
    title: "诊所位置",
    subtitle: "我们在墨尔本多个便利位置为您提供服务",
    description: "选择最适合您的诊所位置，我们在每个地点都提供相同的高质量神经外科护理。",
    
    // Surrey Hills - Main location
    surreyHills: {
      title: "萨里山诊所",
      subtitle: "主要诊所",
      address: "619 Canterbury Road, Surrey Hills VIC 3127",
      phone: "(03) 9830 8566",
      fax: "(03) 9830 8577",
      email: "info@mineuro.com.au",
      description: "我们的主要诊所位于萨里山，配备最先进的神经外科设施和技术。这里是我们的总部，提供全面的神经外科服务。",
      features: {
        title: "诊所特色",
        items: [
          "最先进的神经外科设备",
          "经验丰富的医疗团队",
          "舒适的候诊区域",
          "便利的停车设施",
          "无障碍通道",
          "现代化的检查室"
        ]
      },
      services: {
        title: "提供的服务",
        items: [
          "神经外科咨询",
          "脑部手术",
          "脊柱手术",
          "神经系统检查",
          "影像学诊断",
          "术后随访"
        ]
      },
      hours: {
        title: "营业时间",
        monday: "周一: 8:00 AM - 5:00 PM",
        tuesday: "周二: 8:00 AM - 5:00 PM",
        wednesday: "周三: 8:00 AM - 5:00 PM",
        thursday: "周四: 8:00 AM - 5:00 PM",
        friday: "周五: 8:00 AM - 5:00 PM",
        saturday: "周六: 预约制",
        sunday: "周日: 休息"
      },
      directions: {
        title: "交通指南",
        byTrain: "乘坐火车：从市中心乘坐Belgrave/Lilydale线至Mont Albert站，步行10分钟。",
        byCar: "驾车：从市中心沿Canterbury Road向东行驶约15分钟。",
        parking: "停车：诊所提供免费停车位。",
        publicTransport: "公共交通：多条公交线路经过，交通便利。"
      }
    },
    
    // Mornington
    mornington: {
      title: "莫宁顿诊所",
      subtitle: "半岛地区服务",
      address: "Mornington Peninsula, VIC",
      phone: "(03) 9830 8566",
      description: "为莫宁顿半岛地区的患者提供便利的神经外科服务，无需长途跋涉到市中心。",
      features: {
        title: "诊所特色",
        items: [
          "服务半岛地区患者",
          "现代化医疗设备",
          "专业医疗团队",
          "舒适的就诊环境",
          "便利的位置",
          "充足的停车位"
        ]
      },
      services: {
        title: "提供的服务",
        items: [
          "神经外科咨询",
          "术前评估",
          "术后随访",
          "神经系统检查",
          "治疗计划制定",
          "患者教育"
        ]
      },
      hours: {
        title: "营业时间",
        note: "预约制服务，请提前致电安排。"
      }
    },
    
    // Frankston
    frankston: {
      title: "弗兰克斯顿诊所",
      subtitle: "南部地区服务",
      address: "Frankston, VIC",
      phone: "(03) 9830 8566",
      description: "为墨尔本南部地区的患者提供专业的神经外科服务，地理位置优越，交通便利。",
      features: {
        title: "诊所特色",
        items: [
          "服务南部地区",
          "专业神经外科团队",
          "现代化设施",
          "患者友好环境",
          "便利交通",
          "预约制服务"
        ]
      },
      services: {
        title: "提供的服务",
        items: [
          "专科咨询",
          "诊断评估",
          "治疗规划",
          "随访护理",
          "患者支持",
          "医疗协调"
        ]
      }
    },
    
    // Moonee Ponds
    mooneePonds: {
      title: "月亮池塘诊所",
      subtitle: "西北部地区服务",
      address: "Moonee Ponds, VIC",
      phone: "(03) 9830 8566",
      description: "为墨尔本西北部地区的患者提供便利的神经外科服务，减少患者的出行负担。",
      features: {
        title: "诊所特色",
        items: [
          "服务西北部地区",
          "经验丰富的团队",
          "现代化诊疗设备",
          "舒适的环境",
          "便利的位置",
          "个性化护理"
        ]
      },
      services: {
        title: "提供的服务",
        items: [
          "神经外科咨询",
          "病情评估",
          "治疗建议",
          "术后护理",
          "康复指导",
          "长期随访"
        ]
      }
    },
    
    // Additional locations
    langwarrin: {
      title: "朗瓦林诊所",
      subtitle: "半岛南部服务",
      address: "Langwarrin, VIC",
      phone: "(03) 9830 8566",
      description: "为半岛南部地区的患者提供专业的神经外科服务。",
      services: {
        title: "提供的服务",
        items: [
          "专科咨询",
          "诊断服务",
          "治疗规划",
          "随访护理"
        ]
      }
    },
    
    // General location information
    general: {
      title: "所有诊所位置",
      subtitle: "选择最便利的位置",
      description: "我们在墨尔本多个地点提供相同标准的高质量神经外科护理。",
      commonFeatures: {
        title: "所有诊所的共同特色",
        items: [
          "经验丰富的神经外科专家",
          "最新的医疗设备和技术",
          "舒适安全的就诊环境",
          "个性化的患者护理",
          "便利的预约系统",
          "全面的医疗服务"
        ]
      },
      bookingInfo: {
        title: "预约信息",
        description: "所有诊所均采用预约制，请提前致电或在线预约。",
        phone: "预约电话：(03) 9830 8566",
        email: "预约邮箱：info@mineuro.com.au",
        online: "在线预约：通过我们的网站预约系统"
      },
      accessibility: {
        title: "无障碍设施",
        description: "所有诊所均配备无障碍设施，为行动不便的患者提供便利。",
        features: [
          "轮椅通道",
          "无障碍停车位",
          "无障碍洗手间",
          "电梯设施",
          "辅助设备"
        ]
      }
    }
  },
  
  // Location-specific navigation
  nav: {
    locationsSubmenu: {
      surreyHills: "萨里山",
      mornington: "莫宁顿",
      frankston: "弗兰克斯顿",
      mooneePonds: "月亮池塘",
      langwarrin: "朗瓦林",
      allLocations: "所有位置"
    }
  },
  
  // Contact information for locations
  contactInfo: {
    mainOffice: {
      title: "主要办公室",
      address: "619 Canterbury Road, Surrey Hills VIC 3127",
      phone: "(03) 9008 4200",
      fax: "(03) 9923 6688",
      email: "info@mineuro.com.au"
    },
    emergencyContact: {
      title: "紧急联系",
      description: "如遇紧急情况，请拨打000或前往最近的急诊科。",
      afterHours: "非工作时间紧急情况请拨打：000",
      businessHours: "工作时间神经外科紧急咨询：(03) 9008 4200",
      epworthRichmond: {
        title: "Epworth Richmond医院急诊科（24小时开放）",
        address: "62 Erin Street, Richmond Victoria 3121",
        phone: "(03) 9506 3000",
        website: "https://www.epworth.org.au/Our-Services/Emergency"
      }
    },
    generalInquiries: {
      title: "一般咨询",
      description: "如有任何问题或需要预约，请联系我们的接待团队。",
      phone: "电话：(03) 9008 4200",
      email: "邮箱：info@mineuro.com.au",
      hours: "接待时间：周一至周五 8:30 AM - 5:30 PM"
    }
  }
};

/**
 * Load existing Chinese translations
 */
function loadExistingTranslations() {
  try {
    const content = fs.readFileSync('src/locales/zh.ts', 'utf8');
    const objectContent = content
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    return eval(`(${objectContent})`);
  } catch (error) {
    console.error('❌ Failed to load existing translations:', error.message);
    return {};
  }
}

/**
 * Merge translations recursively
 */
function mergeTranslations(existing, newTranslations) {
  const result = JSON.parse(JSON.stringify(existing)); // Deep clone
  
  function merge(target, source) {
    for (const [key, value] of Object.entries(source)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        if (typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
          merge(target[key], value);
        } else {
          target[key] = value;
        }
      } else {
        target[key] = value;
      }
    }
  }
  
  merge(result, newTranslations);
  return result;
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
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result += `${spaces}  ${key}: ${objectToTypeScript(value, indent + 1)}${isLast ? '' : ','}\n`;
    } else if (Array.isArray(value)) {
      result += `${spaces}  ${key}: ${JSON.stringify(value)}${isLast ? '' : ','}\n`;
    } else {
      const escapedValue = typeof value === 'string' ? value.replace(/"/g, '\\"') : value;
      result += `${spaces}  ${key}: "${escapedValue}"${isLast ? '' : ','}\n`;
    }
  }
  
  result += `${spaces}}`;
  return result;
}

// Main implementation
console.log('📖 Loading existing translations...');
const existingTranslations = loadExistingTranslations();

console.log('🔄 Merging location-specific translations...');
const mergedTranslations = mergeTranslations(existingTranslations, locationTranslations);

console.log('💾 Writing updated Chinese translations...');
const newContent = `export default ${objectToTypeScript(mergedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-location-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write new translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Location-specific translations implemented!');
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-location-${timestamp}`);

// Count added translations
function countNestedKeys(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      count += countNestedKeys(value);
    } else {
      count += 1;
    }
  }
  return count;
}

const addedCount = countNestedKeys(locationTranslations);
console.log(`📈 Added ${addedCount} location-specific translations`);
