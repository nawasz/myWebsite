import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Building2,
  Code,
  Users,
  Megaphone,
  BookOpen,
  Newspaper,
  FileText,
} from "lucide-react";

const serviceContents = {
  IT: {
    title: "Information Technology",
    icon: <Code className="h-4 w-4" />,
    subServices: {
      "Business Consulting": {
        title: "Business IT Consulting",
        description:
          "Strategic IT consulting to align technology with your business goals. Our expert consultants help optimize your IT infrastructure, improve operational efficiency, and drive digital transformation initiatives that deliver measurable business value.",
        knowmoreLink: "/services/full-stack",
      },
      "AI Implementation": {
        title: "AI & Machine Learning Solutions",
        description:
          "Cutting-edge artificial intelligence solutions to transform your business. From predictive analytics to natural language processing, we help implement AI technologies that automate processes, enhance decision-making, and create competitive advantages.",
        knowmoreLink: "/services/AI&ML ",
      },
      "Support Services": {
        title: "24/7 IT Support Services",
        description:
          "Comprehensive IT support to keep your business running smoothly. Our dedicated team provides round-the-clock assistance, proactive monitoring, and rapid issue resolution to minimize downtime and maximize productivity.",
        knowmoreLink: "/services/full-stack",
      },
      "App Development": {
        title: "Custom Application Development",
        description:
          "End-to-end application development services tailored to your needs. We build scalable, secure, and innovative applications using the latest technologies and best practices to help you achieve your business objectives.",
        knowmoreLink: "/services/full-stack",
      },
    },
  },
  TalentAcquisition: {
    title: "Talent Acquisition",
    icon: <Users className="h-4 w-4" />,
    subServices: {
      "Technical Recruitment": {
        title: "Technical Talent Recruitment",
        description:
          "Specialized recruitment services for technical roles. Our expert recruiters identify and attract top tech talent, ensuring the perfect match for your organization's technical needs and culture.",
        knowmoreLink: "/services/full-stack",
      },
      "Executive Search": {
        title: "Executive Leadership Search",
        description:
          "Strategic executive search services to find your next leadership team. We identify and evaluate top-tier executives who can drive your organization's vision and growth.",
        knowmoreLink: "/services/full-stack",
      },
      "Workforce Solutions": {
        title: "Comprehensive Workforce Solutions",
        description:
          "End-to-end workforce management solutions. From temporary staffing to permanent placement, we provide flexible solutions to meet your dynamic workforce needs.",
        knowmoreLink: "/services/full-stack",
      },
      "Talent Assessment": {
        title: "Advanced Talent Assessment",
        description:
          "Comprehensive talent assessment and evaluation services. Our proven assessment methodologies help identify the best candidates who will thrive in your organization.",
        knowmoreLink: "/services/full-stack",
      },
    },
  },
  DigitalMarketing: {
    title: "Digital Marketing",
    icon: <Megaphone className="h-4 w-4" />,
    subServices: {
      "Digital Strategy": {
        title: "Digital Marketing Strategy",
        description:
          "Comprehensive digital marketing strategies tailored to your business goals. We develop data-driven approaches to enhance your online presence and drive measurable results.",
        knowmoreLink: "/services/full-stack",
      },
      "Content Marketing": {
        title: "Content Marketing Services",
        description:
          "Strategic content creation and distribution to engage your target audience. Our content experts create compelling narratives that build brand authority and drive conversions.",
        knowmoreLink: "/services/full-stack",
      },
      "Social Media": {
        title: "Social Media Marketing",
        description:
          "Full-service social media marketing to build and engage your community. We manage your social presence across platforms to increase brand awareness and drive meaningful engagement.",
        knowmoreLink: "/services/full-stack",
      },
      Analytics: {
        title: "Marketing Analytics & Insights",
        description:
          "Advanced analytics and reporting to measure marketing performance. We provide actionable insights to optimize your campaigns and maximize ROI.",
        knowmoreLink: "/services/full-stack",
      },
    },
  },
};

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [activeService, setActiveService] = useState("IT");
  const [activeSubService, setActiveSubService] = useState(
    "Business Consulting"
  );

  return (
    <nav className="bg-gradient-to-br from-pink-300 via-black  to-pink-400  shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              TechCorp
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="/company"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Company
            </a>

            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-xl  "
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                {isServicesOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              {isServicesOpen && (
                <div
                  className="fixed left-0 w-full bg-red-200 shadow-xl border-t border-gray-100 "
                  style={{ top: "64px" }}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="max-w-7xl mx-auto">
                    <div className="flex">
                      <div className="w-1/4 bg-red-200 py-6 px-4 text-base font-bold font-serif ">
                        {Object.entries(serviceContents).map(
                          ([key, service]) => (
                            <button
                              key={key}
                              className={`flex items-center w-full text-left px-4 py-3 font-bold font-serif rounded-lg mb-2 ${
                                activeService === key
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                              onMouseEnter={() => {
                                setActiveService(key);
                                setActiveSubService(
                                  Object.keys(service.subServices)[0]
                                );
                              }}
                            >
                              {service.icon}
                              <span className="ml-2">{service.title}</span>
                            </button>
                          )
                        )}
                      </div>
                      <div className="w-1/3 border-l border-r border-gray-100 py-6 px-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                          Services
                        </h3>
                        <div className="space-y-2">
                          {Object.entries(
                            serviceContents[activeService].subServices
                          ).map(([key, service]) => (
                            <button
                              key={key}
                              className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeSubService === key
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                              onMouseEnter={() => setActiveSubService(key)}
                            >
                              {service.title}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="w-5/12 py-6 px-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          {
                            serviceContents[activeService].subServices[
                              activeSubService
                            ].title
                          }
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {
                            serviceContents[activeService].subServices[
                              activeSubService
                            ].description
                          }
                        </p>
                        <a
                          href={
                            serviceContents[activeService].subServices[
                              activeSubService
                            ].knowmoreLink
                          }
                          className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/products"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Products
            </a>
            <a
              href="/careers"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Careers
            </a>

            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsInsightsOpen(true)}
                onClick={() => setIsInsightsOpen(!isInsightsOpen)}
              >
                Insights
                {isInsightsOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              {isInsightsOpen && (
                <div
                  className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1"
                  onMouseLeave={() => setIsInsightsOpen(false)}
                >
                  <a
                    href="/blogs"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <BookOpen className="h-4 w-4 mr-2" /> Blogs
                  </a>
                  <a
                    href="/news"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Newspaper className="h-4 w-4 mr-2" /> News
                  </a>
                  <a
                    href="/articles"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FileText className="h-4 w-4 mr-2" /> Articles
                  </a>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
