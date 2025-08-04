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
        { title: "DSA Patterns PDF", desc: "A curated PDF of important DSA patterns.", link: "#" },
        { title: "Web Dev Roadmap", desc: "Frontend + Backend roadmap for 2025.", link: "#" },
        { title: "System Design Notes", desc: "Beginner to advanced system design notes.", link: "#" },
        { title: "Cheat Sheets Pack", desc: "Handy coding and CS fundamentals cheat sheets.", link: "#" },
    ];

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    const addButtonRef = (el) => {
        if (el && !buttonsRef.current.includes(el)) {
            buttonsRef.current.push(el);
        }
    };

    useEffect(() => {
        // Cards Slide-In Animation
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, x: -80 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        // Buttons Slide-In Animation
        buttonsRef.current.forEach((button, index) => {
            gsap.fromTo(
                button,
                { opacity: 0, x: 80 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: button,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        ScrollTrigger.refresh();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0D1117] w-full min-h-screen py-1 px-6 md:px-12">
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
                            ref={addCardRef}
                            className="bg-[#1E2736] shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-blue-900 transition h-60"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2">{res.title}</h3>
                            <p className="text-gray-400 text-sm mb-10">{res.desc}</p>

                            {/* ✅ Dual Overlay Button */}
                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={addButtonRef}
                                className="relative group w-fit mt-auto"
                            >
                                <button className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[160px] overflow-hidden">
                                    <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                        📥 Download
                                    </span>
                                    {/* Left Overlay */}
                                    <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                    {/* Right Overlay */}
                                    <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
