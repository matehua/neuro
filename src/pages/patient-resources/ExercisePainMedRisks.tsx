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
  AlertTriangle,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function ExercisePainMedRisks() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="The Hidden Risks of Exercising While on Pain Medications"
        subtitle="A Spinal Neurosurgeon's Perspective"
        backgroundImage="/images/patient-resources/pain-management.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Many Australians with chronic back pain, including those with Degenerative Disc Disease (DDD), often rely on pain medications to maintain physical activity. While it may seem logical to "push through" discomfort with the aid of medication, doing so can significantly increase the risk of injury, delayed recovery, and long-term disability.
              </p>

              <p>
                As a spinal neurosurgeon, I frequently see patients whose exercise routines—when combined with painkillers—have worsened their spinal condition. This article outlines the biomedical, neurological, and psychophysiological reasons why exercising under the influence of pain medications may be unsafe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Risk 1 */}
              <div className="border border-amber-500/30 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Pain Medications Mask Warning Signs of Injury
                </h2>

                <p>
                  Pain is the body's natural alarm system, not an inconvenience. It helps you avoid movement that could cause further damage to your spine.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">How Pain Medications Interfere:</h3>
                <ul className="space-y-2">
                  <li><strong>NSAIDs</strong> (like ibuprofen, diclofenac, naproxen): Reduce inflammation and pain, often delaying recognition of injury.</li>
                  <li><strong>Opioids</strong> (e.g., oxycodone, tramadol): Suppress central pain processing, masking serious tissue stress or damage.</li>
                  <li><strong>Muscle relaxants</strong> (e.g., baclofen, cyclobenzaprine): Reduce muscle tone, increasing the risk of poor spinal control and movement errors.</li>
                </ul>

                <div className="bg-amber-500/10 p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    The Danger:
                  </h4>
                  <ul className="space-y-1">
                    <li>Pushing through movements that would normally hurt.</li>
                    <li>Worsening a disc bulge or annular tear unknowingly.</li>
                    <li>Missing subtle feedback from microtrauma that escalates over time.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <span className="text-primary mr-2">👉</span>
                    Case Example 1:
                  </h4>
                  <p className="mb-0">
                    Mark, a 55-year-old tradesman with multilevel lumbar DDD, resumed gardening after taking a double dose of over-the-counter NSAIDs. Feeling "fine," he spent 3 hours bending and lifting. The next morning, he couldn't straighten up. Imaging confirmed an L4-L5 disc herniation. He later required surgery and extended rehab that could've been avoided.
                  </p>
                </div>
              </div>

              {/* Risk 2 */}
              <div className="border border-amber-500/30 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Reduced Proprioception (Body Awareness in Space)
                </h2>

                <p>
                  Painkillers can dull the neuromuscular sense of position and balance, making it difficult to control complex movements and avoid falls or overload.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Common Consequences:</h3>
                <ul className="space-y-2">
                  <li>Altered joint position sense (especially with opioids and muscle relaxants).</li>
                  <li>Impaired reaction times and slower reflexes.</li>
                  <li>Reduced dynamic stability, leading to uneven pressure on spinal segments.</li>
                </ul>

                <div className="bg-amber-500/10 p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    The Danger:
                  </h4>
                  <ul className="space-y-1">
                    <li>Misjudging lifting mechanics or spinal alignment.</li>
                    <li>Failing to recruit stabilising muscles in time.</li>
                    <li>Compensating unknowingly, creating imbalances.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <span className="text-primary mr-2">👉</span>
                    Case Example 2:
                  </h4>
                  <p className="mb-0">
                    Emma, 43, had thoracolumbar DDD and was prescribed muscle relaxants after a flare-up. She attempted a home pilates workout involving spinal twists. Her feedback was dulled, and she over-rotated. Two days later, she developed new-onset right-sided back pain and paraesthesia. MRI revealed a small disc protrusion at T12-L1.
                  </p>
                </div>
              </div>

              {/* Risk 3 */}
              <div className="border border-amber-500/30 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Delayed Recovery and Healing
                </h2>

                <p>
                  While pain relief is important, medications can impair the body's natural healing mechanisms, especially when combined with inappropriate movement.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Mechanisms:</h3>
                <ul className="space-y-2">
                  <li>NSAIDs may blunt the inflammatory response crucial for soft tissue repair.</li>
                  <li>Pain suppression allows for overuse of already stressed tissues.</li>
                  <li>Muscle relaxants can inhibit key stabilising muscles, weakening core protection.</li>
                </ul>

                <div className="bg-amber-500/10 p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    The Danger:
                  </h4>
                  <ul className="space-y-1">
                    <li>Delayed muscle reconditioning.</li>
                    <li>Failure of disc healing.</li>
                    <li>Development of faulty movement patterns or over-recruitment of superficial muscles.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <span className="text-primary mr-2">👉</span>
                    Case Example 3:
                  </h4>
                  <p className="mb-0">
                    George, a 60-year-old with chronic L5-S1 disc degeneration, began glute-bridging exercises on advice from a physio. However, he used baclofen for pain before each session. His glutes and core failed to activate properly, leading him to arch his lower back excessively. Over weeks, his symptoms worsened, and imaging showed progression of disc collapse.
                  </p>
                </div>
              </div>

              {/* Risk 4 */}
              <div className="border border-amber-500/30 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Increased Risk of Falls and Accidents
                </h2>

                <p>
                  Pain medications frequently cause sedation, dizziness, and impaired coordination—a major risk during upright or loaded activities.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Effects to Consider:</h3>
                <ul className="space-y-2">
                  <li>Slower central processing (especially with opioids).</li>
                  <li>Decreased leg stability.</li>
                  <li>Inability to engage postural muscles in time to protect the spine.</li>
                </ul>

                <div className="bg-amber-500/10 p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    The Danger:
                  </h4>
                  <ul className="space-y-1">
                    <li>Sudden loss of balance during lunges or wall sits.</li>
                    <li>Falling while changing positions quickly.</li>
                    <li>Inability to react to unexpected instability or surface changes.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <span className="text-primary mr-2">👉</span>
                    Case Example 4:
                  </h4>
                  <p className="mb-0">
                    Helen, a 67-year-old retiree with early-stage DDD, took tramadol before a group exercise class. During standing squats, her legs fatigued suddenly. She fell backwards onto a step, causing an acute vertebral compression fracture at L2. She later needed bracing and prolonged rehab.
                  </p>
                </div>
              </div>

              {/* Risk 5 */}
              <div className="border border-amber-500/30 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  Overworking Injured Tissues Without Realising It
                </h2>

                <p>
                  Masking pain gives the illusion that the body is "ready," when in reality the spine may be structurally compromised.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Why It's a Problem:</h3>
                <ul className="space-y-2">
                  <li>Damaged discs and joints remain vulnerable even when pain is dulled.</li>
                  <li>Overexertion risks turning microtrauma into macrotrauma.</li>
                  <li>Patients are less likely to modify their form or scale back intensity.</li>
                </ul>

                <div className="bg-amber-500/10 p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    The Danger:
                  </h4>
                  <ul className="space-y-1">
                    <li>Repetitive injury to degenerated areas.</li>
                    <li>Over-reliance on passive structures (ligaments, discs) instead of muscles.</li>
                    <li>Escalation of inflammation, leading to more severe and chronic pain states.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <span className="text-primary mr-2">👉</span>
                    Case Example 5:
                  </h4>
                  <p className="mb-0">
                    Toby, a 38-year-old powerlifter with early lumbar degeneration, took oxycodone to get through a strength session. Pain-free, he lifted his usual heavy loads. The next day, he woke with severe leg pain and numbness. MRI revealed an L5-S1 extrusion with nerve root compression. He required microdiscectomy and a 6-month recovery.
                  </p>
                </div>
              </div>

              {/* Risk 6 */}
              <div className="border border-amber-500/30 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                  The Psychological Trap: False Confidence
                </h2>

                <p>
                  Perhaps the most dangerous effect of painkillers is false confidence—the belief that everything is fine because it doesn't hurt anymore.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">How It Works:</h3>
                <ul className="space-y-2">
                  <li>The brain interprets lack of pain as "healed tissue."</li>
                  <li>People become less cautious, skip warmups, or increase intensity too fast.</li>
                  <li>There is often a disconnect between perceived ability and structural reality.</li>
                </ul>

                <div className="bg-amber-500/10 p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    The Danger:
                  </h4>
                  <ul className="space-y-1">
                    <li>Returning to impact-based or rotational activities prematurely.</li>
                    <li>Ignoring the need for technique correction or supervision.</li>
                    <li>Progressing rehab faster than the tissue can adapt.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4 className="font-bold flex items-center mb-3">
                    <span className="text-primary mr-2">👉</span>
                    Case Example 6:
                  </h4>
                  <p className="mb-0">
                    Simone, 47, with mild scoliosis and cervicothoracic junction pain, took extra naproxen before a pilates class. She felt unusually free and pushed harder through side bends and extensions. Two days later, she developed new shoulder blade burning and arm tingling. MRI showed increased facet loading at C7-T1 and soft tissue strain. She required a 3-month rehab reset.
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
              <h2 className="text-2xl font-bold mb-6">When Is It Safe to Exercise While on Pain Medication?</h2>

              <p>
                Some medications—especially low-dose NSAIDs—may be safely used for light movement, but only with proper awareness and guidance.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">General Recommendations for Patients and GPs:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wait until the medication's peak effects have worn off before performing demanding movements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stick to gentle, spine-safe movements (e.g., pelvic tilts, walking, light hydrotherapy).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Avoid twisting, bending, or heavy resistance training while medicated.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Engage physiotherapy guidance to ensure correct form and muscle activation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Always consult your GP or treating specialist before combining exercise with pain medications.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-6">Better Approach: Restore Movement Safely Without Relying on Painkillers</h2>

              <p>Long-term spine health depends on:</p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Controlled, progressive rehabilitation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Activation of deep stabilisers (e.g., multifidus, transversus abdominis)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Movement retraining to re-establish pain-free motor control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Recognition that pain relief does not equal structural healing</span>
                </li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">🔍</span>
                  Final Thoughts: Move Smart, Not Just Pain-Free
                </h3>
                <p>
                  Pain medication is a short-term aid, not a long-term strategy. It should never be used as a pre-workout booster or substitute for proper rehabilitation.
                </p>
                <p className="mb-0">
                  If exercise causes pain, it's not a sign to take more medication—it's a signal to adjust the movement or consult a healthcare professional.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Key Takeaways for Patients and GPs:</h3>
              <ul className="space-y-3">
                <li>Painkillers can mask important biomechanical warnings.</li>
                <li>They impair proprioception and neuromuscular control.</li>
                <li>They delay healing by interfering with inflammation and stabilisation.</li>
                <li>False confidence may result in avoidable injuries, disc worsening, or even surgical failure.</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Need Personalised Guidance?</h3>
                <p>
                  For a personalised assessment and tailored exercise program that considers your specific condition and medication regimen, book a consultation with Dr. Aliashkevich.
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
                  <h3 className="text-xl font-semibold">Cervical Spine Exercises</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Learn about exercises for transitioning off pain medications with our comprehensive guide for cervical spine conditions.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/cervical-spine-exercises">View Guide</Link>
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
