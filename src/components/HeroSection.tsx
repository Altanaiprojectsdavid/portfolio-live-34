import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#0C0D0F] flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      {/* Background Video Layer */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        controls={false} 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => console.error('Video loading error:', e)}
      >
        <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1756445471/XR85lzld6QlWDzCJZj9Q3EXIs_ms0nie.mp4" type="video/mp4" />
      </video>
      
      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C0D0F] via-[#0C0D0F]/60 to-transparent z-5"></div>
      
      <div className="w-full flex flex-col items-center text-center relative z-10">
        {/* Content Section - Overlapping */}
        <div 
          className={`text-center transition-all duration-700 delay-300 transform -mt-20 relative z-10 pt-[600px] ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="w-[90vw] flex justify-between items-start m-0 p-0">
            <div className="text-white text-[160px] font-extrabold leading-[130px] text-left">
              RICKY<br />REYNOLD
            </div>
            <div className="w-[526px] text-right text-white text-[48px] font-heading font-semibold leading-[66px] break-words">
              A Videographer from California, United States
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;