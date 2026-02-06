import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  ShieldCheck, 
  ArrowUpRight,
  TrendingDown,
  Users2,
  LineChart
} from "lucide-react";

const b2bPartners = [
  {
    category: "For Hospitals",
    icon: Stethoscope,
    desc: "Extend your care beyond the clinic with clinical-grade remote monitoring.",
    features: [
      "Remote patient monitoring dashboard",
      "AI-based risk detection for patients",
      "Digital health reports and analytics",
      "Automated vitals tracking alerts"
    ]
  },
  {
    category: "For Corporates",
    icon: Building2,
    desc: "Improve employee retention and productivity through data-driven wellness.",
    features: [
      "Employee wellness programs",
      "Health risk assessment dashboards",
      "Fitness & lifestyle improvement tracking",
      "Reduced medical insurance claims"
    ]
  },
  {
    category: "For Insurance Providers",
    icon: ShieldCheck,
    desc: "Leverage AI to assess risk and reward healthy behaviors.",
    features: [
      "Risk-based wellness programs",
      "AI health scoring insights",
      "Preventive healthcare policy benefits",
      "Longitudinal patient data trends"
    ]
  }
];

export default function B2BSection() {
  return (
    <section id="b2b" className="relative py-28 px-6 bg-[#F8FAFC] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4"
          >
            <div className="w-6 h-px bg-cyan-600" /> Enterprise Solutions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            RA-PHA for Hospitals, Corporates & Insurance
          </h2>
          <p className="text-lg text-slate-600">
            A powerful health analytics ecosystem designed to optimize health outcomes, 
            reduce costs, and drive data-backed decisions for organizations.
          </p>
        </div>

        {/* ===== B2B GRID ===== */}
        <div className="grid lg:grid-cols-3 gap-8">
          {b2bPartners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group"
            >
              <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-cyan-600 transition-colors">
                <partner.icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{partner.category}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {partner.desc}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {partner.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <div className="size-1.5 bg-cyan-500 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center justify-center gap-2 w-full py-4 border border-slate-200 rounded-full text-[11px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ===== SUMMARY METRICS ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white border border-slate-200 rounded-3xl"
        >
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
             <div className="p-3 bg-cyan-50 rounded-xl">
                <Users2 className="w-6 h-6 text-cyan-600" />
             </div>
             <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Population Health</p>
                <p className="text-sm font-bold text-slate-900">Real-time Group Analytics</p>
             </div>
          </div>
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
             <div className="p-3 bg-rose-50 rounded-xl">
                <TrendingDown className="w-6 h-6 text-rose-600" />
             </div>
             <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Claim Reduction</p>
                <p className="text-sm font-bold text-slate-900">Preventive Cost-Saving</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-3 bg-indigo-50 rounded-xl">
                <LineChart className="w-6 h-6 text-indigo-600" />
             </div>
             <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Risk Stratification</p>
                <p className="text-sm font-bold text-slate-900">AI-Powered Forecasting</p>
             </div>
          </div>
        </motion.div>

        {/* ===== FINAL CTA ===== */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-cyan-600 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 transition-all transform hover:scale-105">
            Partner With RA-PHA
          </button>
        </div>
      </div>
    </section>
  );
}