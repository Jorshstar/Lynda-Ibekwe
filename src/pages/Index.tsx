import HeroSection from "@/components/HeroSection";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import ToolStack from "@/components/ToolStack";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedWork />
      <HowIWork />
      <ToolStack />
      <section id="journey">
        <Journey />
      </section>
      <Skills />
      <ContactSection />
      <BottomNav />
      {/* Bottom spacer for nav */}
      <div className="h-24" />
    </div>
  );
};

export default Index;
