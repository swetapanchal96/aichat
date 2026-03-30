// import { motion, Variants } from 'framer-motion';
// import { BsInstagram, BsTwitter, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
// import { HiOutlineSparkles } from 'react-icons/hi';
// import Image from 'next/image';
// import logo from "../assets/logo-1.png";

// const footerLinks = {
//     platform: ['Conversational AI', 'Omnichannel Sync', 'Predictive Analytics', 'Workflow Builder'],
//     company: ['Our Story', 'Engineering Blog', 'Careers', 'Press Kit'],
//     connect: ['Help Center', 'API Docs', 'Status Page', 'Partner Program'],
// };

// const Footer = () => {
//     return (
//         <footer className="relative bg-white pt-24 pb-12 overflow-hidden text-[#2c446b]/80 border-t border-slate-100">
//             {/* Soft Ambient Background */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-[#70a0bf]/10 rounded-full blur-[100px]" />
//                 <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#2e628c]/5 rounded-full blur-[80px]" />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

//                     {/* --- LEFT: BRANDING --- */}
//                     <div className="lg:col-span-4">
//                         <Image src={logo} width={140} height={38} alt="Salexo" className="mb-6" />
//                         <p className="text-[#2c446b]/70 text-base leading-relaxed mb-8 max-w-sm">
//                             Building the world's most intuitive conversational layer for the digital-first Indian enterprise.
//                         </p>
//                         <div className="flex gap-3">
//                             {[BsLinkedin, BsTwitter, BsInstagram, BsWhatsapp].map((Icon, i) => (
//                                 <motion.a
//                                     key={i}
//                                     href="#"
//                                     whileHover={{ y: -3, backgroundColor: '#70a0bf', color: 'white' }}
//                                     className="p-3 rounded-xl border border-slate-200 text-[#2c446b]/40 transition-all"
//                                 >
//                                     <Icon size={18} />
//                                 </motion.a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* --- CENTER: LINKS --- */}
//                     <div className="lg:col-span-4 grid grid-cols-2 gap-8">
//                         {Object.entries(footerLinks).slice(0, 2).map(([title, links]) => (
//                             <div key={title}>
//                                 <h3 className="text-[#2c446b] font-bold text-xs uppercase tracking-[0.2em] mb-6">{title}</h3>
//                                 <ul className="space-y-4">
//                                     {links.map((link) => (
//                                         <li key={link}>
//                                             <a href="#" className="text-[#2c446b]/60 hover:text-[#2e628c] transition-colors text-[14px] font-medium">
//                                                 {link}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>

//                     {/* --- RIGHT: VIDEO SECTION --- */}
//                     <div className="lg:col-span-4">
//                         <motion.div
//                             initial={{ opacity: 0, x: 20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             className="relative group rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white/50 backdrop-blur-sm p-2"
//                         >
//                             <div className="relative aspect-[9/16] md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-inner bg-slate-100">
//                                 <video
//                                     autoPlay
//                                     loop
//                                     muted
//                                     playsInline
//                                     className="w-full h-full object-cover"
//                                 >
//                                     <source src="/grok-video-48af2c3d-b666-4fe3-a1e4-8053c99cc939.mp4" type="video/mp4" />
//                                 </video>
//                                 {/* Overlay Gradient */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-[#2c446b]/40 to-transparent pointer-events-none" />
//                             </div>

//                             <div className=" px-2 pb-2">
//                                 <h4 className="text-[#2c446b] font-bold text-sm flex items-center gap-2">
//                                     <HiOutlineSparkles className="text-[#2e628c]" /> Experience Salexo AI
//                                 </h4>
//                                 <p className="text-[11px] text-[#2c446b]/60 font-medium">See how our intelligent conversational partner works in real-time.</p>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* --- BOTTOM BAR --- */}
//                 <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-bold text-[#2c446b]/40 tracking-wider">
//                     <div>© {new Date().getFullYear()} SALEXO TECHNOLOGIES PVT LTD.</div>
//                     <div className="flex items-center gap-8 uppercase">
//                         <a href="#" className="hover:text-[#2e628c] transition-colors">Privacy</a>
//                         <a href="#" className="hover:text-[#2e628c] transition-colors">Terms</a>
//                         <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
//                             <span className="relative flex h-1.5 w-1.5">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
//                             </span>
//                             <span>Systems Live</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import { motion } from 'framer-motion';
import { BsInstagram, BsTwitter, BsLinkedin, BsWhatsapp, BsArrowRight } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import Image from 'next/image';
import logo from "../assets/logo-1.png";

const footerLinks = {
    platform: ['Conversational AI', 'Omnichannel Sync', 'Predictive Analytics', 'Workflow Builder'],
    company: ['Our Story', 'Engineering Blog', 'Careers', 'Press Kit'],
};

const Footer = () => {
    return (
        <footer className="relative bg-[#f8fafc] pt-24 pb-10 overflow-hidden text-[#2c446b]/80 border-t border-slate-200">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#70a0bf]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2e628c]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* --- LEFT: BRANDING --- */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Image src={logo} width={150} height={40} alt="Salexo" className="mb-8" />
                            <p className="text-[#2c446b]/70 text-lg leading-relaxed mb-8 max-w-sm">
                                Empowering Indian enterprises with the next generation of <span className="text-[#2e628c] font-semibold">AI-driven</span> communication.
                            </p>
                            <div className="flex gap-4">
                                {[BsLinkedin, BsTwitter, BsInstagram, BsWhatsapp].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ scale: 1.1, backgroundColor: '#2c446b', color: '#fff' }}
                                        className="p-3 rounded-2xl bg-white border border-slate-200 text-[#2c446b]/60 shadow-sm transition-all"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- CENTER: QUICK LINKS --- */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-[#2c446b] font-bold text-sm uppercase tracking-widest mb-8">{title}</h3>
                                <ul className="space-y-5">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="group flex items-center text-[#2c446b]/60 hover:text-[#2e628c] transition-all text-sm font-semibold">
                                                <BsArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-2" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* --- RIGHT: THE VIDEO FEATURE --- */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative group p-3 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_32px_64px_-16px_rgba(44,68,107,0.2)]"
                        >
                            <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-inner bg-slate-200">
                                <video
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                >
                                    <source src="/grok-video-48af2c3d-b666-4fe3-a1e4-8053c99cc939.mp4" type="video/mp4" />
                                </video>
                                {/* High-tech Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#2c446b]/60 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                                    <p className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        Live Demo: AI Agent
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-2 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[11px] font-bold text-[#2c446b]/40 tracking-[0.2em]">
                        © {new Date().getFullYear()} SALEXO TECHNOLOGIES PVT LTD.
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="flex gap-6 text-[11px] font-bold uppercase tracking-wider text-[#2c446b]/40">
                            <a href="#" className="hover:text-[#2e628c] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#2e628c] transition-colors">Terms</a>
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