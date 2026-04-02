"use client"

import Link from 'next/link';
import  { useEffect, useState } from 'react';
import { IoPowerOutline, IoArrowBackOutline, IoFingerPrintOutline } from "react-icons/io5";

const AdminLogoutLight = () => {
  const [progress, setProgress] = useState(0);

  // Simulate secure data wipe
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f0f4f8] py-10 px-6 font-sans relative overflow-hidden">
      
      {/* --- SOFT ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft colorful blobs for a "foreign SaaS" feel */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent opacity-10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-secondary opacity-5 rounded-full blur-[100px]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2c446b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
        
        {/* --- THE LOGOUT CARD --- */}
        <div className="relative w-full bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-10 md:p-10 shadow-[0_40px_80px_rgba(44,68,107,0.1)] text-center">
          
          {/* Header Icon */}
          <div className="relative w-24 h-24 mx-auto mb-10">
            {/* Pulsing Outer Ring */}
            <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping"></div>
            <div className="relative w-full h-full bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
              <IoPowerOutline className="text-4xl text-primary" />
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-black text-primary tracking-tighter uppercase italic">
              Session <span className="text-accent not-italic">Closed.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-3 font-medium">
              Your administrative session has been successfully <br /> de-authenticated and secured.
            </p>
          </div>

          {/* --- PROGRESS HUD --- */}
          <div className="bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 mb-5">
             <div className="flex justify-between items-center mb-4 px-1">
                <div className="flex items-center gap-2">
                    <IoFingerPrintOutline className="text-acent" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary">Wiping Trace Data</span>
                </div>
                <span className="text-xs font-mono font-bold text-secondary">{progress}%</span>
             </div>
             {/* Custom Progress Bar */}
             <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-primary via-secondary to-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
             </div>
          </div>

          {/* --- BUTTON TIER --- */}
          <div className="flex flex-col gap-3">
             <Link href="/superadmin/login" className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98]">
                Authenticate Again
             </Link>
             <Link href="/" className="w-full flex items-center justify-center gap-2 text-gray-400 py-4 rounded-2xl font-bold text-xs hover:text-primary transition-all">
                <IoArrowBackOutline />
                Return to Homepage
             </Link>
          </div>

        </div>

        

      </div>
    </div>
  );
};

export default AdminLogoutLight;