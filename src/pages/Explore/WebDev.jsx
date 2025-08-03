import RippleCanvas from "../../components/RippleCanvas";

export default function WebDev() {
  const categories = [
    {
      title: "Frontend Development",
      desc: "Master React, Next.js, Tailwind, and modern UI/UX skills.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      desc: "Learn Node.js, Express, databases, and authentication.",
      icon: "⚙️",
    },
    {
      title: "Fullstack Projects",
      desc: "Build real-world apps integrating frontend & backend.",
      icon: "🌐",
    },
    {
      title: "Web Dev Roadmaps",
      desc: "Step-by-step guide for becoming a web developer.",
      icon: "🗺️",
    },
    {
      title: "APIs & Integrations",
      desc: "Learn REST, GraphQL, and third-party API integration.",
      icon: "🔗",
    },
    {
      title: "Deployment & Hosting",
      desc: "Host projects on Vercel, Netlify, AWS, or your own VPS.",
      icon: "🚀",
    },
  ];

  return (
    <section className="relative bg-[#0D1117] min-h-screen text-white overflow-hidden px-6 md:px-12 pt-24 pb-16">
      <RippleCanvas />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">💻 Web Development</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Learn frontend, backend, fullstack development, APIs, and deployment to build modern web apps.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#1E2736] p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-900 transition text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Explore →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
