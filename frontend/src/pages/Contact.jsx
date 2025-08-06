import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelopeOpenText } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const formRef = useRef(null); 
    const formFieldsRef = useRef([]);
    const buttonRef = useRef(null);
    const socialIconsRef = useRef([]);
    const [status, setStatus] = useState("");

    formFieldsRef.current = [];
    socialIconsRef.current = [];

    const addFormFieldRef = (el) => el && !formFieldsRef.current.includes(el) && formFieldsRef.current.push(el);
    const addSocialIconRef = (el) => el && !socialIconsRef.current.includes(el) && socialIconsRef.current.push(el);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current.querySelector("h2"), { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
            gsap.fromTo(sectionRef.current.querySelector("p"), { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
            gsap.fromTo(formFieldsRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
            gsap.fromTo(buttonRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
            gsap.fromTo(socialIconsRef.current, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "elastic.out(1, 0.6)", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
        });
        return () => ctx.revert();
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_s9isxrn",  
                "template_d7xbmbh", 
                formRef.current,    
                "sSegjnUWihe2QUoD3" 
            )
            .then(() => {
                setStatus("✅ Message sent successfully!");
                formRef.current.reset();
            })
            .catch(() => setStatus("❌ Failed to send message."));
    };

    return (
        <section ref={sectionRef} className="bg-[#0D1117] w-full min-h-screen px-6 md:px-12 flex flex-col items-center">
            <div className="w-full h-[2px] bg-blue-900 mb-20"></div>
            
            
            <div className="max-w-3xl text-center mb-10">
                <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-white mb-4">
                    <FaEnvelopeOpenText className="text-blue-400 animate-pulse" /> Get in Touch
                </h2>
                <p className="text-lg text-gray-400">Have questions, suggestions, or collaborations? Let's connect!</p>
            </div>

            
            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1E2736] p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6 border border-gray-700">
                <input ref={addFormFieldRef} type="text" name="name" placeholder="Your Name" required 
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600 transition"/>
                <input ref={addFormFieldRef} type="email" name="email" placeholder="Your Email" required 
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600 transition"/>
                <textarea ref={addFormFieldRef} name="message" placeholder="Your Message" rows="4" required 
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white focus:outline-none focus:border-blue-600 transition"></textarea>
                <button ref={buttonRef} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition transform hover:scale-[1.02]">
                    Send Message 🚀
                </button>
                {status && <p className="text-center text-gray-300 mt-2">{status}</p>}
            </form>

            
            <div className="flex gap-6 mt-8">
                <a ref={addSocialIconRef} href="https://instagram.com/codewithyash3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-3xl transition-transform transform hover:scale-110">
                    <FaInstagram />
                </a>
                <a ref={addSocialIconRef} href="https://github.com/YogeshBisht12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 text-3xl transition-transform transform hover:scale-110">
                    <FaGithub />
                </a>
                <a ref={addSocialIconRef} href="https://linkedin.com/in/yogesh-bisht-9389862b4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110">
                    <FaLinkedin />
                </a>
            </div>
        </section>
    );
}
