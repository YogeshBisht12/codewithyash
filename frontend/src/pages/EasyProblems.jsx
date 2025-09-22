import { FaPlayCircle } from "react-icons/fa";

export default function EasyProblems() {
    const problems = [
        { title: "Two Sum 2", reelLink: "https://www.instagram.com/reel/DObMwBrk8nB/" },
        { title: "Valid Palindrome", reelLink: "https://www.instagram.com/reel/DMrwkQAz86Y/" },
        { title: "Valid Parentheses", reelLink: "https://www.instagram.com/reel/DMpR3leTGpw/" },
        { title: "Merge Two Sorted Arrays", reelLink: "https://www.instagram.com/reel/DOipWU8EwAI/" },
        { title: "Just One Mismatch", reelLink: "https://www.instagram.com/reel/DMxGnmATRF0/" },
        { title: "Missing Number In Array", reelLink: "https://www.instagram.com/reel/DMpEVHMTLOB/" },
        { title: "Unique Number", reelLink: "https://www.instagram.com/reel/DOVym4EE3M6/" },
        { title: "First Unique Character", reelLink: "https://www.instagram.com/reel/DOGXGq0kyuh/" },
        { title: "Count Distinct Elements", reelLink: "https://www.instagram.com/reel/DMuaIPvT9y2/" },
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white px-6 md:px-12 py-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                🟢 Easy Problems
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {problems.map((problem, index) => (
                    <div
                        key={index}
                        className="relative bg-[#1E2736]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-blue-600 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between group overflow-hidden"
                    >
                        {/* Number & Title */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-xl font-bold text-blue-400">{`#${index + 1}`}</div>
                            <span className="text-xl md:text-2xl font-semibold">{problem.title}</span>
                        </div>

                        {/* Learn Button */}
                        <a
                            href={problem.reelLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto relative group w-fit"
                        >
                            <button className="relative flex items-center gap-2 px-6 py-2 font-medium rounded-lg text-white border border-blue-500 overflow-hidden shadow-md group-hover:shadow-blue-500 transition-all duration-300">
                                <FaPlayCircle className="text-blue-400 group-hover:text-white text-lg" />
                                <span className="relative z-20 group-hover:text-white font-semibold">
                                    Learn
                                </span>
                                <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-10 rounded-lg"></span>
                            </button>
                        </a>

                        {/* Glow Border */}
                        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500 transition-all duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
