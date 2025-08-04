import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Loader from "./components/Loader"; // ✅ Import Loader

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import DSA from "./pages/Explore/DSA";
import WebDev from "./pages/Explore/WebDev";
import SystemDesign from "./pages/Explore/SystemDesign";

gsap.registerPlugin(ScrollSmoother);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // ✅ Smooth fade-in animation after loader finishes
      gsap.fromTo(
        ".page-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // ✅ Initialize smooth scrolling
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }
  }, [loading]);

  return loading ? (
    <Loader onFinish={() => setLoading(false)} />
  ) : (
    <Router>
      <ScrollToTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="page-content flex flex-col min-h-screen opacity-0">
            {/* ✅ Initially hidden, fades in after loader */}
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/explore/dsa" element={<DSA />} />
                <Route path="/explore/webdev" element={<WebDev />} />
                <Route path="/explore/system-design" element={<SystemDesign />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}
