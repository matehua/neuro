#!/usr/bin/env node

/**
 * Parsing Errors Fix Script
 * Systematically fixes syntax and parsing errors that prevent compilation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Files with known parsing errors from lint output
const PARSING_ERROR_FILES = [
  'src/components/CTASection.tsx',
  'src/components/EnhancedImage.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/LanguageWrapper.tsx',
  'src/components/Layout.tsx',
  'src/components/Loading.tsx',
  'src/components/NetworkStatus.tsx',
  'src/components/OptimizedImage.tsx',
  'src/components/PageHeader.tsx',
  'src/components/SEOHead.tsx',
  'src/components/ScreenReaderAnnouncer.tsx',
  'src/components/SkipLink.tsx',
  'src/components/TestimonialsSection.tsx',
  'src/components/layout/index.ts',
  'src/components/layout/types.ts',
  'src/components/medical-conditions/index.ts',
  'src/components/medical-conditions/types.ts',
  'src/components/ui/button.tsx',
  'src/components/ui/calendar.tsx',
  'src/components/ui/form.tsx',
  'src/components/ui/hover-card.tsx',
  'src/components/ui/input-otp.tsx',
  'src/components/ui/input.tsx',
  'src/components/ui/label.tsx',
  'src/components/ui/scroll-area.tsx',
  'src/components/ui/separator.tsx',
  'src/components/ui/sheet.tsx',
  'src/components/ui/sidebar.tsx',
  'src/components/ui/skeleton.tsx',
  'src/components/ui/sonner.tsx',
  'src/components/ui/toggle.tsx',
  'src/components/ui/use-toast.ts',
  'src/contexts/DeviceContext.tsx',
  'src/contexts/LanguageContext.tsx',
  'src/hooks/useSEO.ts',
  'src/lib/env-validation.ts',
  'src/lib/error-handling.ts',
  'src/lib/performance.ts',
  'src/lib/security.ts',
  'src/lib/seo.ts',
  'src/lib/sitemap.ts',
  'src/lib/test-utils.tsx',
  'src/lib/type-safety.ts',
  'src/pages/AppointmentBooking.tsx',
  'src/pages/ConsultingRooms.tsx',
  'src/pages/Gallery.tsx',
  'src/pages/locations/LocationDetail.tsx',
  'src/pages/patient-resources/ExerciseLibrary.tsx',
  'src/routes/route-definitions.ts',
  'src/routes/route-loader.tsx',
  'src/routes/routeConfig.tsx',
  'src/types/procedures.ts',
  'src/types/translations.ts'
];

/**
 * Fix common parsing errors
 */
function fixParsingErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix missing closing braces in interfaces
  fixed = fixed.replace(/interface\s+\w+\s*\{[^}]*$/gm, (match) => {
    if (!match.includes('}')) {
      changes++;
      return match + '\n}';
    }
    return match;
  });

  // Fix missing closing braces in type definitions
  fixed = fixed.replace(/type\s+\w+\s*=\s*\{[^}]*$/gm, (match) => {
    if (!match.includes('}')) {
      changes++;
      return match + '\n}';
    }
    return match;
  });

  // Fix missing closing braces in export statements
  if (fixed.includes('export {') && !fixed.trim().endsWith('}')) {
    const lines = fixed.split('\n');
    const lastNonEmptyLine = lines.findLastIndex(line => line.trim() !== '');
    if (lastNonEmptyLine >= 0 && !lines[lastNonEmptyLine].includes('}')) {
      lines[lastNonEmptyLine] = lines[lastNonEmptyLine] + '\n}';
      fixed = lines.join('\n');
      changes++;
    }
  }

  // Fix incomplete function declarations
  fixed = fixed.replace(/export\s+(const|function)\s+\w+[^{;]*$/gm, (match) => {
    if (!match.includes('{') && !match.includes(';')) {
      changes++;
      return match + ' = () => {};';
    }
    return match;
  });

  // Fix incomplete JSX expressions
  fixed = fixed.replace(/return\s*\(\s*<[^>]+>[^<]*$/gm, (match) => {
    if (!match.includes('</')) {
      changes++;
      return match + '\n    </div>\n  );';
    }
    return match;
  });

  // Fix missing commas in object/interface definitions
  fixed = fixed.replace(/(\w+:\s*[^,\n}]+)\s*\n\s*(\w+:)/g, '$1,\n  $2');

  // Fix incomplete forwardRef expressions
  fixed = fixed.replace(/React\.forwardRef<[^>]+>\(\(\{[^}]+\}\s*,\s*ref\s*\)\s*=>\s*\([^)]*$/gm, 
    (match) => {
      if (!match.includes('))')) {
        changes++;
        return match + ')';
      }
      return match;
    });

  // Fix missing semicolons in type definitions
  fixed = fixed.replace(/export\s+type\s+\w+\s*=\s*[^;]+$/gm, (match) => {
    if (!match.includes(';')) {
      changes++;
      return match + ';';
    }
    return match;
  });

  return { content: fixed, changes };
}

