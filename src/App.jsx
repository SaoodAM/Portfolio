import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <Navbar />

      {/* HERO – full screen width + gradient */}
      <section id="home" className="pt-16">
        <Hero />
      </section>

      {/* OTHER SECTIONS – full-width stripes, inner content centered */}
      <main className="pt-0">
        {/* About: dark */}
        <section id="about" className="bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <About />
          </div>
        </section>

        {/* Education: slightly lighter */}
        <section id="education" className="bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <Education />
          </div>
        </section>

        {/* Projects: dark again */}
        <section id="projects" className="bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <Projects />
          </div>
        </section>

        {/* Skills: lighter */}
        <section id="skills" className="bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <Skills />
          </div>
        </section>

        {/* Contact: dark */}
        <section id="contact" className="bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
