import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    color: "sky",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "Bash", "RISC-V"],
  },
  {
    label: "Frontend",
    color: "violet",
    items: ["React", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML / CSS"],
  },
  {
    label: "Backend",
    color: "emerald",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "Webhooks", "HMAC Auth"],
  },
  {
    label: "Databases & Cloud",
    color: "amber",
    items: ["PostgreSQL", "Supabase", "Vercel", "Railway", "Stripe", "Resend"],
  },
  {
    label: "Tools & Other",
    color: "rose",
    items: ["Git", "Kali Linux", "Nmap", "Wireshark", "OpenAI API", "Shopify API"],
  },
];

const colorMap = {
  sky:     { chip: "bg-sky-500/10    border-sky-500/20    text-sky-300",    dot: "bg-sky-400"     },
  violet:  { chip: "bg-violet-500/10 border-violet-500/20 text-violet-300", dot: "bg-violet-400"  },
  emerald: { chip: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", dot: "bg-emerald-400" },
  amber:   { chip: "bg-amber-500/10  border-amber-500/20  text-amber-300",  dot: "bg-amber-400"   },
  rose:    { chip: "bg-rose-500/10   border-rose-500/20   text-rose-300",   dot: "bg-rose-400"    },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rowVariant = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Skills() {
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
        03 — Skills
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">

        {/* Left: heading */}
        <motion.div
          className="space-y-4 md:sticky md:top-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Tech &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              Tools
            </span>
          </h2>
          <p className="text-slate-400 text-[14px] sm:text-sm leading-relaxed">
            A snapshot of everything I&apos;ve used to build and ship real projects.
          </p>
        </motion.div>

        {/* Right: skill groups */}
        <motion.div
          className="space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skillGroups.map(({ label, color, items }) => {
            const { chip, dot } = colorMap[color];
            return (
              <motion.div
                key={label}
                variants={rowVariant}
                className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6
                           rounded-2xl border border-slate-800/60 bg-slate-900/30 p-5
                           hover:border-slate-700/80 hover:bg-slate-900/50 transition-all duration-200"
              >
                {/* Category label */}
                <div className="flex items-center gap-2 sm:w-36 shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase">
                    {label}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-[12px] font-medium rounded-lg border transition-all duration-200 ${chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
