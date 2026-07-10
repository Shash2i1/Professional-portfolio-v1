import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding lg:pl-14">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-ink-muted">~/Projects $ ls -la</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
