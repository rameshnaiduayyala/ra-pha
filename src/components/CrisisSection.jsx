import { motion } from "framer-motion";
import { 
  History,      // For "Healthcare shouldn't start after..."
  Activity,     // For Real-time monitoring
  Stethoscope,  // For Generic advice vs personalization
  Microscope,   // For Chronic diseases growing silently
  Timer,        // For Delayed emergency support
  ShieldAlert   // For "Why Fails You"
} from "lucide-react";
import CountUp from "./CountUp";

export default function ProblemSection() {
  const painPoints = [
    {
      title: "Reactive, Not Proactive",
      desc: "Traditional checkups happen only when symptoms appear, missing the window for early prevention.",
      icon: History,
    },
    {
      title: "The Monitoring Gap",
      desc: "No real-time visibility into your heart, BP, sleep, or stress levels between doctor visits.",
      icon: Activity,
    },
    {
      title: "Generic 'One-Size' Advice",
      desc: "Standard diet and fitness plans fail because they aren't calibrated to your unique genetic and metabolic markers.",
      icon: Stethoscope,
    },
    {
      title: "Silent Health Threats",
      desc: "Chronic risks like Diabetes and Hypertension grow silently without continuous data to flag them.",
      icon: Microscope,
    },
    {
      title: "Emergency Response Lag",
      desc: "In critical moments, the time taken to detect an event and alert help is often the difference between life and death.",
      icon: Timer,
    },
  ];

  const marketStats = [
    { value: 500, prefix: "$", suffix: "B+", label: "Digital Health Market (2027)" },
    { value: 3, suffix: " Mo", label: "MVP Development Timeline" },
    { value: 299, prefix: "₹0-", label: "Monthly Subscription (INR)" },
    { value: 10000, suffix: "+", label: "Target Users (Year 1)" },
  ];

  return (
    <section id="problem" className="relative bg-[#F8FAFC] py-24 px-6 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT — The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldAlert className="w-3 h-3" /> The Status Quo
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
              Healthcare Shouldn’t Start <br />
              <span className="text-cyan-600">After You Fall Sick.</span>
            </h2>

            <p className="text-lg text-slate-600 mb-12 max-w-lg">
              Most people detect diseases late because monitoring is episodic, 
              generic, and reactive. RA-PHA turns the tide with continuous intelligence.
            </p>

            <div className="space-y-4">
              {painPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                    <point.icon className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">{point.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bold Closing Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 pt-8 border-t border-slate-200"
            >
              <p className="text-xl font-semibold text-slate-900 italic">
                "Your health deserves <span className="text-cyan-600">prevention</span>, not just reaction."
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Market Context (The Platform vision) */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
            >
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Building India’s Next-Gen Health Ecosystem</h3>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {marketStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="text-3xl font-black text-cyan-600 flex items-baseline">
                        {stat.prefix && <span className="text-xl mr-1 font-bold">{stat.prefix}</span>}
                        <CountUp from={0} to={stat.value} duration={2} />
                        {stat.suffix && <span className="text-xl ml-1 font-bold">{stat.suffix}</span>}
                      </div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-2 font-bold leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-slate-300 italic mb-6">
                    “RA-PHA isn't just an app; it's a 24/7 digital twin that monitors, 
                    predicts, and intervenes before a crisis happens.”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-xs">CK</div>
                    <div>
                      <div className="text-sm font-bold">Chandra Sekhar Kola</div>
                      <div className="text-[10px] text-cyan-600 uppercase font-black tracking-widest">Founder & CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}