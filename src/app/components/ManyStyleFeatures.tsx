"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HiCheckCircle, HiArrowRight, HiSparkles, HiXCircle } from 'react-icons/hi';

const ManyStyleFeatures = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-700 font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
                {/* Clean Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-50 blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-50 blur-[120px]" />
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-600 shadow-sm">
                            <HiSparkles className="animate-pulse" />
                            AI-Powered Instagram Automation
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-slate-900">
                            Turn comments <br />
                            <span className="text-slate-400 italic font-serif font-light">into </span>
                            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                                revenue
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                            Stop chasing DMs. Let our AI handle the conversations, capture leads, and book meetings while you focus on creating.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-200 flex items-center gap-2">
                                Start Free Trial
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm">
                                View Pricing
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup Section - Light Version */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:flex justify-center"
                    >
                        <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-[12px] border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
                            <div className="absolute inset-0 bg-slate-50 p-6 flex flex-col gap-4">
                                <div className="h-6 w-24 bg-slate-200 rounded-full self-center mb-8" />

                                <div className="bg-white p-3 rounded-2xl rounded-tl-none w-4/5 text-xs text-slate-600 shadow-sm border border-slate-100">
                                    "I saw your latest Reel! How can I join the program?"
                                </div>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="bg-emerald-600 p-3 rounded-2xl rounded-tr-none w-4/5 self-end text-xs font-medium text-white shadow-md shadow-emerald-100"
                                >
                                    "Hey! 🚀 You can join via the link below. Use code 'REEL20' for 20% off!"
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -right-8 top-1/4 bg-white/80 backdrop-blur-xl border border-slate-200 p-5 rounded-2xl shadow-xl shadow-slate-200/50"
                        >
                            <div className="text-emerald-600 font-black text-2xl">+124%</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Conversion Rate</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- BEFORE & AFTER SECTION --- */}
            <section className="py-32 px-6 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Before Card */}
                        <div className="p-10 lg:p-16 rounded-[2.5rem] bg-white border border-slate-200 hover:border-red-200 transition-all group shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-8">
                                <HiXCircle className="text-red-500 w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 italic text-slate-800">The manual grind</h3>
                            <ul className="space-y-4">
                                {["Missed DMs in requests", "Manual copy-pasting", "Burnt out by 2AM", "Losing leads to competitors"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-600 transition-colors font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* After Card */}
                        <div className="p-10 lg:p-16 rounded-[2.5rem] bg-white border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all group relative overflow-hidden shadow-xl shadow-emerald-100/20">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <HiSparkles className="w-32 h-32 text-emerald-600" />
                            </div>

                            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-8">
                                <HiCheckCircle className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                The Salexo Engine
                            </h3>
                            <ul className="space-y-4">
                                {["Instant AI responses", "Auto-lead capture", "24/7 Sales bot", "CRM Sync Integration"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                                        <HiCheckCircle className="text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-emerald-600 font-bold italic">Efficiency increased by 800%</span>
                                <HiArrowRight className="text-emerald-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManyStyleFeatures;