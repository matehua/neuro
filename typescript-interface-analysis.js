import fs from 'fs';
import path from 'path';

/**
 * TypeScript Interface Analysis
 * Identifies components missing TypeScript interfaces and prop types
 */

console.log('🔍 TYPESCRIPT INTERFACE ANALYSIS');
console.log('='.repeat(80));

const interfaceAnalysis = {
  componentsAnalyzed: 0,
  missingInterfaces: [],
  missingPropTypes: [],
  goodExamples: [],
  recommendations: []
};

// Analyze TypeScript interface usage
function analyzeTypeScriptInterfaces() {
  console.log('📋 Analyzing TypeScript interfaces...');
  
  const componentDirs = [
    'src/components',
    'src/pages',
    'src/hooks',
    'src/contexts'
  ];
  
  componentDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      analyzeDirectory(dir);
    }
  });
}

function analyzeDirectory(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item.name);
    
    if (item.isDirectory() && !item.name.startsWith('.')) {
      analyzeDirectory(fullPath);
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
      analyzeFile(fullPath);
    }
  });
}

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    interfaceAnalysis.componentsAnalyzed++;
    
    // Check if it's a React component
    const isReactComponent = content.includes('React.FC') || 
                           content.includes(': FC') ||
                           content.includes('function ') && content.includes('return (') ||
                           content.includes('const ') && content.includes('= (') && content.includes('=>');
    
    if (!isReactComponent) return;
    
    // Check for interface definitions
    const hasInterface = content.includes('interface ') || content.includes('type ');
    const hasProps = content.includes('Props') || content.includes('props:');
    
    // Check for React.FC with proper typing
    const hasTypedFC = content.match(/React\.FC<[^>]+>/) || content.match(/: FC<[^>]+>/);
    
    // Check for prop destructuring with types
    const hasPropDestructuring = content.match(/\{\s*[^}]+\s*\}:\s*[A-Z][a-zA-Z]*/) ||
                                content.match(/props:\s*[A-Z][a-zA-Z]*/);
    
    if (!hasInterface && isReactComponent) {
      interfaceAnalysis.missingInterfaces.push({
        file: fileName,
        path: filePath,
        issue: 'No TypeScript interfaces found',
        severity: 'medium',
        suggestion: 'Add interface for component props'
      });
    }
    
    if (!hasTypedFC && isReactComponent && !hasPropDestructuring) {
      interfaceAnalysis.missingPropTypes.push({
        file: fileName,
        path: filePath,
        issue: 'Component not properly typed',
        severity: 'medium',
        suggestion: 'Add proper TypeScript typing to React.FC or props'
      });
    }
    
    // Identify good examples
    if (hasInterface && hasTypedFC) {
      interfaceAnalysis.goodExamples.push({
        file: fileName,
        path: filePath,
        reason: 'Has proper interfaces and typed React.FC'
      });
    }
    
  } catch (error) {
    console.error(`❌ Error analyzing ${filePath}:`, error.message);
  }
}

// Generate TypeScript improvement recommendations
function generateTypeScriptRecommendations() {
  console.log('\n🔧 TYPESCRIPT IMPROVEMENT RECOMMENDATIONS');
  console.log('='.repeat(50));
  
  const recommendations = [];
  
  if (interfaceAnalysis.missingInterfaces.length > 0) {
    recommendations.push({
      category: 'Missing Interfaces',
      priority: 'MEDIUM',
      count: interfaceAnalysis.missingInterfaces.length,
      action: 'Add TypeScript interfaces for component props',
      impact: 'Improves type safety and developer experience',
      examples: interfaceAnalysis.missingInterfaces.slice(0, 5),
      template: `
interface ComponentNameProps {
  title: string;
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
  onClick,
  children
}) => {
  // Component implementation
};`
    });
  }
  
  if (interfaceAnalysis.missingPropTypes.length > 0) {
    recommendations.push({
      category: 'Missing Prop Types',
      priority: 'MEDIUM',
      count: interfaceAnalysis.missingPropTypes.length,
      action: 'Add proper TypeScript typing to React components',
      impact: 'Prevents runtime errors and improves code quality',
      examples: interfaceAnalysis.missingPropTypes.slice(0, 5),
      template: `
// Before
const Component = (props) => { ... }

// After
interface ComponentProps {
  // Define prop types here
}

const Component: React.FC<ComponentProps> = (props) => { ... }`
    });
  }
  
  // Specific improvement areas
  const specificImprovements = [
    {
      category: 'Form Components',
      priority: 'HIGH',
      action: 'Add strict typing for form inputs and validation',
      impact: 'Prevents form-related bugs and improves UX',
      files: interfaceAnalysis.missingInterfaces.filter(item => 
        item.file.toLowerCase().includes('form') || 
        item.file.toLowerCase().includes('input')
      )
    },
    {
      category: 'Medical Components',
      priority: 'HIGH',
      action: 'Add medical data interfaces for condition components',
      impact: 'Ensures medical data consistency and safety',
      files: interfaceAnalysis.missingInterfaces.filter(item => 
        item.path.includes('conditions') || 
        item.path.includes('medical')
      )
    },
    {
      category: 'UI Components',
      priority: 'MEDIUM',
      action: 'Add consistent prop interfaces for reusable UI components',
      impact: 'Improves component reusability and maintainability',
      files: interfaceAnalysis.missingInterfaces.filter(item => 
        item.path.includes('components/ui') ||
        item.path.includes('components/shared')
      )
    }
  ];
  
  recommendations.push(...specificImprovements.filter(rec => rec.files.length > 0));
  
  interfaceAnalysis.recommendations = recommendations;
  return recommendations;
}

