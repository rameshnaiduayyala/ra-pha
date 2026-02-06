import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Activity, 
  Dumbbell, 
  Users, 
  Briefcase, 
  HeartHandshake 
} from "lucide-react";

const personas = [
  {
    title: "The Preventive Focused",
    desc: "Individuals who want to stay ahead of illness and understand their body's unique baseline.",
    icon: ShieldCheck,
    tag: "Healthy Living"
  },
  {
    title: "Condition Management",
    desc: "Specifically tailored for those managing Diabetes, Hypertension, Thyroid, or Obesity.",
    icon: Activity,
    tag: "Chronic Care"
  },
  {
    title: "Fitness Enthusiasts",
    desc: "Gym members and athletes looking for data-driven diet and recovery optimization.",
    icon: Dumbbell,
    tag: "Performance"
  },
  {
    title: "Senior Citizens",
    desc: "Elderly users who require 24/7 continuous monitoring and rapid emergency SOS support.",
    icon: HeartHandshake,
    tag: "Elderly Care"
  },
  {
    title: "Health-Conscious Families",
    desc: "Managing multiple profiles in one ecosystem to keep the whole family safe and healthy.",
    icon: Users,
    tag: "Family Plan"
  },
  {
    title: "Corporate Employees",
    desc: "Professionals in high-stress environments looking for wellness programs and stress tracking.",
    icon: Briefcase,
    tag: "Workplace Wellness"
  }
];

export default function TargetUsers() {
  return (
    <section id="target-users" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            RA-PHA Is Designed For <span className="text-cyan-600 italic">Everyone</span>
          </motion.h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you’re already healthy, managing a specific condition, or looking to maximize 
            your fitness—RA-PHA adapts to your lifestyle.
          </p>
        </div>

        {/* ===== PERSONA GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:border-cyan-100 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <persona.icon className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  {persona.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-cyan-600 transition-colors">
                {persona.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {persona.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-2 bg-slate-50 border border-slate-200 rounded-full pr-8 pl-4">
             <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`size-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-white`}>
                    U{i}
                  </div>
                ))}
             </div>
             <p className="text-sm font-semibold text-slate-700">
               Join 1,000+ early users already on the waitlist.
             </p>
             <button className="text-cyan-600 font-bold text-sm hover:underline cursor-pointer">
               Claim Your Invite →
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}