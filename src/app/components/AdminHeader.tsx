"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo-1.png";
import {
    BsChatDots,
    BsGrid1X2,
    BsPerson,
    BsBoxArrowRight,
    BsChevronDown,
    BsFileText,
    BsCollection,
    BsCpu
} from 'react-icons/bs';
import { apiUrl } from '@/config';
import axios from 'axios';
import { toast } from 'react-toastify';

const CustomerHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [companyName, setCompanyName] = useState("John Doe");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        try {
            const customerData = localStorage.getItem("customerData");

            if (customerData) {
                const parsedData = JSON.parse(customerData);
                setCompanyName(parsedData?.companyname || parsedData?.company_name || "John Doe");
            }
        } catch (error) {
            console.error("Customer data parse error:", error);
        }
    }, []);

    const navItems = [
        { name: 'Dashboard', href: '/customer/dashboard', icon: BsGrid1X2 },
        { name: 'My Chat', href: '/customer/chat', icon: BsChatDots },
        { name: 'View Script', href: '/customer/view-script', icon: BsFileText },
        { name: 'Resources', href: '/customer/resources', icon: BsCollection },
        { name: 'Test My Model', href: '/customer/test-my-model', icon: BsCpu },
    ];

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("customerToken");

            const res = await axios.post(
                `${apiUrl}/reg/userLogout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res?.data?.success) {
                toast.success(res?.data?.message || "Logged out successfully");

                localStorage.removeItem("customerToken");
                localStorage.removeItem("customerData");

                window.location.href = "/customer/logout";
            } else {
                toast.error(res?.data?.message || "Logout failed");
            }
        } catch (error: any) {
            console.error("Logout Error:", error);

            const errorMessage =
                error?.response?.data?.message ||
                error?.response?.data?.error ||
                error?.message ||
                "Something went wrong";

            toast.error(errorMessage);
        }
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? "bg-white/80 backdrop-blur-xl h-16 shadow-[0_20px_40px_-15px_rgba(44,68,107,0.15)] border-b border-gray-100"
                    : "bg-white h-20 border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="transition-transform duration-300 hover:scale-105">
                    <Image
                        src={logo}
                        alt="Salexo"
                        width={scrolled ? 110 : 125}
                        height={40}
                        className="transition-all duration-500"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex items-center bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 px-5 py-2 text-[13px] font-black uppercase tracking-wider text-gray-400 hover:text-primary hover:bg-white hover:shadow-sm rounded-xl transition-all duration-300"
                        >
                            <item.icon size={16} />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`flex items-center gap-3 p-1.5 pr-3 rounded-full border transition-all duration-300 ${isMenuOpen
                                ? 'border-accent bg-background shadow-inner'
                                : 'border-gray-100 hover:bg-gray-50 shadow-sm'
                            }`}
                    >
                        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-[12px] font-bold text-white shadow-md">
                            {companyName?.charAt(0)?.toUpperCase() || "J"}
                        </div>
                        <BsChevronDown
                            className={`text-gray-400 transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''
                                }`}
                            size={10}
                        />
                    </button>

                    {isMenuOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)}></div>
                            <div className="absolute right-0 mt-4 w-64 bg-white/95 backdrop-blur-2xl rounded-[28px] shadow-[0_30px_70px_-10px_rgba(44,68,107,0.25)] border border-gray-100 py-3 z-20 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-300">
                                <div className="px-6 py-4 mb-2 border-b border-gray-50 bg-gray-50/30">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                        Customer Account
                                    </p>
                                    <p className="text-sm font-bold text-primary truncate">
                                        {companyName}
                                    </p>
                                </div>

                                <Link
                                    href="/customer/profile"
                                    className="flex items-center px-6 py-3.5 text-[14px] font-semibold text-gray-600 hover:bg-background hover:text-secondary transition-all group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <BsPerson size={18} />
                                    </div>
                                    Profile Settings
                                </Link>

                                <div className="px-3 mt-2">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-4 py-3.5 text-[14px] font-bold text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                                            <BsBoxArrowRight size={18} />
                                        </div>
                                        Sign out
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

export default CustomerHeader;