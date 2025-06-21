import fs from 'fs';

/**
 * Comprehensive Medical & Professional Terminology Dictionary
 * Creates accurate Chinese translations for all medical terms used in the application
 */

console.log('🏥 COMPREHENSIVE MEDICAL & PROFESSIONAL TERMINOLOGY DICTIONARY');
console.log('='.repeat(60));

const medicalDictionary = {
  // Core medical specialties
  specialties: {
    'neurosurgery': '神经外科',
    'neurosurgeon': '神经外科医生',
    'spine surgery': '脊柱外科',
    'spinal surgery': '脊柱手术',
    'brain surgery': '脑部手术',
    'nerve surgery': '神经手术',
    'minimally invasive surgery': '微创手术',
    'microsurgery': '显微外科',
    'stereotactic surgery': '立体定向手术',
    'endoscopic surgery': '内镜手术',
    'pediatric neurosurgery': '小儿神经外科',
    'functional neurosurgery': '功能神经外科',
    'vascular neurosurgery': '血管神经外科',
    'tumor surgery': '肿瘤外科',
    'pain management': '疼痛管理',
    'rehabilitation medicine': '康复医学',
    'anesthesiology': '麻醉学',
    'radiology': '放射科',
    'pathology': '病理科',
    'neurology': '神经内科',
    'orthopedics': '骨科',
    'plastic surgery': '整形外科'
  },

  // Brain conditions and procedures
  brain: {
    'brain tumor': '脑肿瘤',
    'brain tumour': '脑肿瘤',
    'glioma': '胶质瘤',
    'meningioma': '脑膜瘤',
    'acoustic neuroma': '听神经瘤',
    'vestibular schwannoma': '前庭神经鞘瘤',
    'pituitary adenoma': '垂体腺瘤',
    'pituitary tumor': '垂体肿瘤',
    'craniopharyngioma': '颅咽管瘤',
    'brain metastases': '脑转移瘤',
    'primary brain tumor': '原发性脑肿瘤',
    'secondary brain tumor': '继发性脑肿瘤',
    'benign brain tumor': '良性脑肿瘤',
    'malignant brain tumor': '恶性脑肿瘤',
    'hydrocephalus': '脑积水',
    'normal pressure hydrocephalus': '正常压力脑积水',
    'brain aneurysm': '脑动脉瘤',
    'cerebral aneurysm': '脑动脉瘤',
    'arteriovenous malformation': '动静脉畸形',
    'AVM': '动静脉畸形',
    'cavernous malformation': '海绵状血管瘤',
    'cavernoma': '海绵状血管瘤',
    'epilepsy': '癫痫',
    'seizure': '癫痫发作',
    'temporal lobe epilepsy': '颞叶癫痫',
    'trigeminal neuralgia': '三叉神经痛',
    'hemifacial spasm': '面肌痉挛',
    'chiari malformation': 'Chiari畸形',
    'syringomyelia': '脊髓空洞症',
    'craniotomy': '开颅手术',
    'awake craniotomy': '清醒开颅术',
    'stereotactic biopsy': '立体定向活检',
    'deep brain stimulation': '深部脑刺激',
    'DBS': '深部脑刺激',
    'gamma knife': '伽马刀',
    'radiosurgery': '放射外科',
    'stereotactic radiosurgery': '立体定向放射外科',
    'endoscopic third ventriculostomy': '内镜下第三脑室造瘘术',
    'ventriculoperitoneal shunt': '脑室腹腔分流术',
    'VP shunt': '脑室腹腔分流术'
  },

  // Spinal conditions and procedures
  spine: {
    'spinal stenosis': '脊柱狭窄',
    'cervical stenosis': '颈椎狭窄',
    'lumbar stenosis': '腰椎狭窄',
    'disc herniation': '椎间盘突出',
    'herniated disc': '椎间盘突出',
    'bulging disc': '椎间盘膨出',
    'disc prolapse': '椎间盘脱出',
    'spondylolisthesis': '脊椎滑脱',
    'spondylosis': '脊椎病',
    'spondylitis': '脊柱炎',
    'degenerative disc disease': '椎间盘退行性疾病',
    'spinal instability': '脊柱不稳定',
    'myelopathy': '脊髓病',
    'cervical myelopathy': '颈椎脊髓病',
    'radiculopathy': '神经根病变',
    'cervical radiculopathy': '颈椎神经根病变',
    'lumbar radiculopathy': '腰椎神经根病变',
    'sciatica': '坐骨神经痛',
    'spinal cord compression': '脊髓压迫',
    'spinal tumor': '脊柱肿瘤',
    'spinal metastases': '脊柱转移瘤',
    'epidural abscess': '硬膜外脓肿',
    'spinal vascular malformation': '脊柱血管畸形',
    'syringomyelia': '脊髓空洞症',
    'tethered cord': '脊髓栓系',
    'spina bifida': '脊柱裂',
    'laminectomy': '椎板切除术',
    'laminotomy': '椎板开窗术',
    'discectomy': '椎间盘切除术',
    'microdiscectomy': '显微椎间盘切除术',
    'foraminotomy': '椎间孔切开术',
    'spinal fusion': '脊柱融合术',
    'anterior cervical discectomy and fusion': '颈椎前路椎间盘切除融合术',
    'ACDF': '颈椎前路椎间盘切除融合术',
    'posterior lumbar interbody fusion': '腰椎后路椎间融合术',
    'PLIF': '腰椎后路椎间融合术',
    'transforaminal lumbar interbody fusion': '腰椎经椎间孔椎间融合术',
    'TLIF': '腰椎经椎间孔椎间融合术',
    'disc replacement': '椎间盘置换术',
    'artificial disc replacement': '人工椎间盘置换术',
    'cervical disc replacement': '颈椎间盘置换术',
    'lumbar disc replacement': '腰椎间盘置换术',
    'spinal decompression': '脊柱减压术',
    'vertebroplasty': '椎体成形术',
    'kyphoplasty': '椎体后凸成形术'
  },

  // Nerve conditions and procedures
  nerve: {
    'peripheral nerve': '周围神经',
    'nerve tumor': '神经肿瘤',
    'schwannoma': '神经鞘瘤',
    'neurofibroma': '神经纤维瘤',
    'neuroma': '神经瘤',
    'nerve pain': '神经疼痛',
    'neuropathic pain': '神经病理性疼痛',
    'nerve injury': '神经损伤',
    'nerve compression': '神经压迫',
    'nerve entrapment': '神经卡压',
    'carpal tunnel syndrome': '腕管综合征',
    'cubital tunnel syndrome': '肘管综合征',
    'tarsal tunnel syndrome': '跗管综合征',
    'thoracic outlet syndrome': '胸廓出口综合征',
    'piriformis syndrome': '梨状肌综合征',
    'ulnar nerve entrapment': '尺神经卡压',
    'median nerve entrapment': '正中神经卡压',
    'radial nerve entrapment': '桡神经卡压',
    'peroneal nerve entrapment': '腓神经卡压',
    'neuropathy': '神经病变',
    'peripheral neuropathy': '周围神经病变',
    'diabetic neuropathy': '糖尿病神经病变',
    'nerve biopsy': '神经活检',
    'muscle biopsy': '肌肉活检',
    'nerve conduction study': '神经传导检查',
    'electromyography': '肌电图',
    'EMG': '肌电图',
    'nerve repair': '神经修复术',
    'nerve graft': '神经移植术',
    'nerve transfer': '神经转移术',
    'carpal tunnel release': '腕管松解术',
    'cubital tunnel release': '肘管松解术',
    'nerve decompression': '神经减压术'
  },

  // Anatomical terms
  anatomy: {
    'brain': '大脑',
    'cerebrum': '大脑',
    'cerebellum': '小脑',
    'brainstem': '脑干',
    'brain stem': '脑干',
    'spinal cord': '脊髓',
    'spine': '脊柱',
    'vertebra': '椎骨',
    'vertebrae': '椎骨',
    'disc': '椎间盘',
    'intervertebral disc': '椎间盘',
    'nerve': '神经',
    'nerve root': '神经根',
    'muscle': '肌肉',
    'bone': '骨骼',
    'joint': '关节',
    'ligament': '韧带',
    'tendon': '肌腱',
    'cartilage': '软骨',
    'skull': '颅骨',
    'cranium': '颅骨',
    'cervical spine': '颈椎',
    'thoracic spine': '胸椎',
    'lumbar spine': '腰椎',
    'sacrum': '骶骨',
    'coccyx': '尾骨',
    'cervical': '颈椎的',
    'thoracic': '胸椎的',
    'lumbar': '腰椎的',
    'sacral': '骶骨的',
    'C1-C7': '颈1-颈7椎',
    'T1-T12': '胸1-胸12椎',
    'L1-L5': '腰1-腰5椎',
    'dura mater': '硬脑膜',
    'arachnoid mater': '蛛网膜',
    'pia mater': '软脑膜',
    'cerebrospinal fluid': '脑脊液',
    'CSF': '脑脊液',
    'ventricles': '脑室',
    'lateral ventricles': '侧脑室',
    'third ventricle': '第三脑室',
    'fourth ventricle': '第四脑室'
  },

  // Medical procedures and diagnostics
  procedures: {
    'consultation': '咨询',
    'initial consultation': '初诊咨询',
    'follow-up consultation': '复诊咨询',
    'examination': '检查',
    'physical examination': '体格检查',
    'neurological examination': '神经系统检查',
    'diagnosis': '诊断',
    'differential diagnosis': '鉴别诊断',
    'treatment': '治疗',
    'conservative treatment': '保守治疗',
    'surgical treatment': '手术治疗',
    'surgery': '手术',
    'operation': '手术',
    'procedure': '手术',
    'intervention': '介入治疗',
    'rehabilitation': '康复',
    'physiotherapy': '物理治疗',
    'physical therapy': '物理治疗',
    'occupational therapy': '职业治疗',
    'follow-up': '随访',
    'post-operative care': '术后护理',
    'recovery': '恢复',
    'healing': '愈合',
    'imaging': '影像学检查',
    'MRI': '磁共振成像',
    'magnetic resonance imaging': '磁共振成像',
    'CT scan': 'CT扫描',
    'computed tomography': '计算机断层扫描',
    'X-ray': 'X光检查',
    'radiograph': 'X光片',
    'ultrasound': '超声检查',
    'angiography': '血管造影',
    'myelography': '脊髓造影',
    'discography': '椎间盘造影',
    'biopsy': '活检',
    'tissue biopsy': '组织活检',
    'anesthesia': '麻醉',
    'general anesthesia': '全身麻醉',
    'local anesthesia': '局部麻醉',
    'sedation': '镇静',
    'pre-operative': '术前',
    'intra-operative': '术中',
    'post-operative': '术后',
    'complications': '并发症',
    'risks': '风险',
    'benefits': '益处',
    'prognosis': '预后',
    'outcome': '结果'
  },

  // Patient care and communication
  patientCare: {
    'patient': '患者',
    'patient care': '患者护理',
    'doctor': '医生',
    'physician': '医师',
    'surgeon': '外科医生',
    'specialist': '专科医生',
    'consultant': '顾问医师',
    'nurse': '护士',
    'medical team': '医疗团队',
    'healthcare team': '医疗保健团队',
    'hospital': '医院',
    'clinic': '诊所',
    'medical center': '医疗中心',
    'operating room': '手术室',
    'operating theatre': '手术室',
    'intensive care unit': '重症监护室',
    'ICU': '重症监护室',
    'ward': '病房',
    'outpatient': '门诊患者',
    'inpatient': '住院患者',
    'admission': '入院',
    'discharge': '出院',
    'appointment': '预约',
    'booking': '预约',
    'referral': '转诊',
    'second opinion': '第二意见',
    'medical history': '病史',
    'family history': '家族史',
    'symptoms': '症状',
    'signs': '体征',
    'pain': '疼痛',
    'chronic pain': '慢性疼痛',
    'acute pain': '急性疼痛',
    'numbness': '麻木',
    'weakness': '无力',
    'tingling': '刺痛',
    'headache': '头痛',
    'dizziness': '头晕',
    'nausea': '恶心',
    'vomiting': '呕吐',
    'seizure': '癫痫发作',
    'paralysis': '瘫痪',
    'disability': '残疾',
    'quality of life': '生活质量',
    'informed consent': '知情同意',
    'consent form': '同意书',
    'medical records': '病历',
    'test results': '检查结果',
    'report': '报告',
    'medication': '药物',
    'prescription': '处方',
    'side effects': '副作用',
    'allergies': '过敏',
    'contraindications': '禁忌症'
  }
};

