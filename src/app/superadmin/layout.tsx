"use client";

import { useEffect, useState } from "react";
import SuperAdminHeader from "../components/SuperadminHeader";
import { usePathname, useRouter } from "next/navigation";
import AdminFooter from "../components/AdminFooter";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    const normalizedPath =
        pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

    const hideLayout =
        normalizedPath === "/superadmin/login" ||
        normalizedPath === "/superadmin/logout";

    useEffect(() => {
        if (hideLayout) {
            setIsAuthChecked(true);
            return;
        }

        const token = localStorage.getItem("superadmintoken");

        if (!token) {
            router.push("/superadmin/login");
        } else {
            setIsAuthChecked(true);
        }
    }, [normalizedPath, hideLayout, router]);

    if (!isAuthChecked && !hideLayout) {
        return null;
    }

    if (hideLayout) {
        return <main className="min-h-screen bg-background">{children}</main>;
    }

    return (
        <div className="min-h-screen bg-background">
            <SuperAdminHeader />

            <main className="pt-20 animate-in fade-in duration-700">
                {children}
            </main>

            <AdminFooter />
        </div>
    );
}