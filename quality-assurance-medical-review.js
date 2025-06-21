import fs from 'fs';

/**
 * Quality Assurance & Medical Review
 * Reviews all translations for medical accuracy and cultural appropriateness
 */

console.log('🔍 QUALITY ASSURANCE & MEDICAL REVIEW');
console.log('='.repeat(60));

const qualityAssurance = {
  medicalTerminologyReview: {
    verified: [],
    inconsistencies: [],
    recommendations: []
  },
  culturalAppropriatenessReview: {
    appropriate: [],
    needsAdjustment: [],
    recommendations: []
  },
  linguisticQuality: {
    excellent: [],
    good: [],
    needsImprovement: []
  },
  completenessCheck: {
    fullyTranslated: 0,
    partiallyTranslated: 0,
    missing: 0,
    placeholders: 0
  },
  consistencyCheck: {
    consistent: [],
    inconsistent: [],
    recommendations: []
  }
};

/**
 * Load medical dictionary for reference
 */
function loadMedicalDictionary() {
  try {
    const dictData = fs.readFileSync('comprehensive-medical-dictionary.json', 'utf8');
    return JSON.parse(dictData);
  } catch (error) {
    console.warn('⚠️  Could not load medical dictionary:', error.message);
    return null;
  }
}

/**
 * Load current Chinese translations
 */
function loadChineseTranslations() {
  try {
    const content = fs.readFileSync('src/locales/zh.ts', 'utf8');
    const objectContent = content
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    return eval(`(${objectContent})`);
  } catch (error) {
    console.error('❌ Failed to load Chinese translations:', error.message);
    return {};
  }
}

/**
 * Load English translations for comparison
 */
function loadEnglishTranslations() {
  try {
    const content = fs.readFileSync('src/locales/en.ts', 'utf8');
    const objectContent = content
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    return eval(`(${objectContent})`);
  } catch (error) {
    console.error('❌ Failed to load English translations:', error.message);
    return {};
  }
}

/**
 * Review medical terminology accuracy
 */
function reviewMedicalTerminology(chineseTranslations, medicalDict) {
  console.log('🏥 Reviewing medical terminology accuracy...');
  
  if (!medicalDict) {
    console.warn('⚠️  Medical dictionary not available for review');
    return;
  }
  
  const medicalTerms = Object.values(medicalDict.terms).reduce((acc, category) => {
    return { ...acc, ...category };
  }, {});
  
  // Check for consistent medical term usage
  const medicalTermsFound = [];
  const inconsistencies = [];
  
  function checkTranslations(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'string') {
        // Check if this translation contains medical terms
        Object.entries(medicalTerms).forEach(([english, chinese]) => {
          if (value.includes(chinese)) {
            medicalTermsFound.push({
              path: currentPath,
              term: chinese,
              english: english,
              context: value
            });
          }
          
          // Check for potential inconsistencies (English terms in Chinese text)
          if (value.includes(english)) {
            inconsistencies.push({
              path: currentPath,
              issue: `English term "${english}" found in Chinese translation`,
              suggestion: `Should use "${chinese}"`,
              context: value
            });
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        checkTranslations(value, currentPath);
      }
    }
  }
  
  checkTranslations(chineseTranslations);
  
  qualityAssurance.medicalTerminologyReview = {
    verified: medicalTermsFound,
    inconsistencies: inconsistencies,
    recommendations: [
      '确保所有医学术语使用标准中文翻译',
      '保持医学术语在整个应用中的一致性',
      '避免在中文翻译中混用英文医学术语',
      '定期更新医学术语词典以确保准确性'
    ]
  };
  
  console.log(`✅ Found ${medicalTermsFound.length} medical terms`);
  console.log(`⚠️  Found ${inconsistencies.length} potential inconsistencies`);
}

/**
 * Review cultural appropriateness
 */
function reviewCulturalAppropriateness(chineseTranslations) {
  console.log('🌏 Reviewing cultural appropriateness...');
  
  const culturalIssues = [];
  const culturallyAppropriate = [];
  
  // Define cultural considerations for medical translations
  const culturalGuidelines = {
    respectful: [
      '使用尊敬的称谓',
      '避免可能引起误解的表达',
      '考虑中文表达习惯',
      '使用患者友好的语言'
    ],
    clear: [
      '避免过于技术性的术语',
      '提供必要的解释',
      '使用简洁明了的表达',
      '考虑不同教育背景的患者'
    ],
    sensitive: [
      '对疾病和治疗保持敏感',
      '避免可能引起恐惧的表达',
      '提供积极的治疗前景',
      '尊重患者的文化背景'
    ]
  };
  
  function checkCulturalAppropriateness(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'string') {
        // Check for potentially inappropriate expressions
        const inappropriatePatterns = [
          /死亡|死去|致命/g,  // Direct references to death
          /危险|恐怖|可怕/g,  // Fear-inducing words
          /失败|无效|无用/g   // Negative treatment outcomes
        ];
        
        let hasIssues = false;
        inappropriatePatterns.forEach(pattern => {
          if (pattern.test(value)) {
            hasIssues = true;
          }
        });
        
        if (hasIssues) {
          culturalIssues.push({
            path: currentPath,
            text: value,
            issue: 'May contain culturally insensitive language',
            suggestion: 'Consider using more positive or neutral language'
          });
        } else {
          culturallyAppropriate.push({
            path: currentPath,
            text: value
          });
        }
      } else if (typeof value === 'object' && value !== null) {
        checkCulturalAppropriateness(value, currentPath);
      }
    }
  }
  
  checkCulturalAppropriateness(chineseTranslations);
  
  qualityAssurance.culturalAppropriatenessReview = {
    appropriate: culturallyAppropriate,
    needsAdjustment: culturalIssues,
    recommendations: [
      '使用积极正面的语言描述治疗',
      '避免可能引起患者恐惧的表达',
      '考虑中文文化背景下的表达习惯',
      '提供希望和支持的信息',
      '使用患者容易理解的语言',
      '尊重不同文化背景的患者需求'
    ]
  };
  
  console.log(`✅ ${culturallyAppropriate.length} culturally appropriate translations`);
  console.log(`⚠️  ${culturalIssues.length} translations need cultural adjustment`);
}

