// === FILE PATH: app/(public)/page.tsx ===
import { Terminal, Shield, Cpu, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-[#0d1117] overflow-hidden">
            {/* Background Effect: Cyberpunk Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Scanline Overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%]" />

            <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 mb-8 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#39FF14]">Production Environment Ready</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter italic uppercase">
                    Bash<span className="text-[#39FF14] drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]">Box</span>
                </h1>

                <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
                    The only Linux training platform providing <span className="text-white font-mono">bare-metal parity</span>.
                    Deploy RHEL nodes. Break systems. Rebuild them.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/login" className="px-10 py-4 bg-[#39FF14] text-black font-black uppercase tracking-widest text-sm rounded-none clip-path-polygon hover:scale-105 transition-transform shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                        Initialize Session
                    </Link>
                    <Link href="/syllabus" className="px-10 py-4 border border-gray-800 text-gray-400 font-bold uppercase tracking-widest text-sm rounded-none hover:bg-white/5 transition-colors">
                        Access Syllabus
                    </Link>
                </div>

                {/* Feature Preview */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <Feature icon={<Terminal />} title="Real Kernels" desc="No JS-simulators. Genuine Linux execution." />
                    <Feature icon={<Shield />} title="RHCSA Focused" desc="Mapped to 2024 Exam Objectives." />
                    <Feature icon={<Cpu />} title="Persistent Storage" desc="LVM & VDO labs that save state." />
                </div>
            </section>
        </div>
    );
}

function Feature({ icon, title, desc }: any) {
    return (
        <div className="p-8 border border-gray-800 bg-[#161b22]/50 backdrop-blur-sm text-left group hover:border-[#39FF14]/50 transition-colors">
            <div className="text-[#39FF14] mb-4 group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className="text-white font-bold mb-2 uppercase tracking-tight">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}