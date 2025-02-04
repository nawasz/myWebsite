import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Network,
  Server,
  Globe,
  ArrowDown,
} from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const techBadgeVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl px-4"
      >
        <motion.div
          animate={floatingAnimation}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Network size={64} className="text-blue-500" />
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Nexotra Technologies
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-300 mb-8"
        >
          Transforming Ideas into Digital Reality
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          <motion.div
            variants={techBadgeVariants}
            whileHover="hover"
            className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/20"
          >
            <Server size={20} className="text-blue-400" />
            <span>Backend Development</span>
          </motion.div>
          <motion.div
            variants={techBadgeVariants}
            whileHover="hover"
            className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/20"
          >
            <Network size={20} className="text-purple-400" />
            <span>Frontend Development</span>
          </motion.div>
          <motion.div
            variants={techBadgeVariants}
            whileHover="hover"
            className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-green-500/20"
          >
            <Globe size={20} className="text-green-400" />
            <span>Web Applications</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:contact@nexotra.tech"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={floatingAnimation}
            className="text-gray-400 flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-transparent opacity-20"></div>
      </motion.div>
    </div>
  );
}
