import { motion } from "framer-motion";
import { 
  Cpu, 
  LineChart, 
  Database, 
  Settings, 
  CloudFog, 
  SmartphoneNfc,
  Info,
  Layers
} from "lucide-react";

const techHighlights = [
  {
    icon: Cpu,
    title: "ML Risk Prediction Engine",
    desc: "Machine learning algorithms that analyze large-scale health patterns and generate meaningful predictions.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Advanced forecasting models designed to detect markers for lifestyle and chronic disorders early.",
  },
  {
    icon: Settings,
    title: "Smart Recommendation System",
    desc: "A logic-driven engine providing personalized, real-time diet and workout adjustments.",
  },
  {
    icon: Database,
    title: "Health Dashboard Trends",
    desc: "Comprehensive health data visualization with trend graphs for long-term physiological tracking.",
  },
  {
    icon: CloudFog,
    title: "Secure Cloud Storage",
    desc: "Encrypted, cloud-based storage ensuring your health reports are secure and accessible anywhere.",
  },
  {
    icon: SmartphoneNfc,
    title: "IoT & Wearable Support",
    desc: "Seamless wearable integration (IoT-ready) supporting Apple Health, Google Fit, and smartwatches.",
  },
];

export default function TechSection() {
  return (
    <section id="technology" className="relative py-28 px-6 bg-white overflow-hidden font-sans">
      
      {/* ===== CLINICAL BACKGROUND DECOR ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft cyan gradient at top right */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-50/50 blur-[120px] rounded-full opacity-60" />
        
        {/* Ultra-light grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`, 
            backgroundSize: '80px 80px' 
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-4"
          >
            <Layers className="w-3.5 h-3.5" /> Technical Infrastructure
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powered by Advanced AI & <br />
            <span className="text-cyan-600">Predictive Healthcare Models</span>
          </h2>
          <p className="text-lg text-slate-600">
            RA-PHA is built using machine learning algorithms that analyze large-scale 
            health patterns to generate proactive insights.
          </p>
        </div>

        {/* ===== TECH HIGHLIGHTS GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techHighlights.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-cyan-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                <tech.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {tech.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== TRUST STATEMENT ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-4xl w-full">
            <div className="size-12 shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <Info className="w-6 h-6 text-cyan-600" />
            </div>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Clinical Trust Statement
              </span>
              <p className="text-slate-700 font-medium">
                RA-PHA uses AI to assist, guide, and support healthcare decisions — <span className="text-cyan-600 font-bold">not replace professional medical consultation from doctors.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}