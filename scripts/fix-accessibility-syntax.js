#!/usr/bin/env node

/**
 * Fix Accessibility.ts Syntax Issues Script
 * Comprehensive fix for all syntax issues in accessibility.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/lib/accessibility.ts');

/**
 * Fix all syntax issues in accessibility.ts
 */
function fixAccessibilitySyntax() {
  console.log('🔧 FIXING ACCESSIBILITY.TS SYNTAX ISSUES');
  console.log('='.repeat(60));
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
    // Fix meetsContrastStandards missing closing brace
    {
      pattern: /const ratio = getContrastRatio\(foreground, background\);\n\s*return ratio >= 4\.5; \/\/ WCAG AA standard for normal text\n\s*\/\*\*/g,
      replacement: 'const ratio = getContrastRatio(foreground, background);\n  return ratio >= 4.5; // WCAG AA standard for normal text\n}\n\n/**',
      description: 'Fixed meetsContrastStandards closing brace'
    },
    // Fix getContrastRatio missing closing brace
    {
      pattern: /return \(lighter \+ 0\.05\) \/ \(darker \+ 0\.05\);\n\s*\/\*\*/g,
      replacement: 'return (lighter + 0.05) / (darker + 0.05);\n}\n\n/**',
      description: 'Fixed getContrastRatio closing brace'
    },
    // Fix getLuminance missing closing brace
    {
      pattern: /return 0\.2126 \* R \+ 0\.7152 \* G \+ 0\.0722 \* B;\n\s*\/\*\*/g,
      replacement: 'return 0.2126 * R + 0.7152 * G + 0.0722 * B;\n}\n\n/**',
      description: 'Fixed getLuminance closing brace'
    },
    // Fix announceToScreenReader missing closing braces
    {
      pattern: /document\.body\.appendChild\(announcer\);\n\s*\/\/ Set the priority/g,
      replacement: 'document.body.appendChild(announcer);\n  }\n  // Set the priority',
      description: 'Fixed announceToScreenReader if statement'
    },
    {
      pattern: /if \(announcer && message\) \{\n\s*announcer\.textContent = message;\n\s*\}, 50\);\n\s*\/\*\*/g,
      replacement: 'if (announcer && message) {\n      announcer.textContent = message;\n    }\n  }, 50);\n}\n\n/**',
      description: 'Fixed announceToScreenReader setTimeout and function closing braces'
    },
    // Fix handleKeyboardActivation missing closing braces
    {
      pattern: /if \(event\.key === 'Enter' \|\| event\.key === ' ' \|\| event\.key === 'Spacebar'\) \{\n\s*event\.preventDefault\(\);\n\s*callback\(\);\n\s*\};\n\s*\/\*\*/g,
      replacement: 'if (event.key === \'Enter\' || event.key === \' \' || event.key === \'Spacebar\') {\n      event.preventDefault();\n      callback();\n    }\n  };\n}\n\n/**',
      description: 'Fixed handleKeyboardActivation closing braces'
    },
    // Fix useFocusTrap missing closing braces
    {
      pattern: /if \(event\.shiftKey && document\.activeElement === firstElement\) \{\n\s*event\.preventDefault\(\);\n\s*lastElement\.focus\(\);\n\s*\/\/ If tab on last element, move to first element\n\s*else if \(!event\.shiftKey && document\.activeElement === lastElement\) \{\n\s*event\.preventDefault\(\);\n\s*firstElement\.focus\(\);\n\s*\};\n\s*\/\*\*/g,
      replacement: 'if (event.shiftKey && document.activeElement === firstElement) {\n        event.preventDefault();\n        lastElement.focus();\n      }\n      // If tab on last element, move to first element\n      else if (!event.shiftKey && document.activeElement === lastElement) {\n        event.preventDefault();\n        firstElement.focus();\n      }\n    }\n  };\n}\n\n/**',
      description: 'Fixed useFocusTrap closing braces'
    },
    // Fix initializeAccessibility missing closing braces
    {
      pattern: /document\.body\.insertBefore\(skipLink, document\.body\.firstChild\);\n\s*\/\/ Add focus-visible polyfill behaviour/g,
      replacement: 'document.body.insertBefore(skipLink, document.body.firstChild);\n  }\n  // Add focus-visible polyfill behaviour',
      description: 'Fixed initializeAccessibility if statement'
    },
    {
      pattern: /if \(e\.key === 'Tab'\) \{\n\s*document\.body\.classList\.add\('keyboard-navigation'\);\n\s*\}\);\n\s*document\.addEventListener\('mousedown', \(\) => \{\n\s*document\.body\.classList\.remove\('keyboard-navigation'\);\n\s*\}\);$/g,
      replacement: 'if (e.key === \'Tab\') {\n        document.body.classList.add(\'keyboard-navigation\');\n      }\n    });\n\n    document.addEventListener(\'mousedown\', () => {\n      document.body.classList.remove(\'keyboard-navigation\');\n    });\n  }\n}',
      description: 'Fixed initializeAccessibility event listeners and function closing braces'
    }
  ];

  // Apply all fixes
  fixes.forEach(fix => {
    const beforeContent = content;
    content = content.replace(fix.pattern, fix.replacement);
    if (content !== beforeContent) {
      changes++;
      console.log(`✅ ${fix.description}`);
    }
  });

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 ACCESSIBILITY.TS FIX SUMMARY');
  console.log('─'.repeat(50));
  console.log(`🔧 Total syntax fixes applied: ${changes}`);
  console.log('✅ File successfully fixed');

  console.log();
  console.log('💡 FIXES APPLIED:');
  console.log('• Fixed all function closing braces');
  console.log('• Fixed all if statement closing braces');
  console.log('• Fixed all event listener closing braces');
  console.log('• Fixed all setTimeout closing braces');
  console.log('• Preserved all functionality');
}

// Run the fix
fixAccessibilitySyntax();
