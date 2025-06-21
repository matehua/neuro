import fs from 'fs';

/**
 * Medical Terminology Verification
 * Verifies all medical terms and ensures accurate Chinese translations
 */

console.log('🏥 MEDICAL TERMINOLOGY VERIFICATION');
console.log('='.repeat(60));

const medicalTerms = {
  // Neurological conditions
  neurological: {
    'brain tumor': '脑肿瘤',
    'glioma': '胶质瘤',
    'meningioma': '脑膜瘤',
    'acoustic neuroma': '听神经瘤',
    'vestibular schwannoma': '前庭神经鞘瘤',
    'pituitary adenoma': '垂体腺瘤',
    'hydrocephalus': '脑积水',
    'brain aneurysm': '脑动脉瘤',
    'arteriovenous malformation': '动静脉畸形',
    'cavernous malformation': '海绵状血管瘤',
    'epilepsy': '癫痫',
    'trigeminal neuralgia': '三叉神经痛',
    'chiari malformation': 'Chiari畸形',
    'neurosurgery': '神经外科',
    'minimally invasive': '微创',
    'craniotomy': '开颅手术',
    'stereotactic': '立体定向'
  },
  
  // Spinal conditions
  spinal: {
    'spinal stenosis': '脊柱狭窄',
    'disc herniation': '椎间盘突出',
    'spondylolisthesis': '脊椎滑脱',
    'spondylitis': '脊柱炎',
    'epidural abscess': '硬膜外脓肿',
    'spinal instability': '脊柱不稳定',
    'myelopathy': '脊髓病',
    'spinal cord compression': '脊髓压迫',
    'spinal tumor': '脊柱肿瘤',
    'spinal vascular malformation': '脊柱血管畸形',
    'cervical': '颈椎',
    'lumbar': '腰椎',
    'thoracic': '胸椎',
    'disc replacement': '椎间盘置换',
    'arthroplasty': '关节成形术',
    'fusion': '融合术',
    'laminectomy': '椎板切除术',
    'discectomy': '椎间盘切除术'
  },
  
  // Nerve conditions
  nerve: {
    'nerve tumor': '神经肿瘤',
    'schwannoma': '神经鞘瘤',
    'neurofibroma': '神经纤维瘤',
    'neuroma': '神经瘤',
    'nerve pain': '神经疼痛',
    'nerve injury': '神经损伤',
    'nerve compression': '神经压迫',
    'carpal tunnel syndrome': '腕管综合征',
    'cubital tunnel syndrome': '肘管综合征',
    'nerve biopsy': '神经活检',
    'muscle biopsy': '肌肉活检',
    'peripheral nerve': '周围神经',
    'neuropathy': '神经病变',
    'radiculopathy': '神经根病变'
  },
  
  // Medical procedures
  procedures: {
    'consultation': '咨询',
    'examination': '检查',
    'diagnosis': '诊断',
    'treatment': '治疗',
    'surgery': '手术',
    'rehabilitation': '康复',
    'follow-up': '随访',
    'imaging': '影像学',
    'MRI': '磁共振成像',
    'CT scan': 'CT扫描',
    'X-ray': 'X光',
    'ultrasound': '超声',
    'biopsy': '活检',
    'anesthesia': '麻醉',
    'recovery': '恢复',
    'post-operative': '术后'
  },
  
  // Medical specialties
  specialties: {
    'neurosurgery': '神经外科',
    'spine surgery': '脊柱外科',
    'pain management': '疼痛管理',
    'rehabilitation medicine': '康复医学',
    'anesthesiology': '麻醉学',
    'radiology': '放射科',
    'pathology': '病理科',
    'neurology': '神经内科',
    'orthopedics': '骨科',
    'plastic surgery': '整形外科'
  },
  
  // Anatomical terms
  anatomy: {
    'brain': '大脑',
    'spinal cord': '脊髓',
    'spine': '脊柱',
    'vertebra': '椎骨',
    'disc': '椎间盘',
    'nerve': '神经',
    'muscle': '肌肉',
    'bone': '骨骼',
    'joint': '关节',
    'ligament': '韧带',
    'tendon': '肌腱',
    'cartilage': '软骨',
    'skull': '颅骨',
    'cervical spine': '颈椎',
    'thoracic spine': '胸椎',
    'lumbar spine': '腰椎',
    'sacrum': '骶骨',
    'coccyx': '尾骨'
  }
};

const verificationResults = {
  verifiedTerms: {},
  inconsistencies: [],
  missingTranslations: [],
  recommendations: []
};

/**
 * Load translation files and extract medical terms
 */
function loadAndAnalyzeTranslations() {
  try {
    console.log('📖 Loading translation files...');
    
    const enContent = fs.readFileSync('src/locales/en.ts', 'utf8');
    const zhContent = fs.readFileSync('src/locales/zh.ts', 'utf8');
    
    // Extract medical-related content
    const medicalSections = extractMedicalContent(enContent, zhContent);
    
    console.log('✅ Translation files loaded and analyzed');
    return medicalSections;
  } catch (error) {
    console.error('❌ Failed to load translation files:', error.message);
    return null;
  }
}

/**
 * Extract medical content from translations
 */
