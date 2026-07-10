import { motion } from "framer-motion";
import { timelineData } from "../../data/timelineData";

function fakeHash(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).slice(0, 7);
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative section-padding lg:pl-14">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-ink-muted">$ git log --oneline --graph</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="panel-card p-6 sm:p-8 max-w-3xl">
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-8">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 font-mono text-sm"
              >
                <span className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full bg-bg border-2 border-term-green" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-term-yellow">{fakeHash(item.id + item.year)}</span>
                  <span className="text-ink-bright font-semibold">{item.title}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-bg border border-border text-term-blue">
                    {item.tag}
                  </span>
                </div>
                <p className="text-ink-muted text-xs mt-1.5 font-sans">
                  {item.org} <span className="text-ink-dim">· {item.year}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
