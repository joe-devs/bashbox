"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
    Terminal as TerminalIcon,
    RotateCcw,
    Settings,
    Clock,
    CheckCircle2,
    Lock,
    AlertTriangle,
    Power,
    Activity,
    Globe,
    Loader2,
    RefreshCw,
    Copy
} from 'lucide-react';

// --- TYPES ---
interface LabDetails {
    container_name: string;
    ip_address: string;
    ssh_port: number;
    status: string;
}

export default function LabPage() {
    const params = useParams();
    const labId = params.id as string;

    // --- STATE ---
    const [isProvisioning, setIsProvisioning] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [labData, setLabData] = useState<LabDetails | null>(null);
    const [bootLogs, setBootLogs] = useState<string[]>(["Initializing request..."]);

    // --- TASK NAVIGATION STATE ---
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks] = useState([
        { id: 1, title: "Setup Admin", description: "Create user sysadmin and add to wheel." },
        { id: 2, title: "LVM Management", description: "Create a 2GB LV named 'data' in the 'vg_storage' volume group." },
        { id: 3, title: "Firewall Config", description: "Configure firewalld to allow SSH and HTTP traffic." }
    ]);

    // --- NAVIGATION LOGIC ---
    const handleNextTask = () => {
        if (currentTaskIndex < tasks.length - 1) {
            setCurrentTaskIndex(prev => prev + 1);
        }
    };

    const handleSubmitLab = () => {
        console.log("Lab grading sequence initiated for:", labData?.container_name);
        alert("Lab submitted for evaluation. Checking system state...");
    };

    // --- PROVISIONING LOGIC (DO NOT MODIFY) ---
    const startLab = async () => {
        setIsProvisioning(true);
        setError(null);
        setBootLogs(["Establishing connection to orchestration layer..."]);

        try {
            // Simulate boot log sequence for UX
            const logs = [
                "Pulling Rocky Linux 10 minimal image...",
                "Creating ephemeral LXC container instance...",
                "Configuring systemd and network interfaces...",
                "Injecting RHCSA check scripts...",
                "Finalizing SSH handshake..."
            ];

            let logIndex = 0;
            const logInterval = setInterval(() => {
                if (logIndex < logs.length) {
                    setBootLogs(prev => [...prev, logs[logIndex]]);
                    logIndex++;
                } else {
                    clearInterval(logInterval);
                }
            }, 800);

            const response = await fetch('http://localhost:4000/api/labs/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: "sysadmin_kai", lab_id: labId }),
            });

            if (!response.ok) throw new Error("Backend orchestration failed");

            const data = await response.json();

            // Artificial delay to ensure user sees the "boot" sequence
            setTimeout(() => {
                setLabData(data.details);
                setIsProvisioning(false);
            }, 4000);

        } catch (err) {
            setError("Failed to provision lab environment. Ensure the backend server is running.");
            setIsProvisioning(false);
        }
    };

    useEffect(() => {
        startLab();
    }, [labId]);

    // --- INITIALIZATION OVERLAY ---
    if (isProvisioning || error) {
        return (
            <div className="fixed inset-0 z-[100] bg-[#0d1117] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-full max-w-md">
                    {error ? (
                        <div className="space-y-6">
                            <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-2xl">
                                <AlertTriangle size={48} className="text-red-500 mx-auto mb-4" />
                                <h2 className="text-xl font-bold text-white mb-2">Connection Failure</h2>
                                <p className="text-gray-400 text-sm font-mono">{error}</p>
                            </div>
                            <button
                                onClick={startLab}
                                className="flex items-center gap-2 mx-auto bg-[#39FF14] text-black font-black px-8 py-3 rounded-xl hover:scale-105 transition-all"
                            >
                                <RefreshCw size={18} /> RETRY PROVISIONING
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="relative">
                                <div className="w-20 h-20 border-4 border-gray-800 border-t-[#39FF14] rounded-full animate-spin mx-auto" />
                                <TerminalIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#39FF14]" size={24} />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Booting Environment</h2>
                                <p className="text-[#39FF14] font-mono text-xs animate-pulse">Lab ID: {labId}</p>
                            </div>

                            <div className="bg-black/50 border border-gray-800 rounded-xl p-4 h-48 overflow-y-auto text-left font-mono text-[10px] space-y-1 custom-scrollbar">
                                {bootLogs.map((log, i) => (
                                    <div key={i} className="flex gap-2 text-gray-500">
                                        <span className="text-[#39FF14] tracking-tighter">[OK]</span>
                                        <span>{log}</span>
                                    </div>
                                ))}
                                <div className="w-2 h-4 bg-[#39FF14] animate-pulse inline-block" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // --- MAIN LAB UI (ONLY RENDERED AFTER PROVISIONING) ---
    return (
        <div className="flex flex-col h-screen bg-[#0d1117] text-gray-300 font-sans overflow-hidden">
            {/* Header */}
            <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0d1117] shrink-0">
                <div className="flex items-center gap-4">
                    <TerminalIcon size={20} className="text-[#39FF14]" />
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-bold text-white tracking-tight">BashBox</span>
                        <span className="text-gray-700">/</span>
                        <span className="text-[#39FF14] font-mono uppercase tracking-widest text-xs">Lab_{labId}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-black border border-gray-800 px-4 py-1 rounded-full font-mono text-xs text-white">
                        <Clock size={12} className="inline mr-2 text-gray-500" /> 00:59:59
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-[10px] font-bold text-[#39FF14]">
                        JD
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Panel: Tasks */}
                <aside className="w-[350px] border-r border-gray-800 flex flex-col bg-[#0d1117]">
                    <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                        <h1 className="text-xl font-black text-white mb-6 uppercase tracking-tight">User Management</h1>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl border-2 border-[#39FF14]/50 bg-[#161b22] shadow-[0_0_20px_rgba(57,255,20,0.05)] transition-all">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-[#39FF14] flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-tight">
                                            Task {tasks[currentTaskIndex].id}: {tasks[currentTaskIndex].title}
                                        </h3>
                                        <p className="text-xs text-gray-400 mb-4 leading-relaxed italic">
                                            {tasks[currentTaskIndex].description}
                                        </p>
                                        <div className="bg-black p-3 rounded-lg border border-gray-800 flex justify-between items-center group">
                                            <code className="text-[10px] font-mono text-[#39FF14]">Verify state on {labData?.ip_address}</code>
                                            <Copy size={12} className="text-gray-600 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC TASK NAVIGATION FOOTER */}
                    <div className="p-6 border-t border-gray-800 bg-[#0d1117]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <label className="text-[10px] font-black text-gray-600 uppercase mb-1 block tracking-widest leading-none">
                                    Progress
                                </label>
                                <span className="text-xs font-mono text-white">
                                    Task {currentTaskIndex + 1} of {tasks.length}
                                </span>
                            </div>

                            {currentTaskIndex < tasks.length - 1 ? (
                                <button
                                    onClick={handleNextTask}
                                    className="bg-[#39FF14] text-black font-black px-4 py-2 rounded-lg text-xs uppercase shadow-[0_0_15px_rgba(57,255,20,0.2)] hover:scale-105 active:scale-95 transition-all"
                                >
                                    Next Task
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmitLab}
                                    className="bg-[#39FF14] text-black font-black px-4 py-2 rounded-lg text-xs uppercase shadow-[0_0_15px_rgba(57,255,20,0.2)] hover:scale-105 active:scale-95 transition-all"
                                >
                                    Submit Lab
                                </button>
                            )}
                        </div>
                    </div>
                </aside>

                {/* Center: Terminal */}
                <main className="flex-1 bg-black p-4 flex flex-col">
                    <div className="flex-1 bg-[#0d1117] border border-gray-800 rounded-xl flex flex-col shadow-2xl overflow-hidden">
                        <div className="h-10 bg-gray-900/50 border-b border-gray-800 flex items-center px-4 gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
                                <span className="text-[10px] font-mono text-gray-300">{labData?.container_name}</span>
                            </div>
                        </div>
                        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto text-gray-300 leading-relaxed selection:bg-[#39FF14] selection:text-black">
                            <p className="text-gray-500 mb-4 tracking-tighter underline">Connection established to {labData?.ip_address}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-[#39FF14] font-bold">root@bashbox:~#</span>
                                <span className="w-2.5 h-5 bg-[#39FF14] animate-pulse" />
                            </div>
                        </div>
                        <div className="h-8 bg-gray-900/20 border-t border-gray-800 px-4 flex items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                                <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest">Live Terminal Session</span>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Right Panel: Stats */}
                <aside className="w-[280px] border-l border-gray-800 bg-[#0d1117] p-6 space-y-8 shrink-0">
                    <section>
                        <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-4">Target Instance</h4>
                        <div className="bg-black/40 border border-gray-800 p-4 rounded-2xl">
                            <p className="text-xl font-mono font-bold text-white mb-1">{labData?.ip_address}</p>
                            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                                <Globe size={12} /> Rocky Linux 10 minimal
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-widest">System Metrics</h4>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border-2 border-gray-800 border-t-[#39FF14] flex items-center justify-center text-[10px] font-bold text-white">12%</div>
                            <div>
                                <p className="text-white text-xs font-bold leading-none">CPU Usage</p>
                                <p className="text-[9px] text-gray-600 uppercase font-bold mt-1 tracking-tighter">Instance: 0.12 Core</p>
                            </div>
                        </div>
                    </section>

                    <div className="pt-10 space-y-2">
                        <button className="w-full flex items-center justify-center gap-2 bg-[#161b22] border border-gray-800 hover:border-gray-600 py-3 rounded-xl text-[10px] font-black text-gray-300 transition-all">
                            <RotateCcw size={14} /> RESET INSTANCE
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 py-3 rounded-xl text-[10px] font-black text-red-500 transition-all">
                            <Power size={14} /> TERMINATE LAB
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}