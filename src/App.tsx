
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Appointments from "./pages/Appointments";
import AppointmentBooking from "./pages/AppointmentBooking";
import Expertise from "./pages/Expertise";

import PatientResources from "./pages/PatientResources";

import ConditionInformation from "./pages/patient-resources/ConditionInformation";
import ExerciseLibrary from "./pages/patient-resources/ExerciseLibrary";
import LifestyleModifications from "./pages/patient-resources/LifestyleModifications";
import SpineConditionsLibrary from "./pages/patient-resources/SpineConditionsLibrary";
import IndividualSpineHealthProgram from "./pages/patient-resources/IndividualSpineHealthProgram";
import TestImages from "./pages/TestImages";
import CervicalDiscReplacement from "./pages/expertise/CervicalDiscReplacement";
import LumbarDiscReplacement from "./pages/expertise/LumbarDiscReplacement";
import ImageGuidedSurgery from "./pages/expertise/ImageGuidedSurgery";
import RoboticSpineSurgery from "./pages/expertise/RoboticSpineSurgery";
import Medicolegal from "./pages/Medicolegal";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/locations/LocationDetail.tsx";
import SurreyHillsLocation from "./pages/locations/surrey-hills";
import MorningtonLocation from "./pages/locations/mornington";
import FrankstonLocation from "./pages/locations/frankston";
import BundooraLocation from "./pages/locations/bundoora";
import WerribeeLocation from "./pages/locations/werribee";
import HeidelbergLocation from "./pages/locations/heidelberg";
import MooneePondsLocation from "./pages/locations/moonee-ponds";
import SunburyLocation from "./pages/locations/sunbury";
import DandenongLocation from "./pages/locations/dandenong";
import WantirnaLocation from "./pages/locations/wantirna";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageWrapper from "./components/LanguageWrapper";

