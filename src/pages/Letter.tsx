import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Letter = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">To My Next Team</h1>
          <p className="text-lg text-muted-foreground">And Employer</p>
        </div>

        {/* Letter Content */}
        <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50">
          <div className="p-8 md:p-12 text-muted-foreground space-y-6 leading-relaxed">
            {/* Opening */}
            <p className="text-lg">
              Dear Future Colleagues & Partners,
            </p>

            {/* First Paragraph */}
            <p>
              I came into automation and systems engineering from the other side of the table as a customer success professional watching leads fall through the cracks, follow-ups get missed, and sales teams drown in manual tasks. That experience lit a fire in me. I didn't just want to report the problem; I wanted to build the solution.
            </p>

            {/* Second Paragraph */}
            <p>
              Over the past 3+ years, I've transformed chaotic operations into intelligent, automated revenue machines. I've helped businesses go from "we have a CRM but barely use it" to "our systems now qualify leads, generate content, and close deals while we sleep." The impact of clean data, connected tools, and AI agents is something I am genuinely passionate about.
            </p>

            {/* Third Paragraph */}
            <p>
              What sets me apart isn't just technical know-how, it's my instinct for the human process behind every workflow. Before I build anything, I ask: who is this for? What are they struggling with? What would make their day easier? That empathy-first approach is why my automations don't just work, they get adopted and loved by the teams that use them.
            </p>

            {/* Fourth Paragraph */}
            <p>
              I'm also a firm believer in growing with the tools. AI is reshaping what's possible in business automation every single month, and I stay ahead of those changes intentionally by experimenting with LLMs, testing autonomous agents, and always thinking about how to deliver more value with less manual effort. Curiosity is one of my greatest professional assets.
            </p>

            {/* Fifth Paragraph */}
            <p>
              If we work together, here's what you'll get: systems that actually work for your team, not against them. You'll get clean data, intelligent automations, and a strategic partner who will keep optimizing the stack as your business evolves. I'm committed to not just solving today's problem, but building the technical foundation for tomorrow's growth.
            </p>

            {/* Closing */}
            <p>
              I'm excited about the possibility of building something remarkable with you, where AI and automation become your most powerful team members.
            </p>

            {/* Signature */}
            <div className="pt-8 border-t border-border">
              <p className="mb-2">Let's build something remarkable together.</p>
              <p className="font-semibold text-foreground">Warm regards,</p>
              <p className="text-xl font-bold text-primary mt-4">Lynda Ibekwe</p>
            </div>
          </div>
        </Card>

        {/* Bottom Spacer */}
        <div className="h-24" />
      </div>
    </div>
  );
};

export default Letter;
