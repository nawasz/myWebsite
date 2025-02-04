import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Shield,
  Laptop,
  Database,
  Cloud,
} from "lucide-react";

const slides = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 h-full p-12">
        <div className="md:w-1/2 space-y-6">
          <Code2 className="w-12 h-12 text-blue-400" />
          <h2 className="text-4xl font-bold text-white">
            Full Stack Development
          </h2>
          <p className="text-white/90 text-lg">
            End-to-end web and mobile solutions using cutting-edge technologies:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>React, Angular, Vue.js Frontend</li>
            <li>Node.js, Python Backend</li>
            <li>Native & Cross-platform Mobile Apps</li>
            <li>Progressive Web Applications</li>
          </ul>
          <button
            onClick={() => (window.location.href = "/services/full-stack")}
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Know More
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1627398242454-45a1465c2479"
              alt="Development process"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    ),
    path: "/services/full-stack",
  },
  {
    id: 2,
    bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full p-12">
        <div className="col-span-2 flex flex-col justify-center space-y-6">
          <Shield className="w-12 h-12 text-red-400" />
          <h2 className="text-4xl font-bold text-white">
            Cybersecurity Solutions
          </h2>
          <p className="text-white/90 text-lg">
            Comprehensive security services to protect your digital assets:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>Penetration Testing</li>
            <li>Security Audits & Compliance</li>
            <li>Incident Response Planning</li>
            <li>Security Architecture Design</li>
          </ul>
          <button
            onClick={() => (window.location.href = "/services/cybersecurity")}
            className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Know More
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-red-900/30 backdrop-blur-lg rounded-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
              alt="Cybersecurity"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    ),
    path: "/services/cybersecurity",
  },
  {
    id: 3,
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    content: (
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 h-full p-12">
        <div className="md:w-1/2 space-y-6">
          <Cloud className="w-12 h-12 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">Cloud Integration</h2>
          <p className="text-white/90 text-lg">
            Seamless cloud solutions for modern businesses:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>AWS & Azure Architecture</li>
            <li>Cloud Migration Services</li>
            <li>Serverless Applications</li>
            <li>DevOps Implementation</li>
          </ul>
          <button
            onClick={() =>
              (window.location.href = "/services/cloud-integration")
            }
            className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
          >
            Know More
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Cloud computing"
            className="rounded-lg shadow-2xl relative z-10"
          />
        </div>
      </div>
    ),
    path: "/services/cloud-integration",
  },
  {
    id: 4,
    bgImage: "https://images.unsplash.com/photo-1520869562399-e772f042f422",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full p-12">
        <div className="flex flex-col justify-center space-y-6">
          <Database className="w-12 h-12 text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            Enterprise Solutions
          </h2>
          <p className="text-white/90 text-lg">
            Custom enterprise-grade solutions:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>ERP System Integration</li>
            <li>Business Process Automation</li>
            <li>Data Analytics & BI Solutions</li>
            <li>Legacy System Modernization</li>
          </ul>
          <button
            onClick={() =>
              (window.location.href = "/services/enterprise-solutions")
            }
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Know More
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-green-900/30 p-6 rounded-lg backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1520869562399-e772f042f422"
              alt="Enterprise solutions"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    ),
    path: "/services/enterprise-solutions",
  },
  {
    id: 5,
    bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 h-full p-12">
        <div className="md:w-1/2 space-y-6">
          <Laptop className="w-12 h-12 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">
            Digital Transformation
          </h2>
          <p className="text-white/90 text-lg">
            Complete digital transformation services:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>Digital Strategy Consulting</li>
            <li>Process Digitization</li>
            <li>IoT Integration</li>
            <li>AI & ML Implementation</li>
          </ul>
          <button
            onClick={() => (window.location.href = "/digital-transformation")}
            className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition"
          >
            Know More
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Digital transformation"
            className="rounded-lg shadow-2xl relative z-10"
          />
        </div>
      </div>
    ),
    path: "/digital-transformation",
  },
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] overflow-hidden rounded-xl">
      {/* Slides */}
      <div
        className="h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src={slide.bgImage}
                alt="background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full">{slide.content}</div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
