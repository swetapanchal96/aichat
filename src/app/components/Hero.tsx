// "use client"

// import React from 'react';
// import { RiInstagramFill, RiWhatsappFill, RiMessengerFill, RiArrowRightUpLine, RiCheckLine, RiSparkling2Line } from "react-icons/ri";

// const SalexoFlowHero: React.FC = () => {

//   // Array of messages for the infinite scroll
//   const chatMessages = [
//     { sender: "User", text: "How much is the shipping to Jaipur?", color: "bg-slate-100" },
//     { sender: "AI", text: "Free shipping on orders over ₹999! 🚚", color: "bg-primary text-white" },
//     { sender: "User", text: "Do you have this in Blue?", color: "bg-slate-100" },
//     { sender: "AI", text: "Yes! 4 items left in Blue. Check it out!", color: "bg-secondary text-white" },
//     { sender: "User", text: "Can I get a discount code?", color: "bg-slate-100" },
//     { sender: "AI", text: "Use code SALEXO10 for 10% off! ✨", color: "bg-accent text-white" },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">

//       {/* --- CINEMATIC BACKGROUND (BEYOND FLAT COLORS) --- */}
//       <div className="absolute inset-0 z-0">
//         {/* Replace with a high-end abstract tech image URL */}
//         <div 
//           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] 
//           bg-cover bg-center opacity-10 grayscale brightness-150"
//         />
//         <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-white" />
//         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(112,160,191,0.15),transparent_50%)]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
//         <div className="grid lg:grid-cols-12 gap-16 items-center">

//           {/* --- LEFT: IMPACT TEXT --- */}
//           <div className="lg:col-span-6 space-y-10">
//             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-xl shadow-primary/5 border border-slate-100">
//               <RiSparkling2Line className="text-accent animate-spin-slow" />
//               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Automate your Growth</span>
//             </div>

//             <h1 className="text-7xl md:text-9xl font-black text-primary leading-[0.85] tracking-tighter italic">
//               Results <br />
//               <span className="text-secondary italic">On Autopilot.</span>
//             </h1>

//             <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium border-l-4 border-accent pl-6">
//                 Salexo isn't just a chatbot. It's an **intelligent ecosystem** that engages your customers 24/7 across every social platform.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
//               <button className="group relative w-full sm:w-auto overflow-hidden bg-primary px-12 py-6 rounded-4xl text-white font-black uppercase tracking-widest text-[13px] shadow-2xl shadow-primary/30 transition-all active:scale-95">
//                 <span className="relative z-10 flex items-center gap-3">
//                   Start Free Trial <RiArrowRightUpLine size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-linear-to-r from-secondary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
//               </button>
//             </div>
//           </div>

//           {/* --- RIGHT: THE AUTOMATIC SCROLLING CHAT --- */}
//           <div className="lg:col-span-6 relative flex justify-center">

//             {/* The Floating UI Container */}
//             <div className="relative w-full max-w-105 aspect-4/5 bg-white rounded-[3.5rem] shadow-[0_60px_100px_-20px_rgba(44,68,107,0.18)] border border-slate-100 p-8 overflow-hidden">

//                {/* Header of Chat Mockup */}
//                <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-30 p-8 border-b border-slate-50 flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
//                       <RiInstagramFill size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-black text-primary text-sm uppercase tracking-tight">Salexo AI Agent</h4>
//                       <p className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">Active Link</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-1.5">
//                     <div className="w-2 h-2 rounded-full bg-slate-200" />
//                     <div className="w-2 h-2 rounded-full bg-slate-200" />
//                   </div>
//                </div>

//                {/* --- THE INFINITE SCROLL AREA --- */}
//                <div className="mt-24 h-full relative overflow-hidden flex flex-col">
//                   {/* We duplicate the list twice to create the seamless infinite effect */}
//                   <div className="animate-vertical-scroll space-y-6 flex flex-col">
//                     {[...chatMessages, ...chatMessages].map((msg, idx) => (
//                       <div key={idx} className={`p-5 rounded-3xl text-sm font-semibold max-w-[85%] ${msg.color} ${msg.sender === 'AI' ? 'ml-auto rounded-tr-none shadow-lg' : 'rounded-tl-none border border-slate-100'}`}>
//                         <div className="text-[9px] uppercase font-black opacity-50 mb-1">{msg.sender}</div>
//                         {msg.text}
//                       </div>
//                     ))}
//                   </div>
//                </div>

//                {/* Overlay Gradient to hide scroll edges */}
//                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/80 to-transparent z-20" />
//             </div>

//             {/* Floating Platform Icons */}
//             <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40">
//                 <ChannelIcon icon={<RiInstagramFill />} color="bg-gradient-to-tr from-pink-500 to-orange-400" />
//                 <ChannelIcon icon={<RiWhatsappFill />} color="bg-emerald-500" />
//                 <ChannelIcon icon={<RiMessengerFill />} color="bg-blue-600" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// const ChannelIcon = ({ icon, color }: { icon: React.ReactNode, color: string }) => (
//   <div className={`${color} w-16 h-16 rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl hover:scale-110 transition-transform cursor-pointer border-4 border-white`}>
//     {icon}
//   </div>
// );

