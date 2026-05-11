import { motion } from "framer-motion";
import {
  Workflow, Bot, Globe, Target, Database, MessageSquare,
  FileText, Mail, Repeat, Calendar, Server, Shield, Sparkles, Search, Lock,
} from "lucide-react";

const skills = [
  { icon: Workflow, title: "Workflow Automation Design (n8n / Zapier / Make)", desc: "Designing end-to-end automations that replace manual business processes and connect disparate tools." },
  { icon: Bot, title: "AI Agent Development (LLMs + Tools)", desc: "Building task-specific AI agents that reason, call tools, and take autonomous actions for your business." },
  { icon: Database, title: "CRM Setup & Optimization", desc: "Building and configuring HubSpot, GoHighLevel, and Salesforce to track every lead and customer interaction." },
  { icon: Target, title: "AI-Powered Lead Scoring & Routing", desc: "Automatically scoring, tagging, and assigning leads to the right reps based on intent signals and CRM data." },
  { icon: MessageSquare, title: "AI Chatbots & Conversational CRM", desc: "WhatsApp, website, and Slack bots that capture leads, answer questions intelligently, and update the CRM." },
  { icon: Mail, title: "Email Automation & AI Inbox Management", desc: "Personalized drip sequences, AI-driven auto-replies, inbox triage, and CRM follow-up automations." },
  { icon: Globe, title: "API Integration & Webhooks", desc: "Connecting CRMs, payment gateways, and custom internal tools via APIs for seamless data flow." },
  { icon: FileText, title: "Document Processing & Extraction", desc: "Extracting structured data from PDFs, invoices, and receipts using AI and automatically syncing to your CRM." },
  { icon: Sparkles, title: "Prompt Engineering & Content Repurposing", desc: "Designing robust prompts to turn one piece of content into blogs, emails, and social posts on autopilot." },
  { icon: Calendar, title: "Scheduling & Appointment Automation", desc: "Connecting booking tools to your CRM for automatic reminders, confirmations, and AI-driven rescheduling." },
  { icon: Search, title: "AI-Driven Data Enrichment", desc: "Enriching CRM records with company data, social profiles, and intent signals for sharper targeting." },
  { icon: Repeat, title: "Pipeline & Deal Stage Automation", desc: "Automating deal progression, task creation, and notifications at each CRM pipeline stage." },
  { icon: Server, title: "Data Workflows & Dashboards", desc: "Structuring data, auto-generating KPI reports, and triggering workflows from database events." },
  { icon: Shield, title: "Error Handling & Monitoring", desc: "Building reliable automations with automatic retries, error alerts, and safe data access protocols." },
  { icon: Lock, title: "Security & Access Control", desc: "Managing user roles, API token security, and audit logs for safe and compliant data management." },
];

const Skills = () => {
  return (
    <section id="cv" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Lynda's Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <skill.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-sm font-bold text-card-foreground mb-1">{skill.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
