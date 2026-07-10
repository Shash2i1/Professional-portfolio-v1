import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { personalInfo } from "../../constants/personalInfo";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border lg:pl-14">
      <div className="section-padding !py-8 flex flex-col md:flex-row items-center justify-between gap-5 font-mono text-xs">
        <p className="text-ink-dim">
          <span className="text-term-green">$</span> echo "© {new Date().getFullYear()} {personalInfo.name}. All rights reserved."
        </p>

        <div className="flex items-center gap-4 text-lg text-ink-muted">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-term-green transition-colors">
            <FaGithub />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-term-green transition-colors">
            <FaLinkedin />
          </a>
          <a href={personalInfo.socials.email} aria-label="Email" className="hover:text-term-green transition-colors">
            <FaEnvelope />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-term-green hover:border-term-green/60 transition-colors"
        >
          <HiOutlineArrowUp />
        </button>
      </div>
    </footer>
  );
}
