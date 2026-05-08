import { useEffect } from "react";
import { motion } from "framer-motion";

const tagStyle = {
  "Live":        "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  "Completed":   "border-sky-500/30     bg-sky-500/10     text-sky-400",
  "In Progress": "border-amber-500/30   bg-amber-500/10   text-amber-400",
};

function ProjectModal({ project, onClose }) {
  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  /* Lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const link = project.demo || project.github;

  return (
    /* Overlay */
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6
                 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Panel */}
      <motion.div
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto
                   bg-slate-950 sm:rounded-2xl border border-slate-700/80
                   shadow-2xl shadow-black/70"
        initial={{ opacity: 0, y: 56 }}
        animate={{ opacity: 1, y: 0, transition: { type: "spring", damping: 28, stiffness: 320 } }}
        exit={{ opacity: 0, y: 32, transition: { duration: 0.2 } }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

        {/* ── Sticky header ── */}
        <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60 px-6 py-4 flex items-start justify-between gap-4">
          <div className="space-y-0.5 min-w-0">
            <span className="text-[11px] text-slate-600 font-mono">
              {String(project.index).padStart(2, "0")}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
              {project.title}
            </h2>
            <p className="text-sm text-sky-400/80 font-medium">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full
                       border border-slate-700 text-slate-400 text-xs
                       hover:text-slate-200 hover:border-slate-500 transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* ── Body ── */}
        <div className="px-6 py-6 space-y-8">

          {/* Tag + link */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${tagStyle[project.tag] ?? tagStyle["Completed"]}`}>
              {project.tag === "Live" && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
              {project.tag === "In Progress" && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              )}
              {project.tag}
            </span>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
                           border border-sky-500/40 text-sky-400
                           hover:bg-sky-500/10 hover:border-sky-400/60 transition-all cursor-pointer"
              >
                {project.demo ? "Live Demo" : "GitHub"}
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Overview
            </h3>
            <div className="space-y-3.5">
              {project.overview.map((para, i) => (
                <p key={i} className="text-[14px] sm:text-[15px] text-slate-300 leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Key Features
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] sm:text-[14px] text-slate-300 leading-relaxed">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-sky-400/60 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[12px] rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
