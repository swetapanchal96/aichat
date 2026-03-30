// "use client"

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline, IoArrowForwardOutline, IoFingerPrintOutline, IoSparklesOutline } from "react-icons/io5";

// const UltimateCustomerLogin = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-[#05070a] overflow-hidden font-sans relative">

//       {/* --- CRAFTED BACKGROUND ELEMENTS --- */}
//       <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-40 animate-[pulse_8s_infinite]"></div>
//       <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_70%)] opacity-30"></div>

//       {/* SVG Noise Overlay */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

//       <div className="relative z-10 w-full max-w-300 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">

//         {/* Left Side: Editorial Style */}
//         <div className="hidden lg:block w-1/2 text-white space-y-8">
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
//             <IoFingerPrintOutline className="text-accent text-lg" />
//             <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Secure Biometric Access</span>
//           </div>

//           <h1 className="text-7xl font-black leading-[0.9] tracking-tighter">
//             Digital <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">Chatsystem.</span>
//           </h1>

//           <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
//             Where precision meets performance. Access your high-frequency management tools in one unified space.
//           </p>

//           {/* New: Quick Info or Feature List */}
//           <div className="space-y-4 pt-4">
//             <div className="flex items-center gap-3 text-sm text-gray-400">
//                 <IoSparklesOutline className="text-accent" />
//                 <span>AI-Driven Analytics Integration</span>
//             </div>
//             <div className="flex items-center gap-3 text-sm text-gray-400">
//                 <IoSparklesOutline className="text-accent" />
//                 <span>Enterprise Grade Security Protocols</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: The Floating Card */}
//         <div className="w-full max-w-120 relative group">
//           <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

//           <div className="relative bg-[#0d1117]/90 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-10 shadow-2xl">
//             <div className="mb-10">
//               <h3 className="text-2xl font-bold text-white tracking-tight">Client Authentication</h3>
//               <p className="text-gray-500 text-sm mt-2">Enter your secure keys to proceed.</p>
//             </div>

//             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
//               {/* Email */}
//               <div className="relative">
//                 <input 
//                   type="email" id="email" placeholder=" "
//                   className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-accent transition-all placeholder-transparent"
//                 />
//                 <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent font-medium uppercase tracking-widest">
//                   Email Address
//                 </label>
//                 <IoMailOutline className="absolute right-0 top-3 text-gray-600 peer-focus:text-accent transition-colors" />
//               </div>

//               {/* Password */}
//               <div className="relative">
//                 <input 
//                   type={showPassword ? "text" : "password"} id="password" placeholder=" "
//                   className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-accent transition-all placeholder-transparent"
//                 />
//                 <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent font-medium uppercase tracking-widest">
//                   Access Password
//                 </label>
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-3 text-gray-600 hover:text-white transition-colors">
//                   {showPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 cursor-pointer group/check">
//                   <div className="w-4 h-4 rounded border border-gray-600 flex items-center justify-center group-hover/check:border-accent transition-colors">
//                     <input type="checkbox" className="hidden peer" />
//                     <div className="w-2 h-2 bg-accent rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
//                   </div>
//                   <span className="text-[10px] text-gray-500 uppercase tracking-widest">Trust device</span>
//                 </label>
//                 <a href="#" className="text-[10px] font-bold text-accent hover:text-white transition-colors uppercase tracking-widest">Lost Keys?</a>
//               </div>

//               {/* Login Button */}
//               <button type="submit" className="w-full relative cursor-pointer overflow-hidden group/btn bg-white py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95">
//                 <div className="absolute inset-0 bg-linear-to-r from-primary to-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
//                 <span className="relative z-10 text-black group-hover/btn:text-white font-black uppercase tracking-[0.2em] text-xs transition-colors duration-500">Initialize Session</span>
//                 <IoArrowForwardOutline className="relative z-10 text-black group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-500" />
//               </button>
//             </form>

