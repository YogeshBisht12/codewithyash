import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import ScrollToTop

import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

import DSA from "./pages/Explore/DSA";
import WebDev from "./pages/Explore/WebDev";
import SystemDesign from "./pages/Explore/SystemDesign";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add it just inside Router */}
      <div className="flex flex-col min-h-screen">

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

        {/* Footer (persistent across all pages) */}
        <Footer />
      </div>
    </Router>
  );
}
