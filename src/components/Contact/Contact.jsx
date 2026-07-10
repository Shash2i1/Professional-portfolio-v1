import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../constants/personalInfo";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section id="contact" className="relative section-padding lg:pl-14">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-ink-muted">Contact.sh</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl">
        {/* whoami info panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 panel-card p-6 font-mono text-sm"
        >
          <p className="text-term-green mb-4">$ whoami</p>
          <div className="space-y-3 pl-2">
            <p><span className="text-ink-muted">email</span> <span className="punc">:</span> <span className="text-term-blue">{personalInfo.email}</span></p>
            <p><span className="text-ink-muted">phone</span> <span className="punc">:</span> <span className="text-term-blue">{personalInfo.phone}</span></p>
            <p><span className="text-ink-muted">location</span> <span className="punc">:</span> <span className="text-term-blue">{personalInfo.location}</span></p>
          </div>

          <p className="text-term-green mt-6 mb-3">$ open --socials</p>
          <div className="flex items-center gap-3 pl-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center text-lg text-ink-muted hover:text-term-green hover:border-term-green/50 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center text-lg text-ink-muted hover:text-term-green hover:border-term-green/50 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* SSH-style form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 panel-card p-6 font-mono text-sm"
        >
          <p className="text-term-green mb-5">$ ssh shashank@portfolio.dev</p>

          <label className="block text-ink-muted text-xs mb-1.5" htmlFor="name">
            name:
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="your_name"
            className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-ink placeholder:text-ink-dim focus:border-term-green/60 outline-none transition-colors mb-4"
          />

          <label className="block text-ink-muted text-xs mb-1.5" htmlFor="email">
            email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-ink placeholder:text-ink-dim focus:border-term-green/60 outline-none transition-colors mb-4"
          />

          <label className="block text-ink-muted text-xs mb-1.5" htmlFor="message">
            message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-ink placeholder:text-ink-dim focus:border-term-green/60 outline-none transition-colors resize-none mb-5"
          />

          <button type="submit" className="btn-run w-full justify-center">
            {status === "sent" ? "✓ message sent" : "▶ send --message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
