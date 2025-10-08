import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Github, Rocket, Layers } from "lucide-react";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { 
  SiFirebase, SiFastapi, SiFlask, SiOpenai, SiVite, SiFramer, SiTailwindcss
} from "react-icons/si";

const PROJECTS = [
  {
    title: "QuizGenie (AI-Powered Quiz Generator)",
    tech: ["Java", "Firebase", "FastAPI", "React"],
    description:
      "AI-based quiz generator that creates topic-wise quizzes with explanations and multiplayer challenge modes.",
    features: [
      "Topic-wise quiz creation with AI explanations",
      "Multiplayer challenge mode",
      "Persistent storage with Firebase",
    ],
    demo: "#",
    github: "https://github.com/Sumanraj-P/QuizGenie",
  },
  {
    title: "Skill Swap (Peer Learning Platform)",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "Peer-to-peer skill-sharing platform for students and professionals to learn and teach skills interactively.",
    features: [
      "User profiles and skill listings",
      "Booking and session management",
      "Real-time updates",
    ],
    demo: "#",
    github: "https://github.com/Sumanraj-P/SkillSwap",
  },
  {
  title: "AssessMate Platform",
  tech: ["MERN Stack", "AI Integration", "Firebase", "Tailwind"],
  description:
    "AI-powered assessment and analytics platform that conducts intelligent quizzes, evaluates performance, and provides personalized learning insights.",
  features: [
    "AI-based quiz generation and evaluation",
    "Real-time performance analytics dashboard",
    "Secure authentication with Firebase",
    "Responsive and interactive UI with Tailwind + Framer Motion",
  ],
  demo: "#",
  github: "https://github.com/Sumanraj-P/Assessmate",
},
{
  title: "AI Course Generator",
  tech: ["React", "FastAPI", "OpenAI API", "Firebase"],
  description:
    "An intelligent platform that automatically generates structured learning courses with lessons, quizzes, and summaries based on user-selected topics.",
  features: [
    "AI-powered syllabus and lesson generation",
    "Automatic quiz creation with explanations",
    "Progress tracking and course recommendations",
    "Cloud-based data storage with Firebase",
  ],
  demo: "#",
  github: "https://github.com/Sumanraj-P/AICourseGenerator",
},

  {
    title: "Portfolio Website (This One)",
    tech: ["React", "Vite", "Framer Motion", "Tailwind"],
    description:
      "Fully responsive, modern portfolio with animations, parallax, and 3D effects.",
    features: [
      "Glassmorphism + neon gradients",
      "Scroll-triggered animations",
      "3D tilt and parallax",
    ],
    demo: "#",
    github: "#",
  },
];

const techIcon = (t) => {
  const map = {
    React: <FaReact className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    MongoDB: <DiMongodb className="text-green-500" />,
    Firebase: <SiFirebase className="text-yellow-400" />,
    FastAPI: <SiFastapi className="text-emerald-400" />,
    Flask: <SiFlask className="text-gray-300" />,
    Java: <FaJava className="text-red-500" />,
    "OpenAI API": <SiOpenai className="text-purple-400" />,
    Vite: <SiVite className="text-purple-400" />,
    "Framer Motion": <SiFramer className="text-pink-500" />,
    Tailwind: <SiTailwindcss className="text-cyan-400" />,
  };
  return map[t] || <Layers className="text-gray-300" size={16} />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20, duration: 0.6 },
  },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);

  // init AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: false });
    AOS.refresh();
  }, []);

  // Parallax background
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 60%", "end 60%"] });
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Parallax background glows */}
      <motion.div style={{ y: bgY1 }} className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-700/20 to-pink-500/20 blur-3xl" />
      <motion.div style={{ y: bgY2 }} className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-gradient-to-bl from-pink-600/20 to-purple-600/20 blur-3xl" />

      {/* Heading with glow underline and slight parallax reveal */}
      <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12 text-center" data-aos="fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="font-display mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase text-white"
          >
            Projects
          </motion.h2>
          <div className="relative mx-auto h-1 w-60 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 scanning-bg" />
          </div>
        </div>

        {/* Grid of project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((p, idx) => (
            <motion.div key={p.title + idx} variants={itemVariants} data-aos="fade-up" data-aos-delay={idx * 80}>
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.08} className="w-full">
                <div
                  onClick={() => setActiveProject(p)}
                  className="cursor-pointer relative p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585] group"
                >
                  <div className="rounded-xl bg-gray-900/70 backdrop-blur-md overflow-hidden border border-white/5">
                    {/* Thumbnail (gradient placeholder) */}
                    <div className="relative h-40 w-full bg-gradient-to-br from-purple-900/30 via-black/20 to-pink-900/30">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.25),transparent_40%)]" />
                      <div className="absolute bottom-2 left-3 text-sm font-tech text-white/80 flex items-center gap-2">
                        <Rocket size={14} className="text-pink-400" />
                        <span>{p.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Hidden-on-idle details, visible on hover */}
                      <p className="text-gray-300 text-sm min-h-[3rem] line-clamp-2 group-hover:line-clamp-none transition-all">
                        {p.description}
                      </p>

                      {/* Tech badges */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/10 bg-black/30 text-xs text-gray-200">
                            <span className="text-base">{techIcon(t)}</span>
                            <span className="font-tech">{t}</span>
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-4 flex items-center gap-3">
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => p.demo === "#" && e.preventDefault()}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white border border-white/10 hover:from-purple-600/40 hover:to-pink-600/40 transition-all"
                        >
                          <ExternalLink size={16} />
                          <span className="font-tech text-xs">Live Demo</span>
                        </a>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => p.github === "#" && e.preventDefault()}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 text-white border border-white/10 hover:bg-black/50 transition-all"
                        >
                          <Github size={16} />
                          <span className="font-tech text-xs">GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]">
                <div className="rounded-xl bg-gray-900/90 border border-white/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white text-2xl font-title tracking-wider">{activeProject.title}</h3>
                      <p className="mt-2 text-gray-300">{activeProject.description}</p>
                    </div>
                    <button
                      className="text-gray-300 hover:text-white font-tech text-sm border border-white/10 rounded px-2 py-1"
                      onClick={() => setActiveProject(null)}
                    >
                      Close
                    </button>
                  </div>

                  {/* Features */}
                  {activeProject.features?.length ? (
                    <div className="mt-5">
                      <h4 className="text-white font-medium">Key Features</h4>
                      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-gray-300 font-tech text-sm">
                        {activeProject.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* Tech */}
                  <div className="mt-5">
                    <h4 className="text-white font-medium">Technologies</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeProject.tech.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/10 bg-black/30 text-xs text-gray-200">
                          <span className="text-base">{techIcon(t)}</span>
                          <span className="font-tech">{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => activeProject.demo === "#" && e.preventDefault()}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white border border-white/10 hover:from-purple-600/40 hover:to-pink-600/40 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span className="font-tech text-xs">Live Demo</span>
                    </a>
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => activeProject.github === "#" && e.preventDefault()}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 text-white border border-white/10 hover:bg-black/50 transition-all"
                    >
                      <Github size={16} />
                      <span className="font-tech text-xs">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
