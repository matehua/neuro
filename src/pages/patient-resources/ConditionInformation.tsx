import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SafeImage from '@/components/SafeImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';


const ConditionInformation: React.FC = () => {
  const { t, language } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.patientResources && safeT.patientResources.conditionInfo) ? safeT : {
    patientResources: {
      conditionInfo: {
        title: "Spine Condition Information",
        subtitle: "Comprehensive information about common spine conditions and their treatments",
        searchPlaceholder: "Search conditions...",
        exploreConditions: "Explore Spine Conditions",
        understandingAnatomy: "Understanding Spine Anatomy",
        notSureAboutCondition: "Not Sure About Your Condition?",
        takeAssessment: "Take our comprehensive spine health assessment to better understand your symptoms and get personalized recommendations."
      },
      assessmentTools: {
        startAssessment: "Start Assessment"
      },
      conditions: {}
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define the spine conditions
  const conditions = [
    {
      id: "herniated-disc",
      name: "Herniated Disc",
      description: "A condition where a disc's soft center pushes through a crack in the tougher exterior casing, causing pain, numbness, or weakness.",
      image: "/images/conditions/cervical-spine-anatomy.jpg"
    },
    {
      id: "spinal-stenosis",
      name: "Spinal Stenosis",
      description: "Narrowing of the spinal canal that puts pressure on the spinal cord and nerves, causing pain, numbness, and weakness.",
      image: "/images/conditions/spinal-stenosis.jpg"
    },
    {
      id: "sciatica",
      name: "Sciatica",
      description: "Pain that radiates along the sciatic nerve, which runs from the lower back through the hips and buttocks and down each leg.",
      image: "/images/conditions/sciatica.jpg"
    },
    {
      id: "radiculopathy",
      name: "Radiculopathy",
      description: "A condition where a nerve root is compressed, causing pain, numbness, tingling, or weakness along the course of the nerve.",
      image: "/images/conditions/spine-injury.jpg"
    },
    {
      id: "arthrosis",
      name: "Arthrosis",
      description: "Degenerative joint disease affecting the cartilage and bones, leading to pain, stiffness, and reduced mobility.",
      image: "/images/conditions/degenerative-disc-disease.jpg"
    },
    {
      id: "discopathy",
      name: "Discopathy",
      description: "Degeneration or damage to the intervertebral discs, which can lead to pain, reduced mobility, and other symptoms.",
      image: "/images/conditions/spine-mri-scan.jpg"
    },
    {
      id: "facet-arthropathy",
      name: "Facet Arthropathy",
      description: "Degeneration of the facet joints in the spine, causing pain, stiffness, and reduced mobility.",
      image: "/images/conditions/spine-diagnostic-imaging.jpg"
    },
    {
      id: "sacroiliac-arthropathy",
      name: "Sacroiliac Arthropathy",
      description: "Inflammation or degeneration of the sacroiliac joint, causing pain in the lower back and buttocks.",
      image: "/images/conditions/spine-rehabilitation.jpg"
    },
    {
      id: "piriformis-syndrome",
      name: "Piriformis Syndrome",
      description: "A condition where the piriformis muscle irritates the sciatic nerve, causing pain in the buttocks and along the sciatic nerve.",
      image: "/images/conditions/spine-consultation.jpg"
    },
    {
      id: "thoracic-outlet-syndrome",
      name: "Thoracic Outlet Syndrome",
      description: "Compression of the nerves, arteries, or veins in the thoracic outlet, causing pain, numbness, and weakness in the neck, shoulder, and arm.",
      image: "/images/conditions/spine-surgery.jpg"
    },
    {
      id: "occipital-neuralgia",
      name: "Occipital Neuralgia",
      description: "A condition characterized by chronic pain in the upper neck, back of the head, and behind the ears, caused by irritation or injury to the occipital nerves.",
      image: "/images/conditions/neck-pain-treatment.jpg"
    },
    {
      id: "spondylosis",
      name: "Spondylosis",
      description: "Age-related degeneration of the spine, affecting the discs, joints, and bones, leading to pain and stiffness.",
      image: "/images/conditions/spine-tumor.jpg"
    },
    {
      id: "spondylolisthesis",
      name: "Spondylolisthesis",
      description: "A condition where one vertebra slips forward over the one below it, causing pain, numbness, and weakness.",
      image: "/images/conditions/spinal-fracture.jpg"
    },
    {
      id: "pars-defects",
      name: "Pars Defects",
      description: "A fracture or defect in the pars interarticularis, a small segment of bone that connects the facet joints at the back of the spine.",
      image: "/images/conditions/spine-infection.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {finalT.patientResources.conditionInfo.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {finalT.patientResources.conditionInfo.subtitle}
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={finalT.patientResources.conditionInfo.searchPlaceholder}
                  className="pl-10 pr-4 py-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">{finalT.patientResources.conditionInfo.exploreConditions}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions?.map((condition) => {
                // Get translated condition name and description if available
                const translatedName = language !== 'en' && finalT.patientResources?.conditions && finalT.patientResources.conditions[condition.id]?.name
                  ? finalT.patientResources.conditions[condition.id].name
                  : condition.name;

                const translatedDescription = language !== 'en' && finalT.patientResources?.conditions && finalT.patientResources.conditions[condition.id]?.description
                  ? finalT.patientResources.conditions[condition.id].description
                  : condition.description;

                return (
                  <Card key={condition.id} className="bg-card shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <SafeImage
                        src={condition.image}
                        alt={translatedName}
                        className="w-full h-full object-cover"
                        fallbackSrc="/images/conditions/spine-consultation.jpg"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{translatedName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {translatedDescription}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to={`/patient-resources/conditions/${condition.id}`}>{language === 'zh' ? "了解更多" : "Learn More"}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Understanding Spine Anatomy */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{finalT.patientResources.conditionInfo.understandingAnatomy}</h2>
                <p className="text-muted-foreground mb-4">
                  {language === 'zh' ?
                    "脊柱是一个复杂的结构，由椎骨、椎间盘、神经以及支撑肌肉和韧带组成。了解脊柱的基本解剖结构可以帮助您更好地理解您的病情和治疗选择。" :
                    "The spine is a complex structure made up of vertebrae, discs, nerves, and supporting muscles and ligaments. Understanding the basic anatomy of the spine can help you better comprehend your condition and treatment options."}
                </p>
                <p className="text-muted-foreground mb-4">
                  {language === 'zh' ? "脊柱分为四个区域：" : "The spine is divided into four regions:"}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  <li><strong>{language === 'zh' ? "颈椎（颈部）：" : "Cervical Spine (Neck):"}</strong> {language === 'zh' ? "7个椎骨（C1-C7）" : "7 vertebrae (C1-C7)"}</li>
                  <li><strong>{language === 'zh' ? "胸椎（上背部）：" : "Thoracic Spine (Upper Back):"}</strong> {language === 'zh' ? "12个椎骨（T1-T12）" : "12 vertebrae (T1-T12)"}</li>
                  <li><strong>{language === 'zh' ? "腰椎（下背部）：" : "Lumbar Spine (Lower Back):"}</strong> {language === 'zh' ? "5个椎骨（L1-L5）" : "5 vertebrae (L1-L5)"}</li>
                  <li><strong>{language === 'zh' ? "骶椎：" : "Sacral Spine:"}</strong> {language === 'zh' ? "5个融合椎骨形成骶骨" : "5 fused vertebrae forming the sacrum"}</li>
                </ul>
                <Button asChild>
                  <Link to="/patient-resources/spine-anatomy">{language === 'zh' ? "探索脊柱解剖" : "Explore Spine Anatomy"}</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/conditions/spine-mri-scan.jpg"
                  alt={language === 'zh' ? "脊柱解剖图" : "Spine anatomy diagram"}
                  className="w-full h-auto"
                  fallbackSrc="/images/spine-anatomy/vertebrae.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="bg-primary/5 rounded-lg p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">{finalT.patientResources.conditionInfo.notSureAboutCondition}</h2>
                <p className="text-muted-foreground mb-8">
                  {finalT.patientResources.conditionInfo.takeAssessment}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-program#assessment">{finalT.patientResources.assessmentTools.startAssessment}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/patient-resources/individual-spine-health-program">{language === 'zh' ? "探索脊柱健康应用" : "Explore Spine Health App"}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

ConditionInformation.displayName = 'ConditionInformation';

export default ConditionInformation;
