import fs from 'fs';

/**
 * Patient Resources & Educational Content Translation
 * Translates patient education materials and resource content
 */

console.log('📚 PATIENT RESOURCES & EDUCATIONAL CONTENT TRANSLATION');
console.log('='.repeat(60));

const patientResourcesTranslations = {
  // Patient Resources main section
  patientResources: {
    title: "患者资源",
    subtitle: "为患者及其家属提供的综合资源和信息",
    description: "我们致力于为患者提供全面的教育资源，帮助您了解病情、治疗选择和康复过程。",
    
    // Pre-operative care
    preOperative: {
      title: "术前准备",
      subtitle: "手术前的重要准备信息",
      description: "充分的术前准备是手术成功的关键。以下信息将帮助您为手术做好准备。",
      
      preparation: {
        title: "术前准备清单",
        medical: {
          title: "医疗准备",
          items: [
            "完成所有必要的术前检查",
            "停止服用可能影响手术的药物",
            "告知医生所有当前用药",
            "报告任何过敏史",
            "完成麻醉评估",
            "确保血液检查结果正常"
          ]
        },
        lifestyle: {
          title: "生活方式调整",
          items: [
            "术前至少4周戒烟",
            "限制酒精摄入",
            "保持健康饮食",
            "适度运动",
            "充足睡眠",
            "减少压力"
          ]
        },
        practical: {
          title: "实用准备",
          items: [
            "安排术后护理人员",
            "准备舒适的家居环境",
            "购买必要的康复用品",
            "安排交通",
            "处理工作安排",
            "准备保险文件"
          ]
        }
      },
      
      instructions: {
        title: "术前指导",
        fasting: {
          title: "禁食指导",
          description: "手术前需要禁食以确保麻醉安全。",
          solid: "固体食物：手术前8小时开始禁食",
          liquid: "液体：手术前2小时开始禁水",
          medication: "必要药物可用少量水服用"
        },
        hygiene: {
          title: "个人卫生",
          items: [
            "术前晚上洗澡",
            "使用抗菌肥皂",
            "不要使用化妆品",
            "移除所有首饰",
            "修剪指甲",
            "不要涂指甲油"
          ]
        },
        arrival: {
          title: "到院指导",
          items: [
            "按时到达医院",
            "携带身份证件",
            "带上保险卡",
            "穿着舒适的衣服",
            "不要携带贵重物品",
            "由家属陪同"
          ]
        }
      }
    },
    
    // Post-operative care
    postOperative: {
      title: "术后护理",
      subtitle: "手术后的恢复指导",
      description: "术后护理对于成功康复至关重要。请仔细遵循以下指导。",
      
      immediate: {
        title: "术后即时护理",
        monitoring: {
          title: "监测要点",
          items: [
            "生命体征监测",
            "神经功能评估",
            "伤口检查",
            "疼痛评估",
            "液体平衡",
            "并发症观察"
          ]
        },
        activity: {
          title: "活动指导",
          items: [
            "按医嘱逐渐增加活动",
            "避免剧烈运动",
            "正确的体位",
            "深呼吸练习",
            "早期活动预防血栓",
            "避免长时间卧床"
          ]
        }
      },
      
      recovery: {
        title: "康复阶段",
        timeline: {
          title: "恢复时间表",
          week1: {
            title: "第1周",
            description: "重点是休息和伤口愈合，逐渐恢复基本活动。"
          },
          week2to4: {
            title: "第2-4周",
            description: "逐渐增加活动量，开始物理治疗。"
          },
          month2to3: {
            title: "第2-3个月",
            description: "继续康复训练，恢复日常活动。"
          },
          month3plus: {
            title: "3个月以上",
            description: "完全康复，恢复正常生活和工作。"
          }
        },
        signs: {
          title: "需要关注的症状",
          warning: [
            "发热超过38.5°C",
            "伤口红肿或渗液",
            "剧烈头痛",
            "视力改变",
            "言语困难",
            "肢体无力加重"
          ],
          normal: [
            "轻度疼痛",
            "疲劳感",
            "食欲不振",
            "情绪波动",
            "睡眠障碍",
            "轻微头晕"
          ]
        }
      },
      
      medications: {
        title: "用药指导",
        pain: {
          title: "疼痛管理",
          description: "按医嘱服用止痛药，不要忍受不必要的疼痛。"
        },
        antibiotics: {
          title: "抗生素",
          description: "如果开具抗生素，请按时完成整个疗程。"
        },
        other: {
          title: "其他药物",
          description: "继续服用慢性病药物，除非医生另有指示。"
        }
      }
    },
    
    // Patient education
    education: {
      title: "患者教育",
      subtitle: "了解您的病情和治疗",
      description: "教育是治疗的重要组成部分。了解您的病情有助于更好的治疗效果。",
      
      anatomy: {
        title: "解剖学基础",
        brain: {
          title: "大脑解剖",
          description: "了解大脑的基本结构和功能。"
        },
        spine: {
          title: "脊柱解剖",
          description: "了解脊柱的结构和神经系统。"
        },
        nerves: {
          title: "神经系统",
          description: "了解周围神经系统的功能。"
        }
      },
      
      conditions: {
        title: "疾病知识",
        understanding: {
          title: "理解您的病情",
          items: [
            "疾病的原因",
            "症状的发展",
            "自然病程",
            "治疗选择",
            "预后评估",
            "预防措施"
          ]
        },
        questions: {
          title: "常见问题",
          items: [
            "我的病情严重吗？",
            "需要手术治疗吗？",
            "有哪些治疗选择？",
            "康复需要多长时间？",
            "会有后遗症吗？",
            "如何预防复发？"
          ]
        }
      },
      
      lifestyle: {
        title: "生活方式指导",
        diet: {
          title: "饮食建议",
          items: [
            "均衡营养",
            "充足蛋白质",
            "维生素补充",
            "充足水分",
            "限制酒精",
            "戒烟"
          ]
        },
        exercise: {
          title: "运动指导",
          items: [
            "适度有氧运动",
            "力量训练",
            "柔韧性练习",
            "平衡训练",
            "避免高风险活动",
            "循序渐进"
          ]
        },
        stress: {
          title: "压力管理",
          items: [
            "放松技巧",
            "冥想练习",
            "充足睡眠",
            "社交支持",
            "专业咨询",
            "兴趣爱好"
          ]
        }
      }
    },
    
    // Support resources
    support: {
      title: "患者支持",
      subtitle: "我们为您提供全方位支持",
      description: "除了医疗治疗，我们还提供各种支持服务帮助您度过治疗过程。",
      
      emotional: {
        title: "情感支持",
        counseling: {
          title: "心理咨询",
          description: "专业心理咨询师提供情感支持和应对策略。"
        },
        groups: {
          title: "支持小组",
          description: "与其他患者分享经验，获得相互支持。"
        },
        family: {
          title: "家庭支持",
          description: "为家属提供指导和支持资源。"
        }
      },
      
      practical: {
        title: "实用支持",
        financial: {
          title: "经济援助",
          description: "了解保险覆盖和经济援助选项。"
        },
        transport: {
          title: "交通服务",
          description: "医院交通和停车信息。"
        },
        accommodation: {
          title: "住宿安排",
          description: "外地患者的住宿建议。"
        }
      },
      
      resources: {
        title: "资源链接",
        websites: {
          title: "有用网站",
          items: [
            "澳大利亚神经外科学会",
            "脑肿瘤基金会",
            "脊柱健康协会",
            "患者权益组织",
            "康复资源中心",
            "医疗保险信息"
          ]
        },
        books: {
          title: "推荐读物",
          items: [
            "神经外科患者指南",
            "脑部健康手册",
            "脊柱护理指南",
            "康复训练手册",
            "营养指导书籍",
            "心理健康资源"
          ]
        }
      }
    },
    
    // Exercise and rehabilitation
    exercises: {
      title: "康复训练",
      subtitle: "专业的康复指导",
      description: "适当的康复训练有助于恢复功能和预防并发症。",
      
      cervical: {
        title: "颈椎康复",
        description: "颈椎手术后的康复训练指导。",
        exercises: [
          "颈部轻柔转动",
          "肩胛骨活动",
          "上肢伸展",
          "姿势矫正",
          "深呼吸练习",
          "渐进性力量训练"
        ]
      },
      
      lumbar: {
        title: "腰椎康复",
        description: "腰椎手术后的康复训练指导。",
        exercises: [
          "骨盆倾斜",
          "腹肌强化",
          "腰背肌训练",
          "下肢伸展",
          "步行训练",
          "核心稳定性"
        ]
      },
      
      general: {
        title: "一般康复",
        description: "适用于所有患者的基础康复训练。",
        principles: [
          "循序渐进",
          "持之以恒",
          "避免疼痛",
          "专业指导",
          "个性化方案",
          "定期评估"
        ]
      }
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

console.log('🔄 Merging patient resources and educational translations...');
const mergedTranslations = mergeTranslations(existingTranslations, patientResourcesTranslations);

console.log('💾 Writing updated Chinese translations...');
const newContent = `export default ${objectToTypeScript(mergedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-patient-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write new translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Patient resources and educational translations implemented!');
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-patient-${timestamp}`);

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

const addedCount = countNestedKeys(patientResourcesTranslations);
console.log(`📈 Added ${addedCount} patient resources and educational translations`);
