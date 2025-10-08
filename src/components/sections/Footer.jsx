import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-950 pt-14 pb-10 overflow-hidden border-t border-white/5">
      {/* Background gradient bars */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-24 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <p className="text-gray-300 font-tech text-sm md:text-left text-center">
            Designed & Built with 💜 by <span className="text-white">Sumanraj</span>
          </p>

          <div className="flex items-center justify-center gap-4">
            <motion.a whileHover={{ y: -2, scale: 1.05 }} href="https://github.com/Sumanraj-P" target="_blank" className="group h-10 w-10 inline-flex items-center justify-center rounded-md bg-black/40 border border-white/10">
              <Github className="text-white group-hover:text-pink-400" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a whileHover={{ y: -2, scale: 1.05 }} href="https://www.linkedin.com/in/p-sumanraj/" target="_blank" className="group h-10 w-10 inline-flex items-center justify-center rounded-md bg-black/40 border border-white/10">
              <Linkedin className="text-white group-hover:text-cyan-400" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a whileHover={{ y: -2, scale: 1.05 }} href="mailto:sumanraj10052005@gmail.com" className="group h-10 w-10 inline-flex items-center justify-center rounded-md bg-black/40 border border-white/10">
              <Mail className="text-white group-hover:text-purple-400" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>

          <p className="text-gray-300 font-tech text-sm md:text-right text-center">
            © {year} Sumanraj. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
