export default function MockTests() {
    const mockTests = [
        { title: "LeetCode Weekly Contest", link: "https://leetcode.com/contest/" },
        { title: "Pramp (Free Mock Interviews)", link: "https://www.pramp.com/#/" },
        { title: "InterviewBit Mock Tests", link: "https://www.interviewbit.com/mock-interview/" },
        { title: "GeeksforGeeks Mock Tests", link: "https://practice.geeksforgeeks.org/mock-test/" },
        { title: "HackerRank Skill Tests", link: "https://www.hackerrank.com/skills-verification" },
        { title: "Codeforces Contests", link: "https://codeforces.com/contests" },
        { title: "AtCoder Contests", link: "https://atcoder.jp/contests/" },
        { title: "CodeChef Contests", link: "https://www.codechef.com/contests" },
        { title: "TopCoder Challenges", link: "https://www.topcoder.com/challenges" },
        { title: "AlgoExpert Mock Assessments", link: "https://www.algoexpert.io/" }
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">⏱️ Mock Tests</h1>
            <p className="text-gray-400 mb-8">Timed mock tests and contests to simulate real interview experience.</p>

            <ul className="space-y-4">
                {mockTests.map((test, index) => (
                    <li key={index} className="bg-[#1E2736] p-4 rounded-lg flex justify-between items-center">
                        <span>{test.title}</span>
                        <a
                            href={test.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            Start →
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
