"use client"

import React, { useState } from 'react';
import { 
  RiBrainLine, RiCommandFill, RiMicLine, RiAddLine, 
  RiCloseLine, RiShareLine, RiHistoryLine, RiUserSearchLine,
  RiDatabase2Line, RiExternalLinkLine, RiArrowRightUpLine
} from "react-icons/ri";

// Define the User Interface for Type Safety
interface NeuralSubject {
  id: number;
  name: string;
  phone: string;
  registered: string;
  status: 'Active' | 'Standby' | 'Encrypted';
}

const UltimateAethelChatbot: React.FC = () => {
  const [activeUser, setActiveUser] = useState<NeuralSubject | null>(null);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const registryData: NeuralSubject[] = [
    { id: 1, name: "Shiva Vora", phone: "+91 98765-43210", registered: "2026-03-20", status: "Active" },
    { id: 2, name: "Arjun Mehta", phone: "+91 91234-56789", registered: "2026-03-22", status: "Standby" },
    { id: 3, name: "Zara Chen", phone: "+1 415-555-0199", registered: "2026-03-25", status: "Encrypted" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 p-8 font-sans selection:bg-indigo-100">
      
      {/* --- LIGHT NEURAL REGISTRY --- */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
            <div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 italic">Aethel <span className="text-primary">/ Registry</span></h1>
                <p className="text-[10px] text-slate-400 tracking-[0.4em] font-bold mt-1 uppercase">Central Node Dashboard</p>
            </div>
            {/* <div className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm w-full md:w-auto focus-within:ring-2 ring-indigo-500/20 transition-all">
                <RiUserSearchLine className="text-slate-400" />
                <input type="text" placeholder="Search subject..." className="bg-transparent border-none outline-none text-sm w-full md:w-64" />
            </div> */}
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-slate-400">Subject</th>
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-slate-400">Communication</th>
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-slate-400">Registration</th>
                <th className="px-8 py-6 text-[11px] uppercase tracking-widest font-bold text-slate-400 text-right">Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {registryData.map((user) => (
                <tr key={user.id} className="group hover:bg-slate-50/80 transition-all duration-300">
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-secondary font-bold text-sm">
                            {user.id.toString().padStart(2, '0')}
                        </div>
                        <span className="font-bold text-slate-800 text-lg group-hover:text-secondary transition-colors">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-7 font-medium text-slate-500">{user.phone}</td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col">
                        <span className="text-slate-700 font-medium">{user.registered}</span>
                    </div>
                  </td>
                  <td className="px-8 py-7 text-right">
                    <button 
                        onClick={() => { setActiveUser(user); setIsChatOpen(true); }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold hover:bg-secondary hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
                    >
                        View 
                        <RiArrowRightUpLine size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- THE WHITE 'ORBITAL' CHATBOT --- */}
      {isChatOpen && activeUser && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/10 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative flex flex-col md:flex-row gap-6 animate-in zoom-in-95 duration-500">
            
            {/* Minimal White Console */}
            <div className="relative w-full max-w-125 md:w-125 h-137.5 bg-white rounded-[3.5rem] p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200">
                <div className="w-full h-full flex flex-col p-6">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-3xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                                <RiBrainLine className="text-white text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-slate-900 font-black text-xl tracking-tight">{activeUser.name}</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Active Link</p>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsChatOpen(false)} 
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
                        >
                            <RiCloseLine size={28} />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide pb-4">
                        <div className="flex flex-col items-start gap-2 max-w-[85%]">
                            <div className="bg-slate-50 p-6 rounded-4xl rounded-tl-none border border-slate-100 text-slate-600 text-[15px] leading-relaxed shadow-sm">
                                <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-tighter mb-1">Aethel AI</p>
                                Systems online. I am now connected to the record for **{activeUser.name}**. How can I assist with this node today?
                            </div>
                        </div>

                        {/* User Bubble Example */}
                        <div className="flex flex-col items-end gap-2 max-w-[85%] ml-auto">
                            <div className="bg-indigo-600 p-6 rounded-4xl rounded-tr-none text-white text-[15px] shadow-lg shadow-indigo-100">
                                Display registered phone number.
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 max-w-[85%]">
                            <div className="bg-white p-5 rounded-4xl border-2 border-dashed border-slate-200 text-slate-500 text-sm">
                                Phone: <span className="text-slate-900 font-mono font-bold">{activeUser.phone}</span>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="pt-6">
                        <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-4xl p-2 focus-within:bg-white focus-within:shadow-xl focus-within:border-indigo-400 transition-all group">
                            <input 
                              type="text" 
                              placeholder="Message Aethel..." 
                              className="w-full bg-transparent border-none outline-none py-4 pl-14 pr-4 text-[15px] text-slate-900 placeholder:text-slate-400" 
                            />
                            <RiCommandFill className="absolute left-6 text-slate-300 text-xl group-focus-within:text-indigo-500" />
                            <button className="w-12 h-12 flex items-center justify-center rounded-[1.4rem] bg-indigo-600 text-white hover:scale-105 transition-all shadow-md shadow-indigo-200">
                                <RiBrainLine size={22} />
                            </button>
                        </div>
                        <p className="text-center text-[8px] text-slate-500 mt-4 uppercase font-black tracking-[0.4em]">
                          End-to-End Encryption Enabled
                        </p>
                    </div>
                </div>
            </div>

            {/* Float-Style Sidebar */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-white/80 backdrop-blur rounded-4xl border border-white shadow-xl self-center h-fit">
                {[RiHistoryLine, RiShareLine, RiAddLine, RiDatabase2Line].map((Icon, i) => (
                    <button key={i} className="p-4 rounded-2xl text-slate-400 hover:text-indigo-600 hover:bg-slate-50 transition-all">
                        <Icon size={22} />
                    </button>
                ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default UltimateAethelChatbot;