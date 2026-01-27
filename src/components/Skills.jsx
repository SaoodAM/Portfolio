// src/components/Skills.jsx
function Skills() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Left column: heading */}
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
        <p className="text-sm sm:text-base text-slate-400">
          A mix of technical skills and teamwork experience I use when building
          projects and working with others.
        </p>
      </div>

      {/* Right column: skill cards */}
      <div className="md:w-2/3 grid gap-6 md:grid-cols-2">
        {/* Card 1 – Software Development */}
        <article
          className="group relative rounded-2xl border border-slate-800 bg-slate-900/60
                     p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1
                     hover:border-sky-500/60 hover:shadow-xl overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                          bg-gradient-to-br from-sky-500/15 via-transparent to-transparent
                          transition-opacity duration-300" />

          <div className="relative space-y-3">
            {/* icon */}
            <div className="text-slate-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 9h18" />
                <path d="M8 15h.01M12 15h.01M16 15h.01" />
              </svg>
            </div>

            <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Software Development
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
              Writing clean, readable code in Python, Java, JavaScript, and C,
              with experience using Git, debugging tools, and modern development
              workflows.
            </p>
          </div>
        </article>

        {/* Card 2 – Web Development */}
        <article
          className="group relative rounded-2xl border border-slate-800 bg-slate-900/60
                     p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1
                     hover:border-sky-500/60 hover:shadow-xl overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                          bg-gradient-to-br from-sky-500/15 via-transparent to-transparent
                          transition-opacity duration-300" />

          <div className="relative space-y-3">
            <div className="text-slate-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
              </svg>
            </div>

            <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Web Development
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
              Building responsive front-ends with React and Tailwind CSS, and
              working with Node.js, Express, REST APIs, and databases to create
              full-stack applications.
            </p>
          </div>
        </article>

        {/* Card 3 – Systems & Security */}
        <article
          className="group relative rounded-2xl border border-slate-800 bg-slate-900/60
                     p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1
                     hover:border-sky-500/60 hover:shadow-xl overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                          bg-gradient-to-br from-sky-500/15 via-transparent to-transparent
                          transition-opacity duration-300" />

          <div className="relative space-y-3">
            <div className="text-slate-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
                <path d="M9.5 12.5 11 14l3.5-3.5" />
              </svg>
            </div>

            <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Systems &amp; Security
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
              Experience with operating systems, RISC-V assembly, basic
              networking, and introductory security concepts like vulnerabilities,
              exploits, and secure practices.
            </p>
          </div>
        </article>

        {/* Card 4 – Collaboration & Communication */}
        <article
          className="group relative rounded-2xl border border-slate-800 bg-slate-900/60
                     p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1
                     hover:border-sky-500/60 hover:shadow-xl overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                          bg-gradient-to-br from-sky-500/15 via-transparent to-transparent
                          transition-opacity duration-300" />

          <div className="relative space-y-3">
            <div className="text-slate-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="7" r="3" />
                <circle cx="17" cy="7" r="3" />
                <path d="M2 21a5 5 0 0 1 10 0" />
                <path d="M12 21a5 5 0 0 1 10 0" />
              </svg>
            </div>

            <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Collaboration &amp; Communication
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
              Comfortable working in teams, sharing progress clearly, and
              giving/receiving feedback while meeting deadlines and keeping work
              organized.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Skills;
