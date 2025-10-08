import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import ParticlesBackground from "../ui/ParticlesBackground";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 60%", "end 60%"] });
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccessOpen(true);
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sumanraj@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  // Simple confetti pieces
  const confetti = useMemo(() => Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    size: 6 + Math.random() * 8,
    color: ["#F72585", "#6A0DAD", "#22d3ee", "#a78bfa"][i % 4],
    rotate: Math.random() * 180,
  })), []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Particles & parallax glows */}
      <ParticlesBackground id="contact-particles" />
      <motion.div style={{ y: bgY1 }} className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-700/20 to-pink-500/20 blur-3xl" />
      <motion.div style={{ y: bgY2 }} className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-gradient-to-bl from-pink-600/20 to-purple-600/20 blur-3xl" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
        {/* Intro typewriter */}
        <div className="mb-10 text-center">
          <TypeAnimation
            sequence={["Let’s Create Something Legendary Together 💫", 2000]}
            speed={60}
            wrapper="h2"
            className="font-display text-2xl md:text-3xl lg:text-4xl text-white"
            repeat={0}
          />
          <div className="relative mx-auto mt-4 h-1 w-60 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 scanning-bg" />
          </div>
        </div>

        {/* Floating glass contact card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Contact quick actions */}
          <div className="lg:col-span-1 space-y-4">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.08}>
              <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]">
                <div className="rounded-xl bg-gray-900/70 backdrop-blur-md p-5 border border-white/5">
                  <p className="text-white font-medium mb-4">Quick Connect</p>
                  <div className="space-y-3">
                    <button onClick={copyEmail} className="group w-full flex items-center gap-3 px-3 py-2 rounded-md bg-black/40 border border-white/10 hover:bg-black/50 text-gray-200">
                      <Mail className="group-hover:text-pink-400" size={18} />
                      <span>Email: sumanraj10052005@gmail.com</span>
                      <span className="ml-auto text-xs font-tech text-gray-400">{copied ? "Copied!" : "Click to copy"}</span>
                    </button>
                    <a href="tel:+911234567890" className="group block w-full">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-black/40 border border-white/10 hover:bg-black/50 text-gray-200">
                        <Phone className="group-hover:text-cyan-400 animate-pulse" size={18} />
                        <span>+91 7695879913</span>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-black/40 border border-white/10 text-gray-200">
                      <MapPin className="text-purple-400" size={18} />
                      <span>Tiruvannamalai, Tamil Nadu, India</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/p-sumanraj/" target="_blank" rel="noopener" className="group inline-flex items-center justify-center h-10 w-10 rounded-md bg-black/40 border border-white/10 hover:bg-black/60">
                      <Linkedin className="text-white group-hover:text-cyan-400" />
                    </a>
                    <a href="https://github.com/Sumanraj-P" target="_blank" rel="noopener" className="group inline-flex items-center justify-center h-10 w-10 rounded-md bg-black/40 border border-white/10 hover:bg-black/60">
                      <Github className="text-white group-hover:text-pink-400" />
                    </a>
                    <a href="https://leetcode.com/u/psumanraj_10/" target="_blank" rel="noopener" className="group inline-flex items-center justify-center h-10 w-10 rounded-md bg-black/40 border border-white/10 hover:bg-black/60">
                      <SiLeetcode className="text-yellow-400" />
                    </a>
                    <a href="https://codeforces.com/profile/sumanraj_p" target="_blank" rel="noopener" className="group inline-flex items-center justify-center h-10 w-10 rounded-md bg-black/40 border border-white/10 hover:bg-black/60">
                      <SiCodeforces className="text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.08}>
              <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]"
              >
                <div className="rounded-xl bg-gray-900/70 backdrop-blur-md p-6 md:p-8 border border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full rounded-md bg-black/40 border ${errors.name ? 'border-pink-500' : 'border-white/10'} px-3 py-3 text-white outline-none focus:ring-2 focus:ring-pink-500/60 transition-all`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-pink-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full rounded-md bg-black/40 border ${errors.email ? 'border-pink-500' : 'border-white/10'} px-3 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500/60 transition-all`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-pink-400">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full rounded-md bg-black/40 border ${errors.message ? 'border-pink-500' : 'border-white/10'} px-3 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/60 transition-all`}
                      placeholder="Tell me about your idea..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-pink-400">{errors.message}</p>}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={submitting}
                      className="relative overflow-hidden inline-flex items-center justify-center rounded-md px-6 py-3 font-tech text-white bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.25),transparent_50%)]" />
                      {submitting ? "Sending..." : "Send Message"}
                    </motion.button>
                    <span className="text-xs text-gray-400 font-tech">I usually reply within 24 hours.</span>
                  </div>
                </div>
              </motion.form>
            </Tilt>
          </div>
        </div>
      </div>

      {/* Success modal with confetti */}
      <AnimatePresence>
        {successOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSuccessOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#F72585]">
                <div className="rounded-xl bg-gray-900/90 border border-white/10 p-6 text-center">
                  <h4 className="text-white text-xl font-title">✨ Message Sent Successfully!</h4>
                  <p className="mt-2 text-gray-300">I’ll get back to you soon.</p>
                  <button onClick={() => setSuccessOpen(false)} className="mt-4 inline-flex px-4 py-2 rounded-md bg-black/40 border border-white/10 text-gray-200 hover:bg-black/60">Close</button>
                </div>
              </div>

              {/* Confetti pieces */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {confetti.map((c) => (
                  <motion.span
                    key={c.id}
                    initial={{ y: -40, x: `${c.left}%`, rotate: c.rotate }}
                    animate={{ y: "110%", rotate: c.rotate + 180 }}
                    transition={{ duration: 1.6 + c.delay, ease: "easeOut", delay: c.delay }}
                    style={{ backgroundColor: c.color, width: c.size, height: c.size }}
                    className="absolute block rounded-sm"
                  />)
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
