// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const slides = [
//     {
//         title: "Engage followers instantly with automatic replies",
//         desc: "Respond instantly to comments, DMs, and Story mentions (or use a delay if that's too thirsty).",
//         color: "bg-[#b35cf5]", // Purple bubble
//         text: "Hey! Thanks for mentioning me! Want to know more?",
//         label: "Auto-reply on story mentions",
//         img: "https://picsum.photos/id/1015/600/800",
//     },
//     {
//         title: "Convert more leads with smart automation",
//         desc: "Turn every interaction into a conversion opportunity with tailored messaging sequences.",
//         color: "bg-[#3dbb8d]", // Green bubble
//         text: "Loving this! Check your DM for the exclusive link 🔥",
//         label: "Instant comment reply",
//         img: "https://picsum.photos/id/1016/600/800",
//     },
//     {
//         title: "Scale your growth with personalized DMs",
//         desc: "Build relationships at scale without losing the personal touch your brand is known for.",
//         color: "bg-[#2c446b]", // Primary theme bubble
//         text: "Thanks for following! Here is your welcome gift.",
//         label: "Welcome new followers",
//         img: "https://picsum.photos/id/1018/600/800",
//     },
// ];

// export default function BenefitsSection() {
//     const sectionRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end end"],
//     });

//     return (
//         <section ref={sectionRef} className="relative h-[300vh] bg-[#f9f9f9]">
//             <div className="sticky top-0 h-screen flex items-center">
//                 <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 items-center">

//                     {/* LEFT SIDE: Heading & Description */}
//                     <div className="relative h-[400px]">
//                         {slides.map((slide, i) => {
//                             const start = i / slides.length;
//                             const end = (i + 1) / slides.length;

//                             const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
//                             const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [20, 0, 0, -20]);

//                             return (
//                                 <motion.div
//                                     key={i}
//                                     style={{ opacity, y }}
//                                     className="absolute inset-0 flex flex-col justify-center"
//                                 >
//                                     <h2 className="text-6xl font-black text-black leading-tight mb-8">
//                                         {slide.title}
//                                     </h2>
//                                     <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
//                                         {slide.desc}
//                                     </p>
//                                     <button className="mt-10 w-fit bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm">
//                                         Get Started
//                                     </button>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>

//                     {/* RIGHT SIDE: The Animated Mockup */}
//                     <div className="flex justify-center items-center">
//                         <div className="relative w-full max-w-[400px]">
//                             {/* Phone Body */}
//                             <div className="bg-black rounded-[3.5rem] p-4 shadow-2xl h-[700px] border-[10px] border-zinc-900 overflow-hidden relative">

//                                 {slides.map((slide, i) => {
//                                     const start = i / slides.length;
//                                     const end = (i + 1) / slides.length;

//                                     // The "Slide Up" effect for the whole card
//                                     const slideY = useTransform(
//                                         scrollYProgress,
//                                         [start - 0.15, start, end],
//                                         [i === 0 ? 0 : 700, 0, 0]
//                                     );

//                                     return (
//                                         <motion.div
//                                             key={i}
//                                             style={{ y: slideY, zIndex: i }}
//                                             className="absolute inset-0 bg-black flex flex-col pt-12"
//                                         >
//                                             <div className="px-8 flex flex-col h-full">
//                                                 {/* Meta Info */}
//                                                 <div className="text-center text-zinc-500 text-xs mb-6">
//                                                     Mentioned you in their story
//                                                 </div>

//                                                 {/* Content Image */}
//                                                 <div className="rounded-3xl overflow-hidden mb-8 aspect-[4/5] shadow-2xl">
//                                                     <img src={slide.img} className="w-full h-full object-cover" />
//                                                 </div>

//                                                 {/* Chat Bubble Animation */}
//                                                 <div className="flex gap-3">
//                                                     <div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0" />
//                                                     <motion.div
//                                                         initial={{ opacity: 0, scale: 0.9, y: 10 }}
//                                                         whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                                                         className={`${slide.color} text-white p-5 rounded-3xl rounded-tl-none text-sm font-medium leading-snug`}
//                                                     >
//                                                         {slide.text}
//                                                     </motion.div>
//                                                 </div>
//                                             </div>

//                                             {/* Bottom Progress Label (Matches the pink bar in your image) */}
//                                             <div className="mt-auto bg-[#ff33e0] p-6 flex justify-between items-center text-white font-bold text-sm">
//                                                 <span>{slide.label}</span>
//                                                 <span>{i + 1}/{slides.length}</span>
//                                             </div>
//                                         </motion.div>
//                                     );
//                                 })}
//                             </div>

