import React from "react";
import { Users, Rocket, Target, Award, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded-xl shadow-md">
      {/* Left Div */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-700">
          Welcome to Federal Soft Systems
        </h2>
        <p className="text-blue-900 font-black text-4xl">
          <div className="mb-2">Revolutionizing</div>
          <span>Global Digital Excellence</span>
        </p>
      </div>
      {/* right Div */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-sm ml-4">
        <p className="text-gray-700 mt-4 font-medium pl-4">
          <div>
            Federal Soft Systems Inc. is a leading Global IT Products and
            Services
          </div>
          company that specializes in the Digital Transformation for diverse
          <div>business verticals.</div>
        </p>
        <a href="/company">
          <h2 className="text-xl text-gray-700 font-bold mt-4 ">
            Explore More
          </h2>
        </a>
      </div>
    </div>
  );
};

export default About;
