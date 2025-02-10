import React, { useState } from "react";
import ServiceCard from "./ServicesCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    backgroundImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details:
      "Our web development services leverage modern frameworks and best practices...",
    knowmoreLink: "/services/full-stack",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    backgroundImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    details:
      "End-to-end mobile app development for iOS and Android platforms...",
    knowmoreLink: "/services/mobile-development",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    backgroundImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    details:
      "Cloud architecture design and implementation using leading providers...",
    knowmoreLink: "/services/cloud-integration",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Intelligent solutions for business automation",
    backgroundImage:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    details:
      "Custom AI models and machine learning solutions for your business...",
    knowmoreLink: "/services/AI&ML",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Comprehensive security solutions and consulting",
    backgroundImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    details: "Advanced security measures to protect your digital assets...",
    knowmoreLink: "/services/cybersecurity",
  },
  {
    id: 6,
    title: "DevOps Services",
    description: "Streamline your development and operations",
    backgroundImage:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    details: "End-to-end DevOps implementation and optimization...",
    knowmoreLink: "/services/full-stack",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (services.length - 2)) % (services.length - 2)
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-left pl-8 mb-16">
          <p className="text-2xl font-bold text-white mb-4">Our Services</p>
          <h2 className="text-4xl font-bold text-white">
            <span className="block mb-2">Achieve Business Excellence</span>
            <span className="block">With Our Services</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 pl-8">
            {visibleServices.map((service) => (
              <div key={service.id} className="flex-1">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  backgroundImage={service.backgroundImage}
                  onClick={() => setSelectedService(service.id)}
                  knowMore={service.knowmoreLink}
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full">
              <h3 className="text-2xl font-bold mb-4">
                {services.find((s) => s.id === selectedService)?.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {services.find((s) => s.id === selectedService)?.details}
              </p>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
