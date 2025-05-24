import { Mail, Phone, MapPin} from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Contact Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <p className="mb-8">
                Feel free to reach out if you have any questions about my work or want to discuss potential collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>wilsomwong040727@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>(+60) 1139552337</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;