/**
 * Create comprehensive medical dictionary file
 */
function createMedicalDictionary() {
  console.log('📚 Creating comprehensive medical dictionary...');
  
  // Count total terms
  const totalTerms = Object.values(medicalDictionary)
    .reduce((total, category) => total + Object.keys(category).length, 0);
  
  const dictionary = {
    metadata: {
      version: '2.0',
      lastUpdated: new Date().toISOString(),
      totalTerms: totalTerms,
      categories: Object.keys(medicalDictionary),
      description: 'Comprehensive medical terminology dictionary for miNEURO neurosurgical practice',
      usage: 'Use this dictionary to ensure consistent and accurate medical translations'
    },
    terms: medicalDictionary,
    guidelines: {
      translation: [
        'Always use the verified Chinese translation for medical terms',
        'Maintain consistency across all components and pages',
        'Provide context when necessary for complex medical procedures',
        'Use patient-appropriate language levels when communicating with patients',
        'Ensure medical accuracy and cultural appropriateness',
        'Consult medical professionals for complex terminology verification'
      ],
      usage: [
        'Check this dictionary before creating new medical translations',
        'Use exact translations provided to maintain consistency',
        'Add new terms following the established patterns',
        'Review translations with medical professionals when in doubt'
      ]
    },
    examples: [
      {
        english: 'The patient requires minimally invasive spine surgery',
        chinese: '患者需要微创脊柱手术',
        context: 'Treatment recommendation'
      },
      {
        english: 'Brain tumor removal using stereotactic surgery',
        chinese: '使用立体定向手术切除脑肿瘤',
        context: 'Procedure description'
      },
      {
        english: 'Post-operative rehabilitation and follow-up care',
        chinese: '术后康复和随访护理',
        context: 'Care plan'
      }
    ]
  };
  
  fs.writeFileSync('comprehensive-medical-dictionary.json', JSON.stringify(dictionary, null, 2));
  console.log('📄 Medical dictionary saved to: comprehensive-medical-dictionary.json');
  
  return dictionary;
}

