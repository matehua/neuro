import React, { useEffect } from 'react';
import { Brain, FileText, Activity, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHeader from '@/components/PageHeader';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const SpineAndBrainHealth: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Popular topics
  const popularTopics = [
    {
      title: "The Best Daily Habits to Prevent Spinal Degeneration (Backed by Science)",
      link: "#",
      icon: <Activity className="h-5 w-5 text-primary" />
    },
    {
      title: "How to Sleep for Maximum Spine Recovery and Pain Relief",
      link: "#",
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    {
      title: "The Truth About Pain Medications: When They Help and When They Harm",
      link: "#",
      icon: <FileText className="h-5 w-5 text-primary" />
    },
    {
      title: "Posture Myths Debunked: What Really Matters for Your Spine",
      link: "#",
      icon: <Brain className="h-5 w-5 text-primary" />
    },
    {
      title: "Exercises That Actually Work (and Those That Can Make Your Pain Worse)",
      link: "/patient-resources/exercise-library",
      icon: <Activity className="h-5 w-5 text-primary" />
    },
    {
      title: "Artificial Disc Replacement vs. Spinal Fusion: Which One is Right for You?",
      link: "/expertise/cervical-disc-replacement",
      icon: <FileText className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title="Your Expert Guide to Chronic Spine and Brain Health"
        subtitle="Science-Backed Strategies for a Healthier Spine"
        backgroundImage="/images/patient-resources/spine-health-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                If you've been told that chronic back or neck pain is just a "normal part of ageing" or that surgery is your only real option—think again. While degenerative spinal and neurological conditions are common, suffering through them doesn't have to be inevitable.
              </p>

              <p>
                Dr Aliashkevich can provide scientifically proven, expert-driven strategies to help you understand, manage, and prevent chronic spinal and neurological conditions—without unnecessary surgeries or medications. Backed by over 30 years of neurosurgical experience, his approach is rooted in evidence-based medicine, biomechanics, and neurophysiology to keep your spine strong, functional, and pain-free.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why Your Spine and Brain Health Matter More Than You Think</h2>

              <p>
                Your spine isn't just a stack of vertebrae—it's an intricate biomechanical and neurological system that controls movement, stabilises posture, and protects your spinal cord. When compromised by conditions like degenerative disc disease (DDD), spinal stenosis, facet joint arthropathy, or spondylosis, even simple activities can become painful challenges.
              </p>

              <p>
                Your brain and nervous system also play a vital role in pain perception, muscle function, and healing. Chronic spinal conditions are often mismanaged because treatments focus only on structural changes, ignoring the neurological, inflammatory, and lifestyle factors that contribute to ongoing pain.
              </p>

              <p>
                Scientific research has shown that neuroplasticity, inflammation regulation, and movement therapy can profoundly impact spinal health. This means your daily habits—from how you sit to what you eat—can determine the future of your spine.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Classification of Spinal Degeneration: Understanding Severity</h2>

              <p>
                Spinal conditions progress through defined stages, influencing treatment decisions:
              </p>

              <div className="space-y-6 my-8">
                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Mild Degeneration</h3>
                      <p className="mt-2">
                        Early wear and tear with minor disc dehydration, occasional stiffness, and transient pain. Lifestyle modifications and posture correction are key.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Moderate Degeneration</h3>
                      <p className="mt-2">
                        Disc height loss, facet joint stress, and mild spinal canal narrowing leading to chronic pain and stiffness. Physical therapy, anti-inflammatory strategies, and structured rehabilitation are essential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Severe Degeneration</h3>
                      <p className="mt-2">
                        Marked disc collapse, osteophyte formation, and nerve compression causing persistent pain, radiculopathy, or weakness. Conservative management remains first-line, but surgical options may be considered.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Advanced & Refractory Pathology</h3>
                      <p className="mt-2">
                        Disc herniation with nerve root impingement, severe stenosis, or instability. In cases where all non-surgical methods fail, artificial disc replacement (ADR) or spinal fusion may be required for pain relief and function restoration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">What You'll Learn Here (That Your GP Didn't Have Time to Explain)</h2>

              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>The Science of Spinal Degeneration:</strong> What really happens as your spine ages and how to slow the process.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Pain vs. Structural Damage:</strong> Why you might have pain without injury—and why that changes your treatment options.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Surgery, Injections, or Lifestyle?:</strong> The real evidence behind common treatments and what actually works.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>The Brain-Spine Connection:</strong> How stress, inflammation, and sleep quality influence spinal pain.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Proven Strategies for Prevention & Recovery:</strong> The best ways to protect your spine at any age, based on research-backed methods.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Advanced Surgical Options:</strong> When artificial disc replacement or spinal fusion becomes necessary.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who is This Website For?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="p-4 border border-primary/20 rounded-md">
                  <p className="mb-0">
                    🔹 People with <strong>Chronic Back or Neck Pain</strong> looking for long-term solutions beyond temporary relief.
                  </p>
                </div>
                <div className="p-4 border border-primary/20 rounded-md">
                  <p className="mb-0">
                    🔹 Those <strong>Diagnosed with Degenerative Spinal Conditions</strong> who want science-backed management strategies.
                  </p>
                </div>
                <div className="p-4 border border-primary/20 rounded-md">
                  <p className="mb-0">
                    🔹 Individuals <strong>Recovering from Spine or Neurological Injuries</strong> needing expert-led rehabilitation advice.
                  </p>
                </div>
                <div className="p-4 border border-primary/20 rounded-md">
                  <p className="mb-0">
                    🔹 <strong>Health-Conscious Professionals</strong> who spend hours at a desk and want to prevent spinal degeneration.
                  </p>
                </div>
                <div className="p-4 border border-primary/20 rounded-md md:col-span-2">
                  <p className="mb-0">
                    🔹 <strong>Informed Patients</strong> who want research-based guidance instead of generic, one-size-fits-all advice.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Your Expert Guide: A Neurosurgeon Dedicated to Keeping You Off the Operating Table</h2>

              <p>
                This site is led by a renowned neurosurgeon with over three decades of expertise in spinal and neurological conditions. Unlike the mainstream approach that often prioritises surgery and medication, we focus on functional restoration, movement science, and lifestyle-driven recovery—because managing your spine should be about more than just treating symptoms.
              </p>

              <p>
                Science tells us that strengthening the core, optimising posture, and reducing inflammation are key to managing spinal degeneration. But let's be honest—nobody wants to spend an hour a day doing rehab exercises they'll never stick to. That's why we provide real-world, sustainable solutions that integrate seamlessly into your lifestyle.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Start Your Journey to a Stronger, Pain-Free Spine Today</h2>

              <p>
                If you're ready to move better, feel stronger, and take control of your spinal health, you're in the right place. Our expert-driven content, backed by clinical research, will help you make informed decisions about your spine and neurological health.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">💡 Popular Topics to Get You Started:</h3>
                <ul className="space-y-4 list-none pl-0">
                  {popularTopics?.map((topic: any, index: any) => (
                    <li key={index} className="flex items-start">
                      {topic.icon}
                      <Link to={topic.link} className="ml-2 text-primary hover:underline">
                        ✅ {topic.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">🩺 Want Personalised Advice?</h3>
                <p>
                  Subscribe for expert insights or book a consultation. When it comes to your spine, good advice is priceless—but bad advice can be life-changing (for all the wrong reasons).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild>
                    <Link to="/appointments">Book a Consultation</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/patient-resources/individual-spine-health-program">Try Our Spine Health Program</Link>
                  </Button>
                </div>
              </div>

              <div className="text-center mt-12 mb-6">
                <p className="text-xl font-bold">Because Your Spine is for Life—Take Care of It</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Activity className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Exercise Library</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Access our comprehensive library of spine-specific exercises designed by specialists to strengthen, stabilize, and rehabilitate.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/exercise-library">View Exercises</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Spine Conditions Library</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Learn about specific spine conditions, their causes, symptoms, and evidence-based treatment approaches.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-conditions-library">Explore Conditions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Lifestyle Modifications</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Discover practical lifestyle changes that can significantly improve spine health and reduce pain in your daily life.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/lifestyle-modifications">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </StandardPageLayout>
  );
};

SpineAndBrainHealth.displayName = 'SpineAndBrainHealth';

export default SpineAndBrainHealth;
