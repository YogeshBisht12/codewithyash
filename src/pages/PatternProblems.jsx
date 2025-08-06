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

    return (
        <div className="min-h-screen bg-[#0D1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-8">🔁 Pattern-Based Problems</h1>

            {patterns.map((pattern, idx) => (
                <div key={idx} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">{pattern.category}</h2>
                    <ul className="space-y-4">
                        {pattern.problems.map((problem, index) => (
                            <li
                                key={index}
                                className="bg-[#1E2736] p-4 rounded-lg flex items-center justify-between"
                            >
                                <span className="text-lg">{problem.title}</span>
                                <a
                                    href={problem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group"
                                >
                                    <button className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 overflow-hidden">
                                        <span className="relative z-20 group-hover:text-white">
                                            Solve →
                                        </span>
                                        <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] z-10"></span>
                                        <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] z-10"></span>
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
