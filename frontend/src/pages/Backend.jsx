import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Backend() {
    const topics = [
        { title: "Node.js Basics", desc: "Learn event-driven JavaScript runtime for server-side apps.", icon: "🟢", link: "https://nodejs.org/en/docs" },
        { title: "Express.js", desc: "Fast, unopinionated, minimalist web framework for Node.js.", icon: "⚡", link: "https://expressjs.com/" },
        { title: "Databases (MongoDB)", desc: "Understand NoSQL databases and CRUD operations.", icon: "🍃", link: "https://www.mongodb.com/docs/" },
        { title: "Authentication (JWT & OAuth)", desc: "Implement secure login systems for apps.", icon: "🔑", link: "https://jwt.io/introduction" },
        { title: "REST APIs", desc: "Build scalable RESTful APIs with proper structure.", icon: "🔗", link: "https://restfulapi.net/" },
        { title: "GraphQL", desc: "Advanced querying for APIs with GraphQL.", icon: "📡", link: "https://graphql.org/learn/" },
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
            
            <div className="absolute w-[350px] h-[350px] bg-green-800 rounded-full blur-[160px] opacity-25 top-20 left-10"></div>
            <div className="absolute w-[300px] h-[300px] bg-yellow-700 rounded-full blur-[150px] opacity-20 bottom-10 right-10"></div>

            
            <div className="text-center relative z-10 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">⚙️ Backend Development</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Learn backend technologies like Node.js, Express, databases, authentication, and API development.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {topics.map((item, index) => (
                    <div
                        key={index}
                        ref={addCardRef}
                        className="bg-[#1E2736] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-green-900 transition transform group"
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
                            <button className="relative px-5 py-2 font-medium rounded-lg text-green-600 border border-green-600 w-[150px] overflow-hidden">
                                <span className="relative z-20 group-hover:text-white transition-colors duration-500">
                                    Learn →
                                </span>
                                <span className="absolute inset-0 bg-green-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                <span className="absolute inset-0 bg-green-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
