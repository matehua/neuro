import fs from 'fs';

/**
 * Page-by-Page Translation Implementation
 * Systematically translates every page content with medical accuracy
 */

console.log('📄 PAGE-BY-PAGE TRANSLATION IMPLEMENTATION');
console.log('='.repeat(60));

// Load medical dictionary for accurate translations
let medicalDictionary = {};
try {
  const dictData = fs.readFileSync('comprehensive-medical-dictionary.json', 'utf8');
  const dict = JSON.parse(dictData);
  medicalDictionary = dict.terms;
} catch (error) {
  console.warn('⚠️  Could not load medical dictionary:', error.message);
}

const pageTranslations = {
  // Main pages
  appointments: {
    title: "预约咨询",
    subtitle: "安排您的神经外科咨询",
    description1: "我们的专家团队随时为您提供专业的神经外科咨询服务。",
    description2: "请填写以下信息以安排您的预约。",
    
    process: {
      title: "预约流程",
      subtitle: "简单的四步预约流程",
      steps: {
        initialConsultation: {
          title: "初次咨询",
          description: "与我们的神经外科专家进行详细的初次咨询，讨论您的症状、病史和关注的问题。"
        },
        investigations: {
          title: "检查评估",
          description: "根据需要进行相关的医学检查和影像学评估，包括MRI、CT扫描等。"
        },
        discussionOptions: {
          title: "讨论治疗选择",
          description: "详细讨论所有可用的治疗选择，包括手术和非手术方案。"
        },
        treatmentDecisions: {
          title: "治疗决策",
          description: "与您共同制定最适合您情况的个性化治疗方案。"
        }
      }
    },
    
    appointmentInfo: {
      title: "预约信息",
      referralRequirements: {
        title: "转诊要求",
        description1: "为了获得Medicare报销，您需要来自全科医生或其他专科医生的转诊信。",
        description2: "如果您没有转诊信，我们仍然可以为您提供咨询，但费用将完全自费。"
      },
      whatToBring: {
        title: "请携带以下物品",
        items: [
          "转诊信（如有）",
          "Medicare卡",
          "私人健康保险卡（如有）",
          "相关的医学影像（X光、MRI、CT扫描）",
          "当前用药清单",
          "相关的医疗报告"
        ],
        description: "请确保携带所有相关的医疗文件，以便我们为您提供最准确的评估。"
      },
      consultationProcess: {
        title: "咨询流程",
        description1: "初次咨询通常需要45-60分钟。",
        description2: "我们将详细了解您的病史、进行体格检查，并讨论您的症状。",
        description3: "根据需要，我们可能会建议进行进一步的检查或影像学评估。"
      },
      telehealth: {
        title: "远程医疗咨询",
        description1: "我们提供远程医疗咨询服务，适用于随访预约和某些初次咨询。",
        description2: "远程咨询通过安全的视频通话平台进行，确保您的隐私和医疗信息安全。"
      }
    },
    
    requestForm: {
      title: "预约申请表",
      firstName: "名字",
      lastName: "姓氏",
      email: "邮箱地址",
      phone: "电话号码",
      preferredLocation: "首选诊所",
      selectLocation: "请选择诊所",
      reason: "咨询原因",
      reasonPlaceholder: "请简要描述您的症状或关注的问题",
      referral: "转诊情况",
      selectOption: "请选择选项",
      haveReferral: "我有转诊信",
      needReferralInfo: "我需要转诊信息",
      submit: "提交申请",
      confirmation: "感谢您的预约申请。我们将在24小时内与您联系确认预约时间。"
    },
    
    investigations: {
      title: "检查和评估",
      description1: "根据您的症状和初次咨询结果，我们可能会建议进行以下检查：",
      description2: "所有检查都将在我们的合作医疗机构进行，确保高质量的诊断服务。",
      items: [
        "磁共振成像（MRI）",
        "计算机断层扫描（CT）",
        "X光检查",
        "神经传导检查",
        "肌电图（EMG）",
        "血液检查",
        "骨密度检查"
      ],
      description3: "我们将为您安排所有必要的检查，并确保您了解每项检查的目的和过程。"
    },
    
    treatmentOptions: {
      title: "治疗选择",
      description1: "我们提供全面的治疗选择，从保守治疗到先进的外科手术。",
      description2: "每个治疗方案都将根据您的具体情况进行个性化定制。",
      description3: "我们的目标是为您提供最有效、最安全的治疗方案。",
      description4: "所有治疗决策都将与您充分讨论，确保您完全了解并同意治疗方案。"
    },
    
    fees: {
      title: "费用信息",
      subtitle: "透明的收费结构",
      initialConsultation: {
        title: "初次咨询",
        description: "包括详细的病史采集、体格检查和治疗建议",
        fee: "$450",
        rebate: "$230",
        outOfPocket: "$220"
      },
      reviewConsultation: {
        title: "复诊咨询",
        description: "随访检查和治疗进展评估",
        fee: "$280",
        rebate: "$150",
        outOfPocket: "$130"
      },
      insuranceOptions: {
        title: "保险选择",
        privateHealth: {
          title: "私人健康保险",
          description: "我们与大多数私人健康保险公司合作，可能覆盖部分或全部费用。"
        },
        tac: {
          title: "交通事故委员会（TAC）",
          description: "交通事故相关的伤害可能由TAC承保。"
        },
        veteranAffairs: {
          title: "退伍军人事务部",
          description: "符合条件的退伍军人可能享受特殊费用安排。"
        },
        workCover: {
          title: "工伤保险",
          description: "工作相关的伤害可能由WorkCover承保。"
        }
      }
    },
    
    privacy: {
      title: "隐私和保密",
      description1: "我们严格遵守澳大利亚隐私法律，保护您的个人和医疗信息。",
      description2: "您的所有医疗信息都将被严格保密，只有在您同意的情况下才会与其他医疗专业人员分享。"
    },
    
    locations: {
      title: "诊所位置",
      subtitle1: "我们在墨尔本多个地点提供服务",
      subtitle2: "选择最方便的位置进行您的咨询",
      mainOffice: {
        title: "萨里山主诊所",
        address: {
          split: ["619 Canterbury Road", "Surrey Hills VIC 3127"]
        },
        phone: "(03) 9830 8566",
        fax: "(03) 9830 8577",
        email: "info@mineuro.com.au",
        viewDetails: "查看详情"
      },
      allLocations: "所有诊所位置",
      viewAllLocations: "查看所有位置"
    },
    
    // Common fields
    fee: "费用",
    medicareRebate: "Medicare报销",
    outOfPocketCost: "自付费用",
    phone: "电话",
    fax: "传真",
    email: "邮箱"
  },

  // Contact page
  contact: {
    title: "联系我们",
    subtitle: "我们随时为您提供帮助",
    getInTouch: "联系我们",
    address: "地址",
    phone: "电话",
    email: "邮箱",
    receptionHours: "接待时间",
    sendMessage: "发送消息",
    fullName: "全名",
    phoneNumber: "电话号码",
    subject: "主题",
    message: "留言内容",
    howCanWeHelp: "我们如何为您提供帮助？",
    send: "发送",
    messageSent: "消息已发送",
    thankYou: "感谢您的留言，我们将尽快回复。"
  },

  // Consulting Rooms
  consultingRooms: {
    hero: {
      title: "在萨里山扩展您的医疗实践",
      subtitle: "专业环境",
      description: "在萨里山的miNEURO医疗咨询套房租用全套设备的医疗咨询室。对于医疗专业人士来说，我们的先进空间位于主要医疗设施和交通枢纽附近，是理想之选。无论您需要临时还是永久设置，我们在充满活力的购物区的黄金位置提供现代化和便捷的工作空间，以提供一流的患者护理。",
      scheduleViewing: "安排参观"
    },
    features: {
      convenientLocation: {
        title: "便利位置",
        description: "我们的设施距离繁忙的博士山医疗中心、爱普沃斯东部医院、几家全科诊所和繁忙的购物/商业/交通区域仅几分钟车程。"
      },
      fullyEquipped: {
        title: "全套设备房间",
        description: "我们的咨询室配备了现代化的医疗设备、经验丰富的接待员、检查台、人体工学座椅、电脑、洗手池和高速互联网接入。"
      },
      flexibleTerms: {
        title: "灵活的许可条款",
        description: "我们提供灵活的许可条款，包括临时、短期和长期租赁选项，以满足您的需求。"
      },
      customisation: {
        title: "定制选项",
        description: "无论您需要额外的医疗设备还是特定的房间配置，我们都提供定制选项以满足您的要求。"
      },
      receptionistSupport: {
        title: "接待员支持",
        description: "从迎接患者到管理预约和咨询，我们经验丰富的接待员在这里协助您提供卓越的患者护理。"
      },
      professionalEnvironment: {
        title: "专业环境",
        description: "从温馨的接待区到设备齐全的咨询室，我们优先为所有使用者创造积极的体验。"
      }
    }
  },

  // Gallery
  gallery: {
    title: "诊所图库",
    subtitle: "探索我们现代化的医疗设施",
    filters: {
      all: "全部",
      exterior: "外观",
      rooms: "诊室",
      amenities: "设施"
    }
  },

  // FAQ
  nav: {
    faq: "常见问题"
  },
  
  // Home page elements
  home: {
    welcome: {
      learnMore: "了解更多"
    },
    featuredProcedures: {
      title: "特色治疗项目",
      viewAll: "查看全部"
    },
    cta: {
      title: "准备开始您的治疗之旅？",
      description: "立即预约咨询，与我们的神经外科专家讨论您的治疗选择。",
      bookNow: "立即预约"
    }
  },

  // GP Resources
  gpResources: {
    careCoordination: {
      title: "护理协调",
      subtitle: "与全科医生的协作护理",
      description: "我们与全科医生密切合作，确保为患者提供无缝的护理体验。",
      teamApproach: {
        title: "团队护理方法",
        description: "我们采用多学科团队方法，包括神经外科医生、全科医生、护士和其他专业人员，为患者提供全面的护理。"
      },
      preoperativeManagement: {
        title: "术前管理",
        description: "我们与您的全科医生合作，确保患者在手术前得到适当的准备和评估。"
      },
      postoperativeFollowUp: {
        title: "术后随访",
        description: "手术后，我们与全科医生协调，确保患者得到持续的护理和监测。"
      },
      sharedCareModels: {
        title: "共享护理模式",
        description: "我们建立了有效的共享护理模式，确保专科护理与初级护理之间的顺畅过渡。"
      }
    },
    diagnostics: {
      title: "诊断服务",
      subtitle: "全面的神经外科诊断",
      description: "我们提供全面的诊断服务，帮助准确诊断神经外科疾病。",
      imagingServices: {
        title: "影像学服务",
        description: "包括MRI、CT扫描、X光检查等先进的影像学诊断服务。"
      },
      neurologicalTesting: {
        title: "神经系统检查",
        description: "专业的神经系统功能评估和检查。"
      },
      laboratoryTests: {
        title: "实验室检查",
        description: "相关的血液检查和其他实验室诊断服务。"
      }
    },
    referralGuidelines: {
      title: "转诊指南",
      subtitle: "何时转诊至神经外科",
      description: "为全科医生提供的神经外科转诊指南和标准。",
      urgentReferrals: {
        title: "紧急转诊",
        description: "需要紧急神经外科评估的情况和症状。"
      },
      routineReferrals: {
        title: "常规转诊",
        description: "适合常规神经外科咨询的病情和症状。"
      },
      referralProcess: {
        title: "转诊流程",
        description: "如何进行转诊以及需要提供的信息。"
      }
    },
    communicationProtocols: {
      title: "沟通协议",
      subtitle: "有效的医生间沟通",
      description: "建立有效的沟通渠道，确保患者护理的连续性。",
      reportingStructure: {
        title: "报告结构",
        description: "标准化的报告格式和沟通协议。"
      },
      followUpProtocols: {
        title: "随访协议",
        description: "术后随访和长期护理的沟通协议。"
      },
      emergencyContact: {
        title: "紧急联系",
        description: "紧急情况下的联系方式和协议。"
      }
    }
  },

  // Expertise and Technologies
  technologiesPage: {
    title: "先进技术",
    description: "我们采用最新的医疗技术为患者提供最佳治疗效果",
    categories: {
      wellness: {
        title: "健康管理",
        description: "全面的健康管理和预防护理服务",
        items: {
          slice: "健康评估、预防护理、生活方式指导"
        }
      },
      imagingTech: {
        title: "影像技术",
        description: "先进的医学影像诊断技术",
        items: {
          slice: "MRI、CT扫描、数字X光、超声检查"
        }
      },
      services: {
        title: "医疗服务",
        description: "全面的神经外科医疗服务",
        items: {
          slice: "手术治疗、保守治疗、康复服务"
        }
      },
      brainSurgery: {
        title: "脑部手术",
        description: "先进的脑部手术技术和设备",
        items: {
          slice: "微创手术、立体定向手术、内镜手术"
        }
      }
    }
  },

  // Procedure Descriptions
  procedureDescriptions: {
    cervicalDiscReplacement: {
      title: "颈椎间盘置换术",
      description: "先进的颈椎间盘置换技术，保持颈椎的自然运动。",
      benefits: "减少疼痛、保持活动度、快速恢复"
    },
    lumbarDiscReplacement: {
      title: "腰椎间盘置换术",
      description: "创新的腰椎间盘置换技术，恢复脊柱功能。",
      benefits: "缓解疼痛、改善功能、长期效果"
    },
    imageGuidedSurgery: {
      title: "影像引导手术",
      description: "使用先进影像技术指导的精确手术。",
      benefits: "提高精确度、减少风险、更好效果"
    },
    roboticSpineSurgery: {
      title: "机器人脊柱手术",
      description: "采用机器人技术的精确脊柱手术。",
      benefits: "极高精确度、微创技术、快速恢复"
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

console.log('🔄 Merging page-by-page translations...');
const mergedTranslations = mergeTranslations(existingTranslations, pageTranslations);

console.log('💾 Writing updated Chinese translations...');
const newContent = `export default ${objectToTypeScript(mergedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-page-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write new translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Page-by-page translations implemented!');
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-page-${timestamp}`);

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

const addedCount = countNestedKeys(pageTranslations);
console.log(`📈 Added ${addedCount} page-specific translations`);