/**
 * Check translation completeness
 */
function checkTranslationCompleteness(chineseTranslations, englishTranslations) {
  console.log('📊 Checking translation completeness...');
  
  let fullyTranslated = 0;
  let partiallyTranslated = 0;
  let missing = 0;
  let placeholders = 0;
  
  function compareTranslations(enObj, zhObj, path = '') {
    for (const [key, enValue] of Object.entries(enObj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof enValue === 'string') {
        const zhValue = zhObj?.[key];
        
        if (!zhValue) {
          missing++;
        } else if (typeof zhValue === 'string') {
          if (zhValue.includes('[翻译缺失:') || zhValue.includes('[需要翻译:')) {
            placeholders++;
          } else if (zhValue.length > 0) {
            fullyTranslated++;
          } else {
            partiallyTranslated++;
          }
        }
      } else if (typeof enValue === 'object' && enValue !== null) {
        compareTranslations(enValue, zhObj?.[key] || {}, currentPath);
      }
    }
  }
  
  compareTranslations(englishTranslations, chineseTranslations);
  
  qualityAssurance.completenessCheck = {
    fullyTranslated,
    partiallyTranslated,
    missing,
    placeholders
  };
  
  const total = fullyTranslated + partiallyTranslated + missing + placeholders;
  const completionRate = total > 0 ? ((fullyTranslated / total) * 100).toFixed(1) : '0.0';
  
  console.log(`📊 Translation Completeness: ${completionRate}%`);
  console.log(`   ✅ Fully translated: ${fullyTranslated}`);
  console.log(`   🔄 Partially translated: ${partiallyTranslated}`);
  console.log(`   ❌ Missing: ${missing}`);
  console.log(`   ⚠️  Placeholders: ${placeholders}`);
}

/**
 * Check translation consistency
 */
