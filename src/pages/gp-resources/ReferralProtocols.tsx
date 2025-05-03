import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReferralProtocols() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Case examples
  const caseExamples = [
    {
      title: "Case 1: Acute Cervical Radiculopathy",
      description: "A 45-year-old teacher presents with new-onset severe right arm pain and paresthesia in a C6 distribution, with mild weakness of elbow flexion. MRI shows a large right C5-C6 disc herniation with nerve root compression.",
      referralType: "Urgent (within 1-2 weeks)",
      rationale: "Significant neurological deficit with clear anatomical correlation requires prompt neurosurgical assessment to prevent permanent nerve damage.",
      outcome: "Patient was seen within 10 days, underwent anterior cervical discectomy and fusion, with complete resolution of symptoms within 6 weeks."
    },
    {
      title: "Case 2: Progressive Myelopathy",
      description: "A 68-year-old retiree presents with 6-month history of progressive gait disturbance, hand clumsiness, and urinary urgency. Examination reveals hyperreflexia, positive Hoffman's sign, and broad-based gait. MRI shows multilevel cervical stenosis with cord signal change.",
      referralType: "Urgent (within 1-2 weeks)",
      rationale: "Progressive myelopathy with cord signal change indicates significant spinal cord compression requiring prompt intervention to prevent irreversible damage.",
      outcome: "Patient underwent cervical laminoplasty within 2 weeks of referral, with stabilization of symptoms and partial recovery of function over 6 months."
    },
    {
      title: "Case 3: Chronic Lumbar Radiculopathy",
      description: "A 52-year-old office worker presents with 8-month history of left L5 radicular pain, partially responsive to conservative management. MRI shows left L4-L5 disc herniation with foraminal stenosis. No motor deficits present.",
      referralType: "Routine (within 4-6 weeks)",
      rationale: "Chronic symptoms without progressive neurological deficit allow time for thorough assessment and consideration of all treatment options.",
      outcome: "Patient was seen within 5 weeks, offered microdiscectomy but opted for continued conservative management with targeted physiotherapy and selective nerve root block."
    },
    {
      title: "Case 4: Incidental Meningioma",
      description: "A 59-year-old woman undergoes MRI for persistent headaches, revealing a 2.2cm frontal convexity meningioma without significant mass effect or edema. Neurological examination is normal.",
      referralType: "Routine (within 4-6 weeks)",
      rationale: "Incidental finding without acute symptoms or concerning features allows for elective assessment and management planning.",
      outcome: "After neurosurgical consultation, patient opted for surveillance with repeat imaging at 6 months, showing stability. Continues annual monitoring without intervention."
    },
    {
      title: "Case 5: Cauda Equina Syndrome",
      description: "A 37-year-old man presents to GP with acute onset of saddle anesthesia, bilateral leg weakness, and urinary retention following 2 weeks of worsening back pain. MRI shows massive central L4-L5 disc herniation with complete canal occlusion.",
      referralType: "Emergency (same day)",
      rationale: "Cauda equina syndrome is a neurosurgical emergency requiring immediate decompression to prevent permanent neurological damage.",
      outcome: "Patient was referred directly to emergency department, underwent emergency decompressive laminectomy and discectomy within 8 hours of presentation, with gradual recovery of bladder function and significant improvement in neurological symptoms."
    }
  ];

  return (
    <Layout>
      <PageHeader
        title={t.gpResources.referralProtocols.title}
        subtitle={t.gpResources.referralProtocols.subtitle}
        backgroundImage="/images/gp-resources/referral-protocols-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-8">
              {t.gpResources.referralProtocols.description}
            </p>

            <Tabs defaultValue="urgent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="urgent">Urgent Referrals</TabsTrigger>
                <TabsTrigger value="standard">Standard Guidelines</TabsTrigger>
                <TabsTrigger value="process">Referral Process</TabsTrigger>
                <TabsTrigger value="triage">Triage Categories</TabsTrigger>
              </TabsList>

              <TabsContent value="urgent" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.referralProtocols.urgentReferrals.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.referralProtocols.urgentReferrals.description}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Cauda equina syndrome:</strong> Saddle anesthesia, bladder/bowel dysfunction, bilateral leg weakness</li>
                      <li><strong>Acute or progressive myelopathy:</strong> Spinal cord compression with neurological deficits</li>
                      <li><strong>Severe or progressive motor deficits:</strong> Significant weakness (MRC grade ≤3/5) or rapidly worsening weakness</li>
                      <li><strong>Spinal or intracranial infections:</strong> Epidural abscess, subdural empyema, cerebral abscess</li>
                      <li><strong>Malignant spinal cord compression:</strong> Known or suspected metastatic disease with cord compression</li>
                      <li><strong>Intracranial mass with significant mass effect or hydrocephalus</strong></li>
                      <li><strong>Pituitary apoplexy:</strong> Sudden onset headache, visual disturbance, and hormonal dysfunction</li>
                      <li><strong>Acute traumatic spinal instability</strong> with neurological compromise</li>
                    </ul>
                    <div className="mt-6 p-4 bg-muted rounded-md">
                      <p className="font-semibold">For emergency conditions requiring same-day assessment:</p>
                      <p className="mt-2">Contact our office directly at (03) 9008 4200 and request to speak with the on-call neurosurgeon, or direct the patient to the nearest emergency department and we can provide telephone consultation to the ED team.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="standard" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.referralProtocols.standardReferrals.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.referralProtocols.standardReferrals.description}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Clinical history:</strong> Onset, duration, progression of symptoms, exacerbating/relieving factors</li>
                      <li><strong>Neurological symptoms:</strong> Detailed description of pain, sensory changes, motor deficits, and their distribution</li>
                      <li><strong>Neurological examination findings:</strong> Motor strength, sensory testing, reflexes, gait assessment</li>
                      <li><strong>Previous treatments:</strong> Medications, physical therapy, injections, and their outcomes</li>
                      <li><strong>Imaging results:</strong> Please include reports and, when possible, provide access to imaging studies (disc or electronic access)</li>
                      <li><strong>Relevant medical history:</strong> Comorbidities, previous surgeries, medications, allergies</li>
                      <li><strong>Psychosocial factors:</strong> Work status, disability claims, psychological factors affecting pain perception</li>
                      <li><strong>Reason for referral:</strong> Specific questions or concerns you would like addressed</li>
                    </ul>
                    <div className="mt-6 p-4 bg-muted rounded-md">
                      <p className="font-semibold">Preferred imaging for common conditions:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Degenerative spine conditions:</strong> MRI (within last 12 months if possible)</li>
                        <li><strong>Suspected spinal instability:</strong> MRI plus flexion/extension X-rays</li>
                        <li><strong>Brain tumors:</strong> MRI with contrast</li>
                        <li><strong>Cerebrovascular conditions:</strong> MRI/MRA or CT/CTA as appropriate</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.referralProtocols.referralProcess.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.referralProtocols.referralProcess.description}</p>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <strong>Submit referral</strong> via one of the following methods:
                        <ul className="list-disc pl-6 mt-2">
                          <li><strong>Secure electronic referral:</strong> Via HealthLink (EDI: drales)</li>
                          <li><strong>Fax:</strong> (03) 9008 4201</li>
                          <li><strong>Email:</strong> referrals@mineuro.com.au (please ensure patient information is securely transmitted)</li>
                          <li><strong>Mail:</strong> Suite 4, 619 Canterbury Road, Surrey Hills VIC 3127</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Referral triage</strong> by our neurosurgical team:
                        <ul className="list-disc pl-6 mt-2">
                          <li>All referrals are reviewed within 24-48 hours</li>
                          <li>Urgent cases are identified and prioritized</li>
                          <li>Additional information may be requested if needed</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Appointment scheduling:</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Our team will contact the patient directly to schedule an appointment</li>
                          <li>Appointment timing will be based on clinical urgency</li>
                          <li>Referring doctors will be notified of the appointment date</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Consultation and follow-up:</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Following consultation, a detailed letter will be sent to the referring doctor</li>
                          <li>Ongoing communication will be maintained throughout the patient's treatment</li>
                        </ul>
                      </li>
                    </ol>
                    <div className="mt-6 p-4 bg-muted rounded-md">
                      <p className="font-semibold">For urgent referrals or clinical advice:</p>
                      <p className="mt-2">GPs are welcome to call our office directly at (03) 9008 4200 to discuss urgent cases with our neurosurgical team.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="triage" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.gpResources.referralProtocols.triageCategories.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t.gpResources.referralProtocols.triageCategories.description}</p>
                    <div className="space-y-6">
                      <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-md">
                        <h3 className="font-bold text-red-700 dark:text-red-400">Emergency (Same Day)</h3>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Cauda equina syndrome</li>
                          <li>Acute spinal cord compression with rapidly progressing deficits</li>
                          <li>Intracranial hemorrhage requiring surgical intervention</li>
                          <li>Acute hydrocephalus</li>
                          <li>Spinal or intracranial infections with neurological deterioration</li>
                        </ul>
                        <p className="mt-2 text-sm italic">Direct to emergency department with neurosurgical notification</p>
                      </div>

                      <div className="p-4 border border-orange-300 bg-orange-50 dark:bg-orange-950/20 rounded-md">
                        <h3 className="font-bold text-orange-700 dark:text-orange-400">Urgent (1-2 weeks)</h3>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Progressive myelopathy</li>
                          <li>Significant or progressive motor deficits</li>
                          <li>Brain tumors with mass effect but without acute deterioration</li>
                          <li>Malignant spinal cord compression without acute deficits</li>
                          <li>Pituitary tumors with visual field defects</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20 rounded-md">
                        <h3 className="font-bold text-yellow-700 dark:text-yellow-400">Semi-Urgent (2-4 weeks)</h3>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Stable myelopathy without progression</li>
                          <li>Radiculopathy with mild motor deficit</li>
                          <li>Stable brain tumors without significant mass effect</li>
                          <li>Trigeminal neuralgia refractory to medical management</li>
                          <li>Spinal instability without neurological deficit</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-green-300 bg-green-50 dark:bg-green-950/20 rounded-md">
                        <h3 className="font-bold text-green-700 dark:text-green-400">Routine (4-6 weeks)</h3>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Chronic radiculopathy without motor deficit</li>
                          <li>Degenerative spine disease with manageable symptoms</li>
                          <li>Stable, small intracranial lesions requiring monitoring</li>
                          <li>Carpal tunnel syndrome and other peripheral nerve entrapments</li>
                          <li>Second opinions for non-urgent conditions</li>
                        </ul>
                      </div>
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
                      <p><strong>Referral Type:</strong> <span className="text-primary">{example.referralType}</span></p>
                      <p><strong>Rationale:</strong> {example.rationale}</p>
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
