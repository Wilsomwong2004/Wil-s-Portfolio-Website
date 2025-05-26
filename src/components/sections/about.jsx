import { Mail, Phone, MapPin } from 'lucide-react';
import DecryptedText from '../common/decryptedText';
import BlurText from '../common/blurText';
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../common/draggable-card";

export function DraggableCard() {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-35 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-65 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-30 left-[40%] rotate-[8deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-45 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-49 left-[40%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-33 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-500">
        This is me in real life. Nice to meet ur all!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 relative transform transition-transform duration-700 hover:scale-105">
            {/* <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1.5 max-w-md mx-auto animate-spin-slow">
              <div className="bg-white dark:bg-gray-800 rounded-full p-4">
                <img 
                  src="../../assets/profile.jpg" 
                  alt="About Me" 
                  className="rounded-full w-full h-auto"
                />
              </div>
            </div> */}
            <DraggableCard />
            
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-purple-200 dark:bg-purple-900 opacity-30 blur-md animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-900 opacity-30 blur-md animate-pulse"></div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-500 hover:text-purple-600">
              <BlurText
                text="Hello, I'm Wong Wei Sheng!"
                delay={50}
                animateBy="words"
                direction="top"
              />
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <BlurText
                text="I'm an aspiring web developer and designer, currently pursuing a diploma and preparing to transition to a degree program after my internship. My journey in web development began during my studies, and I've been passionate about creating engaging digital experiences ever since."
                delay={50}
                animateBy="words"
                direction="top"
                initialDelay={800}
              />
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <BlurText
                text="I'm dedicated to learning and growing, constantly improving my skills to combine clean, efficient code with thoughtful user experience design. I specialize in React and modern JavaScript frameworks, focusing on building intuitive, functional, and visually appealing interfaces."
                delay={50}
                animateBy="words"
                direction="top"
                initialDelay={1600}
              />
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <BlurText
                text="Beyond web development, I love exploring new technologies, from the latest hardware components to cutting-edge AI models. This curiosity drives me to stay updated and continuously expand my knowledge in the ever-evolving tech world. My journey is just getting started, and I'm excited to keep learning and creating!"
                delay={50}
                animateBy="words"
                direction="top"
                initialDelay={2400}
              />
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full transform transition-transform hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900">
                <Mail size={16} className="text-purple-600" />
                <span className="text-gray-800 dark:text-gray-200">wilsomwong040727@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full transform transition-transform hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900">
                <Phone size={16} className="text-purple-600" />
                <span className="text-gray-800 dark:text-gray-200">(+60) 1139552337</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full transform transition-transform hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900">
                <MapPin size={16} className="text-purple-600" />
                <span className="text-gray-800 dark:text-gray-200">Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;