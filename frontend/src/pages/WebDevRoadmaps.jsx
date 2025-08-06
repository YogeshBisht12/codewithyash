import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebDevRoadmaps() {
    const roadmaps = [
        {
            title: "Frontend Developer Roadmap",
            desc: "Step-by-step guide to becoming a frontend developer.",
            icon: "🎨",
            link: "https://roadmap.sh/frontend",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gFRrjxerw9N23D70pK1TQXenwielFIRCGg&s",
        },
        {
            title: "Backend Developer Roadmap",
            desc: "Learn server-side development, databases, and APIs.",
            icon: "⚙️",
            link: "https://roadmap.sh/backend",
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20240529152324/Backend-Developer-Roadmap-copy.webp",
        },
        {
            title: "Fullstack Developer Roadmap",
            desc: "Master both frontend and backend to become a fullstack dev.",
            icon: "🌐",
            link: "https://roadmap.sh/full-stack",
            img: "https://www.mergesociety.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhgjhspsp%2Fimage%2Fupload%2Fv1747557411%2Ffullstack_sioshn.png&w=1200&q=75",
        },
        {
            title: "DevOps Roadmap",
            desc: "Understand CI/CD, cloud, and infrastructure management.",
            icon: "☁️",
            link: "https://roadmap.sh/devops",
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20230416201559/DevOps-Roadmap.webp",
        },
        {
            title: "React Developer Roadmap",
            desc: "Learn React.js ecosystem including hooks, context API, and state management.",
            icon: "⚛️",
            link: "https://roadmap.sh/react",
            img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F91yhnh0era2zx9ial7me.png",
        },
        {
            title: "Node.js Developer Roadmap",
            desc: "Master Node.js, Express, and backend APIs for scalable apps.",
            icon: "🟩",
            link: "https://roadmap.sh/nodejs",
            img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbo58utddzfvzrla2jegl.png",
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
                        delay: index * 0.15,
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
            <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full blur-[150px] opacity-20 bottom-10 right-10"></div>

            
            <div className="text-center mb-16 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">🗺️ Web Dev Roadmaps</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Follow these structured roadmaps to become a proficient web developer.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {roadmaps.map((roadmap, index) => (
                    <div
                        key={index}
                        ref={addCardRef}
                        className="bg-[#1E2736] p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition transform group"
                    >
                        
                        <div className="overflow-hidden rounded-lg mb-4">
                            <img 
                                src={roadmap.img} 
                                alt={roadmap.title} 
                                className="w-full h-48 object-contain bg-[#0F172A] p-2 transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                        <div className="text-4xl mb-2">{roadmap.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{roadmap.title}</h3>
                        <p className="text-gray-400 mb-4">{roadmap.desc}</p>

                        
                        <a
                            href={roadmap.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group w-fit mx-auto block"
                        >
                            <button className="relative px-5 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[160px] overflow-hidden">
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
