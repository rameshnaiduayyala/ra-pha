import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    quote: "RA-PHA helped me track my BP and stress levels daily. The AI alerts are extremely useful for catching spikes early.",
    author: "Beta User",
    role: "Early Adopter",
    color: "text-cyan-600",
    bg: "bg-cyan-50"
  },
  {
    quote: "The diet plan is personalized and practical. It’s not generic like other apps—it actually adjusts to my metabolic data.",
    author: "Fitness Enthusiast",
    role: "Daily User",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    quote: "The dashboard is clean and easy to understand. As a clinician, I find it perfect for the future of preventive healthcare.",
    author: "Healthcare Professional",
    role: "Medical Consultant",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative py-24 px-6 bg-slate-50 overflow-hidden font-sans">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-100 to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Trusted Feedback
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Users Say About <span className="text-cyan-600">RA-PHA</span>
          </h2>
          <p className="text-slate-500">
            Real insights from our early beta participants and healthcare experts.
          </p>
        </div>

        {/* ===== TESTIMONIAL GRID ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className={`size-10 ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-6`}>
                <Quote className="w-5 h-5 fill-current" />
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                &quot;{item.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== FOOTER CTA ===== */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 font-medium">
            Join the movement towards proactive health.
          </p>
          <button className="mt-4 text-cyan-600 font-bold hover:underline">
            View Case Studies →
          </button>
        </div>
      </div>
    </section>
  );
}