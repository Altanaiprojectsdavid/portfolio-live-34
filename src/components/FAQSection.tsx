import React, { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import AnimatedButton from './ui/animated-button';
const faqData = [{
  question: "What types of services are available?",
  answer: "I focus on comprehensive digital solutions including brand development, website creation, strategic consulting, and creative direction. Every project is customized to align with your unique business objectives."
}, {
  question: "Who are your typical clients?",
  answer: "I collaborate with forward-thinking businesses of all sizes, from emerging startups to established enterprises seeking brand evolution. I'm passionate about working with companies that appreciate strategic design thinking."
}, {
  question: "Is there a complimentary consultation available?",
  answer: "Absolutely! I provide a free 30-minute strategy session to explore your project requirements and determine if we're the right match. This ensures we can work together effectively."
}, {
  question: "What information do you require to begin?",
  answer: "I'll need insight into your business objectives, audience demographics, current brand assets, and project vision. We'll thoroughly discuss these elements during our initial strategy session."
}, {
  question: "Can you walk me through your creative process?",
  answer: "My approach begins with strategic discovery, moves through concept creation, design development, and concludes with final implementation. Clear communication and regular feedback sessions keep you involved throughout."
}, {
  question: "What's the typical timeframe for brand projects?",
  answer: "Project duration depends on scope and complexity. Brand identity projects generally span 6-10 weeks, while comprehensive web projects can take 8-14 weeks. I'll outline a specific timeline during our consultation."
}, {
  question: "How do you structure your pricing?",
  answer: "Investment is determined by project requirements, complexity, and schedule. I offer clear, upfront pricing after our discovery phase, ensuring complete transparency with no hidden costs."
}, {
  question: "What support is available after project completion?",
  answer: "I value lasting partnerships and provide comprehensive support options for maintenance, updates, and future expansion. Many clients continue our collaboration as their businesses grow and evolve."
}];
const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return <section id="faq-section" className="w-full md:pb-12 px-4 md:px-6">
      <div className="bg-background border-t border-l border-r border-[hsl(var(--section-dark))] relative rounded-t-3xl mt-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 md:pt-24 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Heading, Description, Button */}
            <div className={`sticky top-24 self-start transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
                FAQs
              </h2>
              <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed mb-8">
                Here are answers to the most received questions. If you're wondering about something else, just reach out!
              </p>
              <AnimatedButton text="Get in Touch" className="font-body" />
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className={`transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Accordion type="single" collapsible className="">
                {faqData.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                    <AccordionTrigger className="text-left font-body text-base md:text-lg text-foreground hover:text-primary transition-colors duration-300 py-6 md:py-8">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;