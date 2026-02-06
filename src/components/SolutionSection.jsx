import { motion } from "framer-motion";
import { 
  Activity, 
  BrainCircuit, 
  Smartphone, 
  ShieldCheck, 
  HeartPulse, 
  Zap 
} from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <Activity className="w-8 h-8 text-cyan-400" />,
      title: "Continuous Health Monitoring",
      desc: "Seamlessly integrates with wearables to track vitals like heart rate, sleep, and activity levels in real-time.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
      title: "AI-Powered Predictive Analytics",
      desc: "Uses advanced algorithms to detect early health risks and shifts healthcare from reactive to preventive.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
      title: "Interactive AI Health Assistant",
      desc: "A 24/7 intelligent companion providing instant health insights, wellness advice, and medical support.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "Telemedicine & Emergency SOS",
      desc: "On-demand access to medical consultations and one-touch emergency support for immediate safety.",
    },
  ];

  return (
    <section id="solution" className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">
      {/* ===== BACKGROUND LAYERS ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 500px at 80% 20%, rgba(6,182,212,0.15), transparent 70%)",
        }}
      />

      {/* Stylized background watermark: Futuristic Health Grid */}
      <div className="absolute inset-0 opacity-[0.03] -z-0 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            The RA-PHA&nbsp;
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Health Companion
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            A unified AI-driven platform delivering continuous monitoring and 
            predictive insights to help you manage your health proactively.
          </p>
        </motion.div>

        {/* Solution cards grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Unified Journey Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap className="w-24 h-24 text-white" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <HeartPulse className="text-cyan-400" />
                Preventive Care Revolution
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                By combining **AI, wearable integrations, and telemedicine**, 
                RA-PHA ensures you are never alone in your healthcare journey. 
                We detect risks early, providing the foresight needed to act before 
                symptoms escalate.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg">
                View All Benefits
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}