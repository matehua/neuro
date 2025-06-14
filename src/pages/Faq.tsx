import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import CTASection from "@/components/CTASection";

export default function Faq() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSeoData = {
    title: t.faq.title,
    description: t.faq.description
  };

  return (
    <Layout pageType="faq" seoData={faqSeoData}>
      <PageHeader
        title={t.faq.title}
        subtitle={t.faq.subtitle}
        backgroundImage="/images/medical-team-brain-spine-neurosurgeons-operating-theatre-mineuro-aliashkevich.jpg"
        enableParallax={true}
      />

      <main className="flex-1">
        <section className="py-12">
          <div className="container">
            <Accordion type="single" collapsible>
              {Object.entries(t.faq.questions).map(([key, question], index) => (
                <AccordionItem value={`item-${index + 1}`} key={key}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CTASection />
      </main>
    </Layout>
  );
}
