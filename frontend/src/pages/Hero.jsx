import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InstagramFeed from "../components/InstagramFeed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "boxicons/css/boxicons.min.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef(null);
  const leftTextRef = useRef(null);
  const buttonsRef = useRef([]);
  const instaRef = useRef(null);
  const navigate = useNavigate();

  buttonsRef.current = [];

  const addButtonRef = (el) =>
    el && !buttonsRef.current.includes(el) && buttonsRef.current.push(el);

  const handleButtonClick = (label) => {
    if (label === "Start Exploring") {
      navigate("/explore/dsa");
    } else if (label === "Join Community") {
      window.open("https://www.instagram.com/codewithyash3/", "_blank");
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      leftTextRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      instaRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative bg-[#0D1117] w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12">
      {/* Gradient Background Circles */}
      <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-blue-900 rounded-full blur-[150px] opacity-20 top-24 left-[-100px] animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-purple-800 rounded-full blur-[120px] opacity-15 bottom-16 right-[-100px] animate-pulse"></div>
      <div className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-pink-700 rounded-full blur-[120px] opacity-10 top-[70%] left-[50%] animate-pulse"></div>

      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-center w-full text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-snug px-2 mt-12"
      >
        Code
        <span className="text-blue-900 mx-2 inline-block text-4xl sm:text-5xl">
          ⬩
        </span>
        Create
        <span className="text-blue-900 mx-2 inline-block text-4xl sm:text-5xl">
          ⬩
        </span>
        <span className="animate-colorChange">Conquer</span>
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 mt-12 sm:mt-20">
        {/* Left Text */}
        <div ref={leftTextRef} className="flex flex-col items-start text-left z-10">
          {/* Badge */}
          <div className="relative w-full sm:w-52 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
            <div className="absolute inset-[3px] text-white bg-black rounded-full flex items-center justify-center gap-2 text-sm sm:text-base">
              <i className="bx bx-diamond"></i>
              INTRODUCING
            </div>
          </div>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-wide my-6">
            A COMMUNITY-DRIVEN SPACE <br />
            TO
          </h2>

          {/* Paragraph */}
          <p className="text-sm sm:text-lg text-gray-400 max-w-[22rem] sm:max-w-[28rem] lg:max-w-[32rem] leading-relaxed">
            Learn, build, and grow in the world of programming. From coding
            tutorials to full-stack projects, explore practical resources
            designed for developers of all levels.
          </p>

          {/* Button */}
          <div className="mt-6">
            <a
              className="inline-flex items-center gap-2 text-white border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-6 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
              href="https://www.instagram.com/codewithyash3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
              <i className="bx bx-at text-lg"></i>
            </a>
          </div>
        </div>

        {/* Right Side Instagram */}
        <div
          ref={instaRef}
          className="w-full md:w-1/2 flex justify-center px-2"
        >
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
}
