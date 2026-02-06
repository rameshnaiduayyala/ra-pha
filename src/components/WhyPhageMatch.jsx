import { motion } from "framer-motion";
import { 
  Heart, 
  ShieldAlert, 
  Utensils, 
  Dumbbell, 
  Brain, 
  Stethoscope, 
  Ambulance,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const featureGroups = [
  {
    title: "Real-Time Health Monitoring",
    benefit: "Stay informed about your body every day, not once a year.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50",
    items: ["Heart rate monitoring", "Blood pressure trends", "SpO2 tracking", "Sleep & recovery", "Activity tracking"],
  },
  {
    title: "AI Disease Prediction",
    benefit: "Know the risk before it becomes a diagnosis.",
    icon: ShieldAlert,
    color: "text-amber-500",
    bg: "bg-amber-50",
    items: ["Diabetes risk monitoring", "Hypertension alerts", "Heart health analysis", "Obesity prediction", "Stress patterns"],
  },
  {
    title: "AI Diet & Nutrition",
    benefit: "Eat smarter with an AI diet coach in your pocket.",
    icon: Utensils,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    items: ["Weight goal plans", "Diabetes-friendly meals", "BP-friendly nutrition", "Calorie tracking", "Food reminders"],
  },
  {
    title: "Smart Workout Engine",
    benefit: "Get fit with a plan that adapts to your body.",
    icon: Dumbbell,
    color: "text-blue-500",
    bg: "bg-blue-50",
    items: ["Home workout schedules", "Fat loss programs", "Muscle building", "Goal tracking", "AI progress monitoring"],
  },
  {
    title: "Mental Wellness Support",
    benefit: "A calm mind builds a healthy life.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-50",
    items: ["Stress & anxiety tracking", "Sleep improvement", "Mood monitoring", "AI support chatbot", "Daily wellness tips"],
  },
  {
    title: "Telemedicine Support",
    benefit: "Medical support without long hospital waits.",
    icon: Stethoscope,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    items: ["Online consultations", "Report sharing", "Expert prescriptions", "Digital health history"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Everything You Need for a <br />
            <span className="text-cyan-600">Healthier Life — In One App</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            RA-PHA combines medical intelligence, lifestyle analytics, and emergency 
            care support into a single powerful platform.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${group.bg} ${group.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <group.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{group.title}</h3>
              <p className="text-sm font-semibold text-cyan-700 mb-6 leading-relaxed italic">
                “{group.benefit}”
              </p>

              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-sm">
                    <CheckCircle2 className={`w-4 h-4 ${group.color} opacity-70`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* ===== SPECIAL SOS CARD ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 mt-8 p-8 md:p-12 rounded-[2.5rem] bg-rose-600 text-white relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <Ambulance className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">SOS Emergency Ambulance Support</h3>
                <p className="text-rose-100 text-lg mb-8 max-w-md">
                  Instant emergency help when every second matters. RA-PHA can help save lives when emergencies strike.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   {["One-tap alert", "Live location", "Ambulance booking", "Contact alerts"].map((text) => (
                     <div key={text} className="flex items-center gap-2 text-sm font-medium bg-white/10 py-2 px-4 rounded-full">
                       <div className="w-1.5 h-1.5 bg-white rounded-full" /> {text}
                     </div>
                   ))}
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-64 h-64 border-8 border-white/20 rounded-full flex items-center justify-center animate-pulse">
                   <div className="w-48 h-48 bg-white text-rose-600 rounded-full flex flex-col items-center justify-center font-black shadow-2xl">
                      <span className="text-5xl">SOS</span>
                      <span className="text-[10px] tracking-widest uppercase">Emergency</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <div className="mt-20 flex flex-col items-center">
          <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-cyan-600 transition-all group">
            See How It Works
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}