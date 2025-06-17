#!/usr/bin/env node

/**
 * Large File Splitting Script
 * Identifies and helps split large files into smaller, more maintainable modules
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const MAX_LINES = 150; // Target maximum lines per file

// Files to analyze
const FILES_TO_ANALYZE = [
  'src/components/StandardPageLayout.tsx',
  'src/components/SEOHead.tsx',
  'docs/DEPLOYMENT-CHECKLIST.md',
  'docs/PRODUCTION-CONFIG-GUIDE.md',
  'scripts/verify-production-env.js',
];

/**
 * Analyze a file and suggest splitting strategies
 */
function analyzeFile(filePath) {
  const fullPath = path.join(PROJECT_ROOT, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return null;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  const lineCount = lines.length;

  if (lineCount <= MAX_LINES) {
    console.log(`✅ ${filePath} (${lineCount} lines) - Within acceptable size`);
    return null;
  }

  console.log(`🔍 ${filePath} (${lineCount} lines) - Needs splitting`);

  // Analyze content structure
  const analysis = {
    filePath,
    lineCount,
    suggestions: [],
    sections: []
  };

  // For TypeScript/React files
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    analyzeTypeScriptFile(content, analysis);
  }
  
  // For Markdown files
  if (filePath.endsWith('.md')) {
    analyzeMarkdownFile(content, analysis);
  }

  // For JavaScript files
  if (filePath.endsWith('.js')) {
    analyzeJavaScriptFile(content, analysis);
  }

  return analysis;
}

/**
 * Analyze TypeScript/React files
 */
function analyzeTypeScriptFile(content, analysis) {
  const lines = content.split('\n');
  let currentSection = null;
  let sectionStart = 0;

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Detect interfaces/types
    if (trimmed.startsWith('interface ') || trimmed.startsWith('type ')) {
      if (currentSection) {
        analysis.sections.push({
          type: currentSection.type,
          name: currentSection.name,
          start: sectionStart,
          end: index - 1,
          lines: index - sectionStart
        });
      }
      currentSection = { type: 'interface', name: trimmed.split(' ')[1] };
      sectionStart = index;
    }
    
    // Detect components
    else if (trimmed.includes('export default function') || trimmed.includes('export function')) {
      if (currentSection) {
        analysis.sections.push({
          type: currentSection.type,
          name: currentSection.name,
          start: sectionStart,
          end: index - 1,
          lines: index - sectionStart
        });
      }
      const match = trimmed.match(/function\s+(\w+)/);
      currentSection = { type: 'component', name: match ? match[1] : 'Unknown' };
      sectionStart = index;
    }
    
    // Detect utility functions
    else if (trimmed.startsWith('export const') || trimmed.startsWith('export function')) {
      if (currentSection) {
        analysis.sections.push({
          type: currentSection.type,
          name: currentSection.name,
          start: sectionStart,
          end: index - 1,
          lines: index - sectionStart
        });
      }
      const match = trimmed.match(/(?:const|function)\s+(\w+)/);
      currentSection = { type: 'utility', name: match ? match[1] : 'Unknown' };
      sectionStart = index;
    }
  });

  // Add final section
  if (currentSection) {
    analysis.sections.push({
      type: currentSection.type,
      name: currentSection.name,
      start: sectionStart,
      end: lines.length - 1,
      lines: lines.length - sectionStart
    });
  }

  // Generate suggestions
  const largeSections = analysis.sections.filter(section => section.lines > 50);
  if (largeSections.length > 0) {
    analysis.suggestions.push('Split large sections into separate files:');
    largeSections.forEach(section => {
      analysis.suggestions.push(`  - ${section.type}: ${section.name} (${section.lines} lines)`);
    });
  }

  const interfaces = analysis.sections.filter(section => section.type === 'interface');
  if (interfaces.length > 3) {
    analysis.suggestions.push('Move interfaces to separate types file');
  }

  const utilities = analysis.sections.filter(section => section.type === 'utility');
  if (utilities.length > 5) {
    analysis.suggestions.push('Move utility functions to separate utils file');
  }
}

/**
 * Analyze Markdown files
 */
