#!/usr/bin/env node

/**
 * Duplicate Code Detection Script
 * Identifies duplicate code patterns and suggests refactoring opportunities
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SRC_DIR = path.join(__dirname, '../src');
const REPORT_FILE = path.join(__dirname, '../duplicate-code-report.json');

// Patterns to detect
const DUPLICATE_PATTERNS = {
  // Function signatures
  FUNCTION_SIGNATURE: /(?:function\s+\w+|const\s+\w+\s*=\s*(?:\([^)]*\)\s*=>|\([^)]*\)\s*:\s*[^=]*=>))/g,
  
  // Import statements
  IMPORT_STATEMENT: /import\s+(?:{[^}]+}|\w+|\*\s+as\s+\w+)\s+from\s+['"][^'"]+['"]/g,
  
  // Component patterns
  COMPONENT_PATTERN: /(?:export\s+)?(?:default\s+)?(?:function|const)\s+\w+.*?(?:React\.FC|FunctionComponent)/g,
  
  // Hook patterns
  HOOK_PATTERN: /const\s+(?:\[[\w\s,]+\]|\w+)\s*=\s*use\w+\(/g,
  
  // Style patterns
  STYLE_PATTERN: /className\s*=\s*(?:{[^}]+}|"[^"]+"|'[^']+')/g,
  
  // API call patterns
  API_PATTERN: /(?:fetch|axios|api)\s*\([^)]+\)/g,
};

// File extensions to analyze
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

/**
 * Get all files to analyze
 */
function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
        getAllFiles(fullPath, files);
      }
    } else if (EXTENSIONS.includes(path.extname(item))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Extract code blocks from file
 */
function extractCodeBlocks(content, filePath) {
  const blocks = [];
  
  // Extract functions
  const functions = content.match(/(?:function\s+\w+|const\s+\w+\s*=\s*(?:\([^)]*\)\s*=>|\([^)]*\)\s*:\s*[^=]*=>))[\s\S]*?(?=\n(?:function|const|export|$))/g) || [];
  functions.forEach((func, index) => {
    if (func.length > 100) { // Only consider substantial functions
      blocks.push({
        type: 'function',
        content: func.trim(),
        hash: crypto.createHash('md5').update(func.trim()).digest('hex'),
        file: filePath,
        line: getLineNumber(content, func),
        size: func.length
      });
    }
  });
  
  // Extract components
  const components = content.match(/(?:export\s+)?(?:default\s+)?(?:function|const)\s+\w+.*?(?:React\.FC|FunctionComponent)[\s\S]*?(?=\n(?:export|function|const|$))/g) || [];
  components.forEach((comp, index) => {
    if (comp.length > 200) { // Only consider substantial components
      blocks.push({
        type: 'component',
        content: comp.trim(),
        hash: crypto.createHash('md5').update(comp.trim()).digest('hex'),
        file: filePath,
        line: getLineNumber(content, comp),
        size: comp.length
      });
    }
  });
  
  // Extract similar patterns
  const patterns = content.match(/(?:if|for|while|switch)\s*\([^)]+\)\s*{[\s\S]*?}/g) || [];
  patterns.forEach((pattern, index) => {
    if (pattern.length > 50) {
      const normalizedPattern = normalizePattern(pattern);
      blocks.push({
        type: 'pattern',
        content: pattern.trim(),
        normalized: normalizedPattern,
        hash: crypto.createHash('md5').update(normalizedPattern).digest('hex'),
        file: filePath,
        line: getLineNumber(content, pattern),
        size: pattern.length
      });
    }
  });
  
  return blocks;
}

/**
 * Normalize pattern for better duplicate detection
 */
function normalizePattern(pattern) {
  return pattern
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\b\w+(?=\s*[=:])/g, 'VAR') // Replace variable names
    .replace(/['"][^'"]*['"]/g, 'STRING') // Replace string literals
    .replace(/\b\d+\b/g, 'NUMBER') // Replace numbers
    .trim();
}

/**
 * Get line number of pattern in content
 */
function getLineNumber(content, pattern) {
  const index = content.indexOf(pattern);
  if (index === -1) return 1;
  return content.substring(0, index).split('\n').length;
}

/**
 * Find duplicates in code blocks
 */
function findDuplicates(blocks) {
  const duplicates = new Map();
  const hashGroups = new Map();
  
  // Group blocks by hash
  blocks.forEach(block => {
    const key = block.type === 'pattern' ? block.hash : block.hash;
    if (!hashGroups.has(key)) {
      hashGroups.set(key, []);
    }
    hashGroups.get(key).push(block);
  });
  
  // Find groups with multiple blocks
  hashGroups.forEach((group, hash) => {
    if (group.length > 1) {
      duplicates.set(hash, {
        type: group[0].type,
        count: group.length,
        blocks: group,
        totalSize: group.reduce((sum, block) => sum + block.size, 0),
        files: [...new Set(group.map(block => path.relative(SRC_DIR, block.file)))]
      });
    }
  });
  
  return duplicates;
}

/**
 * Analyze similar patterns (not exact duplicates)
 */
function findSimilarPatterns(blocks) {
  const similar = [];
  const patterns = blocks.filter(block => block.type === 'pattern');
  
  for (let i = 0; i < patterns.length; i++) {
    for (let j = i + 1; j < patterns.length; j++) {
      const similarity = calculateSimilarity(patterns[i].normalized, patterns[j].normalized);
      if (similarity > 0.8 && patterns[i].file !== patterns[j].file) {
        similar.push({
          similarity,
          blocks: [patterns[i], patterns[j]],
          files: [
            path.relative(SRC_DIR, patterns[i].file),
            path.relative(SRC_DIR, patterns[j].file)
          ]
        });
      }
    }
  }
  
  return similar.sort((a, b) => b.similarity - a.similarity);
}

