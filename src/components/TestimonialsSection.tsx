import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team has transformed our digital presence. Their innovative approach and attention to detail exceeded all expectations.",
    name: "Sarah Johnson",
    occupation: "Chief Marketing Officer",
    company: { name: "TechCorp", logo: "/lovable-uploads/0b890f22-9357-4c4e-b7c5-e44f8cbf168d.png" }
  },
  {
    quote: "The level of expertise and professionalism is unmatched. They delivered results that drove our business forward significantly.",
    name: "Michael Chen",
    occupation: "Founder & CEO",
    company: { name: "InnovateNow", logo: "/lovable-uploads/e27c3e3d-3a7d-4116-9a2d-70c0faac6edd.png" }
  },
  {
    quote: "Outstanding quality and exceptional service. The team understood our vision and brought it to life perfectly.",
    name: "Emily Rodriguez",
    occupation: "Head of Product",
    company: { name: "FutureSpace", logo: "/lovable-uploads/7b7e7140-a661-4569-9ce4-e0994e0d19d1.png" }
  },
  {
    quote: "A game-changing partnership that elevated our brand to new heights. Highly recommend their innovative solutions.",
    name: "David Thompson",
    occupation: "Creative Director",
    company: { name: "DesignHub", logo: "/lovable-uploads/9310987a-18b7-4ffc-a62a-3c85b98c0d38.png" }
  },
  {
    quote: "Incredible results in record time. Their strategic approach and execution capabilities are truly impressive.",
    name: "Lisa Park",
    occupation: "VP of Strategy",
    company: { name: "GrowthCo", logo: "/lovable-uploads/9403f89d-dc07-4367-9b52-57b47f8a07ac.png" }
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start from 3rd testimonial
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Duplicate testimonials multiple times for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
  const cardWidth = 100 + 16; // card width + gap (reduced to 100px)

  // Initialize with centered positioning
  useEffect(() => {
    const containerCenter = 288; // half of max-w-xl (576px/2)
    const cardCenter = 50; // half of card width (100/2)
    const initialOffset = (testimonials.length * cardWidth) + (cardWidth * 2) + cardCenter - containerCenter; // Start from 3rd testimonial
    setScrollOffset(initialOffset);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setIsAnimating(true);
      // Always move right by one card width
      setScrollOffset(prev => prev + cardWidth);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [cardWidth]);

  const handleCompanyClick = (index: number) => {
    const actualIndex = index % testimonials.length;
    if (actualIndex !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      
      // Calculate steps to move right (always right, never left)
      let steps;
      if (actualIndex > currentIndex) {
        steps = actualIndex - currentIndex;
      } else {
        // If target is "behind", go around the right way
        steps = testimonials.length - currentIndex + actualIndex;
      }
      
      // Move right by the calculated steps
      setScrollOffset(prev => prev + (cardWidth * steps));
      setTimeout(() => {
        setCurrentIndex(actualIndex);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Calculate scroll position for continuous right movement with seamless reset
  const getScrollPosition = () => {
    const containerCenter = 288; // half of max-w-xl (576px/2)
    const cardCenter = 50; // half of card width (100/2)
    
    // Create seamless infinite scroll by resetting when offset gets too large
    const maxOffset = testimonials.length * cardWidth * 2;
    const normalizedOffset = scrollOffset % maxOffset;
    
    return normalizedOffset + cardCenter - containerCenter;
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Quote Icon */}
        <div className="text-center mb-8">
          <Quote className="w-16 h-16 mx-auto text-primary opacity-60" />
        </div>

        {/* Testimonial Content */}
        <div className={`text-center mb-12 transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading text-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
            "{currentTestimonial.quote}"
          </blockquote>
          
          <div className="space-y-2">
            <h4 className="text-lg md:text-xl font-body font-normal text-foreground">
              {currentTestimonial.name}
            </h4>
            <p className="text-base md:text-lg font-body text-muted-foreground">
              {currentTestimonial.occupation}
            </p>
          </div>
        </div>

        {/* Company Cards */}
        <div className="relative overflow-hidden py-8 max-w-xl mx-auto">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div
            className="flex items-center gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${getScrollPosition()}px)`,
              width: `${duplicatedTestimonials.length * cardWidth}px`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => {
              const actualIndex = index % testimonials.length;
              const isActive = actualIndex === currentIndex;
              
              return (
                <div
                  key={`${testimonial.company.name}-${index}`}
                  onClick={() => handleCompanyClick(index)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out ${
                    isActive 
                      ? 'scale-110 opacity-100' 
                      : 'scale-90 opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className={`bg-[hsl(var(--button-interactive))] rounded-lg border border-[rgba(184,219,255,0.06)] p-4 transition-all duration-300 ${
                    isActive 
                      ? 'shadow-lg' 
                      : 'shadow-sm hover:shadow-md'
                  }`}
                   style={{ 
                     width: '100px', 
                     height: '60px',
                     boxShadow: isActive 
                       ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(184, 219, 255, 0.06)" 
                       : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(184, 219, 255, 0.06)"
                   }}
                   >
                    <div className="flex items-center justify-center h-full">
                      <span className={`text-sm md:text-base font-body font-medium transition-colors duration-300 ${
                        isActive 
                          ? 'text-background' 
                          : 'text-background/60'
                      }`}>
                        {testimonial.company.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;