import { projects } from "../_utils/data/projects";
import ProjectBar from "./elements/projectBar";
import styles from "@/app/_styles/components/projectStack.module.scss"
export default function ProjectStack() {
  return (
    <div className={styles.container}>
      {projects.map(({ favorite, ...project }: ProjectItem) => {
        if (favorite) return <ProjectBar {...project} key={project.title} />;
      })}
    </div>
  );
}
