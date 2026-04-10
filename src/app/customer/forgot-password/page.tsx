"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Key, ArrowLeft, Mail, ShieldCheck, Bot, Zap, CircleDot } from 'lucide-react';
import Link from 'next/link';
import { apiUrl } from '@/config';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Please enter email");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                `${apiUrl}/reg/forgotpassword`,
                {
                    email: email,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (res?.data?.success) {
                toast.success(res?.data?.message || "Password sent to email");
                setEmail("");
            } else {
                toast.error(res?.data?.message || "Failed to send password");
            }
        } catch (error: any) {
            console.error("Forgot password error:", error);
            toast.error(
                error?.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 font-sans antialiased text-slate-200 overflow-hidden relative bg-[#010409]">


            <div className="absolute inset-0 z-0 overflow-hidden">

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-primary rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                        x: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-primary rounded-full blur-[140px]"
                />

            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-115 z-10"
            >
                <div className="bg-slate-950/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-[0_0_50px_-10px_rgba(44,68,107,0.4)] relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

                    <div className="mb-10 flex flex-col items-center">
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 border border-dashed border-accent/30 rounded-full"
                            />
                            <div className="w-20 h-20 bg-[#0d141d] border border-secondary/50 rounded-full flex items-center justify-center relative z-10 shadow-inner">
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Key size={32} className="text-accent" />
                                </motion.div>
                            </div>
                        </div>

                        <h1 className="text-3xl font-black tracking-tight text-white mt-8 mb-2 uppercase">
                            Identity <span className="text-accent">Reset</span>
                        </h1>
                        <p className="text-slate-400 text-center text-xs font-bold tracking-widest uppercase opacity-60">
                            Shiva Protocol Security Layer
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleForgotPassword}>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-2">
                                <label className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                                    Verified Email id
                                </label>
                                <CircleDot size={12} className="text-accent animate-pulse" />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="name@enterprise-ai.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#0a0f16] text-white border border-primary px-6 py-4 rounded-2xl  focus:border-accent  transition-all placeholder:text-slate-700 font-mono text-sm"
                                />
                                <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-accent transition-colors" size={18} />
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, backgroundColor: "#70a0bf" }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            className="w-full bg-secondary text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/40 tracking-[0.2em] text-xs disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? "PROCESSING..." : "INITIALIZE RECOVERY"}
                            <ShieldCheck size={18} />
                        </motion.button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
                        <Link
                            href="/customer/login"
                            className="flex items-center gap-2 text-[10px] font-black text-accent hover:text-white transition-all uppercase tracking-[0.25em] group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to login
                        </Link>

                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-white/10" />
                            <span className="text-[9px] text-white/20 tracking-[0.5em] font-mono">
                                OUTPOST_V4.0
                            </span>
                            <div className="h-px w-8 bg-white/10" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;