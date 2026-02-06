import { motion } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  ChevronRight,
  HeartPulse,
  Watch,
  BrainCircuit,
  BellRing,
} from "lucide-react";
import video1 from "../assets/6973-197914400.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#030712] text-white overflow-hidden flex items-center font-[Inter]">
      {/* ===== FUTURISTIC BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-25 scale-110"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
        </video>
        {/* Cyan/Purple glow to match the AI Assistant vibe */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-15 grid lg:grid-cols-2 gap-12 items-center">
        {/* ===== LEFT: MISSION-DRIVEN CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* TAGLINE BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 w-fit shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <BrainCircuit className="w-4 h-4" />
            Your body talks. RA-PHA listens.
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
            The Future of <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
              Preventive AI
            </span>
            <br />
            Healthcare.
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-xl mb-10">
            Transition from reactive treatment to proactive wellness. RA-PHA
            combines **continuous wearable monitoring** and **predictive AI** to
            deliver on-demand medical support before issues arise[cite: 8, 16,
            17].
          </p>

          {/* DYNAMIC CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 group">
              Join the Waitlist
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all backdrop-blur-md flex items-center justify-center gap-2">
              Explore MVP Features
            </button>
          </div>

          {/* CORE SOLUTION CHIPS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <FeatureChip icon={Watch} text="Wearable Agnostic" />
            <FeatureChip icon={HeartPulse} text="Risk Detection" />
            <FeatureChip icon={BellRing} text="Emergency SOS" />
          </div>
        </motion.div>

        {/* ===== RIGHT: INTERACTIVE ASSISTANT MOCKUP ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Floating UI Elements */}
          <div className="relative bg-gradient-to-b from-slate-900 to-[#030712] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-2xl -z-10 rounded-[3rem]" />

            {/* Phone Mockup Inner */}
            <div className="bg-[#030712] rounded-[2rem] overflow-hidden border border-white/5">
              <div className="h-8 w-full bg-white/5 flex items-center justify-center">
                <div className="w-16 h-4 bg-black rounded-full" />
              </div>

              <div className="p-6 space-y-8">
                {/* AI Interaction */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="size-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-xs">
                      AI
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 max-w-[80%]">
                      I've detected an abnormal heart rate trend over the last 4
                      hours. Would you like to notify your doctor? [cite: 17,
                      18]
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">
                      You
                    </div>
                    <div className="bg-cyan-600 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[80%]">
                      Yes, and trigger an Emergency SOS if it exceeds 110 BPM.
                      [cite: 20]
                    </div>
                  </div>
                </div>

                {/* Live Vitals Mockup */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">
                      Live Diagnostics
                    </span>
                    <span className="text-[10px] text-cyan-400 animate-pulse">
                      ● Recording
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <Activity className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div className="flex-1 h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-xs font-bold">72 BPM</span>
                      <span className="text-[8px] text-slate-500 uppercase">
                        Heart Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST BADGE OVERLAY */}
          <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-xl">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-tighter">
                DPIIT Registered
              </div>
              <div className="text-[10px] text-slate-400">
                Incorporated in India{" "}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureChip({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
      <Icon className="w-4 h-4 text-cyan-400" />
      <span className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">
        {text}
      </span>
    </div>
  );
}
