"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomerHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [hasToken, setHasToken] = useState<boolean | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const adminToken = localStorage.getItem("adminToken");
            setHasToken(!!adminToken);
        }
    }, [pathname]);

    const normalizedPath =
        pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

    const hideLayout =
        normalizedPath === "/customer/login" ||
        normalizedPath === "/customer/logout" ||
        normalizedPath === "/customer/register" ||
        normalizedPath === "/customer/forgot-password";

    if (hideLayout) {
        return <main className="min-h-screen bg-background">{children}</main>;
    }

    return (
        <>
            <CustomerHeader />
            <main className="pt-20 animate-in fade-in duration-700">
                {children}
            </main>
            <AdminFooter />
        </>
    );
}