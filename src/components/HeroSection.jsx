import React from "react";
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

import video from "../assets/bg-video.mp4";

const FeatureChip = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white border border-slate-200 shadow-sm transition-transform hover:scale-105">
    <Icon className="w-3.5 h-3.5 text-cyan-600" />
    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em]">
      {text}
    </span>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#F9FAFB] text-[#0f172a] overflow-hidden flex items-center font-sans">
      {/* ===== VIDEO BACKGROUND & OVERLAYS ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 saturate-50 contrast-[0.9]"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Soft clinical gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* ===== LEFT: MISSION CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-8 text-[#64748b] text-[10px] font-bold uppercase tracking-[0.25em]">
            <span className="p-1 bg-cyan-50 rounded">
              <BrainCircuit className="w-4 h-4 text-cyan-600" />
            </span>
            Your body talks. RA-PHA listens.
          </div>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 text-slate-900">
            RA-PHA
            <br />
            <span className="text-cyan-600 italic font-medium">
              Your AI-Powered Personal Health
            </span>{" "}
            <br />
            Assistant.
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
            Track your health, predict risks early, and receive personalized
            diet, workout, and wellness plans — powered by proprietary Biometric
            Artificial Intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-[#0f172a] text-white font-bold uppercase text-[11px] tracking-widest hover:bg-cyan-700 transition-all rounded-sm flex items-center justify-center gap-2 group">
              Join the Waitlist
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-slate-300 text-[#0f172a] font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:shadow-md transition-all rounded-sm">
              Explore MVP Features
            </button>
          </div>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            <FeatureChip icon={Watch} text="Wearable Agnostic" />
            <FeatureChip icon={HeartPulse} text="Risk Detection" />
            <FeatureChip icon={BellRing} text="Emergency SOS" />
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-2">• DPIIT Registered</span>
            <span className="flex items-center gap-2">• AES-256 Encrypted</span>
            <span className="flex items-center gap-2">• Predictive AI</span>
            <span className="flex items-center gap-2">• Smart Reports</span>
            <span className="flex items-center gap-2">• 24/7 SOS Support</span>
          </div>
        </motion.div>

        {/* ===== RIGHT: INTERACTIVE MOCKUP ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-20 lg:mt-0"
        >
          {/* Decorative glow */}
          <div className="absolute -inset-20 bg-cyan-100/40 blur-[120px] rounded-full -z-10" />

          {/* Phone Mockup */}
          <div className="relative mx-auto max-w-[320px] bg-white border-[8px] border-[#0f172a] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden">
            {/* Top Speaker/Camera Bar */}
            <div className="h-7 w-full bg-[#0f172a] flex items-center justify-center">
              <div className="w-16 h-3.5 bg-slate-900 rounded-full" />
            </div>

            <div className="p-6 space-y-8 bg-white min-h-[520px]">
              {/* AI Interaction Simulation */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="size-8 shrink-0 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-[10px]">
                    AI
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl rounded-tl-none text-[11px] text-slate-600 leading-snug">
                    I've detected an abnormal heart rate trend (112 BPM). Should
                    I alert your emergency contacts?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="size-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-white text-[10px]">
                    YOU
                  </div>
                  <div className="bg-cyan-600 p-3 rounded-2xl rounded-tr-none text-[11px] text-white leading-snug">
                    Yes, please. Also send my current GPS location.
                  </div>
                </div>
              </div>

              {/* Live Vitals Mockup */}
              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                    Live Diagnostics
                  </span>
                  <span className="text-[9px] text-rose-500 flex items-center gap-1 font-bold">
                    <span className="size-1.5 bg-rose-500 rounded-full animate-pulse" />{" "}
                    ACTIVE
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-14 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                    <Activity className="text-cyan-600 w-6 h-6" />
                  </div>
                  <div className="flex-1 h-14 bg-white border border-slate-100 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-sm font-bold text-[#0f172a]">
                      72 BPM
                    </span>
                    <span className="text-[8px] text-slate-400 uppercase font-black tracking-tighter">
                      Heart Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-4 lg:-left-12 bg-white border border-slate-200 p-4 rounded-lg shadow-xl flex items-center gap-4 z-20"
          >
            <div className="p-2 bg-cyan-50 rounded-full">
              <ShieldCheck className="w-8 h-8 text-cyan-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-[#0f172a] uppercase tracking-widest">
                DPIIT Registered
              </div>
              <div className="text-[9px] text-slate-400 font-medium">
                Govt. of India Certified Startup
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
