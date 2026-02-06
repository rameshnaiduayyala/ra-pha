import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Users, 
  Building2, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Send,
  MapPin
} from "lucide-react";

/* ===== Form Input Component ===== */
function FormInput({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
    />
  );
}

/* ===== Contact Info Item ===== */
function ContactInfo({ icon, title, value, sub }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">
          {title}
        </p>
        <p className="text-lg font-bold text-slate-900 leading-tight">{value}</p>
        <p className="text-sm text-slate-500 mt-1">{sub}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="font-sans bg-white">
      {/* =============================================================
          SECTION 1: FINAL CTA CARDS
          ============================================================= */}
      <section id="get-started" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-cyan-50/40 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
              The Future of Preventive Healthcare
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
            Start Your Health Journey <br />
            with <span className="text-cyan-600">RA-PHA Today</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Your health is your biggest asset — protect it with the power of 
            proprietary AI and continuous predictive intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* For Individuals */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-[#0f172a] text-white text-left flex flex-col justify-between"
            >
              <div>
                <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-cyan-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">For Individuals</h3>
                <p className="text-slate-400 text-sm mb-8">Take control of your vitals, diet, and fitness metrics.</p>
              </div>
              <div className="space-y-3">
                <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase text-[11px] tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all">
                  <Download className="w-4 h-4" /> Download RA-PHA App
                </button>
                <button className="w-full py-4 border border-white/10 hover:bg-white/5 text-white font-black uppercase text-[11px] tracking-widest rounded-xl transition-all">
                  Join the Waitlist
                </button>
              </div>
            </motion.div>

            {/* For Organizations */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 text-left flex flex-col justify-between"
            >
              <div>
                <div className="size-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 text-cyan-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">For Organizations</h3>
                <p className="text-slate-500 text-sm mb-8">Solutions for Hospitals, Corporates & Insurance partners.</p>
              </div>
              <button className="w-full py-5 bg-white border border-slate-200 text-slate-900 font-black uppercase text-[11px] tracking-widest rounded-xl flex items-center justify-center gap-2 hover:border-cyan-400 transition-all shadow-sm">
                Request a Demo <ArrowRight className="w-4 h-4 text-cyan-600" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================================================
          SECTION 2: CONTACT & INQUIRY FORM
          ============================================================= */}
      <section id="contact" className="relative bg-[#F8FAFC] py-24 px-6 border-t border-slate-200">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Left Column: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Get in touch</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Whether you are a healthcare provider, enterprise partner, or early 
                  adopter, we’d be glad to explore how RA-PHA can support your needs.
                </p>
              </div>

              <ContactInfo 
                icon={<Mail className="w-5 h-5 text-cyan-600" />} 
                title="Email" 
                value="contact@ra-pha.health" 
                sub="General & Support: support@raphahealth.ai" 
              />

              <ContactInfo 
                icon={<MapPin className="w-5 h-5 text-cyan-600" />} 
                title="Head Office" 
                value="Hyderabad, India" 
                sub="RA-PHA Health Technologies Pvt. Ltd." 
              />

              <div className="pt-8 border-t border-slate-200">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mb-3">
                  Funding Notice
                </p>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  Currently raising ₹70 lakhs to accelerate product development and regulatory validation. Investors are welcome to reach out.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm"
            >
              <form action="https://formspree.io/f/xdkyozwb" method="POST" className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormInput name="name" placeholder="Full name" required />
                  <FormInput name="email" type="email" placeholder="Email address" required />
                </div>
                
                <FormInput name="organization" placeholder="Organization (optional)" />

                <select
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Area of interest</option>
                  <option value="waitlist">Join User Waitlist</option>
                  <option value="corporate">Corporate Wellness</option>
                  <option value="telemedicine">Telemedicine Partnership</option>
                  <option value="investment">Investment Inquiry</option>
                </select>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-cyan-600 text-white font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/20"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}