/**
 * Calculate similarity between two strings
 */
function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

/**
 * Calculate Levenshtein distance
 */
function levenshteinDistance(str1, str2) {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

/**
 * Generate refactoring suggestions
 */
function generateSuggestions(duplicates, similar) {
  const suggestions = [];
  
  // Suggestions for exact duplicates
  duplicates.forEach((duplicate, hash) => {
    if (duplicate.type === 'function' && duplicate.count > 2) {
      suggestions.push({
        type: 'extract-utility',
        severity: 'high',
        message: `${duplicate.count} identical functions found`,
        files: duplicate.files,
        suggestion: 'Extract to a shared utility function',
        impact: `Could reduce code by ~${duplicate.totalSize} characters`
      });
    } else if (duplicate.type === 'component' && duplicate.count > 1) {
      suggestions.push({
        type: 'extract-component',
        severity: 'medium',
        message: `${duplicate.count} similar components found`,
        files: duplicate.files,
        suggestion: 'Consider creating a reusable component with props',
        impact: `Could reduce code by ~${duplicate.totalSize} characters`
      });
    } else if (duplicate.type === 'pattern' && duplicate.count > 3) {
      suggestions.push({
        type: 'extract-pattern',
        severity: 'low',
        message: `${duplicate.count} similar code patterns found`,
        files: duplicate.files,
        suggestion: 'Consider extracting to a helper function or hook',
        impact: `Could improve maintainability`
      });
    }
  });
  
  // Suggestions for similar patterns
  similar.slice(0, 5).forEach((sim, index) => {
    if (sim.similarity > 0.9) {
      suggestions.push({
        type: 'similar-pattern',
        severity: 'medium',
        message: `Highly similar patterns found (${Math.round(sim.similarity * 100)}% similar)`,
        files: sim.files,
        suggestion: 'Consider refactoring to use the same implementation',
        impact: 'Could improve consistency and maintainability'
      });
    }
  });
  
  return suggestions;
}

/**
 * Main analysis function
 */
function detectDuplicates() {
  console.log('🔍 Detecting duplicate code patterns...\n');
  
  const files = getAllFiles(SRC_DIR);
  const allBlocks = [];
  
  // Extract code blocks from all files
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const blocks = extractCodeBlocks(content, file);
      allBlocks.push(...blocks);
    } catch (error) {
      console.warn(`⚠️  Could not analyze ${file}: ${error.message}`);
    }
  });
  
  // Find duplicates and similar patterns
  const duplicates = findDuplicates(allBlocks);
  const similar = findSimilarPatterns(allBlocks);
  const suggestions = generateSuggestions(duplicates, similar);
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    filesAnalyzed: files.length,
    blocksAnalyzed: allBlocks.length,
    duplicatesFound: duplicates.size,
    similarPatternsFound: similar.length,
    duplicates: Array.from(duplicates.entries()).map(([hash, data]) => ({
      hash,
      ...data
    })),
    similarPatterns: similar,
    suggestions,
    summary: {
      totalDuplicateSize: Array.from(duplicates.values()).reduce((sum, dup) => sum + dup.totalSize, 0),
      potentialSavings: suggestions.reduce((sum, sug) => {
        const match = sug.impact.match(/(\d+)/);
        return sum + (match ? parseInt(match[1]) : 0);
      }, 0)
    }
  };
  
  // Save report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  
  // Display results
  console.log('📊 DUPLICATE CODE ANALYSIS REPORT');
  console.log('='.repeat(50));
  console.log(`📁 Files Analyzed: ${report.filesAnalyzed}`);
  console.log(`🧩 Code Blocks Analyzed: ${report.blocksAnalyzed}`);
  console.log(`🔄 Exact Duplicates Found: ${report.duplicatesFound}`);
  console.log(`🔍 Similar Patterns Found: ${report.similarPatternsFound}`);
  console.log(`💾 Total Duplicate Size: ${report.summary.totalDuplicateSize} characters`);
  
  if (report.duplicatesFound > 0) {
    console.log('\n🔄 TOP DUPLICATES:');
    Array.from(duplicates.entries())
      .sort(([,a], [,b]) => b.totalSize - a.totalSize)
      .slice(0, 5)
      .forEach(([hash, duplicate], index) => {
        console.log(`${index + 1}. ${duplicate.type} (${duplicate.count} copies, ${duplicate.totalSize} chars)`);
        console.log(`   Files: ${duplicate.files.join(', ')}`);
      });
  }
  
  if (suggestions.length > 0) {
    console.log('\n💡 REFACTORING SUGGESTIONS:');
    suggestions.forEach((suggestion, index) => {
      const severity = suggestion.severity === 'high' ? '🔴' : 
                      suggestion.severity === 'medium' ? '🟡' : '🟢';
      console.log(`\n${index + 1}. ${severity} ${suggestion.message}`);
      console.log(`   Files: ${suggestion.files.join(', ')}`);
      console.log(`   Suggestion: ${suggestion.suggestion}`);
      console.log(`   Impact: ${suggestion.impact}`);
    });
  } else {
    console.log('\n✅ No significant duplicate code patterns found!');
  }
  
  console.log(`\n📄 Detailed report saved to: ${REPORT_FILE}`);
  
  // Exit with appropriate code
  const hasHighPriorityDuplicates = suggestions.some(s => s.severity === 'high');
  process.exit(hasHighPriorityDuplicates ? 1 : 0);
}

// Run analysis
detectDuplicates();

export { detectDuplicates };