// export default SalexoFlowHero;


"use client";
import { useState, useEffect, useRef } from "react";
import { RiInstagramFill, RiMessengerFill, RiWhatsappFill } from "react-icons/ri";

/* ─── DATA ─────────────────────────────────────────────── */
const chatMessages = [
  { sender: "user", text: "How much is the shipping to Jaipur?" },
  { sender: "ai", text: "Free shipping on orders over ₹999! 🚚", color: "#1e3a5f" },
  { sender: "user", text: "Do you have this in Blue?" },
  { sender: "ai", text: "Yes! 4 items left in Blue. Check it out!", color: "#0f766e" },
  { sender: "user", text: "Can I get a discount code?" },
  { sender: "ai", text: "Use code SALEXO10 for 10% off! ✨", color: "#7c3aed" },
  { sender: "user", text: "What's the return policy?" },
  { sender: "ai", text: "Easy 7-day returns, no questions asked! 👍", color: "#b45309" },
];



/* ─── TYPING INDICATOR ─────────────────────────────────── */
function TypingIndicator() {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 5,
      background: "#f1f5f9", borderRadius: "18px 18px 18px 4px",
      padding: "12px 18px", width: "fit-content", marginBottom: 10,
      animation: "fadeIn 0.3s ease",
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#94a3b8",
          animation: "typingBounce 1.2s infinite",
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
    </div>
  );
}

/* ─── CHAT BUBBLE ──────────────────────────────────────── */
function ChatBubble({ msg, isNew }: { msg: (typeof chatMessages)[0]; isNew: boolean }) {
  const isAI = msg.sender === "ai";
  return (
    <div style={{
      display: "flex",
      justifyContent: isAI ? "flex-end" : "flex-start",
      marginBottom: 10,
      animation: isNew ? "bubbleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both" : "none",
    }}>
      <div style={{
        maxWidth: "80%",
        background: isAI ? (msg.color || "#1e3a5f") : "#f1f5f9",
        color: isAI ? "#fff" : "#1e293b",
        borderRadius: isAI ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        padding: "11px 16px",
        fontSize: 13, fontWeight: 600, lineHeight: 1.5,
        boxShadow: isAI
          ? `0 6px 24px ${msg.color || "#1e3a5f"}50`
          : "0 2px 8px rgba(0,0,0,0.06)",
        border: isAI ? "none" : "1px solid #e8f0f9",
      }}>
        <div style={{
          fontSize: 9, fontWeight: 800, letterSpacing: "0.14em",
          opacity: 0.55, textTransform: "uppercase", marginBottom: 4,
          color: isAI ? "rgba(255,255,255,0.8)" : "#64748b",
        }}>
          {isAI ? "Salexo AI" : "You"}
        </div>
        {msg.text}
      </div>
    </div>
  );
}

/* ─── ANIMATED CHAT ────────────────────────────────────── */
function AnimatedChat() {
  const [messages, setMessages] = useState<(typeof chatMessages)[0][]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addNext = () => {
    const idx = indexRef.current;
    const msg = chatMessages[idx % chatMessages.length];

    if (msg.sender === "ai") {
      setShowTyping(true);
      timerRef.current = setTimeout(() => {
        setShowTyping(false);
        setMessages(prev => {
          const next = [...prev, msg];
          return next.length > 8 ? next.slice(1) : next;
        });
        indexRef.current++;
        timerRef.current = setTimeout(addNext, 1600);
      }, 1200);
    } else {
      timerRef.current = setTimeout(() => {
        setMessages(prev => {
          const next = [...prev, msg];
          return next.length > 8 ? next.slice(1) : next;
        });
        indexRef.current++;
        timerRef.current = setTimeout(addNext, 900);
      }, 600);
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(addNext, 700);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showTyping]);

  return (
    <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 18px 8px" }}>
      {messages.map((msg, i) => (
        <ChatBubble
          key={`${i}-${msg.text}`}
          msg={msg}
          isNew={i === messages.length - 1}
        />
      ))}
      {showTyping && <TypingIndicator />}
    </div>
  );
}

