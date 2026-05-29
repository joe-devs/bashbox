"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Terminal, ChevronRight } from 'lucide-react';



export default function ProfilePage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="p-8 lg:p-12 max-w-4xl mx-auto space-y-10"
        >
            {/* HEADER */}
            <section className="bg-[#161b22] border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="w-24 h-24 rounded-full border-2 border-[#39FF14] p-1 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=kai" className="rounded-full bg-black" alt="avatar" />
                </div>
                <div className="text-center md:text-left flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-1">
                        <h1 className="text-2xl font-black text-white">sysadmin_kai</h1>
                        <span className="bg-[#39FF14] text-black text-[9px] font-black px-2 py-0.5 rounded italic">RHCSA 10 CANDIDATE</span>
                    </div>
                    <p className="text-gray-500 font-mono text-xs mb-4 uppercase tracking-[0.2em]">Rank: Junior Admin</p>
                    <div className="w-full md:w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#39FF14] w-[45%]" />
                    </div>
                </div>
            </section>

            {/* LEARNING STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProfileStat label="Paths Completed" value="2 / 5" icon={<Award size={18} />} />
                <ProfileStat label="Hours in Lab" value="24.5" icon={<Clock size={18} />} />
                <ProfileStat label="CLI Mastery" value="75%" icon={<Terminal size={18} />} />
            </div>

            {/* RECENT ACCOMPLISHMENTS */}
            <section>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    Recent Progress
                </h3>
                <div className="space-y-3">
                    <ActivityRow module="LVM: Extending Volumes" date="2 hours ago" />
                    <ActivityRow module="User Management Essentials" date="Yesterday" />
                    <ActivityRow module="Basic Vim Configuration" date="3 days ago" />
                </div>
            </section>
        </motion.div>
    );
}

function ProfileStat({ label, value, icon }: any) {
    return (
        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="text-[#39FF14]">{icon}</div>
            <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
                <p className="text-xl font-mono font-bold text-white">{value}</p>
            </div>
        </div>
    );
}

function ActivityRow({ module, date }: any) {
    return (
        <div className="bg-[#161b22] border border-gray-800 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-gray-600">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{module}</span>
            </div>
            <span className="text-[10px] font-mono text-gray-600 uppercase">{date}</span>
        </div>
    );
}