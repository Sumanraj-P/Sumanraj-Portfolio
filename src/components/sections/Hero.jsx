import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Import components
import ParticlesBackground from "../ui/ParticlesBackground";

// Import assets
import profileImage from "../../assets/images/Sumanraj_P_Photo.jpg";

/**
 * Hero Section Component
 * Full-screen modern landing section with animated elements and navigation
 */
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse move effect for spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Handle smooth scroll to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If contact section doesn't exist yet, scroll to the bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  // Ref for parallax effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Ease out parallax before the section ends for a cleaner section handoff
    offset: ["start start", "end center"]
  });
  // Reduce parallax distance to avoid the hero appearing to linger over About
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <section 
      ref={containerRef}
      className="relative z-0 flex min-h-screen w-full flex-col overflow-hidden pt-20 bg-[#030712] border-b border-purple-500/10"
      id="hero"
    >
        {/* Particles background */}
        <ParticlesBackground id="hero-particles" />

        {/* Dynamic background with spotlight effect */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 92, 246, 0.15) 0%, rgba(3, 7, 18, 0) 35%)`,
          }}
        />
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -z-10 h-[60%] w-[40%] translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[50%] w-[30%] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-violet-500/20 to-purple-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#14F195]/5 via-purple-500/5 to-[#14F195]/5 blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjVjZjYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30 z-0"></div>
        
        {/* Main content container with grid layout (no parallax to avoid CTA clipping) */}
        <motion.div 
          className="container relative mx-auto z-10 grid h-full w-full gap-8 px-6 py-12 md:grid-cols-2 md:px-12 lg:px-24">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Pre-heading text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 flex items-center space-x-2"
            >
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-[#14F195]"></div>
              <span className="text-xs font-tech uppercase tracking-[0.2em] text-purple-400 bg-clip-text bg-gradient-to-r from-purple-500 to-[#14F195] text-transparent">B.Tech IT Student</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-6 font-title text-4xl font-bold leading-none text-white md:text-5xl lg:text-7xl"
            >
              <span className="block mb-2">HI, I'M</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-[#14F195] to-purple-400">SUMANRAJ</span>
            </motion.h1>
            
            {/* Animated typing text with glitch effect container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8 relative font-tech border border-purple-500/20 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-md"
            >
              <div className="absolute -inset-[1px] rounded-md bg-gradient-to-r from-purple-500/50 via-[#14F195]/50 to-purple-500/50 opacity-20"></div>
              <div className="font-tech text-lg md:text-xl flex items-center">
                <span className="text-[#14F195] mr-2">&gt;</span>
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    1500,
                    "Backend Developer",
                    1500,
                    "Software Developer",
                    1500,
                    "Full Stack Developer",
                    1500
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                  className="text-white"
                />
                <span className="ml-1 bg-purple-400 w-2 h-5 animate-blink"></span>
              </div>
            </motion.div>
            
            {/* Description text */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mb-8 max-w-lg text-gray-400 md:text-lg leading-relaxed border-l-2 border-purple-500/50 pl-4"
            >
              Passionate about creating stunning web experiences using modern technologies.
              Specializing in <span className="text-purple-400">React</span>, <span className="text-[#14F195]">Node.js</span>, and <span className="text-purple-400">responsive design</span> solutions.
            </motion.p>
            
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mb-8 flex space-x-4"
            >
              <a 
                href="https://linkedin.com/in/sumanraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-neutral-900/80 p-3 font-tech text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#14F195] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                <span className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-[#14F195] transition-all duration-300 group-hover:w-1"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-purple-400 transition-all duration-300 group-hover:text-[#14F195]" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/sumanraj-js" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-neutral-900/80 p-3 font-tech text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#14F195] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                <span className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-[#14F195] transition-all duration-300 group-hover:w-1"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-purple-400 transition-all duration-300 group-hover:text-[#14F195]" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a 
                href="mailto:sumanraj@gmail.com" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-neutral-900/80 p-3 font-tech text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                aria-label="Email Me"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#14F195] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                <span className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-[#14F195] transition-all duration-300 group-hover:w-1"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-purple-400 transition-all duration-300 group-hover:text-[#14F195]" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </a>
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={handleContactClick}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-purple-500 to-[#14F195] px-8 py-3 font-tech font-medium text-white transition-all hover:scale-105"
              >
                <span className="absolute inset-px rounded-md bg-[#030712] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#030712]/80 group-hover:to-[#030712]/80"></span>
                <span className="relative flex items-center gap-2">
                  <span>CONTACT ME</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </span>
              </button>
              <a 
                href="/assets/resume-placeholder.txt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900/80 px-8 py-3 font-tech font-medium text-white transition-all hover:scale-105"
              >
                <span className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-[#14F195] transition-all duration-300 group-hover:w-1"></span>
                <span className="relative flex items-center gap-2">
                  <span>RESUME</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-[#14F195] transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
          
          {/* Right Column: Profile Image with Cyberpunk Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center"
            style={{ y }}
          >
            <div className="relative max-w-md">
              {/* Animated corners */}
              <div className="absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 border-purple-500 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 border-[#14F195] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 border-[#14F195] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-purple-500 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-md bg-gradient-to-tr from-neutral-900 to-black p-1 shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjVjZjYyMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-40"></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="mx-auto h-auto w-full object-cover relative z-10"
                />
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-50 z-20 pointer-events-none" style={{ backgroundSize: '100% 8px', backgroundImage: 'linear-gradient(0deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%)' }}></div>
                
                {/* Glitch effect overlay (no blend mode to preserve image color) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-[#14F195]/10 z-20 pointer-events-none"></div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-md border border-purple-500/30 z-30 pointer-events-none"></div>
              </div>
              
              {/* Glow effects */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-[#14F195]/20 blur-2xl"></div>
              
              {/* Tech details */}
              <div className="absolute -bottom-2 -left-6 font-tech text-[10px] text-purple-400 rotate-90 opacity-70">PROFILE.SYS</div>
              <div className="absolute -top-2 -right-6 font-tech text-[10px] text-[#14F195] -rotate-90 opacity-70">V1.0.2</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll down indicator with futuristic style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
        >
          <span className="mb-3 font-tech text-xs uppercase tracking-widest text-[#14F195] flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-purple-500 animate-pulse"></span>
            Scroll Down
            <span className="inline-block h-1 w-1 rounded-full bg-purple-500 animate-pulse"></span>
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-purple-500 via-[#14F195] to-transparent relative">
            <div className="absolute -left-[3px] h-3 w-[7px] animate-scroll-down bg-[#14F195] blur-[2px]"></div>
          </div>
        </motion.div>
      </section>
  );
};

export default Hero;