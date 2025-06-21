import React from 'react';
import { Navigate } from 'react-router-dom';

import LanguageWrapper from '@/components/LanguageWrapper';
import { ROUTE_PATHS, ROUTE_REDIRECTS, SUPPORTED_LANGUAGES, SupportedLanguage } from './route-definitions';
import { createLazyComponent, registerRoutes, RouteLoaderRegistry } from './route-loader';

// Register all route loaders
registerRoutes({
  // Core pages
  [ROUTE_PATHS.HOME]: () => import('@/pages/Index'),
  [ROUTE_PATHS.APPOINTMENTS]: () => import('@/pages/Appointments'),
  [ROUTE_PATHS.APPOINTMENT_BOOKING]: () => import('@/pages/AppointmentBooking'),
  [ROUTE_PATHS.EXPERTISE]: () => import('@/pages/Expertise'),
  [ROUTE_PATHS.PATIENT_RESOURCES]: () => import('@/pages/PatientResources'),
  [ROUTE_PATHS.CONTACT]: () => import('@/pages/Contact'),
  [ROUTE_PATHS.FAQ]: () => import('@/pages/Faq'),
  [ROUTE_PATHS.PRIVACY_POLICY]: () => import('@/pages/PrivacyPolicy'),
  [ROUTE_PATHS.TERMS_CONDITIONS]: () => import('@/pages/TermsConditions'),
  [ROUTE_PATHS.SPECIALTIES]: () => import('@/pages/Specialties'),
  [ROUTE_PATHS.MEDICOLEGAL]: () => import('@/pages/Medicolegal'),
  [ROUTE_PATHS.LOCATIONS]: () => import('@/pages/Locations'),
  [ROUTE_PATHS.GP_RESOURCES]: () => import('@/pages/GPResources'),

  // Patient Resources
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.CONDITION_INFORMATION]: () => import('@/pages/patient-resources/ConditionInformation'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.SPINE_CONDITIONS_LIBRARY]: () => import('@/pages/patient-resources/SpineConditionsLibrary'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.EXERCISE_LIBRARY]: () => import('@/pages/patient-resources/ExerciseLibrary'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.INDIVIDUAL_SPINE_HEALTH_PROGRAMME]: () => import('@/pages/patient-resources/IndividualSpineHealthProgramme'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.SPINE_AND_BRAIN_HEALTH]: () => import('@/pages/patient-resources/SpineAndBrainHealth'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.CERVICAL_SPINE_INJURY]: () => import('@/pages/patient-resources/CervicalSpineInjury'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.CERVICAL_SPINE_EXERCISES]: () => import('@/pages/patient-resources/CervicalSpineExercises'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.SPINE_SAFE_EXERCISES]: () => import('@/pages/patient-resources/SpineSafeExercises'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.EXERCISE_PAIN_MED_RISKS]: () => import('@/pages/patient-resources/ExercisePainMedRisks'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.AGE_SPECIFIC_SPINE_RECOMMENDATIONS]: () => import('@/pages/patient-resources/AgeSpecificSpineRecommendations'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.YOUTHFUL_SPINE]: () => import('@/pages/patient-resources/YouthfulSpine'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.LIFESTYLE_MODIFICATIONS]: () => import('@/pages/patient-resources/LifestyleModifications'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.ASSESSMENT_TOOLS]: () => import('@/pages/patient-resources/AssessmentTools'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.PATIENT_DASHBOARD]: () => import('@/pages/patient-resources/PatientDashboard'),
  [ROUTE_PATHS.PATIENT_RESOURCES_ROUTES.SPINE_HEALTH_APP]: () => import('@/pages/patient-resources/SpineHealthApp'),

  // Medical Conditions
  [ROUTE_PATHS.CONDITIONS.HERNIATED_DISC]: () => import('@/pages/patient-resources/conditions/HerniatedDisc'),
  [ROUTE_PATHS.CONDITIONS.SPINAL_STENOSIS]: () => import('@/pages/patient-resources/conditions/SpinalStenosis'),
  [ROUTE_PATHS.CONDITIONS.SCIATICA]: () => import('@/pages/patient-resources/conditions/Sciatica'),
  [ROUTE_PATHS.CONDITIONS.RADICULOPATHY]: () => import('@/pages/patient-resources/conditions/Radiculopathy'),
  [ROUTE_PATHS.CONDITIONS.ARTHROSIS]: () => import('@/pages/patient-resources/conditions/Arthrosis'),
  [ROUTE_PATHS.CONDITIONS.DISCOPATHY]: () => import('@/pages/patient-resources/conditions/Discopathy'),
  [ROUTE_PATHS.CONDITIONS.FACET_ARTHROPATHY]: () => import('@/pages/patient-resources/conditions/FacetArthropathy'),
  [ROUTE_PATHS.CONDITIONS.SACROILIAC_ARTHROPATHY]: () => import('@/pages/patient-resources/conditions/SacroiliacArthropathy'),
  [ROUTE_PATHS.CONDITIONS.PIRIFORMIS_SYNDROME]: () => import('@/pages/patient-resources/conditions/PiriformisSyndrome'),
  [ROUTE_PATHS.CONDITIONS.THORACIC_OUTLET_SYNDROME]: () => import('@/pages/patient-resources/conditions/ThoracicOutletSyndrome'),
  [ROUTE_PATHS.CONDITIONS.OCCIPITAL_NEURALGIA]: () => import('@/pages/patient-resources/conditions/OccipitalNeuralgia'),
  [ROUTE_PATHS.CONDITIONS.SPONDYLOSIS]: () => import('@/pages/patient-resources/conditions/Spondylosis'),
  [ROUTE_PATHS.CONDITIONS.PARS_DEFECTS]: () => import('@/pages/patient-resources/conditions/ParsDefects'),
  [ROUTE_PATHS.CONDITIONS.SPONDYLOLISTHESIS]: () => import('@/pages/patient-resources/conditions/Spondylolisthesis'),

  // Expertise/Technologies
  [ROUTE_PATHS.EXPERTISE_ROUTES.CERVICAL_DISC_REPLACEMENT]: () => import('@/pages/expertise/CervicalDiscReplacement'),
  [ROUTE_PATHS.EXPERTISE_ROUTES.LUMBAR_DISC_REPLACEMENT]: () => import('@/pages/expertise/LumbarDiscReplacement'),
  [ROUTE_PATHS.EXPERTISE_ROUTES.IMAGE_GUIDED_SURGERY]: () => import('@/pages/expertise/ImageGuidedSurgery'),
  [ROUTE_PATHS.EXPERTISE_ROUTES.ROBOTIC_SPINE_SURGERY]: () => import('@/pages/expertise/RoboticSpineSurgery'),

  // Locations
  [ROUTE_PATHS.LOCATION_ROUTES.SURREY_HILLS]: () => import('@/pages/locations/surrey-hills'),
  [ROUTE_PATHS.LOCATION_ROUTES.MORNINGTON]: () => import('@/pages/locations/mornington'),
  [ROUTE_PATHS.LOCATION_ROUTES.FRANKSTON]: () => import('@/pages/locations/frankston'),
  [ROUTE_PATHS.LOCATION_ROUTES.LANGWARRIN]: () => import('@/pages/locations/langwarrin'),
  [ROUTE_PATHS.LOCATION_ROUTES.BUNDOORA]: () => import('@/pages/locations/bundoora'),
  [ROUTE_PATHS.LOCATION_ROUTES.WERRIBEE]: () => import('@/pages/locations/werribee'),
  [ROUTE_PATHS.LOCATION_ROUTES.HEIDELBERG]: () => import('@/pages/locations/heidelberg'),
  [ROUTE_PATHS.LOCATION_ROUTES.MOONEE_PONDS]: () => import('@/pages/locations/moonee-ponds'),
  [ROUTE_PATHS.LOCATION_ROUTES.SUNBURY]: () => import('@/pages/locations/sunbury'),
  [ROUTE_PATHS.LOCATION_ROUTES.DANDENONG]: () => import('@/pages/locations/dandenong'),
  [ROUTE_PATHS.LOCATION_ROUTES.WANTIRNA]: () => import('@/pages/locations/wantirna'),
  [ROUTE_PATHS.LOCATION_ROUTES.LOCATION_DETAIL]: () => import('@/pages/locations/LocationDetail'),

  // GP Resources
  [ROUTE_PATHS.GP_RESOURCES_ROUTES.REFERRAL_PROTOCOLS]: () => import('@/pages/gp-resources/ReferralProtocols'),
  [ROUTE_PATHS.GP_RESOURCES_ROUTES.DIAGNOSTICS]: () => import('@/pages/gp-resources/Diagnostics'),
  [ROUTE_PATHS.GP_RESOURCES_ROUTES.CARE_COORDINATION]: () => import('@/pages/gp-resources/CareCoordination'),
  [ROUTE_PATHS.GP_RESOURCES_ROUTES.EMERGENCIES]: () => import('@/pages/gp-resources/Emergencies'),

  // Special routes
  [ROUTE_PATHS.NOT_FOUND]: () => import('@/pages/NotFound'),
});

