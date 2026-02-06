import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import chandu from "../assets/team/Chandra-sekhar-Kola.jpeg";
import madhu from "../assets/team/Madhu-Prabhakar-Babu-Gara.jpeg";
import beulah from "../assets/team/Beulah-Munnangi.jpeg";
import ramesh from "../assets/team/Ramesh_Ayyala_2.jpg";
import manasa from "../assets/team/manasa-ghanta1.png";

export default function TeamSection() {
  const members = [
    {
      image: chandu,
      name: "Chandra Sekhar Kola",
      role: "Founder & CEO",
      desc: "Leads RA-PHA’s vision to move healthcare from episodic treatment to continuous.",
      social: "https://www.linkedin.com/in/chandra-sekhar-kola-09579a239/",
    },
    {
      image: madhu,
      name: "Dr. Gara Madhu Prabhakar Babu",
      role: "Medical Co-Founder",
      desc: "Provides clinical oversight for predictive models, telemedicine workflows, and patient safety.",
      social: "https://www.linkedin.com/in/gara-madhu-prabhakar-babu/",
    },
    {
      image: ramesh,
      name: "Ramesh Ayyala",
      role: "Chief Technology Officer",
      desc: "Architects RA-PHA’s core platform, data pipelines, and scalable AI infrastructure.",
      social: "https://www.linkedin.com/in/ramesh-naidu-ayyala/",
    },
    {
      image: beulah,
      name: "Beulah Munnangi",
      role: "Chief Financial Officer",
      desc: "Oversees financial strategy, fundraising, and investor relations to fuel RA-PHA’s growth.",
      social: "https://www.linkedin.com/in/beulah-munnangi/",
    },
    {
      image: manasa,
      name: "Manasa Ghanta",
      role: "Technology & Operations Lead",
      desc: "Ensures reliable execution across engineering, deployment, and operational excellence.",
      social: "https://www.linkedin.com/in/manasa-ghanta/",
    },
  ];

  return (
    <section
      id="team"
      className="relative bg-[#F8FAFC] py-28 px-6 overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20 md:text-center md:mx-auto" // Optional: Centers header text too
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-600 leading-tight mb-6">
            Leadership team
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            RA-PHA is built by a multidisciplinary team combining clinical
            medicine, artificial intelligence, and large-scale platform
            engineering.
          </p>
        </motion.div>

        {/* ===== Centered Grid ===== */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-16">
          {members.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col w-full sm:w-[calc(50%-20px)] lg:w-[calc(30%-20px)] max-w-[320px]"
            >
              {/* Image */}
              <div className="mb-6 group">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full aspect-square object-cover rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {m.name}
              </h3>

              {/* Role */}
              <p className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-3">
                {m.role}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {m.desc}
              </p>

              {/* Social */}
              {m.social && m.social !== "#" && (
                <a
                  href={m.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-600 transition-colors w-fit uppercase tracking-wider"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* ===== Advisory Note ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-28 pt-12 border-t border-slate-200 max-w-6xl mx-auto md:text-center"
        >
          <h4 className="text-lg font-semibold text-slate-900 mb-3">
            Advisory network
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Supported by advisors across clinical medicine, biomedical research,
            artificial intelligence, and healthcare operations in India and
            internationally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
