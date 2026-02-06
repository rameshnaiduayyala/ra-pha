import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Ambulance,
  Zap,
} from "lucide-react";

/* =========================
   REFINED SCIENCE ILLUSTRATIONS
========================= */

function DNAPointField() {
  return (
    <svg viewBox="0 0 360 480" className="absolute inset-0 w-full h-full opacity-[0.25]" aria-hidden>
      {Array.from({ length: 140 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={180 + Math.sin(i * 0.35) * 70}
          cy={i * 3.5}
          r="1.2"
          fill="#06b6d4"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.02 }}
        />
      ))}
    </svg>
  );
}

/* =========================
   SOLUTION SECTION
========================= */

export default function SolutionSection() {
  const solutions = [
    {
      icon: Activity,
      title: "Real-time health tracking",
      desc: "Passive, continuous monitoring of vitals like heart rate, SpO2, and sleep patterns.",
    },
    {
      icon: BrainCircuit,
      title: "AI-based disease risk prediction",
      desc: "Early warning systems that flag potential conditions before physical symptoms emerge.",
    },
    {
      icon: Zap,
      title: "Personalized lifestyle insights",
      desc: "Tailored workout, diet, and recovery plans based on your body's specific metabolic data.",
    },
    {
      icon: HeartPulse,
      title: "Mental wellness & stress",
      desc: "HRV-based stress analysis to provide real-time mental health interventions.",
    },
    {
      icon: Stethoscope,
      title: "Telemedicine doctor support",
      desc: "On-demand access to medical experts who can review your live health data instantly.",
    },
    {
      icon: Ambulance,
      title: "SOS emergency ambulance",
      desc: "One-tap emergency escalation with automated location sharing for rapid response.",
    },
  ];

  return (
    <section id="solution" className="relative bg-[#F8FAFC] py-28 px-6 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-slate-50" />
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-cyan-100/50 text-cyan-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4"
          >
           What RA-PHA Provides
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Healthcare Made <span className="text-cyan-600 italic">Predictive</span>, Personalized & Smart
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            RA-PHA is an AI-powered health assistant that continuously monitors your lifestyle and health vitals, 
            analyzes patterns, and gives early warnings before a serious health condition develops.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                {title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}