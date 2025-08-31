import { useEffect, useState } from "react";
const RecognitionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById("recognitions-section");
    if (section) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);
  const awards = [{
    title: "Gold Award Visual Branding",
    size: "normal"
  }, {
    title: "Best Framer Template 2025",
    size: "large"
  }, {
    title: "Site of the Day Awwwards",
    size: "normal"
  }];
  return <section id="recognitions-section" className="w-full md:pb-12px-4 md:px-6">
      <div className="bg-gradient-to-b from-[hsl(var(--section-dark))] to-transparent relative overflow-hidden rounded-t-3xl">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8 mt-8">
            <span className="text-primary">// </span>
            <span className="uppercase tracking-wider font-body">
              AWARDS
            </span>
            <span className="text-primary"> //</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight">
            Recognitions
          </h2>
          
          {/* Subtitle */}
          <p className="font-body text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Honors and highlights from a journey of meaningful design
          </p>
          
          {/* Awards Layout with Images */}
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Left Laurel Image */}
            <div className="hidden md:block w-40 lg:w-48 h-64 lg:h-80 opacity-60 flex-shrink-0">
              <img src="/lovable-uploads/e27c3e3d-3a7d-4116-9a2d-70c0faac6edd.png" alt="Decorative laurel wreath" className="w-full h-full object-contain" />
            </div>
            
            {/* Awards Column */}
            <div className="flex flex-col items-center gap-6 flex-1 px-8 lg:px-16 h-64 lg:h-80 justify-center">
              {awards.map((award, index) => <div key={index} className={`
                    bg-card/30 border border-border/50 backdrop-blur-sm rounded-full px-8 py-4 
                    font-body text-white transition-all duration-300 hover:bg-card/50 hover:border-border
                    text-center whitespace-nowrap
                    ${award.size === 'large' ? 'text-lg md:text-xl px-10 py-5 transform scale-110' : 'text-base md:text-lg'}
                  `}>
                  {award.title}
                </div>)}
            </div>
            
            {/* Right Leaf Image */}
            <div className="hidden md:block w-40 lg:w-48 h-64 lg:h-80 opacity-60 flex-shrink-0">
              <img src="/lovable-uploads/0b890f22-9357-4c4e-b7c5-e44f8cbf168d.png" alt="Decorative leaf design" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>;
};
export default RecognitionsSection;