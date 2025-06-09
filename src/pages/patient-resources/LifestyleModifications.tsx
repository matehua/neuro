import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function LifestyleModifications() {
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
              src="/images/patient-resources/proper-posture.jpg"
              alt="Person with good posture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Lifestyle & Activity Modifications
              </h1>
              <p className="text-muted-foreground mb-8">
                Evidence-based recommendations to help manage spine conditions and improve quality of life through lifestyle changes.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Importance of Lifestyle Modifications</h2>
                <p className="text-muted-foreground mb-4">
                  Lifestyle and activity modifications play a crucial role in managing spine conditions and can significantly impact your recovery and long-term health. Research shows that appropriate lifestyle changes can reduce pain, improve function, and in some cases, eliminate the need for more invasive treatments.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our comprehensive approach addresses multiple aspects of your daily life that may be contributing to your condition or affecting your recovery. By making targeted changes to these areas, you can take an active role in your treatment and improve your outcomes.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/patient-resources/ergonomic-workstation.jpg"
                  alt="Ergonomic workstation setup"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  Proper ergonomic setup can significantly reduce strain on your spine during daily activities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Condition-Specific Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Condition-Specific Recommendations</h2>
            <Tabs defaultValue="neck" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="neck" className="text-center py-3">Neck Conditions</TabsTrigger>
                <TabsTrigger value="back" className="text-center py-3">Back Conditions</TabsTrigger>
              </TabsList>

              <TabsContent value="neck" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Neck Conditions</h3>
                    <p className="text-muted-foreground mb-6">
                      Neck pain and conditions can be significantly influenced by daily habits and activities. Here are evidence-based recommendations for common neck conditions:
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/patient-resources/neck-stretching.jpg"
                      alt="Neck stretching exercise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cervical-disc-herniation">
                    <AccordionTrigger className="text-lg font-semibold">Cervical Disc Herniation</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Cervical disc herniation occurs when the soft inner material of a disc in your neck protrudes through the tougher outer layer, potentially irritating nearby nerves and causing pain, numbness, or weakness.
                      </p>
                      <h4 className="text-base font-semibold">Recommended Lifestyle Modifications:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Maintain proper posture, especially when using electronic devices</li>
                        <li>Take frequent breaks from prolonged sitting or screen time</li>
                        <li>Use ergonomic workstations with monitors at eye level</li>
                        <li>Sleep with proper neck support using a cervical pillow</li>
                        <li>Avoid heavy lifting and activities that strain the neck</li>
                        <li>Apply ice for acute pain and heat for chronic discomfort</li>
                        <li>Practice gentle neck stretches and strengthening exercises as recommended by your healthcare provider</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cervical-spondylosis">
                    <AccordionTrigger className="text-lg font-semibold">Cervical Spondylosis</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Cervical spondylosis is age-related wear and tear affecting the spinal discs and joints in your neck, leading to degenerative changes that can cause pain, stiffness, and sometimes nerve compression.
                      </p>
                      <h4 className="text-base font-semibold">Recommended Lifestyle Modifications:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Maintain a healthy weight to reduce stress on the cervical spine</li>
                        <li>Stay hydrated to support disc health</li>
                        <li>Avoid prolonged static positions; change positions frequently</li>
                        <li>Use proper body mechanics when lifting objects</li>
                        <li>Consider swimming or water therapy for low-impact exercise</li>
                        <li>Quit smoking, as it accelerates disc degeneration</li>
                        <li>Manage stress through mindfulness, meditation, or other relaxation techniques</li>
                        <li>Apply heat therapy for stiffness and pain relief</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cervical-radiculopathy">
                    <AccordionTrigger className="text-lg font-semibold">Cervical Radiculopathy</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Cervical radiculopathy occurs when a nerve root in the cervical spine becomes compressed or irritated, causing pain, numbness, tingling, or weakness that radiates into the shoulder, arm, or hand.
                      </p>
                      <h4 className="text-base font-semibold">Recommended Lifestyle Modifications:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Avoid activities that worsen symptoms, especially overhead activities</li>
                        <li>Modify your workstation to maintain neutral neck positioning</li>
                        <li>Take frequent breaks to stretch and change positions</li>
                        <li>Use hands-free devices for phone calls</li>
                        <li>Consider a cervical traction device as recommended by your healthcare provider</li>
                        <li>Apply ice for acute flare-ups</li>
                        <li>Avoid carrying heavy bags on the affected side</li>
                        <li>Practice gentle nerve gliding exercises as prescribed by your physical therapist</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="back" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Back Conditions</h3>
                    <p className="text-muted-foreground mb-6">
                      Back pain and conditions can significantly impact daily life, but appropriate lifestyle modifications can help manage symptoms and improve function:
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/patient-resources/back-exercise.jpg"
                      alt="Back exercise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="lumbar-disc-herniation">
                    <AccordionTrigger className="text-lg font-semibold">Lumbar Disc Herniation</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Lumbar disc herniation occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior casing, potentially irritating nearby nerves and causing back pain and sciatica.
                      </p>
                      <h4 className="text-base font-semibold">Recommended Lifestyle Modifications:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Avoid prolonged sitting; take frequent standing breaks</li>
                        <li>Use proper lifting techniques: bend at the knees, not the waist</li>
                        <li>Sleep on a medium-firm mattress in a side-lying position with a pillow between knees</li>
                        <li>Maintain a healthy weight to reduce pressure on the spine</li>
                        <li>Apply ice for acute pain (first 48-72 hours) and heat for chronic discomfort</li>
                        <li>Avoid high-impact activities and exercises that involve twisting or bending</li>
                        <li>Consider walking, swimming, or stationary cycling for low-impact exercise</li>
                        <li>Practice specific core-strengthening exercises as recommended by your healthcare provider</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="spinal-stenosis">
                    <AccordionTrigger className="text-lg font-semibold">Spinal Stenosis</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Spinal stenosis is a narrowing of the spinal canal that puts pressure on the spinal cord and nerves, causing pain, numbness, and weakness in the back and legs, often worsening with walking or standing.
                      </p>
                      <h4 className="text-base font-semibold">Recommended Lifestyle Modifications:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Adopt a slightly forward-leaning posture when walking to reduce symptoms</li>
                        <li>Use a walker or shopping cart for support if needed</li>
                        <li>Take sitting breaks when walking to alleviate symptoms</li>
                        <li>Consider stationary cycling or swimming instead of walking for exercise</li>
                        <li>Avoid activities that extend the spine, such as walking downhill or looking up</li>
                        <li>Use a recliner chair to reduce pressure on the spine</li>
                        <li>Perform flexion-based exercises as recommended by your physical therapist</li>
                        <li>Maintain a healthy weight to reduce stress on the spine</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="spondylolisthesis">
                    <AccordionTrigger className="text-lg font-semibold">Spondylolisthesis</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Spondylolisthesis occurs when one vertebra slips forward over the one below it, potentially causing back pain, leg pain, and in some cases, neurological symptoms due to nerve compression.
                      </p>
                      <h4 className="text-base font-semibold">Recommended Lifestyle Modifications:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Avoid activities that hyperextend the spine, such as gymnastics or certain yoga poses</li>
                        <li>Limit high-impact activities and contact sports</li>
                        <li>Use proper body mechanics when lifting</li>
                        <li>Maintain a healthy weight to reduce stress on the spine</li>
                        <li>Consider wearing a supportive brace during activities as recommended</li>
                        <li>Focus on core-strengthening exercises to stabilize the spine</li>
                        <li>Modify your workspace to maintain neutral spine positioning</li>
                        <li>Sleep on a supportive mattress with proper pillow support</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Treatment Modalities Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Treatment Modalities</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              There are various approaches to managing spine conditions, each with its own benefits and considerations. Understanding these options can help you make informed decisions about your care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/patient-resources/weight-management.jpg"
                    alt="Weight management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Weight Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Reduces pressure on spinal discs and joints</li>
                    <li>Decreases inflammatory markers in the body</li>
                    <li>Improves mobility and function</li>
                    <li>Enhances effectiveness of other treatments</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Considerations:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Requires consistent lifestyle changes</li>
                    <li>Results may take time to impact symptoms</li>
                    <li>Should be approached gradually with medical guidance</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/individual-spine-health-program">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/patient-resources/smoking-cessation.jpg"
                    alt="Smoking cessation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Smoking Cessation</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Improves blood flow to spinal discs and tissues</li>
                    <li>Enhances healing and recovery</li>
                    <li>Reduces risk of surgical complications</li>
                    <li>Slows disc degeneration process</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Considerations:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>May require multiple attempts and support strategies</li>
                    <li>Withdrawal symptoms can be challenging</li>
                    <li>Benefits to spine health increase over time</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/individual-spine-health-program">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/patient-resources/physiotherapy.jpg"
                    alt="Physiotherapy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Physiotherapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Improves strength, flexibility, and posture</li>
                    <li>Reduces pain through targeted exercises</li>
                    <li>Teaches proper body mechanics</li>
                    <li>Non-invasive approach with minimal risks</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Considerations:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Requires consistent participation and home exercises</li>
                    <li>Results may take weeks or months</li>
                    <li>May not be sufficient for severe structural problems</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/individual-spine-health-program">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <Card className="bg-card shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/patient-resources/hydrotherapy.jpg"
                    alt="Hydrotherapy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Hydrotherapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Reduces weight-bearing stress on joints</li>
                    <li>Provides natural resistance for muscle strengthening</li>
                    <li>Warm water helps relax muscles and reduce pain</li>
                    <li>Improves circulation and reduces inflammation</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Considerations:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Requires access to appropriate facilities</li>
                    <li>May not be suitable for those with certain skin conditions</li>
                    <li>Should be performed under professional guidance initially</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/individual-spine-health-program">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Kaiser Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Structured approach to spine rehabilitation</li>
                    <li>Combines exercise, education, and behavioral strategies</li>
                    <li>Focuses on functional improvement and pain management</li>
                    <li>Evidence-based protocols with proven outcomes</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Considerations:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Requires significant time commitment</li>
                    <li>May not be available in all locations</li>
                    <li>Best results require full participation in all program components</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/individual-spine-health-program">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Pain Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Multimodal approach to controlling pain</li>
                    <li>Can include medications, injections, and non-pharmacological methods</li>
                    <li>Improves quality of life and function</li>
                    <li>Can be tailored to individual needs and preferences</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Considerations:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Some medications carry risks of side effects or dependency</li>
                    <li>Addresses symptoms rather than underlying causes</li>
                    <li>Most effective when combined with other treatment approaches</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/patient-resources/individual-spine-health-program">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Interventional Procedures Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Interventional Procedures & Minimally Invasive Surgery</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              When conservative treatments don't provide adequate relief, interventional procedures or minimally invasive surgeries may be considered. These approaches aim to provide targeted treatment with less tissue disruption and faster recovery than traditional surgery.
            </p>

            <Tabs defaultValue="interventional" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="interventional" className="text-center py-3">Interventional Pain Procedures</TabsTrigger>
                <TabsTrigger value="minimally-invasive" className="text-center py-3">Minimally Invasive Surgery</TabsTrigger>
              </TabsList>

              <TabsContent value="interventional" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Interventional Pain Procedures</h3>
                    <p className="text-muted-foreground mb-6">
                      Interventional pain procedures are minimally invasive techniques that target the source of pain directly. They can be diagnostic, therapeutic, or both, and are typically performed on an outpatient basis.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/patient-resources/interventional-pain.jpg"
                      alt="Interventional pain procedure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="epidural-steroid">
                    <AccordionTrigger className="text-lg font-semibold">Epidural Steroid Injections</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Epidural steroid injections deliver anti-inflammatory medication directly into the epidural space around the spinal cord and nerve roots to reduce inflammation and pain.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Radicular pain (sciatica, radiculopathy)</li>
                        <li>Disc herniations</li>
                        <li>Spinal stenosis</li>
                        <li>Degenerative disc disease with inflammatory component</li>
                      </ul>
                      <h4 className="text-base font-semibold">Considerations:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Effects are typically temporary (weeks to months)</li>
                        <li>Limited number of injections recommended per year</li>
                        <li>Success rates vary depending on the condition</li>
                        <li>Performed under fluoroscopic (X-ray) or CT guidance for accuracy</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="facet-joint">
                    <AccordionTrigger className="text-lg font-semibold">Facet Joint Injections & Radiofrequency Ablation</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Facet joint injections deliver anti-inflammatory medication directly into the facet joints to reduce pain. Radiofrequency ablation uses heat to disrupt the nerve signals from the facet joints to provide longer-lasting pain relief.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Facet joint arthritis or inflammation</li>
                        <li>Mechanical back or neck pain</li>
                        <li>Pain that worsens with extension or rotation</li>
                      </ul>
                      <h4 className="text-base font-semibold">Considerations:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Diagnostic blocks are performed first to confirm facet joint as pain source</li>
                        <li>Radiofrequency ablation can provide relief for 6-12 months or longer</li>
                        <li>Nerves may regenerate, requiring repeat procedures</li>
                        <li>Minimal recovery time needed</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="sacroiliac">
                    <AccordionTrigger className="text-lg font-semibold">Sacroiliac Joint Injections</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Sacroiliac joint injections deliver anti-inflammatory medication directly into the SI joint to reduce pain and inflammation.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Sacroiliac joint dysfunction or inflammation</li>
                        <li>Lower back pain that may radiate to buttocks or upper leg</li>
                        <li>Pain that worsens with sitting, standing from seated position, or climbing stairs</li>
                      </ul>
                      <h4 className="text-base font-semibold">Considerations:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Can be both diagnostic and therapeutic</li>
                        <li>Performed under fluoroscopic or CT guidance</li>
                        <li>May be combined with physical therapy for best results</li>
                        <li>Relief duration varies from weeks to months</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nerve-blocks">
                    <AccordionTrigger className="text-lg font-semibold">Selective Nerve Root Blocks</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Selective nerve root blocks target specific nerve roots with local anesthetic and anti-inflammatory medication to reduce pain and inflammation.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Radicular pain from specific nerve root compression</li>
                        <li>Diagnostic purposes to identify the specific source of pain</li>
                        <li>Foraminal stenosis</li>
                      </ul>
                      <h4 className="text-base font-semibold">Considerations:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>More targeted than epidural injections</li>
                        <li>Valuable diagnostic tool when multiple levels could be causing symptoms</li>
                        <li>Performed under fluoroscopic guidance</li>
                        <li>Temporary relief that may help guide further treatment decisions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Case Example: Lumbar Radiculopathy</h4>
                  <p className="text-muted-foreground mb-4">
                    A 45-year-old office worker presented with right-sided lower back pain radiating down the leg, consistent with L5 radiculopathy. After six weeks of conservative treatment with limited improvement, an epidural steroid injection was performed. This provided significant pain relief, allowing the patient to engage more effectively in physical therapy. The combination of the injection and targeted physical therapy led to complete resolution of symptoms within three months, avoiding the need for surgery.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="minimally-invasive" className="bg-card p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Minimally Invasive Surgery</h3>
                    <p className="text-muted-foreground mb-6">
                      Minimally invasive surgical techniques use smaller incisions and specialized instruments to achieve the same goals as traditional open surgery, but with less tissue damage, reduced pain, and faster recovery.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/patient-resources/minimally-invasive-surgery.jpg"
                      alt="Minimally invasive surgery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="microdiscectomy">
                    <AccordionTrigger className="text-lg font-semibold">Microdiscectomy</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Microdiscectomy is a minimally invasive procedure to remove the portion of a herniated disc that is pressing on a nerve root or the spinal cord, using microscopic visualization for precision.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Herniated discs with radicular symptoms (leg pain, numbness, weakness)</li>
                        <li>Patients who have failed conservative treatment</li>
                        <li>Cases with clear correlation between imaging findings and symptoms</li>
                      </ul>
                      <h4 className="text-base font-semibold">Advantages:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Small incision (1-2 cm)</li>
                        <li>Minimal muscle disruption</li>
                        <li>Often performed as day surgery</li>
                        <li>Quick recovery (return to light activities within 1-2 weeks)</li>
                        <li>High success rate for appropriate candidates (85-95%)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="endoscopic">
                    <AccordionTrigger className="text-lg font-semibold">Endoscopic Spine Surgery</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Endoscopic spine surgery uses a small camera (endoscope) and specialized instruments inserted through tiny incisions to visualize and treat spinal conditions.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Disc herniations</li>
                        <li>Foraminal stenosis</li>
                        <li>Some cases of spinal stenosis</li>
                        <li>Patients seeking the least invasive surgical option</li>
                      </ul>
                      <h4 className="text-base font-semibold">Advantages:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Extremely small incisions (7-8 mm)</li>
                        <li>Minimal tissue disruption</li>
                        <li>Reduced postoperative pain</li>
                        <li>Faster recovery than traditional surgery</li>
                        <li>Can be performed under local anesthesia in some cases</li>
                        <li>Often same-day discharge</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disc-replacement">
                    <AccordionTrigger className="text-lg font-semibold">Artificial Disc Replacement</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Artificial disc replacement is a motion-preserving surgery that replaces a damaged disc with an artificial device designed to maintain normal spinal movement.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Symptomatic degenerative disc disease</li>
                        <li>Younger, active patients</li>
                        <li>Single or multi-level disc disease (depending on location)</li>
                        <li>Patients seeking to maintain motion and potentially reduce adjacent segment degeneration</li>
                      </ul>
                      <h4 className="text-base font-semibold">Advantages:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Preserves motion at the treated level</li>
                        <li>May reduce stress on adjacent segments compared to fusion</li>
                        <li>Faster recovery than traditional fusion</li>
                        <li>No need for bone graft</li>
                        <li>Potential for reduced adjacent segment disease long-term</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="minimally-invasive-fusion">
                    <AccordionTrigger className="text-lg font-semibold">Minimally Invasive Fusion</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        Minimally invasive fusion techniques achieve spinal fusion (joining two or more vertebrae) using smaller incisions and less muscle disruption than traditional open fusion surgery.
                      </p>
                      <h4 className="text-base font-semibold">Best for:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Spondylolisthesis</li>
                        <li>Degenerative disc disease with instability</li>
                        <li>Recurrent disc herniation</li>
                        <li>Some cases of spinal stenosis with instability</li>
                      </ul>
                      <h4 className="text-base font-semibold">Advantages:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Smaller incisions than traditional open fusion</li>
                        <li>Less muscle damage and blood loss</li>
                        <li>Reduced postoperative pain</li>
                        <li>Shorter hospital stay</li>
                        <li>Faster initial recovery</li>
                        <li>Same fusion rates as open procedures when properly performed</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Case Example: Cervical Disc Replacement</h4>
                  <p className="text-muted-foreground mb-4">
                    A 42-year-old teacher with cervical radiculopathy from C5-6 disc herniation experienced persistent arm pain and numbness despite three months of conservative treatment. After careful evaluation, she underwent cervical disc replacement surgery. The procedure was performed through a small anterior neck incision, and she was discharged the following day. Within two weeks, her arm pain had resolved completely, and she returned to work after four weeks with full neck mobility preserved. At two-year follow-up, she remained pain-free with excellent range of motion and no signs of adjacent segment degeneration.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Case Examples Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Case Examples</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              The following real-world examples demonstrate how comprehensive lifestyle modifications can lead to significant improvements in spine conditions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Case 1: Chronic Neck Pain with Radiculopathy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Patient Profile:</h4>
                    <p className="text-muted-foreground">
                      A 38-year-old software developer with a 2-year history of neck pain and right arm numbness. MRI showed C5-C6 disc herniation with nerve root compression.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Lifestyle Modifications Implemented:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Ergonomic workstation setup with monitor at eye level</li>
                      <li>Regular breaks every 30 minutes using a timer app</li>
                      <li>Specific neck strengthening exercises 3 times weekly</li>
                      <li>Posture correction training</li>
                      <li>Sleep position modification with cervical pillow</li>
                      <li>Stress reduction through daily 15-minute meditation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">
                      After 3 months, the patient reported 70% reduction in neck pain and complete resolution of arm numbness. By 6 months, they were able to return to recreational tennis with minimal discomfort. Follow-up MRI at 1 year showed reduced disc herniation and decreased nerve compression.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Case 2: Lumbar Spinal Stenosis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Patient Profile:</h4>
                    <p className="text-muted-foreground">
                      A 62-year-old retired teacher with progressive lower back pain and leg pain when walking. Diagnosed with moderate lumbar spinal stenosis at L3-L4 and L4-L5.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Lifestyle Modifications Implemented:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Weight loss program (lost 12kg over 6 months)</li>
                      <li>Aquatic therapy twice weekly</li>
                      <li>Flexion-based exercise program</li>
                      <li>Walking with slight forward lean using walking poles</li>
                      <li>Avoidance of extension activities</li>
                      <li>Anti-inflammatory diet</li>
                      <li>Use of recliner chair instead of upright sitting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">
                      Walking tolerance improved from 5 minutes to 30 minutes without pain. Back pain decreased from 7/10 to 2/10 on pain scale. Patient was able to avoid surgery and maintain improved function for over 2 years with continued lifestyle management.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Case 3: Degenerative Disc Disease with Chronic Low Back Pain</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Patient Profile:</h4>
                    <p className="text-muted-foreground">
                      A 45-year-old construction worker with 5-year history of low back pain. Imaging showed multilevel degenerative disc disease and facet arthropathy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Lifestyle Modifications Implemented:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Smoking cessation program (quit after 20-year history)</li>
                      <li>Job modification to reduce heavy lifting</li>
                      <li>Core strengthening program</li>
                      <li>Proper body mechanics training</li>
                      <li>Weight loss of 8kg</li>
                      <li>Sleep surface change to medium-firm mattress</li>
                      <li>Regular use of heat therapy for pain management</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">
                      Pain reduced from daily 8/10 to intermittent 3/10. Able to return to modified work duties without medication. Reported improved sleep quality and energy levels. Avoided recommended fusion surgery and maintained improvement for over 3 years.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Case 4: Cervical Spondylosis with Headaches</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Patient Profile:</h4>
                    <p className="text-muted-foreground">
                      A 52-year-old office manager with chronic neck pain and frequent tension headaches. Imaging showed cervical spondylosis with moderate degeneration at C4-C5 and C5-C6.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Lifestyle Modifications Implemented:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Workstation ergonomic assessment and modification</li>
                      <li>Hands-free phone headset</li>
                      <li>Gentle neck mobilization exercises</li>
                      <li>Upper trapezius and levator scapulae stretching</li>
                      <li>Stress management through yoga (modified for neck safety)</li>
                      <li>Hydration increase to 2L water daily</li>
                      <li>Trigger point self-massage techniques</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">
                      Headache frequency decreased from 4-5 times weekly to 2-3 times monthly. Neck pain reduced by 60%. Able to discontinue regular use of pain medication. Reported improved productivity at work and better quality of life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Take the First Step Toward Improvement</h2>
              <p className="text-muted-foreground mb-8">
                Making lifestyle changes can significantly improve your spine health and quality of life. Our team is here to support you with personalized recommendations and guidance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/patient-resources/assessment-tools">Take Assessment</Link>
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