// Create a react-query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Default routes (English) */}
            <Route path="/" element={<Index />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointment-booking" element={<AppointmentBooking />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/patient-resources" element={<PatientResources />} />
            <Route path="/patient-resources/spine-health-app" element={<Navigate to="/patient-resources/individual-spine-health-program" replace />} />
            <Route path="/patient-resources/condition-information" element={<ConditionInformation />} />
            <Route path="/patient-resources/spine-conditions-library" element={<SpineConditionsLibrary />} />
            <Route path="/patient-resources/exercise-library" element={<ExerciseLibrary />} />
            <Route path="/patient-resources/assessment-tools" element={<Navigate to="/patient-resources/individual-spine-health-program" replace />} />
            <Route path="/patient-resources/patient-dashboard" element={<Navigate to="/patient-resources/individual-spine-health-program" replace />} />
            <Route path="/patient-resources/comprehensive-solution" element={<Navigate to="/patient-resources/individual-spine-health-program" replace />} />
            <Route path="/patient-resources/individual-spine-health-program" element={<IndividualSpineHealthProgram />} />
            <Route path="/patient-resources/lifestyle-modifications" element={<LifestyleModifications />} />
            <Route path="/test-images" element={<TestImages />} />
            <Route path="/technologies" element={<Navigate to="/expertise" replace />} />
            <Route path="/expertise/technologies" element={<Navigate to="/expertise" replace />} />
            <Route path="/expertise/cervical-disc-replacement" element={<CervicalDiscReplacement />} />
            <Route path="/expertise/lumbar-disc-replacement" element={<LumbarDiscReplacement />} />
            <Route path="/expertise/image-guided-surgery" element={<ImageGuidedSurgery />} />
            <Route path="/expertise/robotic-spine-surgery" element={<RoboticSpineSurgery />} />
            <Route path="/medicolegal" element={<Medicolegal />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/surrey-hills" element={<SurreyHillsLocation />} />
            <Route path="/locations/mornington" element={<MorningtonLocation />} />
            <Route path="/locations/frankston" element={<FrankstonLocation />} />
            <Route path="/locations/bundoora" element={<BundooraLocation />} />
            <Route path="/locations/werribee" element={<WerribeeLocation />} />
            <Route path="/locations/heidelberg" element={<HeidelbergLocation />} />
            <Route path="/locations/moonee-ponds" element={<MooneePondsLocation />} />
            <Route path="/locations/sunbury" element={<SunburyLocation />} />
            <Route path="/locations/dandenong" element={<DandenongLocation />} />
            <Route path="/locations/wantirna" element={<WantirnaLocation />} />
            <Route path="/locations/:location" element={<LocationDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />

            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
            <Route path="/:lang/appointments" element={<LanguageWrapper><Appointments /></LanguageWrapper>} />
            <Route path="/:lang/appointment-booking" element={<LanguageWrapper><AppointmentBooking /></LanguageWrapper>} />
            <Route path="/:lang/expertise" element={<LanguageWrapper><Expertise /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources" element={<LanguageWrapper><PatientResources /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/spine-health-app" element={<LanguageWrapper><Navigate to={({ params }) => `/${params.lang}/patient-resources/individual-spine-health-program`} replace /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/condition-information" element={<LanguageWrapper><ConditionInformation /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/spine-conditions-library" element={<LanguageWrapper><SpineConditionsLibrary /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/exercise-library" element={<LanguageWrapper><ExerciseLibrary /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/assessment-tools" element={<LanguageWrapper><Navigate to={({ params }) => `/${params.lang}/patient-resources/individual-spine-health-program`} replace /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/patient-dashboard" element={<LanguageWrapper><Navigate to={({ params }) => `/${params.lang}/patient-resources/individual-spine-health-program`} replace /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/comprehensive-solution" element={<LanguageWrapper><Navigate to={({ params }) => `/${params.lang}/patient-resources/individual-spine-health-program`} replace /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/individual-spine-health-program" element={<LanguageWrapper><IndividualSpineHealthProgram /></LanguageWrapper>} />
            <Route path="/:lang/patient-resources/lifestyle-modifications" element={<LanguageWrapper><LifestyleModifications /></LanguageWrapper>} />
            <Route path="/:lang/technologies" element={<LanguageWrapper><Navigate to={({ params }) => `/${params.lang}/expertise`} replace /></LanguageWrapper>} />
            <Route path="/:lang/expertise/technologies" element={<LanguageWrapper><Navigate to={({ params }) => `/${params.lang}/expertise`} replace /></LanguageWrapper>} />
            <Route path="/:lang/expertise/cervical-disc-replacement" element={<LanguageWrapper><CervicalDiscReplacement /></LanguageWrapper>} />
            <Route path="/:lang/expertise/lumbar-disc-replacement" element={<LanguageWrapper><LumbarDiscReplacement /></LanguageWrapper>} />
            <Route path="/:lang/expertise/image-guided-surgery" element={<LanguageWrapper><ImageGuidedSurgery /></LanguageWrapper>} />
            <Route path="/:lang/expertise/robotic-spine-surgery" element={<LanguageWrapper><RoboticSpineSurgery /></LanguageWrapper>} />
            <Route path="/:lang/medicolegal" element={<LanguageWrapper><Medicolegal /></LanguageWrapper>} />
            <Route path="/:lang/locations" element={<LanguageWrapper><Locations /></LanguageWrapper>} />
            <Route path="/:lang/locations/surrey-hills" element={<LanguageWrapper><SurreyHillsLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/mornington" element={<LanguageWrapper><MorningtonLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/frankston" element={<LanguageWrapper><FrankstonLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/bundoora" element={<LanguageWrapper><BundooraLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/werribee" element={<LanguageWrapper><WerribeeLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/heidelberg" element={<LanguageWrapper><HeidelbergLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/moonee-ponds" element={<LanguageWrapper><MooneePondsLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/sunbury" element={<LanguageWrapper><SunburyLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/dandenong" element={<LanguageWrapper><DandenongLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/wantirna" element={<LanguageWrapper><WantirnaLocation /></LanguageWrapper>} />
            <Route path="/:lang/locations/:location" element={<LanguageWrapper><LocationDetail /></LanguageWrapper>} />
            <Route path="/:lang/faq" element={<LanguageWrapper><Faq /></LanguageWrapper>} />
            <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            <Route path="/:lang/privacy-policy" element={<LanguageWrapper><PrivacyPolicy /></LanguageWrapper>} />
            <Route path="/:lang/terms-conditions" element={<LanguageWrapper><TermsConditions /></LanguageWrapper>} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
