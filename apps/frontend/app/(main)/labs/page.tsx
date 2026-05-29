"use client";

import React from 'react';
import Link from 'next/link';
import { Terminal, Clock, Shield, ArrowRight, Lock } from 'lucide-react';

export default function LabsPage() {
    const labs = [
        {
            id: 404, // Matches the route /labs/404
            title: "Sudo Privileges",
            description: "Learn how to manage user permissions and grants sudo access securely in a Linux environment.",
            difficulty: "Hard",
            time: "45 mins",
            module: "User Management",
            status: "In Progress",
            progress: 66,
            locked: false
        },
        // Placeholder for future labs
        {
            id: 405,
            title: "File Permissions",
            description: "Master chmod, chown, and umask to secure your filesystem.",
            difficulty: "Medium",
            time: "30 mins",
            module: "File System",
            status: "Locked",
            progress: 0,
            locked: true
        },
        {
            id: 406,
            title: "Process Management",
            description: "Understand ps, kill, and nice to manage system processes.",
            difficulty: "Medium",
            time: "35 mins",
            module: "System Admin",
            status: "Locked",
            progress: 0,
            locked: true
        }
    ];

    return (
        <div className="p-8 lg:p-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Active Labs</h1>
                    <p className="text-gray-400">Select a lab to continue your training.</p>
                </div>

                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-[#161b22] border border-gray-800 rounded-lg text-sm text-gray-300 font-mono">
                        <span className="text-[#39FF14] font-bold">3</span> Labs Available
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {labs.map((lab) => (
                    <LabCard key={lab.id} lab={lab} />
                ))}
            </div>
        </div>
    );
}

function LabCard({ lab }: { lab: any }) {
    if (lab.locked) {
        return (
            <div className="group relative bg-[#161b22]/50 border border-gray-800 rounded-2xl p-6 flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Lock size={32} className="text-gray-600 mb-2" />
                </div>
                <div className="blur-[2px] pointer-events-none select-none h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-gray-900 rounded-lg border border-gray-800">
                            <Terminal size={20} className="text-gray-500" />
                        </div>
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-800 text-gray-500`}>
                            {lab.difficulty}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-500 mb-2">{lab.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-1">{lab.description}</p>

                    <div className="flex items-center gap-4 text-xs font-mono text-gray-600 mt-auto">
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>{lab.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Shield size={14} />
                            <span>{lab.module}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Link href={`/labs/${lab.id}`} className="group relative bg-[#161b22] border border-gray-800 rounded-2xl p-6 hover:border-[#39FF14]/50 transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-black rounded-lg border border-gray-800 group-hover:border-[#39FF14]/30 transition-colors">
                    <Terminal size={24} className="text-[#39FF14]" />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${lab.difficulty === 'Hard' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        lab.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                            'bg-green-500/10 text-green-500 border border-green-500/20'
                        }`}>
                        {lab.difficulty}
                    </span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">{lab.title}</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">{lab.description}</p>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1.5">
                    <span>PROGRESS</span>
                    <span className="text-[#39FF14]">{lab.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#39FF14] transition-all duration-1000 ease-out"
                        style={{ width: `${lab.progress}%` }}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800/50">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{lab.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Shield size={14} />
                        <span>{lab.module}</span>
                    </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={16} strokeWidth={3} />
                </div>
            </div>
        </Link>
    );
}
