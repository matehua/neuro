import fs from 'fs';
import path from 'path';

/**
 * CRITICAL ISSUES RESOLUTION SCRIPT
 * Fixes the most critical structural issues identified in the codebase analysis
 */

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

let fixedIssues = [];
let errors = [];

/**
 * 1. FIX MISSING EXPORT STATEMENTS
 */
function fixMissingExports() {
  console.log('🔧 FIXING MISSING EXPORT STATEMENTS...');
  
  const uiComponentsDir = path.join(SRC_DIR, 'components', 'ui');
  
  if (!fs.existsSync(uiComponentsDir)) {
    console.log('   ⚠️  UI components directory not found');
    return;
  }
  
  const uiFiles = fs.readdirSync(uiComponentsDir).filter(file => file.endsWith('.tsx'));
  
  uiFiles.forEach(file => {
    const filePath = path.join(uiComponentsDir, file);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has export statement
      if (!content.includes('export default') && 
          !content.includes('export const') && 
          !content.includes('export function') &&
          !content.includes('export {')) {
        
        console.log(`   🔧 Fixing exports in ${file}`);
        
        // Try to identify the main component/function to export
        const componentMatch = content.match(/(?:const|function)\s+(\w+)/);
        if (componentMatch) {
          const componentName = componentMatch[1];
          const fixedContent = content + `\n\nexport default ${componentName};\n`;
          fs.writeFileSync(filePath, fixedContent);
          
          fixedIssues.push({
            type: 'MISSING_EXPORT_FIXED',
            file: file,
            component: componentName
          });
        }
      }
      
    } catch (error) {
      errors.push({
        type: 'EXPORT_FIX_ERROR',
        file: file,
        error: error.message
      });
    }
  });
  
  console.log(`   ✅ Fixed exports in ${fixedIssues.filter(f => f.type === 'MISSING_EXPORT_FIXED').length} files`);
}

/**
 * 2. VERIFY CRITICAL IMPORTS EXIST
 */
function verifyCriticalImports() {
  console.log('🔍 VERIFYING CRITICAL IMPORTS...');
  
  const criticalPaths = [
    'src/components/ui/button.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/input.tsx',
    'src/components/ui/label.tsx',
    'src/components/ui/tabs.tsx',
    'src/components/ui/accordion.tsx',
    'src/components/ui/badge.tsx',
    'src/components/ui/select.tsx',
    'src/components/ui/separator.tsx',
    'src/components/ui/skeleton.tsx',
    'src/components/ui/tooltip.tsx',
    'src/components/ui/dialog.tsx',
    'src/components/ui/alert.tsx',
    'src/components/ui/calendar.tsx',
    'src/components/ui/textarea.tsx',
    'src/components/ui/slider.tsx',
    'src/components/ui/sheet.tsx',
    'src/components/ui/toggle.tsx',
    'src/lib/utils.ts',
    'src/contexts/DeviceContext.tsx',
    'src/contexts/LanguageContext.tsx',
    'src/locales/en.ts',
    'src/locales/zh.ts',
    'src/hooks/useSEO.ts',
    'src/components/ErrorBoundary.tsx',
    'src/components/Footer.tsx',
    'src/components/Navbar.tsx',
    'src/components/SafeImage.tsx',
    'src/components/StandardPageLayout.tsx',
    'src/components/PageHeader.tsx',
    'src/components/ProcedureCard.tsx',
    'src/types/procedures.ts'
  ];
  
  const missingFiles = [];
  const existingFiles = [];
  
  criticalPaths.forEach(relativePath => {
    const fullPath = path.join(PROJECT_ROOT, relativePath);
    if (fs.existsSync(fullPath)) {
      existingFiles.push(relativePath);
    } else {
      missingFiles.push(relativePath);
    }
  });
  
  console.log(`   ✅ Existing critical files: ${existingFiles.length}`);
  console.log(`   ❌ Missing critical files: ${missingFiles.length}`);
  
  if (missingFiles.length > 0) {
    console.log('   📋 Missing files:');
    missingFiles.forEach(file => {
      console.log(`      - ${file}`);
    });
  }
  
  return { existingFiles, missingFiles };
}

/**
 * 3. CHECK ROUTE REGISTRATION CONSISTENCY
 */
