import { Mail, Phone, MapPin } from 'lucide-react';

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
                  src="/api/placeholder/500/500" 
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
              Hello, I'm Wong Wei Sheng
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate web developer and designer with over 5 years of experience creating modern, responsive web applications. My journey in web development started during college, and I've been in love with building beautiful digital experiences ever since.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My approach combines clean, efficient code with thoughtful user experience design. I specialize in React and modern JavaScript frameworks, with a focus on creating intuitive interfaces that are both functional and visually appealing.
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