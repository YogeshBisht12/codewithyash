import InstagramFeed from "../components/InstagramFeed";
import RippleCanvas from "../components/RippleCanvas"; // ✅ Import ripple effect

export default function Hero() {
    return (
        <section className="relative bg-[#0D1117] w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* ✅ Whitish Ripple Canvas */}
            <RippleCanvas />

            {/* Heading */}
            <h1 className="absolute top-4 sm:top-6 md:top-8 text-center w-full text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-snug px-2">
                Code 
                <span className="text-blue-900 mx-1 sm:mx-2 inline-block text-4xl sm:text-5xl">⬩</span>
                Create 
                <span className="text-blue-900 mx-1 sm:mx-2 inline-block text-4xl sm:text-5xl">⬩</span>
                <span className="animate-colorChange">Conquer</span>
            </h1>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 sm:gap-10 mt-16 sm:mt-24 md:mt-28">
                {/* Left Text Section */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left px-2 -mt-8 sm:-mt-10 md:-mt-12">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
                        🚀 Explore <span className="text-blue-400">DSA problems</span>
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-5">
                        Web dev resources & coding tips — all in one place!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <button className="bg-transparent border  border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium">
                            Start Exploring
                        </button>
                        <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium">
                            Join Instagram
                        </button>
                    </div>
                </div>

                {/* Right Instagram Feed */}
                <div className="w-full md:w-1/2 flex justify-center px-2">
                    <InstagramFeed />
                </div>
            </div>
        </section>
    );
}
