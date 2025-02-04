import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cloud, Server, Shield, Zap } from "lucide-react";

function CloudService() {
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
            <Cloud className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Cloud Solutions
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Enterprise-grade cloud solutions that optimize your
              infrastructure, enhance scalability, and reduce operational costs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Server className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Cloud Infrastructure
                </h3>
                <p className="text-gray-600">
                  Design and implementation of scalable cloud infrastructure
                  using AWS, Azure, or GCP. Optimize for performance and cost.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
                <p className="text-gray-600">
                  Implement robust security measures and compliance standards.
                  Regular security audits and updates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
                <p className="text-gray-600">
                  Seamless migration of existing infrastructure to the cloud.
                  Minimal downtime and data integrity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Cloud className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cloud Management</h3>
                <p className="text-gray-600">
                  24/7 monitoring and management of cloud resources. Cost
                  optimization and performance tuning.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Benefits of Our Cloud Solutions
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improved scalability and flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enhanced security and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Cost optimization and resource efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>24/7 monitoring and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudService;
