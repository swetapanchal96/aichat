"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useChat } from "./ChatContext";

export default function ChatButton() {
    const router = useRouter();
    const { openChat } = useChat();

    const handleOpenChat = () => {
        openChat();
        router.push("/chat");
    };

    return (
        <div className="fixed bottom-10 right-10 z-999 flex flex-col items-end font-sans">
            <motion.button
                key="chat-button"
                initial={{ scale: 0.7, opacity: 0, y: 20 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    },
                }}
                exit={{ scale: 0.5, opacity: 0, y: 20 }}
                whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChat}
                className="w-16 h-16 bg-linear-to-br from-primary via-secondary to-accent rounded-[1.8rem] shadow-[0_15px_35px_rgba(44,68,107,0.35)] flex items-center justify-center text-white border border-white/20 relative group overflow-hidden"
            >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MessageSquare size={30} strokeWidth={2.5} />
                </motion.div>
            </motion.button>
        </div>
    );
}