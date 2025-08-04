import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section className="relative bg-[#0D1117] min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">


      <div className="bg-[#1E2736] shadow-lg rounded-xl p-8 w-full max-w-md text-center z-10">
        <h1 className="text-4xl font-bold mb-6">🔑 Login</h1>
        <p className="text-gray-400 mb-6 text-sm">
          Welcome back! Login to access your coding dashboard.
        </p>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mt-2">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="flex justify-center text-gray-400 text-sm mt-4">
          <p>
            New here?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
