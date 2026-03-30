"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from "../assets/logo-1.png";
import { RiArrowDownSLine, RiInstagramLine, RiWhatsappLine, RiMessengerLine, RiMenuLine, RiCloseLine, RiFlashlightLine, RiShieldCheckLine, RiPieChartLine } from "react-icons/ri";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-100 transition-all duration-300 border-b ${isScrolled ? 'bg-white py-3 shadow-md border-slate-100' : 'bg-white py-5 border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* --- LOGO SECTION --- */}
                <div className="flex items-center gap-12">
                    <Image src={logo} width={150} height={100} alt="Salexo" className="h-9 md:h-10 object-contain" />

                    {/* --- MAIN DESKTOP NAV --- */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {/* --- 1. PRODUCTS (Existing) --- */}
                        <li className="group relative">
                            <button className="flex items-center gap-1 text-[15px] font-semibold text-primary hover:text-secondary transition-colors py-2">
                                Products <RiArrowDownSLine className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full -left-20 w-160 bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <p className="text-[14px] font-bold text-slate-400 uppercase tracking-widest">Channels</p>
                                    <div className="flex flex-col gap-4">
                                        <MegaItem icon={<RiInstagramLine className="text-pink-500 text-5xl" />} title="Instagram" desc="Automate DMs & Comments" />
                                        <MegaItem icon={<RiWhatsappLine className="text-emerald-500 text-5xl" />} title="WhatsApp" desc="Connect on the world's #1 app" />
                                        <MegaItem icon={<RiMessengerLine className="text-blue-500 text-5xl" />} title="Messenger" desc="Scale your Facebook sales" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Core Features</p>
                                    <div className="flex flex-col gap-4">
                                        <MegaItem icon={<RiFlashlightLine className="text-amber-500 text-5xl" />} title="Salexo AI" desc="Next-gen smart responses" />
                                        <MegaItem icon={<RiPieChartLine className="text-accent text-5xl" />} title="Analytics" desc="Deep data insights" />
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* --- 2. SOLUTIONS (New Feature List) --- */}
                        <li className="group relative">
                            <button className="flex items-center gap-1 text-[15px] font-semibold text-primary hover:text-secondary transition-colors py-2">
                                Solutions <RiArrowDownSLine className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full -left-10 w-80 bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                <div className="flex flex-col gap-1">
                                    <SimpleDropdownItem title="For E-commerce" desc="Boost store sales" />
                                    <SimpleDropdownItem title="For Agencies" desc="Manage client bots" />
                                    <SimpleDropdownItem title="For Creators" desc="Engage your fans" />
                                    <SimpleDropdownItem title="For Education" desc="Automate student FAQs" />
                                </div>
                            </div>
                        </li>

                        {/* --- 3. PRICING (New Mini Dropdown) --- */}
                        <li className="group relative">
                            <button className="flex items-center gap-1 text-[15px] font-semibold text-primary hover:text-secondary transition-colors py-2">
                                Pricing <RiArrowDownSLine className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full -left-5 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                <div className="flex flex-col gap-1">
                                    <SimpleDropdownItem title="Free Plan" desc="$0/mo forever" />
                                    <SimpleDropdownItem title="Pro Plan" desc="Advanced features" />
                                    <SimpleDropdownItem title="Enterprise" desc="Custom solutions" />
                                </div>
                            </div>
                        </li>

                        {/* --- 4. RESOURCES (New Content Grid) --- */}
                        <li className="group relative">
                            <button className="flex items-center gap-1 text-[15px] font-semibold text-primary hover:text-secondary transition-colors py-2">
                                Resources <RiArrowDownSLine className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full right-0 w-120 bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-xl">
                                        <p className="text-[10px] font-black uppercase text-accent mb-2">Knowledge Base</p>
                                        <h4 className="text-sm font-bold text-primary mb-1">Video Tutorials</h4>
                                        <p className="text-xs text-slate-500">Master Salexo in minutes with our step-by-step guides.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <SimpleDropdownItem title="Help Center" desc="Documentation" />
                                        <SimpleDropdownItem title="Salexo Blog" desc="Latest AI tips" />
                                        <SimpleDropdownItem title="Community" desc="Join the forum" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* --- RIGHT ACTIONS --- */}
                <div className="flex items-center gap-4">
                    {/* --- PREMIUM LOG IN (Underline Morph) --- */}
                    <a
                        href="#"
                        className="hidden md:block relative text-[14px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300 group"
                    >
                        Log In
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </a>

                    {/* --- PREMIUM GET STARTED (High-Gloss Depth) --- */}
                    <button className="relative group overflow-hidden bg-primary px-5 py-4 rounded-2xl shadow-[0_15px_30px_-10px_rgba(44,68,107,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(46,98,140,0.4)] transition-all duration-500 active:scale-95">

                        {/* Background Shine Effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></div>

                        {/* Inner Border/Ring for Depth */}
                        <div className="absolute inset-px rounded-[15px] bg-primary group-hover:bg-transparent transition-colors duration-300 z-0"></div>

                        {/* Button Content */}
                        <span className="relative z-10 flex items-center gap-2 text-white font-black text-[13px] uppercase tracking-[0.15em]">
                            Get Started Free
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>

                        {/* Subtle Glass Highlight (Top half) */}
                        <div className="absolute top-0 left-0 right-0 h-[50%] bg-white/10 opacity-20 pointer-events-none"></div>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-primary">
                        {mobileMenuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE OVERLAY --- */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
                    <a href="#" className="text-xl font-bold text-primary">Products</a>
                    <a href="#" className="text-xl font-bold text-primary">Solutions</a>
                    <a href="#" className="text-xl font-bold text-primary">Pricing</a>
                    <hr />
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold">Get Started Free</button>
                </div>
            )}
        </nav>
    );
};

const SimpleDropdownItem = ({ title, desc }: { title: string, desc: string }) => (
    <a href="#" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors group/simple">
        <p className="text-sm font-bold text-primary group-hover/simple:text-secondary">{title}</p>
        <p className="text-[11px] text-slate-400 font-medium">{desc}</p>
    </a>
);

// Sub-component for the Mega Menu items
const MegaItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <a href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
        <div className="text-4xl mt-1">{icon}</div>
        <div>
            <p className="text-xl font-bold text-primary group-hover/item:text-secondary">{title}</p>
            <p className="text-xs text-slate-500">{desc}</p>
        </div>
    </a>
);

export default Header;