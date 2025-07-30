export default function Hero() {
    return (
        <section className="bg-[#0D1117] w-full min-h-screen flex flex-col items-center justify-center relative px-10">
            
            <h1 className="absolute top-10 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Code
                <span className="text-blue-900 mx-2 inline-block text-5xl align-baseline">⬩</span>
                Create
                <span className="text-blue-900 mx-2 inline-block text-5xl align-baseline">⬩</span>
                Conquer
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center w-full mt-24">
                
                <div className="md:w-1/2 space-y-6 text-white text-center md:text-left">
                    <p className="text-xl md:text-2xl font-semibold animate-[colorPulse_2s_ease-in-out_infinite]">
                        Explore <span className="font-bold">DSA problems</span>, web dev resources, and coding tips—all in one place!
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <button className="bg-blue-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
                            🚀 Start Exploring
                        </button>
                        <button className="bg-white border border-[#0D1117] font-medium text-[#0D1117] px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition">
                            📬 Join Instagram
                        </button>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4561617-3785544.png"
                        alt="Coding"
                        className="w-4/5 md:w-full"
                    />
                </div>
            </div>
        </section>
    );
}
