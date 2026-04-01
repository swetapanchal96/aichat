"use client";
import { motion } from "framer-motion";

export default function AutomationSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">From simple welcome messages to optimized sales funnels</h2>
          <p className="text-2xl text-accent mb-8">No coding needed. Drag-and-drop builder that feels like magic.</p>
          <button className="bg-white text-primary px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-accent hover:text-white transition-all">
            Start building for free →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
        >
          <div className="bg-white rounded-2xl p-6 text-primary text-center font-mono text-sm">
            Welcome message → Collect email → Send discount → Upsell product
          </div>
          <p className="text-center text-white/70 mt-4 text-sm">← Your flow builder preview (exactly like ManyChat)</p>
        </motion.div>
      </div>
    </section>
  );
}