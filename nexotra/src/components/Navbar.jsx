import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NexotraLogo = () => {
  return (
    <Link to="/">
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
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Orbital rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                border: "2px solid",
                borderColor: `rgba(59, 130, 246, ${0.3 - i * 0.1})`,
                borderRadius: "50%",
                transform: `scale(${1.2 + i * 0.2})`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1.2 + i * 0.2, 1.3 + i * 0.2, 1.2 + i * 0.2],
              }}
              transition={{
                rotate: {
                  duration: 10 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          ))}

          {/* Inner geometric patterns */}
          <motion.div
            className="absolute inset-2"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              background: "linear-gradient(135deg, #60a5fa, #7c3aed)",
            }}
            animate={{
              rotate: [0, -360],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Pulsing core */}
          <motion.div
            className="absolute inset-3"
            style={{
              background: "radial-gradient(circle, #93c5fd, #3b82f6)",
              borderRadius: "50%",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Company name with gradient effect */}
        <div className="ml-3">
          <motion.div
            className="font-bold text-xl"
            animate={{
              background: [
                "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                "linear-gradient(225deg, #3b82f6, #8b5cf6)",
                "linear-gradient(45deg, #3b82f6, #8b5cf6)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nexotra
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const scrollToTopAndNavigate = (navigate, to) => {
  // First, smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Wait for the scroll animation to complete (approximately)
  setTimeout(() => {
    navigate(to);
  }, 500); // Adjust timing if needed
};
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === to;

  const handleClick = (e) => {
    e.preventDefault();
    scrollToTopAndNavigate(navigate, to);
  };

  return (
    <Link to={to} onClick={handleClick} className="relative group">
      <motion.span
        className={`text-gray-300 capitalize transition-all duration-500 ease-in-out hover:text-orange-700 hover:font-bold font-serif ${
          isActive ? "text-green-600" : "text-blue-950"
        }`}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 9000 }}
      >
        {children}
      </motion.span>
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
          layoutId="underline"
        />
      )}
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/technologies", label: "technologies" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={` w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className=" px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex items-center justify-between h-16">
          <NexotraLogo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`block w-full px-3 py-2 text-base font-medium rounded-md ${
                      location.pathname === item.path
                        ? "text-white bg-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