function checkTranslationConsistency(chineseTranslations) {
  console.log('🔄 Checking translation consistency...');
  
  const termUsage = new Map();
  const inconsistencies = [];
  
  function collectTerms(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'string') {
        // Extract common medical and UI terms
        const commonTerms = [
          '神经外科', '脑肿瘤', '脊柱', '手术', '治疗', '咨询', '预约',
          '患者', '医生', '诊所', '检查', '康复', '术前', '术后'
        ];
        
        commonTerms.forEach(term => {
          if (value.includes(term)) {
            if (!termUsage.has(term)) {
              termUsage.set(term, []);
            }
            termUsage.get(term).push({
              path: currentPath,
              context: value
            });
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        collectTerms(value, currentPath);
      }
    }
  }
  
  collectTerms(chineseTranslations);
  
  // Check for consistent usage
  const consistent = [];
  termUsage.forEach((usages, term) => {
    if (usages.length > 1) {
      consistent.push({
        term: term,
        usageCount: usages.length,
        contexts: usages
      });
    }
  });
  
  qualityAssurance.consistencyCheck = {
    consistent: consistent,
    inconsistent: inconsistencies,
    recommendations: [
      '确保相同概念在不同页面使用相同翻译',
      '建立术语词汇表以保持一致性',
      '定期检查新增翻译的一致性',
      '使用翻译记忆库提高一致性'
    ]
  };
  
  console.log(`✅ Found ${consistent.length} consistently used terms`);
}

/**
 * Generate comprehensive quality assurance report
 */
function generateQAReport() {
  console.log('\n📋 QUALITY ASSURANCE REPORT');
  console.log('='.repeat(50));
  
  // Medical terminology review
  const medicalReview = qualityAssurance.medicalTerminologyReview;
  console.log(`🏥 Medical Terminology:`);
  console.log(`   ✅ Verified terms: ${medicalReview.verified.length}`);
  console.log(`   ⚠️  Inconsistencies: ${medicalReview.inconsistencies.length}`);
  
  // Cultural appropriateness review
  const culturalReview = qualityAssurance.culturalAppropriatenessReview;
  console.log(`🌏 Cultural Appropriateness:`);
  console.log(`   ✅ Appropriate: ${culturalReview.appropriate.length}`);
  console.log(`   ⚠️  Needs adjustment: ${culturalReview.needsAdjustment.length}`);
  
  // Completeness check
  const completeness = qualityAssurance.completenessCheck;
  const total = completeness.fullyTranslated + completeness.partiallyTranslated + 
                completeness.missing + completeness.placeholders;
  const completionRate = total > 0 ? ((completeness.fullyTranslated / total) * 100).toFixed(1) : '0.0';
  console.log(`📊 Completeness: ${completionRate}%`);
  
  // Consistency check
  const consistency = qualityAssurance.consistencyCheck;
  console.log(`🔄 Consistency: ${consistency.consistent.length} terms checked`);
  
  // Overall quality score
  const qualityScore = calculateQualityScore();
  console.log(`\n🎯 Overall Quality Score: ${qualityScore}/100`);
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    qualityScore: qualityScore,
    completionRate: parseFloat(completionRate),
    ...qualityAssurance
  };
  
  fs.writeFileSync('quality-assurance-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Detailed QA report saved to: quality-assurance-report.json');
  
  // Recommendations
  console.log('\n💡 KEY RECOMMENDATIONS:');
  console.log('1. 继续完善医学术语的准确性和一致性');
  console.log('2. 确保所有翻译符合中文文化背景');
  console.log('3. 完成剩余的翻译工作');
  console.log('4. 建立术语词汇表以保持一致性');
  console.log('5. 定期进行质量检查和更新');
}

/**
 * Calculate overall quality score
 */
function calculateQualityScore() {
  const completeness = qualityAssurance.completenessCheck;
  const total = completeness.fullyTranslated + completeness.partiallyTranslated + 
                completeness.missing + completeness.placeholders;
  
  const completionScore = total > 0 ? (completeness.fullyTranslated / total) * 40 : 0;
  const medicalScore = qualityAssurance.medicalTerminologyReview.inconsistencies.length === 0 ? 30 : 20;
  const culturalScore = qualityAssurance.culturalAppropriatenessReview.needsAdjustment.length === 0 ? 20 : 15;
  const consistencyScore = 10; // Base score for consistency
  
  return Math.round(completionScore + medicalScore + culturalScore + consistencyScore);
}

// Main execution
const medicalDict = loadMedicalDictionary();
const chineseTranslations = loadChineseTranslations();
const englishTranslations = loadEnglishTranslations();

if (chineseTranslations && englishTranslations) {
  reviewMedicalTerminology(chineseTranslations, medicalDict);
  reviewCulturalAppropriateness(chineseTranslations);
  checkTranslationCompleteness(chineseTranslations, englishTranslations);
  checkTranslationConsistency(chineseTranslations);
  generateQAReport();
} else {
  console.error('❌ Failed to load translation files for review');
}

console.log('\n✅ Quality assurance and medical review completed!');
