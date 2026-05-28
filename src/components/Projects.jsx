import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

/* ─────────────────────────────────────────────
   Full project data — used by cards + modal
───────────────────────────────────────────── */
const projects = [
  {
    index: 1,
    title: "VRCOM HELP INC.",
    subtitle: "Full-Stack E-Commerce Store",
    tag: "Live",
    overview: [
      "VRCOM HELP INC. is a production-grade e-commerce platform I built from scratch for an electronics accessories retailer. The core business problem: customers were walking away when products went out of stock with no way to find out when inventory returned — a direct revenue loss. I owned the entire stack, from the storefront UI to the server-side webhook infrastructure.",
      "The most complex piece was the restock notification pipeline. When inventory goes positive on any Shopify variant, a webhook fires to my endpoint. I verify each request using HMAC-SHA256 to reject spoofed payloads, query Supabase for all subscribers on that variant, and dispatch personalised transactional emails via Resend. The system handles edge cases carefully: duplicate subscriptions are deduplicated at the database level, every email includes a signed one-click unsubscribe token, and concurrent restock events are handled without duplicate sends.",
      "On the frontend I focused on the details that make a store feel polished: URL-persisted filters so sharing a product search link works correctly, back-navigation state so users return to exactly where they left off, and a fully responsive dark UI with optimistic cart updates. Payments are powered by Stripe Checkout with proper error recovery flows. The full stack runs on Vercel, with edge functions handling the webhook pipeline at low latency.",
    ],
    features: [
      "HMAC-SHA256 webhook verification — rejects spoofed Shopify inventory events before any processing",
      "Supabase restock subscription system — per-variant opt-in with signed per-user unsubscribe tokens",
      "Stripe Checkout integration with error handling and post-purchase confirmation emails via Resend",
      "URL-persisted product filters and back-navigation state for seamless browsing",
      "Shopify Storefront & Admin API for live inventory, product data, and variant management",
      "Deduplication logic prevents double-sends on concurrent restock webhook events",
      "Fully responsive dark UI with optimistic cart updates and smooth loading states",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Shopify Storefront API", "Shopify Admin API", "Supabase", "Stripe", "Resend", "Vercel"],
    demo: "https://vrcomhelp.ca",
    github: null,
    shortDesc: "Production e-commerce store with a Shopify webhook pipeline that automatically fires restock emails when inventory goes positive — HMAC-verified, per-user unsubscribe, full Stripe checkout.",
  },
  {
    index: 2,
    title: "Nirvo",
    subtitle: "Workplace Wellness Platform",
    tag: "Live",
    overview: [
      "Nirvo is a B2B workplace wellness platform helping teams track well-being, complete challenges, and surface AI-driven insights. I joined as a developer in a 7-person Agile team and worked across the frontend and AI integration layers.",
      "My main contributions centred on building out AI-powered features using the OpenAI API. I designed and implemented a natural language check-in flow that classifies employee mood trends and surfaces personalised wellness nudges based on team-wide activity patterns. The key engineering challenge was getting structured, reliable JSON output from the model — I iterated on system prompts and added output validation to handle malformed responses gracefully without surfacing errors to users.",
      "I also led a performance audit of the marketing landing page and identified three main culprits behind slow load times: render-blocking third-party scripts, oversized uncompressed images, and layout shift from async font loading. After fixing these, load time dropped by 30%. Additionally, I tracked down and resolved a critical bug in the onboarding flow where email verification tokens were expiring prematurely for users in certain timezones — a condition that had been causing measurable drop-off in new-user activation.",
    ],
    features: [
      "OpenAI API integration with structured JSON prompts for mood classification and resource recommendations",
      "Output validation layer handles malformed model responses without surfacing errors to users",
      "30% landing page load-time reduction via image optimisation, deferred scripts, and font preloading",
      "Fixed email verification token expiry bug impacting new-user activation across timezones",
      "Agile workflow — sprint planning, daily standups, and code reviews in a 7-person team",
      "Full TypeScript codebase with strict typing across API routes, hooks, and UI components",
    ],
    tech: ["TypeScript", "React", "Next.js", "Python", "OpenAI API", "Vercel"],
    demo: "https://www.nirvogroup.com/",
    github: null,
    shortDesc: "AI-powered wellness platform built in a 7-person Agile team. Shipped OpenAI-driven check-in features, cut landing page load time by 30%, and fixed a critical onboarding bug.",
  },
  {
    index: 3,
    title: "UofT Campus Connect",
    subtitle: "Full-Stack Web App",
    tag: "Completed",
    overview: [
      "Campus Connect is a full-stack social platform built for University of Toronto students — a place to discover campus events, connect with peers, and share posts within their academic community. The goal was to build something production-quality rather than a throwaway CRUD demo: real authentication, relational data, a deployed backend, and actual production issues to debug.",
      "I built the entire application solo. The database schema is designed around UofT's academic structure, with Prisma managing all queries with full type safety. The backend exposes over ten REST endpoints covering user profiles, posts, events, follows, and a basic feed algorithm that weights recency and connection proximity. JWT authentication protects all write operations, with refresh token rotation ensuring sessions stay alive without forcing frequent re-logins.",
      "After deploying to Railway, I hit and resolved several real production issues: environment variable injection, CORS configuration between the Railway backend and Vercel-hosted frontend, and connection pool sizing for the hosted Postgres instance under concurrent load. These weren't issues that show up in local development — debugging them taught me a lot about what production deployment actually involves.",
    ],
    features: [
      "JWT authentication with refresh token rotation — persistent sessions without frequent re-login prompts",
      "10+ REST API endpoints covering users, posts, events, follows, and a personalised feed",
      "PostgreSQL schema with Prisma ORM — type-safe queries and clean migration history",
      "Feed algorithm weights recency and connection proximity for relevant content surfacing",
      "Resolved real production issues: CORS configuration, env injection, and connection pool sizing on Railway",
      "Component-driven React frontend with global auth context and protected routes",
    ],
    tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Railway", "Vercel"],
    demo: null,
    github: null,
    shortDesc: "Full-stack social app for UofT students with JWT auth, 10+ REST endpoints, and a PostgreSQL backend — deployed to Railway and debugged through real production issues.",
  },
  {
    index: 4,
    title: "SecureNet Analyzer",
    subtitle: "Network Scanning & Traffic Analysis",
    tag: "Completed",
    overview: [
      "SecureNet Analyzer is a network security research project where I performed systematic vulnerability assessment on a controlled lab environment. The goal was hands-on experience with the same tooling and methodology used in real penetration testing engagements.",
      "Using Nmap, I scanned over 15,000 ports across multiple hosts and service profiles — identifying open services, version numbers, and OS fingerprints. I cross-referenced each discovered service against known CVE databases to prioritise findings by exploitability and impact severity. For each high-risk finding, I documented a concrete mitigation strategy: firewall rules, service disablement, configuration hardening, or patching guidance.",
      "With Wireshark, I captured and analysed traffic across multiple attack scenarios: plaintext FTP and Telnet sessions to demonstrate credential exposure, DNS poisoning attempts, and SYN flood patterns. The analysis built my ability to recognise anomalous traffic signatures that would trigger real-world IDS alerts. I also wrote Python and Bash automation scripts to parse Nmap XML output and generate structured HTML vulnerability reports.",
    ],
    features: [
      "15,000+ port scan across multiple hosts — service version detection and OS fingerprinting with Nmap",
      "CVE cross-referencing to rank findings by exploitability and impact before writing mitigations",
      "Wireshark traffic capture across FTP, Telnet, DNS poisoning, and SYN flood scenarios",
      "Plaintext credential recovery from unencrypted protocols to concretely demonstrate risk",
      "Python/Bash automation to parse Nmap XML output and generate structured HTML reports",
      "Documented mitigation strategy for every identified vulnerability class",
    ],
    tech: ["Kali Linux", "Nmap", "Wireshark", "Python", "Bash", "SSH"],
    demo: null,
    github: null,
    shortDesc: "Hands-on network penetration testing: 15,000+ port scans, Wireshark traffic analysis across multiple attack scenarios, CVE cross-referencing, and automated HTML vulnerability reports.",
  },
  {
    index: 5,
    title: "AI Paint App",
    subtitle: "Local AI-Assisted Drawing Tool",
    tag: "Completed",
    overview: [
      "AI Paint App is a browser-based drawing tool with an integrated AI assistant powered by Ollama — a local LLM runtime that keeps all inference on-device. The goal was to build something genuinely useful with local AI: no API costs, no rate limits, and complete privacy with near-instant responses.",
      "The drawing canvas is built on the HTML5 Canvas API with a custom rendering loop supporting multiple brush types, an eraser, colour picker, and undo history. The AI sidebar lets users describe what they want to draw in natural language — the model returns structured composition advice, colour palette suggestions, and step-by-step drawing guidance. Because Ollama runs locally, responses stream token-by-token into the sidebar almost immediately.",
      "Performance was a priority throughout. Brush interactions are throttled and rendered with requestAnimationFrame to maintain 60fps even on complex canvases with many strokes. The AI response streams progressively so there is no blank wait before content appears. The whole experience is designed to feel snappy and frictionless — the AI should feel like a drawing partner, not a loading spinner.",
    ],
    features: [
      "Ollama local inference — zero network requests, complete privacy, no API costs or rate limits",
      "Streaming AI responses — tokens render as they arrive, no full-response wait before content appears",
      "Custom Canvas API renderer with multiple brush types, eraser, colour picker, and undo stack",
      "60fps drawing performance via requestAnimationFrame and throttled pointer event handling",
      "Structured AI output — composition tips, colour palettes, and step-by-step drawing guidance",
      "Fully offline capable once Ollama and model weights are downloaded",
    ],
    tech: ["React", "Ollama", "Canvas API", "JavaScript", "HTML5"],
    demo: null,
    github: null,
    shortDesc: "Browser-based drawing tool with a streaming local LLM assistant via Ollama. All AI inference runs on-device — no API costs, no privacy concerns, sub-second responses.",
  },
  {
    index: 6,
    title: "Autonomous Drone AI",
    subtitle: "Perception & Control Pipeline",
    tag: "In Progress",
    overview: [
      "This project involves contributing to an AI-driven autonomous drone system capable of detecting, tracking, and following a target using onboard camera and sensor inputs — making real-time navigation decisions without human control input.",
      "My contributions focused on the perception layer and test infrastructure. I worked on integrating a computer vision pipeline where per-frame target detection feeds bounding box coordinates into a control loop that adjusts yaw, pitch, and throttle to keep the target centred in frame. I also helped tune PID controller parameters to reduce oscillation when the drone locked onto a fast-moving or suddenly-turning target — an iterative process that required logging flight telemetry and analysing the oscillation patterns.",
      "A significant part of my work was building testing harnesses to simulate challenging flight scenarios: wind disturbance, target occlusion, rapid direction changes, and low-contrast backgrounds that confuse the detector. These simulated stress tests surfaced failure modes that only showed up at the edges, and the iterative fix-test cycle measurably improved target-lock reliability across the hardest edge cases.",
    ],
    features: [
      "Real-time target detection feeding bounding box coordinates into a yaw/pitch/throttle control loop",
      "PID controller tuning to reduce oscillation during high-speed and sudden-direction-change tracking",
      "Telemetry logging pipeline for flight data analysis and failure mode identification",
      "Simulation harness for stress-testing edge cases: occlusion, wind disturbance, low-contrast targets",
      "Python-based perception pipeline interfacing directly with drone flight controller",
      "Iterative test-fix cycle that measurably improved target-lock reliability across edge cases",
    ],
    tech: ["Python", "OpenCV", "Computer Vision", "Control Systems", "PID", "Robotics"],
    demo: null,
    github: null,
    shortDesc: "Autonomous drone perception and control pipeline — computer vision feeds a PID-tuned flight controller, with a simulation harness for stress-testing edge-case tracking scenarios.",
  },
  {
    index: 7,
    title: "Shadow Monster House",
    subtitle: "RISC-V Assembly Game",
    tag: "Completed",
    overview: [
      "Shadow Monster House is a grid-based survival game built entirely in RISC-V assembly — no standard library, no high-level abstractions, no OS primitives. Every byte of game state, every rendered character, and every input handler was written at the register level.",
      "The game puts the player in a dark house where a fear gauge rises continuously and spikes when shadow monsters move nearby. The player must find and use items to hold back the darkness: candles reduce the fear gain rate in adjacent grid cells, but require a match to light. Managing limited matches and candle placement while navigating around monsters creates genuine tension and forces strategic decisions.",
      "Building this in bare assembly required designing a custom memory layout for all game state, implementing the call stack manually with saved register conventions, writing a game loop without timers or interrupts, and building a character renderer that maps grid state to memory-mapped terminal output. Every frame, the entire grid is recomputed and re-rendered from scratch. Getting smooth polling-based input without OS event queues required a carefully timed main loop — too fast and it burns cycles, too slow and input feels unresponsive.",
    ],
    features: [
      "Entire game in RISC-V assembly — no standard library, OS primitives, or high-level abstractions",
      "Custom memory layout for grid state, player position, inventory, fear meter, and monster positions",
      "Fear gauge mechanic — rises passively, spikes near monsters, suppressed by lit candles in adjacent cells",
      "Candle and match item system — candles require matches to light; both are limited resources",
      "Memory-mapped I/O for terminal rendering; full grid redrawn every frame from scratch",
      "Manual call stack management with saved register conventions throughout all subroutines",
      "Polling-based input loop with precision timing to balance responsiveness and CPU load",
    ],
    tech: ["RISC-V", "Assembly", "Memory-Mapped I/O", "Low-Level Systems", "Game Loop Design"],
    demo: null,
    github: null,
    shortDesc: "Grid-based survival game written entirely in RISC-V assembly. No libraries, no OS. Custom memory layout, manual call stack, memory-mapped I/O rendering, and a fear gauge mechanic.",
  },
];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   Featured card (full-width, richer layout)
───────────────────────────────────────────── */
function FeaturedCard({ project, onClick }) {
  const { index, title, subtitle, shortDesc, tech, demo } = project;
  const techItems = typeof tech === "string" ? tech.split(/,\s*/) : (tech ?? []);

  return (
    <article
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-slate-800/80
                 bg-slate-900/40 p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10
                 transition-all duration-300 cursor-pointer
                 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-950/20"
    >
      {/* Top glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />
      {/* Bg glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-gradient-to-br from-sky-500/8 via-transparent to-indigo-500/5" />

      {/* Text */}
      <div className="relative flex-1 flex flex-col gap-4">
        <div className="space-y-1">
          <span className="text-[11px] text-slate-600 font-mono">{String(index).padStart(2, "0")}</span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">{title}</h3>
          <p className="text-sm text-sky-400/80 font-medium">{subtitle}</p>
        </div>

        <p className="text-[14px] sm:text-[15px] text-slate-400 leading-relaxed">{shortDesc}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {techItems.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[11px] rounded-md bg-slate-800/70 border border-slate-700/50 text-slate-400 group-hover:border-slate-600/60 transition-colors duration-200">
              {t.trim()}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl
                         border border-sky-500/40 text-sky-400 text-sm font-medium
                         hover:bg-sky-500/10 hover:border-sky-400/60 transition-all duration-200 cursor-pointer"
            >
              Live Demo
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          )}
          <span className="text-[11px] text-slate-600 group-hover:text-slate-500 transition-colors duration-200">
            Click for full details →
          </span>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="hidden md:flex md:w-44 lg:w-52 shrink-0 items-center justify-center
                      rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/30
                      border border-slate-700/40 overflow-hidden min-h-[180px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-indigo-900/20" />
        <div className="relative flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-sky-500/30 bg-sky-500/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border border-sky-400/40 bg-sky-400/10" />
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            {[32, 48, 24].map((w, i) => (
              <div key={i} className="h-1 rounded-full bg-sky-500/25" style={{ width: `${w}px` }} />
            ))}
          </div>
          <div className="flex gap-1.5">
            {[16, 24, 12].map((w, i) => (
              <div key={i} className="h-1 rounded-full bg-indigo-500/20" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-10">
      {/* Section label */}
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        02 — Projects
      </motion.p>

      <div className="space-y-4">
        {/* Featured cards */}
        {projects.slice(0, 2).map((p, i) => (
          <motion.div
            key={p.index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <FeaturedCard project={p} onClick={() => setSelected(p)} />
          </motion.div>
        ))}

        {/* Grid cards */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.slice(2).map((p) => (
            <motion.div key={p.index} variants={cardVariant}>
              <ProjectCard
                index={p.index}
                title={p.title}
                subtitle={p.subtitle}
                description={p.shortDesc}
                tech={p.tech}
                demo={p.demo}
                github={p.github}
                onClick={() => setSelected(p)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
