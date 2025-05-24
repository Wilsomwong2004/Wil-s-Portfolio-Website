import { useRef, useState, useEffect } from 'react';
import LetterGlitch from '../common/LetterGlitch';
import FloatingParticles from '../common/floatingParticles';
import Lanyard from '../common/lanyard';
import Squares from '../common/squares';
import AnimatedText from '../common/animatedText';
import { Download, Send } from 'lucide-react';

const HeroSection = ({ scrollToSection, heroBackgroundRef, modelContainerRef }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-visible"
    >
     {<div ref={heroBackgroundRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          glitchColors={['#302b45', '#7a61dc', '#a761dc']}
        /> */}

        {/* <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        /> */}
      
      </div>} 

      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeIn">
              Wilsom <span className="text-purple-600">Wong</span>
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
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
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Creating elegant, user-friendly digital experiences with modern web technologies.
            </p>
            
            <div className="flex flex-col mt-14 sm:flex-row gap-6">
              <button className="group relative px-8 py-4 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={20} />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 cursor-pointer border-purple-400 text-purple-400 font-semibold rounded-full transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105">
                <span className="flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Lanyard */}
          <div className="relative flex justify-center lg:justify-end">
            <Lanyard 
                position={[0, 0, 15]} 
                gravity={[0, -30, 0]} 
                fov={25} 
                transparent={true} 
              />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;