import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "HOME", id: "home" },
    { href: "#about", label: "ABOUT ME", id: "about" },
    { href: "#education", label: "EDUCATION", id: "education" },
    { href: "#projects", label: "PROJECTS", id: "projects" },
    { href: "#skills", label: "SKILLS", id: "skills" },
    { href: "#contact", label: "CONTACT", id: "contact" },
  ];

  // Highlight based on scroll position
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 80; // offset for navbar height

      let current = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll(); // run once on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarLinkClasses = (id) =>
    `flex items-center gap-2 text-base font-nav ${
      activeSection === id
        ? "text-sky-400 font-medium"
        : "text-slate-300"
    }`;

  return (
    <>
      {/* Top navbar */}
      <nav className="fixed top-0 inset-x-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800 flex items-center justify-between h-16 px-4">
        {/* Name */}
        <a
          href="#home"
          className="font-semibold text-lg sm:text-xl tracking-tight"
        >
          SM
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className="inline-flex flex-col justify-center items-center w-10 h-10 text-slate-200 md:ml-3"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="w-5 h-[2px] bg-slate-200 mb-[3px]" />
          <span className="w-5 h-[2px] bg-slate-200 mb-[3px]" />
          <span className="w-5 h-[2px] bg-slate-200" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-slate-950 border-l border-slate-800 p-6 transform transition-transform
        ${
          isOpen
            ? "translate-x-0 duration-300 ease-in"
            : "translate-x-full duration-150 ease-out"
        }`}
      >
        {/* inner content animating up */}
        <div
          className={`flex flex-col gap-6 transform transition-all duration-300
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-nav font-semibold text-slate-100 text-lg">
              
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 text-xs rounded-full px-2 py-0.5 hover:text-slate-200 hover:border-slate-300 transition"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={sidebarLinkClasses(item.id)}
                  onClick={() => setIsOpen(false)}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  )}
                  {!isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  )}
                  <span>{item.label}</span>
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
