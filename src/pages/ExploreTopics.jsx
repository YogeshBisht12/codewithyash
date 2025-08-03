import { Link } from "react-router-dom";

export default function ExploreTopics() {
    const topics = [
        { title: "DSA Problems", desc: "Solve pattern-based DSA questions to crack FAANG.", icon: "📚", path: "/explore/dsa" },
        { title: "Web Development", desc: "Learn modern frontend & backend development.", icon: "💻", path: "/explore/webdev" },
        { title: "System Design", desc: "Master scalable system architecture & design.", icon: "🛠", path: "/explore/system-design" },
        { title: "Coding Resources", desc: "PDFs, cheat sheets & curated study materials.", icon: "📑", path: "/resources" },
    ];

    return (
        <section className="bg-[#0D1117] w-full min-h-screen py-8 px-6 md:px-12">
            <div className="w-full h-[2px] bg-blue-900 my-6"></div>

            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24">
                    🔥 Explore Topics
                </h2>
                <p className="text-lg text-gray-400 mb-20">
                    Dive into structured learning with focused categories
                </p>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="bg-[#1E2736] shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-blue-900 transition"
                        >
                            <span className="text-5xl mb-4">{topic.icon}</span>
                            <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm">{topic.desc}</p>
                            <Link to={topic.path}>
                                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    Explore →
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
