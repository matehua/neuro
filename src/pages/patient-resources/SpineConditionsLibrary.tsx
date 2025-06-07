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
                      <CardTitle>Cervical Spondylosis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Age-related wear and tear affecting the spinal discs and joints in your neck, leading to degenerative changes that can cause pain, stiffness, and sometimes nerve compression.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Neck pain and stiffness that worsens with activity</li>
                        <li>Headaches that originate from the neck</li>
                        <li>Grinding sensation with neck movement</li>
                        <li>Limited range of motion in the neck</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/cervical-spondylosis">Learn More</Link>
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
                      <CardTitle>Cervical Radiculopathy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Occurs when a nerve root in the cervical spine becomes compressed or irritated, causing pain, numbness, tingling, or weakness that radiates into the shoulder, arm, or hand.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Sharp pain that radiates from the neck into the arm</li>
                        <li>Specific pattern of numbness or weakness based on the affected nerve</li>
                        <li>Pain that worsens with certain neck positions</li>
                        <li>Reflexes may be diminished in the affected arm</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/cervical-radiculopathy">Learn More</Link>
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
                        <Link to="/patient-resources/conditions/thoracic-facet-joint-syndrome">Learn More</Link>
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
                        Not a condition itself, but a symptom of an underlying problem. Sciatica refers to pain that radiates along the sciatic nerve, which runs from your lower back through your hips and buttocks and down each leg.
                      </p>
                      <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground mb-4">
                        <li>Pain that radiates from the lower back to the buttock and down the back of the leg</li>
                        <li>Pain that ranges from mild to severe, often described as sharp or burning</li>
                        <li>Numbness, tingling, or muscle weakness in the affected leg</li>
                        <li>Pain that worsens with sitting or certain movements</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-resources/conditions/sciatica">Learn More</Link>
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
