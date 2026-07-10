import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg font-mono"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-term-green text-sm mb-5"
          >
            $ ./boot-portfolio.sh
          </motion.div>
          <div className="relative w-56 h-1.5 rounded-full bg-panel overflow-hidden border border-border">
            <motion.div
              className="absolute inset-y-0 left-0 bg-term-green rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 text-xs text-ink-dim">compiling assets...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
