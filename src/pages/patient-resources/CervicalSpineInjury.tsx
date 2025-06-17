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
  AlertTriangle,
  CheckCircle2,
  Car,
  Laptop,
  Dumbbell,
  Clock
} from "lucide-react";

const CervicalSpineInjury: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title="Patient Guide: Management & Rehabilitation After Mild Cervical Spine Injury"
        subtitle="Recovery strategies and exercises for optimal healing"
        backgroundImage="/images/patient-resources/cervical-spine-injury-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                Cervical spine injury occurs when any of the cervical vertebrae or ligaments sustain a significant impact, resulting in fracture, sprain or misalignment. Mild injuries may heal well with conservative management, but in more complex cases surgery might be required. Proper rehabilitation is essential to restore full function and prevent complications.
              </p>
              <p>
                This guide provides detailed information on recovery, pain management, rehabilitation exercises, and activity modifications to help patients safely return to daily life.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Understanding Mild Spinal Injury</h2>
              
              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Common Causes</h3>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Motor vehicle accidents (whiplash injury)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Falls or direct impact to the neck</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sports injuries (e.g., rugby, AFL, cycling accidents)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sudden excessive neck muscle contraction (e.g., extreme head turning)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Symptoms</h3>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">🔹</span>
                    <span>Localised neck pain (often worsened by movement)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">🔹</span>
                    <span>Muscle spasms in the neck and upper shoulders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">🔹</span>
                    <span>Stiffness and reduced range of motion (ROM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">🔹</span>
                    <span>Pain when rotating or tilting the head</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">🔹</span>
                    <span>Neurological symptoms (e.g., weakness, numbness, or radiating pain, if the spinal cord and nerves are affected)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Medical Management</h2>
              <h3 className="text-xl font-bold mb-4">Initial Treatment (First 1-2 Weeks)</h3>
              
              <div className="space-y-6 my-6">
                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="font-bold text-lg mb-3">🔹 Rest & Neck Protection</h4>
                  <ul className="space-y-2">
                    <li>Avoid sudden movements or excessive neck rotation/lateral flexion.</li>
                    <li>Soft or firm cervical collar (if recommended) for support.</li>
                    <li>Modify sleeping position (use a supportive pillow to keep the neck neutral).</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="font-bold text-lg mb-3">🔹 Pain Management</h4>
                  <ul className="space-y-2">
                    <li>Paracetamol for baseline pain relief.</li>
                    <li>NSAIDs (e.g., ibuprofen, naproxen) if no contraindications, to reduce inflammation.</li>
                    <li>Muscle relaxants (if prescribed) for spasms.</li>
                    <li>Ice therapy (first 48 hours, 15-20 min every 2-3 hours) for acute pain and swelling.</li>
                    <li>Heat therapy (after 48 hours, 15 min per session) to relax muscles and improve circulation.</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="font-bold text-lg mb-3">🔹 Activity Modification</h4>
                  <ul className="space-y-2">
                    <li>Avoid lifting, sudden head movements, or prolonged looking down (e.g., phone use).</li>
                    <li>Do not drive if wearing a cervical collar or while taking muscle relaxants.</li>
                    <li>Sleep with proper neck support (avoid stomach sleeping).</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Rehabilitation Plan: Progressive Recovery Approach</h2>
              
              <div className="border border-primary/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Phase 1: Early Healing (Weeks 1-3)</h3>
                <h4 className="font-bold text-lg mb-3">Goals:</h4>
                <ul className="space-y-2 list-none pl-0 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minimise pain & inflammation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prevent muscle atrophy & stiffness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Begin gentle mobility exercises</span>
                  </li>
                </ul>

                <h4 className="font-bold text-lg mb-3">Careful Exercises if permitted by the neurosurgeon or spinal surgeon</h4>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Chin Tucks (Cervical Retraction)</h5>
                    <ul className="space-y-1">
                      <li>Sit or stand with good posture.</li>
                      <li>Gently pull your chin back, keeping your head level (like making a double chin).</li>
                      <li>Hold 5 seconds, repeat 10 times.</li>
                      <li className="text-red-500">🛑 Avoid overextending backward.</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Gentle Neck ROM Movements</h5>
                    <ul className="space-y-1">
                      <li>Rotation: Turn head side to side within a pain-free range.</li>
                      <li>Lateral Flexion: Tilt head toward the shoulder (ear to shoulder), avoid forcing movement.</li>
                      <li>Flexion/Extension: Slowly nod head up and down.</li>
                      <li>Repeat 5-10 times per movement.</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Scapular Retractions</h5>
                    <ul className="space-y-1">
                      <li>Sit/stand upright, squeeze shoulder blades together, hold for 5 seconds, release.</li>
                      <li>Repeat 10 times to improve upper back support.</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-3">Precautions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Do not stretch aggressively or perform resistance exercises yet.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Avoid pain-provoking movements—stay within a gentle range.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>If wearing a cervical collar, perform only isometric exercises (no movement).</span>
                  </li>
                </ul>
              </div>

              <div className="border border-primary/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Phase 2: Strengthening & Mobility (Weeks 4-6)</h3>
                <h4 className="font-bold text-lg mb-3">Goals:</h4>
                <ul className="space-y-2 list-none pl-0 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Restore full pain-free neck motion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Improve posture & muscle endurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strengthen deep neck stabilisers</span>
                  </li>
                </ul>

                <h4 className="font-bold text-lg mb-3">Recommended Exercises</h4>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Neck Isometrics (Against Resistance)</h5>
                    <ul className="space-y-1">
                      <li>Place your palm against your forehead, gently push without moving your head.</li>
                      <li>Hold 5-10 seconds, repeat 10 times in each direction (front, back, side-to-side).</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Wall Angels (Scapular & Postural Strengthening)</h5>
                    <ul className="space-y-1">
                      <li>Stand against a wall, raise arms in a "goalpost" position, slowly move arms up/down.</li>
                      <li>Focus on keeping your back and head in contact with the wall.</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Resistance Band Rows (Postural Strength)</h5>
                    <ul className="space-y-1">
                      <li>Attach a band to a stable object, pull towards your chest, squeezing shoulder blades together.</li>
                      <li>Perform 10-15 reps, 2 sets.</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Upper Trapezius & Levator Scapulae Stretches</h5>
                    <ul className="space-y-1">
                      <li>Gently tilt your head to one side, holding for 15-20 seconds per stretch.</li>
                      <li>Avoid aggressive stretching—gentle elongation only.</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-3">Precautions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Avoid heavy lifting or jerky movements.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gradually increase resistance, but stop if pain increases.</span>
                  </li>
                </ul>
              </div>

              <div className="border border-primary/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Phase 3: Return to Full Function (Weeks 7-12)</h3>
                <h4 className="font-bold text-lg mb-3">Goals:</h4>
                <ul className="space-y-2 list-none pl-0 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Build neck endurance & strength for normal activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Improve neuromuscular control for long-term stability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Return to work/sports safely</span>
                  </li>
                </ul>

                <h4 className="font-bold text-lg mb-3">Recommended Advanced Exercises</h4>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Cervical Resistance Band Rotations</h5>
                    <ul className="space-y-1">
                      <li>Use a light resistance band, gently rotate head against resistance.</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Prone Y-T-W Exercises (Upper Back & Neck Strength)</h5>
                    <ul className="space-y-1">
                      <li>Lie face-down, lift arms into a Y, T, and W position to activate posterior chain muscles.</li>
                    </ul>
                  </div>

                  <div className="bg-background p-4 rounded-md">
                    <h5 className="font-bold mb-2">✔ Functional Strength Movements</h5>
                    <ul className="space-y-1">
                      <li>Modified push-ups (strengthen shoulder girdle & neck support muscles).</li>
                      <li>Plank holds (core stability, reduces spinal compensation patterns).</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-3">Precautions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Avoid high-impact activities (e.g., running, contact sports) until cleared by your doctor.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Progress gradually—returning too fast increases reinjury risk.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Returning to Daily Activities & Sports</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-center mb-4">
                    <Car className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold text-lg">Driving</h3>
                  </div>
                  <p className="mb-0">
                    🚗 Safe once you regain full neck mobility (usually 4-6 weeks, varies by patient).
                  </p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-center mb-4">
                    <Laptop className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold text-lg">Work & Desk Ergonomics</h3>
                  </div>
                  <ul className="space-y-2 list-none pl-0">
                    <li>💻 Adjust screen height to eye level (avoid prolonged neck flexion).</li>
                    <li>🔹 Take postural breaks every 30 minutes to stretch and adjust position.</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-center mb-4">
                    <Dumbbell className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold text-lg">Sports & Physical Activity</h3>
                  </div>
                  <ul className="space-y-2 list-none pl-0">
                    <li>⚽ Low-impact activities (walking, cycling) can resume after 4-6 weeks.</li>
                    <li>🏋️ Avoid contact sports (rugby, AFL) until cleared by your specialist.</li>
                    <li>🛑 No high-impact lifting or heavy shoulder shrugs before 10-12 weeks.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Final Thoughts: Healing & Long-Term Prevention</h2>
              <ul className="space-y-2 list-none pl-0 my-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Listen to your body—don't push through pain.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Strengthen postural muscles to prevent recurrent injuries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maintain neck mobility with daily stretching and strengthening exercises.</span>
                </li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Need Personalised Advice?</h3>
                <p>
                  Every cervical spine injury is unique. For a personalised assessment and treatment plan, book a consultation with Dr. Aliashkevich.
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
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Spine & Brain Health Guide</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Learn about science-backed strategies for understanding, managing, and preventing chronic spinal and neurological conditions.
                </p>
                <Button asChild className="w-full">
                  <Link to="/patient-resources/spine-and-brain-health">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Book an Appointment</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation with Dr. Aliashkevich for a personalized assessment and treatment plan for your cervical spine injury.
                </p>
                <Button asChild className="w-full">
                  <Link to="/appointments">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </StandardPageLayout>
  );
};

CervicalSpineInjury.displayName = 'CervicalSpineInjury';

export default CervicalSpineInjury;
