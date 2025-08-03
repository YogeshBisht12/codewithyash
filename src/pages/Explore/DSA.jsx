import RippleCanvas from "../../components/RippleCanvas";

export default function DSA() {
    const categories = [
        {
            title: "Easy Problems",
            desc: "Start your journey with fundamental DSA questions.",
            icon: "🟢",
        },
        {
            title: "Medium Problems",
            desc: "Level up with intermediate coding challenges.",
            icon: "🟡",
        },
        {
            title: "Hard Problems",
            desc: "Tackle advanced problems that test your skills.",
            icon: "🔴",
        },
        {
            title: "Pattern-Based",
            desc: "Learn DSA through repeated problem-solving patterns.",
            icon: "🔁",
        },
        {
            title: "Company Tags",
            desc: "Practice questions asked in top FAANG companies.",
            icon: "🏢",
        },
        {
            title: "Mock Tests",
            desc: "Timed mock tests to simulate interview experience.",
            icon: "⏱️",
        },
    ];

    return (
        <section className="relative bg-[#0D1117] min-h-screen text-white overflow-hidden px-6 md:px-12 pt-24 pb-16">
            <RippleCanvas />

            {/* Heading */}
            <div className="text-center mb-12 relative z-10">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">🚀 DSA Problems</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore handpicked DSA problems categorized by difficulty, company tags, and patterns.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1E2736] p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition text-center"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Explore →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
