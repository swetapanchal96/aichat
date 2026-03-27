"use client"

import React from 'react';
import { RiInstagramFill, RiWhatsappFill, RiMessengerFill, RiArrowRightUpLine, RiCheckLine, RiSparkling2Line } from "react-icons/ri";

const SalexoFlowHero: React.FC = () => {
  
  // Array of messages for the infinite scroll
  const chatMessages = [
    { sender: "User", text: "How much is the shipping to Jaipur?", color: "bg-slate-100" },
    { sender: "AI", text: "Free shipping on orders over ₹999! 🚚", color: "bg-primary text-white" },
    { sender: "User", text: "Do you have this in Blue?", color: "bg-slate-100" },
    { sender: "AI", text: "Yes! 4 items left in Blue. Check it out!", color: "bg-secondary text-white" },
    { sender: "User", text: "Can I get a discount code?", color: "bg-slate-100" },
    { sender: "AI", text: "Use code SALEXO10 for 10% off! ✨", color: "bg-accent text-white" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      
      {/* --- CINEMATIC BACKGROUND (BEYOND FLAT COLORS) --- */}
      <div className="absolute inset-0 z-0">
        {/* Replace with a high-end abstract tech image URL */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] 
          bg-cover bg-center opacity-10 grayscale brightness-150"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-white" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(112,160,191,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT: IMPACT TEXT --- */}
          <div className="lg:col-span-6 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-xl shadow-primary/5 border border-slate-100">
              <RiSparkling2Line className="text-accent animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Automate your Growth</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-primary leading-[0.85] tracking-tighter italic">
              Results <br />
              <span className="text-secondary italic">On Autopilot.</span>
            </h1>

            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium border-l-4 border-accent pl-6">
                Salexo isn't just a chatbot. It's an **intelligent ecosystem** that engages your customers 24/7 across every social platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button className="group relative w-full sm:w-auto overflow-hidden bg-primary px-12 py-6 rounded-4xl text-white font-black uppercase tracking-widest text-[13px] shadow-2xl shadow-primary/30 transition-all active:scale-95">
                <span className="relative z-10 flex items-center gap-3">
                  Start Free Trial <RiArrowRightUpLine size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-secondary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            </div>
          </div>

          {/* --- RIGHT: THE AUTOMATIC SCROLLING CHAT --- */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* The Floating UI Container */}
            <div className="relative w-full max-w-105 aspect-4/5 bg-white rounded-[3.5rem] shadow-[0_60px_100px_-20px_rgba(44,68,107,0.18)] border border-slate-100 p-8 overflow-hidden">
               
               {/* Header of Chat Mockup */}
               <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-30 p-8 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                      <RiInstagramFill size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-sm uppercase tracking-tight">Salexo AI Agent</h4>
                      <p className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">Active Link</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
               </div>

               {/* --- THE INFINITE SCROLL AREA --- */}
               <div className="mt-24 h-full relative overflow-hidden flex flex-col">
                  {/* We duplicate the list twice to create the seamless infinite effect */}
                  <div className="animate-vertical-scroll space-y-6 flex flex-col">
                    {[...chatMessages, ...chatMessages].map((msg, idx) => (
                      <div key={idx} className={`p-5 rounded-3xl text-sm font-semibold max-w-[85%] ${msg.color} ${msg.sender === 'AI' ? 'ml-auto rounded-tr-none shadow-lg' : 'rounded-tl-none border border-slate-100'}`}>
                        <div className="text-[9px] uppercase font-black opacity-50 mb-1">{msg.sender}</div>
                        {msg.text}
                      </div>
                    ))}
                  </div>
               </div>

               {/* Overlay Gradient to hide scroll edges */}
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/80 to-transparent z-20" />
            </div>

            {/* Floating Platform Icons */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40">
                <ChannelIcon icon={<RiInstagramFill />} color="bg-gradient-to-tr from-pink-500 to-orange-400" />
                <ChannelIcon icon={<RiWhatsappFill />} color="bg-emerald-500" />
                <ChannelIcon icon={<RiMessengerFill />} color="bg-blue-600" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ChannelIcon = ({ icon, color }: { icon: React.ReactNode, color: string }) => (
  <div className={`${color} w-16 h-16 rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl hover:scale-110 transition-transform cursor-pointer border-4 border-white`}>
    {icon}
  </div>
);

export default SalexoFlowHero;