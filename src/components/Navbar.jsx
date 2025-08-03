import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0D1117] sticky top-0 z-50 shadow-[0_0_20px_rgba(30,58,138,0.8)]">
            <Logo />

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-white font-medium text-lg items-center">
                <li>
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                </li>

                <li
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button className="hover:text-blue-600 transition flex items-center gap-1">
                        Explore
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 22 22"
                            className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            <path
                                d="M11 14.667a.92.92 0 0 1-.587-.21l-5.5-4.584A.918.918 0 1 1 6.086 8.46l4.913 4.107 4.914-3.96a.917.917 0 0 1 1.292.137.917.917 0 0 1-.128 1.339l-5.5 4.427a.92.92 0 0 1-.578.156"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute top-8 left-0 bg-gray-800 shadow-md rounded-lg py-2 w-44 border border-white">
                            <li>
                                <Link to="/explore/dsa" className="block px-4 py-2 hover:bg-blue-900 hover:text-white transition">
                                    DSA Problems
                                </Link>
                            </li>
                            <li>
                                <Link to="/explore/webdev" className="block px-4 py-2 hover:bg-blue-900 hover:text-white transition">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/explore/system-design" className="block px-4 py-2 hover:bg-blue-900 hover:text-white transition">
                                    System Design
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/resources" className="hover:text-blue-600 transition">Resources</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                </li>
            </ul>

            {/* Login & Signup Buttons Side by Side */}
            <div className="hidden md:flex gap-3">
                <Link
                    to="/login"
                    className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                >
                    Login
                </Link>
                <Link
                    to="/signup"
                    className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                >
                    Signup
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-4 bg-gray-800 text-white w-48 rounded-lg shadow-lg p-4 md:hidden">
                    <Link to="/" className="block py-2 hover:text-blue-600">Home</Link>
                    <Link to="/explore/dsa" className="block py-2 hover:text-blue-600">DSA Problems</Link>
                    <Link to="/explore/webdev" className="block py-2 hover:text-blue-600">Web Development</Link>
                    <Link to="/explore/system-design" className="block py-2 hover:text-blue-600">System Design</Link>
                    <Link to="/resources" className="block py-2 hover:text-blue-600">Resources</Link>
                    <Link to="/contact" className="block py-2 hover:text-blue-600">Contact</Link>
                    <div className="flex gap-2 mt-3">
                        <Link to="/login" className="flex-1 py-2 border border-blue-600 text-blue-600 text-center rounded-lg hover:bg-blue-600 hover:text-white">Login</Link>
                        <Link to="/signup" className="flex-1 py-2 border border-blue-600 text-blue-600 text-center rounded-lg hover:bg-blue-600 hover:text-white">Signup</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
