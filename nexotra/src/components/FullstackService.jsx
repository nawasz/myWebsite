import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Code2, Database, Layout, Terminal } from "lucide-react";

function FullstackService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Code2 className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Fullstack Development
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive end-to-end web development solutions that bring your
              vision to life, from concept to deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Layout className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Frontend Development
                </h3>
                <p className="text-gray-600">
                  Modern, responsive user interfaces built with React, Vue, or
                  Angular. Pixel-perfect designs with optimal performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Database className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Backend Development
                </h3>
                <p className="text-gray-600">
                  Robust server-side solutions using Node.js, Python, or Java.
                  Scalable architecture and efficient database design.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Terminal className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">API Development</h3>
                <p className="text-gray-600">
                  RESTful and GraphQL APIs with comprehensive documentation.
                  Secure endpoints and efficient data handling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Code2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Full Stack Integration
                </h3>
                <p className="text-gray-600">
                  Seamless integration of frontend and backend components.
                  End-to-end testing and deployment strategies.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Why Choose Our Fullstack Development?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Modern tech stack and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Scalable and maintainable code architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Performance optimization and security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Comprehensive testing and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullstackService;
