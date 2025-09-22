import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PatternProblems() {
  const patterns = [
    {
      category: "Sliding Window",
      problems: [
        { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { title: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
        { title: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/" },
      ],
    },
    {
      category: "Two Pointers",
      problems: [
        { title: "3Sum", link: "https://leetcode.com/problems/3sum/" },
        { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/" },
        { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
      ],
    },
    {
      category: "Binary Search",
      problems: [
        { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { title: "Find First and Last Position of Element", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
        { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      ],
    },
    {
      category: "Dynamic Programming",
      problems: [
        { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
        { title: "House Robber", link: "https://leetcode.com/problems/house-robber/" },
        { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/" },
      ],
    },
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
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0D1117] text-white px-6 md:px-12 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
        🔁 Pattern-Based Problems
      </h1>

      {patterns.map((pattern, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {pattern.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pattern.problems.map((problem, index) => (
              <div
                key={index}
                ref={addCardRef}
                className="relative bg-[#1E2736]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-blue-400 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Number & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl font-bold text-blue-400">{`#${index + 1}`}</div>
                  <span className="text-lg md:text-xl font-semibold">{problem.title}</span>
                </div>

                {/* Learn Button */}
                <a
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto relative group w-fit"
                >
                  <button className="relative flex items-center gap-2 px-6 py-2 font-medium rounded-lg text-white border border-blue-500 overflow-hidden shadow-md group-hover:shadow-blue-500 transition-all duration-300">
                    <FaPlayCircle className="text-blue-400 group-hover:text-white text-lg" />
                    <span className="relative z-20 group-hover:text-white font-semibold">Learn</span>
                    <span className="absolute inset-0 bg-blue-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-10 rounded-lg"></span>
                  </button>
                </a>

                {/* Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
