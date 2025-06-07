import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SpineConditionsLibrary() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <img
              src="/images/spine-anatomy/cervical-spine.jpg"
              alt="Spine anatomy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Spine Conditions Library
              </h1>
              <p className="text-muted-foreground mb-8">
                Comprehensive information about common spine conditions, their causes, symptoms, and treatment options.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Understanding Spine Conditions</h2>
                <p className="text-muted-foreground mb-4">
                  The spine is a complex structure that supports your body and protects your spinal cord. When problems occur in any part of your spine, they can cause pain, limited mobility, and impact your quality of life.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our comprehensive spine conditions library provides detailed information about common spine disorders, helping you understand their causes, symptoms, and available treatment options.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/spine-anatomy/vertebrae.jpg"
                  alt="Spine anatomy"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  Understanding spine anatomy is key to managing spine conditions effectively
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Condition Categories Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Spine Conditions by Region</h2>
            <Tabs defaultValue="cervical" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="cervical" className="text-center py-3">Cervical Spine</TabsTrigger>
                <TabsTrigger value="thoracic" className="text-center py-3">Thoracic Spine</TabsTrigger>
                <TabsTrigger value="lumbar" className="text-center py-3">Lumbar Spine</TabsTrigger>
              </TabsList>

              <TabsContent value="cervical" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Cervical Spine Conditions</h3>
                    <p className="text-muted-foreground mb-6">
                      The cervical spine (neck) is made up of seven vertebrae and supports the weight of your head. Conditions affecting this region can cause neck pain, headaches, and symptoms that radiate into the shoulders and arms.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/spine-anatomy/cervical-spine.jpg"
                      alt="Cervical spine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/cervical-disc-herniation.jpg"
                        alt="Cervical disc herniation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Cervical Disc Herniation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Occurs when the soft inner material of a disc in your neck protrudes through the tougher outer layer, potentially irritating nearby nerves and causing pain, numbness, or weakness.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Neck pain that may radiate to the shoulder and arm</li>
                        <li>Numbness or tingling in the arm or hand</li>
                        <li>Weakness in specific muscles of the arm or hand</li>
                        <li>Pain that worsens with certain neck movements</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/cervical-disc-herniation">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/cervical-spondylosis.jpg"
                        alt="Cervical spondylosis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Arthrosis (Spondylosis)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to spinal arthrosis and spondylosis - degenerative changes affecting spinal joints, discs, and bones. Learn about causes, symptoms, diagnosis, and treatment options from conservative management to advanced surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Common Features:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Disc space narrowing and degeneration</li>
                        <li>Bone spur (osteophyte) formation</li>
                        <li>Facet joint arthritis and stiffness</li>
                        <li>Progressive symptoms with age</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/arthrosis">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/cervical-radiculopathy.jpg"
                        alt="Cervical radiculopathy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Radiculopathy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to radiculopathy - nerve root compression affecting cervical, thoracic, and lumbar spine. Learn about causes, symptoms, diagnosis, and treatment options from conservative management to advanced surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Dermatomal pain distribution patterns</li>
                        <li>Numbness and tingling in specific areas</li>
                        <li>Myotomal weakness patterns</li>
                        <li>Reduced or absent reflexes</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/radiculopathy">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/whiplash.jpg"
                        alt="Whiplash"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Whiplash</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A neck injury caused by rapid back-and-forth movement of the neck, similar to the cracking of a whip. Often occurs during rear-end car accidents or sports injuries.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Neck pain and stiffness that may be delayed 24-48 hours after injury</li>
                        <li>Loss of range of motion in the neck</li>
                        <li>Headaches, typically starting at the base of the skull</li>
                        <li>Fatigue and dizziness</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/whiplash">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/cervical-radiculopathy.jpg"
                        alt="Occipital Neuralgia"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Occipital Neuralgia</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to occipital neuralgia - a distinct headache disorder involving irritation of the occipital nerves. Learn about nerve anatomy, pain mechanisms, causes, symptoms, diagnosis, and treatment options from conservative management to advanced interventional procedures and surgical decompression.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Sharp, shooting pain in back of head</li>
                        <li>Electric shock-like sensations</li>
                        <li>Scalp tenderness and hypersensitivity</li>
                        <li>Excellent response to nerve blocks</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/occipital-neuralgia">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="thoracic" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Thoracic Spine Conditions</h3>
                    <p className="text-muted-foreground mb-6">
                      The thoracic spine consists of twelve vertebrae in the middle of your back, connecting to your ribs. While less common than cervical or lumbar conditions, thoracic spine problems can cause mid-back pain and may affect breathing and trunk movement.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/spine-anatomy/thoracic-spine.jpg"
                      alt="Thoracic spine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/compression-fracture.jpg"
                        alt="Compression fracture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Thoracic Compression Fracture</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A break in a vertebra that causes it to collapse in height. Often related to osteoporosis or trauma, and most commonly affects the thoracic spine.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Sudden, severe back pain that worsens with movement</li>
                        <li>Pain that improves when lying down</li>
                        <li>Gradual loss of height over time</li>
                        <li>Curved posture or a "hunchback" appearance</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/thoracic-compression-fracture">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/facet-joint-syndrome.jpg"
                        alt="Thoracic facet joint syndrome"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Thoracic Facet Joint Syndrome</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Inflammation or degeneration of the facet joints in the thoracic spine, which can cause pain, stiffness, and reduced mobility in the mid-back.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Localized pain in the mid-back</li>
                        <li>Pain that worsens with extension or rotation of the spine</li>
                        <li>Stiffness, especially in the morning</li>
                        <li>Pain that may refer around the rib cage</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/facet-arthropathy">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/cervical-radiculopathy.jpg"
                        alt="Thoracic Outlet Syndrome"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Thoracic Outlet Syndrome</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to thoracic outlet syndrome - compression of neurovascular structures in the thoracic outlet region. Learn about neurogenic, arterial, and venous types, causes, symptoms, diagnosis, and treatment options from conservative management to advanced surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Neck, shoulder, and arm pain</li>
                        <li>Numbness and tingling in fingers</li>
                        <li>Symptoms worse with arm elevation</li>
                        <li>Excellent response to targeted treatments</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/thoracic-outlet-syndrome">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="lumbar" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Lumbar Spine Conditions</h3>
                    <p className="text-muted-foreground mb-6">
                      The lumbar spine (lower back) consists of five vertebrae and bears most of your body weight. Due to this stress, lumbar spine conditions are very common and can cause lower back pain, as well as symptoms that radiate into the legs.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/spine-anatomy/lumbar-spine.jpg"
                      alt="Lumbar spine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/lumbar-disc-herniation.jpg"
                        alt="Lumbar disc herniation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Herniated Disc</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to herniated discs affecting any level of the spine. Learn about causes, symptoms, diagnosis, and treatment options from conservative care to advanced surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Back or neck pain depending on location</li>
                        <li>Radiating pain (sciatica for lumbar, arm pain for cervical)</li>
                        <li>Numbness or tingling in extremities</li>
                        <li>Muscle weakness in affected areas</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/herniated-disc">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/spinal-stenosis.jpg"
                        alt="Lumbar spinal stenosis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Spinal Stenosis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to spinal stenosis affecting cervical, thoracic, and lumbar spine. Learn about causes, symptoms, diagnosis, and treatment options from conservative management to advanced surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Neurogenic claudication (position-dependent leg pain)</li>
                        <li>Pain relief with forward flexion ("shopping cart sign")</li>
                        <li>Numbness, weakness, or tingling in extremities</li>
                        <li>Myelopathy symptoms (cervical/thoracic stenosis)</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/spinal-stenosis">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/spondylolisthesis.jpg"
                        alt="Spondylolisthesis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Spondylolisthesis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Occurs when one vertebra slips forward over the one below it, potentially causing back pain, leg pain, and in some cases, neurological symptoms due to nerve compression.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Lower back pain that worsens with activity</li>
                        <li>Pain, numbness, or weakness that radiates into the legs</li>
                        <li>Tight hamstring muscles</li>
                        <li>Difficulty walking or standing for long periods</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/spondylolisthesis">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/sciatica.jpg"
                        alt="Sciatica"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Sciatica</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to sciatica - pain radiating along the sciatic nerve pathway. Learn about causes, symptoms, diagnosis, and treatment options from conservative management to advanced interventional procedures.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Sharp, shooting pain from lower back to leg</li>
                        <li>Numbness, tingling, or burning sensations</li>
                        <li>Muscle weakness in affected leg or foot</li>
                        <li>Pain worsens with sitting, coughing, or sneezing</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/sciatica">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/degenerative-disc-disease.jpg"
                        alt="Discopathy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Discopathy (Degenerative Disc Disease)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to discopathy and degenerative disc disease affecting cervical, thoracic, and lumbar spine. Learn about disc degeneration process, causes, symptoms, diagnosis, and treatment options from conservative management to advanced surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Common Features:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Progressive disc dehydration and height loss</li>
                        <li>Chronic axial pain patterns</li>
                        <li>Morning stiffness and activity-related symptoms</li>
                        <li>Gradual onset over months to years</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/discopathy">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/facet-joints.jpg"
                        alt="Facet Arthropathy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Facet Arthropathy (Facet Joint Syndrome)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to facet arthropathy and facet joint syndrome affecting cervical, thoracic, and lumbar spine. Learn about facet joint degeneration, causes, symptoms, diagnosis, and treatment options from conservative management to advanced interventional procedures including radiofrequency ablation.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Axial (localized) pain patterns</li>
                        <li>Pain worse with spinal extension and rotation</li>
                        <li>Relief with forward flexion</li>
                        <li>Excellent response to targeted treatments</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/facet-arthropathy">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/sacroiliac-joint-pain.jpg"
                        alt="Sacroiliac Arthropathy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Sacroiliac Arthropathy (SI Joint Dysfunction)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to sacroiliac arthropathy and SI joint dysfunction affecting the connection between spine and pelvis. Learn about SI joint anatomy, biomechanics, causes, symptoms, diagnosis, and treatment options from conservative management to advanced interventional procedures and surgical fusion.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Unilateral lower back and buttock pain</li>
                        <li>Pain below L5 level with groin referral</li>
                        <li>Positive provocative tests</li>
                        <li>Excellent response to targeted injections</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/sacroiliac-arthropathy">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/sciatica.jpg"
                        alt="Piriformis Syndrome"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Piriformis Syndrome</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to piriformis syndrome, a neuromuscular condition where the piriformis muscle irritates the sciatic nerve. Learn about piriformis muscle anatomy, dysfunction mechanisms, causes, symptoms, diagnosis, and treatment options from conservative management to advanced interventional procedures and surgical release.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Deep buttock pain with radiation</li>
                        <li>Pain worse with sitting and hip internal rotation</li>
                        <li>Positive FAIR test and piriformis tenderness</li>
                        <li>Excellent response to targeted stretching and injections</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/piriformis-syndrome">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/cervical-spondylosis.jpg"
                        alt="Spondylosis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Spondylosis (Spinal Arthritis)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to spondylosis - age-related spinal degeneration affecting cervical, thoracic, and lumbar spine. Learn about degenerative changes, causes, symptoms, diagnosis, and treatment options from conservative management to advanced interventional procedures and surgical interventions.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Progressive spinal degeneration with aging</li>
                        <li>Disc dehydration and osteophyte formation</li>
                        <li>Chronic pain and stiffness patterns</li>
                        <li>Excellent response to comprehensive treatment</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/spondylosis">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/images/spine-conditions/spondylolisthesis.jpg"
                        alt="Pars Defects (Spondylolysis)"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Pars Defects (Spondylolysis)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to pars defects (spondylolysis) - stress fractures in the pars interarticularis affecting young athletes. Learn about anatomy, biomechanics, causes, symptoms, diagnosis, and treatment options from conservative management to advanced surgical repair techniques.
                      </p>
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Stress fractures in pars interarticularis</li>
                        <li>Common in young athletes (10-18 years)</li>
                        <li>Extension-related back pain patterns</li>
                        <li>Excellent healing potential with early treatment</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/pars-defects">Complete Guide</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Spine Anatomy Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding Spine Anatomy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/spine-anatomy/spinal-cord.jpg"
                  alt="Spinal cord anatomy"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Spine's Structure</h3>
                <p className="text-muted-foreground mb-4">
                  The spine is composed of 33 vertebrae stacked on top of each other, forming the spinal column. These vertebrae are divided into five regions:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground mb-6">
                  <li><strong>Cervical spine:</strong> 7 vertebrae in the neck (C1-C7)</li>
                  <li><strong>Thoracic spine:</strong> 12 vertebrae in the mid-back (T1-T12)</li>
                  <li><strong>Lumbar spine:</strong> 5 vertebrae in the lower back (L1-L5)</li>
                  <li><strong>Sacrum:</strong> 5 fused vertebrae forming the back of the pelvis</li>
                  <li><strong>Coccyx:</strong> 4 fused vertebrae forming the tailbone</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Between each vertebra (except for the sacrum and coccyx) are intervertebral discs that act as shock absorbers. The spinal cord runs through the spinal canal, with nerve roots branching off at each level to supply different parts of the body.
                </p>
                <Button asChild className="mt-4">
                  <Link to="/patient-resources/spine-anatomy">Learn More About Spine Anatomy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Take the First Step Toward Relief</h2>
              <p className="text-muted-foreground mb-8">
                Understanding your condition is the first step toward effective treatment. Our team is here to provide personalized care and guidance for your spine health journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/patient-resources/individual-spine-health-program#assessment">Take Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Schedule Consultation</Link>
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
