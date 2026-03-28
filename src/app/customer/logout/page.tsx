"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowForwardOutline, IoFingerPrintOutline, IoShieldCheckmarkSharp, IoPlanetOutline, IoRemoveOutline } from "react-icons/io5";



const VoidFragmentLogout = () => {

  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#030508] py-20 px-6 font-sans relative overflow-hidden">
      
      {/* --- CINEMATIC AMBIENCE --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive Offset Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-primary opacity-20 rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] bg-accent opacity-10 rounded-full blur-[140px]"></div>
        
        {/* Vertical Scan Lines (The "Digital Rain" Texture) */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#888_1px,transparent_1px)] bg-size-[80px_100%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-275 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* --- LEFT SIDE: THE TYPOGRAPHIC STATEMENT --- */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <IoShieldCheckmarkSharp className="text-accent animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/60">Node Disconnect Successful</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            Exit <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-white to-secondary italic">Protocol.</span>
          </h1>
          
          <p className="text-gray-500 text-lg font-light max-w-md leading-relaxed">
            Your biometric signature has been revoked from the <span className="text-white border-b border-accent/40">Chatsystem</span>. All local cache has been vaporized.
          </p>
        </div>

        {/* --- RIGHT SIDE: THE 'FRAGMENT' CARD --- */}
        <div className="relative w-full max-w-112.5 group">
          {/* Background Decorative Frame */}
          <div className="absolute -inset-4 border border-white/5 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-transform duration-1000"></div>
          
          {/* Main Card */}
          <div className="relative bg-[#0d1117]/60 backdrop-blur-3xl rounded-[3.5rem] p-10 md:p-14 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Unique "Data-Corner" Indicator */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-linear-to-l from-accent to-transparent"></div>
            
            <div className="flex flex-col items-center">
              {/* Security Visual */}
              <div className="relative w-28 h-28 mb-12">
                <div className="absolute inset-0 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
                <div className="absolute inset-2 border border-secondary/20 rounded-full animate-[spin_10s_linear_reverse_infinite]"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <IoPlanetOutline className="text-5xl text-white opacity-90" />
                </div>
              </div>

              <div className="space-y-4 mb-12 w-full">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 font-bold border-b border-white/5 pb-2">
                  <span>Identity Status</span>
                  <span className="text-rose-500">Offline</span>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 font-bold border-b border-white/5 pb-2">
                  <span>Encryption Key</span>
                  <span className="text-accent">Destroyed</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full space-y-4">
                <Link href='/customer/login' className="w-full group bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                  Re-Authenticate
                  <IoArrowForwardOutline className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button onClick={() => router.push('/')}  className="w-full cursor-pointer py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] text-gray-600 border border-white/5 hover:text-white hover:bg-white/5 transition-all">
                  Exit Portal
                </button>
              </div>
            </div>
          </div>

          {/* Floating Micro-Fragment */}
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl rotate-12 flex items-center justify-center">
             <IoFingerPrintOutline className="text-accent opacity-40 text-2xl" />
          </div>
        </div>
      </div>

      {/* --- THE 'FOREIGN' TECH FOOTER --- */}
      

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default VoidFragmentLogout;