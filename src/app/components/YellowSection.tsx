'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const scenes = [
  {
    id: 1,
    title: "Turn comments into conversations that sell",
    subtitle: "How much is this? or Do you ship to Mars? Instant reply. Boom — wallets open, money lands, and you didn’t even blink.",
    accent: "Auto-reply on every comment",
    phoneContent: (
      <div className="p-8 space-y-5">
        <div className="bg-[#2c446b]/90 backdrop-blur-xl text-white p-4 rounded-3xl flex items-center gap-3">
          <div className="w-9 h-9 bg-[#70a0bf] rounded-2xl" /> fitness.star
        </div>
        <div className="bg-white/95 backdrop-blur-xl p-4 rounded-3xl shadow-xl text-black">I'll be watching 👀</div>
        <div className="bg-white/95 backdrop-blur-xl p-4 rounded-3xl shadow-xl text-black">Check your DM! 🔥</div>
        <div className="bg-white/95 backdrop-blur-xl p-4 rounded-3xl shadow-xl text-black">Love it 😍</div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Personal conversations; Profitable conversations",
    subtitle: "Identify high-intent leads, nurture relationships, and close sales — all through rapid, authentic, automated conversation.",
    accent: "Convert audience into subscribers",
    phoneContent: (
      <div className="p-8 space-y-6 text-sm">
        <div className="bg-[#2e628c] text-white p-5 rounded-3xl">Hey Eve! Ready to move your muscles?</div>
        <div className="bg-[#70a0bf] text-white p-5 rounded-3xl">Can't wait 💪</div>
        <div className="bg-[#2c446b] text-white p-5 rounded-3xl">Oops, seems like you don't follow me. Please follow</div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Engage followers instantly with automatic replies",
    subtitle: "Respond instantly to comments, DMs, and Story mentions.",
    accent: "Auto-reply on story mentions",
    phoneContent: (
      <div className="p-8 flex flex-col items-center gap-8">
        <div className="uppercase text-xs tracking-[2px] text-white/60">Mentioned you in their story</div>
        <img 
          src="https://picsum.photos/id/1015/260/380" 
          alt="story" 
          className="rounded-3xl shadow-2xl ring-1 ring-white/10" 
        />
        <div className="bg-gradient-to-r from-[#70a0bf] to-[#2e628c] text-white p-5 rounded-3xl w-full text-center">
          Hey! Thanks for mentioning me! Want to know more?
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Expand your empire",
    subtitle: "Grow across platforms, build your email & SMS lists, and diversify revenue in one powerful move.",
    accent: "Auto-reply on every reaction",
    phoneContent: (
      <div className="p-6 h-full">
        <img 
          src="https://picsum.photos/id/1011/300/520" 
          alt="lifestyle" 
          className="rounded-3xl object-cover h-full w-full shadow-2xl" 
        />
      </div>
    ),
  },
];

export default function RefinedHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndexRaw = useTransform(scrollYProgress, [0, 0.33, 0.66, 0.99], [0, 1, 2, 3]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = activeIndexRaw.on("change", (value) => {
      setActiveIndex(Math.round(value));
    });
    return unsubscribe;
  }, [activeIndexRaw]);

  const activeScene = scenes[activeIndex];

  return (
    <div ref={containerRef} className="bg-[#0a1421] min-h-[260vh] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e2f4a_0.8px,transparent_1px)] bg-[length:50px_50px] opacity-30" />

      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="w-2 h-2 bg-[#70a0bf] rounded-full animate-pulse" />
              <span className="text-sm tracking-widest text-white/70">AI-POWERED CHAT AUTOMATION</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={activeIndex}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white"
              >
                {activeScene.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/70 max-w-lg"
              >
                {activeScene.subtitle}
              </motion.p>
            </AnimatePresence>

            <div className="flex gap-5 pt-8">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 bg-white text-[#2c446b] font-semibold rounded-2xl flex items-center gap-3 text-lg shadow-2xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                className="px-8 py-5 border border-white/30 hover:border-white/60 rounded-2xl text-white flex items-center gap-3 backdrop-blur-xl"
              >
                <PlayCircle className="w-6 h-6" /> Watch Demo
              </motion.button>
            </div>
          </div>

          {/* Right Side - Phone with Scroll Animation */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              className="relative w-[360px] h-[720px] bg-gradient-to-br from-[#1a2538] to-[#0f1828] rounded-[68px] p-5 shadow-2xl border border-white/10"
              style={{
                rotateX: useTransform(scrollYProgress, [0, 1], [10, -10]),
                rotateY: useTransform(scrollYProgress, [0, 1], [-12, 12]),
              }}
            >
              <div className="w-full h-full bg-[#0a1421] rounded-[52px] overflow-hidden border border-white/5 relative">
                
                {/* Dynamic Phone Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.08, y: -30 }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {activeScene.phoneContent}
                  </motion.div>
                </AnimatePresence>

                {/* Top Status Bar */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-36 h-6 bg-black/80 rounded-full z-20 flex items-center px-3">
                  <div className="flex-1 h-1 bg-zinc-700 rounded-full" />
                </div>

                {/* Accent Badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-${activeIndex}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#70a0bf] to-[#2e628c] text-white font-semibold px-10 py-4 rounded-3xl shadow-xl"
                  >
                    {activeScene.accent}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}