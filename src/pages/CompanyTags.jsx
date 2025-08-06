export default function CompanyTags() {
    const companyProblems = [
        {
            company: "Amazon",
            problems: [
                { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
                { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/" },
                { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/" }
            ]
        },
        {
            company: "Google",
            problems: [
                { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
                { title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/" },
                { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/" }
            ]
        },
        {
            company: "Microsoft",
            problems: [
                { title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/" },
                { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/" },
                { title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/" }
            ]
        },
        {
            company: "Facebook",
            problems: [
                { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
                { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/" },
                { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
            ]
        },
        {
            company: "Apple",
            problems: [
                { title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
                { title: "Subsets", link: "https://leetcode.com/problems/subsets/" },
                { title: "Unique Binary Search Trees II", link: "https://leetcode.com/problems/unique-binary-search-trees-ii/" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🏢 Company Tags</h1>
            <p className="text-gray-400 mb-8">Practice questions frequently asked in FAANG & top tech companies.</p>

            <div className="space-y-8">
                {companyProblems.map((company, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-semibold mb-4">{company.company}</h2>
                        <ul className="space-y-4">
                            {company.problems.map((problem, i) => (
                                <li key={i} className="bg-[#1E2736] p-4 rounded-lg flex justify-between items-center">
                                    <span>{problem.title}</span>
                                    <a
                                        href={problem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                                    >
                                        Solve →
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
