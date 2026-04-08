"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import { FiCopy, FiCheck } from "react-icons/fi";

const SalexoChatView = () => {
    const [scriptData, setScriptData] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const getToken = () => {
        if (typeof window === "undefined") return null;
        return localStorage.getItem("customerToken");
    };
    const token = getToken();
    const fetchScript = async () => {
        setLoading(true);

        try {
            const response = await axios.post(
                `${apiUrl}/getscript`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("full response:", response.data);

            if (response?.data?.success) {
                const script = response?.data?.data?.script || "";
                setScriptData(script);
            } else {
                setScriptData("No script found.");
            }
        } catch (error) {
            console.error("Error fetching script:", error);
            setScriptData("Error: Could not retrieve script.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchScript();
    }, []);

    const handleCopy = async () => {
        if (!scriptData) return;

        try {
            await navigator.clipboard.writeText(scriptData);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-6 lg:p-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-6xl mx-auto bg-white border border-slate-200 rounded-[24px] shadow-xl overflow-hidden"
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                    <div>
                        <h1 className="text-lg font-semibold text-slate-800">
                            Customer Portal Script
                        </h1>
                        <p className="text-sm text-slate-500">API script response</p>
                    </div>


                    <button
                        onClick={handleCopy}
                        disabled={!scriptData || loading}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>

                <div className="p-6">
                    <div className="rounded-2xl overflow-hidden border border-slate-200">
                        <div className="flex items-center justify-between bg-slate-800 px-4 py-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                Script
                            </span>
                        </div>

                        <div className="bg-[#0F172A] p-5 overflow-x-auto min-h-[420px]">
                            {loading ? (
                                <div className="text-sm text-slate-300">Loading script...</div>
                            ) : (
                                <pre className="whitespace-pre-wrap break-words text-[13px] leading-6 text-blue-300 font-mono">
                                    <code>{scriptData || "No script available."}</code>
                                </pre>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SalexoChatView;