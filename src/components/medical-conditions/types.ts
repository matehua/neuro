import { ReactNode } from 'react';

/**
 * Medical Conditions Component Types
 * Shared type definitions for medical condition pages and components
 */

// Base condition information
export interface ConditionInfo {
  name: string;
  description: string;
  prevalence: string;
  onsetAge: string;
  commonLocations: string;
  management: string;
}

// Quick facts for condition overview
export interface QuickFact {
  icon: ReactNode;
  title: string;
  value: string;
}

// Degeneration stage information
export interface DegenerationStage {
  stage: number;
  title: string;
  characteristics: string[];
  severity: 'normal' | 'mild' | 'moderate' | 'severe' | 'critical';
}

// Anatomical component information
export interface AnatomicalComponent {
  name: string;
  description: string;
}

// Structural change information
export interface StructuralChange {
  type: 'biochemical' | 'structural';
  title: string;
  description: string;
}

// Cause/Risk factor information
export interface CauseRiskFactor {
  category: 'primary' | 'modifiable' | 'non-modifiable';
  title: string;
  description: string;
  icon: ReactNode;
}

// Symptom information
export interface Symptom {
  type: 'primary' | 'secondary' | 'neurological' | 'functional';
  title: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
  icon: ReactNode;
}

// Diagnostic method information
export interface DiagnosticMethod {
  type: 'clinical' | 'imaging' | 'laboratory' | 'functional';
  name: string;
  description: string;
  accuracy: string;
  icon: ReactNode;
}

// Treatment option information
export interface TreatmentOption {
  category: 'conservative' | 'minimally-invasive' | 'surgical';
  name: string;
  description: string;
  effectiveness: string;
  duration: string;
  icon: ReactNode;
}

// Exercise information
export interface Exercise {
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  frequency: string;
  benefits: string[];
}

// Prevention strategy information
export interface PreventionStrategy {
  category: 'lifestyle' | 'ergonomic' | 'exercise' | 'medical';
  title: string;
  description: string;
  effectiveness: string;
  icon: ReactNode;
}

// Prognosis information
export interface PrognosisInfo {
  timeframe: string;
  outcome: string;
  factors: string[];
}

// Complete condition data structure
export interface ConditionData {
  info: ConditionInfo;
  quickFacts: QuickFact[];
  degenerationStages?: DegenerationStage[];
  anatomicalComponents?: AnatomicalComponent[];
  structuralChanges?: StructuralChange[];
  causes: CauseRiskFactor[];
  symptoms: Symptom[];
  diagnostics: DiagnosticMethod[];
  treatments: TreatmentOption[];
  exercises?: Exercise[];
  prevention: PreventionStrategy[];
  prognosis: PrognosisInfo[];
}

// Component props interfaces
export interface ConditionHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  quickFacts: QuickFact[];
}

export interface ConditionOverviewProps {
  title: string;
  description: string[];
  keyPoints: string[];
  image?: string;
}

export interface DegenerationProcessProps {
  stages: DegenerationStage[];
  anatomicalComponents: AnatomicalComponent[];
  structuralChanges: StructuralChange[];
}

export interface CausesRiskFactorsProps {
  causes: CauseRiskFactor[];
}

export interface SymptomsProps {
  symptoms: Symptom[];
}

export interface DiagnosticsProps {
  methods: DiagnosticMethod[];
}

export interface TreatmentOptionsProps {
  treatments: TreatmentOption[];
}

export interface ExercisesProps {
  exercises: Exercise[];
}

export interface PreventionProps {
  strategies: PreventionStrategy[];
}

export interface PrognosisProps {
  prognosis: PrognosisInfo[];
}

// Utility types
export type ConditionSection = 
  | 'overview'
  | 'degeneration'
  | 'causes'
  | 'symptoms'
  | 'diagnostics'
  | 'treatments'
  | 'exercises'
  | 'prevention'
  | 'prognosis';

export interface ConditionPageProps {
  conditionData: ConditionData;
  sections?: ConditionSection[];
  showAssessment?: boolean;
  showBooking?: boolean;
}
