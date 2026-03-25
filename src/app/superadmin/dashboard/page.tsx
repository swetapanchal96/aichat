// export default Dashboard;
"use client";

import React from 'react';
import {
    BsTicketPerforated,
    BsCalendar3,
    BsTrophy,
    BsArrowUpRight,
    BsThreeDotsVertical,
    BsSearch,
    BsArrowRightShort
} from 'react-icons/bs';

const Dashboard = () => {

    const topUsers = [
        { id: 1, name: "Alexander Wright", tokens: 12450 },
        { id: 2, name: "Sophia Mccarthy", tokens: 10200 },
        { id: 3, name: "Marcus Nilsson", tokens: 9840 },
        { id: 4, name: "Elena Rossi", tokens: 8120 },
        { id: 5, name: "Jordan Smith", tokens: 7600 },
    ];

    return (
        <div className="p-8 bg-background min-h-screen text-foreground selection:bg-accent/30 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Page Header --- */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 slide-in-from-top-4 animate-in duration-500 fill-mode-forwards">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-primary mb-2">Overview</h1>
                        <p className="text-gray-400 text-[15px]">Comprehensive token analytics and user performance.</p>
                    </div>

                    <div className="relative group">
                        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* --- Stats Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { label: "Today's Token", val: "124", icon: BsTicketPerforated, trend: "+12%", color: "bg-primary" },
                        { label: "Monthly", val: "3.8k", icon: BsCalendar3, trend: "Stable", color: "bg-secondary" },
                        { label: "Top Holder", val: "892", icon: BsTrophy, trend: "R. Sharma", color: "bg-accent" }
                    ].map((card, idx) => (
                        <div
                            key={idx}
                            style={{ animationDelay: `${idx * 100}ms` }}
                            className="relative bg-white p-7 rounded-[24px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-50 flex justify-between items-start group overflow-hidden cursor-default animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 fill-mode-both"
                        >
                            {/* Hover Fill Layer */}
                            <div className={`absolute inset-0 ${card.color} translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0`} />

                            <div className="relative z-10 space-y-4">
                                <div className={`w-12 h-12 bg-background rounded-2xl flex items-center justify-center text-secondary group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
                                    <card.icon size={22} />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-semibold text-primary group-hover:text-white tracking-tighter transition-colors duration-500">{card.val}</h2>
                                    <p className="text-[13px] font-medium text-gray-400 group-hover:text-white/80 mt-1 uppercase tracking-wider transition-colors duration-500">{card.label}</p>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center text-[13px] font-bold text-green-500 bg-green-50/50 group-hover:bg-white/20 group-hover:text-white px-2.5 py-1 rounded-full transition-all duration-500">
                                {card.trend === "+12%" && <BsArrowUpRight className="mr-1" />}
                                {card.trend}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-background min-h-screen animate-in fade-in duration-700">
                    <div className="max-w-8xl mx-auto">

                        {/* Section Header */}
                        <div className="mb-10 flex justify-between items-end border-b border-gray-100 pb-6">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight text-primary">Top Performers</h2>
                                <p className="text-gray-400 text-sm mt-1 font-medium">Top token contributors this month.</p>
                            </div>
                            <span className="text-[11px] font-black text-secondary bg-background px-3 py-1 rounded-full border border-gray-100 uppercase tracking-widest">
                                Live Rankings
                            </span>
                        </div>

                        {/* Minimalist List Section */}
                        <div className="space-y-3">
                            {topUsers.map((user, index) => (
                                <div
                                    key={user.id}
                                    style={{ animationDelay: `${index * 75}ms` }}
                                    className="group relative bg-white p-5 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden animate-in slide-in-from-bottom-4 fill-mode-both"
                                >
                                    {/* Hidden Background Slide Fill */}
                                    <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 opacity-[0.02]" />

                                    <div className="flex items-center space-x-4 relative z-10">
                                        {/* Visual Rank Indicator */}
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-colors duration-300 ${index === 0 ? 'bg-primary text-white' : 'bg-background text-secondary group-hover:bg-primary group-hover:text-white'
                                            }`}>
                                            {index + 1}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-[15px] font-bold text-primary group-hover:text-secondary transition-colors">
                                                {user.name}
                                            </span>
                                            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                                                Platform Contributor
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6 relative z-10">
                                        <div className="text-right">
                                            <span className="block text-lg font-black text-primary tabular-nums tracking-tighter">
                                                {user.tokens.toLocaleString()}
                                            </span>
                                            <span className="text-[10px] font-bold text-accent uppercase">
                                                Tokens
                                            </span>
                                        </div>

                                        {/* Hover Reveal Arrow */}
                                        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                            <BsArrowRightShort size={24} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
