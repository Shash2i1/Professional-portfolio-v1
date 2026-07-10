import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenu,
  HiX,
  HiOutlineTerminal,
  HiOutlineSearch,
  HiOutlineCog,
} from "react-icons/hi";
import { VscSourceControl } from "react-icons/vsc";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useActiveSection } from "../../hooks/useActiveSection";

const TABS = [
  { id: "hero", label: "Portfolio.java" },
  { id: "about", label: "About.md" },
  { id: "timeline", label: "git-log" },
  { id: "skills", label: "package.json" },
  { id: "projects", label: "Projects/" },
  { id: "learning", label: "Learning.md" },
  { id: "achievements", label: "stats.log" },
  { id: "contact", label: "Contact.sh" },
];

const SIDEBAR_ICONS = [HiOutlineTerminal, HiOutlineSearch, VscSourceControl, HiOutlineCog];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useScrollProgress();
  const activeId = useActiveSection(TABS.map((t) => t.id));

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

    setIsOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      });
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-term-green transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-panel border-b border-border">
        <div className="flex items-center h-12 px-4 gap-5">
          <div className="flex items-center gap-2 shrink-0">
            <span className="traffic-dot bg-term-red" />
            <span className="traffic-dot bg-term-amber" />
            <span className="traffic-dot bg-term-green" />
          </div>

          <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`px-4 py-2.5 text-xs font-mono whitespace-nowrap rounded-t-md transition-colors border-t-2 ${activeId === tab.id
                    ? "bg-bg text-ink-bright border-term-green"
                    : "text-ink-muted border-transparent hover:text-ink"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-term-green text-bg font-mono text-xs font-semibold hover:scale-105 transition-transform"
            >
              ./contact --open
            </button>
            <button
              className="lg:hidden text-xl text-ink"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-panel border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-3 gap-1 font-mono text-sm">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => scrollTo(tab.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md transition-colors ${activeId === tab.id
                        ? "bg-bg text-term-green"
                        : "text-ink-muted"
                      }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:flex flex-col items-center gap-6 fixed left-0 top-12 bottom-0 w-14 bg-panel border-r border-border pt-6 z-40">
        {SIDEBAR_ICONS.map((Icon, i) => (
          <div
            key={i}
            className={`text-lg ${i === 0 ? "text-term-green" : "text-ink-dim"}`}
          >
            <Icon />
          </div>
        ))}
      </div>
    </header>
  );
}
