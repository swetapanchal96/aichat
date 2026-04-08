"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ChatContextType = {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  setIsOpen: (value: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const CHAT_STORAGE_KEY = "chat_widget_open";

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpenState] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedState = localStorage.getItem(CHAT_STORAGE_KEY);
    if (savedState === "true") {
      setIsOpenState(true);
    }
  }, []);

  const setIsOpen = (value: boolean) => {
    setIsOpenState(value);

    if (typeof window !== "undefined") {
      localStorage.setItem(CHAT_STORAGE_KEY, String(value));
    }
  };

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <ChatContext.Provider
      value={{ isOpen, openChat, closeChat, toggleChat, setIsOpen }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used inside ChatProvider");
  }

  return context;
}