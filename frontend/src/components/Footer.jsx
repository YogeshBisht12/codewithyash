import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0D1117] text-gray-300 py-12 px-6 md:px-16">
            <div className="w-full h-[2px] bg-blue-900 my-6" style={{ backgroundColor: '#1E3A8A' }}></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">CodeWithYash</h2>
                    <p className="text-gray-400 text-sm">
                        Your one-stop hub for DSA, Web Dev, System Design, and curated coding resources.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="/explore" className="hover:text-blue-500 transition">Explore</a></li>
                        <li><a href="/resources" className="hover:text-blue-500 transition">Resources</a></li>
                        <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="/resources/dsa-patterns" className="hover:text-blue-500 transition">DSA Patterns</a></li>
                        <li><a href="/resources/cheat-sheets" className="hover:text-blue-500 transition">Cheat Sheets</a></li>
                        <li><a href="/resources/web-dev-roadmap" className="hover:text-blue-500 transition">Web Dev Roadmap</a></li>
                        <li><a href="/resources/system-design" className="hover:text-blue-500 transition">System Design Notes</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/codewithyash3/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-2xl transition">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/YogeshBisht12" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/yogesh-bisht-9389862b4/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl transition">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                        © {new Date().getFullYear()} CodeWithYash. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
