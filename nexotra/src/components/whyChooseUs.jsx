import React, { lazy, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Rocket,
  Target,
  Users,
  Clock,
  Shield,
  Award,
  Code,
  HeartHandshake,
} from "lucide-react";
import chooseUs from "../assets/ChooseUs.png";
const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const reasons = [
    {
      icon: Rocket,
      title: "Innovation Leaders",
      description:
        "Pioneering cutting-edge solutions that set industry standards",
      stats: "150+ Innovations",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Target,
      title: "Result-Driven Approach",
      description: "Focused on delivering measurable business outcomes",
      stats: "98% Success Rate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with diverse industry expertise",
      stats: "50+ Experts",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Mastery in latest technologies and best practices",
      stats: "500+ Projects",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: HeartHandshake,
      title: "Client Partnership",
      description:
        "Building lasting relationships through trust and collaboration",
      stats: "200+ Partners",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-pink-400 via-black to-pink-400">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: useTransform(scrollYProgress, [0, 1], [0, 3]),
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              whileHover:lazy
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-18">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience excellence through innovation, expertise, and unwavering
            commitment to your success. We don't just meet expectations – we
            exceed them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Image Section */}
          <motion.div
            className="lg:col-span-5 relative"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.5], [0.8, 1]),
              opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 1]),
            }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={chooseUs}
                alt="Innovation Hub"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -left-10 top-1/4 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-2xl font-bold text-white">15+</p>
                  <p className="text-sm text-gray-300">Industry Awards</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -right-10 bottom-1/4 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-emerald-400" />
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-gray-300">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Reasons List */}
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-7 space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden bg-gradient-to-r ${reason.color} 
                  p-6 rounded-xl shadow-xl backdrop-blur-lg transform transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/80">{reason.description}</p>
                  </div>
                  <div className="hidden md:block text-right">
                    <span className="text-sm font-medium text-white/60">
                      {reason.stats}
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