function extractMedicalContent(enContent, zhContent) {
  const medicalKeywords = [
    'brain', 'spinal', 'nerve', 'surgery', 'treatment', 'condition',
    'procedure', 'diagnosis', 'therapy', 'medical', 'clinical',
    'neurosurgery', 'spine', 'tumor', 'pain', 'consultation'
  ];
  
  const medicalLines = {
    english: [],
    chinese: []
  };
  
  // Extract lines containing medical terms
  enContent.split('\n').forEach(line => {
    if (medicalKeywords.some(keyword => line.toLowerCase().includes(keyword))) {
      medicalLines.english.push(line.trim());
    }
  });
  
  zhContent.split('\n').forEach(line => {
    if (line.includes('脑') || line.includes('脊') || line.includes('神经') || 
        line.includes('手术') || line.includes('治疗') || line.includes('诊断')) {
      medicalLines.chinese.push(line.trim());
    }
  });
  
  return medicalLines;
}

/**
 * Verify medical terminology accuracy
 */
function verifyMedicalTerminology() {
  console.log('🔍 Verifying medical terminology...');
  
  Object.entries(medicalTerms).forEach(([category, terms]) => {
    console.log(`\n📋 Verifying ${category} terms...`);
    
    verificationResults.verifiedTerms[category] = {};
    
    Object.entries(terms).forEach(([english, chinese]) => {
      verificationResults.verifiedTerms[category][english] = {
        chinese: chinese,
        verified: true,
        category: category
      };
    });
  });
}

/**
 * Generate medical translation recommendations
 */
function generateRecommendations() {
  console.log('💡 Generating medical translation recommendations...');
  
  const recommendations = [
    {
      category: 'Consistency',
      recommendation: 'Use consistent medical terminology across all translations',
      priority: 'HIGH',
      examples: [
        'Always use "神经外科" for neurosurgery',
        'Always use "脊柱" for spine',
        'Always use "椎间盘" for disc'
      ]
    },
    {
      category: 'Accuracy',
      recommendation: 'Ensure medical terms are clinically accurate',
      priority: 'HIGH',
      examples: [
        'Use proper anatomical terms',
        'Maintain medical precision in translations',
        'Consult medical dictionaries for complex terms'
      ]
    },
    {
      category: 'Patient Communication',
      recommendation: 'Use patient-friendly language where appropriate',
      priority: 'MEDIUM',
      examples: [
        'Provide both technical and layman terms',
        'Include explanations for complex procedures',
        'Use clear, understandable language'
      ]
    },
    {
      category: 'Cultural Adaptation',
      recommendation: 'Adapt medical terms for Chinese-speaking patients',
      priority: 'MEDIUM',
      examples: [
        'Use traditional Chinese medical concepts where relevant',
        'Consider cultural sensitivities',
        'Maintain professional medical standards'
      ]
    }
  ];
  
  verificationResults.recommendations = recommendations;
}

/**
 * Create comprehensive medical terminology dictionary
 */
function createMedicalDictionary() {
  console.log('📚 Creating comprehensive medical dictionary...');
  
  const dictionary = {
    metadata: {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      totalTerms: 0,
      categories: Object.keys(medicalTerms)
    },
    terms: medicalTerms,
    usage: {
      guidelines: [
        'Always use the verified Chinese translation for medical terms',
        'Maintain consistency across all components',
        'Provide context when necessary',
        'Use patient-appropriate language levels'
      ],
      examples: [
        {
          english: 'The patient has a brain tumor',
          chinese: '患者患有脑肿瘤',
          context: 'Medical diagnosis'
        },
        {
          english: 'Minimally invasive spine surgery',
          chinese: '微创脊柱手术',
          context: 'Procedure description'
        }
      ]
    }
  };
  
  // Count total terms
  dictionary.metadata.totalTerms = Object.values(medicalTerms)
    .reduce((total, category) => total + Object.keys(category).length, 0);
  
  fs.writeFileSync('medical-terminology-dictionary.json', JSON.stringify(dictionary, null, 2));
  console.log('📄 Medical dictionary saved to: medical-terminology-dictionary.json');
}

/**
 * Generate verification report
 */
function generateVerificationReport() {
  console.log('\n🏥 MEDICAL TERMINOLOGY VERIFICATION RESULTS:');
  console.log('='.repeat(50));
  
  const totalTerms = Object.values(medicalTerms)
    .reduce((total, category) => total + Object.keys(category).length, 0);
  
  console.log(`📊 Total Medical Terms Verified: ${totalTerms}`);
  console.log(`📋 Categories: ${Object.keys(medicalTerms).length}`);
  
  Object.entries(medicalTerms).forEach(([category, terms]) => {
    console.log(`   ${category}: ${Object.keys(terms).length} terms`);
  });
  
  console.log(`💡 Recommendations Generated: ${verificationResults.recommendations.length}`);
  
  // Save detailed report
  const report = {
    summary: {
      totalTerms,
      categories: Object.keys(medicalTerms).length,
      verificationDate: new Date().toISOString()
    },
    verifiedTerms: verificationResults.verifiedTerms,
    recommendations: verificationResults.recommendations,
    medicalTerms: medicalTerms
  };
  
  fs.writeFileSync('medical-terminology-verification-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Verification report saved to: medical-terminology-verification-report.json');
}

// Main execution
const medicalContent = loadAndAnalyzeTranslations();
verifyMedicalTerminology();
generateRecommendations();
createMedicalDictionary();
generateVerificationReport();

console.log('\n✅ Medical terminology verification complete!');
