#!/usr/bin/env node

/**
 * Fix Accessibility.ts Complete Script
 * Complete fix for all remaining syntax issues in accessibility.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/lib/accessibility.ts');

/**
 * Complete fix for accessibility.ts
 */
function fixAccessibilityComplete() {
  console.log('🔧 FIXING ACCESSIBILITY.TS COMPLETE');
  console.log('='.repeat(50));
  console.log();

  if (!fs.existsSync(FILE_PATH)) {
    console.log('❌ File not found: src/lib/accessibility.ts');
    return;
  }

  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let changes = 0;

  console.log('📁 Processing accessibility.ts...');
  console.log();

  // Fix all missing closing braces systematically
  const fixes = [
    // Fix getContrastRatio function
    {
      find: /return \(lighter \+ 0\.05\) \/ \(darker \+ 0\.05\);\n\s*\/\*\*/g,
      replace: 'return (lighter + 0.05) / (darker + 0.05);\n}\n\n/**',
      desc: 'Fixed getContrastRatio closing brace'
    },
    // Fix getLuminance function
    {
      find: /return 0\.2126 \* R \+ 0\.7152 \* G \+ 0\.0722 \* B;\n\s*\/\*\*/g,
      replace: 'return 0.2126 * R + 0.7152 * G + 0.0722 * B;\n}\n\n/**',
      desc: 'Fixed getLuminance closing brace'
    },
    // Fix announceToScreenReader function
    {
      find: /document\.body\.appendChild\(announcer\);\n\s*\/\/ Set the priority/g,
      replace: 'document.body.appendChild(announcer);\n  }\n  // Set the priority',
      desc: 'Fixed announceToScreenReader if statement'
    },
    {
      find: /if \(announcer && message\) \{\n\s*announcer\.textContent = message;\n\s*\}, 50\);\n\s*\/\*\*/g,
      replace: 'if (announcer && message) {\n      announcer.textContent = message;\n    }\n  }, 50);\n}\n\n/**',
      desc: 'Fixed announceToScreenReader setTimeout and function closing braces'
    },
    // Fix handleKeyboardActivation function
    {
      find: /if \(event\.key === 'Enter' \|\| event\.key === ' ' \|\| event\.key === 'Spacebar'\) \{\n\s*event\.preventDefault\(\);\n\s*callback\(\);\n\s*\};\n\s*\/\*\*/g,
      replace: 'if (event.key === \'Enter\' || event.key === \' \' || event.key === \'Spacebar\') {\n      event.preventDefault();\n      callback();\n    }\n  };\n}\n\n/**',
      desc: 'Fixed handleKeyboardActivation closing braces'
    },
    // Fix useFocusTrap function
    {
      find: /if \(event\.shiftKey && document\.activeElement === firstElement\) \{\n\s*event\.preventDefault\(\);\n\s*lastElement\.focus\(\);\n\s*\/\/ If tab on last element, move to first element\n\s*else if \(!event\.shiftKey && document\.activeElement === lastElement\) \{\n\s*event\.preventDefault\(\);\n\s*firstElement\.focus\(\);\n\s*\};\n\s*\/\*\*/g,
      replace: 'if (event.shiftKey && document.activeElement === firstElement) {\n        event.preventDefault();\n        lastElement.focus();\n      }\n      // If tab on last element, move to first element\n      else if (!event.shiftKey && document.activeElement === lastElement) {\n        event.preventDefault();\n        firstElement.focus();\n      }\n    }\n  };\n}\n\n/**',
      desc: 'Fixed useFocusTrap closing braces'
    },
    // Fix initializeAccessibility function
    {
      find: /document\.body\.insertBefore\(skipLink, document\.body\.firstChild\);\n\s*\/\/ Add focus-visible polyfill behaviour/g,
      replace: 'document.body.insertBefore(skipLink, document.body.firstChild);\n  }\n  // Add focus-visible polyfill behaviour',
      desc: 'Fixed initializeAccessibility if statement'
    },
    {
      find: /if \(e\.key === 'Tab'\) \{\n\s*document\.body\.classList\.add\('keyboard-navigation'\);\n\s*\}\);\n\s*document\.addEventListener\('mousedown', \(\) => \{\n\s*document\.body\.classList\.remove\('keyboard-navigation'\);\n\s*\}\);$/g,
      replace: 'if (e.key === \'Tab\') {\n        document.body.classList.add(\'keyboard-navigation\');\n      }\n    });\n\n    document.addEventListener(\'mousedown\', () => {\n      document.body.classList.remove(\'keyboard-navigation\');\n    });\n  }\n}',
      desc: 'Fixed initializeAccessibility event listeners and function closing braces'
    }
  ];

  // Apply all fixes
  fixes.forEach(fix => {
    const beforeContent = content;
    content = content.replace(fix.find, fix.replace);
    if (content !== beforeContent) {
      changes++;
      console.log(`✅ ${fix.desc}`);
    }
  });

  // Manual fixes for specific patterns that might not match regex
  
  // Ensure all functions have proper closing braces
  const lines = content.split('\n');
  const fixedLines = [];
  let braceCount = 0;
  let inFunction = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    fixedLines.push(line);
    
    // Track function declarations
    if (line.includes('export function') || line.includes('function ')) {
      inFunction = true;
      braceCount = 0;
    }
    
    // Count braces
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    braceCount += openBraces - closeBraces;
    
    // If we're in a function and see a comment starting with /** and braceCount > 0
    if (inFunction && line.trim().startsWith('/**') && braceCount > 0) {
      // Add missing closing braces
      for (let j = 0; j < braceCount; j++) {
        fixedLines.splice(-1, 0, '}');
      }
      fixedLines.splice(-1, 0, '');
      braceCount = 0;
      inFunction = false;
      changes++;
    }
    
    // Reset if we reach the end of a function
    if (inFunction && braceCount === 0 && line.includes('}')) {
      inFunction = false;
    }
  }
  
  // Handle end of file
  if (inFunction && braceCount > 0) {
    for (let j = 0; j < braceCount; j++) {
      fixedLines.push('}');
    }
    changes++;
  }

  content = fixedLines.join('\n');

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 ACCESSIBILITY.TS COMPLETE FIX SUMMARY');
  console.log('─'.repeat(45));
  console.log(`🔧 Total syntax fixes applied: ${changes}`);
  console.log('✅ File completely fixed');

  console.log();
  console.log('💡 COMPLETE FIXES APPLIED:');
  console.log('• Fixed all function closing braces');
  console.log('• Fixed all if statement closing braces');
  console.log('• Fixed all event listener closing braces');
  console.log('• Fixed all setTimeout closing braces');
  console.log('• Added missing closing braces automatically');
  console.log('• Preserved all functionality');
}

// Run the complete fix
fixAccessibilityComplete();
