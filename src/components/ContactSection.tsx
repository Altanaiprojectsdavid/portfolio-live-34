import React, { useEffect, useState } from 'react';
import AnimatedButton from './ui/animated-button';

const ContactSection = () => {
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

    const element = document.querySelector('#contact-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="contact-section" className="w-full bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className={`text-center transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            Drop Me a Line
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Got a project in mind or just want to say hi? I'm always up for a chat.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-6">
            <AnimatedButton 
              text="Book an Intro Call"
              className="font-body px-8 py-3 text-base md:text-lg"
            />
          </div>
          
          {/* Small Text */}
          <p className="text-sm font-body text-muted-foreground opacity-70">
            No pressure — just a quick chat
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;