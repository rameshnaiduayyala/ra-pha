import { motion } from "framer-motion";

export default function ValidationSection() {
  const pilotMetrics = [
    [
      "95% Pathogen-Phage Matching Accuracy",
      "Validated across 100+ pilot cases (peer review in progress)",
    ],
    [
      "90% Clinician Satisfaction",
      "Early adopter feedback from pilot hospitals",
    ],
    [
      "3–6 Hour Decision Time",
      "Compared to 24+ hour manual workflows",
    ],
  ];

  const compliance = [
    [
      "DISHA Compliance Framework",
      "HIPAA-equivalent standards for patient data security and access",
    ],
    [
      "IRB/Ethics Approvals",
      "Underway at pilot hospital sites with strong data governance in place",
    ],
    [
      "Audit Trail & Role-Based Access",
      "Meets NCDC and ICMR digital audit requirements",
    ],
  ];

  return (
    <section
      id="validation"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24 px-6 border-t border-slate-200 overflow-hidden"
    >
      {/* ===== BACKGROUND: Cyan glow + helix watermark ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 450px at 70% 20%, rgba(6,182,212,0.15), transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 800 600"
        className="absolute left-[-10%] bottom-[-10%] w-[100%] max-w-none opacity-[0.05] -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none">
          <path d="M100 100 Q200 300 100 500 T100 900" />
          <path d="M700 100 Q600 300 700 500 T700 900" />
          <path d="M100 100 C300 250 500 250 700 100" />
          <path d="M100 500 C300 350 500 350 700 500" />
        </g>
      </svg>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight"
        >
          Validation&nbsp;
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            In Progress
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600 mb-14 max-w-2xl leading-relaxed"
        >
          Active clinical collaboration with institutional partners. Published
          validation pipeline demonstrating accuracy, compliance, and scalability.
        </motion.p>

        {/* ===== METRICS GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Left column — Pilot Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-slate-900">
              Pilot Metrics
            </h3>
            <div className="space-y-5">
              {pilotMetrics.map(([title, desc], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/70 backdrop-blur-sm border border-cyan-200/60 rounded-xl shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
                >
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-slate-900">
              Security & Compliance
            </h3>
            <div className="space-y-5">
              {compliance.map(([title, desc], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/70 backdrop-blur-sm border border-cyan-200/60 rounded-xl shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
                >
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== FOOTNOTE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white border-l-4 border-cyan-500/80 p-6 rounded-xl shadow-sm"
        >
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Scientific Validation:</strong>{" "}
            Partnerships with research institutions for phage library validation.
            Preparing manuscripts on outcomes, algorithm accuracy, and workflow
            integration for peer-reviewed publication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
