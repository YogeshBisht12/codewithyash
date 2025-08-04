import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebDev() {
  const categories = [
    { title: "Frontend Development", desc: "Master React, Next.js, Tailwind, and modern UI/UX skills.", icon: "🎨" },
    { title: "Backend Development", desc: "Learn Node.js, Express, databases, and authentication.", icon: "⚙️" },
    { title: "Fullstack Projects", desc: "Build real-world apps integrating frontend & backend.", icon: "🌐" },
    { title: "Web Dev Roadmaps", desc: "Step-by-step guide for becoming a web developer.", icon: "🗺️" },
    { title: "APIs & Integrations", desc: "Learn REST, GraphQL, and third-party API integration.", icon: "🔗" },
    { title: "Deployment & Hosting", desc: "Host projects on Vercel, Netlify, AWS, or your own VPS.", icon: "🚀" },
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

      // Card Animation (Smooth Left/Right Slide + Stagger)
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
      {/* Glowing Accent Background */}
      <div className="absolute w-[300px] h-[300px] bg-blue-900 rounded-full blur-[150px] opacity-20 top-20 left-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-purple-800 rounded-full blur-[130px] opacity-15 bottom-10 right-16"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">💻 Web Development</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Learn frontend, backend, fullstack development, APIs, and deployment to build modern web apps.
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

            {/* Dual-overlay button */}
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
