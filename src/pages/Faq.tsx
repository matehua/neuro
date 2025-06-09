import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SafeImage from "@/components/SafeImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Faq() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // FAQ categories and questions
  const faqCategories = [
    {
      title: "General Questions",
      description: "Common questions about neurosurgical consultations and care",
      questions: [
        {
          question: "What is a neurosurgeon and how is it different from other specialists?",
          answer: "A neurosurgeon is a medical specialist who diagnoses and treats conditions affecting the brain, spine, spinal cord, and peripheral nerves. Unlike neurologists who primarily manage neurological conditions with medications and other non-surgical treatments, neurosurgeons are trained to perform surgical interventions. Orthopaedic surgeons may also operate on the spine, but neurosurgeons have specialized training in treating conditions that affect the nervous system, including the spinal cord and nerve roots."
        },
        {
          question: "Do I need a referral to see Dr Aliashkevich?",
          answer: "Yes, you will need a referral from your GP or another specialist to see Dr Aliashkevich. This is required for Medicare rebates and ensures that all relevant medical information is provided before your consultation. The referral helps Dr Aliashkevich understand your medical history and the specific concerns that led to your referral."
        },
        {
          question: "How long will I need to wait for an appointment?",
          answer: "Waiting times vary depending on the urgency of your condition. Urgent cases are typically seen within 1-2 weeks, while non-urgent consultations may have a waiting period of 3-4 weeks. If your condition requires immediate attention, please ensure your referring doctor indicates this on your referral letter, and our staff will prioritize your appointment accordingly."
        },
        {
          question: "What conditions does Dr Aliashkevich treat most commonly?",
          answer: "Dr Aliashkevich treats a wide range of neurosurgical conditions, with the most common being: degenerative disc disease, herniated discs, spinal stenosis, sciatica and nerve compression, brain tumours, spinal tumours, trigeminal neuralgia, carpal tunnel syndrome, and other peripheral nerve disorders. He specialises in minimally invasive and motion-preserving techniques, particularly for spine conditions. Each patient receives a personalised treatment plan based on their specific condition, medical history, and lifestyle needs."
        },
        {
          question: "How do I know if I need surgery for my back or neck pain?",
          answer: "Surgery is typically considered only after conservative treatments have been tried without adequate relief. Indications that surgery might be necessary include: persistent pain despite medications, physical therapy, and injections; progressive neurological symptoms like numbness, weakness, or coordination problems; bowel or bladder dysfunction (which requires urgent assessment); or imaging that shows clear structural problems corresponding to your symptoms. During your consultation, Dr Aliashkevich will thoroughly evaluate your condition, review your treatment history, and discuss whether surgical intervention is appropriate for your specific situation."
        },
        {
          question: "What should I expect during my first consultation?",
          answer: "Your first consultation with Dr Aliashkevich typically lasts 30-45 minutes and includes several components: a detailed discussion of your symptoms, medical history, and previous treatments; a comprehensive neurological examination; review of any imaging studies you've had; explanation of your diagnosis in clear, understandable terms; discussion of treatment options with their benefits and risks; and time for you to ask questions. Dr Aliashkevich believes in patient education and shared decision-making, ensuring you understand your condition and are comfortable with the recommended treatment plan."
        }
      ]
    },
    {
      title: "Cervical Disc Replacement",
      description: "Questions about artificial disc replacement in the neck",
      questions: [
        {
          question: "What is cervical disc replacement and how does it differ from fusion?",
          answer: "Cervical disc replacement (also called cervical arthroplasty) is a motion-preserving procedure where a damaged disc in the neck is replaced with an artificial disc. Unlike traditional fusion surgery which permanently joins two vertebrae together, disc replacement maintains natural neck movement. This preservation of motion reduces stress on adjacent discs, potentially decreasing the risk of adjacent segment disease. Dr Aliashkevich is a strong advocate for motion-preserving techniques when appropriate for the patient's condition."
        },
        {
          question: "How long does recovery take after cervical disc replacement?",
          answer: "Recovery after cervical disc replacement is typically faster than fusion surgery. Most patients stay in hospital for 1-2 nights and can return to light activities within a few days. Many patients report immediate improvement in arm pain following surgery. Neck discomfort and swallowing difficulties usually resolve within 1-2 weeks. Most patients can return to office work within 2-3 weeks and more physical jobs within 6-8 weeks. Full recovery with maximum benefit is usually achieved by 3 months. For instance, Michael, a 38-year-old IT professional, was back to work within 10 days of his procedure and resumed his regular tennis matches after 6 weeks."
        },
        {
          question: "What types of artificial discs does Dr Aliashkevich use?",
          answer: "Dr Aliashkevich is experienced with multiple artificial disc designs and selects the most appropriate one based on the patient's anatomy and specific condition. He commonly uses the CP-ESP disc, which features a polycarbonate urethane core that mimics natural disc movement, and the Mobi-C disc, which is approved for both single and two-level replacements. Other options include the Prestige LP, ProDisc-C, and M6 discs. Each has unique design features that may make them more suitable for certain patients. During your consultation, Dr Aliashkevich will discuss which option would be most beneficial for your specific situation."
        },
        {
          question: "Can I have an MRI after getting an artificial disc?",
          answer: "Yes, most modern artificial discs are MRI compatible. While the metallic components may produce some image distortion (artifacts) around the implant area, this doesn't prevent MRI scanning of other body regions. The area immediately surrounding the implant may be better visualized using CT scans. Always inform your healthcare provider about your implant before undergoing any imaging studies. Dr Aliashkevich selects implants that minimize imaging interference for future diagnostic needs."
        },
        {
          question: "What symptoms indicate I might need cervical disc replacement?",
          answer: "Symptoms that might indicate you're a candidate for cervical disc replacement include: persistent neck pain that radiates into the shoulders or arms, numbness or tingling in the arms or hands, weakness in the arms or hands, difficulty with fine motor skills, and symptoms that haven't responded to conservative treatments like physical therapy, medications, or injections. Certain symptoms require urgent assessment, such as difficulty walking, problems with balance or coordination, or bowel/bladder dysfunction. Diagnostic imaging (MRI, CT) typically shows disc herniation, degeneration, or other pathology that corresponds with your symptoms. Dr Aliashkevich performs a thorough evaluation to determine if cervical disc replacement is appropriate for your specific condition."
        },
        {
          question: "What are the long-term outcomes of cervical disc replacement?",
          answer: "Long-term studies of cervical disc replacement show excellent outcomes, with many patients maintaining good function and motion 10+ years after surgery. Clinical studies demonstrate that artificial discs maintain their mobility and continue to function well over time. Compared to fusion, disc replacement has shown lower rates of adjacent segment degeneration (problems developing at levels above or below the surgical site). Patient satisfaction rates are typically high, with most reporting significant improvement in pain and function that persists long-term. Dr Aliashkevich follows his patients closely and has observed excellent long-term outcomes, with many returning to full activity without restrictions. For example, Sarah, a 45-year-old physiotherapist who underwent two-level cervical disc replacement 7 years ago, continues to work full-time and enjoys an active lifestyle without neck pain or limitations."
        }
      ]
    },
    {
      title: "Lumbar Disc Replacement",
      description: "Questions about artificial disc replacement in the lower back",
      questions: [
        {
          question: "What is lumbar disc replacement and how does it compare to fusion?",
          answer: "Lumbar disc replacement is a motion-preserving procedure where a damaged disc in the lower back is replaced with an artificial disc. Unlike spinal fusion which eliminates motion between vertebrae, disc replacement maintains natural movement at that level. This preservation of motion helps distribute forces more naturally through the spine, potentially reducing the risk of adjacent segment degeneration. Dr Aliashkevich favours motion-preserving approaches when appropriate as they often allow for faster recovery and better long-term outcomes."
        },
        {
          question: "Who is an ideal candidate for lumbar disc replacement?",
          answer: "Ideal candidates for lumbar disc replacement typically have back pain primarily from degenerative disc disease at one or two levels, have failed conservative treatments for at least 6 months, have no significant facet joint arthritis, maintain good bone quality, and have no major deformity or instability. Age is also a consideration, with better outcomes typically seen in patients under 60. For example, James, a 45-year-old construction manager with debilitating back pain from a degenerative disc at L4-5 who had tried physiotherapy and pain management without success, experienced a 90% reduction in pain following his lumbar disc replacement."
        },
        {
          question: "How long will an artificial lumbar disc last?",
          answer: "Modern artificial lumbar discs are designed for durability and longevity. Clinical studies have shown good outcomes with follow-up periods of 10+ years. The implants undergo rigorous testing, with many designs showing minimal wear even after millions of cycles of movement. For instance, the LP-ESP disc used by Dr Aliashkevich has demonstrated excellent durability in long-term studies. While no implant can be guaranteed to last a lifetime, the current generation of artificial discs is expected to function well for many years in appropriately selected patients."
        },
        {
          question: "What restrictions will I have after lumbar disc replacement?",
          answer: "Initially after surgery, you'll need to avoid heavy lifting (nothing over 5kg) and excessive bending or twisting for about 6 weeks. Most patients can resume light activities and walking within days of surgery. Driving is typically permitted once you're off strong pain medication, usually within 1-2 weeks. After the initial recovery period, most patients can gradually return to normal activities, including sports and exercise, with few permanent restrictions. Dr Aliashkevich has treated several athletes who have returned to competitive sports after lumbar disc replacement, including a 36-year-old amateur triathlete who completed a half Ironman 9 months after surgery."
        },
        {
          question: "What is the success rate for lumbar disc replacement?",
          answer: "Clinical studies show success rates of 70-90% for appropriately selected patients undergoing lumbar disc replacement. 'Success' is typically defined as significant pain reduction, improved function, and patient satisfaction. Dr Aliashkevich's patients often experience substantial improvement in pain and quality of life. For example, Emma, a 52-year-old nurse with debilitating back pain that prevented her from working, returned to full-time nursing duties 3 months after her lumbar disc replacement with minimal discomfort. It's important to note that proper patient selection is crucial for good outcomes, which is why Dr Aliashkevich conducts thorough assessments before recommending this procedure."
        },
        {
          question: "How is lumbar disc replacement performed?",
          answer: "Lumbar disc replacement is typically performed through an anterior approach (from the front of the body). This approach allows direct access to the disc space without disturbing the back muscles, nerves, or spinal canal. During the procedure, the damaged disc is carefully removed, and the artificial disc is precisely placed in the disc space. The surgery usually takes 2-3 hours, depending on the number of levels being treated. Dr Aliashkevich uses advanced imaging guidance to ensure optimal placement of the implant. Most patients spend 2-3 days in the hospital before going home. This approach minimizes muscle damage and often results in less postoperative pain and faster recovery compared to posterior approaches used for some other spine procedures."
        },
        {
          question: "What are the potential complications of lumbar disc replacement?",
          answer: "While lumbar disc replacement is generally safe, potential complications include: infection (rare, <1%), blood vessel injury (1-2%), implant migration or subsidence (1-3%), heterotopic ossification (unwanted bone formation, 5-10%), and persistent pain. Serious complications such as nerve injury are very rare (<0.5%). Dr Aliashkevich takes multiple precautions to minimise these risks, including meticulous surgical technique, antibiotic prophylaxis, and careful patient selection. It's worth noting that the complication rates for disc replacement are generally comparable to or lower than those for fusion surgery. During your consultation, Dr Aliashkevich will discuss the specific risks relevant to your case and how they are mitigated. The vast majority of patients experience significant benefits that far outweigh these potential risks."
        }
      ]
    },
    {
      title: "Advanced Robotic and Minimally Invasive Techniques",
      description: "Questions about cutting-edge neurosurgical technologies",
      questions: [
        {
          question: "What types of spinal conditions can be treated with robotic surgery?",
          answer: "Robotic technology can be applied to various spinal procedures, including spinal fusions, screw placements, decompression surgeries, and correction of spinal deformities. It's particularly valuable for complex cases involving difficult anatomy or revision surgeries. The technology is most commonly used for conditions such as degenerative disc disease, spinal stenosis, spondylolisthesis, spinal instability, and certain spinal deformities. Dr Aliashkevich evaluates each case individually to determine if robotic assistance would provide significant benefits for the specific procedure."
        },
        {
          question: "How does robotic spine surgery differ from traditional spine surgery?",
          answer: "Robotic spine surgery represents an evolution of traditional surgical techniques, offering enhanced precision and visualization. While traditional surgery relies heavily on the surgeon's direct visualization and manual skills, robotic systems provide real-time 3D imaging and computer-assisted guidance. This allows for more precise placement of instrumentation, smaller incisions, less tissue disruption, and potentially reduced radiation exposure compared to conventional fluoroscopy-guided procedures. The surgeon remains in complete control throughout the procedure, with the robotic system serving as an advanced precision tool rather than an autonomous operator."
        },
        {
          question: "What is neuromonitoring and why is it important in spine surgery?",
          answer: "Neuromonitoring refers to the use of electrophysiological techniques to monitor the function of the nervous system during surgery. In spine procedures, this typically includes electromyography (EMG), somatosensory evoked potentials (SSEP), and motor evoked potentials (MEP). These techniques allow the surgical team to detect potential nerve irritation or damage in real-time, before it becomes permanent. Dr Aliashkevich routinely employs neuromonitoring during complex spine procedures to enhance safety and optimise outcomes. For example, EMG can immediately alert the surgeon if a pedicle screw is placed too close to a nerve root, allowing for immediate adjustment."
        },
        {
          question: "What are the recovery advantages of robotic spine surgery?",
          answer: "Patients who undergo robotic spine surgery often experience several recovery advantages compared to traditional open procedures. These typically include less postoperative pain due to smaller incisions and reduced muscle trauma, decreased blood loss, lower risk of infection, shorter hospital stays (often 1-2 days for minimally invasive procedures versus 3-5 days for open surgery), faster return to daily activities, and reduced need for pain medication. However, it's important to note that recovery still depends on the specific procedure performed and individual patient factors. Dr Aliashkevich provides personalised recovery guidelines based on each patient's unique situation."
        },
        {
          question: "What is image-guided surgery and how does it improve outcomes?",
          answer: "Image-guided surgery is an advanced technique that uses real-time imaging during surgical procedures to provide the surgeon with precise navigation. It works by integrating pre-operative imaging (MRI, CT scans) with intraoperative imaging to create a detailed 3D map of the patient's anatomy. This allows Dr Aliashkevich to navigate complex structures with exceptional accuracy, particularly important when operating near critical neural structures. The benefits include more precise tumour removal, preservation of healthy tissue, smaller incisions, reduced complications, and often improved outcomes. For brain tumours, this technology can help maximise tumour removal while minimising risk to eloquent brain areas that control speech, movement, and other essential functions."
        },
        {
          question: "Is minimally invasive surgery suitable for all spine conditions?",
          answer: "While minimally invasive techniques offer many advantages, they aren't appropriate for every spine condition or every patient. Factors that determine suitability include: the specific pathology (type and extent of the problem), anatomical considerations, previous surgeries, and overall health status. Minimally invasive approaches are excellent for many degenerative conditions, herniated discs, and certain types of stenosis. However, complex deformities, extensive multilevel disease, or certain tumour cases might require traditional open approaches or hybrid techniques. Dr Aliashkevich carefully evaluates each case individually and recommends the most appropriate surgical approach based on the specific condition and patient factors, always prioritising safety and optimal outcomes over technique preference."
        }
      ]
    },
    {
      title: "Pain Management and Recovery",
      description: "Questions about pain management, rehabilitation, and recovery after neurosurgical procedures",
      questions: [
        {
          question: "How is pain managed after neurosurgery?",
          answer: "Pain management after neurosurgery is comprehensive and individualised. In the immediate post-operative period (1-3 days), a combination of medications is typically used, including intravenous pain relievers, muscle relaxants, and anti-inflammatory drugs. As you transition to home recovery, you'll be prescribed appropriate oral medications with clear instructions. Dr Aliashkevich and his team emphasise multimodal pain management, which may include medications, physical therapy, heat/cold therapy, and proper positioning techniques. The goal is to keep you comfortable while minimising side effects and preventing dependency on strong pain medications. Most patients find their pain decreases significantly within the first 1-2 weeks after surgery."
        },
        {
          question: "When can I start physical therapy after spine surgery?",
          answer: "The timing for starting physical therapy varies based on the specific procedure you've undergone. For minimally invasive procedures and disc replacements, gentle physical therapy often begins within 1-2 weeks after surgery. For more complex procedures like fusions, therapy might start with very gentle movements at 2-3 weeks, with more active rehabilitation beginning at 4-6 weeks. Dr Aliashkevich provides specific rehabilitation protocols tailored to each patient and procedure. Your physical therapy programme will progress gradually, starting with gentle movements and basic activities before advancing to strengthening exercises and more functional activities. Consistent participation in your rehabilitation programme is crucial for optimal recovery."
        },
        {
          question: "What lifestyle modifications might I need after spine surgery?",
          answer: "After spine surgery, certain lifestyle modifications may be recommended to optimise your recovery and long-term outcomes. These often include: ergonomic adjustments to your work environment, proper body mechanics for daily activities, regular exercise focusing on core strength and flexibility, weight management to reduce stress on your spine, smoking cessation (as smoking significantly impairs healing), and stress reduction techniques. Dr Aliashkevich and his team provide detailed guidance on these modifications based on your specific procedure and lifestyle. Many patients find that these changes not only support their surgical recovery but also improve their overall health and quality of life."
        },
        {
          question: "When can I return to sports and exercise after neurosurgery?",
          answer: "Return to sports and exercise follows a graduated timeline that depends on the type of procedure you've undergone. For minimally invasive procedures, light activities like walking can often begin within days of surgery. Swimming is typically permitted around 3-4 weeks post-surgery once incisions are fully healed. Low-impact exercises like stationary cycling or elliptical training usually resume at 4-6 weeks. More demanding activities such as running, tennis, or golf are generally permitted around 8-12 weeks. Contact sports or high-impact activities may require waiting 4-6 months. Dr Aliashkevich provides personalised guidance for each patient based on their specific procedure, healing progress, and type of sport or exercise. The key principle is gradual progression while listening to your body's signals."
        }
      ]
    },
    {
      title: "Insurance, Costs and Practical Information",
      description: "Questions about insurance coverage, costs, and preparing for treatment",
      questions: [
        {
          question: "What should I bring to my first consultation?",
          answer: "For your first consultation, please bring:\n1) Your referral letter from your GP or specialist\n2) Your Medicare card and private health insurance details\n3) Any relevant imaging (MRI, CT scans, X-rays) on disc if possible, or at minimum the reports\n4) A list of all current medications and dosages\n5) A list of any allergies\n6) Previous medical reports related to your condition\n7) A list of questions you'd like to ask\n\nBeing well-prepared helps Dr Aliashkevich provide the most thorough assessment possible. Many patients find it helpful to bring a support person who can help remember important information discussed during the consultation."
        },
        {
          question: "How long are Dr Aliashkevich's waiting lists for surgery?",
          answer: "Surgical waiting times vary depending on the urgency of your condition and the type of procedure required. For urgent cases, surgery can often be arranged within 1-2 weeks. For non-urgent elective procedures, the waiting period is typically 4-6 weeks. Dr Aliashkevich works across multiple hospitals in Melbourne, which provides flexibility in scheduling. If your condition requires prompt attention, this will be prioritized accordingly. For example, when David presented with progressive neurological symptoms from cervical spinal cord compression, his surgery was expedited and performed within 5 days of his initial consultation."
        },
        {
          question: "Does private health insurance cover neurosurgical procedures?",
          answer: "Yes, private health insurance typically covers neurosurgical procedures, though coverage varies depending on your specific policy and level of cover. Most neurosurgical procedures are covered under the higher tiers of hospital cover (Gold or Silver). There may still be out-of-pocket expenses, including surgeon's fees, anaesthetist fees, and hospital excess. Prior to scheduling any procedure, our staff will provide you with a detailed cost estimate, including expected out-of-pocket expenses. We can also assist with obtaining a quote from your health fund to confirm your coverage. It's advisable to contact your health insurance provider directly to understand your specific coverage for neurosurgical procedures."
        },
        {
          question: "What are the typical costs involved in neurosurgical treatment?",
          answer: "Neurosurgical treatment costs vary widely depending on the procedure, hospital, and your insurance coverage. For insured patients, out-of-pocket expenses typically include: the gap between the surgeon's fee and the Medicare/insurance rebate, anaesthetist gap fees, hospital excess, and possibly assistant surgeon fees. For uninsured patients, costs include the full surgeon's fee, anaesthetist fee, hospital accommodation, and operating theatre fees. As a guide, out-of-pocket expenses for insured patients might range from $500-$5,000 depending on the procedure complexity and your insurance coverage. Our staff will provide a detailed cost estimate before any procedure is scheduled, and payment plans can be arranged if needed."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background mobile-safe-area",
          deviceInfo.isMobile ? "py-mobile-xl" : "py-20"
        )}>
          <div className={cn(
            "relative z-10",
            deviceInfo.isMobile ? "mobile-container" : "container"
          )}>
            <div className={cn(
              "text-center mx-auto",
              deviceInfo.isMobile ? "max-w-full" : "max-w-3xl"
            )}>
              <h1 className={cn(
                "font-bold mt-2 mb-mobile-lg",
                deviceInfo.isMobile
                  ? "mobile-4xl"
                  : "text-4xl md:text-5xl mb-6"
              )}>
                {t.nav.faq}
              </h1>
              <p className={cn(
                "text-muted-foreground",
                deviceInfo.isMobile ? "mobile-text" : ""
              )}>
                {t.contact.faqSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-6">
                Welcome to our comprehensive FAQ section. Here you'll find answers to common questions about neurosurgical procedures, recovery expectations, and specific treatments offered by <a href="https://mpscentre.com.au/dt_team/dr-ales-aliashkevich/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Dr Ales Aliashkevich</a>. If you don't find the information you're looking for, please don't hesitate to contact us.
              </p>

              {/* Featured Image */}
              <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg max-w-2xl mx-auto">
                <img
                  src="/images/Ales-Aliashkevich-consulting-neurosurgery.jpg"
                  alt="Dr. Ales Aliashkevich consulting with a patient"
                  className="w-full h-auto max-h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className={deviceInfo.isMobile ? "mobile-section" : "py-8"}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-lg"
                : "grid grid-cols-1 lg:grid-cols-4 gap-8"
            )}>
              {/* Categories sidebar */}
              <div className={cn(
                deviceInfo.isMobile ? "order-2" : "lg:col-span-1"
              )}>
                <div className={cn(
                  deviceInfo.isMobile
                    ? "space-y-mobile-sm"
                    : "sticky top-24 space-y-2"
                )}>
                  <h2 className={cn(
                    "font-bold mb-mobile-md",
                    deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
                  )}>
                    Categories
                  </h2>
                  {faqCategories.map((category, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={`#category-${index}`}>{category.title}</a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* FAQ accordions */}
              <div className={cn(
                deviceInfo.isMobile
                  ? "order-1 space-y-mobile-xl"
                  : "lg:col-span-3 space-y-12"
              )}>
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} id={`category-${categoryIndex}`}>
                    <h2 className={cn(
                      "font-bold mb-mobile-sm",
                      deviceInfo.isMobile
                        ? "mobile-2xl"
                        : "text-2xl mb-3"
                    )}>
                      {category.title}
                    </h2>
                    {category.description && (
                      <p className="text-muted-foreground mb-6">{category.description}</p>
                    )}

                    {/* Category-specific images */}
                    {category.title === "Cervical Disc Replacement" && (
                      <div className="relative rounded-lg overflow-hidden mb-6 shadow-md max-w-md mx-auto">
                        <SafeImage
                          src="/images/cervical-disc-implants-examples-arthroplasty-disc-replacement-cervical-lumbar-spine-neurosurgery.jpg"
                          alt="Various cervical disc implant models used in disc replacement surgery by Dr. Aliashkevich"
                          className="w-full h-auto max-h-[200px] object-cover"
                          fallbackSrc="/images/medical-consulting.jpg"
                        />
                      </div>
                    )}
                    {category.title === "Lumbar Disc Replacement" && (
                      <div className="relative rounded-lg overflow-hidden mb-6 shadow-md max-w-md mx-auto">
                        <SafeImage
                          src="/images/lumbar-disc-implants-examples-arthroplasty-replacement-cervical-lumbar-spine-advanced-technology-robotic-spine.jpg"
                          alt="Various lumbar disc implant models used in disc replacement surgery by Dr. Aliashkevich"
                          className="w-full h-auto max-h-[200px] object-cover"
                          fallbackSrc="/images/medical-consulting.jpg"
                        />
                      </div>
                    )}
                    {category.title === "Advanced Robotic and Minimally Invasive Techniques" && (
                      <div className="relative rounded-lg overflow-hidden mb-6 shadow-md max-w-md mx-auto">
                        <SafeImage
                          src="/images/robotic-spine-surgery-lumbar-fusion-minimally-invasive-Mazor-Stryker-NuVasive-Renaissance-navigation-neurosurgery.jpg"
                          alt="Advanced robotic spine surgery equipment used for minimally invasive procedures"
                          className="w-full h-auto max-h-[200px] object-cover"
                          fallbackSrc="/images/medical-consulting.jpg"
                        />
                      </div>
                    )}
                    {category.title === "Pain Management and Recovery" && (
                      <div className="relative rounded-lg overflow-hidden mb-6 shadow-md max-w-md mx-auto">
                        <SafeImage
                          src="/images/lumbar-disc-replacement-recovery-physiotherapy-care-spine.jpg"
                          alt="Patient undergoing physical therapy and rehabilitation after spine surgery"
                          className="w-full h-auto max-h-[200px] object-cover"
                          fallbackSrc="/images/medical-consulting.jpg"
                        />
                      </div>
                    )}
                    {category.title === "Insurance, Costs and Practical Information" && (
                      <div className="relative rounded-lg overflow-hidden mb-6 shadow-md max-w-md mx-auto">
                        <SafeImage
                          src="/images/medical-consulting.jpg"
                          alt="Dr. Aliashkevich consulting with a patient about insurance coverage and treatment options"
                          className="w-full h-auto max-h-[200px] object-cover"
                          fallbackSrc="/images/medical-consulting.jpg"
                        />
                      </div>
                    )}
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`item-${categoryIndex}-${faqIndex}`}
                          className="border rounded-lg p-2"
                        >
                          <AccordionTrigger className="text-left font-medium px-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pt-2 pb-4 text-muted-foreground">
                            {faq.answer.split('\n').map((paragraph, i) => (
                              <p key={i} className={i > 0 ? 'mt-2' : ''}>{paragraph}</p>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t.home.cta.title}</h2>
              <p className="text-muted-foreground mb-8">
                {t.home.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">{t.home.cta.bookNow}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t.nav.contact}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
