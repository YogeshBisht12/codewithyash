import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCogs, FaDatabase, FaBalanceScale, FaBolt, FaProjectDiagram, FaBrain, FaChartLine } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function SystemDesign() {
  const categories = [
    { title: "Scalability Basics", desc: "Learn how to scale systems efficiently and handle high traffic.", icon: <FaChartLine className="text-green-400 text-3xl" />, link: "https://www.geeksforgeeks.org/system-design/what-is-scalability/" },
    { title: "Databases", desc: "Understand SQL, NoSQL, indexing, sharding, and replication.", icon: <FaDatabase className="text-blue-400 text-3xl" />, link: "https://www.mongodb.com/nosql-explained" },
    { title: "Load Balancing", desc: "Distribute traffic across servers for optimal performance.", icon: <FaBalanceScale className="text-yellow-400 text-3xl" />, link: "https://aws.amazon.com/elasticloadbalancing/" },
    { title: "Caching Strategies", desc: "Implement Redis, Memcached, and CDN caching for speed.", icon: <FaBolt className="text-orange-400 text-3xl" />, link: "https://redis.io/docs/latest/develop/what-is-redis/" },
    { title: "Design Patterns", desc: "Key patterns used in designing scalable and maintainable systems.", icon: <FaProjectDiagram className="text-purple-400 text-3xl" />, link: "https://refactoring.guru/design-patterns" },
    { title: "Interview Problems", desc: "Solve FAANG-level system design interview questions.", icon: <FaBrain className="text-pink-400 text-3xl" />, link: "https://interviewing.io/guides/system-design-interview" },
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addCardRef = (el) => el && !cardsRef.current.includes(el) && cardsRef.current.push(el);

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
          { opacity: 0, scale: 0.9, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out", delay: index * 0.15, scrollTrigger: { trigger: card, start: "top 85%" } }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0D1117] min-h-screen text-white overflow-hidden px-6 md:px-12 pt-24 pb-16">
      
      {/* Background Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-blue-900 rounded-full blur-[160px] opacity-20 top-20 left-[-100px] animate-pulse"></div>
      <div className="absolute w-[250px] h-[250px] bg-purple-800 rounded-full blur-[140px] opacity-15 bottom-10 right-[-80px] animate-pulse"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <FaCogs className="text-blue-400 text-5xl animate-pulse" />
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            System Design
          </h1>
        </div>
        <div className="w-28 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          Master the art of designing scalable, fault-tolerant, and high-performance systems.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {categories.map((item, index) => (
          <div
            key={index}
            ref={addCardRef}
            className="bg-[#161B22] border border-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-center text-center
                       hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300"
          >
            {/* Icon wrapper */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0D1117] border border-gray-700 mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>

            <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <button
                className="w-full px-6 py-3 relative text-white font-medium rounded-lg overflow-hidden 
                           before:absolute before:inset-0 before:bg-blue-600 before:scale-x-0 before:origin-left 
                           before:transition-transform before:duration-500 hover:before:scale-x-100"
              >
                <span className="relative z-10">Explore →</span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
