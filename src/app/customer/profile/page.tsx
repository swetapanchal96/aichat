// "use client";

// import Link from "next/link";
// import { FiEdit3, FiMail, FiPhone, FiShield, FiCalendar, FiGlobe } from "react-icons/fi";
// import { RiVerifiedBadgeFill } from "react-icons/ri";

// export default function customerProfilePage() {
//     const profile = {
//         fullName: "Krunal Shah",
//         email: "admin@salexo.com",
//         phone: "+91 98765 43210",
//         initials: "KS",
//         role: "System Root",
//         joined: "March 2024"
//     };

//     return (
//         <main className="min-h-screen bg-[#F8FAFC] py-12 px-6 lg:px-8 font-sans selection:bg-primary/10">
//             <div className="mx-auto max-w-5xl">

//                 {/* --- Top Navigation/Header --- */}
//                 <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">

//                     <Link
//                         href="/customer/edit-profile"
//                         className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
//                     >
//                         <FiEdit3 className="text-lg" />
//                         Modify Details
//                     </Link>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

//                     {/* --- Left Column: Hero Card --- */}
//                     <section className="md:col-span-5 lg:col-span-4 group">
//                         <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl transition-all duration-500 hover:shadow-primary/20">
//                             {/* Background Mesh Decor */}
//                             <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-70" />
//                             <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl transition-opacity group-hover:opacity-70" />

//                             <div className="relative z-10 flex flex-col items-center">
//                                 <div className="relative">
//                                     <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 text-4xl font-black tracking-tighter shadow-2xl">
//                                         {profile.initials}
//                                     </div>
//                                     <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg">
//                                         <RiVerifiedBadgeFill size={20} />
//                                     </div>
//                                 </div>

//                                 <h2 className="mt-8 text-2xl font-bold tracking-tight">{profile.fullName}</h2>
//                                 <p className="mt-1 text-slate-400 font-medium">Head of Operations</p>

//                                 <div className="mt-6 flex flex-wrap justify-center gap-2">
//                                     <span className="rounded-lg bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/80 border border-white/10">
//                                         {profile.role}
//                                     </span>
//                                     <span className="rounded-lg bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/20">
//                                         Active
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="mt-12 space-y-4 relative z-10 border-t border-white/10 pt-8">
//                                 <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors">
//                                     <FiCalendar className="text-lg" />
//                                     <span className="text-sm font-medium">Joined {profile.joined}</span>
//                                 </div>
//                                 <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors">
//                                     <FiGlobe className="text-lg" />
//                                     <span className="text-sm font-medium">Timezone: IST (UTC+5:30)</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     {/* --- Right Column: Information Bento Grid --- */}
//                     <section className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

//                         {/* Legal Name Card */}
//                         <div className="sm:col-span-2 rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md">
//                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Identity</label>
//                             <div className="mt-4 flex items-center justify-between">
//                                 <div>
//                                     <p className="text-xs font-bold text-slate-400">Full Legal Name</p>
//                                     <p className="mt-1 text-lg font-bold text-slate-800">{profile.fullName}</p>
//                                 </div>
//                                 <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
//                                     <FiShield size={22} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Email Card */}
//                         <div className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md">
//                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Communication</label>
//                             <div className="mt-6">
//                                 <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
//                                     <FiMail size={20} />
//                                 </div>
//                                 <p className="text-xs font-bold text-slate-400">Email Address</p>
//                                 <p className="mt-1 text-base font-bold text-slate-800 break-all">{profile.email}</p>
//                             </div>
//                         </div>

//                         {/* Phone Card */}
//                         <div className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md">
//                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Connection</label>
//                             <div className="mt-6">
//                                 <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-4">
//                                     <FiPhone size={20} />
//                                 </div>
//                                 <p className="text-xs font-bold text-slate-400">Phone Number</p>
//                                 <p className="mt-1 text-base font-bold text-slate-800">{profile.phone}</p>
//                             </div>
//                         </div>

