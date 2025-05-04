import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Calendar, Info, HelpCircle, FileDown, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PatientResources() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Resource categories
  const resourceCategories = [
    {
      title: t.patientResources.categories.beforeVisit,
      icon: <Calendar className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: t.patientResources.resources.newPatientForms,
          description: t.patientResources.resources.newPatientFormsDesc,
          link: "#",
          buttonText: "Download Forms"
        },
        {
          title: t.patientResources.resources.insuranceInfo,
          description: t.patientResources.resources.insuranceInfoDesc,
          link: "#",
          buttonText: "View Details"
        },
        {
          title: t.patientResources.resources.preparingForAppointment,
          description: t.patientResources.resources.preparingForAppointmentDesc,
          link: "#",
          buttonText: "Read More"
        }
      ]
    },
    {
      title: t.patientResources.categories.conditionsTreatments,
      icon: <Info className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: t.patientResources.resources.brainConditions,
          description: t.patientResources.resources.brainConditionsDesc,
          link: "/expertise/image-guided-surgery",
          buttonText: "Learn More"
        },
        {
          title: t.patientResources.resources.spineConditions,
          description: t.patientResources.resources.spineConditionsDesc,
          link: "/expertise/cervical-disc-replacement",
          buttonText: "Learn More"
        },
        {
          title: t.patientResources.resources.minimallyInvasive,
          description: t.patientResources.resources.minimallyInvasiveDesc,
          link: "/expertise/robotic-spine-surgery",
          buttonText: "Learn More"
        }
      ]
    },
    {
      title: t.patientResources.categories.surgeryInfo,
      icon: <FileText className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: t.patientResources.resources.preSurgeryInstructions,
          description: t.patientResources.resources.preSurgeryInstructionsDesc,
          link: "#",
          buttonText: t.patientResources.viewInstructions
        },
        {
          title: t.patientResources.resources.postSurgeryCare,
          description: t.patientResources.resources.postSurgeryCareDesc,
          link: "#",
          buttonText: "Read More"
        },
        {
          title: t.patientResources.resources.hospitalInfo,
          description: t.patientResources.resources.hospitalInfoDesc,
          link: "#",
          buttonText: t.patientResources.viewHospitals
        }
      ]
    },
    {
      title: t.patientResources.categories.patientSupport,
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      resources: [
        {
          title: t.patientResources.resources.supportGroups,
          description: t.patientResources.resources.supportGroupsDesc,
          link: "#",
          buttonText: t.patientResources.findSupport
        },
        {
          title: t.patientResources.resources.rehabilitationResources,
          description: t.patientResources.resources.rehabilitationResourcesDesc,
          link: "#",
          buttonText: t.patientResources.viewResources
        },
        {
          title: t.patientResources.resources.mentalHealthSupport,
          description: t.patientResources.resources.mentalHealthSupportDesc,
          link: "#",
          buttonText: "Learn More"
        }
      ]
    }
  ];

  // Educational materials
  const educationalMaterials = [
    {
      title: t.patientResources.brainTumors,
      description: t.patientResources.brainTumorsDesc,
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "#"
    },
    {
      title: t.patientResources.spineRecovery,
      description: t.patientResources.spineRecoveryDesc,
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "#"
    },
    {
      title: t.patientResources.painManagement,
      description: t.patientResources.painManagementDesc,
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "#"
    },
    {
      title: t.patientResources.discReplacement,
      description: t.patientResources.discReplacementDesc,
      icon: <FileDown className="h-6 w-6 text-primary" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.patientResources.title}
              </h1>
              <p className="text-muted-foreground">
                {t.patientResources.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <div key={index} className="card p-6 rounded-lg shadow-md bg-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h2 className="text-2xl font-bold ml-3">{category.title}</h2>
                  </div>
                  <div className="space-y-6">
                    {category.resources.map((resource, resourceIndex) => (
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
            <h2 className="text-3xl font-bold text-center mb-12">{t.patientResources.educationalMaterials}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationalMaterials.map((material, index) => (
                <div key={index} className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{material.title}</h3>
                    {material.icon}
                  </div>
                  <p className="text-muted-foreground mb-4">{material.description}</p>
                  <Button asChild variant="ghost" className="text-primary p-0 h-auto">
                    <Link to={material.link}>{t.patientResources.downloadPDF}</Link>
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
                    <Link to="/patient-resources/individual-spine-health-program">Explore Spine Health App</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/patient-resources/individual-spine-health-program#assessment">Take Assessment</Link>
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
                <h3 className="text-xl font-semibold mb-4">Individual Spine Health Program</h3>
                <p className="text-muted-foreground mb-4">
                  Our all-in-one platform for assessment, personalised recommendations, and progress tracking to manage your spine health effectively.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/individual-spine-health-program">Access Program</Link>
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
                <h2 className="text-3xl font-bold mb-6">Individual Spine Health Program</h2>
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
                  <Link to="/patient-resources/individual-spine-health-program">Explore Individual Spine Health Program</Link>
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
              <h2 className="text-3xl font-bold mb-4">{t.patientResources.needAppointment}</h2>
              <p className="text-muted-foreground mb-8">
                {t.patientResources.appointmentDesc}
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

      <Footer />
    </div>
  );
}
