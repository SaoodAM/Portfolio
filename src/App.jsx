import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="grain min-h-screen w-full bg-slate-950 text-slate-100"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
      {/* Mouse-tracking radial glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-500"
        style={{
          background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(14,165,233,0.07), transparent 40%)`,
        }}
      />

      <Navbar />

      <section id="home" className="pt-16">
        <Hero />
      </section>

      <motion.section
        id="about"
        className="border-t border-slate-800/50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <About />
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="border-t border-slate-800/50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <Projects />
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="border-t border-slate-800/50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <Skills />
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="border-t border-slate-800/50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <Contact />
        </div>
      </motion.section>
    </div>
  );
}

export default App;