//                         {/* Security Card */}
//                         <div className="sm:col-span-2 flex items-center justify-between rounded-[2rem] bg-slate-100/50 p-6 border border-dashed border-slate-200">
//                             <div className="flex items-center gap-4">
//                                 <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//                                 <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
//                                     Multi-factor Authentication Active
//                                 </span>
//                             </div>
//                             <button className="text-[11px] font-black uppercase tracking-tighter text-primary hover:underline">
//                                 View Security Logs
//                             </button>
//                         </div>

//                     </section>
//                 </div>
//             </div>
//         </main>
//     );
// }

"use client";

import Link from "next/link";
import { FiEdit3, FiMail, FiPhone, FiShield, FiCalendar, FiGlobe, FiArrowRight } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function CustomerProfilePage() {
    const profile = {
        fullName: "Krunal Shah",
        email: "admin@salexo.com",
        phone: "+91 98765 43210",
        initials: "KS",
        role: "Head of Operations",
        joined: "March 2024"
    };

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-6 lg:px-8 font-sans selection:bg-primary/20">
            <div className="mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">

                {/* --- Header Section --- */}
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

                    {/* --- Left Column: Hero Card (Primary Theme) --- */}
                    <section className="md:col-span-5 lg:col-span-4 group animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-white shadow-2xl transition-all duration-500 hover:shadow-secondary/40">
                            {/* Decorative Brand Circles */}
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/30 blur-3xl transition-opacity group-hover:opacity-100" />
                            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="relative group/avatar">
                                    <div className="flex h-36 w-36 items-center justify-center rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 text-5xl font-black tracking-tighter shadow-2xl transition-transform duration-700 group-hover/avatar:rotate-6">
                                        {profile.initials}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary shadow-lg ring-4 ring-primary">
                                        <RiVerifiedBadgeFill size={22} />
                                    </div>
                                </div>

                                <h2 className="mt-8 text-2xl font-bold tracking-tight text-center">{profile.fullName}</h2>
                                <p className="mt-2 text-accent/80 font-bold text-[11px] uppercase tracking-widest">{profile.role}</p>

                                <div className="mt-8 flex justify-center">
                                    <span className="rounded-full bg-white/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/10 backdrop-blur-sm">
                                        Status: Active
                                    </span>
                                </div>
                            </div>

                            <div className="mt-12 space-y-5 relative z-10 border-t border-white/10 pt-8">
                                <div className="flex items-center gap-4 text-accent hover:text-white transition-colors cursor-default group/line">
                                    <FiCalendar className="text-lg group-hover/line:scale-110 transition-transform" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Since {profile.joined}</span>
                                </div>
                                <div className="flex items-center gap-4 text-accent hover:text-white transition-colors cursor-default group/line">
                                    <FiGlobe className="text-lg group-hover/line:scale-110 transition-transform" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Region: IST (UTC+5:30)</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- Right Column: Information Bento Grid --- */}
                    <section className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">

                        {/* Legal Name Card */}
                        <div className="sm:col-span-2 group rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent/30">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Personal Identifier</label>
                                    <p className="text-xs font-bold text-slate-400">Full Legal Name</p>
                                    <p className="mt-1 text-xl font-bold text-primary">{profile.fullName}</p>
                                </div>
                                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <FiShield size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent/30">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-secondary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                <FiMail size={22} />
                            </div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-1">Communication</label>
                            <p className="text-xs font-bold text-slate-400">Primary Email</p>
                            <p className="mt-1 text-[15px] font-bold text-primary break-all">{profile.email}</p>
                        </div>

                        {/* Phone Card */}
                        <div className="group rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent/30">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-secondary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                <FiPhone size={22} />
                            </div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-1">Connection</label>
                            <p className="text-xs font-bold text-slate-400">Mobile Uplink</p>
                            <p className="mt-1 text-[15px] font-bold text-primary">{profile.phone}</p>
                        </div>

                        {/* Footer / Security Banner */}
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