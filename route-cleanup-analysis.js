import fs from 'fs';
import path from 'path';

/**
 * Route Cleanup Analysis
 * Identifies unused routes and missing implementations
 */

console.log('🔍 ROUTE CLEANUP ANALYSIS');
console.log('='.repeat(80));

const routeAnalysis = {
  definedRoutes: [],
  implementedRoutes: [],
  unusedRoutes: [],
  missingImplementations: [],
  redirectRoutes: [],
  recommendations: []
};

// Extract routes from route-definitions.ts
function analyzeRouteDefinitions() {
  console.log('📋 Analyzing route definitions...');
  
  try {
    const routeDefsContent = fs.readFileSync('src/routes/route-definitions.ts', 'utf8');
    
    // Extract all route paths
    const routePathMatches = routeDefsContent.match(/['"]\/[^'"]*['"]/g) || [];
    const definedPaths = routePathMatches
      .map(p => p.slice(1, -1))
      .filter(p => p !== '*') // Exclude catch-all route
      .filter((path, index, arr) => arr.indexOf(path) === index); // Remove duplicates
    
    routeAnalysis.definedRoutes = definedPaths;
    console.log(`Found ${definedPaths.length} defined routes`);
    
    return definedPaths;
  } catch (error) {
    console.error('❌ Error reading route definitions:', error.message);
    return [];
  }
}

// Extract implemented routes from routeConfig.tsx
function analyzeRouteImplementations() {
  console.log('📋 Analyzing route implementations...');
  
  try {
    const routeConfigContent = fs.readFileSync('src/routes/routeConfig.tsx', 'utf8');
    
    // Extract import statements for route components
    const importMatches = routeConfigContent.match(/import\('@\/pages\/[^']+'\)/g) || [];
    const implementedPaths = [];
    
    // Extract route registrations
    const registrationMatches = routeConfigContent.match(/\[ROUTE_PATHS\.[^\]]+\]:/g) || [];
    
    registrationMatches.forEach(match => {
      // Extract the route path constant
      const pathConstant = match.slice(1, -2); // Remove [ and ]:
      
      // Find corresponding path in definitions
      const routeDefsContent = fs.readFileSync('src/routes/route-definitions.ts', 'utf8');
      const pathRegex = new RegExp(`${pathConstant.replace(/\./g, '\\.')}:\\s*['"]([^'"]+)['"]`);
      const pathMatch = routeDefsContent.match(pathRegex);
      
      if (pathMatch) {
        implementedPaths.push(pathMatch[1]);
      }
    });
    
    routeAnalysis.implementedRoutes = [...new Set(implementedPaths)];
    console.log(`Found ${implementedPaths.length} implemented routes`);
    
    return implementedPaths;
  } catch (error) {
    console.error('❌ Error reading route config:', error.message);
    return [];
  }
}

// Check if page files exist
function checkPageFileExistence() {
  console.log('📋 Checking page file existence...');
  
  const missingFiles = [];
  const existingFiles = [];
  
  // Common page file patterns
  const pagePatterns = [
    'src/pages',
    'src/pages/patient-resources',
    'src/pages/patient-resources/conditions',
    'src/pages/expertise',
    'src/pages/locations',
    'src/pages/gp-resources'
  ];
  
  // Check each pattern directory
  pagePatterns.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      files.forEach(file => {
        if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.ts'))) {
          existingFiles.push(path.join(dir, file.name));
        }
      });
    }
  });
  
  console.log(`Found ${existingFiles.length} page files`);
  return { existingFiles, missingFiles };
}

// Analyze route usage in navigation
function analyzeNavigationUsage() {
  console.log('📋 Analyzing navigation usage...');
  
  const navigationFiles = [
    'src/components/Navbar.tsx',
    'src/components/Footer.tsx',
    'src/pages/Index.tsx',
    'src/pages/PatientResources.tsx'
  ];
  
  const usedInNavigation = [];
  
  navigationFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract Link to="/..." patterns
      const linkMatches = content.match(/to=["']([^"']+)["']/g) || [];
      linkMatches.forEach(match => {
        const path = match.match(/to=["']([^"']+)["']/)[1];
        if (path.startsWith('/') && !usedInNavigation.includes(path)) {
          usedInNavigation.push(path);
        }
      });
    }
  });
  
  console.log(`Found ${usedInNavigation.length} routes used in navigation`);
  return usedInNavigation;
}

