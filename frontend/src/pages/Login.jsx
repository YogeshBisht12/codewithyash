import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        formData
      );
      login(res.data.token); 
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="relative bg-[#0D1117] min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="bg-[#1E2736] shadow-lg rounded-xl p-8 w-full max-w-md text-center z-10">
        <h1 className="text-4xl font-bold mb-6">🔑 Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
