// "use client";
// import { motion } from 'framer-motion';
// import { LayoutDashboard, FileCode, Users, Settings} from 'lucide-react';

// const SalexoWindowsChat = () => {
//     return (
//         <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 lg:p-10 font-sans">
//             {/* Main Window Container */}
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="w-full max-w-6xl h-[85vh] bg-white/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white flex flex-col overflow-hidden"
//             >
//                 <div className="flex flex-1 overflow-hidden">

//                     {/* 2. SIDEBAR (Primary Color) */}
//                     <aside className="w-64 bg-[#2c446b] flex flex-col p-6 text-white/90">
//                         <div className="flex items-center gap-3 mb-12 px-2">
//                             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#70a0bf] to-[#2e628c] flex items-center justify-center">
//                                 <span className="font-bold text-white text-xs">S</span>
//                             </div>
//                             <h1 className="font-bold tracking-tight text-sm">SALEXO CHAT</h1>
//                         </div>

//                         <nav className="flex-1 space-y-2">
//                             <p className="text-[10px] font-bold text-[#70a0bf] px-3 mb-4 tracking-widest">MENU</p>
//                             {[
//                                 { name: 'Dashboard', icon: <LayoutDashboard size={16} />, active: false },
//                                 { name: 'Script Editor', icon: <FileCode size={16} />, active: false },
//                                 { name: 'Customer View', icon: <Users size={16} />, active: true },
//                                 { name: 'Settings', icon: <Settings size={16} />, active: false },
//                             ].map((item) => (
//                                 <div
//                                     key={item.name}
//                                     className={`flex items-center gap-3 p-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${item.active
//                                             ? 'bg-white/10 border border-white/20 shadow-lg'
//                                             : 'opacity-50 hover:opacity-100 hover:bg-white/5'
//                                         }`}
//                                 >
//                                     {item.icon}
//                                     {item.name}
//                                 </div>
//                             ))}
//                         </nav>

//                         <div className="mt-auto p-4 bg-black/20 rounded-xl border border-white/10">
//                             <div className="flex items-center gap-2">
//                                 <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center">
//                                     <span className="text-[8px]">⚡</span>
//                                 </div>
//                                 <p className="text-[10px] font-bold tracking-tighter">SALEXO PRO</p>
//                             </div>
//                         </div>
//                     </aside>

//                     {/* 3. CHAT CONTENT AREA */}
//                     <main className="flex-1 flex flex-col bg-[#f9fafb]">
//                         <div className="flex-1 p-8 overflow-y-auto space-y-8 scroll-smooth">

//                             {/* Agent Bubble */}
//                             <div className="flex gap-4 items-start max-w-[85%]">
//                                 <div className="flex flex-col items-center gap-1">
//                                     <div className="w-9 h-9 rounded-full bg-[#2e628c] flex items-center justify-center text-white text-[10px] font-bold shadow-md">AI</div>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <p className="text-[10px] font-bold text-gray-400 ml-1">AI</p>
//                                     <div className="bg-[#2c446b] text-white p-5 rounded-2xl rounded-tl-none shadow-sm">
//                                         <p className="text-xs leading-relaxed">
//                                             The customer view script is ready. I have applied the custom logic to handle the dynamic data streams. How would you like to proceed?
//                                         </p>
//                                     </div>
//                                     <p className="text-[9px] font-bold text-[#70a0bf] tracking-widest uppercase">Salexo Flow Engine</p>
//                                 </div>
//                             </div>

//                             {/* User Bubble */}
//                             <div className="flex gap-4 items-start flex-row-reverse max-w-[85%] ml-auto text-right">
//                                 <div className="flex flex-col items-center gap-1">
//                                     <div className="w-9 h-9 rounded-full bg-[#70a0bf] flex items-center justify-center text-white text-[10px] font-bold shadow-md">ME</div>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <p className="text-[10px] font-bold text-gray-400 mr-1">ME</p>
//                                     <div className="bg-white border border-gray-100 p-5 rounded-2xl rounded-tr-none shadow-sm text-gray-700">
//                                         <p className="text-xs leading-relaxed">
//                                             Please show me the configuration for the customer portal.
//                                         </p>
//                                     </div>
//                                     <p className="text-[9px] font-bold text-[#70a0bf] tracking-widest uppercase">Administrator</p>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Input Area */}
//                         <div className="p-6 bg-white border-t border-gray-100">
//                             <div className="max-w-3xl mx-auto relative flex items-center">
//                                 <input
//                                     type="text"
//                                     placeholder="Type your command..."
//                                     className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-5 text-xs outline-none focus:border-[#70a0bf] transition-all"
//                                 />
//                                 <button className="absolute right-2 bg-[#2c446b] text-white p-2 rounded-lg hover:bg-[#2e628c] transition-colors">
//                                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </main>

