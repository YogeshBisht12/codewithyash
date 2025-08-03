export default function Contact() {
    return (
        <section className="bg-[#0D1117] w-full min-h-screen  px-6 md:px-12 flex flex-col items-center">
            {/* Divider Line */}
            <div className="w-full h-[2px] bg-blue-900 mb-20"></div>

            {/* Heading */}
            <div className="max-w-3xl text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    📬 Get in Touch
                </h2>
                <p className="text-lg text-gray-400">
                    Have questions, suggestions, or collaborations? Let's connect!
                </p>
            </div>

            {/* Contact Form */}
            <form className="bg-[#1E2736] p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600"
                />
                <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                >
                    Send Message 🚀
                </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-3xl">
                    📸
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 text-3xl">
                    💻
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-3xl">
                    🔗
                </a>
            </div>
        </section>
    );
}
