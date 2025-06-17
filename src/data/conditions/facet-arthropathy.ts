import React from 'react';

import { ConditionData } from '@/components/medical-conditions/types';

/**
 * Facet Arthropathy Condition Data
 * Comprehensive data for facet arthropathy/facet joint syndrome
 */

import {
  Users,
  TrendingUp,
  MapPin,
  CheckCircle,
  Clock,
  Activity,
  AlertTriangle,
  Brain,
  Heart,
  Shield,
  Target,
  Zap,
  Eye,
  Gauge,
  Network,
  Disc,
  Stethoscope,
  Microscope,
  Layers,
  Settings,
  Bone
} from 'lucide-react';

export const facetArthropathyData: ConditionData = {
  info: {
    name: 'Facet Arthropathy (Facet Joint Syndrome)',
    description: 'Understanding facet arthropathy and facet joint syndrome: causes, symptoms, diagnosis, and comprehensive treatment options from conservative management to advanced interventional procedures for cervical, thoracic, and lumbar spine.',
    prevalence: '15-45% of back pain',
    onsetAge: '40-70 years old',
    commonLocations: 'Lumbar spine',
    management: '70-90% improvement'
  },

  quickFacts: [
    {
      icon: React.createElement(Users, { className: "h-8 w-8" }),
      title: 'Prevalence',
      value: '15-45% of back pain'
    },
    {
      icon: React.createElement(TrendingUp, { className: "h-8 w-8" }),
      title: 'Peak Age',
      value: '40-70 years old'
    },
    {
      icon: React.createElement(MapPin, { className: "h-8 w-8" }),
      title: 'Most Common',
      value: 'Lumbar spine'
    },
    {
      icon: React.createElement(CheckCircle, { className: "h-8 w-8" }),
      title: 'Treatment Success',
      value: '70-90% improvement'
    }
  ],

  degenerationStages: [
    {
      stage: 1,
      title: 'Normal Facet Joint',
      characteristics: [
        'Smooth cartilage surfaces',
        'Normal joint space',
        'Intact joint capsule',
        'No inflammation'
      ],
      severity: 'normal'
    },
    {
      stage: 2,
      title: 'Early Degeneration',
      characteristics: [
        'Surface cartilage roughening',
        'Minimal joint space narrowing',
        'Slight capsular thickening',
        'Mild inflammation'
      ],
      severity: 'mild'
    },
    {
      stage: 3,
      title: 'Moderate Arthropathy',
      characteristics: [
        'Cartilage thinning and erosion',
        'Noticeable joint space narrowing',
        'Subchondral bone sclerosis',
        'Moderate inflammation'
      ],
      severity: 'moderate'
    },
    {
      stage: 4,
      title: 'Advanced Arthropathy',
      characteristics: [
        'Severe cartilage loss',
        'Significant joint space narrowing',
        'Osteophyte formation',
        'Chronic inflammation'
      ],
      severity: 'severe'
    },
    {
      stage: 5,
      title: 'End-Stage Disease',
      characteristics: [
        'Complete cartilage loss',
        'Bone-on-bone contact',
        'Large osteophytes',
        'Joint deformity'
      ],
      severity: 'critical'
    }
  ],

  anatomicalComponents: [
    {
      name: 'Articular Surfaces',
      description: 'Smooth cartilage-covered surfaces of superior and inferior articular processes that form the synovial joint between adjacent vertebrae.'
    },
    {
      name: 'Joint Capsule',
      description: 'Fibrous capsule surrounding the joint, lined with synovial membrane that produces lubricating synovial fluid.'
    },
    {
      name: 'Cartilage',
      description: 'Hyaline cartilage covering the articular surfaces, providing smooth movement and shock absorption during spinal motion.'
    },
    {
      name: 'Innervation',
      description: 'Rich nerve supply from medial branches of dorsal rami, making these joints significant pain generators when degenerated.'
    }
  ],

  structuralChanges: [
    {
      type: 'cartilage',
      title: 'Cartilage Degeneration',
      description: 'Progressive loss of smooth articular cartilage'
    },
    {
      type: 'bone',
      title: 'Subchondral Sclerosis',
      description: 'Hardening of bone beneath cartilage'
    },
    {
      type: 'bone',
      title: 'Osteophyte Formation',
      description: 'Bone spur development around joint margins'
    },
    {
      type: 'soft-tissue',
      title: 'Capsular Thickening',
      description: 'Joint capsule becomes thick and fibrotic'
    },
    {
      type: 'soft-tissue',
      title: 'Synovial Inflammation',
      description: 'Chronic inflammation of joint lining'
    },
    {
      type: 'space',
      title: 'Joint Space Narrowing',
      description: 'Progressive loss of space between joint surfaces'
    }
  ],

  causes: [
    {
      category: 'primary',
      title: 'Age-Related Degeneration',
      description: 'Natural aging process leads to cartilage wear, joint space narrowing, and osteophyte formation in facet joints over time.',
      icon: React.createElement(Clock, { className: "h-5 w-5" })
    },
    {
      category: 'primary',
      title: 'Biomechanical Stress',
      description: 'Repetitive loading, poor posture, and abnormal spinal mechanics accelerate facet joint degeneration.',
      icon: React.createElement(Activity, { className: "h-5 w-5" })
    },
    {
      category: 'modifiable',
      title: 'Lifestyle Factors',
      description: 'Obesity, sedentary lifestyle, poor posture, and repetitive activities contribute to accelerated joint degeneration.',
      icon: React.createElement(Heart, { className: "h-5 w-5" })
    },
    {
      category: 'non-modifiable',
      title: 'Genetic Predisposition',
      description: 'Family history and genetic factors influence susceptibility to arthritis and joint degeneration.',
      icon: React.createElement(Brain, { className: "h-5 w-5" })
    }
  ],

  symptoms: [
    {
      type: 'primary',
      title: 'Axial Back Pain',
      description: 'Deep, aching pain in the lower back, often worse with extension and rotation movements.',
      severity: 'moderate',
      icon: React.createElement(AlertTriangle, { className: "h-5 w-5" })
    },
    {
      type: 'primary',
      title: 'Morning Stiffness',
      description: 'Stiffness and reduced mobility, particularly in the morning or after prolonged inactivity.',
      severity: 'mild',
      icon: React.createElement(Shield, { className: "h-5 w-5" })
    },
    {
      type: 'referred',
      title: 'Referred Pain',
      description: 'Pain radiating to buttocks, hips, or thighs without true nerve root compression.',
      severity: 'moderate',
      icon: React.createElement(Zap, { className: "h-5 w-5" })
    },
    {
      type: 'functional',
      title: 'Activity Limitation',
      description: 'Difficulty with prolonged standing, walking, or activities requiring spinal extension.',
      severity: 'moderate',
      icon: React.createElement(Target, { className: "h-5 w-5" })
    }
  ],

  diagnostics: [
    {
      type: 'clinical',
      name: 'Physical Examination',
      description: 'Assessment of range of motion, pain patterns, and specific facet joint provocation tests.',
      accuracy: '70-80%',
      icon: React.createElement(Stethoscope, { className: "h-5 w-5" })
    },
    {
      type: 'imaging',
      name: 'MRI Scan',
      description: 'Shows facet joint degeneration, inflammation, and associated soft tissue changes.',
      accuracy: '85-90%',
      icon: React.createElement(Eye, { className: "h-5 w-5" })
    },
    {
      type: 'imaging',
      name: 'CT Scan',
      description: 'Excellent visualization of bony changes, osteophytes, and joint space narrowing.',
      accuracy: '90-95%',
      icon: React.createElement(Layers, { className: "h-5 w-5" })
    },
    {
      type: 'diagnostic',
      name: 'Facet Joint Injection',
      description: 'Diagnostic injection to confirm facet joint as pain source with local anesthetic.',
      accuracy: '90-95%',
      icon: React.createElement(Microscope, { className: "h-5 w-5" })
    }
  ],

  treatments: [
    {
      category: 'conservative',
      name: 'Physical Therapy',
      description: 'Structured exercise program focusing on core strengthening, flexibility, and postural correction.',
      effectiveness: '60-70%',
      duration: '6-12 weeks',
      icon: React.createElement(Activity, { className: "h-5 w-5" })
    },
    {
      category: 'conservative',
      name: 'Anti-inflammatory Medications',
      description: 'NSAIDs and other medications to reduce inflammation and pain.',
      effectiveness: '50-60%',
      duration: 'As needed',
      icon: React.createElement(Shield, { className: "h-5 w-5" })
    },
    {
      category: 'minimally-invasive',
      name: 'Facet Joint Injections',
      description: 'Steroid injections directly into the facet joint to reduce inflammation and pain.',
      effectiveness: '70-85%',
      duration: '3-6 months',
      icon: React.createElement(Target, { className: "h-5 w-5" })
    },
    {
      category: 'minimally-invasive',
      name: 'Radiofrequency Ablation',
      description: 'Heat treatment of nerves supplying the facet joint to provide longer-lasting pain relief.',
      effectiveness: '80-90%',
      duration: '6-24 months',
      icon: React.createElement(Zap, { className: "h-5 w-5" })
    }
  ],

  prevention: [
    {
      category: 'lifestyle',
      title: 'Regular Exercise',
      description: 'Maintain core strength and spinal flexibility through regular exercise and movement.',
      effectiveness: 'High',
      icon: React.createElement(Activity, { className: "h-5 w-5" })
    },
    {
      category: 'ergonomic',
      title: 'Proper Posture',
      description: 'Maintain neutral spine alignment during daily activities and avoid prolonged poor postures.',
      effectiveness: 'High',
      icon: React.createElement(Shield, { className: "h-5 w-5" })
    },
    {
      category: 'lifestyle',
      title: 'Weight Management',
      description: 'Maintain healthy body weight to reduce mechanical stress on spinal joints.',
      effectiveness: 'Moderate',
      icon: React.createElement(Heart, { className: "h-5 w-5" })
    },
    {
      category: 'lifestyle',
      title: 'Activity Modification',
      description: 'Avoid repetitive activities that stress the spine and use proper body mechanics.',
      effectiveness: 'Moderate',
      icon: React.createElement(Settings, { className: "h-5 w-5" })
    }
  ],

  prognosis: [
    {
      timeframe: 'Short-term (3-6 months)',
      outcome: 'Good response to conservative treatment',
      factors: ['Early intervention', 'Patient compliance', 'Severity of arthropathy']
    },
    {
      timeframe: 'Medium-term (6-12 months)',
      outcome: 'Excellent response to interventional procedures',
      factors: ['Accurate diagnosis', 'Appropriate patient selection', 'Technique quality']
    },
    {
      timeframe: 'Long-term (1-5 years)',
      outcome: 'Variable depending on progression',
      factors: ['Lifestyle modifications', 'Activity level', 'Overall spinal health']
    }
  ]
};