function checkRouteConsistency() {
  console.log('🛣️  CHECKING ROUTE CONSISTENCY...');
  
  try {
    const routeConfigPath = path.join(SRC_DIR, 'routes', 'routeConfig.tsx');
    const routeDefsPath = path.join(SRC_DIR, 'routes', 'route-definitions.ts');
    
    if (!fs.existsSync(routeConfigPath) || !fs.existsSync(routeDefsPath)) {
      console.log('   ❌ Route configuration files missing');
      return;
    }
    
    const routeConfigContent = fs.readFileSync(routeConfigPath, 'utf8');
    const routeDefsContent = fs.readFileSync(routeDefsPath, 'utf8');
    
    // Count registered routes
    const importMatches = routeConfigContent.match(/import\([^)]+\)/g) || [];
    const registeredRoutes = importMatches.length;
    
    // Count defined routes (approximate)
    const pathMatches = routeDefsContent.match(/['"`]\/[^'"`]*['"`]/g) || [];
    const definedPaths = pathMatches.length;
    
    console.log(`   📍 Registered routes: ${registeredRoutes}`);
    console.log(`   📍 Defined paths: ${definedPaths}`);
    
    if (registeredRoutes < definedPaths) {
      console.log(`   ⚠️  Potential missing route registrations: ${definedPaths - registeredRoutes}`);
    }
    
  } catch (error) {
    errors.push({
      type: 'ROUTE_CHECK_ERROR',
      error: error.message
    });
  }
}

/**
 * 4. VALIDATE TRANSLATION STRUCTURE
 */
function validateTranslations() {
  console.log('🌐 VALIDATING TRANSLATION STRUCTURE...');
  
  try {
    const enPath = path.join(SRC_DIR, 'locales', 'en.ts');
    const zhPath = path.join(SRC_DIR, 'locales', 'zh.ts');
    
    if (!fs.existsSync(enPath) || !fs.existsSync(zhPath)) {
      console.log('   ❌ Translation files missing');
      return;
    }
    
    const enContent = fs.readFileSync(enPath, 'utf8');
    const zhContent = fs.readFileSync(zhPath, 'utf8');
    
    // Basic validation - check if files are valid
    const enValid = enContent.includes('export default') && enContent.includes('{');
    const zhValid = zhContent.includes('export default') && zhContent.includes('{');
    
    console.log(`   ✅ English translations valid: ${enValid}`);
    console.log(`   ✅ Chinese translations valid: ${zhValid}`);
    
    if (!enValid || !zhValid) {
      errors.push({
        type: 'TRANSLATION_STRUCTURE_ERROR',
        message: 'Translation files have structural issues'
      });
    }
    
  } catch (error) {
    errors.push({
      type: 'TRANSLATION_VALIDATION_ERROR',
      error: error.message
    });
  }
}

/**
 * 5. CHECK TYPESCRIPT CONFIGURATION
 */
function checkTypeScriptConfig() {
  console.log('📝 CHECKING TYPESCRIPT CONFIGURATION...');
  
  const tsConfigPath = path.join(PROJECT_ROOT, 'tsconfig.json');
  const tsConfigAppPath = path.join(PROJECT_ROOT, 'tsconfig.app.json');
  
  const configs = [
    { path: tsConfigPath, name: 'tsconfig.json' },
    { path: tsConfigAppPath, name: 'tsconfig.app.json' }
  ];
  
  configs.forEach(config => {
    if (fs.existsSync(config.path)) {
      try {
        const content = fs.readFileSync(config.path, 'utf8');
        const parsed = JSON.parse(content);
        
        console.log(`   ✅ ${config.name} is valid`);
        
        // Check for path mapping
        if (parsed.compilerOptions && parsed.compilerOptions.paths) {
          console.log(`   ✅ Path mapping configured in ${config.name}`);
        }
        
      } catch (error) {
        console.log(`   ❌ ${config.name} has syntax errors`);
        errors.push({
          type: 'TSCONFIG_ERROR',
          file: config.name,
          error: error.message
        });
      }
    } else {
      console.log(`   ❌ ${config.name} missing`);
    }
  });
}

/**
 * MAIN EXECUTION
 */
function main() {
  console.log('🔧 CRITICAL ISSUES RESOLUTION');
  console.log('='.repeat(50));
  
  fixMissingExports();
  const { existingFiles, missingFiles } = verifyCriticalImports();
  checkRouteConsistency();
  validateTranslations();
  checkTypeScriptConfig();
  
  // Generate summary report
  console.log('\n📊 RESOLUTION SUMMARY');
  console.log('='.repeat(30));
  
  console.log(`✅ Issues Fixed: ${fixedIssues.length}`);
  console.log(`❌ Errors Encountered: ${errors.length}`);
  console.log(`📁 Critical Files Existing: ${existingFiles.length}`);
  console.log(`📁 Critical Files Missing: ${missingFiles.length}`);
  
  if (errors.length > 0) {
    console.log('\n🚨 ERRORS ENCOUNTERED:');
    errors.forEach(error => {
      console.log(`   ❌ ${error.type}: ${error.error || error.message}`);
    });
  }
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    fixedIssues,
    errors,
    existingFiles,
    missingFiles,
    summary: {
      issuesFixed: fixedIssues.length,
      errorsEncountered: errors.length,
      criticalFilesExisting: existingFiles.length,
      criticalFilesMissing: missingFiles.length
    }
  };
  
  fs.writeFileSync('critical-issues-resolution.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Detailed report saved to: critical-issues-resolution.json');
  
  if (errors.length > 0) {
    console.log('\n⚠️  SOME ISSUES REQUIRE MANUAL ATTENTION');
    process.exit(1);
  } else {
    console.log('\n✅ CRITICAL ISSUES RESOLUTION COMPLETE');
    process.exit(0);
  }
}

main();
