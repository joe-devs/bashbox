"use client";

import React from 'react';
import {
    LayoutDashboard,
    Map,
    FlaskConical,
    HelpCircle,
    Bell,
    Search,
    Command,
    ChevronRight,
    Server,
    Terminal,
    Flame
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Simple breadcrumb logic based on path
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs = pathSegments.length > 0 ? pathSegments : ['Dashboard'];

    return (
        <div className="flex h-screen bg-[#0d1117] text-gray-300 font-sans overflow-hidden">

            {/* --- SIDEBAR --- */}
            <Sidebar />

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 flex flex-col relative overflow-hidden">

                {/* TOP HEADER */}
                <header className="h-16 min-h-[64px] bg-[#0d1117] border-b border-gray-800 flex items-center justify-between px-8 z-40">

                    {/* Left: Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-medium">
                        <span className="text-gray-600">Home</span>
                        {breadcrumbs.map((segment, idx) => (
                            <React.Fragment key={idx}>
                                <ChevronRight size={14} className="text-gray-800" />
                                <span className={idx === breadcrumbs.length - 1 ? "text-[#39FF14] capitalize" : "text-gray-400 capitalize"}>
                                    {segment.replace(/-/g, ' ')}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Center: Global Search */}
                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative group">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#39FF14] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search labs or commands..."
                                className="w-full bg-[#161b22] border border-gray-800 rounded-lg py-2 pl-10 pr-12 text-sm focus:outline-none focus:border-[#39FF14]/50 focus:ring-1 focus:ring-[#39FF14]/10 transition-all text-gray-200"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 bg-gray-800 px-1.5 py-0.5 rounded border border-gray-700">
                                <Command size={10} className="text-gray-500" />
                                <span className="text-[9px] font-bold text-gray-500">K</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Actions & User */}
                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-500 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0d1117]"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-gray-800 cursor-pointer group">
                            <div className="text-right">
                                <p className="text-xs font-bold text-white leading-none mb-1 group-hover:text-[#39FF14] transition-colors">sysadmin_kai</p>
                                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter">Junior Admin</p>
                            </div>
                            <div className="w-9 h-9 rounded-full border border-gray-700 p-0.5 overflow-hidden group-hover:border-[#39FF14] transition-all">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=kai"
                                    alt="User Avatar"
                                    className="w-full h-full rounded-full bg-gray-900"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* SCROLLABLE PAGE CONTENT */}
                <main className="flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}

