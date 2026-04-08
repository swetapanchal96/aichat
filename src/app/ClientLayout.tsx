"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { ChatProvider } from "./components/ChatContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/chat",
    "/customer",
    "/customer",
    "/customer/login",
    "/superadmin",
    "/superadmin/login",
    "/google-register",
  ];

  const hideLayout =
    hideLayoutRoutes.includes(pathname) ||
    pathname.startsWith("/customer/") ||
    pathname.startsWith("/superadmin/");

  return (
    <ChatProvider>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <ChatWidget />}
      {!hideLayout && <Footer />}
    </ChatProvider>
  );
}