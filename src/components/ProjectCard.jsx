function ProjectCard({ index, title, subtitle, description, tech, github, demo, onClick }) {
  const techItems = typeof tech === "string" ? tech.split(/,\s*/) : (tech ?? []);
  const link = demo && demo !== "https://..." ? demo : github;

  return (
    <article
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-slate-800/80
                 bg-slate-900/40 p-5 sm:p-6 flex flex-col gap-4
                 transition-all duration-300 ease-out cursor-pointer
                 hover:-translate-y-1 hover:border-sky-500/40
                 hover:shadow-2xl hover:shadow-sky-950/20"
    >
      {/* Top edge glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />

      {/* Bg glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-gradient-to-br from-sky-500/8 via-transparent to-indigo-500/5" />

      <div className="relative flex flex-col gap-4 h-full">

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 min-w-0">
            {index != null && (
              <span className="text-[11px] text-slate-600 font-mono tabular-nums">
                {String(index).padStart(2, "0")}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-sky-400/80 font-medium">{subtitle}</p>
            )}
          </div>

          {/* Arrow — opens link, not modal */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${title}`}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full
                         border border-slate-700/80 text-slate-500
                         hover:text-sky-400 hover:border-sky-500/60 hover:bg-sky-500/10
                         transition-all duration-200 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-[13.5px] sm:text-sm text-slate-400 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech chips */}
        {techItems.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {techItems.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[11px] rounded-md
                           bg-slate-800/70 border border-slate-700/50 text-slate-400
                           group-hover:border-slate-600/60 transition-colors duration-200"
              >
                {t.trim()}
              </span>
            ))}
          </div>
        )}

        {/* "Details" hint */}
        <p className="text-[11px] text-slate-600 group-hover:text-slate-500 transition-colors duration-200 -mb-1">
          Click for full details →
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;
