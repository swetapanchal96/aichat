"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from "next/navigation";
import {
    FiUser, FiLock, FiMail, FiPhone, FiEye, FiEyeOff,
    FiArrowLeft, FiCheckCircle
} from "react-icons/fi";
import { BsShieldLockFill } from "react-icons/bs";
import axios from 'axios';
import { apiUrl } from '@/config';
import { getAuthHeader } from '@/utils/auth';
import { toast } from 'react-toastify';

interface ProfileResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        created_at: string;
        name: string;
        email: string;
        password: string;
        phone: number;
    };
}

// Refined UI Constants
const labelCls = "text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] ml-1";
const inputCls = "mt-2 w-full rounded-2xl border border-transparent bg-gray-50 px-5 py-3.5 text-[15px] font-semibold text-primary focus:outline-none focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all duration-300 shadow-inner";

export default function SuperAdminEditProfilePage() {
    const router = useRouter();
    const [tab, setTab] = useState<"details" | "password">("details");
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: ""
    });

    const [passwordData, setPasswordData] = useState({
        oldpass: "",
        changedpass: "",
        confirmedpass: ""
    });

    // Form States
    const [showPass, setShowPass] = useState({ old: false, new: false, confirm: false });


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.post<ProfileResponse>(
                    `${apiUrl}/reg/getprofile`,
                    {},
                    {
                        headers: getAuthHeader(),
                    }
                );

                const user = res.data.data;

                setProfile({
                    fullName: user.name,
                    email: user.email,
                    phone: String(user.phone)
                });

            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdateProfile = async () => {
        try {


            const payload = {
                name: profile.fullName,
                email: profile.email,
                phone: profile.phone,
            };

            const res = await axios.post(
                `${apiUrl}/reg/editprofile`,
                payload,
                {
                    headers: getAuthHeader(),
                }
            );

            if (res.data.success) {
                console.log("Profile updated:", res.data);

                toast.success(res?.data?.message || "Profile updated:")

                // Optional: update localStorage
                localStorage.setItem(
                    "superadminuser",
                    JSON.stringify(res.data.data)
                );
            }

        } catch (error) {
            console.error("Update failed", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleChangePassword = async () => {
    try {
        setIsSaving(true);

        // Basic validation
        if (passwordData.changedpass !== passwordData.confirmedpass) {
            console.error("Passwords do not match");
            return;
        }

        const payload = {
            oldpass: passwordData.oldpass,
            changedpass: passwordData.changedpass,
            confirmedpass: passwordData.confirmedpass,
        };

        const res = await axios.post(
            `${apiUrl}/reg/changepassword`,
            payload,
            {
                headers: getAuthHeader(),
            }
        );

        if (res.data.success) {
            console.log("Password updated successfully");

            // Optional: clear fields
            setPasswordData({
                oldpass: "",
                changedpass: "",
                confirmedpass: ""
            });

            toast.success(res?.data?.message || "password changed")
        }

    } catch (error) {
        console.error("Password update failed", error);
    } finally {
        setIsSaving(false);
    }
};

    return (
        <main className="min-h-screen bg-background text-primary animate-in fade-in duration-700">
            <div className="mx-auto w-full max-w-3xl px-6 py-12">

                {/* Back Navigation */}
                <button
                    onClick={() => router.push("/superadmin/profile")}
                    className="group mb-8 inline-flex items-center gap-2 rounded-xl bg-white border border-gray-100 px-5 py-2.5 text-[13px] font-bold text-gray-500 hover:text-primary hover:shadow-md transition-all active:scale-95"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Profile
                </button>

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight">Modify Settings</h1>
                        <p className="text-gray-400 text-sm mt-1 font-medium text-[15px]">Update your credentials and security protocols.</p>
                    </div>
                    {/* Tab Switcher */}
                    <div className="inline-flex bg-gray-100/50 p-1.5 rounded-2xl border border-gray-100">
                        <button
                            onClick={() => setTab("details")}
                            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[12px] font-black uppercase tracking-wider transition-all ${tab === "details" ? "bg-white text-primary shadow-sm" : "text-gray-400 hover:text-primary"
                                }`}
                        >
                            <FiUser /> Profile
                        </button>
                        <button
                            onClick={() => setTab("password")}
                            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[12px] font-black uppercase tracking-wider transition-all ${tab === "password" ? "bg-white text-primary shadow-sm" : "text-gray-400 hover:text-primary"
                                }`}
                        >
                            <FiLock /> Security
                        </button>
                    </div>
                </div>

                <section className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-[0_30px_70px_-15px_rgba(44,68,107,0.2)]">
                    <div className="p-8 sm:p-12">

                        {tab === "details" ? (
                            <div className="space-y-6 animate-in slide-in-from-left-4 duration-500">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-secondary">
                                        <FiUser size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold">Personal Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className={labelCls}>Full Name</label>
                                        <div className="relative">
                                            <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors" />
                                            <input
                                                value={profile.fullName}
                                                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                                                className={`${inputCls} pl-12`}
                                            />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className={labelCls}>Phone Number</label>
                                        <div className="relative">
                                            <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors" />
                                            <input
                                                value={profile.phone}
                                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                                className={`${inputCls} pl-12`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className={labelCls}>Email Address</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors" />
                                        <input
                                            value={profile.email}
                                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                            className={`${inputCls} pl-12`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                        <BsShieldLockFill size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold">Authentication Security</h3>
                                </div>

                                <div className="space-y-5">
                                    {["Current Password", "New Password", "Confirm New Password"].map((lbl, idx) => {
                                        const field = idx === 0 ? 'old' : idx === 1 ? 'new' : 'confirm';
                                        return (
                                            <div key={lbl}>
                                                <label className={labelCls}>{lbl}</label>
                                                <div className="relative">
                                                    <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                                                    <input
                                                        type={showPass[field as keyof typeof showPass] ? "text" : "password"}
                                                        value={
                                                            field === "old"
                                                                ? passwordData.oldpass
                                                                : field === "new"
                                                                    ? passwordData.changedpass
                                                                    : passwordData.confirmedpass
                                                        }
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            setPasswordData(prev => ({
                                                                ...prev,
                                                                ...(field === "old" && { oldpass: value }),
                                                                ...(field === "new" && { changedpass: value }),
                                                                ...(field === "confirm" && { confirmedpass: value }),
                                                            }));
                                                        }}
                                                        className={`${inputCls} pl-12 pr-12`}
                                                        placeholder="••••••••"
                                                    />
                                                    <button
                                                        onClick={() => setShowPass(prev => ({ ...prev, [field]: !prev[field as keyof typeof showPass] }))}
                                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                                                    >
                                                        {showPass[field as keyof typeof showPass] ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-50">
                            <div className="flex items-center text-[11px] font-bold text-gray-400 gap-2">
                                <FiCheckCircle className="text-green-500" />
                                All changes are encrypted
                            </div>
                            <button
                                onClick={tab === "details" ? handleUpdateProfile : handleChangePassword}
                                disabled={isSaving}
                                className="group cursor-pointer relative bg-primary text-white px-10 py-4 rounded-2xl text-[13px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95 flex items-center gap-3"
                            >
                                {isSaving ? "Updating..." : (tab === "details" ? "Update Identity" : "Reset Security")}
                                <FiArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}