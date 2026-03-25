"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

// Refined UI Constants using your theme
const labelCls = "text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 block ml-1";
const inputCls = "w-full rounded-2xl border-2 border-gray-50 bg-gray-50/50 px-12 py-4 text-[15px] font-semibold text-primary focus:outline-none focus:bg-white focus:ring-8 focus:ring-accent/5 focus:border-accent transition-all duration-300 placeholder:text-gray-300 shadow-sm";

export default function CustomerEditProfilePage() {
    const router = useRouter();
    const [tab, setTab] = useState<"details" | "password">("details");
    const [showPass, setShowPass] = useState({ old: false, new: false, confirm: false });

    return (
        <main className="min-h-screen bg-background text-primary selection:bg-accent/10 pb-20 font-sans">
            <div className="mx-auto w-full max-w-4xl px-6 pt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-gray-400 hover:text-accent font-bold text-[11px] uppercase tracking-widest transition-colors mb-4 group"
                        >
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Dashboard
                        </button>
                        <h1 className="text-4xl font-semibold tracking-tight">
                            Modify <span className="text-accent italic font-light">Settings</span>
                        </h1>
                    </div>

                    {/* Pure CSS Tab Switcher */}
                    <div className="flex bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200/50 backdrop-blur-sm shadow-inner">
                        <button
                            onClick={() => setTab("details")}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${tab === "details" ? "bg-white text-primary shadow-md scale-[1.02]" : "text-gray-400 hover:text-primary"
                                }`}
                        >
                            <svg className={`w-4 h-4 ${tab === "details" ? "text-accent" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            Identity
                        </button>
                        <button
                            onClick={() => setTab("password")}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${tab === "password" ? "bg-white text-primary shadow-md scale-[1.02]" : "text-gray-400 hover:text-primary"
                                }`}
                        >
                            <svg className={`w-4 h-4 ${tab === "password" ? "text-accent" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            Security
                        </button>
                    </div>
                </div>

                {/* Main Glass-Effect Card */}
                <section className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div className="p-8 md:p-14">

                        {/* Tab Content: Details */}
                        <div className={`${tab === "details" ? "block animate-in fade-in slide-in-from-left-4 duration-500" : "hidden"} space-y-8`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className={labelCls}>Full Name</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                        <input defaultValue="Krunal Shah" className={inputCls} />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className={labelCls}>Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <input defaultValue="+91 98765 43210" className={inputCls} />
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <label className={labelCls}>Email Address</label>
                                <div className="relative">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <input defaultValue="admin@salexo.com" className={inputCls} />
                                </div>
                            </div>
                        </div>

                        {/* Tab Content: Security */}
                        <div className={`${tab === "password" ? "block animate-in fade-in slide-in-from-right-4 duration-500" : "hidden"} space-y-6 max-w-2xl`}>
                            {["old", "new", "confirm"].map((field) => (
                                <div key={field} className="group">
                                    <label className={labelCls}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Password</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </div>
                                        <input
                                            type={showPass[field as keyof typeof showPass] ? "text" : "password"}
                                            className={inputCls}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            onClick={() => setShowPass(p => ({ ...p, [field]: !p[field as keyof typeof showPass] }))}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-primary transition-colors"
                                        >
                                            {showPass[field as keyof typeof showPass] ?
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg> :
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            }
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Footer */}
                        <div className="mt-16 pt-10 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center text-[10px] font-black text-gray-400 gap-3 uppercase tracking-widest">
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span>Secured by SSL Encryption</span>
                            </div>

                            <button className="w-full sm:w-auto bg-primary text-white px-12 py-4.5 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] shadow-lg shadow-primary/10 hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center gap-4 active:scale-95 group">
                                {tab === "details" ? "Save Identity" : "Update Security"}
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}