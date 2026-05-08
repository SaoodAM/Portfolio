import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    href: "mailto:saoodalimughal@gmail.com",
    display: "saoodalimughal@gmail.com",
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3,7 12,13 21,7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/SaoodAM",
    display: "github.com/SaoodAM",
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44 0-.22-.01-.96-.01-1.74-2.26.41-2.84-.55-3.02-1.06-.1-.26-.54-1.06-.92-1.27-.31-.17-.75-.6-.01-.61.7-.01 1.2.65 1.37.92.8 1.35 2.08.97 2.59.74.08-.58.31-.97.56-1.19-2-.23-4.09-1-4.09-4.44 0-.98.35-1.78.92-2.41-.09-.23-.4-1.16.09-2.42 0 0 .75-.24 2.46.92a8.3 8.3 0 0 1 4.48 0c1.71-1.16 2.46-.92 2.46-.92.49 1.26.18 2.19.09 2.42.57.63.92 1.43.92 2.41 0 3.45-2.09 4.21-4.09 4.44.32.28.6.82.6 1.66 0 1.2-.01 2.17-.01 2.47 0 .24.17.52.62.44A9 9 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saood-ali-mughal",
    display: "linkedin.com/in/saood-ali-mughal",
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <circle cx="8" cy="8" r="1" />
        <path d="M12 16v-3.5a2 2 0 0 1 4 0V16" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "/Saood_Mughal_Resume.pdf",
    display: "View Resume (PDF)",
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M14 3v5h5" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <div className="space-y-10">
      {/* Section label */}
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        04 — Contact
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">

        {/* Left: big heading + blurb */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Let&apos;s build{" "}
            <br className="hidden sm:block" />
            <span className="contact-gradient">something great.</span>
          </h2>

          <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed max-w-md">
            I&apos;m currently open to internships and full-time opportunities. Whether
            you have a project in mind or just want to say hello — my inbox is
            always open.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:saoodalimughal@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
                       bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold
                       transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25
                       hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3,7 12,13 21,7" />
            </svg>
            Send me an email
          </a>
        </motion.div>

        {/* Right: link pills */}
        <motion.div
          className="flex flex-col gap-2.5"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
        >
          {links.map(({ label, href, display, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-xl
                         border border-slate-800/80 bg-slate-900/30
                         hover:border-sky-500/40 hover:bg-sky-500/5
                         transition-all duration-200"
            >
              <span className="text-slate-500 group-hover:text-sky-400 transition-colors duration-200">
                {icon}
              </span>
              <div className="min-w-0">
                <div className="text-[11px] text-slate-600 uppercase tracking-wider font-medium">{label}</div>
                <div className="text-[13px] text-slate-300 group-hover:text-sky-300 transition-colors duration-200 truncate">
                  {display}
                </div>
              </div>
              <svg
                className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-all duration-200 ml-auto shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer line */}
      <motion.div
        className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-[12px] text-slate-600">
          © {new Date().getFullYear()} Saood Ali Mughal
        </span>
        <span className="text-[12px] text-slate-600">
          Built with React &amp; Tailwind CSS
        </span>
      </motion.div>
    </div>
  );
}

export default Contact;
