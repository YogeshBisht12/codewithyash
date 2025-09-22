import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import post1 from "../assets/insta-post1.jpg";
import post2 from "../assets/insta-post2.jpg";
import post3 from "../assets/insta-post3.jpg";
import post4 from "../assets/insta-post4.jpg";
import post5 from "../assets/insta-post5.jpg";
import post6 from "../assets/insta-post6.jpg";
import post7 from "../assets/insta-post7.jpg";
import post8 from "../assets/insta-post8.jpg";
import post9 from "../assets/insta-post9.jpg";


export default function InstagramFeed() {
  const posts = [post1, post2, post3, post4,post5,post6,post7,post8,post9]; // duplicate for seamless scroll

  return (
    <div className="flex flex-col items-center text-center w-full md:w-[90%] py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Glimpses Of Content</h2>

      <div className="relative w-full max-w-5xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true} // smooth continuous scroll
          loop={true}
          speed={2500} // faster scroll
          autoplay={{
            delay: 0, // continuous scroll
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeModeMomentumVelocityRatio={0.5} // smoothness
          className="cursor-grab"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index} className="w-[280px] flex-shrink-0">
              <div className="relative group">
             <img
  src={post}
  alt={`Instagram Post ${index + 1}`}
  className="rounded-xl shadow-lg w-full object-contain transition-transform duration-500 group-hover:scale-105"
/>



              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <a
              className="inline-flex items-center gap-2 text-white border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-6 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
              href="https://www.instagram.com/codewithyash3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Instagram
            </a>
    </div>
  );
}
