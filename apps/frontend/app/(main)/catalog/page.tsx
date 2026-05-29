"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, HardDrive, Globe, Zap, Search, ChevronRight, BookOpen } from 'lucide-react';

const RHCSA_TRACKS = [
    {
        title: "Linux Fundamentals",
        desc: "Master the command line interface and navigate the file system with confidence. Learn essential tools like grep, find, and vim.",
        icon: <Terminal className="text-[#39FF14]" />,
        duration: "6h",
        level: "Essential"
    },
    {
        title: "User & Permissions",
        desc: "Manage users, groups, and standard/special permissions. Understand SUID, SGID, and the Sticky Bit for system security.",
        icon: <Users className="text-[#39FF14]" />,
        duration: "4h",
        level: "Core"
    },
    {
        title: "Storage & LVM",
        desc: "Configure partitions, file systems, and Logical Volume Management. Essential training for managing data on enterprise servers.",
        icon: <HardDrive className="text-[#39FF14]" />,
        duration: "8h",
        level: "Advanced"
    },
    {
        title: "Networking Basics",
        desc: "Configure IP addresses, hostname resolution, and SSH. Learn to manage the firewall and basic network services on RHEL.",
        icon: <Globe className="text-[#39FF14]" />,
        duration: "5h",
        level: "Core"
    },
    {
        title: "System Automation",
        desc: "Automate repetitive tasks with Bash scripting and cron. Learn to write efficient scripts for system maintenance.",
        icon: <Zap className="text-[#39FF14]" />,
        duration: "7h",
        level: "Essential"
    }
];

import Sidebar from '@/components/layout/Sidebar';

export default function CatalogPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="p-8 lg:p-12 max-w-7xl mx-auto"
        >
            <header className="mb-12">
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight">System Admin Catalog</h1>
                <p className="text-gray-500 font-medium">Structured learning paths for the RHCSA 10 certification.</p>
            </header>

            {/* SEARCH BAR */}
            <div className="relative max-w-2xl mb-12">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input
                    type="text"
                    placeholder="Search modules (e.g. lvm, chmod, systemd)..."
                    className="w-full bg-[#161b22] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-sm focus:border-[#39FF14] outline-none transition-all"
                />
            </div>

            {/* FEATURED: FUNDAMENTALS */}
            <section className="mb-12">
                <div className="bg-[#161b22] border border-gray-800 rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all">
                    <div className="flex-1 z-10">
                        <span className="bg-[#39FF14]/10 text-[#39FF14] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Recommended Start</span>
                        <h2 className="text-3xl font-black text-white mb-4">Mastering the CLI</h2>
                        <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">The foundation of all Linux administration. Learn to manage files, process text, and control system execution from the terminal.</p>
                        <button className="bg-[#39FF14] text-black font-black px-8 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)] uppercase text-xs tracking-tighter">
                            Start Lab
                        </button>
                    </div>
                    <div className="hidden lg:block opacity-20">
                        <Terminal size={180} strokeWidth={1} className="text-[#39FF14]" />
                    </div>
                </div>
            </section>

            {/* GRID TRACKS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {RHCSA_TRACKS.slice(1).map((track, i) => (
                    <div key={i} className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex flex-col hover:bg-[#1c232c] transition-all group">
                        <div className="w-12 h-12 bg-black rounded-xl border border-gray-800 flex items-center justify-center mb-6 group-hover:border-[#39FF14]/50 transition-colors">
                            {track.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{track.title}</h3>
                        <p className="text-xs text-gray-500 mb-6 leading-relaxed flex-1">{track.desc}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                            <span className="text-[10px] font-mono text-gray-600 uppercase">{track.duration} • {track.level}</span>
                            <button className="text-[#39FF14] text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:underline">
                                Start Lab <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}