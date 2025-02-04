import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

function CyberSecurityService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Cybersecurity Solutions</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive cybersecurity solutions to protect your digital assets
              and maintain the integrity of your business operations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Lock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Assessment</h3>
                <p className="text-gray-600">
                  Thorough evaluation of your security posture.
                  Identification of vulnerabilities and risks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Eye className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Threat Monitoring</h3>
                <p className="text-gray-600">
                  24/7 security monitoring and threat detection.
                  Real-time incident response and mitigation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
                <p className="text-gray-600">
                  Implementation of data encryption and security protocols.
                  Compliance with data protection regulations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
                <p className="text-gray-600">
                  Rapid response to security incidents.
                  Recovery and forensic analysis.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Our Cybersecurity Services?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Proactive threat detection and prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Industry-leading security tools and expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Compliance with global security standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Continuous monitoring and updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurityService