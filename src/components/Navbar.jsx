import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/authContext";
import Logo from "./Logo";
import gsap from "gsap";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { isAuthenticated, logout } = useAuth();
    const location = useLocation(); // ✅ To highlight active link

    // ✅ Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ Animate dropdown when opened
    useEffect(() => {
        if (isDropdownOpen && dropdownRef.current) {
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, y: -10, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
            );
        }
    }, [isDropdownOpen]);

    // ✅ Common Nav Link Component with underline animation
    const NavLink = ({ to, label }) => {
        const isActive = location.pathname === to;
        return (
            <Link
                to={to}
                className={`relative group transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "text-white hover:text-blue-400"
                }`}
            >
                {label}
                <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 rounded-full transition-all duration-500 ease-out ${
                        isActive ? "w-full shadow-[0_0_8px_#3b82f6]" : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"
                    }`}
                ></span>
            </Link>
        );
    };

    return (
        <nav className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0D1117] sticky top-0 z-50 shadow-[0_0_20px_rgba(30,58,138,0.8)]">
            <Logo />

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 font-medium text-lg items-center">
                <li><NavLink to="/" label="Home" /></li>

                {/* EXPLORE DROPDOWN */}
                <li className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="relative group transition-colors duration-300 flex items-center gap-1 text-white hover:text-blue-400"
                    >
                        Explore
                        <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 rounded-full transition-all duration-500 ease-out w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 22 22"
                            className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            <path
                                d="M11 14.667a.92.92 0 0 1-.587-.21l-5.5-4.584A.918.918 0 1 1 6.086 8.46l4.913 4.107 4.914-3.96a.917.917 0 0 1 1.292.137.917.917 0 0 1-.128 1.339l-5.5 4.427a.92.92 0 0 1-.578.156"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute top-10 left-0 w-56 bg-[#1E2736]/80 backdrop-blur-md border border-blue-800 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] overflow-hidden">
                            {[
                                { text: "🟢 DSA Problems", path: "/explore/dsa" },
                                { text: "🎨 Web Development", path: "/explore/webdev" },
                                { text: "🛠 System Design", path: "/explore/system-design" },
                            ].map((item, index) => (
                                <li key={index} className="group">
                                    <Link
                                        to={item.path}
                                        className="block px-5 py-3 text-white hover:bg-blue-600/70 transition-all duration-300"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                <li><NavLink to="/resources" label="Resources" /></li>
                <li><NavLink to="/contact" label="Contact" /></li>
            </ul>

            {/* ✅ Login/Signup or Logout */}
            <div className="hidden md:flex gap-3">
                {isAuthenticated ? (
                    <button
                        onClick={logout}
                        className="relative px-4 py-2 font-medium rounded-lg text-red-400 border border-red-600 w-[100px] overflow-hidden hover:shadow-[0_0_15px_#ef4444] transition duration-500 group"
                    >
                        <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                            Logout
                        </span>
                        <span className="absolute inset-0 bg-red-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                        <span className="absolute inset-0 bg-red-700 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                    </button>
                ) : (
                    <>
                        {["Login", "Signup"].map((label, index) => (
                            <Link key={index} to={label === "Login" ? "/login" : "/signup"} className="relative group w-fit">
                                <button className="relative px-4 py-2 font-medium rounded-lg text-blue-400 border border-blue-600 w-[100px] overflow-hidden hover:shadow-[0_0_15px_#3b82f6] transition duration-500">
                                    <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
                                        {label}
                                    </span>
                                    <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                    <span className="absolute inset-0 bg-blue-700 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                </button>
                            </Link>
                        ))}
                    </>
                )}
            </div>
        </nav>
    );
}
