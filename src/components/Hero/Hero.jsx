import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../../constants/personalInfo";
import { skillCategories } from "../../data/skillsData";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const topSkills = [
  { name: "Java · Spring Boot", level: 85 },
  { name: "React · Tailwind", level: 80 },
  { name: "AWS · Docker", level: 65 },
];

export default function Hero() {
  const typedRole = useTypingEffect(personalInfo.roles);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen pt-24 lg:pt-20">
      <div className="scanlines absolute inset-0 pointer-events-none" />

      <div className="relative grid lg:grid-cols-[1fr_360px]">
        {/* Editor pane */}
        <div className="px-6 sm:px-10 lg:px-14 py-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[13px] sm:text-sm leading-8 mb-8"
          >
            <div className="flex">
              <span className="lineno">1</span>
              <span>
                <span className="kw">public class</span>{" "}
                <span className="cls">{personalInfo.name.replace(" ", "")}</span>{" "}
                <span className="punc">{"{"}</span>
              </span>
            </div>
            <div className="flex">
              <span className="lineno">2</span>
              <span className="pl-4">
                <span className="kw">private</span> String role ={" "}
                <span className="str">"{personalInfo.title.split(" | ")[1] || personalInfo.title}"</span>;
              </span>
            </div>
            <div className="flex">
              <span className="lineno">3</span>
              <span className="pl-4 comment">
                // Graduate Engineer Trainee @ HCLTech
              </span>
            </div>
            <div className="flex">
              <span className="lineno">4</span>
              <span className="punc">{"}"}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-bright leading-tight"
          >
            {personalInfo.name}
            <span className="cursor-blink" />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 font-mono text-base sm:text-lg"
          >
            <span className="kw">const</span> role ={" "}
            <span className="str">"{typedRole}"</span>
            <span className="cursor-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-ink-muted text-sm sm:text-base leading-relaxed font-sans"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href={personalInfo.resumeUrl} className="btn-run">
              ▶ run resume.sh
            </a>
            <button onClick={() => scrollTo("projects")} className="btn-cmd">
              git checkout projects
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-cmd">
              ./contact --open
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center gap-5 text-xl text-ink-muted"
          >
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-term-green transition-colors">
              <FaGithub />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-term-green transition-colors">
              <FaLinkedin />
            </a>
            <a href={personalInfo.socials.email} aria-label="Email" className="hover:text-term-green transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>

          {/* Terminal status bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14 panel-card-soft p-4 font-mono text-xs sm:text-sm max-w-2xl"
          >
            <p>
              <span className="text-term-green">$</span> status --check
            </p>
            <p className="mt-1 text-ink-muted">
              <span className="text-term-green">&gt;</span> available_for_hire:{" "}
              <span className="str">true</span> &nbsp;|&nbsp; currently_learning:{" "}
              <span className="str">[AI, Machine Learning, Kubernetes, System Design]</span>
            </p>
          </motion.div>
        </div>

        {/* Side panel */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block border-l border-border bg-panel-deep px-6 py-10"
        >
          <p className="eyebrow-comment mb-4">// skill compile stats</p>
          <div className="space-y-4">
            {topSkills.map((s) => (
              <div key={s.name} className="panel-card p-4">
                <p className="text-xs text-ink-muted font-mono">{s.name}</p>
                <p className="text-xl font-bold text-ink-bright font-mono mt-1">{s.level}%</p>
                <div className="h-1 rounded-full bg-border mt-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-term-green rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="eyebrow-comment mt-8 mb-4">// build log</p>
          <div className="panel-card p-4 space-y-2.5 font-mono text-xs">
            <p className="text-term-green">✓ Turf Booking App — deployed</p>
            <p className="text-term-green">✓ Task Manager — deployed</p>
            <p className="text-term-yellow">◐ Blog App — in progress</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
