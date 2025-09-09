import HeroSection from "@/components/HeroSection";
import MarketProblem from "@/components/MarketProblem";
import AvailableSolution from "@/components/AvailableSolution";
import OurSolution from "@/components/OurSolution";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <MarketProblem />
      <AvailableSolution />
      <OurSolution />
      <ProductsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
