import React, { useEffect } from 'react';
import { FileText, Calendar, Info, HelpCircle, FileDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

interface EducationalMaterial {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  downloadName: string;
}

const PatientResources: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.patientResources && safeT.patientResources.categories && safeT.patientResources.resources) ? safeT : {
    patientResources: {
      title: "Patient Resources",
      subtitle: "Comprehensive resources to support your healthcare journey",
      categories: {
        beforeVisit: "Before Your Visit",
        conditionsTreatments: "Conditions & Treatments",
        surgeryInfo: "Surgery Information",
        patientSupport: "Patient Support"
      },
      resources: {
        newPatientForms: "New Patient Forms",
        newPatientFormsDesc: "Download and complete forms before your appointment",
        insuranceInfo: "Insurance Information",
        insuranceInfoDesc: "Understanding your insurance coverage and benefits",
        preparingForAppointment: "Preparing for Your Appointment",
        preparingForAppointmentDesc: "What to expect and how to prepare",
        brainConditions: "Brain Conditions",
        brainConditionsDesc: "Information about brain tumours and neurological conditions",
        spineConditions: "Spine Conditions",
        spineConditionsDesc: "Comprehensive spine condition information and treatments",
        minimallyInvasive: "Minimally Invasive Surgery",
        minimallyInvasiveDesc: "Advanced surgical techniques for better outcomes",
        preSurgeryInstructions: "Pre-Surgery Instructions",
        preSurgeryInstructionsDesc: "Important guidelines before your surgery",
        postSurgeryCare: "Post-Surgery Care",
        postSurgeryCareDesc: "Recovery guidelines and care instructions",
        hospitalInfo: "Hospital Information",
        hospitalInfoDesc: "Information about our partner hospitals",
        supportGroups: "Support Groups",
        supportGroupsDesc: "Connect with others facing similar challenges",
        rehabilitationResources: "Rehabilitation Resources",
        rehabilitationResourcesDesc: "Resources to support your recovery",
        mentalHealthSupport: "Mental Health Support",
        mentalHealthSupportDesc: "Psychological support during your healthcare journey"
      },
      educationalMaterials: "Educational Materials",
      needAppointment: "Need an Appointment?",
      appointmentDesc: "Schedule a consultation with our expert team",
      viewInstructions: "View Instructions",
      viewHospitals: "View Hospitals",
      findSupport: "Find Support",
      viewResources: "View Resources"
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Resource categories
  const resourceCategories = [
    {
      title: finalT.patientResources.categories.beforeVisit,
      icon: <Calendar className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: finalT.patientResources.resources.newPatientForms,
          description: finalT.patientResources.resources.newPatientFormsDesc,
          link: "#",
          buttonText: "Download Forms"
        },
        {
          title: finalT.patientResources.resources.insuranceInfo,
          description: finalT.patientResources.resources.insuranceInfoDesc,
          link: "#",
          buttonText: "View Details"
        },
        {
          title: finalT.patientResources.resources.preparingForAppointment,
          description: finalT.patientResources.resources.preparingForAppointmentDesc,
          link: "#",
          buttonText: "Read More"
        }
      ]
    },
    {
      title: finalT.patientResources.categories.conditionsTreatments,
      icon: <Info className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: finalT.patientResources.resources.brainConditions,
          description: finalT.patientResources.resources.brainConditionsDesc,
          link: "/expertise/image-guided-surgery",
          buttonText: "Learn More"
        },
        {
          title: finalT.patientResources.resources.spineConditions,
          description: finalT.patientResources.resources.spineConditionsDesc,
          link: "/expertise/cervical-disc-replacement",
          buttonText: "Learn More"
        },
        {
          title: finalT.patientResources.resources.minimallyInvasive,
          description: finalT.patientResources.resources.minimallyInvasiveDesc,
          link: "/expertise/robotic-spine-surgery",
          buttonText: "Learn More"
        }
      ]
    },
    {
      title: finalT.patientResources.categories.surgeryInfo,
      icon: <FileText className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: finalT.patientResources.resources.preSurgeryInstructions,
          description: finalT.patientResources.resources.preSurgeryInstructionsDesc,
          link: "#",
          buttonText: finalT.patientResources.viewInstructions
        },
        {
          title: finalT.patientResources.resources.postSurgeryCare,
          description: finalT.patientResources.resources.postSurgeryCareDesc,
          link: "#",
          buttonText: "Read More"
        },
        {
          title: finalT.patientResources.resources.hospitalInfo,
          description: finalT.patientResources.resources.hospitalInfoDesc,
          link: "#",
          buttonText: finalT.patientResources.viewHospitals
        }
      ]
    },
    {
      title: finalT.patientResources.categories.patientSupport,
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: finalT.patientResources.resources.supportGroups,
          description: finalT.patientResources.resources.supportGroupsDesc,
          link: "#",
          buttonText: finalT.patientResources.findSupport
        },
        {
          title: finalT.patientResources.resources.rehabilitationResources,
          description: finalT.patientResources.resources.rehabilitationResourcesDesc,
          link: "#",
          buttonText: finalT.patientResources.viewResources
        },
        {
          title: finalT.patientResources.resources.mentalHealthSupport,
          description: finalT.patientResources.resources.mentalHealthSupportDesc,
          link: "#",
          buttonText: "Learn More"
        }
      ]
    }
  ];

  // Educational materials
  const educationalMaterials = [
    {
      title: "Understanding Brain Tumours",
      description: "A comprehensive guide to brain tumour types, symptoms, and treatment options.",
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "/pdfs/brain-tumours-guide.html",
      downloadName: "Brain_Tumours_Guide.html"
    },
    {
      title: "Spine Surgery Recovery Guide",
      description: "What to expect during recovery from various types of spine surgery.",
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "/pdfs/spine-surgery-recovery-guide.html",
      downloadName: "Spine_Surgery_Recovery_Guide.html"
    },
    {
      title: "Pain Management Strategies",
      description: "Techniques and approaches for managing pain before and after neurosurgery.",
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "/pdfs/pain-management-strategies.html",
      downloadName: "Pain_Management_Strategies.html"
    },
    {
      title: "Artificial Disc Replacement Guide",
      description: "Information about cervical and lumbar disc replacement procedures.",
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "/pdfs/artificial-disc-replacement-guide.html",
      downloadName: "Artificial_Disc_Replacement_Guide.html"
    }
  ];

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title={finalT.patientResources.title}
        subtitle={finalT.patientResources.subtitle}
        backgroundImage="/images/patient-resources/spine-health-hero.jpg"
        enableParallax={true}
      />

      <main className="flex-1">

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceCategories?.map((category, index) => (
                <div key={index} className="card p-6 rounded-lg shadow-md bg-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h2 className="text-2xl font-bold ml-3">{category.title}</h2>
                  </div>
                  <div className="space-y-6">
                    {category.resources?.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="border-t pt-4">
                        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-3">{resource.description}</p>
                        <Button asChild variant="outline" className="text-primary">
                          <Link to={resource.link}>{resource.buttonText}</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Materials */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">{finalT.patientResources.educationalMaterials}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationalMaterials?.map((material: EducationalMaterial, index: number) => (
                <div key={index} className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{material.title}</h3>
                    {material.icon}
                  </div>
                  <p className="text-muted-foreground mb-4">{material.description}</p>
                  <Button asChild variant="ghost" className="text-primary p-0 h-auto">
                    <a
                      href={material.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Guide
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spine Health App */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/individual-spine-health-1.jpg"
                  alt="Spine Health App Preview"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Spine Health App</h2>
                <p className="text-muted-foreground mb-4">
                  Our new Spine Health App provides personalized guidance for patients with chronic neck and back problems. Based on evidence-based medicine, biomechanics, and neurophysiology, the app helps you understand your condition and offers tailored recommendations for improvement.
                </p>
                <p className="text-muted-foreground mb-6">
                  Features include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li>Comprehensive educational content about spine conditions</li>
                  <li>Personalized exercise recommendations</li>
                  <li>Detailed assessment tools</li>
                  <li>Progress tracking and goal setting</li>
                  <li>Visual demonstrations of exercises</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/patient-resources/individual-spine-health-programme">Explore Spine Health App</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/patient-resources/individual-spine-health-programme#assessment">Take Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Resources */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Expanded Patient Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Individual Spine Health Programme</h3>
                <p className="text-muted-foreground mb-4">
                  Our all-in-one platform for assessment, personalised recommendations, and progress tracking to manage your spine health effectively.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/individual-spine-health-programme">Access Programme</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Condition Information</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive information about common spine conditions, their causes, symptoms, and treatment options.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/condition-information">Learn About Conditions</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Spine Conditions Library</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed information about specific spine conditions organised by region, with symptoms and treatment options.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-conditions-library">Browse Conditions</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Exercise Library</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our collection of spine-specific exercises designed by neurosurgical experts to help strengthen your spine.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/exercise-library">View Exercises</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Lifestyle Modifications</h3>
                <p className="text-muted-foreground mb-4">
                  Evidence-based recommendations for lifestyle changes to manage spine conditions and improve quality of life.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/lifestyle-modifications">View Recommendations</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Spine Anatomy</h3>
                <p className="text-muted-foreground mb-4">
                  Explore detailed information about spine anatomy to better understand your condition and treatment options.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-conditions-library#anatomy">View Anatomy</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Expert Guide to Spine & Brain Health</h3>
                <p className="text-muted-foreground mb-4">
                  Science-backed strategies for understanding, managing, and preventing chronic spinal and neurological conditions.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-and-brain-health">Read Guide</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Cervical Spine Injury Recovery</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guide for management and rehabilitation after mild cervical spine injury with exercise recommendations.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/cervical-spine-injury">View Recovery Guide</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Cervical Spine Exercises for Pain Medication Transition</h3>
                <p className="text-muted-foreground mb-4">
                  Evidence-based exercises to safely reintroduce cervical spine function while transitioning off pain medications.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/cervical-spine-exercises">View Exercises</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Spine-Safe Exercises for Degenerative Disc Disease</h3>
                <p className="text-muted-foreground mb-4">
                  Biomechanically sound exercises with detailed muscle engagement and psychophysiological benefits for managing DDD.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-safe-exercises">View Exercises</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Hidden Risks of Exercising While on Pain Medications</h3>
                <p className="text-muted-foreground mb-4">
                  A neurosurgeon's perspective on why exercising under the influence of pain medications may be unsafe for your spine.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/exercise-pain-medication-risks">Read Article</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Age-Specific Recommendations for a Youthful Spine</h3>
                <p className="text-muted-foreground mb-4">
                  Tailored spine care strategies for every age group, from your 20s to your 80s and beyond, to maintain optimal spinal health.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/age-specific-spine-recommendations">View Guide</Link>
                </Button>
              </div>

              <div className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">How to Keep Your Spine Young While Still Ageing Gracefully</h3>
                <p className="text-muted-foreground mb-4">
                  Evidence-based strategies to maintain spinal health and function well beyond what many consider "normal" for your chronological age.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/youthful-spine">Read Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Spine Health Program */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/individual-spine-health-1.jpg"
                  alt="Individual spine health program"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Individual Spine Health Programme</h2>
                <p className="text-muted-foreground mb-4">
                  Our integrated approach combines assessment tools, personalised recommendations, and progress tracking in one platform to help you understand and manage your spine condition effectively.
                </p>
                <p className="text-muted-foreground mb-6">
                  This all-in-one program replaces our previous separate tools and provides:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li>Detailed assessment of your symptoms and condition</li>
                  <li>Evidence-based educational resources</li>
                  <li>Personalised exercise recommendations</li>
                  <li>Progress tracking and goal setting</li>
                  <li>Secure dashboard access</li>
                  <li>Integration with your healthcare team</li>
                </ul>
                <Button asChild size="lg">
                  <Link to="/patient-resources/individual-spine-health-programme">Explore Individual Spine Health Programme</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Scheduling */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">{finalT.patientResources.needAppointment}</h2>
              <p className="text-muted-foreground mb-8">
                {finalT.patientResources.appointmentDesc}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StandardPageLayout>
  );
};

PatientResources.displayName = 'PatientResources';

export default PatientResources;
