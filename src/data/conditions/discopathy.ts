import React from 'react';

import { ConditionData } from '@/components/medical-conditions/types';

/**
 * Discopathy Condition Data
 * Comprehensive data for discopathy/degenerative disc disease
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
  Layers
} from 'lucide-react';

export const discopathyData: ConditionData = {
  info: {
    name: 'Discopathy (Degenerative Disc Disease)',
    description: 'Understanding discopathy and degenerative disc disease: causes, symptoms, diagnosis, and comprehensive treatment options from conservative management to advanced surgical interventions for cervical, thoracic, and lumbar spine.',
    prevalence: '40% over age 40',
    onsetAge: '30+ years typically',
    commonLocations: 'Lumbar & Cervical',
    management: 'Highly manageable'
  },

  quickFacts: [
    {
      icon: React.createElement(Users, { className: "h-8 w-8" }),
      title: 'Prevalence',
      value: '40% over age 40'
    },
    {
      icon: React.createElement(TrendingUp, { className: "h-8 w-8" }),
      title: 'Onset Age',
      value: '30+ years typically'
    },
    {
      icon: React.createElement(MapPin, { className: "h-8 w-8" }),
      title: 'Most Common',
      value: 'Lumbar & Cervical'
    },
    {
      icon: React.createElement(CheckCircle, { className: "h-8 w-8" }),
      title: 'Management',
      value: 'Highly manageable'
    }
  ],

  degenerationStages: [
    {
      stage: 1,
      title: 'Normal Disc',
      characteristics: [
        'High water content (80-85%)',
        'Intact annulus fibrosus',
        'Normal disc height',
        'Optimal shock absorption'
      ],
      severity: 'normal'
    },
    {
      stage: 2,
      title: 'Early Degeneration',
      characteristics: [
        'Slight water content loss',
        'Minor annular tears',
        'Minimal height loss',
        'Usually asymptomatic'
      ],
      severity: 'mild'
    },
    {
      stage: 3,
      title: 'Moderate Degeneration',
      characteristics: [
        'Significant dehydration',
        'Multiple annular tears',
        'Noticeable height loss',
        'Intermittent symptoms'
      ],
      severity: 'moderate'
    },
    {
      stage: 4,
      title: 'Advanced Degeneration',
      characteristics: [
        'Severe dehydration',
        'Extensive annular damage',
        'Significant height loss',
        'Persistent symptoms'
      ],
      severity: 'severe'
    },
    {
      stage: 5,
      title: 'Severe Degeneration',
      characteristics: [
        'Complete dehydration',
        'Disc collapse',
        'Bone-on-bone contact',
        'Chronic pain and disability'
      ],
      severity: 'critical'
    }
  ],

  anatomicalComponents: [
    {
      name: 'Nucleus Pulposus',
      description: 'Gel-like center composed of water (80-85%), proteoglycans, and collagen. Acts as the primary shock absorber and loses water content with age.'
    },
    {
      name: 'Annulus Fibrosus',
      description: 'Tough outer ring made of 15-25 concentric layers of collagen fibers. Contains the nucleus and provides structural integrity.'
    },
    {
      name: 'Cartilaginous Endplates',
      description: 'Thin layers of hyaline cartilage that separate the disc from vertebral bodies and facilitate nutrient exchange.'
    },
    {
      name: 'Blood Supply',
      description: 'Discs are avascular structures that receive nutrients through diffusion from surrounding tissues, making healing difficult.'
    }
  ],

  structuralChanges: [
    {
      type: 'biochemical',
      title: 'Water Content Loss',
      description: 'Decreases from 85% to 65% or less'
    },
    {
      type: 'biochemical',
      title: 'Proteoglycan Reduction',
      description: 'Loss of molecules that retain water'
    },
    {
      type: 'biochemical',
      title: 'Collagen Changes',
      description: 'Type I collagen increases, reducing flexibility'
    },
    {
      type: 'biochemical',
      title: 'pH Alterations',
      description: 'Acidic environment affects cell function'
    },
    {
      type: 'structural',
      title: 'Disc Height Loss',
      description: 'Progressive collapse and narrowing'
    },
    {
      type: 'structural',
      title: 'Annular Tears',
      description: 'Radial and circumferential fissures'
    },
    {
      type: 'structural',
      title: 'Endplate Changes',
      description: 'Sclerosis and Modic changes'
    },
    {
      type: 'structural',
      title: 'Osteophyte Formation',
      description: 'Bone spurs develop around disc margins'
    }
  ],

  causes: [
    {
      category: 'primary',
      title: 'Natural Aging Process',
      description: 'The primary cause of discopathy is the natural aging process. Over time, discs lose water content, become less elastic, and develop structural changes.',
      icon: React.createElement(Clock, { className: "h-5 w-5" })
    },
    {
      category: 'primary',
      title: 'Mechanical Stress',
      description: 'Repetitive loading, poor posture, and biomechanical stress accelerate disc degeneration through increased wear and tear.',
      icon: React.createElement(Activity, { className: "h-5 w-5" })
    },
    {
      category: 'modifiable',
      title: 'Lifestyle Factors',
      description: 'Smoking, obesity, sedentary lifestyle, and poor nutrition contribute to accelerated disc degeneration.',
      icon: React.createElement(Heart, { className: "h-5 w-5" })
    },
    {
      category: 'non-modifiable',
      title: 'Genetic Predisposition',
      description: 'Family history and genetic factors account for 60-70% of disc degeneration susceptibility.',
      icon: React.createElement(Brain, { className: "h-5 w-5" })
    }
  ],

  symptoms: [
    {
      type: 'primary',
      title: 'Axial Pain',
      description: 'Deep, aching pain in the affected spinal region, often worse with sitting or bending forward.',
      severity: 'moderate',
      icon: React.createElement(AlertTriangle, { className: "h-5 w-5" })
    },
    {
      type: 'primary',
      title: 'Stiffness',
      description: 'Reduced flexibility and range of motion, particularly in the morning or after prolonged inactivity.',
      severity: 'mild',
      icon: React.createElement(Shield, { className: "h-5 w-5" })
    },
    {
      type: 'neurological',
      title: 'Radicular Pain',
      description: 'Shooting pain down the arms or legs when nerve roots are compressed by disc material.',
      severity: 'severe',
      icon: React.createElement(Zap, { className: "h-5 w-5" })
    },
    {
      type: 'functional',
      title: 'Activity Limitation',
      description: 'Difficulty with daily activities, prolonged sitting, lifting, or maintaining certain positions.',
      severity: 'moderate',
      icon: React.createElement(Target, { className: "h-5 w-5" })
    }
  ],

  diagnostics: [
    {
      type: 'clinical',
      name: 'Physical Examination',
      description: 'Comprehensive assessment of posture, range of motion, neurological function, and pain patterns.',
      accuracy: '70-80%',
      icon: React.createElement(Stethoscope, { className: "h-5 w-5" })
    },
    {
      type: 'imaging',
      name: 'MRI Scan',
      description: 'Gold standard for visualizing disc degeneration, showing water content loss, tears, and structural changes.',
      accuracy: '95%+',
      icon: React.createElement(Eye, { className: "h-5 w-5" })
    },
    {
      type: 'imaging',
      name: 'X-ray',
      description: 'Shows disc space narrowing, osteophytes, and spinal alignment but cannot visualize soft tissues.',
      accuracy: '60-70%',
      icon: React.createElement(Layers, { className: "h-5 w-5" })
    },
    {
      type: 'functional',
      name: 'Discography',
      description: 'Provocative test that reproduces pain by injecting contrast into the disc to identify pain source.',
      accuracy: '80-85%',
      icon: React.createElement(Microscope, { className: "h-5 w-5" })
    }
  ],

  treatments: [
    {
      category: 'conservative',
      name: 'Physical Therapy',
      description: 'Structured exercise program to improve strength, flexibility, and posture while reducing pain.',
      effectiveness: '70-80%',
      duration: '6-12 weeks',
      icon: React.createElement(Activity, { className: "h-5 w-5" })
    },
    {
      category: 'conservative',
      name: 'Pain Management',
      description: 'Medications including NSAIDs, muscle relaxants, and neuropathic pain medications.',
      effectiveness: '60-70%',
      duration: 'As needed',
      icon: React.createElement(Shield, { className: "h-5 w-5" })
    },
    {
      category: 'minimally-invasive',
      name: 'Epidural Injections',
      description: 'Steroid injections to reduce inflammation and pain around affected nerve roots.',
      effectiveness: '70-85%',
      duration: '3-6 months',
      icon: React.createElement(Target, { className: "h-5 w-5" })
    },
    {
      category: 'surgical',
      name: 'Disc Replacement',
      description: 'Artificial disc replacement to maintain motion while addressing degenerative changes.',
      effectiveness: '85-90%',
      duration: 'Long-term',
      icon: React.createElement(Disc, { className: "h-5 w-5" })
    }
  ],

  prevention: [
    {
      category: 'lifestyle',
      title: 'Regular Exercise',
      description: 'Maintain cardiovascular fitness and core strength to support spinal health.',
      effectiveness: 'High',
      icon: React.createElement(Activity, { className: "h-5 w-5" })
    },
    {
      category: 'ergonomic',
      title: 'Proper Posture',
      description: 'Maintain neutral spine alignment during daily activities and work.',
      effectiveness: 'High',
      icon: React.createElement(Shield, { className: "h-5 w-5" })
    },
    {
      category: 'lifestyle',
      title: 'Weight Management',
      description: 'Maintain healthy body weight to reduce mechanical stress on the spine.',
      effectiveness: 'Moderate',
      icon: React.createElement(Heart, { className: "h-5 w-5" })
    },
    {
      category: 'lifestyle',
      title: 'Smoking Cessation',
      description: 'Quit smoking to improve disc nutrition and slow degeneration process.',
      effectiveness: 'High',
      icon: React.createElement(Brain, { className: "h-5 w-5" })
    }
  ],

  prognosis: [
    {
      timeframe: 'Short-term (3-6 months)',
      outcome: 'Good response to conservative treatment',
      factors: ['Early intervention', 'Patient compliance', 'Severity of degeneration']
    },
    {
      timeframe: 'Long-term (1-5 years)',
      outcome: 'Variable depending on progression',
      factors: ['Lifestyle modifications', 'Activity level', 'Genetic factors']
    },
    {
      timeframe: 'Surgical outcomes',
      outcome: '85-90% good to excellent results',
      factors: ['Patient selection', 'Surgical technique', 'Post-operative care']
    }
  ]
};
