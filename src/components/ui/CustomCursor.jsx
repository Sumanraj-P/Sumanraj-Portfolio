import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Custom cursor component that follows mouse movement
 * Shows a small dot with an expanding ring on interactive elements
 */
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll("a, button, .hover-trigger");
      
      allLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true));
        link.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);
    
    const mouseLeave = () => setHidden(true);
    const mouseEnter = () => setHidden(false);

    // Add event listeners
    handleLinkHoverEvents();
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
    };
  }, [isMobile]);

  // Return null for mobile devices
  if (isMobile) return null;

  return (
    <div className="cursor-container">
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: clicked ? 0.8 : 1,
          opacity: hidden ? 0 : 1,
        }}
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#38bdf8",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 1.2 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : linkHovered ? 0.8 : 0.4,
        }}
        style={{
          position: "fixed",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid #38bdf8",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </div>
  );
};

export default CustomCursor;