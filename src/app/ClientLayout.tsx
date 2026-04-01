"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/customer") || pathname.startsWith("/superadmin") || pathname.startsWith("/google-register");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <ChatWidget />}
      {!hideLayout && <Footer />}
    </>
  );
}
