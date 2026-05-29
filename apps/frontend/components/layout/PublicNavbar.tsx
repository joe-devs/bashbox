"use client";

import React from 'react';
import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function PublicNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="bg-[#39FF14] p-1.5 rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all">
                        <Terminal size={20} className="text-black" strokeWidth={3} />
                    </div>
                    <span className="text-xl font-black text-white tracking-tighter uppercase">BashBox</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/syllabus" label="Syllabus" />
                    <NavLink href="/subscriptions" label="Pricing" />
                    <NavLink href="/login" label="Sign In" />
                    <Link href="/subscriptions">
                        <button className="bg-[#39FF14] text-black font-black px-6 py-2.5 rounded-lg text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.15)]">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0d1117] border-b border-gray-800 px-6 py-8 space-y-6 animate-in slide-in-from-top-5">
                    <MobileNavLink href="/syllabus" label="Syllabus" />
                    <MobileNavLink href="/subscriptions" label="Pricing" />
                    <MobileNavLink href="/login" label="Sign In" />
                    <Link href="/subscriptions" className="block w-full">
                        <button className="w-full bg-[#39FF14] text-black font-black py-4 rounded-xl text-sm uppercase tracking-widest">
                            Get Started
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
            {label}
        </Link>
    );
}

function MobileNavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href} className="block text-lg font-bold text-gray-300 hover:text-[#39FF14]">
            {label}
        </Link>
    );
}
