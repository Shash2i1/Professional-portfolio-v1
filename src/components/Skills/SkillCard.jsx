import { motion } from "framer-motion";

function levelToVersion(level) {
  const major = Math.floor(level / 10);
  const minor = level % 10;
  return `^${major}.${minor}.0`;
}

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="panel-card p-4 font-mono"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-term-blue text-base shrink-0">
            <Icon />
          </span>
          <span className="text-ink-bright text-xs sm:text-[13px] truncate">
            "{skill.name}"
          </span>
        </div>
        <span className="text-term-green text-xs shrink-0 ml-2">
          {levelToVersion(skill.level)}
        </span>
      </div>
      <div className="h-1 rounded-full bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: index * 0.05 + 0.15, ease: "easeOut" }}
          className="h-full bg-term-green rounded-full"
        />
      </div>
    </motion.div>
  );
}
