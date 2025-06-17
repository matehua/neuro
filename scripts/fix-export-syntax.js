#!/usr/bin/env node

/**
 * Fix Export Syntax Script
 * Fixes problematic export default const patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Files with export default const issues
const PROBLEMATIC_FILES = [
  'src/components/AppointmentForm.tsx',
  'src/components/CTASection.tsx',
  'src/components/EnhancedImage.tsx',
  'src/components/Footer.tsx',
  'src/components/HeroSection.tsx',
  'src/components/IndependentReviewsSection.tsx',
  'src/components/LanguageSelector.tsx',
  'src/components/layout/StandardSection.tsx',
  'src/components/Layout.tsx',
  'src/components/Loading.tsx',
  'src/components/Navbar.tsx',
  'src/components/PageHeader.tsx',
  'src/components/ProcedureCard.tsx',
  'src/components/SkipLink.tsx',
  'src/components/StandardPageLayout.tsx',
  'src/components/TestimonialsSection.tsx',
  'src/components/ThemeToggle.tsx',
  'src/pages/AppointmentBooking.tsx',
  'src/pages/Appointments.tsx',
  'src/pages/ConsultingRooms.tsx',
  'src/pages/Contact.tsx',
  'src/pages/expertise/CervicalDiscReplacement.tsx',
  'src/pages/expertise/ImageGuidedSurgery.tsx',
  'src/pages/expertise/LumbarDiscReplacement.tsx',
  'src/pages/expertise/RoboticSpineSurgery.tsx',
  'src/pages/Expertise.tsx',
  'src/pages/Faq.tsx',
  'src/pages/Gallery.tsx',
  'src/pages/gp-resources/CareCoordination.tsx',
  'src/pages/gp-resources/Diagnostics.tsx',
  'src/pages/gp-resources/Emergencies.tsx',
  'src/pages/gp-resources/ReferralProtocols.tsx',
  'src/pages/GPResources.tsx',
  'src/pages/Index.tsx',
  'src/pages/locations/bundoora/index.tsx',
  'src/pages/locations/dandenong/index.tsx',
  'src/pages/locations/frankston/index.tsx',
  'src/pages/locations/heidelberg/index.tsx',
  'src/pages/locations/langwarrin/index.tsx',
  'src/pages/locations/LocationDetail.tsx',
  'src/pages/locations/moonee-ponds/index.tsx',
  'src/pages/locations/mornington/index.tsx',
  'src/pages/locations/sunbury/index.tsx',
  'src/pages/locations/surrey-hills/index.tsx',
  'src/pages/locations/wantirna/index.tsx',
  'src/pages/locations/werribee/index.tsx',
  'src/pages/Locations.tsx',
  'src/pages/Medicolegal.tsx',
  'src/pages/patient-resources/AgeSpecificSpineRecommendations.tsx',
  'src/pages/patient-resources/AssessmentTools.tsx',
  'src/pages/patient-resources/CervicalSpineExercises.tsx',
  'src/pages/patient-resources/CervicalSpineInjury.tsx',
  'src/pages/patient-resources/ConditionInformation.tsx',
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
  'src/pages/patient-resources/LifestyleModifications.tsx',
  'src/pages/patient-resources/PatientDashboard.tsx',
  'src/pages/patient-resources/SpineAndBrainHealth.tsx',
  'src/pages/patient-resources/SpineConditionsLibrary.tsx',
  'src/pages/patient-resources/SpineHealthApp.tsx',
  'src/pages/patient-resources/SpineSafeExercises.tsx',
  'src/pages/patient-resources/YouthfulSpine.tsx',
  'src/pages/PatientResources.tsx',
  'src/pages/PrivacyPolicy.tsx',
  'src/pages/Specialties.tsx',
  'src/pages/TermsConditions.tsx',
  'src/pages/TestImages.tsx'
];

/**
 * Fix export syntax in a single file
 */
function fixExportSyntax(filePath) {
  const fullPath = path.join(PROJECT_ROOT, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const relativePath = path.relative(PROJECT_ROOT, fullPath);
  
  // Extract component name from file path
  const fileName = path.basename(filePath, path.extname(filePath));
  const componentName = fileName === 'index' ? 
    path.basename(path.dirname(filePath)).split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Location' : fileName;

  // Pattern to match: export default const ComponentName: React.FC = ...
  const exportPattern = new RegExp(`export default const ${componentName}: React\\.FC[^=]*=`, 'g');
  
  if (!exportPattern.test(content)) {
    console.log(`⚠️  No matching export pattern found in: ${relativePath}`);
    return false;
  }

  // Fix the export syntax
  let fixedContent = content.replace(
    exportPattern,
    `const ${componentName}: React.FC =`
  );

  // Add export default at the end if not present
  if (!fixedContent.includes(`export default ${componentName};`)) {
    // Find the last closing brace or bracket
    const lastBraceIndex = Math.max(
      fixedContent.lastIndexOf('};'),
      fixedContent.lastIndexOf('}')
    );
    
    if (lastBraceIndex > -1) {
      const beforeBrace = fixedContent.slice(0, lastBraceIndex + 1);
      const afterBrace = fixedContent.slice(lastBraceIndex + 1);
      
      // Add displayName and export
      fixedContent = beforeBrace + 
        `\n\n${componentName}.displayName = '${componentName}';\n\nexport default ${componentName};` + 
        afterBrace;
    }
  }

  // Write the fixed content back
  fs.writeFileSync(fullPath, fixedContent);
  console.log(`✅ Fixed export syntax: ${relativePath}`);
  return true;
}

/**
 * Main function
 */
function fixAllExportSyntax() {
  console.log('🔧 FIXING EXPORT SYNTAX ISSUES');
  console.log('='.repeat(50));
  console.log();

  let fixedCount = 0;
  let totalFiles = PROBLEMATIC_FILES.length;

  PROBLEMATIC_FILES.forEach(filePath => {
    if (fixExportSyntax(filePath)) {
      fixedCount++;
    }
  });

  console.log();
  console.log('📊 EXPORT SYNTAX FIX SUMMARY');
  console.log('─'.repeat(40));
  console.log(`📁 Files processed: ${totalFiles}`);
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`⚠️  Files skipped: ${totalFiles - fixedCount}`);

  if (fixedCount > 0) {
    console.log();
    console.log('💡 CHANGES MADE:');
    console.log('• Converted "export default const" to proper const declaration');
    console.log('• Added export default statements at end of files');
    console.log('• Added displayName properties for better debugging');
    console.log('• Preserved all component functionality');
  }
}

// Run the fix
fixAllExportSyntax();
