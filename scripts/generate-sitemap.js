#!/usr/bin/env node

/**
 * Generate sitemap.xml for the miNEURO website
 * This script creates a comprehensive sitemap including all pages and routes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://mineuro.com.au';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Define all URLs with their properties
const urls = [
  // Main pages
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/appointments', priority: 0.9, changefreq: 'weekly' },
  { loc: '/expertise', priority: 0.9, changefreq: 'monthly' },
  { loc: '/locations', priority: 0.8, changefreq: 'monthly' },
  { loc: '/patient-resources', priority: 0.8, changefreq: 'weekly' },
  { loc: '/medicolegal', priority: 0.7, changefreq: 'monthly' },
  { loc: '/gp-resources', priority: 0.7, changefreq: 'monthly' },
  { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
  { loc: '/faq', priority: 0.6, changefreq: 'monthly' },

  // Expertise pages
  { loc: '/expertise/cervical-disc-replacement', priority: 0.8, changefreq: 'monthly' },
  { loc: '/expertise/lumbar-disc-replacement', priority: 0.8, changefreq: 'monthly' },
  { loc: '/expertise/image-guided-surgery', priority: 0.8, changefreq: 'monthly' },
  { loc: '/expertise/robotic-spine-surgery', priority: 0.8, changefreq: 'monthly' },

  // Location pages
  { loc: '/locations/surrey-hills', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/mornington', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/frankston', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/langwarrin', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/bundoora', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/werribee', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/heidelberg', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/moonee-ponds', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/sunbury', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/dandenong', priority: 0.7, changefreq: 'monthly' },
  { loc: '/locations/wantirna', priority: 0.7, changefreq: 'monthly' },

  // Patient resources
  { loc: '/patient-resources/condition-information', priority: 0.7, changefreq: 'monthly' },
  { loc: '/patient-resources/exercise-library', priority: 0.7, changefreq: 'monthly' },
  { loc: '/patient-resources/spine-conditions-library', priority: 0.7, changefreq: 'monthly' },
  { loc: '/patient-resources/individual-spine-health-programme', priority: 0.7, changefreq: 'monthly' },
  { loc: '/patient-resources/spine-and-brain-health', priority: 0.7, changefreq: 'monthly' },
  { loc: '/patient-resources/cervical-spine-injury', priority: 0.6, changefreq: 'monthly' },
  { loc: '/patient-resources/cervical-spine-exercises', priority: 0.6, changefreq: 'monthly' },
  { loc: '/patient-resources/spine-safe-exercises', priority: 0.6, changefreq: 'monthly' },

  // GP Resources
  { loc: '/gp-resources/referral-protocols', priority: 0.6, changefreq: 'monthly' },
  { loc: '/gp-resources/diagnostics', priority: 0.6, changefreq: 'monthly' },
  { loc: '/gp-resources/care-coordination', priority: 0.6, changefreq: 'monthly' },
  { loc: '/gp-resources/emergencies', priority: 0.6, changefreq: 'monthly' },

  // Legal pages
  { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { loc: '/terms-conditions', priority: 0.3, changefreq: 'yearly' }
];

/**
 * Generate XML sitemap content
 */
function generateSitemapXML() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urlElements = urls.map(url => {
    const fullUrl = `${SITE_URL}${url.loc}`;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemapContent = generateSitemapXML();
    
    // Ensure the public directory exists
    const publicDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the sitemap file
    fs.writeFileSync(OUTPUT_PATH, sitemapContent, 'utf8');
    
    console.log(`✅ Sitemap generated successfully at: ${OUTPUT_PATH}`);
    console.log(`📊 Total URLs: ${urls.length}`);
    console.log(`🌐 Site URL: ${SITE_URL}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemap();
}

export { generateSitemapXML, writeSitemap };
