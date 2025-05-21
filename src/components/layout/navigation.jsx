import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobileMenu";
import FloatingDockNav from "./floatingDockNav";

const Navigation = ({ 
  activeSection, 
  scrollToSection 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTraditionalNav, setShowTraditionalNav] = useState(false);
  
  const handleScrollToSection = (sectionId) => {
    if (typeof scrollToSection === 'function') {
      scrollToSection(sectionId);
    } else {
      console.error('scrollToSection is not a function');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  
  return (
    <>
      {/* Traditional Nav for Mobile */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md shadow-md ${showTraditionalNav ? "bg-white dark:bg-gray-800" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full bg-black/20 backdrop-blur-lg text-white hover:bg-black/30 focus:outline-none"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <MobileMenu 
          menuOpen={menuOpen} 
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={(section) => {
            handleScrollToSection(section);
            setMenuOpen(false);
          }}
        />
      </nav>
      
      {/* Floating Dock Nav for Desktop */}
      <div className="hidden md:block">
        <FloatingDockNav 
          activeSection={activeSection}
          scrollToSection={handleScrollToSection}
          navItems={navItems}
        />
      </div>
    </>
  );
};

export default Navigation;