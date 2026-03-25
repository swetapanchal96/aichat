"use client";

import SuperAdminHeader from "../components/SuperadminHeader";
import { usePathname } from "next/navigation";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Pages where we don't want the header (Login/Logout)
    const hidelayout = pathname === "/superadmin/login" || pathname === "/superadmin/logout";

    if (hidelayout) {
        return <main className="min-h-screen bg-background">{children}</main>;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* The Header is 'fixed', so it stays at the top while you scroll */}
            <SuperAdminHeader />

            {/* pt-20: Adds top padding so the dashboard content 
                starts below the 80px (h-20) header.
            */}
            <main className="pt-20 animate-in fade-in duration-700">
                {children}
            </main>

            {/* You can uncomment the footer later if needed */}
            {/* <AdminFooter /> */}
        </div>
    );
}