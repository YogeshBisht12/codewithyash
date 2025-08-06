import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    buttonsRef.current = [];

    const addButtonRef = (el) => el && !buttonsRef.current.includes(el) && buttonsRef.current.push(el);

    const handleButtonClick = (label) => {
        if (label === "Start Exploring") {
            navigate("/explore/dsa");
        } else if (label === "Join Community") {
            window.open("https://www.instagram.com/codewithyash3/", "_blank");
        }
    };

    useEffect(() => {
        ScrollTrigger.refresh();

        gsap.fromTo(headingRef.current, { opacity: 0, y: -40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" });

        gsap.fromTo(leftTextRef.current, { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" });

        gsap.fromTo(buttonsRef.current, { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" });

        gsap.fromTo(instaRef.current, { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" });
    }, []);

    return (
        <section className="relative bg-[#0D1117] w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Glow Backgrounds */}
            <div className="absolute w-[400px] h-[400px] bg-blue-900 rounded-full blur-[180px] opacity-20 top-24 left-[-150px] animate-pulse"></div>
            <div className="absolute w-[300px] h-[300px] bg-purple-800 rounded-full blur-[150px] opacity-15 bottom-16 right-[-120px] animate-pulse"></div>
            <div className="absolute w-[250px] h-[250px] bg-pink-700 rounded-full blur-[140px] opacity-10 top-[70%] left-[45%] animate-pulse"></div>

            {/* Heading */}
            <h1
                ref={headingRef}
                className="text-center w-full text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-snug px-2 mt-8"
            >
                Code
                <span className="text-blue-900 mx-2 inline-block text-4xl sm:text-5xl">⬩</span>
                Create
                <span className="text-blue-900 mx-2 inline-block text-4xl sm:text-5xl">⬩</span>
                <span className="animate-colorChange">Conquer</span>
            </h1>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 sm:gap-10 mt-16 sm:mt-24 md:mt-28">
                {/* Left Text */}
                <div ref={leftTextRef} className="w-full md:w-1/2 text-white text-center md:text-left px-2">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
                        🚀 Explore <span className="text-blue-400">DSA problems</span>
                    </p>
                    <TypingEffect />
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-5">
                        all in one place!
                    </p>

                    {/* Buttons (Original Hover Effect Kept) */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        {["Start Exploring", "Join Community"].map((label, index) => (
                            <div
                                key={index}
                                className="relative group w-fit"
                                ref={addButtonRef}
                                onClick={() => handleButtonClick(label)}
                            >
                                <button className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[170px] overflow-hidden">
                                    <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                        {label}
                                    </span>
                                    <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                    <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instagram Feed */}
                <div ref={instaRef} className="w-full md:w-1/2 flex justify-center px-2">
                    <InstagramFeed />
                </div>
            </div>
        </section>
    );
}
