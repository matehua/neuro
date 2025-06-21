#!/usr/bin/env node

/**
 * Comprehensive script to fix ALL translation-related runtime errors
 * Adds fallback mechanisms to every component that uses useLanguage
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = __dirname;

// All page components that need translation fallbacks
const PAGE_COMPONENTS = [
  'src/pages/Contact.tsx',
  'src/pages/Expertise.tsx', 
  'src/pages/Faq.tsx',
  'src/pages/GPResources.tsx',
  'src/pages/Locations.tsx',
  'src/pages/Medicolegal.tsx',
  'src/pages/PatientResources.tsx',
  'src/pages/Specialties.tsx',
  'src/pages/expertise/CervicalDiscReplacement.tsx',
  'src/pages/expertise/ImageGuidedSurgery.tsx',
  'src/pages/expertise/LumbarDiscReplacement.tsx',
  'src/pages/expertise/RoboticSpineSurgery.tsx',
  'src/pages/gp-resources/CareCoordination.tsx',
  'src/pages/gp-resources/Emergencies.tsx',
  'src/pages/patient-resources/AgeSpecificSpineRecommendations.tsx',
  'src/pages/patient-resources/AssessmentTools.tsx',
  'src/pages/patient-resources/CervicalSpineExercises.tsx',
  'src/pages/patient-resources/CervicalSpineInjury.tsx',
  'src/pages/patient-resources/ConditionInformation.tsx',
  'src/pages/patient-resources/ExerciseLibrary.tsx',
  'src/pages/patient-resources/ExercisePainMedRisks.tsx',
  'src/pages/patient-resources/IndividualSpineHealthProgram.tsx',
  'src/pages/patient-resources/IndividualSpineHealthProgramme.tsx',
  'src/pages/patient-resources/LifestyleModifications.tsx',
  'src/pages/patient-resources/PatientDashboard.tsx',
  'src/pages/patient-resources/SpineAndBrainHealth.tsx',
  'src/pages/patient-resources/SpineConditionsLibrary.tsx',
  'src/pages/patient-resources/SpineHealthApp.tsx',
  'src/pages/patient-resources/SpineSafeExercises.tsx',
  'src/pages/patient-resources/YouthfulSpine.tsx'
];

// Additional components that need fixing
const OTHER_COMPONENTS = [
  'src/components/CTASection.tsx',
  'src/components/IndependentReviewsSection.tsx',
  'src/components/LanguageSelector.tsx',
  'src/components/TestimonialsSection.tsx'
];

const ALL_COMPONENTS = [...PAGE_COMPONENTS, ...OTHER_COMPONENTS];

/**
 * Check if file uses translations
 */
function usesTranslations(filePath) {
  if (!fs.existsSync(filePath)) return false;
  
  const content = fs.readFileSync(filePath, 'utf8');
  return content.includes('useLanguage') && content.includes('const { t }');
}

/**
 * Check if file already has fallback mechanism
 */
function hasFallback(content) {
  return content.includes('const safeT = t || en') || 
         content.includes('const finalT =') ||
         content.includes('// Safe fallback for translations');
}

/**
 * Add fallback mechanism to component
 */
function addFallbackMechanism(content, filePath) {
  // Check if already has fallback
  if (hasFallback(content)) {
    return { content, changed: false };
  }

  // Add import for en translations if not present
  let updatedContent = content;
  if (!content.includes("import en from '@/locales/en'")) {
    // Find the last import statement
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    if (importLines.length > 0) {
      const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
      const insertPosition = content.indexOf('\n', lastImportIndex) + 1;
      updatedContent = content.slice(0, insertPosition) + 
                     "import en from '@/locales/en';\n" + 
                     content.slice(insertPosition);
    }
  }

  // Find the component function and add fallback after useLanguage
  const useLanguageMatch = updatedContent.match(/const\s+{\s*t\s*}\s*=\s*useLanguage\(\);?/);
  if (useLanguageMatch) {
    const insertPosition = updatedContent.indexOf(useLanguageMatch[0]) + useLanguageMatch[0].length;
    
    const fallbackCode = `

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Add minimal fallback structure based on component needs
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    hero: { title: "Welcome", subtitle: "Professional Care", description: "Expert medical services" },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };`;

    updatedContent = updatedContent.slice(0, insertPosition) + 
                    fallbackCode + 
                    updatedContent.slice(insertPosition);

    // Replace t. with finalT. throughout the component
    updatedContent = updatedContent.replace(/\bt\./g, 'finalT.');
    
    return { content: updatedContent, changed: true };
  }

  return { content, changed: false };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const fullPath = path.join(PROJECT_ROOT, filePath);
  
  if (!usesTranslations(fullPath)) {
    return { processed: false, reason: 'No translations used' };
  }

  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    const result = addFallbackMechanism(content, filePath);
    
    if (result.changed) {
      fs.writeFileSync(fullPath, result.content, 'utf8');
      return { processed: true, reason: 'Added fallback mechanism' };
    } else {
      return { processed: false, reason: 'Already has fallback' };
    }
  } catch (error) {
    return { processed: false, reason: `Error: ${error.message}` };
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 FIXING ALL TRANSLATION COMPONENTS');
  console.log('='.repeat(50));
  console.log();

  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const component of ALL_COMPONENTS) {
    const result = processFile(component);
    
    if (result.processed) {
      console.log(`✅ ${component} - ${result.reason}`);
      processed++;
    } else {
      console.log(`⏭️  ${component} - ${result.reason}`);
      if (result.reason.startsWith('Error:')) {
        errors++;
      } else {
        skipped++;
      }
    }
  }

  console.log();
  console.log('📊 SUMMARY');
  console.log('='.repeat(30));
  console.log(`✅ Processed: ${processed}`);
  console.log(`⏭️  Skipped: ${skipped}`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`📁 Total: ${ALL_COMPONENTS.length}`);
  
  if (processed > 0) {
    console.log();
    console.log('🎉 Translation fallbacks added successfully!');
    console.log('💡 All components now have robust error handling for translation failures.');
  }
}

main();
