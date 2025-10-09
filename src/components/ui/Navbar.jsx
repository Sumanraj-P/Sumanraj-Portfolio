import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Navigation bar component with smooth scrolling and highlight for active section
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId, e) => {
    // Prevent default anchor jump to control offset with fixed navbar
    e?.preventDefault?.();
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('nav');
      const headerHeight = header?.offsetHeight || 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8; // small gap
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 z-50 w-full ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      } transition-all duration-300`}
    >
  <div className="container mx-auto px-6 flex items-center justify-between font-display">
        {/* Logo */}
        <motion.a 
          href="#hero" 
          className="text-2xl font-bold text-white flex items-center space-x-2"
          onClick={(e) => handleNavClick("hero", e)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-teal-400">&lt;</span>
          <span>SUMANRAJ P</span>
          <span className="text-teal-400">/&gt;</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`text-base font-medium ${
                  activeSection === item.id ? "text-teal-400" : "text-gray-300 hover:text-white"
                } transition-colors duration-200`}
              >
                {item.label}
              </a>
              {activeSection === item.id && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute left-0 right-0 h-0.5 bg-teal-400 -bottom-1"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Resume Download (navbar) - styled like Hero CTA */}
        <a
          href="https://drive.google.com/uc?export=download&id=1aL9dnbpIxw5gQnUiPZb9Dey6gnSeIYy0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="hidden md:inline-flex group relative h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-purple-500 to-[#14F195] px-8 py-3 font-display font-medium text-white transition-all hover:scale-105"
        >
          <span className="absolute inset-px rounded-md bg-[#030712] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#030712]/80 group-hover:to-[#030712]/80"></span>
          <span className="relative flex items-center gap-2">
            <span>RESUME</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          height: menuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-800"
      >
        <div className="container mx-auto px-6 py-4 font-display">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`block py-2 ${
                    activeSection === item.id ? "text-teal-400 font-medium" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1aL9dnbpIxw5gQnUiPZb9Dey6gnSeIYy0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-2 text-teal-400"
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;