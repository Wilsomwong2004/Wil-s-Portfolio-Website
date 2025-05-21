const ExperienceSection = () => {
  const experience = [
    {
      position: "Software Engineering Web Intern (Internship)",
      company: "IPS Software Sdn.Bhd., Petaling Jaya",
      year: "May 2025 - Present",
      description: "Lead development of web applications using React and modern JavaScript frameworks. Implemented responsive designs and improved site performance by 40%.",
    },
    {
      position: "Private Tutor (Part Time)",
      company: "Harmony School of Music, Seri Manjung",
      year: "Jan 2023 - Apr 2023",
      description: "Teaching all of the subjects for primary school students. Learn to become a good teacher and have some fun teaching and guiding students around 7-12 years old.",
    },
    {
      position: "Hotel Management & Service (Full Time)",
      company: "Manjung Inn Hotel, Seri Manjung",
      year: "Dec 2022 - Apr 2023",
      description: "Learn to communicate and negotiate with customers using different languages efficiently, using soft-skill techniques to help and solve customer's problems. Manage and maintain the hotel hardware such as television, CCTV, lightbulb etc. stability and working. Moreover, doing some accounting on the hotel revenue each month.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Work Experience
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {experience.map((item, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="pl-24">
                <div className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {item.year}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.position}</h3>
                <p className="text-purple-600 font-medium mb-4">{item.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;