//                             {/* Background Grid Pattern (Matches screenshot) */}
//                             <div className="absolute -inset-20 bg-[radial-gradient(#0000001a_1px,transparent_1px)] [background-size:40px_40px] -z-10" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const slides = [
    {
        title: "Engage followers instantly with automatic replies",
        desc: "Respond instantly to comments, DMs, and Story mentions (or use a delay if that's too thirsty).",
        color: "bg-[#b35cf5]",
        accent: "#b35cf5",
        text: "Hey! Thanks for mentioning me! Want to know more?",
        label: "Auto-reply on story mentions",
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Convert more leads with smart automation",
        desc: "Turn every interaction into a conversion opportunity with tailored messaging sequences.",
        color: "bg-[#3dbb8d]",
        accent: "#3dbb8d",
        text: "Loving this! Check your DM for the exclusive link 🔥",
        label: "Instant comment reply",
        img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Scale your growth with personalized DMs",
        desc: "Build relationships at scale without losing the personal touch your brand is known for.",
        color: "bg-[#2c446b]",
        accent: "#2c446b",
        text: "Thanks for following! Here is your welcome gift.",
        label: "Welcome new followers",
        img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function BenefitsSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={sectionRef} className="relative h-[400vh] bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE: Content Switcher */}
                    <div className="relative h-[500px]">
                        {slides.map((slide, i) => {
                            // FIXED RANGE CALCULATION
                            const start = i / slides.length;
                            const end = (i + 1) / slides.length;

                            // Corrected ranges to be strictly increasing (Monotonic)
                            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                            const x = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [-30, 0, 0, 30]);

                            return (
                                <motion.div
                                    key={i}
                                    style={{ opacity, x }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className={`w-12 h-[2px] ${slide.color}`} />
                                        <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Step 0{i + 1}</span>
                                    </div>
                                    <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                        {slide.title}
                                    </h2>
                                    <p className="text-xl text-slate-500 max-w-lg leading-relaxed mb-10">
                                        {slide.desc}
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-slate-200"
                                    >
                                        EXPLORE FEATURE
                                        <ArrowRight size={20} />
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: 3D Stacked Cards */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        {slides.map((slide, i) => {
                            const start = i / slides.length;
                            const end = (i + 1) / slides.length;

                            // Safe ranges for card animations
                            const scale = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [0.9, 1, 1, 0.95]);
                            const cardOpacity = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
                            const rotate = useTransform(scrollYProgress, [start, end], [0, -8]);
                            const y = useTransform(scrollYProgress, [start - 0.05, start, end], [60, 0, -40]);

                            return (
                                <motion.div
                                    key={i}
                                    style={{
                                        scale,
                                        opacity: cardOpacity,
                                        rotate,
                                        y,
                                        zIndex: slides.length - i
                                    }}
                                    className="absolute w-full max-w-[420px] aspect-[3/4] bg-white rounded-[2.5rem] p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100"
                                >
                                    <div className="relative h-full w-full bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col">
                                        <div className="p-6 flex items-center justify-between bg-white border-b border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100" />
                                                <div className="space-y-1">
                                                    <div className="h-3 w-24 bg-slate-200 rounded-full" />
                                                    <div className="h-2 w-16 bg-slate-100 rounded-full" />
                                                </div>
                                            </div>
                                            <CheckCircle2 className="text-blue-500" size={20} />
                                        </div>

                                        <div className="relative flex-1 p-4">
                                            <img
                                                src={slide.img}
                                                className="w-full h-full object-cover rounded-2xl shadow-inner"
                                                alt="preview"
                                            />
                                            <motion.div
                                                initial={{ x: 20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="absolute -right-2 top-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                                            >
                                                <div className="flex items-center gap-2 mb-2 text-slate-400">
                                                    <MessageCircle size={14} />
                                                    <span className="text-[10px] font-bold uppercase tracking-tighter">AI Assistant</span>
                                                </div>
                                                <p className="text-[11px] font-semibold text-slate-800 leading-tight">
                                                    {slide.text}
                                                </p>
                                            </motion.div>
                                        </div>

                                        <div className={`p-5 ${slide.color} text-white flex justify-between items-center`}>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{slide.label}</span>
                                            <div className="px-3 py-1 bg-white/20 rounded-full text-[10px] backdrop-blur-sm">
                                                {i + 1} / {slides.length}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}