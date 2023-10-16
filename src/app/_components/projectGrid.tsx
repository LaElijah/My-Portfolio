import Project from "./elements/project";
import styles from "@/app/_styles/components/projectGrid.module.scss";
import { projects } from "../_utils/data/projects";
import Content from "@/app/_components/elements/content"


export default function ProjectGrid() {

  return (
    <Content>
      <h2 className="label">My projects_</h2>
      <section className={styles.container}>
        {projects.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </section>
    </Content>
  );
}
