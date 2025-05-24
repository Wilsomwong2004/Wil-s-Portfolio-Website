import { Mail, Phone, MapPin } from 'lucide-react';
import DecryptedText from '../common/decryptedText';
import BlurText from '../common/blurText';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative transform transition-transform duration-700 hover:scale-105">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1.5 max-w-md mx-auto animate-spin-slow">
              <div className="bg-white dark:bg-gray-800 rounded-full p-4">
                <img 
                  src="../../assets/profile.jpg" 
                  alt="About Me" 
                  className="rounded-full w-full h-auto"
                />
              </div>
            </div>
            
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