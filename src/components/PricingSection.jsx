import { motion } from "framer-motion";
import { Check, Zap, Users, Building2, ShieldCheck } from "lucide-react";

const plans = [
  {
    name: "basic plan",
    price: "₹0",
    originalPrice: "₹99",
    period: "/month",
    tagline: "Best for basic tracking.",
    features: [
      "Basic vitals tracking",
      "Daily step tracking",
      "Emergency SOS integration",
      "Basic health insights",
      "Limited reports",
    ],
    cta: "Get Started Free",
    highlight: false,
    icon: ShieldCheck,
  },
  {
    name: "Premium Plan",
    price: "₹199",
    originalPrice: "₹299",
    period: "/month",
    tagline: "The full AI experience.",
    features: [
      "Everything in Free",
      "AI health prediction reports",
      "Personalized diet plan",
      "Personalized workout plan",
      "Sleep & stress analytics",
      "Monthly health report export",
    ],
    cta: "Go Premium",
    highlight: true,
    icon: Zap,
  },
  {
    name: "Family Plan",
    price: "₹599",
    originalPrice: "₹899",
    period: "/month",
    tagline: "Total family protection.",
    features: [
      "Up to 5 family members",
      "Shared dashboard access",
      "AI reports for all members",
      "Emergency SOS for all",
      "Family progress monitoring",
    ],
    cta: "Protect Your Family",
    highlight: false,
    icon: Users,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Flexible Plans for Every <br />
            <span className="text-cyan-600 italic font-medium">
              Health Journey
            </span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your needs. Start for free and upgrade as
            you grow.
          </p>
        </div>

        {/* ===== PRICING GRID ===== */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                plan.highlight
                  ? "border-cyan-500 shadow-2xl shadow-cyan-200"
                  : "border-slate-100 bg-slate-50/50"
              } transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`size-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? "bg-cyan-600 text-white" : "bg-white text-cyan-600 shadow-sm"}`}
                >
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-slate-900">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-slate-400 line-through decoration-red-400/50">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-slate-400 font-bold">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-cyan-600" : "text-slate-400"}`}
                    />
                    <span className="text-sm text-slate-600 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${
                  plan.highlight
                    ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-200"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* ===== B2B / CUSTOM PLAN CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-20 rounded-3xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
              <Building2 className="w-10 h-10 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Corporate / Hospital Plan
              </h3>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                For organizations and institutions. Includes risk analytics
                system, dedicated support, and institutional monitoring.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4 md:text-right">
              Contact for Custom Pricing
            </div>
            <button className="px-10 py-4 bg-white text-slate-900 font-black uppercase text-[11px] tracking-widest rounded-full hover:bg-cyan-400 transition-all">
              Request a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
