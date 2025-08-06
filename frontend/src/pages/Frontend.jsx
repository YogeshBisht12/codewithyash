import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Frontend() {
    const topics = [
        { title: "React Basics", desc: "Learn components, props, and state management.", icon: "⚛️", link: "https://react.dev/" },
        { title: "Next.js Framework", desc: "Server-side rendering & SEO-friendly React apps.", icon: "🌐", link: "https://nextjs.org/" },
        { title: "Tailwind CSS", desc: "Build modern UI quickly with utility-first CSS.", icon: "🎨", link: "https://tailwindcss.com/" },
        { title: "JavaScript ES6+", desc: "Master modern JavaScript features for frontend.", icon: "📜", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { title: "Framer Motion", desc: "Add animations and transitions to your React UI.", icon: "🎥", link: "https://www.framer.com/motion/" },
        { title: "UI/UX Principles", desc: "Understand layout, typography, and user experience.", icon: "🎯", link: "https://uxdesign.cc/" },
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
            
            gsap.fromTo(
                sectionRef.current.querySelector("h1"),
                { opacity: 0, y: -40 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );

            
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: { trigger: card, start: "top 90%" },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen bg-[#0D1117] text-white px-6 md:px-12 py-20 relative">
            
            <div className="absolute w-[350px] h-[350px] bg-blue-800 rounded-full blur-[160px] opacity-25 top-20 left-10"></div>
            <div className="absolute w-[300px] h-[300px] bg-purple-800 rounded-full blur-[150px] opacity-20 bottom-10 right-10"></div>

            
            <div className="text-center relative z-10 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">🎨 Frontend Development</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Master modern frontend skills with React, Next.js, Tailwind, animations, and UI/UX design principles.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {topics.map((item, index) => (
                    <div
                        key={index}
                        ref={addCardRef}
                        className="bg-[#1E2736] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition transform group"
                    >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 mb-4">{item.desc}</p>

                        
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group w-fit inline-block"
                        >
                            <button className="relative px-5 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[150px] overflow-hidden">
                                <span className="relative z-20 group-hover:text-white transition-colors duration-500">
                                    Learn →
                                </span>
                                <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
