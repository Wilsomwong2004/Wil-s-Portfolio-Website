import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Aceternity-inspired Glow Effect Button
export const GlowButton = ({ children, onClick, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden rounded-full ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, black, transparent 100%)`,
        }}
      />
    </motion.button>
  );
};

// Enhanced FloatingDockNav with Aceternity-like effects
export const EnhancedFloatingDockNav = ({ 
  activeSection, 
  scrollToSection,
  navItems 
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);
  
  // Ensure scrollToSection is a function
  const handleScrollToSection = (sectionId) => {
    if (typeof scrollToSection === 'function') {
      scrollToSection(sectionId);
    } else {
      console.error('scrollToSection is not a function');
      // Fallback behavior
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Scale factor calculation based on distance from mouse
  const getScale = (itemId) => {
    if (hoveredItem === itemId || activeSection === itemId) return 1.2;
    
    if (hoveredItem) {
      const items = navItems.map(item => item.id);
      const hoveredIndex = items.indexOf(hoveredItem);
      const itemIndex = items.indexOf(itemId);
      const distance = Math.abs(hoveredIndex - itemIndex);
      
      // Adjacent items scale down slightly
      if (distance === 1) return 1.1;
      if (distance === 2) return 1.05;
    }
    
    return 1;
  };

  return (
    <div ref={navRef} className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        className="flex items-center gap-2 p-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: getScale(item.id),
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            {activeSection === item.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full -z-10"
                layoutId="activeBackground"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {hoveredItem === item.id && activeSection !== item.id && (
              <motion.div
                className="absolute inset-0 bg-black/30 rounded-full -z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default {
  GlowButton,
  EnhancedFloatingDockNav
};