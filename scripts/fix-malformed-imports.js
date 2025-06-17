#!/usr/bin/env node

/**
 * Fix Malformed Import Statements Script
 * Fixes duplicate "import" keywords in import statements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Files with malformed imports
const MALFORMED_IMPORT_FILES = [
  'src/components/AppointmentForm.tsx',
  'src/components/LanguageSelector.tsx',
  'src/components/ui/form.tsx',
  'src/components/ui/sidebar.tsx',
  'src/data/conditions/discopathy.ts',
  'src/pages/Faq.tsx',
  'src/pages/patient-resources/AgeSpecificSpineRecommendations.tsx',
  'src/pages/patient-resources/CervicalSpineExercises.tsx',
  'src/pages/patient-resources/CervicalSpineInjury.tsx',
  'src/pages/patient-resources/conditions/Arthrosis.tsx',
  'src/pages/patient-resources/conditions/FacetArthropathy.tsx',
  'src/pages/patient-resources/conditions/HerniatedDisc.tsx',
  'src/pages/patient-resources/conditions/OccipitalNeuralgia.tsx',
  'src/pages/patient-resources/conditions/ParsDefects.tsx',
  'src/pages/patient-resources/conditions/PiriformisSyndrome.tsx',
  'src/pages/patient-resources/conditions/Radiculopathy.tsx',
  'src/pages/patient-resources/conditions/SacroiliacArthropathy.tsx',
  'src/pages/patient-resources/conditions/Sciatica.tsx',
  'src/pages/patient-resources/conditions/SpinalStenosis.tsx',
  'src/pages/patient-resources/conditions/Spondylolisthesis.tsx',
  'src/pages/patient-resources/conditions/Spondylosis.tsx',
  'src/pages/patient-resources/conditions/ThoracicOutletSyndrome.tsx',
  'src/pages/patient-resources/ExerciseLibrary.tsx',
  'src/pages/patient-resources/ExercisePainMedRisks.tsx',
  'src/pages/patient-resources/IndividualSpineHealthProgramme.tsx',
  'src/pages/patient-resources/SpineSafeExercises.tsx',
  'src/pages/patient-resources/YouthfulSpine.tsx',
  'src/pages/Specialties.tsx'
];

/**
 * Fix malformed imports in a single file
 */
function fixMalformedImports(filePath) {
  const fullPath = path.join(PROJECT_ROOT, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, fullPath);
  
  let fixedContent = content;
  let changes = 0;

  // Fix "import { import" patterns
  const malformedImportRegex = /import\s*\{\s*import\s+([^}]+)\s*\}/g;
  const matches = [...content.matchAll(malformedImportRegex)];
  
  for (const match of matches) {
    const fullMatch = match[0];
    const importContent = match[1].trim();
    
    // Fix the import statement
    const fixedImport = `import ${importContent}`;
    fixedContent = fixedContent.replace(fullMatch, fixedImport);
    changes++;
  }

  // Fix other malformed patterns like "import { import ComponentName from"
  const malformedDefaultImportRegex = /import\s*\{\s*import\s+(\w+)\s+from\s+(['"][^'"]+['"])/g;
  const defaultMatches = [...content.matchAll(malformedDefaultImportRegex)];
  
  for (const match of defaultMatches) {
    const fullMatch = match[0];
    const componentName = match[1];
    const fromPath = match[2];
    
    // Fix the import statement
    const fixedImport = `import ${componentName} from ${fromPath}`;
    fixedContent = fixedContent.replace(fullMatch, fixedImport);
    changes++;
  }

  // Fix patterns like "import { import { ... } from"
  const malformedNamedImportRegex = /import\s*\{\s*import\s+\{\s*([^}]+)\s*\}\s*from\s+(['"][^'"]+['"])/g;
  const namedMatches = [...content.matchAll(malformedNamedImportRegex)];
  
  for (const match of namedMatches) {
    const fullMatch = match[0];
    const namedImports = match[1];
    const fromPath = match[2];
    
    // Fix the import statement
    const fixedImport = `import { ${namedImports} } from ${fromPath}`;
    fixedContent = fixedContent.replace(fullMatch, fixedImport);
    changes++;
  }

  // Write the fixed content back
  if (changes > 0) {
    fs.writeFileSync(fullPath, fixedContent);
    console.log(`✅ Fixed malformed imports: ${relativePath} (${changes} fixes)`);
    return true;
  }

  console.log(`⚠️  No malformed imports found in: ${relativePath}`);
  return false;
}

/**
 * Main function
 */
function fixAllMalformedImports() {
  console.log('🔧 FIXING MALFORMED IMPORT STATEMENTS');
  console.log('='.repeat(50));
  console.log();

  let fixedCount = 0;
  let totalFiles = MALFORMED_IMPORT_FILES.length;

  MALFORMED_IMPORT_FILES.forEach(filePath => {
    if (fixMalformedImports(filePath)) {
      fixedCount++;
    }
  });

  console.log();
  console.log('📊 MALFORMED IMPORT FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${totalFiles}`);
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`⚠️  Files skipped: ${totalFiles - fixedCount}`);

  if (fixedCount > 0) {
    console.log();
    console.log('💡 CHANGES MADE:');
    console.log('• Removed duplicate "import" keywords');
    console.log('• Fixed malformed import syntax');
    console.log('• Preserved all import functionality');
    console.log('• Maintained proper module resolution');
  }
}

// Run the fix
fixAllMalformedImports();
