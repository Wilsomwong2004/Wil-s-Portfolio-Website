import { useRef } from 'react';
import LetterGlitch from '../common/LetterGlitch';

const HeroSection = ({ scrollToSection, heroBackgroundRef, modelContainerRef }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div ref={heroBackgroundRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          glitchColors={['#302b45', '#7a61dc', '#a761dc']}
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="rounded-full h-40 w-40 mx-auto mb-8 bg-gradient-to-br from-purple-600 to-blue-600 p-1 animate-pulse">
          <div className="rounded-full h-full w-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            <img src="/api/placeholder/400/400" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeIn">
          Wilsom <span className="text-purple-600">Wong</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-300">
            Front-end Developer
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-300">
            UI/UX Designer
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-300">
            React Specialist
          </span>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Creating elegant, user-friendly digital experiences with modern web technologies.
        </p>
        
        <button 
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;