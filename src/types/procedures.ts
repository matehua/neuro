/**
 * Comprehensive type definitions for medical procedures
 * Provides strict typing and data validation
 */

// Base procedure interface with required fields
export interface BaseProcedure {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
}

// Procedure categories
export type ProcedureCategory =
  | 'brain-surgery'
  | 'spine-surgery'
  | 'peripheral-nerve'
  | 'pediatric-neurosurgery'
  | 'functional-neurosurgery'
  | 'tumor-surgery'
  | 'vascular-neurosurgery'
  | 'trauma-surgery';

// Extended procedure interface with all possible fields
export interface ProcedureProps extends BaseProcedure {
  consultationFee: number;
  patientType: string;
  recoveryTime: string;
  benefits: string[];

  // Optional fields for enhanced functionality
  price?: number;           // Alternative to consultationFee for backward compatibility
  complexity?: number;      // Procedure complexity rating (1-10)
  features?: string[];      // Alternative to benefits for backward compatibility
  duration?: string;        // Procedure duration
  anesthesia?: 'local' | 'general' | 'sedation';
  category?: ProcedureCategory;
  tags?: string[];
  isMinimallyInvasive?: boolean;
  successRate?: number;     // Success rate percentage
  riskLevel?: 'low' | 'medium' | 'high';
  prerequisites?: string[];
  contraindications?: string[];
  followUpRequired?: boolean;
  hospitalStay?: string;
  equipmentUsed?: string[];
  surgeonSpecialty?: string[];
}

// Raw procedure data that might come from APIs or databases
export interface RawProcedureData {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  consultationFee?: number;
  price?: number;
  patientType?: string;
  recoveryTime?: string | number;
  benefits?: string[];
  features?: string[];
  complexity?: number;
  duration?: string;
  anesthesia?: string;
  category?: string;
  tags?: string[];
  isMinimallyInvasive?: boolean;
  successRate?: number;
  riskLevel?: string;
  prerequisites?: string[];
  contraindications?: string[];
  followUpRequired?: boolean;
  hospitalStay?: string;
  equipmentUsed?: string[];
  surgeonSpecialty?: string[];
}

// Procedure filter options
export interface ProcedureFilters {
  location?: string;
  complexity?: number;
  recoveryTimeMin?: number;
  recoveryTimeMax?: number;
  category?: ProcedureCategory;
  priceMin?: number;
  priceMax?: number;
  isMinimallyInvasive?: boolean;
  riskLevel?: ProcedureProps['riskLevel'];
  anesthesia?: ProcedureProps['anesthesia'];
}

