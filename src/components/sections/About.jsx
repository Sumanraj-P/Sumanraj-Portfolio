import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Import assets
import profileImage from "../../assets/images/me-2.jpg";

/**
 * About Section Component
 * Displays information about the developer with an interactive mechanical design
 */
const About = () => {
  const [activeTab, setActiveTab] = useState('background');
  // Parallax scroll effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  // Move image and text at different speeds for parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  
  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'education', label: 'Education' },
    { id: 'interests', label: 'Interests' }
  ];

  const tabContent = {
    background: (
      <>
        <p className="mb-6 text-gray-300 font-tech text-sm leading-relaxed tracking-wide">
          I'm a passionate B.Tech IT student with a strong foundation in both frontend and backend technologies. 
          My journey in tech began with a curiosity about how websites work, which led me to dive deep into web development.
        </p>
        <p className="mb-6 text-gray-300 font-tech text-sm leading-relaxed tracking-wide">
          I specialize in building responsive, user-friendly web applications using modern frameworks and libraries. 
          My academic background has given me strong problem-solving skills and attention to detail.
        </p>
      </>
    ),
    education: (
      <>
        <div className="mb-6 space-y-4">
          <div className="border-l-2 border-teal-500 pl-4">
            <p className="text-teal-400 font-tech text-xs">2022 - PRESENT</p>
            <h4 className="text-white font-display text-base">B.Tech in Information Technology</h4>
            <p className="text-gray-400 font-tech text-sm">National Engineering College, Kovilpatti</p>
            <p className="text-gray-400 font-tech text-sm">CGPA: 8.05</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <p className="text-blue-400 font-tech text-xs">2020 - 2022</p>
            <h4 className="text-white font-display text-base">Higher Secondary Education</h4>
            <p className="text-gray-400 font-tech text-sm">Government Higher Secondary School, C. Reddiarpalayam</p>
            <p className="text-gray-400 font-tech text-sm">Bio - Maths</p>
            <p className="text-gray-400 font-tech text-sm">Percentage: 81%</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <p className="text-blue-400 font-tech text-xs">2019 - 2020</p>
            <h4 className="text-white font-display text-base">SSLC</h4>
            <p className="text-gray-400 font-tech text-sm">Government Higher Secondary School, C. Reddiarpalayam</p>
            <p className="text-gray-400 font-tech text-sm">Percentage: 68.4%</p>
          </div>
        </div>
      </>
    ),
    interests: (
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></div>
          <span className="text-gray-300 font-tech text-sm">Software Development</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></div>
          <span className="text-gray-300 font-tech text-sm">Full Stack Development</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></div>
          <span className="text-gray-300 font-tech text-sm">AI & Machine Learning</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></div>
          <span className="text-gray-300 font-tech text-sm">Open Source</span>
        </div>
      </div>
    )
  };

  return (
    <section id="about" ref={containerRef} className="relative z-10 py-24 bg-gray-950">
      {/* Decorative elements */}
      {/* Removed top gradient to avoid overlaying the hero during transition */}
      <div className="absolute bottom-0 right-0 w-1/3 h-40 bg-teal-500/5 blur-3xl rounded-full"></div>
      <div className="absolute top-1/4 left-10 h-40 w-40 border border-blue-500/20 rounded-full"></div>
      <div className="absolute bottom-1/3 right-20 h-20 w-20 border border-teal-500/20 rounded-full"></div>
      
      <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mb-12 text-center"
          style={{ y: textY }}
        >
          <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl tracking-wider uppercase">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Me</span>
          </h2>
          <div className="mx-auto h-0.5 w-24 bg-gradient-to-r from-blue-500 to-teal-400"></div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative mx-auto max-w-md"
            style={{ y: imageY }}
          >
            <div className="relative overflow-hidden rounded-md border-2 border-blue-500/30 bg-gradient-to-tr from-gray-900 to-gray-800 p-1">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-teal-500"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-teal-500"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-teal-500"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-teal-500"></div>
              
              <img 
                src={profileImage}
                alt="About Me Profile"
                className="w-full h-auto rounded-sm transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-teal-500/5"></div>
              
              {/* Tech lines */}
              <div className="absolute top-5 left-0 w-3 h-0.5 bg-blue-500"></div>
              <div className="absolute top-10 right-0 w-3 h-0.5 bg-teal-500"></div>
              <div className="absolute bottom-5 left-0 w-3 h-0.5 bg-blue-500"></div>
              <div className="absolute bottom-10 right-0 w-3 h-0.5 bg-teal-500"></div>
            </div>
            
            {/* Glow effects */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 border border-blue-500/20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-teal-500/20 rounded-full"></div>
            
            <h3 className="mb-6 text-2xl font-display text-white tracking-wider uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Who am I?
              </span>
            </h3>
            
            {/* Tabs */}
            <div className="mb-6 flex space-x-1 border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-tech text-xs uppercase tracking-wider transition-all ${
                    activeTab === tab.id 
                      ? 'text-white border-b-2 border-teal-500' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content with Animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px]"
            >
              {tabContent[activeTab]}
            </motion.div>
            
            <button 
              onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}
              className="mt-6 group flex items-center space-x-2 px-6 py-2 bg-transparent border border-blue-500 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-teal-500/10 rounded-sm font-tech text-sm text-white tracking-wider uppercase transition-all duration-300"
            >
              <span>Explore Skills</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;