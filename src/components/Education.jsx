// src/components/Education.jsx
function Education() {
  return (
    <div className="min-h-[calc(100vh-20rem)] max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Left column: heading + classes */}
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Education</h2>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-2">
            Classes
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-300">
            <li>Software Design</li>
            <li>Software Tools & System Programming</li>
            <li>Software Engineering</li>
            <li>Web Programming</li>
            <li>Data Structures & Analysis</li>
            <li>Introduction to Databases</li>
            <li>Computer Organization</li>
            <li>Operating Systems</li>
            <li>Algorithm Design & Analysis</li>
            <li>Theory of Computation</li>
            <li>Information Security</li>
            <li>Machine Learning</li>
            <li>Statistics I</li>
            <li>Multivariable Calculus</li>
          </ul>
        </div>
      </div>

      {/* Right column: degree cards */}
      <div className="md:w-2/3 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Degree card 1 */}
        <article
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 flex flex-col gap-4
             transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-sky-500/15 via-transparent to-transparent transition-opacity duration-300" />{" "}
          <header className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
              Honours Bachelor of Science (HBSc) in Computer Science
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-[0.15em]">
              University of Toronto
            </p>
            <br />
            <span className="inline-flex px-3 py-1 mt-2 rounded-full border border-slate-700 text-xs text-slate-300 bg-slate-950/60">
              September 2023 – Present
            </span>
          </header>

          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
            <li>
              Specialist in Computer Science with interest in full-stack,
              systems, and security
            </li>
            <li>
              Building personal projects to apply course concepts in real
              scenarios
            </li>
            <li>
              Developing strong foundations in algorithms, data structures, and
              software design
            </li>
          </ul>
        </article>

        {/* Optional: second card (e.g., high school) */}
        <article
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 flex flex-col gap-4
             transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-sky-500/15 via-transparent to-transparent transition-opacity duration-300" />

          <header className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
              Ontario Secondary School Diploma
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-[0.15em]">
              Glenforest Secondary School
            </p>
            <br />
            <span className="inline-flex px-3 py-1 mt-2 rounded-full border border-slate-700 text-xs text-slate-300 bg-slate-950/60">
              Graduated: 2023
            </span>
          </header>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
            <li>
              Graduated with strong performance in math and computer science
              courses
            </li>
            <li>
              Involved in tech-related clubs / activities (e.g., coding club,
              robotics){" "}
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Education;
