import { motion } from "framer-motion";
import { learningTech } from "../../data/skillsData";

const PROGRESS = [42, 47, 55, 50, 35];

export default function Learning() {
  return (
    <section id="learning" className="relative section-padding lg:pl-14">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-ink-muted">$ npm install --currently-learning</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="panel-card-soft p-6 sm:p-8 max-w-3xl font-mono text-sm">
        <p className="text-ink-muted mb-6">
          <span className="text-term-green">$</span> npm install {learningTech.map((t) => t.name.toLowerCase().replace(/\s/g, "-")).join(" ")}
        </p>

        <div className="space-y-5">
          {learningTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-2.5 text-ink">
                  <tech.icon className="text-term-blue" />
                  installing {tech.name.toLowerCase()}...
                </span>
                <span className="text-ink-muted text-xs">{PROGRESS[i]}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${PROGRESS[i]}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.1, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                  className="h-full bg-term-blue rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-ink-dim text-xs mt-7">
          <span className="text-term-yellow">⚠</span> These packages are still resolving — check back for updates.
        </p>
      </div>
    </section>
  );
}
