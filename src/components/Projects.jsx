// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Nirvo – Workplace Wellness Platform"
          subtitle="AI features + performance improvements"
          description="Built AI-powered features using the OpenAI API in a 7-person Agile team, redesigned the landing page to reduce load time by 30%, and resolved critical issues like email verification and filtering."
          tech="TypeScript, React, Next.js, Python, Vercel, OpenAI API"
        />

        <ProjectCard
          title="UofT Campus Connect"
          subtitle="Full-stack web app"
          description="Full-stack app with a React front end and Node/Express backend. Implemented JWT authentication and 10+ REST API endpoints for CRUD operations, then deployed to Railway and resolved production issues."
          tech="React, Node.js, Express, Prisma, PostgreSQL, Railway"
        />

        <ProjectCard
          title="SecureNet Analyzer"
          subtitle="Network scanning + traffic analysis"
          description="Scanned 15,000+ ports with nmap to identify services and potential vulnerabilities, analyzed traffic with Wireshark across multiple scenarios, and documented mitigation strategies after testing insecure services."
          tech="Kali Linux, Nmap, Wireshark, Bash, Python, SSH"
        />

        <ProjectCard
          title="AI Paint App (Ollama)"
          subtitle="Local AI-assisted drawing"
          description="Built a lightweight paint app with an AI assistant powered by Ollama to generate prompts/ideas and help iterate on drawings locally. Focused on clean UI, fast interactions, and privacy-friendly on-device inference."
          tech="Ollama, JavaScript/React, Canvas API"
        />

        <ProjectCard
          title="Autonomous Drone AI Project"
          subtitle="Perception + control pipeline"
          description="Worked on an AI pipeline for drones that uses sensor/vision inputs to make navigation decisions and follow targets. Contributed to testing, tuning, and improving reliability across different flight scenarios."
          tech="Python, Computer Vision, Robotics/Control"
        />

        <ProjectCard
          title="Shadow Monster House"
          subtitle="RISC-V assembly game"
          description="Grid-based game built in RISC-V assembly featuring movement, fear gauge mechanics, and item interactions such as candles and matches."
          tech="RISC-V, low-level systems, game loop logic"
        />

        <ProjectCard
          title="Portfolio Website"
          subtitle="Personal site"
          description="Responsive single-page portfolio showcasing my projects, skills, and background with a custom hero animation and sidebar navigation."
          tech="React, Tailwind CSS"
          demo="https://..."
        />
      </div>
    </div>
  );
}

export default Projects;