// Procedure search and sort options
export interface ProcedureSearchOptions {
  query?: string;
  filters?: ProcedureFilters;
  sortBy?: 'name' | 'price' | 'complexity' | 'recoveryTime' | 'successRate';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

// Type guards for runtime validation
export function isValidProcedureCategory(category: string): category is ProcedureCategory {
  const validCategories: ProcedureCategory[] = [
    'brain-surgery',
    'spine-surgery',
    'peripheral-nerve',
    'pediatric-neurosurgery',
    'functional-neurosurgery',
    'tumor-surgery',
    'vascular-neurosurgery',
    'trauma-surgery'
  ];
  return validCategories.includes(category as ProcedureCategory);
}

export function isValidAnesthesiaType(type: string): type is ProcedureProps['anesthesia'] {
  return ['local', 'general', 'sedation'].includes(type);
}

export function isValidRiskLevel(level: string): level is ProcedureProps['riskLevel'] {
  return ['low', 'medium', 'high'].includes(level);
}

// Type guard to validate procedure data structure
export function isProcedurePropsValid(data: unknown): data is RawProcedureData {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;

  // Check required fields
  const hasRequiredFields = (
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.image === 'string' &&
    typeof obj.location === 'string'
  );

  if (!hasRequiredFields) return false;

  // Check that at least one price field exists
  const hasPrice = (
    typeof obj.consultationFee === 'number' ||
    typeof obj.price === 'number'
  );

  if (!hasPrice) return false;

  // Check recovery time format
  const hasValidRecoveryTime = (
    typeof obj.recoveryTime === 'string' ||
    typeof obj.recoveryTime === 'number' ||
    obj.recoveryTime === undefined
  );

  if (!hasValidRecoveryTime) return false;

  // Check benefits/features array
  const hasBenefits = (
    Array.isArray(obj.benefits) ||
    Array.isArray(obj.features) ||
    (obj.benefits === undefined && obj.features === undefined)
  );

  return hasBenefits;
}

// Utility function to normalize procedure data
export function normalizeProcedureData(data: RawProcedureData): ProcedureProps {
  // Validate input data
  if (!isProcedurePropsValid(data)) {
    throw new Error(`Invalid procedure data: ${JSON.stringify(data)}`);
  }

  // Normalize recovery time
  const normalizeRecoveryTime = (time: string | number | undefined): string => {
    if (time === undefined) return 'Not specified';
    if (typeof time === 'number') return `${time} days`;
    return time;
  };

  // Normalize category
  const normalizeCategory = (category: string | undefined): ProcedureCategory | undefined => {
    if (!category) return undefined;
    return isValidProcedureCategory(category) ? category : undefined;
  };

  // Normalize anesthesia type
  const normalizeAnesthesia = (anesthesia: string | undefined): ProcedureProps['anesthesia'] | undefined => {
    if (!anesthesia) return undefined;
    return isValidAnesthesiaType(anesthesia) ? anesthesia : undefined;
  };

  // Normalize risk level
  const normalizeRiskLevel = (riskLevel: string | undefined): ProcedureProps['riskLevel'] | undefined => {
    if (!riskLevel) return undefined;
    return isValidRiskLevel(riskLevel) ? riskLevel : undefined;
  };

  return {
    // Required fields
    id: data.id,
    name: data.name,
    description: data.description,
    image: data.image,
    location: data.location,

    // Normalized required fields
    consultationFee: data.consultationFee || data.price || 0,
    patientType: data.patientType || 'All Patients',
    recoveryTime: normalizeRecoveryTime(data.recoveryTime),
    benefits: data.benefits || data.features || [],

    // Optional fields with fallbacks
    price: data.price,
    complexity: data.complexity,
    features: data.features,
    duration: data.duration,
    anesthesia: normalizeAnesthesia(data.anesthesia),
    category: normalizeCategory(data.category),
    tags: data.tags,
    isMinimallyInvasive: data.isMinimallyInvasive,
    successRate: data.successRate,
    riskLevel: normalizeRiskLevel(data.riskLevel),
    prerequisites: data.prerequisites,
    contraindications: data.contraindications,
    followUpRequired: data.followUpRequired,
    hospitalStay: data.hospitalStay,
    equipmentUsed: data.equipmentUsed,
    surgeonSpecialty: data.surgeonSpecialty
  };
}

// Utility function to validate and filter procedures
export function validateProcedures(procedures: unknown[]): ProcedureProps[] {
  return procedures
    .filter(isProcedurePropsValid)
    .map(normalizeProcedureData);
}

/**
 * Safe procedure data access with null checks
 */
export function safeProcedureAccess<K extends keyof ProcedureProps>(
  procedure: ProcedureProps | null | undefined,
  key: K,
  fallback?: ProcedureProps[K]
): ProcedureProps[K] | undefined {
  if (!procedure) return fallback;
  return procedure[key] ?? fallback;
}

/**
 * Enhanced procedure validation with runtime checks
 */
export function validateProcedureData(data: unknown): boolean {
  if (!isProcedurePropsValid(data)) return false;

  const procedure = data as RawProcedureData;

  // Additional runtime validations
  if (procedure.complexity && (procedure.complexity < 1 || procedure.complexity > 10)) {
    return false;
  }

  if (procedure.successRate && (procedure.successRate < 0 || procedure.successRate > 100)) {
    return false;
  }

  return true;
}

/**
 * Create a safe procedure object with defaults
 */
export function createSafeProcedure(data: Partial<RawProcedureData>): ProcedureProps | null {
  // Check required fields
  if (!data.id || !data.name || !data.description || !data.image || !data.location) {
    return null;
  }

  const rawData: RawProcedureData = {
    id: data.id,
    name: data.name,
    description: data.description,
    image: data.image,
    location: data.location,
    consultationFee: data.consultationFee || data.price || 0,
    patientType: data.patientType || 'All Patients',
    recoveryTime: data.recoveryTime || 'Not specified',
    benefits: data.benefits || [],
    ...data
  };

  try {
    return normalizeProcedureData(rawData);
  } catch {
    return null;
  }
}