import fs from 'fs';
import path from 'path';

/**
 * Extract ALL routes from the route definitions file
 */
function extractAllRoutesFromDefinitions() {
  try {
    const routeDefsPath = path.join(process.cwd(), 'src', 'routes', 'route-definitions.ts');
    const content = fs.readFileSync(routeDefsPath, 'utf8');
    
    const routes = new Set();
    
    // Extract routes from ROUTE_PATHS object
    const routePathsMatch = content.match(/export const ROUTE_PATHS = \{([\s\S]*?)\} as const;/);
    if (routePathsMatch) {
      const routePathsContent = routePathsMatch[1];
      
      // Extract all string values that look like routes
      const routeMatches = routePathsContent.match(/'([^']+)'/g);
      if (routeMatches) {
        routeMatches.forEach(match => {
          const route = match.replace(/'/g, '');
          if (route.startsWith('/') || route === '*') {
            routes.add(route);
          }
        });
      }
    }
    
    return Array.from(routes).filter(route => route !== '*'); // Remove wildcard
  } catch (error) {
    console.error('Error reading route definitions:', error.message);
    return [];
  }
}

/**
 * Extract routes from file structure
 */
function extractRoutesFromFileStructure() {
  const routes = new Set();
  
  // Main pages
  const mainPages = [
    '/',
    '/appointments',
    '/appointment-booking',
    '/contact',
    '/expertise',
    '/faq',
    '/gallery',
    '/gp-resources',
    '/locations',
    '/medicolegal',
    '/patient-resources',
    '/privacy-policy',
    '/specialties',
    '/terms-conditions'
  ];
  
  mainPages.forEach(route => routes.add(route));
  
  // Expertise sub-pages
  const expertisePages = [
    '/expertise/cervical-disc-replacement',
    '/expertise/image-guided-surgery',
    '/expertise/lumbar-disc-replacement',
    '/expertise/robotic-spine-surgery'
  ];
  
  expertisePages.forEach(route => routes.add(route));
  
  // GP Resources sub-pages
  const gpResourcesPages = [
    '/gp-resources/care-coordination',
    '/gp-resources/diagnostics',
    '/gp-resources/emergencies',
    '/gp-resources/referral-protocols'
  ];
  
  gpResourcesPages.forEach(route => routes.add(route));
  
  // Patient Resources sub-pages
  const patientResourcesPages = [
    '/patient-resources/condition-information',
    '/patient-resources/exercise-library',
    '/patient-resources/spine-health-app',
    '/patient-resources/assessment-tools',
    '/patient-resources/lifestyle-modifications',
    '/patient-resources/cervical-spine-exercises',
    '/patient-resources/spine-safe-exercises',
    '/patient-resources/cervical-spine-injury',
    '/patient-resources/exercise-pain-med-risks',
    '/patient-resources/age-specific-spine-recommendations',
    '/patient-resources/youthful-spine',
    '/patient-resources/spine-and-brain-health',
    '/patient-resources/individual-spine-health-program',
    '/patient-resources/individual-spine-health-programme',
    '/patient-resources/spine-conditions-library',
    '/patient-resources/patient-dashboard'
  ];
  
  patientResourcesPages.forEach(route => routes.add(route));
  
  // Location pages
  const locationPages = [
    '/locations/surrey-hills',
    '/locations/mornington',
    '/locations/frankston',
    '/locations/moonee-ponds',
    '/locations/sunbury',
    '/locations/werribee',
    '/locations/bundoora',
    '/locations/dandenong',
    '/locations/heidelberg',
    '/locations/wantirna',
    '/locations/langwarrin'
  ];
  
  locationPages.forEach(route => routes.add(route));
  
  // Patient Resources - Conditions
  const conditionPages = [
    '/patient-resources/conditions/arthrosis',
    '/patient-resources/conditions/discopathy',
    '/patient-resources/conditions/facet-arthropathy',
    '/patient-resources/conditions/herniated-disc',
    '/patient-resources/conditions/occipital-neuralgia',
    '/patient-resources/conditions/pars-defects',
    '/patient-resources/conditions/piriformis-syndrome',
    '/patient-resources/conditions/radiculopathy',
    '/patient-resources/conditions/sacroiliac-arthropathy',
    '/patient-resources/conditions/sciatica',
    '/patient-resources/conditions/spinal-stenosis',
    '/patient-resources/conditions/spondylolisthesis',
    '/patient-resources/conditions/spondylosis',
    '/patient-resources/conditions/thoracic-outlet-syndrome'
  ];
  
  conditionPages.forEach(route => routes.add(route));
  
  return Array.from(routes);
}

