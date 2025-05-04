import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  FileText,
  Brain,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";

export default function AgeSpecificSpineRecommendations() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Age-Specific Recommendations for a Youthful Spine"
        subtitle="A Neurosurgeon's Guide"
        backgroundImage="/images/patient-resources/spine-health-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                A well-functioning spine is fundamental to healthy ageing. But what your spine needs at 30 is vastly different from what it needs at 70. From the intervertebral discs to stabilising muscles and neural structures, every spinal component undergoes age-related changes. As a spinal neurosurgeon, I've seen firsthand how early habits either support or sabotage long-term spinal health.
              </p>

              <p>
                This guide is designed for both patients and general practitioners (GPs), with practical strategies and detailed examples across the age spectrum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* 20s & 30s Section */}
              <div className="border border-primary/20 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-4">In Your 20s & 30s: The "Indestructible" Phase – Or So It Seems</h2>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h3 className="text-xl font-semibold mb-3">Common Spine Issues</h3>
                  <ul className="space-y-2">
                    <li>Postural strain from prolonged screen time, gaming, and sedentary jobs</li>
                    <li>Improper lifting technique, especially during high-intensity training or weekend tasks</li>
                    <li>Ignoring low back or neck pain, assuming it will resolve spontaneously</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Spinal Care Priorities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Build muscle early</strong> – The strength you gain now becomes protective scaffolding for your spine.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Avoid sustained flexion</strong> – Sitting hunched over compresses lumbar discs. Break up sitting every 30 minutes.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Practice safe lifting</strong> – Always bend at the knees, engage your core, and keep loads close to your body.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Stay mobile</strong> – Spinal mobility work should be part of your daily routine.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Strength</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Deadlifts (with proper form)</li>
                      <li>Squats</li>
                      <li>Planks</li>
                      <li>Glute bridges</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Mobility</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Cat-Cow</li>
                      <li>Thoracic spine rotations</li>
                      <li>Hip flexor stretches</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Cardio</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Swimming</li>
                      <li>Running</li>
                      <li>Elliptical</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Case Example – Josh, 29, IT Consultant</h4>
                  <p className="text-sm">
                    Josh works 10-hour days at a desk and plays social footy on weekends. He presented with early signs of discogenic low back pain after attempting a heavy deadlift at the gym. Imaging showed early degenerative changes at L4-L5. With postural correction, core training, and technique refinement, his symptoms resolved. This highlights the need for preventive care even in the absence of structural damage.
                  </p>
                </div>
              </div>

              {/* 40s & 50s Section */}
              <div className="border border-primary/20 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-4">In Your 40s & 50s: The "Reality Check" Phase</h2>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h3 className="text-xl font-semibold mb-3">Common Spine Issues</h3>
                  <ul className="space-y-2">
                    <li>Onset of Degenerative Disc Disease (DDD)</li>
                    <li>Chronic stiffness and early morning tightness</li>
                    <li>Increased incidence of disc bulges, radiculopathy, and facet joint pain</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Spinal Care Priorities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Target spinal stabilisers</strong> – Strengthen glutes, transversus abdominis, and multifidus.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Balance intensity with recovery</strong> – Avoid overtraining; include mobility, hydration, and sleep as recovery pillars.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Control body weight</strong> – Increased weight compounds spinal load.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Seek early intervention</strong> – Don't ignore "minor" flare-ups—they're often the first warning signs.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Strength</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Bird Dogs</li>
                      <li>Side Planks</li>
                      <li>Standing Rows</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Flexibility</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Hamstring stretches</li>
                      <li>Spinal twists</li>
                      <li>Child's Pose</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Cardio</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Brisk walking</li>
                      <li>Cycling</li>
                      <li>Swimming</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Case Example – Anita, 46, Nurse</h4>
                  <p className="text-sm">
                    Anita reported persistent right-sided sciatica. She'd been compensating for low back pain by favouring one leg. MRI confirmed L5-S1 disc protrusion with nerve root impingement. Targeted physiotherapy, Pilates-based core rehab, and work ergonomics modification led to significant symptom relief. GPs should be alert to compensatory movement patterns that may accelerate DDD.
                  </p>
                </div>
              </div>

              {/* 60s & 70s Section */}
              <div className="border border-primary/20 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-4">In Your 60s & 70s: The "Maintenance Mode" Phase</h2>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h3 className="text-xl font-semibold mb-3">Common Spine Issues</h3>
                  <ul className="space-y-2">
                    <li>Spinal osteoarthritis, especially facet arthropathy</li>
                    <li>Loss of disc height and lumbar lordosis</li>
                    <li>Narrowing spinal canals (spinal stenosis) causing leg pain and weakness</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Spinal Care Priorities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Limit axial loading</strong> – Avoid barbell squats and other compressive exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Focus on balance and gait</strong> – Falls are a major cause of spinal fractures in this age group</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Preserve bone density</strong> – Through weight-bearing and resistance training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Maximise joint range</strong> – Particularly in the hips and thoracic spine</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Strength</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Chair squats</li>
                      <li>Resistance band rows</li>
                      <li>Step-ups</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Flexibility</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Seated spinal twists</li>
                      <li>Wall stretches</li>
                      <li>Pelvic tilts</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Cardio</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Tai Chi</li>
                      <li>Aqua walking</li>
                      <li>Stationary cycling</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Case Example – George, 68, Retired Mechanic</h4>
                  <p className="text-sm">
                    George presented with neurogenic claudication—leg pain brought on by walking and relieved by bending forward. Imaging revealed moderate lumbar spinal stenosis. Instead of surgery, he benefited from a walking program with forward-leaning posture, core stabilisation, and recumbent cycling. GP coordination for pain management and physical therapy was vital in his non-operative recovery.
                  </p>
                </div>
              </div>

              {/* 80s & Beyond Section */}
              <div className="border border-primary/20 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-4">In Your 80s and Beyond: The "Preserve & Protect" Phase</h2>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h3 className="text-xl font-semibold mb-3">Common Spine Issues</h3>
                  <ul className="space-y-2">
                    <li>Vertebral compression fractures, especially in the thoracolumbar region</li>
                    <li>Reduced proprioception and mobility</li>
                    <li>Chronic back pain from advanced DDD and facet hypertrophy</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Spinal Care Priorities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Avoid high-risk movements</strong> – No twisting, bending with weight, or unsupported standing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Keep moving—safely</strong> – Gentle, daily movements prevent deconditioning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Prioritise bone-friendly habits</strong> – Vitamin D, calcium, and fall-prevention strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Supportive seating and sleep</strong> – Correct posture during rest is just as important</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Strength</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Seated leg raises</li>
                      <li>Chair squats (with supervision)</li>
                      <li>Light resistance band pulls</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Flexibility</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Seated neck stretches</li>
                      <li>Gentle spinal mobilisation</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Cardio</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Indoor walking</li>
                      <li>Supervised balance drills</li>
                      <li>Modified Tai Chi</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Case Example – Margaret, 85, Widow</h4>
                  <p className="text-sm">
                    Margaret had a minor fall resulting in a T12 compression fracture. She had undiagnosed osteoporosis and a forward-flexed gait. Post-acute management included bracing, calcium and bisphosphonates, and a home-based spine-safe program. With GP oversight, she regained function and confidence, avoiding future falls. This case shows how fracture prevention must include pharmacologic and physical interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">BONUS: "Spine Don'ts" for Every Age Group</h2>

              <div className="bg-red-500/10 p-6 rounded-lg my-8">
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Don't ignore persistent back pain</strong> – Early treatment prevents chronicity</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Don't slouch</strong> – A hunched posture compresses discs and weakens core muscles</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Don't lift like you're invincible</strong> – Always use proper mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Don't stop moving</strong> – Immobility accelerates spinal ageing</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-6">Final Takeaway: Future-Proof Your Spine</h2>

              <ul className="space-y-4 list-none pl-0 my-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Mobility = Longevity</strong> – A flexible spine reduces pain and enhances function</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Stability is key</strong> – Strengthen core and glutes to protect your vertebrae</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Use age-appropriate strategies</strong> – Don't apply 20-year-old habits to a 60-year-old spine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>GPs: Refer early</strong> – Imaging, physiotherapy, and surgical evaluation are more effective when done proactively</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Patients: Stay informed</strong> – Know your limits, and respect your spine's evolving needs</span>
                </li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Need Personalised Guidance?</h3>
                <p>
                  Every spine is unique, and age-specific recommendations should be tailored to your individual condition. For a personalised assessment and age-appropriate spine care plan, book a consultation with Dr. Aliashkevich.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild>
                    <Link to="/appointments">Book a Consultation</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/patient-resources/spine-safe-exercises">View Spine-Safe Exercises</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Activity className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Spine-Safe Exercises</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Discover biomechanically sound exercises with detailed muscle engagement and psychophysiological benefits for managing DDD.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-safe-exercises">View Exercises</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Exercise & Pain Medication Risks</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Learn about the hidden risks of exercising while on pain medications and how to safely manage your spine health.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/exercise-pain-medication-risks">Read Article</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Spine & Brain Health</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Discover science-backed strategies for understanding, managing, and preventing chronic spinal and neurological conditions.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-and-brain-health">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
