import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";
import { VscRepo } from "react-icons/vsc";

const LANG_COLORS = {
  Java: "#f89820",
  "Spring Boot": "#4ade80",
  React: "#60a5fa",
  JavaScript: "#facc15",
  MySQL: "#60a5fa",
  PostgreSQL: "#818cf8",
  "Tailwind CSS": "#22d3ee",
  "REST API": "#c084fc",
  "Spring MVC": "#4ade80",
  Hibernate: "#f59e0b",
  "Framer Motion": "#f472b6",
};

export default function ProjectCard({ project, index }) {
  const primaryLang = project.tech[0];
  const fakeStars = 3 + ((index * 7) % 24);
  const fakeForks = 1 + ((index * 3) % 8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4, borderColor: "#4ade80" }}
      className="panel-card p-5 flex flex-col h-full transition-colors"
    >
      <div className="flex items-start gap-2.5 mb-2">
        <VscRepo className="text-ink-muted text-lg mt-0.5 shrink-0" />
        <div className="min-w-0">
          <p className="font-mono text-sm text-term-blue truncate">
            shashank-patgar / <span className="text-ink-bright">{project.id}</span>
          </p>
        </div>
      </div>

      <p className="text-ink-muted text-sm leading-relaxed font-sans mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-bg border border-border text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-ink-muted font-mono mb-4">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ background: LANG_COLORS[primaryLang] || "#71717a" }}
          />
          {primaryLang}
        </span>
        <span className="flex items-center gap-1">
          <FaStar className="text-term-yellow" /> {fakeStars}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch /> {fakeForks}
        </span>
      </div>

      <div className="flex items-center gap-2.5 mt-auto">
        <a
          href={project.github}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md text-xs font-mono border border-border-strong text-ink hover:border-term-green/60 hover:text-term-green transition-colors"
        >
          <FaGithub /> Code
        </a>
        <a
          href={project.demo}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md text-xs font-mono bg-term-green text-bg font-semibold hover:scale-[1.02] transition-transform"
        >
          <FaExternalLinkAlt className="text-[10px]" /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}
