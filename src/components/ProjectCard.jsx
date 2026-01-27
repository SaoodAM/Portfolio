// src/components/ProjectCard.jsx
function ProjectCard({ title, subtitle, description, tech, github, demo }) {
    return (
      <article
        className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60
                   p-5 sm:p-6 flex flex-col gap-4 transition-all duration-300
                   hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl"
      >
        {/* glow layer */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 
                        bg-gradient-to-br from-sky-500/15 via-transparent to-transparent
                        transition-opacity duration-300" />
  
        {/* content */}
        <div className="relative space-y-3">
          <header className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-400">
                {subtitle}
              </p>
            )}
          </header>
  
          <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
            {description}
          </p>
  
          {tech && (
            <p className="text-xs sm:text-[13px] text-slate-400">
              <span className="font-semibold text-slate-300">Tech:&nbsp;</span>
              {tech}
            </p>
          )}
  
          {(github || demo) && (
            <div className="flex flex-wrap gap-3 pt-1 text-sm">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-2"
                >
                  View on GitHub →
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-2"
                >
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    );
  }
  
  export default ProjectCard;
  