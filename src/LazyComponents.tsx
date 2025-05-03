import { lazy } from 'react';

// Main pages - frequently accessed pages should be loaded individually
export const LazyIndex = lazy(() => import('./pages/Index'));
export const LazyAppointments = lazy(() => import('./pages/Appointments'));
export const LazyAppointmentBooking = lazy(() => import('./pages/AppointmentBooking'));
export const LazyExpertise = lazy(() => import('./pages/Expertise'));
export const LazyPatientResources = lazy(() => import('./pages/PatientResources'));
export const LazyMedicolegal = lazy(() => import('./pages/Medicolegal'));
export const LazyLocations = lazy(() => import('./pages/Locations'));
export const LazyFaq = lazy(() => import('./pages/Faq'));
export const LazyContact = lazy(() => import('./pages/Contact'));

// Legal pages - group these together as they're less frequently accessed
export const LazyPrivacyPolicy = lazy(() =>
  import(/* webpackChunkName: "legal" */ './pages/PrivacyPolicy')
);
export const LazyTermsConditions = lazy(() =>
  import(/* webpackChunkName: "legal" */ './pages/TermsConditions')
);
export const LazyNotFound = lazy(() => import('./pages/NotFound'));

// Patient Resources pages - group by category
export const LazyConditionInformation = lazy(() =>
  import(/* webpackChunkName: "patient-resources" */ './pages/patient-resources/ConditionInformation')
);
export const LazyExerciseLibrary = lazy(() =>
  import(/* webpackChunkName: "patient-resources" */ './pages/patient-resources/ExerciseLibrary')
);
export const LazyLifestyleModifications = lazy(() =>
  import(/* webpackChunkName: "patient-resources" */ './pages/patient-resources/LifestyleModifications')
);
export const LazySpineConditionsLibrary = lazy(() =>
  import(/* webpackChunkName: "patient-resources" */ './pages/patient-resources/SpineConditionsLibrary')
);
export const LazyIndividualSpineHealthProgram = lazy(() =>
  import(/* webpackChunkName: "patient-resources" */ './pages/patient-resources/IndividualSpineHealthProgram')
);

// Expertise pages - group these together as they're related
export const LazyCervicalDiscReplacement = lazy(() =>
  import(/* webpackChunkName: "expertise" */ './pages/expertise/CervicalDiscReplacement')
);
export const LazyLumbarDiscReplacement = lazy(() =>
  import(/* webpackChunkName: "expertise" */ './pages/expertise/LumbarDiscReplacement')
);
export const LazyImageGuidedSurgery = lazy(() =>
  import(/* webpackChunkName: "expertise" */ './pages/expertise/ImageGuidedSurgery')
);
export const LazyRoboticSpineSurgery = lazy(() =>
  import(/* webpackChunkName: "expertise" */ './pages/expertise/RoboticSpineSurgery')
);

// Location pages - common location component
export const LazyLocationDetail = lazy(() => import('./pages/locations/LocationDetail'));

// Group location pages by region to reduce the number of chunks
// Melbourne Metro locations
export const LazySurreyHillsLocation = lazy(() =>
  import(/* webpackChunkName: "locations-metro" */ './pages/locations/surrey-hills')
);
export const LazyHeidelbergLocation = lazy(() =>
  import(/* webpackChunkName: "locations-metro" */ './pages/locations/heidelberg')
);
export const LazyBundooraLocation = lazy(() =>
  import(/* webpackChunkName: "locations-metro" */ './pages/locations/bundoora')
);
export const LazyMooneePondsLocation = lazy(() =>
  import(/* webpackChunkName: "locations-metro" */ './pages/locations/moonee-ponds')
);

// Outer Melbourne locations
export const LazySunburyLocation = lazy(() =>
  import(/* webpackChunkName: "locations-outer" */ './pages/locations/sunbury')
);
export const LazyWerribeeLocation = lazy(() =>
  import(/* webpackChunkName: "locations-outer" */ './pages/locations/werribee')
);
export const LazyDandenongLocation = lazy(() =>
  import(/* webpackChunkName: "locations-outer" */ './pages/locations/dandenong')
);
export const LazyWantirnaLocation = lazy(() =>
  import(/* webpackChunkName: "locations-outer" */ './pages/locations/wantirna')
);

// Peninsula locations
export const LazyMorningtonLocation = lazy(() =>
  import(/* webpackChunkName: "locations-peninsula" */ './pages/locations/mornington')
);
export const LazyFrankstonLocation = lazy(() =>
  import(/* webpackChunkName: "locations-peninsula" */ './pages/locations/frankston')
);

// Test pages
export const LazyTestImages = lazy(() => import('./pages/TestImages'));
