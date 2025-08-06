import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import post1 from "../assets/insta-post1.jpg";
import post2 from "../assets/insta-post2.jpg";
import post3 from "../assets/insta-post3.jpg";
import post4 from "../assets/insta-post4.jpg";

export default function InstagramFeed() {
    const posts = [post1, post2, post3, post4];

    return (
        <div className="flex flex-col items-center text-center w-full md:w-[90%]">
            
            <div className="relative w-full max-w-3xl">
                <div className="bg-gray-900 border-4 border-blue-900 rounded-2xl overflow-hidden shadow-xl">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        speed={1200}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {posts.map((post, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={post}
                                    alt={`Instagram Post ${index + 1}`}
                                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-500 w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="bg-gray-700 h-6 rounded-b-xl mx-auto w-[95%]"></div>
            </div>

            <a
                href="https://www.instagram.com/reel/DMpEVHMTLOB/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-3 text-lg bg-blue-900 font-semibold text-white rounded-lg hover:opacity-90 transition"
            >
                View on Instagram
            </a>
        </div>
    );
}
