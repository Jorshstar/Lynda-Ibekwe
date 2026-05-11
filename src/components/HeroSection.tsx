import { motion } from "framer-motion";
import { Zap, Building2 } from "lucide-react";
import { Star } from "lucide-react";
import profilePicture from "@/assets/profile-picture.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pb-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-gradient-orange overflow-hidden">
            <img
              src={profilePicture}
              alt="Lynda Ibekwe"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-6">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm text-foreground font-medium">AI Automation & CRM Specialist</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          I <span className="font-heading italic text-gradient-orange">build</span> CRM and AI automations that save time and increase revenue.
        </h1>

        {/* Intro */}
        <p className="text-lg text-muted-foreground mb-2">
          👋 Hi, I'm <strong className="text-foreground">Lynda Ibekwe</strong>.
        </p>
        <p className="text-muted-foreground max-w-lg mb-8">
          I help B2B/B2C businesses scale faster by automating tasks, capturing more leads, and eliminating wasted time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Zap className="w-4 h-4" />
            Hire Me
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border bg-secondary text-foreground font-semibold hover:bg-muted transition-colors"
          >
            <Building2 className="w-4 h-4" />
            View Work
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
