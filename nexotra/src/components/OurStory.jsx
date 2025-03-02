import React from "react";
import myStoryImage from "../assets/Story.png";
import { motion } from "framer-motion";

const OurStory = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom, number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-screen p-4 group">
      {/* Background Image with Hover Animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.9, ease: "easeOut" }}
      >
        <motion.img
          src={myStoryImage}
          alt="Our Story Background"
          className="w-full h-full object-cover transform origin-center "
          initial={{ scale: 1.1 }} // Slightly larger initial scale to prevent white edges during animation
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>

      {/* Overlay with Glass Effect */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 rounded-2xl"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center text-white max-w-2xl">
          {/* Title Animation */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold m-4 p-9 bg-clip-text text-transparent bg-gradient-to-br from-pink-600  via-black to-bg-purple-900 "
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Our Story
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-200"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            A Journey of Passion, Innovation & Global Impact
          </motion.h2>

          {/* Description Animation */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Rooted in a vision for positive influence, our journey reflects
            passion and innovation. Overcoming early challenges, we've evolved
            to empower enterprises globally.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;
