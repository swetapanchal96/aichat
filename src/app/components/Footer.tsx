import { motion } from 'framer-motion';
import { BsInstagram, BsTwitter, BsLinkedin, BsWhatsapp, BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import logo from "../assets/logo-1.png";

const footerLinks = {
    platform: ['Conversational AI', 'Omnichannel Sync', 'Predictive Analytics', 'Workflow Builder'],
    company: ['Our Story', 'Engineering Blog', 'Careers', 'Press Kit'],
};

const Footer = () => {
    return (
        <footer className="relative bg-[#f8fafc] pt-24 pb-10 overflow-hidden text-primary/80 border-t border-slate-200">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* items-start ensures all 3 columns begin at the same vertical point */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">

                    {/* --- LEFT: BRANDING (4 Columns) --- */}
                    <div className="lg:col-span-4">
                        <Image src={logo} width={150} height={40} alt="Salexo" className="mb-8" />
                        <p className="text-primary/70 text-lg leading-relaxed mb-8 max-w-sm">
                            Empowering Indian enterprises with the next generation of <span className="text-secondary font-semibold">AI-driven</span> communication.
                        </p>
                        <div className="flex gap-4">
                            {[BsLinkedin, BsTwitter, BsInstagram, BsWhatsapp].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.1, backgroundColor: '#2c446b', color: '#fff' }}
                                    className="p-3 rounded-2xl bg-white border border-slate-200 text-primary/60 shadow-sm transition-all"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* --- CENTER: QUICK LINKS (4 Columns) --- */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-8">{title}</h3>
                                <ul className="space-y-5">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="group flex items-center text-primary/60 hover:text-secondary transition-all text-sm font-semibold">
                                                <BsArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-2" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* --- RIGHT: THE VIDEO FEATURE (4 Columns) --- */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                opacity: { duration: 0.8 },
                                default: { ease: "easeOut" }
                            }}
                            className="relative group  rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-primary/60 shadow-[0_32px_64px_-16px_rgba(44,68,107,0.15)] hover:shadow-[0_48px_80px_-16px_rgba(44,68,107,0.25)] transition-shadow duration-500"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-[2.6rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                            <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-inner bg-slate-200">
                                <motion.video
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    <source src="/grok-video-48af2c3d-b666-4fe3-a1e4-8053c99cc939.mp4" type="video/mp4" />
                                </motion.video>

                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent pointer-events-none" />

                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10">
                                    <p className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        Live Demo: AI Agent
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[11px] font-bold text-primary/40 tracking-[0.2em]">
                        © {new Date().getFullYear()} SALEXO TECHNOLOGIES PVT LTD.
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="flex gap-6 text-[11px] font-bold uppercase tracking-wider text-primary/40">
                            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
                            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-black text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 uppercase tracking-tighter">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Systems Operational
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;