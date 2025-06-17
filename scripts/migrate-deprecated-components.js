#!/usr/bin/env node

/**
 * Migration Script for Deprecated Components
 * Automatically migrates Layout.tsx and OptimizedImage.tsx usage to StandardPageLayout and EnhancedImage
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');

// Migration mappings
const MIGRATIONS = {
  'Layout': {
    from: 'Layout',
    to: 'StandardPageLayout',
    importFrom: '@/components/Layout',
    importTo: '@/components/StandardPageLayout',
    propsMapping: {
      'pageTitle': 'title',
      'seoData': 'seoData',
      'pageType': 'pageType'
    },
    additionalProps: {
      'showHeader': false, // Legacy Layout didn't show header
      'enableErrorBoundary': true
    }
  },
  'OptimizedImage': {
    from: 'OptimizedImage',
    to: 'EnhancedImage',
    importFrom: '@/components/OptimizedImage',
    importTo: '@/components/EnhancedImage',
    propsMapping: {
      // Props are compatible, no mapping needed
    }
  }
};

/**
 * Get all TypeScript/React files
 */
function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
        getAllFiles(fullPath, files);
      }
    } else if (['.tsx', '.ts'].includes(path.extname(item))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Migrate a single file
 */
function migrateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let hasChanges = false;
  const changes = [];

  // Check each migration
  Object.entries(MIGRATIONS).forEach(([componentName, migration]) => {
    const { from, to, importFrom, importTo, propsMapping, additionalProps } = migration;

    // Check if file imports the deprecated component
    const importRegex = new RegExp(`import\\s+(?:{[^}]*\\b${from}\\b[^}]*}|${from})\\s+from\\s+['"]${importFrom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g');
    
    if (importRegex.test(content)) {
      // Replace import statement
      newContent = newContent.replace(importRegex, (match) => {
        const isNamedImport = match.includes('{');
        if (isNamedImport) {
          return match.replace(from, to).replace(importFrom, importTo);
        } else {
          return `import ${to} from '${importTo}'`;
        }
      });

      // Replace component usage
      const componentRegex = new RegExp(`<${from}\\b`, 'g');
      newContent = newContent.replace(componentRegex, `<${to}`);

      // Replace closing tags
      const closingTagRegex = new RegExp(`</${from}>`, 'g');
      newContent = newContent.replace(closingTagRegex, `</${to}>`);

      // Handle prop mapping for Layout component
      if (componentName === 'Layout') {
        // Replace pageTitle with title
        newContent = newContent.replace(/pageTitle=/g, 'title=');
        
        // Add showHeader={false} if not present
        const layoutUsageRegex = new RegExp(`<${to}([^>]*?)>`, 'g');
        newContent = newContent.replace(layoutUsageRegex, (match, props) => {
          if (!props.includes('showHeader')) {
            const insertPos = props.lastIndexOf('>') !== -1 ? props.length : props.length;
            const newProps = props.slice(0, insertPos) + ' showHeader={false}' + props.slice(insertPos);
            return `<${to}${newProps}>`;
          }
          return match;
        });
      }

      hasChanges = true;
      changes.push(`${from} → ${to}`);
    }
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return changes;
  }

  return null;
}

/**
 * Main migration function
 */
function runMigration() {
  console.log('🔄 Starting component migration...\n');

  const files = getAllFiles(SRC_DIR);
  let totalFiles = 0;
  let migratedFiles = 0;
  const migrationReport = [];

  files.forEach(file => {
    totalFiles++;
    const changes = migrateFile(file);
    
    if (changes) {
      migratedFiles++;
      const relativePath = path.relative(path.join(__dirname, '..'), file);
      migrationReport.push({
        file: relativePath,
        changes: changes
      });
      
      console.log(`✅ ${relativePath}`);
      changes.forEach(change => {
        console.log(`   ${change}`);
      });
    }
  });

  console.log('\n📊 MIGRATION SUMMARY');
  console.log('='.repeat(50));
  console.log(`📁 Total files scanned: ${totalFiles}`);
  console.log(`🔄 Files migrated: ${migratedFiles}`);
  console.log(`📝 Total changes: ${migrationReport.reduce((sum, report) => sum + report.changes.length, 0)}`);

  if (migrationReport.length > 0) {
    console.log('\n📋 DETAILED MIGRATION REPORT:');
    migrationReport.forEach(report => {
      console.log(`\n📄 ${report.file}:`);
      report.changes.forEach(change => {
        console.log(`   • ${change}`);
      });
    });

    // Save migration report
    const reportPath = path.join(__dirname, '../migration-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(migrationReport, null, 2));
    console.log(`\n💾 Detailed report saved to: ${reportPath}`);
  } else {
    console.log('\n✨ No deprecated components found - migration not needed!');
  }

  console.log('\n🎉 Migration completed successfully!');
  
  if (migratedFiles > 0) {
    console.log('\n📝 NEXT STEPS:');
    console.log('1. Review the migrated files to ensure correctness');
    console.log('2. Test the application to verify functionality');
    console.log('3. Run the build to check for any issues');
    console.log('4. Consider removing the deprecated component files');
  }
}

// Run migration
runMigration();
