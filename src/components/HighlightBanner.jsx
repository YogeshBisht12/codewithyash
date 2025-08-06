export default function HighlightBanner() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-md">
            <a
                href="https://www.instagram.com/codewithyash3/"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
            >
                <div className="relative flex whitespace-nowrap hover:[animation-play-state:paused]">
                    <span className="animate-marquee inline-block px-8 font-semibold text-sm md:text-base tracking-wide">
                        🚀 Join <span className="underline">codewithyash</span> on Instagram for coding tips & updates! 🔥
                        🚀 Join <span className="underline">codewithyash</span> on Instagram for coding tips & updates! 🔥
                        🚀 Join <span className="underline">codewithyash</span> on Instagram for coding tips & updates! 🔥
                    </span>
                    <span
                        className="animate-marquee inline-block px-8 font-semibold text-sm md:text-base tracking-wide"
                        aria-hidden="true"
                    >
                        🚀 Join <span className="underline">codewithyash</span> on Instagram for coding tips & updates! 🔥
                        🚀 Join <span className="underline">codewithyash</span> on Instagram for coding tips & updates! 🔥
                        🚀 Join <span className="underline">codewithyash</span> on Instagram for coding tips & updates! 🔥
                    </span>
                </div>
            </a>
        </div>
    );
}
