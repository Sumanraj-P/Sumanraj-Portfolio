import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

// Experience data (can be lifted to props later)
const EXPERIENCES = [
  {
    company: "Mistral Solutions",
    role: "Software Engineer Intern",
    duration: "Feb 2025 - Present",
    project: "AI Interview & Resume Analyzer",
    description:
      "Collaborated with a team to develop an AI-powered platform for mock interviews and resume analysis using React.js and JavaScript. Integrated AI-based APIs for real-time feedback, optimized performance, and ensured seamless data processing for accurate evaluations.",
  },
  {
    company: "Shanmuga AI Technology Private Limited",
    role: "Software Engineer Intern",
    duration: "Aug 2024 - Oct 2024",
    project: "GYM Management System",
    description:
      "Worked with the front-end team to build responsive web interfaces using React.js and JavaScript. Integrated APIs for dynamic data management, optimized performance, and ensured clean, maintainable code quality.",
  },
  {
    company: "Vibhathi Labs",
    role: "Industry-Oriented Internship on Oracle Technologies (SQL, PL/SQL, APEX)",
    duration: "July 2024 - Oct 2024",
    description:
      "Completed a hands-on internship on SQL, PL/SQL, and Oracle APEX, enhancing skills in database development and application design.",
  },
];

// Motion variants for reveal and hover
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 26, duration: 0.6 },
  },
});

const Experience = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: false });
    AOS.refresh();
  }, []);

  // Parallax/progress line using framer-motion useScroll
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 60%"],
  });
  // Reveal central line height and subtle glow as we scroll
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);
  // Background parallax shapes
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Parallax soft gradient shapes */}
      <motion.div
        style={{ y: bgY1 }}
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-700/20 to-pink-500/20 blur-3xl"
      />
      <motion.div
        style={{ y: bgY2 }}
        className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-bl from-pink-600/20 to-purple-600/20 blur-3xl"
      />

      {/* Section heading */}
      <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="font-display mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase text-white">
            <span className="inline-flex items-center gap-3">
              <span>💼</span>
              <span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Experience</span>
              </span>
            </span>
          </h2>
          {/* Gradient underline animation */}
          <div className="relative mx-auto mt-3 h-1 w-56 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 scanning-bg" />
          </div>
          <p className="mt-6 mx-auto max-w-2xl text-gray-300 font-tech text-sm md:text-base tracking-wider">
            A snapshot of internships and hands-on work shaping my journey.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Central vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-700/30 via-pink-600/30 to-purple-700/30" />
          {/* Progress line reveal */}
          <motion.div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-400 rounded"
            style={{ height: progressHeight, opacity: glowOpacity }}
          />

          {/* Mobile side line */}
          <div className="md:hidden absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-700/30 via-pink-600/30 to-purple-700/30" />

          <AnimatePresence mode="wait">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="relative space-y-10"
            >
              {EXPERIENCES.map((exp, idx) => {
                const isRight = idx % 2 === 1; // alternate sides on desktop
                const alignSide = isRight ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12";
                const dotPosition = isRight ? "md:left-[calc(50%+0px)]" : "md:left-[calc(50%-0px)]"; // centered on line

                return (
                  <motion.li key={exp.company + idx} className="relative" data-aos="fade-up">
                    {/* Connector dot */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 ${dotPosition} -translate-x-1/2 z-10`}
                    >
                      <motion.span
                        initial={{ scale: 0.6, opacity: 0.6 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(247,37,133,0.4)" }}
                        viewport={{ once: false }}
                        className="block h-3 w-3 rounded-full bg-gradient-to-br from-[#6A0DAD] to-[#F72585] ring-4 ring-purple-900/40"
                      />
                    </div>

                    {/* Card wrapper with side alignment */}
                    <div className={`relative md:w-1/2 ${alignSide}`}>
                      <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.06} className="w-full">
                        {/* Gradient border + glass background */}
                        <motion.div
                          variants={cardVariants(isRight ? "right" : "left")}
                          whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(106,13,173,0.25)" }}
                          className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]"
                        >
                          <div className="relative rounded-xl bg-gray-900/70 backdrop-blur-md p-5 md:p-6 border border-white/5 overflow-hidden">
                            {/* subtle inner gradient overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />

                            {/* Optional logo placeholder */}
                            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl" />

                            {/* Project badge (hover slide-in) */}
                            {exp.project && (
                              <motion.div
                                initial={{ x: 40, opacity: 0 }}
                                whileHover={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-tech tracking-wider bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white border border-white/10"
                              >
                                {exp.project}
                              </motion.div>
                            )}

                            {/* Content */}
                            <div className="relative z-10">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="font-title text-xl md:text-2xl text-white tracking-wider">{exp.company}</h3>
                                <span className="font-tech text-[11px] md:text-xs uppercase tracking-widest text-gray-300 border border-white/10 rounded px-2 py-1">
                                  {exp.duration}
                                </span>
                              </div>
                              <p className="mt-1 text-sm md:text-base text-gray-300 font-medium">{exp.role}</p>
                              <p className="mt-3 text-gray-400 font-tech text-sm leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </Tilt>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
