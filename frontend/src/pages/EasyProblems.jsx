export default function EasyProblems() {
    const problems = [
        { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
        { title: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/" },
        { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
        { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
        { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
        { title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/" },
        { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🟢 Easy Problems</h1>
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
