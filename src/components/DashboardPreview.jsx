import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Apple, 
  Dumbbell, 
  Brain, 
  FileDown,
  CheckCircle2
} from "lucide-react";

const dashboardFeatures = [
  { icon: BarChart3, text: "Daily health score & overview" },
  { icon: TrendingUp, text: "Weekly & monthly health trends" },
  { icon: AlertTriangle, text: "Risk level & anomaly alerts" },
  { icon: Apple, text: "Diet and calorie tracker" },
  { icon: Dumbbell, text: "Fitness performance charts" },
  { icon: Brain, text: "Mental wellness & stress score" },
  { icon: FileDown, text: "Downloadable clinical reports" },
];

export default function DashboardPreview() {
  return (
    <section id="dashboard-preview" className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ===== LEFT: CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-cyan-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4">
              Intelligence at a Glance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your Health Dashboard – <br />
              <span className="text-cyan-600">Simple, Smart & Powerful</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Visualize your entire health journey with easy-to-read insights. 
              Our interface transforms complex biometric data into actionable daily scores.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {dashboardFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="size-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-4 bg-[#0f172a] text-white font-bold uppercase text-[11px] tracking-widest rounded-sm flex items-center gap-3 hover:bg-cyan-600 transition-all group">
              View Detailed Sample Report
              <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* ===== RIGHT: DASHBOARD MOCKUP ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Dashboard UI Mockup */}
            <div className="relative bg-white border-[6px] border-slate-200 rounded-[2.5rem] shadow-2xl p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Health Overview</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Feb 2026</p>
                </div>
                <div className="size-10 rounded-full bg-slate-100 border border-slate-200" />
              </div>

              {/* Daily Score Card */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 text-white mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Daily Health Score</p>
                <div className="text-4xl font-black mb-2">84 / 100</div>
                <div className="text-[10px] bg-white/20 inline-block px-2 py-1 rounded-full backdrop-blur-sm">
                  +12% vs last week
                </div>
              </div>

              {/* Mini Grid Charts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2 text-rose-500">
                      <HeartPulse className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase">Vitals</span>
                   </div>
                   <div className="text-lg font-black text-slate-900">72 BPM</div>
                   <div className="w-full h-1 bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="w-3/4 h-full bg-rose-500" />
                   </div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2 text-emerald-500">
                      <Apple className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase">Diet</span>
                   </div>
                   <div className="text-lg font-black text-slate-900">1,840 kcal</div>
                   <div className="w-full h-1 bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="w-1/2 h-full bg-emerald-500" />
                   </div>
                </div>
              </div>

              {/* Trend Chart Mockup */}
              <div className="mt-6 p-4 border border-slate-100 rounded-2xl">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Risk Level History</div>
                <div className="flex items-end justify-between h-20 gap-1">
                   {[40, 70, 45, 90, 65, 55, 80].map((h, i) => (
                     <div key={i} className={`w-full rounded-t-sm transition-all duration-1000 ${i === 3 ? 'bg-rose-400' : 'bg-cyan-400'}`} style={{ height: `${h}%` }} />
                   ))}
                </div>
              </div>
            </div>

            {/* Floating Annotation */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-emerald-100 flex items-center justify-center">
                   <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-900 uppercase">System Status</p>
                  <p className="text-[9px] text-slate-500">Data syncing 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Dummy Icon for vital chart
function HeartPulse(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.96 0"/><path d="m12 13 2.96-2.96a2.17 2.17 0 0 0 0-3.08v0a2.17 2.17 0 0 0-3.08 0"/></svg>
  );
}