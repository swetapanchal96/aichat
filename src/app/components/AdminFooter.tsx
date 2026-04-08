export default function AdminFooter() {
    return (
        <footer className="border-t border-black/10 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-black/60">
                © {new Date().getFullYear()} <span className="text-primary font-semibold">Ai Chat</span>. All rights reserved.
            </div>
        </footer>
    );
}
