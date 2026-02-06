import { motion } from "framer-motion";
import { Linkedin, Globe, ShieldCheck } from "lucide-react";
// Replace these with your actual local asset paths


export default function TeamSection() {
  const members = [
    {
      image: "https://i.pravatar.cc/300",
      name: "Chandra Sekhar Kola",
      role: "Founder & CEO",
      desc: "Leading RA-PHA's vision to shift healthcare from reactive to preventive through AI-driven insights.",
      color: "#22D3EE",
      social: "#",
    },
    {
      image: "https://i.pravatar.cc/300",
      name: "Dr. Gara Madhu Prabhakar Babu",
      role: "Medical Co-Founder",
      desc: "Bringing clinical depth to RA-PHA's predictive models and telemedicine infrastructure.",
      color: "#A78BFA",
      social: "#",
    },
    {
      image: "https://i.pravatar.cc/300",
      name: "Beulah Munnangi",
      role: "Strategy & Operations",
      desc: "Architecting the business model and operational scale-up for national health impact.",
      color: "#38BDF8",
      social: "#",
    },
  ];

  return (
    <section id="team" className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">
      {/* ===== Ambient Background ===== */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle 600px at 50% 50%, rgba(6,182,212,0.15), transparent 80%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Guided by <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Visionary Leadership
            </span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our founding team combines deep healthcare expertise with innovative technology 
            to redefine the personal health experience[cite: 7, 40].
          </p>
        </div>

        {/* Member Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {members.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Decoration */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] -z-10 group-hover:from-cyan-500/20 transition-all duration-500" />
              
              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] h-full flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={m.image} 
                    alt={m.name} 
                    className="size-32 rounded-full object-cover border-2 border-white/10 group-hover:border-cyan-400/50 transition-all"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{m.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {m.desc}
                </p>

                <div className="flex gap-4">
                  <a href={m.social} className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                    <Linkedin className="size-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                    <Globe className="size-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Network Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 p-8 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-white/5 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          <div className="p-4 bg-cyan-500/10 rounded-2xl">
            <ShieldCheck className="size-8 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Advisory Network</h4>
            <p className="text-slate-400 text-sm">
              Supported by domain experts in clinical medicine, AI, and operations across Hyderabad and beyond[cite: 5, 42, 43].
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}