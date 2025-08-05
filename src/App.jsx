import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
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
import EasyProblems from "./pages/EasyProblems";
import MediumProblems from "./pages/MediumProblems";
import HardProblems from "./pages/HardProblems";
import PatternProblems from "./pages/PatternProblems";
import CompanyTags from "./pages/CompanyTags";
import MockTests from "./pages/MockTests";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import FullstackProjects from "./pages/FullstackProjects";
import WebDevRoadmaps from "./pages/WebDevRoadmaps";
import APIsIntegration from "./pages/APIsIntegration";
import DeploymentHosting from "./pages/DeploymentHosting";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // ✅ Smooth fade-in animation after loader finishes
      gsap.fromTo(
        ".page-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [loading]);

  return loading ? (
    <Loader onFinish={() => setLoading(false)} />
  ) : (
    <Router>
      <ScrollToTop />
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
            <Route path="/explore/dsa/easy" element={<EasyProblems />} />
            <Route path="/explore/dsa/medium" element={<MediumProblems />} />
            <Route path="/explore/dsa/hard" element={<HardProblems />} />
            <Route path="/explore/dsa/pattern" element={<PatternProblems />} />
            <Route path="/explore/dsa/company-tags" element={<CompanyTags />} />
            <Route path="/explore/dsa/mock-tests" element={<MockTests />} />
            <Route path="/explore/webdev/frontend" element={<Frontend />} />
            <Route path="/explore/webdev/backend" element={<Backend />} />
            <Route path="/explore/webdev/fullstack" element={<FullstackProjects />} />
            <Route path="/explore/webdev/roadmaps" element={<WebDevRoadmaps />} />
            <Route path="/explore/webdev/apis" element={<APIsIntegration />} />
            <Route path="/explore/webdev/deployment" element={<DeploymentHosting />} />




          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
