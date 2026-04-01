"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Instagram", icon: "📸", color: "bg-pink-50" },
  { name: "TikTok", icon: "🎵", color: "bg-black text-white" },
  { name: "WhatsApp", icon: "💬", color: "bg-green-100" },
  { name: "Messenger", icon: "🗨️", color: "bg-blue-100" },
  { name: "SMS", icon: "📱", color: "bg-gray-100" },
  { name: "Email", icon: "✉️", color: "bg-amber-100" },
];

export default function PlatformsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary">Everywhere your audience is</h2>
          <p className="text-xl text-gray-600 mt-4">Automate conversations on all major platforms</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className={`aspect-square rounded-3xl flex flex-col items-center justify-center text-6xl shadow-lg hover:shadow-2xl transition-all ${platform.color}`}
            >
              <span>{platform.icon}</span>
              <span className="mt-4 text-xl font-semibold text-primary">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}