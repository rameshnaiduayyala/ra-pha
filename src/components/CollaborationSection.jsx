import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  Watch, 
  ChevronRight, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";

export default function PartnershipSection() {
  const partners = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: "Corporate Wellness Partners",
      desc: "Implementing scalable AI health dashboards for employee well-being and productivity tracking.",
      list: [
        "Corporate wellness dashboards",
        "Subscription-based access",
        "Data-driven wellness insights"
      ],
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-cyan-500" />,
      title: "Clinical & Telemedicine Partners",
      desc: "Expanding our physician network to provide seamless 24/7 on-demand medical support and consultations.",
      list: [
        "Telemedicine commissions",
        "Real-time patient monitoring",
        "Specialist referral network"
      ],
    },
    {
      icon: <Watch className="w-8 h-8 text-indigo-500" />,
      title: "Insurance & Wearable Partners",
      desc: "Integrating device data to offer predictive risk profiling for insurance providers and health systems.",
      list: [
        "Wearable-agnostic sync",
        "Predictive risk analytics",
        "API-driven integrations"
      ],
    },
  ];

  return (
    <section id="partners" className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 px-6 border-t border-slate-200 overflow-hidden">
      {/* ===== BACKGROUND: Modern Mesh Gradient ===== */}
      <div className="absolute inset-0 -z-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(circle 480px at 80% 20%, rgba(6,182,212,0.15), transparent 70%)" }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
            Strategic Partnerships for <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
              Accessible Healthcare
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            RA-PHA is scaling its **MVP validation** to 10K+ users over the next 12 months. 
            We are inviting corporate leaders, medical practitioners, and insurance innovators to join our ecosystem.
          </p>
        </motion.div>

        {/* Partner Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map(({ icon, title, desc, list }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500 group"
            >
              <div className="p-4 bg-slate-50 w-fit rounded-2xl mb-6 group-hover:bg-cyan-50 transition-colors">
                {icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900 leading-tight">
                {title}
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">{desc}</p>
              <ul className="space-y-3 mb-8">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-cyan-500 transition-colors mt-auto">
                Explore Partnership <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Insight Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-900 font-bold">12-Month Growth Roadmap</p>
              <p className="text-xs text-slate-500">MVP (0-3 mo) → Beta Launch (4-6 mo) → Scale (7-12 mo)</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all">
            Join the Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}