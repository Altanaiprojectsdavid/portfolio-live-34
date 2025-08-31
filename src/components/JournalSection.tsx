import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './ui/animated-button';

const blogPosts = [
  {
    date: "Jul 15, 2025",
    category: "Design Strategy",
    title: "Building brands through storytelling, not just visuals",
  },
  {
    date: "Jul 08, 2025", 
    category: "Client Relations",
    title: "Making complex design concepts simple for stakeholders",
  },
  {
    date: "Jun 28, 2025",
    category: "Creative Methods", 
    title: "Finding fresh perspectives beyond the usual design platforms",
  }
];

const JournalSection = () => {
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

    const element = document.querySelector('#journal-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journal-section" className="w-full bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-sm md:text-base font-body text-muted-foreground mb-4 tracking-wider">
            // BLOG //
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            The Journal
          </h2>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creative insights, design discoveries, and professional reflections from the studio
          </p>
        </div>

        {/* Blog Posts */}
        <div className={`space-y-12 md:space-y-16 mb-16 transition-all duration-700 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="flex items-center gap-8 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              {/* Date */}
              <div className="flex-shrink-0 w-24">
                <time className="text-sm font-body text-muted-foreground">
                  {post.date}
                </time>
              </div>

              {/* Badge + Title + Arrow Column with border */}
              <div className="flex-1 flex items-center gap-4 pb-6 md:pb-8 border-b border-[hsl(var(--section-dark))] group-hover:border-primary transition-colors duration-300">
                {/* Category Badge + Title Column */}
                <div className="flex-1 flex flex-col gap-4 md:gap-6">
                  {/* Category Badge */}
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-body bg-[hsl(var(--section-dark))] text-white rounded-full border border-[hsl(var(--section-dark))]">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-2 md:mb-3">
                    <h3 className="text-xl md:text-2xl font-body text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        <div className={`flex justify-center transition-all duration-700 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <AnimatedButton 
            text="See More Posts"
            className="font-body px-8 py-3 text-base md:text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default JournalSection;