import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/NavBar";
import { ReviewsSection } from "./components/ReviewsSection";
import { ServiceSection } from "./components/ServicesSection";



export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
