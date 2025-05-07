import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Diagnostics() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Case examples
  const caseExamples = [
    {
      title: "Case 1: Lumbar Radiculopathy",
      description: "A 56-year-old construction worker presents with 6-week history of right-sided low back pain radiating to the lateral calf and dorsum of the foot, with associated numbness in the same distribution.",
      clinicalFindings: "Positive straight leg raise at 40° on right, diminished ankle reflex, mild weakness of great toe extension (4/5).",
      diagnosticApproach: "Initial lumbar spine X-rays showed degenerative changes at L4-L5 and L5-S1. MRI revealed right L5-S1 disc herniation with compression of the right S1 nerve root.",
      outcome: "Diagnosis of right S1 radiculopathy due to disc herniation. Patient underwent selective nerve root block followed by microdiscectomy with complete resolution of symptoms."
    },
    {
      title: "Case 2: Cervical Myelopathy",
      description: "A 72-year-old retired teacher presents with 4-month history of progressive difficulty with fine motor tasks, unsteady gait, and urinary urgency.",
      clinicalFindings: "Hyperreflexia in all limbs, positive Hoffman's sign bilaterally, broad-based gait, decreased proprioception in lower limbs.",
      diagnosticApproach: "Cervical spine MRI showed multilevel degenerative changes with severe canal stenosis at C3-C4 and C4-C5, with T2 hyperintensity within the spinal cord at these levels. CT myelogram was performed to better assess bony anatomy for surgical planning.",
      outcome: "Diagnosis of cervical spondylotic myelopathy. Patient underwent C3-C5 laminoplasty with stabilization of symptoms and partial recovery of function."
    },
    {
      title: "Case 3: Glioblastoma",
      description: "A 64-year-old accountant presents with 3-week history of progressive left-sided weakness, mild confusion, and one episode of seizure.",
      clinicalFindings: "Left hemiparesis (4/5), mild dysarthria, left facial droop, and subtle left-sided neglect.",
      diagnosticApproach: "Non-contrast CT showed a right frontoparietal mass with surrounding edema. MRI with contrast revealed a heterogeneously enhancing mass with central necrosis, consistent with high-grade glioma. Advanced MRI sequences including perfusion imaging and spectroscopy supported the diagnosis of glioblastoma.",
      outcome: "Diagnosis of glioblastoma multiforme. Patient underwent awake craniotomy with intraoperative mapping for maximal safe resection, followed by concurrent chemoradiation therapy."
    },
    {
      title: "Case 4: Normal Pressure Hydrocephalus",
      description: "A 78-year-old retired banker presents with 1-year history of progressive gait disturbance, urinary incontinence, and mild cognitive decline.",
      clinicalFindings: "Magnetic gait, cognitive testing showing executive dysfunction, and urinary urgency without focal neurological deficits.",
      diagnosticApproach: "Brain MRI showed ventriculomegaly out of proportion to cortical atrophy, with evidence of transependymal flow. CSF tap test was performed, removing 50ml of CSF, with significant temporary improvement in gait. Subsequent lumbar drainage trial confirmed response.",
      outcome: "Diagnosis of normal pressure hydrocephalus. Patient underwent ventriculoperitoneal shunt placement with significant improvement in gait and urinary symptoms, and stabilization of cognitive function."
    },
    {
      title: "Case 5: Spinal Metastasis",
      description: "A 61-year-old woman with history of breast cancer presents with 3-week history of progressive mid-back pain, worse at night and unresponsive to analgesics.",
      clinicalFindings: "Localized tenderness at T7 level, no neurological deficits.",
      diagnosticApproach: "Thoracic spine X-rays showed a lytic lesion in T7 vertebral body. MRI revealed a T7 vertebral body lesion with epidural extension causing mild cord compression. CT chest/abdomen/pelvis and bone scan were performed for staging, confirming isolated metastasis.",
      outcome: "Diagnosis of isolated thoracic spine metastasis from breast cancer. Patient underwent stereotactic radiosurgery followed by vertebroplasty for stabilization, with excellent pain relief and no development of neurological deficits."
    }
  ];

  return (
    <Layout>
      <PageHeader
        title={t.gpResources.diagnostics.title}
        subtitle={t.gpResources.diagnostics.subtitle}
        backgroundImage="/images/gp-resources/diagnostics-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-8">
              {t.gpResources.diagnostics.description}
            </p>

            <Tabs defaultValue="imaging" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="imaging">Imaging Guidelines</TabsTrigger>
                <TabsTrigger value="neurological">Neurological Assessment</TabsTrigger>
                <TabsTrigger value="specialized">Specialised Tests</TabsTrigger>
                <TabsTrigger value="interpreting">Interpreting Results</TabsTrigger>
              </TabsList>

              <TabsContent value="imaging" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.diagnostics.imagingGuidelines.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.diagnostics.imagingGuidelines.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Spine Imaging</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Lumbar Spine</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>First-line:</strong> MRI lumbar spine without contrast</li>
                          <li><strong>When to add contrast:</strong> Suspected infection, malignancy, or post-operative assessment</li>
                          <li><strong>Alternative if MRI contraindicated:</strong> CT myelogram</li>
                          <li><strong>For instability assessment:</strong> Add flexion/extension X-rays</li>
                          <li><strong>For osteoporosis/fracture assessment:</strong> CT scan</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Cervical Spine</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>First-line:</strong> MRI cervical spine without contrast</li>
                          <li><strong>For myelopathy:</strong> Include whole spine screening to rule out tandem stenosis</li>
                          <li><strong>For foraminal stenosis assessment:</strong> Consider 3D T2-weighted sequences</li>
                          <li><strong>For instability:</strong> Add flexion/extension X-rays</li>
                          <li><strong>For ossification of posterior longitudinal ligament:</strong> Add CT scan</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Brain Imaging</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Suspected Tumor</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>First-line:</strong> MRI brain with and without contrast</li>
                          <li><strong>Additional sequences:</strong> Perfusion imaging, spectroscopy, and diffusion tensor imaging can help characterize tumors</li>
                          <li><strong>For surgical planning:</strong> Add functional MRI and tractography</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Cerebrovascular Disease</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>For aneurysms:</strong> CT angiography or MR angiography; catheter angiography for definitive assessment</li>
                          <li><strong>For arteriovenous malformations:</strong> MRI with contrast + MR angiography; catheter angiography for definitive assessment</li>
                          <li><strong>For carotid stenosis:</strong> Carotid duplex ultrasound followed by CT angiography if significant stenosis detected</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Hydrocephalus</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Initial assessment:</strong> CT brain without contrast</li>
                          <li><strong>For etiology assessment:</strong> MRI brain with contrast</li>
                          <li><strong>For CSF flow assessment:</strong> Cine MRI</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">Important considerations:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Imaging should be performed within 12 months of referral when possible</li>
                        <li>Please provide patients with copies of their imaging on disc or electronic access details</li>
                        <li>For urgent cases, please call our office to discuss expedited imaging options</li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <img
                        src="/images/gp-resources/diagnostics-2.jpg"
                        alt="Medical imaging review"
                        className="w-full rounded-md object-cover h-64"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="neurological" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.diagnostics.neurologicalAssessment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.diagnostics.neurologicalAssessment.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Radiculopathy Assessment</h3>
                    <div className="p-4 bg-muted rounded-md mb-6">
                      <h4 className="font-semibold">Key Elements:</h4>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Motor testing:</strong> Assess key muscle groups corresponding to nerve roots</li>
                        <li><strong>Sensory testing:</strong> Map dermatomal distribution of sensory changes</li>
                        <li><strong>Reflex testing:</strong> Assess deep tendon reflexes (particularly ankle and knee jerks for lumbar, biceps and triceps for cervical)</li>
                        <li><strong>Provocative tests:</strong> Straight leg raise (lumbar), Spurling's test (cervical)</li>
                        <li><strong>Document pain distribution:</strong> Note if axial, radicular, or both</li>
                      </ul>

                      <h4 className="font-semibold mt-4">Common Patterns:</h4>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>L4 radiculopathy:</strong> Quadriceps weakness, diminished knee reflex, medial leg numbness</li>
                        <li><strong>L5 radiculopathy:</strong> Foot/great toe dorsiflexion weakness, lateral leg numbness</li>
                        <li><strong>S1 radiculopathy:</strong> Plantar flexion weakness, diminished ankle reflex, lateral foot numbness</li>
                        <li><strong>C6 radiculopathy:</strong> Biceps/wrist extension weakness, diminished biceps reflex, thumb/index finger numbness</li>
                        <li><strong>C7 radiculopathy:</strong> Triceps/wrist flexion weakness, diminished triceps reflex, middle finger numbness</li>
                      </ul>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Myelopathy Assessment</h3>
                    <div className="p-4 bg-muted rounded-md mb-6">
                      <h4 className="font-semibold">Key Elements:</h4>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Upper motor neuron signs:</strong> Hyperreflexia, Hoffman's sign, Babinski sign, clonus</li>
                        <li><strong>Gait assessment:</strong> Look for spastic or broad-based gait</li>
                        <li><strong>Fine motor testing:</strong> Finger dexterity, rapid alternating movements</li>
                        <li><strong>Proprioception:</strong> Romberg test, joint position sense</li>
                        <li><strong>Bladder/bowel function:</strong> Ask about urgency, incontinence</li>
                      </ul>

                      <h4 className="font-semibold mt-4">Myelopathy Severity Scales:</h4>
                      <p className="mt-2">Consider using the modified Japanese Orthopaedic Association (mJOA) scale to quantify severity:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Mild myelopathy:</strong> mJOA score 15-17</li>
                        <li><strong>Moderate myelopathy:</strong> mJOA score 12-14</li>
                        <li><strong>Severe myelopathy:</strong> mJOA score &lt;12</li>
                      </ul>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Brain Tumor Assessment</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <h4 className="font-semibold">Key Elements:</h4>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Cognitive assessment:</strong> Orientation, memory, language function</li>
                        <li><strong>Cranial nerve examination:</strong> Particularly visual fields and facial symmetry</li>
                        <li><strong>Motor/sensory examination:</strong> Look for subtle asymmetries</li>
                        <li><strong>Coordination:</strong> Finger-to-nose, heel-to-shin testing</li>
                        <li><strong>Fundoscopy:</strong> Check for papilledema if increased intracranial pressure suspected</li>
                        <li><strong>Seizure history:</strong> Document any seizure activity in detail</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specialized" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Specialised Diagnostic Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.diagnostics.specialisedTests.description}</p>

                    <div className="space-y-6 mt-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h3 className="font-bold">Electrophysiological Studies</h3>
                        <p className="mt-2">Consider when clinical findings and imaging are discordant or to differentiate between conditions:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Nerve Conduction Studies (NCS) and Electromyography (EMG):</strong> Helpful for distinguishing radiculopathy from peripheral neuropathy or entrapment neuropathies</li>
                          <li><strong>When to order:</strong>
                            <ul className="list-disc pl-6 mt-1">
                              <li>Suspected multilevel radiculopathy</li>
                              <li>Differentiating cervical radiculopathy from carpal tunnel syndrome</li>
                              <li>Suspected peripheral neuropathy with radicular symptoms</li>
                              <li>Monitoring progression of nerve damage</li>
                            </ul>
                          </li>
                          <li><strong>Timing:</strong> Most valuable when performed more than 3 weeks after symptom onset</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h3 className="font-bold">Advanced Imaging Techniques</h3>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Functional MRI (fMRI):</strong> Maps brain function by detecting changes in blood flow during tasks
                            <ul className="list-disc pl-6 mt-1">
                              <li>Useful for surgical planning near eloquent cortex</li>
                              <li>Helps minimize neurological deficits after tumor resection</li>
                            </ul>
                          </li>
                          <li><strong>Diffusion Tensor Imaging (DTI):</strong> Maps white matter tracts
                            <ul className="list-disc pl-6 mt-1">
                              <li>Essential for planning surgery near major white matter pathways</li>
                              <li>Helps preserve motor and language function</li>
                            </ul>
                          </li>
                          <li><strong>MR Spectroscopy:</strong> Analyzes chemical composition of brain tissue
                            <ul className="list-disc pl-6 mt-1">
                              <li>Helps differentiate tumor types</li>
                              <li>Distinguishes tumor recurrence from radiation necrosis</li>
                            </ul>
                          </li>
                          <li><strong>Perfusion Imaging:</strong> Measures blood flow through tissues
                            <ul className="list-disc pl-6 mt-1">
                              <li>Helps grade tumors based on vascularity</li>
                              <li>Guides biopsy to target most aggressive areas</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h3 className="font-bold">CSF Analysis</h3>
                        <p className="mt-2">Consider in the following scenarios:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Suspected CNS infection:</strong> Meningitis, encephalitis, abscess</li>
                          <li><strong>Suspected carcinomatous meningitis:</strong> Particularly in patients with known malignancy and new neurological symptoms</li>
                          <li><strong>Inflammatory or demyelinating conditions:</strong> Multiple sclerosis, neuromyelitis optica</li>
                          <li><strong>Normal pressure hydrocephalus:</strong> CSF tap test can be both diagnostic and predictive of shunt response</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h3 className="font-bold">Vascular Studies</h3>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Catheter Angiography:</strong> Gold standard for vascular lesions
                            <ul className="list-disc pl-6 mt-1">
                              <li>Definitive assessment of aneurysms, AVMs, and fistulas</li>
                              <li>Allows for interventional procedures</li>
                            </ul>
                          </li>
                          <li><strong>Transcranial Doppler (TCD):</strong>
                            <ul className="list-disc pl-6 mt-1">
                              <li>Monitoring for vasospasm after subarachnoid hemorrhage</li>
                              <li>Assessing cerebral hemodynamics</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">When to refer for specialised testing:</p>
                      <p className="mt-2">Rather than ordering these specialised tests directly, consider referral to neurosurgery first. Our team can coordinate the most appropriate advanced testing based on the clinical presentation and initial imaging findings.</p>
                    </div>

                    <div className="mt-6">
                      <img
                        src="/images/gp-resources/diagnostics-3.jpg"
                        alt="Medical professional with laptop"
                        className="w-full rounded-md object-cover h-64"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interpreting" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.diagnostics.interpretingResults.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.diagnostics.interpretingResults.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Spine Imaging Interpretation</h3>
                    <div className="p-4 bg-muted rounded-md mb-6">
                      <h4 className="font-semibold">Key Considerations:</h4>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Clinical correlation is essential:</strong> Many imaging findings are present in asymptomatic individuals
                          <ul className="list-disc pl-6 mt-1">
                            <li>Disc bulges are present in ~50% of asymptomatic adults over 40</li>
                            <li>Degenerative changes increase with age and are often not symptomatic</li>
                          </ul>
                        </li>
                        <li><strong>Nerve root compression:</strong> Look for
                          <ul className="list-disc pl-6 mt-1">
                            <li>Displacement of the nerve root</li>
                            <li>Obliteration of perineural fat</li>
                            <li>Compression should correlate with dermatomal symptoms</li>
                          </ul>
                        </li>
                        <li><strong>Spinal cord compression:</strong> Assess for
                          <ul className="list-disc pl-6 mt-1">
                            <li>Cord deformity</li>
                            <li>T2 signal change within the cord (myelomalacia)</li>
                            <li>Degree of canal stenosis</li>
                          </ul>
                        </li>
                        <li><strong>Red flags on spine imaging:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Destructive lesions of vertebral bodies</li>
                            <li>Pathological fractures</li>
                            <li>Epidural collections (hematoma, abscess)</li>
                            <li>Abnormal enhancement patterns</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Brain Imaging Interpretation</h3>
                    <div className="p-4 bg-muted rounded-md mb-6">
                      <h4 className="font-semibold">Key Considerations:</h4>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Mass lesions:</strong> Assess for
                          <ul className="list-disc pl-6 mt-1">
                            <li>Location and relationship to eloquent areas</li>
                            <li>Enhancement pattern</li>
                            <li>Surrounding edema</li>
                            <li>Mass effect and midline shift</li>
                            <li>Hydrocephalus</li>
                          </ul>
                        </li>
                        <li><strong>Common enhancement patterns:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Ring enhancement: Glioblastoma, metastasis, abscess</li>
                            <li>Homogeneous enhancement: Meningioma, low-grade glioma</li>
                            <li>Dural tail: Meningioma</li>
                            <li>No enhancement: Some low-grade gliomas, epidermoid cysts</li>
                          </ul>
                        </li>
                        <li><strong>Vascular lesions:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Aneurysms: Location, size, neck configuration</li>
                            <li>AVMs: Size, feeding vessels, venous drainage, eloquent location</li>
                            <li>Cavernomas: Popcorn appearance, hemosiderin rim</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">When to Seek Neurosurgical Input</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Discordant clinical and imaging findings</strong></li>
                        <li><strong>Equivocal imaging results</strong> with significant clinical symptoms</li>
                        <li><strong>Progressive neurological deficits</strong> despite conservative management</li>
                        <li><strong>Incidental findings</strong> of uncertain significance:
                          <ul className="list-disc pl-6 mt-1">
                            <li>Small meningiomas</li>
                            <li>Unruptured aneurysms</li>
                            <li>Chiari malformations</li>
                            <li>Pineal cysts</li>
                          </ul>
                        </li>
                        <li><strong>Determining surgical candidacy</strong> for degenerative spine conditions</li>
                      </ul>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">Radiological-Clinical Mismatch:</p>
                      <p className="mt-2">Remember that imaging findings must be interpreted in the context of clinical presentation. When in doubt, neurosurgical consultation can help determine the clinical significance of radiological findings and guide appropriate management.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Case Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseExamples.map((example, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{example.description}</p>
                    <div className="space-y-2">
                      <p><strong>Clinical Findings:</strong> {example.clinicalFindings}</p>
                      <p><strong>Diagnostic Approach:</strong> {example.diagnosticApproach}</p>
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
    </Layout>
  );
}
