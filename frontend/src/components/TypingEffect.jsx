"use client";
import { useEffect, useState } from "react";

const TypingEffect = () => {
    const words = ["DSA Problems", "Web Dev Resources", "Coding Tips"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <p className="text-lg sm:text-xl md:text-2xl mt-3 text-blue-400 font-medium text-center md:text-left">
            💡 I share <span className="text-white">{words[index]}</span>
        </p>
    );
};

export default TypingEffect;
