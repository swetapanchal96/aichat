"use client";

import React, { useState } from 'react';
import {
    BsShieldCheck,
    BsEnvelope,
    BsPerson,
    BsArrowRight,
    BsFingerprint,
    BsPatchCheckFill
} from 'react-icons/bs';

const SuperAdminProfile = () => {
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1500);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">

            {/* --- Minimalist Header --- */}
            <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-primary">Profile Settings</h1>
                    <p className="text-gray-400 text-[15px] mt-1">Manage your administrator account and security credentials.</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
                    <BsPatchCheckFill className="text-green-500" size={14} />
                    <span className="text-[11px] font-black text-green-700 uppercase tracking-widest">Verified Admin</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* --- Left Column: Identity Card --- */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-8 rounded-4xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-50 sticky top-28">
                        <div className="flex flex-col items-center text-center">
                            {/* Professional Initial-based Avatar */}
                            <div className="w-24 h-24 rounded-[28px] bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white shadow-xl shadow-primary/20 mb-6">
                                <span className="text-3xl font-bold tracking-tighter">SW</span>
                            </div>

                            <h3 className="text-xl font-bold text-primary tracking-tight">Super Admin</h3>
                            <p className="text-gray-400 text-sm font-medium mt-1">admin@salexo.com</p>

                            <div className="w-full h-px bg-gray-50 my-6" />

                            <div className="w-full space-y-4">
                                <div className="flex justify-between text-[12px] font-bold">
                                    <span className="text-gray-400 uppercase tracking-wider">Role</span>
                                    <span className="text-secondary">Primary Owner</span>
                                </div>
                                <div className="flex justify-between text-[12px] font-bold">
                                    <span className="text-gray-400 uppercase tracking-wider">Status</span>
                                    <span className="text-green-500">Active Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Configuration Form --- */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white p-10 rounded-4xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-50">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-lg font-bold text-primary flex items-center">
                                <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center mr-3 text-secondary">
                                    <BsPerson size={18} />
                                </div>
                                Account Identification
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full Name */}
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] ml-1">Full Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        defaultValue="Salexo Admin"
                                        className="w-full px-5 py-3.5 bg-background border border-transparent rounded-2xl text-[15px] font-semibold text-primary focus:outline-none focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] ml-1">Email Address</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        defaultValue="admin@salexo.com"
                                        className="w-full px-5 py-3.5 bg-background border border-transparent rounded-2xl text-[15px] font-semibold text-primary focus:outline-none focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Save Action */}
                        <div className="mt-12 flex justify-end">
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="group relative px-10 py-4 bg-primary text-white rounded-[20px] font-bold text-[13px] tracking-widest uppercase overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95 disabled:opacity-70"
                            >
                                <div className={`flex items-center transition-all duration-500 ${isSaving ? 'opacity-0 scale-90' : 'opacity-100'}`}>
                                    Update Identity <BsArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform" size={18} />
                                </div>
                                {isSaving && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-5 h-5 border-[3px] border-white/20 border-t-white rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Security Integration Card */}
                    <div className="bg-linear-to-r from-secondary to-primary p-8 rounded-4xl text-white flex items-center justify-between shadow-xl shadow-secondary/10 group cursor-default">
                        <div className="flex items-center space-x-6">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <BsFingerprint size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold tracking-tight">Security Protocol</h4>
                                <p className="text-white/70 text-sm font-medium mt-1">Multi-factor authentication is currently enforced.</p>
                            </div>
                        </div>
                        <button className="hidden md:block px-5 py-2.5 bg-white text-primary rounded-xl text-[12px] font-black uppercase tracking-wider hover:bg-accent hover:text-white transition-all">
                            Review
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SuperAdminProfile;