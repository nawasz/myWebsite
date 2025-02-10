// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   BrowserRouter,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ScrollProgress from "./components/ScrollProgress";
import Home from "./components/Home";
//import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Dt from "./components/DigitalTransformationService";
import FullstackService from "./components/FullstackService";
import CloudService from "./components/CloudService";
import CyberSecurityService from "./components/CyberSecurityService";
import MobileDevelopmentService from "./components/mobileDevelopmentService";
import AiMachineLearning from "./components/AI&ML";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="bg-black">
//         <ScrollProgress />
//         {/* <Router> */}
//         <Navbar />
//         <Home />
//         <About />
//         <Services />
//         <Technologies />
//         <Contact />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/technologies" element={<Technologies />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         {/* </Router> */}
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About1 from "./components/About1";
import AutoSlider from "./components/AutoSlider";
import OurStory from "./components/OurStory";
// import servicesHere from "./components/servicesHere";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/whyChooseUs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              {/* <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
                <AutoSlider />
              </div> */}
              <OurStory />
              <About />
              <ServicesSection />
              <WhyChooseUs />
              {/* <servicesHere /> */}
              <Services />
              {/* <Technologies />
              <Contact /> */}
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About1 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/digital-transformation" element={<Dt />} />
        <Route path="/services/full-stack" element={<FullstackService />} />
        <Route
          path="/services/cybersecurity"
          element={<CyberSecurityService />}
        />
        <Route path="/services/cloud-integration" element={<CloudService />} />
        <Route
          path="/services/mobile-development"
          element={<MobileDevelopmentService />}
        />
        <Route path="/services/AI&ML" element={<AiMachineLearning />} />
      </Routes>
    </div>
  );
}

export default App;
