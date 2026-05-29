export default function PathGrid() {
    return (
        <section>
            <h2 className="text-xl font-bold mb-4">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-800 rounded">Linux Fundamentals</div>
                <div className="p-4 border border-gray-800 rounded">Bash Scripting</div>
                <div className="p-4 border border-gray-800 rounded">Docker Mastery</div>
            </div>
        </section>
    );
}
