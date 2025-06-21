import fs from 'fs';
import path from 'path';

/**
 * Targeted TypeScript Interface Analysis
 * More accurate detection of missing TypeScript interfaces
 */

console.log('🔍 TARGETED TYPESCRIPT INTERFACE ANALYSIS');
console.log('='.repeat(60));

const analysis = {
  componentsNeedingInterfaces: [],
  componentsWithGoodInterfaces: [],
  largeComponents: [],
  productionIssues: []
};

function analyzeComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath, path.extname(filePath));
    const lines = content.split('\n');
    
    // Check if it's a React component
    const isReactComponent = content.includes('React.FC') || 
                           content.includes(': FC') ||
                           (content.includes('function ') && content.includes('return (')) ||
                           (content.includes('const ') && content.includes('= (') && content.includes('=>'));
    
    if (!isReactComponent) return;
    
    // Check for props usage
    const usesProps = content.includes('props.') || 
                     content.includes('props:') ||
                     content.includes('({') && content.includes('})') ||
                     /\(\s*\{\s*[^}]+\s*\}\s*\)/.test(content);
    
    // Check for interface definitions
    const hasInterface = content.includes('interface ') && content.includes('Props');
    const hasTypeDefinition = content.includes('type ') && content.includes('Props');
    const hasProperTyping = hasInterface || hasTypeDefinition;
    
    // Check component size
    const lineCount = lines.length;
    const isLarge = lineCount > 500;
    
    // Analyze the component
    const componentInfo = {
      name: fileName,
      path: filePath,
      lines: lineCount,
      usesProps,
      hasProperTyping,
      isLarge,
      issues: []
    };
    
    // Identify issues
    if (usesProps && !hasProperTyping) {
      componentInfo.issues.push({
        type: 'MISSING_PROPS_INTERFACE',
        severity: 'medium',
        message: 'Component uses props but lacks TypeScript interface'
      });
      analysis.componentsNeedingInterfaces.push(componentInfo);
    } else if (hasProperTyping) {
      analysis.componentsWithGoodInterfaces.push(componentInfo);
    }
    
    if (isLarge) {
      componentInfo.issues.push({
        type: 'LARGE_COMPONENT',
        severity: 'high',
        message: `Component is very large (${lineCount} lines)`
      });
      analysis.largeComponents.push(componentInfo);
    }
    
    // Check for production issues
    if (content.includes('console.log') || content.includes('console.warn')) {
      const consoleLines = lines.filter((line, index) => {
        const hasConsole = line.includes('console.');
        const isInDevCheck = content.includes('import.meta.env.DEV') && 
                           lines.slice(Math.max(0, index - 3), index + 3).some(l => 
                             l.includes('import.meta.env.DEV') || l.includes('process.env.NODE_ENV'));
        return hasConsole && !isInDevCheck;
      });
      
      if (consoleLines.length > 0) {
        componentInfo.issues.push({
          type: 'CONSOLE_STATEMENTS',
          severity: 'medium',
          message: 'Component contains console statements not wrapped in dev checks'
        });
        analysis.productionIssues.push(componentInfo);
      }
    }
    
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error.message);
  }
}

function analyzeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item.name);
    
    if (item.isDirectory() && !item.name.startsWith('.')) {
      analyzeDirectory(fullPath);
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
      analyzeComponent(fullPath);
    }
  });
}

function generatePriorityReport() {
  console.log('\n📊 PRIORITY ANALYSIS REPORT');
  console.log('='.repeat(40));
  
  // Sort large components by size
  const sortedLargeComponents = analysis.largeComponents
    .sort((a, b) => b.lines - a.lines)
    .slice(0, 10);
  
  console.log('\n🔴 TOP 10 LARGEST COMPONENTS (Priority: HIGH)');
  sortedLargeComponents.forEach((comp, index) => {
    console.log(`${index + 1}. ${comp.name}: ${comp.lines} lines`);
  });
  
  console.log('\n🟡 COMPONENTS NEEDING TYPESCRIPT INTERFACES (Priority: MEDIUM)');
  analysis.componentsNeedingInterfaces.slice(0, 10).forEach((comp, index) => {
    console.log(`${index + 1}. ${comp.name}: ${comp.lines} lines`);
  });
  
  console.log('\n🟠 PRODUCTION ISSUES (Priority: HIGH)');
  analysis.productionIssues.forEach((comp, index) => {
    console.log(`${index + 1}. ${comp.name}: Console statements found`);
  });
  
  console.log('\n✅ COMPONENTS WITH GOOD TYPESCRIPT (Reference Examples)');
  analysis.componentsWithGoodInterfaces.slice(0, 5).forEach((comp, index) => {
    console.log(`${index + 1}. ${comp.name}: ${comp.lines} lines`);
  });
}

function generateActionPlan() {
  console.log('\n📋 IMMEDIATE ACTION PLAN');
  console.log('='.repeat(30));
  
  const totalIssues = analysis.largeComponents.length + 
                     analysis.componentsNeedingInterfaces.length + 
                     analysis.productionIssues.length;
  
  console.log(`\nTotal Issues Found: ${totalIssues}`);
  console.log(`- Large Components: ${analysis.largeComponents.length}`);
  console.log(`- Missing TypeScript: ${analysis.componentsNeedingInterfaces.length}`);
  console.log(`- Production Issues: ${analysis.productionIssues.length}`);
  
  console.log('\n🎯 RECOMMENDED PRIORITY ORDER:');
  console.log('1. Fix production issues (console statements)');
  console.log('2. Add TypeScript interfaces to components using props');
  console.log('3. Break down largest components (>1000 lines)');
  console.log('4. Optimize medium-large components (500-1000 lines)');
  
  // Save detailed results
  const results = {
    summary: {
      totalComponents: analysis.componentsWithGoodInterfaces.length + 
                      analysis.componentsNeedingInterfaces.length,
      largeComponents: analysis.largeComponents.length,
      missingInterfaces: analysis.componentsNeedingInterfaces.length,
      productionIssues: analysis.productionIssues.length,
      goodExamples: analysis.componentsWithGoodInterfaces.length
    },
    details: analysis,
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    'targeted-typescript-analysis-results.json',
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n✅ Analysis complete!');
  console.log('📄 Detailed results saved to targeted-typescript-analysis-results.json');
}

// Run the analysis
console.log('🚀 Starting targeted analysis...');

analyzeDirectory('src/components');
analyzeDirectory('src/pages');

generatePriorityReport();
generateActionPlan();
