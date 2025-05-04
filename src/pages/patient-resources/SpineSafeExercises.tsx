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
  Clock
} from "lucide-react";

export default function SpineSafeExercises() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Spine-Safe Exercise Therapy for Degenerative Disc Disease"
        subtitle="Biomechanics, Muscle Engagement & Psychophysiological Gains"
        backgroundImage="/images/patient-resources/back-exercise.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Degenerative Disc Disease (DDD) is not technically a disease but rather an age-related spinal condition characterised by intervertebral disc dehydration, annular fibrosis breakdown, reduced disc height, and biomechanical dysfunction. These changes can compromise spinal stability, increase axial load on posterior structures, and sensitise local and referred pain pathways.
              </p>

              <p>
                Exercise therapy is a cornerstone of conservative management, offering a non-invasive and highly individualised solution. Done properly, movement-based rehabilitation promotes spinal alignment, strengthens deep stabilising musculature, and retrains maladaptive neuromuscular patterns.
              </p>

              <p>
                This guide provides GPs and patients with biomechanical insights, muscle activation details, and psychophysiological mechanisms behind the most effective spine-safe exercises for managing DDD.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">Spine-Safe Exercises for Degenerative Disc Disease</h2>

              <div className="space-y-12 my-8">
                {/* Exercise 1: Cat-Cow Stretch */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                    <h3 className="text-xl font-bold">Cat-Cow Stretch</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Alternates between spinal flexion (Cat) and extension (Cow).</li>
                        <li>Mobilises the thoracolumbar and lumbosacral regions.</li>
                        <li>Facilitates hydration and nutrient diffusion in intervertebral discs.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li><strong>Flexion (Cat):</strong> Rectus abdominis, transversus abdominis.</li>
                        <li><strong>Extension (Cow):</strong> Erector spinae, multifidus.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/cat-cow-lower-back.jpg"
                        alt="Cat-Cow Stretch"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Stimulates spinal proprioceptors, enhancing joint position awareness.</li>
                      <li>Encourages central nervous system desensitisation to chronic pain.</li>
                      <li>Promotes segmental spinal flexibility, decreasing reliance on compensatory postures.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 2: Pelvic Tilts */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                    <h3 className="text-xl font-bold">Pelvic Tilts</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Recruits deep core stabilisers to restore lumbopelvic control.</li>
                        <li>Corrects anterior/posterior pelvic tilt, reducing shearing forces on discs.</li>
                        <li>Promotes lumbar lordosis normalisation.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Transversus abdominis, gluteus maximus, rectus abdominis.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/pelvic-tilt.jpg"
                        alt="Pelvic Tilts"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Retrains pain-inhibited core musculature.</li>
                      <li>Reduces lumbar microinstability.</li>
                      <li>Enhances conscious postural control.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 3: Bridges */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                    <h3 className="text-xl font-bold">Bridges</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Redistributes axial load through posterior chain activation.</li>
                        <li>Encourages co-contraction of glutes and spinal extensors for sacroiliac stability.</li>
                        <li>Prevents excessive lumbar extension, common in chronic compensators.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Gluteus maximus, hamstrings, multifidus, erector spinae.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/glute-bridge-core.jpg"
                        alt="Bridges"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Re-engages deconditioned gluteals.</li>
                      <li>Improves coordination between pelvis and lumbar spine.</li>
                      <li>Decreases reliance on passive joint structures.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 4: Child's Pose */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                    <h3 className="text-xl font-bold">Child's Pose</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Gently elongates lumbar spine, increasing facet joint spacing.</li>
                        <li>Reduces neural tension through passive flexion.</li>
                        <li>Decompresses lower spine.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Latissimus dorsi, spinal extensors (lengthened).</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/child-pose.jpg"
                        alt="Child's Pose"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Activates parasympathetic tone (rest-and-digest).</li>
                      <li>Dampens hypervigilant pain responses.</li>
                      <li>Enhances mental relaxation, especially for patients with anxiety-related pain behaviours.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 5: Knee-to-Chest Stretch */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</div>
                    <h3 className="text-xl font-bold">Knee-to-Chest Stretch</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Reduces lumbar lordosis and stretches lower back.</li>
                        <li>Improves intervertebral spacing, relieving disc and nerve root compression.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Gluteus maximus, spinal extensors.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/knee-to-chest.jpg"
                        alt="Knee-to-Chest Stretch"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Decreases radicular irritation.</li>
                      <li>Improves tactile input to the spinal cord, improving coordination and confidence in movement.</li>
                    </ul>
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
              <div className="space-y-12 my-8">
                {/* Exercise 6: Seated Spinal Twist */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</div>
                    <h3 className="text-xl font-bold">Seated Spinal Twist</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Encourages thoracolumbar rotation without shearing.</li>
                        <li>Mobilises stiff facet joints and increases segmental flexibility.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Obliques, multifidus, spinal rotators.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/russian-twist.jpg"
                        alt="Seated Spinal Twist"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Increases midline awareness.</li>
                      <li>Decreases rotational asymmetries that can exacerbate DDD.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 7: McKenzie Extension */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">7</div>
                    <h3 className="text-xl font-bold">McKenzie Extension (Prone Press-Ups)</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Facilitates anterior disc migration, offloading posterior annular wall.</li>
                        <li>Aids in symptom centralisation, especially in patients with discogenic sciatica.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Erector spinae, gluteals (stabilisation).</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/prone-press-up.jpg"
                        alt="McKenzie Extension"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Reduces fear-avoidance behaviour with extension-based movement.</li>
                      <li>Promotes confidence in motion beyond the flexion bias many patients adopt.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 8: Side-Lying Leg Lifts */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">8</div>
                    <h3 className="text-xl font-bold">Side-Lying Leg Lifts</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Targets lateral hip and trunk stabilisers for spinal symmetry.</li>
                        <li>Reduces pelvic drop and lumbar shear forces.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Gluteus medius, internal/external obliques.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/prone-leg-lift.jpg"
                        alt="Side-Lying Leg Lifts"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Improves lower limb proprioception.</li>
                      <li>Prevents antalgic gait and unilateral loading dysfunction.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 9: Dead Bug Exercise */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">9</div>
                    <h3 className="text-xl font-bold">Dead Bug Exercise</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Engages core stabilisers while maintaining neutral spine during limb movement.</li>
                        <li>Minimises disc shear while reinforcing deep motor control.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Transversus abdominis, pelvic floor, obliques, rectus abdominis.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/dead-bug.jpg"
                        alt="Dead Bug Exercise"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Enhances core-spine coordination.</li>
                      <li>Improves anticipatory postural adjustments during movement.</li>
                    </ul>
                  </div>
                </div>

                {/* Exercise 10: Wall Sits */}
                <div className="border border-primary/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">10</div>
                    <h3 className="text-xl font-bold">Wall Sits</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Biomechanics</h4>
                      <ul className="space-y-1">
                        <li>Builds endurance in spinal stabilisers under safe isometric load.</li>
                        <li>Teaches load sharing between hips, knees, and spine.</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Muscles Involved</h4>
                      <ul className="space-y-1">
                        <li>Quadriceps, gluteus maximus, deep spinal stabilisers.</li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <img
                        src="/images/exercises/wall-slides.jpg"
                        alt="Wall Sits"
                        className="rounded-md max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Psychophysiological Benefits</h4>
                    <ul className="space-y-1">
                      <li>Encourages muscular endurance without excessive spinal strain.</li>
                      <li>Builds confidence in upright weight-bearing postures.</li>
                    </ul>
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
              <h2 className="text-2xl font-bold mb-6">Case Examples for GPs and Patients</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Case 1 */}
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 1: Sedentary Office Worker with L4-L5 Disc Degeneration</h3>
                  <p className="mb-2"><strong>Presentation:</strong> 45-year-old male, accountant, with chronic low back pain worsened by prolonged sitting. MRI confirms disc dehydration at L4-L5.</p>
                  <p className="mb-2"><strong>Rehab Plan:</strong> Started with pelvic tilts and Cat-Cow to gently mobilise spine, progressed to bridges and Dead Bug for core reactivation.</p>
                  <p className="mb-0"><strong>Outcome:</strong> After 8 weeks, significant reduction in sitting-related pain and improved sitting tolerance. Patient resumed part-time gym workouts.</p>
                </div>

                {/* Case 2 */}
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 2: Retired Nurse with Multilevel Lumbar DDD and Poor Balance</h3>
                  <p className="mb-2"><strong>Presentation:</strong> 68-year-old female with spinal instability, fear of falling, and postural stooping.</p>
                  <p className="mb-2"><strong>Rehab Plan:</strong> Focused on wall sits, side-lying leg lifts, and McKenzie extension for posture control. Added Child's Pose to reduce hypertonicity.</p>
                  <p className="mb-0"><strong>Outcome:</strong> Improved upright posture and confidence walking unaided. Reduced pain medication use by 50% in 10 weeks.</p>
                </div>

                {/* Case 3 */}
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 3: Younger Gym Enthusiast with L5-S1 Discogenic Pain</h3>
                  <p className="mb-2"><strong>Presentation:</strong> 32-year-old physiotherapy student with posterior disc bulge and gluteal deactivation due to overuse of lumbar extensors.</p>
                  <p className="mb-2"><strong>Rehab Plan:</strong> Glute-focused bridges and prone McKenzie extensions, monitored by video feedback. Incorporated Dead Bug to refine spinal control.</p>
                  <p className="mb-0"><strong>Outcome:</strong> Resumed light weight training within 6 weeks. Improved posterior chain strength and pain-free hip hinge mechanics.</p>
                </div>

                {/* Case 4 */}
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Case 4: Early-Onset DDD in Patient with Generalised Joint Hypermobility</h3>
                  <p className="mb-2"><strong>Presentation:</strong> 28-year-old female yoga instructor with diffuse low back pain and poor core stability.</p>
                  <p className="mb-2"><strong>Rehab Plan:</strong> Emphasised isometric strength (wall sits), pelvic stabilisation (leg lifts), and spinal awareness (seated twists).</p>
                  <p className="mb-0"><strong>Outcome:</strong> Reduced lumbar microinstability and improved core endurance. Taught self-regulation techniques for flare-up management.</p>
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
              <h2 className="text-2xl font-bold mb-6">Final Thoughts for GPs and Patients</h2>

              <ul className="space-y-4 list-none pl-0 my-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Biomechanics matter:</strong> Tailored, low-load, high-awareness movements reduce shear forces and improve spinal segmental support.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Muscle re-education:</strong> Rebuilding deep stabilisers (transversus abdominis, multifidus, gluteals) corrects biomechanical dysfunction.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Psychophysiological reprogramming:</strong> Rewiring the brain's pain and fear circuits is just as vital as physical reconditioning.</span>
                </li>
              </ul>

              <p>
                GPs should consider early physiotherapy referral and patient education for chronic DDD, rather than a passive pain management approach. Empowered movement is key to long-term relief and functional restoration.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Need Personalised Guidance?</h3>
                <p>
                  Every spine condition is unique. For a personalised assessment and tailored exercise program, book a consultation with Dr. Aliashkevich.
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
