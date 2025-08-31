import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedButton from "@/components/ui/animated-button";

const ServicesSection = () => {
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

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Branding & Strategy",
      description: "Build your brand on a solid, thoughtful foundation. I'll help you develop a clear strategy that informs your visuals and guides your decisions for the long run.",
      type: "bordered"
    },
    {
      title: "Visual Creative",
      description: "Design that tells your story & grabs attention. Create visuals that work across platforms from pitch decks, campaigns, social content, and more.",
      type: "filled"
    }
  ];

  return (
    <section 
      id="services-section" 
      className="bg-background py-16 md:py-24 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Badge, Heading, Button */}
          <div className={`sticky top-24 self-start transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <span className="text-primary">// </span>
              <span className="uppercase tracking-wider font-body">
                SERVICES
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-12 leading-tight">
              Delivering results for top brands
            </h2>
            
            <AnimatedButton 
              text="See Services Below"
              onClick={() => {
                // Add navigation logic here when needed
                console.log("See Services Below clicked");
              }}
            />
          </div>

          {/* Right Column - Cards */}
          <div className={`space-y-8 transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* First Card - Branding & Strategy */}
            <Card className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden sticky top-24 z-10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-transparent to-transparent pointer-events-none" />
              
              <CardContent className="p-8 md:p-10 relative z-10">
                <h3 className="text-xl md:text-2xl font-heading text-white mb-4">
                  {services[0].title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-body">
                  {services[0].description}
                </p>
              </CardContent>
            </Card>

            {/* Second Card - Visual Creative */}
            <Card className="bg-[hsl(var(--section-dark))] border border-border relative overflow-hidden sticky top-28 z-20">
              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />
              
              <CardContent className="p-8 md:p-10 relative z-10">
                <h3 className="text-xl md:text-2xl font-heading text-white mb-4">
                  {services[1].title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-body">
                  {services[1].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;