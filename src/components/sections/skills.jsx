const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "UI/UX Design", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "TypeScript", level: 85 },
    { name: "Git", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            My Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="mb-2 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-purple-600">{skill.level}%</span>
              </div>
              
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out animate-skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Redux", "Next.js", "SASS", "Figma", "GraphQL", "Jest", "Webpack", "Docker"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;