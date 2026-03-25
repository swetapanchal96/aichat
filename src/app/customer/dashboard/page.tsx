"use client";

import React from 'react';
import {
    BsChatLeftDots,
    BsCalendar3,
    BsTicketPerforated,
    BsArrowUpRight,
    BsLightningCharge
} from 'react-icons/bs';

const DashboardStats = () => {
    const stats = [
        { label: "Total Chats", val: "1,284", icon: BsChatLeftDots, trend: "+14%", color: "bg-primary" },
        { label: "Monthly Chats", val: "142", icon: BsCalendar3, trend: "Current", color: "bg-secondary" },
        { label: "Total Usage", val: "42.8k", icon: BsTicketPerforated, trend: "Lifetime", color: "bg-accent" },
        { label: "Monthly Usage", val: "3.2k", icon: BsLightningCharge, trend: "82%", color: "bg-primary" }
    ];

    return (
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((card, idx) => (
                    <div
                        key={idx}
                        style={{
                            animationDelay: `${idx * 150}ms`,
                            animationFillMode: 'both'
                        }}
                        className="group relative animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-1000 ease-out"
                    >
                        {/* The animated border effect using pseudo-element */}
                        <div className="absolute inset-0 rounded-4xl transition-all duration-700 group-hover:after:scale-100 group-hover:after:opacity-100 after:absolute after:inset-0 after:rounded-4xl after:border-2 after:border-primary after:opacity-0 after:scale-90 after:transition-all after:duration-700 after:ease-out" />

                        {/* Main Card Content */}
                        <div className="relative h-full bg-white p-7 rounded-4xl shadow-[0_25px_60px_-15px_rgba(44,68,107,0.15)] border border-gray-50 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(44,68,107,0.25)] hover:-translate-y-2">

                            {/* Hover Decorative Radial Gradient */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />

                            <div className="relative z-10 flex justify-between items-start">
                                {/* Animated Icon Container */}
                                <div className="w-13 h-13 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <card.icon size={24} />
                                </div>

                                {/* Trend Badge */}
                                <div className="flex items-center text-[10px] font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full tracking-widest uppercase transition-all duration-500 group-hover:bg-green-500 group-hover:text-white">
                                    {card.trend.includes('%') && <BsArrowUpRight className="mr-1 stroke-1" />}
                                    {card.trend}
                                </div>
                            </div>

                            <div className="relative z-10 mt-10">
                                <div className="overflow-hidden">
                                    <h2 className="text-4xl font-bold text-primary tracking-tighter tabular-nums transition-transform duration-500 group-hover:-translate-y-1">
                                        {card.val}
                                    </h2>
                                </div>
                                <p className="text-[11px] font-black text-gray-400 mt-2 uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-primary/60">
                                    {card.label}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardStats;