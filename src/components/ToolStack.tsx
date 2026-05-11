import { motion } from "framer-motion";

const tools = [
  { name: "HubSpot", icon: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" },
  { name: "GoHighLevel", icon: "https://app.gohighlevel.com/favicon.ico" },
  { name: "Salesforce", icon: "https://www.salesforce.com/favicon.ico" },
  { name: "n8n", icon: "https://n8n.io/favicon.ico" },
  { name: "Zapier", icon: "https://cdn.zapier.com/zapier/images/favicon.ico" },
  { name: "Make", icon: "https://images.ctfassets.net/un655fb6h1bs/1PaOvV5s62aqciWyIi6iky/4bdfcebbe43c09cf36c9d tried.png" },
  { name: "Claude AI", icon: "https://claude.ai/favicon.ico" },
  { name: "OpenAI", icon: "https://openai.com/favicon.ico" },
  { name: "Cursor", icon: "https://www.cursor.com/favicon.ico" },
  { name: "Python", icon: "https://www.python.org/favicon.ico" },
  { name: "Airtable", icon: "https://airtable.com/favicon.ico" },
  { name: "Supabase", icon: "https://supabase.com/favicon/favicon.ico" },
  { name: "Slack", icon: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png" },
];

const ToolStack = () => {
  const doubled = [...tools, ...tools];

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Tool Stack</h2>
          <p className="text-muted-foreground">The CRM platforms and automation tools I use to build intelligent, revenue-driving systems</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee w-max">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 mx-6 min-w-[80px]"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center p-2">
                <img
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
