import { motion } from "framer-motion";
import { Linkedin, Globe, ShieldCheck } from "lucide-react";
import chandu from "../assets/team/Chandra-sekhar-Kola.jpeg";
import madhu from "../assets/team/Madhu-Prabhakar-Babu-Gara.jpeg";
import ramesh from "../assets/team/Ramesh_Ayyala_2.jpg";
import manasa from "../assets/team/manasa-ghanta1.png";

// Replace these with your actual local asset paths

export default function TeamSection() {
  const members = [
    {
      image: chandu,
      name: "Chandra Sekhar Kola",
      role: "Founder & CEO",
      desc: "Leading RA-PHA's vision to shift healthcare from reactive to preventive through AI-driven insights.",
      color: "#22D3EE",
      social: "#",
    },
    {
      image: madhu,
      name: "Dr. Gara Madhu Prabhakar Babu",
      role: "Medical Co-Founder",
      desc: "Bringing clinical depth to RA-PHA's predictive models and telemedicine infrastructure.",
      color: "#A78BFA",
      social: "#",
    },
    {
      image: ramesh,
      name: "Ramesh Ayyala",
      role: "Chief Technology Officer (CTO)",
      desc: "Leading the technical architecture and development of RA-PHA's cutting-edge platform.",
      color: "#F59E0B",
      social: "https://www.linkedin.com/in/ramesh-naidu-ayyala/",
    },
    {
      image: manasa,
      name: "Manasa Ghanta",
      role: "Technology & Operations Lead",
      desc: "Driving RA-PHA's technology development and operational excellence to ensure seamless user experiences.",
      color: "#38BDF8",
      social: "#",
    },
  ];

  return (
    <section
      id="team"
      className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden"
    >
      {/* ===== Ambient Background ===== */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% 50%, rgba(6,182,212,0.15), transparent 80%)",
        }}
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
            Our founding team combines deep healthcare expertise with innovative
            technology to redefine the personal health experience
          </p>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {members.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] -z-10 group-hover:from-cyan-500/20 transition-all duration-500" />

              {/* Card */}
              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-32 h-32 rounded-full object-cover border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>

                {/* Role */}
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                  {m.role}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {m.desc}
                </p>

                {/* Social */}
                <div className="flex gap-4">
                  <a
                    href={m.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} LinkedIn profile`}
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
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
              Supported by domain experts in clinical medicine, AI, and
              operations across Hyderabad and beyond
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
