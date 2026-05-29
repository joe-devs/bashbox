"use client";

import React, { useState } from 'react';
import { User, Shield, Bell, Monitor, Save } from 'lucide-react';

import Sidebar from '@/components/layout/Sidebar';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('Account');

    const tabs = [
        { id: 'Account', icon: User },
        { id: 'Security', icon: Shield },
        { id: 'Notifications', icon: Bell },
        { id: 'Appearance', icon: Monitor },
    ];

    return (
        <div className="p-8 lg:p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
            {/* LEFT NAVIGATION */}
            <aside className="w-full md:w-64 space-y-2">
                <h2 className="text-xl font-bold text-white mb-6">Settings</h2>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20' : 'text-gray-500 hover:text-white'
                            }`}
                    >
                        <tab.icon size={18} />
                        {tab.id}
                    </button>
                ))}
            </aside>

            {/* CONTENT AREA */}
            <main className="flex-1 bg-[#161b22] border border-gray-800 rounded-3xl p-8">
                <div className="space-y-8">
                    <section>
                        <h3 className="text-white font-bold mb-1">{activeTab} Details</h3>
                        <p className="text-gray-500 text-xs mb-6">Manage your core profile information and public presence.</p>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Username</label>
                                <input
                                    type="text"
                                    defaultValue="sysadmin_kai"
                                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-[#39FF14] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue="kai@bashbox.io"
                                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-[#39FF14] outline-none transition-all"
                                />
                            </div>

                            <div className="pt-4 flex items-center justify-between border-t border-gray-800">
                                <div>
                                    <h4 className="text-white text-sm font-bold">Public Profile</h4>
                                    <p className="text-xs text-gray-500">Allow others to see your progress.</p>
                                </div>
                                <Toggle active={true} />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-white text-sm font-bold">Email Marketing</h4>
                                    <p className="text-xs text-gray-500">Receive weekly Linux newsletters.</p>
                                </div>
                                <Toggle active={false} />
                            </div>
                        </div>
                    </section>

                    <button className="bg-[#39FF14] text-black font-black px-8 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(57,255,20,0.2)]">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </main>
        </div>
    );
}

function Toggle({ active }: { active: boolean }) {
    return (
        <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${active ? 'bg-[#39FF14]' : 'bg-gray-800'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
        </div>
    );
}