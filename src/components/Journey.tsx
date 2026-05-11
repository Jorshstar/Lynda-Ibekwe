import { motion } from "framer-motion";

const timeline = [
  {
    label: "Where It Started",
    title: "Operations & CRM Pain",
    desc: "Lynda began her career in customer success and operations, where she witnessed first-hand the chaos of poorly managed CRMs, lost leads, and manual follow-up tasks consuming her team's entire day.",
  },
  {
    label: "The Turning Point",
    title: "Discovering the Power of AI & Automation",
    desc: "After spending weeks manually entering data and chasing leads via spreadsheets, Lynda discovered workflow automation and AI. She realized that intelligent systems could do the heavy lifting, turning chaotic processes into streamlined workflows.",
  },
  {
    label: "Present Day",
    title: "AI Automation & CRM Specialist",
    desc: "Today, Lynda architects intelligent ecosystems for businesses by combining HubSpot, n8n, Claude AI, and conversational agents to build systems that qualify leads, generate content, and run operations without manual effort.",
  },
];

const Journey = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Lynda's Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex mb-12 ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 top-2 z-10" />

              <div className={`ml-12 md:ml-0 md:w-5/12 rounded-xl border border-border bg-card p-6 ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.label}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
