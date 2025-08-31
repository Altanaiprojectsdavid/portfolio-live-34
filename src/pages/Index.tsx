import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import RecognitionsSection from "@/components/RecognitionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JournalSection from "@/components/JournalSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { NavBar } from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section id="hero">
        <HeroSection />
      </section>
      <CompaniesSection />
      <section id="projects">
        <FeaturedProjectsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <RecognitionsSection />
      <TestimonialsSection />
      <section id="journal">
        <JournalSection />
      </section>
      <FAQSection />
      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </div>
  );
};

export default Index;
