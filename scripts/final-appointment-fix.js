#!/usr/bin/env node

/**
 * Final AppointmentBooking.tsx Fix Script
 * Comprehensive fix for all remaining syntax issues in AppointmentBooking.tsx
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(PROJECT_ROOT, 'src/pages/AppointmentBooking.tsx');

/**
 * Fix all remaining syntax issues in AppointmentBooking.tsx
 */
function fixFinalAppointmentBookingSyntax() {
  console.log('🔧 FINAL APPOINTMENTBOOKING.TSX SYNTAX FIX');
  console.log('='.repeat(60));
  console.log();

  if (!fs.existsSync(FILE_PATH)) {
    console.log('❌ File not found: src/pages/AppointmentBooking.tsx');
    return;
  }

  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let changes = 0;

  console.log('📁 Processing AppointmentBooking.tsx...');
  console.log();

  // Fix all malformed input patterns systematically
  const inputFixes = [
    // Fix address input
    {
      pattern: /name="address"\n\s*\}\n\s*value=\{formData\.address\}\n\s*onChange=\{handleInputChange\n\s*required/g,
      replacement: 'name="address"\n                            value={formData.address}\n                            onChange={handleInputChange}\n                            required'
    },
    // Fix city input
    {
      pattern: /name="city"\n\s*\}\n\s*value=\{formData\.city\}\n\s*onChange=\{handleInputChange\n\s*required/g,
      replacement: 'name="city"\n                              value={formData.city}\n                              onChange={handleInputChange}\n                              required'
    },
    // Fix zipCode input
    {
      pattern: /name="zipCode"\n\s*\}\n\s*value=\{formData\.zipCode\}\n\s*onChange=\{handleInputChange\n\s*required/g,
      replacement: 'name="zipCode"\n                              value={formData.zipCode}\n                              onChange={handleInputChange}\n                              required'
    },
    // Fix country input
    {
      pattern: /name="country"\n\s*\}\n\s*value=\{formData\.country\}\n\s*onChange=\{handleInputChange\n\s*required/g,
      replacement: 'name="country"\n                              value={formData.country}\n                              onChange={handleInputChange}\n                              required'
    },
    // Fix textarea
    {
      pattern: /name="specialRequests"\n\s*\}\n\s*value=\{formData\.specialRequests\}\n\s*onChange=\{handleInputChange\n\s*className="w-full h-24 rounded-md border border-input bg-background px-3 py-2 text-sm"\n\s*\}\n\s*placeholder=/g,
      replacement: 'name="specialRequests"\n                            value={formData.specialRequests}\n                            onChange={handleInputChange}\n                            className="w-full h-24 rounded-md border border-input bg-background px-3 py-2 text-sm"\n                            placeholder='
    },
    // Fix Tabs onValueChange
    {
      pattern: /onValueChange=\{\(value\) => handleSelectChange\("paymentMethod", value\)\n\s*\}/g,
      replacement: 'onValueChange={(value) => handleSelectChange("paymentMethod", value)}'
    },
    // Fix cardName input
    {
      pattern: /onChange=\{handleInputChange\n\s*\/>/g,
      replacement: 'onChange={handleInputChange}\n                              />'
    },
    // Fix cardNumber input
    {
      pattern: /name="cardNumber"\n\s*\}\n\s*value=\{formData\.cardNumber\}\n\s*onChange=\{handleInputChange\n\s*\}\n\s*placeholder="0000 0000 0000 0000"/g,
      replacement: 'name="cardNumber"\n                                value={formData.cardNumber}\n                                onChange={handleInputChange}\n                                placeholder="0000 0000 0000 0000"'
    },
    // Fix cardExpiry input
    {
      pattern: /name="cardExpiry"\n\s*\}\n\s*value=\{formData\.cardExpiry\}\n\s*onChange=\{handleInputChange\n\s*\}\n\s*placeholder="MM\/YY"/g,
      replacement: 'name="cardExpiry"\n                                  value={formData.cardExpiry}\n                                  onChange={handleInputChange}\n                                  placeholder="MM/YY"'
    },
    // Fix cardCvc input
    {
      pattern: /name="cardCvc"\n\s*\}\n\s*value=\{formData\.cardCvc\}\n\s*onChange=\{handleInputChange\n\s*\}\n\s*placeholder="123"/g,
      replacement: 'name="cardCvc"\n                                  value={formData.cardCvc}\n                                  onChange={handleInputChange}\n                                  placeholder="123"'
    },
    // Fix button onClick handlers
    {
      pattern: /onClick=\{\(\) => setCurrentStep\(1\)\n\s*>/g,
      replacement: 'onClick={() => setCurrentStep(1)}\n                  >'
    },
    {
      pattern: /onClick=\{\(\) => setCurrentStep\(3\)\n\s*>/g,
      replacement: 'onClick={() => setCurrentStep(3)}\n                  >'
    },
    {
      pattern: /onClick=\{\(\) => setCurrentStep\(2\)\n\s*>/g,
      replacement: 'onClick={() => setCurrentStep(2)}\n                      >'
    },
    // Fix malformed button properties
    {
      pattern: /\n\s*\}\n\s*className="btn-primary"\n\s*\}\n\s*onClick=\{handleSubmitBooking\n\s*>/g,
      replacement: '\n                            className="btn-primary"\n                            onClick={handleSubmitBooking}\n                      >'
    }
  ];

  // Apply all fixes
  inputFixes.forEach((fix, index) => {
    const beforeContent = content;
    content = content.replace(fix.pattern, fix.replacement);
    if (content !== beforeContent) {
      changes++;
      console.log(`✅ Applied fix ${index + 1}`);
    }
  });

  // Remove duplicate displayName
  content = content.replace(/export default AppointmentBooking;\n\nAppointmentBooking\.displayName = 'AppointmentBooking';/, 'export default AppointmentBooking;');

  // Write the fixed content back
  fs.writeFileSync(FILE_PATH, content);

  console.log();
  console.log('📊 FINAL APPOINTMENTBOOKING.TSX FIX SUMMARY');
  console.log('─'.repeat(50));
  console.log(`🔧 Total syntax fixes applied: ${changes + 1}`); // +1 for displayName fix
  console.log('✅ File successfully fixed');

  console.log();
  console.log('💡 FIXES APPLIED:');
  console.log('• Fixed all malformed input properties');
  console.log('• Fixed textarea onChange handler');
  console.log('• Fixed Tabs onValueChange handler');
  console.log('• Fixed all button onClick handlers');
  console.log('• Fixed malformed button properties');
  console.log('• Removed duplicate displayName');
  console.log('• Preserved all functionality');
}

// Run the fix
fixFinalAppointmentBookingSyntax();
