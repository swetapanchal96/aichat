
"use client";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import CustomerHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [hasToken, setHasToken] = useState<boolean | null>(null);
    const pathname = usePathname();
    const router = useRouter()

    const [isAuthChecked, setIsAuthChecked] = useState(false);

    const hidelayout = pathname === "/customer/login" || pathname === "/customer/logout" 

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const adminToken = localStorage.getItem("adminToken");
    //         setHasToken(!!(adminToken));
    //     }
    // }, [pathname]);

    useEffect(() => {
        const token = localStorage.getItem('customerToken');

        if(!token && !hidelayout) {
            router.push('/customer/login')
        } else {
            setIsAuthChecked(true);
        }
    }, [pathname])

    const hidelayout =
        pathname === "/customer/login" ||
        pathname === "/customer/logout" ||
        pathname === "/customer/register" ||
        pathname === "/customer/forgot-password";

    if (hidelayout) {
        return <main className="min-h-screen bg-background">{children}</main>;
    }

    return (
        <>
            {/* <RoleGuard roleRequired="admin"> */}
            <CustomerHeader />
            <main className="pt-20 animate-in fade-in duration-700">
                {children}
            </main>
            <AdminFooter />
            {/* </RoleGuard> */}
        </>
    );
}