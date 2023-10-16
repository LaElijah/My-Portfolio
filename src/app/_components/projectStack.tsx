import { projects } from "../_utils/data/projects";
import ProjectBar from "./elements/projectBar";

export default function ProjectStack() {
  return (
    <div>
      {projects.map(({ favorite, ...project }: ProjectItem) => {
        if (favorite) return <ProjectBar {...project} key={project.title} />;
      })}
    </div>
  );
}
