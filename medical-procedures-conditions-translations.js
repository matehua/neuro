import fs from 'fs';

/**
 * Medical Procedures & Conditions Translation
 * Translates all medical procedures, conditions, and treatment descriptions
 */

console.log('🏥 MEDICAL PROCEDURES & CONDITIONS TRANSLATION');
console.log('='.repeat(60));

const medicalTranslations = {
  // Medical conditions
  conditions: {
    // Brain conditions
    brainTumors: {
      title: "脑肿瘤",
      subtitle: "脑肿瘤的诊断和治疗",
      description: "脑肿瘤是指在脑组织中异常生长的细胞团块。我们提供全面的脑肿瘤诊断、治疗和护理服务。",
      types: {
        title: "脑肿瘤类型",
        glioma: {
          title: "胶质瘤",
          description: "起源于胶质细胞的脑肿瘤，是最常见的原发性脑肿瘤类型。"
        },
        meningioma: {
          title: "脑膜瘤",
          description: "起源于脑膜的肿瘤，通常为良性，生长缓慢。"
        },
        pituitary: {
          title: "垂体腺瘤",
          description: "发生在垂体的肿瘤，可能影响激素分泌。"
        },
        acoustic: {
          title: "听神经瘤",
          description: "发生在听神经上的良性肿瘤，可能影响听力和平衡。"
        }
      },
      symptoms: {
        title: "常见症状",
        items: [
          "持续性头痛",
          "癫痫发作",
          "视力或听力改变",
          "言语困难",
          "平衡问题",
          "记忆力减退",
          "性格改变",
          "恶心和呕吐"
        ]
      },
      diagnosis: {
        title: "诊断方法",
        items: [
          "磁共振成像（MRI）",
          "计算机断层扫描（CT）",
          "正电子发射断层扫描（PET）",
          "脑血管造影",
          "活组织检查",
          "神经系统检查"
        ]
      },
      treatment: {
        title: "治疗选择",
        surgery: {
          title: "手术治疗",
          description: "通过手术切除肿瘤，是治疗脑肿瘤的主要方法。"
        },
        radiation: {
          title: "放射治疗",
          description: "使用高能射线杀死癌细胞或阻止其生长。"
        },
        chemotherapy: {
          title: "化学治疗",
          description: "使用药物杀死癌细胞或阻止其分裂。"
        },
        targeted: {
          title: "靶向治疗",
          description: "针对特定癌细胞特征的精准治疗。"
        }
      }
    },
    
    // Spinal conditions
    spinalStenosis: {
      title: "脊柱狭窄",
      subtitle: "脊柱管狭窄的治疗",
      description: "脊柱狭窄是指脊柱管变窄，压迫脊髓或神经根，导致疼痛和功能障碍。",
      types: {
        title: "狭窄类型",
        cervical: {
          title: "颈椎狭窄",
          description: "颈椎部位的脊柱管狭窄，可能影响手臂和手部功能。"
        },
        lumbar: {
          title: "腰椎狭窄",
          description: "腰椎部位的脊柱管狭窄，常导致腿部疼痛和行走困难。"
        },
        thoracic: {
          title: "胸椎狭窄",
          description: "胸椎部位的脊柱管狭窄，相对较少见。"
        }
      },
      symptoms: {
        title: "症状表现",
        cervical: [
          "颈部疼痛",
          "手臂麻木",
          "手部无力",
          "精细动作困难",
          "平衡问题"
        ],
        lumbar: [
          "腰部疼痛",
          "腿部疼痛",
          "行走困难",
          "间歇性跛行",
          "腿部麻木"
        ]
      },
      treatment: {
        title: "治疗方案",
        conservative: {
          title: "保守治疗",
          items: [
            "物理治疗",
            "药物治疗",
            "注射治疗",
            "生活方式调整"
          ]
        },
        surgical: {
          title: "手术治疗",
          items: [
            "椎板切除术",
            "椎间孔扩大术",
            "脊柱融合术",
            "微创手术"
          ]
        }
      }
    },
    
    // Disc herniation
    discHerniation: {
      title: "椎间盘突出",
      subtitle: "椎间盘突出的诊断和治疗",
      description: "椎间盘突出是指椎间盘的内容物突出或脱出，压迫神经根或脊髓。",
      causes: {
        title: "常见原因",
        items: [
          "年龄相关退化",
          "外伤或损伤",
          "重复性活动",
          "遗传因素",
          "不良姿势",
          "肥胖"
        ]
      },
      symptoms: {
        title: "症状",
        items: [
          "局部疼痛",
          "放射性疼痛",
          "麻木和刺痛",
          "肌肉无力",
          "反射减弱",
          "活动受限"
        ]
      },
      treatment: {
        title: "治疗方法",
        nonSurgical: {
          title: "非手术治疗",
          items: [
            "休息和活动调整",
            "物理治疗",
            "药物治疗",
            "硬膜外注射",
            "脊柱推拿"
          ]
        },
        surgical: {
          title: "手术治疗",
          items: [
            "椎间盘切除术",
            "显微椎间盘切除术",
            "内镜椎间盘切除术",
            "椎间盘置换术"
          ]
        }
      }
    },
    
    // Trigeminal neuralgia
    trigeminalNeuralgia: {
      title: "三叉神经痛",
      subtitle: "三叉神经痛的治疗",
      description: "三叉神经痛是一种影响三叉神经的慢性疼痛疾病，特征是面部剧烈的电击样疼痛。",
      symptoms: {
        title: "症状特点",
        items: [
          "突发性剧烈疼痛",
          "电击样或刀割样疼痛",
          "疼痛持续数秒到数分钟",
          "触发点敏感",
          "单侧面部疼痛",
          "疼痛可由轻触引发"
        ]
      },
      triggers: {
        title: "常见触发因素",
        items: [
          "轻触面部",
          "刷牙",
          "说话",
          "咀嚼",
          "微风吹拂",
          "剃须"
        ]
      },
      treatment: {
        title: "治疗选择",
        medication: {
          title: "药物治疗",
          description: "抗癫痫药物是一线治疗选择。"
        },
        surgery: {
          title: "手术治疗",
          options: [
            "微血管减压术",
            "伽马刀放射外科",
            "球囊压迫术",
            "甘油注射"
          ]
        }
      }
    }
  },
  
  // Medical procedures
  procedures: {
    // Brain surgery procedures
    craniotomy: {
      title: "开颅手术",
      subtitle: "脑部手术的标准方法",
      description: "开颅手术是通过在颅骨上开一个窗口来接近脑组织进行治疗的手术方法。",
      indications: {
        title: "适应症",
        items: [
          "脑肿瘤切除",
          "脑血管疾病治疗",
          "癫痫手术",
          "脑外伤处理",
          "脑积水治疗",
          "脑血管畸形治疗"
        ]
      },
      procedure: {
        title: "手术过程",
        steps: [
          "全身麻醉",
          "头皮切开",
          "颅骨开窗",
          "硬脑膜切开",
          "病变处理",
          "逐层关闭"
        ]
      },
      recovery: {
        title: "术后恢复",
        items: [
          "重症监护观察",
          "神经功能监测",
          "疼痛管理",
          "康复治疗",
          "定期随访",
          "生活指导"
        ]
      }
    },
    
    // Spinal surgery procedures
    spinalFusion: {
      title: "脊柱融合术",
      subtitle: "脊柱稳定性重建手术",
      description: "脊柱融合术是通过植骨或植入物使两个或多个椎骨永久连接的手术。",
      types: {
        title: "融合术类型",
        anterior: {
          title: "前路融合术",
          description: "从身体前方进入脊柱进行融合。"
        },
        posterior: {
          title: "后路融合术",
          description: "从身体后方进入脊柱进行融合。"
        },
        lateral: {
          title: "侧方融合术",
          description: "从身体侧方进入脊柱进行融合。"
        }
      },
      benefits: {
        title: "手术优势",
        items: [
          "恢复脊柱稳定性",
          "减轻疼痛",
          "防止进一步退化",
          "改善神经功能",
          "提高生活质量"
        ]
      },
      recovery: {
        title: "恢复过程",
        timeline: [
          "术后1-2天：开始活动",
          "2-6周：逐渐增加活动",
          "3-6个月：骨融合过程",
          "6-12个月：完全恢复"
        ]
      }
    },
    
    // Minimally invasive procedures
    minimallyInvasive: {
      title: "微创手术",
      subtitle: "先进的微创治疗技术",
      description: "微创手术通过小切口和先进技术进行治疗，减少创伤，加快恢复。",
      advantages: {
        title: "微创优势",
        items: [
          "切口小，疤痕少",
          "出血量少",
          "感染风险低",
          "疼痛轻微",
          "恢复快速",
          "住院时间短"
        ]
      },
      techniques: {
        title: "微创技术",
        endoscopic: {
          title: "内镜技术",
          description: "使用内镜进行精确的微创治疗。"
        },
        stereotactic: {
          title: "立体定向技术",
          description: "使用精确定位系统进行治疗。"
        },
        robotic: {
          title: "机器人辅助",
          description: "使用机器人系统提高手术精确度。"
        }
      }
    }
  },
  
  // Treatment approaches
  treatments: {
    conservative: {
      title: "保守治疗",
      description: "非手术治疗方法，适用于轻度到中度的病情。",
      methods: {
        physiotherapy: {
          title: "物理治疗",
          description: "通过运动和手法治疗改善功能。"
        },
        medication: {
          title: "药物治疗",
          description: "使用药物控制疼痛和炎症。"
        },
        injection: {
          title: "注射治疗",
          description: "局部注射药物缓解症状。"
        }
      }
    },
    surgical: {
      title: "手术治疗",
      description: "当保守治疗无效时考虑的手术选择。",
      approaches: {
        traditional: {
          title: "传统手术",
          description: "经典的开放式手术方法。"
        },
        minimally: {
          title: "微创手术",
          description: "通过小切口进行的精确手术。"
        },
        robotic: {
          title: "机器人手术",
          description: "使用机器人系统的高精度手术。"
        }
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

console.log('🔄 Merging medical procedures and conditions translations...');
const mergedTranslations = mergeTranslations(existingTranslations, medicalTranslations);

console.log('💾 Writing updated Chinese translations...');
const newContent = `export default ${objectToTypeScript(mergedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-medical-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write new translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Medical procedures and conditions translations implemented!');
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-medical-${timestamp}`);

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

const addedCount = countNestedKeys(medicalTranslations);
console.log(`📈 Added ${addedCount} medical procedures and conditions translations`);
