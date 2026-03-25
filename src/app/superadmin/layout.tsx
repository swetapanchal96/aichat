
"use client";

import Script from "next/script";
// import AdminFooter from "../components/AdminFooter";
// import RoleGuard from "../components/RoleGuard";
import SuperAdminHeader from "../components/SuperadminHeader";
import { usePathname } from "next/navigation";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hidelayout = pathname === "/superadmin/login" || pathname === "/superadmin/logout";

    if (hidelayout) return <main>{children}</main>;

    return (
        // <RoleGuard roleRequired="superadmin">
        <>
            <SuperAdminHeader />

            <main>{children}</main>
        </>
        //   <AdminFooter />
        // </RoleGuard>
    );
}
