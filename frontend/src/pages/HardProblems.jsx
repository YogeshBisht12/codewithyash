export default function HardProblems() {
    const problems = [
        { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
        { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" },
        { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/" },
        { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/" },
        { title: "Longest Valid Parentheses", link: "https://leetcode.com/problems/longest-valid-parentheses/" },
        { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/" },
        { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
        { title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/" },
        { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/" },
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🔴 Hard Problems</h1>
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
