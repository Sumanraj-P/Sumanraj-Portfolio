import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { Code2, Trophy, Award, Binary, ExternalLink } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

// Small utility to animate numbers without extra deps
const CounterNumber = ({ target = 0, suffix = "+", duration = 1.2, className = "" }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [target, duration]);
  return <span className={className}>{value}{suffix}</span>;
};

const JourneyAchievements = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [modalImg, setModalImg] = useState(null);

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: false });
    AOS.refresh();
  }, []);

  // Parallax background
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 60%", "end 60%"] });
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Certificates glob (Vite)
  const modules = import.meta.glob("/src/assets/certificates/**/*.{png,jpg,jpeg,webp,svg}", { eager: true });
  const certificateItems = useMemo(() => {
    const items = Object.entries(modules).map(([path, mod]) => ({
      title: path.split("/").pop()?.split(".")[0]?.replace(/[_-]/g, " ") || "Certificate",
      description: "Click to preview",
      image: mod.default || mod,
    }));
    return items;
  }, [modules]);

  const codingStats = [
    {
      key: "leetcode",
      platform: "LeetCode",
      count: 230,
      icon: <SiLeetcode size={28} className="text-yellow-400" />,
      url: "https://leetcode.com/u/psumanraj_10/",
    },
    {
      key: "skillrack",
      platform: "SkillRack",
      count: 2360,
      icon: <FaLaptopCode size={28} className="text-cyan-400" />,
      url: "https://www.skillrack.com/faces/resume.xhtml?id=404628&key=3ec7337dba3fe5df38ad60dc6ee1273c512d8590",
    },
    {
      key: "gfg",
      platform: "GfG",
      count: 170,
      icon: <SiGeeksforgeeks size={28} className="text-green-500" />,
      url: "https://www.geeksforgeeks.org/user/sumanraj1nnz3/",
    },
    {
      key: "codeforces",
      platform: "Codeforces",
      count: 2,
      icon: <SiCodeforces size={28} className="text-blue-400" />,
      url: "https://codeforces.com/profile/sumanraj_p",
    },
  ];

  const achievements = [
    {
      title: "Coding Competition – First Naukri",
      details: ["6th place (Sep 2024)", "5th place (Oct 2024) — National level"],
      icon: <Trophy className="text-yellow-400" size={18} />,
    },
    {
      title: "Coimbatore Institute of Technology (Feb 2025)",
      details: ["1st place — Incognito Code", "2nd place — Logic Unchained"],
      icon: <Award className="text-pink-400" size={18} />,
    },
    {
      title: "Coimbatore Institute of Technology (2024)",
      details: ["1st place in Coding competition"],
      icon: <Award className="text-pink-400" size={18} />,
    },
  ];

  const tabs = [
    { id: "journey", label: "Coding Journey", icon: <Code2 size={16} /> },
    { id: "certs", label: "Certifications", icon: <Award size={16} /> },
    { id: "achievements", label: "Achievements", icon: <Trophy size={16} /> },
  ];

  return (
    <section id="journey" ref={sectionRef} className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Parallax background shapes */}
      <motion.div style={{ y: bgY1 }} className="pointer-events-none absolute -top-28 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-700/20 to-pink-500/20 blur-3xl" />
      <motion.div style={{ y: bgY2 }} className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-gradient-to-bl from-pink-600/20 to-purple-600/20 blur-3xl" />
      {/* Subtle binary layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]">
        <div className="absolute inset-0 font-tech text-xs leading-6 select-none whitespace-pre-wrap p-6 text-white/70" aria-hidden>
          {"0101010011010101001101010100110101010011010101001101\n".repeat(80)}
        </div>
      </div>

      <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
        {/* Heading */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="font-display mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase text-white">
            <span className="inline-flex items-center gap-3">
              <span>🏆</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">My Journey & Achievements</span>
            </span>
          </h2>
          <div className="relative mx-auto h-1 w-60 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 scanning-bg" />
          </div>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left: vertical tabs (horizontal on mobile) */}
          <div className="md:col-span-1">
            <div className="flex md:flex-col gap-3 md:sticky md:top-24">
              {tabs.map((t) => (
                <motion.button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-tech tracking-wider uppercase transition-all ${
                    activeTab === t.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="shrink-0">{t.icon}</span>
                  <span>{t.label}</span>
                  {activeTab === t.id && (
                    <motion.span
                      layoutId="ja-tab-glow"
                      className="absolute inset-0 -z-10 rounded-lg p-[1px] bg-gradient-to-r from-[#6A0DAD] to-[#F72585]"
                    >
                      <span className="block h-full w-full rounded-lg bg-gray-900/70 backdrop-blur-md" />
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: dynamic content */}
          <div className="md:col-span-3">
            <div className="relative">
              <AnimatePresence mode="wait">
                {activeTab === "journey" && (
                  <motion.div
                    key="tab-journey"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6" data-aos="fade-up">
                      <h3 className="text-xl md:text-2xl font-title text-white tracking-wider mb-2">🚀 My Coding Journey</h3>
                      <p className="text-gray-400 font-tech text-sm">Consistent problem solving and contests across platforms.</p>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="100">
                      {codingStats.map((cs, i) => (
                        <Tilt key={cs.key} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.06} className="w-full">
                          <motion.a
                            href={cs.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(106,13,173,0.25)" }}
                            className="relative block p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]"
                          >
                            <div className="rounded-xl bg-gray-900/70 backdrop-blur-md p-4 border border-white/5">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/40 border border-white/10">
                                  {cs.icon}
                                </div>
                                <div>
                                  <p className="text-gray-300 text-xs font-tech tracking-wider flex items-center gap-1">
                                    {cs.platform} <ExternalLink size={12} />
                                  </p>
                                  <p className="text-white text-xl font-semibold">
                                    <CounterNumber target={cs.count} suffix="+" />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.a>
                        </Tilt>
                      ))}
                    </div>

                    {/* Mini timeline */}
                    <div className="mt-8 grid gap-3" data-aos="fade-up" data-aos-delay="200">
                      {[
                        { year: "2023", text: "Started solving problems" },
                        { year: "2024", text: "Mastered DSA & Competitions" },
                        { year: "2025", text: "Ranked in contests" },
                      ].map((item) => (
                        <div key={item.year} className="flex items-center gap-4">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#6A0DAD] to-[#F72585] ring-4 ring-purple-900/40" />
                          <p className="text-gray-300 font-tech text-sm">
                            <span className="text-white font-semibold mr-2">{item.year} →</span>
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "certs" && (
                  <motion.div
                    key="tab-certs"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6" data-aos="fade-up">
                      <h3 className="text-xl md:text-2xl font-title text-white tracking-wider mb-2">📜 Certifications</h3>
                      <p className="text-gray-400 font-tech text-sm">A curated set of certifications reflecting continuous learning.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="100">
                      {certificateItems.map((c, idx) => (
                        <Tilt key={`${c.title}-${idx}`} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.06} className="w-full">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]"
                          >
                            <div className="rounded-xl bg-gray-900/70 backdrop-blur-md border border-white/5 overflow-hidden">
                              <div className="aspect-video overflow-hidden cursor-pointer" onClick={() => setModalImg(c.image)}>
                                <motion.img
                                  src={c.image}
                                  alt={c.title}
                                  initial={{ scale: 1.02 }}
                                  whileHover={{ scale: 1.06 }}
                                  transition={{ duration: 0.3 }}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="p-4">
                                <p className="text-white font-medium">{c.title}</p>
                                <p className="text-gray-400 font-tech text-sm mt-1">{c.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        </Tilt>
                      ))}
                    </div>

                    {/* Modal preview */}
                    <AnimatePresence>
                      {modalImg && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                          onClick={() => setModalImg(null)}
                        >
                          <motion.img
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            src={modalImg}
                            alt="Certificate preview"
                            className="max-h-[85vh] max-w-[95vw] rounded-lg border border-white/10"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {activeTab === "achievements" && (
                  <motion.div
                    key="tab-achievements"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6" data-aos="fade-up">
                      <h3 className="text-xl md:text-2xl font-title text-white tracking-wider mb-2">🏅 Achievements</h3>
                      <p className="text-gray-400 font-tech text-sm">A snapshot of recognitions and contest results.</p>
                    </div>

                    <div className="relative" data-aos="fade-up" data-aos-delay="100">
                      {/* Vertical timeline */}
                      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-700/30 via-pink-600/30 to-purple-700/30" />

                      <ul className="space-y-6">
                        {achievements.map((a, idx) => (
                          <li key={a.title + idx} className="relative pl-12 md:pl-16">
                            {/* Dot */}
                            <span className="absolute left-4 md:left-6 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-[#6A0DAD] to-[#F72585] ring-4 ring-purple-900/40" />

                            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]">
                              <div className="rounded-xl bg-gray-900/70 backdrop-blur-md p-4 border border-white/5">
                                <div className="flex items-center gap-2 text-white font-medium">
                                  <span>{a.icon}</span>
                                  <span>{a.title}</span>
                                </div>
                                <ul className="mt-2 list-disc list-inside text-gray-300 font-tech text-sm">
                                  {a.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyAchievements;
