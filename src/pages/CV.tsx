import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CV = () => {
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
            Back
          </Link>
          <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Professional Summary */}
        <section id="summary" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Professional Summary</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Results-driven AI Automation & CRM Specialist with 3+ years of expertise in designing, configuring, and automating systems that drive revenue growth and operational efficiency. Proven track record of transforming chaotic manual processes into clean, intelligent workflows using n8n, Make, HubSpot, and GoHighLevel. Adept at combining LLMs (Claude/OpenAI), API integrations, and conversational agents to eliminate repetitive work, accelerate lead conversion, and deliver measurable business impact across the entire customer journey.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h2>
          <div className="space-y-6">
            {/* CRM Automation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CRM Platforms & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HubSpot CRM & Workflows</Badge>
                  <Badge variant="secondary">GoHighLevel (GHL)</Badge>
                  <Badge variant="secondary">Salesforce CRM</Badge>
                  <Badge variant="secondary">Pipedrive</Badge>
                  <Badge variant="secondary">ActiveCampaign</Badge>
                  <Badge variant="secondary">CRM Pipeline Design</Badge>
                  <Badge variant="secondary">Lead Scoring & Routing</Badge>
                  <Badge variant="secondary">CRM Data Enrichment</Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI Automation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Automation & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">n8n Workflow Automation</Badge>
                  <Badge variant="secondary">Zapier & Make (No-Code)</Badge>
                  <Badge variant="secondary">OpenAI / ChatGPT Integration</Badge>
                  <Badge variant="secondary">AI Chatbots (WhatsApp, Web)</Badge>
                  <Badge variant="secondary">API Integration & Webhooks</Badge>
                  <Badge variant="secondary">Email & SMS Nurture Automation</Badge>
                  <Badge variant="secondary">AI Lead Qualification</Badge>
                  <Badge variant="secondary">Prompt Engineering</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Google Workspace</Badge>
                  <Badge variant="secondary">Airtable & Notion</Badge>
                  <Badge variant="secondary">Slack Integration</Badge>
                  <Badge variant="secondary">Email Marketing (Mailchimp, Klaviyo)</Badge>
                  <Badge variant="secondary">WhatsApp Business API</Badge>
                  <Badge variant="secondary">Calendly & Scheduling Automation</Badge>
                  <Badge variant="secondary">CRM Reporting & Dashboards</Badge>
                  <Badge variant="secondary">Data Hygiene & Deduplication</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Professional Experience</h2>
          <div className="space-y-6">
            {/* Experience 1 */}
            <Card>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle>Senior CRM & AI Automation Specialist</CardTitle>
                  <p className="text-sm text-primary">GrowthStack Agency | Jan 2024 - Present</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Architected and deployed custom AI agents and workflow automations (n8n, Make) for 15+ clients, saving an average of 20 hours per week per business</li>
                  <li>Built AI-powered lead scoring and routing workflows using OpenAI, increasing qualified CRM pipeline by 45%</li>
                  <li>Designed WhatsApp and web chatbots integrated with CRM for 24/7 automatic lead capture and conversational qualification</li>
                  <li>Implemented fully automated content repurposing engines using advanced prompt chaining, turning single videos into multi-platform campaigns</li>
                  <li>Trained client teams on AI adoption, prompt engineering best practices, and CRM automation strategies across 3 continents</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 2 */}
            <Card>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle>CRM Automation Consultant</CardTitle>
                  <p className="text-sm text-primary">Nexus Digital Solutions | May 2022 - Dec 2023</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Developed complex Make.com and Zapier workflows connecting CRMs to payment gateways, booking tools, and support platforms</li>
                  <li>Migrated and restructured data for 8 enterprise clients from fragmented spreadsheets into centralized intelligent systems (HubSpot/Airtable)</li>
                  <li>Reduced manual data entry by 85% through automated document processing and API-based data extraction</li>
                  <li>Created autonomous customer onboarding sequences triggered by deal closures, cutting onboarding time by 60%</li>
                  <li>Built robust data pipelines for automated weekly KPI reporting and C-suite dashboards</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 3 */}
            <Card>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle>CRM & Operations Coordinator</CardTitle>
                  <p className="text-sm text-primary">BrightPath Solutions | Jan 2021 - Apr 2022</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Managed day-to-day CRM operations including contact management, deal tracking, and pipeline hygiene</li>
                  <li>Identified and implemented automation opportunities that saved the sales team 15+ hours per week</li>
                  <li>Set up email marketing automations in ActiveCampaign connected to CRM contact properties</li>
                  <li>Documented CRM processes and created SOP guides for internal sales and customer success teams</li>
                  <li>Coordinated lead handoff between marketing and sales through automated CRM workflow triggers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bottom Spacer */}
        <div className="h-24" />
      </div>
    </div>
  );
};

export default CV;
