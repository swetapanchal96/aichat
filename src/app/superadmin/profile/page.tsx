"use client";

import Link from "next/link";
import { FiEdit2, FiUser, FiMail, FiPhone, FiShield } from "react-icons/fi";
import { BsPatchCheckFill } from "react-icons/bs";

// Refined Tailwind Classes for a Premium Feel
const labelCls = "text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] ml-1";
const inputCls = "mt-2 w-full rounded-2xl border border-transparent bg-gray-50 px-5 py-3.5 text-[15px] font-semibold text-primary focus:outline-none cursor-default shadow-inner";

export default function SuperAdminProfilePage() {
    // Mock data for design reference
    const profile = {
        fullName: "Alexander Wright",
        email: "admin@salexo.com",
        phone: "+91 98765 43210",
        initials: "AW"
    };

    return (
        <main className="min-h-screen bg-background text-primary animate-in fade-in duration-700">
            <div className="mx-auto w-full max-w-3xl px-6 py-12">

                {/* Header Section */}
                <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-primary">Account Identity</h1>
                        <p className="text-gray-400 text-sm mt-1 font-medium text-[15px]">Manage your administrative presence on Salexo.</p>
                    </div>
                    <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 self-start md:self-center">
                        <BsPatchCheckFill className="text-green-500" size={14} />
                        <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Verified Root</span>
                    </div>
                </div>

                <section className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">

                    {/* Decorative Top Accent */}
                    <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

                    <div className="p-8 sm:p-12">
                        {/* Profile Hero */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative group">
                                <div className="h-28 w-28 rounded-[32px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-xl shadow-primary/20 transition-transform duration-500 hover:rotate-3">
                                    <span className="text-4xl font-bold tracking-tighter">{profile.initials}</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-white rounded-xl shadow-lg border border-gray-50 flex items-center justify-center text-secondary">
                                    <FiShield size={18} />
                                </div>
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-primary tracking-tight">
                                {profile.fullName}
                            </h2>
                            <span className="text-[11px] font-black text-secondary bg-background px-4 py-1.5 rounded-full mt-3 uppercase tracking-widest border border-gray-100">
                                Super Administrator
                            </span>
                        </div>

                        {/* Information Grid */}
                        <div className="mt-12 space-y-6">

                            <div className="group">
                                <label className={labelCls}>Legal Full Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input value={profile.fullName} className={`${inputCls} pl-12`} disabled />
                                </div>
                            </div>

                            <div className="group">
                                <label className={labelCls}>Email Communications</label>
                                <div className="relative">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input value={profile.email} className={`${inputCls} pl-12`} disabled />
                                </div>
                            </div>

                            <div className="group">
                                <label className={labelCls}>Contact Number</label>
                                <div className="relative">
                                    <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input value={profile.phone} className={`${inputCls} pl-12`} disabled />
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-8 flex justify-center">
                                <Link
                                    href="/superadmin/edit-profile"
                                    className="group relative inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-4 text-[13px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 active:scale-95"
                                >
                                    <FiEdit2 className="text-base group-hover:rotate-12 transition-transform" />
                                    Edit Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Footer Note */}
                <p className="mt-8 text-center text-[12px] font-medium text-gray-400">
                    Last profile update: <span className="text-primary/60 font-bold">March 25, 2026</span>
                </p>
            </div>
        </main>
    );
}