import { motion } from "framer-motion";
import { personalInfo, aboutCards } from "../../constants/personalInfo";

export default function About() {
  return (
    <section id="about" className="relative section-padding lg:pl-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-10"
      >
        <span className="font-mono text-xs text-ink-muted">About.md</span>
        <span className="h-px flex-1 bg-border" />
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Rendered markdown-style panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 panel-card p-6 sm:p-8 font-mono text-[13px] sm:text-sm leading-8"
        >
          <p className="text-term-purple text-lg font-bold mb-4"># From electronics to enterprise software</p>
          {personalInfo.about.map((para, i) => (
            <p key={i} className="text-ink mb-4 font-sans text-sm leading-relaxed">
              <span className="text-ink-dim font-mono mr-1">{">"}</span>
              {para}
            </p>
          ))}
          <p className="text-term-green font-sans text-sm leading-relaxed mt-6 border-t border-border pt-4">
            <span className="text-ink-dim font-mono mr-1">{"//"}</span>
            {personalInfo.goal}
          </p>
        </motion.div>

        {/* Metadata / frontmatter panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 panel-card p-6 font-mono text-xs sm:text-[13px]"
        >
          <p className="text-ink-muted mb-3">// metadata.json</p>
          <p className="text-ink-muted">{"{"}</p>
          {aboutCards.map((card, i) => (
            <div key={card.id} className="pl-4 py-2 border-l border-border/60 ml-1">
              <p>
                <span className="text-term-blue">"{card.label.toLowerCase().replace(/\s/g, "_")}"</span>
                <span className="punc">: </span>
                <span className="text-term-green">"{card.value}"</span>
                <span className="punc">{i < aboutCards.length - 1 ? "," : ""}</span>
              </p>
              <p className="text-ink-dim text-[11px] mt-1 font-sans leading-relaxed">
                {card.detail}
              </p>
            </div>
          ))}
          <p className="text-ink-muted mt-1">{"}"}</p>
        </motion.div>
      </div>
    </section>
  );
}
