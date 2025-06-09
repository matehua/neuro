import React, { useEffect } from "react";
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
  Clock
} from "lucide-react";

export default function CervicalSpineExercises() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Cervical Spine Exercises for Transitioning Off Pain Medications"
        subtitle="A Neurosurgeon's Practical Guide to Regaining Control, Precision, and Confidence"
        backgroundImage="/images/patient-resources/cervical-exercise.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                When weaning off pain medications after a cervical spine condition — whether it's degenerative disc disease (DDD), cervical spondylosis, disc herniation, or post-operative recovery — the real work begins. This transition period is a delicate phase where the brain relearns what the medications have been suppressing: pain perception, movement awareness, and muscular coordination.
              </p>

              <p>
                Modern pain medications often dampen more than just discomfort. They suppress neural feedback loops, reduce proprioception (the ability to know where your head is in space), and alter muscle firing patterns. That might get you through the worst, but it leaves your spine defenceless when it's time to move again. The irony? The medication that reduces pain may also increase your risk of reinjury if movement isn't reintroduced carefully and scientifically.
              </p>

              <p>
                This guide provides evidence-based, neurosurgically-informed exercises to safely reintroduce cervical spine function — while gently booting pain medications off centre stage.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">🧠 The Psychophysiology of Transitioning Off Pain Meds</h2>
              <p>
                When your nervous system has relied on opioids, gabapentinoids or muscle relaxants, it tends to become sluggish in its response to subtle spinal strain or overuse. Several neurophysiological processes are at play:
              </p>

              <ul className="space-y-2 pl-0">
                <li className="p-3 bg-muted rounded-md">
                  <strong>Pain Inhibition & Proprioceptive Dulling</strong> – Medications delay the awareness of stretch, pressure, and microtrauma.
                </li>
                <li className="p-3 bg-muted rounded-md">
                  <strong>Muscle Guarding</strong> – Reflex rigidity around the cervical spine becomes maladaptive.
                </li>
                <li className="p-3 bg-muted rounded-md">
                  <strong>Cortical Disengagement</strong> – The brain's motor cortex "forgets" how to stabilise the neck without chemical support.
                </li>
              </ul>

              <p className="mt-4">
                Hence, your rehab must begin with reawakening these dormant control systems—slowly, purposefully, and with spinal finesse.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">🎯 Core Principles of Post-Medication Cervical Spine Rehab</h2>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Low Load, High Awareness:</strong> Form and control over force.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Isometric Re-engagement:</strong> Activate deep stabilisers before adding motion.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Proprioceptive Restoration:</strong> Teach your brain to know your neck again.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>No Sudden Moves:</strong> Slow, measured exercises to reintroduce joint mobility.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">🏗️ 8 Foundational Cervical Spine Exercises (With Detailed Biomechanics)</h2>

              <div className="space-y-8 my-8">
                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">1. Chin Tucks (Cervical Retraction)</h3>
                  <p className="italic mb-4">The biomechanical "reset" button.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li><strong>Primary:</strong> Longus colli, longus capitis</li>
                        <li><strong>Secondary:</strong> Sternocleidomastoid, suboccipitals</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Encourages axial decompression and reduces shear force on intervertebral discs.</li>
                        <li>Re-aligns the craniocervical posture, reducing anterior translation stress on C5–C7.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/chin-tucks.jpg"
                        alt="Chin tucks exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Restores proprioceptive input through deep flexor reactivation</li>
                      <li>✔ Reverses forward-head postures exaggerated by prolonged medication use</li>
                      <li>✔ Reduces postural cervicogenic headaches</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Use a wall for tactile guidance.
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Resistance band retractions.
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">2. Isometric Neck Presses</h3>
                  <p className="italic mb-4">Like planking for your neck.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li>Deep neck flexors</li>
                        <li>Levator scapulae, upper trapezius (isometric co-contraction)</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Enhances joint stability without moving the cervical segments</li>
                        <li>Promotes deep neuromuscular control over segmental movement</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/isometric-neck-flexion.jpg"
                        alt="Isometric neck press exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Limits excessive ROM while retraining precision control</li>
                      <li>✔ Reduces the risk of destabilising hypermobile segments post-op or post-disc flare</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Fingertip-pressure only.
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Resistance with towel or elastic strap.
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">3. Scapular Retractions</h3>
                  <p className="italic mb-4">Stabilise the base to support the head.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li>Rhomboids, mid-trapezius, lower trapezius</li>
                        <li>Indirect cervical unloading via scapular stability</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Resets scapulothoracic rhythm</li>
                        <li>Offloads excessive cervical spine effort during postural endurance tasks</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/scapular-retraction.jpg"
                        alt="Scapular retraction exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Reintegrates shoulder-neck kinetic chain</li>
                      <li>✔ Improves muscular timing for posture-based headaches</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Seated with lumbar support
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Resistance bands
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">4. Neck Side-Bending (Lateral Flexion Stretches)</h3>
                  <p className="italic mb-4">Regain graceful mobility without going full giraffe.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li>Scalenes, upper trapezius</li>
                        <li>Ipsilateral proprioceptors of the cervical facet joints</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Opens contralateral intervertebral foramina</li>
                        <li>Reduces axial stiffness in upper cervical segments (C2–C3)</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/neck-side-bend.jpg"
                        alt="Neck side-bending exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Retrains passive stretch tolerance</li>
                      <li>✔ Improves lateral movement control without relying on pharmacologic desensitisation</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Support the opposite shoulder
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Active lateral flexion with mirror feedback
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-8 my-8">
                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">5. Cervical Rotations</h3>
                  <p className="italic mb-4">Recalibrate the radar system.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li>Sternocleidomastoid, scalenes</li>
                        <li>Multifidus and deep rotators for fine tuning</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Re-engages small rotational stabilisers that orient the head</li>
                        <li>Avoids reliance on gross movements from thoracic compensation</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/neck-rotation.jpg"
                        alt="Cervical rotation exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Restores spatial awareness</li>
                      <li>✔ Reduces neck-related dizziness triggered by sensory mismatch</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Visual tracking + mirror
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Resistance with controlled tempo
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">6. Wall Angels</h3>
                  <p className="italic mb-4">Thoracic extension meets cervical grace.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li>Lower trapezius, serratus anterior</li>
                        <li>Scapular upward rotators</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Promotes thoracic extension which indirectly decompresses cervical spine</li>
                        <li>Improves postural endurance under gravity</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/wall-angels.jpg"
                        alt="Wall angels exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Reduces forward head carryover from sedentarism and medication-induced immobility</li>
                      <li>✔ Reinforces ideal neural tension dynamics</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Back flat against the wall
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Resistance bands or Swiss ball wall slides
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">7. Upper Trapezius Stretch</h3>
                  <p className="italic mb-4">Release the overprotective guardians.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Targeted:</h4>
                      <ul className="space-y-1">
                        <li>Upper trapezius, levator scapulae</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Lengthens chronically contracted cervical stabilisers</li>
                        <li>Reduces compressive loading across C3–C5</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/upper-trap-stretch.jpg"
                        alt="Upper trapezius stretch"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Interrupts hypertonic feedback loops post-opioids</li>
                      <li>✔ Desensitises guarding reflexes in degenerative conditions</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Gentle over-pressure only
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> PNF (contract-relax techniques)
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">8. Controlled Head Nods</h3>
                  <p className="italic mb-4">The re-education of head-on-neck control.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Muscles Activated:</h4>
                      <ul className="space-y-1">
                        <li>Deep flexors (longus capitis/colli)</li>
                        <li>Suboccipital and cervical extensor control</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Biomechanics:</h4>
                      <ul className="space-y-1">
                        <li>Activates the atlanto-occipital axis</li>
                        <li>Promotes gentle mobility and strength in neutral head positioning</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/head-nods.jpg"
                        alt="Controlled head nods exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefit:</h4>
                    <ul className="space-y-1">
                      <li>✔ Supports vestibular recalibration</li>
                      <li>✔ Reduces compensatory rigidity from medication reliance</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Modification:</strong> Perform lying down
                    </div>
                    <div className="bg-background px-3 py-1 rounded-full text-sm">
                      <strong>Progression:</strong> Seated with light resistance
                    </div>
                  </div>
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
              <h2 className="text-2xl font-bold mb-6">🩺 4 Case Scenarios from the Neurosurgical Practice:</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 1: Post-Surgical Recovery – ACDF</h3>
                  <p className="mb-2"><strong>Age:</strong> 52-year-old male</p>
                  <p className="mb-2"><strong>History:</strong> C6–C7 fusion, 3 months post-op, still on endone</p>
                  <p className="mb-2"><strong>Rehab Focus:</strong> Chin tucks, isometrics, wall angels to rebuild control</p>
                  <p className="mb-0"><strong>Outcome:</strong> Reduced reliance on opioids within 3 weeks, full postural control by 8 weeks</p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 2: Cervical Spondylosis with Gabapentin Use</h3>
                  <p className="mb-2"><strong>Age:</strong> 65-year-old female</p>
                  <p className="mb-2"><strong>History:</strong> Longstanding cervical stiffness, fear of movement</p>
                  <p className="mb-2"><strong>Rehab Focus:</strong> Rotation drills, scapular retraction, proprioceptive retraining</p>
                  <p className="mb-0"><strong>Outcome:</strong> Improved neck ROM, phased off meds in 4 weeks</p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 3: Herniated Disc (C5–C6) Managed Non-Surgically</h3>
                  <p className="mb-2"><strong>Age:</strong> 40-year-old physiotherapist</p>
                  <p className="mb-2"><strong>History:</strong> Acute disc protrusion treated with steroids and codeine</p>
                  <p className="mb-2"><strong>Rehab Focus:</strong> Chin retraction, progressive resistance, neural recalibration</p>
                  <p className="mb-0"><strong>Outcome:</strong> Pain-free within 6 weeks, no surgical intervention required</p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 4: DDD & Anxiety-Driven Muscle Guarding</h3>
                  <p className="mb-2"><strong>Age:</strong> 58-year-old yoga teacher</p>
                  <p className="mb-2"><strong>History:</strong> DDD with upper trap tightness and muscle relaxant dependence</p>
                  <p className="mb-2"><strong>Rehab Focus:</strong> Trap stretching, nods, and progressive mobility</p>
                  <p className="mb-0"><strong>Outcome:</strong> Weaned off meds by 5th week, returned to modified yoga within 2 months</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Final Takeaways for Safe Cervical Spine Recovery</h2>
              <ul className="space-y-4 list-none pl-0 my-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">🔍</span>
                  <span><strong>Neurosurgical Insight:</strong> Stability first, mobility second, resistance third</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">📉</span>
                  <span><strong>Medication Weaning:</strong> Use motor retraining to reduce pharmacological dependency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">🧘</span>
                  <span><strong>Mind-Body Reconnection:</strong> Movement is the best long-term analgesic</span>
                </li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Need Personalised Guidance?</h3>
                <p>
                  Every cervical spine condition is unique. For a personalised assessment and tailored exercise program, book a consultation with Dr. Aliashkevich.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild>
                    <Link to="/appointments">Book a Consultation</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/patient-resources/exercise-library">View Exercise Library</Link>
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
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Cervical Spine Injury Guide</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Learn about management and rehabilitation strategies for mild cervical spine injuries with our comprehensive guide.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/cervical-spine-injury">Read Guide</Link>
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
