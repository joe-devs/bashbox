// === FILE PATH: app/(main)/dashboard/page.tsx ===
import { Play, Terminal, Shield, Activity, BookOpen, Server } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="p-10 max-w-7xl mx-auto space-y-10">
            {/* Greeting Header */}
            <section>
                <h1 className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter">
                    Welcome back, <span className="text-[#39FF14]">sysadmin_kai</span>
                </h1>
                <p className="text-gray-500 font-mono text-sm tracking-tight">
                    RHCSA 10 Goal: <span className="text-[#39FF14]">Phase 1 - Core Mastery</span>
                </p>
            </section>

            {/* Hero: Active Lab */}
            <div className="group relative bg-[#161b22] border border-gray-800 rounded-none p-1 flex flex-col md:flex-row items-stretch overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Terminal size={120} />
                </div>

                <div className="bg-black w-full md:w-1/3 p-8 flex flex-col justify-center border-r border-gray-800 z-10">
                    <span className="text-[10px] font-black text-[#39FF14] mb-2 uppercase tracking-widest">Active Lab Environment</span>
                    <h2 className="text-2xl font-bold text-white mb-4">LVM & Storage Partitions</h2>
                    <div className="w-full h-1 bg-gray-900 mb-6">
                        <div className="h-full bg-[#39FF14] w-[45%] shadow-[0_0_10px_#39FF14]" />
                    </div>
                    <button className="w-full py-4 bg-[#39FF14] text-black font-black uppercase text-xs tracking-widest hover:bg-[#2ecc12] transition-colors flex items-center justify-center gap-2">
                        Resume Lab <Play size={14} fill="black" />
                    </button>
                </div>

                <div className="flex-1 p-8 space-y-6 bg-gradient-to-br from-[#161b22] to-[#0d1117] z-10">
                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Learning Telemetry</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <StatRow label="Daily Study Time" value="2h 15m" icon={<Activity size={14} />} />
                        <StatRow label="Servers Configured" value="8/42" icon={<Server size={14} />} color="text-blue-400" />
                        <StatRow label="Current Track" value="DevOps Foundation" icon={<Shield size={14} />} />
                        <StatRow label="Cookbook Progress" value="Chapter 4" icon={<BookOpen size={14} />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

type StatRowProps = { label: string; value: string; icon: import("react").ReactNode; color?: string };

function StatRow({ label, value, icon, color = "text-[#39FF14]" }: StatRowProps) {
    return (
        <div className="flex items-center gap-3 bg-black/40 p-4 border border-gray-800/50">
            <div className="text-gray-600">{icon}</div>
            <div>
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{label}</p>
                <p className={`text-sm font-mono font-bold ${color}`}>{value}</p>
            </div>
        </div>
    );
}