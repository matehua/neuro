#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * Analyzes build output for performance optimization opportunities
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.join(__dirname, '../dist');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');
const REPORT_FILE = path.join(__dirname, '../bundle-analysis-report.json');

// Size thresholds (in KB)
const THRESHOLDS = {
  js: {
    warning: 500,
    error: 1000
  },
  css: {
    warning: 100,
    error: 200
  },
  image: {
    warning: 500,
    error: 1000
  },
  total: {
    warning: 2000,
    error: 5000
  }
};

/**
 * Get file size in KB
 */
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024 * 100) / 100;
}

/**
 * Analyze JavaScript bundles
 */
function analyzeJavaScript() {
  const jsFiles = fs.readdirSync(ASSETS_DIR)
    .filter(file => file.endsWith('.js'))
    .map(file => {
      const filePath = path.join(ASSETS_DIR, file);
      const size = getFileSizeKB(filePath);
      
      return {
        name: file,
        size,
        type: 'javascript',
        status: size > THRESHOLDS.js.error ? 'error' : 
                size > THRESHOLDS.js.warning ? 'warning' : 'ok'
      };
    })
    .sort((a, b) => b.size - a.size);

  return jsFiles;
}

/**
 * Analyze CSS bundles
 */
function analyzeCSS() {
  const cssFiles = fs.readdirSync(ASSETS_DIR)
    .filter(file => file.endsWith('.css'))
    .map(file => {
      const filePath = path.join(ASSETS_DIR, file);
      const size = getFileSizeKB(filePath);
      
      return {
        name: file,
        size,
        type: 'css',
        status: size > THRESHOLDS.css.error ? 'error' : 
                size > THRESHOLDS.css.warning ? 'warning' : 'ok'
      };
    })
    .sort((a, b) => b.size - a.size);

  return cssFiles;
}

/**
 * Analyze images
 */
function analyzeImages() {
  const imageDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(imageDir)) return [];

  const imageFiles = fs.readdirSync(imageDir)
    .filter(file => /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(file))
    .map(file => {
      const filePath = path.join(imageDir, file);
      const size = getFileSizeKB(filePath);
      
      return {
        name: file,
        size,
        type: 'image',
        status: size > THRESHOLDS.image.error ? 'error' : 
                size > THRESHOLDS.image.warning ? 'warning' : 'ok'
      };
    })
    .sort((a, b) => b.size - a.size);

  return imageFiles;
}

/**
 * Analyze chunk dependencies
 */
function analyzeChunkDependencies() {
  try {
    // Run webpack-bundle-analyzer if available
    const bundleAnalyzerPath = path.join(__dirname, '../node_modules/.bin/webpack-bundle-analyzer');
    if (fs.existsSync(bundleAnalyzerPath)) {
      console.log('📊 Running webpack-bundle-analyzer...');
      execSync(`${bundleAnalyzerPath} ${DIST_DIR} --mode static --report ${path.join(__dirname, '../bundle-report.html')} --no-open`, {
        stdio: 'inherit'
      });
    }
  } catch (error) {
    console.warn('⚠️  webpack-bundle-analyzer not available or failed');
  }
}

/**
 * Generate optimization recommendations
 */
function generateRecommendations(analysis) {
  const recommendations = [];

  // JavaScript recommendations
  const largeJSFiles = analysis.javascript.filter(file => file.status !== 'ok');
  if (largeJSFiles.length > 0) {
    recommendations.push({
      type: 'javascript',
      severity: 'high',
      message: `${largeJSFiles.length} JavaScript files exceed size thresholds`,
      files: largeJSFiles.map(f => f.name),
      suggestions: [
        'Consider code splitting for large components',
        'Use dynamic imports for non-critical features',
        'Remove unused dependencies',
        'Enable tree shaking',
        'Use smaller alternative libraries'
      ]
    });
  }

  // CSS recommendations
  const largeCSSFiles = analysis.css.filter(file => file.status !== 'ok');
  if (largeCSSFiles.length > 0) {
    recommendations.push({
      type: 'css',
      severity: 'medium',
      message: `${largeCSSFiles.length} CSS files exceed size thresholds`,
      files: largeCSSFiles.map(f => f.name),
      suggestions: [
        'Remove unused CSS with PurgeCSS',
        'Split CSS by routes',
        'Use CSS-in-JS for component-specific styles',
        'Optimize Tailwind CSS configuration'
      ]
    });
  }

  // Image recommendations
  const largeImages = analysis.images.filter(file => file.status !== 'ok');
  if (largeImages.length > 0) {
    recommendations.push({
      type: 'images',
      severity: 'high',
      message: `${largeImages.length} images exceed size thresholds`,
      files: largeImages.map(f => f.name),
      suggestions: [
        'Compress images using tools like ImageOptim',
        'Convert to WebP/AVIF format',
        'Use responsive images with srcset',
        'Implement lazy loading',
        'Consider using a CDN'
      ]
    });
  }

  // Total bundle size
  const totalSize = analysis.totalSize;
  if (totalSize > THRESHOLDS.total.error) {
    recommendations.push({
      type: 'bundle',
      severity: 'critical',
      message: `Total bundle size (${totalSize}KB) is too large`,
      suggestions: [
        'Implement aggressive code splitting',
        'Use lazy loading for routes',
        'Remove unused dependencies',
        'Consider micro-frontend architecture',
        'Implement service worker caching'
      ]
    });
  } else if (totalSize > THRESHOLDS.total.warning) {
    recommendations.push({
      type: 'bundle',
      severity: 'medium',
      message: `Total bundle size (${totalSize}KB) could be optimized`,
      suggestions: [
        'Review and optimize large chunks',
        'Implement route-based code splitting',
        'Use dynamic imports for heavy features'
      ]
    });
  }

  return recommendations;
}

