import { useEffect } from 'react';
import './App.css';

// Import components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import JourneyAchievements from './components/sections/JourneyAchievements';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Navbar from './components/ui/Navbar';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  // Add prefers-reduced-motion media query detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Apply a class to the body for CSS-based animations
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    }
    
    // Update when the preference changes
    const handleChange = (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <main className="relative">
      {/* Custom animated cursor */}
      <CustomCursor />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero section */}
      <Hero />
      
      {/* About section */}
      <About />
      
  {/* Experience section */}
   <Experience />

    {/* Skills section */}
  <Skills />

   {/* Journey & Achievements */}
  <JourneyAchievements />

  {/* Projects */}
  <Projects />
  
  {/* Contact */}
  <Contact />
  
  {/* Footer */}
  <Footer />
      {/* 
        Additional sections will be added in subsequent modules:
        - Projects
        - Contact
        - Footer
      */}
    </main>
  )
}

export default App