//             {/* --- NEW SIGN UP SECTION --- */}
//             <div className="mt-5 pt-4 border-t border-white/5 flex flex-col items-center gap-4">
//                <p className="text-gray-500 text-[11px] uppercase tracking-widest">New to the chatbot?</p>
//                <Link href="/customer/register" className="group cursor-pointer relative text-white text-xs font-bold uppercase tracking-[0.2em] transition-all overflow-hidden">
//                   <span className="block pb-1">Request Access / Sign Up</span>
//                   <div className="absolute bottom-0 left-0 w-full h-px bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
//                </Link>
//             </div>

//             <div className="mt-4 text-center">
//               <p className="text-[8px] text-gray-700 uppercase tracking-[0.5em] font-bold">Shiva-Protocol v4.0</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UltimateCustomerLogin;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  IoMailOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoArrowForwardOutline,
  IoFingerPrintOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { apiUrl } from "@/config";
import { toast } from "react-toastify";

const UltimateCustomerLogin = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const response = await axios.post(`${apiUrl}/reg/login`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Login response:", response.data);

      const resData = response?.data;

      if (resData?.token) {
        localStorage.setItem("customerToken", resData.token);
      }

      if (resData?.data) {
        localStorage.setItem("customerData", JSON.stringify(resData.data));
      }

      // alert(resData?.message || "Login successful");
      toast.success(resData?.message || "Login successful");

      router.push("/customer/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);

      // alert(
      //   error?.response?.data?.message || "Login failed. Please try again."
      // );
      toast.error(error?.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#05070a] overflow-hidden font-sans relative">
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-40 animate-[pulse_8s_infinite]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_70%)] opacity-30"></div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-300 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
        <div className="hidden lg:block w-1/2 text-white space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <IoFingerPrintOutline className="text-accent text-lg" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
              Secure Biometric Access
            </span>
          </div>

          <h1 className="text-7xl font-black leading-[0.9] tracking-tighter">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">
              Chatsystem.
            </span>
          </h1>

          <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
            Where precision meets performance. Access your high-frequency
            management tools in one unified space.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <IoSparklesOutline className="text-accent" />
              <span>AI-Driven Analytics Integration</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <IoSparklesOutline className="text-accent" />
              <span>Enterprise Grade Security Protocols</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-120 relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-[#0d1117]/90 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-10 shadow-2xl">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Client Authentication
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Enter your secure keys to proceed.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleLogin}>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-accent transition-all placeholder-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent font-medium uppercase tracking-widest"
                >
                  Email Address
                </label>
                <IoMailOutline className="absolute right-0 top-3 text-gray-600 peer-focus:text-accent transition-colors" />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-accent transition-all placeholder-transparent pr-10"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent font-medium uppercase tracking-widest"
                >
                  Access Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-3 text-gray-600 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <IoEyeOffOutline size={18} />
                  ) : (
                    <IoEyeOutline size={18} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group/check">
                  <div className="w-4 h-4 rounded border border-gray-600 flex items-center justify-center group-hover/check:border-accent transition-colors">
                    <input type="checkbox" className="hidden peer" />
                    <div className="w-2 h-2 bg-accent rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    Trust device
                  </span>
                </label>

                <a
                  href="#"
                  className="text-[10px] font-bold text-accent hover:text-white transition-colors uppercase tracking-widest"
                >
                  Lost Keys?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full relative cursor-pointer overflow-hidden group/btn bg-white py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-60"
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary to-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-black group-hover/btn:text-white font-black uppercase tracking-[0.2em] text-xs transition-colors duration-500">
                  {loading ? "Logging in..." : "Initialize Session"}
                </span>
                <IoArrowForwardOutline className="relative z-10 text-black group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-500" />
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-white/5 flex flex-col items-center gap-4">
              <p className="text-gray-500 text-[11px] uppercase tracking-widest">
                New to the chatbot?
              </p>
              <Link
                href="/customer/register"
                className="group cursor-pointer relative text-white text-xs font-bold uppercase tracking-[0.2em] transition-all overflow-hidden"
              >
                <span className="block pb-1">Request Access / Sign Up</span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[8px] text-gray-700 uppercase tracking-[0.5em] font-bold">
                Shiva-Protocol v4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateCustomerLogin;