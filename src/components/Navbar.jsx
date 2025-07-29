import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600">CodWithYash</h1>

            {/* Nav Links */}
            <ul className="flex gap-6 text-gray-700 font-medium relative">
                <li>
                    <Link to="/" className="hover:text-blue-600 transition">
                        Home
                    </Link>
                </li>

                {/* Explore with Dropdown */}
                <li
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button className="hover:text-blue-600 transition flex items-center gap-1">
                        Explore ⌄
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute top-8 left-0 bg-white shadow-md rounded-lg py-2 w-40 border">
                            <li>
                                <Link
                                    to="/explore/dsa"
                                    className="block px-4 py-2 hover:bg-blue-50"
                                >
                                    DSA Problems
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/explore/webdev"
                                    className="block px-4 py-2 hover:bg-blue-50"
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/explore/system-design"
                                    className="block px-4 py-2 hover:bg-blue-50"
                                >
                                    System Design
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/resources" className="hover:text-blue-600 transition">
                        Resources
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-blue-600 transition">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
