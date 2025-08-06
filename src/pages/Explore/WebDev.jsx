import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPaintBrush, FaServer, FaProjectDiagram, FaMapMarkedAlt, FaLink } from "react-icons/fa";
import { FaLaptopCode, FaCloudArrowUp } from "react-icons/fa6"; // Header + Deployment Icons

gsap.registerPlugin(ScrollTrigger);

export default function WebDev() {
  const categories = [
    { title: "Frontend Development", desc: "Master React, Next.js, Tailwind, and modern UI/UX skills.", icon: <FaPaintBrush className="text-pink-400" />, path: "/explore/webdev/frontend" },
    { title: "Backend Development", desc: "Learn Node.js, Express, databases, and authentication.", icon: <FaServer className="text-green-400" />, path: "/explore/webdev/backend" },
    { title: "Fullstack Projects", desc: "Build real-world apps integrating frontend & backend.", icon: <FaProjectDiagram className="text-blue-400" />, path: "/explore/webdev/fullstack" },
    { title: "Web Dev Roadmaps", desc: "Step-by-step guide for becoming a web developer.", icon: <FaMapMarkedAlt className="text-yellow-400" />, path: "/explore/webdev/roadmaps" },
    { title: "APIs & Integrations", desc: "Learn REST, GraphQL, and third-party API integration.", icon: <FaLink className="text-purple-400" />, path: "/explore/webdev/apis" },
    { title: "Deployment & Hosting", desc: "Host projects on Vercel, Netlify, AWS, or your own VPS.", icon: <FaCloudArrowUp className="text-blue-300" />, path: "/explore/webdev/deployment" },
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
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      gsap.fromTo(
        sectionRef.current.querySelector("p"),
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
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
      {/* Background Glows */}
      <div className="absolute w-[400px] h-[400px] bg-blue-900 rounded-full blur-[180px] opacity-25 top-20 left-[-120px] animate-pulse"></div>
      <div className="absolute w-[350px] h-[350px] bg-purple-800 rounded-full blur-[160px] opacity-20 bottom-10 right-[-120px] animate-pulse"></div>
      <div className="absolute w-[250px] h-[250px] bg-pink-700 rounded-full blur-[140px] opacity-15 top-[60%] left-[40%] animate-pulse"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <FaLaptopCode className="text-blue-400 text-5xl animate-pulse" />
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Web Development
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-2">
          Learn frontend, backend, fullstack development, APIs, and deployment to build modern web apps.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {categories.map((item, index) => (
          <div
            key={index}
            ref={addCardRef}
            className="bg-gradient-to-br from-[#1E2736] to-[#232D3E] p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 hover:shadow-blue-900 transition transform duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-500"></div>
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{item.desc}</p>

            {/* Button */}
            <Link to={item.path} className="relative group w-fit mx-auto block">
              <button className="relative px-5 py-2 font-medium rounded-lg text-blue-400 border border-blue-500 w-[180px] overflow-hidden">
                <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                  Explore →
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-in-out z-10"></span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
