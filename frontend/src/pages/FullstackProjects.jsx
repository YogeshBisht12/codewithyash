export default function FullstackProjects() {
    const projects = [
        {
            title: "ChitChat (MERN Chat App)",
            desc: "A real-time chat app with authentication, WebSocket, and MongoDB.",
            icon: "💬",
            github: "https://github.com/YOUR_USERNAME/chitchat", 
            demo: "chitchat-a1xa.onrender.com/", 
        },
        {
            title: "AURA (Virtual Assistant)",
            desc: "An AI-powered virtual assistant with voice commands and smart features.",
            icon: "🤖",
            github: "https://github.com/YOUR_USERNAME/aura",
            demo: "aura-nzqh.vercel.app/", 
        },
        {
            title: "Portfolio Website",
            desc: "My personal developer portfolio showcasing skills and projects.",
            icon: "🌐",
            github: "https://github.com/YOUR_USERNAME/portfolio", 
            demo: "yogeshbishtportfolio.netlify.app/", 
        },
    ];

    return (
        <section className="min-h-screen bg-[#0D1117] text-white px-6 md:px-12 py-20 relative">
            
            <div className="absolute w-[350px] h-[350px] bg-blue-800 rounded-full blur-[160px] opacity-25 top-20 left-10"></div>
            <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full blur-[150px] opacity-20 bottom-10 right-10"></div>

            
            <div className="text-center mb-16 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">🌐 Fullstack Projects</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Real-world apps built using the MERN stack and modern web technologies.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#1E2736] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition transform group"
                    >
                        <div className="text-5xl mb-4">{project.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.desc}</p>

                        
                        <div className="flex gap-4 justify-center">
                            
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group"
                            >
                                <button className="relative px-4 py-2 font-medium rounded-lg text-blue-600 border border-blue-600 w-[120px] overflow-hidden">
                                    <span className="relative z-20 group-hover:text-white transition-colors duration-500">
                                        GitHub
                                    </span>
                                    <span className="absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                    <span className="absolute inset-0 bg-blue-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                </button>
                            </a>

                            
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group"
                            >
                                <button className="relative px-4 py-2 font-medium rounded-lg text-green-600 border border-green-600 w-[120px] overflow-hidden">
                                    <span className="relative z-20 group-hover:text-white transition-colors duration-500">
                                        Live Demo
                                    </span>
                                    <span className="absolute inset-0 bg-green-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                    <span className="absolute inset-0 bg-green-600 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-[800ms] ease-in-out z-10"></span>
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
