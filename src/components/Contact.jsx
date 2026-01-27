function Contact() {
    return (
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
        <p className="text-sm sm:text-base text-slate-300">
          Reach out if you want to talk about internships, projects, or collabs.
        </p>
  
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:saood.mughal@mail.utoronto.ca"
            className="text-sky-400 hover:text-sky-300"
          >
            Email: saood.mughal@mail.utoronto.ca
          </a>
          <a
            href="https://github.com/SaoodAM"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saood-ali-mughal"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  
  export default Contact;
  