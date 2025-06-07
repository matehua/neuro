import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import LanguageWrapper from '@/components/LanguageWrapper';
import { Skeleton } from '@/components/ui/skeleton';

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="space-y-4 w-full max-w-md">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-4 pt-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  </div>
);

// Helper function to create lazy-loaded components with error handling
const lazyLoad = <T extends object>(importFunc: () => Promise<{ default: React.ComponentType<T> }>) => {
  const LazyComponent = lazy(importFunc);
  return (props: T) => (
    <Suspense fallback={<PageLoadingFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load components
const Index = lazyLoad(() => import('@/pages/Index'));
const Appointments = lazyLoad(() => import('@/pages/Appointments'));
const AppointmentBooking = lazyLoad(() => import('@/pages/AppointmentBooking'));
const Expertise = lazyLoad(() => import('@/pages/Expertise'));
const PatientResources = lazyLoad(() => import('@/pages/PatientResources'));
const ConditionInformation = lazyLoad(() => import('@/pages/patient-resources/ConditionInformation'));
const ExerciseLibrary = lazyLoad(() => import('@/pages/patient-resources/ExerciseLibrary'));
const LifestyleModifications = lazyLoad(() => import('@/pages/patient-resources/LifestyleModifications'));
const SpineConditionsLibrary = lazyLoad(() => import('@/pages/patient-resources/SpineConditionsLibrary'));
const HerniatedDisc = lazyLoad(() => import('@/pages/patient-resources/conditions/HerniatedDisc'));
const SpinalStenosis = lazyLoad(() => import('@/pages/patient-resources/conditions/SpinalStenosis'));
const Sciatica = lazyLoad(() => import('@/pages/patient-resources/conditions/Sciatica'));
const Radiculopathy = lazyLoad(() => import('@/pages/patient-resources/conditions/Radiculopathy'));
const Arthrosis = lazyLoad(() => import('@/pages/patient-resources/conditions/Arthrosis'));
const Discopathy = lazyLoad(() => import('@/pages/patient-resources/conditions/Discopathy'));
const FacetArthropathy = lazyLoad(() => import('@/pages/patient-resources/conditions/FacetArthropathy'));
const SacroiliacArthropathy = lazyLoad(() => import('@/pages/patient-resources/conditions/SacroiliacArthropathy'));
const PiriformisSyndrome = lazyLoad(() => import('@/pages/patient-resources/conditions/PiriformisSyndrome'));
const ThoracicOutletSyndrome = lazyLoad(() => import('@/pages/patient-resources/conditions/ThoracicOutletSyndrome'));
const OccipitalNeuralgia = lazyLoad(() => import('@/pages/patient-resources/conditions/OccipitalNeuralgia'));
const Spondylosis = lazyLoad(() => import('@/pages/patient-resources/conditions/Spondylosis'));
const ParsDefects = lazyLoad(() => import('@/pages/patient-resources/conditions/ParsDefects'));
const IndividualSpineHealthProgramme = lazyLoad(() => import('@/pages/patient-resources/IndividualSpineHealthProgramme'));
const SpineAndBrainHealth = lazyLoad(() => import('@/pages/patient-resources/SpineAndBrainHealth'));
const CervicalSpineInjury = lazyLoad(() => import('@/pages/patient-resources/CervicalSpineInjury'));
const CervicalSpineExercises = lazyLoad(() => import('@/pages/patient-resources/CervicalSpineExercises'));
const SpineSafeExercises = lazyLoad(() => import('@/pages/patient-resources/SpineSafeExercises'));
const ExercisePainMedRisks = lazyLoad(() => import('@/pages/patient-resources/ExercisePainMedRisks'));
const AgeSpecificSpineRecommendations = lazyLoad(() => import('@/pages/patient-resources/AgeSpecificSpineRecommendations'));
const YouthfulSpine = lazyLoad(() => import('@/pages/patient-resources/YouthfulSpine'));

const CervicalDiscReplacement = lazyLoad(() => import('@/pages/expertise/CervicalDiscReplacement'));
const LumbarDiscReplacement = lazyLoad(() => import('@/pages/expertise/LumbarDiscReplacement'));
const ImageGuidedSurgery = lazyLoad(() => import('@/pages/expertise/ImageGuidedSurgery'));
const RoboticSpineSurgery = lazyLoad(() => import('@/pages/expertise/RoboticSpineSurgery'));
const Medicolegal = lazyLoad(() => import('@/pages/Medicolegal'));
const Locations = lazyLoad(() => import('@/pages/Locations'));
const LocationDetail = lazyLoad(() => import('@/pages/locations/LocationDetail'));
const SurreyHillsLocation = lazyLoad(() => import('@/pages/locations/surrey-hills'));
const MorningtonLocation = lazyLoad(() => import('@/pages/locations/mornington'));
const FrankstonLocation = lazyLoad(() => import('@/pages/locations/frankston'));
const LangwarrinLocation = lazyLoad(() => import('@/pages/locations/langwarrin'));
const BundooraLocation = lazyLoad(() => import('@/pages/locations/bundoora'));
const WerribeeLocation = lazyLoad(() => import('@/pages/locations/werribee'));
const HeidelbergLocation = lazyLoad(() => import('@/pages/locations/heidelberg'));
const MooneePondsLocation = lazyLoad(() => import('@/pages/locations/moonee-ponds'));
const SunburyLocation = lazyLoad(() => import('@/pages/locations/sunbury'));
const DandenongLocation = lazyLoad(() => import('@/pages/locations/dandenong'));
const WantirnaLocation = lazyLoad(() => import('@/pages/locations/wantirna'));
const Faq = lazyLoad(() => import('@/pages/Faq'));
const Contact = lazyLoad(() => import('@/pages/Contact'));
const PrivacyPolicy = lazyLoad(() => import('@/pages/PrivacyPolicy'));
const TermsConditions = lazyLoad(() => import('@/pages/TermsConditions'));
const GPResources = lazyLoad(() => import('@/pages/GPResources'));
const ReferralProtocols = lazyLoad(() => import('@/pages/gp-resources/ReferralProtocols'));
const Diagnostics = lazyLoad(() => import('@/pages/gp-resources/Diagnostics'));
const CareCoordination = lazyLoad(() => import('@/pages/gp-resources/CareCoordination'));
const Emergencies = lazyLoad(() => import('@/pages/gp-resources/Emergencies'));
const NotFound = lazyLoad(() => import('@/pages/NotFound'));

// Define route structure
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

// Define base routes (without language prefix)
export const baseRoutes: RouteConfig[] = [
  { path: "/", element: <Index /> },
  { path: "/appointments", element: <Appointments /> },
  { path: "/appointment-booking", element: <AppointmentBooking /> },
  { path: "/expertise", element: <Expertise /> },
  { path: "/patient-resources", element: <PatientResources /> },
  { path: "/patient-resources/spine-health-app", element: <Navigate to="/patient-resources/individual-spine-health-programme" replace /> },
  { path: "/patient-resources/condition-information", element: <ConditionInformation /> },
  { path: "/patient-resources/spine-conditions-library", element: <SpineConditionsLibrary /> },
  { path: "/patient-resources/conditions/herniated-disc", element: <HerniatedDisc /> },
  { path: "/patient-resources/conditions/spinal-stenosis", element: <SpinalStenosis /> },
  { path: "/patient-resources/conditions/sciatica", element: <Sciatica /> },
  { path: "/patient-resources/conditions/radiculopathy", element: <Radiculopathy /> },
  { path: "/patient-resources/conditions/arthrosis", element: <Arthrosis /> },
  { path: "/patient-resources/conditions/discopathy", element: <Discopathy /> },
  { path: "/patient-resources/conditions/facet-arthropathy", element: <FacetArthropathy /> },
  { path: "/patient-resources/conditions/sacroiliac-arthropathy", element: <SacroiliacArthropathy /> },
  { path: "/patient-resources/conditions/piriformis-syndrome", element: <PiriformisSyndrome /> },
  { path: "/patient-resources/conditions/thoracic-outlet-syndrome", element: <ThoracicOutletSyndrome /> },
  { path: "/patient-resources/conditions/occipital-neuralgia", element: <OccipitalNeuralgia /> },
  { path: "/patient-resources/conditions/spondylosis", element: <Spondylosis /> },
  { path: "/patient-resources/conditions/pars-defects", element: <ParsDefects /> },
  { path: "/patient-resources/exercise-library", element: <ExerciseLibrary /> },
  { path: "/patient-resources/assessment-tools", element: <Navigate to="/patient-resources/individual-spine-health-programme" replace /> },
  { path: "/patient-resources/patient-dashboard", element: <Navigate to="/patient-resources/individual-spine-health-programme" replace /> },
  { path: "/patient-resources/comprehensive-solution", element: <Navigate to="/patient-resources/individual-spine-health-programme" replace /> },
  { path: "/patient-resources/individual-spine-health-program", element: <Navigate to="/patient-resources/individual-spine-health-programme" replace /> },
  { path: "/patient-resources/individual-spine-health-programme", element: <IndividualSpineHealthProgramme /> },
  { path: "/patient-resources/spine-and-brain-health", element: <SpineAndBrainHealth /> },
  { path: "/patient-resources/cervical-spine-injury", element: <CervicalSpineInjury /> },
  { path: "/patient-resources/cervical-spine-exercises", element: <CervicalSpineExercises /> },
  { path: "/patient-resources/spine-safe-exercises", element: <SpineSafeExercises /> },
  { path: "/patient-resources/exercise-pain-medication-risks", element: <ExercisePainMedRisks /> },
  { path: "/patient-resources/age-specific-spine-recommendations", element: <AgeSpecificSpineRecommendations /> },
  { path: "/patient-resources/youthful-spine", element: <YouthfulSpine /> },
  { path: "/patient-resources/lifestyle-modifications", element: <LifestyleModifications /> },

  { path: "/technologies", element: <Navigate to="/expertise" replace /> },
  { path: "/expertise/technologies", element: <Navigate to="/expertise" replace /> },
  { path: "/expertise/cervical-disc-replacement", element: <CervicalDiscReplacement /> },
  { path: "/expertise/lumbar-disc-replacement", element: <LumbarDiscReplacement /> },
  { path: "/expertise/image-guided-surgery", element: <ImageGuidedSurgery /> },
  { path: "/expertise/robotic-spine-surgery", element: <RoboticSpineSurgery /> },
  { path: "/medicolegal", element: <Medicolegal /> },
  { path: "/locations", element: <Locations /> },
  { path: "/locations/surrey-hills", element: <SurreyHillsLocation /> },
  { path: "/locations/mornington", element: <MorningtonLocation /> },
  { path: "/locations/frankston", element: <FrankstonLocation /> },
  { path: "/locations/langwarrin", element: <LangwarrinLocation /> },
  { path: "/locations/bundoora", element: <BundooraLocation /> },
  { path: "/locations/werribee", element: <WerribeeLocation /> },
  { path: "/locations/heidelberg", element: <HeidelbergLocation /> },
  { path: "/locations/moonee-ponds", element: <MooneePondsLocation /> },
  { path: "/locations/sunbury", element: <SunburyLocation /> },
  { path: "/locations/dandenong", element: <DandenongLocation /> },
  { path: "/locations/wantirna", element: <WantirnaLocation /> },
  { path: "/locations/:location", element: <LocationDetail /> },
  { path: "/faq", element: <Faq /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-conditions", element: <TermsConditions /> },
  { path: "/gp-resources", element: <GPResources /> },
  { path: "/gp-resources/referral-protocols", element: <ReferralProtocols /> },
  { path: "/gp-resources/diagnostics", element: <Diagnostics /> },
  { path: "/gp-resources/care-coordination", element: <CareCoordination /> },
  { path: "/gp-resources/emergencies", element: <Emergencies /> },
  { path: "*", element: <NotFound /> }
];

// Generate language-specific routes
export const generateLanguageRoutes = (lang: string): RouteConfig[] => {
  return baseRoutes.map(route => {
    // Skip the catch-all route
    if (route.path === "*") {
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

// Combine all routes
export const getAllRoutes = (): RouteConfig[] => {
  const enRoutes = generateLanguageRoutes('en');
  const zhRoutes = generateLanguageRoutes('zh');

  return [...baseRoutes, ...enRoutes, ...zhRoutes];
};
