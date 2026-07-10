import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";

export default function CounterCard({ item, index }) {
  const { ref, value } = useCountUp(item.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="panel-card p-6 font-mono"
    >
      <p className="text-ink-dim text-xs mb-2">
        {item.label.toLowerCase().replace(/\s/g, "_")} ={" "}
      </p>
      <p className="text-3xl sm:text-4xl font-bold text-term-green">
        {value}
        {item.suffix}
      </p>
    </motion.div>
  );
}
