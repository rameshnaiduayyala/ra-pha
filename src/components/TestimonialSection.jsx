import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Splitting your 11 testimonials into two groups for the rows
const testimonials = [
  {
    quote:
      "Living in Hyderabad with a high-pressure IT job made it hard to track my health. RA-PHA caught my rising BP levels during a stressful release week. Truly a lifesaver.",
    author: "Kiran Kumar",
    role: "Senior Architect, HITEC City",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    quote:
      "Finally an app that understands Indian diets! The personalized meal plans don't just suggest 'salads'—it actually works around my home-cooked South Indian meals.",
    author: "Sravani Reddy",
    role: "Wellness Blogger, Visakhapatnam",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    quote:
      "The Family Plan is excellent for monitoring my elderly parents back in Vijayawada while I'm working. The emergency SOS integration gives us immense peace of mind.",
    author: "Dr. Anirudh Rao",
    role: "Consultant Cardiologist",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    quote:
      "Managing diabetes while working in the Secretariat was a challenge. The AI's glucose trend predictions helped me adjust my afternoon snacks perfectly.",
    author: "M. Venkat Ramana",
    role: "Govt. Employee, Telangana State",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    quote:
      "I love how the app integrates with my smart watch. It tracks my steps during my morning walks at KBR Park and gives me a weekly summary that actually makes sense.",
    author: "Priyanka Ch.",
    role: "Fitness Enthusiast, Jubilee Hills",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    quote:
      "As a busy homemaker, I often neglect my health. RA-PHA's simple dashboard and hydration reminders keep me on track without being overwhelming.",
    author: "Lakshmi Prasanna",
    role: "Homemaker, Guntur",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    quote:
      "The metabolic data tracking is revolutionary. It showed me exactly how my late-night Biryani cravings were affecting my sleep quality and recovery.",
    author: "Abhishek Varma",
    role: "Product Manager, Financial District",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    quote:
      "After my recovery, I needed a tool that wasn't generic. RA-PHA's ability to share monthly health reports directly with my doctor in Tirupati is a game changer.",
    author: "Suresh Naidu",
    role: "Retired Bank Manager",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    quote:
      "The personalized workout plans are very practical. They fit into my schedule even when I'm traveling between Warangal and Hyderabad for business.",
    author: "Rajesh Goud",
    role: "Real Estate Entrepreneur",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    quote:
      "I've tried many global apps, but RA-PHA feels local. The emergency SOS feature connected to local hospitals gives my family a safety net we never had before.",
    author: "Kavya Madhavan",
    role: "Tech Lead, Kondapur",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    quote:
      "Our whole family is on the Family Plan. We compete on daily step counts—it’s made staying healthy a fun family activity across different cities.",
    author: "Nitin Krishna",
    role: "Student, IIT Hyderabad",
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100",
  },
];
const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6);

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="flex overflow-hidden py-4 group">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="w-[380px] md:w-[450px] shrink-0 whitespace-normal p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
          >
            <div
              className={`size-10 ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-4`}
            >
              <Quote className="w-4 h-4 fill-current" />
            </div>

            <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
              &quot;{item.quote}&quot;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
              <div
                className={`size-9 rounded-full ${item.bg} flex items-center justify-center ${item.color} font-bold text-xs`}
              >
                {item.author[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs leading-tight">
                  {item.author}
                </h4>
                <p className="text-[9px] font-bold text-cyan-600 uppercase tracking-tighter">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function WallOfLove() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          What Users Say About <span className="text-cyan-600">RA-PHA</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Real insights from our early beta participants and healthcare experts.
        </p>
      </div>

      {/* Rows Container */}
      <div className="relative">
        {/* Row 1: Moves Left */}
        <MarqueeRow items={row1} direction="left" speed={50} />

        {/* Row 2: Moves Right */}
        <MarqueeRow items={row2} direction="right" speed={60} />

        {/* Cinematic Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>

      {/* Trust Badge */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-slate-900 font-bold uppercase tracking-widest text-xs">
          Rated 4.9/5 by 12,000+ users across India
        </p>
      </div>
    </section>
  );
}
