import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Loader from "./components/Loader"; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HighlightBanner from "./components/HighlightBanner"; 

// pages
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
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

// 🔒 import your ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
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
    <>
      <ScrollToTop />
      <div className="page-content flex flex-col min-h-screen opacity-0">
        <HighlightBanner /> 
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected explore section */}
            <Route
              path="/explore/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="dsa" element={<DSA />} />
                    <Route path="webdev" element={<WebDev />} />
                    <Route path="system-design" element={<SystemDesign />} />
                    <Route path="dsa/easy" element={<EasyProblems />} />
                    <Route path="dsa/medium" element={<MediumProblems />} />
                    <Route path="dsa/hard" element={<HardProblems />} />
                    <Route path="dsa/pattern" element={<PatternProblems />} />
                    <Route path="dsa/company-tags" element={<CompanyTags />} />
                    <Route path="dsa/mock-tests" element={<MockTests />} />
                    <Route path="webdev/frontend" element={<Frontend />} />
                    <Route path="webdev/backend" element={<Backend />} />
                    <Route path="webdev/fullstack" element={<FullstackProjects />} />
                    <Route path="webdev/roadmaps" element={<WebDevRoadmaps />} />
                    <Route path="webdev/apis" element={<APIsIntegration />} />
                    <Route path="webdev/deployment" element={<DeploymentHosting />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
