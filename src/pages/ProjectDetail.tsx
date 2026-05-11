import { ArrowLeft, Upload } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import jobAutomationImg from "@/assets/job automation.png";
import youtubeAutomationImg from "@/assets/youtube automation.png";
import personalAssistantImg from "@/assets/ultimate personal assistant.png";
import onboardingImg from "@/assets/onboarding.png";
import leadGenerationImg from "@/assets/lead generation.png";

const projectsData = [
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

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id || "0"));
  const [screenshot, setScreenshot] = useState<string | null>(project?.screenshot || null);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/work" className="text-primary hover:underline">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setScreenshot(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Work
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-6">{project.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* The Problem */}
        <section className="mb-8">
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-xl">The Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">{project.problem}</p>
            </CardContent>
          </Card>
        </section>

        {/* What I Did */}
        <section className="mb-8">
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-xl">What I Did</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">{project.whatIDid}</p>
            </CardContent>
          </Card>
        </section>

        {/* Screenshot Section */}
        <section className="mb-8">
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <CardTitle className="text-primary text-xl">Screenshot</CardTitle>
            </CardHeader>
            <CardContent>
              {screenshot ? (
                <div className="space-y-4">
                  <img
                    src={screenshot}
                    alt="Project screenshot"
                    className="w-full rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow"
                  />
                  <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer font-medium">
                    <Upload className="w-4 h-4" />
                    Change Screenshot
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleScreenshotUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <Upload className="w-12 h-12 text-muted-foreground mb-3" />
                  <span className="text-muted-foreground font-medium">Upload Screenshot</span>
                  <span className="text-sm text-muted-foreground/70 mt-1">Click to select or drag and drop</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotUpload}
                    className="hidden"
                  />
                </label>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Key Outcomes */}
        <section className="mb-8">
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <CardTitle className="text-primary text-xl">Key Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {project.keyOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <p className="text-muted-foreground leading-relaxed flex items-start gap-3">
                      <span className="text-primary font-bold text-lg mt-0">✓</span>
                      <span className="text-sm">{outcome}</span>
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Watch Demo */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-primary text-xl">Watch Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-muted flex items-center justify-center">
                <p className="text-lg font-semibold text-muted-foreground">Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bottom Spacer */}
        <div className="h-24" />
      </div>
    </div>
  );
};

export default ProjectDetail;
