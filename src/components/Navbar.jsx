import { useState, useEffect } from "react";

const navItems = [
  { href: "#home",     label: "Home",     id: "home"     },
  { href: "#about",    label: "About",    id: "about"    },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills",   label: "Skills",   id: "skills"   },
  { href: "#contact",  label: "Contact",  id: "contact"  },
];

function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [activeSection, setActive]    = useState("home");
  const [scrolled, setScrolled]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 100;
      let cur = "home";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) cur = id;
      });
      setActive(cur);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-30
          flex items-center gap-1 px-3 py-2 rounded-full
          transition-all duration-300
          ${scrolled
            ? "bg-slate-950/90 backdrop-blur-2xl border border-slate-700/70 shadow-2xl shadow-black/40"
            : "bg-slate-950/50 backdrop-blur-xl border border-slate-800/50"
          }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-semibold text-sm text-slate-100 px-3 py-1 rounded-full hover:bg-slate-800/60 transition-colors"
        >
          SM
        </a>

        <span className="hidden md:block w-px h-4 bg-slate-700/80 mx-1" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map(({ href, label, id }) => {
            const active = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200
                  ${active
                    ? "text-sky-400 bg-sky-500/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[4px] ml-1 rounded-full hover:bg-slate-800/60 transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <span className="w-4 h-[1.5px] bg-slate-300" />
          <span className="w-4 h-[1.5px] bg-slate-300" />
          <span className="w-4 h-[1.5px] bg-slate-300" />
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* ── Mobile sidebar ── */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-64
          bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800/80
          p-6 flex flex-col gap-6
          transform transition-transform
          ${isOpen ? "translate-x-0 duration-300 ease-out" : "translate-x-full duration-200 ease-in"}`}
      >
        <div
          className={`flex flex-col gap-6 transition-all duration-300
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-200 tracking-wide">Navigation</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 text-xs hover:text-slate-200 hover:border-slate-500 transition-all"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map(({ href, label, id }) => {
              const active = activeSection === id;
              return (
                <a
                  key={id}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                    ${active
                      ? "text-sky-400 bg-sky-500/10 border border-sky-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? "bg-sky-400" : "bg-slate-600"}`} />
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
