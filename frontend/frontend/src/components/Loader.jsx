import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);

                    // ✅ Cinematic Exit Animation
                    const tl = gsap.timeline({
                        onComplete: onFinish,
                    });

                    tl.to(".loader-logo", {
                        scale: 1.3,
                        textShadow: "0px 0px 40px rgba(59,130,246,0.8)",
                        duration: 0.5,
                        ease: "power3.out",
                    })
                        .to(".loader-logo", {
                            opacity: 0,
                            scale: 0.9,
                            duration: 0.5,
                            ease: "power2.inOut",
                        })
                        .to(".loader", {
                            opacity: 0,
                            duration: 0.8,
                            ease: "power3.inOut",
                        });
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        // ✅ Initial Logo Entrance
        gsap.fromTo(
            ".loader-logo",
            { opacity: 0, scale: 0.8, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" }
        );

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className="loader fixed inset-0 bg-[#0D1117] flex flex-col items-center justify-center z-[9999] overflow-hidden">
            {/* Glowing Background Orbs */}
            <div className="absolute w-[400px] h-[400px] bg-blue-900/40 blur-[150px] rounded-full -top-20 -left-20"></div>
            <div className="absolute w-[350px] h-[350px] bg-purple-800/30 blur-[130px] rounded-full bottom-10 right-10"></div>

            {/* Animated Logo/Text */}
            <h1 className="loader-logo text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 tracking-wide mb-6">
                CodeWithYash
            </h1>

            {/* Progress Percentage */}
            <p className="text-lg text-gray-300 mb-4">{progress}%</p>

            {/* Progress Bar */}
            <div className="w-[220px] h-[5px] bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <div
                    className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}
