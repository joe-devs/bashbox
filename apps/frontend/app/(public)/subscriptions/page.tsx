"use client";
import { CheckCircle2 } from 'lucide-react';

export default function SubscriptionsPage() {
    return (
        <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans">
            <div className="max-w-5xl mx-auto py-24 px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-white mb-4">Choose Your Access Level</h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest italic">Prepare for enterprise production environments</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* FREE TIER */}
                    <div className="bg-[#161b22] border border-gray-800 rounded-[2.5rem] p-12 flex flex-col">
                        <h3 className="text-gray-400 font-mono text-xs uppercase mb-2">Tier 01</h3>
                        <h2 className="text-3xl font-bold text-white mb-6">Community</h2>
                        <div className="text-4xl font-black text-white mb-10">$0 <span className="text-sm font-normal text-gray-500 italic">/ Forever</span></div>
                        <ul className="space-y-4 mb-12 flex-1">
                            <FeatureItem text="Linux Fundamentals path" />
                            <FeatureItem text="Basic CLI interactive labs" />
                            <FeatureItem text="Community discord access" />
                        </ul>
                        <button className="w-full border-2 border-gray-800 text-white font-black py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-gray-800 transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* PRO TIER */}
                    <div className="bg-[#161b22] border-2 border-[#39FF14] rounded-[2.5rem] p-12 flex flex-col relative shadow-[0_0_50px_rgba(57,255,20,0.1)]">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em]">Recommended</div>
                        <h3 className="text-[#39FF14] font-mono text-xs uppercase mb-2">Tier 02</h3>
                        <h2 className="text-3xl font-bold text-white mb-6">Pro Admin</h2>
                        <div className="text-4xl font-black text-white mb-10">$19 <span className="text-sm font-normal text-gray-500 italic">/ Month</span></div>
                        <ul className="space-y-4 mb-12 flex-1">
                            <FeatureItem text="Everything in Community" />
                            <FeatureItem text="LVM & Advanced Storage Labs" />
                            <FeatureItem text="Network & Firewall Scenario" />
                            <FeatureItem text="Bash Scripting & Automation" />
                            <FeatureItem text="RHCSA 10 Mock Exams" />
                        </ul>
                        <button className="w-full bg-[#39FF14] text-black font-black py-4 rounded-xl text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:scale-[1.02] transition-all">
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-sm text-gray-400">
            <CheckCircle2 size={18} className="text-[#39FF14] shrink-0" />
            <span>{text}</span>
        </li>
    );
}