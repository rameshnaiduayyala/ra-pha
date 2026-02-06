import { motion } from "framer-motion";
import { Construction, Rocket, Milestone, Timer } from "lucide-react";

export default function RoadmapStatus() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 border-t-4 border-blue-500 px-6 py-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 400px at 80% 30%, rgba(59,130,246,0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Status Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200"
        >
          <Construction className="size-8 text-white" />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-black text-2xl text-slate-900 mb-4 tracking-tight">
              Roadmap – <span className="text-blue-600">Scaling the Future of Preventive Health</span>
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed max-w-3xl">
              RA-PHA is currently in the <strong>MVP Development</strong> stage. We are adhering to a strategic 12-month roadmap 
              to transition from private testing to a nationwide healthcare companion.
            </p>

            {/* Strategic Milestones */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Timer className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Months 0-3</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">MVP & Beta Testing</h4>
                <p className="text-xs text-slate-500 mt-1">Refining core AI and wearable integrations</p>
              </div>

              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Rocket className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Months 4-6</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Beta Launch</h4>
                <p className="text-xs text-slate-500 mt-1">Expanding access to our first cohort of early adopters</p>
              </div>

              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Milestone className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Months 7-12</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Public Launch & Scale</h4>
                <p className="text-xs text-slate-500 mt-1">Scaling towards 10K+ users and Series A readiness</p>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="mt-10 max-w-lg">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                <span>MVP Development Progress</span>
                <span className="text-blue-600 font-black">Status: On Track</span>
              </div>
              <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden w-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "33%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-3 italic">
                Currently targeting MVP completion within 3 months to secure Series A readiness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}