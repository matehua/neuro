import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';


interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "Melbourne, Australia",
    avatar: "/images/testimonials/patient-1.jpg",
    content: "Dr. Aliashkevich's expertise in minimally invasive spine surgery changed my life. After years of chronic back pain and failed treatments, his precise diagnosis and surgical approach led to a remarkable recovery. I'm now pain-free and back to my active lifestyle.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Sydney, Australia",
    avatar: "/images/testimonials/patient-2.jpg",
    content: "The cervical disc replacement procedure Dr. Aliashkevich performed was truly life-changing. His attention to detail, clear explanations, and exceptional surgical skills resulted in immediate relief from my neck pain and arm numbness. The recovery was much faster than I expected.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Wilson",
    location: "Brisbane, Australia",
    avatar: "/images/testimonials/patient-3.jpg",
    content: "After being told by multiple surgeons that my complex spinal condition was inoperable, Dr. Aliashkevich offered hope with his innovative approach. His use of advanced imaging and robotic technology made a significant difference. Six months post-surgery, I'm enjoying activities I thought I'd never do again.",
    rating: 5
  },
];

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = safeT || {
    // Add minimal fallback structure based on component needs
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    hero: { title: "Welcome", subtitle: "Professional Care", description: "Expert medical services" },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev: number) => (prev + 1) % testimonials?.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev: number) => (prev - 1 + testimonials?.length) % testimonials?.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="section bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {finalT.testimonials.title}
          </h2>
          <p className="text-muted-foreground">
            {finalT.testimonials.description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials?.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-8 md:p-10 transition-all duration-500",
                  activeIndex === index
                    ? "opacity-100 translate-x-0 z-10"
                    : index < activeIndex
                      ? "opacity-0 -translate-x-full z-0"
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="rounded-full overflow-hidden w-20 h-20 mb-4 border-2 border-primary">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i: number) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-center md:text-left">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground text-center md:text-left">{testimonial.location}</p>
                  </div>

                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-muted-foreground">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>

            <div className="flex space-x-2">
              {testimonials?.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
