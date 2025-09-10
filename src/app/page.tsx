import HeroSection from "@/components/HeroSection";
import MarketProblem from "@/components/MarketProblem";
import AvailableSolution from "@/components/AvailableSolution";
import OurSolution from "@/components/OurSolution";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="market-problem">
        <MarketProblem />
      </div>
      <div id="available-solution">
        <AvailableSolution />
      </div>
      <div id="our-solution">
        <OurSolution />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      {/* <div id="gallery">
        <GallerySection />
      </div> */}
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
