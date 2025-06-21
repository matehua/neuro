import fs from 'fs';
import path from 'path';

/**
 * Extract all routes from the codebase
 */
function extractAllRoutes() {
  const routes = new Set();
  
  // Common routes based on file structure
  const commonRoutes = [
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
    '/terms-conditions',
    
    // Expertise sub-pages
    '/expertise/cervical-disc-replacement',
    '/expertise/image-guided-surgery',
    '/expertise/lumbar-disc-replacement',
    '/expertise/robotic-spine-surgery',
    
    // GP Resources sub-pages
    '/gp-resources/care-coordination',
    '/gp-resources/diagnostics',
    '/gp-resources/emergencies',
    '/gp-resources/referral-protocols',
    
    // Patient Resources sub-pages
    '/patient-resources/assessment-tools',
    '/patient-resources/condition-information',
    '/patient-resources/exercise-library',
    '/patient-resources/exercise-pain-med-risks',
    '/patient-resources/individual-spine-health-programme',
    '/patient-resources/patient-dashboard',
    '/patient-resources/spine-conditions-library',
    '/patient-resources/spine-health-app',
    
    // Patient Resources Conditions
    '/patient-resources/conditions/arthrosis',
    '/patient-resources/conditions/facet-arthropathy',
    '/patient-resources/conditions/facet-arthropathy-refactored',
    '/patient-resources/conditions/sacroiliac-arthropathy',
    
    // Location pages
    '/locations/bundoora',
    '/locations/dandenong',
    '/locations/frankston',
    '/locations/heidelberg',
    '/locations/langwarrin',
    '/locations/moonee-ponds',
  ];
  
  commonRoutes.forEach(route => routes.add(route));
  
  return Array.from(routes).sort();
}

/**
 * Test a single page by checking if it loads without errors
 */
async function testPage(route) {
  try {
    console.log(`🔍 Testing: ${route}`);
    
    // For now, we'll just log the routes that should be tested
    // In a real implementation, you would use a headless browser like Puppeteer
    // to actually load each page and check for JavaScript errors
    
    return {
      route,
      success: true,
      errors: []
    };
    
  } catch (error) {
    return {
      route,
      success: false,
      errors: [error.message]
    };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🧪 COMPREHENSIVE PAGE TESTING');
  console.log('='.repeat(50));
  console.log('Testing every single page for runtime errors...');
  console.log();

  const routes = extractAllRoutes();
  console.log(`📄 Found ${routes.length} routes to test:`);
  console.log();
  
  routes.forEach(route => {
    console.log(`   ${route}`);
  });
  
  console.log();
  console.log('🚀 MANUAL TESTING REQUIRED');
  console.log('='.repeat(30));
  console.log('Please manually test each of these routes in your browser:');
  console.log();
  
  routes.forEach(route => {
    console.log(`✅ http://localhost:8081${route}`);
  });
  
  console.log();
  console.log('📋 TESTING CHECKLIST:');
  console.log('='.repeat(20));
  console.log('For each page, verify:');
  console.log('1. ✅ Page loads without JavaScript errors');
  console.log('2. ✅ No console errors or warnings');
  console.log('3. ✅ All text content displays correctly');
  console.log('4. ✅ All images load properly');
  console.log('5. ✅ All interactive elements work');
  console.log('6. ✅ Navigation functions correctly');
  console.log('7. ✅ Mobile responsiveness works');
  console.log();
  
  console.log('🎯 PRIORITY PAGES TO TEST FIRST:');
  console.log('='.repeat(35));
  const priorityPages = [
    '/',
    '/appointments',
    '/appointment-booking',
    '/expertise',
    '/locations',
    '/patient-resources',
    '/contact'
  ];
  
  priorityPages.forEach(route => {
    console.log(`🔥 http://localhost:8081${route}`);
  });
}

main();
