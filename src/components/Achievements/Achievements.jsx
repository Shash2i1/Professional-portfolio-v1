import { achievementsData } from "../../data/achievementsData";
import CounterCard from "./CounterCard";

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding lg:pl-14">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-ink-muted">$ cat stats.log</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {achievementsData.map((item, i) => (
          <CounterCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