// Create implementation plan
function createTypeScriptImplementationPlan() {
  console.log('\n📋 TYPESCRIPT IMPLEMENTATION PLAN');
  console.log('='.repeat(40));
  
  const plan = {
    phase1: {
      name: 'Critical Component Interfaces',
      duration: '2-3 hours',
      priority: 'HIGH',
      tasks: [
        'Add interfaces to form components',
        'Add interfaces to medical condition components',
        'Add interfaces to navigation components',
        'Add interfaces to layout components'
      ],
      files: interfaceAnalysis.missingInterfaces.slice(0, 10).map(item => item.file)
    },
    phase2: {
      name: 'UI Component Type Safety',
      duration: '2-3 hours',
      priority: 'MEDIUM',
      tasks: [
        'Add interfaces to reusable UI components',
        'Add interfaces to shared components',
        'Standardize prop naming conventions',
        'Add optional prop documentation'
      ],
      files: interfaceAnalysis.missingInterfaces.slice(10, 20).map(item => item.file)
    },
    phase3: {
      name: 'Hook and Context Interfaces',
      duration: '1-2 hours',
      priority: 'MEDIUM',
      tasks: [
        'Add interfaces to custom hooks',
        'Add interfaces to context providers',
        'Add return type annotations',
        'Add generic type constraints'
      ],
      files: interfaceAnalysis.missingInterfaces.filter(item => 
        item.path.includes('hooks') || item.path.includes('contexts')
      ).map(item => item.file)
    },
    phase4: {
      name: 'Utility and Helper Interfaces',
      duration: '1 hour',
      priority: 'LOW',
      tasks: [
        'Add interfaces to utility functions',
        'Add interfaces to helper components',
        'Add type exports for shared types',
        'Add JSDoc comments with type information'
      ],
      files: interfaceAnalysis.missingInterfaces.filter(item => 
        item.path.includes('lib') || item.path.includes('utils')
      ).map(item => item.file)
    }
  };
  
  console.log('Phase 1:', plan.phase1.name, `(${plan.phase1.files.length} files)`);
  console.log('Phase 2:', plan.phase2.name, `(${plan.phase2.files.length} files)`);
  console.log('Phase 3:', plan.phase3.name, `(${plan.phase3.files.length} files)`);
  console.log('Phase 4:', plan.phase4.name, `(${plan.phase4.files.length} files)`);
  
  return plan;
}

// Main execution
async function runTypeScriptAnalysis() {
  try {
    analyzeTypeScriptInterfaces();
    const recommendations = generateTypeScriptRecommendations();
    const plan = createTypeScriptImplementationPlan();
    
    // Generate summary
    console.log('\n📊 TYPESCRIPT ANALYSIS SUMMARY');
    console.log('='.repeat(40));
    console.log(`Components Analyzed: ${interfaceAnalysis.componentsAnalyzed}`);
    console.log(`Missing Interfaces: ${interfaceAnalysis.missingInterfaces.length}`);
    console.log(`Missing Prop Types: ${interfaceAnalysis.missingPropTypes.length}`);
    console.log(`Good Examples: ${interfaceAnalysis.goodExamples.length}`);
    
    if (interfaceAnalysis.missingInterfaces.length > 0) {
      console.log('\n🔍 COMPONENTS NEEDING INTERFACES (First 10):');
      interfaceAnalysis.missingInterfaces.slice(0, 10).forEach(item => {
        console.log(`  - ${item.file}: ${item.issue}`);
      });
    }
    
    // Save results
    const results = {
      analysis: interfaceAnalysis,
      recommendations: recommendations,
      implementationPlan: plan,
      summary: {
        componentsAnalyzed: interfaceAnalysis.componentsAnalyzed,
        missingInterfaces: interfaceAnalysis.missingInterfaces.length,
        missingPropTypes: interfaceAnalysis.missingPropTypes.length,
        goodExamples: interfaceAnalysis.goodExamples.length,
        typeScriptCoverage: Math.round(
          (interfaceAnalysis.goodExamples.length / interfaceAnalysis.componentsAnalyzed) * 100
        )
      },
      timestamp: new Date().toISOString()
    };
    
    fs.writeFileSync(
      'typescript-interface-analysis-results.json',
      JSON.stringify(results, null, 2)
    );
    
    console.log('\n✅ TypeScript interface analysis complete!');
    console.log('📄 Results saved to typescript-interface-analysis-results.json');
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  }
}

// Run the analysis
runTypeScriptAnalysis();
