# Sciatica Page Documentation

**URL**: `/patient-resources/conditions/sciatica`  
**File**: `src/pages/patient-resources/conditions/Sciatica.tsx`  
**Type**: Medical Condition Page  
**Priority**: High

## Page Overview

The sciatica page provides comprehensive information about sciatic nerve pain, including anatomy, causes, symptoms, diagnosis, treatment options, and recovery strategies for patients experiencing sciatica.

## Content Sections

### 1. Condition Overview
**Purpose**: Explain sciatica and sciatic nerve anatomy

**Content Elements**:
- **Sciatic Nerve Anatomy**
  - Nerve pathway and distribution
  - Spinal nerve roots (L4-S3)
  - Anatomical variations
  - Functional importance

- **Sciatica Definition**
  - Nerve pain characteristics
  - Radicular pain patterns
  - Neurological symptoms
  - Functional impact

### 2. Causes and Mechanisms
**Purpose**: Educate about sciatica causes

**Causative Factors**:
- **Disc-Related Causes**
  - Herniated disc compression
  - Disc bulge pressure
  - Disc degeneration
  - Disc fragment migration

- **Spinal Stenosis**
  - Canal narrowing
  - Lateral recess stenosis
  - Foraminal stenosis
  - Ligamentum flavum thickening

### 3. Symptoms and Presentation
**Purpose**: Help patients identify sciatica symptoms

**Symptom Categories**:
- **Pain Characteristics**
  - Sharp, shooting pain
  - Burning sensations
  - Electric shock-like pain
  - Deep aching discomfort

- **Neurological Symptoms**
  - Numbness and tingling
  - Muscle weakness
  - Reflex changes
  - Sensory alterations

### 4. Diagnosis and Assessment
**Purpose**: Explain diagnostic procedures

**Diagnostic Methods**:
- **Clinical Examination**
  - Straight leg raise test
  - Neurological assessment
  - Reflex testing
  - Sensory evaluation

- **Imaging Studies**
  - MRI evaluation
  - CT scanning
  - X-ray assessment
  - Electrodiagnostic testing

### 5. Treatment Options
**Purpose**: Present comprehensive treatment approaches

**Treatment Categories**:
- **Conservative Treatment**
  - Rest and activity modification
  - Physical therapy
  - Pain medication
  - Epidural injections

- **Advanced Interventions**
  - Nerve blocks
  - Radiofrequency ablation
  - Surgical decompression
  - Minimally invasive procedures

### 6. Recovery and Prevention
**Purpose**: Guide recovery and prevention strategies

**Recovery Elements**:
- **Acute Phase Management**
  - Pain control strategies
  - Activity guidelines
  - Positioning techniques
  - Early mobilization

- **Prevention Strategies**
  - Core strengthening
  - Flexibility maintenance
  - Proper body mechanics
  - Lifestyle modifications

## Technical Implementation

### Medical Content Structure
```typescript
interface SciaticaInfo {
  nervePathway: NervePathway;
  causes: SciaticaCause[];
  symptoms: SymptomProfile;
  diagnosis: DiagnosticTest[];
  treatments: TreatmentOption[];
  recovery: RecoveryPhase[];
  prevention: PreventionStrategy[];
}
```

This comprehensive sciatica page provides patients with detailed information about sciatic nerve pain, supporting understanding and informed treatment decisions.
