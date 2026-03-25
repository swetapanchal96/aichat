"use client"

import Link from 'next/link';
import React, { useState } from 'react';

import { IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline, IoArrowForwardOutline, IoDiamondOutline, IoPersonOutline } from "react-icons/io5";

const UltimateCustomerRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'paid'>('free');

  return (
    // Single screen, no scrolling, matching the "Ecosystem" aesthetic
    <div className="min-h-screen w-full flex items-center justify-center bg-[#05070a] overflow-hidden font-sans relative">
      
      {/* --- BACKGROUND ELEMENTS (Matched to Ecosystem Theme) --- */}
      <div className="absolute top-[-30%] right-[-20%] w-[90vw] h-[90vw] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-30 animate-[pulse_10s_infinite]"></div>
      <div className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_70%)] opacity-20"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 Blackboard%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative  z-10 w-full max-w-325 flex flex-col items-center justify-center px-6 lg:px-20 ">
        
        {/* --- GEOMETRIC FORM CARD --- */}
        <div className="my-5 relative w-full max-w-162.5 bg-[#0d1117]/80 border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 md:p-8 shadow-[0_0_100px_rgba(0,0,0,0.6)]">
          
          {/* Subtle Glow Effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-primary/50 to-accent/50 rounded-[3rem] blur opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-7 text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md">
                 <IoPersonOutline className="text-accent text-lg" />
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Create New Identity</span>
              </div>
              <h1 className="text-4xl font-black text-white tracking-tighter leading-tight">
                Register for <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">Chatsystem Access.</span>
              </h1>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* --- TIER 1: CREDENTIALS (Layered Layout) --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Email */}
                <div className="relative group">
                  <input type="email" id="email" placeholder=" "
                    className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-accent transition-all placeholder-transparent font-medium"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent font-medium uppercase tracking-widest">
                    Email Address
                  </label>
                  <IoMailOutline className="absolute right-0 top-3 text-gray-600 peer-focus:text-accent transition-colors" />
                </div>

                {/* Password */}
                <div className="relative group">
                  <input type={showPassword ? "text" : "password"} id="password" placeholder=" "
                    className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-accent transition-all placeholder-transparent font-medium pr-12"
                  />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent font-medium uppercase tracking-widest">
                    Define Access Key
                  </label>
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-3 text-gray-600 hover:text-white transition-colors">
                    {showPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
                  </button>
                </div>
              </div>

              {/* --- TIER 2: PLAN SELECTION (Tactile Cards) --- */}
              <div className="space-y-6">
                <label className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em] ml-2">Choose Service Level</label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Free Plan Card */}
                    <div 
                      onClick={() => setSelectedPlan('free')}
                      className={`relative cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${selectedPlan === 'free' ? 'bg-accent/10 border-accent shadow-lg shadow-accent/20' : 'bg-white/5 border-white/10 hover:border-gray-600'}`}>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Core Access</span>
                            <div className={`w-4 h-4 rounded-full border-2 ${selectedPlan === 'free' ? 'border-accent bg-accent' : 'border-gray-700'}`}></div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Free <span className="text-xs text-gray-500 font-light">(Starter tier)</span></h4>
                        <p className="text-xs text-gray-500 font-light">Includes foundational analytics and unified dashboard access.</p>
                    </div>

                    {/* Paid Plan Card */}
                    <div 
                      onClick={() => setSelectedPlan('paid')}
                      className={`relative cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${selectedPlan === 'paid' ? 'bg-primary/20 border-accent shadow-lg shadow-primary/40' : 'bg-white/5 border-white/10 hover:border-gray-600'}`}>
                        <IoDiamondOutline className="absolute -top-2.5 -right-2.5 text-4xl text-accent rotate-12 opacity-30" />
                        <div className="flex justify-between items-center mb-4 relative z-10">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Enterprise Access</span>
                            <div className={`w-4 h-4 rounded-full border-2 ${selectedPlan === 'paid' ? 'border-accent bg-accent' : 'border-gray-700'}`}></div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 relative z-10">Premium <span className="text-xs text-gray-500 font-light">($49/mo)</span></h4>
                        <p className="text-xs text-gray-500 font-light relative z-10">Unlocks AI insights, live support, and API integrations.</p>
                    </div>
                </div>
              </div>

              {/* --- TIER 3: ACTION & SIGN IN --- */}
              <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 border-t border-white/5">
                <button type="submit" className="w-full md:w-auto relative cursor-pointer overflow-hidden group/btn bg-white py-4 px-12 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95">
                  <div className="absolute inset-0 bg-linear-to-r from-primary to-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 text-black group-hover/btn:text-white font-black uppercase tracking-[0.2em] text-xs transition-colors duration-500">Register Access</span>
                  <IoArrowForwardOutline className="relative z-10 text-black group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-500" />
                </button>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">Already have an active key?</p>
                    <Link href="/customer/login" className="group relative text-white text-xs font-bold uppercase tracking-[0.2em] transition-all overflow-hidden">
                        <span className="block pb-1">Authenticate / Sign In</span>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UltimateCustomerRegister;