// Get the route loader registry
const routeRegistry = RouteLoaderRegistry.getInstance();

// Define route structure
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

// Helper function to create route elements
function createRouteElement(path: string): React.ReactNode {
  const LazyComponent = routeRegistry.getLazyComponent(path);
  return <LazyComponent />;
}

// Helper function to create redirect elements
function createRedirectElement(to: string): React.ReactNode {
  return <Navigate to={to} replace />;
}

// Generate base routes from route definitions
function generateBaseRoutes(): RouteConfig[] {
  const routes: RouteConfig[] = [];

  // Add all registered routes
  routeRegistry.getRegisteredRoutes().forEach(path => {
    routes.push({
      path,
      element: createRouteElement(path)
    });
  });

  // Add redirects
  Object.entries(ROUTE_REDIRECTS).forEach(([from, to]) => {
    routes.push({
      path: from,
      element: createRedirectElement(to)
    });
  });

  return routes;
}

// Define base routes (without language prefix)
export const baseRoutes: RouteConfig[] = generateBaseRoutes();

// Generate language-specific routes
export const generateLanguageRoutes = (lang: SupportedLanguage): RouteConfig[] => {
  return baseRoutes?.map(route => {
    // Skip the catch-all route
    if (route.path === ROUTE_PATHS.NOT_FOUND) {
      return route;
    }
    // For redirect routes, update the redirect path to include language
    if (React.isValidElement(route.element) && route.element.type === Navigate) {
      const navigate = route.element as React.ReactElement<{ to: string; replace: boolean }>;
      return {
        path: `/${lang}${route.path}`,
        element: <LanguageWrapper>
          <Navigate to={`/${lang}${navigate.props.to}`} replace={navigate.props.replace} />
        </LanguageWrapper>
      };
    }
    // For regular routes, wrap with LanguageWrapper
    return {
      path: `/${lang}${route.path}`,
      element: <LanguageWrapper>{route.element}</LanguageWrapper>
    };
  });
};

// Combine all routes with type safety
export const getAllRoutes = () => {
  const languageRoutes = SUPPORTED_LANGUAGES.flatMap(lang => generateLanguageRoutes(lang));
  return [...baseRoutes, ...languageRoutes];
};

// Export route utilities
export { ROUTE_PATHS, ROUTE_REDIRECTS, SUPPORTED_LANGUAGES } from './route-definitions';
export { RouteLoaderRegistry, preloadRoute } from './route-loader';