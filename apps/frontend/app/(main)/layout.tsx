// === FILE PATH: app/(main)/layout.tsx ===
import Sidebar from '@/components/layout/Sidebar';
import ScanlineOverlay from '@/components/ui/ScanlineOverlay';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#0d1117] overflow-hidden">
            <ScanlineOverlay />
            <Sidebar />
            <main className="flex-1 flex flex-col relative">
                {/* Global Header */}
                <header className="h-16 border-b border-gray-800 flex items-center justify-between px-8 bg-[#0d1117]/50 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Path /</span>
                        <span className="text-[#39FF14] font-mono text-xs uppercase tracking-widest">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-[#39FF14] animate-pulse" />
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter">Connection: Encrypted</span>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_top,#161b22_0%,#0d1117_100%)]">
                    {children}
                </div>
            </main>
        </div>
    );
}