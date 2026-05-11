import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audit & Analyze",
    desc: "I don't guess. I dive deep into your current tech stack, operations, and data quality to identify the true bottlenecks. We look for missed follow-ups, dirty data, and manual handoffs.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Before building, I map your ideal workflow visually. We define triggers, action steps, logic rules, and AI touchpoints to ensure the system is bulletproof.",
  },
  {
    num: "03",
    title: "Build & Integrate",
    desc: "This is where the magic happens. I connect your tools with intelligent automations and AI models to create a seamless, fully automated operation.",
  },
  {
    num: "04",
    title: "Test & Optimize",
    desc: "I stress-test the automations across real business scenarios. Once live, I monitor performance, clean up data, and iterate to keep your systems delivering maximum ROI.",
  },
];

const HowIWork = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How I Work</h2>
          <p className="text-muted-foreground">My approach to building successful, scalable automation systems.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="text-3xl font-bold text-primary">{step.num}</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-card-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
