"use client";
import { BookOpen } from 'lucide-react';

export default function SyllabusPage() {
    const steps = [
        { title: "Linux Basics", desc: "Filesystem hierarchy, essential commands, and vim mastery.", tag: "Unit 1" },
        { title: "User & Permissions", desc: "Managing access, SUID/SGID, and ACLs for enterprise security.", tag: "Unit 2" },
        { title: "Storage & Networking", desc: "LVM, VDO, firewalld, and network configuration on RHEL.", tag: "Unit 3" },
        { title: "Automation", desc: "Advanced Bash scripting and system maintenance with cron.", tag: "Unit 4" },
    ];

    return (
        <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans">
            <div className="max-w-4xl mx-auto py-24 px-8">
                <header className="mb-20">
                    <div className="flex items-center gap-3 text-[#39FF14] mb-4">
                        <BookOpen size={24} />
                        <span className="font-mono text-sm uppercase tracking-widest font-bold">Curriculum Roadmaps</span>
                    </div>
                    <h1 className="text-5xl font-black text-white mb-6 tracking-tight">System Admin Journey</h1>
                    <p className="text-gray-500 max-w-2xl leading-relaxed">
                        A comprehensive track designed for RHCSA 10 objectives. Each stage includes interactive labs on production-ready servers.
                    </p>
                </header>

                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <div key={i} className="flex gap-8 group">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full border border-gray-800 bg-[#161b22] flex items-center justify-center font-mono text-[#39FF14] font-bold">
                                    0{i + 1}
                                </div>
                                {i !== steps.length - 1 && <div className="w-px h-full bg-gray-800 mt-4 group-hover:bg-[#39FF14]/30 transition-colors" />}
                            </div>
                            <div className="pb-12">
                                <span className="text-[10px] font-black text-[#39FF14] uppercase tracking-widest border border-[#39FF14]/20 px-2 py-0.5 rounded">
                                    {step.tag}
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-4 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}