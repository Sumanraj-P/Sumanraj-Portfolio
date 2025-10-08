import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { 
  Cpu, Terminal, Code, Code2, Coffee, Database, 
  FileCode, Globe, Server, Github, MonitorSmartphone
} from "lucide-react";
import { 
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaVuejs, 
  FaAngular, FaGitAlt, FaGithub, FaPython, FaJava, FaDocker
} from "react-icons/fa";
import { DiMysql, DiPostgresql, DiMongodb } from "react-icons/di";
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss } from "react-icons/si";

/**
 * Skills Section Component
 * Displays interactive skill categories with animated futuristic cards
 * Features: Category selector, staggered animations, 3D tilt effects
 * Tech: Framer Motion, AOS, Tilt, Lucide React, React Icons
 */
const Skills = () => {
  // Active category state
  const [activeCategory, setActiveCategory] = useState("programming");
  
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);
  
  // Category definitions with icons
  const skillCategories = [
    { id: "programming", label: "Programming Languages", icon: <FaJs className="w-4 h-4 mr-2" /> },
    { id: "frontend", label: "Frontend", icon: <FaReact className="w-4 h-4 mr-2" /> },
    { id: "backend", label: "Backend", icon: <FaNodeJs className="w-4 h-4 mr-2" /> },
    { id: "database", label: "Database", icon: <Database className="w-4 h-4 mr-2" /> },
    { id: "tools", label: "Tools & DevOps", icon: <FaGitAlt className="w-4 h-4 mr-2" /> },
  ];
  
  // Skill data organized by category with mixed icon libraries for compatibility
  const skillsData = {
    programming: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} />, level: 95 },
      { name: "Java", icon: <FaJava className="text-red-500" size={40} />, level: 90 },
      { name: "Python", icon: <FaPython className="text-blue-600" size={40} />, level: 80 },
      { name: "C", icon: <Code className="text-blue-800" size={40} />, level: 75 },
    ],
    frontend: [
      { name: "React", icon: <FaReact className="text-cyan-400" size={40} />, level: 98 },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} />, level: 92 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={40} />, level: 90 },
      { name: "Redux", icon: <SiRedux className="text-purple-500" size={40} />, level: 85 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} />, level: 90 },
      { name: "Express", icon: <Server className="text-white" size={40} />, level: 85 },
    ],
    database: [
      { name: "MongoDB", icon: <DiMongodb className="text-green-500" size={40} />, level: 88 },
      { name: "Firebase", icon: <Database className="text-yellow-500" size={40} />, level: 90 },
      { name: "MySQL", icon: <DiMysql className="text-blue-600" size={40} />, level: 85 },
      { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-500" size={40} />, level: 80 },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" size={40} />, level: 95 },
      { name: "GitHub", icon: <FaGithub className="text-gray-100" size={40} />, level: 95 },
      { name: "VS Code", icon: <Code2 className="text-blue-500" size={40} />, level: 98 },
      { name: "Postman", icon: <Globe className="text-orange-600" size={40} />, level: 90 },
      { name: "Figma", icon: <Code className="text-purple-500" size={40} />, level: 85 },
      { name: "Docker", icon: <FaDocker className="text-blue-400" size={40} />, level: 82 },
    ]
  };
  
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  // Animation variants for skill cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6 
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(106, 13, 173, 0.2), 0 6px 6px rgba(247, 37, 133, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  return (
  <section id="skills" className="relative z-10 py-20 bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
      
      {/* Background futuristic grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,24,84,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(66,24,84,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 h-40 w-40 border border-purple-500/20 rounded-full floating"></div>
      <div className="absolute bottom-1/3 right-20 h-20 w-20 border border-pink-500/20 rounded-full floating"></div>
      <div className="absolute top-1/3 right-40 h-60 w-60 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-40 h-80 w-80 bg-pink-900/5 rounded-full blur-3xl"></div>
      
      {/* Main content container */}
      <div className="container relative mx-auto px-6 md:px-12 xl:px-24">
        {/* Section Header with AOS animation */}
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
        >
          <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl tracking-wider uppercase">
            <span className="inline-flex items-center">
              <Cpu className="mr-4 text-purple-500" />
              <span>
                💻 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Skills</span> & Technologies
              </span>
            </span>
          </h2>
          
          {/* Animated underline */}
          <div className="relative mx-auto h-1 w-60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 scanning-bg"></div>
          </div>
          
          <p className="mt-6 mx-auto max-w-2xl text-gray-300 font-tech text-sm md:text-base tracking-wider">
            Explore my technical expertise across various domains. Click on a category to view specific skills.
          </p>
        </div>

        {/* Category Selector */}
        <div 
          className="relative mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="absolute -top-4 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-transparent to-pink-500/50"></div>
          <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-pink-500/50 via-transparent to-purple-500/50"></div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-3 flex items-center font-tech text-xs md:text-sm tracking-widest uppercase transition-all duration-300 rounded-md backdrop-blur-sm ${
                  activeCategory === category.id
                    ? 'text-white bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-pink-500/30 pulse-glow'
                    : 'text-gray-400 hover:text-gray-200 border border-gray-800/30 hover:border-purple-500/30'
                }`}
              >
                {category.icon}
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <Tilt
                key={`${activeCategory}-${skill.name}`}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                className="w-full h-full"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  data-aos="fade-up"
                  data-aos-delay={50 * index}
                  className="relative flex flex-col items-center justify-center p-6 h-full rounded-lg bg-gray-900/60 border border-gray-800 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
                >
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Tech lines */}
                  <div className="absolute top-6 left-0 w-3 h-0.5 bg-purple-500/70 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 right-0 w-3 h-0.5 bg-pink-500/70 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Icon with animation */}
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div 
                      className="p-2"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                    </motion.div>
                  </div>
                  
                  {/* Name with animated glow effect */}
                  <p className="text-base font-medium text-center text-gray-200 font-tech group-hover:text-white transition-colors duration-300 mb-0">
                    {skill.name}
                  </p>

                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Tech Circuit Lines */}
        <div className="absolute bottom-10 left-0 w-1/3 h-px bg-gradient-to-r from-purple-500/30 to-transparent tech-line"></div>
        <div className="absolute bottom-20 right-0 w-1/3 h-px bg-gradient-to-l from-pink-500/30 to-transparent tech-line"></div>
        <div className="absolute top-20 left-0 w-1/4 h-px bg-gradient-to-r from-purple-500/30 to-transparent tech-line"></div>
        <div className="absolute top-10 right-0 w-1/4 h-px bg-gradient-to-l from-pink-500/30 to-transparent tech-line"></div>
        
      </div>
    </section>
  );
};

export default Skills;