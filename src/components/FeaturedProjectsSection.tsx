import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import AnimatedButton from "@/components/ui/animated-button";

const FeaturedProjectsSection = () => {
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

    const element = document.getElementById('featured-projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Voltari",
      image: "/lovable-uploads/cb41ed95-ea6e-42d4-af5d-0196bfe2aa32.png"
    },
    {
      name: "Lustra", 
      image: "/lovable-uploads/9310987a-18b7-4ffc-a62a-3c85b98c0d38.png"
    },
    {
      name: "Verdra",
      image: "/lovable-uploads/9403f89d-dc07-4367-9b52-57b47f8a07ac.png"
    }
  ];

  return (
    <section 
      id="featured-projects-section"
      className="py-16 md:py-24 bg-background px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            © Featured Projects
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A handpicked showcase of real-world client solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-xl border-8 border-[hsl(var(--section-dark))] bg-[hsl(var(--section-dark))]">
                {/* Link Arrow */}
                <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/20 backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-foreground" />
                </div>

                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <img 
                    src={project.image}
                    alt={`${project.name} project`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Project Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div 
          className={`text-center mt-16 md:mt-24 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${projects.length * 200 + 400}ms` }}
        >
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
            Intrigued by the visuals?
          </h3>
          <div className="space-y-6 mb-8">
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              Dive into my projects and see how ideas come to life.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              Together, we can build something remarkable.
            </p>
          </div>
          
          <div className="flex justify-center">
            <AnimatedButton 
              text="View Work"
              onClick={() => {
                // Add navigation logic here when needed
                console.log("View Work clicked");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;