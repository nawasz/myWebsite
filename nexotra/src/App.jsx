import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
