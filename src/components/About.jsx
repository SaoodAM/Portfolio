import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0  },
  transition: { duration: 0.55, ease: "easeOut", delay },
  viewport:   { once: true },
});

const stats = [
  { value: "6+",    label: "Projects built"  },
  { value: "CS",    label: "@ UofT"          },
  { value: "F/S",   label: "Full-Stack"      },
  { value: "Open",  label: "To internships"  },
];

const links = [
  {
    label: "Email",
    display: "saoodalimughal@gmail.com",
    href: "mailto:saoodalimughal@gmail.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3,7 12,13 21,7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    display: "saood-ali-mughal",
    href: "https://www.linkedin.com/in/saood-ali-mughal",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <circle cx="8" cy="8" r="1" />
        <path d="M12 16v-3.5a2 2 0 0 1 4 0V16" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    display: "SaoodAM",
    href: "https://github.com/SaoodAM",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44 0-.22-.01-.96-.01-1.74-2.26.41-2.84-.55-3.02-1.06-.1-.26-.54-1.06-.92-1.27-.31-.17-.75-.6-.01-.61.7-.01 1.2.65 1.37.92.8 1.35 2.08.97 2.59.74.08-.58.31-.97.56-1.19-2-.23-4.09-1-4.09-4.44 0-.98.35-1.78.92-2.41-.09-.23-.4-1.16.09-2.42 0 0 .75-.24 2.46.92a8.3 8.3 0 0 1 4.48 0c1.71-1.16 2.46-.92 2.46-.92.49 1.26.18 2.19.09 2.42.57.63.92 1.43.92 2.41 0 3.45-2.09 4.21-4.09 4.44.32.28.6.82.6 1.66 0 1.2-.01 2.17-.01 2.47 0 .24.17.52.62.44A9 9 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    display: "View PDF",
    href: "/Saood_Mughal_Resume.pdf",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M14 3v5h5" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
];

function About() {
  return (
    <div className="space-y-10">
      {/* Section label */}
      <motion.p className="section-label" {...fadeUp(0)}>
        01 — About
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-16 items-start">

        {/* ── Left column: image + stats ── */}
        <motion.div className="space-y-4" {...fadeUp(0.1)}>
          {/* Profile image */}
          <div className="group relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/40 aspect-[4/5]">
              <img
                src="/profile-picture.png"
                alt="Saood Mughal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-2">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 text-center
                           hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-200"
              >
                <div className="text-base font-bold text-sky-400">{value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right column: bio + links ── */}
        <motion.div className="space-y-8" {...fadeUp(0.2)}>
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight">
              I build things that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                actually work.
              </span>
            </h2>

            <p className="text-slate-300 leading-[1.8] text-[15px] sm:text-base">
              I&apos;m a Computer Science student at the University of Toronto focused on
              building full-stack applications and systems that solve real problems. I&apos;ve
              worked on projects ranging from scalable web platforms to low-level systems
              and security tools.
            </p>
            <p className="text-slate-400 leading-[1.8] text-[15px] sm:text-base">
              I enjoy taking ideas from concept to deployment — improving performance,
              creating clean interfaces, and shipping things that actually get used. Right
              now I&apos;m focused on strengthening my fundamentals and growing into a
              reliable software engineer.
            </p>
          </div>

          {/* Contact links */}
          <div className="border-t border-slate-800/60 pt-6 space-y-3">
            {links.map(({ label, display, href, icon }) => (
              <div key={label} className="flex items-center gap-4 group/link">
                <span className="w-24 flex items-center gap-2 text-[13px] text-slate-500 shrink-0">
                  <span className="text-slate-600 group-hover/link:text-slate-400 transition-colors">{icon}</span>
                  {label}
                </span>
                <a
                  href={href}
                  target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 text-sm hover:underline underline-offset-2 transition-colors truncate"
                >
                  {display}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
