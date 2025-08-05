import { useEffect, useRef } from "react";
import InstagramFeed from "../components/InstagramFeed";
import TypingEffect from "../components/TypingEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const headingRef = useRef(null);
    const leftTextRef = useRef(null);
    const buttonsRef = useRef([]);
    const instaRef = useRef(null);

    buttonsRef.current = [];

    const addButtonRef = (el) => {
        if (el && !buttonsRef.current.includes(el)) {
            buttonsRef.current.push(el);
        }
    };

    useEffect(() => {
        ScrollTrigger.refresh();

        // Heading animation with letter-spacing spread
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -30, letterSpacing: "-0.05em" },
            {
                opacity: 1,
                y: 0,
                letterSpacing: "0.02em",
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                },
            }
        );

        // Left text animation
        gsap.fromTo(
            leftTextRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: leftTextRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            }
        );

        // Buttons stagger animation
        gsap.fromTo(
            buttonsRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: buttonsRef.current[0],
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            }
        );

        // Instagram feed animation
        gsap.fromTo(
            instaRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: instaRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            }
        );
    }, []);

    return (
        <section className="relative bg-[#0D1117] w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* ✅ Heading with spreading effect */}
            <h1
                ref={headingRef}
                className="text-center w-full text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-snug px-2 mt-8"
            >
                Code
                <span className="text-blue-900 mx-1 sm:mx-2 inline-block text-4xl sm:text-5xl">⬩</span>
                Create
                <span className="text-blue-900 mx-1 sm:mx-2 inline-block text-4xl sm:text-5xl">⬩</span>
                <span className="animate-colorChange">Conquer</span>
            </h1>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 sm:gap-10 mt-16 sm:mt-24 md:mt-28">
                {/* Left Text Section */}
                <div ref={leftTextRef} className="w-full md:w-1/2 text-white text-center md:text-left px-2">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
                        🚀 Explore <span className="text-blue-400">DSA problems</span>
                    </p>
                    <TypingEffect />
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-5">
                        Web dev resources & coding tips — all in one place!
                    </p>

                    {/* Buttons with dual hover effect */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        {["Start Exploring", "Join Community"].map((label, index) => (
                            <div key={index} className="relative group w-fit" ref={addButtonRef}>
                                <button className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[170px] overflow-hidden">
                                    <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                        {label}
                                    </span>
                                    {/* Left overlay */}
                                    <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                    {/* Right overlay */}
                                    <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Instagram Feed */}
                <div ref={instaRef} className="w-full md:w-1/2 flex justify-center px-2">
                    <InstagramFeed />
                </div>
            </div>
        </section>
    );
}