/**
 * Fix specific file patterns
 */
function fixSpecificPatterns(content, filePath) {
  let fixed = content;
  let changes = 0;

  const fileName = path.basename(filePath);

  // Fix JSX component files
  if (fileName.endsWith('.tsx') && !fixed.includes('export default')) {
    const componentName = fileName.replace('.tsx', '');
    if (fixed.includes(`const ${componentName}`)) {
      fixed = fixed + `\n\nexport default ${componentName};`;
      changes++;
    }
  }

  // Fix index files
  if (fileName === 'index.ts' || fileName === 'index.tsx') {
    if (fixed.includes('export') && !fixed.includes('export {')) {
      // Convert individual exports to barrel export
      const exports = fixed.match(/export\s+(?:const|function|class|interface|type)\s+(\w+)/g);
      if (exports) {
        const exportNames = exports.map(exp => exp.match(/(\w+)$/)[1]);
        fixed = fixed + `\n\nexport {\n  ${exportNames.join(',\n  ')}\n};`;
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return 0;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  let processedContent = content;
  let totalChanges = 0;

  console.log(`🔧 Processing ${relativePath}...`);

  // Apply fixes in order
  const fixes = [
    { name: 'Parsing errors', fn: fixParsingErrors },
    { name: 'Specific patterns', fn: fixSpecificPatterns }
  ];

  fixes.forEach(({ name, fn }) => {
    const result = fn(processedContent, filePath);
    processedContent = result.content;
    totalChanges += result.changes;
    
    if (result.changes > 0) {
      console.log(`  ✅ ${name}: ${result.changes} fixes`);
    }
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, processedContent);
    console.log(`  ✅ Total fixes: ${totalChanges}`);
  }

  return totalChanges;
}

/**
 * Main function
 */
function fixParsingErrorsMain() {
  console.log('🚨 FIXING PARSING ERRORS');
  console.log('='.repeat(40));
  console.log();

  let totalFiles = 0;
  let totalFixes = 0;

  PARSING_ERROR_FILES.forEach(file => {
    const fullPath = path.join(PROJECT_ROOT, file);
    const fixes = processFile(fullPath);
    if (fixes > 0) {
      totalFiles++;
      totalFixes += fixes;
    }
  });

  console.log();
  console.log('📊 PARSING ERRORS FIX SUMMARY');
  console.log('─'.repeat(30));
  console.log(`📁 Files processed: ${PARSING_ERROR_FILES.length}`);
  console.log(`✅ Files fixed: ${totalFiles}`);
  console.log(`🔧 Total fixes: ${totalFixes}`);
  
  if (totalFixes > 0) {
    console.log();
    console.log('🎯 Next steps:');
    console.log('1. Run npm run type-check to verify compilation');
    console.log('2. Run npm run lint to check remaining issues');
    console.log('3. Test critical functionality');
  }
}

// Run the script
fixParsingErrorsMain();
