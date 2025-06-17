import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '@/components/PageHeader';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Activity,
  FileText,
  Brain,
  CheckCircle2,
  Clock
} from "lucide-react";

const YouthfulSpine: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title="How to Keep Your Spine Young While Still Ageing Gracefully"
        subtitle="A Neurosurgeon's Guide"
        backgroundImage="/images/patient-resources/spine-health-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Ageing is inevitable, but experiencing debilitating spinal degeneration is not a foregone conclusion. While we cannot halt the biological clock, we can certainly implement evidence-based strategies to maintain spinal health and function well beyond what many consider "normal" for their chronological age.
              </p>

              <p>
                As a neurosurgeon specialising in complex spinal conditions, I've observed firsthand how proactive spinal care can dramatically alter the trajectory of age-related changes. The key to maintaining a biologically younger spine lies in understanding the biomechanical, nutritional, and neurological factors that influence spinal health across the lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">1. Treat Your Spine Like a High-Performance Vehicle Requiring Specialised Maintenance</h2>

              <p>Would you neglect regular servicing on a premium vehicle? Your spine deserves the same meticulous attention.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  The intervertebral discs—composed of the nucleus pulposus (inner gel-like substance) and annulus fibrosus (outer fibrous ring)—rely on hydration and movement for nutrient exchange. Without adequate hydration, the proteoglycan content diminishes, reducing the disc's shock-absorbing capabilities.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Guidance:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Focus on preventing early disc dehydration through consistent hydration (2-3L daily) and regular movement breaks during prolonged sitting.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Implement structured hydration schedules and targeted mobility exercises to counteract the natural reduction in disc height that accelerates after 50.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Combine hydration with gentle, daily mobility exercises to maintain remaining disc function and prevent facet joint overload.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Practical Recommendations:</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Hydration Protocol</strong> – Your intervertebral discs contain up to 88% water in youth, decreasing to 70% in advanced age. Aim for 30ml of water per kilogram of body weight daily.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Movement Prescription</strong> – Implement the "30/30 Rule": 30 seconds of spinal movement for every 30 minutes of sitting.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Postural Awareness Training</strong> – Poor posture increases intradiscal pressure by up to 40%, accelerating degeneration.</span>
                </li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  Margaret, 62, presented with chronic low back pain and early lumbar spondylosis. After implementing a structured hydration protocol (2.5L daily) and hourly movement breaks, her morning stiffness decreased by 60% within 6 weeks. MRI at 12 months showed stabilisation of disc height at previously degenerating L4/5 level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">2. Move Like Someone Decades Younger (Evidence-Based Approach)</h2>

              <p>Movement is the spine's primary nutrient delivery system. The pumping action of spinal movement facilitates nutrient exchange to avascular structures like the intervertebral discs.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  Spinal segments demonstrate viscoelastic properties—they respond to consistent loading patterns over time. Regular, varied movement helps maintain optimal viscoelasticity, while immobility accelerates stiffening through collagen cross-linking and fibrotic changes.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Guidance:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Incorporate multidirectional spinal movements daily, focusing on rotation, lateral flexion, and extension—movements often neglected in modern lifestyles.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Prioritise controlled mobility exercises that respect age-related changes in disc resilience. Focus on quality of movement rather than range.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Implement seated or supported mobility exercises that maintain function while protecting vulnerable structures.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Evidence-Based Movement Protocol:</h3>
              <div className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Daily Spinal Mobility Circuit (5-10 minutes):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cat-Cow variations (10 repetitions)</li>
                    <li>Gentle thoracic rotations (8 each side)</li>
                    <li>Standing side bends (6 each side)</li>
                    <li>Supported spinal extensions (8 repetitions)</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Weight-Bearing Exercise (2-3 times weekly):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Walking on varied terrain</li>
                    <li>Resistance training with proper form</li>
                    <li>Functional movement patterns</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  James, 58, former cricket player with early lumbar facet arthropathy, implemented a daily 7-minute spinal mobility routine. After 12 weeks, his spinal rotation improved by 15 degrees bilaterally, and he reported an 80% reduction in morning stiffness. His GP noted improved gait mechanics and reduced compensatory movement patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">3. Nutritional Strategies for Disc Regeneration and Bone Health</h2>

              <p>Your spine's structural integrity depends significantly on nutritional factors that influence collagen synthesis, bone mineral density, and inflammatory processes.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  Intervertebral discs and vertebral endplates have limited blood supply, making nutrient delivery challenging. Specific nutrients can enhance cellular repair mechanisms and modulate inflammatory processes that accelerate degeneration.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Nutritional Protocols:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Focus on anti-inflammatory nutrients and collagen precursors to maintain disc integrity.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Increase calcium and vitamin D intake to prevent vertebral bone loss, while maintaining collagen-supporting nutrients.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Prioritise protein intake (1.2-1.5g/kg body weight) to prevent sarcopenia of spinal stabilisers, alongside bone-supporting nutrients.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Spine-Supportive Nutrients:</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Collagen Synthesis Support</strong> – Vitamin C (75-90mg daily), proline, glycine, and copper from whole food sources.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-inflammatory Compounds</strong> – Omega-3 fatty acids (2-3g daily), particularly EPA and DHA from fatty fish, walnuts, and flaxseeds.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Bone Mineral Support</strong> – Calcium (1000-1200mg daily), vitamin D (1000-2000 IU daily), vitamin K2 (100-300mcg daily), and magnesium (300-400mg daily).</span>
                </li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  Elizabeth, 72, with osteopenia and degenerative disc disease, implemented a comprehensive nutritional protocol focusing on protein adequacy and bone-supporting nutrients. After 18 months, her DEXA scan showed stabilisation of bone mineral density, and her need for analgesics decreased by 70%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">4. Targeted Strengthening of Spinal Support Systems</h2>

              <p>Your spine relies on a complex network of muscles for stability and load distribution. Age-appropriate strengthening of these systems is crucial for spinal longevity.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  The deep spinal stabilisers (multifidus, transversus abdominis) often atrophy with age and disuse, shifting load to passive structures like discs and ligaments. Research shows that specific activation patterns can reverse this atrophy even in older adults.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Strengthening Protocols:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Focus on building foundational strength in global and local stabilisers through functional movement patterns.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Emphasise endurance of deep stabilisers and maintenance of gluteal strength to offset age-related muscle fibre changes.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Implement seated or supported strengthening exercises that maintain function while protecting vulnerable structures.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Key Muscle Groups and Exercises:</h3>
              <div className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Deep Spinal Stabilisers:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Multifidus activation (quadruped arm/leg raises)</li>
                    <li>Transversus abdominis engagement (hollow hold progressions)</li>
                    <li>Diaphragmatic breathing with core engagement</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Hip and Pelvic Stabilisers:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gluteal strengthening (bridges, clamshells)</li>
                    <li>Hip hinge patterning (deadlift variations)</li>
                    <li>Lateral hip stabilisation (side-lying leg raises)</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Postural Support System:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Upper back strengthening (rows, band pull-aparts)</li>
                    <li>Scapular stabilisation (wall slides, Y-T-W exercises)</li>
                    <li>Cervical deep flexor training (chin tucks, head nods)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  Robert, 65, retired builder with chronic low back pain and lumbar instability, completed a 16-week progressive strengthening program focusing on deep stabilisers and gluteal activation. Post-intervention testing showed a 40% increase in multifidus cross-sectional area on ultrasound and significant improvements in functional capacity testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">5. Proactive Pain Management and Early Intervention</h2>

              <p>Ageing gracefully doesn't mean accepting pain as inevitable. Early, targeted intervention can prevent the neuroplastic changes that lead to chronic pain syndromes.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  Chronic pain involves central sensitisation—neuroplastic changes in the central nervous system that amplify pain signals. Early intervention can prevent these maladaptive changes and maintain normal pain processing.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Guidance:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Address mechanical pain promptly through movement modification and targeted exercises.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Implement multimodal approaches including appropriate manual therapy, exercise, and temporary analgesic support when needed.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Focus on function-preserving interventions while addressing pain through appropriate pharmacological and non-pharmacological approaches.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Warning Signs Requiring Prompt Assessment:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-700 dark:text-red-400">🚨 Radicular symptoms (pain, numbness, or tingling radiating into limbs)</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-700 dark:text-red-400">🚨 Progressive neurological deficits (weakness, altered reflexes)</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-700 dark:text-red-400">🚨 New-onset balance disturbances</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-700 dark:text-red-400">🚨 Pain that disrupts sleep or doesn't respond to conservative measures</p>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  Susan, 54, teacher with acute-on-chronic neck pain and early cervical spondylosis, sought early intervention rather than "pushing through." A comprehensive approach including targeted manual therapy, specific exercise prescription, and temporary anti-inflammatory support resolved her symptoms within 3 weeks, preventing the development of chronic pain patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">6. Sleep Ergonomics for Spinal Regeneration</h2>

              <p>Your spine undergoes critical repair processes during sleep. Optimising sleep posture and surface support can enhance these regenerative mechanisms.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  Intervertebral discs rehydrate during recumbent rest periods, regaining up to 20% of their height overnight. This process is position-dependent and can be optimised through proper sleep ergonomics.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Guidance:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Focus on maintaining neutral spinal alignment during sleep to prevent repetitive stress.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Implement supportive positioning to accommodate age-related changes in spinal curvature and joint stiffness.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Provide additional support for areas of spinal vulnerability while ensuring pressure point protection.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Evidence-Based Sleep Recommendations:</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Optimal Sleeping Positions:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Supine (back) sleeping with lumbar support and small pillow under knees</li>
                      <li>Side sleeping with pillow between knees and sufficient head support</li>
                      <li>Modified positions for specific conditions (e.g., spondylolisthesis, stenosis)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Surface Considerations:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Medium-firm mattress support (adjustable for different body weights)</li>
                      <li>Pressure-relieving properties for bony prominences</li>
                      <li>Temperature regulation for optimal sleep quality</li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  Michael, 68, with lumbar spinal stenosis and sleep-disturbing back pain, implemented a comprehensive sleep ergonomics program. After transitioning to a supportive medium-firm mattress and adopting modified side-lying positioning with pillow support, his sleep quality improved by 65% (Pittsburgh Sleep Quality Index), and morning pain decreased from 7/10 to 3/10.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">7. Stress Management for Neuromusculoskeletal Health</h2>

              <p>Chronic stress directly impacts spinal health through multiple physiological pathways, accelerating degenerative processes.</p>

              <div className="bg-card p-6 rounded-lg shadow-sm my-6">
                <h3 className="text-xl font-semibold mb-4">Clinical Insights:</h3>
                <p>
                  Stress hormones like cortisol promote catabolism (breakdown) of spinal tissues and inhibit anabolic repair processes. Additionally, stress increases muscle guarding, alters movement patterns, and promotes inflammatory processes that accelerate degeneration.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Age-Specific Guidance:</h3>
              <ul className="space-y-4">
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 30-50 year-olds:</p>
                  <p>Implement stress management techniques that fit into busy schedules, focusing on sympathetic downregulation.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 50-70 year-olds:</p>
                  <p>Address stress-related movement compensations and promote parasympathetic activation through breathwork and mindfulness.</p>
                </li>
                <li className="p-4 border border-primary/20 rounded-md">
                  <p className="font-semibold">For 70+ year-olds:</p>
                  <p>Focus on gentle, accessible stress reduction techniques that promote overall wellbeing and reduce muscle tension.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Evidence-Based Stress Management Approaches:</h3>
              <div className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Physiological Regulation:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Diaphragmatic breathing (5-5-5 pattern: inhale 5 seconds, hold 5 seconds, exhale 5 seconds)</li>
                    <li>Progressive muscle relaxation</li>
                    <li>Gentle movement practices (tai chi, specific yoga sequences)</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">🔹 Cognitive-Behavioural Approaches:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mindfulness-based stress reduction</li>
                    <li>Pain neuroscience education</li>
                    <li>Cognitive reframing of pain experiences</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Case Example:</h3>
                <p>
                  Jennifer, 47, executive with stress-related cervical myofascial pain and early disc degeneration, implemented a daily 10-minute stress management protocol. After 8 weeks, surface EMG showed 40% reduction in resting trapezius activity, and her pain decreased from daily to occasional episodes only during high-stress periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">Conclusion: Ageing Gracefully with a Biologically Younger Spine</h2>

              <p>
                Spinal ageing is modifiable through evidence-based interventions that address the multiple factors influencing spinal health. By implementing age-appropriate strategies for movement, nutrition, strength, sleep, and stress management, you can maintain a spine that functions years—even decades—younger than your chronological age.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Key Principles for All Age Groups:</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Movement is medicine</strong> – Your spine requires regular, varied movement for optimal health.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Nutrition matters</strong> – Specific nutrients can enhance tissue repair and modulate inflammation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Strength preserves function</strong> – Targeted strengthening of spinal support systems protects vulnerable structures.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Early intervention prevents chronicity</strong> – Address pain and dysfunction promptly rather than adapting to it.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Sleep quality affects tissue regeneration</strong> – Optimise sleep posture and surface support for spinal recovery.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Stress accelerates degeneration</strong> – Implement stress management techniques to protect spinal tissues.</span>
                </li>
              </ul>

              <p className="mt-8">
                Remember, your spine has remarkable adaptive capacity at any age. With the right approach, you can maintain mobility, function, and comfort well into your later years, truly ageing gracefully with a spine that supports an active, fulfilling lifestyle.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Ready to Take Action?</h3>
                <p className="mb-6">
                  Implementing these evidence-based strategies can help you maintain a biologically younger spine. For personalised guidance specific to your condition, consider scheduling a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/appointments">Book a Consultation</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/patient-resources/individual-spine-health-program">Explore Spine Health Program</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StandardPageLayout>
  );
};

YouthfulSpine.displayName = 'YouthfulSpine';

export default YouthfulSpine;
