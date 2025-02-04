import React from "react";
import { Users, Rocket, Target, Award, ChevronRight } from "lucide-react";

const About = () => {
  const [activeYear, setActiveYear] = React.useState(2020);
  const timelineYears = [2020, 2021, 2022, 2023];

  const milestones = {
    2020: {
      title: "The Beginning",
      description:
        "Started with a small team of three visionaries in a garage.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    2021: {
      title: "First Major Breakthrough",
      description: "Launched our flagship service and reached 1000+ clients.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
    2022: {
      title: "Global Expansion",
      description:
        "Opened offices in 5 countries and built an international team.",
      image:
        "https://images.unsplash.com/photo-1512138664757-360e0aad5132?auto=format&fit=crop&w=800&q=80",
    },
    2023: {
      title: "Innovation Leader",
      description: "Recognized as industry pioneer with multiple awards.",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transforming Ideas into Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              We're not just another company - we're your partner in innovation
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize the industry through innovative solutions and
              unparalleled service excellence.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of passionate experts committed to pushing
              boundaries and exceeding expectations.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in innovative solutions that shape the
              future of technology.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {timelineYears.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeYear === year
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <img
                src={milestones[activeYear].image}
                alt={milestones[activeYear].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4">
                {milestones[activeYear].title}
              </h3>
              <p className="text-xl text-gray-600">
                {milestones[activeYear].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Recognition & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Innovation Excellence Award 2023",
            "Best Workplace Culture 2022",
            "Industry Leader Award 2023",
            "Customer Satisfaction Excellence",
          ].map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-center">{award}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8">
            Join us in creating the next big innovation
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold inline-flex items-center group hover:bg-gray-100 transition-colors duration-300">
            Get Started
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
