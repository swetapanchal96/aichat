// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from "../assets/logo-1.png"
// import { BsBoxArrowRight, BsChevronDown, BsPerson } from 'react-icons/bs';

// const SuperAdminHeader = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleLogout = () => {
//         console.log("Logging out...");
//         // Add your logout logic here
//     };

//     return (
//         <header className="w-full bg-white border-b border-gray-100 shadow-sm relative">
//             <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-20">

//                     {/* Logo Section */}
//                     <div className="flex-shrink-0">
//                         <Link href="/">
//                             <Image src={logo} alt="Salexo Logo" width={140} height={45} priority />
//                         </Link>
//                     </div>

//                     {/* Center Navigation */}
//                     <nav className="hidden md:flex space-x-8 items-center">
//                         <Link href="/dashboard" className="text-gray-600 hover:text-primary font-medium">Dashboard</Link>
//                         <Link href="/customers" className="text-gray-600 hover:text-[#1d3557] font-medium">Customer</Link>
//                         <Link href="/inactive-customers" className="text-gray-600 hover:text-[#1d3557] font-medium">Inactive Customer</Link>
//                     </nav>

//                     {/* Right: Account Actions */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className={`flex items-center p-1.5 rounded-full border transition-all duration-300 ${isOpen ? 'border-accent bg-background' : 'border-transparent hover:bg-gray-50'
//                                 }`}
//                         >
//                             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-sm">
//                                 <BsPerson size={18} />
//                             </div>
//                             <BsChevronDown
//                                 className={`ml-2 mr-1 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//                                 size={12}
//                             />
//                         </button>

//                         {/* Dropdown - Floating Card Design */}
//                         {isOpen && (
//                             <>
//                                 <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
//                                 <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
//                                     <Link
//                                         href="/profile"
//                                         className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-background hover:text-secondary transition-colors"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         <BsPerson className="mr-3 text-accent" size={18} />
//                                         Your Profile
//                                     </Link>

//                                     <button
//                                         onClick={handleLogout}
//                                         className="w-full flex items-center px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors mt-1"
//                                     >
//                                         <BsBoxArrowRight className="mr-3" size={18} />
//                                         Sign out
//                                     </button>
//                                 </div>
//                             </>
//                         )}
//                     </div>


//                 </div>
//             </div>
//         </header>
//     );
// };

// export default SuperAdminHeader;

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo-1.png";
import { BsBoxArrowRight, BsChevronDown, BsPerson } from 'react-icons/bs';

const SuperAdminHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to trigger animation
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        console.log("Logging out...");
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
                ? "bg-white/80 backdrop-blur-lg h-16 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] border-b border-gray-100"
                : "bg-white h-20 border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Left: Branding */}
                <div className="flex items-center space-x-12">
                    <Link href="/" className="transition-transform duration-300 hover:scale-105 active:scale-95">
                        <Image
                            src={logo}
                            alt="Salexo"
                            width={scrolled ? 110 : 130}
                            height={40}
                            className="transition-all duration-500"
                            priority
                        />
                    </Link>

                    {/* Navigation - Minimalist Pill Style */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {[
                            { name: 'Dashboard', href: '/superadmin/dashboard' },
                            { name: 'Customers', href: '/superadmin/customers' },
                            { name: 'Inactive', href: '/superadmin/inactive-customers' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-[13px] font-bold text-gray-500 hover:text-primary hover:bg-background rounded-full transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: Account Actions */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex items-center p-1.5 rounded-full border transition-all duration-300 ${isOpen ? 'border-accent bg-background shadow-inner' : 'border-transparent hover:bg-gray-50'
                            }`}
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-md hover:rotate-12 transition-transform duration-300">
                            <BsPerson size={18} />
                        </div>
                        <BsChevronDown
                            className={`ml-2 mr-1 text-gray-400 transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                            size={12}
                        />
                    </button>

                    {/* Dropdown - Animated Slide & Fade */}
                    {isOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
                            <div className="absolute right-0 mt-3 w-60 bg-white/95 backdrop-blur-xl rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 py-2.5 z-20 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-300 ease-out">
                                <div className="px-5 py-3 mb-1 border-b border-gray-50">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Management</p>
                                    <p className="text-sm font-bold text-primary truncate">Admin User</p>
                                </div>

                                <Link
                                    href="/superadmin/profile"
                                    className="flex items-center px-5 py-3 text-sm text-gray-600 hover:bg-background hover:text-secondary transition-all duration-200 group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <BsPerson size={16} />
                                    </div>
                                    <span className="font-semibold">Your Profile</span>
                                </Link>

                                <div className="px-2 mt-1">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-4 py-3 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                                            <BsBoxArrowRight size={16} />
                                        </div>
                                        <span className="font-bold">Sign out</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
};

export default SuperAdminHeader;