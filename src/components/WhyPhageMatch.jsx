import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyRAPHA() {
  const reasons = [
    {
      title: "Unified AI-Driven Platform",
      desc: "Consolidates fragmented health data into a single intelligent interface for continuous monitoring",
    },
    {
      title: "Early Risk Detection",
      desc: "Shifts healthcare from reactive treatment to preventive care through predictive analytics",
    },
    {
      title: "Wearable-Agnostic",
      desc: "Seamlessly integrates with existing devices, ensuring you aren't locked into one ecosystem",
    },
    {
      title: "Compliance-First Design",
      desc: "Built with a focus on Indian healthcare regulations and private data security",
    },
    {
      title: "24/7 Intelligent Companion",
      desc: "Provides on-demand medical support and emergency SOS alerts whenever you need them",
    },
    {
      title: "Clinical-Grade Insights",
      desc: "Leverages a medical co-founder's expertise to deliver evidence-based health guidance",
    },
  ];

  return (
    <section id="why-rapha" className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 px-6 overflow-hidden">
      {/* ===== BACKGROUND WATERMARK ===== */}
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 400px at 70% 20%, rgba(6,182,212,0.1), transparent 70%)",
        }}
      />
      
      {/* Abstract Medical Pulse/Grid Watermark */}
      <svg
        viewBox="0 0 800 600"
        className="absolute right-[-10%] bottom-[-10%] w-[90%] max-w-none opacity-[0.03] -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(6,182,212,0.4)" strokeWidth="1" fill="none">
          <path d="M0 300 L150 300 L180 250 L220 350 L250 300 L800 300" />
        </g>
      </svg>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why&nbsp;
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
              RA-PHA
            </span>{" "}
            Stands Alone
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg">
            Our competitive advantage lies in turning raw data into proactive life-saving intelligence
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(6,182,212,0.1)] hover:border-cyan-300 transition-all duration-300 group"
            >
              <div className="mb-4 w-10 h-10 flex items-center justify-center text-white bg-cyan-500 rounded-xl shadow-lg shadow-cyan-200 group-hover:scale-110 transition-transform">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900 leading-snug">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-slate-400 text-sm italic"
        >
          &quot;{reasons[1].desc}&quot; — Focused on the future of Indian HealthTech
        </motion.div>
      </div>
    </section>
  );
}