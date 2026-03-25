"use client"

import React, { useState } from 'react';
import { IoShieldCheckmarkSharp, IoPersonOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center  overflow-hidden p-4 md:p-8">
      <div className="flex w-full max-w-5xl h-full max-h-162.5 bg-white rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        
        {/* Left Side: Visual/Branding (Hidden on mobile) */}
        <div className="hidden md:flex w-1/2 bg-linear-to-br from-primary via-secondary to-accent p-12 flex-col justify-between text-white relative">
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/20">
                <IoShieldCheckmarkSharp className="text-2xl text-accent" />
              </div>
              <span className="font-bold tracking-widest text-sm opacity-80">SECURE NODE</span>
            </div>
            
            <h2 className="text-4xl font-extrabold leading-[1.1]">
              Management <br /> 
              <span className="text-accent">Dashboard.</span>
            </h2>
            <p className="mt-6 text-white/70 font-light text-base leading-relaxed max-w-xs">
              Access the core administrative tools to monitor system performance and user activity.
            </p>
          </div>

          
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 px-8 py-10 md:px-14 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-primary tracking-tight">Admin Login</h1>
            <p className="text-gray-400 text-sm mt-2">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Username */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-secondary uppercase ml-1">Email Address</label>
              <div className="relative group">
                <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-secondary transition-colors" />
                <input 
                  type="text" 
                  placeholder="abc@gmail.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent focus:bg-white transition-all text-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-secondary uppercase ml-1">Password</label>
              <div className="relative group">
                <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-secondary transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3.5 pl-12 pr-12 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent focus:bg-white transition-all text-primary"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary"
                >
                  {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-1 pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="accent-secondary w-4 h-4 cursor-pointer" />
                <span className="text-gray-500 group-hover:text-secondary">Remember me</span>
              </label>
              <a href="#" className="font-bold text-secondary hover:text-accent transition-colors">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.97] mt-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">Authorized Access Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;