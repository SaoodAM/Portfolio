import TypingText from "./TypingText";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">

      {/* Animated sky glow (unchanged) */}
      <div className="absolute inset-0 z-0 animated-hero-bg opacity-50" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Fade to bg at bottom so sections blend */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-7 px-6 max-w-3xl mx-auto -mt-10 sm:-mt-16">

        {/* Status badge */}
        <motion.span
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                     border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for internships &amp; opportunities
        </motion.span>

        {/* Heading */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-sky-400/70 font-medium">
            Computer Science · University of Toronto
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]">
            Hi, I&apos;m{" "}
            <span className="animated-name-gradient bg-clip-text text-transparent">
              Saood
            </span>
          </h1>
        </motion.div>

        {/* Typing text */}
        <motion.div
          className="text-base sm:text-lg md:text-xl text-slate-400 min-h-[1.75rem]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <TypingText />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-sky-500 text-white text-sm font-semibold
                       hover:bg-sky-400 transition-all duration-200
                       hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-slate-700 text-sm text-slate-300 font-medium
                       hover:border-slate-500 hover:text-white hover:bg-slate-800/40
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-[10px] sm:text-xs text-slate-500 hover:text-slate-400 transition-colors"
      >
        <span className="tracking-[0.28em] uppercase font-medium">Scroll</span>
        <div className="w-[22px] h-[34px] rounded-full border border-slate-600/60 flex items-start justify-center p-[4px]">
          <div className="w-[4px] h-[8px] rounded-full bg-slate-400 animate-scroll-dot" />
        </div>
      </a>
    </div>
  );
}

export default Hero;
