import { motion } from "framer-motion";
import { AlertCircle, Clock, Smartphone, Ban } from "lucide-react";

export default function ProblemSection() {
  // Data aligned with the Problem Statement Section 
  const painPoints = [
    {
      title: "Delayed Diagnosis",
      desc: "Chronic diseases often go undetected until they require reactive, high-cost treatment.",
      icon: Clock,
      ref: "",
    },
    {
      title: "Lack of Continuous Monitoring",
      desc: "Healthcare is currently episodic; there is no 24/7 oversight of vital health trends.",
      icon: AlertCircle,
      ref: "[cite: 11]",
    },
    {
      title: "Fragmented Health Ecosystem",
      desc: "Data is trapped in silos across disconnected apps and wearable devices.",
      icon: Ban,
      ref: "",
    },
    {
      title: "Inaccessible Consultations",
      desc: "Limited access to affordable, on-demand medical expertise when you need it most.",
      icon: Smartphone,
      ref: "",
    },
  ];

  // Metrics aligned with Roadmap and Market Opportunity [cite: 21, 36, 47]
  const marketStats = [
    { num: "$500B+", label: "Digital Health Market (2027)" },
    { num: "3 Mo", label: "MVP Development Timeline" },
    { num: "0-299", label: "Monthly Subscription (INR)" },
    { num: "10K+", label: "Target Users (Year 1)" },
  ];

  return (
    <section id="problem" className="relative bg-[#F8FAFC] py-24 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE — Pain Points [cite: 56] */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Why Current Healthcare <br />
              <span className="text-blue-600">Fails You.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              The modern world is reactive. We wait for symptoms instead of preventing them. 
              RA-PHA is built to bridge the gap between wellness and medical intervention
            </p>

            <div className="grid gap-6">
              {painPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <point.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{point.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE — Market & Vision Metrics [cite: 25, 47] */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-xl relative overflow-hidden">
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  Market Scale & Potential [cite: 21]
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Building India&apos;s Next HealthTech Giant 
                </h3>

                <div className="grid grid-cols-2 gap-8">
                  {marketStats.map((stat, idx) => (
                    <div key={idx} className="border-l-2 border-blue-100 pl-6">
                      <div className="text-3xl font-black text-slate-900">{stat.num}</div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white">
                  <p className="text-sm font-medium opacity-80 mb-4 italic">
                    &quot;RA-PHA delivers continuous health monitoring, predictive insights, and on-demand medical support.&quot; [cite: 8]
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">CS</div>
                    <div>
                      <div className="text-sm font-bold">Chandra Sekhar Kola</div>
                      <div className="text-[10px] opacity-60 uppercase">Founder & CEO </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}