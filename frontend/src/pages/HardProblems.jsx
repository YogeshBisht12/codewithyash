import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HardProblems() {
  const problems = [
    { title: "Increasing Order Search Tree", reelLink: "https://www.instagram.com/reel/DNiI_4OTqW5/" },
    { title: "Lemon Water Selling", reelLink: "https://www.instagram.com/reel/DNOEtlez8MK/" },
    { title: "Wave Array", reelLink: "https://www.instagram.com/reel/DM7LtNczmIx/" },
    { title: "Max Ascending Subarray", reelLink: "https://www.instagram.com/reel/DM2ENJqT2Al/" },
    { title: "Product Of Array Except Self", reelLink: "https://www.instagram.com/reel/DMz4EhfTf82/" },
    { title: "Longest Valid Parentheses", reelLink: "https://leetcode.com/problems/longest-valid-parentheses/" },
    { title: "Regular Expression Matching", reelLink: "https://leetcode.com/problems/regular-expression-matching/" },
    { title: "Binary Tree Maximum Path Sum", reelLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
    { title: "Sudoku Solver", reelLink: "https://leetcode.com/problems/sudoku-solver/" },
    { title: "N-Queens", reelLink: "https://leetcode.com/problems/n-queens/" },
  ];

  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0D1117] text-white px-6 md:px-12 py-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
        🔴 Hard Problems
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div
            key={index}
            ref={addCardRef}
            className="relative bg-[#1E2736]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-red-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Number & Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xl font-bold text-red-500">{`#${index + 1}`}</div>
              <span className="text-xl md:text-2xl font-semibold">{problem.title}</span>
            </div>

            {/* Learn Button */}
            <a
              href={problem.reelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto relative group w-fit"
            >
              <button className="relative flex items-center gap-2 px-6 py-2 font-medium rounded-lg text-white border border-red-500 overflow-hidden shadow-md group-hover:shadow-red-500 transition-all duration-300">
                <FaPlayCircle className="text-red-400 group-hover:text-white text-lg" />
                <span className="relative z-20 group-hover:text-white font-semibold">Learn</span>
                <span className="absolute inset-0 bg-red-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-10 rounded-lg"></span>
              </button>
            </a>

            {/* Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-red-500 transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