function analyzeMarkdownFile(content, analysis) {
  const lines = content.split('\n');
  let currentSection = null;
  let sectionStart = 0;

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Detect headers
    if (trimmed.startsWith('#')) {
      if (currentSection) {
        analysis.sections.push({
          type: 'section',
          name: currentSection.name,
          start: sectionStart,
          end: index - 1,
          lines: index - sectionStart
        });
      }
      currentSection = { type: 'section', name: trimmed.replace(/^#+\s*/, '') };
      sectionStart = index;
    }
  });

  // Add final section
  if (currentSection) {
    analysis.sections.push({
      type: 'section',
      name: currentSection.name,
      start: sectionStart,
      end: lines.length - 1,
      lines: lines.length - sectionStart
    });
  }

  // Generate suggestions
  const largeSections = analysis.sections.filter(section => section.lines > 30);
  if (largeSections.length > 0) {
    analysis.suggestions.push('Split into multiple markdown files:');
    largeSections.forEach(section => {
      analysis.suggestions.push(`  - ${section.name} (${section.lines} lines)`);
    });
  }
}

/**
 * Analyze JavaScript files
 */
function analyzeJavaScriptFile(content, analysis) {
  const lines = content.split('\n');
  let currentSection = null;
  let sectionStart = 0;

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Detect functions
    if (trimmed.startsWith('function ') || trimmed.includes('= function') || trimmed.includes('=> {')) {
      if (currentSection) {
        analysis.sections.push({
          type: currentSection.type,
          name: currentSection.name,
          start: sectionStart,
          end: index - 1,
          lines: index - sectionStart
        });
      }
      const match = trimmed.match(/function\s+(\w+)/) || trimmed.match(/(\w+)\s*=/) || trimmed.match(/const\s+(\w+)/);
      currentSection = { type: 'function', name: match ? match[1] : 'Unknown' };
      sectionStart = index;
    }
  });

  // Add final section
  if (currentSection) {
    analysis.sections.push({
      type: currentSection.type,
      name: currentSection.name,
      start: sectionStart,
      end: lines.length - 1,
      lines: lines.length - sectionStart
    });
  }

  // Generate suggestions
  const largeFunctions = analysis.sections.filter(section => section.lines > 30);
  if (largeFunctions.length > 0) {
    analysis.suggestions.push('Split large functions into smaller modules:');
    largeFunctions.forEach(section => {
      analysis.suggestions.push(`  - ${section.name} (${section.lines} lines)`);
    });
  }
}

/**
 * Main analysis function
 */
function runAnalysis() {
  console.log('📊 LARGE FILE ANALYSIS REPORT');
  console.log('='.repeat(50));
  console.log(`Target maximum: ${MAX_LINES} lines per file\n`);

  const analyses = [];

  FILES_TO_ANALYZE.forEach(filePath => {
    const analysis = analyzeFile(filePath);
    if (analysis) {
      analyses.push(analysis);
    }
  });

  if (analyses.length === 0) {
    console.log('\n🎉 All analyzed files are within acceptable size limits!');
    return;
  }

  console.log('\n📋 DETAILED ANALYSIS:');
  console.log('='.repeat(50));

  analyses.forEach(analysis => {
    console.log(`\n📄 ${analysis.filePath} (${analysis.lineCount} lines)`);
    console.log('─'.repeat(30));
    
    if (analysis.sections.length > 0) {
      console.log('Sections found:');
      analysis.sections.forEach(section => {
        console.log(`  • ${section.type}: ${section.name} (${section.lines} lines)`);
      });
    }

    if (analysis.suggestions.length > 0) {
      console.log('\nSuggestions:');
      analysis.suggestions.forEach(suggestion => {
        console.log(`  ${suggestion}`);
      });
    }
  });

  console.log('\n💡 GENERAL RECOMMENDATIONS:');
  console.log('='.repeat(50));
  console.log('1. Split large components into smaller, focused components');
  console.log('2. Extract utility functions into separate modules');
  console.log('3. Move type definitions to dedicated types files');
  console.log('4. Break down large documentation into topic-specific files');
  console.log('5. Use barrel exports (index.ts) to maintain clean imports');

  // Save detailed report
  const reportPath = path.join(PROJECT_ROOT, 'file-size-analysis.json');
  fs.writeFileSync(reportPath, JSON.stringify(analyses, null, 2));
  console.log(`\n💾 Detailed analysis saved to: file-size-analysis.json`);
}

// Run analysis
runAnalysis();
