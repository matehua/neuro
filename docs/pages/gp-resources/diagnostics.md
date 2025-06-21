# GP Resources: Diagnostics Documentation

**URL**: `/gp-resources/diagnostics`
**File**: `src/pages/gp-resources/Diagnostics.tsx`
**Type**: GP Resource Page
**Priority**: High

## Page Overview

Comprehensive diagnostic resource page for General Practitioners, providing detailed information about neurosurgical diagnostic procedures, imaging protocols, and clinical assessment tools.

## Page Structure

### **Hero Section**
- **Title**: "Neurosurgical Diagnostics for GPs"
- **Subtitle**: "Comprehensive Diagnostic Guidelines and Protocols"
- **Background**: Medical imaging and diagnostic equipment
- **Quick Actions**: Download protocols, contact specialist

### **Content Sections**

#### 1. **Diagnostic Overview**
- Neurosurgical diagnostic principles
- Clinical assessment importance
- Imaging modality selection
- Diagnostic pathway algorithms

#### 2. **Clinical Assessment**
- Neurological examination protocols
- Red flag symptom identification
- Pain assessment scales
- Functional evaluation tools

#### 3. **Imaging Guidelines**
- **MRI Protocols**: Spine and brain imaging
- **CT Imaging**: Emergency and routine protocols
- **X-ray Guidelines**: When and how to order
- **Specialized Studies**: Myelography, discography

#### 4. **Spine Diagnostics**
- Cervical spine imaging protocols
- Lumbar spine assessment guidelines
- Thoracic spine evaluation
- Functional imaging considerations

#### 5. **Brain Diagnostics**
- Brain MRI protocols
- CT brain guidelines
- Angiography indications
- Functional brain imaging

#### 6. **Laboratory Studies**
- Relevant blood tests
- CSF analysis indications
- Tumor markers
- Inflammatory markers

#### 7. **Referral Criteria**
- Urgent referral indications
- Routine referral guidelines
- Imaging requirements
- Clinical documentation needs

## Components Used

```typescript
// Professional resource components
import StandardPageLayout from '@/components/StandardPageLayout';
import PageHeader from '@/components/PageHeader';
import SafeImage from '@/components/SafeImage';

// UI components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
```

## Key Features

### **Diagnostic Protocols**
- ✅ Evidence-based imaging guidelines
- ✅ Clinical assessment protocols
- ✅ Red flag identification
- ✅ Referral criteria algorithms

### **Professional Tools**
- ✅ Downloadable protocol sheets
- ✅ Clinical decision trees
- ✅ Assessment checklists
- ✅ Referral templates

### **Educational Content**
- ✅ Imaging interpretation guides
- ✅ Clinical correlation principles
- ✅ Cost-effective ordering
- ✅ Patient safety considerations

## SEO Configuration

```typescript
const diagnosticsSEO = {
  title: "Neurosurgical Diagnostics for GPs | Imaging Protocols - miNEURO",
  description: "Comprehensive diagnostic guidelines for GPs including MRI protocols, clinical assessment tools, and neurosurgical referral criteria. Evidence-based diagnostic pathways.",
  keywords: ["neurosurgical diagnostics", "GP imaging protocols", "spine MRI guidelines", "brain imaging", "neurological assessment"],
  canonical: "/gp-resources/diagnostics"
};
```

## Translation Support

```typescript
// Professional resource translations
t.gpResources.diagnostics = {
  hero: {
    title: "Neurosurgical Diagnostics for GPs",
    subtitle: "Comprehensive Diagnostic Guidelines and Protocols"
  },
  sections: {
    clinical: "Clinical Assessment",
    imaging: "Imaging Guidelines",
    spine: "Spine Diagnostics",
    brain: "Brain Diagnostics",
    laboratory: "Laboratory Studies",
    referral: "Referral Criteria"
  },
  protocols: {
    mri: "MRI Protocols",
    ct: "CT Imaging Guidelines",
    xray: "X-ray Protocols",
    specialized: "Specialized Studies"
  }
};
```

## Diagnostic Protocols

### **MRI Imaging Protocols**

#### **Spine MRI**
- **Cervical Spine**: T1, T2, STIR sequences
- **Lumbar Spine**: Sagittal and axial imaging
- **Thoracic Spine**: When indicated
- **Contrast**: Indications and protocols

#### **Brain MRI**
- **Routine Brain**: T1, T2, FLAIR sequences
- **Contrast Studies**: Gadolinium protocols
- **Functional MRI**: Specialized indications
- **Angiography**: Vascular imaging

### **CT Imaging Guidelines**

#### **Emergency CT**
- Head trauma protocols
- Acute neurological symptoms
- Post-operative monitoring
- Contraindications to MRI

#### **Routine CT**
- Bone detail assessment
- Pre-operative planning
- Follow-up imaging
- Screening protocols

### **Clinical Assessment Tools**

#### **Neurological Examination**
- Motor function assessment
- Sensory testing protocols
- Reflex examination
- Coordination testing

#### **Pain Assessment**
- Visual analog scales
- Functional disability indices
- Quality of life measures
- Work capacity evaluation

## Red Flag Symptoms

### **Immediate Referral Required**
- Cauda equina syndrome
- Progressive neurological deficit
- Severe trauma with neurological signs
- Suspected spinal cord compression

### **Urgent Referral (24-48 hours)**
- New onset severe headache
- Progressive weakness
- Bowel/bladder dysfunction
- Suspected tumor

### **Routine Referral**
- Chronic pain with imaging abnormalities
- Failed conservative management
- Diagnostic uncertainty
- Second opinion requests

## Laboratory Studies

### **Routine Tests**
- Complete blood count
- ESR and CRP
- Basic metabolic panel
- Coagulation studies

### **Specialized Tests**
- Tumor markers (when indicated)
- Autoimmune markers
- CSF analysis protocols
- Genetic testing considerations

## Implementation Status

- ✅ **Component**: Fully implemented
- ✅ **Content**: Comprehensive diagnostic protocols
- ✅ **Translations**: Complete bilingual support
- ✅ **SEO**: Optimized for GP searches
- ✅ **Accessibility**: Full WCAG 2.1 AA compliance

## Related Resources

- **[Referral Protocols](./referral-protocols.md)** - Referral guidelines
- **[Care Coordination](./care-coordination.md)** - Multidisciplinary care
- **[Emergencies](./emergencies.md)** - Emergency protocols
- **[GP Resources Overview](../gp-resources.md)** - All GP resources

## Professional Development

- ✅ **CME Credits**: Available for protocol review
- ✅ **Updates**: Regular protocol updates
- ✅ **Training**: Diagnostic workshops
- ✅ **Support**: Specialist consultation available

This page provides comprehensive diagnostic guidelines for GPs, ensuring appropriate and cost-effective neurosurgical diagnostic pathways while maintaining high standards of patient care.
