import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#0d1117] flex flex-col font-sans">
            <div className="flex-1 flex items-center justify-center px-8">
                <div className="w-full max-w-md bg-[#161b22] border border-gray-800 rounded-3xl p-10 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-500 text-sm mb-8 font-mono">auth_service: waiting for credentials...</p>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Address</label>
                            <input
                                type="email"
                                placeholder="admin@bashbox.io"
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#39FF14] transition-all text-white font-mono"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Password</label>
                                <a href="#" className="text-[10px] text-[#39FF14] font-bold hover:underline">Forgot?</a>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#39FF14] transition-all text-white"
                            />
                        </div>

                        <button className="w-full bg-[#39FF14] text-black font-black py-4 rounded-xl text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-500 text-xs">
                            New to the platform? <Link href="/subscriptions" className="text-[#39FF14] font-bold hover:underline">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}