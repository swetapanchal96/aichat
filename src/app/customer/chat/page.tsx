"use client"

import React, { useState } from 'react';
import { RiBrainLine, RiCommandFill, RiMicLine, RiAddLine, RiCloseLine, RiShareLine, RiHistoryLine } from "react-icons/ri";

const UltimateAethelChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to get current system time
  const getSystemTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 font-sans group">
      
      {/* --- THE 'NEURAL CORE' TRIGGER --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-20 h-20 flex items-center justify-center cursor-pointer transition-all duration-700 hover:rotate-90"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,#2c446b_0%,#05070a_70%)] rounded-full animate-[pulse_6s_infinite] opacity-80"></div>
          <div className="absolute inset-1 bg-[radial-gradient(circle,#70a0bf_0%,#05070a_60%)] rounded-full animate-[pulse_4s_infinite] opacity-60"></div>
          
          <div className="absolute inset-4 bg-[#0d1424] rounded-full border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(112,160,191,0.3)]">
            <RiBrainLine className="text-accent text-3xl opacity-80" />
            <svg className="absolute inset-0 w-full h-full p-2 animate-[spin_20s_linear_infinite]" viewBox="0 0 36 36">
              <path className="text-primary/30" strokeDasharray="5, 5" stroke="currentColor" strokeWidth="1" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-accent" strokeDasharray="50, 100" stroke="currentColor" strokeWidth="1" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-accent uppercase tracking-[0.3em] font-black opacity-0 group-hover:opacity-100 transition-opacity">AETHEL</p>
        </button>
      )}

      {/* --- THE 'ORBITAL COMMAND NODE' INTERFACE --- */}
      {isOpen && (
        <div className="relative animate-in fade-in zoom-in duration-500 ease-out flex flex-col items-end gap-5">
          
          {/* Side-Bar Utility */}
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 flex flex-col gap-3 py-4 px-2 bg-[#05070a] rounded-xl border border-white/5 backdrop-blur-3xl shadow-2xl">
            {[RiHistoryLine, RiShareLine, RiAddLine].map((Icon, i) => (
                <button key={i} className="p-2.5 rounded-lg text-gray-700 hover:text-accent hover:bg-white/5 transition-colors">
                    <Icon size={18} />
                </button>
            ))}
          </div>

          {/* Main Console */}
          <div className="relative w-100 h-137.5 bg-[#0d1424] border border-white/10 rounded-[3rem] p-3 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            
            <div className="relative w-full h-full bg-[#05070a] rounded-[2.5rem] p-6 flex flex-col overflow-hidden border border-white/5">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                {/* Header */}
                <div className="relative z-10 p-2 flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[radial-gradient(circle,#2c446b_0%,#05070a_70%)] flex items-center justify-center border border-accent/30 shadow-lg shadow-primary/30 relative overflow-hidden">
                            <RiBrainLine className="text-white text-2xl relative z-10" />
                            <div className="absolute inset-0 bg-accent opacity-10 animate-pulse"></div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold tracking-tight text-base">AETHEL / Neural v1.0</h3>
                            <div className="flex items-center gap-1.5 pt-1">
                                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
                                <p className="text-[10px] text-emerald-600 uppercase tracking-widest font-black text-[8px]">Core Node Active</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:border-accent/50 hover:bg-primary/20 text-gray-600 hover:text-white">
                        <RiCloseLine size={24} />
                    </button>
                </div>

                {/* Message Space */}
                <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-hide pb-4">
                    
                    {/* Bot Message */}
                    <div className="flex flex-col items-start gap-1.5 max-w-[90%]">
                        <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/5 text-gray-300 text-sm leading-relaxed relative">
                            Greetings, Shiva. Biometric check passed. Aethel initialized. What protocols shall we address?
                            <div className="absolute -left-0.5 top-6 w-0.75 h-8 bg-accent rounded-full"></div>
                        </div>
                        <span className="text-[9px] text-gray-600 font-mono tracking-tighter ml-2 uppercase">Aethel • {getSystemTime()}</span>
                    </div>

                    {/* User Message */}
                    <div className="flex flex-col items-end gap-1.5 max-w-[90%] ml-auto">
                        <div className="bg-gradient-to-br from-primary to-secondary text-white p-5 rounded-3xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-primary/20">
                            Check the system status for the Ahmedabad node.
                        </div>
                        <span className="text-[9px] text-gray-600 font-mono tracking-tighter mr-2 uppercase">You • {getSystemTime()}</span>
                    </div>

                    {/* Bot "Thinking" State */}
                    <div className="flex flex-col items-start gap-1.5 max-w-[90%]">
                        <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/5 text-gray-300 text-sm leading-relaxed relative">
                           Retrieving log data from <span className="text-accent font-bold">Ahmedabad_Node_Alpha</span>...
                           <div className="flex items-center gap-1.5 pt-3">
                                {[0.2, 0.4, 0.6].map(d => (
                                    <div key={d} className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: `pulse 1.5s infinite ${d}s` }}></div>
                                ))}
                           </div>
                        </div>
                        <span className="text-[9px] text-gray-600 font-mono tracking-tighter ml-2 uppercase">Syncing...</span>
                    </div>
                </div>

                {/* Input Area */}
                <div className="relative mt-auto pt-6 border-t border-white/5 bg-gradient-to-t from-[#05070a] to-transparent">
                    <div className="relative flex items-center bg-[#0d1424] border-2 border-white/10 rounded-2xl transition-all focus-within:border-accent focus-within:bg-[#0d1424]">
                        <input type="text" placeholder="Enter Neural Command..." className="w-full bg-transparent border-none outline-none py-5 pl-14 pr-16 text-sm text-white placeholder:text-gray-600 font-mono tracking-tight" />
                        <RiCommandFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-2xl group-focus-within:text-accent" />
                        
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                           <button className="p-2 text-gray-600 hover:text-white">
                             <RiMicLine size={20} />
                           </button>
                           <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent text-black hover:scale-105 transition-transform">
                             <RiBrainLine size={20} />
                           </button>
                        </div>
                    </div>
                    <p className="text-center text-[7px] text-gray-700 mt-5 uppercase tracking-[0.5em] font-black">
                      [ NODE-A / 23.0225° N, 72.5714° E ]
                    </p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UltimateAethelChatbot;