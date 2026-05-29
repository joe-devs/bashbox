"use client";

import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

import Sidebar from '@/components/layout/Sidebar';

export default function PricingPage() {
    return (
        <div className="p-8 lg:p-12 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-black text-white mb-4">Level Up Your Career</h1>
                <p className="text-gray-500 max-w-xl mx-auto italic">Unlock the full terminal experience with private labs and certifications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PriceCard
                    tier="Free"
                    price="$0"
                    features={['Public Community Labs', 'Standard Roadmaps', 'Community Support']}
                />
                <PriceCard
                    tier="Pro"
                    price="$24"
                    featured={true}
                    features={['Private Lab Environments', 'Unlimited CTF Challenges', 'RHCSA Prep Path', 'Certificates of Completion']}
                />
                <PriceCard
                    tier="Enterprise"
                    price="Custom"
                    features={['Custom Lab Scenarios', 'Team Progress Tracking', 'Priority Support', 'SSO Integration']}
                />
            </div>
        </div>
    );
}

type PriceCardProps = { tier: string; price: string; features: string[]; featured?: boolean };

function PriceCard({ tier, price, features, featured = false }: PriceCardProps) {
    return (
        <div className={`p-10 rounded-[2.5rem] border flex flex-col relative transition-all ${featured ? 'bg-[#161b22] border-[#39FF14] shadow-[0_0_40px_rgba(57,255,20,0.1)] scale-105 z-10' : 'bg-[#161b22] border-gray-800'
            }`}>
            {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                </div>
            )}
            <h3 className="text-gray-400 font-mono text-sm uppercase mb-4">{tier}</h3>
            <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">{price}</span>
                {price !== 'Custom' && <span className="text-gray-600 font-mono">/mo</span>}
            </div>

            <div className="space-y-4 mb-10 flex-1">
                {features.map((f: string) => (
                    <div key={f} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={18} className="text-[#39FF14] shrink-0 mt-0.5" />
                        <span>{f}</span>
                    </div>
                ))}
            </div>

            <button className={`w-full py-4 rounded-2xl font-black text-sm uppercase transition-all flex items-center justify-center gap-2 ${featured ? 'bg-[#39FF14] text-black shadow-lg hover:scale-[1.02]' : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}>
                <Zap size={16} fill={featured ? "black" : "none"} /> {featured ? 'Stay Pro' : 'Get Started'}
            </button>
        </div>
    );
}