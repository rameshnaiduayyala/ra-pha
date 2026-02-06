import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "What is RA-PHA?",
    answer: "RA-PHA is an AI-powered personal health assistant that monitors health data, predicts risks early, and provides personalized diet, workout, and wellness plans through continuous data analysis."
  },
  {
    question: "Is RA-PHA a medical diagnostic app?",
    answer: "No. RA-PHA provides predictive health insights and recommendations to support better lifestyle decisions. Final medical diagnosis and treatment should always be performed by a certified doctor."
  },
  {
    question: "Can I use RA-PHA without a smartwatch?",
    answer: "Yes. While wearable integration provides real-time automation, you can manually enter health vitals (like BP, weight, or glucose levels), and RA-PHA will still generate insights and personalized plans."
  },
  {
    question: "How accurate is the AI prediction?",
    answer: "RA-PHA predictions are based on advanced AI models and longitudinal health trend analysis. The accuracy of the system improves over time as more consistent health data is tracked."
  },
  {
    question: "Is my health data secure?",
    answer: "Absolutely. RA-PHA uses industry-standard encryption and strict privacy protocols. We follow a privacy-first model where your health data belongs to you and is protected like a vault."
  },
  {
    question: "Does RA-PHA provide doctor consultation?",
    answer: "Yes. RA-PHA includes a telemedicine integration layer that allows users to book online consultations and share their AI-generated health reports with certified healthcare professionals."
  },
  {
    question: "What is the SOS feature in RA-PHA?",
    answer: "The SOS feature is an emergency response tool that allows users to trigger an alert instantly. It shares your live location with emergency contacts and provides ambulance assistance support."
  },
  {
    question: "Who can benefit most from RA-PHA?",
    answer: "Everyone can benefit, but it is especially impactful for individuals managing diabetes, hypertension, heart risks, obesity, or chronic stress, as well as those focused on preventive healthcare."
  },
  {
    question: "Can hospitals and corporates use RA-PHA?",
    answer: "Yes. We offer dedicated dashboard-based solutions for hospitals, corporate wellness programs, and insurance providers to facilitate remote monitoring and risk analytics."
  },
  {
    question: "How can I partner with RA-PHA?",
    answer: "We are always open to collaboration. You can contact our partnership team directly through the website or click the 'Request a Demo' button to begin the onboarding discussion."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-all hover:text-cyan-600"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-5 h-5 text-cyan-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed max-w-3xl italic border-l-2 border-cyan-100 pl-4 ml-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 px-6 bg-white overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Support Center
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h2>
        </div>

        {/* ===== ACCORDION ===== */}
        <div className="bg-slate-50/50 rounded-[2.5rem] p-4 md:p-12 border border-slate-100 shadow-sm">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

        {/* ===== SUPPORT FOOTER ===== */}
        <div className="mt-16 p-8 rounded-3xl border border-dashed border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-cyan-50 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Still have questions?</p>
              <p className="text-xs text-slate-500">Our support team is ready to help you.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-cyan-600 transition-all">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
}