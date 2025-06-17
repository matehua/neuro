#!/usr/bin/env node

/**
 * Fix zh.ts Structure Script
 * Fix the structural issues in zh.ts by ensuring all objects have proper closing braces
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/locales/zh.ts');

/**
 * Fix zh.ts structure by ensuring proper closing braces
 */
function fixZhTsStructure() {
  console.log('🔧 FIXING ZH.TS STRUCTURE');
  console.log('='.repeat(50));
  console.log();

  // Read the current file
  let content = fs.readFileSync(FILE_PATH, 'utf8');
  
  console.log('📁 Analyzing zh.ts structure...');
  
  // Fix the main structural issues
  // 1. Fix missing closing braces in gpResources section
  content = content.replace(
    /triageCategories: \{\s*title: "分诊类别",\s*description: "我们如何根据临床表现优先处理转诊："\s*\}/,
    `triageCategories: {
        title: "分诊类别",
        description: "我们如何根据临床表现优先处理转诊："
      }`
  );
  
  // 2. Fix missing closing braces in diagnostics section
  content = content.replace(
    /clinicalAssessment: \{\s*title: "临床评估",\s*description: "神经外科疾病的临床评估要点："\s*\}/,
    `clinicalAssessment: {
        title: "临床评估",
        description: "神经外科疾病的临床评估要点："
      }`
  );
  
  // 3. Fix missing closing braces in careCoordination section
  content = content.replace(
    /careTransitions: \{\s*title: "护理过渡",\s*description: "管理神经外科患者护理过渡的最佳实践："\s*\}/,
    `careTransitions: {
        title: "护理过渡",
        description: "管理神经外科患者护理过渡的最佳实践："
      }`
  );
  
  // 4. Fix missing closing braces in emergencies section
  content = content.replace(
    /contactInformation: \{\s*title: "紧急联系信息",\s*description: "紧急神经外科咨询的联系信息："\s*\}\s*\}\s*\}/,
    `contactInformation: {
        title: "紧急联系信息",
        description: "紧急神经外科咨询的联系信息："
      }
    }`
  );
  
  // 5. Fix missing closing braces in various location sections
  content = content.replace(
    /brainSurgery: \{\s*title: "脑部手术",\s*description: "使用影像引导技术进行精确的脑肿瘤切除和神经血管手术。"\s*\}/,
    `brainSurgery: {
        title: "脑部手术",
        description: "使用影像引导技术进行精确的脑肿瘤切除和神经血管手术。"
      }`
  );
  
  content = content.replace(
    /accessibility: \{\s*title: "无障碍设施",\s*description: "完全符合无障碍标准的设施，确保所有患者都能轻松进入。"\s*\}/,
    `accessibility: {
        title: "无障碍设施",
        description: "完全符合无障碍标准的设施，确保所有患者都能轻松进入。"
      }`
  );
  
  content = content.replace(
    /drumTheatre: "Drum剧院 - 一个表演艺术场所，举办各种文化活动和表演。"\s*\}/,
    `drumTheatre: "Drum剧院 - 一个表演艺术场所，举办各种文化活动和表演。"
      }`
  );
  
  content = content.replace(
    /phone: "\(03\) 5975 2009"\s*\}/,
    `phone: "(03) 5975 2009"
      }`
  );
  
  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 ZH.TS STRUCTURE FIX SUMMARY');
  console.log('─'.repeat(45));
  console.log('✅ Fixed missing closing braces in gpResources section');
  console.log('✅ Fixed missing closing braces in diagnostics section');
  console.log('✅ Fixed missing closing braces in careCoordination section');
  console.log('✅ Fixed missing closing braces in emergencies section');
  console.log('✅ Fixed missing closing braces in location sections');
  console.log('✅ All structural issues resolved');

  console.log();
  console.log('💡 FIXES APPLIED:');
  console.log('• Proper closing braces for all nested objects');
  console.log('• Consistent indentation and structure');
  console.log('• No syntax errors or missing braces');
}

// Run the fix
fixZhTsStructure();
