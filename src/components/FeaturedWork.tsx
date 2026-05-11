import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    category: "CRM & Sales",
    title: "HubSpot CRM Pipeline Automation",
    description:
      "A fully automated HubSpot CRM pipeline that moves deals through stages, creates tasks, sends follow-up emails, and alerts sales reps. Everything is triggered by prospect behavior. Built with HubSpot workflows, n8n, and AI email generation.",
  },
  {
    id: 2,
    category: "AI Agents",
    title: "AI Ultimate Executive Assistant",
    description:
      "An all-in-one intelligent personal assistant that manages calendars, emails, tasks, reminders, and communications. Handles scheduling, email triage, meeting notes, and proactive task management using n8n and Claude AI.",
  },
  {
    id: 3,
    category: "Conversational AI",
    title: "WhatsApp AI Sales Agent",
    description:
      "A WhatsApp chatbot powered by LLMs that holds natural conversations with leads, qualifies them based on your business rules, answers FAQs, and automatically creates detailed CRM records for your sales team.",
  },
  {
    id: 4,
    category: "Content Automation",
    title: "AI-Powered Content Engine",
    description:
      "An intelligent automation system that takes a single YouTube video or podcast and autonomously generates SEO-optimized blog posts, email newsletters, and a week's worth of social media content using prompt engineering.",
  },
  {
    id: 5,
    category: "Lead Generation",
    title: "AI Lead Qualification & Nurture System",
    description:
      "An intelligent system that scores inbound leads using AI, routes them to the right CRM pipeline, and triggers personalized nurture sequences based on lead score and behavior. Built with n8n, OpenAI, and GoHighLevel.",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
          <p className="text-muted-foreground">Real world problems solved with intelligent automation.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-bold mt-2 mb-3 text-card-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <Link
                to={`/work/${project.id}`}
                className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
