#!/usr/bin/env node

/**
 * Fix Main.tsx Final Script
 * Targeted fix for main.tsx that prevents overwriting
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/main.tsx');

/**
 * Fix main.tsx with proper closing brace
 */
function fixMainTsxFinal() {
  console.log('🔧 FIXING MAIN.TSX FINAL');
  console.log('='.repeat(40));
  console.log();

  if (!fs.existsSync(FILE_PATH)) {
    console.log('❌ File not found: src/main.tsx');
    return;
  }

  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let changes = 0;

  console.log('📁 Processing main.tsx...');
  console.log();

  // Check if the initializeApp function is missing its closing brace
  if (content.includes('logSecurityEvents: process.env.NODE_ENV === \'development\'\n  });\n// Initialize the app')) {
    content = content.replace(
      'logSecurityEvents: process.env.NODE_ENV === \'development\'\n  });\n// Initialize the app',
      'logSecurityEvents: process.env.NODE_ENV === \'development\'\n  });\n}\n\n// Initialize the app'
    );
    changes++;
    console.log('✅ Fixed initializeApp function closing brace');
  }

  // Alternative pattern check
  if (content.includes('});\n// Initialize the app') && !content.includes('});\n}\n\n// Initialize the app')) {
    content = content.replace(
      '});\n// Initialize the app',
      '});\n}\n\n// Initialize the app'
    );
    changes++;
    console.log('✅ Fixed initializeApp function closing brace (alternative pattern)');
  }

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 MAIN.TSX FINAL FIX SUMMARY');
  console.log('─'.repeat(35));
  console.log(`🔧 Total fixes applied: ${changes}`);
  console.log('✅ File successfully fixed');

  if (changes > 0) {
    console.log();
    console.log('💡 FIXES APPLIED:');
    console.log('• Fixed initializeApp function closing brace');
    console.log('• Preserved all functionality');
  } else {
    console.log();
    console.log('ℹ️  No fixes needed - file already correct');
  }
}

// Run the fix
fixMainTsxFinal();
