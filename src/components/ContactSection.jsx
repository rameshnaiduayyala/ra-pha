import { motion } from "framer-motion";
import { Mail, MessageSquare, Building2, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#020617] py-24 px-6 text-white overflow-hidden border-t border-white/5"
    >
      {/* ===== Background Glow & Mesh Watermark ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 70% 10%, rgba(6,182,212,0.15), transparent 70%)",
        }}
      />
      
      {/* Stylized background grid for futuristic feel */}
      <div className="absolute inset-0 opacity-[0.03] -z-0 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Start Your&nbsp;
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Health Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you are a hospital, a corporate partner, or an early adopter, 
            RA-PHA is ready to help you listen to your body.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Quick Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <ContactInfoCard 
              icon={<Mail className="w-5 h-5 text-cyan-400" />}
              title="Email Us"
              value="contact@ra-pha.health"
              sub="Our team responds within 24–48 hours."
            />
            <ContactInfoCard 
              icon={<Building2 className="w-5 h-5 text-blue-400" />}
              title="Head Office"
              value="Hyderabad, India"
              sub="Private Limited Company (India)."
            />
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Seed Ask</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                We are currently seeking ₹70 Lakhs for product development, 
                marketing, and compliance
              </p>
            </div>
          </motion.div>

          {/* ===== FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl"
          >
            <form action="https://formspree.io/f/xdkyozwb" method="POST" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput type="text" name="name" placeholder="Full Name" required />
                <FormInput type="email" name="email" placeholder="Email" required />
              </div>

              <FormInput type="text" name="organization" placeholder="Organization (Optional)" />

              <select
                name="interest"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-900">Choose Your Interest</option>
                <option value="waitlist" className="bg-slate-900">Join User Waitlist</option>
                <option value="corporate" className="bg-slate-900">Corporate Wellness Partner</option>
                <option value="telemedicine" className="bg-slate-900">Telemedicine Partner</option>
                <option value="investment" className="bg-slate-900">Investment Inquiry</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="How can RA-PHA help you?"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Helper Components ---

function ContactInfoCard({ icon, title, value, sub }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-white font-bold text-lg mb-1">{value}</p>
        <p className="text-slate-500 text-xs">{sub}</p>
      </div>
    </div>
  );
}

function FormInput({ ...props }) {
  return (
    <input
      {...props}
      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
    />
  );
}