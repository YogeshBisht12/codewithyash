import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function APIsIntegration() {
    const topics = [
        {
            title: "REST API Basics",
            desc: "Understand endpoints, HTTP methods (GET, POST, PUT, DELETE), and JSON data exchange.",
            icon: "🌐",
            link: "https://restfulapi.net/",
        },
        {
            title: "GraphQL Fundamentals",
            desc: "Learn querying, mutations, and subscriptions for efficient data fetching.",
            icon: "🕸️",
            link: "https://graphql.org/learn/",
        },
        {
            title: "Third-party APIs",
            desc: "Integrate APIs like Stripe, Firebase, Google Maps, and more in your projects.",
            icon: "🔌",
            link: "https://rapidapi.com/",
        },
        {
            title: "Authentication APIs",
            desc: "Implement OAuth, JWT, and API keys securely in your apps.",
            icon: "🔑",
            link: "https://auth0.com/docs",
        },
        {
            title: "Postman & Testing",
            desc: "Master API testing with Postman and automate API workflows.",
            icon: "🧪",
            link: "https://www.postman.com/",
        },
        {
            title: "Webhooks & Realtime APIs",
            desc: "Build real-time apps with Webhooks, Socket.IO, and event-driven APIs.",
            icon: "⚡",
            link: "https://socket.io/",
        },
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

            // Card Animation
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, scale: 0.9, y: 30 },
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
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#0D1117] min-h-screen text-white overflow-hidden px-6 md:px-12 pt-24 pb-16">
            {/* Glowing Background */}
            <div className="absolute w-[300px] h-[300px] bg-blue-900 rounded-full blur-[150px] opacity-20 top-20 left-10"></div>
            <div className="absolute w-[250px] h-[250px] bg-purple-800 rounded-full blur-[130px] opacity-15 bottom-10 right-16"></div>

            {/* Heading */}
            <div className="text-center mb-12 relative z-10">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">🔗 APIs & Integrations</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Learn REST, GraphQL, authentication, testing, and real-time APIs to connect your apps with the world.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {topics.map((item, index) => (
                    <div
                        key={index}
                        ref={addCardRef}
                        className="bg-[#1E2736] p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition text-center"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                        {/* External Link Button */}
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group w-fit mx-auto block"
                        >
                            <button className="relative px-5 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[170px] overflow-hidden">
                                <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                    Explore →
                                </span>
                                <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                                <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