//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default SalexoWindowsChat;

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    FileCode,
    Users,
    Settings,
} from "lucide-react";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import Markdown from "react-markdown";
import { apiUrl } from "@/config";

type Role = "user" | "ai";

type Message = {
    id?: number;
    role: Role;
    text: string;
    title?: string;
    created_at?: string;
};

const getVisitorId = () => {
    if (typeof window === "undefined") return "";

    let id = localStorage.getItem("visitor_id");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("visitor_id", id);
    }
    return id;
};

const SalexoWindowsChat = () => {
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);
    const [title, setTitle] = useState<string | null>(null);
    const [activeTitle, setActiveTitle] = useState<string | null>(null);
    const [chatTitles, setChatTitles] = useState<string[]>([]);
    const [companyId, setCompanyId] = useState<string>("");
    const [visitorId, setVisitorId] = useState<string>("");

    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const socketRef = useRef<Socket | null>(null);

    const initializeIds = useCallback(() => {
        if (typeof window === "undefined") return;

        const params = new URLSearchParams(window.location.search);
        const companyFromUrl = params.get("company");

        let companyFromStorage = "";
        const customerDataRaw = localStorage.getItem("customerData");

        if (customerDataRaw) {
            try {
                const customerData = JSON.parse(customerDataRaw);
                companyFromStorage = customerData?.company_id || "";
            } catch (error) {
                console.error("customerData parse error:", error);
            }
        }

        const storedCompanyId = localStorage.getItem("company_id") || "";
        const finalCompanyId =
            companyFromUrl || companyFromStorage || storedCompanyId || "";

        if (finalCompanyId) {
            setCompanyId(finalCompanyId);
            localStorage.setItem("company_id", finalCompanyId);

            if (customerDataRaw) {
                try {
                    const customerData = JSON.parse(customerDataRaw);
                    customerData.company_id = finalCompanyId;
                    localStorage.setItem("customerData", JSON.stringify(customerData));
                } catch (error) {
                    console.error("customerData update error:", error);
                }
            }
        } else {
            console.warn("company_id not found in URL, customerData, or localStorage");
        }

        const finalVisitorId = getVisitorId();
        setVisitorId(finalVisitorId);
    }, []);

    useEffect(() => {
        initializeIds();
    }, [initializeIds]);

    const fetchLatestChat = useCallback(async () => {
        try {
            const res = await axios.post(`${apiUrl}/latest-chat`, {
                visitor_id: visitorId,
                company_id: companyId,
            });

            if (res?.data?.success) {
                const latestTitle = res?.data?.title || null;
                setTitle(latestTitle);
                setActiveTitle(latestTitle);
                return latestTitle;
            }

            return null;
        } catch (error) {
            console.error("Latest chat error:", error);
            return null;
        }
    }, [visitorId, companyId]);

    const fetchChatTitles = useCallback(async () => {
        try {
            const res = await axios.post(`${apiUrl}/chat-titles`, {
                visitor_id: visitorId,
                company_id: companyId,
            });

            if (res?.data?.success) {
                setChatTitles(res?.data?.titles || []);
            } else {
                setChatTitles([]);
            }
        } catch (error) {
            console.error("Chat titles error:", error);
            setChatTitles([]);
        }
    }, [visitorId, companyId]);

    const fetchChatsByTitle = useCallback(
        async (selectedTitle: string) => {
            try {
                setLoading(true);

                const res = await axios.post(`${apiUrl}/chat/chats`, {
                    visitor_id: visitorId,
                    company_id: companyId,
                    title: selectedTitle,
                });

                if (res?.data?.success) {
                    setMessages(res?.data?.data || []);
                } else {
                    setMessages([]);
                }
            } catch (error) {
                console.error("Chat messages error:", error);
                setMessages([]);
            } finally {
                setLoading(false);
            }
        },
        [visitorId, companyId]
    );

    useEffect(() => {
        if (!companyId || !visitorId) return;

        const loadInitialData = async () => {
            setLoading(true);
            await fetchChatTitles();
            const latestTitle = await fetchLatestChat();

            if (!latestTitle) {
                setMessages([]);
            }

            setLoading(false);
        };

        loadInitialData();
    }, [companyId, visitorId, fetchChatTitles, fetchLatestChat]);

    useEffect(() => {
        if (!companyId || !visitorId) return;

        const socket = io(apiUrl, {
            transports: ["websocket"],
            auth: {
                visitor_id: visitorId,
                company_id: companyId,
            },
        });

        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("Socket connected:", socket.id);
        });

        socket.on("connect_error", (err) => {
            console.error("Socket connection error:", err);
        });

        socket.on("bot_typing", () => {
            setTyping(true);
        });

        socket.on("bot_message", (data) => {
            setTyping(false);

            if (!title && data?.title) {
                setTitle(data.title);
                setActiveTitle(data.title);
                setChatTitles((prev) =>
                    prev.includes(data.title) ? prev : [data.title, ...prev]
                );
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: data?.message || "",
                    title: data?.title,
                },
            ]);
        });

        return () => {
            socket.disconnect();
        };
    }, [companyId, visitorId, title]);

    useEffect(() => {
        if (activeTitle) {
            fetchChatsByTitle(activeTitle);
        }
    }, [activeTitle, fetchChatsByTitle]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    const sendMessage = () => {
        if (!input.trim()) return;
        if (!socketRef.current) {
            console.error("Socket not connected");
            return;
        }

        const userMessage = input.trim();

        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setInput("");
        setTyping(true);

        socketRef.current.emit("user_message", {
            message: userMessage,
            title,
        });
    };

    const newChat = () => {
        setTitle(null);
        setActiveTitle(null);
        setMessages([]);
        setTyping(false);
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 lg:p-10 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-7xl h-[90vh] bg-white/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white flex flex-col overflow-hidden"
            >
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <aside className="w-64 bg-[#2c446b] flex flex-col p-6 text-white/90">
                        <div className="flex items-center gap-3 mb-8 px-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#70a0bf] to-[#2e628c] flex items-center justify-center">
                                <span className="font-bold text-white text-xs">S</span>
                            </div>
                            <h1 className="font-bold tracking-tight text-sm">SALEXO CHAT</h1>
                        </div>

                        <button
                            onClick={newChat}
                            className="mb-6 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-xs font-semibold hover:bg-white/20 transition"
                        >
                            + New Chat
                        </button>


                        <div className="flex-1 overflow-y-auto pr-1">
                            <p className="text-[10px] font-bold text-[#70a0bf] px-3 mb-4 tracking-widest">
                                CHAT TITLES
                            </p>

                            <div className="space-y-2">
                                {chatTitles.length > 0 ? (
                                    chatTitles.map((chatTitle) => (
                                        <button
                                            key={chatTitle}
                                            onClick={() => {
                                                setActiveTitle(chatTitle);
                                                setTitle(chatTitle);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-xs transition border ${activeTitle === chatTitle
                                                ? "bg-[#70a0bf] text-white border-[#70a0bf]"
                                                : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                                                }`}
                                        >
                                            {chatTitle}
                                        </button>
                                    ))
                                ) : (
                                    <p className="text-[11px] text-white/50 px-3">No chats found</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-black/20 rounded-xl border border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center">
                                    <span className="text-[8px]">⚡</span>
                                </div>
                                <p className="text-[10px] font-bold tracking-tighter">SALEXO PRO</p>
                            </div>
                            <p className="mt-2 text-[10px] text-white/60 break-all">
                                Company ID: {companyId || "N/A"}
                            </p>
                        </div>
                    </aside>

                    {/* Chat Content */}
                    <main className="flex-1 flex flex-col bg-[#f9fafb]">
                        <div className="px-8 py-5 border-b border-gray-200 bg-white flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-[#2c446b]">
                                    {activeTitle || "New Conversation"}
                                </h2>
                                <p className="text-[11px] text-gray-400">
                                    Customer support AI live chat
                                </p>
                            </div>
                        </div>

                        {/* <div className="flex-1 p-8 overflow-y-auto space-y-8 scroll-smooth">
                            {loading ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-sm text-gray-500">Loading chats...</div>
                                </div>
                            ) : messages.length > 0 ? (
                                messages.map((msg, index) => (
                                    <div
                                        key={msg.id ?? index}
                                        className={`flex gap-4 items-start max-w-[85%] ${msg.role === "user"
                                                ? "flex-row-reverse ml-auto text-right"
                                                : ""
                                            }`}
                                    >
                                        <div className="flex flex-col items-center gap-1">
                                            <div
                                                className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md ${msg.role === "user" ? "bg-[#70a0bf]" : "bg-[#2e628c]"
                                                    }`}
                                            >
                                                {msg.role === "user" ? "ME" : "AI"}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className={`text-[10px] font-bold text-gray-400 ${msg.role === "user" ? "mr-1" : "ml-1"
                                                    }`}
                                            >
                                                {msg.role === "user" ? "ME" : "AI"}
                                            </p>

                                            <div
                                                className={
                                                    msg.role === "user"
                                                        ? "bg-white border border-gray-100 p-5 rounded-2xl rounded-tr-none shadow-sm text-gray-700"
                                                        : "bg-[#2c446b] text-white p-5 rounded-2xl rounded-tl-none shadow-sm"
                                                }
                                            >
                                                <div className="text-xs leading-relaxed prose prose-sm max-w-none prose-p:my-0 prose-ul:my-1 prose-li:my-0">
                                                    <Markdown>{msg.text}</Markdown>
                                                </div>
                                            </div>

                                            <p className="text-[9px] font-bold text-[#70a0bf] tracking-widest uppercase">
                                                {msg.role === "user" ? "Administrator" : "Salexo Flow Engine"}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col justify-center items-center h-full text-center">
                                    <div className="w-14 h-14 rounded-full bg-[#2c446b] text-white flex items-center justify-center mb-4 shadow-lg">
                                        AI
                                    </div>
                                    <p className="text-sm font-semibold text-[#2c446b]">
                                        No messages yet
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Start a new conversation with Salexo AI
                                    </p>
                                </div>
                            )}

                            {typing && (
                                <div className="flex gap-4 items-start max-w-[85%]">
                                    <div className="w-9 h-9 rounded-full bg-[#2e628c] flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                                        AI
                                    </div>
                                    <div className="bg-[#2c446b] text-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0.15s]" />
                                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0.3s]" />
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div> */}
                        <div
                            className="flex-1 p-8 overflow-y-auto space-y-8 scroll-smooth"
                            style={{
                                scrollbarWidth: "none",     // Firefox
                                msOverflowStyle: "none",    // IE / Edge
                            }}
                        >
                            <style jsx>{`
    div::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
  `}</style>

                            {loading ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-sm text-gray-500">Loading chats...</div>
                                </div>
                            ) : messages.length > 0 ? (
                                messages.map((msg, index) => (
                                    <div
                                        key={msg.id ?? index}
                                        className={`flex gap-4 items-start max-w-[85%] ${msg.role === "user" ? "flex-row-reverse ml-auto text-right" : ""
                                            }`}
                                    >
                                        <div className="flex flex-col items-center gap-1">
                                            <div
                                                className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md ${msg.role === "user" ? "bg-[#70a0bf]" : "bg-[#2e628c]"
                                                    }`}
                                            >
                                                {msg.role === "user" ? "ME" : "AI"}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className={`text-[10px] font-bold text-gray-400 ${msg.role === "user" ? "mr-1" : "ml-1"
                                                    }`}
                                            >
                                                {msg.role === "user" ? "ME" : "AI"}
                                            </p>

                                            <div
                                                className={
                                                    msg.role === "user"
                                                        ? "bg-white border border-gray-100 p-5 rounded-2xl rounded-tr-none shadow-sm text-gray-700"
                                                        : "bg-[#2c446b] text-white p-5 rounded-2xl rounded-tl-none shadow-sm"
                                                }
                                            >
                                                <div className="text-xs leading-relaxed prose prose-sm max-w-none prose-p:my-0 prose-ul:my-1 prose-li:my-0">
                                                    <Markdown>{msg.text}</Markdown>
                                                </div>
                                            </div>

                                            <p className="text-[9px] font-bold text-[#70a0bf] tracking-widest uppercase">
                                                {msg.role === "user" ? "Administrator" : "Salexo Flow Engine"}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col justify-center items-center h-full text-center">
                                    <div className="w-14 h-14 rounded-full bg-[#2c446b] text-white flex items-center justify-center mb-4 shadow-lg">
                                        AI
                                    </div>
                                    <p className="text-sm font-semibold text-[#2c446b]">No messages yet</p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Start a new conversation with Salexo AI
                                    </p>
                                </div>
                            )}

                            {typing && (
                                <div className="flex gap-4 items-start max-w-[85%]">
                                    <div className="w-9 h-9 rounded-full bg-[#2e628c] flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                                        AI
                                    </div>
                                    <div className="bg-[#2c446b] text-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0.15s]" />
                                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0.3s]" />
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white border-t border-gray-100">
                            <div className="max-w-4xl mx-auto relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                    placeholder="Type your command..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-5 pr-14 text-xs outline-none focus:border-[#70a0bf] transition-all"
                                />
                                <button
                                    onClick={sendMessage}
                                    className="absolute right-2 bg-[#2c446b] text-white p-2 rounded-lg hover:bg-[#2e628c] transition-colors"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </motion.div>
        </div>
    );
};

export default SalexoWindowsChat;