/**
 * Generate performance score
 */
function calculatePerformanceScore(analysis) {
  let score = 100;
  
  // Deduct points for large files
  analysis.javascript.forEach(file => {
    if (file.status === 'error') score -= 15;
    else if (file.status === 'warning') score -= 5;
  });
  
  analysis.css.forEach(file => {
    if (file.status === 'error') score -= 10;
    else if (file.status === 'warning') score -= 3;
  });
  
  analysis.images.forEach(file => {
    if (file.status === 'error') score -= 5;
    else if (file.status === 'warning') score -= 2;
  });
  
  // Deduct points for total bundle size
  if (analysis.totalSize > THRESHOLDS.total.error) score -= 20;
  else if (analysis.totalSize > THRESHOLDS.total.warning) score -= 10;
  
  return Math.max(0, score);
}

/**
 * Main analysis function
 */
function analyzeBundles() {
  console.log('🔍 Analyzing bundle sizes...\n');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Build directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Perform analysis
  const javascript = analyzeJavaScript();
  const css = analyzeCSS();
  const images = analyzeImages();
  
  const totalSize = [...javascript, ...css].reduce((sum, file) => sum + file.size, 0);
  
  const analysis = {
    timestamp: new Date().toISOString(),
    javascript,
    css,
    images,
    totalSize,
    performanceScore: 0,
    recommendations: []
  };

  // Calculate performance score
  analysis.performanceScore = calculatePerformanceScore(analysis);
  
  // Generate recommendations
  analysis.recommendations = generateRecommendations(analysis);

  // Save report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(analysis, null, 2));

  // Display results
  console.log('📊 BUNDLE ANALYSIS REPORT');
  console.log('='.repeat(50));
  console.log(`📈 Performance Score: ${analysis.performanceScore}/100`);
  console.log(`📦 Total Bundle Size: ${totalSize}KB`);
  console.log(`📄 JavaScript Files: ${javascript.length} (${javascript.reduce((sum, f) => sum + f.size, 0)}KB)`);
  console.log(`🎨 CSS Files: ${css.length} (${css.reduce((sum, f) => sum + f.size, 0)}KB)`);
  console.log(`🖼️  Images Analyzed: ${images.length} (${images.reduce((sum, f) => sum + f.size, 0)}KB)`);
  
  // Show largest files
  console.log('\n📋 LARGEST FILES:');
  const allFiles = [...javascript, ...css, ...images].sort((a, b) => b.size - a.size);
  allFiles.slice(0, 10).forEach((file, index) => {
    const status = file.status === 'error' ? '🔴' : file.status === 'warning' ? '🟡' : '🟢';
    console.log(`${index + 1}. ${status} ${file.name} (${file.size}KB)`);
  });

  // Show recommendations
  if (analysis.recommendations.length > 0) {
    console.log('\n💡 OPTIMIZATION RECOMMENDATIONS:');
    analysis.recommendations.forEach((rec, index) => {
      const severity = rec.severity === 'critical' ? '🔴' : 
                      rec.severity === 'high' ? '🟠' : 
                      rec.severity === 'medium' ? '🟡' : '🟢';
      console.log(`\n${index + 1}. ${severity} ${rec.message}`);
      if (rec.files) {
        console.log(`   Files: ${rec.files.join(', ')}`);
      }
      console.log('   Suggestions:');
      rec.suggestions.forEach(suggestion => {
        console.log(`   • ${suggestion}`);
      });
    });
  } else {
    console.log('\n✅ No optimization recommendations. Bundle is well optimized!');
  }

  console.log(`\n📄 Detailed report saved to: ${REPORT_FILE}`);
  
  // Run additional analysis
  analyzeChunkDependencies();
  
  // Exit with appropriate code
  const hasErrors = analysis.recommendations.some(rec => rec.severity === 'critical');
  process.exit(hasErrors ? 1 : 0);
}

// Run analysis
analyzeBundles();

export { analyzeBundles };