// Generate cleanup recommendations
function generateCleanupRecommendations() {
  console.log('\n🔧 ROUTE CLEANUP RECOMMENDATIONS');
  console.log('='.repeat(50));
  
  const definedRoutes = routeAnalysis.definedRoutes;
  const implementedRoutes = routeAnalysis.implementedRoutes;
  
  // Find unused routes (defined but not implemented)
  const unusedRoutes = definedRoutes.filter(route => !implementedRoutes.includes(route));
  
  // Find missing implementations (implemented but not defined)
  const missingImplementations = implementedRoutes.filter(route => !definedRoutes.includes(route));
  
  routeAnalysis.unusedRoutes = unusedRoutes;
  routeAnalysis.missingImplementations = missingImplementations;
  
  const recommendations = [];
  
  if (unusedRoutes.length > 0) {
    recommendations.push({
      category: 'Unused Route Definitions',
      priority: 'MEDIUM',
      count: unusedRoutes.length,
      action: 'Remove unused route definitions or implement missing pages',
      routes: unusedRoutes.slice(0, 10), // Show first 10
      impact: 'Reduces code complexity and maintenance overhead'
    });
  }
  
  if (missingImplementations.length > 0) {
    recommendations.push({
      category: 'Missing Route Definitions',
      priority: 'LOW',
      count: missingImplementations.length,
      action: 'Add route definitions for implemented pages',
      routes: missingImplementations,
      impact: 'Improves route management consistency'
    });
  }
  
  // Specific route cleanup recommendations
  const specificCleanups = [
    {
      category: 'Patient Resources Routes',
      priority: 'MEDIUM',
      action: 'Review and consolidate patient resource routes',
      routes: unusedRoutes.filter(r => r.includes('/patient-resources/')),
      impact: 'Simplifies patient resource navigation'
    },
    {
      category: 'Location Routes',
      priority: 'LOW',
      action: 'Verify all location routes are needed',
      routes: unusedRoutes.filter(r => r.includes('/locations/')),
      impact: 'Ensures location pages are properly maintained'
    }
  ];
  
  recommendations.push(...specificCleanups.filter(rec => rec.routes.length > 0));
  
  routeAnalysis.recommendations = recommendations;
  
  return recommendations;
}

// Implementation plan
function createRouteCleanupPlan() {
  console.log('\n📋 ROUTE CLEANUP IMPLEMENTATION PLAN');
  console.log('='.repeat(40));
  
  const plan = {
    phase1: {
      name: 'Route Definition Cleanup',
      duration: '2-3 hours',
      tasks: [
        'Remove unused route definitions from route-definitions.ts',
        'Clean up ROUTE_PATHS object structure',
        'Update route metadata for removed routes',
        'Verify no broken references'
      ],
      files: ['src/routes/route-definitions.ts']
    },
    phase2: {
      name: 'Route Implementation Verification',
      duration: '1-2 hours',
      tasks: [
        'Verify all implemented routes have definitions',
        'Check for missing page components',
        'Update route configuration if needed',
        'Test route navigation'
      ],
      files: ['src/routes/routeConfig.tsx']
    },
    phase3: {
      name: 'Navigation Link Cleanup',
      duration: '1 hour',
      tasks: [
        'Remove links to non-existent routes',
        'Update navigation menus',
        'Fix broken internal links',
        'Update sitemap generation'
      ],
      files: ['src/components/Navbar.tsx', 'src/components/Footer.tsx']
    }
  };
  
  console.log('Phase 1:', plan.phase1.name);
  console.log('Phase 2:', plan.phase2.name);
  console.log('Phase 3:', plan.phase3.name);
  
  return plan;
}

// Main execution
async function runRouteCleanupAnalysis() {
  try {
    const definedRoutes = analyzeRouteDefinitions();
    const implementedRoutes = analyzeRouteImplementations();
    const { existingFiles } = checkPageFileExistence();
    const navigationUsage = analyzeNavigationUsage();
    const recommendations = generateCleanupRecommendations();
    const plan = createRouteCleanupPlan();
    
    // Generate summary
    console.log('\n📊 ROUTE ANALYSIS SUMMARY');
    console.log('='.repeat(40));
    console.log(`Defined Routes: ${routeAnalysis.definedRoutes.length}`);
    console.log(`Implemented Routes: ${routeAnalysis.implementedRoutes.length}`);
    console.log(`Unused Routes: ${routeAnalysis.unusedRoutes.length}`);
    console.log(`Missing Implementations: ${routeAnalysis.missingImplementations.length}`);
    console.log(`Page Files: ${existingFiles.length}`);
    console.log(`Navigation Links: ${navigationUsage.length}`);
    
    if (routeAnalysis.unusedRoutes.length > 0) {
      console.log('\n🔍 UNUSED ROUTES (First 10):');
      routeAnalysis.unusedRoutes.slice(0, 10).forEach(route => {
        console.log(`  - ${route}`);
      });
    }
    
    // Save results
    const results = {
      analysis: routeAnalysis,
      recommendations: recommendations,
      implementationPlan: plan,
      summary: {
        definedRoutes: routeAnalysis.definedRoutes.length,
        implementedRoutes: routeAnalysis.implementedRoutes.length,
        unusedRoutes: routeAnalysis.unusedRoutes.length,
        missingImplementations: routeAnalysis.missingImplementations.length,
        pageFiles: existingFiles.length,
        navigationLinks: navigationUsage.length
      },
      timestamp: new Date().toISOString()
    };
    
    fs.writeFileSync(
      'route-cleanup-analysis-results.json',
      JSON.stringify(results, null, 2)
    );
    
    console.log('\n✅ Route cleanup analysis complete!');
    console.log('📄 Results saved to route-cleanup-analysis-results.json');
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  }
}

// Run the analysis
runRouteCleanupAnalysis();
