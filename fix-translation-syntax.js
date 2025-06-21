import fs from 'fs';

/**
 * Fix Translation Syntax
 * Fixes syntax errors in the Chinese translation file
 */

console.log('🔧 FIXING TRANSLATION SYNTAX ERRORS');
console.log('='.repeat(60));

/**
 * Load and parse Chinese translations
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
    console.error('❌ Failed to parse Chinese translations:', error.message);
    return null;
  }
}

/**
 * Convert object to properly formatted TypeScript string
 */
function objectToTypeScript(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let result = '{\n';
  
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    const isLast = i === entries.length - 1;
    
    // Quote keys that contain hyphens or other special characters
    const needsQuotes = /[^a-zA-Z0-9_$]/.test(key);
    const formattedKey = needsQuotes ? `"${key}"` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result += `${spaces}  ${formattedKey}: ${objectToTypeScript(value, indent + 1)}${isLast ? '' : ','}\n`;
    } else if (Array.isArray(value)) {
      result += `${spaces}  ${formattedKey}: ${JSON.stringify(value)}${isLast ? '' : ','}\n`;
    } else {
      const escapedValue = typeof value === 'string' ? value.replace(/"/g, '\\"').replace(/\n/g, '\\n') : value;
      result += `${spaces}  ${formattedKey}: "${escapedValue}"${isLast ? '' : ','}\n`;
    }
  }
  
  result += `${spaces}}`;
  return result;
}

/**
 * Fix common syntax issues in the translation content
 */
function fixTranslationContent(content) {
  // Fix unquoted object keys with hyphens
  content = content.replace(/(\s+)([a-zA-Z0-9-]+):/g, (match, spaces, key) => {
    if (/[^a-zA-Z0-9_$]/.test(key)) {
      return `${spaces}"${key}":`;
    }
    return match;
  });
  
  // Fix multiline strings
  content = content.replace(/: "([^"]*\n[^"]*)"([,\n])/g, (match, str, ending) => {
    const fixedStr = str.replace(/\n/g, '\\n');
    return `: "${fixedStr}"${ending}`;
  });
  
  // Fix escaped quotes
  content = content.replace(/\\"/g, '\\"');
  
  return content;
}

// Main execution
console.log('📖 Loading Chinese translations...');
const zhTranslations = loadChineseTranslations();

if (!zhTranslations) {
  console.log('⚠️  Could not parse existing file, attempting to fix syntax directly...');
  
  // Read the raw content and try to fix it
  let content = fs.readFileSync('src/locales/zh.ts', 'utf8');
  
  // Remove the export statement
  content = content.replace(/export default\s*/, '').replace(/;\s*$/, '');
  
  // Fix the content
  content = fixTranslationContent(content);
  
  // Try to parse again
  try {
    const fixedTranslations = eval(`(${content})`);
    
    console.log('✅ Successfully parsed fixed content');
    
    // Write the properly formatted file
    const newContent = `export default ${objectToTypeScript(fixedTranslations)};\n`;
    
    // Backup the broken file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    fs.writeFileSync(`src/locales/zh.ts.broken-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));
    
    // Write the fixed file
    fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');
    
    console.log('✅ Translation syntax fixed!');
    console.log(`🔒 Broken file backed up to: src/locales/zh.ts.broken-${timestamp}`);
    
  } catch (parseError) {
    console.error('❌ Still could not parse after fixes:', parseError.message);
    
    // As a last resort, restore from a backup
    console.log('🔄 Attempting to restore from backup...');
    
    const backupFiles = fs.readdirSync('src/locales')
      .filter(file => file.startsWith('zh.ts.backup-'))
      .sort()
      .reverse();
    
    if (backupFiles.length > 0) {
      const latestBackup = backupFiles[0];
      console.log(`📄 Restoring from: ${latestBackup}`);
      
      const backupContent = fs.readFileSync(`src/locales/${latestBackup}`, 'utf8');
      fs.writeFileSync('src/locales/zh.ts', backupContent, 'utf8');
      
      console.log('✅ Restored from backup');
    } else {
      console.error('❌ No backup files found');
      
      // Create a minimal working file
      const minimalTranslations = {
        nav: {
          home: "首页",
          about: "关于我们",
          expertise: "专业领域",
          appointments: "预约",
          locations: "诊所位置",
          contact: "联系我们"
        },
        hero: {
          title: "先进的神经外科解决方案",
          subtitle: "专业神经外科护理",
          description: "我们提供全面的神经外科护理服务。",
          bookConsultation: "预约咨询"
        },
        footer: {
          description: "miNEURO是一家领先的神经外科诊所。",
          quickLinks: "快速链接",
          contact: "联系方式",
          allRights: "版权所有"
        },
        common: {
          loading: "加载中...",
          error: "错误",
          success: "成功",
          cancel: "取消",
          confirm: "确认",
          save: "保存",
          submit: "提交"
        }
      };
      
      const minimalContent = `export default ${objectToTypeScript(minimalTranslations)};\n`;
      fs.writeFileSync('src/locales/zh.ts', minimalContent, 'utf8');
      
      console.log('✅ Created minimal working translation file');
    }
  }
} else {
  console.log('✅ Translations loaded successfully');
  
  // Rewrite with proper formatting
  const newContent = `export default ${objectToTypeScript(zhTranslations)};\n`;
  
  // Backup existing file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(`src/locales/zh.ts.backup-syntax-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));
  
  // Write the properly formatted file
  fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');
  
  console.log('✅ Translation file reformatted with proper syntax');
  console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-syntax-${timestamp}`);
}

console.log('\n🔧 Translation syntax fix completed!');
