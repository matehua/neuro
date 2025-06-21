import fs from 'fs';

/**
 * Comprehensive Translation Fix Script
 * This script systematically fixes ALL missing Chinese translations
 * identified in the screenshot analysis.
 */

console.log('🔧 COMPREHENSIVE TRANSLATION FIX');
console.log('='.repeat(60));

const zhPath = 'src/locales/zh.ts';

// Complete missing translations based on analysis
const missingTranslations = {
  // Specialties section
  specialties: {
    title: "专业领域",
    description: "我们在神经外科各个专业领域拥有丰富的经验和专业知识",
    filters: {
      complexity: "复杂程度",
      anyComplexity: "任何复杂程度",
      moderate: "中等",
      advanced: "高级",
      complex: "复杂",
      highlyComplex: "高度复杂",
      location: "位置",
      allLocations: "所有位置",
      recoveryTime: "恢复时间",
      days: "天",
      showing: "显示",
      of: "共",
      procedures: "个手术",
      resetFilters: "重置筛选",
      noMatch: "没有匹配的结果",
      adjustFilters: "请调整筛选条件"
    }
  },

  // GP Resources section
  gpResources: {
    title: "全科医生资源",
    subtitle: "为全科医生提供的专业资源和指导",
    overview: {
      title: "资源概览",
      description: "我们为全科医生提供全面的神经外科资源，包括转诊指导、诊断协议和紧急情况处理。"
    },
    emergencies: {
      title: "急诊与危险信号",
      subtitle: "识别和处理神经外科急诊",
      description: "了解需要紧急转诊的神经外科症状和体征。"
    },
    referralProtocols: {
      title: "转诊协议",
      subtitle: "标准化转诊流程",
      description: "详细的转诊指导和分诊协议，确保患者得到及时适当的治疗。",
      urgentReferrals: {
        title: "紧急转诊",
        description: "需要立即转诊的情况和处理流程。"
      },
      standardReferrals: {
        title: "标准转诊",
        description: "常规转诊的标准流程和要求。"
      },
      referralProcess: {
        title: "转诊流程",
        description: "从初步评估到专科治疗的完整转诊流程。"
      },
      triageCategories: {
        title: "分诊分类",
        description: "根据紧急程度对患者进行分类的标准。"
      }
    },
    diagnostics: {
      imagingGuidelines: {
        title: "影像学指导",
        description: "神经外科疾病的影像学检查指导原则。"
      },
      neurologicalAssessment: {
        title: "神经系统评估",
        description: "标准化的神经系统检查方法和评估工具。"
      },
      specialisedTests: {
        description: "专业的神经外科诊断测试和检查方法。"
      },
      interpretingResults: {
        title: "结果解读",
        description: "如何正确解读神经外科检查结果。"
      }
    }
  },

  // Patient Resources - Individual Spine Health Programme
  patientResources: {
    individualSpineHealthProgramme: {
      title: "个性化脊柱健康计划",
      subtitle: "量身定制的脊柱健康管理方案",
      startAssessment: "开始评估",
      exploreFeatures: "探索功能",
      journey: {
        title: "您的健康之旅",
        description: "我们的综合方法帮助您实现最佳的脊柱健康",
        approach: "我们的方法",
        assess: "评估",
        educate: "教育",
        recommend: "建议",
        track: "跟踪",
        support: "支持",
        howItWorks: "工作原理"
      },
      keyFeatures: {
        title: "主要功能",
        assessment: {
          title: "健康评估",
          description: "全面的脊柱健康评估",
          content: "通过详细的问卷和评估工具了解您的当前状况",
          button: "开始评估"
        },
        education: {
          title: "患者教育",
          description: "个性化的教育内容",
          content: "根据您的具体情况提供相关的教育材料",
          button: "学习更多"
        },
        exercisePlans: {
          title: "康复训练计划",
          description: "定制的康复训练方案",
          content: "基于您的评估结果制定个性化的康复训练计划",
          button: "查看计划"
        },
        progressTracking: {
          title: "进度跟踪",
          description: "监测您的康复进展",
          content: "实时跟踪您的康复进度和改善情况",
          button: "查看进度"
        },
        goalSetting: {
          title: "目标设定",
          description: "设定和实现健康目标",
          content: "与医疗团队一起设定现实可行的康复目标",
          button: "设定目标"
        },
        healthcareIntegration: {
          title: "医疗整合",
          description: "与您的医疗团队协作",
          content: "将您的进度与医疗提供者分享，确保协调一致的护理",
          button: "了解更多"
        }
      },
      readyToTakeControl: {
        title: "准备好掌控您的脊柱健康了吗？",
        description: "立即开始您的个性化脊柱健康之旅",
        startAssessment: "开始评估",
        scheduleConsultation: "预约咨询"
      }
    }
  },

  // Location-specific details
  dandenongLocation: {
    locationDetails1: "丹德农诊所位置详情",
    diagnosticFacilitiesDetails1: "先进的诊断设施和设备",
    therapeuticInterventions: {
      description: "提供全面的治疗干预服务"
    },
    facilities: {
      accessibleEnvironment: {
        description: "无障碍环境，方便所有患者就诊"
      }
    },
    readyToSchedule: {
      description: "准备好预约了吗？联系我们安排您的咨询。"
    }
  },

  heidelbergLocation: {
    diagnosticFacilitiesDetails1: "海德堡诊所的先进诊断设施",
    therapeuticInterventions: {
      description: "专业的治疗干预和康复服务"
    }
  },

  wantirnaLocation: {
    byCarDetails: "驾车前往万蒂纳诊所的详细路线",
    facilities: {
      description: "现代化的医疗设施和舒适的就诊环境"
    },
    readyToSchedule: {
      description: "准备好预约了吗？我们期待为您提供服务。"
    }
  }
};

/**
 * Load existing Chinese translations
 */
function loadExistingTranslations() {
  try {
    const content = fs.readFileSync(zhPath, 'utf8');
    const objectContent = content
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    return eval(`(${objectContent})`);
  } catch (error) {
    console.error('❌ Error loading existing translations:', error.message);
    process.exit(1);
  }
}

/**
 * Deep merge two objects
 */
function mergeTranslations(existing, newTranslations) {
  function deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  }
  
  return deepMerge(existing, newTranslations);
}

/**
 * Convert object to TypeScript format
 */
function objectToTypeScript(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let result = '{\n';
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result += `${spaces}  ${key}: ${objectToTypeScript(value, indent + 1)},\n`;
    } else if (Array.isArray(value)) {
      result += `${spaces}  ${key}: ${JSON.stringify(value)},\n`;
    } else {
      result += `${spaces}  ${key}: ${JSON.stringify(value)},\n`;
    }
  }
  
  result += `${spaces}}`;
  return result;
}

// Main implementation
console.log('📖 Loading existing translations...');
const existingTranslations = loadExistingTranslations();

console.log('🔄 Merging missing translations...');
const mergedTranslations = mergeTranslations(existingTranslations, missingTranslations);

console.log('💾 Writing updated Chinese translations...');
const newContent = `export default ${objectToTypeScript(mergedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`${zhPath}.backup-comprehensive-${timestamp}`, fs.readFileSync(zhPath, 'utf8'));

// Write new translations
fs.writeFileSync(zhPath, newContent, 'utf8');

console.log('✅ COMPREHENSIVE TRANSLATION FIX COMPLETED');
console.log(`📁 Backup saved: ${zhPath}.backup-comprehensive-${timestamp}`);
console.log('🎉 All critical missing translations have been added!');
