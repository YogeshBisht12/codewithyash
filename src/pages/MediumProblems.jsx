export default function MediumProblems() {
    const problems = [
        { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/" },
        { title: "3Sum", link: "https://leetcode.com/problems/3sum/" },
        { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" },
        { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/" },
        { title: "Word Break", link: "https://leetcode.com/problems/word-break/" },
        { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
        { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/" },
        { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/" },
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🟡 Medium Problems</h1>
            <ul className="space-y-4">
                {problems.map((problem, index) => (
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
    );
}