/**
 * Get all unique routes
 */
function getAllRoutes() {
  const routesFromDefs = extractAllRoutesFromDefinitions();
  const routesFromStructure = extractRoutesFromFileStructure();
  
  const allRoutes = new Set([...routesFromDefs, ...routesFromStructure]);
  return Array.from(allRoutes).sort();
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 COMPREHENSIVE PAGE TESTING - EVERY SINGLE PAGE');
  console.log('='.repeat(60));
  console.log('Extracting ALL routes from the application...');
  console.log();

  const allRoutes = getAllRoutes();
  
  console.log(`📄 Found ${allRoutes.length} total routes to test:`);
  console.log();
  
  // Group routes by category for better organization
  const mainPages = allRoutes.filter(route => 
    !route.includes('/') || route === '/' || 
    ['appointments', 'contact', 'expertise', 'faq', 'gallery', 'gp-resources', 'locations', 'medicolegal', 'patient-resources', 'privacy-policy', 'specialties', 'terms-conditions'].some(page => route === `/${page}`)
  );
  
  const expertisePages = allRoutes.filter(route => route.startsWith('/expertise/'));
  const gpResourcesPages = allRoutes.filter(route => route.startsWith('/gp-resources/'));
  const patientResourcesPages = allRoutes.filter(route => route.startsWith('/patient-resources/') && !route.includes('/conditions/'));
  const conditionPages = allRoutes.filter(route => route.startsWith('/patient-resources/conditions/'));
  const locationPages = allRoutes.filter(route => route.startsWith('/locations/'));
  
  console.log('📋 ROUTES BY CATEGORY:');
  console.log();
  
  console.log(`🏠 Main Pages (${mainPages.length}):`);
  mainPages.forEach(route => console.log(`   ${route}`));
  console.log();
  
  console.log(`🧠 Expertise Pages (${expertisePages.length}):`);
  expertisePages.forEach(route => console.log(`   ${route}`));
  console.log();
  
  console.log(`👨‍⚕️ GP Resources Pages (${gpResourcesPages.length}):`);
  gpResourcesPages.forEach(route => console.log(`   ${route}`));
  console.log();
  
  console.log(`📚 Patient Resources Pages (${patientResourcesPages.length}):`);
  patientResourcesPages.forEach(route => console.log(`   ${route}`));
  console.log();
  
  console.log(`🏥 Condition Pages (${conditionPages.length}):`);
  conditionPages.forEach(route => console.log(`   ${route}`));
  console.log();
  
  console.log(`📍 Location Pages (${locationPages.length}):`);
  locationPages.forEach(route => console.log(`   ${route}`));
  console.log();
  
  console.log('🚀 MANUAL TESTING PROTOCOL:');
  console.log('='.repeat(40));
  console.log('Test each URL below in your browser and check for runtime errors:');
  console.log();
  
  allRoutes.forEach((route, index) => {
    console.log(`${(index + 1).toString().padStart(3, ' ')}. http://localhost:8081${route}`);
  });
  
  console.log();
  console.log('⚠️  WHAT TO LOOK FOR:');
  console.log('- "Cannot read properties of undefined (reading \'...\')');
  console.log('- "TypeError: Cannot read properties of undefined"');
  console.log('- "ReferenceError: ... is not defined"');
  console.log('- React error boundaries triggered');
  console.log('- Blank or broken page content');
  console.log('- Console warnings or errors');
  console.log();
  
  console.log('🔧 IF ERRORS ARE FOUND:');
  console.log('1. Note the exact error message and line number');
  console.log('2. Identify which translation key is causing the issue');
  console.log('3. Fix the fallback logic in the problematic component');
  console.log('4. Test the page again to confirm the fix');
  console.log();
  
  console.log('📊 TESTING SUMMARY:');
  console.log(`Total Routes: ${allRoutes.length}`);
  console.log(`Main Pages: ${mainPages.length}`);
  console.log(`Expertise Pages: ${expertisePages.length}`);
  console.log(`GP Resources: ${gpResourcesPages.length}`);
  console.log(`Patient Resources: ${patientResourcesPages.length}`);
  console.log(`Condition Pages: ${conditionPages.length}`);
  console.log(`Location Pages: ${locationPages.length}`);
}

main();
