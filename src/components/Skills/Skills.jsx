import { motion } from "framer-motion";
import { skillCategories } from "../../data/skillsData";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding lg:pl-14">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-ink-muted">package.json</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="panel-card-soft p-6 sm:p-8">
        <p className="font-mono text-sm text-ink-muted mb-6">
          <span className="punc">{"{"}</span>
        </p>

        <div className="space-y-10 -mt-4">
          {skillCategories.map((category, catIndex) => (
            <div key={category.id}>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-sm mb-4 pl-4"
              >
                <span className="text-term-purple">"{category.id}"</span>
                <span className="punc">: {"{"}</span>
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-8">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i + catIndex} />
                ))}
              </div>
              <p className="font-mono text-sm pl-4 mt-3 punc">{"}"}</p>
            </div>
          ))}
        </div>

        <p className="font-mono text-sm text-ink-muted mt-6">
          <span className="punc">{"}"}</span>
        </p>
      </div>
    </section>
  );
}
