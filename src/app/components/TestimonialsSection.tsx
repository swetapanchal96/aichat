"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder @ GlowSkin",
    text: "Manychat turned our Instagram comments into $127k in sales last month. Insane ROI.",
    avatar: "👩🏻‍💼",
  },
  {
    name: "Marcus Rivera",
    role: "E-commerce Director",
    text: "From zero to 12,400 automated conversations in 3 weeks. Best tool we’ve ever used.",
    avatar: "👨🏽‍💼",
  },
  {
    name: "Priya Patel",
    role: "D2C Brand Owner",
    text: "The automation builder is so intuitive. I built my entire Black Friday funnel in one afternoon.",
    avatar: "👩🏾‍💼",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-accent/20 rounded-3xl p-12 shadow-2xl text-center"
        >
          <div className="text-7xl mb-8">{testimonials[current].avatar}</div>
          <p className="text-2xl italic text-primary mb-8">
            “{testimonials[current].text}”
          </p>
          <div>
            <p className="font-semibold text-lg">{testimonials[current].name}</p>
            <p className="text-accent">{testimonials[current].role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}