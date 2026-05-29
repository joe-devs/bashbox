import PublicNavbar from '@/components/layout/PublicNavbar';

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[#0d1117] flex flex-col font-sans text-gray-200">
            <PublicNavbar />
            <main className="flex-1 flex flex-col pt-20">
                {children}
            </main>
        </div>
    );
}
