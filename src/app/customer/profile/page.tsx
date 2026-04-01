
"use client";

import { apiUrl } from "@/config";
import { getCustomerAuthHeader } from "@/utils/auth";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEdit3, FiMail, FiPhone, FiShield, FiCalendar, FiGlobe, FiArrowRight } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { toast } from "react-toastify";

interface CustomerProfileResponse {
    success: boolean;
    message: string;
    data: {
        id: string;
        email: string;
        trial_start: string;
        trial_end: string;
        is_paid: boolean;
        created_at: string;
        company_id: string;
        companyname: string;
        isactive: boolean;
        script: string;
        phone: number | string;
    };
}

export default function CustomerProfilePage() {
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: "",
        initials: "",
        role: "",
        joined: "",
        companyName: "",
    });

    useEffect(() => {
    const fetchProfile = async () => {
        try {
            const res = await axios.post<CustomerProfileResponse>(
                `${apiUrl}/reg/getuserprofile`,
                {},
                {
                    headers: getCustomerAuthHeader(),
                }
            );

            const data = res.data.data;

            setProfile({
                fullName: data.companyname || "N/A",
                email: data.email,
                phone: data.phone ? String(data.phone) : "N/A",
                initials: data.companyname
                    ?.split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase(),
                role: data.is_paid ? "Paid User" : "Trial User",
                joined: new Date(data.created_at).toLocaleDateString("en-IN", {
                    month: "long",
                    year: "numeric",
                }),
                companyName: data.companyname,
            });

        } catch (error:any) {
            // console.error("Failed to fetch profile", error);
            toast.error(error?.response?.data?.message);
        }
    };

    fetchProfile();
}, []);

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-6 lg:px-8 font-sans selection:bg-primary/20">
            <div className="mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
                    <div className="space-y-1">

                        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                            Account <span className="text-accent font-light">Settings</span>
                        </h1>
                    </div>

                    <Link
                        href="/customer/edit-profile"
                        className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:bg-secondary hover:-translate-y-1 active:scale-95"
                    >
                        <FiEdit3 className="text-lg group-hover:rotate-12 transition-transform" />
                        Modify Details
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <section className="md:col-span-5 lg:col-span-4 group animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-white shadow-2xl transition-all duration-500 hover:shadow-secondary/40">
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/30 blur-3xl transition-opacity group-hover:opacity-100" />
                            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="relative group/avatar">
                                    <div className="flex h-36 w-36 items-center justify-center rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 text-5xl font-black tracking-tighter shadow-2xl transition-transform duration-700 group-hover/avatar:rotate-6">
                                        {loading ? "..." : getInitials(profile.companyname)}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary shadow-lg ring-4 ring-primary">
                                        <RiVerifiedBadgeFill size={22} />
                                    </div>
                                </div>

                                <h2 className="mt-8 text-2xl font-bold tracking-tight text-center">
                                    {loading ? "Loading..." : profile.companyname || "N/A"}
                                </h2>

                                <p className="mt-2 text-accent/80 font-bold text-[11px] uppercase tracking-widest">
                                    Client Admin
                                </p>

                                <div className="mt-8 flex justify-center">
                                    <span className="rounded-full bg-white/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/10 backdrop-blur-sm">
                                        Status: Active
                                    </span>
                                </div>
                            </div>

                            <div className="mt-12 space-y-5 relative z-10 border-t border-white/10 pt-8">
                                <div className="flex items-center gap-4 text-accent hover:text-white transition-colors cursor-default group/line">
                                    <FiCalendar className="text-lg group-hover/line:scale-110 transition-transform" />
                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        Profile Overview
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-accent hover:text-white transition-colors cursor-default group/line">
                                    <FiGlobe className="text-lg group-hover/line:scale-110 transition-transform" />
                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        Region: IST (UTC+5:30)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">

                        {/* Legal Name Card */}
                        <div className="sm:col-span-2 group rounded-4xl bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent/30">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                                        Company Identifier
                                    </label>
                                    <p className="text-xs font-bold text-slate-400">
                                        Company Name
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-primary">
                                        {loading ? "Loading..." : profile.companyname || "N/A"}
                                    </p>
                                </div>
                                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <FiShield size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group rounded-4xl bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent/30">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-secondary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                <FiMail size={22} />
                            </div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-1">
                                Communication
                            </label>
                            <p className="text-xs font-bold text-slate-400">Primary Email</p>
                            <p className="mt-1 text-[15px] font-bold text-primary break-all">
                                {loading ? "Loading..." : profile.email || "N/A"}
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="group rounded-4xl bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent/30">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-secondary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                <FiPhone size={22} />
                            </div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-1">
                                Connection
                            </label>
                            <p className="text-xs font-bold text-slate-400">Mobile Uplink</p>
                            <p className="mt-1 text-[15px] font-bold text-primary">
                                {loading ? "Loading..." : profile.phone || "N/A"}
                            </p>
                        </div>

                        <div className="sm:col-span-2 flex items-center justify-between rounded-3xl bg-primary p-6 text-white shadow-lg overflow-hidden relative">
                            <div className="absolute right-0 top-0 h-full w-32 bg-secondary/20 skew-x-[-20deg] translate-x-12" />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                                    Encrypted Protocol Active
                                </span>
                            </div>

                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-accent transition-colors relative z-10">
                                Security Logs
                                <FiArrowRight />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}