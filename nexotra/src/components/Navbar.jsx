import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NexotraLogo = () => {
  return (
    <motion.div 
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-8 h-8">
        {/* Core hexagon */}
        <motion.div 
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Orbital rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              border: '2px solid',
              borderColor: `rgba(59, 130, 246, ${0.3 - i * 0.1})`,
              borderRadius: '50%',
              transform: `scale(${1.2 + i * 0.2})`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1.2 + i * 0.2, 1.3 + i * 0.2, 1.2 + i * 0.2]
            }}
            transition={{
              rotate: {
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}

        {/* Inner geometric patterns */}
        <motion.div
          className="absolute inset-2"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            background: 'linear-gradient(135deg, #60a5fa, #7c3aed)'
          }}
          animate={{
            rotate: [0, -360],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

        {/* Pulsing core */}
        <motion.div
          className="absolute inset-3"
          style={{
            background: 'radial-gradient(circle, #93c5fd, #3b82f6)',
            borderRadius: '50%'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Company name with gradient effect */}
      <div className="ml-3">
        <motion.div
          className="font-bold text-xl"
          animate={{
            background: [
              'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              'linear-gradient(225deg, #3b82f6, #8b5cf6)',
              'linear-gradient(45deg, #3b82f6, #8b5cf6)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Nexotra
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NexotraLogo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'technologies', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'services', 'technologies', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}