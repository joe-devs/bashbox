"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, MessageSquare, Mail, Terminal } from 'lucide-react';

import Sidebar from '@/components/layout/Sidebar';

export default function HelpPage() {
    return (
        <div className="p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-black text-white mb-6">Knowledge Base</h1>
                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search documentation, labs, or errors..."
                        className="w-full bg-[#161b22] border border-gray-800 rounded-2xl py-4 pl-12 focus:border-[#39FF14] outline-none transition-all text-white"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <HelpAction icon={<MessageSquare className="text-[#39FF14]" />} title="Community Discord" desc="Chat with 10k+ Linux students" />
                <HelpAction icon={<Mail className="text-blue-400" />} title="Ticket Support" desc="Response time: < 24 hours" />
            </div>

            <div className="space-y-4">
                <h3 className="text-white font-bold mb-4">Frequently Asked Questions</h3>
                <FAQItem question="How do I reset my lab environment?" answer="You can use the 'Reset Machine' button in the right-hand panel of any active lab. This will wipe the disk and restart your session." />
                <FAQItem question="Are the certifications industry-recognized?" answer="BashBox certifications prove your hands-on ability within our platform. Many students use them to supplement their RHCSA or LFCS portfolios." />
                <FAQItem question="Can I use my own terminal via SSH?" answer="Yes! For Pro members, we provide SSH credentials for every lab instance." />
            </div>
        </div>
    );
}

function HelpAction({ icon, title, desc }: any) {
    return (
        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 cursor-pointer hover:border-gray-600 transition-colors group">
            <div className="p-3 bg-black rounded-xl border border-gray-800 group-hover:border-[#39FF14]/50">{icon}</div>
            <div>
                <h4 className="text-white font-bold text-sm">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: any) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-[#161b22] border border-gray-800 rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
                <span className="text-sm font-bold text-gray-200">{question}</span>
                <ChevronDown size={18} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-800 pt-4">
                    {answer}
                </div>
            )}
        </div>
    );
}