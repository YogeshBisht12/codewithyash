export default function Resources() {
    const resources = [
        { title: "DSA Patterns PDF", desc: "A curated PDF of important DSA patterns.", link: "#" },
        { title: "Web Dev Roadmap", desc: "Frontend + Backend roadmap for 2025.", link: "#" },
        { title: "System Design Notes", desc: "Beginner to advanced system design notes.", link: "#" },
        { title: "Cheat Sheets Pack", desc: "Handy coding and CS fundamentals cheat sheets.", link: "#" },
    ];

    return (
        <section className="bg-[#0D1117] w-full min-h-screen py-1 px-6 md:px-12">
            {/* Blue Line */}
            <div className="w-full h-[2px] bg-blue-900 mb-20"></div>

            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24">
                    📂 Coding Resources
                </h2>
                <p className="text-lg text-gray-400 mb-12">
                    PDFs, cheat sheets, and curated materials to supercharge your learning.
                </p>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resources.map((res, index) => (
                        <div 
                            key={index} 
                            className="bg-[#1E2736] shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-blue-900 transition h-60"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2">{res.title}</h3>
                            <p className="text-gray-400 text-sm mb-10">{res.desc}</p>
                            <a 
                                href={res.link} 
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                📥 Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
