import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CareCoordination() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Case examples
  const caseExamples = [
    {
      title: "Case 1: Complex Cervical Spine Surgery",
      description: "A 62-year-old woman with multilevel cervical stenosis and myelopathy, complicated by osteoporosis, diabetes, and anxiety about surgery.",
      approach: "Preoperative coordination between neurosurgery, endocrinology for diabetes management, and bone health specialist for osteoporosis optimisation. Anaesthesiology consultation for complex airway assessment. Psychology referral for pre-surgical anxiety management.",
      gpRole: "GP coordinated medication adjustments, monitored blood glucose levels, and provided psychological support between specialist appointments.",
      outcome: "Successful C3-C6 laminoplasty with minimal complications. Postoperative care coordinated between neurosurgery, rehabilitation medicine, and GP, with clear communication channels established for ongoing management."
    },
    {
      title: "Case 2: Elderly Patient with Brain Tumor",
      description: "A 78-year-old man with multiple comorbidities (hypertension, atrial fibrillation, mild dementia) diagnosed with a large meningioma causing progressive weakness.",
      approach: "Multidisciplinary tumor board discussion involving neurosurgery, geriatrics, anaesthesiology, and radiation oncology to determine optimal management. Decision for surgical resection with tailored perioperative care plan.",
      gpRole: "GP provided comprehensive medical history, managed anticoagulation cessation, and coordinated preoperative cardiac clearance. Postoperatively, GP monitored cognitive function and managed medication adjustments.",
      outcome: "Complete tumor resection with excellent recovery. Geriatric rehabilitation followed by home-based care with regular GP monitoring. Shared electronic health record facilitated communication between all providers."
    },
    {
      title: "Case 3: Spinal Metastasis Management",
      description: "A 56-year-old woman with breast cancer developed thoracic spine metastasis with impending cord compression, requiring urgent intervention and coordinated cancer care.",
      approach: "Rapid coordination between neurosurgery, radiation oncology, medical oncology, and pain management. Video conference arranged to discuss treatment sequencing and goals of care.",
      gpRole: "GP facilitated urgent imaging, provided psychosocial support to patient and family, and coordinated community palliative care services for post-treatment support.",
      outcome: "Patient underwent decompressive surgery followed by stereotactic radiotherapy. Oncology continued systemic therapy. GP managed pain control and supportive care with regular telehealth consultations with the neurosurgical team."
    },
    {
      title: "Case 4: Pediatric Spinal Cord Injury",
      description: "A 14-year-old boy sustained incomplete spinal cord injury during a sporting accident, requiring complex acute and long-term rehabilitation planning.",
      approach: "Acute management by neurosurgery and pediatric intensive care, followed by coordinated rehabilitation involving physiatry, pediatric neurology, physiotherapy, occupational therapy, and psychology.",
      gpRole: "GP coordinated school reintegration, managed ongoing medical needs, and served as the central point of contact for the family navigating multiple services.",
      outcome: "Significant neurological recovery achieved through intensive rehabilitation. GP facilitated regular case conferences with all providers, ensuring consistent approach to the patient's evolving needs."
    },
    {
      title: "Case 5: Chronic Pain After Failed Back Surgery",
      description: "A 49-year-old construction worker with persistent pain and disability following multiple lumbar surgeries, complicated by opioid dependence and depression.",
      approach: "Comprehensive reassessment by neurosurgery determined no further surgical options. Coordinated care plan developed with pain medicine, addiction medicine, psychiatry, and physiotherapy.",
      gpRole: "GP implemented structured opioid tapering program, provided regular mental health support, and coordinated return-to-work planning with occupational rehabilitation services.",
      outcome: "Successful transition to non-opioid pain management, significant improvement in function and mood, and eventual return to modified work duties. Regular communication between specialists and GP ensured consistent messaging and approach."
    }
  ];

  return (
    <Layout>
      <PageHeader
        title={t.gpResources.careCoordination.title}
        subtitle={t.gpResources.careCoordination.subtitle}
        backgroundImage="/images/gp-resources/care-coordination-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-8">
              {t.gpResources.careCoordination.description}
            </p>

            <Tabs defaultValue="team" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="team">Team-Based Care</TabsTrigger>
                <TabsTrigger value="preoperative">Preoperative Management</TabsTrigger>
                <TabsTrigger value="postoperative">Postoperative Follow-Up</TabsTrigger>
                <TabsTrigger value="shared">Shared Care Models</TabsTrigger>
              </TabsList>

              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.careCoordination.teamApproach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.careCoordination.teamApproach.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Our Multidisciplinary Team</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Core Neurosurgical Team</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Neurosurgeon:</strong> Dr Ales Aliashkevich provides surgical expertise and overall management of neurosurgical conditions</li>
                          <li><strong>Neurosurgical Nurse Coordinator:</strong> Facilitates patient care, education, and communication between team members</li>
                          <li><strong>Anaesthesiologists:</strong> Specialised in neuroanaesthesia for complex brain and spine procedures</li>
                          <li><strong>Neuroradiologists:</strong> Provide expert interpretation of neuroimaging and interventional procedures</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Extended Care Team</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Neurologists:</strong> Collaborate on complex neurological conditions and diagnostic workups</li>
                          <li><strong>Rehabilitation Specialists:</strong> Physiatrists, physiotherapists, and occupational therapists for pre and post-surgical rehabilitation</li>
                          <li><strong>Pain Management Specialists:</strong> For complex pain conditions and perioperative pain management</li>
                          <li><strong>Oncologists:</strong> For patients with brain or spinal tumors requiring adjuvant therapy</li>
                          <li><strong>Endocrinologists:</strong> For pituitary disorders and metabolic optimisation before surgery</li>
                          <li><strong>Psychiatrists/Psychologists:</strong> For psychological support and management of comorbid mental health conditions</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">The GP's Crucial Role</h4>
                        <p className="mt-2">General practitioners are integral members of our multidisciplinary team, providing:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Comprehensive knowledge of the patient's medical history and comorbidities</li>
                          <li>Continuity of care before, during, and after neurosurgical intervention</li>
                          <li>Coordination of multiple specialist recommendations</li>
                          <li>Medication management and reconciliation</li>
                          <li>Psychosocial support for patients and families</li>
                          <li>Early identification of complications or concerns during recovery</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Communication Pathways</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p>We prioritize clear communication with referring GPs through:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Detailed consultation letters</strong> provided within 48 hours of patient assessment</li>
                        <li><strong>Direct phone access</strong> to our neurosurgical team for urgent concerns</li>
                        <li><strong>Regular case conferences</strong> for complex patients (in-person or via telehealth)</li>
                        <li><strong>Secure electronic communication</strong> for ongoing updates and care coordination</li>
                        <li><strong>GP hotline</strong> for rapid access to neurosurgical advice: (03) 9008 4200</li>
                      </ul>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">Multidisciplinary Case Conferences:</p>
                      <p className="mt-2">For complex cases, we hold regular multidisciplinary team meetings. Referring GPs are welcome to participate in these discussions, either in person or via telehealth. Please contact our office if you would like to be involved in case discussions for your patients.</p>
                    </div>

                    <div className="mt-6">
                      <img
                        src="/images/gp-resources/care-coordination-2.jpg"
                        alt="Medical professional with laptop"
                        className="w-full rounded-md object-cover h-64"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preoperative" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.careCoordination.preoperativeManagement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.careCoordination.preoperativeManagement.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Preoperative Optimisation</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Medical Optimisation</h4>
                        <p className="mt-2">GPs play a crucial role in optimising patients' medical status before neurosurgery:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Cardiovascular assessment:</strong> Optimise blood pressure control, manage arrhythmias, consider cardiology referral for high-risk patients</li>
                          <li><strong>Diabetes management:</strong> Aim for HbA1c &lt;8% when possible, establish clear perioperative diabetes management plan</li>
                          <li><strong>Respiratory optimisation:</strong> Address COPD/asthma, encourage smoking cessation (ideally 6-8 weeks before surgery), consider pulmonary function tests for high-risk patients</li>
                          <li><strong>Anticoagulation management:</strong> Follow our perioperative anticoagulation protocol (available on request) for patients on anticoagulants or antiplatelets</li>
                          <li><strong>Nutrition and hydration:</strong> Address malnutrition, optimise protein intake, correct electrolyte abnormalities</li>
                          <li><strong>Infection risk reduction:</strong> Treat any active infections, ensure appropriate vaccinations are up to date</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Medication Management</h4>
                        <p className="mt-2">Guidelines for common medications before neurosurgery:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Anticoagulants/Antiplatelets:</strong>
                            <ul className="list-disc pl-6 mt-1">
                              <li>Warfarin: Usually stopped 5 days before surgery, bridging with LMWH if high thrombotic risk</li>
                              <li>DOACs: Typically stopped 48-72 hours before surgery depending on renal function</li>
                              <li>Aspirin: Usually stopped 7 days before intracranial surgery; may continue for some spine procedures</li>
                              <li>Clopidogrel: Usually stopped 7-10 days before surgery</li>
                            </ul>
                          </li>
                          <li><strong>Antihypertensives:</strong> Generally continue most antihypertensives; ACE inhibitors/ARBs may be held on the morning of surgery</li>
                          <li><strong>Diabetic medications:</strong> Individualized management; typically oral hypoglycemics held on day of surgery, insulin doses adjusted</li>
                          <li><strong>Steroids:</strong> Patients on chronic steroids require stress dosing perioperatively</li>
                          <li><strong>Psychiatric medications:</strong> Most should be continued; MAOIs require special consideration</li>
                          <li><strong>Herbal supplements:</strong> Stop most herbal supplements 2 weeks before surgery</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Psychosocial Preparation</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Anxiety management:</strong> Address surgical anxiety, consider short-term anxiolytics if needed</li>
                          <li><strong>Expectations setting:</strong> Ensure patient has realistic understanding of recovery timeline and potential outcomes</li>
                          <li><strong>Social support assessment:</strong> Identify support needs for post-discharge care</li>
                          <li><strong>Advance care planning:</strong> Encourage discussion of healthcare preferences and documentation of advance directives</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Preoperative Testing</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p>Standard preoperative tests typically include:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Blood tests:</strong> CBC, electrolytes, renal function, coagulation studies</li>
                        <li><strong>ECG:</strong> For patients over 45 years or with cardiovascular risk factors</li>
                        <li><strong>Chest X-ray:</strong> For patients with pulmonary disease or symptoms</li>
                        <li><strong>Additional tests</strong> based on individual risk factors and procedure complexity</li>
                      </ul>
                      <p className="mt-2">GPs can facilitate these tests in the community setting when appropriate, with results forwarded to our office before the patient's preoperative assessment.</p>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">Preoperative Checklist for GPs:</p>
                      <p className="mt-2">We provide a comprehensive preoperative checklist for GPs to ensure all aspects of preparation are addressed. This can be downloaded from our website or requested from our office. For complex patients, we welcome direct discussion with our preoperative assessment team.</p>
                    </div>

                    <div className="mt-6">
                      <img
                        src="/images/gp-resources/care-coordination-3.jpg"
                        alt="Medical team meeting"
                        className="w-full rounded-md object-cover h-64"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="postoperative" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.careCoordination.postoperativeFollowUp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.careCoordination.postoperativeFollowUp.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Discharge Planning and Communication</h3>
                    <div className="p-4 bg-muted rounded-md mb-6">
                      <p>Following neurosurgical procedures, we provide:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Comprehensive discharge summary</strong> sent to the GP within 24-48 hours of discharge</li>
                        <li><strong>Detailed postoperative instructions</strong> for both patient and GP</li>
                        <li><strong>Medication reconciliation</strong> with clear guidance on continuing, modifying, or discontinuing medications</li>
                        <li><strong>Follow-up appointment schedule</strong> with our neurosurgical team</li>
                        <li><strong>Recommended timeline for GP review</strong> (typically 7-10 days post-discharge)</li>
                      </ul>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Common Postoperative Concerns</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Cranial Surgery Follow-Up</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Wound care:</strong> Incisions typically have absorbable sutures with Steri-strips or staples (removed 10-14 days postoperatively)</li>
                          <li><strong>Activity restrictions:</strong> Gradual return to activities over 4-6 weeks; no driving until cleared by neurosurgeon (typically 2-4 weeks)</li>
                          <li><strong>Medication management:</strong> Particular attention to anticonvulsants, steroids (tapering schedule), and pain management</li>
                          <li><strong>Neurological monitoring:</strong> Regular assessment of neurological function, headaches, vision changes</li>
                          <li><strong>Red flags:</strong> Increasing headache, new neurological deficits, CSF leak, signs of infection, seizures</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Spine Surgery Follow-Up</h4>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Wound care:</strong> Similar to cranial surgery; monitor for drainage or dehiscence</li>
                          <li><strong>Activity restrictions:</strong> Procedure-specific limitations on lifting, bending, twisting; gradual increase in walking</li>
                          <li><strong>Bracing:</strong> Some patients require cervical or lumbar bracing; ensure proper fit and compliance</li>
                          <li><strong>Pain management:</strong> Expected pain patterns, appropriate analgesic use, weaning protocols</li>
                          <li><strong>Rehabilitation:</strong> Timing of physiotherapy initiation, appropriate exercises</li>
                          <li><strong>Red flags:</strong> New or worsening neurological deficits, severe pain unresponsive to medication, signs of infection, CSF leak</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Rehabilitation Coordination</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p>GPs play a vital role in coordinating rehabilitation services:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Outpatient physiotherapy:</strong> Referral timing and appropriate program selection</li>
                        <li><strong>Occupational therapy:</strong> For assistance with activities of daily living and return to work planning</li>
                        <li><strong>Neuropsychological assessment:</strong> When cognitive changes are present</li>
                        <li><strong>Speech therapy:</strong> For patients with language or swallowing difficulties</li>
                        <li><strong>Community support services:</strong> Coordination of home care needs</li>
                      </ul>
                      <p className="mt-2">Our team can provide procedure-specific rehabilitation protocols and recommendations to guide these referrals.</p>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">When to Contact the Neurosurgical Team:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>New or worsening neurological deficits</li>
                        <li>Suspected wound infection or CSF leak</li>
                        <li>Severe, uncontrolled pain</li>
                        <li>New seizure activity</li>
                        <li>Significant medication side effects</li>
                      </ul>
                      <p className="mt-2">Our team is available 24/7 for urgent postoperative concerns. For non-urgent questions, please contact our nurse coordinator during business hours.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shared" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.careCoordination.sharedCareModels.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.careCoordination.sharedCareModels.description}</p>

                    <h3 className="font-bold text-lg mt-6 mb-3">Structured Shared Care Approaches</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Chronic Spine Condition Management</h4>
                        <p className="mt-2">For patients with chronic degenerative spine conditions:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Initial neurosurgical assessment</strong> with comprehensive management plan</li>
                          <li><strong>GP-led ongoing management</strong> with agreed parameters for re-referral</li>
                          <li><strong>Shared decision-making</strong> regarding timing of surgical intervention</li>
                          <li><strong>Coordinated conservative care</strong> including medication management, targeted physiotherapy, and pain management strategies</li>
                          <li><strong>Regular neurosurgical review</strong> (typically every 6-12 months) for patients with progressive conditions</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Brain Tumor Surveillance</h4>
                        <p className="mt-2">For patients with stable brain tumors requiring monitoring:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Neurosurgical establishment of monitoring protocol</strong> (imaging frequency and type)</li>
                          <li><strong>GP coordination of surveillance imaging</strong></li>
                          <li><strong>Shared review of results</strong> with clear guidelines for when neurosurgical re-assessment is needed</li>
                          <li><strong>GP management of associated symptoms</strong> with neurosurgical input as needed</li>
                          <li><strong>Joint monitoring for quality of life impacts</strong> and functional changes</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-semibold">Post-Surgical Long-Term Follow-Up</h4>
                        <p className="mt-2">Following successful neurosurgical intervention:</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Transition to GP-led care</strong> after initial postoperative period</li>
                          <li><strong>Structured monitoring protocol</strong> with clear guidance on what to monitor</li>
                          <li><strong>Agreed indications for re-referral</strong> to neurosurgery</li>
                          <li><strong>Annual neurosurgical review</strong> for complex cases or implanted hardware</li>
                          <li><strong>Shared electronic health record access</strong> when available</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Tools to Support Shared Care</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Shared Care Plans:</strong> Documented plans outlining responsibilities, monitoring parameters, and communication pathways</li>
                        <li><strong>GP Resource Portal:</strong> Access to condition-specific management guidelines, patient education materials, and referral criteria</li>
                        <li><strong>Telehealth Case Conferences:</strong> Regular opportunities for GPs to discuss complex patients with our neurosurgical team</li>
                        <li><strong>GP Education Sessions:</strong> Regular updates on neurosurgical management approaches and new technologies</li>
                        <li><strong>Patient-Held Records:</strong> Encouraging patients to maintain their own health records to facilitate information sharing</li>
                      </ul>
                    </div>

                    <h3 className="font-bold text-lg mt-6 mb-3">Collaborative Research Opportunities</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p>We welcome GP participation in neurosurgical research:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Clinical trials for new neurosurgical interventions</li>
                        <li>Quality improvement initiatives in perioperative care</li>
                        <li>Long-term outcome studies of neurosurgical procedures</li>
                        <li>Development and evaluation of shared care models</li>
                      </ul>
                      <p className="mt-2">Interested GPs are encouraged to contact our research coordinator for current opportunities.</p>
                    </div>

                    <div className="mt-6 p-4 border border-primary/20 rounded-md">
                      <p className="font-semibold">Developing a Shared Care Agreement:</p>
                      <p className="mt-2">For patients with complex neurosurgical conditions requiring ongoing management, we offer formalized shared care agreements. These documents outline the roles and responsibilities of the neurosurgical team, GP, and other involved specialists, ensuring coordinated care and clear communication pathways. Please contact our office to discuss establishing such an agreement for your patients.</p>
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
                      <p><strong>Multidisciplinary Approach:</strong> {example.approach}</p>
                      <p><strong>GP's Role:</strong> {example.gpRole}</p>
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
