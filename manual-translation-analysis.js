import fs from 'fs';
import path from 'path';

/**
 * MANUAL TRANSLATION ANALYSIS
 * Manually compare English and Chinese translation files to identify missing sections
 */

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

function analyzeTranslationStructure() {
  console.log('🔍 MANUAL TRANSLATION STRUCTURE ANALYSIS');
  console.log('='.repeat(50));
  
  try {
    const enPath = path.join(SRC_DIR, 'locales', 'en.ts');
    const zhPath = path.join(SRC_DIR, 'locales', 'zh.ts');
    
    const enContent = fs.readFileSync(enPath, 'utf8');
    const zhContent = fs.readFileSync(zhPath, 'utf8');
    
    // Extract top-level sections from English file
    const enSections = extractTopLevelSections(enContent);
    const zhSections = extractTopLevelSections(zhContent);
    
    console.log('📊 ENGLISH SECTIONS:');
    enSections.forEach((section, index) => {
      console.log(`${index + 1}. ${section}`);
    });
    
    console.log('\n📊 CHINESE SECTIONS:');
    zhSections.forEach((section, index) => {
      console.log(`${index + 1}. ${section}`);
    });
    
    // Find missing sections
    const missingSections = enSections.filter(section => !zhSections.includes(section));
    
    console.log('\n❌ MISSING CHINESE SECTIONS:');
    if (missingSections.length === 0) {
      console.log('✅ All top-level sections exist in Chinese');
    } else {
      missingSections.forEach((section, index) => {
        console.log(`${index + 1}. ${section}`);
      });
    }
    
    // Analyze file sizes
    const enLines = enContent.split('\n').length;
    const zhLines = zhContent.split('\n').length;
    
    console.log('\n📏 FILE STATISTICS:');
    console.log(`English file: ${enLines} lines`);
    console.log(`Chinese file: ${zhLines} lines`);
    console.log(`Difference: ${enLines - zhLines} lines`);
    console.log(`Coverage estimate: ${(zhLines / enLines * 100).toFixed(1)}%`);
    
    // Save analysis results
    const analysis = {
      timestamp: new Date().toISOString(),
      englishSections: enSections,
      chineseSections: zhSections,
      missingSections: missingSections,
      fileStats: {
        englishLines: enLines,
        chineseLines: zhLines,
        difference: enLines - zhLines,
        coverageEstimate: (zhLines / enLines * 100).toFixed(1)
      }
    };
    
    fs.writeFileSync('manual-translation-analysis.json', JSON.stringify(analysis, null, 2));
    console.log('\n💾 Analysis saved to: manual-translation-analysis.json');
    
    return analysis;
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    return null;
  }
}

function extractTopLevelSections(content) {
  const sections = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    // Look for top-level object keys (not nested)
    const match = trimmed.match(/^(\w+):\s*\{/);
    if (match && !trimmed.includes('    ')) { // Not indented (top-level)
      sections.push(match[1]);
    }
  }
  
  return sections;
}

function identifyMissingSections() {
  console.log('\n🔍 IDENTIFYING SPECIFIC MISSING SECTIONS');
  console.log('='.repeat(45));
  
  // Based on manual inspection, these are the major missing sections
  const knownMissingSections = [
    'individualSpineHealthProgramme.journey',
    'individualSpineHealthProgramme.keyFeatures',
    'individualSpineHealthProgramme.howItWorks',
    'individualSpineHealthProgramme.assessmentTools',
    'individualSpineHealthProgramme.benefits',
    'individualSpineHealthProgramme.dashboard',
    'individualSpineHealthProgramme.successStories',
    'individualSpineHealthProgramme.accessDashboard',
    'individualSpineHealthProgramme.readyToTakeControl',
    'spineHealthApp',
    'conditionInfo',
    'exerciseLibrary',
    'assessmentTools',
    'patientDashboard',
    'gallery',
    'appointment',
    'contact',
    'procedureDescriptions',
    'appointments',
    'medicolegal',
    'hospitals',
    'locations',
    'technologiesPage',
    'gpResources',
    'dandenongLocation'
  ];
  
  console.log('📋 KNOWN MISSING SECTIONS:');
  knownMissingSections.forEach((section, index) => {
    console.log(`${index + 1}. ${section}`);
  });
  
  return knownMissingSections;
}

function main() {
  const analysis = analyzeTranslationStructure();
  
  if (analysis) {
    const missingSections = identifyMissingSections();
    
    console.log('\n📊 SUMMARY');
    console.log('='.repeat(20));
    console.log(`✅ English sections: ${analysis.englishSections.length}`);
    console.log(`🈯 Chinese sections: ${analysis.chineseSections.length}`);
    console.log(`❌ Missing sections: ${analysis.missingSections.length}`);
    console.log(`📏 File size difference: ${analysis.fileStats.difference} lines`);
    console.log(`📈 Estimated coverage: ${analysis.fileStats.coverageEstimate}%`);
    
    console.log('\n🎯 NEXT STEPS:');
    console.log('1. Complete missing Chinese translations');
    console.log('2. Verify translation accuracy');
    console.log('3. Test all components with Chinese translations');
    console.log('4. Ensure consistent terminology across all translations');
    
    if (analysis.missingSections.length > 0 || missingSections.length > 0) {
      console.log('\n⚠️  TRANSLATION COMPLETION REQUIRED');
      process.exit(1);
    } else {
      console.log('\n✅ TRANSLATION ANALYSIS COMPLETE');
      process.exit(0);
    }
  } else {
    console.log('\n❌ ANALYSIS FAILED');
    process.exit(1);
  }
}

main();
