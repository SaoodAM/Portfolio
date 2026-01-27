// src/components/About.jsx
function About() {
  return (
    <div className="min-h-[calc(100vh-40rem)] max-w-5xl mx-auto flex flex-col sm:flex-row gap-8 sm:items-stretch">
      {/* Profile picture column */}
      <div className="sm:w-64 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
        <div className="h-52 sm:h-[calc(100%-40px)] overflow-hidden rounded-2xl border border-slate-700 shadow-lg shadow-slate-950/40 bg-slate-900/40">
          <img
            src="/profile-picture.png" // <- keep this path or update to your file
            alt="Saood Mughal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text + contact info */}
      <div className="flex-1 space-y-8">
        <br />
        {/* Main paragraph */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          I&apos;m a Computer Science student at the University of Toronto
          with a strong interest in full-stack development, systems, and security.
          I like building clean, practical projects that solve real problems and
          give me a chance to apply what I learn in class. Right now I&apos;m focused
          on improving my fundamentals, shipping personal projects, and growing
          into a reliable software engineer.
        </p>
        <br />

        {/* Contact / details block */}
        <div className="pt-4 border-t border-slate-800">
          <dl className="space-y-3 text-sm sm:text-base">
            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <dt className="w-28 flex items-center gap-2 text-slate-400">
              <svg
                  className="w-4 h-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
                <span>Email</span>
              </dt>
              <dd>
                <a
                  href="mailto:saoodalimughal@gmail.com"
                  className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-2"
                >
                  saoodalimughal@gmail.com
                </a>
              </dd>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <dt className="w-28 flex items-center gap-2 text-slate-400">
                <svg
                  className="w-4 h-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <circle cx="8" cy="8" r="1" />
                  <path d="M12 16v-3.5a2 2 0 0 1 4 0V16" />
                </svg>
                <span>LinkedIn</span>
              </dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/saood-ali-mughal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-2"
                >
                  linkedin.com/in/saood-ali-mughal
                </a>
              </dd>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <dt className="w-28 flex items-center gap-2 text-slate-400">
                <svg
                  className="w-4 h-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44 0-.22-.01-.96-.01-1.74-2.26.41-2.84-.55-3.02-1.06-.1-.26-.54-1.06-.92-1.27-.31-.17-.75-.6-.01-.61.7-.01 1.2.65 1.37.92.8 1.35 2.08.97 2.59.74.08-.58.31-.97.56-1.19-2-.23-4.09-1-4.09-4.44 0-.98.35-1.78.92-2.41-.09-.23-.4-1.16.09-2.42 0 0 .75-.24 2.46.92a8.3 8.3 0 0 1 4.48 0c1.71-1.16 2.46-.92 2.46-.92.49 1.26.18 2.19.09 2.42.57.63.92 1.43.92 2.41 0 3.45-2.09 4.21-4.09 4.44.32.28.6.82.6 1.66 0 1.2-.01 2.17-.01 2.47 0 .24.17.52.62.44A9 9 0 0 0 12 3Z" />
                </svg>
                <span>GitHub</span>
              </dt>
              <dd>
                <a
                  href="https://github.com/SaoodAM"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-2"
                >
                  github.com/SaoodAM
                </a>
              </dd>
            </div>

            {/* Resume */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <dt className="w-28 flex items-center gap-2 text-slate-400">
                <svg
                  className="w-4 h-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 3h7l5 5v13H7z" />
                  <path d="M14 3v5h5" />
                </svg>
                <span>Resume</span>
              </dt>
              <dd>
                <a
                  href="/Saood_Mughal_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-2"
                >
                  View Resume (PDF)
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
