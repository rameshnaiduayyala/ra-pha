import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Twitter,
  ChevronRight
} from "lucide-react";
import Logo from "../assets/RA-PHA-LOGO1.png";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200 px-6 pt-24 pb-12 font-sans overflow-hidden">
      {/* Subtle editorial background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-slate-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===== Main Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <img src={Logo} alt="RA-PHA" className="h-10 w-auto mb-6 self-start" />

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-8">
              AI-Powered Predictive Healthcare Platform. 
              Your body talks. RA-PHA listens.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <SocialIcon href="#" icon={Instagram} label="Instagram" />
              <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="#" icon={Youtube} label="YouTube" />
              <SocialIcon href="#" icon={Twitter} label="Twitter (X)" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] uppercase font-black text-slate-900 tracking-[0.2em] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#features" text="Features" />
              <FooterLink href="#pricing" text="Pricing" />
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#contact" text="Contact" />
              <FooterLink href="#blog" text="Blog" />
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] uppercase font-black text-slate-900 tracking-[0.2em] mb-8">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/terms" text="Terms & Conditions" />
              <FooterLink href="/disclaimer" text="Disclaimer" />
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] uppercase font-black text-slate-900 tracking-[0.2em] mb-8">
              Head Office
            </h4>
            <div className="space-y-6">
              <div className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                <MapPin className="w-5 h-5 text-cyan-600 shrink-0" />
                <p>
                  RA-PHA Health Technologies Pvt. Ltd.<br />
                  Hyderabad, Telangana, India
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="w-5 h-5 text-cyan-600" />
                <a href="mailto:contact@ra-pha.health" className="hover:text-cyan-600 transition-colors font-medium">
                  contact@ra-pha.health
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="w-5 h-5 text-cyan-600" />
                <a href="tel:+919789419864" className="hover:text-cyan-600 transition-colors font-medium">
                  +91 97894 19864
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Bottom Copyright ===== */}
        <div className="mt-24 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © {currentYear} RA-PHA. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
              DPIIT Registered Startup · Made in India
            </p>
          </div>
        </div>

        {/* ===== Legal Disclaimer Section ===== */}
        <div className="mt-12 pt-8 border-t border-slate-200 max-w-5xl mx-auto text-[10px] text-slate-400 leading-relaxed space-y-4 text-center md:text-left">
          <p>
            <span className="font-bold text-slate-500">Medical Disclaimer:</span> RA-PHA is a digital health support platform and does not provide medical diagnoses, treatment, or clinical decision-making. All insights, alerts, and recommendations are for informational purposes only and are not a substitute for professional medical advice. Always consult qualified medical practitioners regarding health conditions. In case of a medical emergency, contact local emergency services immediately.
          </p>
          <p>
            Personal health data is processed securely and in accordance with applicable data protection and privacy regulations. By using this platform, you acknowledge that you understand RA-PHA does not replace licensed healthcare professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ===== Helper Components ===== */

function FooterLink({ href, text }) {
  return (
    <li className="group">
      <a href={href} className="flex items-center gap-1 hover:text-cyan-600 transition-all">
        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        {text}
      </a>
    </li>
  );
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="size-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-cyan-600 hover:border-cyan-600 transition-all shadow-sm"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}