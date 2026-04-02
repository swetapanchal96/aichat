"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
    BsChatLeftDots,
    BsCalendar3,
    BsTicketPerforated,
    BsArrowUpRight,
    BsLightningCharge,
} from "react-icons/bs";
import { apiUrl } from "@/config";

type UserTokenStats = {
    company_id: string;
    total_chats: number;
    monthly_chats: number;
    total_tokens: number;
    monthly_tokens: number;
    month: string;
};

const DashboardStats = () => {
    const [statsData, setStatsData] = useState<UserTokenStats | null>(null);
    const [loading, setLoading] = useState(true);

    const formatNumber = (num: number | string | undefined) => {
        if (num === undefined || num === null) return "0";
        return Number(num).toLocaleString("en-IN");
    };

    const getToken = () => {
        return localStorage.getItem("customerToken") || "";
    };
    const token = getToken();
    const fetchUserStats = async () => {
        try {
            setLoading(true);

            const res = await axios.post(`${apiUrl}/reg/getusertokens`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res?.data?.success) {
                setStatsData(res.data.data);
            } else {
                console.error(res?.data?.message || "Failed to fetch stats");
            }
        } catch (error: any) {
            console.error(
                "Get user token stats error:",
                error?.response?.data || error.message
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserStats();
    }, []);

    const stats = [
        {
            label: "Total Chats",
            val: loading ? "..." : formatNumber(statsData?.total_chats),
            icon: BsChatLeftDots,
            trend: "All Time",
            color: "bg-primary",
        },
        {
            label: "Monthly Chats",
            val: loading ? "..." : formatNumber(statsData?.monthly_chats),
            icon: BsCalendar3,
            trend: statsData?.month || "Current",
            color: "bg-secondary",
        },
        {
            label: "Total Tokens",
            val: loading ? "..." : formatNumber(statsData?.total_tokens),
            icon: BsTicketPerforated,
            trend: "Lifetime",
            color: "bg-accent",
        },
        {
            label: "Monthly Tokens",
            val: loading ? "..." : formatNumber(statsData?.monthly_tokens),
            icon: BsLightningCharge,
            trend: statsData?.month || "Current",
            color: "bg-primary",
        },
    ];

    return (
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((card, idx) => (
                    <div
                        key={idx}
                        style={{
                            animationDelay: `${idx * 150}ms`,
                            animationFillMode: "both",
                        }}
                        className="group relative animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-1000 ease-out"
                    >
                        <div className="absolute inset-0 rounded-4xl transition-all duration-700 group-hover:after:scale-100 group-hover:after:opacity-100 after:absolute after:inset-0 after:rounded-4xl after:border-2 after:border-primary after:opacity-0 after:scale-90 after:transition-all after:duration-700 after:ease-out" />

                        <div className="relative h-full bg-white p-7 rounded-4xl shadow-[0_25px_60px_-15px_rgba(44,68,107,0.15)] border border-gray-50 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(44,68,107,0.25)] hover:-translate-y-2">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />

                            <div className="relative z-10 flex justify-between items-start">
                                <div className="w-13 h-13 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <card.icon size={24} />
                                </div>

                                <div className="flex items-center text-[10px] font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full tracking-widest uppercase transition-all duration-500 group-hover:bg-green-500 group-hover:text-white">
                                    {(card.trend.includes("%") || card.trend === "Lifetime") && (
                                        <BsArrowUpRight className="mr-1 stroke-1" />
                                    )}
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

            {statsData?.company_id && !loading && (
                <div className="text-center text-sm text-gray-500 mt-2">
                    Company ID:{" "}
                    <span className="font-semibold text-primary">
                        {statsData.company_id}
                    </span>
                </div>
            )}
        </div>
    );
};

export default DashboardStats;