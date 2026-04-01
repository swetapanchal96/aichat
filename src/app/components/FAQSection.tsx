"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Will using Manychat get my account locked?",
    a: "No. We are an Official Meta Business Partner and TikTok partner. Safe & compliant.",
  },
  {
    q: "Do I need coding skills?",
    a: "Zero coding required. Our visual builder is drag-and-drop.",
  },
  {
    q: "Can I make the bot sound like me?",
    a: "Yes. Full customization — tone, emojis, personality, everything.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>

        {faqs.map((faq, i) => (
          <div key={i} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-semibold text-lg">{faq.q}</span>
              <span className="text-3xl text-accent">{open === i ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-8 pb-8 text-gray-600">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}