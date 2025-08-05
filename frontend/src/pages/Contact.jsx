import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const formFieldsRef = useRef([]);
    const buttonRef = useRef(null);
    const socialIconsRef = useRef([]);

    formFieldsRef.current = [];
    socialIconsRef.current = [];

    const addFormFieldRef = (el) => {
        if (el && !formFieldsRef.current.includes(el)) {
            formFieldsRef.current.push(el);
        }
    };

    const addSocialIconRef = (el) => {
        if (el && !socialIconsRef.current.includes(el)) {
            socialIconsRef.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Animation
            gsap.fromTo(
                sectionRef.current.querySelector("h2"),
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Subtitle Animation
            gsap.fromTo(
                sectionRef.current.querySelector("p"),
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Form Fields Stagger Animation
            gsap.fromTo(
                formFieldsRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            // Submit Button Slide Up
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            // Social Icons Pop-in
            gsap.fromTo(
                socialIconsRef.current,
                { opacity: 0, scale: 0.6 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "elastic.out(1, 0.6)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0D1117] w-full min-h-screen px-6 md:px-12 flex flex-col items-center">
            {/* Divider Line */}
            <div className="w-full h-[2px] bg-blue-900 mb-20"></div>

            {/* Heading */}
            <div className="max-w-3xl text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    📬 Get in Touch
                </h2>
                <p className="text-lg text-gray-400">
                    Have questions, suggestions, or collaborations? Let's connect!
                </p>
            </div>

            {/* Contact Form */}
            <form className="bg-[#1E2736] p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6">
                <input
                    ref={addFormFieldRef}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600"
                />
                <input
                    ref={addFormFieldRef}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600"
                />
                <textarea
                    ref={addFormFieldRef}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600"
                ></textarea>
                <button
                    ref={buttonRef}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                >
                    Send Message 🚀
                </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
                <a
                    ref={addSocialIconRef}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 text-3xl"
                >
                    📸
                </a>
                <a
                    ref={addSocialIconRef}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 text-3xl"
                >
                    💻
                </a>
                <a
                    ref={addSocialIconRef}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 text-3xl"
                >
                    🔗
                </a>
            </div>
        </section>
    );
}
