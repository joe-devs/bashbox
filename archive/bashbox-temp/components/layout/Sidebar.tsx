"use client";

import React from 'react';
import {
    LayoutDashboard,
    Map,
    FlaskConical,
    User,
    HelpCircle,
    Settings,
    Flame,
    Terminal,
    Server
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Roadmaps', href: '/catalog', icon: Map },
    { name: 'Active Labs', href: '/labs', icon: FlaskConical },
    { name: 'Pricing', href: '/pricing', icon: Flame },
    { name: 'Help', href: '/help', icon: HelpCircle },
    { name: 'Profile', href: '/profile', icon: User },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#161b22] border-r border-gray-800 flex flex-col z-50">
            {/* Logo Section */}
            <div className="p-6 flex items-center gap-3">
                <div className="bg-[#39FF14] p-1.5 rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                    <Terminal size={20} className="text-black" strokeWidth={3} />
                </div>
                <span className="text-xl font-black text-white tracking-tighter uppercase">BashBox</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => {
                    // Exact match for dashboard to avoid partial match issues with root
                    const isActive = item.href === '/dashboard'
                        ? (pathname === '/dashboard' || pathname === '/')
                        : pathname?.startsWith(item.href);

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                        >
                            <div className={`
                                w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group cursor-pointer mb-1
                                ${isActive
                                    ? 'bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.05)]'
                                    : 'text-gray-500 hover:text-gray-200 hover:bg-white/5 border border-transparent'}
                            `}>
                                <item.icon size={20} className={isActive ? 'text-[#39FF14]' : 'text-gray-600 group-hover:text-gray-400'} />
                                {item.name}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* BOTTOM: SERVER STATUS MODULE */}
            <div className="p-4 border-t border-gray-800">
                <div className="bg-black/30 border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-900 rounded-lg text-gray-500">
                            <Server size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                                Lab Node: RHEL-01
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
                                </span>
                                <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-tighter">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}