/**
 * Generate medical terminology report
 */
function generateMedicalReport(dictionary) {
  console.log('\n🏥 MEDICAL TERMINOLOGY DICTIONARY RESULTS:');
  console.log('='.repeat(50));
  
  console.log(`📊 Total Medical Terms: ${dictionary.metadata.totalTerms}`);
  console.log(`📋 Categories: ${dictionary.metadata.categories.length}`);
  
  Object.entries(medicalDictionary).forEach(([category, terms]) => {
    console.log(`   ${category}: ${Object.keys(terms).length} terms`);
  });
  
  console.log(`📝 Translation Guidelines: ${dictionary.guidelines.translation.length}`);
  console.log(`💡 Usage Guidelines: ${dictionary.guidelines.usage.length}`);
  console.log(`📖 Examples: ${dictionary.examples.length}`);
  
  console.log('\n📋 Sample Medical Terms:');
  console.log('   neurosurgery → 神经外科');
  console.log('   brain tumor → 脑肿瘤');
  console.log('   spinal stenosis → 脊柱狭窄');
  console.log('   minimally invasive surgery → 微创手术');
  console.log('   post-operative care → 术后护理');
}

// Main execution
const dictionary = createMedicalDictionary();
generateMedicalReport(dictionary);

console.log('\n✅ Comprehensive medical terminology dictionary completed!');
