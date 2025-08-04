import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DSA() {
    const categories = [
        { title: "Easy Problems", desc: "Start your journey with fundamental DSA questions.", icon: "🟢" },
        { title: "Medium Problems", desc: "Level up with intermediate coding challenges.", icon: "🟡" },
        { title: "Hard Problems", desc: "Tackle advanced problems that test your skills.", icon: "🔴" },
        { title: "Pattern-Based", desc: "Learn DSA through repeated problem-solving patterns.", icon: "🔁" },
        { title: "Company Tags", desc: "Practice questions asked in top FAANG companies.", icon: "🏢" },
        { title: "Mock Tests", desc: "Timed mock tests to simulate interview experience.", icon: "⏱️" },
    ];

    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    cardsRef.current = [];

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Animation
            gsap.fromTo(
                sectionRef.current.querySelector("h1"),
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );

            gsap.fromTo(
                sectionRef.current.querySelector("p"),
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );

            // Card Animation (Smooth Slide-in + Settle)
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: index * 0.15,
                        scrollTrigger: { trigger: card, start: "top 85%" },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#0D1117] min-h-screen text-white overflow-hidden px-6 md:px-12 pt-24 pb-16">
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
                        ref={addCardRef}
                        className="bg-[#1E2736] p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition text-center"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                        {/* Dual-overlay button like Hero */}
                        <div className="relative group w-fit mx-auto">
                            <button className="relative px-5 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[160px] overflow-hidden">
                                <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                    Explore →
                                </span>
                                {/* Left Overlay */}
                                <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                {/* Right Overlay */}
                                <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
