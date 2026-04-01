"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    MessageSquare,
    ChevronDown,
    Sparkles,
    User,
    Bot,
    Plus,
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

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);
    const [title, setTitle] = useState<string | null>(null);
    const [activeTitle, setActiveTitle] = useState<string | null>(null);
    const [chatTitles, setChatTitles] = useState<string[]>([]);
    const [companyId, setCompanyId] = useState<string>("");
    const [visitorId, setVisitorId] = useState<string>("");

    const chatRef = useRef<HTMLDivElement>(null);
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

        const finalCompanyId = companyFromUrl || companyFromStorage || "";

        if (finalCompanyId) {
            setCompanyId(finalCompanyId);

            // optional: alag se bhi store karna ho to
            localStorage.setItem("company_id", finalCompanyId);

            // customerData ke andar bhi update karna ho to
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
            console.warn("company_id not found in URL or customerData");
        }

        const finalVisitorId = getVisitorId();
        setVisitorId(finalVisitorId);
    }, []);
    useEffect(() => {
        initializeIds();
    }, [initializeIds]);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const fetchLatestChat = useCallback(async () => {
        // if (!visitorId || !companyId) {
        //     console.warn("Missing visitorId or companyId for latest-chat API", {
        //         visitorId,
        //         companyId,
        //     });
        //     return null;
        // }

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
        // if (!visitorId || !companyId) {
        //     console.warn("Missing visitorId or companyId for chat-titles API", {
        //         visitorId,
        //         companyId,
        //     });
        //     return;
        // }

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
            // if (!visitorId || !companyId || !selectedTitle) {
            //     console.warn("Missing values for chat/chats API", {
            //         visitorId,
            //         companyId,
            //         selectedTitle,
            //     });
            //     return;
            // }

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
        if (!isOpen) return;
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
    }, [isOpen, companyId, visitorId, fetchChatTitles, fetchLatestChat]);

    useEffect(() => {
        if (!isOpen) return;
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
    }, [isOpen, companyId, visitorId, title]);

    useEffect(() => {
        if (isOpen && activeTitle) {
            fetchChatsByTitle(activeTitle);
        }
    }, [isOpen, activeTitle, fetchChatsByTitle]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing, isOpen]);

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
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-primary/10 backdrop-blur-xs z-998"
                    />
                )}
            </AnimatePresence>

            <div className="fixed bottom-10 right-10 z-999 flex flex-col items-end font-sans">
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="chat-window"
                            ref={chatRef}
                            initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(15px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(15px)" }}
                            transition={{ type: "spring", damping: 22, stiffness: 300 }}
                            className="w-95 h-150 rounded-[2.8rem] shadow-[0_40px_80px_-15px_rgba(44,68,107,0.4)] border border-white/20 overflow-hidden flex flex-col origin-bottom-right relative bg-linear-to-b from-primary via-secondary to-[#1a2a44]"
                        >
                            <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-accent/20 rounded-full blur-[50px] pointer-events-none" />
                            <div className="absolute bottom-[20%] left-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                            <div className="p-7 flex justify-between items-center relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                                        <Sparkles size={22} className="text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-bold text-white tracking-tight">
                                            Salexo AI
                                        </h3>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
                                            <p className="text-[10px] font-bold text-white/60 tracking-[0.15em] uppercase">
                                                Enterprise Live
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={newChat}
                                        className="bg-white/5 hover:bg-white/10 p-2.5 rounded-2xl transition-all border border-white/10 text-white/70"
                                        title="New Chat"
                                    >
                                        <Plus size={18} />
                                    </button>

                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="bg-white/5 hover:bg-white/10 p-2.5 rounded-2xl transition-all border border-white/10 text-white/70"
                                    >
                                        <ChevronDown size={22} />
                                    </button>
                                </div>
                            </div>

                            {chatTitles.length > 0 && (
                                <div className="px-5 pb-3 relative z-10">
                                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                                        {chatTitles.map((chatTitle) => (
                                            <button
                                                key={chatTitle}
                                                onClick={() => {
                                                    setActiveTitle(chatTitle);
                                                    setTitle(chatTitle);
                                                }}
                                                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${activeTitle === chatTitle
                                                    ? "bg-accent text-white border-accent"
                                                    : "bg-white/10 text-white/70 border-white/10"
                                                    }`}
                                            >
                                                {chatTitle}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div
                                className="flex-1 p-6 space-y-4 overflow-y-auto relative z-10"
                                style={{
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                                {loading ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="flex items-center gap-3 text-white/70">
                                            <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                            <span className="text-sm">Loading chats...</span>
                                        </div>
                                    </div>
                                ) : messages.length > 0 ? (
                                    messages.map((msg, index) => (
                                        <div
                                            key={msg.id ?? index}
                                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-4 rounded-[1.4rem] text-[14px] leading-relaxed shadow-lg ${msg.role === "user"
                                                    ? "bg-accent text-white rounded-tr-none"
                                                    : "bg-white/10 backdrop-blur-md border border-white/10 text-white/90 rounded-tl-none"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2 mb-2 text-[11px] opacity-70">
                                                    {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                                                    <span>{msg.role === "user" ? "You" : "AI"}</span>
                                                </div>
                                                <Markdown>{msg.text}</Markdown>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center flex-1 gap-4 py-20">
                                        {/* Animated Pulsing Circles */}
                                        <div className="flex items-center gap-2">
                                            {[0, 1, 2].map((index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0.3, y: 0 }}
                                                    animate={{
                                                        opacity: [0.3, 1, 0.3],
                                                        y: [0, -8, 0],
                                                        scale: [1, 1.2, 1]
                                                    }}
                                                    transition={{
                                                        duration: 1.2,
                                                        repeat: Infinity,
                                                        delay: index * 0.2,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="w-3 h-3 rounded-full bg-linear-to-t from-accent to-white shadow-[0_0_15px_rgba(112,160,191,0.5)]"
                                                />
                                            ))}
                                        </div>

                                        {/* Elegant Loading Text */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase mt-2"
                                        >
                                            Synchronizing Salexo Intelligence
                                        </motion.p>
                                    </div>
                                )}

                                {typing && (
                                    <div className="flex gap-2 items-center px-4 py-2 bg-white/5 w-fit rounded-full border border-white/5">
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            <div className="p-7 pt-2 relative z-10">
                                <div className="flex items-center bg-white/10 backdrop-blur-2xl rounded-[1.8rem] px-5 py-4 border border-white/10 focus-within:border-white/30 transition-all shadow-2xl">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                        placeholder="Type a message..."
                                        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className="text-accent hover:text-white transition-colors"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                                <p className="text-center text-[9px] text-white/30 mt-4 tracking-widest uppercase font-semibold">
                                    Security encrypted by Salexo Cloud
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            key="chat-button"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(true)}
                            className="w-16 h-16 bg-linear-to-br from-primary via-secondary to-accent rounded-2xl shadow-[0_20px_40px_rgba(44,68,107,0.4)] flex items-center justify-center text-white border border-white/20 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <MessageSquare size={30} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}