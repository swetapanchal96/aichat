"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  RiBrainLine,
  RiAddLine,
  RiCloseLine,
  RiShareLine,
  RiHistoryLine,
  RiDatabase2Line,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { apiUrl } from "@/config";

interface ChatMessage {
  id: number;
  role: "ai" | "user";
  text: string;
  created_at: string;
}

interface ChatSession {
  id: string;
  title: string;
  date: string;
  phone: string;
  registered_at: string;
  chats: ChatMessage[];
}

const UltimateAethelChatbot: React.FC = () => {
  const [chatList, setChatList] = useState<ChatSession[]>([]);
  const [activeUser, setActiveUser] = useState<ChatSession | null>(null);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchChatData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("customerToken");

      const res = await axios.post(
        `${apiUrl}/chat/getchatdata`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res?.data?.success) {
        setChatList(res?.data?.res || []);
      } else {
        setChatList([]);
      }
    } catch (error) {
      console.error("Chat data fetch error:", error);
      setChatList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatData();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-accent/10 text-primary p-8 font-sans selection:bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-primary italic">
              Aethel <span className="text-primary">/ Registry</span>
            </h1>
            <p className="text-[10px] text-secondary tracking-[0.4em] font-bold mt-1 uppercase">
              Central Node Dashboard
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-accent/30 shadow-[0_20px_60px_-15px_rgba(44,68,107,0.10)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-accent/10 border-b border-accent/20">
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-secondary">
                  Title
                </th>
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-secondary">
                  Date
                </th>
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-secondary">
                  Phone
                </th>
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-secondary text-right">
                  Access
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-accent/10">
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-8 py-10 text-center text-secondary font-medium"
                  >
                    Loading...
                  </td>
                </tr>
              ) : chatList.length > 0 ? (
                chatList.map((item, index) => (
                  <tr
                    key={`${item.id}-${index}`}
                    className="group hover:bg-accent/10 transition-all duration-300"
                  >
                    <td className="px-8 py-7">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-secondary font-bold text-sm">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>
                        <span className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">
                          {item.title || "-"}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-7 font-medium text-secondary">
                      {formatDate(item.date)}
                    </td>

                    <td className="px-8 py-7 font-medium text-secondary">
                      {item.phone || "-"}
                    </td>

                    <td className="px-8 py-7 text-right">
                      <button
                        onClick={() => {
                          setActiveUser(item);
                          setIsChatOpen(true);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white text-xs font-bold hover:bg-secondary hover:shadow-lg transition-all active:scale-95"
                      >
                        View
                        <RiArrowRightUpLine size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-8 py-10 text-center text-secondary font-medium"
                  >
                    No chat data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isChatOpen && activeUser && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-primary/10 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative flex flex-col md:flex-row gap-6 animate-in zoom-in-95 duration-500">
            <div className="relative w-full max-w-125 md:w-125 h-125 bg-white rounded-[3.5rem] p-4 shadow-[0_40px_100px_-20px_rgba(44,68,107,0.18)] border border-accent/30">
              <div className="w-full h-full flex flex-col p-6">
                <div className="flex items-center justify-between pb-6 border-b border-accent/20 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-3xl bg-primary flex items-center justify-center shadow-lg">
                      <RiBrainLine className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-primary font-black text-xl tracking-tight">
                        {activeUser.title}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <p className="text-[10px] text-secondary uppercase font-black tracking-widest">
                          {activeUser.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent/10 text-secondary hover:text-primary hover:bg-accent/20 transition-all"
                  >
                    <RiCloseLine size={28} />
                  </button>
                </div>

                <div
                  className="flex-1 overflow-y-auto space-y-4 pb-4 px-2"
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

                  {activeUser.chats && activeUser.chats.length > 0 ? (
                    activeUser.chats.map((chat) => (
                      <div
                        key={chat.id}
                        className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"
                          }`}
                      >
                        <div
                          className={`max-w-[80%] px-5 py-4 rounded-3xl shadow-sm ${chat.role === "ai"
                            ? "bg-accent/10 text-primary rounded-tl-none border border-accent/20"
                            : "bg-secondary text-white rounded-tr-none"
                            }`}
                        >
                          <p
                            className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${chat.role === "ai"
                              ? "text-secondary"
                              : "text-accent"
                              }`}
                          >
                            {chat.role === "ai" ? "AI" : "User"}
                          </p>
                          <p className="text-[15px] leading-relaxed wrap-break-word">
                            {chat.text}
                          </p>
                          <p
                            className={`text-[10px] mt-2 ${chat.role === "ai"
                              ? "text-secondary"
                              : "text-accent/80"
                              }`}
                          >
                            {formatDate(chat.created_at)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-secondary py-10">
                      No chats found
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-3 p-3 bg-white/80 backdrop-blur rounded-4xl border border-accent/20 shadow-xl self-center h-fit">
              {[RiHistoryLine, RiShareLine, RiAddLine, RiDatabase2Line].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="p-4 rounded-2xl text-secondary hover:text-primary hover:bg-accent/10 transition-all"
                  >
                    <Icon size={22} />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UltimateAethelChatbot;