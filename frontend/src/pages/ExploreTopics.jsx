import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaLaptopCode, FaSitemap, FaFilePdf } from "react-icons/fa"; 

gsap.registerPlugin(ScrollTrigger);

export default function ExploreTopics() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const buttonsRef = useRef([]);
    const navigate = useNavigate();

    cardsRef.current = [];
    buttonsRef.current = [];

    const topics = [
        { 
            title: "DSA Problems", 
            desc: "Solve pattern-based DSA questions to crack FAANG.", 
            icon: <FaCode className="text-5xl text-green-400" />, 
            path: "/explore/dsa" 
        },
        { 
            title: "Web Development", 
            desc: "Learn modern frontend & backend development.", 
            icon: <FaLaptopCode className="text-5xl text-blue-400" />, 
            path: "/explore/webdev" 
        },
        { 
            title: "System Design", 
            desc: "Master scalable system architecture & design.", 
            icon: <FaSitemap className="text-5xl text-purple-400" />, 
            path: "/explore/system-design" 
        },
        { 
            title: "Coding Resources", 
            desc: "PDFs, cheat sheets & curated study materials.", 
            icon: <FaFilePdf className="text-5xl text-red-400" />, 
            path: "/resources" 
        },
    ];

    const addCardRef = (el) => el && !cardsRef.current.includes(el) && cardsRef.current.push(el);
    const addButtonRef = (el) => el && !buttonsRef.current.includes(el) && buttonsRef.current.push(el);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current.querySelector("h2"),
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
            );

            gsap.fromTo(
                sectionRef.current.querySelector("p"),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
            );

            ScrollTrigger.batch(cardsRef.current, {
                onEnter: (batch) => gsap.fromTo(batch, { opacity: 0, x: -120 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }),
                onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, x: -120, duration: 0.6 }),
                start: "top 90%",
            });

            ScrollTrigger.batch(buttonsRef.current, {
                onEnter: (batch) => gsap.fromTo(batch, { opacity: 0, x: 120 }, { opacity: 1, x: 0, duration: 1, ease: "power4.out", stagger: 0.25 }),
                onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, x: 120, duration: 0.6 }),
                start: "top 92%",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0D1117] w-full min-h-screen py-8 px-6 md:px-12">
            <div className="w-full h-[2px] bg-blue-900 my-6"></div>

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24">🔥 Explore Topics</h2>
                <p className="text-lg text-gray-400 mb-20">Dive into structured learning with focused categories</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            ref={addCardRef}
                            className="bg-[#1E2736] shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-blue-900 transition"
                        >
                            <span className="mb-4">{topic.icon}</span>
                            <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm">{topic.desc}</p>

                            <button
                                ref={addButtonRef}
                                onClick={() => navigate(topic.path)}
                                className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[160px] overflow-hidden mt-4"
                            >
                                <span className="relative z-20 group-hover:text-white">Explore →</span>
                                <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] z-10"></span>
                                <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] z-10"></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
