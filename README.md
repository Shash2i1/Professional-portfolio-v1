# Shashank Patgar — Portfolio

A dark, glassmorphic, motion-rich personal portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Tech Stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  components/
    Hero/          Landing section with typing effect + CTAs
    About/         About Me animated cards
    Timeline/      Vertical experience timeline
    Skills/        Skill cards grouped by category, with progress bars
    Projects/      Project showcase cards
    Learning/      Rotating orbit of technologies currently being learned
    Achievements/  Animated counters
    Contact/       Glassmorphism contact form
    Footer/        Footer with back-to-top
    Navbar/        Sticky nav with scroll progress + active section highlight
    Loader/        Initial loading screen
    Shared/        SectionTitle, ParticleField, CursorGlow (reused across sections)
  constants/       Personal info + about card content
  data/            Timeline, skills, projects, achievements data
  hooks/           useScrollProgress, useActiveSection, useCountUp, useTypingEffect
  styles/          (reserved for additional global styles)
  App.jsx
  main.jsx
```

## Customizing content

All editable content lives in `src/constants/` and `src/data/` — update names, bios, skills,
projects, and timeline entries there without touching component code.

## Notes

- All background motion (particles, grid, glow) is CSS/SVG-based — no canvas or heavy JS animation loops.
- The contact form is wired to local state only; connect it to an email service (e.g. Formspree, EmailJS)
  or your own backend endpoint in `src/components/Contact/Contact.jsx` to make it functional.
- Replace the placeholder resume link, social URLs, and email/phone in `src/constants/personalInfo.js`.
- Reduced-motion preference is respected globally (see `src/index.css`).
