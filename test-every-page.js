import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// All routes to test systematically
const routes = [
  // Main pages
  '/',
  '/appointments',
  '/contact',
  '/expertise',
  '/gallery',
  '/faq',
  '/locations',
  '/patient-resources',
  '/gp-resources',
  '/consulting-rooms',
  '/medicolegal',
  '/specialties',
  '/privacy-policy',
  '/terms-conditions',
  
  // Expertise pages
  '/expertise/cervical-disc-replacement',
  '/expertise/image-guided-surgery',
  '/expertise/lumbar-disc-replacement',
  '/expertise/robotic-spine-surgery',
  
  // Location pages
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
  '/locations/langwarrin',
  
  // Patient Resources pages
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
  '/patient-resources/patient-dashboard',
  
  // Patient Resources - Conditions
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
  '/patient-resources/conditions/thoracic-outlet-syndrome',
  
  // GP Resources pages
  '/gp-resources/care-coordination',
  '/gp-resources/diagnostics',
  '/gp-resources/emergencies',
  '/gp-resources/referral-protocols'
];

let totalPages = 0;
let passedPages = 0;
let failedPages = 0;
const errors = [];

async function testPage(browser, url) {
  const page = await browser.newPage();
  
  try {
    console.log(`🔍 Testing: ${url}`);
    totalPages++;
    
    // Set up console error tracking
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Set up page error tracking
    const pageErrors = [];
    page.on('pageerror', error => {
      pageErrors.push(error.message);
    });
    
    // Navigate to page with timeout
    await page.goto(`http://localhost:8081${url}`, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for React to render
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check for React errors in the page
    const reactErrors = await page.evaluate(() => {
      const errors = [];
      
      // Check for React error boundaries
      const errorBoundaries = document.querySelectorAll('[data-react-error-boundary]');
      if (errorBoundaries.length > 0) {
        errors.push('React Error Boundary triggered');
      }
      
      // Check for common error indicators
      const errorTexts = ['Cannot read properties of undefined', 'TypeError', 'ReferenceError', 'Uncaught'];
      const bodyText = document.body.innerText;
      errorTexts.forEach(errorText => {
        if (bodyText.includes(errorText)) {
          errors.push(`Page contains error text: ${errorText}`);
        }
      });
      
      return errors;
    });
    
    // Combine all errors
    const allErrors = [...consoleErrors, ...pageErrors, ...reactErrors];
    
    if (allErrors.length === 0) {
      console.log(`✅ ${url}: PASS`);
      passedPages++;
    } else {
      console.log(`❌ ${url}: FAIL`);
      console.log(`   Errors: ${allErrors.join(', ')}`);
      failedPages++;
      errors.push({
        url,
        errors: allErrors
      });
    }
    
  } catch (error) {
    console.log(`❌ ${url}: FAIL (Navigation Error)`);
    console.log(`   Error: ${error.message}`);
    failedPages++;
    errors.push({
      url,
      errors: [error.message]
    });
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🚀 COMPREHENSIVE PAGE TESTING');
  console.log('='.repeat(50));
  console.log(`Testing ${routes.length} pages for runtime errors...`);
  console.log();
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Test each page
    for (const route of routes) {
      await testPage(browser, route);
    }
    
    console.log();
    console.log('📊 SUMMARY');
    console.log('='.repeat(20));
    console.log(`📄 Total Pages: ${totalPages}`);
    console.log(`✅ Passed: ${passedPages}`);
    console.log(`❌ Failed: ${failedPages}`);
    console.log(`📈 Success Rate: ${((passedPages / totalPages) * 100).toFixed(1)}%`);
    
    if (errors.length > 0) {
      console.log();
      console.log('🔍 DETAILED ERROR REPORT');
      console.log('='.repeat(30));
      errors.forEach(({ url, errors: pageErrors }) => {
        console.log(`❌ ${url}:`);
        pageErrors.forEach(error => {
          console.log(`   - ${error}`);
        });
        console.log();
      });
      
      // Save detailed error report
      const errorReport = {
        timestamp: new Date().toISOString(),
        totalPages,
        passedPages,
        failedPages,
        successRate: ((passedPages / totalPages) * 100).toFixed(1),
        errors
      };
      
      fs.writeFileSync('page-test-errors.json', JSON.stringify(errorReport, null, 2));
      console.log('📄 Detailed error report saved to: page-test-errors.json');
    } else {
      console.log('🎉 All pages passed! No runtime errors found.');
    }
    
  } finally {
    await browser.close();
  }
  
  // Exit with error code if any pages failed
  process.exit(failedPages > 0 ? 1 : 0);
}

main().catch(console.error);
