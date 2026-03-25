// "use client"; // <--- Add this line here

// import Image from 'next/image';
// import Link from 'next/link';
// import logo from "../assets/logo-1.png"

// const SuperAdminHeader = () => {
//     const handleLogout = () => {
//         // Your logout logic here
//         console.log("Logged out");
//     };

//     return (
//         <header className="w-full bg-white border-b border-gray-100 shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-20">

//                     {/* Logo Section */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link href="/">
//                             <Image
//                                 src={logo}
//                                 alt="Salexo Logo"
//                                 width={150}
//                                 height={50}
//                                 priority
//                             />
//                         </Link>
//                     </div>

//                     {/* Navigation Links */}
//                     <nav className="hidden md:flex space-x-8 items-center">
//                         <Link href="/dashboard" className="text-gray-600 hover:text-[#1d3557] font-medium transition-colors">
//                             Dashboard
//                         </Link>
//                         <Link href="/customers" className="text-gray-600 hover:text-[#1d3557] font-medium transition-colors">
//                             Customer
//                         </Link>
//                         <Link href="/inactive-customers" className="text-gray-600 hover:text-[#1d3557] font-medium transition-colors">
//                             Inactive Customer
//                         </Link>
//                     </nav>

//                     {/* Profile & Logout */}
//                     <div className="flex items-center space-x-6">
//                         <Link href="/profile" className="flex items-center text-gray-600 hover:text-[#1d3557]">
//                             <span className="mr-2 font-medium">Profile</span>
//                             <div className="w-8 h-8 bg-gray-200 rounded-full border border-gray-300"></div>
//                         </Link>

//                         <button
//                             onClick={handleLogout}
//                             className="px-4 py-2 text-sm font-semibold text-white bg-[#1d3557] rounded-md hover:bg-opacity-90"
//                         >
//                             Logout
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </header>
//     );
// };

// export default SuperAdminHeader;

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo-1.png"

const SuperAdminHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        console.log("Logging out...");
        // Add your logout logic here
    };

    return (
        <header className="w-full bg-white border-b border-gray-100 shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image src={logo} alt="Salexo Logo" width={140} height={45} priority />
                        </Link>
                    </div>

                    {/* Center Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/dashboard" className="text-gray-600 hover:text-[#1d3557] font-medium">Dashboard</Link>
                        <Link href="/customers" className="text-gray-600 hover:text-[#1d3557] font-medium">Customer</Link>
                        <Link href="/inactive-customers" className="text-gray-600 hover:text-[#1d3557] font-medium">Inactive Customer</Link>
                    </nav>

                    {/* Profile Dropdown Section */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center space-x-3 focus:outline-none group"
                        >

                            <div className="w-10 h-10 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden hover:border-[#1d3557] transition-all">
                                {/* Fallback Avatar Icon */}
                                <svg className="w-6 h-6 text-[#70a0bf]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <>
                                {/* Transparent overlay to close dropdown when clicking outside */}
                                <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>

                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-20 animate-in fade-in zoom-in duration-150">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1d3557] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Your Profile
                                    </Link>
                                    <hr className="border-gray-50" />
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </header>
    );
};

export default SuperAdminHeader;