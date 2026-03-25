"use client";

import React from 'react';
import { BsTicketPerforated, BsCalendar3, BsTrophy, BsPersonCircle } from 'react-icons/bs';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { FiMoreVertical } from 'react-icons/fi';

const Dashboard = () => {
    const topUsers = Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        tokens: Math.floor(Math.random() * 500) + 50,
        status: i % 3 === 0 ? "Active" : "Inactive",
    }));

    return (
        <div className="p-6  min-h-screen text-foreground">
            <div className="max-w-7xl mx-auto">

                {/* Page Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-primary">Analytics Overview</h1>
                        <p className="text-gray-500 text-sm font-medium">Monitoring your token distribution and top performers.</p>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm text-sm font-semibold text-primary">
                        <BsCalendar3 className="text-secondary" />
                        <span>March 2026</span>
                    </div>
                </div>

                {/* 1. Stats Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    {/* Today's Token */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-accent transition-all">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Today's Token</p>
                            <h2 className="text-3xl font-black text-primary">124</h2>
                            <div className="mt-2 flex items-center text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit">
                                <HiArrowTrendingUp className="mr-1" /> +12.5%
                            </div>
                        </div>
                        <div className="bg-background p-4 rounded-xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <BsTicketPerforated size={28} />
                        </div>
                    </div>

                    {/* Monthly Token */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-accent transition-all">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Monthly Token</p>
                            <h2 className="text-3xl font-black text-primary">3,842</h2>
                            <p className="mt-2 text-[11px] font-bold text-accent">Total accumulated</p>
                        </div>
                        <div className="bg-background p-4 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                            <BsCalendar3 size={28} />
                        </div>
                    </div>

                    {/* Highest Token User */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-accent transition-all">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Highest Token</p>
                            <h2 className="text-3xl font-black text-primary">892</h2>
                            <div className="mt-2 text-[11px] font-bold text-secondary flex items-center">
                                <BsPersonCircle className="mr-1 text-accent" /> Rahul Sharma
                            </div>
                        </div>
                        <div className="bg-background p-4 rounded-xl text-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <BsTrophy size={28} />
                        </div>
                    </div>

                </div>

                {/* 2. Token Listing Table Section */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-50 flex justify-between items-center bg-white">
                        <h3 className="font-bold text-primary text-lg">Top 10 Token Holders</h3>
                        <button className="text-gray-400 hover:bg-background p-2 rounded-full transition-colors">
                            <FiMoreVertical size={18} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-background text-gray-400 text-[10px] uppercase font-black tracking-widest">
                                    <th className="px-6 py-4">Rank</th>
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4 text-center text-primary">Tokens</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {topUsers.map((user, index) => (
                                    <tr key={user.id} className="hover:bg-background/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-black ${index === 0 ? 'bg-accent/20 text-secondary' : 'bg-background text-gray-500'
                                                }`}>
                                                {user.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-foreground">{user.name}</span>
                                                <span className="text-[11px] text-gray-400 leading-none mt-1">{user.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-block px-3 py-1 bg-background text-primary rounded-md text-xs font-bold">
                                                {user.tokens.toLocaleString()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className={`w-2 h-2 rounded-full mr-2 ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'
                                                    }`} />
                                                <span className="text-xs font-semibold text-gray-600">{user.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-xs font-black text-secondary hover:text-primary uppercase tracking-tight">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;