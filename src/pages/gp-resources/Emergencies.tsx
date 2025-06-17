import { AlertTriangle, Phone, Clock, Stethoscope, Brain, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import PageHeader from '@/components/PageHeader';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Emergencies: React.FC = () => {
  // No translations needed for this page

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Emergency case examples
  const emergencyCases = [
    {
      title: "Case 1: Cauda Equina Syndrome",
      description: "A 42-year-old man presents with sudden onset of saddle anesthesia, urinary retention, and bilateral leg weakness following 3 days of severe low back pain. MRI shows a large central L4-L5 disc herniation with complete canal occlusion.",
      redFlags: "Saddle anesthesia, urinary retention, bilateral leg weakness",
      action: "Immediate referral to emergency department with neurosurgical notification",
      outcome: "Patient underwent emergency decompressive laminectomy within 6 hours of presentation, with gradual recovery of bladder function and significant improvement in neurological symptoms."
    },
    {
      title: "Case 2: Malignant Spinal Cord Compression",
      description: "A 68-year-old woman with history of breast cancer presents with rapidly progressive lower limb weakness and sensory loss over 48 hours. Examination reveals paraparesis (power 2/5) and a sensory level at T8. MRI shows metastatic lesion at T7 with severe cord compression.",
      redFlags: "Rapidly progressive weakness, known malignancy, sensory level",
      action: "Urgent referral to emergency department, immediate dexamethasone administration, neurosurgical consultation",
      outcome: "Patient underwent emergency decompressive surgery with stabilization within 12 hours, preserving ambulatory function and bowel/bladder control."
    },
    {
      title: "Case 3: Epidural Abscess",
      description: "A 57-year-old man with diabetes presents with 3 days of severe back pain, fever, and progressive leg weakness. Blood tests show elevated WBC and CRP. MRI reveals a thoracic epidural abscess with cord compression.",
      redFlags: "Fever, progressive neurological deficit, elevated inflammatory markers",
      action: "Immediate referral to emergency department, blood cultures, neurosurgical and infectious disease consultation",
      outcome: "Patient underwent emergency surgical decompression and abscess drainage, followed by 6 weeks of targeted antibiotic therapy, with complete neurological recovery."
    },
    {
      title: "Case 4: Acute Hydrocephalus",
      description: "A 35-year-old woman presents with sudden severe headache, vomiting, and progressive drowsiness. CT scan shows ventricular enlargement with periventricular edema, suggesting acute obstructive hydrocephalus.",
      redFlags: "Sudden severe headache, altered consciousness, vomiting",
      action: "Immediate referral to emergency department with neurosurgical notification",
      outcome: "Patient underwent emergency external ventricular drain placement, followed by endoscopic third ventriculostomy once stable, with complete resolution of symptoms."
    }
  ];

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title="Emergencies & Red Flags"
        subtitle="Critical neurosurgical conditions requiring urgent assessment and intervention"
        backgroundImage="/images/gp-resources/emergencies-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
              <p className="text-red-700 dark:text-red-400">
                This guide is designed to help identify neurosurgical emergencies requiring immediate attention. If you suspect a patient has a neurosurgical emergency, please contact our emergency line immediately or direct the patient to the nearest emergency department.
              </p>
            </div>

            <p className="text-lg mb-8">
              Recognizing neurosurgical emergencies in primary care settings is crucial for timely intervention and optimal patient outcomes. This resource outlines key red flags, assessment protocols, and immediate management steps for common neurosurgical emergencies.
            </p>

            <Tabs defaultValue="redflags" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="redflags">Red Flags</TabsTrigger>
                <TabsTrigger value="assessment">Assessment</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
                <TabsTrigger value="contact">Contact Protocol</TabsTrigger>
              </TabsList>

              <TabsContent value="redflags" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      Neurosurgical Red Flags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">The following signs and symptoms should prompt immediate consideration of a neurosurgical emergency:</p>

                    <div className="space-y-6">
                      <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-md">
                        <h3 className="font-bold text-red-700 dark:text-red-400">Spinal Emergencies</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Cauda equina syndrome:</strong> Saddle anesthesia, urinary retention, fecal incontinence, bilateral leg weakness/numbness</li>
                          <li><strong>Acute spinal cord compression:</strong> Rapidly progressive weakness, sensory level, urinary retention</li>
                          <li><strong>Spinal epidural abscess:</strong> Fever, severe back pain, progressive neurological deficits</li>
                          <li><strong>Spinal epidural hematoma:</strong> Sudden severe back pain with rapid onset of neurological deficits, especially in anticoagulated patients</li>
                          <li><strong>Malignant spinal cord compression:</strong> Progressive weakness, sensory changes, and pain in patients with known malignancy</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-md">
                        <h3 className="font-bold text-red-700 dark:text-red-400">Cranial Emergencies</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Acute hydrocephalus:</strong> Headache, vomiting, altered consciousness, gait disturbance</li>
                          <li><strong>Intracranial hemorrhage:</strong> Sudden severe headache, altered consciousness, focal neurological deficits</li>
                          <li><strong>Cerebral abscess:</strong> Headache, fever, focal neurological deficits, altered mental status</li>
                          <li><strong>Acute cerebral edema:</strong> Headache, altered consciousness, focal deficits, often with known brain tumor or trauma</li>
                          <li><strong>Pituitary apoplexy:</strong> Sudden severe headache, visual disturbances, ophthalmoplegia, altered consciousness</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-md">
                        <h3 className="font-bold text-red-700 dark:text-red-400">High-Risk Patient Groups</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Anticoagulated patients:</strong> Higher risk of intracranial and spinal hemorrhage</li>
                          <li><strong>Immunocompromised patients:</strong> Higher risk of CNS infections</li>
                          <li><strong>Cancer patients:</strong> Risk of malignant cord compression and increased intracranial pressure</li>
                          <li><strong>Post-neurosurgical patients:</strong> Risk of CSF leak, infection, hemorrhage</li>
                          <li><strong>Patients with ventriculoperitoneal shunts:</strong> Risk of shunt malfunction</li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <img
                          src="/images/gp-resources/emergencies-2.jpg"
                          alt="Medical emergency response"
                          className="w-full rounded-md object-cover h-64"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Emergency Assessment Protocol
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">When a neurosurgical emergency is suspected, a focused assessment should be performed while arranging urgent referral:</p>

                    <div className="space-y-6">
                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary">Rapid Neurological Assessment</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Level of consciousness:</strong> GCS or AVPU scale</li>
                          <li><strong>Pupillary response:</strong> Size, symmetry, and reactivity</li>
                          <li><strong>Motor function:</strong> Strength in all limbs, noting any asymmetry</li>
                          <li><strong>Sensory function:</strong> Check for sensory level or saddle anesthesia</li>
                          <li><strong>Reflexes:</strong> Deep tendon reflexes, Babinski sign</li>
                          <li><strong>Cranial nerves:</strong> Focused examination of relevant cranial nerves</li>
                          <li><strong>Vital signs:</strong> BP, HR, RR, temperature, oxygen saturation</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary">Cauda Equina Syndrome Assessment</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Saddle sensation:</strong> Test perineal and perianal sensation</li>
                          <li><strong>Anal tone:</strong> Check for reduced anal sphincter tone</li>
                          <li><strong>Bladder function:</strong> Ask about urinary retention or incontinence</li>
                          <li><strong>Bowel function:</strong> Ask about fecal incontinence</li>
                          <li><strong>Lower limb power:</strong> Assess bilateral lower limb strength</li>
                          <li><strong>Straight leg raise:</strong> Often limited or painful</li>
                        </ul>
                        <p className="mt-2 text-sm font-medium">Note: Post-void residual bladder volume &gt;100ml is highly suggestive of cauda equina syndrome in the appropriate clinical context</p>
                      </div>

                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary">Raised Intracranial Pressure Assessment</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Headache characteristics:</strong> Severity, onset, exacerbating factors</li>
                          <li><strong>Vomiting:</strong> Particularly projectile vomiting without nausea</li>
                          <li><strong>Visual changes:</strong> Blurred vision, diplopia, visual field defects</li>
                          <li><strong>Pupillary changes:</strong> Sluggish or non-reactive pupils</li>
                          <li><strong>Cushing's triad:</strong> Hypertension, bradycardia, irregular breathing (late sign)</li>
                          <li><strong>Papilledema:</strong> If ophthalmoscope available (may be absent in acute presentations)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="management" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      Immediate Management Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">While arranging urgent transfer to an emergency department, consider these immediate management steps:</p>

                    <div className="space-y-6">
                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary">General Measures</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Airway, Breathing, Circulation:</strong> Ensure ABC stability</li>
                          <li><strong>IV access:</strong> Establish reliable intravenous access</li>
                          <li><strong>Monitoring:</strong> Continuous vital signs monitoring</li>
                          <li><strong>Position:</strong> Head elevation 30° for suspected raised ICP</li>
                          <li><strong>Documentation:</strong> Record detailed neurological findings as baseline</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary">Condition-Specific Measures</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Suspected raised ICP:</strong> Consider dexamethasone 8-16mg IV if brain tumor/edema suspected</li>
                          <li><strong>Malignant spinal cord compression:</strong> Dexamethasone 16mg IV stat</li>
                          <li><strong>Suspected CNS infection:</strong> Blood cultures before antibiotics if possible</li>
                          <li><strong>Status epilepticus:</strong> Follow status epilepticus protocol</li>
                          <li><strong>Anticoagulation-related hemorrhage:</strong> Consider reversal agents as per local protocol</li>
                        </ul>
                        <p className="mt-2 text-sm font-medium">Note: Always consult with the neurosurgical team before administering steroids or other medications when possible</p>
                      </div>

                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary">Imaging Considerations</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Suspected intracranial pathology:</strong> Urgent CT brain</li>
                          <li><strong>Suspected cauda equina or spinal cord compression:</strong> Urgent MRI spine</li>
                          <li><strong>If MRI contraindicated:</strong> CT myelogram may be considered</li>
                          <li><strong>Suspected vascular pathology:</strong> CT angiogram or MR angiogram</li>
                        </ul>
                        <p className="mt-2 text-sm font-medium">Note: Do not delay transfer to obtain imaging if this will significantly delay neurosurgical assessment and treatment</p>
                      </div>

                      <div className="mt-6">
                        <img
                          src="/images/gp-resources/emergencies-3.jpg"
                          alt="Emergency medical response"
                          className="w-full rounded-md object-cover h-64"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Emergency Contact Protocol
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">When a neurosurgical emergency is suspected, prompt communication with the neurosurgical team is essential:</p>

                    <div className="space-y-6">
                      <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-md">
                        <h3 className="font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Emergency Contact Numbers
                        </h3>
                        <ul className="list-none pl-0 mt-2 space-y-3">
                          <li className="flex items-center gap-2">
                            <span className="font-bold min-w-[180px]">Neurosurgical Emergency Line:</span>
                            <span className="text-red-700 dark:text-red-400 font-bold">(03) 9008 4200</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="font-bold min-w-[180px]">After Hours Emergency:</span>
                            <span className="text-red-700 dark:text-red-400 font-bold">(03) 9008 4200</span>
                            <span className="text-sm">(Diverts to on-call neurosurgeon)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="font-bold min-w-[180px]">Emergency Department:</span>
                            <span>Direct patient to nearest emergency department with neurosurgical capabilities</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          Information to Provide
                        </h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Patient demographics:</strong> Name, age, location</li>
                          <li><strong>Clinical presentation:</strong> Key symptoms and duration</li>
                          <li><strong>Neurological findings:</strong> GCS, motor/sensory deficits, pupillary response</li>
                          <li><strong>Relevant medical history:</strong> Previous neurosurgical conditions, anticoagulation</li>
                          <li><strong>Imaging results:</strong> If available</li>
                          <li><strong>Interventions already performed:</strong> Medications given, other treatments</li>
                          <li><strong>Current vital signs:</strong> BP, HR, RR, temperature</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-primary/30 bg-primary/5 rounded-md">
                        <h3 className="font-bold text-primary flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Expected Response Times
                        </h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Phone consultation:</strong> Immediate to 10 minutes</li>
                          <li><strong>Emergency department assessment:</strong> Upon patient arrival</li>
                          <li><strong>Neurosurgical team response:</strong> Dependent on clinical urgency and location</li>
                        </ul>
                        <p className="mt-2 text-sm font-medium">Note: For true neurosurgical emergencies, the on-call neurosurgeon is available 24/7 and can provide immediate telephone advice while the patient is being transferred</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Emergency Case Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyCases?.map((example: any, index: any) => (
                <Card key={index} className="bg-card border-red-200 dark:border-red-800">
                  <CardHeader className="bg-red-50 dark:bg-red-950/20 border-b border-red-200 dark:border-red-800">
                    <CardTitle className="text-xl text-red-700 dark:text-red-400">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4">{example.description}</p>
                    <div className="space-y-2">
                      <p><strong>Red Flags:</strong> <span className="text-red-600 dark:text-red-400">{example.redFlags}</span></p>
                      <p><strong>Action:</strong> {example.action}</p>
                      <p><strong>Outcome:</strong> {example.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/gp-resources">Back to GP Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </StandardPageLayout>
  );
};

Emergencies.displayName = 'Emergencies';

export default Emergencies;
