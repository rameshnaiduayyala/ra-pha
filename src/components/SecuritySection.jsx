import { motion } from "framer-motion";
import { 
  Lock, 
   
  UserCheck, 
  Fingerprint, 
  Watch, 
  ShieldCheck,
  ShieldEllipsis
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Your data is encrypted at rest and in transit using industry-leading AES-256 protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Health Storage",
    desc: "Built on high-security, cloud-based infrastructure with 24/7 monitoring and redundancy.",
  },
  {
    icon: Fingerprint,
    title: "Privacy-First Policy",
    desc: "We follow a strict privacy-first model. We never sell or share your data with third parties.",
  },
  {
    icon: UserCheck,
    title: "User-Controlled Access",
    desc: "You have total control over your health reports. Share them with doctors only when you choose.",
  },
  {
    icon: Watch,
    title: "Safe Device Integration",
    desc: "Seamlessly and safely integrate with wearables using secure, sandboxed API connections.",
  },
  {
    icon: ShieldEllipsis,
    title: "Global Compliance",
    desc: "Built with a focus on Indian healthcare data regulations and international security standards.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="relative py-28 px-6 bg-white overflow-hidden font-sans">
      
      {/* ===== BACKGROUND DECOR ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50 blur-[100px] rounded-full opacity-60" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-600" /> Secure Infrastructure
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Health Data Is Private, <br />
            <span className="text-cyan-600">Protected & Secure</span>
          </h2>
          <p className="text-lg text-slate-600">
            RA-PHA follows strict data security practices to ensure your 
            personal health information remains safe and under your control.
          </p>
        </div>

        {/* ===== SECURITY GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group"
            >
              <div className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== TRUST LINE FOOTER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-10 border-t border-slate-100 text-center"
        >
          <p className="text-xl font-bold text-slate-900 italic mb-8">
            &quot;Your health data belongs to you — RA-PHA protects it like a vault.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-40">
             <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">AES-256 Compliant</span>
             </div>
             <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Secure Cloud Ready</span>
             </div>
             <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Privacy Certified</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}