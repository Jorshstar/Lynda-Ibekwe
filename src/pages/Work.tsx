import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import jobAutomationImg from "@/assets/job automation.png";
import youtubeAutomationImg from "@/assets/youtube automation.png";
import personalAssistantImg from "@/assets/ultimate personal assistant.png";
import onboardingImg from "@/assets/onboarding.png";
import leadGenerationImg from "@/assets/lead generation.png";

const projects = [
  {
    id: 1,
    category: "CRM & Sales",
    title: "HubSpot CRM Pipeline Automation",
    description:
      "A fully automated HubSpot CRM pipeline that moves deals through stages, creates tasks, sends follow-up emails, and alerts sales reps. Everything is triggered by prospect behavior. Built with HubSpot workflows, n8n, and AI email generation.",
    problem: "Sales reps were manually moving deals through pipeline stages, writing individual follow-up emails, and tracking tasks in spreadsheets. This resulted in missed follow-ups, inconsistent data, lost leads, and a CRM that nobody trusted or used consistently.",
    whatIDid: "Architected a fully automated HubSpot pipeline using deal stage-based triggers, integrated n8n for cross-platform orchestration, and connected OpenAI for personalized email generation. Set up automated task creation, rep alerts via Slack, and real-time pipeline reporting dashboards.",
    keyOutcomes: [
      "100% of follow-up emails automated and personalized per prospect",
      "Deal cycle time reduced by 40% through timely, consistent outreach",
      "Sales reps saved 8+ hours per week on manual CRM updates",
      "Pipeline data accuracy improved to 95%+",
      "Lead-to-close conversion rate increased by 28%",
      "Real-time Slack alerts for deal stage changes and at-risk deals"
    ],
    screenshot: jobAutomationImg,
    videoUrl: ""
  },
  {
    id: 2,
    category: "AI Agents",
    title: "AI Ultimate Executive Assistant",
    description:
      "An all-in-one intelligent personal assistant that manages calendars, emails, tasks, reminders, and communications. Handles scheduling, email triage, meeting notes, and proactive task management using n8n and Claude AI.",
    problem: "Professionals waste 10+ hours per week on administrative tasks like email management, calendar coordination, meeting scheduling, note-taking, and task tracking. These repetitive tasks distract from high-value work and create cognitive overhead.",
    whatIDid: "Built a unified AI assistant using n8n that integrates with email, calendar, task managers, and note-taking apps. The system uses Claude AI to intelligently process emails, schedule meetings, generate meeting summaries, track tasks, and send proactive reminders.",
    keyOutcomes: [
      "Reduces administrative overhead by 80% (10+ hours/week saved)",
      "Intelligent email triage and auto-responders",
      "Automated calendar management and meeting scheduling",
      "Real-time meeting notes and action items extraction",
      "Smart task prioritization and deadline tracking",
      "Proactive reminders and follow-up management"
    ],
    screenshot: personalAssistantImg,
    videoUrl: ""
  },
  {
    id: 3,
    category: "Conversational AI",
    title: "WhatsApp AI Sales Agent",
    description:
      "A WhatsApp chatbot powered by LLMs that holds natural conversations with leads, qualifies them based on your business rules, answers FAQs, and automatically creates detailed CRM records for your sales team.",
    problem: "Businesses were receiving hundreds of WhatsApp messages daily but had no system to track them in the CRM. Leads were being lost in chat threads, follow-ups missed, and reps had no visibility into conversation history or lead status.",
    whatIDid: "Built a conversational WhatsApp bot using n8n and the WhatsApp Business API that greets incoming contacts, uses OpenAI to dynamically guide them through a qualification flow, and automatically creates or updates contact records and deals in HubSpot based on intent.",
    keyOutcomes: [
      "100% of WhatsApp leads now captured in CRM automatically",
      "Lead response time reduced from hours to under 60 seconds",
      "Eliminated manual copy-pasting of chat data into the CRM",
      "Sales reps receive instant Slack notifications for hot inbound leads",
      "Bot handles 80% of initial conversations without human intervention",
      "WhatsApp to CRM sync error rate reduced to less than 1%"
    ],
    screenshot: youtubeAutomationImg,
    videoUrl: ""
  },
  {
    id: 4,
    category: "Content Automation",
    title: "AI-Powered Content Engine",
    description:
      "An intelligent automation system that takes a single YouTube video or podcast and autonomously generates SEO-optimized blog posts, email newsletters, and a week's worth of social media content using prompt engineering.",
    problem: "Content creators spend 20+ hours per week manually repurposing their core content for multiple channels. Writing blogs, extracting quotes for X, and drafting newsletters is incredibly tedious and takes away from deep creative work.",
    whatIDid: "Built a comprehensive content automation workflow using n8n that downloads audio transcripts, uses Claude AI with advanced prompt chains to extract key insights, and drafts multi-platform content tailored to each channel's best practices.",
    keyOutcomes: [
      "Reduces content creation time from 20+ hours/week to 3 hours/week",
      "Automatically turns 1 video into 5+ pieces of unique written content",
      "AI-optimized titles, descriptions, and tags for better SEO",
      "Increased publishing frequency across all social channels",
      "Maintains the creator's authentic tone of voice via prompt tuning"
    ],
    screenshot: onboardingImg,
    videoUrl: ""
  },
  {
    id: 5,
    category: "Lead Generation",
    title: "AI Lead Qualification & Nurture System",
    description:
      "An intelligent system that scores inbound leads using AI, routes them to the right CRM pipeline, and triggers personalized nurture sequences based on lead score and behavior. Built with n8n, OpenAI, and GoHighLevel.",
    problem: "Marketing was generating hundreds of inbound leads per week, but the sales team lacked the bandwidth to manually qualify and follow up with every lead. High-value prospects were getting the same generic outreach as cold leads, causing poor conversion rates.",
    whatIDid: "Built an end-to-end AI lead scoring system using n8n that captures form submissions, sends lead data to OpenAI for qualification analysis, assigns a score, routes leads to appropriate CRM pipelines in GoHighLevel, and triggers tailored email/SMS nurture sequences based on lead tier and behavior.",
    keyOutcomes: [
      "Automated qualification of 500+ leads per week with 85% accuracy",
      "High-value leads receive first outreach within 2 minutes of form submission",
      "Sales team focuses only on hot leads, reducing wasted call time by 60%",
      "Lead nurture sequences increased email open rates by 52%",
      "Qualified lead-to-booking conversion increased by 35%",
      "Full CRM integration with real-time lead status updates"
    ],
    screenshot: leadGenerationImg,
    videoUrl: ""
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-3xl font-bold">All Work</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors h-full flex flex-col"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-bold mt-2 mb-3 text-card-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>
              <Link
                to={`/work/${project.id}`}
                className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all mt-auto"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-24" />
      </div>
    </div>
  );
};

export default Work;
