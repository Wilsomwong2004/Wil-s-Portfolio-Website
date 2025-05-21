import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const portfolioProjects = [
    {
      title: "MEWFIT",
      description: "A playful cat-themed fitness website with using Movenet Pose Detection API and Gemini 1.5 API for AI chatbot.",
      tags: ["Pose Detection Workout", "Movenet", "Gemini API"],
    },
    {
      title: "MyCar Website",
      description: "Re-design MyCar E-Hailing Website with using OpenStreetMap API and PHP/MySQL for records user/card details.",
      tags: ["E-hailing Website", "Maps API", "Maps Routing API"],
    },
    {
      title: "MeetForums",
      description: "An extension to bring Discord Forums to Google Meet.",
      tags: ["Forums", "Google Meet Extension", "Chrome Extension"],
    },
    {
      title: "Retro Snake Game",
      description: "Retro Snake Game based on Unity",
      tags: ["Unity", "C++"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            My Portfolio
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <img 
                    src={`/api/placeholder/600/400?text=${encodeURIComponent(project.title)}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                      </button>
                    </div>
                  </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-3 px-8 rounded-full transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;