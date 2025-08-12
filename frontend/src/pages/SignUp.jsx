import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post(`${API_URL}/signup`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            alert(res.data.message || "Account created successfully!");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <section className="relative bg-[#0D1117] min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
            <div className="bg-[#1E2736] shadow-lg rounded-xl p-8 w-full max-w-md text-center z-10">
                <h1 className="text-4xl font-bold mb-6">📝 Create Account</h1>
                <p className="text-gray-400 mb-6 text-sm">
                    Join <span className="text-blue-400">CodeWithYash</span> and start your coding journey today!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" />

                    <button type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mt-2">
                        Create Account
                    </button>
                </form>

                <div className="flex justify-center text-gray-400 text-sm mt-4">
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-400 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
