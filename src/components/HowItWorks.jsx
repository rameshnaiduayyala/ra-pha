import { motion } from "framer-motion";
import { 
  UserPlus, 
  Watch, 
  Cpu, 
  BarChart4, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    desc: "Enter your age, weight, medical history, lifestyle, and goals to build your baseline.",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    step: "02",
    title: "Connect Your Data",
    desc: "Sync your smartwatch (Apple, Fitbit, Garmin) or add health vitals manually.",
    icon: Watch,
    color: "bg-cyan-500",
  },
  {
    step: "03",
    title: "AI Analysis",
    desc: "RA-PHA continuously evaluates your health trends using proprietary predictive analytics.",
    icon: Cpu,
    color: "bg-indigo-500",
  },
  {
    step: "04",
    title: "Get Recommendations",
    desc: "Receive custom diet, workout, and lifestyle improvements based on your live data.",
    icon: BarChart4,
    color: "bg-emerald-500",
  },
  {
    step: "05",
    title: "Stay Protected",
    desc: "Monitor progress, receive risk alerts, and consult doctors the moment you need them.",
    icon: ShieldCheck,
    color: "bg-rose-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4"
          >
            Seamless Integration
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How RA-PHA Works
          </h2>
          <p className="text-slate-500 text-lg">
            Simple Steps. Powerful Impact.
          </p>
        </div>

        {/* ===== STEPS GRID ===== */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className={`size-16 rounded-full ${item.color} text-white flex items-center justify-center mb-6 shadow-xl shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <item.icon className="w-7 h-7" />
                  <div className="absolute -top-2 -right-2 size-6 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-black text-slate-900">{item.step}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 px-4">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed px-2">
                  {item.desc}
                </p>

                {/* Mobile/Tablet Arrow */}
                {idx !== steps.length - 1 && (
                  <div className="mt-6 lg:hidden">
                    <ArrowRight className="w-5 h-5 text-slate-300 rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== CLOSING ACTION ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-1 rounded-[2rem] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[1.9rem] p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Your health journey is uniquely yours.
            </h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              Start monitoring today and gain insights that standard checkups simply can't provide. 
              Secure your spot in our early-access phase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-slate-900 text-white font-bold uppercase text-[11px] tracking-widest rounded-full hover:bg-cyan-600 transition-all">
                Join the Waitlist
              </button>
              <button className="px-8 py-4 border border-slate-200 text-slate-900 font-bold uppercase text-[11px] tracking-widest rounded-full hover:bg-slate-50 transition-all">
                Learn About MVP
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}