/* ─── MAIN EXPORT ──────────────────────────────────────── */
export default function SalexoFlowHero() {
  return (
    <>

      <section className="salexo-section">

        {/* bg blobs */}
        <div style={{
          position: "absolute", top: "5%", right: "5%",
          width: 500, height: 500, borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "0%",
          width: 380, height: 380, borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
        }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 36px", width: "100%" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64, alignItems: "center",
          }}>

            {/* ── LEFT ── */}
            <div style={{ animation: "heroFadeUp 0.8s ease both" }}>

              {/* ✅ BADGE */}
              <div className="growth-badge">
                <span className="sparkle-icon">✦</span>
                <span className="growth-badge-text">Automate your Growth</span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(50px, 6.5vw, 84px)",
                fontWeight: 900, lineHeight: 0.9,
                letterSpacing: "-0.03em", color: "#0f172a",
                marginBottom: 28, fontStyle: "italic",
                fontFamily: "'Sora', sans-serif",
              }}>
                Results<br />
                <span style={{ color: "#1e3a5f" }}>On</span><br />
                <span style={{
                  backgroundImage: "linear-gradient(130deg, #1e3a5f 0%, #3b82f6 60%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Autopilot.</span>
              </h1>

              {/* Description */}
              <p style={{
                fontSize: 16, color: "#64748b", lineHeight: 1.75,
                fontWeight: 500, borderLeft: "4px solid #3b82f6",
                paddingLeft: 20, marginBottom: 40, maxWidth: 430,
                animation: "heroFadeUp 0.9s ease 0.15s both",
                fontFamily: "'Sora', sans-serif",
              }}>
                Salexo isn't just a chatbot. It's an{" "}
                <strong style={{ color: "#1e3a5f", fontWeight: 800 }}>intelligent ecosystem</strong>{" "}
                that engages your customers 24/7 across every social platform.
              </p>

              {/* Stats */}
              <div style={{
                display: "flex", gap: 36, marginBottom: 44,
                animation: "heroFadeUp 1s ease 0.3s both",
              }}>
                {([["24/7", "Active Support"], ["3×", "More Conversions"], ["98%", "Response Rate"]] as const).map(([val, label]) => (
                  <div key={val}>
                    <div style={{
                      fontSize: 28, fontWeight: 900, color: "#1e3a5f",
                      lineHeight: 1, letterSpacing: "-0.02em",
                      fontFamily: "'Sora', sans-serif",
                    }}>{val}</div>
                    <div style={{
                      fontSize: 11, color: "#94a3b8", fontWeight: 600,
                      marginTop: 5, letterSpacing: "0.04em",
                      fontFamily: "'Sora', sans-serif",
                    }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ animation: "heroFadeUp 1s ease 0.45s both" }}>
                <button className="cta-btn">
                  Start Free Trial
                  <span style={{ fontSize: 18, lineHeight: 1 }}>↗</span>
                </button>
              </div>
            </div>

            {/* ── RIGHT: CHAT CARD ── */}
            <div style={{
              position: "relative", display: "flex", justifyContent: "center",
              animation: "heroFadeUp 0.9s ease 0.2s both",
            }}>

              {/* Card */}
              <div className="float-card" style={{
                width: "100%", maxWidth: 400,
                background: "#fff", borderRadius: 32,
                boxShadow: "0 50px 120px -20px rgba(30,58,95,0.2), 0 0 0 1px rgba(30,58,95,0.07)",
                display: "flex", flexDirection: "column",
                height: 490, overflow: "hidden",
              }}>

                {/* Chat header */}
                <div style={{
                  padding: "18px 22px", borderBottom: "1px solid #f1f5f9",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  flexShrink: 0, background: "#fff",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: 15, flexShrink: 0,
                      background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                      boxShadow: "0 6px 20px rgba(37,99,235,0.3)",
                    }}>📱</div>
                    <div>
                      <div style={{
                        fontSize: 12, fontWeight: 800, color: "#0f172a",
                        textTransform: "uppercase", letterSpacing: "0.06em",
                        fontFamily: "'Sora', sans-serif",
                      }}>Salexo AI Agent</div>
                      <div style={{
                        fontSize: 10, fontWeight: 700, color: "#22c55e",
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        display: "flex", alignItems: "center", gap: 5, marginTop: 3,
                        fontFamily: "'Sora', sans-serif",
                      }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: "#22c55e", display: "inline-block",
                        }} />
                        Active Now
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["#dde6f5", "#dde6f5"].map((c, i) => (
                      <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <AnimatedChat />

                {/* Input */}
                <div style={{
                  padding: "12px 18px", borderTop: "1px solid #f1f5f9",
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#fff", flexShrink: 0,
                }}>
                  <div style={{
                    flex: 1, background: "#f8fafc", borderRadius: 100,
                    padding: "10px 18px", fontSize: 12, color: "#94a3b8",
                    fontWeight: 500, border: "1px solid #e2e8f0",
                    fontFamily: "'Sora', sans-serif",
                  }}>Ask anything...</div>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, color: "#fff", cursor: "pointer", flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                  }}>↑</div>
                </div>
              </div>


              <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40">
                <ChannelIcon icon={<RiInstagramFill />} color="bg-gradient-to-tr from-pink-500 to-orange-400" />
                <ChannelIcon icon={<RiWhatsappFill />} color="bg-emerald-500" />
                <ChannelIcon icon={<RiMessengerFill />} color="bg-blue-600" />
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
}
const ChannelIcon = ({ icon, color }: { icon: React.ReactNode, color: string }) => (
  <div className={`${color} w-16 h-16 rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl hover:scale-110 transition-transform cursor-pointer border-4 border-white`}>
    {icon}
  </div>
);