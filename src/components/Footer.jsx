import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import Logo from "../assets/RA-PHA-LOGO1.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-400 py-16 px-6 border-t border-slate-800 overflow-hidden">
      {/* === Background Ambient Glow === */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% -100px, rgba(6,182,212,0.12), transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand & Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-1"
        >
          <div className="flex items-center space-x-2 mb-6">
            <img src={Logo} alt="RA-PHA" className="h-10" />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your body talks. RA-PHA listens.  India’s AI-powered personal healthcare 
            assistant shifting healthcare from reactive to preventive
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <ExternalLink className="size-5" />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-xs">
            Platform
          </h4>
          <ul className="text-sm space-y-4">
            <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing Plans</a></li>
            <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-xs">
            Support
          </h4>
          <ul className="text-sm space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-cyan-500" />
              <a href="mailto:contact@ra-pha.health" className="hover:text-cyan-400 transition-colors">
                contact@ra-pha.health
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-cyan-500" />
              <a href="tel:+919553885666" className="hover:text-cyan-400 transition-colors">
                +91 79894 19864
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Head Office Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-xs">
            Head Office
          </h4>
          <div className="flex gap-3 text-sm leading-relaxed text-slate-400">
            <MapPin className="size-5 text-cyan-500 shrink-0" />
            <p>
              RA-PHA Private Limited <br />
              Hyderabad, Telangana<br />
              India 
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom / Legal */}
      <div className="relative z-10 border-t border-slate-800/50 mt-16 pt-8 text-center text-xs text-slate-500">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
          <a href="#" className="hover:text-slate-300">Disclaimer</a> 
        </div>
        <p>
          © 2026 <span className="text-cyan-400">RA-PHA</span>
          A DPIIT Registered HealthTech Startup. 
        </p>
        <p className="mt-2 text-slate-600">
          Built for Global Digital Health Excellence · Hyderabad, India
        </p>
      </div>
    </footer>
  );
}