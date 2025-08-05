import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resources() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const buttonsRef = useRef([]);
    cardsRef.current = [];
    buttonsRef.current = [];

    const resources = [
        { title: "DSA Patterns Repo", desc: "GitHub repo with important DSA pattern-based questions.", type: "github", link: "https://github.com/YogeshBisht12/Leetcode-company-wise" },
        { title: "Web Dev Roadmap", desc: "Frontend + Backend roadmap for 2025.", type: "pdf", link: "/downloads/web-roadmap.pdf" },
        { title: "System Design Notes", desc: "Beginner to advanced system design notes.", type: "pdf", link: "/downloads/system-design-notes.pdf" },
        { title: "Cheat Sheets Pack", desc: "Handy coding and CS fundamentals cheat sheets.", type: "pdf", link: "/downloads/cheatsheets-pack.pdf" },
    ];

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
    };

    const addButtonRef = (el) => {
        if (el && !buttonsRef.current.includes(el)) buttonsRef.current.push(el);
    };

    useEffect(() => {
        // Animate heading
        gsap.fromTo(
            sectionRef.current.querySelector("h2"),
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            sectionRef.current.querySelector("p"),
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
        );

        // Card Animation
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, scale: 0.9, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: index * 0.15,
                    scrollTrigger: { trigger: card, start: "top 85%" },
                }
            );
        });

        // Button Animation
        buttonsRef.current.forEach((button, index) => {
            gsap.fromTo(
                button,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    delay: index * 0.2,
                    scrollTrigger: { trigger: button, start: "top 90%" },
                }
            );
        });

        ScrollTrigger.refresh();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#0D1117] w-full min-h-screen py-16 px-6 md:px-12 overflow-hidden">
            {/* Glowing Background */}
            <div className="absolute w-[300px] h-[300px] bg-blue-900 rounded-full blur-[150px] opacity-20 top-20 left-10"></div>
            <div className="absolute w-[250px] h-[250px] bg-purple-800 rounded-full blur-[130px] opacity-15 bottom-10 right-16"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-8">📂 Coding Resources</h2>
                <p className="text-lg text-gray-400 mb-12">
                    GitHub repos, PDFs, and curated materials to supercharge your learning.
                </p>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resources.map((res, index) => (
                        <div
                            key={index}
                            ref={addCardRef}
                            className="relative bg-[#1E2736] shadow-lg rounded-2xl p-6 flex flex-col items-center text-center 
                                       hover:scale-105 hover:shadow-blue-900 transition duration-300 h-64 group"
                        >
                            {/* Glow Hover Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-700/10 to-purple-700/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <h3 className="text-xl font-semibold text-white mb-2 relative z-10">{res.title}</h3>
                            <p className="text-gray-400 text-sm mb-10 relative z-10">{res.desc}</p>

                            {/* Buttons */}
                            {res.type === "github" ? (
                                <a
                                    href={res.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    ref={addButtonRef}
                                    className="relative group w-fit mt-auto z-10"
                                >
                                    <button className="relative px-4 py-2 font-medium rounded-lg text-green-500 border border-green-500 w-[180px] overflow-hidden">
                                        <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                            🌐 View on GitHub
                                        </span>
                                        <span className="absolute inset-0 bg-green-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                        <span className="absolute inset-0 bg-green-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                    </button>
                                </a>
                            ) : (
                                <a
                                    href={res.link}
                                    download
                                    ref={addButtonRef}
                                    className="relative group w-fit mt-auto z-10"
                                >
                                    <button className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[180px] overflow-hidden">
                                        <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                            📥 Download PDF
                                        </span>
                                        <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                        <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                    </button>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
